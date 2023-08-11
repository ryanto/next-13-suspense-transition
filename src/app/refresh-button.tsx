"use client";
import { useRouter } from "next/navigation";

export function RefreshButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.refresh()} className="border border-gray-200 px-4 py-2 bg-gray-50">
      Call router.refresh()
    </button>
  )
}