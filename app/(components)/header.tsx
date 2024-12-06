import { Button } from "@/ui/button";
import { SignedIn, UserButton, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Sign } from "crypto";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b hadow-sm bg-muted sticky top-0 z-50">
      <nav className="container mx-auto p-4 md:p-6 flex justify-between items-center gap-4">
        <Link href={"/"} className="flex items-center gap-2 md:gap-4">
          <TrendingUp className="h-6 w-6 md:w-10 md:h-10 text-primary" />
          <h1 className="text-xl md:text-3xl font-bold">FinMatch360</h1>
        </Link>
        <div className="relative flex items-center gap-4 md:gap-8">
          <SignedIn>
            <div className="h-10 w-10 flex items-center justify-center">
              <UserButton appearance={{ elements: { userButtonAvatarBox: { width: "40px", height: "40px" } } }} />
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
              <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700 border-muted border">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
