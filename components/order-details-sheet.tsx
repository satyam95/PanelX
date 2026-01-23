import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled";

type Order = {
  orderId: string;
  product_name: string;
  date: string;
  price: number;
  paymentIndicator: string;
  status: OrderStatus;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: Order | null;
};

const timelineSteps: OrderStatus[] = ["Pending", "Shipped", "Delivered"];

export default function OrderDetailsSheet({
  open,
  onOpenChange,
  order,
}: Props) {
  if (!order) return null;

  const getStatusIndex = (status: OrderStatus) => timelineSteps.indexOf(status);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[420px] sm:w-[480px] overflow-y-auto scrollbar-hide"
      >
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">
            Order Details
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="space-y-1">
            <div className="font-medium">{order.orderId}</div>
            <div className="text-muted-foreground">{order.date}</div>
          </div>
          <Separator />
          <div className="space-y-1">
            <div className="font-medium">Product</div>
            <div className="flex gap-3">
              <div className="w-12 h-12 border rounded-sm bg-primary/10" />
              <div>
                <div className="line-clamp-2">{order.product_name}</div>
                <div className="text-muted-foreground mt-1">${order.price}</div>
              </div>
            </div>
          </div>
          <Separator />
          <div className="space-y-1">
            <div className="font-medium">Shipping Address</div>
            <div className="text-muted-foreground leading-tight">
              <div>{order.shippingAddress.street}</div>
              <div>
                {order.shippingAddress.city}
                {order.shippingAddress.state &&
                  `, ${order.shippingAddress.state}`}
              </div>
              <div>
                {order.shippingAddress.country}
                {order.shippingAddress.zip && ` - ${order.shippingAddress.zip}`}
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="font-medium">Payment</span>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  order.paymentIndicator === "Paid"
                    ? "bg-[#21C45D]"
                    : "bg-[#EF4343]",
                )}
              />
              {order.paymentIndicator}
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="font-medium">Order Status</div>

            {order.status === "Cancelled" ? (
              <div className="flex items-center gap-3 text-[#EF4343]">
                <XCircle size={20} />
                Order Cancelled
              </div>
            ) : (
              <div className="space-y-4">
                {timelineSteps.map((step, index) => {
                  const active = getStatusIndex(order.status) >= index;

                  return (
                    <div key={step} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "mt-0.5",
                          active ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {active ? (
                          <CheckCircle2 size={18} />
                        ) : (
                          <Clock size={18} />
                        )}
                      </div>

                      <div
                        className={cn(
                          active
                            ? "text-primary font-medium"
                            : "text-muted-foreground",
                        )}
                      >
                        {step}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
