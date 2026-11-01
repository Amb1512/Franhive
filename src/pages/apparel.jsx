import DomainPageTemplate from "./domainTemplate";

function Apparel() {
  return (
    <DomainPageTemplate
      title="Apparel"
      subtitle="Style Your Customer Journey from Visit to Repeat Purchase."
      summary="FranHive helps apparel brands manage customer relationships, launches, offers, and repeat sales across stores and digital channels with a single, connected system."
      keyword="Apparel CRM, Fashion Retail, Customer Retention, Product Launches, Omnichannel Sales"
      bullets={[
        "Track customer preferences, style interests and purchase history",
        "Manage product launches, seasonal campaigns and loyalty offers",
        "Automate follow-ups and re-engagement campaigns",
        "Keep store and online sales teams aligned on leads and orders",
        "Improve customer experience with faster service and personalised outreach",
        "Monitor sales, campaigns and performance from one dashboard"
      ]}
      badge="Fashion CRM"
      tag="Apparel"
    />
  );
}

export default Apparel;