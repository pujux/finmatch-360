import { Suspense } from 'react';

import { ContentCategories } from './(components)/content-categories';
import { CredibilitySection } from './(components)/credibility-section';
import { EngagementMetrics } from './(components)/engagement-metrics';
import { KeyMetrics } from './(components)/key-metrics';
import { ProfileHeader } from './(components)/profile-header';
import { RecentActivity } from './(components)/recent-activity';

export default function FinfluencerProfile() {
  return (
    <main className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <Suspense fallback={<div>Loading profile...</div>}>
        <ProfileHeader />
      </Suspense>

      <div className="grid gap-8 lg:grid-cols-2">
        <Suspense fallback={<div>Loading metrics...</div>}>
          <KeyMetrics />
        </Suspense>

        <Suspense fallback={<div>Loading categories...</div>}>
          <ContentCategories />
        </Suspense>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Suspense fallback={<div>Loading credibility...</div>}>
          <CredibilitySection />
        </Suspense>

        <Suspense fallback={<div>Loading engagement...</div>}>
          <EngagementMetrics />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading activity...</div>}>
        <RecentActivity />
      </Suspense>
    </main>
  );
}
