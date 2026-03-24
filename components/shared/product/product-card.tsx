import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

const ProductCard = ({product}: {product: Product}) => {
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            priority={true}
            width={300}
            height={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="px-3">
        <div className="text-sm mb-2">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">
            {product.name}
          </h2>
        </Link>
        <div className="flex-between gap-4 mt-3"> 
          <p>{product.rating} Starts</p>
          {product.stock > 0 ? (

            <p className="flex"> 
              <span className="text-xs align-super">ريال</span>
              {ProductPrice({value:product.price})}
            </p>
          ): (
            <p className="text-destructive">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
 
export default ProductCard;