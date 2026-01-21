"use client";
import { ChevronDown, ImageIcon, Plus, Search } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { useState } from "react";
import ProductDetailsSheet from "./product-details-sheet";
import Link from "next/link";

type Product = {
  id: string;
  selected: boolean;
  name: string;
  sku: string;
  stock: number;
  price: number;
  image: string | null;
  category: string[] | null; // 👈 now multiple
  tags: string[] | null;
  status: "published" | "draft" | "scheduled";
  publishedAt: string | null;
};

export const products: Product[] = [
  {
    id: "1",
    selected: false,
    image: "https://via.placeholder.com/40",
    name: "Wireless Headphones",
    sku: "WH-98231",
    stock: 32,
    price: 2499,
    category: ["Electronics"],
    tags: ["Audio", "Wireless"],
    status: "published",
    publishedAt: "2026-01-12T10:45:00Z",
  },

  {
    id: "2",
    selected: false,
    image: null,
    name: "Minimal Cotton T-Shirt",
    sku: "TS-00012",
    stock: 120,
    price: 799,
    category: ["Apparel", "Clothing"],
    tags: ["Summer"],
    status: "published",
    publishedAt: "2026-01-10T18:15:00Z",
  },

  {
    id: "3",
    selected: false,
    image: "https://via.placeholder.com/40",
    name: "Smart Watch Pro Edition",
    sku: "SW-88991",
    stock: 0,
    price: 8999,
    category: ["Wearables", "Electronics"],
    tags: ["Gadgets"],
    status: "published",
    publishedAt: "2026-01-05T09:30:00Z",
  },

  {
    id: "4",
    selected: false,
    image: "https://via.placeholder.com/40",
    name: "Premium Office Chair – Ergonomic with Lumbar Support and Adjustable Armrests",
    sku: "OC-ERGO-999",
    stock: 15,
    price: 15999,
    category: ["Furniture", "Office"],
    tags: ["Ergonomic", "Premium"],
    status: "scheduled",
    publishedAt: "2026-02-01T08:00:00Z",
  },

  {
    id: "5",
    selected: false,
    image: null,
    name: "Unisex Running Shoes",
    sku: "RS-45120",
    stock: 0,
    price: 3299,
    category: ["Footwear", "Sports"],
    tags: [],
    status: "draft",
    publishedAt: null,
  },

  {
    id: "6",
    selected: false,
    image: "https://via.placeholder.com/40",
    name: "Organic Green Tea Pack of 100 Bags",
    sku: "GT-OR-100",
    stock: 240,
    price: 1299,
    category: ["Groceries", "Beverages"],
    tags: ["Organic", "Healthy", "Vegan"],
    status: "published",
    publishedAt: "2025-12-28T06:00:00Z",
  },

  {
    id: "7",
    selected: false,
    image: "https://via.placeholder.com/40",
    name: "Luxury Mechanical Watch – Swiss Made",
    sku: "LX-WATCH-001",
    stock: 2,
    price: 249999,
    category: ["Luxury", "Watches"],
    tags: ["Limited Edition"],
    status: "published",
    publishedAt: "2025-11-15T12:00:00Z",
  },

  {
    id: "8",
    selected: false,
    image: "https://via.placeholder.com/40",
    name: "Kids’ Study Table & Chair Set (Age 5–10)",
    sku: "KID-STUDY-SET-AGE5-10-2026",
    stock: 18,
    price: 5499,
    category: ["Kids Furniture", "Furniture"],
    tags: ["Kids", "Study"],
    status: "published",
    publishedAt: "2026-01-01T14:20:00Z",
  },

  {
    id: "9",
    selected: false,
    image: null,
    name: "Generic Product",
    sku: "GEN-000",
    stock: 1,
    price: 0,
    category: null,
    tags: null,
    status: "published",
    publishedAt: "2026-01-16T00:00:00Z",
  },
];

