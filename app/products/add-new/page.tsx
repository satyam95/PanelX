import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarIcon,
  ChevronDown,
  FileText,
  Image,
  Plus,
  RotateCcw,
  Send,
  X,
} from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Add New Product</div>
        <div className="flex items-center justify-between gap-4">
          <Button className="gap-1.5 h-10" size="lg">
            <Send strokeWidth={3} className="h-4 w-4" />
            Publish Product
          </Button>
          <Button className="gap-1.5 h-10" variant="outline" size="lg">
            <FileText strokeWidth={3} className="h-4 w-4" />
            Save to draft
          </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-[60%]">
          <Card className="p-4">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="font-semibold text-lg">Basic Details</div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="font-semibold text-sm">Product Image</div>
                      <Input
                        placeholder="Enter your product Name"
                        className="w-full h-9"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-sm">
                        Product Short Description
                      </div>
                      <Textarea
                        placeholder="Enter your product short description..."
                        className="w-full h-24"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="font-semibold text-lg">Pricing</div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="font-semibold text-sm">Product Price</div>
                      <Input placeholder="$999.89" className="h-9" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="font-semibold text-sm">
                          Discounted Price{" "}
                          <span className="text-muted-foreground">
                            (Optional)
                          </span>
                        </div>
                        <Input placeholder="$599" className="h-9" />
                      </div>
                      <div className="space-y-1">
                        <div className="font-semibold text-sm">
                          Tax Included
                        </div>
                        <RadioGroup
                          defaultValue="yes"
                          className="flex flex-col gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="yes" id="tax-yes" />
                            <label htmlFor="tax-yes" className="text-sm">
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="no" id="tax-no" />
                            <label htmlFor="tax-no" className="text-sm">
                              No
                            </label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-sm">Expiration</div>
                      <div className="grid grid-cols-2 gap-4">
                        {/* Start Date */}
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="h-9 justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              Start
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>

                        {/* End Date */}
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="h-9 justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              End
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="font-semibold text-lg">Pricing</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="font-semibold text-sm">
                        Stock Quantity
                      </div>
                      <Input placeholder="100" className="h-9" />
                      <div className="flex items-center gap-2">
                        <Switch id="unlimited-stock" />
                        <label
                          htmlFor="unlimited-stock"
                          className="text-sm cursor-pointer"
                        >
                          Unlimited
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-sm">Stock Status</div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 border-input bg-background text-sm w-full flex items-center justify-between"
                          >
                            In Stock
                            <ChevronDown className="ml-1.5 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <DropdownMenuItem>In Stock</DropdownMenuItem>
                          <DropdownMenuItem>Out of Stock</DropdownMenuItem>
                          <DropdownMenuItem>Preorder</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                <Button className="gap-1.5 h-10" size="lg">
                  <Send strokeWidth={3} className="h-4 w-4" />
                  Publish Product
                </Button>
                <Button className="gap-1.5 h-10" variant="outline" size="lg">
                  <FileText strokeWidth={3} className="h-4 w-4" />
                  Save to draft
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-[40%]">
          <Card className="p-4">
            <div className="font-semibold text-lg">Upload Product Image</div>
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="font-semibold text-sm">Product Image</div>
                <div className="space-y-4">
                  <div className="relative w-full border h-60 bg-primary/10 rounded-md">
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="flex items-center justify-between p-2">
                        <Button
                          className="gap-1.5 h-8"
                          variant="outline"
                          size="sm"
                        >
                          <Image strokeWidth={3} className="h-4 w-4" />
                          Browse
                        </Button>
                        <Button
                          className="gap-1.5 h-8"
                          variant="outline"
                          size="sm"
                        >
                          <RotateCcw strokeWidth={3} className="h-4 w-4" />
                          Replace
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full grid auto-rows-min gap-4 grid-cols-3">
                    <div className="relative w-full h-26 border bg-primary/10 rounded-md">
                      <div className="absolute top-1 right-1">
                        <div className="w-4 h-4 border border-neutral-500 rounded-full flex items-center justify-center">
                          <X strokeWidth={2} className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full h-26 border bg-primary/10 rounded-md">
                      <div className="absolute top-1 right-1">
                        <div className="w-4 h-4 border border-neutral-500 rounded-full flex items-center justify-center">
                          <X strokeWidth={2} className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full h-26 border border-neutral-400 border-dashed rounded-md flex items-center justify-center">
                      <div className="flex flex-col gap-1 items-center justify-center">
                        <div className="w-6 h-6 bg-primary rounded-full  flex items-center justify-center text-white">
                          <Plus className="w-4 h-4" strokeWidth={3} />
                        </div>
                        <div className="text-sm font-medium text-primary">
                          Add Image
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="font-semibold text-lg">Categories</div>
                <div className="space-y-2">
                  <div className="font-semibold text-sm">
                    Product Categories
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 border-input bg-background text-sm w-full flex items-center justify-between"
                      >
                        Select your product category
                        <ChevronDown className="ml-1.5 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Electronics Mobile</DropdownMenuItem>
                      <DropdownMenuItem>Phones</DropdownMenuItem>
                      <DropdownMenuItem>Laptops</DropdownMenuItem>
                      <DropdownMenuItem>Fashion</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-sm">Product Tag</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 border-input bg-background text-sm w-full flex items-center justify-between"
                      >
                        Select your product tag
                        <ChevronDown className="ml-1.5 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Electronics Mobile</DropdownMenuItem>
                      <DropdownMenuItem>Phones</DropdownMenuItem>
                      <DropdownMenuItem>Laptops</DropdownMenuItem>
                      <DropdownMenuItem>Fashion</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
