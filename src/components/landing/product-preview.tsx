"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Clock,
  Layers,
  Search,
  ExternalLink,
} from "lucide-react";
import { StatusPill } from "@/components/ui/status-pill";
import { Avatar } from "@/components/ui/avatar";
import { MOCK_TICKETS, MOCK_ASSETS, MOCK_KPIS } from "@/lib/mock-data";
import { useLanguage } from "@/context/language-context";

export function ProductPreview() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = React.useState<"queue" | "sla" | "assets">("queue");

  return (
    <section className="py-12 md:py-20 bg-neutral-50/50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            {t.landing.previewHeading}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500">
            {t.landing.previewSubtitle}
          </p>
        </div>

        {/* Mac OS Style Window Frame */}
        <div className="rounded-xl border border-neutral-200/90 bg-white shadow-float overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200/80 bg-neutral-50/70">
            {/* Window Dots */}
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-neutral-200 border border-neutral-300" />
              <span className="h-3 w-3 rounded-full bg-neutral-200 border border-neutral-300" />
              <span className="h-3 w-3 rounded-full bg-neutral-200 border border-neutral-300" />
            </div>

            {/* Simulated Address Bar / Tabs */}
            <div className="flex items-center bg-white border border-neutral-200/80 rounded-lg p-0.5 shadow-subtle">
              <button
                onClick={() => setActiveTab("queue")}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  activeTab === "queue"
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {t.landing.tabQueue}
              </button>
              <button
                onClick={() => setActiveTab("sla")}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  activeTab === "sla"
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {t.landing.tabSla}
              </button>
              <button
                onClick={() => setActiveTab("assets")}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  activeTab === "assets"
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {t.landing.tabAssets}
              </button>
            </div>

            {/* Launch Console Link */}
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
            >
              <span>{t.landing.launchLive}</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          {/* Interactive Window Body */}
          <div className="p-4 sm:p-6 bg-white min-h-[380px]">
            {activeTab === "queue" && (
              <div className="space-y-3 animate-fade-in">
                <div className="flex items-center justify-between text-xs text-neutral-500 pb-2 border-b border-neutral-100">
                  <span className="font-semibold text-neutral-800">
                    {t.landing.queueHeader}
                  </span>
                  <span className="font-mono text-[11px] text-emerald-600">
                    {t.landing.slaHealthy}
                  </span>
                </div>

                <div className="divide-y divide-neutral-100">
                  {MOCK_TICKETS.slice(0, 4).map((ticket) => (
                    <div
                      key={ticket.id}
                      className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral-50/60 p-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <span className="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 shrink-0">
                          {ticket.key}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-neutral-900 truncate">
                            {ticket.title}
                          </p>
                          <p className="text-[10px] text-neutral-400 mt-0.5">
                            {ticket.category} • {language === "id" ? "Dilaporkan oleh" : "Reported by"} {ticket.requester.name}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <StatusPill type="priority" value={ticket.priority} />
                        <StatusPill type="status" value={ticket.status} />
                        {ticket.assignee && (
                          <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-neutral-200">
                            <Avatar
                              src={ticket.assignee.avatar}
                              name={ticket.assignee.name}
                              size="xs"
                            />
                            <span className="text-[11px] text-neutral-600 truncate max-w-[80px]">
                              {ticket.assignee.name.split(" ")[0]}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "sla" && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {MOCK_KPIS.slice(0, 3).map((kpi) => (
                    <div
                      key={kpi.id}
                      className="p-4 rounded-lg border border-neutral-200/80 bg-neutral-50/50"
                    >
                      <span className="text-[11px] text-neutral-500 font-medium">
                        {kpi.label}
                      </span>
                      <div className="mt-1 text-2xl font-bold text-neutral-900 tabular-nums">
                        {kpi.value}
                      </div>
                      <span className="text-[10px] text-emerald-600 font-medium">
                        {kpi.delta} {language === "id" ? "vs standar" : "vs baseline"}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-lg border border-neutral-200/80 bg-white">
                  <div className="flex items-center justify-between text-xs font-medium text-neutral-800 mb-2">
                    <span>{t.landing.p1Rate}</span>
                    <span className="text-emerald-600 font-mono font-semibold">{t.landing.p1Met}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-full" />
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-2">
                    {t.landing.p1Desc}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "assets" && (
              <div className="space-y-3 animate-fade-in">
                <div className="flex items-center justify-between text-xs text-neutral-500 pb-2 border-b border-neutral-100">
                  <span className="font-semibold text-neutral-800">
                    {t.landing.hardwareFleet}
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    {t.landing.totalManaged}
                  </span>
                </div>

                <div className="divide-y divide-neutral-100">
                  {MOCK_ASSETS.slice(0, 3).map((asset) => (
                    <div
                      key={asset.id}
                      className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded-lg"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-blue-600">
                            {asset.assetTag}
                          </span>
                          <span className="text-xs font-medium text-neutral-900">
                            {asset.name}
                          </span>
                        </div>
                        <p className="text-[10px] text-neutral-400 font-mono mt-0.5">
                          SN: {asset.serialNumber} • {language === "id" ? "Lokasi" : "Location"}: {asset.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <StatusPill type="assetStatus" value={asset.status} />
                        <span className="text-xs font-semibold text-neutral-900 tabular-nums">
                          ${asset.cost.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar */}
          <div className="px-4 py-3 border-t border-neutral-200/80 bg-neutral-50/60 flex items-center justify-between text-xs text-neutral-500">
            <span>{t.landing.routerConnected}</span>
            <Link
              href="/dashboard"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              <span>{t.landing.openFullConsole}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
