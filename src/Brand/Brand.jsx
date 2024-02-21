 import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
 
 
const Brand = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
      fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => setProduct(data))
    }, [])
      return (
        <div className="mt-4">
            <h2 className="text-5xl font-bold text-center text-blue-500 mb-4"> Featured Listings</h2>
            <div className="flex items-center justify-center container mx-auto gap-4">
        {
          product.map(cloth=> <BrandCard cloth={cloth}
          key={cloth._id}
          ></BrandCard>)
        }
      </div>
         </div>
    );
};

export default Brand;