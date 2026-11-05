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
