"use client";

import * as React from "react";
import { KPICard } from "@/components/dashboard/kpi-card";
import { TicketActivityChart } from "@/components/dashboard/activity-chart";
import { TicketStatusBreakdown } from "@/components/dashboard/ticket-status-breakdown";
import { RecentTicketsTable } from "@/components/dashboard/recent-tickets-table";
import { RecentActivityTimeline } from "@/components/dashboard/recent-activity-timeline";
import { QuickActionBar } from "@/components/dashboard/quick-action-bar";
import { QuickCreateModal } from "@/components/layout/quick-create-modal";
import {
  MOCK_KPIS,
  MOCK_TICKETS,
  CURRENT_USER,
} from "@/lib/mock-data";
import { Ticket } from "@/lib/types";
import { useLanguage } from "@/context/language-context";

export default function DashboardPage() {
  const { t, language } = useLanguage();
  const [tickets, setTickets] = React.useState<Ticket[]>(MOCK_TICKETS);
  const [createTicketOpen, setCreateTicketOpen] = React.useState(false);

  const handleTicketStatusChange = (
    ticketId: string,
    newStatus: Ticket["status"]
  ) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, status: newStatus } : t))
    );
  };

  const handleTicketCreated = (newTicket: Ticket) => {
    setTickets((prev) => [newTicket, ...prev]);
  };

  // Localized KPI data
  const localizedKPIs = React.useMemo(() => {
    return [
      {
        ...MOCK_KPIS[0],
        label: t.dashboard.slaTitle,
        subtext: language === "id" ? "Target: 98.5% di seluruh tingkat prioritas" : MOCK_KPIS[0].subtext,
      },
      {
        ...MOCK_KPIS[1],
        label: t.dashboard.mttrTitle,
        subtext: language === "id" ? "Turun dari 2 jam 00 mnt (30 hari terakhir)" : MOCK_KPIS[1].subtext,
      },
      {
        ...MOCK_KPIS[2],
        label: t.dashboard.backlogTitle,
        subtext: language === "id" ? "2 Genting, 5 Tinggi, 11 Normal" : MOCK_KPIS[2].subtext,
      },
      {
        ...MOCK_KPIS[3],
        label: t.dashboard.fcrTitle,
        subtext: language === "id" ? "Terselesaikan tanpa eskalasi bertingkat" : MOCK_KPIS[3].subtext,
      },
    ];
  }, [t, language]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Greeting & Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-neutral-200/80">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
              {t.dashboard.welcome}, {CURRENT_USER.name.split(" ")[0]}
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.dashboard.systemNormal}</span>
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-0.5">
            {t.dashboard.subtext}
          </p>
        </div>

        {/* Quick Action Bar */}
        <QuickActionBar onOpenCreateTicket={() => setCreateTicketOpen(true)} />
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {localizedKPIs.map((kpi) => (
          <KPICard key={kpi.id} metric={kpi} />
        ))}
      </div>

      {/* Charts Grid: 2/3 Activity + 1/3 Status Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <TicketActivityChart />
        </div>
        <div className="lg:col-span-1">
          <TicketStatusBreakdown />
        </div>
      </div>

      {/* Tables & Activity Grid: 2/3 Recent Tickets + 1/3 Live Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <RecentTicketsTable
            tickets={tickets}
            onTicketStatusChange={handleTicketStatusChange}
          />
        </div>
        <div className="lg:col-span-1">
          <RecentActivityTimeline />
        </div>
      </div>

      {/* Quick Create Ticket Modal */}
      <QuickCreateModal
        open={createTicketOpen}
        onOpenChange={setCreateTicketOpen}
        onTicketCreated={handleTicketCreated}
      />
    </div>
  );
}
