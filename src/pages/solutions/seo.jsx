import { useEffect } from "react";
import "./seo.css";

const seoApproach = [
  {
    title: "Keyword Research & Strategy",
    description:
      "Identify relevant search terms and opportunities related to your products, services, industry and target audience.",
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize website pages, headings, content, metadata, URLs and other relevant page elements for better search visibility.",
  },
  {
    title: "Quality Content Strategy",
    description:
      "Create useful, relevant content designed around what your potential customers are searching for.",
  },
  {
    title: "Technical SEO",
    description:
      "Focus on website structure and technical elements that help search engines crawl, understand and index your website.",
  },
  {
    title: "Local SEO",
    description:
      "Improve online visibility for location-based searches so potential customers in relevant areas can discover your business.",
  },
  {
    title: "SEO Performance Analysis",
    description:
      "Monitor search performance and identify opportunities for continuous optimization.",
  },
  {
    title: "Continuous SEO Optimization",
    description:
      "Refine your SEO approach as search behaviour, performance and search trends evolve.",
  },
];

const seoBenefits = [
  {
    title: "Increase Search Visibility",
    description: "Make your business easier to discover through relevant searches.",
  },
  {
    title: "Reach Potential Customers",
    description:
      "Connect with people already searching for solutions related to your business.",
  },
  {
    title: "Build Organic Traffic",
    description: "Attract visitors through unpaid search results.",
  },
  {
    title: "Strengthen Brand Awareness",
    description: "Increase the number of people who encounter your business online.",
  },
  {
    title: "Compete More Effectively",
    description:
      "A well-optimized website can help smaller businesses compete for relevant search opportunities.",
  },
  {
    title: "Create Long-Term Value",
    description:
      "Well-executed SEO can continue generating organic visibility over time.",
  },
];

const searchStages = ["Discoverability", "Visibility", "Traffic", "Opportunities"];

function SEO() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle =
      "SEO Services | Search Engine Optimization for Businesses | FranHive";
    const pageDescription =
      "FranHive provides SEO services including keyword strategy, on-page SEO, technical SEO, local SEO, content optimization and ongoing search performance improvement.";

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
    <main className="seo-page">
      <section className="seo-hero">
        <div className="container seo-hero-inner">
          <div className="seo-hero-copy">
            <span className="section-label">Search Engine Optimization</span>
            <h1>Get found. Build visibility. Grow organically.</h1>
            <p className="seo-hero-lead">
              In a digital-first market, being visible when customers search
              for your products or services can make a significant difference.
              <strong> Search Engine Optimization (SEO)</strong> helps improve
              your website&apos;s visibility in search engines and makes it
              easier for potential customers to discover your business.
            </p>
            <p className="seo-hero-summary">
              FranHive uses a focused SEO approach built around{" "}
              <strong>
                relevant keywords, quality content, website optimization and
                continuous improvement
              </strong>{" "}
              to help businesses strengthen their organic search presence.
            </p>
            <div className="seo-hero-actions">
              <a className="btn btn-black" href="#seo-approach">
                Explore Our SEO Approach →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="seo-hero-trust">
              <span>✓ Relevant search opportunities</span>
              <span>✓ Useful, quality content</span>
              <span>✓ Continuous improvement</span>
            </div>
          </div>

          <aside className="seo-hero-panel" aria-label="SEO overview">
            <span className="seo-panel-kicker">Organic search growth</span>
            <h2>SEO that builds long-term visibility</h2>
            <p>
              SEO is more than simply trying to rank for keywords. It is about
              creating a website search engines can understand and users find
              genuinely useful.
            </p>
            <div className="seo-panel-points">
              <span>Keyword strategy</span>
              <span>Helpful content</span>
              <span>Technical foundations</span>
              <span>Ongoing analysis</span>
            </div>
            <div className="seo-panel-note">
              Organic search can provide a sustainable way to reach potential
              customers without relying entirely on paid advertising.
            </div>
          </aside>
        </div>
      </section>

      <section className="seo-intro">
        <div className="container seo-intro-inner">
          <div>
            <span className="section-label">Long-term visibility</span>
            <h2>SEO that builds long-term visibility</h2>
          </div>
          <p>
            SEO is more than simply trying to rank for keywords. It is about
            creating a website that search engines can understand and users
            find genuinely useful. For growing businesses, organic search can
            provide a sustainable way to reach potential customers without
            relying entirely on paid advertising.
          </p>
        </div>
      </section>

      <section className="seo-approach" id="seo-approach">
        <div className="container">
          <div className="seo-section-heading">
            <span className="section-label">Our SEO approach</span>
            <h2>Build a stronger foundation for organic search</h2>
            <p>
              A focused approach to search relevance, useful content, website
              quality and continuous optimization.
            </p>
          </div>
          <div className="seo-approach-grid">
            {seoApproach.map((item, index) => (
              <article className="seo-approach-card" key={item.title}>
                <div className="seo-card-top">
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

      <section className="seo-benefits">
        <div className="container">
          <div className="seo-section-heading">
            <span className="section-label">Why SEO matters</span>
            <h2>Reach people who are actively looking for what you offer.</h2>
            <p>
              A strong organic search presence can help your business connect
              with people searching for your products or services.
            </p>
          </div>
          <div className="seo-benefit-grid">
            {seoBenefits.map((benefit, index) => (
              <article className="seo-benefit-card" key={benefit.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-quality">
        <div className="container seo-quality-inner">
          <div>
            <span className="section-label">Focused on quality</span>
            <h2>SEO focused on quality, not just quantity.</h2>
          </div>
          <div>
            <p>
              SEO isn&apos;t simply about attracting more visitors.{" "}
              <strong>The goal is to attract the right visitors.</strong>
            </p>
            <p>
              FranHive focuses on relevant search opportunities and meaningful
              website optimization so that your organic traffic has a stronger
              connection to your products, services and business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="seo-journey">
        <div className="container">
          <div className="seo-section-heading">
            <span className="section-label">The organic growth journey</span>
            <h2>From search discovery to business opportunities.</h2>
          </div>
          <ol className="seo-journey-list">
            {searchStages.map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="seo-final-cta">
        <div className="container">
          <div className="seo-final-box">
            <div>
              <span className="section-label">
                Make your business easier to find
              </span>
              <h2>Build your organic search presence with FranHive.</h2>
              <p>
                Your customers are already searching. Get discovered by the
                people searching for what you offer.
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

export default SEO;
