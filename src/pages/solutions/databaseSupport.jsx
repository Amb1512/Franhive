import { useEffect } from "react";
import "./databaseSupport.css";

const databaseServices = [
  {
    title: "Database Administration & Support",
    subtitle: "Keep your databases healthy and operational.",
    description:
      "Maintain database environments and address ongoing operational requirements.",
    keywords:
      "Database Support Services, Database Administration, Database Management, Database Consulting",
    items: [
      "Database administration and support",
      "Regular health checks",
      "Database monitoring",
      "Issue identification and troubleshooting",
      "Configuration support",
      "Database maintenance",
      "Performance monitoring",
      "Operational assistance",
      "Support for database environments based on business requirements",
    ],
  },
  {
    title: "Multi-Database Technology Support",
    subtitle: "Support across modern database environments.",
    description:
      "Work with the database technologies that best fit your applications, workloads and infrastructure requirements.",
    keywords:
      "Oracle Database Support, SQL Server Support, MySQL Support, PostgreSQL Support, NoSQL Database Support, DBaaS",
    items: [
      "Oracle",
      "Microsoft SQL Server",
      "MySQL",
      "PostgreSQL",
      "Relational database management systems (RDBMS)",
      "NoSQL databases",
      "Data warehouses",
      "Big Data environments",
      "Database-as-a-Service (DBaaS)",
    ],
  },
  {
    title: "High Availability Solutions",
    subtitle: "Keep critical databases available when your business needs them.",
    description:
      "Support high-availability database architectures designed to improve resilience and reduce service interruptions.",
    keywords:
      "Database High Availability, HA Database Solutions, Database Reliability, Database Failover",
    items: [
      "High-availability database solutions",
      "Availability architecture support",
      "Database redundancy",
      "Failover planning",
      "Availability monitoring",
      "Support for critical database environments",
    ],
  },
  {
    title: "Disaster Recovery",
    subtitle: "Prepare your data infrastructure for unexpected events.",
    description:
      "Plan for restoring operations when infrastructure failures or other disruptions affect your business.",
    keywords:
      "Database Disaster Recovery, Database Business Continuity, Data Recovery, Disaster Recovery Solutions",
    items: [
      "Disaster recovery solutions",
      "Recovery planning",
      "Database recovery workflows",
      "Backup and restoration strategies",
      "Recovery environment planning",
      "Business continuity support",
      "Recovery testing and maintenance",
    ],
  },
  {
    title: "Database Replication",
    subtitle: "Keep critical data synchronized across environments.",
    description:
      "Support replication solutions for availability, reporting workloads and data across multiple environments.",
    keywords:
      "Database Replication, Data Synchronization, Database Availability, Replication Solutions",
    items: [
      "Database replication",
      "Data synchronization",
      "Replication architecture",
      "High-availability use cases",
      "Reporting and secondary database environments",
      "Replication monitoring",
      "Troubleshooting and maintenance",
    ],
  },
  {
    title: "On-Premises to Cloud Migration",
    subtitle: "Move your database infrastructure toward the cloud.",
    description:
      "Modernize infrastructure and support changing scalability needs with a planned database migration.",
    keywords:
      "Database Cloud Migration, Cloud Database Migration, On-Premises to Cloud, Database Modernization",
    items: [
      "Database migration planning",
      "On-premises to cloud migration",
      "Migration assessment",
      "Database environment preparation",
      "Data migration support",
      "Migration validation",
      "Post-migration optimization",
      "Cloud database configuration support",
    ],
  },
  {
    title: "AWS, Azure & Google Cloud Support",
    subtitle: "Manage database infrastructure across cloud environments.",
    description:
      "Support cloud-managed database environments across major cloud platforms.",
    keywords:
      "AWS Database Support, Azure Database Support, GCP Database Support, Cloud Database Services, Managed Database Services",
    items: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "Cloud database management",
      "Infrastructure monitoring",
      "Database configuration",
      "Performance optimization",
      "Backup configuration",
      "Availability planning",
      "Migration support",
      "Ongoing managed database services",
    ],
  },
  {
    title: "Database Performance Optimization",
    subtitle: "Faster databases. Better application performance.",
    description:
      "Identify and address database performance bottlenecks that can affect application responsiveness and user experience.",
    keywords:
      "Database Performance Tuning, SQL Performance Optimization, Query Optimization, Database Optimization",
    items: [
      "Query performance analysis",
      "Database performance tuning",
      "Index optimization",
      "Resource utilization analysis",
      "Configuration optimization",
      "Performance monitoring",
      "Bottleneck identification",
      "Database health analysis",
    ],
  },
  {
    title: "Regular Database Maintenance",
    subtitle: "Prevent problems before they affect your business.",
    description:
      "Establish structured maintenance processes to help databases remain stable and performant.",
    keywords:
      "Database Maintenance, Database Health Check, Database Monitoring, Database Management Services",
    items: [
      "Routine database health checks",
      "Performance monitoring",
      "Maintenance activities",
      "Capacity monitoring",
      "Database housekeeping",
      "Configuration reviews",
      "Maintenance planning",
      "Operational issue identification",
    ],
  },
  {
    title: "Database Backup Solutions",
    subtitle: "Protect your most important business asset — your data.",
    description:
      "Build a structured backup strategy around your business requirements to help reduce the risk of permanent data loss.",
    keywords:
      "Database Backup Solutions, Automated Database Backup, Data Protection, Database Recovery",
    items: [
      "Database backup planning",
      "Automated backup workflows",
      "Backup monitoring",
      "Backup retention planning",
      "Restoration support",
      "Backup validation",
      "Recovery planning",
      "Business continuity support",
    ],
  },
  {
    title: "Database Upgrades & Patching",
    subtitle: "Keep your database environment current.",
    description:
      "Plan database upgrades and patching to address operational, compatibility and maintenance needs.",
    keywords:
      "Database Upgrade Services, Database Patching, Database Version Upgrade, Database Maintenance",
    items: [
      "Database version upgrades",
      "Patch management",
      "Upgrade planning",
      "Compatibility assessment",
      "Pre-upgrade checks",
      "Post-upgrade validation",
      "Database configuration review",
      "Ongoing maintenance",
    ],
  },
  {
    title: "Data Warehouse & Big Data Support",
    subtitle: "Build a stronger foundation for data-driven decisions.",
    description:
      "Support scalable data infrastructure and efficient access for large datasets and analytical workloads.",
    keywords:
      "Data Warehouse Support, Big Data Support, Data Infrastructure, Analytics Database, Enterprise Data Management",
    items: [
      "Data warehouses",
      "Big Data platforms",
      "Analytical databases",
      "RDBMS environments",
      "NoSQL databases",
      "Large-scale data workloads",
      "Infrastructure supporting reporting and analytics",
      "Data platforms for operational decision-making",
    ],
  },
];

