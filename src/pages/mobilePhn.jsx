import DomainPageTemplate from "./domainTemplate";

function MobilePhn() {
  return (
    <DomainPageTemplate
      title="Mobile Phone"
      subtitle="Turn Device Enquiries into Sales, Service and Repeat Business."
      summary="FranHive helps mobile phone retailers and service providers manage customer enquiries, device sales, upgrades, and after-sales support with efficient communication workflows."
      keyword="Mobile CRM, Device Retail, Sales Automation, After-Sales Service, Customer Support"
      bullets={[
        "Capture leads from device inquiries and trade-in requests",
        "Track upgrades, plans, accessories and purchases",
        "Automate reminder messages for warranty and service follow-up",
        "Keep store teams and support teams aligned",
        "Improve customer retention with personalised offers",
        "Monitor sales performance across devices and locations"
      ]}
      badge="Mobility CRM"
      tag="Retail"
    />
  );
}

export default MobilePhn;