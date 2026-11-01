import { useEffect } from "react";
import "./franhiveCRM.css";

const crmCapabilities = [
  {
    title: "Omnichannel Ticketing",
    subtitle: "Bring customer conversations together.",
    description:
      "Manage customer enquiries and service requests through a centralized ticketing environment.",
    keywords:
      "Omnichannel CRM, Customer Support CRM, Ticket Management, Customer Experience Management",
    items: [
      "Capture customer support enquiries",
      "Organize conversations and service requests",
      "Track ticket status from creation to resolution",
      "Maintain customer interaction history",
      "Give teams a complete view of customer issues",
      "Improve response visibility",
      "Connect customer records with service activities",
      "Support a more consistent customer experience",
    ],
  },
  {
    title: "Automated Ticket Assignment",
    subtitle: "Get every request to the right person.",
    description:
      "Reduce manual ticket distribution with intelligent assignment workflows.",
    keywords:
      "Ticket Automation, Workflow Automation, Customer Support Automation, CRM Automation",
    items: [
      "Automatically assign incoming tickets",
      "Route requests based on predefined rules",
      "Distribute workload across team members",
      "Track ticket ownership",
      "Reduce response delays",
      "Improve team accountability",
      "Monitor unresolved requests",
    ],
  },
  {
    title: "SLA Management",
    subtitle: "Make service commitments measurable.",
    description:
      "Create structured service workflows and monitor response and resolution timelines.",
    keywords:
      "SLA Management, Service Management, Customer Support Analytics, CRM Service Automation",
    items: [
      "Define service-level requirements",
      "Monitor response times",
      "Track resolution deadlines",
      "Identify overdue tickets",
      "Improve service accountability",
      "Monitor team performance",
      "Create reports around service activity",
    ],
  },
  {
    title: "Data Import & CRM Integration",
    subtitle: "Bring your existing business data into one system.",
    description:
      "Centralize customer information instead of maintaining disconnected databases.",
    keywords:
      "CRM Data Migration, CRM Integration, Customer Data Management, Data Centralization",
    items: [
      "Import existing customer and business data",
      "Organize information inside your CRM",
      "Reduce duplicate data entry",
      "Connect customer records with business workflows",
      "Maintain centralized customer information",
      "Create a stronger foundation for reporting and analytics",
    ],
  },
  {
    title: "Web Forms",
    subtitle: "Turn website visitors into CRM leads.",
    description:
      "Capture enquiries directly from your website and bring them into your sales workflow.",
    keywords:
      "Lead Capture Forms, Website CRM Integration, Web-to-Lead, Lead Generation",
    items: [
      "Create lead capture forms",
      "Collect customer information",
      "Automatically create CRM records",
      "Route new enquiries to the right team",
      "Reduce manual lead entry",
      "Start follow-up workflows faster",
      "Track where enquiries originate",
    ],
  },
  {
    title: "Scheduled Reports",
    subtitle: "Get the right business information at the right time.",
    description:
      "Automate recurring reports so your team does not have to manually prepare the same information repeatedly.",
    keywords:
      "Automated Reports, CRM Reporting, Business Intelligence, Sales Analytics",
    items: [
      "Schedule recurring reports",
      "Share reports with relevant teams",
      "Monitor sales and customer activity",
      "Track lead performance",
      "Review operational metrics",
      "Improve management visibility",
      "Support data-driven decision-making",
    ],
  },
  {
    title: "Lead Management",
    subtitle: "Capture. Qualify. Convert.",
    description:
      "Manage your entire lead journey from first interaction to conversion.",
    keywords:
      "Lead Management Software, Sales CRM, Lead Tracking, Sales Pipeline Management, CRM Lead Automation",
    items: [
      "Capture leads from multiple channels",
      "Centralize prospect information",
      "Assign leads to team members",
      "Track lead status",
      "Schedule follow-ups",
      "Monitor sales activities",
      "Track lead sources",
      "Identify high-value opportunities",
      "Reduce lead leakage",
      "Move qualified prospects through the sales pipeline",
    ],
  },
  {
    title: "Real-Time Dashboard",
    subtitle: "See what is happening across your business.",
    description:
      "Turn CRM data into simple, actionable business visibility.",
    keywords: "CRM Dashboard, Real-Time Analytics, Business Dashboard, Sales Dashboard",
    items: [
      "Monitor leads and opportunities",
      "Track sales activity",
      "View customer engagement",
      "Monitor support activity",
      "Track team performance",
      "Identify pending actions",
      "Visualize important business metrics",
      "Build dashboards around your reporting requirements",
    ],
  },
  {
    title: "Reports & Analytics",
    subtitle: "Turn customer data into business insights.",
    description:
      "Go beyond storing information and use your CRM data to understand business performance.",
    keywords:
      "CRM Analytics, Sales Analytics, Customer Analytics, Business Intelligence, Data-Driven Decisions",
    items: [
      "Analyse lead performance",
      "Monitor conversion activity",
      "Track sales trends",
      "Review customer engagement",
      "Measure team productivity",
      "Identify business patterns",
      "Generate management reports",
      "Support data-driven decisions",
    ],
  },
  {
    title: "Social Media Integration",
    subtitle: "Connect digital conversations with your CRM.",
    description:
      "Bring customer interactions from digital channels closer to your sales and customer management workflows.",
    keywords:
      "Social CRM, Social Media Integration, Social Lead Generation, Digital Customer Engagement",
    items: [
      "Capture leads from social platforms",
      "Connect digital enquiries with CRM records",
      "Track lead sources",
      "Maintain customer interaction context",
      "Support faster follow-ups",
      "Measure the effectiveness of digital campaigns",
    ],
  },
  {
    title: "Quotations & Payments",
    subtitle: "Move from opportunity to transaction more efficiently.",
    description:
      "Keep quotation and payment-related activities connected to your customer records.",
    keywords:
      "CRM Quotation Management, Sales Automation, Payment Management, Quote Management",
    items: [
      "Create and manage quotations",
      "Track quotation status",
      "Maintain customer-related transaction information",
      "Improve sales process visibility",
      "Keep relevant payment information organized",
      "Connect sales activities with customer records",
    ],
  },
  {
    title: "Knowledge Base",
    subtitle: "Give your customers and teams access to the right information.",
    description:
      "Create a centralized knowledge resource that makes information easier to find and use.",
    keywords:
      "Knowledge Base Software, Customer Self-Service, Support Knowledge Base, CRM Knowledge Management",
    items: [
      "Organize frequently needed information",
      "Create structured knowledge resources",
      "Help teams find answers faster",
      "Support customer service workflows",
      "Reduce repetitive internal queries",
      "Improve consistency in customer communication",
    ],
  },
  {
    title: "Custom Reporting",
    subtitle: "Build reports around the metrics that matter to you.",
    description:
      "Align reporting with the way your business measures performance.",
    keywords:
      "Custom CRM Reports, CRM Reporting Software, Business Reporting, Custom Analytics",
    items: [
      "Create customized reports",
      "Select relevant business metrics",
      "Analyze customer and sales data",
      "Monitor operational performance",
      "Create management-focused reporting",
      "Support different teams with relevant information",
    ],
  },
  {
    title: "Contact Management",
    subtitle: "One complete view of every customer relationship.",
    description:
      "Keep customer information organized and accessible across your organization.",
    keywords:
      "Contact Management, Customer Database, CRM Contact Management, Customer Information Management",
    items: [
      "Store customer information centrally",
      "Maintain contact details",
      "Track customer interactions",
      "Record notes and activities",
      "View relationship history",
      "Connect contacts with leads and opportunities",
      "Improve team collaboration",
      "Reduce duplicate customer records",
    ],
  },
  {
    title: "Calendar & Reminder Management",
    subtitle: "Never lose track of the next important action.",
    description: "Connect customer activities with your team's schedules.",
    keywords:
      "CRM Calendar, Sales Follow-Up, Appointment Management, Reminder Automation",
    items: [
      "Schedule meetings and appointments",
      "Set follow-up reminders",
      "Track important dates",
      "Manage customer-related activities",
      "Receive automated reminders",
      "Improve sales follow-up",
      "Reduce missed appointments",
      "Keep teams aligned",
    ],
  },
  {
    title: "Document Management",
    subtitle: "Keep customer-related documents connected and organized.",
    description: "Store important documents alongside the records they belong to.",
    keywords:
      "CRM Document Management, Digital Document Management, Customer Records",
    items: [
      "Upload digital documents",
      "Connect documents with customer records",
      "Organize business files",
      "Quickly access relevant information",
      "Reduce scattered document storage",
      "Improve information accessibility",
      "Maintain a centralized digital workspace",
    ],
  },
  {
    title: "Email Marketing",
    subtitle: "Send the right message to the right audience.",
    description:
      "Use customer data to create more relevant marketing communication.",
    keywords:
      "CRM Email Marketing, Email Automation, Customer Segmentation, Marketing Automation",
    items: [
      "Create targeted email campaigns",
      "Segment customer audiences",
      "Promote products and services",
      "Send personalized communication",
      "Track campaign activity",
      "Maintain customer engagement",
      "Connect campaign activity with CRM data",
    ],
  },
  {
    title: "Lead Scoring",
    subtitle: "Focus your team's attention where it matters most.",
    description:
      "Prioritize opportunities based on customer activity and business signals.",
    keywords:
      "Lead Scoring, AI Lead Prioritization, Sales Intelligence, Lead Qualification",
    items: [
      "Assign scores to leads",
      "Identify high-interest prospects",
      "Prioritize sales follow-ups",
      "Track engagement signals",
      "Support faster decision-making",
      "Improve sales team productivity",
      "Focus resources on promising opportunities",
    ],
  },
  {
    title: "Mobile-Ready CRM",
    subtitle: "Access your business information wherever your team works.",
    description:
      "FranHive is designed with accessibility and modern business workflows in mind.",
    items: [
      "Access important CRM information remotely",
      "Stay connected with customer activities",
      "Track leads and follow-ups while away from the office",
      "Improve team responsiveness",
      "Keep customer information available when needed",
    ],
    note:
      "Mobile access is being developed; this page does not claim that a native mobile application is currently available.",
  },
];

