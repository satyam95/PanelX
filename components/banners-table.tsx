import { ImageIcon, Pause, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";

type BannersTableProps = {
  limit?: number;
};

type BannerStatus = "Published" | "Draft" | "Scheduled" | "Archived";

type Banner = {
  id: number;
  name: string;
  status: BannerStatus;
  author: string;
  lastUpdated: string;
  published: string;
};

const statusStyles: Record<BannerStatus, string> = {
  Published: "bg-green-100 text-green-700",
  Draft: "bg-gray-100 text-gray-700",
  Scheduled: "bg-blue-100 text-blue-700",
  Archived: "bg-orange-100 text-orange-700",
};

const dummyBanners: Banner[] = [
  {
    id: 1,
    name: "Summer Sale 2025",
    status: "Published",
    author: "Marketing Team",
    lastUpdated: "Jan 15, 2026",
    published: "Jun 01, 2025",
  },
  {
    id: 2,
    name: "New Year 2026 Special",
    status: "Scheduled",
    author: "Sarah Chen",
    lastUpdated: "Jan 18, 2026",
    published: "Jan 25, 2026",
  },
  {
    id: 3,
    name: "Winter Clearance",
    status: "Draft",
    author: "Mike Torres",
    lastUpdated: "Jan 19, 2026",
    published: "—",
  },
  {
    id: 4,
    name: "Black Friday 2025",
    status: "Published",
    author: "Emma Wilson",
    lastUpdated: "Nov 20, 2025",
    published: "Nov 15, 2025",
  },
  {
    id: 5,
    name: "Old Cyber Monday Banner",
    status: "Archived",
    author: "John Doe",
    lastUpdated: "Dec 10, 2025",
    published: "—",
  },
];

export function BannersTable({ limit }: BannersTableProps) {
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
            <ImageIcon className="mx-auto h-4 w-4 text-primary" />
          </TableHead>
          <TableHead className="text-center text-primary font-medium">
            Name
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
        {dummyBanners.map((banner) => (
          <TableRow key={banner.id} className="text-sm">
            <TableCell className="text-center px-4 rounded-l-md">
              <Checkbox />
            </TableCell>
            <TableCell className="text-center">
              <div className="mx-auto h-20 w-[90%] rounded-sm border bg-primary/10" />
            </TableCell>
            <TableCell className="text-left font-medium">
              <div className="flex flex-col gap-1">
                <span>{banner.name}</span>
                <div className="flex gap-1 text-xs">
                  <button className="text-primary hover:underline">View</button>
                  <span className="text-muted-foreground select-none">|</span>
                  <button className="text-red-600 hover:underline">
                    Trash
                  </button>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <span
                className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[banner.status]}`}
              >
                {banner.status}
              </span>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground text-center">
              {banner.author}
            </TableCell>
            <TableCell className="text-center text-sm text-muted-foreground">
              {banner.lastUpdated}
            </TableCell>
            <TableCell className="text-center text-sm text-muted-foreground">
              {banner.published}
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
