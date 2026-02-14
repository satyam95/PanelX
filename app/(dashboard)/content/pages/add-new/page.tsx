import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  FileText,
  Send,
} from "lucide-react";

export default function AddNewStaticPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Add New Page</div>
        <div className="flex items-center gap-4">
          <Button className="gap-1.5 h-10" size="lg">
            <Send strokeWidth={3} className="h-4 w-4" />
            Publish Page
          </Button>
          <Button className="gap-1.5 h-10" variant="outline" size="lg">
            <FileText strokeWidth={3} className="h-4 w-4" />
            Save to draft
          </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-[65%]">
          <Card className="p-4">
            <div className="space-y-6">
              <div className="font-semibold text-lg">Page Content</div>
              <div className="space-y-1">
                <div className="font-semibold text-sm">Page Title</div>
                <Input placeholder="Enter page title" className="h-9" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-sm">Content</div>
                <Textarea
                  placeholder="Start writing your page content here..."
                  className="min-h-[420px]"
                />
                <p className="text-xs text-muted-foreground">
                  WYSIWYG editor will be integrated here
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-[35%]">
          <Card className="p-4 space-y-6">
            <div className="space-y-4">
              <div className="font-semibold text-lg">Page Settings</div>
              <div className="space-y-1">
                <div className="font-semibold text-sm">Page Slug</div>
                <Input placeholder="about-us" className="h-9" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-sm">Status</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 w-full flex items-center justify-between"
                    >
                      Draft
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Published</DropdownMenuItem>
                    <DropdownMenuItem>Draft</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-semibold text-sm">Visible</div>
                  <div className="text-xs text-muted-foreground">
                    Show page on website
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
