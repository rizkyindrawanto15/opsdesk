"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  LayoutDashboard,
  Ticket,
  Laptop,
  Users,
  BarChart3,
  Bell,
  Settings,
  PlusCircle,
  FileText,
  X,
} from "lucide-react";
import { MOCK_TICKETS } from "@/lib/mock-data";
import { useLanguage } from "@/context/language-context";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenCreateTicket: () => void;
}

export function CommandMenu({
  open,
  onOpenChange,
  onOpenCreateTicket,
}: CommandMenuProps) {
  const router = useRouter();
  const { t, language } = useLanguage();
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  const filteredTickets = MOCK_TICKETS.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.key.toLowerCase().includes(query.toLowerCase()) ||
      t.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 4);

  const navigationItems = [
    { label: t.nav.dashboard, href: "/dashboard", icon: LayoutDashboard },
    { label: t.nav.ticketsQueue, href: "/tickets", icon: Ticket },
    { label: t.nav.assetsFleet, href: "/assets", icon: Laptop },
    { label: t.nav.teamOnCall, href: "/team", icon: Users },
    { label: t.nav.slaAnalytics, href: "/reports", icon: BarChart3 },
    { label: t.nav.alertsEvents, href: "/notifications", icon: Bell },
    { label: t.nav.settingsSla, href: "/settings", icon: Settings },
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  const handleNavigate = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40 backdrop-blur-xs p-4 animate-fade-in">
      <div
        className="w-full max-w-xl rounded-xl border border-neutral-200/90 bg-white shadow-float overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-neutral-200/80 px-4 py-3">
          <Search className="h-4 w-4 text-neutral-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              language === "id"
                ? "Ketik perintah atau cari tiket, aset, halaman..."
                : "Type a command or search tickets, assets, pages..."
            }
            className="w-full text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none bg-transparent"
            autoFocus
          />
          <button
            onClick={() => onOpenChange(false)}
            className="text-neutral-400 hover:text-neutral-700 p-1 rounded"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-neutral-100 text-xs">
          {/* Quick Actions */}
          <div className="pb-2">
            <div className="px-3 py-1.5 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
              {t.common.quickActions}
            </div>
            <button
              onClick={() => {
                onOpenChange(false);
                onOpenCreateTicket();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 transition-colors text-left"
            >
              <PlusCircle className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="font-medium">{t.common.createTicketTitle}</span>
              <span className="ml-auto text-[10px] text-neutral-400 font-mono">
                ⌘N
              </span>
            </button>
          </div>

          {/* Navigation */}
          {navigationItems.length > 0 && (
            <div className="py-2">
              <div className="px-3 py-1.5 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                {t.common.appNav}
              </div>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavigate(item.href)}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 transition-colors text-left"
                  >
                    <Icon className="h-4 w-4 text-neutral-500 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Matching Tickets */}
          {filteredTickets.length > 0 && (
            <div className="pt-2">
              <div className="px-3 py-1.5 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                {t.common.matchingTickets}
              </div>
              {filteredTickets.map((ticket) => (
                <button
                  key={ticket.id}
                  onClick={() => handleNavigate("/tickets")}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-neutral-50 text-left transition-colors"
                >
                  <div className="flex items-center gap-2 overflow-hidden pr-2">
                    <FileText className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                    <span className="font-mono text-[11px] text-blue-600 font-medium shrink-0">
                      {ticket.key}
                    </span>
                    <span className="text-neutral-800 truncate text-[11px]">
                      {ticket.title}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 shrink-0 font-medium">
                    {ticket.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-neutral-100 bg-neutral-50/70 px-4 py-2 flex items-center justify-between text-[11px] text-neutral-400">
          <span>{t.common.navHint}</span>
          <span className="font-mono">{t.common.escHint}</span>
        </div>
      </div>
    </div>
  );
}
