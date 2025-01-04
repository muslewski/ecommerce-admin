"use client";

import logout from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { reloadSession } from "@/lib/reload-session";
import { useSession } from "next-auth/react";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export default function LogoutButton({ children }: LogoutButtonProps) {
  const { update } = useSession();

  const onClick = () => {
    logout();
    update(); // not working but is safe to keep
    reloadSession();
  };

  return <Button onClick={onClick}>{children || "Sign out"}</Button>;
}
