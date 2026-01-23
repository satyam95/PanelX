"use client";
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
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import OrderDetailsSheet from "./order-details-sheet";

type OrderStatus = "Pending" | "Delivered" | "Shipped" | "Cancelled";

type OrderTableProps = {
  limit?: number;
};

type Order = {
  row: number;
  selected: boolean;
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

const allOrders: Order[] = [
  {
    row: 1,
    selected: false,
    orderId: "#ORD-10231",
    product_name: "Wireless Bluetooth Headphones",
    date: "2025-01-01",
    price: 49.99,
    paymentIndicator: "Paid",
    status: "Delivered",
    shippingAddress: {
      street: "742 Evergreen Terrace, Apt 5B",
      city: "Springfield",
      state: "IL",
      country: "United States",
      zip: "62704",
    },
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
    shippingAddress: {
      street: "221B Baker Street",
      city: "London",
      state: "",
      country: "United Kingdom",
      zip: "NW1 6XE",
    },
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
    shippingAddress: {
      street: "1600 Pennsylvania Avenue NW",
      city: "Washington",
      state: "DC",
      country: "United States",
      zip: "20500",
    },
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
    shippingAddress: {
      street: "350 5th Avenue, Suite 4200",
      city: "New York",
      state: "NY",
      country: "United States",
      zip: "10118",
    },
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
    shippingAddress: {
      street: "456 Maple Grove Rd",
      city: "Austin",
      state: "TX",
      country: "United States",
      zip: "78759",
    },
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
    shippingAddress: {
      street: "789 Ocean Drive, Apt 1203",
      city: "Miami Beach",
      state: "FL",
      country: "United States",
      zip: "33139",
    },
  },
  {
    row: 7,
    selected: false,
    orderId: "#ORD-10237",
    product_name: "Noise Cancelling Over-Ear Headphones",
    date: "2025-01-07",
    price: 129.99,
    paymentIndicator: "Paid",
    status: "Shipped",
    shippingAddress: {
      street: "1523 Rainier Avenue South",
      city: "Seattle",
      state: "WA",
      country: "United States",
      zip: "98144",
    },
  },
  {
    row: 8,
    selected: false,
    orderId: "#ORD-10238",
    product_name: "Smart Fitness Tracker Watch",
    date: "2025-01-08",
    price: 89.5,
    paymentIndicator: "Paid",
    status: "Delivered",
    shippingAddress: {
      street: "42 Wallaby Way",
      city: "Sydney",
      state: "NSW",
      country: "Australia",
      zip: "2000",
    },
  },
  {
    row: 9,
    selected: false,
    orderId: "#ORD-10239",
    product_name: "Portable Bluetooth Speaker IPX7",
    date: "2025-01-09",
    price: 45.0,
    paymentIndicator: "Unpaid",
    status: "Pending",
    shippingAddress: {
      street: "18 King's Road, Unit 305",
      city: "Toronto",
      state: "ON",
      country: "Canada",
      zip: "M5V 1J9",
    },
  },
  {
    row: 10,
    selected: false,
    orderId: "#ORD-10240",
    product_name: "Mechanical Gaming Keyboard RGB",
    date: "2025-01-10",
    price: 109.99,
    paymentIndicator: "Paid",
    status: "Shipped",
    shippingAddress: {
      street: "101 Innovation Drive",
      city: "San Jose",
      state: "CA",
      country: "United States",
      zip: "95134",
    },
  },
];

const statusColorMap: Record<OrderStatus, string> = {
  Pending: "text-[#F0D411]",
  Delivered: "text-[#21C45D]",
  Shipped: "text-[#000000]",
  Cancelled: "text-[#EF4343]",
};

export function OrderTable({ limit }: OrderTableProps) {
  const [openOrderSheet, setOpenOrderSheet] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const displayedOrders =
    limit && limit > 0 ? allOrders.slice(0, limit) : allOrders;
  return (
    <>
      <Table className="table-fixed w-full">
        <colgroup>
          <col className="w-[4%]" />
          <col className="w-[11.24%]" />
          <col className="w-[24.89%]" />
          <col className="w-[10.92%]" />
          <col className="w-[7.92%]" />
          <col className="w-[18.5%]" />
          <col className="w-[9.92%]" />
          <col className="w-[10.92%]" />
        </colgroup>
        <TableHeader className="h-14 text-base text-primary">
          <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
            <TableHead className="text-center text-primary font-medium rounded-l-md px-4">
              <Checkbox aria-label="Select all products" />
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Order Id
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Product
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Date
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Price
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Shipping Address
            </TableHead>
            <TableHead className="text-center text-primary font-medium">
              Payment
            </TableHead>
            <TableHead className="text-center text-primary font-medium rounded-r-md">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedOrders.map((item, index) => (
            <TableRow className="text-sm" key={index}>
              <TableCell className="text-center px-4 rounded-l-md">
                <Checkbox />
              </TableCell>
              <TableCell className="text-center">{item.orderId}</TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="min-w-10 min-h-10 border rounded-sm bg-primary/10" />
                  <div>
                    <div className="line-clamp-2 h-full text-wrap text-left">
                      {item.product_name}
                    </div>
                    <div className="flex gap-1 justify-start text-xs">
                      <button
                        className="text-primary hover:underline cursor-pointer"
                        onClick={() => {
                          setSelectedOrder(item);
                          setOpenOrderSheet(true);
                        }}
                      >
                        View
                      </button>
                      <span className="text-muted-foreground select-none">
                        |
                      </span>
                      <button className="text-muted-foreground hover:text-primary cursor-pointer">
                        Edit
                      </button>
                      <span className="text-muted-foreground select-none">
                        |
                      </span>
                      <button className="text-red-600 hover:underline">
                        Trash
                      </button>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">{item.date}</TableCell>
              <TableCell className="text-center">${item.price}</TableCell>
              <TableCell className="text-xs text-muted-foreground">
                <div className="leading-tight text-left">
                  <div>{item.shippingAddress.street}</div>
                  <div>
                    {item.shippingAddress.city}
                    {item.shippingAddress.state &&
                      `, ${item.shippingAddress.state}`}
                  </div>
                  <div>
                    {item.shippingAddress.country}
                    {item.shippingAddress.zip &&
                      ` - ${item.shippingAddress.zip}`}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">
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
              <TableCell className="text-center rounded-r-md">
                <div
                  className={cn(
                    "flex items-center gap-2 justify-center",
                    statusColorMap[item.status as OrderStatus],
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
      <OrderDetailsSheet
        open={openOrderSheet}
        onOpenChange={setOpenOrderSheet}
        order={selectedOrder}
      />
    </>
  );
}
