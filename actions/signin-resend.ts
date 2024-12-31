"use server";

import { signIn } from "@/auth";

export const signInResend = async (
  email: FormDataEntryValue | null,
  redirectTo: string
) => {
  await signIn("resend", {
    email: email,
    redirectTo: redirectTo,
  });
};
