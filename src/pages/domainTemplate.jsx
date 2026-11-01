import "./domainTemplate.css";

function DomainPageTemplate({
  title,
  subtitle,
  summary,
  bullets,
  keyword,
  tag = "Domain",
  badge = "FranHive CRM"
}) {
  return (
    <main className="domain-shell">
      <section className="domain-hero">
        <div className="container domain-hero-inner">
          <div className="domain-hero-copy">
            <span className="section-label">{tag}</span>
            <h1>{title}</h1>
            <p className="domain-subtitle">{subtitle}</p>
            <p className="domain-summary">{summary}</p>

            <div className="domain-badges">
              <span>{badge}</span>
              <span>Automation</span>
              <span>Analytics</span>
            </div>
          </div>

          <div className="domain-hero-panel">
            <div className="mini-panel-head">Business impact</div>
            <ul>
              <li>Lead capture and follow-up</li>
              <li>Customer engagement tracking</li>
              <li>Workflow automation</li>
              <li>Performance dashboards</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="domain-support">
        <div className="container domain-grid">
          <div className="domain-card">
            <h3>What FranHive helps you manage</h3>
            <ul className="domain-list">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="domain-card accent-card">
            <h3>Core focus</h3>
            <p>
              Every business has unique processes. FranHive connects your sales,
              communications, operations, and reporting into a single system that
              fits the way your team works.
            </p>
            <div className="keyword-box">{keyword}</div>
          </div>
        </div>
      </section>

      <section className="domain-cta-wrap">
        <div className="container">
          <div className="domain-cta-box">
            <div>
              <span className="section-label">Built Around Your Business</span>
              <h2>Your Industry Is Unique. Your Technology Should Be Too.</h2>
            </div>

            <a href="/contact-us" className="btn btn-black">
              Talk to FranHive →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DomainPageTemplate;
