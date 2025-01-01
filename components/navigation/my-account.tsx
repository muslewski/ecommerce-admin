"use client";

import logout from "@/actions/logout";
import LoginDialog from "@/components/auth/login-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { reloadSession } from "@/lib/reload-session";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function MyAccount() {
  const user = useCurrentUser();
  const { update } = useSession();

  if (!user) {
    return (
      <LoginDialog mode="modal" asChild>
        <Button>Login</Button>
      </LoginDialog>
    );
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Image
              src={user.image ?? "/images/avatar-placeholder.svg"}
              width={32}
              height={32}
              quality={100}
              alt={"Avatar " + user.name}
              className="rounded-full"
              style={{ objectFit: "cover", aspectRatio: "1/1" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{user.name ?? "My Account"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              logout();
              update();
              reloadSession();
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
