import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/ui/button";
import { TrendingUp, Users, Shield } from "lucide-react";
import Link from "next/link";
import { FeaturesSection } from "./(components)/features-section";
import { HeroSection } from "./(components)/hero-section";
import { HowItWorks } from "./(components)/how-it-works";
import { PricingSection } from "./(components)/pricing-section";
import { TrustSection } from "./(components)/trust-section";
import { ClerkModalController } from "./(components)/clerk-modal-controller";
import { Suspense } from "react";

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
      {/* Hero Section 
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">Discover Top Financial Influencers</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Compare, analyze, and follow the most trusted voices in finance. Make informed decisions with curated insights from leading financial
          experts.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/sign-up">
            <Button size="lg" className="px-8">
              Start Exploring
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section 
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FinFluencer Hub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Curated Experts</h3>
              <p className="text-muted-foreground">Access a carefully vetted network of financial influencers and experts.</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
              <p className="text-muted-foreground">Monitor and compare the track record of different financial advisors.</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Trusted Platform</h3>
              <p className="text-muted-foreground">Verified profiles and transparent rating system you can rely on.</p>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
