import { OrderTable } from "@/components/order-table";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  EllipsisVertical,
  Plus,
  Search,
} from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="w-full space-y-6">
      <div className="font-semibold text-xl">Order List</div>
      <div className="grid gap-4 grid-cols-4">
        <Card className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg leading-none">
              Total Orders
            </div>
            <EllipsisVertical size={20} className="text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 flex-wrap">
              <div className="font-bold text-3xl leading-none text-primary">
                1,240
              </div>
              <div className="flex items-center gap-1 text-emerald-600">
                <ArrowUp size={16} />
                <span className="font-medium">14.4%</span>
              </div>
            </div>
            <div className="text-muted-foreground text-sm leading-none">
              Last 7 days
            </div>
          </div>
        </Card>
        <Card className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg leading-none">New Orders</div>
            <EllipsisVertical size={20} className="text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 flex-wrap">
              <div className="font-bold text-3xl leading-none text-primary">
                240
              </div>
              <div className="flex items-center gap-1 text-emerald-600">
                <ArrowUp size={16} />
                <span className="font-medium">20%</span>
              </div>
            </div>
            <div className="text-muted-foreground text-sm leading-none">
              Last 7 days
            </div>
          </div>
        </Card>
        <Card className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg leading-none">
              Completed Orders
            </div>
            <EllipsisVertical size={20} className="text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 flex-wrap">
              <div className="font-bold text-3xl leading-none text-primary">
                960
              </div>
              <div className="flex items-center gap-1 text-emerald-600">
                <span className="font-medium">85%</span>
              </div>
            </div>
            <div className="text-muted-foreground text-sm leading-none">
              Last 7 days
            </div>
          </div>
        </Card>
        <Card className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg leading-none">
              Canceled Orders
            </div>
            <EllipsisVertical size={20} className="text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 flex-wrap">
              <div className="font-bold text-3xl leading-none text-primary">
                87
              </div>
              <div className="flex items-center gap-1 text-rose-600">
                <ArrowDown size={16} />
                <span className="font-medium">5%</span>
              </div>
            </div>
            <div className="text-muted-foreground text-sm leading-none">
              Last 7 days
            </div>
          </div>
        </Card>
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
                  "data-[state=off]:text-muted-foreground"
                )}
              >
                All order
              </ToggleGroupItem>

              <ToggleGroupItem
                value="completed"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground"
                )}
              >
                Completed
              </ToggleGroupItem>

              <ToggleGroupItem
                value="pending"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground"
                )}
              >
                Pending
              </ToggleGroupItem>

              <ToggleGroupItem
                value="canceled"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground"
                )}
              >
                Canceled
              </ToggleGroupItem>
            </ToggleGroup>
            <Button className="gap-1.5 h-10" size="lg">
              <Plus strokeWidth={3} className="h-4 w-4" />
              Add Order
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-wrap">
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
            </div>
            <div className="flex w-80 items-center gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Search orders..."
                  className="h-9 rounded-md border border-input bg-background pl-9 text-sm shadow-sm"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>

              <Button size="sm" className="h-9 px-4">
                Search
              </Button>
            </div>
          </div>
          {/* Table */}
          <div className="space-y-10">
            {/* <Table className="table-fixed w-full">
              <colgroup>
                <col className="w-[4.5%]" />
                <col className="w-[13.24%]" />
                <col className="w-[24.89%]" />
                <col className="w-[13.92%]" />
                <col className="w-[12.92%]" />
                <col className="w-[13.92%]" />
                <col className="w-[14.92%]" />
              </colgroup>
              <TableHeader className="h-14 text-base text-primary ">
                <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
                  <TableHead className="text-center font-medium px-4 rounded-l-md">
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
                    Payment
                  </TableHead>
                  <TableHead className="text-center text-primary font-medium rounded-r-md">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
            </Table> */}

            <OrderTable />
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