const infrastructurePillars = [
  {
    title: "Performance",
    description: "Optimize databases to support responsive applications and workloads.",
  },
  {
    title: "Availability",
    description: "Design and maintain environments that reduce unnecessary downtime.",
  },
  {
    title: "Security & Maintenance",
    description: "Keep database environments maintained and appropriately managed.",
  },
  {
    title: "Scalability",
    description: "Prepare your data infrastructure for changing workloads and business growth.",
  },
  {
    title: "Cloud Readiness",
    description: "Support modernization and migration toward cloud-based infrastructure.",
  },
  {
    title: "Business Continuity",
    description: "Build backup and recovery strategies around critical business data.",
  },
];

const whyFranHive = [
  {
    title: "Technology Coverage",
    description: "Support for relational, NoSQL, cloud and analytical database environments.",
  },
  {
    title: "Cloud Expertise",
    description: "Support for AWS, Azure and Google Cloud environments.",
  },
  {
    title: "Performance Focus",
    description: "Identify bottlenecks and improve database efficiency.",
  },
  {
    title: "Proactive Maintenance",
    description: "Regular monitoring and maintenance help reduce avoidable issues.",
  },
  {
    title: "Business Continuity",
    description: "Backup, replication and disaster recovery support for critical environments.",
  },
  {
    title: "Scalable Infrastructure",
    description: "Database strategies designed to support changing business requirements.",
  },
];

