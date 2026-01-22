import { Pause, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

type CategoryTableProps = {
  limit?: number;
};

type CategoryStatus = "Active" | "Inactive";

const statusStyles: Record<CategoryStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-gray-100 text-gray-700",
};

type Category = {
  id: number;
  name: string;
  slug: string;
  parent: string;
  status: CategoryStatus;
  products: number;
  createdAt: string;
};

const dummyCategories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    parent: "—",
    status: "Active",
    products: 124,
    createdAt: "Jan 10, 2026",
  },
  {
    id: 2,
    name: "Mobile Phones",
    slug: "mobile-phones",
    parent: "Electronics",
    status: "Active",
    products: 58,
    createdAt: "Jan 11, 2026",
  },
  {
    id: 3,
    name: "Laptops",
    slug: "laptops",
    parent: "Electronics",
    status: "Active",
    products: 36,
    createdAt: "Jan 12, 2026",
  },
  {
    id: 4,
    name: "Fashion",
    slug: "fashion",
    parent: "—",
    status: "Active",
    products: 210,
    createdAt: "Jan 08, 2026",
  },
  {
    id: 5,
    name: "Men Clothing",
    slug: "men-clothing",
    parent: "Fashion",
    status: "Active",
    products: 92,
    createdAt: "Jan 14, 2026",
  },
  {
    id: 6,
    name: "Women Clothing",
    slug: "women-clothing",
    parent: "Fashion",
    status: "Active",
    products: 118,
    createdAt: "Jan 14, 2026",
  },
  {
    id: 7,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    parent: "—",
    status: "Inactive",
    products: 64,
    createdAt: "Jan 05, 2026",
  },
  {
    id: 8,
    name: "Furniture",
    slug: "furniture",
    parent: "Home & Kitchen",
    status: "Active",
    products: 29,
    createdAt: "Jan 09, 2026",
  },
  {
    id: 9,
    name: "Beauty",
    slug: "beauty",
    parent: "—",
    status: "Active",
    products: 73,
    createdAt: "Jan 15, 2026",
  },
  {
    id: 10,
    name: "Sports",
    slug: "sports",
    parent: "—",
    status: "Inactive",
    products: 41,
    createdAt: "Jan 07, 2026",
  },
];

export function CategoryTable({ limit }: CategoryTableProps) {
  return (
    <Table className="table-fixed w-full">
      <colgroup>
        <col className="w-[6%]" />
        <col className="w-[22%]" />
        <col className="w-[20%]" />
        <col className="w-[18%]" />
        <col className="w-[12%]" />
        <col className="w-[12%]" />
        <col className="w-[10%]" />
      </colgroup>
      <TableHeader className="h-14 text-base text-primary">
        <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
          <TableHead className="text-center text-primary font-medium rounded-l-md px-4">
            <Checkbox />
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Name
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Slug
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Parent
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Products
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Status
          </TableHead>
          <TableHead className="text-center text-primary font-medium rounded-r-md">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyCategories.map((cat) => (
          <TableRow key={cat.id} className="text-sm">
            <TableCell className="text-center px-4 rounded-l-md">
              <Checkbox />
            </TableCell>

            <TableCell className="font-medium text-left">
              <div className="flex items-center gap-3">
                <div className="min-w-10 min-h-10 border rounded-sm bg-primary/10" />
                <div className="flex flex-col font-medium gap-1">
                  <div className="line-clamp-2 h-full text-wrap text-left">
                    {cat.name}
                  </div>
                  <div className="flex gap-1 justify-start text-xs">
                    <button className="text-primary hover:underline">
                      View
                    </button>
                    <span className="text-muted-foreground select-none">|</span>
                    <button className="text-muted-foreground hover:text-primary cursor-pointer">
                      Edit
                    </button>
                    <span className="text-muted-foreground select-none">|</span>
                    <button className="text-red-600 hover:underline">
                      Trash
                    </button>
                  </div>
                </div>
              </div>
            </TableCell>

            <TableCell className="text-center text-xs text-muted-foreground">
              {cat.slug}
            </TableCell>

            <TableCell className="text-center text-xs text-muted-foreground">
              {cat.parent}
            </TableCell>

            <TableCell className="text-center font-medium">
              {cat.products}
            </TableCell>

            <TableCell className="text-center">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[cat.status]}`}
              >
                {cat.status}
              </span>
            </TableCell>

            <TableCell className="text-center rounded-r-md">
              <div className="flex items-center justify-center gap-2">
                <Button
                  size="icon"
                  className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                  title="Disable"
                >
                  <Pause className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="destructive" title="Delete">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
