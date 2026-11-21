"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-neutral-200/80 bg-linear-to-b from-white via-neutral-50/40 to-neutral-50/80">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle Release Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs text-neutral-600 shadow-subtle hover:border-neutral-300 transition-colors">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          <span className="font-medium text-neutral-900">{t.landing.badge}</span>
          <ChevronRight className="h-3 w-3 text-neutral-400" />
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
          {t.landing.heroTitle1} <br className="hidden sm:block" />
          <span className="text-neutral-900">{t.landing.heroTitle2}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed font-normal">
          {t.landing.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" asChild className="gap-2 h-10 px-5 text-xs font-semibold">
            <Link href="/dashboard">
              <span>{t.landing.exploreDashboard}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild className="h-10 px-5 text-xs">
            <Link href="/features">
              <span>{t.landing.viewCapabilities}</span>
            </Link>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-neutral-500" />
            <span>{t.landing.soc2}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-neutral-500" />
            <span>{t.landing.uptime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-neutral-500" />
            <span>{t.landing.compliance}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
