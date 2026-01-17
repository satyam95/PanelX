import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EllipsisVertical, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  period?: string;
  mainValue?: string | number; 
  mainValueClassName?: string;
  changeValue?: string | number;
  changeIcon?: "up" | "down" | null;
  changeColor?: "emerald" | "rose" | "default";
  previousValue?: string;
  showDetailsButton?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function StatCard({
  title,
  period = "Last 7 days",
  mainValue,
  mainValueClassName = "text-primary",
  changeValue,
  changeIcon = "up",
  changeColor = "emerald",
  previousValue,
  showDetailsButton = true,
  children,
  className,
}: StatCardProps) {
  const getChangeColor = () => {
    if (changeColor === "rose") return "text-rose-600";
    if (changeColor === "emerald") return "text-emerald-600";
    return "text-muted-foreground";
  };

  const getIcon = () => {
    if (changeIcon === "down") return <ArrowDown size={16} />;
    if (changeIcon === "up") return <ArrowUp size={16} />;
    return null;
  };

  return (
    <Card className={cn("p-5 flex flex-col justify-between", className)}>
      <div className="space-y-5">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg leading-none">{title}</div>
            <EllipsisVertical size={20} className="text-muted-foreground" />
          </div>
          <div className="text-muted-foreground text-sm leading-none">{period}</div>
        </div>

        {/* Main Content */}
        {children ? (
          children
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className={cn("font-bold text-3xl leading-none", mainValueClassName)}>
                {mainValue}
              </div>

              {changeValue && (
                <div className={cn("flex items-center gap-1", getChangeColor())}>
                  {getIcon()}
                  <span className="font-medium">{changeValue}</span>
                </div>
              )}
            </div>

            {previousValue && (
              <div className="text-muted-foreground text-sm leading-none">
                Previous 7 days <span className="font-bold">{previousValue}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      {showDetailsButton && (
        <div className="flex items-center justify-end">
          <Button
            variant="outline"
            size="lg"
            className="w-24 rounded-full text-xs leading-none sm:text-sm"
          >
            Details
          </Button>
        </div>
      )}
    </Card>
  );
}