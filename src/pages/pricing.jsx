import { useState } from "react";
import "./pricing.css";

const services = [
	"SEO",
	"SMM",
	"PPC",
	"Franchise / Unit / Store Management",
	"CRM",
	"Website Designing",
	"Website Hosting",
];

const seoPlans = [
	{ name: "Essentials", price: "150", url: "https://www.franhive.com/contact-us.php?seo-essentials" },
	{ name: "Professional", price: "250", url: "https://www.franhive.com/contact-us.php?seo-professional", featured: true },
	{ name: "Enterprise", price: "350", url: "https://www.franhive.com/contact-us.php?seo-enterprise" },
];

const seoFeatures = [
	{ name: "Keyword Plan", values: ["5 keywords", "15 keywords", "25 keywords"] },
	{ name: "Number of Locations Covered", values: ["1", "2", "3"] },
	{ name: "Competition Analysis", included: true },
	{ name: "Google Penalty Check", included: true },
	{ name: "Google Search Console Setup (if not set up)", included: true },
	{ name: "Google Analytics Setup (if not set up)", included: true },
	{ name: "Search Engine Ranking Report", included: true },
	{ name: "Google Analytics Report", included: true },
	{ name: "Initial Ranking Report" },
	{ name: "Keyword Research" },
];

export default function Pricing() {
	const [activeService, setActiveService] = useState("SEO");

	return (
		<div className="pricing-page">
			<section className="pricing-hero">
				<div className="pricing-container">
					<div className="pricing-eyebrow"><span />FRANHIVE PRICING</div>
					<h1>Good work.<br /><em>Clear monthly pricing.</em></h1>
					<p>Explore FranHive services and choose the level of support that fits your goals. SEO plans are billed monthly, with clear options for businesses at every stage.</p>
				</div>
			</section>

			<section className="pricing-section">
				<div className="pricing-container">
					<div className="pricing-heading">
						<div><div className="pricing-eyebrow"><span />SERVICES AND PLANS</div><h2>Find the right level<br /><em>of support.</em></h2></div>
						<p className="pricing-billing-note">SEO prices in USD · Paid monthly</p>
					</div>

					<div className="pricing-services" role="group" aria-label="Choose a service">
						{services.map((service) => <button type="button" className={activeService === service ? "active" : ""} aria-pressed={activeService === service} onClick={() => setActiveService(service)} key={service}>{service}</button>)}
					</div>

					{activeService === "SEO" ? <>
						<div className="pricing-grid">
							{seoPlans.map((plan) => <article className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
								<div className="pricing-card-top"><span className="pricing-card-note">SEO PLAN</span><h3>{plan.name}</h3></div>
								<div className="pricing-price"><span>$</span><strong>{plan.price}</strong><small>/ month</small></div>
								<p className="pricing-paid-note">Paid monthly</p>
								<a href={plan.url} className="pricing-button">Get started <span>→</span></a>
							</article>)}
						</div>

						<div className="pricing-comparison-wrap">
							<table className="pricing-comparison">
								<caption>SEO plan comparison</caption>
								<thead><tr><th scope="col">Plan features</th>{seoPlans.map((plan) => <th scope="col" key={plan.name}>{plan.name}</th>)}</tr></thead>
								<tbody>{seoFeatures.map((feature) => <tr key={feature.name}>
									<th scope="row">{feature.name}</th>
									{seoPlans.map((plan, index) => <td key={plan.name}>{feature.values ? feature.values[index] : feature.included ? "Included" : "—"}</td>)}
								</tr>)}</tbody>
							</table>
						</div>
						<p className="pricing-note">Looking for a different SEO scope? <a href="/contact-us">Talk to us about your requirements.</a></p>
					</> : <div className="pricing-custom-state">
						<div className="pricing-eyebrow"><span />{activeService.toUpperCase()}</div>
						<h3>Pricing shaped around your needs.</h3>
						<p>Tell us about your goals and requirements. Our team will help you find the right scope and provide a tailored quote.</p>
						<a href="/contact-us" className="pricing-button">Request a quote <span>→</span></a>
					</div>}
				</div>
			</section>

			<section className="pricing-process"><div className="pricing-container pricing-process-inner"><div><div className="pricing-eyebrow"><span />HOW IT WORKS</div><h2>Clear scope.<br /><em>Clear value.</em></h2></div><div className="pricing-steps"><div><span>01</span><h3>Understand</h3><p>We map your goals, workflow and the opportunity.</p></div><div><span>02</span><h3>Shape</h3><p>We recommend the right plan and define the first phase.</p></div><div><span>03</span><h3>Deliver</h3><p>We build, launch and keep improving what matters.</p></div></div></div></section>

			<section className="pricing-final"><div className="pricing-container pricing-final-inner"><div><div className="pricing-eyebrow"><span />NOT SURE WHERE TO START?</div><h2>Let&apos;s find your<br /><em>right next step.</em></h2></div><a href="/contact-us">Talk to FranHive <span>→</span></a></div></section>
		</div>
	);
}
