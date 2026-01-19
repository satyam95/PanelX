import { ArrowDown, ArrowUp, EllipsisVertical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TrendDirection = "up" | "down" | "neutral";

interface InfoCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string | number;
    direction: TrendDirection;
  };
  subtitle?: string;
  className?: string;
  trendColor?: string; // optional override for custom colors
}

export function InfoCard({
  title,
  value,
  trend,
  subtitle = "Last 7 days",
  className,
  trendColor,
}: InfoCardProps) {
  const getTrendIcon = () => {
    if (!trend) return null;

    if (trend.direction === "up") {
      return <ArrowUp size={16} />;
    }
    if (trend.direction === "down") {
      return <ArrowDown size={16} />;
    }
    return null;
  };

  const getTrendColor = () => {
    if (trendColor) return trendColor;

    switch (trend?.direction) {
      case "up":
        return "text-emerald-600";
      case "down":
        return "text-rose-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className={cn("p-5 space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="font-semibold text-lg leading-none">{title}</div>
        <EllipsisVertical size={20} className="text-muted-foreground" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="font-bold text-3xl leading-none text-primary">
            {value}
          </div>

          {trend && (
            <div className={cn("flex items-center gap-1", getTrendColor())}>
              {getTrendIcon()}
              <span className="font-medium">{trend.value}</span>
            </div>
          )}
        </div>

        <div className="text-muted-foreground text-sm leading-none">
          {subtitle}
        </div>
      </div>
    </Card>
  );
}