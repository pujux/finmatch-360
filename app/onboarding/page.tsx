'use client';

import { PathSelection } from './(components)/path-selection';

export default function OnboardingPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">Welcome to FinMatch360</h1>
        <p className="text-muted-foreground">
          How would you like to use our platform?
        </p>
      </div>

      <PathSelection />
    </main>
  );
}
