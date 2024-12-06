"use client";

import { ArrowRight, BarChart2, Shield, Users } from "lucide-react";
import { Button } from "@/ui/button";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/nextjs";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold leading-tight">
              Make Informed Financial Decisions with Expert Comparisons
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600">
              Compare financial influencers side-by-side and discover trusted experts who align with your investment goals
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <SignUpButton mode="modal">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Start Comparing Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignUpButton>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-600">50K+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-600">1000+ Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-600">Verified Profiles</span>
              </div>
            </motion.div>
          </div>
          <div className="flex-1">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Financial Analysis"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
