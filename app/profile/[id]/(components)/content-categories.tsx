'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { Progress } from '@/ui/progress';

const categories = [
  {
    name: 'Stock Market Analysis',
    percentage: 40,
    count: 156,
  },
  {
    name: 'Personal Finance',
    percentage: 30,
    count: 124,
  },
  {
    name: 'Cryptocurrency',
    percentage: 20,
    count: 89,
  },
  {
    name: 'Real Estate',
    percentage: 10,
    count: 45,
  },
];

export function ContentCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{category.name}</span>
                <span className="text-muted-foreground">
                  {category.count} pieces
                </span>
              </div>
              <Progress value={category.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
