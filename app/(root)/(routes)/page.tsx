"use client";

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    // if the modal is not open, open it
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  // we don't want to render anything because the modal will be opened
  return null;
}
