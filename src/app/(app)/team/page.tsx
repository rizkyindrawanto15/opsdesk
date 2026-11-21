"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Users,
  UserPlus,
  ShieldAlert,
  Clock,
  CheckCircle,
  Radio,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/modal";
import { MOCK_TEAM_MEMBERS } from "@/lib/mock-data";
import { TeamMember } from "@/lib/types";
import { useLanguage } from "@/context/language-context";

export default function TeamPage() {
  const { t, language } = useLanguage();
  const [team, setTeam] = React.useState<TeamMember[]>(MOCK_TEAM_MEMBERS);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [inviteEmail, setInviteEmail] = React.useState("");
  const [inviteName, setInviteName] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState("IT Support Engineer");

  const primaryOnCall = team.find((m) => m.onCall === "primary");
  const secondaryOnCall = team.find((m) => m.onCall === "secondary");

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim()) {
      toast.error(
        language === "id"
          ? "Silakan masukkan email anggota tim"
          : "Please enter team member email"
      );
      return;
    }

    const newMember: TeamMember = {
      id: `tm-${Date.now()}`,
      name: inviteName || inviteEmail.split("@")[0],
      email: inviteEmail,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      role: inviteRole,
      department: "Workplace Technology",
      status: "online",
      activeTicketsCount: 0,
      resolvedThisWeek: 0,
      onCall: "none",
      tier: "Tier 1 Support",
    };

    setTeam((prev) => [...prev, newMember]);
    toast.success(
      language === "id"
        ? `Undangan dikirim ke ${inviteEmail}`
        : `Invitation dispatched to ${inviteEmail}`,
      {
        description:
          language === "id"
            ? "Token provisi SSO dibuat dengan masa berlaku 48 jam."
            : "SSO provisioning token created with 48h expiration.",
      }
    );
    setInviteEmail("");
    setInviteName("");
    setModalOpen(false);
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-neutral-200/80">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
            {t.team.title}
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            {t.team.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setModalOpen(true)}
            size="sm"
            className="gap-1.5"
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span>{t.team.inviteBtn}</span>
          </Button>
        </div>
      </div>

      {/* On-Call Escalation Duty Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Primary Responder Card */}
        <Card className="bg-white border-l-4 border-l-blue-600">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                <Radio className="h-3 w-3 animate-pulse" />
                <span>{t.team.primaryTitle}</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                {t.team.primarySub}
              </span>
            </div>

            {primaryOnCall && (
              <div className="mt-4 flex items-center gap-3">
                <Avatar
                  src={primaryOnCall.avatar}
                  name={primaryOnCall.name}
                  size="md"
                  status={primaryOnCall.status}
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-neutral-900 truncate">
                    {primaryOnCall.name}
                  </h3>
                  <p className="text-xs text-neutral-500 truncate">
                    {primaryOnCall.role} • {primaryOnCall.department}
                  </p>
                  <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    {t.team.rotationActive}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Secondary Responder Card */}
        <Card className="bg-white border-l-4 border-l-neutral-400">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-neutral-600 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                <span>{t.team.secondaryTitle}</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-700 border border-neutral-200">
                {t.team.secondarySub}
              </span>
            </div>

            {secondaryOnCall && (
              <div className="mt-4 flex items-center gap-3">
                <Avatar
                  src={secondaryOnCall.avatar}
                  name={secondaryOnCall.name}
                  size="md"
                  status={secondaryOnCall.status}
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-neutral-900 truncate">
                    {secondaryOnCall.name}
                  </h3>
                  <p className="text-xs text-neutral-500 truncate">
                    {secondaryOnCall.role} • {secondaryOnCall.department}
                  </p>
                  <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    {t.team.standbyActive}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Team Roster & Capacity Table */}
      <Card className="bg-white">
        <CardHeader className="pb-2">
          <CardTitle>{t.team.rosterTitle}</CardTitle>
          <CardDescription>
            {t.team.rosterDesc}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.team.colEngineer}</TableHead>
                <TableHead className="w-[140px]">{t.team.colDepartment}</TableHead>
                <TableHead className="w-[150px]">{t.team.colTier}</TableHead>
                <TableHead className="w-[110px]">{t.team.colDuty}</TableHead>
                <TableHead className="w-[180px]">{t.team.colWorkload}</TableHead>
                <TableHead className="w-[120px] text-right">{t.team.colResolved7d}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {team.map((member) => {
                const capacityPct = (member.activeTicketsCount / 8) * 100;
                return (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <Avatar
                          src={member.avatar}
                          name={member.name}
                          size="sm"
                          status={member.status}
                        />
                        <div className="min-w-0">
                          <div className="font-semibold text-neutral-900 text-xs">
                            {member.name}
                          </div>
                          <div className="text-[11px] text-neutral-500 truncate">
                            {member.role}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-neutral-600 text-xs">
                      {member.department}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-100 text-neutral-700 border border-neutral-200">
                        {member.tier}
                      </span>
                    </TableCell>
                    <TableCell>
                      {member.onCall === "primary" ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                          {t.team.dutyPrimary}
                        </span>
                      ) : member.onCall === "secondary" ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded-full border border-neutral-200">
                          {t.team.dutySecondary}
                        </span>
                      ) : (
                        <span className="text-[11px] text-neutral-400">{t.team.dutyOff}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                          <span>{member.activeTicketsCount} {t.team.capacityLabel}</span>
                          <span>{capacityPct.toFixed(0)}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              capacityPct > 70
                                ? "bg-amber-500"
                                : capacityPct > 50
                                ? "bg-blue-600"
                                : "bg-emerald-500"
                            }`}
                            style={{ width: `${capacityPct}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-xs font-semibold text-neutral-900 tabular-nums">
                      {member.resolvedThisWeek} {language === "id" ? "tiket" : "tickets"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Invite Member Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t.team.modalTitle}</DialogTitle>
            <DialogDescription>
              {t.team.modalDesc}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleInvite} className="space-y-4 pt-1">
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-neutral-700">
                {t.team.modalName}
              </label>
              <Input
                value={inviteName}
                onChange={(e) => setInviteName(e.target.value)}
                placeholder="e.g. Rachel Sterling"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-neutral-700">
                {t.team.modalEmail} <span className="text-rose-500">*</span>
              </label>
              <Input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="rachel.s@enterprise.com"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-neutral-700">
                {t.team.modalRole}
              </label>
              <select
                value={inviteRole}
                onChange={(e) => setInviteRole(e.target.value)}
                className="w-full h-8 rounded-md border border-neutral-200/90 bg-white px-2.5 text-xs text-neutral-800 focus:outline-none focus:border-blue-500"
              >
                <option value="IT Support Specialist">IT Support Specialist (Tier 1)</option>
                <option value="Senior Security Specialist">Senior Security Specialist (Tier 2)</option>
                <option value="Network Infrastructure Engineer">Network Infrastructure Engineer (Tier 2)</option>
                <option value="Site Reliability Engineer">Site Reliability Engineer (DevOps & SRE)</option>
                <option value="IT Operations Lead">IT Operations Lead (Admin)</option>
              </select>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-neutral-100">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setModalOpen(false)}
              >
                {t.common.cancel}
              </Button>
              <Button type="submit" size="sm">
                {t.team.modalSubmit}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
