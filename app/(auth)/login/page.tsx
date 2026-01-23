import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock, LogIn, Mail, Store } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-[70%] bg-primary/5 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex aspect-square size-20 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Store strokeWidth={2} className="!size-12" />
          </div>
        </div>
      </div>
      <div className="w-[30%] flex items-center justify-center">
        <Card className="w-[85%] p-6">
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="text-xl font-semibold">Login</div>
              <div className="text-sm text-muted-foreground">
                Enter your credentials to continue
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-sm">Email</div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="email@example.com" className="h-9 pl-9" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-sm">Password</div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-9 pl-9"
                />
              </div>
            </div>
            <Button className="w-full h-10 gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
