import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/ui/toaster";
import { cn } from "@/lib/utils";
import Header from "./(components)/header";
import Footer from "./(components)/footer";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinMatch360",
  description: "Discover and compare top financial influencers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <NuqsAdapter>
        <html lang="en" suppressHydrationWarning>
          <body className={cn(inter.className, "min-h-screen flex flex-col")}>
            <Header />
            <div className="flex-grow grid">{children}</div>
            <Footer />
            <Toaster />
          </body>
        </html>
      </NuqsAdapter>
    </ClerkProvider>
  );
}
