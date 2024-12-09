'use client';

import { Calendar, FileText, Presentation, Video } from 'lucide-react';

import { Badge } from '@/ui/badge';
import { Button } from '@/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';

const activities = [
  {
    type: 'video',
    title: 'Market Analysis: Tech Sector Deep Dive',
    date: '2 days ago',
    views: '45K',
    icon: Video,
  },
  {
    type: 'article',
    title: '5 Steps to Start Investing in 2024',
    date: '4 days ago',
    views: '32K',
    icon: FileText,
  },
  {
    type: 'event',
    title: 'Webinar: Cryptocurrency Investment Strategies',
    date: 'Upcoming - Mar 15',
    attendees: '1.2K registered',
    icon: Presentation,
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Activity</CardTitle>
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          View Calendar
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.title} className="flex gap-4">
              <div className="h-fit rounded-full bg-primary/10 p-2">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="font-medium">{activity.title}</h3>
                  <Badge variant="secondary">{activity.type}</Badge>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{activity.date}</span>
                  <span>{activity.views || activity.attendees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
