"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Building2,
  Clock,
  ShieldCheck,
  Database,
  Save,
  Globe,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export default function SettingsPage() {
  const { language, setLanguage, t } = useLanguage();

  const [companyName, setCompanyName] = React.useState("Acme Enterprise Global");
  const [subdomain, setSubdomain] = React.useState("acme-global");
  const [p1Response, setP1Response] = React.useState("15");
  const [p1Resolution, setP1Resolution] = React.useState("1");
  const [p2Resolution, setP2Resolution] = React.useState("4");
  const [p3Resolution, setP3Resolution] = React.useState("8");
  const [p4Resolution, setP4Resolution] = React.useState("24");
  const [ssoEnabled, setSsoEnabled] = React.useState(true);
  const [scimEnabled, setScimEnabled] = React.useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      language === "id"
        ? "Pengaturan dan kebijakan SLA berhasil diperbarui"
        : "Settings and SLA policies updated",
      {
        description:
          language === "id"
            ? "Perubahan telah diterapkan ke lingkungan ruang kerja aktif."
            : "Policy changes committed to the local workspace runtime.",
      }
    );
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-neutral-200/80">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
            {t.settings.title}
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            {t.settings.subtitle}
          </p>
        </div>

        <Button onClick={handleSave} size="sm" className="gap-1.5">
          <Save className="h-3.5 w-3.5" />
          <span>{t.settings.saveBtn}</span>
        </Button>
      </div>

      {/* Language Selection Card */}
      <Card className="bg-white border-blue-200/80 shadow-subtle">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-blue-600" />
            <CardTitle>{t.settings.langTitle}</CardTitle>
          </div>
          <CardDescription>{t.settings.langDesc}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Bahasa Indonesia Option */}
            <button
              type="button"
              onClick={() => {
                setLanguage("id");
                toast.success("Bahasa berhasil diubah ke Bahasa Indonesia");
              }}
              className={`p-3.5 rounded-lg border text-left flex items-start justify-between transition-all ${
                language === "id"
                  ? "border-blue-600 bg-blue-50/50 shadow-xs"
                  : "border-neutral-200/90 hover:border-neutral-300 bg-neutral-50/30"
              }`}
            >
              <div>
                <span className="text-xs font-semibold text-neutral-900 block">
                  Bahasa Indonesia
                </span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">
                  Tampilan antarmuka lokal Indonesia
                </span>
              </div>
              {language === "id" && (
                <div className="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </button>

            {/* English Option */}
            <button
              type="button"
              onClick={() => {
                setLanguage("en");
                toast.success("Language switched to English");
              }}
              className={`p-3.5 rounded-lg border text-left flex items-start justify-between transition-all ${
                language === "en"
                  ? "border-blue-600 bg-blue-50/50 shadow-xs"
                  : "border-neutral-200/90 hover:border-neutral-300 bg-neutral-50/30"
              }`}
            >
              <div>
                <span className="text-xs font-semibold text-neutral-900 block">
                  English (United States)
                </span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">
                  Standard enterprise English interface
                </span>
              </div>
              {language === "en" && (
                <div className="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </button>
          </div>

          <p className="text-[11px] text-neutral-400">
            {t.settings.langSelectedNote}
          </p>
        </CardContent>
      </Card>

      {/* Phase 1 Architectural Note Banner */}
      <div className="p-4 rounded-xl border border-blue-200/90 bg-blue-50/50 flex items-start gap-3">
        <Database className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed">
          <span className="font-semibold text-blue-900">
            {t.settings.noticeTitle}
          </span>
          <p className="text-blue-800/90 mt-0.5">
            {t.settings.noticeDesc}
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Workspace Identity */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-neutral-500" />
              <CardTitle>{t.settings.orgTitle}</CardTitle>
            </div>
            <CardDescription>{t.settings.orgDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  {t.settings.companyName}
                </label>
                <Input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  {t.settings.tenantSubdomain}
                </label>
                <div className="flex items-center">
                  <Input
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value)}
                    className="rounded-r-none border-r-0"
                  />
                  <span className="h-8 px-3 rounded-r-md border border-neutral-200/90 bg-neutral-100 text-xs text-neutral-500 flex items-center font-mono">
                    .opsdesk.io
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SLA Policy Engine Config */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-neutral-500" />
              <CardTitle>{t.settings.slaTitle}</CardTitle>
            </div>
            <CardDescription>{t.settings.slaDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 p-3 rounded-lg border border-neutral-200/80 bg-neutral-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-rose-700">
                    {t.settings.p1Header}
                  </span>
                  <span className="text-[10px] text-neutral-400">Response Max</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    value={p1Response}
                    onChange={(e) => setP1Response(e.target.value)}
                    type="number"
                    className="w-20"
                  />
                  <span className="text-xs text-neutral-500">
                    {language === "id" ? "menit respon pertama" : "minutes first response"}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    value={p1Resolution}
                    onChange={(e) => setP1Resolution(e.target.value)}
                    type="number"
                    className="w-20"
                  />
                  <span className="text-xs text-neutral-500">
                    {language === "id" ? "jam batas resolusi" : "hour(s) resolution"}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 p-3 rounded-lg border border-neutral-200/80 bg-neutral-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-700">
                    {t.settings.p2Header}
                  </span>
                  <span className="text-[10px] text-neutral-400">Resolution Max</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    value={p2Resolution}
                    onChange={(e) => setP2Resolution(e.target.value)}
                    type="number"
                    className="w-20"
                  />
                  <span className="text-xs text-neutral-500">
                    {language === "id" ? "jam batas resolusi" : "hours resolution"}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 p-3 rounded-lg border border-neutral-200/80 bg-neutral-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-700">
                    {t.settings.p3Header}
                  </span>
                  <span className="text-[10px] text-neutral-400">Resolution Max</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    value={p3Resolution}
                    onChange={(e) => setP3Resolution(e.target.value)}
                    type="number"
                    className="w-20"
                  />
                  <span className="text-xs text-neutral-500">
                    {language === "id" ? "jam batas resolusi" : "hours resolution"}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 p-3 rounded-lg border border-neutral-200/80 bg-neutral-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-700">
                    {t.settings.p4Header}
                  </span>
                  <span className="text-[10px] text-neutral-400">Resolution Max</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    value={p4Resolution}
                    onChange={(e) => setP4Resolution(e.target.value)}
                    type="number"
                    className="w-20"
                  />
                  <span className="text-xs text-neutral-500">
                    {language === "id" ? "jam batas resolusi" : "hours resolution"}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security & Authentication */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-neutral-500" />
              <CardTitle>{t.settings.securityTitle}</CardTitle>
            </div>
            <CardDescription>{t.settings.securityDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg border border-neutral-200/80">
              <div>
                <span className="text-xs font-semibold text-neutral-900 block">
                  {t.settings.ssoTitle}
                </span>
                <span className="text-[11px] text-neutral-500 block">
                  {t.settings.ssoDesc}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSsoEnabled(!ssoEnabled)}
                className={`w-10 h-5 rounded-full transition-colors relative ${
                  ssoEnabled ? "bg-blue-600" : "bg-neutral-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
                    ssoEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-neutral-200/80">
              <div>
                <span className="text-xs font-semibold text-neutral-900 block">
                  {t.settings.scimTitle}
                </span>
                <span className="text-[11px] text-neutral-500 block">
                  {t.settings.scimDesc}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setScimEnabled(!scimEnabled)}
                className={`w-10 h-5 rounded-full transition-colors relative ${
                  scimEnabled ? "bg-blue-600" : "bg-neutral-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
                    scimEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
