'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui/select';
import { parseAsStringLiteral, useQueryState } from 'nuqs';

export const INFLUENCER_CATEGORIES = {
  all: 'All Categories',
  investing: 'Investing',
  cryptocurrency: 'Cryptocurrency',
  personal: 'Personal Finance',
} as const;

export function CategorySelect() {
  const [category, setCategory] = useQueryState(
    'category',
    parseAsStringLiteral(Object.keys(INFLUENCER_CATEGORIES)).withDefault('all'),
  );

  return (
    <Select value={category} onValueChange={setCategory}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(INFLUENCER_CATEGORIES).map(([value, label]) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
