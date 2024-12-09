import { Suspense } from 'react';

import { ClerkModalController } from './(components)/clerk-modal-controller';
import { FeaturesSection } from './(components)/features-section';
import { HeroSection } from './(components)/hero-section';
import { HowItWorks } from './(components)/how-it-works';
import { PricingSection } from './(components)/pricing-section';
import { TrustSection } from './(components)/trust-section';

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <TrustSection />
      <HowItWorks />
      <PricingSection />
      <Suspense>
        <ClerkModalController />
      </Suspense>
    </main>
  );
}
