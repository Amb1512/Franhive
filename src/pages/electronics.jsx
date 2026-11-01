import DomainPageTemplate from "./domainTemplate";

function Electronics() {
  return (
    <DomainPageTemplate
      title="Electronics"
      subtitle="Boost Sales, Service and Customer Trust in Every Device Journey."
      summary="FranHive supports electronics retailers and service businesses with lead management, product enquiries, follow-ups, and customer engagement workflows."
      keyword="Electronics CRM, Device Sales, Customer Support, Product Enquiries, Retail Automation"
      bullets={[
        "Capture and organise product enquiries from multiple channels",
        "Track customer interest, purchases and after-sales needs",
        "Automate warranty, service and upsell follow-ups",
        "Keep sales and support teams aligned on every customer",
        "Manage promotions for launches, bundles and seasonal offers",
        "Monitor conversion and sales performance by product line"
      ]}
      badge="Electronics CRM"
      tag="Technology Retail"
    />
  );
}

export default Electronics;