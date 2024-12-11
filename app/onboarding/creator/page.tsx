'use client';

import { Card } from '@/ui/card';
import { CreatorOnboardingForm } from './(components)/creator-onboarding-form';

export default function UserOnboardingPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <Card className="p-6">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Welcome to FinMatch360</h1>
          <p className="text-muted-foreground">
            Let&apos;s personalize your experience to help you find the perfect
            financial experts
          </p>
        </div>

        <CreatorOnboardingForm />
      </Card>
    </main>
  );
}
