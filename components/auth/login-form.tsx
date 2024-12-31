"use client";

import SignIn from "@/components/auth/sign-in";
import Social from "@/components/auth/social";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || DEFAULT_LOGIN_REDIRECT;
  return (
    <div>
      <Social callbackUrl={callbackUrl} />
      or
      <SignIn callbackUrl={callbackUrl} />
    </div>
  );
};
