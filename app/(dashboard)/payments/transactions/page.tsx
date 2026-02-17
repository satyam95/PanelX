import { InfoCard } from "@/components/info-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, MoreHorizontal, Search } from "lucide-react";

const statusStyles: Record<string, string> = {
  Success: "bg-green-100 text-green-700",
  Failed: "bg-rose-100 text-rose-700",
  Pending: "bg-amber-100 text-amber-700",
  Refunded: "bg-slate-100 text-slate-700",
};

const transactions = [
  {
    id: "txn_8f2a1b",
    orderId: "#ORD-10234",
    customer: "John Doe",
    method: "Card",
    amount: "$142.50",
    status: "Success" as const,
    date: "Feb 15, 2026 09:32",
  },
  {
    id: "txn_7e3c2d",
    orderId: "#ORD-10233",
    customer: "Jane Smith",
    method: "PayPal",
    amount: "$89.00",
    status: "Success" as const,
    date: "Feb 15, 2026 09:18",
  },
  {
    id: "txn_6d4e3f",
    orderId: "#ORD-10230",
    customer: "Mike Wilson",
    method: "Card",
    amount: "$256.00",
    status: "Pending" as const,
    date: "Feb 15, 2026 08:55",
  },
  {
    id: "txn_5c5f4a",
    orderId: "#ORD-10228",
    customer: "Sarah Brown",
    method: "Card",
    amount: "$54.99",
    status: "Refunded" as const,
    date: "Feb 14, 2026 16:20",
  },
  {
    id: "txn_4b6a5e",
    orderId: "#ORD-10225",
    customer: "Alex Lee",
    method: "Card",
    amount: "$199.00",
    status: "Failed" as const,
    date: "Feb 14, 2026 14:02",
  },
];

export default function TransactionsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="font-semibold text-xl">Transactions</div>
      <div className="grid gap-4 grid-cols-4">
        <InfoCard
          title="Total volume (30d)"
          value="$124.5K"
          trend={{ value: "8%", direction: "up" }}
        />
        <InfoCard title="Success" value="2,842" />
        <InfoCard
          title="Failed"
          value="23"
          trend={{ value: "2", direction: "down" }}
        />
        <InfoCard title="Pending" value="12" />
      </div>
      <Card className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 border-input bg-background text-sm"
                  >
                    Status
                    <ChevronDown className="ml-1.5 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Success</DropdownMenuItem>
                  <DropdownMenuItem>Failed</DropdownMenuItem>
                  <DropdownMenuItem>Pending</DropdownMenuItem>
                  <DropdownMenuItem>Refunded</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9 text-sm">
                    Payment method
                    <ChevronDown className="ml-1.5 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Card</DropdownMenuItem>
                  <DropdownMenuItem>PayPal</DropdownMenuItem>
                  <DropdownMenuItem>Bank transfer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" className="h-9">
                Filter
              </Button>
            </div>
            <div className="flex w-80 items-center gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Search by order ID..."
                  className="h-9 rounded-md border border-input bg-background pl-9 text-sm shadow-sm"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              <Button size="sm" className="h-9 px-4">
                Search
              </Button>
            </div>
          </div>
          <div className="space-y-10">
            <Table className="table-fixed w-full">
              <colgroup>
                <col className="w-[18%]" />
                <col className="w-[12%]" />
                <col className="w-[18%]" />
                <col className="w-[10%]" />
                <col className="w-[10%]" />
                <col className="w-[10%]" />
                <col className="w-[14%]" />
                <col className="w-[8%]" />
              </colgroup>
              <TableHeader className="h-14 text-base text-primary">
                <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
                  <TableHead className="font-medium px-4 rounded-l-md">
                    Transaction ID
                  </TableHead>
                  <TableHead className="font-medium">Order</TableHead>
                  <TableHead className="font-medium">Customer</TableHead>
                  <TableHead className="font-medium">Method</TableHead>
                  <TableHead className="font-medium">Amount</TableHead>
                  <TableHead className="font-medium text-center">
                    Status
                  </TableHead>
                  <TableHead className="font-medium">Date</TableHead>
                  <TableHead className="font-medium rounded-r-md text-center">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((t) => (
                  <TableRow key={t.id} className="hover:bg-muted/40">
                    <TableCell className="font-mono text-sm px-4">
                      {t.id}
                    </TableCell>
                    <TableCell className="font-medium">{t.orderId}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {t.customer}
                    </TableCell>
                    <TableCell>{t.method}</TableCell>
                    <TableCell className="font-medium">{t.amount}</TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="secondary"
                        className={statusStyles[t.status]}
                      >
                        {t.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {t.date}
                    </TableCell>
                    <TableCell className="text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          {t.status === "Success" && (
                            <DropdownMenuItem>Refund</DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination>
              <PaginationContent className="flex w-full items-center justify-between">
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    className="h-8 rounded-md border border-border px-3 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  />
                </PaginationItem>
                <div className="flex items-center gap-1">
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive
                      className="h-8 min-w-8 rounded-md bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="h-8 min-w-8 rounded-md border text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="h-8 min-w-8 rounded-md border text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis className="text-muted-foreground" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="h-8 min-w-8 rounded-md border text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                      10
                    </PaginationLink>
                  </PaginationItem>
                </div>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    className="h-8 rounded-md border border-border px-3 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </Card>
    </div>
  );
}
