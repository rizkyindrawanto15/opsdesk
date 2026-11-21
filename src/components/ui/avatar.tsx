import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  name: string;
  size?: "xs" | "sm" | "md" | "lg";
  status?: "online" | "in_meeting" | "away" | "offline";
}

export function Avatar({
  src,
  name,
  size = "sm",
  status,
  className,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);

  const sizeClasses = {
    xs: "h-5 w-5 text-[9px]",
    sm: "h-6 w-6 text-[10px]",
    md: "h-8 w-8 text-xs",
    lg: "h-10 w-10 text-sm",
  };

  const statusDotSizes = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3",
  };

  const statusColors = {
    online: "bg-emerald-500 ring-white",
    in_meeting: "bg-amber-500 ring-white",
    away: "bg-neutral-400 ring-white",
    offline: "bg-neutral-300 ring-white",
  };

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={cn("relative inline-flex shrink-0", className)} {...props}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full font-medium overflow-hidden border border-neutral-200/90 bg-neutral-100 text-neutral-700",
          sizeClasses[size]
        )}
      >
        {src && !imageError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={name}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{initials || "U"}</span>
        )}
      </div>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full ring-2",
            statusDotSizes[size],
            statusColors[status]
          )}
        />
      )}
    </div>
  );
}
