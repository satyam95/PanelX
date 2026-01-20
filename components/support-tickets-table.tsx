import { Pause, Trash2, MessageSquare } from "lucide-react";
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

type TicketStatus = "Open" | "In Progress" | "Resolved" | "Closed";

const statusStyles: Record<TicketStatus, string> = {
  Open: "bg-blue-100 text-blue-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Resolved: "bg-green-100 text-green-700",
  Closed: "bg-gray-100 text-gray-700",
};

type Ticket = {
  id: string;
  subject: string;
  customer: string;
  priority: "Low" | "Medium" | "High";
  status: TicketStatus;
  assignedTo: string;
  lastUpdated: string;
  createdAt: string;
};

const dummyTickets: Ticket[] = [
  {
    id: "#TCK-1001",
    subject: "Unable to reset password",
    customer: "John Doe",
    priority: "High",
    status: "Open",
    assignedTo: "Support Team",
    lastUpdated: "2 hours ago",
    createdAt: "Jan 18, 2026",
  },
  {
    id: "#TCK-1002",
    subject: "Payment not reflecting",
    customer: "Sarah Miles",
    priority: "High",
    status: "In Progress",
    assignedTo: "Amit Verma",
    lastUpdated: "1 day ago",
    createdAt: "Jan 17, 2026",
  },
  {
    id: "#TCK-1003",
    subject: "Invoice download issue",
    customer: "Robert Fox",
    priority: "Medium",
    status: "Resolved",
    assignedTo: "Priya Shah",
    lastUpdated: "3 days ago",
    createdAt: "Jan 15, 2026",
  },
  {
    id: "#TCK-1004",
    subject: "Account suspension query",
    customer: "Emma Wilson",
    priority: "Medium",
    status: "Open",
    assignedTo: "Support Team",
    lastUpdated: "5 hours ago",
    createdAt: "Jan 19, 2026",
  },
  {
    id: "#TCK-1005",
    subject: "Billing address update",
    customer: "Michael Scott",
    priority: "Low",
    status: "Closed",
    assignedTo: "Neha Jain",
    lastUpdated: "Jan 12, 2026",
    createdAt: "Jan 10, 2026",
  },
  {
    id: "#TCK-1006",
    subject: "Feature request: Dark mode",
    customer: "David Kim",
    priority: "Low",
    status: "Resolved",
    assignedTo: "Product Team",
    lastUpdated: "Jan 14, 2026",
    createdAt: "Jan 09, 2026",
  },
  {
    id: "#TCK-1007",
    subject: "Order tracking not working",
    customer: "Olivia Brown",
    priority: "High",
    status: "In Progress",
    assignedTo: "Amit Verma",
    lastUpdated: "6 hours ago",
    createdAt: "Jan 19, 2026",
  },
  {
    id: "#TCK-1008",
    subject: "Email notifications delayed",
    customer: "Chris Evans",
    priority: "Medium",
    status: "Open",
    assignedTo: "Support Team",
    lastUpdated: "Yesterday",
    createdAt: "Jan 16, 2026",
  },
  {
    id: "#TCK-1009",
    subject: "Refund status inquiry",
    customer: "Sophia Lee",
    priority: "High",
    status: "Resolved",
    assignedTo: "Finance Team",
    lastUpdated: "Jan 13, 2026",
    createdAt: "Jan 11, 2026",
  },
  {
    id: "#TCK-1010",
    subject: "Profile image upload error",
    customer: "Daniel Martinez",
    priority: "Low",
    status: "Closed",
    assignedTo: "Support Team",
    lastUpdated: "Jan 08, 2026",
    createdAt: "Jan 07, 2026",
  },
];

export function SupportTicketsTable() {
  return (
    <Table className="table-fixed w-full">
      <colgroup>
        <col className="w-[5%]" />
        <col className="w-[10%]" />
        <col className="w-[22%]" />
        <col className="w-[14%]" />
        <col className="w-[10%]" />
        <col className="w-[12%]" />
        <col className="w-[12%]" />
        <col className="w-[10%]" />
        <col className="w-[10%]" />
      </colgroup>

      <TableHeader className="h-14 text-base text-primary">
        <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
          <TableHead className="text-center text-primary font-medium rounded-l-md px-4">
            <Checkbox aria-label="Select all tickets" />
          </TableHead>
          <TableHead className="text-center text-primary font-medium">Ticket ID</TableHead>
          <TableHead className="text-center text-primary font-medium">Subject</TableHead>
          <TableHead className="text-center text-primary font-medium">Customer</TableHead>
          <TableHead className="text-center text-primary font-medium">Priority</TableHead>
          <TableHead className="text-center text-primary font-medium">Status</TableHead>
          <TableHead className="text-center text-primary font-medium">Assigned</TableHead>
          <TableHead className="text-center text-primary font-medium">Updated</TableHead>
          <TableHead className="text-center text-primary font-medium rounded-r-md">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {dummyTickets.map((ticket) => (
          <TableRow key={ticket.id} className="text-sm">
            <TableCell className="text-center px-4 rounded-l-md">
              <Checkbox />
            </TableCell>

            <TableCell className="text-center font-medium">
              {ticket.id}
            </TableCell>

            <TableCell className="text-left">
              <div className="flex flex-col justify-start gap-1">
                <span className="font-medium">{ticket.subject}</span>
                <div className="flex gap-1 text-xs">
                  <button className="text-primary hover:underline">View</button>
                  <span className="text-muted-foreground select-none">|</span>
                  <button className="text-red-600 hover:underline">
                    Trash
                  </button>
                </div>
              </div>
            </TableCell>

            <TableCell className="text-center text-sm text-muted-foreground">
              {ticket.customer}
            </TableCell>

            <TableCell className="text-center">
              <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                {ticket.priority}
              </span>
            </TableCell>

            <TableCell className="text-center">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[ticket.status]}`}
              >
                {ticket.status}
              </span>
            </TableCell>

            <TableCell className="text-center text-sm text-muted-foreground">
              {ticket.assignedTo}
            </TableCell>

            <TableCell className="text-center text-xs text-muted-foreground">
              {ticket.lastUpdated}
            </TableCell>

            <TableCell className="text-center rounded-r-md">
              <div className="flex items-center justify-center gap-2">
                <Button
                  size="icon"
                  className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                  title="Pause"
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
