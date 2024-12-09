'use client';

import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';

const credentials = [
  {
    icon: Award,
    title: 'Certifications',
    items: [
      'Certified Financial Planner (CFP)',
      'Chartered Financial Analyst (CFA)',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    items: [
      'MBA in Finance, Harvard Business School',
      'BS in Economics, Yale University',
    ],
  },
  {
    icon: Briefcase,
    title: 'Experience',
    items: ['10+ years in Wealth Management', 'Former VP at Goldman Sachs'],
  },
  {
    icon: Trophy,
    title: 'Achievements',
    items: ['Forbes 30 Under 30 - Finance', 'Top Financial Advisor 2023'],
  },
];

export function CredibilitySection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Credentials & Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {credentials.map((credential) => (
            <div key={credential.title} className="flex gap-4">
              <credential.icon className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-2 font-semibold">{credential.title}</h3>
                <ul className="space-y-1">
                  {credential.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
