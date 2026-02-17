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
import { ChevronDown, MoreHorizontal, Search, Send } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

const statusStyles: Record<string, string> = {
  Sent: "bg-green-100 text-green-700",
  Scheduled: "bg-amber-100 text-amber-700",
  Failed: "bg-rose-100 text-rose-700",
};

const campaigns = [
  {
    id: 1,
    title: "Flash Sale – 24 hours only",
    body: "Up to 40% off on electronics. Tap to shop.",
    segment: "All users",
    sentAt: "Feb 15, 2026 09:00",
    sentCount: 12400,
    clickCount: 892,
    status: "Sent" as const,
  },
  {
    id: 2,
    title: "Your order has shipped",
    body: "Track your package with the link inside.",
    segment: "Recent buyers",
    sentAt: "Feb 14, 2026 14:30",
    sentCount: 342,
    clickCount: 198,
    status: "Sent" as const,
  },
  {
    id: 3,
    title: "Weekend deal – Free shipping",
    body: "No minimum. Use code FREESHIP at checkout.",
    segment: "All users",
    sentAt: "Feb 16, 2026 10:00",
    sentCount: "—",
    clickCount: "—",
    status: "Scheduled" as const,
  },
  {
    id: 4,
    title: "Back in stock: Wireless earbuds",
    body: "We restocked. Get yours before they're gone.",
    segment: "Waitlist",
    sentAt: "Feb 12, 2026",
    sentCount: 0,
    clickCount: 0,
    status: "Failed" as const,
  },
];

export default function PushNotificationsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Push Notifications</div>
        <Button className="gap-1.5 h-10" size="lg">
          <Send className="h-4 w-4" />
          Send notification
        </Button>
      </div>
      <div className="grid gap-4 grid-cols-4">
        <InfoCard title="Sent today" value="2" />
        <InfoCard
          title="Scheduled"
          value="5"
          trend={{ value: "2", direction: "up" }}
        />
        <InfoCard
          title="Click rate"
          value="7.2%"
          trend={{ value: "0.5%", direction: "up" }}
        />
        <InfoCard
          title="Total sent (30d)"
          value="48,200"
          trend={{ value: "12%", direction: "up" }}
        />
      </div>
      <Card className="p-4">
        <div className="space-y-3">
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
              value="published"
              className={cn(
                "!rounded-md px-4 py-1.5 text-sm min-w-26",
                "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                "data-[state=off]:text-muted-foreground",
              )}
            >
              Published
            </ToggleGroupItem>

            <ToggleGroupItem
              value="draft"
              className={cn(
                "!rounded-md px-4 py-1.5 text-sm min-w-26",
                "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                "data-[state=off]:text-muted-foreground",
              )}
            >
              Draft
            </ToggleGroupItem>

            <ToggleGroupItem
              value="trash"
              className={cn(
                "!rounded-md px-4 py-1.5 text-sm min-w-26",
                "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                "data-[state=off]:text-muted-foreground",
              )}
            >
              Trash
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
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
                    <DropdownMenuItem>Move to Trash</DropdownMenuItem>
                    <DropdownMenuItem>Move to Draft</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" className="h-9">
                  Apply
                </Button>
              </div>
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
                  <DropdownMenuItem>Sent</DropdownMenuItem>
                  <DropdownMenuItem>Scheduled</DropdownMenuItem>
                  <DropdownMenuItem>Failed</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex w-80 items-center gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Search campaigns..."
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
                <col className="w-[28%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[10%]" />
                <col className="w-[10%]" />
                <col className="w-[12%]" />
                <col className="w-[8%]" />
              </colgroup>
              <TableHeader className="h-14 text-base text-primary">
                <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
                  <TableHead className="text-center font-medium px-4 rounded-l-md">
                    <Checkbox aria-label="Select all notifications" />
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Title
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Segment
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Sent at
                  </TableHead>
                  <TableHead className="font-medium text-center text-primary">
                    Sent
                  </TableHead>
                  <TableHead className="font-medium text-center text-primary">
                    Clicks
                  </TableHead>
                  <TableHead className="font-medium text-center text-primary">
                    Status
                  </TableHead>
                  <TableHead className="font-medium text-center text-primary rounded-r-md">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((c) => (
                  <TableRow key={c.id} className="hover:bg-muted/40">
                    <TableCell className="text-center px-4">
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium">{c.title}</span>
                        <span className="text-muted-foreground text-xs line-clamp-1 max-w-xs">
                          {c.body}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {c.segment}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {c.sentAt}
                    </TableCell>
                    <TableCell className="text-right text-center font-medium">
                      {c.sentCount}
                    </TableCell>
                    <TableCell className="text-right text-center font-medium">
                      {c.clickCount}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="secondary"
                        className={statusStyles[c.status]}
                      >
                        {c.status}
                      </Badge>
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
                          <DropdownMenuItem>View stats</DropdownMenuItem>
                          {c.status === "Scheduled" && (
                            <DropdownMenuItem>
                              Cancel scheduled
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
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
