'use client';

import { Search } from 'lucide-react';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { useState } from 'react';

import { InfluencerCard } from '@/app/dashboard/(components)/influencer-card';
import { RequestInfluencerDialog } from '@/app/dashboard/(components)/request-influencer-dialog';
import { Card } from '@/ui/card';
import { Input } from '@/ui/input';

import {
  CategorySelect,
  INFLUENCER_CATEGORIES,
} from './(components)/category-select';

const mockInfluencers = [
  {
    id: 1,
    name: 'Sarah Finance',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'investing' as const,
    followers: '500K',
    rating: 4.8,
    description: 'Helping you navigate the stock market with confidence.',
  },
  {
    id: 2,
    name: 'Mike Crypto',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    category: 'cryptocurrency' as const,
    followers: '250K',
    rating: 4.5,
    description: 'Demystifying blockchain and crypto investments.',
  },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category] = useQueryState(
    'category',
    parseAsStringLiteral(Object.keys(INFLUENCER_CATEGORIES)).withDefault('all'),
  );

  return (
    <main className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Discover Finfluencers</h1>
        <RequestInfluencerDialog />
      </div>

      <Card className="p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search finfluencers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <CategorySelect />
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockInfluencers
          .filter(
            (influencer) =>
              category === 'all' || influencer.category === category,
          )
          .map((influencer) => (
            <InfluencerCard key={influencer.id} influencer={influencer} />
          ))}
      </div>
    </main>
  );
}
