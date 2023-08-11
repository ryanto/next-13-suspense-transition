"use client";
import { useRouter } from "next/navigation";

export function RefreshButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.refresh()}>
      Call router.refresh()
    </button>
  )
}