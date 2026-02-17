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
import { GripVertical, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const menus = [
  { id: "header", name: "Header", itemsCount: 6 },
  { id: "footer", name: "Footer", itemsCount: 4 },
  { id: "mobile", name: "Mobile", itemsCount: 5 },
];

const menuItems: Record<
  string,
  { id: number; label: string; url: string; order: number }[]
> = {
  header: [
    { id: 1, label: "Home", url: "/", order: 1 },
    { id: 2, label: "Shop", url: "/shop", order: 2 },
    { id: 3, label: "Categories", url: "/categories", order: 3 },
    { id: 4, label: "Deals", url: "/deals", order: 4 },
    { id: 5, label: "Blog", url: "/blog", order: 5 },
    { id: 6, label: "Contact", url: "/contact", order: 6 },
  ],
  footer: [
    { id: 7, label: "About", url: "/about", order: 1 },
    { id: 8, label: "Privacy", url: "/privacy", order: 2 },
    { id: 9, label: "Terms", url: "/terms", order: 3 },
    { id: 10, label: "Contact", url: "/contact", order: 4 },
  ],
  mobile: [
    { id: 11, label: "Home", url: "/", order: 1 },
    { id: 12, label: "Shop", url: "/shop", order: 2 },
    { id: 13, label: "Account", url: "/account", order: 3 },
    { id: 14, label: "Cart", url: "/cart", order: 4 },
    { id: 15, label: "More", url: "#", order: 5 },
  ],
};

export default function MenusPage() {
  const [selectedMenu, setSelectedMenu] = useState("header");
  const items = menuItems[selectedMenu] ?? [];

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Menus</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="gap-1.5 h-10" size="lg">
              <Plus strokeWidth={3} className="h-4 w-4" />
              Add menu
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add menu</SheetTitle>
            </SheetHeader>
            <div className="p-4 pt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="menuName">Menu name</Label>
                <Input
                  id="menuName"
                  placeholder="e.g. Sidebar"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="menuKey">Key (unique)</Label>
                <Input id="menuKey" placeholder="sidebar" className="h-9" />
              </div>
              <Button className="w-full">Create menu</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-4 lg:col-span-1">
          <div className="font-semibold text-lg">Select menu</div>
          <Select value={selectedMenu} onValueChange={setSelectedMenu}>
            <SelectTrigger className="w-full h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {menus.map((m) => (
                <SelectItem key={m.id} value={m.id}>
                  {m.name} ({m.itemsCount} items)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="space-y-2">
            {menus.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedMenu(m.id)}
                className={`w-full flex items-center justify-between rounded-lg border p-3 text-left text-sm transition-colors ${
                  selectedMenu === m.id
                    ? "border-primary bg-primary/10"
                    : "hover:bg-muted/50"
                }`}
              >
                <span className="font-medium">{m.name}</span>
                <span className="text-muted-foreground">
                  {m.itemsCount} items
                </span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg">
              Menu:{" "}
              {menus.find((m) => m.id === selectedMenu)?.name ?? selectedMenu}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="lg" className="gap-1.5">
                  <Plus className="h-4 w-4" />
                  Add item
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Add menu item</SheetTitle>
                </SheetHeader>
                <div className="p-4 pt-0 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="label">Label</Label>
                    <Input id="label" placeholder="e.g. Home" className="h-9" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      placeholder="/ or https://..."
                      className="h-9"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Parent item</Label>
                    <Select>
                      <SelectTrigger className="h-10 w-full">
                        <SelectValue placeholder="None (top level)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None (top level)</SelectItem>
                        {items.map((i) => (
                          <SelectItem key={i.id} value={String(i.id)}>
                            {i.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Add item</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Table className="table-fixed w-full">
            <colgroup>
              <col className="w-[8%]" />
              <col className="w-[32%]" />
              <col className="w-[45%]" />
              <col className="w-[15%]" />
            </colgroup>
            <TableHeader className="h-12 text-base text-primary">
              <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
                <TableHead className="rounded-l-md"></TableHead>
                <TableHead className="font-medium text-primary">
                  Label
                </TableHead>
                <TableHead className="font-medium text-primary">URL</TableHead>
                <TableHead className="font-medium text-primary text-center rounded-r-md">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-muted-foreground cursor-grab px-4">
                    <GripVertical className="h-4 w-4" />
                  </TableCell>
                  <TableCell className="font-medium">{item.label}</TableCell>
                  <TableCell className="text-muted-foreground font-mono text-sm">
                    {item.url}
                  </TableCell>
                  <TableCell className="text-center">
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
          {items.length === 0 && (
            <div className="py-12 text-center text-muted-foreground text-sm">
              No items in this menu. Add an item to get started.
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
