import { ContentCategories } from './(components)/content-categories';
import { CredibilitySection } from './(components)/credibility-section';
import { EngagementMetrics } from './(components)/engagement-metrics';
import { KeyMetrics } from './(components)/key-metrics';
import { ProfileHeader } from './(components)/profile-header';
import { RecentActivity } from './(components)/recent-activity';

export default async function FinfluencerProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <ProfileHeader />

      <div className="grid gap-8 lg:grid-cols-2">
        <KeyMetrics />
        <ContentCategories />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <CredibilitySection />
        <EngagementMetrics />
      </div>

      <RecentActivity />
    </main>
  );
}
