import { useEffect } from "react";
import "./inventoryManagement.css";

const inventoryCapabilities = [
  {
    title: "Real-Time Inventory Tracking",
    subtitle: "Know your stock position at a glance.",
    description:
      "Get a centralized view of inventory across products, locations and sales channels.",
    keywords:
      "Inventory Management Software, Real-Time Inventory Tracking, Stock Management, Inventory Visibility",
    items: [
      "Track available inventory",
      "Monitor stock movement",
      "View inventory across multiple locations",
      "Track stock across different sales channels",
      "Maintain centralized product records",
      "Monitor incoming and outgoing inventory",
      "Identify low-stock situations",
      "Improve stock visibility for operational teams",
      "Reduce dependency on manual inventory records",
    ],
  },
  {
    title: "Multi-Location Inventory",
    subtitle: "Manage inventory across warehouses and business locations.",
    description:
      "Organize inventory information across your operational network for better visibility and coordination.",
    keywords:
      "Multi-Location Inventory, Warehouse Inventory Management, Multi-Warehouse Management, Inventory Control",
    items: [
      "Monitor stock across multiple warehouses",
      "Track location-wise inventory",
      "Understand where products are available",
      "Allocate inventory to relevant sales channels",
      "Improve warehouse coordination",
      "Reduce inventory duplication",
      "Support centralized inventory planning",
      "Improve visibility across distribution points",
    ],
  },
  {
    title: "Stock Level Management",
    subtitle: "Keep the right products available at the right time.",
    description:
      "Monitor stock levels more effectively to help avoid unnecessary stock-outs and excessive inventory.",
    keywords:
      "Stock Level Management, Stock Control, Inventory Optimization, Stock Availability",
    items: [
      "Monitor current stock levels",
      "Identify products approaching minimum stock levels",
      "Track inventory availability",
      "Monitor fast-moving products",
      "Identify slow-moving inventory",
      "Support better replenishment decisions",
      "Reduce the risk of unnecessary overstocking",
    ],
  },
  {
    title: "Inventory Cost Control",
    subtitle: "Reduce unnecessary inventory costs.",
    description:
      "Use inventory information to understand where money is being tied up and support more informed decisions.",
    keywords:
      "Inventory Cost Optimization, Inventory Turnover, Stock Optimization, Inventory Analytics",
    items: [
      "Identify slow-moving products",
      "Monitor excess inventory",
      "Analyse inventory movement",
      "Understand product performance",
      "Reduce unnecessary stock holding",
      "Improve purchasing decisions",
      "Optimize storage utilization",
      "Support healthier inventory turnover",
    ],
  },
  {
    title: "Warehouse Management",
    subtitle: "Bring greater visibility to warehouse operations.",
    description:
      "Organize inventory information across warehouses and storage locations.",
    keywords:
      "Warehouse Management Software, Warehouse Inventory, Warehouse Automation, Inventory Operations",
    items: [
      "Track warehouse-level inventory",
      "Monitor stock movement",
      "Organize products by location",
      "Improve inventory allocation",
      "Monitor incoming and outgoing stock",
      "Improve coordination between storage locations",
      "Reduce manual inventory tracking",
      "Support more organized warehouse operations",
    ],
  },
  {
    title: "Sales Channel Inventory",
    subtitle: "Keep inventory aligned across your sales channels.",
    description:
      "Organize inventory information consistently for businesses selling through multiple channels.",
    keywords:
      "Multi-Channel Inventory, Omnichannel Inventory Management, Sales Channel Management, Retail Inventory Software",
    items: [
      "Monitor inventory by sales channel",
      "Allocate stock according to business requirements",
      "Improve stock visibility",
      "Reduce inconsistent inventory records",
      "Support multi-channel inventory planning",
      "Identify channel-specific inventory requirements",
      "Improve coordination between sales and operations",
    ],
  },
  {
    title: "Demand Planning & Forecasting",
    subtitle: "Plan inventory based on business data.",
    description:
      "Use historical inventory and sales patterns to support better planning decisions.",
    keywords:
      "Demand Forecasting, Inventory Forecasting, Demand Planning, Predictive Inventory Management",
    items: [
      "Analyse historical inventory activity",
      "Identify product demand patterns",
      "Monitor fast-moving products",
      "Identify slow-moving products",
      "Support replenishment planning",
      "Improve purchasing decisions",
      "Reduce unnecessary inventory holding",
      "Support better cash-flow planning",
    ],
  },
  {
    title: "Stock Replenishment",
    subtitle: "Replenish before inventory becomes a problem.",
    description:
      "Use better inventory visibility to identify when products may need replenishment.",
    keywords:
      "Inventory Replenishment, Automated Reordering, Stock Replenishment, Inventory Planning",
    items: [
      "Monitor stock levels",
      "Identify products requiring replenishment",
      "Track incoming inventory",
      "Compare current stock with expected requirements",
      "Support purchasing decisions",
      "Reduce stock-out risks",
      "Improve product availability",
      "Create more structured replenishment workflows",
    ],
  },
  {
    title: "Inventory Reporting & Analytics",
    subtitle: "Turn inventory data into useful business insights.",
    description:
      "Make inventory data easier to understand and analyse so your team can act on it.",
    keywords:
      "Inventory Analytics, Inventory Reports, Stock Analytics, Business Intelligence",
    items: [
      "Generate inventory reports",
      "Analyse stock movement",
      "Monitor product performance",
      "Identify slow-moving inventory",
      "Track stock availability",
      "Compare inventory across locations",
      "Monitor operational trends",
      "Create management-level inventory insights",
    ],
  },
  {
    title: "Inventory Allocation",
    subtitle: "Put inventory where it can create the most value.",
    description:
      "Support effective allocation when products are available across multiple locations or sales channels.",
    keywords:
      "Inventory Allocation, Stock Allocation, Inventory Distribution, Supply Planning",
    items: [
      "Allocate inventory across locations",
      "Support sales-channel requirements",
      "Monitor available stock",
      "Improve stock utilization",
      "Reduce unnecessary inventory concentration",
      "Support distribution planning",
      "Improve product availability",
    ],
  },
  {
    title: "Inventory Data Accuracy",
    subtitle: "Replace manual counting with structured digital records.",
    description:
      "Digitize inventory workflows to help reduce manual effort and the possibility of data inconsistencies.",
    keywords:
      "Digital Inventory Management, Inventory Accuracy, Automated Stock Management, Inventory Digitization",
    items: [
      "Reduce repetitive data entry",
      "Maintain centralized inventory records",
      "Reduce duplicate records",
      "Improve stock visibility",
      "Minimize manual reconciliation",
      "Access inventory information faster",
      "Improve operational accuracy",
      "Reduce time spent on repeated inventory checks",
    ],
  },
  {
    title: "Inventory & Business System Integration",
    subtitle: "Connect inventory with the rest of your business.",
    description:
      "Bring inventory workflows closer to sales, purchasing, customers, warehouses and financial processes.",
    keywords:
      "Inventory Integration, ERP Integration, CRM Integration, Business System Integration",
    items: [
      "Connect inventory with sales workflows",
      "Integrate with existing business systems where supported",
      "Keep inventory information connected with operational processes",
      "Reduce duplicate data entry",
      "Improve information flow between teams",
      "Create a more connected business workflow",
    ],
  },
];

