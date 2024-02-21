 import SingleBrand from "./SingleBrand";

 
 
const BrandsCard = ({brandsData}) =>   {
   
 
    // console.log(brandsData);
    return (
      <>
        <div className="text-center mt-4 mb-4">
        <h2 className="text-3xl font-semibold">Featured cars  </h2>
        <p className="text-blue-500">You may fall in love</p>
        </div> 
 
       
<div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto">
{
    brandsData.map((brand) => <SingleBrand key={brand.id} brand = {brand}></SingleBrand>)
}
</div>
 </>
    );

   };

export default BrandsCard;