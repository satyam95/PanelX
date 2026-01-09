interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface NavSubItem {
  title: string;
  url: string;
}

interface NavMainItem {
  title: string;
  url?: string;
  items?: NavSubItem[];
}

export function getBreadcrumbs(
  pathname: string,
  navMain: NavMainItem[]
): BreadcrumbItem[] {
  // Dashboard
  if (pathname === "/" || pathname === "/dashboard") {
    return [{ title: "Dashboard" }];
  }

  for (const section of navMain) {
    if (section.items) {
      const match = section.items.find((item) =>
        pathname.startsWith(item.url)
      );

      if (match) {
        return [
          { title: section.title },
          { title: match.title },
        ];
      }
    }

    if (section.url && pathname === section.url) {
      return [{ title: section.title }];
    }
  }

  return [{ title: "Dashboard" }];
}
