import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Switch } from "@/components/ui/switch";
import { MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const rules = [
  {
    id: 1,
    name: "US Standard",
    region: "United States",
    rate: "0%",
    productType: "—",
    priority: 1,
    enabled: true,
  },
  {
    id: 2,
    name: "California",
    region: "California, US",
    rate: "7.25%",
    productType: "—",
    priority: 2,
    enabled: true,
  },
  {
    id: 3,
    name: "EU VAT",
    region: "European Union",
    rate: "20%",
    productType: "—",
    priority: 1,
    enabled: true,
  },
  {
    id: 4,
    name: "UK VAT",
    region: "United Kingdom",
    rate: "20%",
    productType: "—",
    priority: 1,
    enabled: true,
  },
  {
    id: 5,
    name: "Digital goods EU",
    region: "EU",
    rate: "20%",
    productType: "Digital",
    priority: 3,
    enabled: true,
  },
];

export default function TaxRulesPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Tax Rules</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="gap-1.5 h-10" size="lg">
              <Plus strokeWidth={3} className="h-4 w-4" />
              Add rule
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add tax rule</SheetTitle>
            </SheetHeader>
            <div className="p-4 pt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ruleName">Rule name</Label>
                <Input
                  id="ruleName"
                  placeholder="e.g. California"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label>Country / region</Label>
                <Select>
                  <SelectTrigger className="h-9 w-full">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca-us">California, US</SelectItem>
                    <SelectItem value="eu">European Union</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate">Tax rate (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  placeholder="0"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label>Product type (optional)</Label>
                <Select>
                  <SelectTrigger className="h-9 w-full">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="digital">Digital</SelectItem>
                    <SelectItem value="physical">Physical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Input
                  id="priority"
                  type="number"
                  defaultValue="1"
                  className="h-9"
                />
              </div>
              <Button className="w-full">Add rule</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Card className="p-4">
        <Table className="table-fixed w-full">
          <colgroup>
            <col className="w-[18%]" />
            <col className="w-[20%]" />
            <col className="w-[12%]" />
            <col className="w-[16%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[14%]" />
          </colgroup>
          <TableHeader className="h-14 text-base text-primary">
            <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
              <TableHead className="font-medium text-primary px-4 rounded-l-md">
                Name
              </TableHead>
              <TableHead className="font-medium text-primary">Region</TableHead>
              <TableHead className="font-medium text-primary text-center">
                Rate
              </TableHead>
              <TableHead className="font-medium text-primary text-center">
                Product type
              </TableHead>
              <TableHead className="font-medium text-primary text-center">
                Priority
              </TableHead>
              <TableHead className="font-medium text-primary text-center">
                Enabled
              </TableHead>
              <TableHead className="font-medium text-primary text-center rounded-r-md">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rules.map((r) => (
              <TableRow key={r.id} className="hover:bg-muted/40">
                <TableCell className="font-medium px-4">{r.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {r.region}
                </TableCell>
                <TableCell className="text-right font-medium text-center">
                  {r.rate}
                </TableCell>
                <TableCell className="text-muted-foreground text-center">
                  {r.productType}
                </TableCell>
                <TableCell className="text-center">{r.priority}</TableCell>
                <TableCell className="text-center">
                  <Switch checked={r.enabled} />
                </TableCell>
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
      </Card>
    </div>
  );
}
