import DomainPageTemplate from "./domainTemplate";

function HouseKeeping() {
  return (
    <DomainPageTemplate
      title="House Keeping"
      subtitle="Clean Service Operations, Reliable Staff Coordination, Better Client Trust."
      summary="FranHive helps housekeeping and facilities businesses manage customer enquiries, service bookings, staff assignments, and repeat client engagement with more clarity."
      keyword="Housekeeping CRM, Cleaning Service Management, Staff Scheduling, Client Follow-Up, Service Operations"
      bullets={[
        "Capture customer service requests and service preferences",
        "Assign jobs to staff and track completion status",
        "Automate follow-up reminders and recurring service notices",
        "Keep client history, preferences and service records organised",
        "Improve scheduling and responsiveness across teams",
        "Monitor service quality, revenue and recurring demand"
      ]}
      badge="Service CRM"
      tag="Facilities"
    />
  );
}

export default HouseKeeping;