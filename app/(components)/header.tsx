import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/ui/button';

export default function Header() {
  return (
    <header className="hadow-sm sticky top-0 z-50 border-b bg-muted">
      <nav className="container mx-auto flex items-center justify-between gap-4 p-4 md:px-6">
        <Link href={'/'} className="flex items-center gap-2 md:gap-4">
          <TrendingUp className="h-6 w-6 text-primary md:h-10 md:w-10" />
          <h1 className="text-xl font-bold md:text-3xl">FinMatch360</h1>
        </Link>
        <div className="relative flex items-center gap-4 md:gap-8">
          <SignedIn>
            <div className="flex h-10 w-10 items-center justify-center">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: { width: '36px', height: '36px' },
                  },
                }}
              />
            </div>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign in</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button
                variant="default"
                className="border border-muted bg-emerald-600 hover:bg-emerald-700"
              >
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
