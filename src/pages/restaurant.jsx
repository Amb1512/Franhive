import DomainPageTemplate from "./domainTemplate";

function Restaurant() {
  return (
    <DomainPageTemplate
      title="Restaurant"
      subtitle="Turn Every Customer Interaction Into a Better Experience."
      summary="FranHive helps restaurants manage customers, leads, marketing, staff, and multiple locations from one connected system."
      keyword="Restaurant CRM, Restaurant Management, Customer Engagement, Marketing Automation, Restaurant Analytics"
      bullets={[
        "Capture leads from customers interested in your business or new locations",
        "Maintain a centralised customer database",
        "Send targeted email and WhatsApp campaigns",
        "Promote new menu launches, offers and restaurant openings",
        "Manage staff information, enquiries and follow-ups efficiently",
        "Track engagement through customised dashboards"
      ]}
      badge="Restaurant CRM"
    />
  );
}

export default Restaurant;