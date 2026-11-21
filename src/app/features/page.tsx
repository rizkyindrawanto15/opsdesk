"use client";

import * as React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Clock,
  Laptop,
  Users,
  BarChart3,
  ShieldCheck,
  Check,
  ArrowRight,
  Terminal,
  Server,
  Zap,
} from "lucide-react";
import { PublicNav } from "@/components/layout/public-nav";
import { PublicFooter } from "@/components/layout/public-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export default function FeaturesPage() {
  const { t, language } = useLanguage();

  const capabilityModules = [
    {
      title:
        language === "id"
          ? "Manajemen Insiden & Masalah"
          : "Incident & Problem Management",
      icon: ShieldAlert,
      tag: language === "id" ? "Triase Inti" : "Core Triage",
      description:
        language === "id"
          ? "Konsol triase berkecepatan tinggi yang dirancang untuk meminimalkan waktu respon (MTTA) dan waktu penyelesaian (MTTR)."
          : "High-velocity triage console engineered to minimize mean time to acknowledge (MTTA) and mean time to resolve (MTTR).",
      bullets:
        language === "id"
          ? [
              "Penilaian prioritas otomatis berdasarkan dampak bisnis dan urgensi",
              "Penautan telemetri dua arah dengan Prometheus, Datadog, dan CloudWatch",
              "Analisis akar masalah (RCA) dan repositori audit post-mortem",
              "Pintasan keyboard sub-detik (palet perintah ⌘K, buat tiket ⌘N)",
            ]
          : [
              "Automated priority scoring based on business impact and urgency",
              "Bi-directional telemetry linking with Prometheus, Datadog, and CloudWatch",
              "Root cause analysis and post-mortem audit repository",
              "Sub-second keyboard shortcuts (⌘K command bar, ⌘N new incident)",
            ],
    },
    {
      title:
        language === "id"
          ? "Mesin Kebijakan SLA Terperinci"
          : "Granular SLA Policy Engine",
      icon: Clock,
      tag: language === "id" ? "Pendorong Kepatuhan" : "Compliance Driver",
      description:
        language === "id"
          ? "Terapkan komitmen layanan multi-tingkat yang ketat dengan presisi timer milidetik dan alarm multi-tahap."
          : "Enforce strict multi-tier service level agreements with millisecond timer precision and multi-stage alarms.",
      bullets:
        language === "id"
          ? [
              "Hitung mundur target respon dan resolusi P1-P4 yang dapat disesuaikan",
              "Pemicu eskalasi otomatis sebelum ambang batas pelanggaran tercapai",
              "Kalkulasi jam kerja kalender dan pergeseran hari libur",
              "Paket audit kepatuhan siap ekspor untuk audit SOC 2 dan ISO",
            ]
          : [
              "Configurable P1-P4 target response and resolution countdowns",
              "Automated escalation triggers before breach thresholds are reached",
              "Calendar-aware business hour calculations and holiday shifts",
              "Exportable compliance audit packets for SOC 2 and ISO audits",
            ],
    },
    {
      title:
        language === "id"
          ? "Siklus Hidup Aset IT & Pelacakan Armada"
          : "IT Asset Lifecycle & Fleet Tracking",
      icon: Laptop,
      tag: language === "id" ? "Tata Kelola Armada" : "Fleet Governance",
      description:
        language === "id"
          ? "Pelacakan komprehensif atas semua laptop karyawan, perangkat keras jaringan, dan lisensi software enterprise."
          : "Comprehensive tracking of all physical workstations, network appliances, and enterprise software licenses.",
      bullets:
        language === "id"
          ? [
              "Pemetaan spesifikasi perangkat keras, nomor seri, dan penanggung jawab",
              "Kalkulasi penyusutan nilai dan peringatan otomatis berakhirnya garansi",
              "Penautan langsung tiket ke aset untuk analisis riwayat kerusakan",
              "Manajemen inventaris gudang IT untuk provisi cepat karyawan baru",
            ]
          : [
              "Hardware specification, serial number, and custodian mapping",
              "Depreciation computation and automated warranty expiration alerts",
              "Direct ticket-to-asset association for historical fault analysis",
              "Depot vault inventory management for rapid new-hire provisioning",
            ],
    },
    {
      title:
        language === "id"
          ? "Rotasi & Eskalasi On-Call"
          : "On-Call Rotations & Escalations",
      icon: Users,
      tag: language === "id" ? "Ketahanan Layanan" : "Resilience",
      description:
        language === "id"
          ? "Rotasi petugas tanggap darurat utama dan cadangan otomatis yang menghilangkan kelelahan pager dan mempercepat penyelesaian insiden kritis."
          : "Built-in primary and backup responder rotations that eliminate pager fatigue and resolve critical incidents faster.",
      bullets:
        language === "id"
          ? [
              "Penugasan teknisi utama dan cadangan dengan failover otomatis",
              "Meteran penyeimbang beban kerja mencegah kelelahan spesialis",
              "Pengiriman peringatan multi-saluran (SMS, Slack, Email, webhook)",
              "Catatan serah terima shift dan transfer operasional berkesinambungan",
            ]
          : [
              "Primary and secondary responder assignment with automated failover",
              "Workload balancing meters preventing specialist burnout",
              "Multi-channel alert dispatch (SMS, Slack, Email, and PagerDuty webhook)",
              "Shift handover notes and continuous operational transfer",
            ],
    },
    {
      title:
        language === "id"
          ? "Telemetri Eksekutif & Laporan"
          : "Executive Telemetry & Reports",
      icon: BarChart3,
      tag: "BI & Analytics",
      description:
        language === "id"
          ? "Dashboard analitik interaktif yang memberi pimpinan rekayasa visibilitas operasional menyeluruh."
          : "Interactive analytics dashboards powered by Recharts that give engineering leadership complete operational visibility.",
      bullets:
        language === "id"
          ? [
              "Deret waktu kecepatan insiden bergulir 7 hari dan 30 hari",
              "Distribusi kategori dan deteksi kluster kegagalan berulang",
              "Skor kepuasan pelanggan CSAT pasca resolusi",
              "Pelacakan kecepatan Resolusi Kontak Pertama (FCR)",
            ]
          : [
              "Rolling 7-day and 30-day incident velocity time series",
              "Category distribution and recurring failure cluster detection",
              "Post-resolution CSAT customer satisfaction scoring",
              "First Contact Resolution (FCR) velocity tracking",
            ],
    },
    {
      title:
        language === "id"
          ? "Keamanan & Identitas Enterprise"
          : "Enterprise Security & Identity",
      icon: ShieldCheck,
      tag: language === "id" ? "Identitas & Kepercayaan" : "Identity & Trust",
      description:
        language === "id"
          ? "Dirancang sejak hari pertama untuk lingkungan zero-trust dengan SSO enterprise, SCIM otomatis, dan log audit yang tidak dapat diubah."
          : "Designed from day zero for zero-trust environments with enterprise SSO, automated SCIM, and immutable audit logs.",
      bullets:
        language === "id"
          ? [
              "SAML 2.0 Single Sign-On dengan Okta, Azure Active Directory, dan Google",
              "Provisi dan deprovisi akun karyawan seketika melalui protokol SCIM 2.0",
              "Kontrol Akses Berbasis Peran (RBAC) di tingkat Tier 1, Tier 2, dan Admin",
              "Jejak audit anti-manipulasi untuk seluruh mutasi konfigurasi",
            ]
          : [
              "SAML 2.0 Single Sign-On with Okta, Azure Active Directory, and Google",
              "SCIM 2.0 real-time user lifecycle provisioning and instant deprovisioning",
              "Role-Based Access Control (RBAC) across Tier 1, Tier 2, and Admin levels",
              "Full tamper-proof audit trails for all configuration mutations",
            ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <PublicNav />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-20 pb-16 md:pt-24 md:pb-20 border-b border-neutral-200/80 bg-neutral-50/40 text-center">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              {t.features.heroSub}
            </span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              {t.features.heroTitle}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              {t.features.heroDesc}
            </p>

            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild className="gap-2 text-xs">
                <Link href="/dashboard">
                  <span>{t.features.openDemo}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilityModules.map((module) => {
                const Icon = module.icon;
                return (
                  <Card
                    key={module.title}
                    className="bg-white border-neutral-200/90 shadow-subtle hover:border-neutral-300 transition-all p-2"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-mono font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                          {module.tag}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-neutral-900">
                          {module.title}
                        </h3>
                        <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                          {module.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-neutral-100 space-y-2">
                        {module.bullets.map((bullet, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-neutral-700"
                          >
                            <Check className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Architecture Comparison Table */}
        <section className="py-16 bg-neutral-50/60 border-t border-neutral-200/80">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                {t.features.matrixTitle}
              </h2>
              <p className="mt-1 text-xs text-neutral-500">
                {t.features.matrixSub}
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200/90 bg-white overflow-hidden shadow-subtle text-xs">
              <div className="grid grid-cols-3 p-3.5 bg-neutral-100/70 border-b border-neutral-200 font-semibold text-neutral-700">
                <span>{t.features.dimLabel}</span>
                <span className="text-neutral-500">{t.features.legacyLabel}</span>
                <span className="text-blue-600">{t.features.opsdeskLabel}</span>
              </div>
              <div className="divide-y divide-neutral-100">
                <div className="grid grid-cols-3 p-3.5 items-center">
                  <span className="font-medium text-neutral-800">{t.features.dim1Title}</span>
                  <span className="text-neutral-500">{t.features.dim1Legacy}</span>
                  <span className="font-semibold text-emerald-600">{t.features.dim1Opsdesk}</span>
                </div>
                <div className="grid grid-cols-3 p-3.5 items-center">
                  <span className="font-medium text-neutral-800">{t.features.dim2Title}</span>
                  <span className="text-neutral-500">{t.features.dim2Legacy}</span>
                  <span className="font-semibold text-emerald-600">{t.features.dim2Opsdesk}</span>
                </div>
                <div className="grid grid-cols-3 p-3.5 items-center">
                  <span className="font-medium text-neutral-800">{t.features.dim3Title}</span>
                  <span className="text-neutral-500">{t.features.dim3Legacy}</span>
                  <span className="font-semibold text-emerald-600">{t.features.dim3Opsdesk}</span>
                </div>
                <div className="grid grid-cols-3 p-3.5 items-center">
                  <span className="font-medium text-neutral-800">{t.features.dim4Title}</span>
                  <span className="text-neutral-500">{t.features.dim4Legacy}</span>
                  <span className="font-semibold text-emerald-600">{t.features.dim4Opsdesk}</span>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" asChild className="gap-2 text-xs">
                <Link href="/dashboard">
                  <span>{t.features.ctaBtn}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
