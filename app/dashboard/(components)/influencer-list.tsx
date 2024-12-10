'use client';

import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { INFLUENCER_CATEGORIES } from './category-select';
import { InfluencerCard } from './influencer-card';

const mockInfluencers = [
  {
    id: 1,
    username: 'sarahfinance',
    name: 'Sarah Finance',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'investing' as const,
    followers: '500K',
    rating: 4.8,
    description: 'Helping you navigate the stock market with confidence.',
  },
  {
    id: 2,
    username: 'crypto_mike',
    name: 'Mike Crypto',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    category: 'cryptocurrency' as const,
    followers: '250K',
    rating: 4.5,
    description: 'Demystifying blockchain and crypto investments.',
  },
];

export function InfluencerList() {
  const [category] = useQueryState(
    'category',
    parseAsStringLiteral(Object.keys(INFLUENCER_CATEGORIES)).withDefault('all'),
  );

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mockInfluencers
        .filter(
          (influencer) =>
            category === 'all' || influencer.category === category,
        )
        .map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} />
        ))}
    </div>
  );
}
