"use client";

import * as React from "react";

export interface ResponsiveContainerProps {
  width?: string | number;
  height?: string | number;
  children: React.ReactNode;
}

export function ResponsiveContainer({
  width = "100%",
  height = "100%",
  children,
}: ResponsiveContainerProps) {
  return (
    <div
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        position: "relative",
      }}
      className="w-full h-full"
    >
      {children}
    </div>
  );
}

export function CartesianGrid({
  stroke = "#F1F5F9",
  strokeDasharray = "3 3",
}: {
  stroke?: string;
  strokeDasharray?: string;
  vertical?: boolean;
}) {
  return null;
}

export function XAxis({
  dataKey,
  stroke = "#94A3B8",
  fontSize = 11,
}: {
  dataKey: string;
  stroke?: string;
  fontSize?: number;
  tickLine?: boolean;
  axisLine?: boolean;
}) {
  return null;
}

export function YAxis({
  stroke = "#94A3B8",
  fontSize = 11,
}: {
  stroke?: string;
  fontSize?: number;
  tickLine?: boolean;
  axisLine?: boolean;
}) {
  return null;
}

export function Tooltip({
  content,
}: {
  content?: React.ReactNode | ((props: any) => React.ReactNode);
}) {
  return null;
}

export function Area({
  type,
  dataKey,
  stroke,
  strokeWidth = 2,
  fill,
  fillOpacity,
}: {
  type?: string;
  dataKey: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: number;
}) {
  return null;
}

export function Bar({
  dataKey,
  fill,
  radius,
  name,
}: {
  dataKey: string;
  fill?: string;
  radius?: number[];
  name?: string;
}) {
  return null;
}

export interface AreaChartProps {
  data: any[];
  margin?: { top?: number; right?: number; bottom?: number; left?: number };
  children: React.ReactNode;
}

