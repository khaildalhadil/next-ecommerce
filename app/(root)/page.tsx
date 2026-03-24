// export const metadata = {
//   title: 'Home'
// }
import ProductList from "@/components/shared/product/product-list"
import sampleData from "@/db/sample-data"

export default function Page() {
  
  return (
    <ProductList data={sampleData} title="List Of Items" limit={4} />
  )
}
