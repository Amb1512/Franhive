import LiveAI from "../components/liveAI";
import HowWeWork from "../components/howWeWork";


function Home() {

  return (

    <>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="hero"
        id="home"
      >

        <div className="container hero-grid">

          {/* ================= LEFT ================= */}

          <div className="hero-content">

            <div className="pill">

              <span className="spark">
                ✦
              </span>

              TECHNOLOGY & DIGITAL BUSINESS SOLUTIONS

            </div>


            <h1>

              Technology
              <br />

              that makes an
              <br />

              <span className="yellow">
                Impact.
              </span>

            </h1>


            <p>

              FranHive brings together custom CRM engineering,
              AI, automation, and digital solutions to build
              intelligent business systems that simplify
              operations, accelerate growth, and turn
              opportunities into measurable results.

            </p>


            <div className="actions">

              <a
                href="#contact"
                className="btn btn-black"
              >
                Book an AI Demo →
              </a>


              <a
                href="#solutions"
                className="btn btn-yellow"
              >
                Explore Solutions
              </a>

            </div>


            <div className="trust">

              <span>
                ✓ <b>AI-ready</b> workflows
              </span>

              <span>
                ✓ Customisable CRM automation
              </span>

              <span>
                ✓ Scalable architecture
              </span>

            </div>

          </div>


          {/* ================= RIGHT ================= */}

          <LiveAI />

        </div>

      </section>



      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section
        id="solutions"
      >

        <div className="container">

          <div className="head">

            <h2>
              Technology solutions built around your business.
            </h2>


            <p>
              From customised CRM and software engineering to
              websites, automation and digital growth, we build
              solutions around the way your business actually works.
            </p>

          </div>


          <div className="cards">

            <SolutionCard
              icon="✦"
              title="Customised CRM"
              text="Purpose-built CRM systems designed around your sales process, customers and business workflows."
            />


            <SolutionCard
              icon="↗"
              title="Software Engineering"
              text="Scalable web applications and business software engineered to solve specific operational challenges."
            />


            <SolutionCard
              icon="⌂"
              title="Website Development"
              text="High-performance, responsive websites designed to strengthen your digital presence and convert visitors into customers."
            />


            <SolutionCard
              icon="◎"
              title="Digital Growth"
              text="SEO, performance marketing and social media solutions that help your business reach and engage the right audience."
            />


            <SolutionCard
              icon="◎"
              title="Business Automation"
              text="Streamline repetitive processes, connect your systems and reduce manual work with smart automation."
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          HOW WE WORK
      ===================================================== */}

      <HowWeWork />



      {/* =====================================================
          AI / CRM SECTION
      ===================================================== */}

      <section className="dark">

        <div className="container">

          <div className="head">

            <h2>
              What if your Customisable CRM could think
              with your team?
            </h2>


            <p>
              FranHive AI is designed to turn business data
              into useful next actions — not just another dashboard.
            </p>

          </div>


          <div className="cards">

            <SolutionCard
              icon="01"
              title="Find the hot leads"
              text="Identify opportunities that deserve attention based on activity and business signals."
            />


            <SolutionCard
              icon="02"
              title="Summarize conversations"
              text="Give your team context quickly so every interaction starts with the right information."
            />


            <SolutionCard
              icon="03"
              title="Recommend actions"
              text="Surface follow-ups and workflow priorities so important opportunities don't get missed."
            />


            <SolutionCard
              icon="04"
              title="See what's changing"
              text="Turn operational data into management insights and faster decisions."
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          BUSINESS AUTOMATION
      ===================================================== */}

      <section>

        <div className="container split">

          <div>

            <div className="pill soft-pill">
              BUSINESS AUTOMATION
            </div>


            <h2>

              Less admin.
              <br />
              More time for customers.

            </h2>


            <p>

              FranHive helps your people spend less time
              chasing information and more time creating value.

            </p>


            <div className="checks">

              <Check text="Automate repetitive workflows" />

              <Check text="Reduce lead leakage" />

              <Check text="Improve management visibility" />

              <Check text="Connect business and marketing data" />

            </div>

          </div>


          <div className="workflow">

            <Workflow
              icon="✦"
              title="AI Lead Prioritization"
              text="Highlight opportunities that deserve attention."
            />


            <Workflow
              icon="↻"
              title="Automated Follow-ups"
              text="Keep the customer journey moving."
            />


            <Workflow
              icon="▣"
              title="Smart Reporting"
              text="Give leadership the signals behind the numbers."
            />


            <Workflow
              icon="⌁"
              title="Connected Workflows"
              text="Move information between teams and processes."
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section
        className="industries"
        id="industries"
      >

        <div className="container">

          <div className="head">

            <h2>
              Industry-focused solutions.
            </h2>


            <p>
              Start with workflows designed around your
              industry's real-world pain points.
            </p>

          </div>


          <div className="industry-grid">

            <Industry
              title="Business Coaches"
              text="Manage leads, discovery calls, prospects, programs, client journeys, follow-ups and renewals with a customised CRM."
              tag="Customised CRM →"
            />


            <Industry
              title="Radiology & Diagnostics"
              text="Connect patient enquiries, appointments, referring doctors, centres and operational workflows with better visibility."
              tag="Customised CRM →"
            />


            <Industry
              title="Startups & Emerging Businesses"
              text="Build a scalable CRM, automation and digital technology foundation to manage leads, customers, operations and growth from one platform."
              tag="Business Solutions →"
            />


            <Industry
              title="Growing SMBs"
              text="Build a practical Customised CRM and automation foundation without stitching together multiple disconnected systems."
              tag="SMB SOLUTIONS →"
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          DIGITAL GROWTH
      ===================================================== */}

      <section
        className="growth"
        id="growth"
      >

        <div className="container split">

          <div>

            <div className="pill">
              DIGITAL GROWTH
            </div>


            <h2>

              Your technology and
              <br />
              marketing should work together.

            </h2>


            <p>

              FranHive can combine your Customised CRM foundation
              with the digital execution needed to generate
              and convert demand.

            </p>


            <div className="checks">

              <Check text="Website development" />

              <Check text="Search engine optimization" />

              <Check text="Performance marketing" />

              <Check text="Social media campaigns" />

            </div>

          </div>


          <div className="panel growth-panel">

            <div className="panel-head">

              <div className="ai-title">
                Growth Command Centre
              </div>


              <div className="live">

                <i></i>

                Connected

              </div>

            </div>


            <div className="growth-content">

              <div className="growth-metric">

                <small>
                  Campaign → Lead → CRM
                </small>

                <strong>
                  Connected
                </strong>

              </div>


              <div className="growth-metric">

                <small>
                  Next best action
                </small>

                <strong>
                  Follow up with 8 hot leads
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="cta"
        id="contact"
      >

        <div className="container">

          <h2>
            Ready to build a better business system?
          </h2>


          <p>
            Tell us where your business is losing time,
            visibility or opportunities. Let's design
            the right solution.
          </p>


          <a
            href="#contact"
            className="btn btn-black"
          >
            Book a Demo →
          </a>

        </div>

      </section>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="container footer-grid">


          {/* ================= OUR SOLUTIONS ================= */}

          <div>

            <h2>
              Our Solutions
            </h2>


            <a href="/domain/customised-crm">
              FranHive Customisable CRM
            </a>


            <a href="/domain/franhive-software">
              FranHive Software
            </a>


            <a href="/domain/franhive-training">
              FranHive Training
            </a>


            <a href="/domain/inventory-management">
              Inventory Management
            </a>


            <a href="/domain/website-designing">
              Website Designing
            </a>

          </div>



          {/* ================= DIGITAL SOLUTIONS ================= */}

          <div>

            <h4>
              &nbsp;
            </h4>


            <a href="/domain/website-hosting">
              Website Hosting
            </a>


            <a href="/domain/database-support">
              Database Support
            </a>


            <a href="/domain/pay-per-click">
              Pay Per Click
            </a>


            <a href="/domain/seo">
              SEO (Search Engine Optimization)
            </a>


            <a href="/domain/smm">
              SMM (Social Media Marketing)
            </a>

          </div>



          {/* ================= QUICK LINKS ================= */}

          <div>

            <h2>
              Quick Links
            </h2>


            <a href="#home">
              Home
            </a>


            <a href="#solutions">
              Solutions
            </a>


            <a href="#about">
              About Us
            </a>


            <a href="#contact">
              Contact Us
            </a>


            <a href="#faq">
              FAQ
            </a>

          </div>



          {/* ================= FOLLOW US ================= */}

          <div>

            <h2>
              Follow Us On
            </h2>


            <a
              href="https://www.instagram.com/franhive_business_solutions/"
              target="_blank"
              rel="noreferrer"
            >
              <span>◎</span>
              &nbsp;&nbsp;
              Instagram
            </a>


            <a
              href="https://www.linkedin.com/company/82611678/admin/dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              <span>in</span>
              &nbsp;
              Linkedin
            </a>

          </div>

        </div>



        {/* ================= BOTTOM ================= */}

        <div className="container copy">

          <span>
            Copyright © 2026 FranHive. All rights reserved.
          </span>

        </div>

      </footer>

    </>

  );

}



/* ============================================================
   SOLUTION CARD
============================================================ */

function SolutionCard({
  icon,
  title,
  text
}) {

  return (

    <div className="card">

      <div className="ico">
        {icon}
      </div>


      <h3>
        {title}
      </h3>


      <p>
        {text}
      </p>

    </div>

  );

}



/* ============================================================
   CHECK
============================================================ */

function Check({
  text
}) {

  return (

    <div className="check">

      <span>
        ✓
      </span>

      {text}

    </div>

  );

}



/* ============================================================
   WORKFLOW
============================================================ */

function Workflow({
  icon,
  title,
  text
}) {

  return (

    <div className="wf">

      <div className="ico">
        {icon}
      </div>


      <div>

        <h3>
          {title}
        </h3>


        <p>
          {text}
        </p>

      </div>


      <span className="arrow">
        →
      </span>

    </div>

  );

}



/* ============================================================
   INDUSTRY
============================================================ */

function Industry({
  title,
  text,
  tag
}) {

  return (

    <div className="industry">

      <h3>
        {title}
      </h3>


      <p>
        {text}
      </p>


      <span className="tag">
        {tag}
      </span>

    </div>

  );

}


export default Home;