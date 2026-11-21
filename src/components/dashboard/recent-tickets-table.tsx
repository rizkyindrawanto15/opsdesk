"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { StatusPill } from "@/components/ui/status-pill";
import { Avatar } from "@/components/ui/avatar";
import { Ticket } from "@/lib/types";
import { TicketDetailDrawer } from "./ticket-detail-drawer";
import { formatTimeAgo } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface RecentTicketsTableProps {
  tickets: Ticket[];
  onTicketStatusChange?: (ticketId: string, newStatus: Ticket["status"]) => void;
}

export function RecentTicketsTable({
  tickets,
  onTicketStatusChange,
}: RecentTicketsTableProps) {
  const { t, language } = useLanguage();
  const [selectedTicket, setSelectedTicket] = React.useState<Ticket | null>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleRowClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setDrawerOpen(true);
  };

  return (
    <>
      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>{t.dashboard.recentQueueTitle}</CardTitle>
            <CardDescription>
              {t.dashboard.recentQueueDesc}
            </CardDescription>
          </div>
          <Link
            href="/tickets"
            className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>{t.dashboard.viewAllQueue}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[90px]">{t.tickets.colKey}</TableHead>
                <TableHead>{t.tickets.colSummary}</TableHead>
                <TableHead className="w-[100px]">{t.tickets.colPriority}</TableHead>
                <TableHead className="w-[110px]">{t.tickets.colStatus}</TableHead>
                <TableHead className="w-[130px]">{t.tickets.colAssignee}</TableHead>
                <TableHead className="w-[100px] text-right">{language === "id" ? "Waktu" : "Age"}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-neutral-400">
                    {language === "id"
                      ? "Tidak ada insiden aktif dalam antrean ini."
                      : "No active incidents in this queue view."}
                  </TableCell>
                </TableRow>
              ) : (
                tickets.slice(0, 6).map((ticket) => (
                  <TableRow
                    key={ticket.id}
                    onClick={() => handleRowClick(ticket)}
                    className="group"
                  >
                    <TableCell className="font-mono text-xs font-semibold text-blue-600 group-hover:underline">
                      {ticket.key}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-neutral-900 truncate max-w-xs sm:max-w-md">
                        {ticket.title}
                      </div>
                      <div className="text-[10px] text-neutral-400 flex items-center gap-2 mt-0.5">
                        <span>{ticket.category}</span>
                        <span>•</span>
                        <span>{ticket.impact} {language === "id" ? "Dampak" : "Impact"}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusPill type="priority" value={ticket.priority} />
                    </TableCell>
                    <TableCell>
                      <StatusPill type="status" value={ticket.status} />
                    </TableCell>
                    <TableCell>
                      {ticket.assignee ? (
                        <div className="flex items-center gap-2">
                          <Avatar
                            src={ticket.assignee.avatar}
                            name={ticket.assignee.name}
                            size="xs"
                          />
                          <span className="text-xs text-neutral-700 truncate font-medium">
                            {ticket.assignee.name.split(" ")[0]}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[11px] text-neutral-400 italic">
                          {language === "id" ? "Belum ditugaskan" : "Unassigned"}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right text-[11px] text-neutral-400 tabular-nums font-mono">
                      {formatTimeAgo(ticket.createdAt)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <TicketDetailDrawer
        ticket={selectedTicket}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        onTicketStatusChange={onTicketStatusChange}
      />
    </>
  );
}
