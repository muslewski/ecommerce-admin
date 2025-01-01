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
    <div className="max-w-xl mt-6 flex flex-col gap-9">
      <Social callbackUrl={callbackUrl} />

      <div className="flex items-center justify-center w-full">
        <div className="flex-grow h-px bg-muted-foreground/15 mx-4 rounded-full"></div>
        <span className="px-4 text-muted-foreground/30 font-medium">or</span>
        <div className="flex-grow h-px bg-muted-foreground/15 mx-4 rounded-full"></div>
      </div>

      <SignIn callbackUrl={callbackUrl} />
    </div>
  );
};
