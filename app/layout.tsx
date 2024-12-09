import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './globals.css';

import { cn } from '@/lib/utils';
import { Toaster } from '@/ui/toaster';

import Footer from './(components)/footer';
import Header from './(components)/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FinMatch360',
  description: 'Discover and compare top financial influencers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl={'/'}>
      <NuqsAdapter>
        <html lang="en" suppressHydrationWarning>
          <body className={cn(inter.className, 'flex min-h-screen flex-col')}>
            <Header />
            <div className="grid flex-grow">{children}</div>
            <Footer />
            <Toaster />
          </body>
        </html>
      </NuqsAdapter>
    </ClerkProvider>
  );
}
