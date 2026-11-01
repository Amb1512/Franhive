import { useEffect } from "react";
import "./websiteDesigning.css";

const capabilities = [
  {
    title: "Responsive Website Design",
    description:
      "Create websites that provide a consistent experience across desktops, tablets and mobile devices.",
  },
  {
    title: "Modern UI/UX Design",
    description:
      "Use clean, intuitive and engaging interfaces that make it easier for visitors to explore your business.",
  },
  {
    title: "Business & Corporate Websites",
    description:
      "Clearly communicate your services, expertise, products and brand identity with a professional website.",
  },
  {
    title: "Lead Generation Integration",
    description:
      "Connect your website with FranHive business software so website enquiries can be managed from a centralized console.",
  },
  {
    title: "Lead Management & Follow-Ups",
    description:
      "Capture website enquiries and streamline follow-ups to help your team move potential customers through the sales journey.",
  },
  {
    title: "Customer Feedback & Complaint Capture",
    description:
      "Integrate feedback and complaints submitted through your official website into your business workflow.",
  },
  {
    title: "Website Hosting Support",
    description:
      "Get website hosting support to help maintain a reliable online presence.",
  },
  {
    title: "Scalable Website Architecture",
    description:
      "Build a website that can grow alongside your business, services, products and customer base.",
  },
];

const businessBenefits = [
  {
    title: "Reach New Customers",
    description:
      "Make your business discoverable online and create new opportunities for enquiries.",
  },
  {
    title: "Build Brand Credibility",
    description:
      "Give customers a clear and trustworthy first impression with a professional website.",
  },
  {
    title: "Showcase Your Expertise",
    description:
      "Present your services, products, experience and business capabilities in one place.",
  },
  {
    title: "Generate More Enquiries",
    description:
      "Turn visitors into potential leads with strategically placed calls-to-action and enquiry forms.",
  },
  {
    title: "Save Time",
    description:
      "Provide important information online so customers can find answers without repeatedly contacting your team.",
  },
  {
    title: "Stay in Control of Your Brand",
    description:
      "Create a digital presence that reflects your brand, messaging and business identity.",
  },
];

function WebsiteDesigning() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle =
      "Website Designing Services | Responsive Business Website Design | FranHive";
    const pageDescription =
      "FranHive provides modern website designing services with responsive UI/UX, business website development, lead generation integration, hosting support and customer feedback management.";

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
    <main className="website-design-page">
      <section className="website-design-hero">
        <div className="container website-design-hero-inner">
          <div className="website-design-hero-copy">
            <span className="section-label">Website Designing</span>
            <h1>Modern websites designed to grow your business</h1>
            <p className="website-design-lead">
              Your website is often the first place potential customers
              interact with your business. A professionally designed website
              can strengthen your brand presence, build credibility, showcase
              your expertise, and turn visitors into enquiries and customers.
            </p>
            <p className="website-design-summary">
              At <strong>FranHive</strong>, we design business websites that
              combine modern UI/UX, responsive design, lead generation and
              seamless integration with your business systems.
            </p>
            <div className="website-design-actions">
              <a className="btn btn-black" href="#website-design-capabilities">
                Explore Website Design →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="website-design-trust">
              <span>✓ Responsive experiences</span>
              <span>✓ Lead generation integration</span>
              <span>✓ Designed around your business</span>
            </div>
          </div>

          <aside className="website-design-hero-panel" aria-label="Website design overview">
            <span className="website-design-panel-kicker">Digital presence</span>
            <h2>Website design that works around your business</h2>
            <p>
              Businesses evolve from small operations into growing
              organizations. Your website should evolve with you.
            </p>
            <div className="website-design-panel-points">
              <span>Modern UI/UX</span>
              <span>Mobile responsive</span>
              <span>Lead capture</span>
              <span>Scalable architecture</span>
            </div>
            <div className="website-design-panel-note">
              Modern design. Responsive experience. Business-focused
              functionality.
            </div>
          </aside>
        </div>
      </section>

      <section className="website-design-intro">
        <div className="container website-design-intro-inner">
          <div>
            <span className="section-label">Designed around your goals</span>
            <h2>Website design that works around your business</h2>
          </div>
          <p>
            FranHive helps businesses build responsive, user-friendly and
            conversion-focused websites designed around their business goals.
            Create an online experience that can grow alongside your
            organization.
          </p>
        </div>
      </section>

      <section
        className="website-design-capabilities"
        id="website-design-capabilities"
      >
        <div className="container">
          <div className="website-design-section-heading">
            <span className="section-label">Our capabilities</span>
            <h2>Everything your business website needs to do more</h2>
            <p>
              Bring design, lead generation, business workflows and a
              consistent customer experience together.
            </p>
          </div>
          <div className="website-design-capability-grid">
            {capabilities.map((capability, index) => (
              <article
                className="website-design-capability-card"
                key={capability.title}
              >
                <div className="website-design-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="website-design-benefits">
        <div className="container">
          <div className="website-design-section-heading">
            <span className="section-label">Why a professional website?</span>
            <h2>Make it easier for customers to find, trust and contact you.</h2>
            <p>
              A strong online presence helps customers discover your business,
              understand your offerings and get in touch.
            </p>
          </div>
          <div className="website-design-benefit-grid">
            {businessBenefits.map((benefit, index) => (
              <article
                className="website-design-benefit-card"
                key={benefit.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="website-design-journey">
        <div className="container website-design-journey-inner">
          <div>
            <span className="section-label">From visits to opportunities</span>
            <h2>Your website should contribute to your business.</h2>
            <p>
              With FranHive website and business-system integration, enquiries
              generated through your website can flow into a centralized
              system, making it easier for your team to manage the next steps.
            </p>
          </div>
          <ol className="website-design-flow">
            {["Capture", "Manage", "Follow Up", "Convert"].map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="website-design-growth">
        <div className="container website-design-growth-inner">
          <div>
            <span className="section-label">Built for growing businesses</span>
            <h2>A website that supports your next stage of growth.</h2>
          </div>
          <p>
            Whether you&apos;re establishing your online presence or expanding
            an existing business, FranHive helps you create a website that
            supports your next stage of growth.
          </p>
        </div>
      </section>

      <section className="website-design-final-cta">
        <div className="container">
          <div className="website-design-final-box">
            <div>
              <span className="section-label">Build your digital presence with FranHive</span>
              <h2>Your website should work as hard as your business.</h2>
              <p>
                Modern design. Responsive experience. Lead integration.
                Business-focused functionality.
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

export default WebsiteDesigning;
