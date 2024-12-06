"use client";

import { motion } from "framer-motion";
import { Scale, TrendingUp, Shield, Star, BarChart2, Users } from "lucide-react";
import { Card } from "@/ui/card";

const features = [
  {
    icon: Scale,
    title: "Side-by-Side Comparison",
    description: "Compare multiple financial influencers simultaneously across key metrics and performance indicators",
  },
  {
    icon: Shield,
    title: "Track Record Verification",
    description: "Every influencer's track record is thoroughly verified and authenticated",
  },
  {
    icon: TrendingUp,
    title: "Performance Metrics",
    description: "Access detailed performance analytics, success rates, and historical data",
  },
  {
    icon: Star,
    title: "Community Reviews",
    description: "Read authentic reviews and ratings from the community to make informed decisions",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to make informed financial decisions</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow text-center">
                <feature.icon className="h-12 w-12 text-emerald-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
