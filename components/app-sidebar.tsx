"use client";

import * as React from "react";
import { CreditCard, FileText, Landmark, LayoutDashboard, LucideIcon, Megaphone, Minus, Package, Plus, ShieldCheck, ShoppingCart, Store, Truck, Users } from "lucide-react";
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
  icon?: LucideIcon;
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
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      items: [{ title: "Overview", url: "/" }],
    },

    {
      title: "Orders",
      icon: ShoppingCart,
      items: [
        { title: "All Orders", url: "/orders" },
        { title: "Returns & Refunds", url: "/orders/returns" },
      ],
    },

    {
      title: "Products",
      icon: Package,
      items: [
        { title: "All Products", url: "/products" },
        { title: "Categories", url: "/products/categories" },
        { title: "Tags", url: "/products/tags" },
        { title: "Attributes", url: "/products/attributes" },
        { title: "Reviews", url: "/products/reviews" },
      ],
    },

    {
      title: "Customers",
      icon: Users,
      items: [
        { title: "All Customers", url: "/customers" },
        { title: "Support Tickets", url: "/customers/support" },
      ],
    },

    {
      title: "Marketing",
      icon: Megaphone,
      items: [
        { title: "Coupons", url: "/marketing/coupons" },
        { title: "Push Notifications", url: "/marketing/push" },
      ],
    },

    {
      title: "Content",
      icon: FileText,
      items: [
        { title: "Posts", url: "/content/posts" },
        { title: "Post Categories", url: "/content/posts/categories" },
        { title: "Post Tags", url: "/content/posts/tags" },
        { title: "App Banners", url: "/content/banners" },
        { title: "Pages", url: "/content/pages" },
        { title: "Menus", url: "/content/menus" },
      ],
    },

    {
      title: "Payments",
      icon: CreditCard,
      items: [
        { title: "Transactions", url: "/payments/transactions" },
      ],
    },

    {
      title: "Shipping",
      icon: Truck,
      items: [
        { title: "Shipping Zones", url: "/shipping/zones" },
        { title: "Shipping Rates", url: "/shipping/rates" },
      ],
    },

    {
      title: "Taxes",
      icon: Landmark,
      items: [
        { title: "Tax Rules", url: "/taxes/rules" },
        { title: "GST / VAT Reports", url: "/taxes/reports" },
      ],
    },

    {
      title: "Users & Roles",
      icon: ShieldCheck,
      items: [
        { title: "Users", url: "/users" },
        { title: "Roles & Permissions", url: "/roles" },
      ],
    },
  ]
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
              const isGroupActive =
                item.items?.some(
                  (sub) =>
                    pathname === sub.url ||
                    pathname.startsWith(sub.url + "/")
                ) ?? false;

              const Icon = item.icon;

              return (
                <Collapsible
                  key={item.title}
                  defaultOpen={isGroupActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="font-medium">
                        {Icon && <Icon className="size-4" />}
                        <span>{item.title}</span>
                        {item.items && (
                          <>
                            <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                            <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                          </>
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    {item.items && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => {
                            const isSubActive =
                              pathname === subItem.url ||
                              pathname.startsWith(subItem.url + "/");

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
