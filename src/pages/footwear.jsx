import DomainPageTemplate from "./domainTemplate";

function FootWear() {
  return (
    <DomainPageTemplate
      title="Footwear"
      subtitle="From First Click to Repeat Purchase, Keep Every Customer Connected."
      summary="FranHive helps footwear brands and stores manage customer leads, promotions, stock updates, and repeat customer engagement in a unified system."
      keyword="Footwear CRM, Shoe Store Management, Customer Retention, Fashion Retail, Product Campaigns"
      bullets={[
        "Track customers, purchases and style preferences",
        "Manage seasonal offers and new collection launches",
        "Capture leads from digital and in-store enquiries",
        "Automate follow-ups for abandoned interest and repeat purchases",
        "Align retail teams around stock, sales and customer outreach",
        "Measure sales patterns and campaign performance by collection"
      ]}
      badge="Footwear CRM"
      tag="Retail"
    />
  );
}

export default FootWear;