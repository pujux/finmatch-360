'use client';

import { Building, Clock, Globe2, Users2 } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';

export function EngagementMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audience & Engagement</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <Globe2 className="h-4 w-4 text-primary" />
            Geographic Distribution
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">United States</div>
              <div className="font-medium">45%</div>
            </div>
            <div>
              <div className="text-muted-foreground">Europe</div>
              <div className="font-medium">30%</div>
            </div>
            <div>
              <div className="text-muted-foreground">Asia</div>
              <div className="font-medium">15%</div>
            </div>
            <div>
              <div className="text-muted-foreground">Other</div>
              <div className="font-medium">10%</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <Clock className="h-4 w-4 text-primary" />
            Response Metrics
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Avg. Response Time</div>
              <div className="font-medium">4 hours</div>
            </div>
            <div>
              <div className="text-muted-foreground">Response Rate</div>
              <div className="font-medium">92%</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <Users2 className="h-4 w-4 text-primary" />
            Demographics
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Age Range</div>
              <div className="font-medium">25-40 years</div>
            </div>
            <div>
              <div className="text-muted-foreground">Primary Audience</div>
              <div className="font-medium">Young Professionals</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <Building className="h-4 w-4 text-primary" />
            Brand Collaborations
          </h3>
          <div className="text-sm text-muted-foreground">
            Partnered with leading financial institutions including Fidelity,
            Robinhood, and Coinbase
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
