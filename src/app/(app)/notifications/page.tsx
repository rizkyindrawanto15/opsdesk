"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  Bell,
  CheckCheck,
  ShieldAlert,
  UserCheck,
  HardDrive,
  Info,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MOCK_NOTIFICATIONS } from "@/lib/mock-data";
import { NotificationItem } from "@/lib/types";
import { useLanguage } from "@/context/language-context";

export default function NotificationsPage() {
  const { t, language } = useLanguage();
  const [notifications, setNotifications] = React.useState<NotificationItem[]>(
    MOCK_NOTIFICATIONS
  );
  const [activeTab, setActiveTab] = React.useState<string>("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    toast.success(
      language === "id"
        ? "Semua notifikasi ditandai sebagai telah dibaca"
        : "All notifications marked as read"
    );
  };

  const handleToggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const filteredNotifications = notifications.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "sla") return item.type === "sla";
    if (activeTab === "assignment") return item.type === "assignment";
    if (activeTab === "system") return item.type === "system" || item.type === "asset";
    return true;
  });

  const getNotificationIcon = (type: string, severity: string) => {
    if (type === "sla") {
      return (
        <div className="h-8 w-8 rounded-lg bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-600 shrink-0">
          <ShieldAlert className="h-4 w-4" />
        </div>
      );
    }
    if (type === "assignment") {
      return (
        <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
          <UserCheck className="h-4 w-4" />
        </div>
      );
    }
    if (type === "asset") {
      return (
        <div className="h-8 w-8 rounded-lg bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600 shrink-0">
          <HardDrive className="h-4 w-4" />
        </div>
      );
    }
    return (
      <div className="h-8 w-8 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 shrink-0">
        <Info className="h-4 w-4" />
      </div>
    );
  };

  return (
    <div className="space-y-5 animate-fade-in max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-neutral-200/80">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
            {t.notifications.title}
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            {t.notifications.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <Button
              onClick={handleMarkAllRead}
              variant="outline"
              size="sm"
              className="gap-1.5"
            >
              <CheckCheck className="h-3.5 w-3.5" />
              <span>{t.notifications.markAllBtn}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 border-b border-neutral-200/80 pb-2">
        {[
          { id: "all", label: t.notifications.tabAll },
          { id: "sla", label: t.notifications.tabSla },
          { id: "assignment", label: t.notifications.tabAssign },
          { id: "system", label: t.notifications.tabSystem },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-neutral-900 text-white"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-2.5">
        {filteredNotifications.length === 0 ? (
          <Card className="bg-white p-8 text-center">
            <Bell className="h-6 w-6 text-neutral-300 mx-auto mb-2" />
            <p className="text-xs font-medium text-neutral-600">{t.notifications.emptyTitle}</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              {t.notifications.emptyDesc}
            </p>
          </Card>
        ) : (
          filteredNotifications.map((item) => (
            <Card
              key={item.id}
              className={`bg-white transition-all hover:border-neutral-300 ${
                !item.read ? "border-l-4 border-l-blue-600" : ""
              }`}
            >
              <CardContent className="p-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  {getNotificationIcon(item.type, item.severity)}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-neutral-900">
                        {item.title}
                      </span>
                      {!item.read && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                      )}
                      <span className="text-[10px] text-neutral-400 font-mono">
                        {item.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {item.link && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={item.link} className="gap-1 text-xs text-blue-600">
                        <span>{t.common.inspect}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                  <button
                    onClick={() => handleToggleRead(item.id)}
                    className="text-[11px] text-neutral-400 hover:text-neutral-700 px-2 py-1"
                  >
                    {item.read ? t.common.markUnread : t.common.markRead}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
