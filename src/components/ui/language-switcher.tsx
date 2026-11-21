"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  showIcon?: boolean;
}

export function LanguageSwitcher({
  className,
  showIcon = true,
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-neutral-200/90 bg-neutral-50/80 p-0.5 text-[11px] font-medium shadow-subtle select-none",
        className
      )}
    >
      {showIcon && (
        <Globe className="h-3 w-3 text-neutral-400 mx-1.5 shrink-0" />
      )}
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={cn(
          "rounded px-1.5 py-0.5 transition-all font-mono",
          language === "id"
            ? "bg-white text-neutral-900 font-bold shadow-xs border border-neutral-200/60"
            : "text-neutral-500 hover:text-neutral-800"
        )}
        title="Beralih ke Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={cn(
          "rounded px-1.5 py-0.5 transition-all font-mono",
          language === "en"
            ? "bg-white text-neutral-900 font-bold shadow-xs border border-neutral-200/60"
            : "text-neutral-500 hover:text-neutral-800"
        )}
        title="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
