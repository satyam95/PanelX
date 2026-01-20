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

type TagsTableProps = {
  limit?: number;
};

type TagStatus = "Active" | "Inactive";

const statusStyles: Record<TagStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-gray-100 text-gray-700",
};

type Tag = {
  id: number;
  name: string;
  slug: string;
  status: TagStatus;
  products: number;
  createdAt: string;
};

const dummyTags: Tag[] = [
  { id: 1, name: "New Arrival", slug: "new-arrival", status: "Active", products: 54, createdAt: "Jan 10, 2026" },
  { id: 2, name: "Best Seller", slug: "best-seller", status: "Active", products: 72, createdAt: "Jan 11, 2026" },
  { id: 3, name: "Trending", slug: "trending", status: "Active", products: 63, createdAt: "Jan 12, 2026" },
  { id: 4, name: "Discounted", slug: "discounted", status: "Inactive", products: 41, createdAt: "Jan 08, 2026" },
  { id: 5, name: "Limited Edition", slug: "limited-edition", status: "Inactive", products: 18, createdAt: "Jan 14, 2026" },
  { id: 6, name: "Premium", slug: "premium", status: "Active", products: 27, createdAt: "Jan 14, 2026" },
  { id: 7, name: "Eco Friendly", slug: "eco-friendly", status: "Inactive", products: 19, createdAt: "Jan 05, 2026" },
  { id: 8, name: "Popular", slug: "popular", status: "Active", products: 88, createdAt: "Jan 09, 2026" },
  { id: 9, name: "Seasonal", slug: "seasonal", status: "Active", products: 34, createdAt: "Jan 15, 2026" },
  { id: 10, name: "Editor's Pick", slug: "editors-pick", status: "Inactive", products: 12, createdAt: "Jan 07, 2026" },
];

export function TagsTable({ limit }: TagsTableProps) {
  return (
    <Table className="table-fixed w-full">
      <colgroup>
        <col className="w-[6%]" />
        <col className="w-[26%]" />
        <col className="w-[22%]" />
        <col className="w-[14%]" />
        <col className="w-[14%]" />
        <col className="w-[18%]" />
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
        {dummyTags.map((tag) => (
          <TableRow key={tag.id} className="text-sm">
            <TableCell className="text-center px-4 rounded-l-md">
              <Checkbox />
            </TableCell>

            <TableCell className="font-medium text-left">
              <div className="flex items-center gap-3">
                <div className="min-w-10 min-h-10 border rounded-sm bg-primary/10" />
                <div className="flex flex-col font-medium gap-1">
                  <div className="line-clamp-2 h-full text-wrap text-left">
                    {tag.name}
                  </div>
                  <div className="flex gap-1 justify-start text-xs">
                    <button className="text-primary hover:underline">
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
              {tag.slug}
            </TableCell>

            <TableCell className="text-center font-medium">
              {tag.products}
            </TableCell>

            <TableCell className="text-center">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[tag.status]}`}
              >
                {tag.status}
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
