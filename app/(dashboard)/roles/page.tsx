"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MoreHorizontal,
  Pencil,
  Plus,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const roles = [
  {
    id: 1,
    name: "Super Admin",
    key: "superadmin",
    usersCount: 1,
    description: "Full access",
    isSystem: true,
  },
  {
    id: 2,
    name: "Admin",
    key: "admin",
    usersCount: 3,
    description: "Manage store and content",
    isSystem: true,
  },
  {
    id: 3,
    name: "Editor",
    key: "editor",
    usersCount: 5,
    description: "Content and products",
    isSystem: false,
  },
  {
    id: 4,
    name: "Support",
    key: "support",
    usersCount: 8,
    description: "Orders and customers",
    isSystem: false,
  },
];

const permissionsByResource: { resource: string; actions: string[] }[] = [
  { resource: "Orders", actions: ["View", "Edit", "Refund"] },
  { resource: "Products", actions: ["View", "Create", "Edit", "Delete"] },
  { resource: "Customers", actions: ["View", "Edit"] },
  { resource: "Content", actions: ["View", "Create", "Edit", "Delete"] },
  { resource: "Settings", actions: ["View", "Edit"] },
];

export default function RolesPage() {
  const [permissionSheetOpen, setPermissionSheetOpen] = useState(false);

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Roles & Permissions</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="gap-1.5 h-10" size="lg">
              <Plus strokeWidth={3} className="h-4 w-4" />
              Add role
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add role</SheetTitle>
            </SheetHeader>
            <div className="p-4 pt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="roleName">Role name</Label>
                <Input
                  id="roleName"
                  placeholder="e.g. Manager"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roleKey">Key (unique)</Label>
                <Input id="roleKey" placeholder="manager" className="h-9" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roleDesc">Description</Label>
                <Input
                  id="roleDesc"
                  placeholder="Optional description"
                  className="h-9"
                />
              </div>
              <Button className="w-full">Create role</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Card className="p-4">
        <Table className="table-fixed w-full">
          <colgroup>
            <col className="w-[35%]" />
            <col className="w-[18%]" />
            <col className="w-[25%]" />
            <col className="w-[12%]" />
            <col className="w-[10%]" />
          </colgroup>
          <TableHeader className="h-14 text-base text-primary">
            <TableRow className="bg-primary/20 hover:bg-primary/20 !border-b-0">
              <TableHead className="font-medium text-primary px-4 rounded-l-md">
                Role
              </TableHead>
              <TableHead className="font-medium text-primary">Key</TableHead>
              <TableHead className="font-medium text-primary">
                Description
              </TableHead>
              <TableHead className="font-medium text-primary text-center">
                Users
              </TableHead>
              <TableHead className="font-medium text-primary text-center rounded-r-md">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((r) => (
              <TableRow key={r.id} className="hover:bg-muted/40">
                <TableCell className="px-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{r.name}</span>
                    {r.isSystem && (
                      <Badge variant="secondary" className="text-xs">
                        System
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground font-mono text-sm">
                  {r.key}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {r.description}
                </TableCell>
                <TableCell className="text-center">{r.usersCount}</TableCell>
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
                        {!r.isSystem && (
                          <>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Sheet open={permissionSheetOpen} onOpenChange={setPermissionSheetOpen}>
        <SheetContent className="sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Edit permissions: Editor</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              Select which actions this role can perform per resource.
            </p>
            <Card className="p-4">
              <div className="space-y-4">
                {permissionsByResource.map(({ resource, actions }) => (
                  <div key={resource} className="space-y-2">
                    <div className="font-medium text-sm">{resource}</div>
                    <div className="flex flex-wrap gap-4">
                      {actions.map((action) => (
                        <label
                          key={action}
                          className="flex items-center gap-2 cursor-pointer text-sm"
                        >
                          <Checkbox />
                          {action}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Button className="w-full">Save permissions</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