const aiCapabilities = [
  {
    title: "Lead Prioritization",
    description: "Identify opportunities that may require faster attention.",
  },
  {
    title: "Conversation Summaries",
    description:
      "Give teams useful context without manually reviewing every interaction.",
  },
  {
    title: "Next Best Actions",
    description: "Surface follow-ups and activities that may need attention.",
  },
  {
    title: "Customer Insights",
    description: "Turn customer activity into useful business signals.",
  },
  {
    title: "Smart Reporting",
    description: "Make large amounts of CRM data easier to understand.",
  },
];

const crmPrinciples = [
  {
    title: "Centralized Customer Data",
    description: "Keep customer information, interactions and activities in one place.",
  },
  {
    title: "Automation First",
    description: "Reduce repetitive work through automated workflows and reminders.",
  },
  {
    title: "Actionable Analytics",
    description: "Turn CRM data into useful business insights.",
  },
  {
    title: "Connected Workflows",
    description: "Bring sales, marketing and customer service closer together.",
  },
  {
    title: "Scalable Architecture",
    description: "Build a CRM foundation that can evolve with your business.",
  },
  {
    title: "Business-Focused Customization",
    description: "Configure workflows and reporting around the way your organization operates.",
  },
];

const journeyStages = [
  "Lead",
  "Capture",
  "Qualify",
  "Follow-up",
  "Opportunity",
  "Quotation",
  "Customer",
  "Engagement",
  "Retention",
];

