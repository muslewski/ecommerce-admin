"use client";

import { signInResend } from "@/actions/signin-resend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

interface SignInProps {
  callbackUrl: string;
}

export default function SignIn({ callbackUrl }: SignInProps) {
  return (
    <form
      action={(formData) => {
        const email = formData.get("email");
        const redirectTo = callbackUrl;

        // Call the server action directly, without "use server" in this file
        return signInResend(email, redirectTo);
      }}
    >
      <Input type="email" name="email" placeholder="tylerdurden@example.com" />
      <Button type="submit">Sign Up with Email</Button>
    </form>
  );
}
