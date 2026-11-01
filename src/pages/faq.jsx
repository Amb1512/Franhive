import { useMemo, useState } from "react";
import "./faq.css";

const questions = [
	{ category: "Getting started", question: "What does FranHive help businesses with?", answer: "FranHive combines CRM engineering, business software, automation, websites and digital growth support to make everyday operations simpler and more measurable." },
	{ category: "Getting started", question: "How do we start a project with FranHive?", answer: "Send us a brief through the Contact Us page. We will understand your goals, current workflow and priorities before recommending the right next step." },
	{ category: "Services", question: "Can you build a customised CRM?", answer: "Yes. We design CRM workflows around your sales process, customer data, reporting needs and team habits instead of forcing your business into a generic template." },
	{ category: "Services", question: "Do you work on existing websites and systems?", answer: "Yes. We can improve an existing website or system, connect tools, automate repetitive work and plan a gradual upgrade where a full rebuild is not needed." },
	{ category: "Services", question: "Do you provide ongoing support after launch?", answer: "Yes. Support can include maintenance, improvements, training, reporting and continued development as your business and requirements evolve." },
	{ category: "Process", question: "How long does a project take?", answer: "The timeline depends on the scope and starting point. After the first conversation, we can break the work into clear phases and give you a practical delivery estimate." },
	{ category: "Process", question: "What information should I include in my enquiry?", answer: "Tell us what you are trying to improve, who uses the system, what tools you already have and what a successful outcome would look like. A rough brief is completely fine." },
	{ category: "Process", question: "Can you work with our existing team?", answer: "Absolutely. We can work alongside your internal team, support a handover, or take ownership of the technical delivery depending on what works best for you." },
];

export default function FAQ() {
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [query, setQuery] = useState("");
	const [category, setCategory] = useState("All");
	const categories = ["All", ...new Set(questions.map((item) => item.category))];
	const filteredQuestions = useMemo(() => questions.filter((item) => {
		const matchesCategory = category === "All" || item.category === category;
		const searchText = `${item.question} ${item.answer}`.toLowerCase();
		return matchesCategory && searchText.includes(query.toLowerCase());
	}), [category, query]);

	return (
		<div className="faq-page">
			<section className="faq-hero">
				<div className="faq-container faq-hero-inner">
					<div className="faq-eyebrow"><span />FRANHIVE FAQ</div>
					<h1>Clear answers for<br /><em>better decisions.</em></h1>
					<p>Everything you need to know about our services, process and the way we build technology around your business.</p>
				</div>
			</section>

			<section className="faq-section">
				<div className="faq-container">
					<div className="faq-toolbar">
						<div><div className="faq-eyebrow"><span />KNOW THE DETAILS</div><h2>Questions,<br /><em>answered.</em></h2></div>
						<label className="faq-search"><span>⌕</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions" aria-label="Search questions" /></label>
					</div>
					<div className="faq-categories" role="tablist" aria-label="FAQ categories">
						{categories.map((item) => <button key={item} type="button" className={category === item ? "active" : ""} onClick={() => { setCategory(item); setActiveQuestion(0); }}>{item}</button>)}
					</div>
					<div className="faq-layout">
						<div className="faq-list">
							{filteredQuestions.length ? filteredQuestions.map((item, index) => {
								const isOpen = activeQuestion === index;
								return <article className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
									<button type="button" className="faq-question" aria-expanded={isOpen} onClick={() => setActiveQuestion(isOpen ? -1 : index)}><span>{item.question}</span><b>{isOpen ? "−" : "+"}</b></button>
									{isOpen && <p className="faq-answer">{item.answer}</p>}
								</article>;
							}) : <p className="faq-empty">No questions match your search.</p>}
						</div>
						<aside className="faq-aside"><span className="faq-aside-number">01</span><h3>Still have a question?</h3><p>Tell us what you are trying to solve and our team will help you find the right direction.</p><a href="/contact-us">Talk to FranHive <span>→</span></a></aside>
					</div>
				</div>
			</section>

			<section className="faq-bottom"><div className="faq-container faq-bottom-inner"><div><div className="faq-eyebrow"><span />READY WHEN YOU ARE</div><h2>Let&apos;s make<br /><em>things clearer.</em></h2></div><a href="/contact-us">Start a conversation <span>→</span></a></div></section>
		</div>
	);
}
