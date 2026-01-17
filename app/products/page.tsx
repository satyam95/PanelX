import ProductsTable from "@/components/products-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="w-full space-y-6">
      <div className="font-semibold text-xl">Product List</div>
      <div className="grid gap-4 grid-cols-4">
        <Card className="p-5 space-y-4 border-green-100 bg-green-50/30">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg leading-none">In Stock</div>
            <EllipsisVertical size={20} className="text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-3xl leading-none text-green-700 drop-shadow-sm">
              1,089
            </div>
            <div className="text-muted-foreground text-sm leading-none">
              Ready to sell
            </div>
          </div>
        </Card>
        <Card className="p-5 space-y-4 border-orange-100 bg-orange-50/30">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg leading-none">Low Stock</div>
            <EllipsisVertical size={20} className="text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-3xl leading-none text-orange-600 drop-shadow-sm">
              89
            </div>
            <div className="text-muted-foreground text-sm leading-none">
              ≤ 20 units
            </div>
          </div>
        </Card>
        <Card className="p-5 space-y-4 border-red-200 bg-red-50/30">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg leading-none">Very Low</div>
            <EllipsisVertical size={20} className="text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-3xl leading-none text-red-600 drop-shadow-sm">
              23
            </div>
            <div className="text-muted-foreground text-sm leading-none">
              ≤ 5 units – urgent
            </div>
          </div>
        </Card>
        <Card className="p-5 space-y-4 border-red-300 bg-red-50/40">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg leading-none">
              Out of Stock
            </div>
            <EllipsisVertical size={20} className="text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-3xl leading-none text-red-700 drop-shadow-sm">
              47
            </div>
            <div className="text-muted-foreground text-sm leading-none">
              No available units
            </div>
          </div>
        </Card>
      </div>
      <Card className="p-4">
        <ProductsTable />
      </Card>
    </div>
  );
}
