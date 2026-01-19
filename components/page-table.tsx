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

type PagesTableProps = {
  limit?: number;
};

type PageStatus = "Published" | "Draft" | "Scheduled" | "Trash";

const statusStyles: Record<PageStatus, string> = {
  Published: "bg-green-100 text-green-700",
  Draft: "bg-gray-100 text-gray-700",
  Scheduled: "bg-blue-100 text-blue-700",
  Trash: "bg-red-100 text-red-700",
};

const dummyPages: {
  id: number;
  name: string;
  slug: string;
  status: PageStatus;
  author: string;
  lastUpdated: string;
  published: string;
}[] = [
  {
    id: 1,
    name: "About Us",
    slug: "/about-us",
    status: "Published",
    author: "Jane Cooper",
    lastUpdated: "Jan 12, 2026",
    published: "Dec 15, 2025",
  },
  {
    id: 2,
    name: "Contact",
    slug: "/contact",
    status: "Published",
    author: "Robert Fox",
    lastUpdated: "Jan 18, 2026",
    published: "Jan 5, 2026",
  },
  {
    id: 3,
    name: "Pricing",
    slug: "/pricing",
    status: "Draft",
    author: "Cody Fisher",
    lastUpdated: "Jan 19, 2026",
    published: "—",
  },
  {
    id: 4,
    name: "Black Friday Sale 2025",
    slug: "/black-friday-2025",
    status: "Scheduled",
    author: "Kristin Watson",
    lastUpdated: "Jan 10, 2026",
    published: "Feb 1, 2026",
  },
  {
    id: 5,
    name: "Old Privacy Policy",
    slug: "/privacy-policy-old",
    status: "Trash",
    author: "Leslie Alexander",
    lastUpdated: "Nov 30, 2025",
    published: "—",
  },
];

export function PagesTable({ limit }: PagesTableProps) {
  return (
    <Table className="table-fixed w-full">
      <colgroup>
        <col className="w-[6%]" />
        <col className="w-[22%]" />
        <col className="w-[20%]" />
        <col className="w-[12%]" />
        <col className="w-[14%]" />
        <col className="w-[13%]" />
        <col className="w-[13%]" />
        <col className="w-[10%]" />
      </colgroup>
      <TableHeader className="h-14 text-base text-primary">
        <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
          <TableHead className="text-center text-primary font-medium rounded-l-md px-4">
            <Checkbox aria-label="Select all pages" />
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Name
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Slug
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Status
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Author
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Last Updated
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Published
          </TableHead>
          <TableHead className="text-center text-primary font-medium rounded-r-md">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyPages.map((page) => (
          <TableRow key={page.id} className="text-sm">
            <TableCell className="text-center px-4 rounded-l-md">
              <Checkbox />
            </TableCell>
            <TableCell className="text-left font-medium">
              <div className="flex flex-col gap-1">
                <span>{page.name}</span>
                <div className="flex gap-1 text-xs">
                  <button className="text-primary hover:underline">View</button>
                  <span className="text-muted-foreground select-none">|</span>
                  <button className="text-red-600 hover:underline">
                    Trash
                  </button>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground text-center">
              {page.slug}
            </TableCell>
            <TableCell className="text-center">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  statusStyles[page.status]
                }`}
              >
                {page.status}
              </span>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground text-center">
              {page.author}
            </TableCell>
            <TableCell className="text-center text-sm text-muted-foreground">
              {page.lastUpdated}
            </TableCell>
            <TableCell className="text-center text-sm text-muted-foreground">
              {page.published}
            </TableCell>
            <TableCell className="text-center rounded-r-md">
              <div className="flex items-center justify-center gap-2">
                <Button
                  size="icon"
                  className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                  title="Unpublish / Suspend"
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
