import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { authRoutes } from "@/routes";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser(); // Server-side
  const userId = user?.id;

  // Redirect to login page if user is not authenticated
  if (!userId) {
    redirect(authRoutes[0]);
  }

  // Attempt to load the first store that belongs to the user
  const store = await prisma.store.findFirst({
    where: {
      userId: userId,
    },
  });

  // Redirect to store page if store exists
  if (store) {
    redirect(`/${store.id}`);
  }

  // If no store exists, render children with modal for creating a store
  return <>{children}</>;
}
