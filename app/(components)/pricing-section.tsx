'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { SignUpButton } from '@clerk/nextjs';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Basic comparisons',
      'Limited expert profiles',
      'Community reviews',
      'Basic metrics',
    ],
  },
  {
    name: 'Pro',
    price: '$19/month',
    features: [
      'Unlimited comparisons',
      'Full expert profiles',
      'Advanced analytics',
      'Performance tracking',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Custom integrations',
      'Dedicated support',
      'Team collaboration',
      'Custom reporting',
    ],
  },
];

function PricingCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <div className={cn('grid h-full', !plan.popular && 'lg:py-8')}>
      <Card
        className={cn(
          'flex flex-col justify-between gap-4 p-8',
          plan.popular && 'border-4 border-emerald-500',
        )}
      >
        <div className="flex flex-col gap-6 lg:gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            {plan.popular && (
              <span className="inline-block rounded-full bg-emerald-500 px-4 py-1 text-sm text-white">
                Most Popular
              </span>
            )}
          </div>
          <p className="text-4xl font-bold">{plan.price}</p>
        </div>
        <ul className="my-4 space-y-4">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-emerald-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <SignUpButton mode="modal">
          <Button
            className={cn(
              'w-full',
              plan.popular && 'bg-emerald-600 hover:bg-emerald-700',
            )}
            variant={plan.popular ? 'default' : 'secondary'}
          >
            Get Started
          </Button>
        </SignUpButton>
      </Card>
    </div>
  );
}

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
