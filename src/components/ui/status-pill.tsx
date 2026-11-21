import * as React from "react";
import { cn } from "@/lib/utils";
import { TicketPriority, TicketStatus, SLAStatus, AssetStatus } from "@/lib/types";

interface StatusPillProps {
  type: "status" | "priority" | "sla" | "assetStatus";
  value: TicketStatus | TicketPriority | SLAStatus | AssetStatus | string;
  className?: string;
  showDot?: boolean;
}

export function StatusPill({
  type,
  value,
  className,
  showDot = true,
}: StatusPillProps) {
  let label = String(value);
  let styles = "bg-neutral-100 text-neutral-700 border-neutral-200";
  let dotColor = "#94a3b8";

  if (type === "status") {
    switch (value) {
      case "open":
        label = "Open";
        styles = "bg-blue-50 text-blue-700 border-blue-200/80";
        dotColor = "#3b82f6";
        break;
      case "in_progress":
        label = "In Progress";
        styles = "bg-amber-50 text-amber-800 border-amber-200/80";
        dotColor = "#f59e0b";
        break;
      case "pending":
        label = "Pending";
        styles = "bg-purple-50 text-purple-700 border-purple-200/80";
        dotColor = "#a855f7";
        break;
      case "resolved":
        label = "Resolved";
        styles = "bg-emerald-50 text-emerald-700 border-emerald-200/80";
        dotColor = "#10b981";
        break;
      case "closed":
        label = "Closed";
        styles = "bg-neutral-100 text-neutral-600 border-neutral-200";
        dotColor = "#64748b";
        break;
    }
  } else if (type === "priority") {
    switch (value) {
      case "urgent":
        label = "Urgent";
        styles = "bg-rose-50 text-rose-700 border-rose-200/80";
        dotColor = "#f43f5e";
        break;
      case "high":
        label = "High";
        styles = "bg-amber-50 text-amber-800 border-amber-200/80";
        dotColor = "#f59e0b";
        break;
      case "medium":
        label = "Medium";
        styles = "bg-blue-50 text-blue-700 border-blue-200/80";
        dotColor = "#3b82f6";
        break;
      case "low":
        label = "Low";
        styles = "bg-slate-50 text-slate-700 border-slate-200";
        dotColor = "#64748b";
        break;
    }
  } else if (type === "sla") {
    switch (value) {
      case "healthy":
        label = "SLA Target Met";
        styles = "bg-emerald-50 text-emerald-700 border-emerald-200/80";
        dotColor = "#10b981";
        break;
      case "warning":
        label = "SLA Risk (<2h)";
        styles = "bg-amber-50 text-amber-800 border-amber-200/80";
        dotColor = "#f59e0b";
        break;
      case "breached":
        label = "SLA Breached";
        styles = "bg-rose-50 text-rose-700 border-rose-200/80";
        dotColor = "#f43f5e";
        break;
    }
  } else if (type === "assetStatus") {
    switch (value) {
      case "active":
        label = "Active In Use";
        styles = "bg-emerald-50 text-emerald-700 border-emerald-200/80";
        dotColor = "#10b981";
        break;
      case "in_stock":
        label = "In Depot Stock";
        styles = "bg-blue-50 text-blue-700 border-blue-200/80";
        dotColor = "#3b82f6";
        break;
      case "maintenance":
        label = "Under Repair";
        styles = "bg-amber-50 text-amber-800 border-amber-200/80";
        dotColor = "#f59e0b";
        break;
      case "retired":
        label = "Decommissioned";
        styles = "bg-neutral-100 text-neutral-600 border-neutral-200";
        dotColor = "#94a3b8";
        break;
    }
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium border tracking-tight",
        styles,
        className
      )}
    >
      {showDot && (
        <span
          className="h-1.5 w-1.5 rounded-full shrink-0"
          style={{ backgroundColor: dotColor }}
        />
      )}
      <span>{label}</span>
    </span>
  );
}
