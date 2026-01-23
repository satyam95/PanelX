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
import { UsersTable } from "@/components/users-table";
import { cn } from "@/lib/utils";
import { ChevronDown, Plus, Search } from "lucide-react";
import Link from "next/link";

export default function UsersPage() {
  return (
    <div className="w-full space-y-6">
      <div className="font-semibold text-xl">Users</div>
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
                value="admin"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                Admin
              </ToggleGroupItem>
              <ToggleGroupItem
                value="managers"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                Managers
              </ToggleGroupItem>
              <ToggleGroupItem
                value="support"
                className={cn(
                  "!rounded-md px-4 py-1.5 text-sm min-w-26",
                  "data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm",
                  "data-[state=off]:text-muted-foreground",
                )}
              >
                Support
              </ToggleGroupItem>
            </ToggleGroup>
            <Link href="/users/add-new">
              <Button className="gap-1.5 h-10" size="lg">
                <Plus strokeWidth={3} className="h-4 w-4" />
                Add User
              </Button>
            </Link>
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
                  placeholder="Search users..."
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
            <UsersTable />
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
