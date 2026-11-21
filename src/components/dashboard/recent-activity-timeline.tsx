"use client";

import * as React from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ShieldAlert,
  UserCheck,
  MessageSquare,
  HardDrive,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MOCK_ACTIVITIES } from "@/lib/mock-data";
import { formatTimeAgo } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export function RecentActivityTimeline() {
  const { t } = useLanguage();

  const getEventIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return <UserCheck className="h-3 w-3 text-blue-600" />;
      case "sla_alert":
        return <ShieldAlert className="h-3 w-3 text-rose-600" />;
      case "comment":
        return <MessageSquare className="h-3 w-3 text-amber-600" />;
      case "asset_link":
        return <HardDrive className="h-3 w-3 text-purple-600" />;
      default:
        return <Activity className="h-3 w-3 text-neutral-500" />;
    }
  };

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>{t.dashboard.streamTitle}</CardTitle>
          <CardDescription>
            {t.dashboard.streamDesc}
          </CardDescription>
        </div>
        <Link
          href="/notifications"
          className="text-xs text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-1 font-medium hover:underline"
        >
          <span>{t.dashboard.allLogs}</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-neutral-200">
          {MOCK_ACTIVITIES.map((item) => (
            <div key={item.id} className="relative group text-xs">
              {/* Timeline marker */}
              <div className="absolute -left-6 top-1 h-4 w-4 rounded-full border border-neutral-200 bg-white flex items-center justify-center shadow-xs">
                {getEventIcon(item.type)}
              </div>

              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-semibold text-neutral-900">
                      {item.actor.name}
                    </span>
                    <span className="text-neutral-500">{item.action}</span>
                    <Link
                      href="/tickets"
                      className="font-mono font-medium text-blue-600 hover:underline"
                    >
                      {item.targetKey}
                    </Link>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono shrink-0">
                    {formatTimeAgo(item.timestamp)}
                  </span>
                </div>

                {item.details && (
                  <p className="mt-1 text-[11px] text-neutral-600 bg-neutral-50/70 p-2 rounded border border-neutral-100">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
