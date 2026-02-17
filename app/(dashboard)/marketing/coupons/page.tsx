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
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ChevronDown,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Expired: "bg-rose-100 text-rose-700",
  Scheduled: "bg-amber-100 text-amber-700",
};

const coupons = [
  {
    id: 1,
    code: "WELCOME10",
    type: "Percentage",
    value: "10%",
    minOrder: "$50",
    usageLimit: 1000,
    used: 342,
    validFrom: "Jan 1, 2026",
    validTo: "Dec 31, 2026",
    status: "Active" as const,
  },
  {
    id: 2,
    code: "FLAT20",
    type: "Fixed",
    value: "$20",
    minOrder: "$100",
    usageLimit: 500,
    used: 500,
    validFrom: "Feb 1, 2026",
    validTo: "Feb 28, 2026",
    status: "Expired" as const,
  },
  {
    id: 3,
    code: "SPRING25",
    type: "Percentage",
    value: "25%",
    minOrder: "$75",
    usageLimit: 200,
    used: 0,
    validFrom: "Mar 1, 2026",
    validTo: "Mar 31, 2026",
    status: "Scheduled" as const,
  },
  {
    id: 4,
    code: "FREESHIP",
    type: "Fixed",
    value: "Free",
    minOrder: "$30",
    usageLimit: null,
    used: 1204,
    validFrom: "Jan 1, 2026",
    validTo: "—",
    status: "Active" as const,
  },
];

export default function CouponsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Coupons</div>
        <Button className="gap-1.5 h-10" size="lg" asChild>
          <Link href="/marketing/coupons/add-new">
            <Plus strokeWidth={3} className="h-4 w-4" />
            Add Coupon
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 grid-cols-4">
        <InfoCard title="Total Coupons" value="24" />
        <InfoCard
          title="Active"
          value="12"
          trend={{ value: "4", direction: "up" }}
        />
        <InfoCard
          title="Expired"
          value="8"
          trend={{ value: "2", direction: "down" }}
        />
        <InfoCard
          title="Total Redemptions"
          value="4,892"
          trend={{ value: "18%", direction: "up" }}
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
            <div className="flex gap-2">
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
                    <DropdownMenuItem>Active</DropdownMenuItem>
                    <DropdownMenuItem>Expired</DropdownMenuItem>
                    <DropdownMenuItem>Scheduled</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-9">
                  Type
                  <ChevronDown className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex w-80 items-center gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Search by code..."
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
                <col className="w-[10%]" />
                <col className="w-[12%]" />
                <col className="w-[9%]" />
                <col className="w-[11%]" />
                <col className="w-[10%]" />
                <col className="w-[18%]" />
                <col className="w-[9%]" />
                <col className="w-[7%]" />
              </colgroup>
              <TableHeader className="h-14 text-base text-primary">
                <TableRow className="bg-primary/20 hover:bg-primary/20 border-b">
                  <TableHead className="text-center font-medium px-4 rounded-l-md">
                    <Checkbox aria-label="Select all coupons" />
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Code
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Type
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Value
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Min. Order
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Usage
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Valid
                  </TableHead>
                  <TableHead className="font-medium text-primary text-center">
                    Status
                  </TableHead>
                  <TableHead className="font-medium text-primary text-center rounded-r-md">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coupons.map((c) => (
                  <TableRow key={c.id} className="hover:bg-muted/40">
                    <TableCell className="text-center px-4">
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-mono font-medium">
                      {c.code}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {c.type}
                    </TableCell>
                    <TableCell>{c.value}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {c.minOrder}
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{c.used}</span>
                      {c.usageLimit != null && (
                        <span className="text-muted-foreground">
                          {" "}
                          / {c.usageLimit}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {c.validFrom} – {c.validTo}
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
                          <DropdownMenuItem asChild>
                            <Link href={`/marketing/coupons/${c.id}/edit`}>
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
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
