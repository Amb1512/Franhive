import DomainPageTemplate from "./domainTemplate";

function RealEstate() {
  return (
    <DomainPageTemplate
      title="Real Estate"
      subtitle="From Lead to Closing, Keep Every Step Visible and Actionable."
      summary="FranHive helps real estate businesses manage buyer inquiries, property interest, follow-ups, and agent coordination in one place."
      keyword="Real Estate CRM, Property Leads, Broker Workflow, Buyer Management, Closing Process"
      bullets={[
        "Capture and qualify property buyer and seller enquiries",
        "Track site visits, follow-ups and deal stages",
        "Manage agents, listings and response workflows centrally",
        "Automate reminders for viewings, offers and approvals",
        "Improve client communication across the sales funnel",
        "Monitor lead conversion and sales team performance"
      ]}
      badge="Property CRM"
      tag="Real Estate"
    />
  );
}

export default RealEstate;