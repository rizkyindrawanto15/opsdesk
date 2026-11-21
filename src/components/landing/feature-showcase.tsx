"use client";

import * as React from "react";
import {
  Clock,
  Layers,
  Laptop,
  Users,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export function FeatureShowcase() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Clock,
      title:
        language === "id"
          ? "Penegakan SLA Otomatis"
          : "Automated SLA Enforcement",
      description:
        language === "id"
          ? "Tetapkan komitmen resolusi per tingkat prioritas. Jam penghitung real-time memicu peringatan proaktif sebelum batas SLA terlampaui."
          : "Define granular response and resolution commitments per priority tier. Real-time clocks trigger automated warnings before breaches occur.",
      tag: language === "id" ? "Nol Tiket Lewat" : "Zero Ticket Slip",
    },
    {
      icon: Layers,
      title:
        language === "id"
          ? "Triase Insiden Cerdas"
          : "Intelligent Incident Triage",
      description:
        language === "id"
          ? "Rute otomatis anomali jaringan, kegagalan perangkat keras, dan permohonan akses langsung ke spesialis teknis yang tepat."
          : "Automatically route network anomalies, hardware failures, and identity requests directly to qualified engineering specialists.",
      tag: language === "id" ? "Nol Latensi" : "Zero Latency",
    },
    {
      icon: Laptop,
      title:
        language === "id"
          ? "Armada Aset IT Terpadu"
          : "Unified IT Asset Fleet",
      description:
        language === "id"
          ? "Kelola inventaris perangkat keras, nomor seri, siklus depresiasi, dan masa garansi langsung di samping tiket permohonan aktif."
          : "Manage hardware inventory, serials, purchase depreciation, and warranty cycles alongside active service requests.",
      tag: language === "id" ? "Pelacakan Siklus" : "Lifecycle Tracking",
    },
    {
      icon: Users,
      title:
        language === "id"
          ? "Matriks Eskalasi On-Call"
          : "On-Call Escalation Matrix",
      description:
        language === "id"
          ? "Rotasi petugas utama dan cadangan otomatis. Jika petugas utama tidak merespons dalam 15 menit, alarm langsung dialihkan ke teknisi cadangan."
          : "Seamless primary and secondary on-call rotations. When primary responders do not acknowledge within 15 minutes, backup triggers automatically.",
      tag: language === "id" ? "Ketersediaan Tinggi" : "High Availability",
    },
    {
      icon: BarChart3,
      title:
        language === "id"
          ? "Telemetri & Analisis MTTR Mendalam"
          : "Deep Telemetry & MTTR Analytics",
      description:
        language === "id"
          ? "Pantau Rata-rata Waktu Resolusi (MTTR), persentase resolusi kontak pertama, dan matriks kepatuhan triwulanan yang siap diaudit."
          : "Track Mean Time to Resolution, first contact resolution percentages, and quarterly compliance matrices ready for executive presentation.",
      tag: language === "id" ? "Metrik Terverifikasi" : "Auditable Metrics",
    },
    {
      icon: ShieldCheck,
      title:
        language === "id"
          ? "Keamanan & Kepatuhan Enterprise"
          : "Enterprise Security & Compliance",
      description:
        language === "id"
          ? "Mendukung Okta SAML 2.0 Single Sign-On, sinkronisasi direktori pengguna SCIM, dan pencatatan jejak audit SOC 2 berstandar global."
          : "Out-of-the-box support for Okta SAML 2.0 Single Sign-On, SCIM directory synchronization, and continuous SOC 2 audit logging.",
      tag: "SOC 2 Type II",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            {t.landing.featuresSub}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            {t.landing.featuresHeading}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-500">
            {t.landing.featuresDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="hover:border-neutral-300 transition-all hover:shadow-card bg-neutral-50/30"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800">
                      <Icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-neutral-500 bg-white px-2 py-0.5 rounded border border-neutral-200">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-neutral-900 pt-1">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>{t.landing.exploreAllFeatures}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
