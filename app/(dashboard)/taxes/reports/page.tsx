import { InfoCard } from "@/components/info-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Download, FileText } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const reportSummary = [
  { region: "United States", taxCollected: "$12,450", orders: 342 },
  { region: "California, US", taxCollected: "$1,892", orders: 58 },
  { region: "European Union", taxCollected: "$8,240", orders: 124 },
  { region: "United Kingdom", taxCollected: "$3,120", orders: 67 },
];

export default function TaxReportsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="font-semibold text-xl">GST / VAT Reports</div>
      <div className="grid gap-4 grid-cols-3">
        <InfoCard title="Total tax collected" value="$25,702" />
        <InfoCard title="Orders in period" value="591" />
        <InfoCard title="Avg. tax per order" value="$43.49" />
      </div>
      <div className="flex gap-4 items-top justify-between">
        <Card className="p-4 w-[60%]">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg">Breakdown by region</div>
            <Button variant="outline" size="lg" className="gap-1.5">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
          <Table className="table-fixed w-full">
            <colgroup>
              <col className="w-[40%]" />
              <col className="w-[35%]" />
              <col className="w-[25%]" />
            </colgroup>
            <TableHeader className="h-12 text-base text-primary">
              <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
                <TableHead className="font-medium text-primary px-4 rounded-l-md">
                  Region
                </TableHead>
                <TableHead className="font-medium text-primary">
                  Tax collected
                </TableHead>
                <TableHead className="font-medium text-primary px-4 text-right rounded-r-md">
                  Orders
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportSummary.map((row) => (
                <TableRow key={row.region}>
                  <TableCell className="font-medium px-4">
                    {row.region}
                  </TableCell>
                  <TableCell className="font-medium">
                    {row.taxCollected}
                  </TableCell>
                  <TableCell className="text-right px-4 text-muted-foreground">
                    {row.orders}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <Card className="p-4 w-[40%]">
          <div className="font-semibold text-lg">Report filters</div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label>Date range</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Pick a date range</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="range" numberOfMonths={2} />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Region</Label>
              <Select>
                <SelectTrigger className="h-9 w-full">
                  <SelectValue placeholder="All regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All regions</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="eu">European Union</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Report type</Label>
              <Select>
                <SelectTrigger className="h-9 w-full">
                  <SelectValue placeholder="Summary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summary">GST/VAT summary</SelectItem>
                  <SelectItem value="by-order">By order</SelectItem>
                  <SelectItem value="by-rate">By tax rate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="gap-1.5 h-9">
              <FileText className="h-4 w-4" />
              Generate
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
