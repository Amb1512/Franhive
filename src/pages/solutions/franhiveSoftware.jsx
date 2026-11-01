import { useEffect } from "react";
import "./franhiveSoftware.css";

const capabilities = [
  {
    title: "New Business Enquiries",
    subtitle: "Capture every opportunity. Follow up faster.",
    description:
      "Keep incoming business enquiries and leads organized in one centralized system.",
    items: [
      "Capture enquiries from your website and digital channels",
      "Automatically assign leads to the right team members",
      "Create assignment rules based on location, business requirements or other criteria",
      "Track enquiry status throughout the sales journey",
      "Maintain a complete interaction history",
      "Reduce lead leakage with structured follow-up workflows",
      "Connect enquiry forms with your CRM ecosystem",
      "Monitor enquiry sources and conversion activity",
    ],
  },
  {
    title: "Online Applications",
    subtitle: "Replace paperwork with a streamlined digital application journey.",
    description:
      "Give applicants a simple online process to submit and manage their information.",
    items: [
      "Create digital application forms",
      "Allow users to submit information online",
      "Reduce manual data entry and duplicate records",
      "Centralize application information",
      "Track application progress",
      "Manage supporting documents digitally",
      "Provide relevant information and resources during the application journey",
      "Improve transparency across the application process",
    ],
  },
  {
    title: "Business Onboarding",
    subtitle: "Turn complex onboarding into a structured workflow.",
    description:
      "Manage every stage of bringing a new location, partner or business operation into your ecosystem.",
    items: [
      "Create onboarding milestones",
      "Assign tasks to specific team members",
      "Set deadlines and target dates",
      "Track progress in real time",
      "Maintain comments and activity history",
      "Automate reminders and notifications",
      "Monitor pending and completed activities",
      "Generate progress reports",
      "Create repeatable onboarding workflows",
    ],
  },
  {
    title: "Document Management",
    subtitle: "Every important document. One organized workspace.",
    description:
      "Store, organize and retrieve business documents without relying on scattered folders and email attachments.",
    items: [
      "Upload and securely store digital documents",
      "Organize documents by customer, enquiry, application or business entity",
      "Centralize agreements, manuals, marketing resources and operational documents",
      "Quickly search and retrieve files",
      "Maintain easier access to important business information",
      "Reduce dependency on physical paperwork",
      "Keep documents connected to relevant records",
      "Improve organizational visibility and accessibility",
    ],
  },
  {
    title: "Contact & Activity History",
    subtitle: "Build a complete picture of every business relationship.",
    description:
      "Keep important interactions, notes and communication history connected to the right records.",
    items: [
      "Add notes to customer and business records",
      "Maintain communication history",
      "Record important conversations and follow-ups",
      "Track interactions across different stages",
      "Keep context available to the entire team",
      "Reduce information loss when responsibilities move between team members",
      "Create a centralized relationship history",
    ],
  },
  {
    title: "Task Management",
    subtitle: "Know what needs to happen — and who needs to do it.",
    description:
      "Manage everyday activities through structured task workflows that make ownership and progress clear.",
    items: [
      "Create and assign tasks",
      "Set deadlines and priorities",
      "Track task progress",
      "Link tasks with relevant contacts and business records",
      "Create recurring workflows",
      "Send automated email and notification reminders",
      "Monitor pending and completed activities",
      "Improve accountability across teams",
      "Get better visibility into operational workloads",
    ],
  },
  {
    title: "Smart Calendar & Scheduling",
    subtitle: "Keep your teams and appointments synchronized.",
    description:
      "Manage meetings, appointments, field activities and important dates through a connected calendar system.",
    items: [
      "Maintain shared calendars",
      "Schedule appointments and activities",
      "Set automated reminders",
      "Track upcoming meetings and deadlines",
      "Reduce missed appointments",
      "Coordinate activities across teams",
      "Connect calendar activities with business records",
      "Improve scheduling visibility",
    ],
  },
  {
    title: "Field Operations & Site Management",
    subtitle: "Bring field activities into your digital workflow.",
    description:
      "Manage visits, inspections, operational activities and location-based workflows from a centralized platform.",
    items: [
      "Schedule and track field visits",
      "Create predefined agendas and action plans",
      "Assign activities to team members",
      "Record visit notes",
      "Track action items",
      "Maintain inspection and compliance checklists",
      "Monitor operational progress",
      "Create reports for management review",
      "Maintain a digital history of field activities",
    ],
  },
  {
    title: "Billing & Revenue Management",
    subtitle: "Simplify recurring fees, billing and financial workflows.",
    description:
      "Manage recurring business charges and billing activities through an organized digital workflow.",
    items: [
      "Configure recurring fee structures",
      "Track applicable business charges",
      "Automate billing workflows",
      "Generate professional PDF invoices",
      "Schedule invoice generation",
      "Send invoices through automated communication workflows",
      "Maintain billing history",
      "Reduce manual administrative work",
      "Improve visibility into recurring revenue processes",
    ],
  },
  {
    title: "Staff Directory",
    subtitle: "Keep your people information organized.",
    description:
      "Maintain a centralized directory for employees and operational staff.",
    items: [
      "Store staff information in one place",
      "Organize employee records",
      "Track training activities",
      "Monitor learning and development progress",
      "Maintain role and responsibility information",
      "Improve internal communication",
      "Give authorized teams quick access to relevant staff information",
    ],
  },
  {
    title: "Customer Feedback & Complaints",
    subtitle: "Turn customer feedback into actionable insights.",
    description:
      "Manage complaints, feedback and positive customer experiences through a structured resolution workflow.",
    items: [
      "Record customer complaints and feedback",
      "Assign issues to responsible team members",
      "Track resolution progress",
      "Add comments and follow-up activities",
      "Link feedback to relevant locations, employees, products or services",
      "Maintain complete issue history",
      "Monitor recurring issues",
      "Identify areas for operational improvement",
      "Turn customer feedback into actionable business insights",
    ],
  },
];

