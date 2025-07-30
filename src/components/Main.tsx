"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // se estiver usando utilitário de className opcional

type MainProps = {
  children: ReactNode;
  className?: string;
};

export function Main({ children, className }: MainProps) {
  return (
    <main
      className={cn(
        "flex flex-col relative z-10 mx-auto w-full max-w-7xl gap-12 px-4",
        className
      )}
    >
      {children}
    </main>
  );
}
