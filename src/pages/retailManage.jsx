import DomainPageTemplate from "./domainTemplate";

function RetailManagement() {
  return (
    <DomainPageTemplate
      title="Retail Management"
      subtitle="Smarter Retail. Better Customer Relationships."
      summary="FranHive helps retail businesses connect sales, customers, inventory, staff, and marketing through a single connected business technology ecosystem."
      keyword="Retail CRM, Retail Automation, Customer Management, Inventory Integration, Retail Analytics"
      bullets={[
        "Connect your CRM with billing and inventory systems for better stock visibility",
        "Capture and organise customer information in one centralised platform",
        "Automate customer campaigns through email and WhatsApp",
        "Notify customers about new products, launches and special offers",
        "Track customer interactions, follow-ups and sales opportunities",
        "Monitor business performance through customised dashboards"
      ]}
      badge="Retail CRM"
    />
  );
}

export default RetailManagement;