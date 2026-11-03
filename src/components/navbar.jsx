import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ onChatOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (event, dropdown) => {
    if (window.matchMedia("(max-width: 1000px)").matches) {
      event.preventDefault();
      setOpenDropdown((current) => current === dropdown ? null : dropdown);
    }
  };

  return (
    <header>
      <div className="container nav">

        {/* LOGO */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="FranHive"
            className="brand-logo"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className={`navlinks ${menuOpen ? "open" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <div className={`nav-dropdown ${openDropdown === "domain" ? "dropdown-open" : ""}`}>
  <a href="#solutions" className="domain-link" aria-expanded={openDropdown === "domain"} onClick={(event) => toggleDropdown(event, "domain")}>
    Domain <span>⌄</span>
  </a>

  <div className="domain-menu">

    <div className="domain-column">

      <h4>Retail, Food & Lifestyle</h4>

      <a href="/domain/retail-management" onClick={closeMenu}>
        Retail Management
      </a>

      <a href="/domain/restaurant" onClick={closeMenu}>
        Restaurant
      </a>

      <a href="/domain/childcare" onClick={closeMenu}>
        Childcare
      </a>

      <a href="/domain/fitness" onClick={closeMenu}>
        Fitness
      </a>

      <a href="/domain/real-estate" onClick={closeMenu}>
        Real Estate
      </a>

      <a href="/domain/hospitals" onClick={closeMenu}>
        Hospitals
      </a>

      <a href="/domain/health-beauty" onClick={closeMenu}>
        Health & Beauty
      </a>

    </div>


    <div className="domain-column">

      <h4>Retail & Commercial Businesses</h4>

      <a href="/domain/luggage" onClick={closeMenu}>
        Luggage & Handbags
      </a>

      <a href="/domain/mobile-phone" onClick={closeMenu}>
        Mobile Phone
      </a>

      <a href="/domain/sports" onClick={closeMenu}>
        Sports Goods
      </a>

      <a href="/domain/jewellery" onClick={closeMenu}>
        Jewellery
      </a>

      <a href="/domain/electronics" onClick={closeMenu}>
        Electronics
      </a>

      <a href="/domain/apparel" onClick={closeMenu}>
        Apparel
      </a>

      <a href="/domain/footwear" onClick={closeMenu}>
        Footwear
      </a>

    </div>


    <div className="domain-column">

      <h4>Professional Services & Education</h4>

      <a href="/domain/event-planner" onClick={closeMenu}>
        Event Planner
      </a>

      <a href="/domain/attorney" onClick={closeMenu}>
        Attorney / Law Firm
      </a>

      <a href="/domain/books" onClick={closeMenu}>
        Books & Stationery
      </a>

      <a href="/domain/education" onClick={closeMenu}>
        Education & Training
      </a>

      <a href="/domain/transport" onClick={closeMenu}>
        Transport
      </a>

      <a href="/domain/housekeeping" onClick={closeMenu}>
        Housekeeping & Cleaning
      </a>

    </div>

  </div>
</div>

          <div className={`nav-dropdown ${openDropdown === "solutions" ? "dropdown-open" : ""}`}>
  <a href="#solutions" className="domain-link" aria-expanded={openDropdown === "solutions"} onClick={(event) => toggleDropdown(event, "solutions")}>
    Solutions <span>⌄</span>
  </a>

  <div className="domain-menu solutions-menu">

    {/* Business Solutions */}
    <div className="domain-column">
      <h4>Business Solutions</h4>

      <a href="/solutions/franhive-software" onClick={closeMenu}>
        FranHive Software
      </a>

      <a href="/solutions/franhive-crm" onClick={closeMenu}>
        FranHive CRM
      </a>

      <a href="/solutions/inventory-management" onClick={closeMenu}>
        Inventory Management
      </a>

      <a href="/solutions/database-support" onClick={closeMenu}>
        Database Support
      </a>
    </div>


    {/* Digital Solutions */}
    <div className="domain-column">
      <h4>Digital Solutions</h4>

      <a href="/solutions/website-designing" onClick={closeMenu}>
        Website Designing
      </a>

      <a href="/solutions/website-hosting" onClick={closeMenu}>
        Website Hosting
      </a>

      <a href="/solutions/seo" onClick={closeMenu}>
        SEO
      </a>

      <a href="/solutions/ppc" onClick={closeMenu}>
        PPC
      </a>

      <a href="/solutions/smm" onClick={closeMenu}>
        Social Media Marketing
      </a>
    </div>


    {/* Training & Enablement */}
    <div className="domain-column">
      <h4>Training & Enablement</h4>

      <a href="/solutions/franhive-training" onClick={closeMenu}>
        FranHive Training
      </a>

      <a href="/solutions/online-training" onClick={closeMenu}>
        Online Training
      </a>
    </div>

  </div>
</div>

          <a href="/pricing" onClick={closeMenu}>
            Pricing
          </a>

          <a href="/about-us" onClick={closeMenu}>
            About Us
          </a>

          <a href="/faq" onClick={closeMenu}>
            FAQ
          </a>

          <a href="/contact-us" onClick={closeMenu}>
            Contact Us
          </a>

        </nav>

        {/* CHATBOT BUTTON */}
        <button
  type="button"
  className="btn btn-black nav-demo"
  onClick={onChatOpen}
>
  Talk to FranHive AI →
</button>

        {/* MOBILE MENU */}
        <button
          type="button"
          className={`mobile-menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;