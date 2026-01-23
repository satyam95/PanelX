"use client";
import AddTagSheet from "@/components/add-tag-sheet";
import { TagsTable } from "@/components/tags-table";
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
import { ChevronDown, Plus, Search } from "lucide-react";
import { useState } from "react";

type Tag = {
  id: number;
  name: string;
};

const dummyTags: Tag[] = [
  {
    id: 1,
    name: "New Arrival",
  },
  {
    id: 2,
    name: "Best Seller",
  },
  {
    id: 3,
    name: "Limited Edition",
  },
  {
    id: 4,
    name: "Trending",
  },
  {
    id: 5,
    name: "Discounted",
  },
  {
    id: 6,
    name: "Premium",
  },
  {
    id: 7,
    name: "Eco Friendly",
  },
  {
    id: 8,
    name: "Popular",
  },
  {
    id: 9,
    name: "Seasonal",
  },
  {
    id: 10,
    name: "Editor's Pick",
  },
];

export default function TagsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Tags</div>
        <Button
          className="gap-1.5 h-10 cursor-pointer"
          size="lg"
          onClick={() => setOpen(true)}
        >
          <Plus strokeWidth={3} className="h-4 w-4" />
          Add Tag
        </Button>
      </div>
      <div className="w-full grid auto-rows-min gap-4 grid-cols-5">
        {dummyTags.map((tag) => (
          <Card className="p-2" key={tag.id}>
            <div className="flex items-center gap-2 h-full">
              <div className="min-w-16 min-h-16 h-full border rounded-sm bg-primary/10" />
              <div>
                <div className="line-clamp-2 text-wrap text-left font-medium">
                  {tag.name}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Card className="p-4">
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
        <div className="space-y-10">
          <TagsTable />
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
      <AddTagSheet open={open} onOpenChange={setOpen} />
    </div>
  );
}
