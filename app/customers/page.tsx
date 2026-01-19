import { ChartArea } from "@/components/chart-area";
import { CustomerTable } from "@/components/customer-table";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { ChevronDown, EllipsisVertical, Search } from "lucide-react";

export default function CustomersPage() {
  return (
    <div className="w-full space-y-6">
      <div className="font-semibold text-xl">Customers List</div>
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-4">
          <div className="flex flex-col justify-between h-full">
            <InfoCard
              title="Total Customers"
              value="11,040"
              trend={{ value: "14.4%", direction: "up" }}
            />
            <InfoCard
              title="New Customers"
              value="2,370"
              trend={{ value: "20%", direction: "up" }}
            />
            <InfoCard
              title="Visitor"
              value="250k"
              trend={{ value: "20%", direction: "up" }}
            />
          </div>
        </div>
        <div className="col-span-8">
          <Card className="p-5">
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-lg">Customer Overview</div>
                <div className="flex items-center gap-1">
                  <ToggleGroup
                    type="single"
                    defaultValue="this-week"
                    className="inline-flex rounded-md bg-muted p-1"
                  >
                    <ToggleGroupItem
                      value="this-week"
                      className={cn(
                        "!rounded-md px-4 py-1.5 text-sm",
                        "data-[state=on]:bg-white data-[state=on]:text-primary",
                        "data-[state=off]:text-muted-foreground",
                      )}
                    >
                      This week
                    </ToggleGroupItem>

                    <ToggleGroupItem
                      value="last-week"
                      className={cn(
                        "!rounded-md px-4 py-1.5 text-sm",
                        "data-[state=on]:bg-white data-[state=on]:text-primary",
                        "data-[state=off]:text-muted-foreground",
                      )}
                    >
                      Last week
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <EllipsisVertical
                    size={20}
                    className="text-muted-foreground"
                  />
                </div>
              </div>
              <ChartArea />
            </div>
          </Card>
        </div>
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
                All Customer
              </ToggleGroupItem>
              <ToggleGroupItem
                value="completed"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                Registered
              </ToggleGroupItem>
              <ToggleGroupItem
                value="pending"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                Guest
              </ToggleGroupItem>
              <ToggleGroupItem
                value="canceled"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                Trash
              </ToggleGroupItem>
            </ToggleGroup>
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
          <div className="space-y-10">
            <CustomerTable />
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
