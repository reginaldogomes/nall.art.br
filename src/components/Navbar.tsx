"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Trabalhos" },
  { href: "/artigos", label: "Artigos" },
];

const contactEmail = "contato@nall.art.br";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/90 sticky top-0 z-50 backdrop-blur-sm">
      {/* Barra superior com e-mail */}
      <div className="hidden md:block bg-zinc-900/80 border-b border-zinc-800">
        <div className="container mx-auto flex justify-end items-center px-4 py-2">
          <a
            href={`mailto:${contactEmail}`}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <Mail className="h-4 w-4" />
            {contactEmail}
          </a>
        </div>
      </div>
      
      <div className="container mx-auto flex justify-center items-center p-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-lg font-medium text-zinc-300 transition-colors hover:text-cyan-400 rounded-md",
                  isActive && "bg-cyan-400/10 text-cyan-400"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 pb-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 text-lg font-medium text-zinc-300 transition-colors hover:text-cyan-400 rounded-md",
                    isActive && "bg-cyan-400/10 text-cyan-400"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* E-mail no mobile */}
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              {contactEmail}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
