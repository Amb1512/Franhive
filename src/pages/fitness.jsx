import DomainPageTemplate from "./domainTemplate";

function Fitness() {
  return (
    <DomainPageTemplate
      title="Fitness"
      subtitle="Grow Memberships, Retention and Daily Momentum."
      summary="FranHive helps fitness studios, gyms, and wellness brands keep members engaged, improve follow-ups, and turn enquiries into long-term memberships."
      keyword="Fitness CRM, Gym Membership, Client Retention, Wellness Marketing, Personal Training AI"
      bullets={[
        "Capture membership inquiries and trial leads faster",
        "Track member activity, progress and engagement history",
        "Automate reminders for renewals and promotions",
        "Keep trainers and front-desk teams aligned on customer needs",
        "Run targeted offers for memberships and classes",
        "Measure retention, conversion and club performance"
      ]}
      badge="Fitness CRM"
      tag="Wellness"
    />
  );
}

export default Fitness;