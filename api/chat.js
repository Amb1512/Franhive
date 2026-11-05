const SITE_KNOWLEDGE = `
FranHive is a technology and digital business solutions company.
Services: customised CRM and Zoho-style business automation; software engineering; responsive website development and hosting; digital growth including SEO, PPC and social media marketing; business workflow automation; online training and support.
CRM capabilities: lead management, sales pipelines, customer records, follow-ups, approvals, reports, dashboards, integrations and team collaboration.
Website pages and industries include retail, restaurant, childcare, fitness, real estate, hospitals, health and beauty, transport, housekeeping, books, education, electronics, jewellery, mobile phones, footwear, travel and event planning.
Contact: info@franhive.com. The company provides tailored demonstrations and project estimates.
`;

export default async function handler(request, response) {
	if (request.method !== "POST") {
		response.setHeader("Allow", "POST");
		return response.status(405).json({ success: false, message: "Method not allowed." });
	}

	const { messages = [] } = request.body || {};
	if (!Array.isArray(messages) || messages.length === 0) {
		return response.status(400).json({ success: false, message: "Messages are required." });
	}

	const safeMessages = messages
		.slice(-10)
		.filter((item) => item && ["user", "assistant"].includes(item.role))
		.map((item) => ({
			role: item.role,
			content: String(item.content || "").slice(0, 2000),
		}))
		.filter((item) => item.content);

	const apiKey =
		process.env.GROQ_API_KEY ||
		process.env.XAI_API_KEY ||
		process.env.OPENAI_API_KEY ||
		process.env.AI_API_KEY;
	if (!apiKey) {
		return response.status(503).json({
			success: false,
			message: "AI provider is not configured. Set GROQ_API_KEY in the server environment and redeploy.",
		});
	}

	const baseUrl = (
		process.env.GROQ_BASE_URL ||
		process.env.XAI_BASE_URL ||
		process.env.OPENAI_BASE_URL ||
		(process.env.GROQ_API_KEY
			? "https://api.groq.com/openai/v1"
			: process.env.XAI_API_KEY
				? "https://api.x.ai/v1"
				: "https://api.openai.com/v1")
	).replace(/\/$/, "");
	const model =
		process.env.GROQ_MODEL ||
		process.env.XAI_MODEL ||
		process.env.OPENAI_MODEL ||
		(process.env.GROQ_API_KEY
			? "qwen/qwen3.8-27b"
			: process.env.XAI_API_KEY
				? "grok-3-mini"
				: "gpt-4o-mini");

	try {
		const delivery = await fetch(`${baseUrl}/chat/completions`, {
			method: "POST",
			headers: {
				"Authorization": "Bearer " + apiKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model,
				temperature: 0.2,
				messages: [
					{
						role: "system",
						content: `You are FranHive's business assistant for its website visitors. Answer accurately and concisely using this verified website information: ${SITE_KNOWLEDGE} Do not invent services, prices, timelines, integrations, certifications or customer claims. Ask one useful clarifying question when details are missing. For demonstrations, enquiries or estimates, offer to collect the visitor's name, email, phone and requirement. Never request passwords, payment details or sensitive personal information.`,
					},
					...safeMessages,
			],
			}),
		});

		const result = await delivery.json();
		if (!delivery.ok) {
			return response.status(502).json({
				success: false,
				message: result.error?.message || "The AI service is temporarily unavailable.",
			});
		}

		const reply = result.choices?.[0]?.message?.content?.trim();
		if (!reply) {
			return response.status(502).json({ success: false, message: "The AI returned an empty response." });
		}

		return response.status(200).json({ success: true, reply });
	} catch {
		return response.status(502).json({
			success: false,
			message: "The AI service could not be reached.",
		});
	}
}
