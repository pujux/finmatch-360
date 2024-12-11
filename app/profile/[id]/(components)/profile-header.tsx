import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { Badge } from '@/ui/badge';
import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { CheckCircle, Instagram, Share2, Twitter, Youtube } from 'lucide-react';

export function ProfileHeader() {
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-6 md:flex-row">
        <Avatar className="h-32 w-32">
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
          <AvatarFallback>SF</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-bold">Sarah Finance</h1>
            <Badge variant="secondary" className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" /> Verified
            </Badge>
          </div>

          <p className="text-muted-foreground">
            Helping millennials build wealth through smart investing and
            financial education. Certified Financial Planner with 10+ years of
            experience in wealth management.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Twitter className="h-4 w-4 text-primary" />
              <span className="text-sm">250K followers</span>
            </div>
            <div className="flex items-center gap-2">
              <Youtube className="h-4 w-4 text-primary" />
              <span className="text-sm">500K subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-primary" />
              <span className="text-sm">180K followers</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Follow
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share Profile
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
