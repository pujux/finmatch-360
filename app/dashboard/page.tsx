import { RequestInfluencerDialog } from '@/app/dashboard/(components)/request-influencer-dialog';

import { InfluencerList } from './(components)/influencer-list';
import { SearchFilterBar } from './(components)/search-filter-bar';

export default function Dashboard() {
  return (
    <main className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Discover Finfluencers</h1>
        <RequestInfluencerDialog />
      </div>

      <SearchFilterBar />
      <InfluencerList />
    </main>
  );
}
