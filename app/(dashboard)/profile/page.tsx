import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Image, RotateCcw, Save } from "lucide-react";

export default function MyProfilePage() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl">My Profile</div>
        <Button className="gap-1.5 h-10" size="lg">
          <Save strokeWidth={3} className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
      <div className="flex gap-4">
        <div className="w-[65%]">
          <Card className="p-4 space-y-2">
            <div className="font-semibold text-lg">Profile Details</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="font-semibold text-sm">First Name</div>
                <Input placeholder="First name" className="h-9" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-sm">Last Name</div>
                <Input placeholder="Last name" className="h-9" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="font-semibold text-sm">Email</div>
                <Input placeholder="email@example.com" className="h-9" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-sm">Phone Number</div>
                <Input placeholder="+91 98765 43210" className="h-9" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-sm">Date of Birth</div>
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
            <div className="space-y-1">
              <div className="font-semibold text-sm">Address</div>
              <Input placeholder="Street, City, State, Zip" className="h-9" />
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-sm">Short Bio</div>
              <Textarea
                placeholder="Enter a short bio about yourself..."
                className="h-28"
              />
            </div>
            <div>
              <Button className="h-10 px-4" size="lg">
                Save Profile
              </Button>
            </div>
          </Card>
        </div>
        <div className="w-[35%]">
          <div className="flex flex-col gap-4">
            <Card className="p-4">
              <div className="relative w-full border h-49 bg-primary/10 rounded-md">
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
            </Card>
            <Card className="p-4 space-y-2">
              <div className="font-semibold text-lg">Change Password</div>
              <div className="space-y-1">
                <div className="font-semibold text-sm">Current Password</div>
                <Input type="password" className="h-9" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-sm">New Password</div>
                <Input type="password" className="h-9" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-sm">
                  Confirm New Password
                </div>
                <Input type="password" className="h-9" />
              </div>
              <div>
              <Button className="px-4 h-10">Update Password</Button></div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
