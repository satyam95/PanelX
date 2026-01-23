import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CalendarIcon,
  ChevronDown,
  FileText,
  Send,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function AddNewTicketPage() {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">Add New Ticket</div>
        <div className="flex items-center gap-4">
          <Button className="gap-1.5 h-10" size="lg">
            <Send strokeWidth={3} className="h-4 w-4" />
            Create Ticket
          </Button>
          <Button className="gap-1.5 h-10" variant="outline" size="lg">
            <FileText strokeWidth={3} className="h-4 w-4" />
            Save as Draft
          </Button>
        </div>
      </div>

      {/* Layout */}
      <div className="flex gap-4">
        {/* Left Column */}
        <div className="w-[60%]">
          <Card className="p-4">
            <div className="space-y-10">
              {/* Basic Details */}
              <div className="space-y-6">
                <div className="font-semibold text-lg">Ticket Details</div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="font-semibold text-sm">Subject</div>
                    <Input
                      placeholder="Enter ticket subject"
                      className="h-9"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="font-semibold text-sm">Description</div>
                    <Textarea
                      placeholder="Describe the issue in detail..."
                      className="h-32"
                    />
                  </div>
                </div>
              </div>

              {/* Customer Details */}
              <div className="space-y-6">
                <div className="font-semibold text-lg">Customer Details</div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="font-semibold text-sm">Customer Name</div>
                    <Input placeholder="John Doe" className="h-9" />
                  </div>

                  <div className="space-y-1">
                    <div className="font-semibold text-sm">Email</div>
                    <Input
                      placeholder="john.doe@email.com"
                      className="h-9"
                    />
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-end gap-4">
                <Button className="gap-1.5 h-10" size="lg">
                  <Send strokeWidth={3} className="h-4 w-4" />
                  Create Ticket
                </Button>
                <Button
                  className="gap-1.5 h-10"
                  variant="outline"
                  size="lg"
                >
                  <FileText strokeWidth={3} className="h-4 w-4" />
                  Save as Draft
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="w-[40%]">
          <Card className="p-4 space-y-6">
            {/* Ticket Meta */}
            <div className="space-y-4">
              <div className="font-semibold text-lg">Ticket Settings</div>

              {/* Priority */}
              <div className="space-y-1">
                <div className="font-semibold text-sm">Priority</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 w-full flex justify-between"
                    >
                      Select priority
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Low</DropdownMenuItem>
                    <DropdownMenuItem>Medium</DropdownMenuItem>
                    <DropdownMenuItem>High</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Status */}
              <div className="space-y-1">
                <div className="font-semibold text-sm">Status</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 w-full flex justify-between"
                    >
                      Open
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Open</DropdownMenuItem>
                    <DropdownMenuItem>In Progress</DropdownMenuItem>
                    <DropdownMenuItem>Resolved</DropdownMenuItem>
                    <DropdownMenuItem>Closed</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Assigned To */}
              <div className="space-y-1">
                <div className="font-semibold text-sm">Assigned To</div>
                <Input
                  placeholder="Support Team / Agent name"
                  className="h-9"
                />
              </div>

              {/* Due Date */}
              <div className="space-y-1">
                <div className="font-semibold text-sm">Due Date</div>
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
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
