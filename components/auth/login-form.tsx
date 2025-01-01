"use client";

import SignIn from "@/components/auth/sign-in";
import Social from "@/components/auth/social";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || DEFAULT_LOGIN_REDIRECT;

  return (
    <div className="max-w-xl">
      <Social callbackUrl={callbackUrl} />

      <div className="flex items-center justify-center w-full py-6">
        <div className="flex-grow h-px bg-muted-foreground mx-4 rounded-full"></div>
        <span className="px-4 text-muted-foreground font-medium">or</span>
        <div className="flex-grow h-px bg-muted-foreground mx-4 rounded-full"></div>
      </div>

      <SignIn callbackUrl={callbackUrl} />
    </div>
  );
};
