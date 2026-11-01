const problems = [
  {
    number: "01",
    icon: "▦",
    title: "Scattered Data",
    description:
      "Customer, branch and business information lives across spreadsheets, apps and disconnected systems.",
  },
  {
    number: "02",
    icon: "✓",
    title: "Manual Operations",
    description:
      "Teams spend valuable hours managing repetitive tasks that should be handled automatically.",
  },
  {
    number: "03",
    icon: "◉",
    title: "No Real-Time Visibility",
    description:
      "Without a single source of truth, it's difficult to know what's happening across every location.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Disconnected Teams",
    description:
      "Head office and individual locations often work in silos, creating delays and communication gaps.",
  },
];

function ProblemSection() {
  return (
    <section className="problem-section" id="solutions">
      <div className="problem-container">

        <div className="problem-heading">
          <div className="section-eyebrow">
            <span className="eyebrow-line"></span>
            THE PROBLEM
          </div>

          <h2>
            Growing your franchise
            <span>shouldn't mean growing your chaos.</span>
          </h2>

          <p>
            Managing multiple locations shouldn't require multiple
            spreadsheets, systems and endless follow-ups.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => (
            <article className="problem-card" key={problem.number}>

              <div className="problem-card-top">
                <span className="problem-number">
                  {problem.number}
                </span>

                <div className="problem-icon">
                  {problem.icon}
                </div>
              </div>

              <div className="problem-card-content">
                <h3>{problem.title}</h3>

                <p>{problem.description}</p>
              </div>

              <div className="problem-arrow">
                ↘
              </div>

            </article>
          ))}
        </div>

        <div className="problem-transition">

          <div className="transition-hex">
            <span></span>
          </div>

          <div>
            <span className="transition-label">
              THE SOLUTION
            </span>

            <h3>
              FranHive brings it all together.
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProblemSection;