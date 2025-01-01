"use client";

import { signInResend } from "@/actions/signin-resend";
import AlertError from "@/components/alert-error";
import AlertSuccess from "@/components/alert-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import { useState } from "react";

interface SignInProps {
  callbackUrl: string;
}

export default function SignIn({ callbackUrl }: SignInProps) {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await signInResend(email, callbackUrl);

      if (response.success) {
        setSuccess(response.message);
        setError(null);
      } else {
        setError(response.message);
        setSuccess(null);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      setSuccess(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Label htmlFor="email" className="text-muted-foreground">
        No password, no hassle. Just your email for secure, instant access.
      </Label>

      <Input
        id="email"
        className={clsx(
          error && !email && "border-destructive placeholder-destructive"
        )}
        type="email"
        name="email"
        placeholder={
          error && !email
            ? "Enter your email here..."
            : "tylerdurden@example.com"
        }
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setError(null);
          setSuccess(null);
        }}
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading
          ? "Sending..."
          : success
          ? "Send again"
          : "Sign Up with Email"}
      </Button>
      {error && <AlertError description={error} />}
      {success && <AlertSuccess description={success} />}
    </form>
  );
}
