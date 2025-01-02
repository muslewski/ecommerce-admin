import type { Metadata } from "next";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

import { ModalProvider } from "@/providers/modal-provider";
import Navigation from "@/components/navigation/navigation";

import "@/app/globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for managing ecommerce platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className="w-screen">
        <SessionProvider session={session}>
          <ModalProvider />
          <Navigation />
          {children}
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
