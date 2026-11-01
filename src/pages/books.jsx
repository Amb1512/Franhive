import DomainPageTemplate from "./domainTemplate";

function Books() {
  return (
    <DomainPageTemplate
      title="Books"
      subtitle="Turn Readers Into Loyal Customers and Repeat Buyers."
      summary="FranHive helps bookstores and publishing businesses manage customer relationships, bibliophile leads, event campaigns, and ongoing sales more efficiently."
      keyword="Bookstore CRM, Reader Engagement, Book Sales, Event Campaigns, Publishing Analytics"
      bullets={[
        "Track readers, preferences and purchase behavior",
        "Manage author events, launches and reading campaigns",
        "Automate promotions for new arrivals and bestsellers",
        "Capture leads from online and in-store enquiries",
        "Create personalised recommendations and follow-ups",
        "Measure sales, engagement and campaign impact in real time"
      ]}
      badge="Books CRM"
      tag="Retail"
    />
  );
}

export default Books;