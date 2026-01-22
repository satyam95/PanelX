import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Textarea } from "./ui/textarea";

interface ConfigureTermsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ConfigureTermsSheet({
  open,
  onOpenChange,
}: ConfigureTermsSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] sm:w-[480px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Configure Terms</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="space-y-1">
            <div className="font-semibold text-sm">Name</div>
            <Input placeholder="Blue" className="h-9" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">
              Slug <span className="text-muted-foreground">(Optional)</span>
            </div>
            <Input placeholder="blue" className="h-9" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">
              Description{" "}
              <span className="text-muted-foreground">(Optional)</span>
            </div>
            <Textarea
              placeholder="Short description for this term..."
              className="h-24"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <Button className="flex-1">Add Term</Button>
            <Button variant="outline" className="flex-1">
              Save as Draft
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
