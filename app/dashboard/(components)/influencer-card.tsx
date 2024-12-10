'use client';

import { Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { Button } from '@/ui/button';
import { Card } from '@/ui/card';

import { INFLUENCER_CATEGORIES } from './category-select';

type InfluencerCardProps = {
  influencer: {
    username: string;
    name: string;
    avatar: string;
    category: keyof typeof INFLUENCER_CATEGORIES;
    followers: string;
    rating: number;
    description: string;
  };
};

export function InfluencerCard({ influencer }: InfluencerCardProps) {
  return (
    <Card className="flex flex-col justify-between p-6">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={influencer.avatar} alt={influencer.name} />
          <AvatarFallback>{influencer.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{influencer.name}</h3>
          <p className="text-sm text-muted-foreground">
            {INFLUENCER_CATEGORIES[influencer.category]}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex items-center">
          <Star fill="currentColor" className="mr-1 h-4 w-4 text-yellow-400" />
          <span className="text-sm font-medium">{influencer.rating}</span>
        </div>
        <div className="flex items-center">
          <TrendingUp className="mr-1 h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            {influencer.followers} followers
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {influencer.description}
      </p>
      <Button asChild className="mt-6 bg-emerald-600 hover:bg-emerald-700">
        <Link href={`/profile/${influencer.username}`}>View Profile</Link>
      </Button>
    </Card>
  );
}
