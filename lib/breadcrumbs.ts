interface BreadcrumbItemType {
  title: string;
  href?: string;
}

interface NavSubItem {
  title: string;
  url: string;
}

interface NavMainItem {
  title: string;
  items?: NavSubItem[];
}

export function getBreadcrumbs(
  pathname: string,
  navMain: NavMainItem[]
): BreadcrumbItemType[] {
  if (!pathname || pathname === "/") {
    return [{ title: "Dashboard", href: "/" }];
  }

  const segments = pathname.split("/").filter(Boolean);

  for (const section of navMain) {
    if (!section.items) continue;

    for (const item of section.items) {
      const itemSegments = item.url.split("/").filter(Boolean);

      if (segments[0] === itemSegments[0]) {
        const crumbs: BreadcrumbItemType[] = [
          { title: section.title },
          { title: item.title, href: item.url },
        ];

        if (segments.length > itemSegments.length) {
          const actionSegment = segments[itemSegments.length];

          crumbs.push({
            title: formatSegment(actionSegment),
          });
        }

        return crumbs;
      }
    }
  }

  return [{ title: "Dashboard", href: "/" }];
}

// ------------------ FORMATTER ------------------

function formatSegment(segment: string) {
  if (!segment) return "";

  if (segment === "new") return "Create";
  if (segment === "edit") return "Edit";
  if (segment === "view") return "View";
  if (/^\d+$/.test(segment)) return "Details";

  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}