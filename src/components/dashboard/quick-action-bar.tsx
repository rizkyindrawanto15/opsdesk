"use client";

import * as React from "react";
import Link from "next/link";
import { Plus, Laptop, UserPlus, FileSpreadsheet, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

interface QuickActionBarProps {
  onOpenCreateTicket: () => void;
}

export function QuickActionBar({ onOpenCreateTicket }: QuickActionBarProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        onClick={onOpenCreateTicket}
        size="sm"
        className="gap-1.5 shadow-subtle"
      >
        <Plus className="h-3.5 w-3.5" />
        <span>{t.dashboard.newIncidentBtn}</span>
      </Button>

      <Button variant="outline" size="sm" asChild>
        <Link href="/assets" className="gap-1.5">
          <Laptop className="h-3.5 w-3.5 text-neutral-500" />
          <span>{t.dashboard.provisionAssetBtn}</span>
        </Link>
      </Button>

      <Button variant="outline" size="sm" asChild>
        <Link href="/team" className="gap-1.5">
          <UserPlus className="h-3.5 w-3.5 text-neutral-500" />
          <span>{t.dashboard.onCallBtn}</span>
        </Link>
      </Button>

      <Button variant="outline" size="sm" asChild>
        <Link href="/reports" className="gap-1.5">
          <FileSpreadsheet className="h-3.5 w-3.5 text-neutral-500" />
          <span>{t.dashboard.exportAuditBtn}</span>
        </Link>
      </Button>
    </div>
  );
}
