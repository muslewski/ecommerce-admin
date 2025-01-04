import { redirect } from "next/navigation";

import Navbar from "@/components/navigation/navbar";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { authRoutes } from "@/routes";

interface DashboardLayoutInterface {
  children: React.ReactNode;
  params: {
    storeId: string;
  };
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutInterface) {
  const user = await currentUser(); // Server-side
  const userId = user?.id;

  // Redirect to login page if user is not authenticated
  if (!userId) {
    redirect(authRoutes[0]);
  }

  // Check if store exists and belongs to the user
  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId,
      userId: userId,
    },
  });

  // Redirect to root if store does not exist
  if (!store) {
    redirect("/");
  } else {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  }
}
