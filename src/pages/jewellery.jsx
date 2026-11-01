import DomainPageTemplate from "./domainTemplate";

function Jewellery() {
  return (
    <DomainPageTemplate
      title="Jewellery"
      subtitle="Craft More Personal Customer Journeys Around Every Purchase."
      summary="FranHive helps jewellery brands and stores manage leads, customer preferences, promises, and high-value follow-ups with a more polished and personal experience."
      keyword="Jewellery CRM, Luxury Retail, Customer Relationship, Sales Follow-Up, Brand Experience"
      bullets={[
        "Track customer enquiries for special occasions and collections",
        "Maintain customer preferences, purchases and service history",
        "Automate follow-ups for new collections and anniversaries",
        "Keep sales teams aligned on premium service opportunities",
        "Improve personalised outreach and repeat customer loyalty",
        "Monitor sales performance and campaign results by collection"
      ]}
      badge="Luxury CRM"
      tag="Retail"
    />
  );
}

export default Jewellery;