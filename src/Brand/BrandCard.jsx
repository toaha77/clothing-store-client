import { Link } from "react-router-dom";
import { WiDirectionRight} from "react-icons/wi"
 const BrandCard = ({ brands }) => {
 console.log(brands);
    return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {brands?.map((brand) => {
        return (
          <div
            key={brand.id}
            className="card card-compact w-96 bg-base-100 shadow-xl hover:shadow-2xl"
          >
            <figure>
              <img
                src=
            {brand.img}
            className="h-[260px]"
                alt="{brand.title}"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl text-center">{brand.title}</h2>
              
              <div className="card-actions justify-center">
               <Link to={`/brandsCard/${brand.title}`}>
               <button  className="btn bg-blue-500 text-white hover:bg-blue-500 border">See Details <WiDirectionRight className="text-3xl"></WiDirectionRight> </button>
               </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandCard;
