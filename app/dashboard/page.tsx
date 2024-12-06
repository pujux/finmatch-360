"use client";

import { useState } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";
import { Card } from "@/ui/card";
import { Search, Filter } from "lucide-react";
import { InfluencerCard } from "@/app/dashboard/(components)/influencer-card";
import { RequestInfluencerDialog } from "@/app/dashboard/(components)/request-influencer-dialog";
import { CategorySelect, INFLUENCER_CATEGORIES } from "./(components)/category-select";
import { parseAsStringLiteral, useQueryState } from "nuqs";

const mockInfluencers = [
  {
    id: 1,
    name: "Sarah Finance",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    category: "investing" as const,
    followers: "500K",
    rating: 4.8,
    description: "Helping you navigate the stock market with confidence.",
  },
  {
    id: 2,
    name: "Mike Crypto",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    category: "cryptocurrency" as const,
    followers: "250K",
    rating: 4.5,
    description: "Demystifying blockchain and crypto investments.",
  },
  // Add more mock data as needed
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category] = useQueryState("category", parseAsStringLiteral(Object.keys(INFLUENCER_CATEGORIES)).withDefault("all"));

  return (
    <main className="container mx-auto px-4 py-8 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Discover Finfluencers</h1>
        <RequestInfluencerDialog />
      </div>

      <Card className="p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search finfluencers..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9" />
          </div>
          <CategorySelect />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockInfluencers
          .filter((influencer) => category === "all" || influencer.category === category)
          .map((influencer) => (
            <InfluencerCard key={influencer.id} influencer={influencer} />
          ))}
      </div>
    </main>
  );
}
