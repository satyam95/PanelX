import { ImageIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type Product = {
  id: string;
  name: string;
  sku: string;
  stock: number;
  price: number;
  image: string | null;
  category: string[] | null;
  tags: string[] | null;
  status: "published" | "draft" | "scheduled";
  publishedAt: string | null;
};

interface ProductDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
}

export default function ProductDetailsSheet({
  open,
  onOpenChange,
  product,
}: ProductDetailsSheetProps) {
  if (!product) return null;
  const isOutOfStock = product.stock === 0;
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[420px] sm:w-[480px]">
        <SheetHeader>
          <SheetTitle>Product Details</SheetTitle>
        </SheetHeader>
        <div className="p-4 pt-0 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md border bg-primary/10 flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <div className="font-semibold leading-tight">{product.name}</div>
              <div className="text-sm text-muted-foreground">
                SKU: {product.sku || "—"}
              </div>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Price</div>
              <div className="font-semibold">
                {product.price > 0 ? `₹${product.price.toLocaleString()}` : "—"}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Stock</div>
              {isOutOfStock ? (
                <Badge variant="destructive">Out of Stock</Badge>
              ) : (
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  In Stock ({product.stock})
                </Badge>
              )}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Categories</div>
            <div className="flex gap-1 flex-wrap">
              {product.category?.length ? (
                product.category.map((cat) => (
                  <Badge key={cat} variant="secondary">
                    {cat}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">
                  No category
                </span>
              )}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Tags</div>
            <div className="flex gap-1 flex-wrap">
              {product.tags?.length ? (
                product.tags.map((tag) => (
                  <Badge key={tag} className="bg-primary/10 text-primary">
                    {tag}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">No tags</span>
              )}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Status</div>
            <Badge variant="outline" className="capitalize">
              {product.status}
            </Badge>
          </div>
          <Separator />
          <div className="flex gap-2">
            <Button className="flex-1">Edit Product</Button>
            <Button variant="outline" className="flex-1">
              Move to Draft
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
