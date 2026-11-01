import DomainPageTemplate from "./domainTemplate";

function Education() {
  return (
    <DomainPageTemplate
      title="Education"
      subtitle="Give Students, Parents and Staff a Better Experience."
      summary="FranHive helps education businesses simplify admissions, lead tracking, student communication, and retention across schools, academies, and learning centres."
      keyword="Education CRM, School Admissions, Student Management, Parent Communication, Academy Growth"
      bullets={[
        "Track parent and student enquiries across admissions channels",
        "Automate follow-ups for registrations and campus visits",
        "Manage lead sources, demo sessions and enrolment progress",
        "Keep staff and admissions teams aligned on next actions",
        "Improve messaging with email and WhatsApp engagement workflows",
        "Measure enrolment performance and conversion across campaigns"
      ]}
      badge="Education CRM"
      tag="Education"
    />
  );
}

export default Education;