const intelligenceSteps = [
  {
    title: "Monitor",
    description: "Know your current stock position across products and locations.",
  },
  {
    title: "Analyse",
    description: "Understand product movement, availability and inventory trends.",
  },
  {
    title: "Plan",
    description:
      "Use historical information and demand patterns to support future inventory decisions.",
  },
  {
    title: "Optimize",
    description:
      "Reduce excess inventory, improve availability and make better use of storage and working capital.",
  },
];

const inventoryBenefits = [
  {
    title: "Centralized Inventory Data",
    description: "Keep inventory information organized in one connected system.",
  },
  {
    title: "Multi-Location Visibility",
    description: "Understand inventory across warehouses, locations and sales channels.",
  },
  {
    title: "Data-Driven Planning",
    description: "Use inventory trends to support purchasing and replenishment decisions.",
  },
  {
    title: "Reduced Manual Work",
    description: "Digitize repetitive inventory processes and reduce spreadsheet dependency.",
  },
  {
    title: "Operational Efficiency",
    description: "Give teams faster access to the information they need.",
  },
  {
    title: "Scalable Inventory Management",
    description: "Build an inventory management process that can grow with your business.",
  },
];

function InventoryManagement() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle =
      "Inventory Management Software | Stock & Warehouse Management | FranHive";
    const pageDescription =
      "FranHive Inventory Management helps businesses track stock, manage multiple locations, optimize inventory, support demand forecasting, monitor warehouses and improve inventory visibility.";

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
    <main className="inventory-page">
      <section className="inventory-hero">
        <div className="container inventory-hero-inner">
          <div className="inventory-hero-copy">
            <span className="section-label">Inventory Management</span>
            <h1>Know what you have. Know where it is. Know when you need it.</h1>
            <p className="inventory-hero-lead">
              Inventory can quickly become difficult to manage as a business
              grows. Multiple products, warehouses, sales channels, suppliers
              and changing customer demand can make spreadsheets and manual
              stock counting increasingly inefficient.
            </p>
            <p className="inventory-hero-summary">
              <strong>FranHive Inventory Management</strong> helps businesses
              centralize stock information, monitor inventory movement and
              improve control over products across locations and sales channels.
            </p>
            <p className="inventory-hero-summary">
              By digitizing inventory workflows, businesses can reduce manual
              effort, improve stock accuracy, identify potential shortages
              earlier and make more informed purchasing and replenishment
              decisions.
            </p>
            <div className="inventory-hero-actions">
              <a className="btn btn-black" href="#inventory-capabilities">
                Explore Inventory Management →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="inventory-hero-trust">
              <span>✓ Centralized stock visibility</span>
              <span>✓ Multi-location operations</span>
              <span>✓ Data-driven planning</span>
            </div>
          </div>

          <aside className="inventory-hero-panel" aria-label="Inventory overview">
            <span className="inventory-panel-kicker">Inventory intelligence</span>
            <h2>Smarter inventory. Better business control.</h2>
            <p>
              Move from fragmented inventory records to a more structured and
              data-driven inventory management process.
            </p>
            <div className="inventory-panel-points">
              <span>Stock visibility</span>
              <span>Warehouse coordination</span>
              <span>Demand planning</span>
              <span>Replenishment</span>
            </div>
            <div className="inventory-panel-note">
              Centralized inventory information for better operational
              decisions.
            </div>
          </aside>
        </div>
      </section>

      <section className="inventory-intro">
        <div className="container inventory-intro-inner">
          <div>
            <span className="section-label">Smarter inventory. Better control.</span>
            <h2>One connected view of your stock.</h2>
          </div>
          <p>
            FranHive helps your team move from fragmented inventory records to
            a more structured and data-driven inventory management process.
            Centralized inventory information can improve stock visibility,
            warehouse coordination, demand planning, replenishment and
            operational efficiency.
          </p>
        </div>
      </section>

      <section
        className="inventory-capabilities"
        id="inventory-capabilities"
      >
        <div className="container">
          <div className="inventory-section-heading">
            <span className="section-label">Core capabilities</span>
            <h2>Keep products, locations and inventory workflows connected</h2>
            <p>
              Get a clearer view of stock movement and availability, and give
              your team better information for everyday inventory decisions.
            </p>
          </div>

          <div className="inventory-capability-grid">
            {inventoryCapabilities.map((capability, index) => (
              <article
                className="inventory-capability-card"
                key={capability.title}
              >
                <div className="inventory-capability-top">
                  <span className="inventory-capability-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inventory-capability-mark" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{capability.title}</h3>
                <h4>{capability.subtitle}</h4>
                <p>{capability.description}</p>
                <ul>
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="inventory-keywords">
                  <strong>Keywords:</strong> {capability.keywords}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inventory-intelligence">
        <div className="container">
          <div className="inventory-section-heading">
            <span className="section-label">From stock tracking to intelligence</span>
            <h2>Go beyond simply knowing how much stock you have.</h2>
            <p>
              Understand what is moving, what isn&apos;t, where demand is
              coming from and what your business should prepare for next.
              FranHive helps transform inventory data into operational
              visibility.
            </p>
          </div>
          <div className="inventory-intelligence-grid">
            {intelligenceSteps.map((step, index) => (
              <article className="inventory-step-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < intelligenceSteps.length - 1 && (
                  <span className="inventory-step-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inventory-why">
        <div className="container">
          <div className="inventory-section-heading">
            <span className="section-label">Why FranHive Inventory Management?</span>
            <h2>Better inventory visibility. Better operational decisions.</h2>
          </div>
          <div className="inventory-benefit-grid">
            {inventoryBenefits.map((benefit, index) => (
              <article className="inventory-benefit-card" key={benefit.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inventory-growing">
        <div className="container inventory-growing-inner">
          <div>
            <span className="section-label">Built for growing businesses</span>
            <h2>Inventory visibility that grows with your operations.</h2>
          </div>
          <p>
            Whether you manage a <strong>retail operation, multiple
            warehouses, distribution network, product-based business or
            multiple sales channels</strong>, inventory visibility becomes
            increasingly important as operations grow.
            FranHive helps bring your inventory information and operational
            workflows closer together so your teams can make faster, more
            informed decisions.
          </p>
        </div>
      </section>

      <section className="inventory-final-cta">
        <div className="container">
          <div className="inventory-final-box">
            <div>
              <span className="section-label">Your inventory should work with your business</span>
              <h2>Stop guessing what you have. Start knowing what you need.</h2>
              <p>
                Move from reactive stock management to planned, data-driven
                inventory operations. Improve product availability with better
                visibility into stock levels, movement, locations and demand.
              </p>
              <p className="inventory-final-prompt">
                Ready to take control of your inventory? Let&apos;s build a
                smarter inventory workflow around your business.
              </p>
            </div>
            <div className="inventory-final-actions">
              <a className="btn btn-yellow" href="/contact-us">
                Talk to FranHive →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InventoryManagement;
