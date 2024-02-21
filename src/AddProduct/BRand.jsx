import { useLoaderData } from "react-router-dom";
import BrandsCard from "./BrandsCard";
  
const BRand = () => {
  const brandsData = useLoaderData();
  console.log(brandsData);

  return (
    <>
      <div>
        <div className="container mx-auto mt-4">
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item relative w-full h-[400px]"
            >
              <img
                src="/pexels-jesse-zheng-1213294.jpg"
                className="w-full h-[400px]"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full h-[400px]"
            >
              <img
                src="/pexels-mike-bird-170811.jpg"
                className="w-full h-[400px]"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full h-[400px]"
            >
              <img
                src="/pexels-mike-noga-3608542.jpg"
                className="w-full h-[400px] "
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full h-[400px]"
            >
              <img
                src="/public/pexels-jesse-zheng-1213294.jpg"
                className=" w-full h-[400px] "
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BrandsCard brandsData={brandsData}></BrandsCard>
        </div>
      </div>
      
    </>
  );
};

export default BRand;
