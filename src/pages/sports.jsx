import DomainPageTemplate from "./domainTemplate";

function Sports() {
  return (
    <DomainPageTemplate
      title="Sports"
      subtitle="Build Stronger Fan, Player and Partner Connections."
      summary="FranHive helps sports businesses engage fans, manage memberships, track leads, and organise event and club communication in one connected workflow."
      keyword="Sports CRM, Club Management, Membership Growth, Fan Engagement, Sports Marketing"
      bullets={[
        "Track member enquiries, renewals and registrations",
        "Manage club events, training programs and team communications",
        "Automate campaigns for memberships and promotional offers",
        "Keep coaches, staff and partners aligned on action items",
        "Improve retention with personalised follow-ups",
        "Measure growth, engagement and campaign performance"
      ]}
      badge="Sports CRM"
      tag="Athletics"
    />
  );
}

export default Sports;