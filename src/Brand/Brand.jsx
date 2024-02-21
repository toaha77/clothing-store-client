import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

 
const Brand = () => {
    const brands = useLoaderData()
    console.log(brands);
     return (
        <div className="mt-4">
            <h2 className="text-5xl font-bold text-center text-blue-500 mb-4"> Featured Listings</h2>
            <BrandCard brands={brands}></BrandCard>
        </div>
    );
};

export default Brand;