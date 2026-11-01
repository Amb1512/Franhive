import { useEffect } from "react";
import "./ppc.css";

const ppcApproach = [
  {
    title: "Keyword Research",
    description:
      "Identify relevant and commercially valuable keywords based on your products, services and target audience.",
  },
  {
    title: "Campaign Structure",
    description:
      "Organize keywords into focused campaigns and ad groups for better targeting and management.",
  },
  {
    title: "Targeted Ad Campaigns",
    description:
      "Create campaigns designed to reach users actively searching for relevant products or services.",
  },
  {
    title: "Ad Optimization",
    description:
      "Continuously refine campaigns based on performance, relevance, clicks and conversion data.",
  },
  {
    title: "Conversion-Focused Landing Pages",
    description:
      "Create or optimize landing pages so visitors have a clear path toward taking the desired action.",
  },
  {
    title: "Budget Management",
    description:
      "Set and manage advertising budgets according to your business objectives and campaign requirements.",
  },
  {
    title: "Performance Tracking",
    description:
      "Monitor key metrics such as clicks, click-through rate (CTR), conversions and return on ad spend (ROAS).",
  },
];

const ppcBenefits = [
  {
    title: "Cost-Controlled Campaigns",
    description: "Set advertising budgets according to your business requirements.",
  },
  {
    title: "Faster Website Traffic",
    description:
      "Generate targeted traffic without waiting for organic rankings to develop.",
  },
  {
    title: "Greater Search Visibility",
    description:
      "Ads can appear prominently when users search for relevant terms.",
  },
  {
    title: "Targeted Audience Reach",
    description:
      "Reach users based on relevant search intent and campaign targeting.",
  },
  {
    title: "Multiple Campaign Opportunities",
    description:
      "Run different campaigns and ad groups for different products, services or keywords.",
  },
  {
    title: "Trackable Performance",
    description:
      "Measure clicks, traffic, conversions and other campaign performance indicators.",
  },
  {
    title: "Conversion Opportunities",
    description:
      "Well-structured campaigns can help turn targeted website visitors into enquiries and customers.",
  },
];

const campaignElements = [
  "Relevant Keywords",
  "Strong Campaign Structure",
  "Useful Ads",
  "Optimized Landing Pages",
  "Continuous Analysis",
];

const promotionTypes = [
  "Products",
  "Services",
  "Business websites",
  "Special offers",
  "Lead-generation campaigns",
  "Local services",
  "New business offerings",
];

function PPC() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle =
      "PPC Advertising Services | Pay-Per-Click Campaign Management | FranHive";
    const pageDescription =
      "FranHive provides PPC advertising services focused on keyword targeting, campaign management, ad optimization, landing pages, budget control and measurable campaign performance.";

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
    <main className="ppc-page">
      <section className="ppc-hero">
        <div className="container ppc-hero-inner">
          <div className="ppc-hero-copy">
            <span className="section-label">Pay-Per-Click Advertising</span>
            <h1>Reach the right audience at the right time</h1>
            <p className="ppc-hero-lead">
              <strong>Pay-Per-Click (PPC)</strong> is a performance-based
              digital advertising model where businesses pay when someone
              clicks on their advertisement. It allows businesses to generate
              targeted website traffic alongside their organic search efforts.
            </p>
            <p className="ppc-hero-summary">
              FranHive helps businesses build{" "}
              <strong>structured, targeted PPC campaigns</strong> focused on
              relevant keywords, audience intent, website traffic and
              conversions.
            </p>
            <div className="ppc-hero-actions">
              <a className="btn btn-black" href="#ppc-approach">
                Explore Our PPC Approach →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="ppc-hero-trust">
              <span>✓ Targeted search campaigns</span>
              <span>✓ Budget-aware management</span>
              <span>✓ Measurable performance</span>
            </div>
          </div>

          <aside className="ppc-hero-panel" aria-label="PPC campaign overview">
            <span className="ppc-panel-kicker">Performance advertising</span>
            <h2>Target better. Spend smarter. Grow faster.</h2>
            <p>
              PPC can put your business in front of relevant audiences when
              they are actively searching for what you offer.
            </p>
            <div className="ppc-panel-metrics">
              <div>
                <strong>Clicks</strong>
                <span>Measure engagement</span>
              </div>
              <div>
                <strong>Leads</strong>
                <span>Track conversions</span>
              </div>
              <div>
                <strong>ROAS</strong>
                <span>Review campaign value</span>
              </div>
              <div>
                <strong>Budget</strong>
                <span>Manage spend</span>
              </div>
            </div>
            <div className="ppc-panel-note">
              The objective is not simply to generate clicks, but to attract
              relevant visitors who are more likely to become customers.
            </div>
          </aside>
        </div>
      </section>

      <section className="ppc-how">
        <div className="container ppc-how-inner">
          <div>
            <span className="section-label">How PPC works</span>
            <h2>Be there when potential customers are searching.</h2>
          </div>
          <p>
            Search engine advertising allows businesses to place ads when
            potential customers search for keywords related to their products
            or services. For example, when someone searches for a term related
            to a business&apos;s service, its advertisement may appear among
            sponsored search results.
          </p>
        </div>
      </section>

      <section className="ppc-approach" id="ppc-approach">
        <div className="container">
          <div className="ppc-section-heading">
            <span className="section-label">Our PPC approach</span>
            <h2>Structured campaigns. Continuous optimization.</h2>
            <p>
              Coordinate keywords, campaign structure, ads, landing pages and
              performance measurement around your business goals.
            </p>
          </div>
          <div className="ppc-approach-grid">
            {ppcApproach.map((step, index) => (
              <article className="ppc-approach-card" key={step.title}>
                <div className="ppc-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ppc-benefits">
        <div className="container">
          <div className="ppc-section-heading">
            <span className="section-label">Benefits of PPC advertising</span>
            <h2>Targeted and measurable advertising.</h2>
            <p>
              Reach relevant audiences and understand how your campaigns are
              performing.
            </p>
          </div>
          <div className="ppc-benefit-grid">
            {ppcBenefits.map((benefit, index) => (
              <article className="ppc-benefit-card" key={benefit.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ppc-optimization">
        <div className="container ppc-optimization-inner">
          <div>
            <span className="section-label">More than buying clicks</span>
            <h2>Build a campaign around relevance and continuous analysis.</h2>
            <p>
              Simply paying for clicks does not guarantee a successful
              campaign. The more relevant and useful your campaigns are to
              users, the better positioned they can be for efficient
              advertising performance.
            </p>
          </div>
          <ol className="ppc-campaign-elements">
            {campaignElements.map((element, index) => (
              <li key={element}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{element}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ppc-audience">
        <div className="container">
          <div className="ppc-section-heading">
            <span className="section-label">Who can benefit from PPC?</span>
            <h2>Reach people actively searching for your offerings.</h2>
            <p>
              PPC can be particularly useful for small and growing businesses
              that want greater control over advertising budgets and want to
              reach people actively searching for what they offer.
            </p>
          </div>
          <div className="ppc-promotion-list">
            {promotionTypes.map((type, index) => (
              <div className="ppc-promotion-item" key={type}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{type}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ppc-final-cta">
        <div className="container">
          <div className="ppc-final-box">
            <div>
              <span className="section-label">
                Turn search intent into business opportunities
              </span>
              <h2>Build performance-focused PPC campaigns with FranHive.</h2>
              <p>
                Your potential customers are already searching for solutions.
                Put your business in front of relevant audiences at the moment
                they are looking for what you offer.
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

export default PPC;
