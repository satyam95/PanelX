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

type AttributeStatus = "Active" | "Inactive";

const statusStyles: Record<AttributeStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-gray-100 text-gray-700",
};

type Attribute = {
  id: number;
  name: string;
  slug: string;
  orderBy: string;
  terms: string[];
  type: string;
  visibility: string;
  status: "Active" | "Inactive";
};

const dummyAttributes: Attribute[] = [
  {
    id: 1,
    name: "Color",
    slug: "color",
    orderBy: "Name",
    terms: ["Blue", "Gray", "Green", "Red", "Yellow"],
    type: "Select",
    visibility: "Public",
    status: "Active",
  },
  {
    id: 2,
    name: "Size",
    slug: "size",
    orderBy: "Custom",
    terms: ["Small", "Medium", "Large"],
    type: "Select",
    visibility: "Public",
    status: "Active",
  },
  {
    id: 3,
    name: "Material",
    slug: "material",
    orderBy: "Name",
    terms: ["Cotton", "Leather", "Polyester"],
    type: "Select",
    visibility: "Public",
    status: "Active",
  },
];

export function AttributeTable() {
  return (
    <Table className="table-fixed w-full">
      <colgroup>
        <col className="w-[6%]" />
        <col className="w-[18%]" />
        <col className="w-[12%]" />
        <col className="w-[10%]" />
        <col className="w-[24%]" />
        <col className="w-[10%]" />
        <col className="w-[10%]" />
        <col className="w-[10%]" />
      </colgroup>

      <TableHeader className="h-14 text-base text-primary">
        <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
          <TableHead className="text-center text-primary rounded-l-md px-4">
            <Checkbox />
          </TableHead>
          <TableHead className="text-center text-primary font-medium">Name</TableHead>
          <TableHead className="text-center text-primary font-medium">Slug</TableHead>
          <TableHead className="text-center text-primary font-medium">Order By</TableHead>
          <TableHead className="text-center text-primary font-medium">Terms</TableHead>
          <TableHead className="text-center text-primary font-medium">Type</TableHead>
          <TableHead className="text-center text-primary font-medium">Visibility</TableHead>
          <TableHead className="text-center text-primary font-medium rounded-r-md">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {dummyAttributes.map((attr) => (
          <TableRow key={attr.id} className="text-sm">
            <TableCell className="text-center px-4 rounded-l-md">
              <Checkbox />
            </TableCell>

            <TableCell className="font-medium text-left">
              <div className="flex flex-col gap-1">
                <div>{attr.name}</div>
                <div className="flex gap-1 text-xs">
                  <button className="text-primary hover:underline">Edit</button>
                  <span className="text-muted-foreground">|</span>
                  <button className="text-red-600 hover:underline">
                    Trash
                  </button>
                </div>
              </div>
            </TableCell>

            <TableCell className="text-center text-xs text-muted-foreground">
              {attr.slug}
            </TableCell>

            <TableCell className="text-center">{attr.orderBy}</TableCell>

            <TableCell className="text-left">
              <div className="flex flex-col gap-1">
                <div className="text-xs text-muted-foreground line-clamp-2">
                  {attr.terms.join(", ")}
                </div>
                <button className="text-xs text-primary hover:underline w-fit">
                  Configure terms
                </button>
              </div>
            </TableCell>

            <TableCell className="text-center">{attr.type}</TableCell>

            <TableCell className="text-center">{attr.visibility}</TableCell>

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
