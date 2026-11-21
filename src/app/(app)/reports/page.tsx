"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Download,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { MOCK_SLA_METRICS } from "@/lib/mock-data";
import { useLanguage } from "@/context/language-context";

export default function ReportsPage() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const chartData = [
    { tier: "P1 Critical", targetHours: 1.0, actualHours: 0.6, compliance: 100 },
    { tier: "P2 High", targetHours: 4.0, actualHours: 2.1, compliance: 98.7 },
    { tier: "P3 Medium", targetHours: 8.0, actualHours: 4.5, compliance: 99.2 },
    { tier: "P4 Low", targetHours: 24.0, actualHours: 11.2, compliance: 99.8 },
  ];

  const handleExport = () => {
    toast.success(
      language === "id"
        ? "Laporan Audit SLA Berhasil Dibuat"
        : "SLA Audit Report generated",
      {
        description:
          language === "id"
            ? "Ekspor CSV bersertifikat ISO 27001 & SOC 2 dikirim ke Marcus Vance."
            : "ISO 27001 & SOC 2 certified CSV export dispatched to Marcus Vance.",
      }
    );
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-neutral-200/80">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
            {t.reports.title}
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            {t.reports.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={handleExport}
            variant="outline"
            size="sm"
            className="gap-1.5"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{t.reports.exportBtn}</span>
          </Button>
        </div>
      </div>

      {/* Top Analytics KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white">
          <CardContent className="p-4 sm:p-5">
            <span className="text-xs text-neutral-500 font-medium">{t.reports.overallSla}</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900 tabular-nums">99.4%</span>
              <span className="text-[11px] font-medium text-emerald-600">+0.6% {language === "id" ? "di atas target" : "vs target"}</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              {language === "id" ? "391 dari 394 komitmen terpenuhi" : "391 of 394 commitments met"}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4 sm:p-5">
            <span className="text-xs text-neutral-500 font-medium">{t.reports.mttrLabel}</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900 tabular-nums">1h 42m</span>
              <span className="text-[11px] font-medium text-emerald-600">
                {language === "id" ? "-18m lebih cepat" : "-18m improved"}
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              {language === "id" ? "Di seluruh tingkat insiden" : "Across all incident tiers"}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4 sm:p-5">
            <span className="text-xs text-neutral-500 font-medium">{t.reports.fcrLabel}</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900 tabular-nums">74.8%</span>
              <span className="text-[11px] font-medium text-emerald-600">+3.2%</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              {language === "id" ? "Diselesaikan langsung oleh Tier 1" : "Directly resolved by Tier 1"}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4 sm:p-5">
            <span className="text-xs text-neutral-500 font-medium">{t.reports.csatLabel}</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900 tabular-nums">4.92</span>
              <span className="text-xs text-neutral-400 font-normal">/ 5.0</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-1">
              {language === "id" ? "Berdasarkan 284 ulasan setelah tiket ditutup" : "Based on 284 post-close ratings"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart: Target Resolution Time vs Actual Hours */}
      <Card className="bg-white">
        <CardHeader className="pb-2">
          <CardTitle>{t.reports.chartTitle}</CardTitle>
          <CardDescription>
            {t.reports.chartDesc}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[260px] w-full pt-2">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis
                    dataKey="tier"
                    stroke="#94A3B8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#94A3B8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    content={({ active, payload, label }: any) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border border-neutral-200/90 bg-white p-3 shadow-float text-xs">
                            <p className="font-semibold text-neutral-900 mb-1">{label}</p>
                            <p className="text-neutral-500">
                              {t.reports.targetSlaLabel}:{" "}
                              <span className="font-medium text-neutral-800">
                                {payload[0]?.value}h
                              </span>
                            </p>
                            <p className="text-neutral-500">
                              {t.reports.actualMedianLabel}:{" "}
                              <span className="font-medium text-blue-600">
                                {payload[1]?.value}h
                              </span>
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="targetHours" fill="#E2E8F0" radius={[4, 4, 0, 0]} name={t.reports.targetSlaLabel} />
                  <Bar dataKey="actualHours" fill="#2563EB" radius={[4, 4, 0, 0]} name={t.reports.actualMedianLabel} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-neutral-400">
                Loading analytics visualizer...
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* SLA Compliance Breakdown Table */}
      <Card className="bg-white">
        <CardHeader className="pb-2">
          <CardTitle>{t.reports.matrixTitle}</CardTitle>
          <CardDescription>
            {t.reports.matrixDesc}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.reports.colTier}</TableHead>
                <TableHead className="w-[120px]">{t.reports.colTarget}</TableHead>
                <TableHead className="w-[130px]">{t.reports.colActual}</TableHead>
                <TableHead className="w-[110px]">{t.reports.colTotal}</TableHead>
                <TableHead className="w-[110px]">{t.reports.colMet}</TableHead>
                <TableHead className="w-[110px] text-right">{t.reports.colBreaches}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_SLA_METRICS.map((row) => (
                <TableRow key={row.category}>
                  <TableCell className="font-medium text-neutral-900 text-xs">
                    {row.category}
                  </TableCell>
                  <TableCell className="text-neutral-600 text-xs font-mono">
                    {row.targetRate.toFixed(1)}%
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      <span>{row.complianceRate.toFixed(1)}%</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-neutral-800 text-xs font-mono">
                    {row.totalTickets}
                  </TableCell>
                  <TableCell className="text-emerald-700 text-xs font-mono font-medium">
                    {row.metCount}
                  </TableCell>
                  <TableCell className="text-right text-xs font-mono font-semibold text-neutral-600">
                    {row.breachedCount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
