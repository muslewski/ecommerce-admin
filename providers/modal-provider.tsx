"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevents the modal from rendering on the server (hydration errors)
  if (!isMounted) return null;

  // TODO: Add Login Provider
  return (
    <>
      <StoreModal />
    </>
  );
};
