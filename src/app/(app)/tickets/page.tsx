"use client";

import * as React from "react";
import {
  Search,
  Plus,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
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
import { TicketDetailDrawer } from "@/components/dashboard/ticket-detail-drawer";
import { QuickCreateModal } from "@/components/layout/quick-create-modal";
import { MOCK_TICKETS } from "@/lib/mock-data";
import { Ticket } from "@/lib/types";
import { formatTimeAgo } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export default function TicketsPage() {
  const { t } = useLanguage();
  const [tickets, setTickets] = React.useState<Ticket[]>(MOCK_TICKETS);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [priorityFilter, setPriorityFilter] = React.useState<string>("all");
  const [selectedTicket, setSelectedTicket] = React.useState<Ticket | null>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [createModalOpen, setCreateModalOpen] = React.useState(false);

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.requester.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ? true : ticket.status === statusFilter;

    const matchesPriority =
      priorityFilter === "all" ? true : ticket.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleTicketStatusChange = (
    ticketId: string,
    newStatus: Ticket["status"]
  ) => {
    setTickets((prev) =>
      prev.map((tkt) => (tkt.id === ticketId ? { ...tkt, status: newStatus } : tkt))
    );
  };

  const handleTicketCreated = (newTicket: Ticket) => {
    setTickets((prev) => [newTicket, ...prev]);
  };

  const statusCounts = {
    all: tickets.length,
    open: tickets.filter((tkt) => tkt.status === "open").length,
    in_progress: tickets.filter((tkt) => tkt.status === "in_progress").length,
    pending: tickets.filter((tkt) => tkt.status === "pending").length,
    resolved: tickets.filter((tkt) => tkt.status === "resolved").length,
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-neutral-200/80">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
            {t.tickets.title}
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            {t.tickets.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setCreateModalOpen(true)}
            size="sm"
            className="gap-1.5"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>{t.tickets.createBtn}</span>
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-3 rounded-lg border border-neutral-200/90 shadow-subtle">
        {/* Status Tab Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
          {[
            { id: "all", label: t.tickets.allTab, count: statusCounts.all },
            { id: "open", label: t.tickets.openTab, count: statusCounts.open },
            { id: "in_progress", label: t.tickets.progressTab, count: statusCounts.in_progress },
            { id: "pending", label: t.tickets.pendingTab, count: statusCounts.pending },
            { id: "resolved", label: t.tickets.resolvedTab, count: statusCounts.resolved },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 shrink-0 ${
                statusFilter === tab.id
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1 rounded-full font-mono ${
                  statusFilter === tab.id
                    ? "bg-neutral-700 text-neutral-200"
                    : "bg-neutral-200 text-neutral-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search & Priority Controls */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 md:w-56">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.tickets.searchPlaceholder}
              className="pl-8 h-8"
            />
          </div>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="h-8 rounded-md border border-neutral-200/90 bg-white px-2.5 text-xs text-neutral-700 focus:outline-none focus:border-blue-500"
          >
            <option value="all">{t.tickets.allPriorities}</option>
            <option value="urgent">{t.tickets.p1Urgent}</option>
            <option value="high">{t.tickets.p2High}</option>
            <option value="medium">{t.tickets.p3Medium}</option>
            <option value="low">{t.tickets.p4Low}</option>
          </select>
        </div>
      </div>

      {/* Main Table Card */}
      <Card className="bg-white">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">{t.tickets.colKey}</TableHead>
                <TableHead>{t.tickets.colSummary}</TableHead>
                <TableHead className="w-[100px]">{t.tickets.colPriority}</TableHead>
                <TableHead className="w-[110px]">{t.tickets.colStatus}</TableHead>
                <TableHead className="w-[130px]">{t.tickets.colSla}</TableHead>
                <TableHead className="w-[150px]">{t.tickets.colAssignee}</TableHead>
                <TableHead className="w-[110px] text-right">{t.tickets.colCreated}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTickets.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-12">
                    <div className="flex flex-col items-center justify-center text-neutral-400 text-xs">
                      <AlertCircle className="h-6 w-6 text-neutral-300 mb-1" />
                      <p className="font-medium text-neutral-600">{t.tickets.emptyTitle}</p>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        {t.tickets.emptyDesc}
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredTickets.map((ticket) => (
                  <TableRow
                    key={ticket.id}
                    onClick={() => {
                      setSelectedTicket(ticket);
                      setDrawerOpen(true);
                    }}
                    className="group"
                  >
                    <TableCell className="font-mono text-xs font-semibold text-blue-600 group-hover:underline">
                      {ticket.key}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-neutral-900 truncate max-w-sm sm:max-w-md">
                        {ticket.title}
                      </div>
                      <div className="text-[10px] text-neutral-400 flex items-center gap-1.5 mt-0.5">
                        <span className="font-medium text-neutral-500">{ticket.category}</span>
                        <span>•</span>
                        <span>{t.common.requester}: {ticket.requester.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusPill type="priority" value={ticket.priority} />
                    </TableCell>
                    <TableCell>
                      <StatusPill type="status" value={ticket.status} />
                    </TableCell>
                    <TableCell>
                      <StatusPill type="sla" value={ticket.slaStatus} />
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
                            {ticket.assignee.name}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[11px] text-neutral-400 italic">
                          Unassigned
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

      {/* Pagination & Summary Footer */}
      <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
        <span>
          {t.tickets.paginationShowing}{" "}
          <span className="font-semibold text-neutral-900">{filteredTickets.length}</span>{" "}
          {t.tickets.paginationOf}{" "}
          <span className="font-semibold text-neutral-900">{tickets.length}</span>{" "}
          {t.tickets.paginationTickets}
        </span>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>

      {/* Detail Drawer & Create Modal */}
      <TicketDetailDrawer
        ticket={selectedTicket}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        onTicketStatusChange={handleTicketStatusChange}
      />

      <QuickCreateModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        onTicketCreated={handleTicketCreated}
      />
    </div>
  );
}
