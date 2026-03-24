import ProductCard from "./product-card";


const ProductList = ({data, title, limit}: {data: SampleData, title?: string, limit?: number}) => {

  const limitedProducts = limit ? data.products.slice(0, limit): data.products;

  return ( 
    <div className=" my-5">
      <h2 className="text-3xl font-medium mb-5">{title}</h2>
      {limitedProducts.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          {limitedProducts.map((card, i) => (
            <ProductCard key={i} product={card} />
          ) )}
        </div>
        : <div>No Item Found 💔</div> 
      }
      
    </div>
   );
}
 
export default ProductList;