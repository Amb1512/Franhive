import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import LiveAI from "./components/liveAI";
import HowWeWork from "./components/howWeWork";
import Chatbot from "./components/chatbot";
import FranHiveSoftware from "./pages/solutions/franhiveSoftware";
import FranHiveCRM from "./pages/solutions/franhiveCRM";
import FranHiveTraining from "./pages/solutions/franhiveTraining";
import InventoryManagement from "./pages/solutions/inventoryManagement";
import WebsiteDesigning from "./pages/solutions/websiteDesigning";
import WebsiteHosting from "./pages/solutions/websiteHosting";
import DatabaseSupport from "./pages/solutions/databaseSupport";
import SEO from "./pages/solutions/seo";
import PPC from "./pages/solutions/ppc";
import SMM from "./pages/solutions/smm";
import OnlineTraining from "./pages/solutions/onlineTraining";
import AboutUs from "./pages/about_us";
import ContactUs from "./pages/contact_us";
import FAQ from "./pages/faq";
import Pricing from "./pages/pricing";
import RetailManagement from "./pages/retailManage";
import Restaurant from "./pages/restaurant";
import ChildCare from "./pages/childCare";
import Fitness from "./pages/fitness";
import RealEstate from "./pages/realestate";
import Hospitals from "./pages/hospitals";
import HealthBeauty from "./pages/health&beauty";
import Luggage from "./pages/luggage";
import Sports from "./pages/sports";
import Apparel from "./pages/apparel";
import EventPlanner from "./pages/eventPlanner";
import Attorney from "./pages/attorney";
import Transport from "./pages/transport";
import HouseKeeping from "./pages/houseKeeping";
import Books from "./pages/books";
import Education from "./pages/education";
import Electronics from "./pages/electronics";
import Jewellery from "./pages/jewellery";
import MobilePhn from "./pages/mobilePhn";
import FootWear from "./pages/footwear";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [chatOpen, setChatOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar onChatOpen={() => setChatOpen(true)} />

      {isHomePage && (
      <main>

        {/* ================= HERO ================= */}

        <section className="hero" id="home">
          <div className="container hero-grid">

            <div className="hero-content">

              <div className="pill">
                <span className="spark">✦</span>
                TECHNOLOGY & DIGITAL BUSINESS SOLUTIONS
              </div>

              <h1>
                Technology{" "}
                <br />
                that makes an
                <br />
                <span className="yellow">Impact.</span>
                <br />
              </h1>

              <p>
                FranHive brings together custom CRM engineering, AI, automation, and digital solutions to build intelligent business systems that simplify operations, accelerate growth, and turn opportunities into measurable results.
              </p>

              <div className="actions">
                <a href="#contact" className="btn btn-black">
                  Book an AI Demo →
                </a>

                <a href="#solutions" className="btn btn-yellow">
                  Explore Solutions
                </a>
              </div>

              <div className="trust">
                <span>✓ <b>AI-ready</b> workflows</span>
                <span>✓ Customisable CRM automation</span>
                <span>✓ Scalable architecture</span>
              </div>

            </div>


            {/* RIGHT SIDE — LIVE AI ORB */}

<LiveAI />

          </div>
        </section>


        {/* ================= SOLUTIONS ================= */}

        <section id="solutions" className="section-with-bee">

          <div className="container">

            <div className="head">

              <h2>
                Technology solutions built around your business.
              </h2>

              <p>
                From customised CRM and software engineering to websites, automation and digital growth, we build solutions around the way your business actually works.
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
                icon="✦"
                title="POS: Point Of Sale"
                text="Turn your business data into useful insights, actions and smarter decisions."
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

         {/* ================= HOW WE WORK ================= */}

        <HowWeWork />

        {/* ================= AI SECTION ================= */}

        <section className="dark section-with-bee">

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
              <SolutionCard
                icon="✦"
                title="AI Business Intelligence"
                text="Turn your business data into useful insights, actions and smarter decisions."
            />

            </div>

          </div>

        </section>


        {/* ================= AUTOMATION ================= */}

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


        {/* ================= INDUSTRIES ================= */}

        <section
          className="industries"
          id="industries"
        >

          <div className="container">

            <div className="head">

              <h2>
                Industry-focused AI solutions.
              </h2>

              <p>
                Start with workflows designed around your
                industry's real-world pain points.
              </p>

            </div>


            <div className="industry-grid">

              <Industry
                title="Business Coaches"
                text="Manage leads, discovery calls, prospects, programs, client journeys, follow-ups and renewals with an AI-enabled CRM."
                tag="Customised CRM →"
                href="/solutions/franhive-crm"
              />

              <Industry
                title="Radiology & Diagnostics"
                text="Connect patient enquiries, appointments, referring doctors, centres and operational workflows with intelligent visibility."
                tag="Customised CRM →"
                href="/solutions/franhive-crm"
              />

              <Industry
                title="Startups & Emerging Businesses"
                text="Build a scalable CRM, automation and digital technology foundation to manage leads, customers, operations and growth from one platform."
                tag="Inventory Management →"
                href="/solutions/inventory-management"
                ariaLabel="Inventory Management"
              />

              <Industry
                title="Growing SMBs"
                text="Build a practical Customised CRM and automation foundation without stitching together multiple disconnected systems."
                tag="Inventory Management →"
                href="/solutions/inventory-management"
                ariaLabel="Inventory Management"
              />

            </div>

          </div>

        </section>

        {/* ================= DIGITAL GROWTH ================= */}

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


        {/* ================= CTA ================= */}

        <section
          className="cta"
          id="contact"
        >

        </section>

      </main>
      )}

      <Routes>
        <Route path="/domain/retail-management" element={<RetailManagement />} />
        <Route path="/domain/restaurant" element={<Restaurant />} />
        <Route path="/domain/childcare" element={<ChildCare />} />
        <Route path="/domain/fitness" element={<Fitness />} />
        <Route path="/domain/real-estate" element={<RealEstate />} />
        <Route path="/domain/hospitals" element={<Hospitals />} />
        <Route path="/domain/health-beauty" element={<HealthBeauty />} />
        <Route path="/domain/luggage" element={<Luggage />} />
        <Route path="/domain/mobile-phone" element={<MobilePhn />} />
        <Route path="/domain/sports" element={<Sports />} />
        <Route path="/domain/jewellery" element={<Jewellery />} />
        <Route path="/domain/electronics" element={<Electronics />} />
        <Route path="/domain/apparel" element={<Apparel />} />
        <Route path="/domain/footwear" element={<FootWear />} />
        <Route path="/domain/books" element={<Books />} />
        <Route path="/domain/education" element={<Education />} />
        <Route path="/domain/event-planner" element={<EventPlanner />} />
        <Route path="/domain/attorney" element={<Attorney />} />
        <Route path="/domain/transport" element={<Transport />} />
        <Route path="/domain/housekeeping" element={<HouseKeeping />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />

  <Route
    path="/solutions/franhive-software"
    element={<FranHiveSoftware />}
  />

  <Route
    path="/solutions/franhive-crm"
    element={<FranHiveCRM />}
  />

  <Route
    path="/solutions/franhive-training"
    element={<FranHiveTraining />}
  />

  <Route
    path="/solutions/inventory-management"
    element={<InventoryManagement />}
  />

  <Route
    path="/solutions/website-designing"
    element={<WebsiteDesigning />}
  />

  <Route
    path="/solutions/website-hosting"
    element={<WebsiteHosting />}
  />

  <Route
    path="/solutions/database-support"
    element={<DatabaseSupport />}
  />

  <Route
    path="/solutions/seo"
    element={<SEO />}
  />

  <Route
    path="/solutions/ppc"
    element={<PPC />}
  />

  <Route
    path="/solutions/smm"
    element={<SMM />}
  />

  <Route
    path="/solutions/online-training"
    element={<OnlineTraining />}
  />

</Routes>

      {/* ================= CHATBOT ================= */}

      <Chatbot
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />

      {/* ================= FOOTER ================= */}

      <footer>
  <div className="container footer-grid">

    {/* Our Solutions */}
    <div>
      <h2>Our Solutions</h2>

      <a href="/solutions/franhive-software">FranHive Software</a>
      <a href="/solutions/franhive-crm">FranHive Customisable CRM</a>
      <a href="/solutions/franhive-training">FranHive Training</a>
      <a href="/solutions/inventory-management">Inventory Management</a>
      <a href="/solutions/online-training">Online Training</a>
    </div>


    {/* Digital Solutions */}
    <div>
      <h4>&nbsp;</h4>

      <a href="/solutions/website-designing">Website Designing</a>
      <a href="/solutions/website-hosting">Website Hosting</a>
      <a href="/solutions/database-support">Database Support</a>
      <a href="/solutions/ppc">Pay Per Click</a>
      <a href="/solutions/seo">SEO (Search Engine Optimization)</a>
      <a href="/solutions/smm">SMM (Social Media Marketing)</a>
    </div>


    {/* Quick Links */}
    <div>
      <h2>Quick Links</h2>

      <a href="/">Home</a>
      <a href="/domain/retail-management">Domain</a>
      <a href="/about-us">About us</a>
      <a href="/contact-us">Contact Us</a>
      <a href="/faq">FAQ</a>
    </div>


    {/* Follow Us */}
    <div>
      <h2>Follow Us On</h2>
      <a href="https://www.instagram.com/franhive_business_solutions/">
        <svg className="footer-instagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
        </svg>
        Instagram
      </a>

      <a href="https://www.linkedin.com/company/82611678/admin/dashboard/">
        <span>in</span>&nbsp; Linkedin
      </a>
    </div>

  </div>


  {/* Bottom Footer */}
  <div className="container copy">

    <span>
      Copyright © 2022 FranHive. All rights reserved.
    </span>
  </div>
</footer>
    </>
  );
}

