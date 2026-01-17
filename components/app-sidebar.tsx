// components/app-sidebar.tsx
"use client";

import * as React from "react";
import { Minus, Plus, Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";

interface NavSubItem {
  title: string;
  url: string;
}

interface NavMainItem {
  title: string;
  url?: string;
  items?: NavSubItem[];
}

interface SidebarUser {
  name: string;
  email: string;
  avatar: string;
}

interface SidebarData {
  user: SidebarUser;
  navMain: NavMainItem[];
}

export const data: SidebarData = {
  user: {
    name: "Satyam (SUPERADMIN)",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "/" },
    {
      title: "Inventory Management",
      items: [
        { title: "Products", url: "/products" },
        { title: "Categories", url: "/categories" },
        { title: "Attributes", url: "/attributes" },
      ],
    },
    {
      title: "Order Management",
      items: [
        { title: "Orders", url: "/orders" },
        { title: "Returns & Refunds", url: "/returns" },
      ],
    },
    {
      title: "Customer Management",
      items: [
        { title: "Customers", url: "/customers" },
        { title: "Customer Support Tickets", url: "/support" },
      ],
    },
    {
      title: "Admin & Roles",
      items: [{ title: "Users & Roles", url: "/users" }],
    },
    {
      title: "App Content",
      items: [
        { title: "App Banners", url: "/banners" },
        { title: "Legal & Info Pages", url: "/static-pages" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Store strokeWidth={2} className="!size-6" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">PanelX</span>
                  <span className="text-xs">v0.0.1</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-1">
            {data.navMain.map((item) => {
              const hasUrl = !!item.url;
              const isGroupActive =
                item.items?.some((sub) => pathname.startsWith(sub.url)) ??
                false;
              const hasItems = item.items && item.items.length > 0;

              return (
                <Collapsible
                  key={item.title}
                  defaultOpen={hasUrl ? pathname === item.url : isGroupActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    {/* Always use asChild=true on CollapsibleTrigger */}
                    <CollapsibleTrigger asChild>
                      {hasUrl ? (
                        <SidebarMenuButton
                          asChild
                          className={cn(
                            "font-medium",
                            pathname === item.url &&
                              "bg-accent text-accent-foreground"
                          )}
                        >
                          <Link href={item.url!}>
                            {item.title}
                            {hasItems && (
                              <>
                                <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                                <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                              </>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      ) : (
                        <SidebarMenuButton
                          className={cn("cursor-pointer font-medium")}
                        >
                          {item.title}
                          {hasItems && (
                            <>
                              <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                              <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                            </>
                          )}
                        </SidebarMenuButton>
                      )}
                    </CollapsibleTrigger>

                    {hasItems && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items!.map((subItem) => {
                            const isSubActive = pathname === subItem.url;
                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className={cn(
                                    isSubActive &&
                                      "bg-accent text-accent-foreground"
                                  )}
                                >
                                  <Link href={subItem.url}>
                                    {subItem.title}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
