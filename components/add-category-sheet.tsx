import { ChevronDown, Image, RotateCcw } from "lucide-react";
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

interface AddCategorySheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddCategorySheet({
  open,
  onOpenChange,
}: AddCategorySheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] sm:w-[480px]">
        <SheetHeader>
          <SheetTitle>Add New Category</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 pt-0 space-y-4">
          <div className="space-y-1">
            <div className="font-semibold text-sm">Category Name</div>
            <Input placeholder="Electronics" className="h-9" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">
              Category Slug
              <span className="text-muted-foreground"> (Optional)</span>
            </div>
            <Input placeholder="electronics" className="h-9" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">
              Category Image
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
              Parent Category
              <span className="text-muted-foreground"> (Optional)</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 border-input bg-background text-sm w-full flex items-center justify-between"
                >
                  Select parent category
                  <ChevronDown className="ml-1.5 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Electronics</DropdownMenuItem>
                <DropdownMenuItem>Fashion</DropdownMenuItem>
                <DropdownMenuItem>Home & Kitchen</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm">
              Description
              <span className="text-muted-foreground"> (Optional)</span>
            </div>
            <Textarea
              placeholder="Short description about this category..."
              className="h-24"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <Button className="flex-1">Create Category</Button>
            <Button variant="outline" className="flex-1">
              Save as Draft
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
