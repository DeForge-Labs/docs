"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LayoutProvider({ children }) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        `flex flex-col`,
        pathname === "/"
          ? "overflow-y-auto min-h-screen"
          : "overflow-y-hidden h-screen"
      )}
    >
      {children}
    </div>
  );
}
