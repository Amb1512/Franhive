import { useEffect } from "react";
import "./franhiveTraining.css";

const trainingCapabilities = [
  {
    title: "Integrated Learning Management System",
    description:
      "Manage employee and learner training through an LMS integrated with the FranHive platform.",
  },
  {
    title: "Training Content Authoring",
    description:
      "Create and organize training materials for your teams and learners.",
  },
  {
    title: "Online Training Delivery",
    description:
      "Publish training content online so authorized learners can access it remotely.",
  },
  {
    title: "Anytime, Anywhere Access",
    description:
      "Allow learners to access training content 24/7 through any device, as supported by the platform.",
  },
  {
    title: "Online Assessments",
    description:
      "Create online tests to evaluate learner understanding and training outcomes.",
  },
  {
    title: "Training Completion Tracking",
    description:
      "Monitor completion rates and understand how learners are progressing through assigned training.",
  },
  {
    title: "Certificates & Badges",
    description:
      "Recognize completed training through certificates and badges.",
  },
  {
    title: "On-Demand Learning",
    description:
      "Give learners access to training resources when they need them, supporting flexible and self-paced learning.",
  },
];

const trainingBenefits = [
  "Improve employee knowledge and skills",
  "Standardize training materials",
  "Make learning accessible online",
  "Track training completion",
  "Evaluate learner understanding through tests",
  "Recognize achievements with certificates and badges",
  "Make training more accessible and organized",
];

const learningStages = [
  "Create",
  "Publish",
  "Learn",
  "Test",
  "Track",
  "Certify",
];

function FranHiveTraining() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const pageTitle =
      "FranHive Training | Learning Management System & Online Training";
    const pageDescription =
      "FranHive Training provides an integrated Learning Management System for creating and publishing training content, online tests, completion tracking, certificates, badges and on-demand learning.";

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
    <main className="franhive-training-page">
      <section className="franhive-training-hero">
        <div className="container franhive-training-hero-inner">
          <div className="franhive-training-hero-copy">
            <span className="section-label">FranHive Training</span>
            <h1>Train your team. Build skills. Improve performance.</h1>
            <p className="franhive-training-lead">
              Effective employee training helps businesses develop stronger
              teams, improve operational efficiency and ensure employees have
              the knowledge they need to perform their roles effectively.
            </p>
            <p className="franhive-training-summary">
              <strong>FranHive Training</strong> provides an integrated
              learning environment where businesses can create, publish,
              deliver and track training content from a centralized platform.
            </p>
            <div className="franhive-training-actions">
              <a className="btn btn-black" href="#training-capabilities">
                Explore Training Capabilities →
              </a>
              <a className="btn btn-outline" href="/contact-us">
                Talk to FranHive
              </a>
            </div>
            <div className="franhive-training-trust">
              <span>✓ Centralized learning</span>
              <span>✓ Track learner progress</span>
              <span>✓ Flexible, on-demand access</span>
            </div>
          </div>

          <aside
            className="franhive-training-hero-panel"
            aria-label="FranHive Training overview"
          >
            <span className="franhive-training-panel-kicker">
              Learning management system
            </span>
            <h2>A learning platform built into your business workflow</h2>
            <p>
              Create and publish training materials within the platform, so
              learners can access them online whenever they need them.
            </p>
            <div className="franhive-training-panel-points">
              <span>Create learning content</span>
              <span>Deliver online training</span>
              <span>Assess understanding</span>
              <span>Track completion</span>
            </div>
            <div className="franhive-training-panel-note">
              A structured way to deliver training and support learner progress.
            </div>
          </aside>
        </div>
      </section>

      <section className="franhive-training-intro">
        <div className="container franhive-training-intro-inner">
          <div>
            <span className="section-label">Built into your workflow</span>
            <h2>A learning platform built into your business workflow</h2>
          </div>
          <p>
            FranHive includes a <strong>Learning Management System (LMS)</strong>{" "}
            that enables organizations to deliver training online and manage
            learner progress. Training materials can be created and published
            within the platform, allowing learners to access them online
            whenever they need them.
          </p>
        </div>
      </section>

      <section
        className="franhive-training-capabilities"
        id="training-capabilities"
      >
        <div className="container">
          <div className="franhive-training-section-heading">
            <span className="section-label">Key training capabilities</span>
            <h2>Bring your learning activities into one platform.</h2>
            <p>
              Create, deliver and track online learning with tools for
              assessments, progress and recognition.
            </p>
          </div>
          <div className="franhive-training-capability-grid">
            {trainingCapabilities.map((capability, index) => (
              <article
                className="franhive-training-capability-card"
                key={capability.title}
              >
                <div className="franhive-training-card-top">
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

      <section className="franhive-training-benefits">
        <div className="container">
          <div className="franhive-training-section-heading">
            <span className="section-label">Structured employee training</span>
            <h2>Make learning more accessible and organized.</h2>
            <p>A well-organized training process can help businesses:</p>
          </div>
          <ul className="franhive-training-benefit-list">
            {trainingBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="franhive-training-process">
        <div className="container">
          <div className="franhive-training-section-heading">
            <span className="section-label">From content to measurable learning</span>
            <h2>One connected training process.</h2>
            <p>
              FranHive Training brings the major stages of the learning
              process together, giving learners convenient access to content
              and businesses a structured way to deliver training.
            </p>
          </div>
          <ol className="franhive-training-process-list">
            {learningStages.map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="franhive-training-audience">
        <div className="container franhive-training-audience-inner">
          <div>
            <span className="section-label">On-demand training</span>
            <h2>Learning for modern teams.</h2>
          </div>
          <p>
            Whether you are onboarding employees, delivering operational
            training or building ongoing learning programs, FranHive Training
            provides a centralized environment for creating and delivering
            online training.
          </p>
        </div>
      </section>

      <section className="franhive-training-final-cta">
        <div className="container">
          <div className="franhive-training-final-box">
            <div>
              <span className="section-label">
                Train smarter. Learn anywhere. Track progress.
              </span>
              <h2>Build a more structured learning experience with FranHive Training.</h2>
              <p>
                Create and deliver online training while keeping learner
                progress visible in one centralized platform.
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

export default FranHiveTraining;
