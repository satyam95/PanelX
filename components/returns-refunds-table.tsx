"use client";
import { Pause, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { useState } from "react";
import { ReturnRefundSheet } from "./returns-refunds-sheet";

type ReturnStatus =
  | "Requested"
  | "Approved"
  | "In Transit"
  | "Refunded"
  | "Rejected";

const statusStyles: Record<ReturnStatus, string> = {
  Requested: "bg-blue-100 text-blue-700",
  Approved: "bg-yellow-100 text-yellow-700",
  "In Transit": "bg-purple-100 text-purple-700",
  Refunded: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

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

const dummyReturns: ReturnRefund[] = [
  {
    id: "#RR-1001",
    orderId: "#ORD-8921",
    customer: "John Doe",
    reason: "Damaged product",
    refundAmount: "₹1,499",
    method: "Original Payment",
    status: "Requested",
    requestedAt: "Jan 18, 2026",
    processedAt: "—",
  },
  {
    id: "#RR-1002",
    orderId: "#ORD-8843",
    customer: "Sarah Miles",
    reason: "Wrong size delivered",
    refundAmount: "₹2,299",
    method: "Wallet",
    status: "Approved",
    requestedAt: "Jan 16, 2026",
    processedAt: "—",
  },
  {
    id: "#RR-1003",
    orderId: "#ORD-8799",
    customer: "Robert Fox",
    reason: "Product not as described",
    refundAmount: "₹3,999",
    method: "Original Payment",
    status: "In Transit",
    requestedAt: "Jan 14, 2026",
    processedAt: "—",
  },
  {
    id: "#RR-1004",
    orderId: "#ORD-8732",
    customer: "Emma Wilson",
    reason: "Defective item",
    refundAmount: "₹899",
    method: "Original Payment",
    status: "Refunded",
    requestedAt: "Jan 10, 2026",
    processedAt: "Jan 13, 2026",
  },
  {
    id: "#RR-1005",
    orderId: "#ORD-8654",
    customer: "Michael Scott",
    reason: "Ordered by mistake",
    refundAmount: "₹1,299",
    method: "Wallet",
    status: "Rejected",
    requestedAt: "Jan 09, 2026",
    processedAt: "Jan 10, 2026",
  },
  {
    id: "#RR-1006",
    orderId: "#ORD-8611",
    customer: "David Kim",
    reason: "Late delivery",
    refundAmount: "₹2,799",
    method: "Original Payment",
    status: "Approved",
    requestedAt: "Jan 15, 2026",
    processedAt: "—",
  },
  {
    id: "#RR-1007",
    orderId: "#ORD-8578",
    customer: "Olivia Brown",
    reason: "Color mismatch",
    refundAmount: "₹1,999",
    method: "Wallet",
    status: "Requested",
    requestedAt: "Jan 19, 2026",
    processedAt: "—",
  },
  {
    id: "#RR-1008",
    orderId: "#ORD-8503",
    customer: "Chris Evans",
    reason: "Missing items",
    refundAmount: "₹3,499",
    method: "Original Payment",
    status: "Refunded",
    requestedAt: "Jan 08, 2026",
    processedAt: "Jan 11, 2026",
  },
  {
    id: "#RR-1009",
    orderId: "#ORD-8471",
    customer: "Sophia Lee",
    reason: "Quality issue",
    refundAmount: "₹1,199",
    method: "Wallet",
    status: "In Transit",
    requestedAt: "Jan 12, 2026",
    processedAt: "—",
  },
  {
    id: "#RR-1010",
    orderId: "#ORD-8426",
    customer: "Daniel Martinez",
    reason: "Not required anymore",
    refundAmount: "₹2,499",
    method: "Original Payment",
    status: "Approved",
    requestedAt: "Jan 17, 2026",
    processedAt: "—",
  },
];

export function ReturnsRefundsTable() {
  const [openSheet, setOpenSheet] = useState(false);
  const [selectedReturn, setSelectedReturn] = useState<ReturnRefund | null>(
    null,
  );
  return (
    <>
      <Table className="table-fixed w-full">
        <colgroup>
          <col className="w-[5%]" />
          <col className="w-[10%]" />
          <col className="w-[12%]" />
          <col className="w-[16%]" />
          <col className="w-[18%]" />
          <col className="w-[10%]" />
          <col className="w-[12%]" />
          <col className="w-[10%]" />
          <col className="w-[10%]" />
        </colgroup>
        <TableHeader className="h-14 text-base text-primary">
          <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
            <TableHead className="text-center text-primary font-medium rounded-l-md px-4">
              <Checkbox aria-label="Select all returns" />
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Return ID
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Order
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Customer
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Reason
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Amount
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Status
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Requested
            </TableHead>
            <TableHead className="text-center text-primary font-medium rounded-r-md">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dummyReturns.map((item) => (
            <TableRow key={item.id} className="text-sm">
              <TableCell className="text-center px-4 rounded-l-md">
                <Checkbox />
              </TableCell>
              <TableCell className="text-center font-medium">
                {item.id}
              </TableCell>
              <TableCell className="text-center text-muted-foreground">
                <div className="flex flex-col font-medium gap-1">
                  <div className="line-clamp-2 h-full text-wrap text-left">
                    {item.orderId}
                  </div>
                  <div className="flex gap-1 justify-start text-xs">
                    <button
                      className="text-primary hover:underline"
                      onClick={() => {
                        setSelectedReturn(item);
                        setOpenSheet(true);
                      }}
                    >
                      View
                    </button>
                    <span className="text-muted-foreground select-none">|</span>
                    <button className="text-red-600 hover:underline">
                      Trash
                    </button>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center text-muted-foreground">
                {item.customer}
              </TableCell>
              <TableCell className="text-left text-sm text-muted-foreground">
                {item.reason}
              </TableCell>
              <TableCell className="text-center font-medium">
                {item.refundAmount}
              </TableCell>
              <TableCell className="text-center">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </TableCell>
              <TableCell className="text-center text-xs text-muted-foreground">
                {item.requestedAt}
              </TableCell>
              <TableCell className="text-center rounded-r-md">
                <div className="flex items-center justify-center gap-2">
                  <Button
                    size="icon"
                    className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                    title="Hold"
                  >
                    <Pause className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="destructive" title="Reject">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ReturnRefundSheet
        open={openSheet}
        onOpenChange={setOpenSheet}
        data={selectedReturn}
      />
    </>
  );
}
