export default function handler(request, response) {
	if (request.method !== "GET") {
		response.setHeader("Allow", "GET");
		return response.status(405).json({ success: false, message: "Method not allowed." });
	}

	const siteKey =
		process.env.TURNSTILE_SITE_KEY ||
		process.env.VITE_TURNSTILE_SITE_KEY ||
		"";

	response.setHeader("Cache-Control", "no-store");

	if (!siteKey) {
		return response.status(200).json({
			success: false,
			siteKey: "",
			message: "The security check is not configured yet.",
		});
	}

	return response.status(200).json({
		success: true,
		siteKey,
	});
}
