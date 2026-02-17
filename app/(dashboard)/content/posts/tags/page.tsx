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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import {
  MoreHorizontal,
  Plus,
  Pencil,
  Search,
  Trash2,
  ChevronDown,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const tags = [
  { id: 1, name: "Tips", slug: "tips", posts: 18 },
  { id: 2, name: "How-to", slug: "how-to", posts: 24 },
  { id: 3, name: "Review", slug: "review", posts: 12 },
  { id: 4, name: "News", slug: "news", posts: 31 },
  { id: 5, name: "Guide", slug: "guide", posts: 28 },
  { id: 6, name: "Featured", slug: "featured", posts: 8 },
];

export default function PostTagsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Post Tags</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="gap-1.5 h-10" size="lg">
              <Plus strokeWidth={3} className="h-4 w-4" />
              Add Tag
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add post tag</SheetTitle>
            </SheetHeader>
            <div className="p-4 pt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="e.g. Tips" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" placeholder="tips" className="h-9" />
              </div>
              <Button className="w-full">Save</Button>
            </div>
          </SheetContent>
        </Sheet>
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
            <div className="flex w-80 items-center gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Search tags..."
                  className="h-9 rounded-md border border-input bg-background pl-9 text-sm shadow-sm"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              <Button size="sm" className="h-9 px-4">
                Search
              </Button>
            </div>
          </div>
          <Table className="table-fixed w-full">
            <colgroup>
              <col className="w-[4%]" />
              <col className="w-[38%]" />
              <col className="w-[38%]" />
              <col className="w-[10%]" />
              <col className="w-[10%]" />
            </colgroup>
            <TableHeader className="h-14 text-base text-primary">
              <TableRow className="bg-primary/20 hover:bg-primary/20 border-b">
                <TableHead className="text-center font-medium px-4 rounded-l-md">
                  <Checkbox aria-label="Select all tags" />
                </TableHead>
                <TableHead className="font-medium text-primary">Name</TableHead>
                <TableHead className="font-medium text-primary">Slug</TableHead>
                <TableHead className="font-medium text-center text-primary ">
                  Posts
                </TableHead>
                <TableHead className="font-medium text-center text-primary rounded-r-md">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tags.map((tag) => (
                <TableRow key={tag.id} className="hover:bg-muted/40">
                  <TableCell className="text-center px-4">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    <div className="line-clamp-2 h-full text-wrap text-left">
                      {tag.name || "—"}
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
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {tag.slug}
                  </TableCell>
                  <TableCell className="text-center">{tag.posts}</TableCell>
                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
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
      </Card>
    </div>
  );
}
