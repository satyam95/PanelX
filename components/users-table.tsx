import { Pause, Trash2 } from "lucide-react";
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

type UsersTableProps = {
  limit?: number;
};

type UserStatus = "Active" | "Suspended" | "Invited";

type User = {
  name: string;
  email: string;
  phone: string;
  role: string;
  status: UserStatus;
  lastLogin: string;
  createdAt: string;
};

const users: User[] = [
  {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 98765 43210",
    role: "Admin",
    status: "Active",
    lastLogin: "2 hours ago",
    createdAt: "12 Jan 2025",
  },
  {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 91234 56789",
    role: "Manager",
    status: "Active",
    lastLogin: "1 day ago",
    createdAt: "05 Feb 2025",
  },
  {
    name: "Amit Verma",
    email: "amit.verma@email.com",
    phone: "+91 99887 66554",
    role: "User",
    status: "Suspended",
    lastLogin: "5 days ago",
    createdAt: "22 Dec 2024",
  },
  {
    name: "Sarah Williams",
    email: "sarah.w@email.com",
    phone: "+1 415 667 8890",
    role: "Admin",
    status: "Active",
    lastLogin: "30 mins ago",
    createdAt: "18 Jan 2025",
  },
  {
    name: "Rahul Mehta",
    email: "rahul.mehta@email.com",
    phone: "+91 90000 11223",
    role: "User",
    status: "Invited",
    lastLogin: "Never",
    createdAt: "10 Mar 2025",
  },
  {
    name: "Emily Carter",
    email: "emily.carter@email.com",
    phone: "+44 7700 900123",
    role: "Manager",
    status: "Active",
    lastLogin: "3 hours ago",
    createdAt: "28 Nov 2024",
  },
  {
    name: "Karan Singh",
    email: "karan.singh@email.com",
    phone: "+91 98111 22334",
    role: "User",
    status: "Active",
    lastLogin: "Yesterday",
    createdAt: "02 Jan 2025",
  },
  {
    name: "Daniel Brown",
    email: "daniel.brown@email.com",
    phone: "+1 312 555 7812",
    role: "User",
    status: "Suspended",
    lastLogin: "12 days ago",
    createdAt: "15 Oct 2024",
  },
  {
    name: "Neha Kapoor",
    email: "neha.kapoor@email.com",
    phone: "+91 98700 44556",
    role: "Manager",
    status: "Active",
    lastLogin: "6 hours ago",
    createdAt: "09 Feb 2025",
  },
  {
    name: "Michael Anderson",
    email: "m.anderson@email.com",
    phone: "+1 646 889 3321",
    role: "Admin",
    status: "Active",
    lastLogin: "Just now",
    createdAt: "01 Jan 2025",
  },
];

const statusStyles: Record<UserStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Suspended: "bg-yellow-100 text-yellow-700",
  Invited: "bg-blue-100 text-blue-700",
};

export function UsersTable({ limit }: UsersTableProps) {
  return (
    <Table className="table-fixed w-full">
      <colgroup>
        <col className="w-[6%]" />
        <col className="w-[16%]" />
        <col className="w-[18%]" />
        <col className="w-[14%]" />
        <col className="w-[12%]" />
        <col className="w-[12%]" />
        <col className="w-[12%]" />
        <col className="w-[10%]" />
        <col className="w-[10%]" />
      </colgroup>
      <TableHeader className="h-14 text-base text-primary">
        <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
          <TableHead className="text-center text-primary font-medium rounded-l-md px-4">
            <Checkbox aria-label="Select all users" />
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Name
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Email
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Phone
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Role
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Status
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Last Login
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Created
          </TableHead>
          <TableHead className="text-center text-primary font-medium rounded-r-md">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow className="text-sm" key={index}>
            <TableCell className="text-center px-4 rounded-l-md">
              <Checkbox />
            </TableCell>
            <TableCell className="text-left font-medium">
              <div className="flex flex-col gap-1">
                <span>{user.name}</span>
                <div className="flex gap-1 text-xs">
                  <button className="text-primary hover:underline">View</button>
                  <span className="text-muted-foreground select-none">|</span>
                  <button className="text-red-600 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground text-center">
              {user.email}
            </TableCell>
            <TableCell className="text-sm text-muted-foreground text-center">
              {user.phone}
            </TableCell>
            <TableCell className="text-center">
              <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                {user.role}
              </span>
            </TableCell>
            <TableCell className="text-center">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[user.status]}`}
              >
                {user.status}
              </span>
            </TableCell>
            <TableCell className="text-center text-xs text-muted-foreground">
              {user.lastLogin}
            </TableCell>
            <TableCell className="text-center text-xs text-muted-foreground">
              {user.createdAt}
            </TableCell>
            <TableCell className="text-center rounded-r-md">
              <div className="flex items-center justify-center gap-2">
                <Button
                  size="icon"
                  className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                  title="Suspend"
                >
                  <Pause className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="destructive" title="Delete">
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
