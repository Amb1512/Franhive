import DomainPageTemplate from "./domainTemplate";

function HealthBeauty() {
  return (
    <DomainPageTemplate
      title="Health & Beauty"
      subtitle="Create Trust, Consistency and Long-Term Client Relationships."
      summary="FranHive helps clinics, salons, spas, and wellness businesses improve client engagement, retain customers, and manage growth with smarter operations."
      keyword="Health & Beauty CRM, Salon CRM, Clinic Engagement, Client Retention, Wellness Marketing"
      bullets={[
        "Capture leads from consultations, inquiries and social campaigns",
        "Keep customer preferences, treatments and purchase history in one place",
        "Automate reminders, follow-ups and offer campaigns",
        "Manage staff schedules and service delivery visibility",
        "Improve client experience and loyalty with personalised communication",
        "Track performance across locations, services and outreach campaigns"
      ]}
      badge="Beauty CRM"
      tag="Wellness"
    />
  );
}

export default HealthBeauty;