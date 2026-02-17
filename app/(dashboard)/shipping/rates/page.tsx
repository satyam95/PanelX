"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const zones = [
  { id: "1", name: "Domestic" },
  { id: "2", name: "International" },
  { id: "3", name: "Rest of World" },
];

const rates = [
  {
    id: 1,
    name: "Standard",
    type: "Flat",
    description: "Affordable standard shipping for most domestic orders.",
    min: "—",
    max: "—",
    price: "$5.99",
    delivery: "5–7 days",
  },
  {
    id: 2,
    name: "Express",
    type: "Flat",
    description: "Fast delivery for urgent orders with priority handling.",
    min: "—",
    max: "—",
    price: "$12.99",
    delivery: "2–3 days",
  },
  {
    id: 3,
    name: "Free over $50",
    type: "Order value",
    description: "Free standard shipping for orders above $50.",
    min: "$50",
    max: "—",
    price: "Free",
    delivery: "5–7 days",
  },
  {
    id: 4,
    name: "By weight",
    type: "Weight",
    description: "Shipping cost calculated based on total package weight.",
    min: "0 kg",
    max: "5 kg",
    price: "$3.99",
    delivery: "5–10 days",
  },
];

export default function ShippingRatesPage() {
  const [selectedZone, setSelectedZone] = useState("1");

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Shipping Rates</div>
        <div className="flex items-center gap-2">
          <Select value={selectedZone} onValueChange={setSelectedZone}>
            <SelectTrigger className="w-48 h-10">
              <SelectValue placeholder="Select zone" />
            </SelectTrigger>
            <SelectContent>
              {zones.map((z) => (
                <SelectItem key={z.id} value={z.id}>
                  {z.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="gap-1.5 h-10" size="lg">
                <Plus strokeWidth={3} className="h-4 w-4" />
                Add rate
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add shipping rate</SheetTitle>
              </SheetHeader>
              <div className="p-4 pt-0 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="rateName">Rate name</Label>
                  <Input
                    id="rateName"
                    placeholder="e.g. Standard"
                    className="h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flat">Flat rate</SelectItem>
                      <SelectItem value="weight">Weight based</SelectItem>
                      <SelectItem value="order">Order value based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Optional description shown to customers"
                    className="min-h-[80px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min">Min</Label>
                    <Input id="min" placeholder="0" className="h-9" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max">Max</Label>
                    <Input id="max" placeholder="—" className="h-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" placeholder="0.00" className="h-9" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="delivery">Delivery estimate (days)</Label>
                  <Input id="delivery" placeholder="e.g. 5-7" className="h-9" />
                </div>
                <Button className="w-full">Add rate</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <Card className="p-4">
        <div className="mb-4 text-sm text-muted-foreground">
          Showing rates for:{" "}
          <span className="font-medium text-foreground">
            {zones.find((z) => z.id === selectedZone)?.name ?? "Domestic"}
          </span>
        </div>
        <Table className="table-fixed w-full">
          <colgroup>
            <col className="w-[18%]" />
            <col className="w-[12%]" />
            <col className="w-[22%]" />
            <col className="w-[14%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[14%]" />
          </colgroup>
          <TableHeader className="h-14 text-base text-primary">
            <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
              <TableHead className="font-medium text-primary px-4 rounded-l-md">
                Name
              </TableHead>
              <TableHead className="font-medium text-primary">Type</TableHead>
              <TableHead className="font-medium text-primary">
                Description
              </TableHead>
              <TableHead className="font-medium text-center text-primary">
                Min – Max
              </TableHead>
              <TableHead className="font-medium text-primary text-center ">
                Price
              </TableHead>
              <TableHead className="font-medium text-primary text-center">
                Delivery
              </TableHead>
              <TableHead className="font-medium text-primary text-center rounded-r-md">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rates.map((r) => (
              <TableRow key={r.id} className="hover:bg-muted/40">
                <TableCell className="font-medium px-4">{r.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {r.type}
                </TableCell>
                <TableCell className="text-muted-foreground align-top">
                  <div className="max-w-full whitespace-normal break-words">
                    <p className="line-clamp-2 leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-center text-sm">
                  {r.min} – {r.max}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {r.price}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm text-center">
                  {r.delivery}
                </TableCell>
                <TableCell className=" text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
