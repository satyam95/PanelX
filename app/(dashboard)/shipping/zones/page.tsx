import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

const zones = [
  {
    id: 1,
    name: "Domestic",
    description: "All shipments within the United States",
    regionsCount: 1,
    ratesCount: 3,
  },
  {
    id: 2,
    name: "International",
    description: "Canada, Mexico, and European Union countries",
    regionsCount: 3,
    ratesCount: 5,
  },
  {
    id: 3,
    name: "Rest of World",
    description: "All remaining countries not covered above",
    regionsCount: 1,
    ratesCount: 2,
  },
];

export default function ShippingZonesPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Shipping Zones</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="gap-1.5 h-10" size="lg">
              <Plus strokeWidth={3} className="h-4 w-4" />
              Add zone
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add shipping zone</SheetTitle>
            </SheetHeader>
            <div className="p-4 pt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="zoneName">Zone name</Label>
                <Input
                  id="zoneName"
                  placeholder="e.g. Domestic"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description for internal reference"
                  className="min-h-[80px] resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label>Countries / regions</Label>
                <Input placeholder="Select countries..." className="h-9" />
                <p className="text-xs text-muted-foreground">
                  Add countries or regions that belong to this zone
                </p>
              </div>
              <Button className="w-full">Create zone</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Card className="p-4">
        <Table className="table-fixed w-full">
          <colgroup>
            <col className="w-[22%]" />
            <col className="w-[28%]" />
            <col className="w-[20%]" />
            <col className="w-[15%]" />
            <col className="w-[15%]" />
          </colgroup>
          <TableHeader className="h-14 text-base text-primary">
            <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
              <TableHead className="font-medium text-primary px-4 rounded-l-md">
                Zone name
              </TableHead>
              <TableHead className="font-medium text-primary">
                Description
              </TableHead>
              <TableHead className="font-medium text-primary text-center">
                Regions
              </TableHead>
              <TableHead className="font-medium text-primary text-center">
                Rates
              </TableHead>
              <TableHead className="font-medium text-primary text-center rounded-r-md">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {zones.map((z) => (
              <TableRow key={z.id}>
                <TableCell className="px-4 font-medium">{z.name}</TableCell>
                <TableCell className="text-muted-foreground align-top">
                  <div className="max-w-full whitespace-normal break-words">
                    <p className="line-clamp-2 leading-relaxed">
                      {z.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-center">{z.regionsCount}</TableCell>
                <TableCell className="text-center">{z.ratesCount}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1">
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
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
