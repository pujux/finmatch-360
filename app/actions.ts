'use server';

import { auth, clerkClient } from '@clerk/nextjs/server';

export async function updateClerkMetadata(
  metadata: Record<string, string | number | boolean | null>,
) {
  const clerk = await clerkClient();
  const { userId } = await auth();

  if (!userId) {
    throw new Error('User not authenticated');
  }

  await clerk.users.updateUserMetadata(userId, { publicMetadata: metadata });
}
