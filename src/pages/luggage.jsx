import DomainPageTemplate from "./domainTemplate";

function Luggage() {
  return (
    <DomainPageTemplate
      title="Luggage"
      subtitle="Sell Travel Products with Better Service and Better Follow-Up."
      summary="FranHive helps luggage and travel accessory businesses manage customer queries, product recommendations, sales follow-ups, and campaign-driven demand more effectively."
      keyword="Luggage CRM, Travel Retail, Customer Follow-Up, Product Sales, Campaign Automation"
      bullets={[
        "Track customer product interest and purchase decisions",
        "Manage seasonal campaigns and product launches",
        "Automate reminders and loyalty follow-ups",
        "Keep sales and support teams aligned on customer needs",
        "Improve recommendations based on travel and buying intent",
        "Measure campaign response and conversion across channels"
      ]}
      badge="Travel CRM"
      tag="Retail"
    />
  );
}

export default Luggage;