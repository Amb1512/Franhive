import DomainPageTemplate from "./domainTemplate";

function Hospitals() {
  return (
    <DomainPageTemplate
      title="Hospitals"
      subtitle="Better Patient Experience Starts with Better Coordination."
      summary="FranHive supports hospitals and care networks with patient enquiry tracking, referral coordination, staff communication, and operational visibility across departments."
      keyword="Hospital CRM, Patient Enquiry Management, Referral Tracking, Healthcare Workflow, Smart Operations"
      bullets={[
        "Manage patient inquiries and appointment requests efficiently",
        "Track referrals, consultations and follow-up actions",
        "Keep departments aligned on service requests and responses",
        "Improve communication with patients and specialists",
        "Streamline admissions and operational workflows",
        "Measure demand, service quality and patient journey performance"
      ]}
      badge="Healthcare CRM"
      tag="Healthcare"
    />
  );
}

export default Hospitals;