const platformFeatures = [
  {
    title: "CRM & Relationship Management",
    description: "Keep enquiries, contacts, interactions and follow-ups organized.",
  },
  {
    title: "Workflow Automation",
    description: "Automate repetitive processes, reminders and task assignments.",
  },
  {
    title: "Document Management",
    description: "Store and access important business information from one centralized workspace.",
  },
  {
    title: "Task & Team Management",
    description: "Assign work, monitor progress and improve accountability.",
  },
  {
    title: "Scheduling & Calendar",
    description: "Keep appointments, meetings and operational activities organized.",
  },
  {
    title: "Business Analytics",
    description: "Turn operational data into dashboards, reports and actionable insights.",
  },
  {
    title: "Communication Automation",
    description: "Use email and other connected communication channels to keep stakeholders informed.",
  },
  {
    title: "Digital Operations",
    description: "Replace disconnected spreadsheets and manual workflows with structured digital processes.",
  },
];

const businessBenefits = [
  "Reduce repetitive administrative work",
  "Improve lead and enquiry follow-up",
  "Standardize operational processes",
  "Keep teams aligned",
  "Improve customer communication",
  "Track business activities more effectively",
  "Access information faster",
  "Identify operational bottlenecks",
  "Make more informed decisions using business data",
];

function FranHiveSoftware() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageDescription =
      "FranHive Software helps businesses manage leads, contacts, workflows, documents, tasks, scheduling, field operations, billing, staff and customer feedback through connected business management solutions.";
    const pageTitle =
      "FranHive Software | Business Management & Workflow Automation Platform";

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
    <main className="software-page">
      <section className="software-hero">
        <div className="container software-hero-inner">
          <div className="software-hero-copy">
            <span className="section-label">FranHive Software</span>
            <h1>One connected platform for smarter business operations</h1>
            <p className="software-hero-lead">
              Managing multiple locations, teams, customers, documents and
              day-to-day workflows can quickly become complicated when
              information is spread across spreadsheets, emails and disconnected
              tools.
            </p>
            <p className="software-hero-summary">
              <strong>FranHive Software</strong> brings these processes together
              in one centralized business management platform. From capturing
              new enquiries and managing applications to onboarding, document
              management, task tracking, calendars, field operations and customer
              feedback, every workflow can be managed from a connected system.
            </p>
            <p className="software-hero-summary">
              Built around your business processes, FranHive helps teams{" "}
              <strong>
                reduce manual work, improve operational visibility, automate
                repetitive tasks and make faster, data-driven decisions.
              </strong>
            </p>
            <div className="software-hero-actions">
              <a className="btn btn-black" href="#software-capabilities">
                Explore FranHive Software →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="software-hero-trust">
              <span>✓ Connected workflows</span>
              <span>✓ Operational visibility</span>
              <span>✓ Built around your business</span>
            </div>
          </div>

          <aside className="software-hero-panel" aria-label="Platform overview">
            <span className="software-panel-kicker">Business management</span>
            <h2>Centralized. Automated. Connected.</h2>
            <p>
              Bring CRM, workflow automation, documents, tasks, communication,
              scheduling and business analytics into one structured workspace.
            </p>
            <div className="software-panel-stats">
              <div>
                <strong>11</strong>
                <span>Connected capabilities</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Centralized workspace</span>
              </div>
            </div>
            <div className="software-panel-note">
              Less time searching for information. More time acting on it.
            </div>
          </aside>
        </div>
      </section>

      <section className="software-intro">
        <div className="container software-intro-inner">
          <div>
            <span className="section-label">A smarter way to manage</span>
            <h2>One platform. Multiple workflows. Better visibility.</h2>
          </div>
          <p>
            Instead of switching between multiple systems, your team can access
            the information they need from a single, structured workspace.
            FranHive brings your operational processes together so your people
            can focus on moving work forward.
          </p>
        </div>
      </section>

      <section className="software-capabilities" id="software-capabilities">
        <div className="container">
          <div className="software-section-heading">
            <span className="section-label">Core capabilities</span>
            <h2>Everything your team needs to keep work moving</h2>
            <p>
              Connect enquiries, people, tasks, documents and daily operations
              through structured business workflows.
            </p>
          </div>

          <div className="software-capability-grid">
            {capabilities.map((capability, index) => (
              <article className="software-capability-card" key={capability.title}>
                <div className="software-capability-top">
                  <span className="software-capability-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="software-capability-mark" aria-hidden="true">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="software-platform">
        <div className="container">
          <div className="software-section-heading">
            <span className="section-label">Connected business management</span>
            <h2>One platform for the work behind your business</h2>
            <p>
              Bring essential business tools together and give your team better
              visibility across the entire operation.
            </p>
          </div>
          <div className="software-platform-grid">
            {platformFeatures.map((feature, index) => (
              <article className="software-platform-card" key={feature.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="software-benefits">
        <div className="container software-benefits-layout">
          <div className="software-benefits-copy">
            <span className="section-label">Designed for modern teams</span>
            <h2>Less manual work. More visibility. Better decisions.</h2>
            <p>
              Move from fragmented processes to connected digital operations.
              With centralized information, automated workflows and real-time
              visibility, your teams can work with greater clarity and
              confidence.
            </p>
          </div>
          <ul className="software-benefit-list">
            {businessBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="software-adapt">
        <div className="container software-adapt-inner">
          <div>
            <span className="section-label">Technology that adapts</span>
            <h2>Your workflow is unique. Your software should be too.</h2>
          </div>
          <p>
            FranHive isn&apos;t built around a rigid one-size-fits-all workflow.
            The platform can be structured around your business processes,
            teams, communication requirements, operational workflows and
            reporting needs, helping you create a technology environment that
            evolves as your organization grows.
          </p>
        </div>
      </section>

      <section className="software-final-cta">
        <div className="container">
          <div className="software-final-box">
            <div>
              <span className="section-label">Ready to simplify your operations?</span>
              <h2>Let&apos;s build a smarter way to work.</h2>
              <p>
                Tell us about your current processes, the challenges you&apos;re
                facing and what you want to improve.
              </p>
            </div>
            <div className="software-final-actions">
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

export default FranHiveSoftware;
