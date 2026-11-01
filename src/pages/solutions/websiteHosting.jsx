import { useEffect } from "react";
import "./websiteHosting.css";

const hostingCapabilities = [
  {
    title: "Cloud-Based Website Hosting",
    description:
      "Host your website on cloud infrastructure designed to support modern business websites.",
  },
  {
    title: "Location-Based Hosting",
    description:
      "Hosting can be provisioned based on geographical requirements to help improve website responsiveness for your target audience.",
  },
  {
    title: "Performance-Focused Hosting",
    description:
      "Use infrastructure designed to support faster website loading and a smoother experience for visitors.",
  },
  {
    title: "Scalable Hosting Environment",
    description:
      "Cloud-based hosting provides flexibility as your website and business requirements grow.",
  },
  {
    title: "Business Website Hosting",
    description:
      "Get hosting support for websites created for businesses and organizations across different industries.",
  },
  {
    title: "Reliable Online Availability",
    description:
      "Keep your website accessible to customers and prospects as part of your overall digital presence.",
  },
];

const hostingBenefits = [
  {
    title: "Improve Website Responsiveness",
    description: "Provide visitors with a smoother browsing experience.",
  },
  {
    title: "Reach Customers Across Locations",
    description:
      "Use geographically appropriate hosting infrastructure for your target audience.",
  },
  {
    title: "Support Business Growth",
    description:
      "Use a cloud-based environment that can adapt as your website requirements increase.",
  },
  {
    title: "Maintain Your Online Presence",
    description: "Keep your business website available to customers and prospects.",
  },
  {
    title: "Create a Better User Experience",
    description:
      "Faster and more responsive websites make it easier for visitors to explore your services.",
  },
];

function WebsiteHosting() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle =
      "Website Hosting Services | Cloud-Based Business Hosting | FranHive";
    const pageDescription =
      "FranHive provides cloud-based website hosting services designed for responsive performance, geographical hosting requirements, scalability and reliable business websites.";

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
    <main className="website-hosting-page">
      <section className="website-hosting-hero">
        <div className="container website-hosting-hero-inner">
          <div className="website-hosting-hero-copy">
            <span className="section-label">Website Hosting</span>
            <h1>Fast, reliable &amp; scalable hosting for your business</h1>
            <p className="website-hosting-lead">
              Your website needs more than just a place to store its files.
              Reliable hosting plays an important role in website performance,
              accessibility and the overall digital experience for your
              customers.
            </p>
            <p className="website-hosting-summary">
              FranHive provides <strong>cloud-based website hosting
              solutions</strong> designed to deliver responsive and reliable
              website performance while supporting businesses across different
              geographical locations.
            </p>
            <div className="website-hosting-actions">
              <a className="btn btn-black" href="#hosting-capabilities">
                Explore Hosting →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="website-hosting-trust">
              <span>✓ Cloud-based infrastructure</span>
              <span>✓ Location-aware hosting</span>
              <span>✓ Scales with your business</span>
            </div>
          </div>

          <aside
            className="website-hosting-hero-panel"
            aria-label="Website hosting overview"
          >
            <span className="website-hosting-panel-kicker">
              Reliable hosting
            </span>
            <h2>Hosting built for your online presence</h2>
            <p>
              Dependable hosting services with transparency, integrity and a
              strong focus on long-term client success.
            </p>
            <div className="website-hosting-panel-points">
              <span>Cloud infrastructure</span>
              <span>Responsive performance</span>
              <span>Geographical flexibility</span>
              <span>Room to grow</span>
            </div>
            <div className="website-hosting-panel-note">
              Hosting can be aligned with the geographical location of your
              users to help deliver a more responsive browsing experience.
            </div>
          </aside>
        </div>
      </section>

      <section className="website-hosting-intro">
        <div className="container website-hosting-intro-inner">
          <div>
            <span className="section-label">Reliable by design</span>
            <h2>Reliable hosting built for your online presence</h2>
          </div>
          <p>
            Our approach is simple: provide dependable hosting services while
            maintaining transparency, integrity and a strong focus on
            long-term client success. With cloud-based infrastructure, hosting
            can be aligned with the geographical location of your users to help
            deliver a more responsive browsing experience.
          </p>
        </div>
      </section>

      <section
        className="website-hosting-capabilities"
        id="hosting-capabilities"
      >
        <div className="container">
          <div className="website-hosting-section-heading">
            <span className="section-label">Our hosting capabilities</span>
            <h2>Dependable hosting to support your business website</h2>
            <p>
              Cloud-based hosting support designed around performance,
              geographical requirements and business growth.
            </p>
          </div>
          <div className="website-hosting-capability-grid">
            {hostingCapabilities.map((capability, index) => (
              <article
                className="website-hosting-capability-card"
                key={capability.title}
              >
                <div className="website-hosting-card-top">
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

      <section className="website-hosting-benefits">
        <div className="container">
          <div className="website-hosting-section-heading">
            <span className="section-label">Why website hosting matters</span>
            <h2>A better website experience starts with dependable hosting.</h2>
            <p>
              A website can only deliver a good customer experience when its
              underlying hosting environment is dependable.
            </p>
          </div>
          <div className="website-hosting-benefit-grid">
            {hostingBenefits.map((benefit, index) => (
              <article
                className="website-hosting-benefit-card"
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

      <section className="website-hosting-audience">
        <div className="container website-hosting-audience-inner">
          <div>
            <span className="section-label">Built around your audience</span>
            <h2>Cloud hosting that works around your audience.</h2>
          </div>
          <p>
            FranHive uses a <strong>cloud-based hosting approach</strong> where
            hosting can be provided according to geographical requirements.
            This helps businesses create a more responsive website experience
            for their intended audience while giving them the flexibility of
            cloud infrastructure.
          </p>
        </div>
      </section>

      <section className="website-hosting-final-cta">
        <div className="container">
          <div className="website-hosting-final-box">
            <div>
              <span className="section-label">
                Your website deserves hosting that keeps up
              </span>
              <h2>Host your business website with FranHive.</h2>
              <p>
                Get in touch to discuss hosting that fits your website,
                audience and business requirements.
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

export default WebsiteHosting;
