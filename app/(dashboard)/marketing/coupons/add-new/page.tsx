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
import { CalendarIcon, Save } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function AddCouponPage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Add New Coupon</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="lg" className="gap-1.5 h-10">
            Save as draft
          </Button>
          <Button size="lg" className="gap-1.5 h-10">
            <Save className="h-4 w-4" />
            Save Coupon
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="p-4">
            <div className="space-y-4">
              <div className="font-semibold text-lg">Basic details</div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="code">Coupon code</Label>
                  <Input
                    id="code"
                    placeholder="e.g. WELCOME10"
                    className="h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select defaultValue="percentage">
                    <SelectTrigger className="h-9 w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage</SelectItem>
                      <SelectItem value="fixed">Fixed amount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="value">Value</Label>
                  <Input id="value" placeholder="10 or 20" className="h-9" />
                  <p className="text-xs text-muted-foreground">
                    % or fixed amount in currency
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minOrder">Minimum order amount</Label>
                  <Input id="minOrder" placeholder="0" className="h-9" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="maxDiscount">
                    Maximum discount (optional)
                  </Label>
                  <Input
                    id="maxDiscount"
                    placeholder="Leave empty for no cap"
                    className="h-9"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="description">Description (optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Internal or customer-facing note"
                    className="min-h-20"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="p-4">
            <div className="space-y-4">
              <div className="font-semibold text-lg">Validity</div>
              <div className="space-y-2">
                <Label>Valid from</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-9 w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Select date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Valid to</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-9 w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Select date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="usageLimit">Usage limit (optional)</Label>
                <Input
                  id="usageLimit"
                  type="number"
                  placeholder="Unlimited"
                  className="h-9"
                />
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="space-y-4">
              <div className="font-semibold text-lg">Scope (optional)</div>
              <p className="text-sm text-muted-foreground">
                Restrict to specific products or categories. Leave empty for
                site-wide.
              </p>
              <div className="space-y-2">
                <Label>Applicable products</Label>
                <Select>
                  <SelectTrigger className="h-9 w-full">
                    <SelectValue placeholder="All products" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All products</SelectItem>
                    <SelectItem value="specific">Specific products</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Applicable categories</Label>
                <Select>
                  <SelectTrigger className="h-9 w-full">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    <SelectItem value="specific">
                      Specific categories
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
