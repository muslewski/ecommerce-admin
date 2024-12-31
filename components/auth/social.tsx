"use client";

import { signIn } from "next-auth/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";

interface SocialProps {
  callbackUrl: string;
}

export default function Social({ callbackUrl }: SocialProps) {
  // Function to handle the social login
  const onClick = (provider: "google" | "facebook" | "apple" | "twitter") => {
    signIn(provider, {
      callbackUrl: callbackUrl,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={() => onClick("facebook")}
      >
        <FaFacebook color="	#1877F2" className="size-5" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={() => onClick("twitter")}
      >
        <FaXTwitter className="size-5" />
      </Button>
    </div>
  );
}
