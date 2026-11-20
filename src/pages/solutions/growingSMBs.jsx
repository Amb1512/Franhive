import { useEffect } from "react";
import "./growingSMBs.css";

const challenges = [
  {
    title: "Disconnected Business Systems",
    description:
      "Managing different activities across multiple platforms makes it difficult to maintain a unified view of your business.",
  },
  {
    title: "Inefficient Workflows",
    description:
      "Manual processes and repetitive tasks consume valuable time and resources.",
  },
  {
    title: "Limited Customer Visibility",
    description:
      "Scattered customer information makes tracking leads, interactions and follow-ups difficult.",
  },
  {
    title: "Growing Team Complexity",
    description:
      "Coordinating employees, assigning responsibilities and monitoring work becomes more challenging.",
  },
  {
    title: "Difficulty Tracking Performance",
    description:
      "Without organized business information, understanding performance and identifying improvement areas can be difficult.",
  },
];

const capabilities = [
  {
    title: "Customized CRM Solutions",
    description:
      "Manage customer relationships and sales activities through a centralized CRM system designed around your business processes.",
    intro:
      "Organize customer information, track opportunities and maintain better visibility throughout the customer journey.",
    points: [
      "Centralized customer and lead management",
      "Sales pipeline tracking",
      "Customer interaction management",
      "Follow-up and task management",
      "Business-specific CRM workflows",
    ],
  },
  {
    title: "Integrated Business Automation",
    description:
      "Reduce repetitive work and simplify everyday business activities with automation solutions.",
    intro:
      "Streamline routine processes so your team can focus on more important business priorities.",
    points: [
      "Marketing campaign automation",
      "AI-powered email assistance",
      "Customer support chatbots",
      "Automated invoice generation",
      "Workflow and task automation",
    ],
  },
  {
    title: "Employee & Team Management",
    description:
      "Bring greater organization to your workforce and daily business activities.",
    intro:
      "Manage employee-related processes and improve coordination with tools that support your growing team.",
    points: [
      "Employee attendance management",
      "HR recruitment automation",
      "Task assignment and monitoring",
      "Team activity management",
      "Employee information management",
    ],
  },
  {
    title: "Business Operations Management",
    description:
      "Create more structured workflows and maintain better control over everyday business activities.",
    intro:
      "Organize processes and improve operational visibility with connected business management capabilities.",
    points: [
      "Task and project management",
      "Role-based access and user management",
      "Business process organization",
      "Digital agreements and documentation",
      "Centralized knowledge resources",
    ],
  },
  {
    title: "Business Analytics & Reporting",
    description:
      "Understand how your business is performing with organized information and meaningful insights.",
    intro:
      "Monitor business activities and support informed decision-making with analytics and reporting.",
    points: [
      "Business analytics dashboards",
      "Performance monitoring",
      "Organized business information",
      "Operational insights",
      "Better visibility into business activities",
    ],
  },
];

const benefits = [
  {
    title: "Customized Around Your Processes",
    description:
      "Your business has its own workflows and requirements. FranHive helps shape solutions around the way your business operates.",
  },
  {
    title: "Less Dependence on Disconnected Tools",
    description:
      "Bring essential business management capabilities into a more organized technology environment.",
  },
  {
    title: "Improved Team Productivity",
    description:
      "Simplify everyday tasks, improve coordination and reduce repetitive manual work.",
  },
  {
    title: "Better Business Visibility",
    description:
      "Keep customer information, operational activities and business performance more organized.",
  },
  {
    title: "Technology That Supports Growth",
    description:
      "Build a flexible digital foundation that can evolve alongside your business requirements.",
  },
];

