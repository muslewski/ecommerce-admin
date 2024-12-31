"use server";

import { signOut } from "@/auth";
import { publicRoutes } from "@/routes";

export default async function logout() {
  await signOut({ redirectTo: publicRoutes[0] });
}
