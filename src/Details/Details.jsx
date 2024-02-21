import { useLoaderData } from "react-router-dom";
import DisplayAddProduct from "../AddProduct/DisplayAddProduct";
import BRand from "../AddProduct/BRand";
 
 
const Details = () => {
  // const loader = useLoaderData()
  
  // console.log(loader);
    return (
        <div className="container mx-auto mt-4">
         
 
     <BRand></BRand>
    {/* <DisplayAddProduct></DisplayAddProduct> */}
   
        </div>
    );
};

export default Details;