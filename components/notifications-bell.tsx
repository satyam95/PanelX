"use client";

import { Bell, Package, AlertTriangle, RotateCcw } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const notifications = [
  { id: 1, label: "New order received", icon: Package },
  { id: 2, label: "Low stock: iPhone 15", icon: AlertTriangle },
  { id: 3, label: "Return request submitted", icon: RotateCcw },
];

export function NotificationsBell() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-8 w-8" />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-xs">
            {notifications.length}
          </Badge>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {notifications.map((item) => (
          <DropdownMenuItem key={item.id} className="gap-2">
            <item.icon className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
