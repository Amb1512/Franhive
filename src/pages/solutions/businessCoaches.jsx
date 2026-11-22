import { useEffect } from "react";
import "./businessCoaches.css";

const challenges = [
  {
    title: "Scattered Lead Information",
    description: "Enquiries across websites, social media, referrals and other channels can become difficult to track.",
  },
  {
    title: "Missed Follow-Ups",
    description: "Manual tracking of discovery calls and prospect conversations can lead to missed opportunities.",
  },
  {
    title: "Disorganized Client Journeys",
    description: "Different clients, coaching stages and program timelines require consistent organization.",
  },
  {
    title: "Program Management Challenges",
    description: "Enrolments, sessions and ongoing program activities can become time-consuming to coordinate.",
  },
  {
    title: "Renewal Opportunities Overlooked",
    description: "It can be difficult to identify clients who are ready for another program or renewal.",
  },
  {
    title: "Time-Consuming Administration",
    description: "Repetitive communication and administrative work take time away from coaching.",
  },
];

const solutions = [
  {
    title: "Lead & Prospect Management",
    description: "Keep every potential client organized, from the first enquiry to program enrolment.",
    points: ["Centralized lead information", "Prospect tracking and categorization", "Sales pipeline visibility", "Follow-up task management"],
  },
  {
    title: "Discovery Call & Follow-Up",
    description: "Turn initial conversations into meaningful coaching opportunities.",
    points: ["Discovery call tracking", "Follow-up reminders", "Prospect interaction history", "Organized communication records"],
  },
  {
    title: "Coaching Program Management",
    description: "Keep coaching programs and client activities structured in one place.",
    points: ["Program organization", "Client and program records", "Task and activity management", "Centralized client information"],
  },
  {
    title: "Client Journey Management",
    description: "Create more consistent client experiences across every stage of the relationship.",
    points: ["Interaction tracking", "Follow-up organization", "Client activity records", "Milestone visibility"],
  },
  {
    title: "AI Assistance & Automation",
    description: "Simplify repetitive administrative activities with AI-enabled tools and workflow automation.",
    points: ["AI Email Assistant", "AI customer support chatbot", "Marketing campaign emails", "Automated invoice generation"],
  },
  {
    title: "Renewals & Relationships",
    description: "Stay connected beyond the initial coaching program and maintain long-term relationships.",
    points: ["Client history records", "Renewal follow-up tracking", "Customer relationship management", "Continued engagement"],
  },
];

function BusinessCoaches() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle = "Business Coaches | FranHive";
    const pageDescription =
      "FranHive helps business coaches manage leads, discovery calls, coaching programs, client journeys, renewals and everyday operations.";

    document.title = pageTitle;

    if (description) {
      description.content = pageDescription;
    } else {
      const newDescription = document.createElement("meta");
      newDescription.name = "description";
      newDescription.content = pageDescription;
      document.head.append(newDescription);
      return () => {
        document.title = previousTitle;
        newDescription.remove();
      };
    }

    return () => {
      document.title = previousTitle;
      description.content = previousDescription ?? "";
    };
  }, []);

  return (
    <main className="business-coaches-page">
      <section className="coaches-hero">
        <div className="container coaches-hero-inner">
          <div className="coaches-hero-copy">
            <span className="section-label">Business Coaches</span>
            <h1>Focus on Transforming Clients. Let FranHive Simplify Your Business.</h1>
            <p className="coaches-hero-lead">
              Running a coaching business involves more than delivering sessions. FranHive brings CRM,
              AI-enabled assistance and business automation together to help you manage clients,
              programs and everyday operations.
            </p>
            <div className="coaches-hero-actions">
              <a className="btn btn-black" href="#coaching-solutions">Explore FranHive for Coaches →</a>
              <a className="btn btn-outline" href="/contact-us">Talk to FranHive</a>
            </div>
            <div className="coaches-hero-trust">
              <span>✓ Organized client journeys</span>
              <span>✓ Consistent follow-ups</span>
              <span>✓ Less administration</span>
            </div>
          </div>

          <aside className="coaches-hero-panel" aria-label="Coaching business overview">
            <span className="coaches-panel-kicker">Your coaching business, connected</span>
            <h2>More time for coaching. Less time managing.</h2>
            <p>Bring enquiries, discovery calls, programs and renewals into one organized environment.</p>
            <div className="coaches-panel-points">
              <span>Prospects</span>
              <span>Discovery calls</span>
              <span>Programs</span>
              <span>Renewals</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="coaches-intro">
        <div className="container coaches-intro-inner">
          <div>
            <span className="section-label">The challenges of managing a coaching business</span>
            <h2>Growth gets harder when client interactions are scattered.</h2>
          </div>
          <p>
            As your coaching practice grows, keeping track of every client and interaction becomes
            increasingly challenging. A connected system keeps important conversations and opportunities visible.
          </p>
        </div>
      </section>

      <section className="coaches-challenges">
        <div className="container">
          <div className="coaches-section-heading">
            <span className="section-label">Common coaching challenges</span>
            <h2>Keep every client interaction organized.</h2>
          </div>
          <div className="coaches-challenge-grid">
            {challenges.map((challenge, index) => (
              <article className="coaches-challenge-card" key={challenge.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coaches-solutions" id="coaching-solutions">
        <div className="container">
          <div className="coaches-section-heading">
            <span className="section-label">How FranHive helps business coaches</span>
            <h2>A more structured coaching business.</h2>
            <p>Build stronger client relationships and organize workflows around the way you coach.</p>
          </div>
          <div className="coaches-solution-grid">
            {solutions.map((solution, index) => (
              <article className="coaches-solution-card" key={solution.title}>
                <div className="coaches-solution-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="coaches-solution-mark" aria-hidden="true">↗</span>
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coaches-benefits">
        <div className="container coaches-benefits-layout">
          <div>
            <span className="section-label">Why business coaches choose FranHive</span>
            <h2>Organize the business behind every coaching relationship.</h2>
          </div>
          <div className="coaches-benefit-grid">
            <div><strong>One organized platform</strong><span>Prospects, clients, programs and workflows connected.</span></div>
            <div><strong>Stronger relationships</strong><span>Stay informed across every stage of the journey.</span></div>
            <div><strong>Less administration</strong><span>Spend less effort on repetitive everyday work.</span></div>
            <div><strong>AI-enabled support</strong><span>Improve communication and operational efficiency.</span></div>
          </div>
        </div>
      </section>

      <section className="coaches-final-cta">
        <div className="container">
          <div className="coaches-final-box">
            <div>
              <span className="section-label">Spend more time coaching</span>
              <h2>Less time managing scattered business activities.</h2>
              <p>Bring your coaching business together with CRM, AI-enabled assistance and business automation.</p>
            </div>
            <a className="btn btn-yellow" href="/contact-us">Get Started with FranHive →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BusinessCoaches;
