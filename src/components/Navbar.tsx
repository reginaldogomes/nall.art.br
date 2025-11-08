"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/artigos", label: "Artigos" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="py-4 bg-background/50 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium text-zinc-300 transition-colors hover:text-cyan-400",
                  isActive && "text-cyan-400"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
