import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

type UserStatus = "Active" | "Suspended" | "Invited";

type User = {
  name: string;
  email: string;
  phone: string;
  role: string;
  status: UserStatus;
  lastLogin: string;
  createdAt: string;
};

const statusStyles: Record<UserStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Suspended: "bg-yellow-100 text-yellow-700",
  Invited: "bg-blue-100 text-blue-700",
};

type UserDetailsSheetProps = {
  user: User | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function UserDetailsSheet({
  user,
  open,
  onOpenChange,
}: UserDetailsSheetProps) {
  if (!user) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] sm:w-[480px]">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">
            User Details
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="flex items-center justify-start gap-2">
            <span className="text-muted-foreground">Name:</span>
            <span className="font-medium">{user.name}</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <span className="text-muted-foreground">Email:</span>
            <span className="font-medium">{user.email}</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <span className="text-muted-foreground">Phone:</span>
            <span className="font-medium">{user.phone}</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <span className="text-muted-foreground">Role:</span>
            <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              {user.role}
            </span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <span className="text-muted-foreground">Status:</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[user.status]}`}
            >
              {user.status}
            </span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <span className="text-muted-foreground">Last Login:</span>
            <span className="font-medium">{user.lastLogin}</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <span className="text-muted-foreground">Created At:</span>
            <span className="font-medium">{user.createdAt}</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
