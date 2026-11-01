import { useEffect } from "react";
import "./onlineTraining.css";

const capabilities = [
  {
    title: "Detailed Training Dashboard",
    description:
      "Get a centralized view of training activity and learner progress through a detailed dashboard.",
  },
  {
    title: "Training Assignment & Tracking",
    description:
      "Effectively assign training to users and track their progress from one place.",
  },
  {
    title: "Training Progress Monitoring",
    description:
      "Monitor training activity and understand how users are progressing through assigned learning content.",
  },
  {
    title: "Training Video Management",
    description:
      "Record, upload and distribute training videos to your clients through the platform.",
  },
  {
    title: "Real-Time Statistics",
    description:
      "View training data through pie charts and location-based real-time statistics.",
  },
  {
    title: "User Access Control",
    description:
      "Restrict training access for separate users according to their assigned access requirements.",
  },
  {
    title: "Video Pause & Resume",
    description:
      "Allow users to pause training videos and continue watching from where they stopped.",
  },
  {
    title: "Flexible Storage",
    description:
      "Choose storage capacity according to your training content and business requirements.",
  },
  {
    title: "Instant Notifications",
    description:
      "Keep users informed about the latest training updates through instant notifications.",
  },
];

const trainingStages = ["Assign", "Deliver", "Track", "Monitor", "Update"];

function OnlineTraining() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageDescription =
      "FranHive Online Training provides dashboards, training assignment and tracking, video management, real-time statistics, user access controls, flexible storage and instant notifications.";

    document.title =
      "Online Training Platform | Training Management & Tracking Software | FranHive";

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
    <main className="online-training-page">
      <section className="online-training-hero">
        <div className="container online-training-hero-inner">
          <div className="online-training-hero-copy">
            <span className="section-label">FranHive Online Training</span>
            <h1>Deliver training. Track progress. Learn anywhere.</h1>
            <p className="online-training-lead">
              Online training makes it easier for businesses to deliver
              learning resources, monitor training activity and keep users
              updated from a centralized platform.
            </p>
            <p className="online-training-summary">
              <strong>FranHive Online Training</strong> provides tools for
              managing training content, tracking learner progress,
              distributing videos and monitoring training activity through
              detailed dashboards and real-time statistics.
            </p>
            <div className="online-training-actions">
              <a className="btn btn-black" href="#online-training-capabilities">
                Explore Capabilities →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="online-training-trust">
              <span>✓ Centralized training activity</span>
              <span>✓ Learner progress visibility</span>
              <span>✓ Keep users up to date</span>
            </div>
          </div>

          <aside
            className="online-training-hero-panel"
            aria-label="Online training overview"
          >
            <span className="online-training-panel-kicker">
              Online learning management
            </span>
            <h2>A centralized platform for online learning</h2>
            <p>
              Organize your training process and give administrators greater
              visibility into learner activity and progress.
            </p>
            <div className="online-training-panel-points">
              <span>Assign learning</span>
              <span>Deliver videos</span>
              <span>Track progress</span>
              <span>View statistics</span>
            </div>
            <div className="online-training-panel-note">
              A clearer view of training activity, from assignment to updates.
            </div>
          </aside>
        </div>
      </section>

      <section
        className="online-training-capabilities"
        id="online-training-capabilities"
      >
        <div className="container">
          <div className="online-training-section-heading">
            <span className="section-label">
              Key online training capabilities
            </span>
            <h2>Manage training and learner activity in one place.</h2>
            <p>
              Bring dashboards, content delivery, progress tracking and
              notifications into a centralized online training process.
            </p>
          </div>
          <div className="online-training-capability-grid">
            {capabilities.map((capability, index) => (
              <article
                className="online-training-capability-card"
                key={capability.title}
              >
                <div className="online-training-card-top">
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

      <section className="online-training-journey">
        <div className="container">
          <div className="online-training-section-heading">
            <span className="section-label">The complete training journey</span>
            <h2>Manage each stage of online training.</h2>
            <p>
              FranHive brings important online training activities together,
              giving administrators a clearer view while providing users with
              a convenient online learning experience.
            </p>
          </div>
          <ol className="online-training-stage-list">
            {trainingStages.map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="online-training-visibility">
        <div className="container online-training-visibility-inner">
          <div>
            <span className="section-label">
              Training visibility at your fingertips
            </span>
            <h2>See training activity more clearly.</h2>
          </div>
          <p>
            With dashboards, progress tracking, video management, access
            controls and real-time statistics, businesses can manage their
            online training process more efficiently.
          </p>
        </div>
      </section>

      <section className="online-training-final-cta">
        <div className="container">
          <div className="online-training-final-box">
            <div>
              <span className="section-label">
                Train your users. Track their progress. Keep them updated.
              </span>
              <h2>Deliver smarter online training with FranHive.</h2>
              <p>
                Bring training delivery, progress monitoring and user updates
                together in one centralized platform.
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

export default OnlineTraining;
