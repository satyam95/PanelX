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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronDown,
  MessageSquare,
  Search,
  Star,
  X,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const statusStyles: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700",
  Approved: "bg-green-100 text-green-700",
  Rejected: "bg-rose-100 text-rose-700",
};

const reviews = [
  {
    id: 1,
    productName: "Wireless Bluetooth Earbuds",
    productImage: "",
    customer: "John Doe",
    rating: 5,
    snippet: "Great sound quality and battery life. Very satisfied!",
    status: "Approved" as const,
    date: "Feb 14, 2026",
  },
  {
    id: 2,
    productName: "Leather Wallet for Men",
    productImage: "",
    customer: "Jane Smith",
    rating: 4,
    snippet: "Good quality but shipping took longer than expected.",
    status: "Pending" as const,
    date: "Feb 13, 2026",
  },
  {
    id: 3,
    productName: 'Slim Fit Laptop Sleeve 15"',
    productImage: "",
    customer: "Mike Wilson",
    rating: 3,
    snippet: "Fits well but material could be sturdier.",
    status: "Pending" as const,
    date: "Feb 12, 2026",
  },
  {
    id: 4,
    productName: "Espresso Coffee Maker",
    productImage: "",
    customer: "Sarah Brown",
    rating: 5,
    snippet: "Best purchase this year. Makes perfect espresso.",
    status: "Approved" as const,
    date: "Feb 11, 2026",
  },
  {
    id: 5,
    productName: "Wireless Gaming Mouse RGB",
    productImage: "",
    customer: "Alex Lee",
    rating: 2,
    snippet: "Stopped working after a week. Requesting refund.",
    status: "Rejected" as const,
    date: "Feb 10, 2026",
  },
];

export default function ProductReviewsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="font-semibold text-xl">Product Reviews</div>
      <div className="grid gap-4 grid-cols-4">
        <InfoCard
          title="Total Reviews"
          value="1,842"
          trend={{ value: "12%", direction: "up" }}
        />
        <InfoCard
          title="Pending"
          value="89"
          trend={{ value: "5", direction: "neutral" }}
        />
        <InfoCard title="Avg. Rating" value="4.2" />
        <InfoCard
          title="This Month"
          value="312"
          trend={{ value: "8%", direction: "up" }}
        />
      </div>
      <Card className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <ToggleGroup
              type="single"
              defaultValue="all"
              className="inline-flex !rounded-md bg-muted p-1"
            >
              <ToggleGroupItem
                value="all"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                All
              </ToggleGroupItem>
              <ToggleGroupItem
                value="pending"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                Pending
              </ToggleGroupItem>
              <ToggleGroupItem
                value="approved"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                Approved
              </ToggleGroupItem>
              <ToggleGroupItem
                value="rejected"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                Rejected
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 border-input bg-background text-sm"
                  >
                    Bulk actions
                    <ChevronDown className="ml-1.5 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Approve selected</DropdownMenuItem>
                  <DropdownMenuItem>Reject selected</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" className="h-9">
                Apply
              </Button>
            </div>
            <div className="flex w-80 items-center gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Search reviews..."
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
                <col className="w-[4%]" />
                <col className="w-[25%]" />
                <col className="w-[12%]" />
                <col className="w-[6%]" />
                <col className="w-[23%]" />
                <col className="w-[8%]" />
                <col className="w-[10%]" />
                <col className="w-[12%]" />
              </colgroup>
              <TableHeader className="h-14 text-base text-primary">
                <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
                  <TableHead className="text-center font-medium px-4 rounded-l-md">
                    <Checkbox aria-label="Select all reviews" />
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Product
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Customer
                  </TableHead>
                  <TableHead className="font-medium text-primary text-center">
                    Rating
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Review
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Status
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Date
                  </TableHead>
                  <TableHead className="font-medium text-primary rounded-r-md">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviews.map((r) => (
                  <TableRow key={r.id} className="hover:bg-muted/40">
                    <TableCell className="text-center px-4">
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="min-w-10 min-h-10 rounded border bg-muted" />
                        <div className="flex flex-col gap-1">
                          <div className="line-clamp-2 h-full text-wrap text-left">
                            {r.productName || "—"}
                          </div>
                          <div className="flex gap-1 justify-start text-xs">
                            <button className="text-primary hover:underline cursor-pointer">
                              View
                            </button>
                            <span className="text-muted-foreground select-none">
                              |
                            </span>
                            <button className="text-red-600 hover:underline cursor-pointer">
                              Trash
                            </button>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {r.customer}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="font-medium">{r.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground align-top">
                      <div className="max-w-full whitespace-normal break-words">
                        <p className="line-clamp-2 leading-relaxed">
                          {r.snippet}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={statusStyles[r.status]}
                      >
                        {r.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {r.date}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        {r.status === "Pending" && (
                          <>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8"
                              title="Approve"
                            >
                              <Check className="h-4 w-4 text-green-600" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8"
                              title="Reject"
                            >
                              <X className="h-4 w-4 text-rose-600" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8"
                              title="Reply"
                            >
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        {r.status !== "Pending" && (
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            title="Reply"
                          >
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
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
