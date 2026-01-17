"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { data } from "@/components/app-sidebar";
import { getBreadcrumbs } from "@/lib/breadcrumbs";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchForm } from "./search-form";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Image,
  Layers,
  Package,
  Plus,
  RotateCcw,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { NotificationsBell } from "./notifications-bell";

export function AppHeader() {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname, data.navMain);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2"
      />

      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <React.Fragment key={crumb.title}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                  ) : (
                    <span className="text-muted-foreground">{crumb.title}</span>
                  )}
                </BreadcrumbItem>

                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-2">
        <SearchForm />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              className="rounded-full h-9 w-9"
              aria-label="Quick actions"
            >
              <Plus className="h-6 w-6" width={6} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="min-w-48">
            <DropdownMenuItem asChild>
              <Link href="/products/new">
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/orders">
                <Package className="mr-2 h-4 w-4" />
                View Orders
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/categories/new">
                <Layers className="mr-2 h-4 w-4" />
                Add Category
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/banners/new">
                <Image className="mr-2 h-4 w-4" />
                Create Banner
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/returns">
                <RotateCcw className="mr-2 h-4 w-4" />
                View Returns
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <NotificationsBell />
      </div>
    </header>
  );
}
