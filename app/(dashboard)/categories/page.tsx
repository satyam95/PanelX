"use client";
import AddCategorySheet from "@/components/add-category-sheet";
import { CategoryTable } from "@/components/category-table";
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

type Category = {
  id: number;
  name: string;
};

const dummyCategories: Category[] = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Mobile Phones",
  },
  {
    id: 3,
    name: "Laptops",
  },
  {
    id: 4,
    name: "Fashion",
  },
  {
    id: 5,
    name: "Men Clothing",
  },
  {
    id: 6,
    name: "Women Clothing",
  },
  {
    id: 7,
    name: "Home & Kitchen",
  },
  {
    id: 8,
    name: "Furniture",
  },
  {
    id: 9,
    name: "Beauty",
  },
  {
    id: 10,
    name: "Sports",
  },
];

export default function CategoriesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Categories</div>
        <Button
          className="gap-1.5 h-10 cursor-pointer"
          size="lg"
          onClick={() => setOpen(true)}
        >
          <Plus strokeWidth={3} className="h-4 w-4" />
          Add Category
        </Button>
      </div>
      <div className="w-full grid auto-rows-min gap-4 grid-cols-5">
        {dummyCategories.map((cat) => (
          <Card className="p-2" key={cat.id}>
            <div className="flex items-center gap-2 h-full">
              <div className="min-w-16 min-h-16 h-full border rounded-sm bg-primary/10" />
              <div>
                <div className="line-clamp-2 text-wrap text-left font-medium">
                  {cat.name}
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
          <CategoryTable />
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
      <AddCategorySheet open={open} onOpenChange={setOpen} />
    </div>
  );
}
