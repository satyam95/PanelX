import { Mail, Phone } from "lucide-react";
import { Customer } from "./customer-table";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

type CustomerDetailsSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customer: Customer | null;
};

export function CustomerDetailsSheet({
  open,
  onOpenChange,
  customer,
}: CustomerDetailsSheetProps) {
  if (!customer) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] sm:w-[480px]">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">
            Customer Details
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="space-y-1">
            <div className="text-muted-foreground">Customer ID</div>
            <div className="font-medium">{customer.id}</div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Name</div>
            <div className="font-medium">{customer.name}</div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Contact</div>
            <div className="flex flex-col gap-1 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {customer.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {customer.phone}
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Billing Address</div>
            <div className="leading-tight">
              <div>{customer.billingAddress.street}</div>
              <div>
                {customer.billingAddress.city}
                {customer.billingAddress.state &&
                  `, ${customer.billingAddress.state}`}
              </div>
              <div>
                {customer.billingAddress.country}
                {customer.billingAddress.zip &&
                  ` - ${customer.billingAddress.zip}`}
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Shipping Address</div>
            <div className="leading-tight">
              <div>{customer.shippingAddress.street}</div>
              <div>
                {customer.shippingAddress.city}
                {customer.shippingAddress.state &&
                  `, ${customer.shippingAddress.state}`}
              </div>
              <div>
                {customer.shippingAddress.country}
                {customer.shippingAddress.zip &&
                  ` - ${customer.shippingAddress.zip}`}
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Total Orders</div>
            <div className="font-medium">{customer.orders}</div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
