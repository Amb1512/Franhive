import DomainPageTemplate from "./domainTemplate";

function Attorney() {
  return (
    <DomainPageTemplate
      title="Attorney / Law Firm"
      subtitle="Confident Client Service, Stronger Case Operations."
      summary="FranHive helps law firms streamline client intake, lead tracking, matter follow-ups, and communication across teams while keeping every case organised and actionable."
      keyword="Legal CRM, Law Firm Management, Client Intake, Case Follow-Up, Attorney Operations"
      bullets={[
        "Capture and qualify new legal leads efficiently",
        "Track client conversations, consultations and case progress",
        "Automate follow-up reminders and document requests",
        "Organise referral sources and firm outreach efforts",
        "Improve team coordination across practice areas",
        "Get a clear view of leads, cases and revenue performance"
      ]}
      badge="Legal CRM"
      tag="Law Firm"
    />
  );
}

export default Attorney;