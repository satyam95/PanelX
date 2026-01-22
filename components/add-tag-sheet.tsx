import { Image, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Textarea } from "./ui/textarea";

interface AddTagSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddTagSheet({ open, onOpenChange }: AddTagSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] sm:w-[480px]">
        <SheetHeader>
          <SheetTitle>Add New Tag</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="space-y-1">
            <div className="font-semibold text-sm">Tag Name</div>
            <Input placeholder="Summer Sale" className="h-9" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">
              Tag Slug
              <span className="text-muted-foreground"> (Optional)</span>
            </div>
            <Input placeholder="summer-sale" className="h-9" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">
              Tag Image
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
            <div className="font-semibold text-sm">
              Description
              <span className="text-muted-foreground"> (Optional)</span>
            </div>
            <Textarea
              placeholder="Short description about this tag..."
              className="h-24"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <Button className="flex-1">Create Tag</Button>
            <Button variant="outline" className="flex-1">
              Save as Draft
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
