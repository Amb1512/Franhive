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
	} = request.body ?? {};

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

	let delivery;
	let deliveryResult = {};

	try {
		delivery = await fetch("https://form.taxi/s/dxvuqfqw", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formData,
		});
		deliveryResult = await delivery.json();
	} catch {
		return response.status(502).json({
			success: false,
			message: "The form server is unavailable. Please try again or email info@franhive.com.",
		});
	}

	const accepted = delivery.ok && (deliveryResult.success === true || deliveryResult.success === "true");
	if (!accepted) {
		return response.status(502).json({
			success: false,
			message: deliveryResult.error_msg || deliveryResult.message || "The enquiry could not be submitted. Please try again.",
		});
	}

	return response.status(200).json({ success: true });
}