export default function ProductsTable() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
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
        <Link href="/products/add-new">
          <Button className="gap-1.5 h-10 cursor-pointer" size="lg">
            <Plus strokeWidth={3} className="h-4 w-4" />
            Add Product
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
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 border-input bg-background text-sm"
                >
                  Categories
                  <ChevronDown className="ml-1.5 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Electronics</DropdownMenuItem>
                <DropdownMenuItem>Clothing</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 border-input bg-background text-sm"
                >
                  Tags
                  <ChevronDown className="ml-1.5 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Electronics</DropdownMenuItem>
                <DropdownMenuItem>Clothing</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 border-input bg-background text-sm"
                >
                  Stock
                  <ChevronDown className="ml-1.5 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>In Stock</DropdownMenuItem>
                <DropdownMenuItem>Low Stock</DropdownMenuItem>
                <DropdownMenuItem>Out of Stock</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" className="h-9">
              Filter
            </Button>
          </div>
        </div>
        <div className="flex w-80 items-center gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Search products..."
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
            <col className="w-[3%]" />
            <col className="w-[5%]" />
            <col className="w-[18%]" />
            <col className="w-[9%]" />
            <col className="w-[9%]" />
            <col className="w-[8%]" />
            <col className="w-[17%]" />
            <col className="w-[17%]" />
            <col className="w-[14%]" />
          </colgroup>
          <TableHeader className="h-14 text-base text-primary">
            <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
              <TableHead className="text-center font-medium px-4 rounded-l-md">
                <Checkbox aria-label="Select all products" />
              </TableHead>
              <TableHead className="text-center font-medium">
                <ImageIcon className="mx-auto h-4 w-4 text-primary" />
              </TableHead>
              <TableHead className="text-center font-medium text-primary">
                Product Name
              </TableHead>
              <TableHead className="text-center font-medium text-primary">
                SKU
              </TableHead>
              <TableHead className="text-center font-medium text-primary">
                Stock
              </TableHead>
              <TableHead className="text-center font-medium text-primary">
                Price
              </TableHead>
              <TableHead className="text-center font-medium text-primary">
                Category
              </TableHead>
              <TableHead className="text-center font-medium text-primary">
                Tags
              </TableHead>
              <TableHead className="text-center font-medium text-primary rounded-r-md">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => {
              const tags = product.tags ?? [];
              const categories = product.category ?? [];
              const isOutOfStock = product.stock === 0;

              const statusLabelMap = {
                published: "Published",
                draft: "Draft",
                scheduled: "Scheduled",
              } as const;

              const statusColorMap = {
                published: "text-green-600",
                draft: "text-yellow-600",
                scheduled: "text-blue-600",
              } as const;

              const statusLabel = statusLabelMap[product.status] ?? "Unknown";
              const statusColor =
                statusColorMap[product.status] ?? "text-muted-foreground";

              const formattedDate =
                product.publishedAt &&
                new Date(product.publishedAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });

              const formattedTime =
                product.publishedAt &&
                new Date(product.publishedAt).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              return (
                <TableRow key={product.id} className="hover:bg-muted/40">
                  <TableCell className="text-center px-4">
                    <Checkbox checked={product.selected} />
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="mx-auto h-10 w-10 rounded-sm border bg-primary/10" />
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    <div className="line-clamp-2 h-full text-wrap text-left">
                      {product.name || "—"}
                    </div>
                    <div className="flex gap-1 justify-start text-xs">
                      <button
                        className="text-primary hover:underline cursor-pointer"
                        onClick={() => {
                          setSelectedProduct(product);
                          setOpen(true);
                        }}
                      >
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
                  <TableCell className="text-center text-muted-foreground truncate">
                    {product.sku || "—"}
                  </TableCell>
                  <TableCell className="text-center">
                    {isOutOfStock ? (
                      <span className="inline-flex rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                        Out of Stock
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                        In Stock ({product.stock})
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {product.price > 0
                      ? `₹${product.price.toLocaleString()}`
                      : "—"}
                  </TableCell>
                  <TableCell className="text-center">
                    {categories.length > 0 ? (
                      <div className="flex justify-center gap-1 flex-wrap max-w-[180px] mx-auto">
                        {categories.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="rounded bg-secondary px-2 py-0.5 text-xs font-medium"
                          >
                            {cat}
                          </span>
                        ))}
                        {categories.length > 2 && (
                          <span className="text-xs text-muted-foreground">
                            +{categories.length - 2}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        No category
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {tags.length > 0 ? (
                      <div className="flex justify-center gap-1 flex-wrap max-w-[180px] mx-auto">
                        {tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                        {tags.length > 3 && (
                          <span className="text-xs text-muted-foreground">
                            +{tags.length - 3}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        No tags
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {product.publishedAt ? (
                      <div className="flex flex-col items-center leading-tight">
                        <span className={`text-xs font-medium ${statusColor}`}>
                          {statusLabel}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formattedDate} at {formattedTime}
                        </span>
                      </div>
                    ) : (
                      <span className={`text-xs font-medium ${statusColor}`}>
                        {statusLabel}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
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
        <ProductDetailsSheet
          open={open}
          onOpenChange={setOpen}
          product={selectedProduct}
        />
      </div>
    </div>
  );
}
