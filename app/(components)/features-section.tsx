'use client';

import { motion } from 'framer-motion';
import { Scale, Shield, Star, TrendingUp } from 'lucide-react';

import { Card } from '@/ui/card';

const features = [
  {
    icon: Scale,
    title: 'Side-by-Side Comparison',
    description:
      'Compare multiple financial influencers simultaneously across key metrics and performance indicators',
  },
  {
    icon: Shield,
    title: 'Track Record Verification',
    description:
      "Every influencer's track record is thoroughly verified and authenticated",
  },
  {
    icon: TrendingUp,
    title: 'Performance Metrics',
    description:
      'Access detailed performance analytics, success rates, and historical data',
  },
  {
    icon: Star,
    title: 'Community Reviews',
    description:
      'Read authentic reviews and ratings from the community to make informed decisions',
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Powerful Features</h2>
          <p className="text-xl text-gray-600">
            Everything you need to make informed financial decisions
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 text-center transition-shadow hover:shadow-lg">
                <feature.icon className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
