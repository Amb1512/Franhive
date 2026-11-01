import DomainPageTemplate from "./domainTemplate";

function Transport() {
  return (
    <DomainPageTemplate
      title="Transport"
      subtitle="Make Bookings, Dispatch and Customer Communication Flow Better."
      summary="FranHive helps transport businesses organise customer enquiries, bookings, dispatch coordination, and service follow-ups across operations."
      keyword="Transport CRM, Booking Management, Dispatch Workflow, Fleet Communication, Service Growth"
      bullets={[
        "Capture and prioritise booking enquiries from multiple channels",
        "Keep customer information and trip history organised",
        "Automate confirmation, reminders and service follow-up messages",
        "Coordinate dispatch, route and team communication more efficiently",
        "Improve responsiveness and retention for repeat customers",
        "Monitor bookings, revenue and service performance clearly"
      ]}
      badge="Transport CRM"
      tag="Logistics"
    />
  );
}

export default Transport;