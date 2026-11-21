"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-8 sm:p-12 rounded-2xl border border-neutral-200/90 bg-neutral-900 text-white shadow-float relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <div className="h-10 w-10 rounded-xl bg-neutral-800 border border-neutral-700 mx-auto flex items-center justify-center text-white">
              <Layers className="h-5 w-5 text-blue-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {t.landing.ctaHeading}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              {t.landing.ctaSubtitle}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" asChild className="gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs">
                <Link href="/dashboard">
                  <span>{t.landing.ctaButton}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-white text-xs"
              >
                <Link href="/features">
                  <span>{t.landing.ctaSpecs}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
