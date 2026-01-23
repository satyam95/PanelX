import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

export type TicketStatus = "Open" | "In Progress" | "Resolved" | "Closed";
export type TicketPriority = "Low" | "Medium" | "High";

export type Ticket = {
  id: string;
  subject: string;
  customer: string;
  priority: TicketPriority;
  status: TicketStatus;
  assignedTo: string;
  lastUpdated: string;
  createdAt: string;
};

type TicketDetailsSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ticket: Ticket | null;
};

export function TicketDetailsSheet({
  open,
  onOpenChange,
  ticket,
}: TicketDetailsSheetProps) {
  if (!ticket) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] sm:w-[520px]">
        <SheetHeader className="space-y-1">
          <SheetTitle className="text-lg font-semibold">
            {ticket.subject}
          </SheetTitle>
          <p className="text-sm text-muted-foreground">
            Ticket ID: {ticket.id}
          </p>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="space-y-1 text-sm">
            <div className="flex justify-start gap-2">
              <span className="text-muted-foreground">Customer:</span>
              <span className="font-medium">{ticket.customer}</span>
            </div>
            <div className="flex justify-start gap-2">
              <span className="text-muted-foreground">Created:</span>
              <span>{ticket.createdAt}</span>
            </div>
            <div className="flex justify-start gap-2">
              <span className="text-muted-foreground">Last Updated:</span>
              <span>{ticket.lastUpdated}</span>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <div className="space-y-1">
              <label className="text-sm font-medium">Priority</label>
              <Select defaultValue={ticket.priority}>
                <SelectTrigger className="h-9 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Status</label>
              <Select defaultValue={ticket.status}>
                <SelectTrigger className="h-9 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Assigned To</label>
              <Input
                defaultValue={ticket.assignedTo}
                className="h-9"
                placeholder="Assign to user or team"
              />
            </div>
          </div>
          <Separator />
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button className="flex-1">Save Changes</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