function FranHiveCRM() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle = "FranHive CRM | AI-Powered CRM & Sales Automation Software";
    const pageDescription =
      "FranHive CRM helps businesses manage leads, contacts, sales pipelines, customer service, email marketing, analytics, workflows and customer relationships through one connected CRM platform.";

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
    <main className="crm-page">
      <section className="crm-hero">
        <div className="container crm-hero-inner">
          <div className="crm-hero-copy">
            <span className="section-label">FranHive CRM</span>
            <h1>A smarter CRM built around the way your business works</h1>
            <p className="crm-hero-lead">
              Customer relationships are at the center of every growing
              business. But when customer information, leads, conversations,
              follow-ups and sales activities are spread across spreadsheets,
              emails and different platforms, it becomes difficult for teams to
              get the complete picture.
            </p>
            <p className="crm-hero-summary">
              <strong>FranHive CRM</strong> brings your customer data, sales
              pipeline, communication, tasks, marketing and business insights
              together in one connected platform.
            </p>
            <p className="crm-hero-summary">
              From capturing a new lead to converting it into a customer and
              maintaining the relationship afterward, FranHive helps your team{" "}
              <strong>
                manage the complete customer journey from one place.
              </strong>
            </p>
            <p className="crm-hero-summary">
              With automation, intelligent workflows, centralized customer
              information and real-time dashboards, your team can spend less
              time managing data and more time building valuable customer
              relationships.
            </p>
            <div className="crm-hero-actions">
              <a className="btn btn-black" href="#crm-capabilities">
                Explore FranHive CRM →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="crm-hero-trust">
              <span>✓ Connected customer journeys</span>
              <span>✓ Smarter sales workflows</span>
              <span>✓ Actionable business insights</span>
            </div>
          </div>

          <aside className="crm-hero-panel" aria-label="CRM overview">
            <span className="crm-panel-kicker">Customer relationship management</span>
            <h2>One CRM. Connected customer journeys. Smarter decisions.</h2>
            <p>
              Connect sales management, customer engagement, marketing
              automation, service management and business analytics in a
              unified workspace.
            </p>
            <div className="crm-panel-points">
              <span>Sales management</span>
              <span>Customer engagement</span>
              <span>Marketing automation</span>
              <span>Service & analytics</span>
            </div>
            <div className="crm-panel-note">
              From the first enquiry to a lasting customer relationship.
            </div>
          </aside>
        </div>
      </section>

      <section className="crm-intro">
        <div className="container crm-intro-inner">
          <div>
            <span className="section-label">Core CRM capabilities</span>
            <h2>Everything your team needs to manage customer relationships</h2>
          </div>
          <p>
            FranHive CRM combines sales management, customer engagement,
            marketing automation, service management and business analytics
            into a unified workspace.
          </p>
        </div>
      </section>

      <section className="crm-capabilities" id="crm-capabilities">
        <div className="container">
          <div className="crm-section-heading">
            <span className="section-label">One CRM, connected workflows</span>
            <h2>Manage every stage of the customer relationship</h2>
            <p>
              Bring leads, customer conversations, sales activities, service
              requests and reporting into one connected CRM.
            </p>
          </div>

          <div className="crm-capability-grid">
            {crmCapabilities.map((capability, index) => (
              <article className="crm-capability-card" key={capability.title}>
                <div className="crm-capability-top">
                  <span className="crm-capability-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="crm-capability-mark" aria-hidden="true">
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
                {capability.note && (
                  <p className="crm-capability-note">{capability.note}</p>
                )}
                {capability.keywords && (
                  <p className="crm-keywords">
                    <strong>Keywords:</strong> {capability.keywords}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crm-ai">
        <div className="container crm-ai-layout">
          <div className="crm-ai-copy">
            <span className="section-label">AI-powered CRM intelligence</span>
            <h2>Move from CRM data to intelligent action.</h2>
            <p>
              Modern CRM isn&apos;t just about storing customer information.
              FranHive can bring intelligent capabilities into your workflows
              to help teams identify what deserves attention and what should
              happen next.
            </p>
            <p>
              AI-assisted capabilities can help your team find useful context
              and signals while keeping people in control of customer
              decisions.
            </p>
          </div>
          <div className="crm-ai-grid">
            {aiCapabilities.map((capability, index) => (
              <article className="crm-ai-card" key={capability.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crm-journey">
        <div className="container">
          <div className="crm-section-heading">
            <span className="section-label">A connected customer journey</span>
            <h2>From first enquiry to long-term relationship.</h2>
            <p>
              Manage each stage through a connected customer management system
              rather than isolated tools and spreadsheets.
            </p>
          </div>
          <ol className="crm-journey-list">
            {journeyStages.map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="crm-why">
        <div className="container">
          <div className="crm-section-heading">
            <span className="section-label">Why FranHive CRM?</span>
            <h2>Built around your business. Not the other way around.</h2>
          </div>
          <div className="crm-principles-grid">
            {crmPrinciples.map((principle, index) => (
              <article className="crm-principle-card" key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crm-final-cta">
        <div className="container">
          <div className="crm-final-box">
            <div>
              <span className="section-label">Ready to make your CRM work smarter?</span>
              <h2>Your customers are already generating data. Turn it into action.</h2>
              <p>
                Bring your leads, customer relationships, sales activities,
                marketing and service workflows together with FranHive CRM.
              </p>
            </div>
            <div className="crm-final-actions">
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

export default FranHiveCRM;
