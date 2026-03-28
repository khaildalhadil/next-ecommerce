'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({images}: {images: string[]}) => {

  const [current, setCurrent] = useState(0);  

  return ( 
    <div className="space-y-4">
      <Image src={images[current]} alt="product image" width={1000} height={1000} className="min-h-75 object-cover object-center" />

      <div className="flex gap-3">
        {
          images.map((image, i) => (
            <div key={i}>
              <Image src={image} alt="image" width={100} height={100}  
                // className={`${i == current ? 'border-2 border-neutral-300': 'border-0'} cursor-pointer`}
                className={cn('border mr-2 cursor-pointer hover:border-orange-600', current === i && 'border-orange-500')}
                onClick={()=> setCurrent(i)}
                />
            </div>
          ))
        }

      </div>
    </div>
  );
}
 
export default ProductImages;