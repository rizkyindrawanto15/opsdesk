import * as React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { KPIMetric } from "@/lib/types";
import { cn } from "@/lib/utils";

interface KPICardProps {
  metric: KPIMetric;
}

export function KPICard({ metric }: KPICardProps) {
  const isPositive =
    metric.deltaType === "increase-good" || metric.deltaType === "decrease-good";
  const isNeutral = metric.deltaType === "neutral";

  return (
    <Card className="hover:border-neutral-300 transition-all hover:shadow-card bg-white">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <span className="text-xs font-medium text-neutral-500 tracking-tight">
            {metric.label}
          </span>
          <div
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium border",
              isPositive
                ? "bg-emerald-50 text-emerald-700 border-emerald-200/80"
                : isNeutral
                ? "bg-neutral-100 text-neutral-600 border-neutral-200"
                : "bg-rose-50 text-rose-700 border-rose-200/80"
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : isNeutral ? (
              <Minus className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>{metric.delta}</span>
          </div>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-2xl font-bold tracking-tight text-neutral-900 tabular-nums">
            {metric.value}
          </span>
        </div>

        <p className="mt-1 text-[11px] text-neutral-400">
          {metric.subtext}
        </p>
      </CardContent>
    </Card>
  );
}
