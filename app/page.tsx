import { ChartArea } from "@/components/chart-area";
import { OrderTable } from "@/components/order-table";
import { StatCard } from "@/components/stat-card";
import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { ArrowDown, EllipsisVertical } from "lucide-react";

interface OrderStatusItem {
  name: string;
  value: number;
  color: string;
}

const alerts = [
  {
    name: "Wireless Gaming Mouse RGB",
    stock: 4,
    threshold: 10,
    status: "low" as const,
  },
  {
    name: "Leather Wallet for Men",
    stock: 0,
    threshold: 5,
    status: "out" as const,
  },
  {
    name: 'Slim Fit Laptop Sleeve 15"',
    stock: 12,
    threshold: 15,
    status: "warning" as const,
  },
  {
    name: "Espresso Coffee Maker Machine",
    stock: 2,
    threshold: 8,
    status: "low" as const,
  },
  {
    name: "Wireless Bluetooth Earbuds",
    stock: 0,
    threshold: 6,
    status: "out" as const,
  },
];

const orderStatusData: OrderStatusItem[] = [
  { name: "Delivered", value: 6842, color: "#21C45D" },
  { name: "Shipped",   value: 1241, color: "#3B82F6" },
  { name: "Pending",   value: 509,  color: "#F0D411" },
  { name: "Cancelled", value: 94,   color: "#EF4343" },
];

export default function HomePage() {
  const totalOrders = orderStatusData.reduce((sum, item) => sum + item.value, 0);
  return (
    <div className="w-full space-y-6">
      <div className="w-full grid auto-rows-min gap-4 grid-cols-3">
        <StatCard
          title="Total Sales"
          mainValue="$350K"
          changeValue="10.4%"
          changeIcon="up"
          previousValue="($235)"
        />
        <StatCard
          title="Total Orders"
          mainValue="10.7K"
          changeValue="14.4%"
          changeIcon="up"
          previousValue="(7.6k)"
        />
        <StatCard title="Pending & Canceled" showDetailsButton={true}>
          <div className="grid auto-rows-min gap-4 grid-cols-2 divide-x">
            <div className="flex flex-col gap-0.5 pr-4">
              <div className="text-sm">Pending</div>
              <div className="flex items-center gap-1">
                <div className="text-xl font-bold text-primary">509</div>
                <div className="text-emerald-600 text-sm">user 204</div>
              </div>
            </div>
            <div className="flex flex-col gap-0.5 pl-4">
              <div className="text-sm">Canceled</div>
              <div className="flex items-center gap-1">
                <div className="text-xl font-bold text-rose-600">94</div>
                <div className={cn("flex items-center gap-1 text-rose-600")}>
                  <ArrowDown size={16} />
                  14.4%
                </div>
              </div>
            </div>
          </div>
        </StatCard>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">
        <Card className="p-5">
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-lg">Report for this week</div>
              <div className="flex items-center gap-1">
                <ToggleGroup
                  type="single"
                  defaultValue="this-week"
                  className="inline-flex rounded-md bg-muted p-1"
                >
                  <ToggleGroupItem
                    value="this-week"
                    className={cn(
                      "!rounded-md px-4 py-1.5 text-sm",
                      "data-[state=on]:bg-white data-[state=on]:text-primary",
                      "data-[state=off]:text-muted-foreground"
                    )}
                  >
                    This week
                  </ToggleGroupItem>

                  <ToggleGroupItem
                    value="last-week"
                    className={cn(
                      "!rounded-md px-4 py-1.5 text-sm",
                      "data-[state=on]:bg-white data-[state=on]:text-primary",
                      "data-[state=off]:text-muted-foreground"
                    )}
                  >
                    Last week
                  </ToggleGroupItem>
                </ToggleGroup>
                <EllipsisVertical size={20} className="text-muted-foreground" />
              </div>
            </div>
            <ChartArea />
          </div>
        </Card>
        <Card className="p-5">
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-between mb-5">
      <h3 className="font-semibold text-lg">Order Status</h3>
      <EllipsisVertical size={20} className="text-muted-foreground" />
    </div>

    {/* Big total + quick stats */}
    <div className="mb-6 space-y-1 text-center">
      <div className="text-4xl font-bold tracking-tight">
        {totalOrders.toLocaleString()}
      </div>
      <div className="text-sm text-muted-foreground">Total Orders • This Week</div>
      
      <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="font-medium text-xs">Avg. Order Value</div>
          <div className="text-primary">$42.80</div>
        </div>
        <div>
          <div className="font-medium text-xs">Orders/Day</div>
          <div className="text-primary">~1,526</div>
        </div>
      </div>
    </div>

    {/* Status bars – more breathing room */}
    <div className="space-y-5 flex-1 mt-2">
      {orderStatusData.map((status) => {
        const percentage = ((status.value / totalOrders) * 100).toFixed(1);
        return (
          <div key={status.name} className="space-y-1.5">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-4 h-4 rounded-full shadow-sm"
                  style={{ backgroundColor: status.color }}
                />
                <span className="font-medium">{status.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium">
                  {status.value.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground w-14 text-right">
                  {percentage}%
                </span>
              </div>
            </div>
            <div className="h-3 bg-muted/70 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: status.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
</Card>
        <Card className="p-5">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-lg">Stock Alerts</h3>
              <EllipsisVertical size={20} className="text-muted-foreground" />
            </div>
            <div className="space-y-3 flex-1">
              {alerts.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-3 rounded-lg border transition-colors",
                    item.status === "out"
                      ? "bg-rose-50/80 border-rose-300 shadow-sm"
                      : item.status === "low" && item.stock <= 3
                      ? "bg-rose-50/70 border-rose-400 animate-pulse-subtle"
                      : item.status === "low"
                      ? "bg-amber-50/70 border-amber-300"
                      : "bg-muted/40 border-muted"
                  )}
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="font-medium leading-tight line-clamp-2">
                      {item.name}
                    </div>
                    <div className="text-right shrink-0">
                      {item.stock === 0 ? (
                        <span className="text-rose-600 font-bold text-sm">
                          Out of stock
                        </span>
                      ) : (
                        <div className="text-sm">
                          <span
                            className={cn(
                              item.stock <= item.threshold
                                ? "text-amber-700 font-bold"
                                : "text-muted-foreground"
                            )}
                          >
                            {item.stock}
                          </span>
                          <span className="text-muted-foreground">
                            {" "}
                            / {item.threshold}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {alerts.length === 0 && (
                <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
                  All products are well stocked ✓
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
      <Card className="p-5">
        <div className="font-semibold text-lg">Recent Orders</div>
        <OrderTable />
      </Card>
    </div>
  );
}
