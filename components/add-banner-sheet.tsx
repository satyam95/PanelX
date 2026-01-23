import { CalendarIcon, Image, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";

type AddBannerSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AddBannerSheet({ open, onOpenChange }: AddBannerSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] sm:w-[420px]">
        <SheetHeader>
          <SheetTitle>Add New Banner</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Banner Name</label>
            <Input placeholder="Enter banner name" />
          </div>
          <div className="space-y-1">
            <div className="font-medium text-sm">
              Banner Image
              <span className="text-muted-foreground"> (Optional)</span>
            </div>
            <div className="relative w-full border h-40 bg-primary/10 rounded-md">
              <div className="absolute bottom-0 left-0 w-full">
                <div className="flex items-center justify-between p-2">
                  <Button className="gap-1.5 h-8" variant="outline" size="sm">
                    <Image strokeWidth={3} className="h-4 w-4" />
                    Browse
                  </Button>
                  <Button className="gap-1.5 h-8" variant="outline" size="sm">
                    <RotateCcw strokeWidth={3} className="h-4 w-4" />
                    Replace
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Status</label>
            <Select defaultValue="draft">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-1 flex-col">
            <label className="text-sm font-medium">Publish Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-9 justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Date
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              className="h-10 flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button className="h-10 flex-1">Save Banner</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
