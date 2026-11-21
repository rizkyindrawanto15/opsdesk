"use client";

import * as React from "react";
import Link from "next/link";
import { Layers, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function PublicFooter() {
  const { t, language } = useLanguage();

  return (
    <footer className="border-t border-neutral-200/90 bg-neutral-50/70 text-neutral-600 text-xs">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                <Layers className="h-3.5 w-3.5" />
              </div>
              <span className="font-semibold text-sm tracking-tight text-neutral-900">
                OpsDesk
              </span>
            </Link>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              {t.landing.footerDesc}
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] text-neutral-500">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              <span>SOC 2 Type II • ISO 27001 • HIPAA</span>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-neutral-900 text-xs tracking-tight">
              {language === "id" ? "Produk" : "Product"}
            </h4>
            <ul className="space-y-2 text-neutral-500 text-xs">
              <li>
                <Link href="/features" className="hover:text-neutral-900 transition-colors">
                  {language === "id" ? "Triase Insiden" : "Incident Triage"}
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-neutral-900 transition-colors">
                  {language === "id" ? "Mesin Kebijakan SLA" : "SLA Engine"}
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-neutral-900 transition-colors">
                  {language === "id" ? "Siklus Hidup Aset" : "Asset Lifecycle"}
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-neutral-900 transition-colors">
                  {language === "id" ? "Demo Konsol Live" : "Live Console Demo"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform routes */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-neutral-900 text-xs tracking-tight">
              {t.nav.workspace}
            </h4>
            <ul className="space-y-2 text-neutral-500 text-xs">
              <li>
                <Link href="/dashboard" className="hover:text-neutral-900 transition-colors">
                  {t.nav.dashboard}
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="hover:text-neutral-900 transition-colors">
                  {t.nav.ticketsQueue}
                </Link>
              </li>
              <li>
                <Link href="/assets" className="hover:text-neutral-900 transition-colors">
                  {t.nav.assetsFleet}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-neutral-900 transition-colors">
                  {t.nav.teamOnCall}
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-neutral-900 transition-colors">
                  {t.nav.slaAnalytics}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-neutral-900 text-xs tracking-tight">
              {language === "id" ? "Tata Kelola" : "Governance"}
            </h4>
            <ul className="space-y-2 text-neutral-500 text-xs">
              <li>
                <Link href="/settings" className="hover:text-neutral-900 transition-colors">
                  {language === "id" ? "Kontrol Keamanan" : "Security Controls"}
                </Link>
              </li>
              <li>
                <Link href="/settings" className="hover:text-neutral-900 transition-colors">
                  {language === "id" ? "Ambang Batas SLA" : "SLA Thresholds"}
                </Link>
              </li>
              <li>
                <span className="text-neutral-400">
                  {language === "id" ? "Kebijakan Privasi" : "Privacy Policy"}
                </span>
              </li>
              <li>
                <span className="text-neutral-400">
                  {language === "id" ? "Syarat & Ketentuan" : "Terms of Service"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} OpsDesk Technologies Inc. {t.landing.footerRights}
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{t.landing.allSystemsNormal}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
