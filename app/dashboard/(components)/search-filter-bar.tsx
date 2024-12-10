'use client';

import { Card } from '@/ui/card';
import { Input } from '@/ui/input';
import { Search } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { CategorySelect } from './category-select';

export function SearchFilterBar() {
  const [searchTerm, setSearchTerm] = useQueryState('searchTerm');

  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search finfluencers..."
            value={searchTerm ?? undefined}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <CategorySelect />
      </div>
    </Card>
  );
}
