'use client';

import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { Briefcase, User } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function PathSelection() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="flex h-full cursor-pointer flex-col gap-4 p-6">
          <div className="w-fit rounded-full bg-primary/10 p-3">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Regular User</h3>
            <p className="mt-2 text-muted-foreground">
              Find and follow financial experts, get personalized
              recommendations, and learn from the best in the industry.
            </p>
          </div>
          <Button
            asChild
            className="mt-auto bg-emerald-600 hover:bg-emerald-700"
          >
            <Link href={'/onboarding/user'}>Continue as User</Link>
          </Button>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="flex h-full cursor-pointer flex-col gap-4 p-6">
          <div className="w-fit rounded-full bg-primary/10 p-3">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Financial Creator</h3>
            <p className="mt-2 text-muted-foreground">
              Share your financial expertise, build your audience, and help
              others achieve their financial goals.
            </p>
          </div>
          <Button
            asChild
            className="mt-auto bg-emerald-600 hover:bg-emerald-700"
          >
            <Link href={'/onboarding/creator'}>Continue as Creator</Link>
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}
