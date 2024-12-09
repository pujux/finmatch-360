'use client';

import { motion } from 'framer-motion';

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { Card } from '@/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Investment Advisor',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote:
      'FinMatch360 has revolutionized how I find and verify financial experts. The comparison tools are invaluable.',
  },
  {
    name: 'Michael Chen',
    role: 'Retail Investor',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    quote:
      "The platform's verification system gives me confidence in choosing the right financial influencers to follow.",
  },
];

const stats = [
  { label: 'Verified Experts', value: '1,000+' },
  { label: 'Active Users', value: '50,000+' },
  { label: 'Comparisons Made', value: '100,000+' },
  { label: 'Success Rate', value: '95%' },
];

export function TrustSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Trusted by Thousands</h2>
          <p className="text-xl text-gray-600">
            Join our growing community of successful investors
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="mb-4 flex items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="mb-2 text-4xl font-bold text-emerald-600">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
