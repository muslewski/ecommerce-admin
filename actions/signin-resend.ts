"use server";

import { signIn } from "@/auth";

export const signInResend = async (
  email: FormDataEntryValue | null,
  redirectTo: string
) => {
  try {
    const result = await signIn("resend", {
      email: email,
      callbackUrl: redirectTo, // Redirect to the callback URL
      redirect: false, // Do not redirect to verifyRequest page
    });

    if (result?.error) {
      return { success: false, message: result.error };
    }

    return { success: true, message: "Verification email successfully sent!" };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Error occurred while signing in with email",
    };
  }
};
