import { useEffect } from "react";
import "./smm.css";

const marketingApproach = [
  {
    title: "Social Media Strategy",
    description:
      "Develop an approach based on your business goals, target audience, industry and brand positioning.",
  },
  {
    title: "Platform Selection",
    description:
      "Identify the social media networks that are most relevant to your business and audience.",
  },
  {
    title: "Multi-Platform Marketing",
    description:
      "Plan and manage your presence across multiple social media platforms according to your requirements.",
  },
  {
    title: "Content Planning",
    description:
      "Develop a structured content approach designed to maintain a consistent and relevant social media presence.",
  },
  {
    title: "Brand Awareness",
    description:
      "Use social media to strengthen your brand identity and increase visibility among relevant audiences.",
  },
  {
    title: "Audience Engagement",
    description:
      "Create opportunities to interact with your audience and build stronger relationships with potential and existing customers.",
  },
  {
    title: "Lead & Customer Growth",
    description:
      "Use social media as a channel to attract potential customers and create new business opportunities.",
  },
  {
    title: "Performance-Focused Marketing",
    description:
      "Evaluate social media activities against your objectives and continuously refine the strategy.",
  },
];

const strategyConsiderations = [
  {
    title: "Which Platforms Should You Use?",
    description:
      "Determine which social networks are most relevant to your target audience.",
  },
  {
    title: "How Many Platforms Should You Target?",
    description:
      "Focus your resources on the platforms that provide the greatest opportunity for your business.",
  },
  {
    title: "What Are Your Goals?",
    description: "Your strategy may focus on one or more business objectives.",
    items: [
      "Brand awareness",
      "Audience growth",
      "Customer engagement",
      "Website traffic",
      "Lead generation",
      "Sales and revenue",
    ],
  },
  {
    title: "What Is Your Marketing Budget?",
    description:
      "Define a realistic budget based on your goals, platforms, content requirements and campaign scope.",
  },
  {
    title: "What Services Do You Need?",
    description:
      "Your requirements may include strategy, content planning, campaign management, audience engagement or performance analysis.",
  },
  {
    title: "What Should You Expect From Your Marketing Partner?",
    description:
      "Choose a partner that understands your business objectives and can align its strategy with your brand and audience.",
  },
];

const growthStages = ["Strategy", "Content", "Engagement", "Growth"];

function SMM() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle =
      "Social Media Marketing Services | SMM Strategy & Management | FranHive";
    const pageDescription =
      "FranHive provides social media marketing services focused on strategy, platform selection, content planning, audience engagement, brand awareness and business growth.";

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
    <main className="smm-page">
      <section className="smm-hero">
        <div className="container smm-hero-inner">
          <div className="smm-hero-copy">
            <span className="section-label">Social Media Marketing</span>
            <h1>Build your brand. Reach your audience. Grow your business.</h1>
            <p className="smm-hero-lead">
              Social media has become an important channel for businesses to
              build brand awareness, connect with new audiences, generate
              enquiries and create meaningful customer relationships.
            </p>
            <p className="smm-hero-summary">
              FranHive helps businesses develop{" "}
              <strong>goal-driven social media marketing strategies</strong>{" "}
              based on their target audience, preferred platforms, business
              objectives and marketing budget.
            </p>
            <div className="smm-hero-actions">
              <a className="btn btn-black" href="#smm-approach">
                Explore Our SMM Approach →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="smm-hero-trust">
              <span>✓ Goal-driven strategy</span>
              <span>✓ Audience-focused content</span>
              <span>✓ Continuous improvement</span>
            </div>
          </div>

          <aside className="smm-hero-panel" aria-label="Social media strategy overview">
            <span className="smm-panel-kicker">Built around your goals</span>
            <h2>Social media marketing that fits your business</h2>
            <p>
              Every business has different audiences, platforms and growth
              objectives. Your strategy should be aligned with what you want to
              achieve.
            </p>
            <div className="smm-panel-points">
              <span>Audience</span>
              <span>Platforms</span>
              <span>Business goals</span>
              <span>Marketing budget</span>
            </div>
            <div className="smm-panel-note">
              Strategy → Content → Engagement → Growth
            </div>
          </aside>
        </div>
      </section>

      <section className="smm-intro">
        <div className="container smm-intro-inner">
          <div>
            <span className="section-label">Built around your goals</span>
            <h2>Social media marketing built around your goals.</h2>
          </div>
          <p>
            Instead of using the same approach for everyone, your social media
            strategy should reflect your audiences, platforms and growth
            objectives. FranHive helps bring those elements together in a
            structured, purposeful social media presence.
          </p>
        </div>
      </section>

      <section className="smm-approach" id="smm-approach">
        <div className="container">
          <div className="smm-section-heading">
            <span className="section-label">Our social media marketing approach</span>
            <h2>Eight ways to build a more purposeful social presence</h2>
            <p>
              Align strategy, platforms, content and performance with your
              business and audience.
            </p>
          </div>
          <div className="smm-approach-grid">
            {marketingApproach.map((item, index) => (
              <article className="smm-approach-card" key={item.title}>
                <div className="smm-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-strategy">
        <div className="container">
          <div className="smm-section-heading">
            <span className="section-label">Choose the right strategy</span>
            <h2>Start with the decisions that shape your campaign.</h2>
            <p>
              A social media plan works best when its platforms, goals,
              services and budget are considered together.
            </p>
          </div>
          <div className="smm-strategy-grid">
            {strategyConsiderations.map((item, index) => (
              <article className="smm-strategy-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.items && (
                  <ul>
                    {item.items.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-fit">
        <div className="container smm-fit-inner">
          <div>
            <span className="section-label">A strategy that fits</span>
            <h2>Social media marketing that fits your business.</h2>
          </div>
          <div>
            <p>
              Whether you want to establish your social media presence or
              improve an existing one, your marketing strategy should be built
              around <strong>your audience, your platforms and your goals.</strong>
            </p>
            <p>
              FranHive helps bring these elements together to create a more
              structured and purposeful social media presence.
            </p>
          </div>
        </div>
      </section>

      <section className="smm-growth">
        <div className="container">
          <div className="smm-section-heading">
            <span className="section-label">A connected process</span>
            <h2>Turn social media into a business channel.</h2>
            <p>
              Social media isn&apos;t only about posting regularly. It&apos;s
              about creating the right content, reaching the right audience and
              working toward measurable business objectives.
            </p>
          </div>
          <ol className="smm-growth-list">
            {growthStages.map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="smm-final-cta">
        <div className="container">
          <div className="smm-final-box">
            <div>
              <span className="section-label">
                Build your social presence with FranHive
              </span>
              <h2>Let&apos;s create a social media strategy around your business goals.</h2>
              <p>
                Build your brand, reach your audience and grow your business
                with a focused social media marketing approach.
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

export default SMM;
