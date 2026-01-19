import { Mail, Pause, Phone, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { data } from "./app-sidebar";

type CustomerTableProps = {
  limit?: number;
};

export const customers = [
  {
    id: "#CUST001",
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 98765 43210",
    billingAddress: {
      street: "742 Evergreen Terrace, Apt 5B",
      city: "Springfield",
      state: "IL",
      country: "United States",
      zip: "62704",
    },
    shippingAddress: {
      street: "742 Evergreen Terrace, Apt 5B",
      city: "Springfield",
      state: "IL",
      country: "United States",
      zip: "62704",
    },
    orders: 12,
  },
  {
    id: "#CUST002",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 91234 56789",
    billingAddress: {
      street: "Flat 301, Rosewood Apartments",
      city: "Mumbai",
      state: "MH",
      country: "India",
      zip: "400053",
    },
    shippingAddress: {
      street: "Flat 301, Rosewood Apartments",
      city: "Mumbai",
      state: "MH",
      country: "India",
      zip: "400053",
    },
    orders: 5,
  },
  {
    id: "#CUST003",
    name: "Amit Verma",
    email: "amit.verma@email.com",
    phone: "+91 99887 66554",
    billingAddress: {
      street: "B-12, Green Valley Society",
      city: "Bengaluru",
      state: "KA",
      country: "India",
      zip: "560038",
    },
    shippingAddress: {
      street: "Warehouse 3, Electronic City",
      city: "Bengaluru",
      state: "KA",
      country: "India",
      zip: "560100",
    },
    orders: 18,
  },
  {
    id: "#CUST004",
    name: "Sarah Williams",
    email: "sarah.w@email.com",
    phone: "+1 415 667 8890",
    billingAddress: {
      street: "221B Market Street",
      city: "San Francisco",
      state: "CA",
      country: "United States",
      zip: "94103",
    },
    shippingAddress: {
      street: "221B Market Street",
      city: "San Francisco",
      state: "CA",
      country: "United States",
      zip: "94103",
    },
    orders: 9,
  },
  {
    id: "#CUST005",
    name: "Rahul Mehta",
    email: "rahul.mehta@email.com",
    phone: "+91 90000 11223",
    billingAddress: {
      street: "12 Sunrise Residency",
      city: "Ahmedabad",
      state: "GJ",
      country: "India",
      zip: "380015",
    },
    shippingAddress: {
      street: "12 Sunrise Residency",
      city: "Ahmedabad",
      state: "GJ",
      country: "India",
      zip: "380015",
    },
    orders: 3,
  },
  {
    id: "#CUST006",
    name: "Emily Carter",
    email: "emily.carter@email.com",
    phone: "+44 7700 900123",
    billingAddress: {
      street: "45 Baker Street",
      city: "London",
      state: "London",
      country: "United Kingdom",
      zip: "NW1",
    },
    shippingAddress: {
      street: "45 Baker Street",
      city: "London",
      state: "London",
      country: "United Kingdom",
      zip: "NW1",
    },
    orders: 14,
  },
  {
    id: "#CUST007",
    name: "Karan Singh",
    email: "karan.singh@email.com",
    phone: "+91 98111 22334",
    billingAddress: {
      street: "Villa 9, Palm Meadows",
      city: "Bengaluru",
      state: "KA",
      country: "India",
      zip: "560066",
    },
    shippingAddress: {
      street: "Palm Meadows Clubhouse",
      city: "Bengaluru",
      state: "KA",
      country: "India",
      zip: "560066",
    },
    orders: 7,
  },
  {
    id: "#CUST008",
    name: "Daniel Brown",
    email: "daniel.brown@email.com",
    phone: "+1 312 555 7812",
    billingAddress: {
      street: "900 Lake Shore Drive",
      city: "Chicago",
      state: "IL",
      country: "United States",
      zip: "60611",
    },
    shippingAddress: {
      street: "900 Lake Shore Drive",
      city: "Chicago",
      state: "IL",
      country: "United States",
      zip: "60611",
    },
    orders: 21,
  },
  {
    id: "#CUST009",
    name: "Neha Kapoor",
    email: "neha.kapoor@email.com",
    phone: "+91 98700 44556",
    billingAddress: {
      street: "C-88, Model Town",
      city: "New Delhi",
      state: "DL",
      country: "India",
      zip: "110009",
    },
    shippingAddress: {
      street: "C-88, Model Town",
      city: "New Delhi",
      state: "DL",
      country: "India",
      zip: "110009",
    },
    orders: 6,
  },
  {
    id: "#CUST010",
    name: "Michael Anderson",
    email: "m.anderson@email.com",
    phone: "+1 646 889 3321",
    billingAddress: {
      street: "18 Madison Avenue",
      city: "New York",
      state: "NY",
      country: "United States",
      zip: "10010",
    },
    shippingAddress: {
      street: "18 Madison Avenue",
      city: "New York",
      state: "NY",
      country: "United States",
      zip: "10010",
    },
    orders: 11,
  },
];

export function CustomerTable({ limit }: CustomerTableProps) {
  return (
    <Table className="table-fixed w-full">
      <colgroup>
        <col className="w-[4%]" />
        <col className="w-[11%]" />
        <col className="w-[15%]" />
        <col className="w-[15%]" />
        <col className="w-[20%]" />
        <col className="w-[20%]" />
        <col className="w-[7%]" />
        <col className="w-[8%]" />
      </colgroup>
      <TableHeader className="h-14 text-base text-primary">
        <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
          <TableHead className="text-center text-primary font-medium rounded-l-md px-4">
            <Checkbox aria-label="Select all products" />
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Customer Id
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Name
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Contact
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Billing Address
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Shipping Address
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Orders
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((item, index) => (
          <TableRow className="text-sm" key={index}>
            <TableCell className="text-center px-4 rounded-l-md">
              <Checkbox />
            </TableCell>
            <TableCell className="text-center">{item.id}</TableCell>
            <TableCell className="">
              <div className="flex flex-col font-medium gap-1">
                <div className="line-clamp-2 h-full text-wrap text-left">
                  {item.name}
                </div>
                <div className="flex gap-1 justify-start text-xs">
                  <button className="text-primary hover:underline">View</button>
                  <span className="text-muted-foreground select-none">|</span>
                  <button className="text-red-600 hover:underline">
                    Trash
                  </button>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  <span>{item.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  <span>{item.phone}</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">
              <div className="leading-tight text-left">
                <div>{item.billingAddress.street}</div>
                <div>
                  {item.billingAddress.city}
                  {item.billingAddress.state &&
                    `, ${item.billingAddress.state}`}
                </div>
                <div>
                  {item.billingAddress.country}
                  {item.billingAddress.zip && ` - ${item.billingAddress.zip}`}
                </div>
              </div>
            </TableCell>
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
                  {item.shippingAddress.zip && ` - ${item.shippingAddress.zip}`}
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">{item.orders}</TableCell>
            <TableCell className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Button
                  size="icon"
                  className="text-yellow-600 bg-yellow-100 hover:bg-yellow-200"
                  title="Suspend"
                >
                  <Pause className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="destructive" title="Terminate">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
