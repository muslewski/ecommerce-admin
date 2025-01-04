import type { Metadata } from "next";
import { auth } from "@/auth";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

import { ModalProvider } from "@/providers/modal-provider";

import "@/app/globals.css";

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
          {children}
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
