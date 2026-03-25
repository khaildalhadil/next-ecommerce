import { Product } from "@/types/type";
import ProductCard from "./product-card";


const ProductList = ({data, title}: {data: Product[], title?: string}) => {

  return ( 
    <div className=" my-5">
      <h2 className="text-3xl font-medium mb-5">{title}</h2>
      {data.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          {data.map((card, i) => (
            <ProductCard key={i} product={card} />
          ) )}
        </div>
        : <div>No Item Found 💔</div> 
      }
      
    </div>
   );
}
 
export default ProductList;