function GrowingSMBs() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle = "Growing SMB Solutions | FranHive";
    const pageDescription =
      "FranHive helps growing small and medium-sized businesses connect customized CRM, business automation, team management, operations and analytics.";

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
    <main className="growing-smbs-page">
      <section className="growing-smbs-hero">
        <div className="container growing-smbs-hero-inner">
          <div className="growing-smbs-hero-copy">
            <span className="section-label">Solutions for Growing SMBs</span>
            <h1>Bring Your Business Together. Simplify the Way You Grow.</h1>
            <p className="growing-smbs-hero-lead">
              As your business expands, managing customers, employees, sales
              and daily operations becomes more complex. Using multiple
              disconnected tools can create unnecessary work, scattered
              information and communication gaps.
            </p>
            <p className="growing-smbs-hero-summary">
              FranHive helps growing small and medium-sized businesses build a
              customized CRM and business automation foundation that brings
              essential processes together.
            </p>
            <p className="growing-smbs-hero-summary">
              Manage your business more efficiently, improve team coordination
              and create streamlined workflows with technology designed around
              your business needs.
            </p>
            <div className="growing-smbs-hero-actions">
              <a className="btn btn-black" href="#smb-solutions">
                Discover FranHive Solutions →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to Our Team
              </a>
            </div>
            <div className="growing-smbs-hero-trust">
              <span>✓ Customized to your business</span>
              <span>✓ Connected workflows</span>
              <span>✓ Built to support growth</span>
            </div>
          </div>

          <aside className="growing-smbs-hero-panel" aria-label="SMB solutions overview">
            <span className="growing-smbs-panel-kicker">A connected business foundation</span>
            <h2>One system that works together.</h2>
            <p>
              Bring customer management, business automation, team workflows
              and performance insights into a more organized environment.
            </p>
            <div className="growing-smbs-panel-points">
              <span>CRM & sales</span>
              <span>Automation</span>
              <span>Team management</span>
              <span>Analytics</span>
            </div>
            <div className="growing-smbs-panel-note">
              Your business needs a system that works together, not a collection
              of disconnected tools.
            </div>
          </aside>
        </div>
      </section>

      <section className="growing-smbs-intro">
        <div className="container growing-smbs-intro-inner">
          <div>
            <span className="section-label">The challenges of growing businesses</span>
            <h2>Growth brings new opportunities — and new operational challenges.</h2>
          </div>
          <p>
            As your business expands, disconnected systems and manual processes
            can make it harder to keep work moving. A connected foundation
            helps your people, information and everyday operations work better
            together.
          </p>
        </div>
      </section>

      <section className="growing-smbs-challenges">
        <div className="container">
          <div className="growing-smbs-section-heading">
            <span className="section-label">Common growth challenges</span>
            <h2>Make growing your business easier to manage.</h2>
          </div>
          <div className="growing-smbs-challenge-grid">
            {challenges.map((challenge, index) => (
              <article className="growing-smbs-challenge-card" key={challenge.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="growing-smbs-solutions" id="smb-solutions">
        <div className="container">
          <div className="growing-smbs-section-heading">
            <span className="section-label">How FranHive helps growing SMBs</span>
            <h2>Connected solutions for your people, customers and operations.</h2>
            <p>
              Bring essential business processes together with technology
              designed around your workflows and requirements.
            </p>
          </div>
          <div className="growing-smbs-solution-grid">
            {capabilities.map((capability, index) => (
              <article className="growing-smbs-solution-card" key={capability.title}>
                <div className="growing-smbs-solution-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="growing-smbs-solution-mark" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <p className="growing-smbs-solution-intro">{capability.intro}</p>
                <ul>
                  {capability.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="growing-smbs-benefits">
        <div className="container">
          <div className="growing-smbs-section-heading">
            <span className="section-label">Why growing SMBs choose FranHive</span>
            <h2>Technology shaped around the way your business works.</h2>
          </div>
          <div className="growing-smbs-benefit-grid">
            {benefits.map((benefit, index) => (
              <article className="growing-smbs-benefit-card" key={benefit.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="growing-smbs-final-cta">
        <div className="container">
          <div className="growing-smbs-final-box">
            <div>
              <span className="section-label">Ready for your next stage?</span>
              <h2>Stop managing multiple systems. Start managing your business better.</h2>
              <p>
                Your business has grown. Your technology should grow with it.
                Bring customer management, business automation and operational
                workflows into a more connected environment.
              </p>
              <p>
                Simplify processes, strengthen customer relationships and give
                your team the tools to work smarter. Let&apos;s create a system
                that works the way your business does.
              </p>
            </div>
            <a className="btn btn-yellow" href="/contact-us">
              Talk to Our Team →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GrowingSMBs;
