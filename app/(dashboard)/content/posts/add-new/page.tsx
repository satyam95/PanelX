import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarIcon,
  ChevronDown,
  Eye,
  FileText,
  Image as ImageIcon,
  RotateCcw,
  Send,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function AddNewPostPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/content/posts">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="font-semibold text-xl">Add New Post</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="lg" className="gap-1.5 h-10">
            <Eye className="h-4 w-4" />
            Preview
          </Button>
          <Button variant="outline" size="lg" className="gap-1.5 h-10">
            <FileText className="h-4 w-4" />
            Save draft
          </Button>
          <Button size="lg" className="gap-1.5 h-10">
            <Send className="h-4 w-4" />
            Publish
          </Button>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-6">
          <Card className="p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Post title</Label>
                <Input
                  id="title"
                  placeholder="Enter post title"
                  className="h-10 text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label>Content</Label>
                <Textarea
                  placeholder="Write your post content here..."
                  className="min-h-[420px] resize-y"
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="w-[340px] shrink-0 space-y-6">
          <Card className="p-4">
            <div className="space-y-4">
              <div className="font-semibold text-lg">Featured image</div>
              <div className="relative w-full border h-40 bg-primary/10 rounded-md">
                <div className="absolute bottom-0 left-0 w-full">
                  <div className="flex items-center justify-between p-2">
                    <Button className="gap-1.5 h-8" variant="outline" size="sm">
                      <ImageIcon strokeWidth={3} className="h-4 w-4" />
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
          </Card>
          <Card className="p-4">
            <div className="font-semibold text-lg">Publish</div>
            <div className="space-y-2">
              <Label>Status</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 w-full justify-between"
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
            <div className="space-y-2">
              <Label>Publish date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Start
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>
          </Card>
          <Card className="p-4">
            <div className="font-semibold text-lg">Category</div>
            <Select>
              <SelectTrigger className="h-9 w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wellness">Wellness</SelectItem>
                <SelectItem value="news">News</SelectItem>
                <SelectItem value="guides">Guides</SelectItem>
                <SelectItem value="blog">Blog</SelectItem>
              </SelectContent>
            </Select>
          </Card>
          <Card className="p-4">
            <div className="font-semibold text-lg">Tags</div>
            <Input placeholder="Add tags (comma separated)" className="h-9" />
          </Card>
        </div>
      </div>
    </div>
  );
}
