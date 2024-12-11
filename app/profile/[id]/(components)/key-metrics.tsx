import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { Activity, BarChart, TrendingUp, Users } from 'lucide-react';

const metrics = [
  {
    title: 'Total Reach',
    value: '930K+',
    change: '+12.5%',
    icon: Users,
  },
  {
    title: 'Engagement Rate',
    value: '4.8%',
    change: '+0.3%',
    icon: Activity,
  },
  {
    title: 'Content Views',
    value: '2.1M',
    change: '+18.2%',
    icon: BarChart,
  },
  {
    title: 'Growth Rate',
    value: '+25%',
    change: '+5.2%',
    icon: TrendingUp,
  },
];

export function KeyMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="flex items-center gap-4 rounded-lg border p-4"
            >
              <div className="rounded-full bg-primary/10 p-2">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <span className="text-sm text-emerald-600">
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
