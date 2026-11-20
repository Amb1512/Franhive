import { useEffect } from "react";
import "./startups.css";

const challenges = [
  {
    title: "Scattered Customer Information",
    description:
      "Customer details, conversations and leads are spread across different platforms.",
  },
  {
    title: "Manual Business Processes",
    description:
      "Repetitive tasks consume valuable time and slow down daily operations.",
  },
  {
    title: "Unorganized Team Management",
    description:
      "Assigning tasks, monitoring progress and coordinating employees becomes challenging.",
  },
  {
    title: "Limited Online Visibility",
    description:
      "Without a strong digital presence, reaching potential customers can be difficult.",
  },
  {
    title: "Lack of Business Insights",
    description:
      "Making decisions without organized business data can limit growth opportunities.",
  },
];

const solutions = [
  {
    title: "Smart CRM & Lead Management",
    description:
      "Turn potential customers into meaningful business relationships. Keep leads, customer details, conversations and follow-ups organized in one connected system.",
    points: [
      "Capture and organize leads from different channels",
      "Track customer conversations and sales progress",
      "Keep follow-ups visible so opportunities do not get missed",
    ],
  },
  {
    title: "Business Automation",
    description:
      "Reduce time spent on repetitive work by connecting everyday processes and automating routine tasks.",
    points: [
      "Streamline repeatable workflows and reminders",
      "Reduce manual data entry and duplicated effort",
      "Keep routine work moving with clearer processes",
    ],
  },
  {
    title: "Team & Task Management",
    description:
      "Give your team a shared view of responsibilities, priorities and progress as your business grows.",
    points: [
      "Assign work and make ownership clear",
      "Track tasks, deadlines and progress",
      "Coordinate people around shared business goals",
    ],
  },
  {
    title: "Digital Presence & Growth",
    description:
      "Build a stronger online presence and make it easier for the right customers to discover and connect with your business.",
    points: [
      "Create a professional, responsive website",
      "Improve visibility through digital marketing",
      "Connect online enquiries with your customer workflows",
    ],
  },
  {
    title: "Business Insights",
    description:
      "Bring business activity into clearer view so you can make informed decisions as new opportunities and challenges emerge.",
    points: [
      "Organize important business information",
      "Review leads, activity and team progress",
      "Use meaningful data to guide next steps",
    ],
  },
];

function Startups() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle =
      "Startups & Emerging Businesses | FranHive";
    const pageDescription =
      "FranHive helps startups and emerging businesses manage leads, customer relationships, team workflows and digital growth with connected CRM, automation and technology solutions.";

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
    <main className="startups-page">
      <section className="startups-hero">
        <div className="container startups-hero-inner">
          <div className="startups-hero-copy">
            <span className="section-label">Startups & Emerging Businesses</span>
            <h1>Build Smarter. Manage Better. Grow Faster.</h1>
            <p className="startups-hero-lead">
              Starting and growing a business comes with many challenges —
              managing leads, building customer relationships, coordinating
              teams, handling daily operations and establishing an online
              presence.
            </p>
            <p className="startups-hero-summary">
              FranHive helps startups and emerging businesses bring these
              essential activities together through CRM solutions, business
              automation and digital technology services.
            </p>
            <p className="startups-hero-summary">
              Build a strong foundation for your business today and create room
              for sustainable growth tomorrow.
            </p>
            <div className="startups-hero-actions">
              <a className="btn btn-black" href="#startup-solutions">
                Explore Our Solutions →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="startups-hero-trust">
              <span>✓ Connected business tools</span>
              <span>✓ Less manual work</span>
              <span>✓ Room to grow</span>
            </div>
          </div>

          <aside className="startups-hero-panel" aria-label="Startup growth overview">
            <span className="startups-panel-kicker">A foundation for growth</span>
            <h2>Bring your business essentials together.</h2>
            <p>
              Connect customer relationships, team workflows, daily operations
              and your digital presence in a foundation that can grow with you.
            </p>
            <div className="startups-panel-points">
              <span>CRM & leads</span>
              <span>Automation</span>
              <span>Team workflows</span>
              <span>Digital growth</span>
            </div>
            <div className="startups-panel-note">
              Start with what your business needs today. Build for what comes next.
            </div>
          </aside>
        </div>
      </section>

      <section className="startups-intro">
        <div className="container startups-intro-inner">
          <div>
            <span className="section-label">The challenges of growing a startup</span>
            <h2>Growth gets harder when everything is managed manually.</h2>
          </div>
          <p>
            As your business grows, managing everything manually becomes
            increasingly difficult. Your business needs more than individual
            tools. It needs a connected digital foundation.
          </p>
        </div>
      </section>

      <section className="startups-challenges">
        <div className="container">
          <div className="startups-section-heading">
            <span className="section-label">Common growth challenges</span>
            <h2>Make room for the work that moves your business forward.</h2>
          </div>
          <div className="startups-challenge-grid">
            {challenges.map((challenge, index) => (
              <article className="startups-challenge-card" key={challenge.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="startups-solutions" id="startup-solutions">
        <div className="container">
          <div className="startups-section-heading">
            <span className="section-label">How FranHive helps startups grow</span>
            <h2>One connected foundation for your next stage.</h2>
            <p>
              Bring customer management, operations and digital technology
              together with solutions designed around the way your business works.
            </p>
          </div>
          <div className="startups-solution-grid">
            {solutions.map((solution, index) => (
              <article className="startups-solution-card" key={solution.title}>
                <div className="startups-solution-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="startups-solution-mark" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="startups-growth">
        <div className="container startups-growth-layout">
          <div>
            <span className="section-label">Built for sustainable growth</span>
            <h2>Start with a strong foundation. Grow with confidence.</h2>
            <p>
              Your business does not need disconnected tools to keep up.
              FranHive helps align the systems and workflows behind your
              customer relationships, team and operations.
            </p>
          </div>
          <div className="startups-growth-steps">
            <div><span>01</span><strong>Connect your customer information</strong></div>
            <div><span>02</span><strong>Organize daily work and responsibilities</strong></div>
            <div><span>03</span><strong>Automate repeatable processes</strong></div>
            <div><span>04</span><strong>Build on your digital foundation</strong></div>
          </div>
        </div>
      </section>

      <section className="startups-final-cta">
        <div className="container">
          <div className="startups-final-box">
            <div>
              <span className="section-label">Ready to build your foundation?</span>
              <h2>Let&apos;s make growing your business easier to manage.</h2>
              <p>
                Tell us where you are today and what you want your business to
                achieve next.
              </p>
            </div>
            <a className="btn btn-yellow" href="/contact-us">
              Talk to FranHive →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Startups;
