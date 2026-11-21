"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TicketCategory, TicketPriority } from "@/lib/types";
import { MOCK_TEAM_MEMBERS } from "@/lib/mock-data";
import { useLanguage } from "@/context/language-context";

interface QuickCreateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onTicketCreated?: (ticket: any) => void;
}

export function QuickCreateModal({
  open,
  onOpenChange,
  onTicketCreated,
}: QuickCreateModalProps) {
  const { t, language } = useLanguage();
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState<TicketCategory>("Hardware");
  const [priority, setPriority] = React.useState<TicketPriority>("medium");
  const [description, setDescription] = React.useState("");
  const [assigneeId, setAssigneeId] = React.useState(MOCK_TEAM_MEMBERS[0].id);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error(
        language === "id"
          ? "Silakan masukkan ringkasan insiden"
          : "Please enter an incident summary"
      );
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomKey = `INC-${Math.floor(4100 + Math.random() * 50)}`;
      const selectedAssignee = MOCK_TEAM_MEMBERS.find((m) => m.id === assigneeId) || null;

      const newTicket = {
        id: `tkt-${Date.now()}`,
        key: randomKey,
        title,
        description: description || (language === "id" ? "Tidak ada telemetri rincian." : "No detailed telemetry provided."),
        status: "open",
        priority,
        category,
        requester: {
          id: "usr-current",
          name: "Marcus Vance",
          email: "marcus.vance@opsdesk.io",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          department: "Global Infrastructure",
        },
        assignee: selectedAssignee,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        slaDue: new Date(Date.now() + 4 * 3600 * 1000).toISOString(),
        slaStatus: "healthy",
        tags: [category.toLowerCase().replace(/[^a-z0-9]/g, "-"), "new-triage"],
        impact: priority === "urgent" ? "Organization-wide" : "Department",
      };

      if (onTicketCreated) {
        onTicketCreated(newTicket);
      }

      toast.success(
        language === "id"
          ? `Tiket ${randomKey} berhasil dibuat`
          : `Ticket ${randomKey} created successfully`,
        {
          description:
            language === "id"
              ? `Rute triase dikirim ke ${selectedAssignee?.name || "Belum ditugaskan"}.`
              : `Triage route dispatched to ${selectedAssignee?.name || "Unassigned"}.`,
        }
      );

      // Reset form
      setTitle("");
      setDescription("");
      setIsSubmitting(false);
      onOpenChange(false);
    }, 400);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t.common.createTicketTitle}</DialogTitle>
          <DialogDescription>
            {language === "id"
              ? "Masukkan rincian insiden. Target waktu SLA akan dihitung otomatis berdasarkan tingkat prioritas."
              : "Enter telemetry details. SLA targets will compute automatically based on priority level."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          {/* Title */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-neutral-700">
              {language === "id" ? "Ringkasan / Judul Masalah" : "Summary / Issue Title"} <span className="text-rose-500">*</span>
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={
                language === "id"
                  ? "contoh: Kegagalan trunk failover switch inti"
                  : "e.g. Core switch trunk failover packet loss"
              }
              required
            />
          </div>

          {/* Priority & Category Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-neutral-700">
                {t.common.priority}
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as TicketPriority)}
                className="w-full h-8 rounded-md border border-neutral-200/90 bg-white px-2.5 text-xs text-neutral-800 focus:outline-none focus:border-blue-500"
              >
                <option value="low">{t.tickets.p4Low}</option>
                <option value="medium">{t.tickets.p3Medium}</option>
                <option value="high">{t.tickets.p2High}</option>
                <option value="urgent">{t.tickets.p1Urgent}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-neutral-700">
                {t.common.category}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as TicketCategory)}
                className="w-full h-8 rounded-md border border-neutral-200/90 bg-white px-2.5 text-xs text-neutral-800 focus:outline-none focus:border-blue-500"
              >
                <option value="Hardware">Hardware</option>
                <option value="Access & Security">Access & Security</option>
                <option value="Network & VPN">Network & VPN</option>
                <option value="Software & SaaS">Software & SaaS</option>
                <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                <option value="Onboarding">Onboarding</option>
              </select>
            </div>
          </div>

          {/* Assignee */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-neutral-700">
              {t.common.assignee}
            </label>
            <select
              value={assigneeId}
              onChange={(e) => setAssigneeId(e.target.value)}
              className="w-full h-8 rounded-md border border-neutral-200/90 bg-white px-2.5 text-xs text-neutral-800 focus:outline-none focus:border-blue-500"
            >
              {MOCK_TEAM_MEMBERS.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name} ({member.role})
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-neutral-700">
              {language === "id" ? "Deskripsi & Langkah Reproduksi" : "Description & Reproduction Steps"}
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={
                language === "id"
                  ? "Lampirkan log, kode error, host yang terdampak, atau konteks..."
                  : "Provide logs, error codes, affected hosts, or context..."
              }
              className="w-full rounded-md border border-neutral-200/90 bg-white p-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-neutral-100">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(false)}
            >
              {t.common.cancel}
            </Button>
            <Button
              type="submit"
              size="sm"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? language === "id"
                  ? "Memproses..."
                  : "Creating..."
                : t.tickets.createBtn}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
