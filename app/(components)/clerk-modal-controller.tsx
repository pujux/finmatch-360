"use client";

import { useClerk } from "@clerk/nextjs";
import { parseAsStringLiteral, useQueryState } from "nuqs";

export function ClerkModalController() {
  const clerk = useClerk();
  const [mode, setMode] = useQueryState("clerk-modal", parseAsStringLiteral(["sign-up", "sign-in"]));

  if (mode === "sign-up") {
    clerk.openSignUp();
    setMode(null);
  } else if (mode === "sign-in") {
    clerk.openSignIn();
    setMode(null);
  }

  return null;
}
