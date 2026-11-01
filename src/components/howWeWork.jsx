import "./howWeWork.css";

export default function HowWeWork() {
  return (
    <section className="how-section" id="how-we-work">
      <div className="how-wrap">

        {/* Heading */}
        <div className="how-header">
          <div className="how-eyebrow">
  <span className="bee-icon">
    <svg viewBox="0 0 32 32">
      <ellipse
        className="bee-wing"
        cx="9"
        cy="14"
        rx="6"
        ry="4"
        fill="#FFFDF6"
        opacity="0.9"
        transform="rotate(-20 9 14)"
      />

      <ellipse
        className="bee-wing"
        cx="23"
        cy="14"
        rx="6"
        ry="4"
        fill="#FFFDF6"
        opacity="0.9"
        transform="rotate(20 23 14)"
      />

      <defs>
        <clipPath id="beeBody">
          <ellipse cx="16" cy="18" rx="9" ry="7" />
        </clipPath>
      </defs>

      <g clipPath="url(#beeBody)">
        <rect x="0" y="11" width="32" height="28" fill="#F5B400" />
        <rect x="0" y="13" width="32" height="3" fill="#15120B" />
        <rect x="0" y="18" width="32" height="3" fill="#15120B" />
        <rect x="0" y="23" width="32" height="3" fill="#15120B" />
      </g>

      <ellipse
        cx="16"
        cy="18"
        rx="9"
        ry="7"
        fill="none"
        stroke="#15120B"
        strokeWidth="0.6"
      />

      <circle cx="16" cy="9" r="4" fill="#15120B" />

      <path
        d="M14 6 12 2M18 6 20 2"
        stroke="#15120B"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </span>

  HOW IT WORKS
</div>

          <h2>From business challenge to working solution.</h2>

          <p>
            We understand your business, engineer the right solution,
            build it around your workflow and help you scale with confidence.
          </p>
        </div>

        {/* Small live counter */}
        <div className="how-counter-wrap">
          <div className="how-counter">
            <div className="counter-dot">
              <span></span>
            </div>

            <strong>100+</strong>

            <i>
              solutions engineered for businesses
            </i>
          </div>
        </div>

        {/* Pipeline */}
        <div className="how-pipeline">

          {/* Flying Bee */}
<div
  className="flying-bee"
  style={{ position: "absolute", left: "0", top: "10px", width: "34px", height: "34px", zIndex: 20 }}
>
  <svg viewBox="0 0 32 32" style={{ display: "block", width: "34px", height: "34px" }}>
    <ellipse
      className="bee-wing"
      cx="9"
      cy="14"
      rx="6"
      ry="4"
      fill="#FFFDF6"
      opacity="0.9"
      transform="rotate(-20 9 14)"
    />

    <ellipse
      className="bee-wing"
      cx="23"
      cy="14"
      rx="6"
      ry="4"
      fill="#FFFDF6"
      opacity="0.9"
      transform="rotate(20 23 14)"
    />

    <defs>
      <clipPath id="flyingBeeBody">
        <ellipse cx="16" cy="18" rx="9" ry="7" />
      </clipPath>
    </defs>

    <g clipPath="url(#flyingBeeBody)">
      <rect x="0" y="11" width="32" height="28" fill="#F5B400" />
      <rect x="0" y="13" width="32" height="3" fill="#15120B" />
      <rect x="0" y="18" width="32" height="3" fill="#15120B" />
      <rect x="0" y="23" width="32" height="3" fill="#15120B" />
    </g>

    <ellipse
      cx="16"
      cy="18"
      rx="9"
      ry="7"
      fill="none"
      stroke="#15120B"
      strokeWidth="0.6"
    />

    <circle cx="16" cy="9" r="4" fill="#15120B" />

    <path
      d="M14 6 12 2M18 6 20 2"
      stroke="#15120B"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
</div>

          {/* Stage 1 */}
          <div className="how-stage">

            <div className="how-step">
              STEP 1
            </div>

            <div className="how-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>

            </div>

            <h3>Discover</h3>

            <p>
              We understand your business goals, workflows,
              challenges and opportunities.
            </p>

          </div>

          {/* Stage 2 */}
          <div className="how-stage">

            <div className="how-step">
              STEP 2
            </div>

            <div className="how-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 19.5V5a2 2 0 0 1 2-2h14v16.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                <path d="M8 7h8" />
                <path d="M8 11h8" />
                <path d="M8 15h5" />
              </svg>

            </div>

            <h3>Design</h3>

            <p>
              We plan a customised technology solution
              around the way your business actually works.
            </p>

          </div>

          {/* Stage 3 */}
          <div className="how-stage">

            <div className="how-step">
              STEP 3
            </div>

            <div className="how-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
              </svg>

            </div>

            <h3>Build</h3>

            <p>
              From CRM and software engineering to websites,
              automation and digital solutions — we build for your needs.
            </p>

          </div>

          {/* Stage 4 */}
          <div className="how-stage">

            <div className="how-step">
              STEP 4
            </div>

            <div className="how-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 12a8 8 0 0 1 13.5-5.8L20 8" />
                <path d="M20 4v4h-4" />
                <path d="M20 12a8 8 0 0 1-13.5 5.8L4 16" />
                <path d="M4 20v-4h4" />
              </svg>

            </div>

            <h3>Grow</h3>

            <p>
              We improve, optimise and support your systems
              as your business evolves.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}