function DatabaseSupport() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle =
      "Database Support Services | Cloud, Performance & Managed Database Support | FranHive";
    const pageDescription =
      "FranHive provides database support, performance tuning, cloud migration, backup, disaster recovery, replication, high availability and managed database services for modern businesses.";

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
    <main className="database-page">
      <section className="database-hero">
        <div className="container database-hero-inner">
          <div className="database-hero-copy">
            <span className="section-label">Database Support</span>
            <h1>Reliable data infrastructure for modern businesses</h1>
            <p className="database-hero-lead">
              Your database is at the core of your applications and business
              operations. When databases become slow, unavailable, poorly
              optimized or difficult to maintain, the impact can spread across
              your entire organization.
            </p>
            <p className="database-hero-summary">
              <strong>FranHive Database Support</strong> helps businesses
              manage, optimize and maintain their database environments with a
              focus on <strong>performance, availability, scalability,
              security and business continuity.</strong>
            </p>
            <p className="database-hero-summary">
              From database administration and performance tuning to cloud
              migration, replication, backup and disaster recovery, our
              database support services help keep your data infrastructure
              reliable and ready for growth.
            </p>
            <div className="database-hero-actions">
              <a className="btn btn-black" href="#database-capabilities">
                Explore Database Support →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="database-hero-trust">
              <span>✓ Performance & availability</span>
              <span>✓ Cloud & database expertise</span>
              <span>✓ Business continuity</span>
            </div>
          </div>

          <aside className="database-hero-panel" aria-label="Database support overview">
            <span className="database-panel-kicker">Complete database support</span>
            <h2>From database maintenance to cloud transformation.</h2>
            <p>
              Support database technologies and infrastructure environments
              while helping maintain dependable data platforms without
              unnecessary operational complexity.
            </p>
            <div className="database-panel-points">
              <span>Performance</span>
              <span>Availability</span>
              <span>Cloud migration</span>
              <span>Recovery planning</span>
            </div>
            <div className="database-panel-note">
              Reliable. Scalable. Ready for growth.
            </div>
          </aside>
        </div>
      </section>

      <section className="database-intro">
        <div className="container database-intro-inner">
          <div>
            <span className="section-label">Complete database support</span>
            <h2>From database maintenance to cloud transformation.</h2>
          </div>
          <p>
            FranHive provides database support across a range of technologies
            and infrastructure environments, helping businesses maintain
            dependable data platforms without unnecessary operational
            complexity.
          </p>
        </div>
      </section>

      <section
        className="database-capabilities"
        id="database-capabilities"
      >
        <div className="container">
          <div className="database-section-heading">
            <span className="section-label">Our database support capabilities</span>
            <h2>Reliable support across your data infrastructure</h2>
            <p>
              Get help with database operations, cloud environments,
              performance, resilience and ongoing maintenance.
            </p>
          </div>
          <div className="database-capability-grid">
            {databaseServices.map((service, index) => (
              <article className="database-capability-card" key={service.title}>
                <div className="database-capability-top">
                  <span className="database-capability-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="database-capability-mark" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{service.title}</h3>
                <h4>{service.subtitle}</h4>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="database-keywords">
                  <strong>Keywords:</strong> {service.keywords}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="database-infrastructure">
        <div className="container">
          <div className="database-section-heading">
            <span className="section-label">Modern database infrastructure</span>
            <h2>Reliable. Scalable. Ready for growth.</h2>
            <p>
              FranHive Database Support focuses on the areas that matter most
              to modern businesses.
            </p>
          </div>
          <div className="database-infrastructure-grid">
            {infrastructurePillars.map((pillar, index) => (
              <article className="database-pillar-card" key={pillar.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="database-why">
        <div className="container">
          <div className="database-section-heading">
            <span className="section-label">Why FranHive Database Support?</span>
            <h2>More than database troubleshooting.</h2>
          </div>
          <div className="database-why-grid">
            {whyFranHive.map((reason, index) => (
              <article className="database-why-card" key={reason.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="database-growing">
        <div className="container database-growing-inner">
          <div>
            <span className="section-label">Your data infrastructure</span>
            <h2>Your data infrastructure should keep up with your business.</h2>
          </div>
          <div>
            <p>
              Don&apos;t let database problems become business problems.
              Whether you&apos;re dealing with <strong>slow queries, database
              maintenance, cloud migration, availability challenges, backup
              requirements or infrastructure modernization</strong>, FranHive
              can help you build a more reliable database environment.
            </p>
            <p>
              Let&apos;s understand your current infrastructure, identify the
              challenges and build a database strategy around your business
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="database-final-cta">
        <div className="container">
          <div className="database-final-box">
            <div>
              <span className="section-label">Need database support?</span>
              <h2>Build a more reliable foundation for your business data.</h2>
              <p>
                Talk with FranHive about your database environment, operational
                challenges and infrastructure goals.
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

export default DatabaseSupport;
