import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

type ReturnStatus =
  | "Requested"
  | "Approved"
  | "In Transit"
  | "Refunded"
  | "Rejected";

type ReturnRefund = {
  id: string;
  orderId: string;
  customer: string;
  reason: string;
  refundAmount: string;
  method: "Original Payment" | "Wallet";
  status: ReturnStatus;
  requestedAt: string;
  processedAt: string;
};

const statusStyles: Record<ReturnStatus, string> = {
  Requested: "bg-blue-100 text-blue-700",
  Approved: "bg-yellow-100 text-yellow-700",
  "In Transit": "bg-purple-100 text-purple-700",
  Refunded: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: ReturnRefund | null;
};

export function ReturnRefundSheet({ open, onOpenChange, data }: Props) {
  if (!data) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[420px] p-0 flex flex-col">
        {/* Header */}
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">
            Return / Refund Details
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="space-y-1 text-sm">
            <div className="flex justify-start gap-2">
              <span className="text-muted-foreground">Return ID:</span>
              <span className="font-medium">{data.id}</span>
            </div>
            <div className="flex justify-start gap-2">
              <span className="text-muted-foreground">Order ID:</span>
              <span className="font-medium">{data.orderId}</span>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <div className="text-muted-foreground">Customer</div>
            <div className="font-medium">{data.customer}</div>
          </div>
          <div className="space-y-1 text-sm">
            <div className="text-muted-foreground">Reason</div>
            <div className="text-sm text-foreground">{data.reason}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Refund Amount</div>
              <div className="font-medium">{data.refundAmount}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Method</div>
              <div className="font-medium">{data.method}</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-muted-foreground">Current Status</div>
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusStyles[data.status]}`}
            >
              {data.status}
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-muted-foreground">Timeline</div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Requested</span>
                <span className="text-muted-foreground">
                  {data.requestedAt}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Processed</span>
                <span className="text-muted-foreground">
                  {data.processedAt}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-muted-foreground">Update Status</div>
            <Select defaultValue={data.status}>
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Requested">Requested</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="In Transit">In Transit</SelectItem>
                <SelectItem value="Refunded">Refunded</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button className="flex-1">Update Status</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
