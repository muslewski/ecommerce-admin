"use client";

import { LoginForm } from "@/components/auth/login-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { authRoutes } from "@/routes";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function LoginDialog({
  children,
  mode = "modal",
  asChild,
}: LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(authRoutes[0]);
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="transition">
          <DialogTitle>Let's Get Started</DialogTitle>
          <DialogDescription>
            Pick a sign-in method that works best for you:
          </DialogDescription>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  } else {
    return (
      <Button onClick={onClick} type="button">
        {children}
      </Button>
    );
  }
}
