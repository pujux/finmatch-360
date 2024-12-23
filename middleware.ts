import {
  clerkClient,
  clerkMiddleware,
  createRouteMatcher,
} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/profile(.*)',
  '/onboarding(.*)',
]);
const isOnboardingRoute = createRouteMatcher(['/onboarding(.*)']);

export default clerkMiddleware(
  async (auth, req) => {
    if (!isProtectedRoute(req)) {
      return;
    }
    const { userId, redirectToSignIn } = await auth();
    if (!userId) {
      return redirectToSignIn();
    }

    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);

    const isOnboarding = isOnboardingRoute(req);

    if (isOnboarding && Number(user.publicMetadata.onboardingCompleted) > 0) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    if (!isOnboarding && !user.publicMetadata.onboardingCompleted) {
      return NextResponse.redirect(new URL('/onboarding', req.url));
    }
  },
  { signInUrl: '/?clerk-modal=sign-in', signUpUrl: '/?clerk-modal=sign-up' },
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
