import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Truck } from "lucide-react";
type OrderStatus = "Pending" | "Delivered" | "Shipped" | "Cancelled";

const data = [
  {
    row: 1,
    selected: false,
    orderId: "#ORD-10231",
    product_name: "Wireless Bluetooth Headphones",
    date: "2025-01-01",
    price: 49.99,
    paymentIndicator: "Paid",
    status: "Delivered",
  },
  {
    row: 2,
    selected: false,
    orderId: "#ORD-10232",
    product_name: "Men's Casual Denim Jacket",
    date: "2025-01-02",
    price: 79.99,
    paymentIndicator: "Unpaid",
    status: "Pending",
  },
  {
    row: 3,
    selected: false,
    orderId: "#ORD-10233",
    product_name: "Leather Wallet for Men",
    date: "2025-01-03",
    price: 29.99,
    paymentIndicator: "Paid",
    status: "Delivered",
  },
  {
    row: 4,
    selected: false,
    orderId: "#ORD-10234",
    product_name: "Slim Fit Laptop Sleeve 15-inch",
    date: "2025-01-04",
    price: 24.99,
    paymentIndicator: "Paid",
    status: "Shipped",
  },
  {
    row: 5,
    selected: false,
    orderId: "#ORD-10235",
    product_name: "Wireless Gaming Mouse RGB",
    date: "2025-01-05",
    price: 59.99,
    paymentIndicator: "Unpaid",
    status: "Pending",
  },
  {
    row: 6,
    selected: false,
    orderId: "#ORD-10236",
    product_name: "Espresso Coffee Maker Machine",
    date: "2025-01-06",
    price: 199.99,
    paymentIndicator: "Unpaid",
    status: "Cancelled",
  },
];

const statusColorMap: Record<OrderStatus, string> = {
  Pending: "text-[#F0D411]",
  Delivered: "text-[#21C45D]",
  Shipped: "text-[#000000]",
  Cancelled: "text-[#EF4343]",
};
export function OrderTable() {
  return (
    <Table className="table-fixed w-full">
      <TableHeader className="h-14 text-base text-primary ">
        <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
          <TableHead className="w-[4.53%] text-center text-primary font-medium rounded-l-md px-4">
            No.
          </TableHead>
          <TableHead className="w-[13.27%] text-center text-primary font-medium">
            Order Id
          </TableHead>
          <TableHead className="w-[24.89%] text-center text-primary font-medium">
            Product
          </TableHead>
          <TableHead className="w-[13.92%] text-center text-primary font-medium">
            Date
          </TableHead>
          <TableHead className="w-[12.92%] text-center text-primary font-medium">
            Price
          </TableHead>
          <TableHead className="w-[13.92%] text-center text-primary font-medium">
            Payment
          </TableHead>
          <TableHead className="w-[14.92%] text-center text-primary font-medium rounded-r-md">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="w-[4.53%] text-center rounded-l-md">
              {index + 1}
            </TableCell>
            <TableCell className="w-[13.27%] text-center">
              {item.orderId}
            </TableCell>
            <TableCell className="w-[24.89%]">
              <div className="flex items-center gap-3">
                <div className="min-w-10 min-h-10 border rounded-sm bg-primary/10" />
                <div className="text-wrap">{item.product_name}</div>
              </div>
            </TableCell>
            <TableCell className="w-[13.92%] text-center">
              {item.date}
            </TableCell>
            <TableCell className="w-[12.92%] text-center">
              ${item.price}
            </TableCell>
            <TableCell className="w-[13.92%] text-center">
              <div className="flex items-center gap-2 justify-center">
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.paymentIndicator === "Paid"
                      ? "bg-[#21C45D]"
                      : "bg-[#EF4343]"
                  }`}
                />
                {item.paymentIndicator}
              </div>
            </TableCell>
            <TableCell className="w-[14.92%] text-center rounded-r-md">
              <div
                className={cn(
                  "flex items-center gap-2 justify-center",
                  statusColorMap[item.status as OrderStatus]
                )}
              >
                <Truck size={24} />
                {item.status}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
