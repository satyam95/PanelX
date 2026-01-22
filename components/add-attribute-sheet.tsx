import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Textarea } from "./ui/textarea";

interface AddAttributeSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddAttributeSheet({
  open,
  onOpenChange,
}: AddAttributeSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] sm:w-[480px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Add Attribute</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="space-y-1">
            <div className="font-semibold text-sm">Name</div>
            <Input placeholder="Color" className="h-9" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">
              Slug <span className="text-muted-foreground">(Optional)</span>
            </div>
            <Input placeholder="color" className="h-9" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">Default Sort Order</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 w-full justify-between"
                >
                  Name
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Name</DropdownMenuItem>
                <DropdownMenuItem>Name (numeric)</DropdownMenuItem>
                <DropdownMenuItem>Term ID</DropdownMenuItem>
                <DropdownMenuItem>Custom ordering</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">
              Description{" "}
              <span className="text-muted-foreground">(Optional)</span>
            </div>
            <Textarea
              placeholder="Describe how this attribute is used..."
              className="h-24"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <Button className="flex-1">Add Attribute</Button>
            <Button variant="outline" className="flex-1">
              Save as Draft
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
