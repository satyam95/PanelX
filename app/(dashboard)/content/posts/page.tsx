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
import Link from "next/link";
import {
  ChevronDown,
  ImageIcon,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const statusStyles: Record<string, string> = {
  Published: "bg-green-100 text-green-700",
  Draft: "bg-amber-100 text-amber-700",
};

const posts = [
  {
    id: 1,
    title: "10 Tips for Better Sleep",
    category: "Wellness",
    author: "Admin",
    status: "Published" as const,
    date: "Feb 14, 2026",
  },
  {
    id: 2,
    title: "New Product Launch: Wireless Earbuds",
    category: "News",
    author: "Admin",
    status: "Published" as const,
    date: "Feb 13, 2026",
  },
  {
    id: 3,
    title: "How to Choose the Right Laptop",
    category: "Guides",
    author: "Editor",
    status: "Draft" as const,
    date: "Feb 12, 2026",
  },
  {
    id: 4,
    title: "Summer Collection Preview",
    category: "Fashion",
    author: "Admin",
    status: "Published" as const,
    date: "Feb 11, 2026",
  },
  {
    id: 5,
    title: "Sustainability in E-commerce",
    category: "Blog",
    author: "Editor",
    status: "Draft" as const,
    date: "Feb 10, 2026",
  },
];

export default function PostsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Posts</div>
        <Button className="gap-1.5 h-10" size="lg" asChild>
          <Link href="/content/posts/add-new">
            <Plus strokeWidth={3} className="h-4 w-4" />
            Add Post
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 grid-cols-4">
        <InfoCard
          title="Total Posts"
          value="156"
          trend={{ value: "8%", direction: "up" }}
        />
        <InfoCard title="Published" value="142" />
        <InfoCard title="Drafts" value="14" />
        <InfoCard
          title="This month"
          value="12"
          trend={{ value: "2", direction: "up" }}
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
                  <DropdownMenuItem>Publish</DropdownMenuItem>
                  <DropdownMenuItem>Move to Draft</DropdownMenuItem>
                  <DropdownMenuItem>Move to Trash</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" className="h-9">
                Apply
              </Button>
            </div>
            <div className="flex w-80 items-center gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Search posts..."
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
                <col className="w-[32%]" />
                <col className="w-[12%]" />
                <col className="w-[12%]" />
                <col className="w-[12%]" />
                <col className="w-[10%]" />
                <col className="w-[8%]" />
              </colgroup>
              <TableHeader className="h-14 text-base text-primary">
                <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
                  <TableHead className="text-center font-medium px-4 rounded-l-md">
                    <Checkbox aria-label="Select all posts" />
                  </TableHead>
                  <TableHead className="text-center font-medium">
                    <ImageIcon className="mx-auto h-4 w-4 text-primary" />
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Title
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Category
                  </TableHead>
                  <TableHead className="font-medium text-primary">
                    Author
                  </TableHead>
                  <TableHead className="font-medium text-primary text-center">
                    Status
                  </TableHead>
                  <TableHead className="font-medium text-primary text-center">
                    Date
                  </TableHead>
                  <TableHead className="font-medium text-primary text-center rounded-r-md">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((p) => (
                  <TableRow key={p.id} className="hover:bg-muted/40">
                    <TableCell className="text-center px-4">
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="min-w-10 min-h-10 rounded border bg-muted" />
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-0.5">
                        <div className="line-clamp-2 h-full text-wrap text-left">
                          {p.title || "—"}
                        </div>
                        <div className="flex gap-1 justify-start text-xs">
                          <button className="text-primary hover:underline cursor-pointer">
                            View
                          </button>
                          <span className="text-muted-foreground select-none">
                            |
                          </span>
                          <button className="text-muted-foreground hover:text-primary cursor-pointer">
                            Edit
                          </button>
                          <span className="text-muted-foreground select-none">
                            |
                          </span>
                          <button className="text-red-600 hover:underline cursor-pointer">
                            Trash
                          </button>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {p.category}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {p.author}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="secondary"
                        className={statusStyles[p.status]}
                      >
                        {p.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-center text-sm">
                      {p.date}
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
                            <Link href={`/content/posts/${p.id}/edit`}>
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Move to Trash
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
