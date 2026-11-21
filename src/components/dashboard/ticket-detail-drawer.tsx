"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Clock,
  Shield,
  User,
  Tag,
  AlertTriangle,
  CheckCircle2,
  Send,
  MessageSquare,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/drawer";
import { StatusPill } from "@/components/ui/status-pill";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Ticket } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface TicketDetailDrawerProps {
  ticket: Ticket | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onTicketStatusChange?: (ticketId: string, newStatus: Ticket["status"]) => void;
}

export function TicketDetailDrawer({
  ticket,
  open,
  onOpenChange,
  onTicketStatusChange,
}: TicketDetailDrawerProps) {
  const { t, language } = useLanguage();
  const [commentText, setCommentText] = React.useState("");
  const [comments, setComments] = React.useState<string[]>([
    "Initial automated triage dispatched via Datadog alert webhook.",
  ]);

  if (!ticket) return null;

  const handleResolve = () => {
    if (onTicketStatusChange) {
      onTicketStatusChange(ticket.id, "resolved");
    }
    toast.success(
      language === "id"
        ? `Tiket ${ticket.key} ditandai sebagai Selesai`
        : `Ticket ${ticket.key} marked as Resolved`,
      {
        description:
          language === "id"
            ? "Jam SLA resolusi dihentikan. Pelapor telah menerima notifikasi."
            : "Resolution SLA clock stopped. Requester notified via email.",
      }
    );
    onOpenChange(false);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments((prev) => [...prev, commentText]);
    toast.success(
      language === "id"
        ? "Catatan internal ditambahkan ke log insiden"
        : "Internal note added to incident log"
    );
    setCommentText("");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80">
              {ticket.key}
            </span>
            <StatusPill type="priority" value={ticket.priority} />
            <StatusPill type="status" value={ticket.status} />
          </div>
          <SheetTitle className="text-base font-semibold text-neutral-900 mt-2">
            {ticket.title}
          </SheetTitle>
          <SheetDescription className="text-xs text-neutral-400">
            {language === "id" ? "Dilaporkan oleh" : "Reported by"} {ticket.requester.name} • {formatDate(ticket.createdAt)}
          </SheetDescription>
        </SheetHeader>

        {/* Telemetry Details */}
        <div className="mt-5 space-y-5 text-xs">
          {/* SLA Clock Banner */}
          <div className="rounded-lg border border-neutral-200/80 bg-neutral-50/70 p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 text-neutral-500" />
              <div>
                <span className="text-[11px] font-medium text-neutral-500 block">
                  {t.tickets.drawerTargetSla}
                </span>
                <span className="font-semibold text-neutral-900 text-xs">
                  {formatDate(ticket.slaDue)} ({language === "id" ? "batas waktu" : "window"})
                </span>
              </div>
            </div>
            <StatusPill type="sla" value={ticket.slaStatus} />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
              {t.tickets.drawerContext}
            </span>
            <div className="p-3 rounded-lg border border-neutral-200/90 bg-white text-neutral-800 leading-relaxed font-mono text-[11px]">
              {ticket.description}
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg border border-neutral-200/80 bg-neutral-50/40">
            <div>
              <span className="text-[10px] font-medium text-neutral-400 uppercase block">
                {t.common.category}
              </span>
              <span className="font-medium text-neutral-800 mt-0.5 block">
                {ticket.category}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-medium text-neutral-400 uppercase block">
                {t.tickets.drawerScope}
              </span>
              <span className="font-medium text-neutral-800 mt-0.5 block">
                {ticket.impact}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-medium text-neutral-400 uppercase block">
                {t.common.assignee}
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                {ticket.assignee ? (
                  <>
                    <Avatar
                      src={ticket.assignee.avatar}
                      name={ticket.assignee.name}
                      size="xs"
                    />
                    <span className="font-medium text-neutral-800 truncate">
                      {ticket.assignee.name}
                    </span>
                  </>
                ) : (
                  <span className="text-neutral-400 italic">
                    {language === "id" ? "Belum ditugaskan" : "Unassigned"}
                  </span>
                )}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-medium text-neutral-400 uppercase block">
                {t.common.requester}
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <Avatar
                  src={ticket.requester.avatar}
                  name={ticket.requester.name}
                  size="xs"
                />
                <span className="font-medium text-neutral-800 truncate">
                  {ticket.requester.name}
                </span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1.5">
              {t.tickets.drawerTags}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {ticket.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 text-[11px] font-mono border border-neutral-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Internal Notes / Audit Feed */}
          <div className="space-y-2 pt-2 border-t border-neutral-100">
            <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="h-3 w-3" />
              <span>{t.tickets.drawerAuditLog}</span>
            </span>

            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {comments.map((comm, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded bg-neutral-50 border border-neutral-200/80 text-[11px] text-neutral-700"
                >
                  {comm}
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="flex gap-1.5 mt-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder={t.tickets.drawerAddNotePlaceholder}
                className="flex-1 h-8 rounded-md border border-neutral-200/90 px-2.5 text-xs focus:outline-none focus:border-blue-500"
              />
              <Button type="submit" size="sm" variant="secondary">
                <Send className="h-3 w-3" />
              </Button>
            </form>
          </div>

          {/* Quick Actions Footer */}
          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(false)}
            >
              {t.common.close}
            </Button>
            {ticket.status !== "resolved" && (
              <Button
                size="sm"
                onClick={handleResolve}
                className="gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{t.tickets.drawerResolveBtn}</span>
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