/* ============================================================
   COMPONENTS
============================================================ */

function SolutionCard({ icon, title, text }) {
  return (
    <div className="card">

      <BeeMark className="card-bee" />

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

function BeeMark({ className = "heading-bee" }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 48 42" fill="none">
        <ellipse cx="14" cy="29" rx="7" ry="5" fill="#FFFDF6" opacity="0.72" />
        <ellipse cx="34" cy="29" rx="7" ry="5" fill="#FFFDF6" opacity="0.72" />
        <path d="M21 8 18 2M27 8 30 2" stroke="#15120B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="12" r="7" fill="#15120B" />
        <rect x="10" y="18" width="28" height="21" rx="10.5" fill="#F5B400" stroke="#15120B" strokeWidth="1.5" />
        <path d="M11 23h26M11 30h26M11 36h26" stroke="#15120B" strokeWidth="4" />
      </svg>
    </span>
  );
}

function Check({ text }) {
  return (
    <div className="check">

      <span>
        ✓
      </span>

      {text}

    </div>
  );
}


function Workflow({ icon, title, text }) {
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


function Industry({ title, text, tag, href, ariaLabel = "Learn more" }) {
  return (
    <div className="industry">

      <BeeMark className="industry-bee" />

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      {href ? (
        <a className="tag" href={href} aria-label={ariaLabel}>
          {tag}
        </a>
      ) : (
        <span className="tag">
          {tag}
        </span>
      )}

    </div>
  );
}

export default App;