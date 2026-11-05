export default async function handler(request, response) {
	if (request.method !== "POST") {
		response.setHeader("Allow", "POST");
		return response.status(405).json({ success: false, message: "Method not allowed." });
	}

	const {
		name,
		company,
		email,
		phone,
		service,
		message,
		_subject,
		_replyto,
	} = request.body;

	if (!name || String(name).trim().length < 2) {
		return response.status(400).json({ success: false, message: "Please provide your name." });
	}
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
		return response.status(400).json({ success: false, message: "Please provide a valid email address." });
	}
	if (!message || String(message).trim().length < 5) {
		return response.status(400).json({ success: false, message: "Please describe your requirement." });
	}

	const formData = new URLSearchParams({
		name: name || "",
		company: company || "",
		email: email || "",
		phone: phone || "",
		service: service || "",
		message: message || "",
		_subject: _subject || "New FranHive website enquiry",
		_replyto: _replyto || email || "",
	});

	const delivery = await fetch("https://formsubmit.co/ajax/info@franhive.com", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: formData,
	});

	const deliveryResult = await delivery.json();
	if (!delivery.ok || deliveryResult.success === false) {
		return response.status(502).json({
			success: false,
			message: "The enquiry could not be submitted. Please try again.",
		});
	}

	return response.status(200).json({ success: true });
}
