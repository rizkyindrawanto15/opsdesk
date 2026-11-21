"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MOCK_STATUS_DISTRIBUTION } from "@/lib/mock-data";

export function TicketStatusBreakdown() {
  const total = MOCK_STATUS_DISTRIBUTION.reduce((acc, item) => acc + item.value, 0);

  return (
    <Card className="bg-white">
      <CardHeader className="pb-2">
        <CardTitle>Status Breakdown</CardTitle>
        <CardDescription>
          Distribution across 196 active lifecycle states
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Multi-segment Progress Bar */}
        <div className="h-2.5 w-full rounded-full bg-neutral-100 flex overflow-hidden gap-0.5 mt-2">
          {MOCK_STATUS_DISTRIBUTION.map((item) => {
            const pct = (item.value / total) * 100;
            return (
              <div
                key={item.name}
                style={{ width: `${pct}%`, backgroundColor: item.color }}
                className="h-full first:rounded-l-full last:rounded-r-full transition-all"
                title={`${item.name}: ${item.value} (${pct.toFixed(1)}%)`}
              />
            );
          })}
        </div>

        {/* Legend & Breakdown Items */}
        <div className="mt-5 space-y-3">
          {MOCK_STATUS_DISTRIBUTION.map((item) => {
            const percentage = ((item.value / total) * 100).toFixed(1);
            return (
              <div
                key={item.name}
                className="flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-neutral-700 font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-neutral-400 text-[11px] tabular-nums">
                    {percentage}%
                  </span>
                  <span className="font-semibold text-neutral-900 tabular-nums w-8 text-right">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Health summary footer */}
        <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
          <span>Active Backlog Ratio</span>
          <span className="font-semibold text-neutral-900">27.5%</span>
        </div>
      </CardContent>
    </Card>
  );
}