export function AreaChart({ data, margin, children }: AreaChartProps) {
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  if (!data || data.length === 0) return null;

  // Extract Area elements from children
  const areas: any[] = [];
  let tooltipContent: any = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as any;
      if ((child.type as any).name === "Area" || childProps.dataKey) {
        areas.push(childProps);
      }
      if ((child.type as any).name === "Tooltip") {
        tooltipContent = childProps.content;
      }
    }
  });

  const width = 600;
  const height = 220;
  const paddingLeft = 30;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  // Compute max value
  const allValues = data.flatMap((d) =>
    areas.map((a) => Number(d[a.dataKey]) || 0)
  );
  const maxValue = Math.max(...allValues, 10);

  const getX = (index: number) => {
    if (data.length <= 1) return paddingLeft;
    return paddingLeft + (index / (data.length - 1)) * chartWidth;
  };

  const getY = (value: number) => {
    return paddingTop + chartHeight - (value / maxValue) * chartHeight;
  };

  // Build SVG paths for areas
  const createPath = (dataKey: string) => {
    return data
      .map((d, i) => {
        const x = getX(i);
        const y = getY(Number(d[dataKey]) || 0);
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  const createClosedPath = (dataKey: string) => {
    const linePath = createPath(dataKey);
    const lastX = getX(data.length - 1);
    const firstX = getX(0);
    const bottomY = paddingTop + chartHeight;
    return `${linePath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`;
  };

  const activeItem = hoverIndex !== null ? data[hoverIndex] : null;

  return (
    <div
      className="relative w-full h-full select-none"
      onMouseLeave={() => setHoverIndex(null)}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="gradient-created" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="gradient-resolved" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Horizontal gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
          const y = paddingTop + chartHeight * pct;
          const val = Math.round(maxValue * (1 - pct));
          return (
            <g key={i}>
              <line
                x1={paddingLeft}
                y1={y}
                x2={width - paddingRight}
                y2={y}
                stroke="#F1F5F9"
                strokeDasharray="3 3"
              />
              <text
                x={paddingLeft - 8}
                y={y + 3}
                fill="#94A3B8"
                fontSize={10}
                textAnchor="end"
                className="font-mono"
              >
                {val}
              </text>
            </g>
          );
        })}

        {/* Fills */}
        {areas.map((a, i) => (
          <path
            key={`fill-${a.dataKey}`}
            d={createClosedPath(a.dataKey)}
            fill={i === 0 ? "url(#gradient-created)" : "url(#gradient-resolved)"}
          />
        ))}

        {/* Lines */}
        {areas.map((a) => (
          <path
            key={`line-${a.dataKey}`}
            d={createPath(a.dataKey)}
            fill="none"
            stroke={a.stroke || "#2563EB"}
            strokeWidth={a.strokeWidth || 2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* X Axis Labels & Hover Trigger Zones */}
        {data.map((d, i) => {
          const x = getX(i);
          return (
            <g
              key={i}
              className="cursor-pointer"
              onMouseEnter={() => setHoverIndex(i)}
            >
              <rect
                x={x - chartWidth / (data.length * 2)}
                y={paddingTop}
                width={chartWidth / data.length}
                height={chartHeight}
                fill="transparent"
              />
              <text
                x={x}
                y={height - 8}
                fill={hoverIndex === i ? "#0F172A" : "#94A3B8"}
                fontSize={11}
                fontWeight={hoverIndex === i ? "600" : "400"}
                textAnchor="middle"
              >
                {d.date || d.label || d.name}
              </text>

              {/* Hover Dot Marker */}
              {hoverIndex === i && (
                <>
                  <line
                    x1={x}
                    y1={paddingTop}
                    x2={x}
                    y2={paddingTop + chartHeight}
                    stroke="#94A3B8"
                    strokeDasharray="2 2"
                  />
                  {areas.map((a) => {
                    const y = getY(Number(d[a.dataKey]) || 0);
                    return (
                      <circle
                        key={a.dataKey}
                        cx={x}
                        cy={y}
                        r={4}
                        fill={a.stroke || "#2563EB"}
                        stroke="#FFFFFF"
                        strokeWidth={2}
                      />
                    );
                  })}
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* Floating Tooltip */}
      {hoverIndex !== null && activeItem && (
        <div
          className="absolute pointer-events-none z-30 transition-all duration-75"
          style={{
            left: `${(getX(hoverIndex) / width) * 100}%`,
            top: "20%",
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltipContent && typeof tooltipContent === "function" ? (
            tooltipContent({
              active: true,
              label: activeItem.date || activeItem.label || activeItem.name,
              payload: areas.map((a) => ({
                dataKey: a.dataKey,
                value: activeItem[a.dataKey],
              })),
            })
          ) : (
            <div className="rounded-lg border border-neutral-200 bg-white p-2.5 shadow-float text-xs">
              <span className="font-semibold text-neutral-900 block">
                {activeItem.date}
              </span>
              {areas.map((a) => (
                <div
                  key={a.dataKey}
                  className="flex items-center gap-2 text-neutral-600 mt-1"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: a.stroke || "#2563EB" }}
                  />
                  <span className="capitalize">{a.dataKey}:</span>
                  <span className="font-semibold text-neutral-900">
                    {activeItem[a.dataKey]}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export interface BarChartProps {
  data: any[];
  margin?: { top?: number; right?: number; bottom?: number; left?: number };
  children: React.ReactNode;
}

export function BarChart({ data, margin, children }: BarChartProps) {
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const bars: any[] = [];
  let tooltipContent: any = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as any;
      if ((child.type as any).name === "Bar" || childProps.dataKey) {
        bars.push(childProps);
      }
      if ((child.type as any).name === "Tooltip") {
        tooltipContent = childProps.content;
      }
    }
  });

  const width = 600;
  const height = 220;
  const paddingLeft = 30;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const allValues = data.flatMap((d) =>
    bars.map((b) => Number(d[b.dataKey]) || 0)
  );
  const maxValue = Math.max(...allValues, 10);

  const groupWidth = chartWidth / data.length;
  const barWidth = Math.min(16, (groupWidth * 0.7) / Math.max(bars.length, 1));

  const getY = (value: number) => {
    return paddingTop + chartHeight - (value / maxValue) * chartHeight;
  };

  const activeItem = hoverIndex !== null ? data[hoverIndex] : null;

  return (
    <div
      className="relative w-full h-full select-none"
      onMouseLeave={() => setHoverIndex(null)}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full overflow-visible"
      >
        {/* Horizontal gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
          const y = paddingTop + chartHeight * pct;
          const val = Math.round(maxValue * (1 - pct));
          return (
            <g key={i}>
              <line
                x1={paddingLeft}
                y1={y}
                x2={width - paddingRight}
                y2={y}
                stroke="#F1F5F9"
                strokeDasharray="3 3"
              />
              <text
                x={paddingLeft - 8}
                y={y + 3}
                fill="#94A3B8"
                fontSize={10}
                textAnchor="end"
                className="font-mono"
              >
                {val}h
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((d, groupIdx) => {
          const groupCenter =
            paddingLeft + groupIdx * groupWidth + groupWidth / 2;
          const startX = groupCenter - (bars.length * barWidth) / 2;

          return (
            <g
              key={groupIdx}
              className="cursor-pointer"
              onMouseEnter={() => setHoverIndex(groupIdx)}
            >
              {/* Hit area */}
              <rect
                x={paddingLeft + groupIdx * groupWidth}
                y={paddingTop}
                width={groupWidth}
                height={chartHeight}
                fill="transparent"
              />

              {/* Bars in group */}
              {bars.map((b, bIdx) => {
                const val = Number(d[b.dataKey]) || 0;
                const barH = (val / maxValue) * chartHeight;
                const barY = paddingTop + chartHeight - barH;
                const barX = startX + bIdx * barWidth;

                return (
                  <rect
                    key={b.dataKey}
                    x={barX}
                    y={barY}
                    width={barWidth - 2}
                    height={Math.max(barH, 2)}
                    fill={b.fill || "#2563EB"}
                    rx={3}
                    className="transition-all"
                    opacity={hoverIndex === null || hoverIndex === groupIdx ? 1 : 0.6}
                  />
                );
              })}

              {/* X Axis Label */}
              <text
                x={groupCenter}
                y={height - 8}
                fill={hoverIndex === groupIdx ? "#0F172A" : "#94A3B8"}
                fontSize={11}
                fontWeight={hoverIndex === groupIdx ? "600" : "400"}
                textAnchor="middle"
              >
                {d.tier || d.label || d.category || d.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoverIndex !== null && activeItem && (
        <div
          className="absolute pointer-events-none z-30 transition-all duration-75"
          style={{
            left: `${
              ((paddingLeft +
                hoverIndex * groupWidth +
                groupWidth / 2) /
                width) *
              100
            }%`,
            top: "15%",
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltipContent && typeof tooltipContent === "function" ? (
            tooltipContent({
              active: true,
              label:
                activeItem.tier ||
                activeItem.label ||
                activeItem.category ||
                activeItem.name,
              payload: bars.map((b) => ({
                dataKey: b.dataKey,
                value: activeItem[b.dataKey],
              })),
            })
          ) : (
            <div className="rounded-lg border border-neutral-200 bg-white p-2.5 shadow-float text-xs">
              <span className="font-semibold text-neutral-900 block">
                {activeItem.tier}
              </span>
              {bars.map((b) => (
                <div
                  key={b.dataKey}
                  className="flex items-center gap-2 text-neutral-600 mt-1"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: b.fill || "#2563EB" }}
                  />
                  <span>{b.dataKey}:</span>
                  <span className="font-semibold text-neutral-900">
                    {activeItem[b.dataKey]}h
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
