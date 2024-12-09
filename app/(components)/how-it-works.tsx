'use client';

import { motion } from 'framer-motion';
import { BarChart, Search, ThumbsUp, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search Experts',
    description:
      'Browse through our extensive database of verified financial influencers',
  },
  {
    icon: UserCheck,
    title: 'Compare Profiles',
    description:
      'View detailed comparisons of track records, strategies, and performance',
  },
  {
    icon: BarChart,
    title: 'Analyze Performance',
    description:
      'Study historical data and success rates to make informed decisions',
  },
  {
    icon: ThumbsUp,
    title: 'Make Your Choice',
    description: 'Select the expert that best aligns with your financial goals',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">How It Works</h2>
          <p className="text-xl text-gray-600">
            Simple steps to find your perfect financial expert match
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-8">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                  <step.icon className="h-10 w-10 text-emerald-600" />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-[60%] top-10 hidden h-[2px] w-[calc(100%-20px)] bg-emerald-200 lg:block" />
                )}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
