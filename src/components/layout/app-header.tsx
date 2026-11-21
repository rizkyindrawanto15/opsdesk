"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  Bell,
  Plus,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/context/language-context";
import { MOCK_NOTIFICATIONS } from "@/lib/mock-data";

interface AppHeaderProps {
  onToggleMobileSidebar: () => void;
  onOpenCreateTicket: () => void;
  onOpenCommandMenu: () => void;
}

export function AppHeader({
  onToggleMobileSidebar,
  onOpenCreateTicket,
  onOpenCommandMenu,
}: AppHeaderProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  const getBreadcrumbTitle = (path: string) => {
    switch (path) {
      case "/dashboard":
        return { section: t.nav.workspace, page: t.nav.dashboard };
      case "/tickets":
        return { section: t.nav.workspace, page: t.nav.ticketsQueue };
      case "/assets":
        return { section: t.nav.workspace, page: t.nav.assetsFleet };
      case "/team":
        return { section: t.nav.operations, page: t.nav.teamOnCall };
      case "/reports":
        return { section: t.nav.operations, page: t.nav.slaAnalytics };
      case "/notifications":
        return { section: t.nav.operations, page: t.nav.alertsEvents };
      case "/settings":
        return { section: t.nav.platform, page: t.nav.settingsSla };
      default:
        return { section: t.nav.workspace, page: "Console" };
    }
  };

  const breadcrumb = getBreadcrumbTitle(pathname);

  return (
    <header className="h-14 border-b border-neutral-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileSidebar}
          className="md:hidden p-1.5 rounded-md hover:bg-neutral-100 text-neutral-600"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-neutral-400 font-medium hidden sm:inline">
            {breadcrumb.section}
          </span>
          <span className="text-neutral-300 hidden sm:inline">/</span>
          <span className="text-neutral-900 font-semibold tracking-tight">
            {breadcrumb.page}
          </span>
        </div>
      </div>

      {/* Right: Search, Language, Notifications & Actions */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Search Bar Trigger */}
        <button
          onClick={onOpenCommandMenu}
          className="flex items-center gap-2 h-8 px-3 rounded-md border border-neutral-200/90 bg-neutral-50/70 hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 text-xs transition-colors"
        >
          <Search className="h-3.5 w-3.5 text-neutral-400" />
          <span className="hidden sm:inline text-neutral-400">{t.nav.searchPlaceholder}</span>
          <span className="sm:hidden text-neutral-400">{t.nav.searchCmd}</span>
          <kbd className="hidden sm:inline-flex items-center rounded border border-neutral-200 bg-white px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">
            ⌘K
          </kbd>
        </button>

        {/* Language Switcher Pill */}
        <LanguageSwitcher />

        {/* Phase 1 Preview Mode Indicator */}
        <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-blue-200/70 bg-blue-50/60 text-[11px] text-blue-700 font-medium">
          <Sparkles className="h-3 w-3 text-blue-600" />
          <span>{t.nav.previewBadge}</span>
        </div>

        {/* Notifications Popover Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative h-8 w-8 flex items-center justify-center rounded-md border border-neutral-200/90 hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900 transition-colors"
            aria-label="View notifications"
          >
            <Bell className="h-4 w-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-blue-600 text-[9px] font-bold text-white flex items-center justify-center ring-2 ring-white">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Panel */}
          {notificationsOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setNotificationsOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl border border-neutral-200/90 bg-white shadow-float z-50 overflow-hidden animate-slide-down">
                <div className="flex items-center justify-between p-3 border-b border-neutral-100 bg-neutral-50/50">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-neutral-900">
                      {t.notifications.title}
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
                      {unreadCount} {t.nav.unread}
                    </span>
                  </div>
                  <Link
                    href="/notifications"
                    onClick={() => setNotificationsOpen(false)}
                    className="text-[11px] text-blue-600 hover:underline font-medium"
                  >
                    {t.nav.viewAll}
                  </Link>
                </div>

                <div className="divide-y divide-neutral-100 max-h-80 overflow-y-auto">
                  {MOCK_NOTIFICATIONS.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 text-xs transition-colors hover:bg-neutral-50/80 ${
                        !item.read ? "bg-blue-50/20" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-medium text-neutral-900 text-[11px]">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-neutral-400 shrink-0">
                          {item.timestamp}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 mt-0.5 line-clamp-2">
                        {item.message}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-2 border-t border-neutral-100 bg-neutral-50/50 flex items-center justify-between text-[11px]">
                  <button
                    onClick={() => setNotificationsOpen(false)}
                    className="text-neutral-500 hover:text-neutral-800"
                  >
                    {t.nav.markAllRead}
                  </button>
                  <Link
                    href="/settings"
                    onClick={() => setNotificationsOpen(false)}
                    className="text-neutral-500 hover:text-neutral-800"
                  >
                    {t.nav.preferences}
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Create Ticket Quick Button */}
        <Button
          size="sm"
          onClick={onOpenCreateTicket}
          className="gap-1.5 h-8 hidden sm:inline-flex"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>{t.nav.newTicket}</span>
        </Button>

        {/* Link back to Public Landing Page */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 px-2 py-1 rounded hover:bg-neutral-100 transition-colors"
          title="Return to Public Landing Page"
        >
          <span className="hidden sm:inline">{t.nav.landing}</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}
