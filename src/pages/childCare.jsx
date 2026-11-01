import DomainPageTemplate from "./domainTemplate";

function ChildCare() {
  return (
    <DomainPageTemplate
      title="Child Care"
      subtitle="Better Parent Trust. Smoother Enrolment Journeys."
      summary="FranHive helps childcare centres manage parent enquiries, admissions, staff communication, and daily operations in one organised system."
      keyword="Childcare CRM, Parent Enquiry Management, Admissions Workflow, Childcare Operations, Parent Communication"
      bullets={[
        "Track parent enquiries and admissions from first contact to enrolment",
        "Organise waiting lists, schedules and child records centrally",
        "Automate reminders for visits, forms and follow-ups",
        "Keep parent communication clear and consistent",
        "Improve operational visibility for staff and management",
        "Monitor occupancy, retention and service trends effectively"
      ]}
      badge="Childcare CRM"
      tag="Education & Care"
    />
  );
}

export default ChildCare;