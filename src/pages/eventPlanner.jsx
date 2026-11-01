import DomainPageTemplate from "./domainTemplate";

function EventPlanner() {
  return (
    <DomainPageTemplate
      title="Event Planner"
      subtitle="Plan Events That Feel Seamless From First Inquiry to Final Thank You."
      summary="FranHive helps event planners manage enquiries, vendors, client communication, and event timelines with a central workflow that keeps every detail on track."
      keyword="Event Planner CRM, Event Enquiries, Vendor Management, Wedding Planning, Event Operations"
      bullets={[
        "Track incoming event enquiries and client requirements",
        "Manage vendors, planning milestones and deliverables in one place",
        "Automate reminders and follow-up communication",
        "Keep budgets, guest lists and timelines organised",
        "Improve customer satisfaction with faster responses",
        "Get visibility into bookings, revenue and upcoming events"
      ]}
      badge="Event CRM"
      tag="Events"
    />
  );
}

export default EventPlanner;