"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Ticket,
  Laptop,
  Users,
  BarChart3,
  Bell,
  Settings,
  Plus,
  ShieldCheck,
  ChevronDown,
  Layers,
  Sparkles,
  Command,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CURRENT_USER } from "@/lib/mock-data";
import { Avatar } from "@/components/ui/avatar";
import { useLanguage } from "@/context/language-context";

interface NavItem {
  label: string;
  href: string;
  icon: any;
  badge?: string;
  badgeColor?: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

interface AppSidebarProps {
  onOpenCreateTicket: () => void;
  onOpenCommandMenu: () => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export function AppSidebar({
  onOpenCreateTicket,
  onOpenCommandMenu,
  isOpenMobile = false,
  onCloseMobile,
}: AppSidebarProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navGroups: NavGroup[] = [
    {
      title: t.nav.workspace,
      items: [
        {
          label: t.nav.dashboard,
          href: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          label: t.nav.ticketsQueue,
          href: "/tickets",
          icon: Ticket,
          badge: "18",
        },
        {
          label: t.nav.assetsFleet,
          href: "/assets",
          icon: Laptop,
        },
      ],
    },
    {
      title: t.nav.operations,
      items: [
        {
          label: t.nav.teamOnCall,
          href: "/team",
          icon: Users,
        },
        {
          label: t.nav.slaAnalytics,
          href: "/reports",
          icon: BarChart3,
        },
        {
          label: t.nav.alertsEvents,
          href: "/notifications",
          icon: Bell,
          badge: "2",
          badgeColor: "bg-blue-600 text-white",
        },
      ],
    },
    {
      title: t.nav.platform,
      items: [
        {
          label: t.nav.settingsSla,
          href: "/settings",
          icon: Settings,
        },
      ],
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white select-none">
      {/* Workspace Header */}
      <div className="p-3 border-b border-neutral-200/80">
        <div className="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="h-7 w-7 rounded-md bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
              <Layers className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-neutral-900 truncate tracking-tight">
                Acme Enterprise
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>US-East Prod (ITSM)</span>
              </div>
            </div>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-600 shrink-0 transition-transform" />
        </div>

        {/* Quick Action & Command Bar */}
        <div className="mt-2.5 flex items-center gap-1.5">
          <button
            onClick={onOpenCreateTicket}
            className="flex-1 flex items-center justify-center gap-1.5 h-7 px-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium transition-all shadow-subtle active:translate-y-[0.5px]"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>{t.nav.newTicket}</span>
          </button>
          <button
            onClick={onOpenCommandMenu}
            title="Open Command Palette (⌘K)"
            className="h-7 w-7 flex items-center justify-center rounded-md border border-neutral-200/90 hover:bg-neutral-50 text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            <Command className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4">
        {navGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            <div className="px-2.5 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
              {group.title}
            </div>
            <nav className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onCloseMobile}
                    className={cn(
                      "flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors group relative",
                      isActive
                        ? "bg-neutral-100/90 text-neutral-900 font-semibold"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0 transition-colors",
                          isActive
                            ? "text-blue-600"
                            : "text-neutral-400 group-hover:text-neutral-600"
                        )}
                      />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={cn(
                          "px-1.5 py-0.2 rounded-full text-[10px] font-mono font-medium",
                          item.badgeColor ||
                            "bg-neutral-100 text-neutral-600 border border-neutral-200"
                        )}
                      >
                        {item.badge}
                      </span>
                    )}

                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-blue-600 rounded-r-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* SLA Engine Status Badge */}
      <div className="px-3 py-2 border-t border-neutral-100 bg-neutral-50/50">
        <div className="p-2.5 rounded-lg border border-neutral-200/80 bg-white shadow-subtle flex items-start gap-2.5">
          <div className="p-1 rounded bg-blue-50 text-blue-600 shrink-0 mt-0.5">
            <ShieldCheck className="h-3.5 w-3.5" />
          </div>
          <div className="text-[11px] leading-tight">
            <div className="font-medium text-neutral-900 flex items-center gap-1">
              <span>{t.nav.slaActive}</span>
            </div>
            <p className="text-[10px] text-neutral-500 mt-0.5">
              {t.nav.slaTargetSub}
            </p>
          </div>
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="p-3 border-t border-neutral-200/80 bg-white">
        <Link
          href="/settings"
          onClick={onCloseMobile}
          className="flex items-center gap-2.5 p-1 rounded-md hover:bg-neutral-50 transition-colors group"
        >
          <Avatar
            src={CURRENT_USER.avatar}
            name={CURRENT_USER.name}
            size="sm"
            status="online"
          />
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold text-neutral-900 truncate">
              {CURRENT_USER.name}
            </div>
            <div className="text-[10px] text-neutral-500 truncate">
              {CURRENT_USER.role}
            </div>
          </div>
          <Sparkles className="h-3.5 w-3.5 text-neutral-400 group-hover:text-blue-600 shrink-0 transition-colors" />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (fixed width 240px) */}
      <aside className="hidden md:flex flex-col w-60 border-r border-neutral-200/80 bg-white shrink-0 h-screen sticky top-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative w-64 max-w-[80vw] bg-white h-full shadow-float z-10 flex flex-col">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
