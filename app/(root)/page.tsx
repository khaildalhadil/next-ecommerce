// export const metadata = {
//   title: 'Home'
// }
import ProductList from "@/components/shared/product/product-list"
import { getLatesProducts } from "@/lib/actions/product.actions"

export default async function Page() {

  const latestProducts = await getLatesProducts();
  
  return (
    <ProductList 
      data={latestProducts}
      title="List Of Items" />
  )
}
