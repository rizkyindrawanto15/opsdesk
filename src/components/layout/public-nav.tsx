"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/context/language-context";

export function PublicNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md">
      <div className="container max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-7 w-7 rounded-md bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shadow-xs group-hover:bg-blue-600 transition-colors">
            <Layers className="h-4 w-4" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-neutral-900">
            OpsDesk
          </span>
          <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
            v1.0
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-600">
          <Link
            href="/"
            className={`transition-colors hover:text-neutral-900 ${
              pathname === "/" ? "text-neutral-900 font-semibold" : ""
            }`}
          >
            {t.nav.overview}
          </Link>
          <Link
            href="/features"
            className={`transition-colors hover:text-neutral-900 ${
              pathname === "/features" ? "text-neutral-900 font-semibold" : ""
            }`}
          >
            {t.nav.capabilities}
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 transition-colors hover:text-blue-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.nav.demo}</span>
          </Link>
        </nav>

        {/* Right CTA & Language Toggle */}
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />

          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/dashboard">{t.nav.signIn}</Link>
          </Button>

          <Button size="sm" asChild className="gap-1.5">
            <Link href="/dashboard">
              <span>{t.nav.openConsole}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
