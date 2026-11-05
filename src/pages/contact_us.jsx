import { useState } from "react";
import "./contact_us.css";

export default function ContactUs() {
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		email: "",
		phone: "",
	});

	const handleTextChange = (event) => {
		const { name, value } = event.currentTarget;
		let sanitizedValue = value;

		if (name === "name" || name === "company") {
			sanitizedValue = value.replace(/[0-9]/g, "").slice(0, 25);
		}

		if (name === "phone") {
			sanitizedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
		}

		setFormData((current) => ({
			...current,
			[name]: sanitizedValue,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		setSubmitError("");

		const form = event.currentTarget;
		const data = new FormData(form);

		try {
			const payload = Object.fromEntries(data.entries());

			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				let message = "The enquiry could not be submitted.";
				try {
					const result = await response.json();
					if (result.message) message = result.message;
				} catch {
					message = "The form server is unavailable. Please try again or email info@franhive.com.";
				}
				throw new Error(message);
			}

			const result = await response.json();
			if (!result.success) {
				throw new Error("The enquiry could not be submitted.");
			}

			setSubmitted(true);
			setFormData({
				name: "",
				company: "",
				email: "",
				phone: "",
			});
			form.reset();
		} catch (error) {
			if (error instanceof TypeError) {
				setSubmitError("The form server is unavailable. Please try again or email info@franhive.com directly.");
			} else {
				setSubmitError(error.message || "Please try again or email info@franhive.com directly.");
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="contact-page">
			<section className="contact-hero">
				<div className="contact-hero-inner">
					<div className="contact-eyebrow"><span />CONTACT FRANHIVE</div>
					<h1>Let&apos;s build something <span>that works for you.</span></h1>
					<p>
						Have a business challenge, a technology requirement or an idea
						you want to explore? Tell us what you&apos;re working on and let&apos;s
						find the right solution together.
					</p>
				</div>
			</section>

			<section className="contact-section">
				<div className="contact-container contact-grid">
					<div className="contact-info">
						<div className="contact-eyebrow"><span />GET IN TOUCH</div>
						<h2>Tell us what<br />you&apos;re <span>building.</span></h2>
						<p className="contact-intro">
							Whether you need a customised CRM, business software, website,
							automation or digital growth support, our team can help you
							explore the right approach.
						</p>

						<div className="contact-details">
							<div className="contact-detail">
								<div className="contact-icon">✉</div>
								<div><small>EMAIL</small><a href="mailto:info@franhive.com">info@franhive.com</a></div>
							</div>
							<div className="contact-detail">
								<div className="contact-icon">◎</div>
								<div><small>WEBSITE</small><span>www.franhive.com</span></div>
							</div>
							<div className="contact-detail">
								<div className="contact-icon">↗</div>
								<div><small>BUSINESS ENQUIRIES</small><span>Technology &amp; Digital Business Solutions</span></div>
							</div>
						</div>
					</div>

					<div className="contact-form-wrapper">
						<div className="contact-form-header"><span>01</span><h3>Start a conversation</h3></div>
						{submitted ? (
							<div className="contact-success" role="status">
								<strong>Thanks for reaching out.</strong>
								<p>Your enquiry has been received. We&apos;ll get back to you shortly.</p>
								<button type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button>
							</div>
						) : (
							<form className="contact-form" onSubmit={handleSubmit}>
								<input type="hidden" name="_subject" value="New FranHive website enquiry" />
								<input type="hidden" name="_replyto" value={formData.email} />
								<div className="form-row">
									<div className="form-group"><label htmlFor="name">Your Name</label><input required type="text" id="name" name="name" placeholder="Enter your name" maxLength={25} pattern="[^\d]*" title="Name cannot contain numbers" value={formData.name} onChange={handleTextChange} /></div>
									<div className="form-group"><label htmlFor="company">Company</label><input type="text" id="company" name="company" placeholder="Your company name" maxLength={25} pattern="[^\d]*" title="Company name cannot contain numbers" value={formData.company} onChange={handleTextChange} /></div>
								</div>
								<div className="form-row">
									<div className="form-group"><label htmlFor="email">Email Address</label><input required type="email" id="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleTextChange} /></div>
									<div className="form-group"><label htmlFor="phone">Phone Number</label><input type="tel" id="phone" name="phone" placeholder="Your phone number" inputMode="numeric" maxLength={10} pattern="[0-9]*" title="Phone number can contain up to 10 digits only" value={formData.phone} onChange={handleTextChange} /></div>
								</div>
								<div className="form-group"><label htmlFor="service">What can we help with?</label><select required id="service" name="service" defaultValue=""><option value="" disabled>Select a solution</option><option value="crm">Customised CRM</option><option value="software">Software Engineering</option><option value="website">Website Development</option><option value="automation">Business Automation</option><option value="digital-growth">Digital Growth</option><option value="training">Training &amp; Support</option><option value="other">Something else</option></select></div>
								<div className="form-group"><label htmlFor="message">Tell us about your requirement</label><textarea required id="message" name="message" rows="6" placeholder="Tell us about your business, challenge or project..." /></div>
								{submitError && <p className="contact-submit-error" role="alert">{submitError}</p>}
								<button type="submit" className="contact-submit" disabled={isSubmitting}>
									{isSubmitting ? "Sending..." : "Send Enquiry"} <span>→</span>
								</button>
							</form>
						)}
					</div>
				</div>
			</section>

			<section className="contact-process">
				<div className="contact-container">
					<div className="contact-heading"><div className="contact-eyebrow"><span />WHAT HAPPENS NEXT</div><h2>From conversation<br />to <span>solution.</span></h2></div>
					<div className="contact-process-grid">
						<div className="contact-process-card"><span>01</span><h3>We understand</h3><p>We learn about your business, goals, workflows and the challenge you&apos;re trying to solve.</p></div>
						<div className="contact-process-card"><span>02</span><h3>We explore</h3><p>We discuss possible approaches and identify the technology that fits your requirements.</p></div>
						<div className="contact-process-card"><span>03</span><h3>We build</h3><p>Once the direction is clear, we turn the idea into a practical solution designed around your business.</p></div>
						<div className="contact-process-card"><span>04</span><h3>We grow</h3><p>We continue to support, improve and evolve the solution as your business changes.</p></div>
					</div>
				</div>
			</section>

			<section className="contact-final">
				<div className="contact-container contact-final-box">
					<div><div className="contact-eyebrow"><span />HAVE A PROJECT IN MIND?</div><h2>Let&apos;s turn your <span>idea into action.</span></h2></div>
					<a href="mailto:info@franhive.com" className="contact-email-button">Email FranHive <span>→</span></a>
				</div>
			</section>
		</div>
	);
}
