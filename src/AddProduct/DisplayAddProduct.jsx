import { useLoaderData } from "react-router-dom";
import DisplayAddProductCard from "./DisplayAddProductCard";

 
const DisplayAddProduct = () => {
    const displayBrand = useLoaderData()
    console.log(displayBrand);
    return (
        <div>
        
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           {
                displayBrand.map(display => <DisplayAddProductCard key={display._id}
                display = {display}
                ></DisplayAddProductCard>)
            }
           </div>
        </div>
    );
};

export default DisplayAddProduct;