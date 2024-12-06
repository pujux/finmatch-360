"use client";

import { motion } from "framer-motion";
import { Search, UserCheck, BarChart, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Experts",
    description: "Browse through our extensive database of verified financial influencers"
  },
  {
    icon: UserCheck,
    title: "Compare Profiles",
    description: "View detailed comparisons of track records, strategies, and performance"
  },
  {
    icon: BarChart,
    title: "Analyze Performance",
    description: "Study historical data and success rates to make informed decisions"
  },
  {
    icon: ThumbsUp,
    title: "Make Your Choice",
    description: "Select the expert that best aligns with your financial goals"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to find your perfect financial expert match</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-emerald-600" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20px)] h-[2px] bg-emerald-200" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}