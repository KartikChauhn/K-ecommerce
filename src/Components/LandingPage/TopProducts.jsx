import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductDetailsSection from "../CommonComponents/ProductDetailsSection";

const TopProducts = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeData, setActiveData] = useState(data?.[0] ?? {});

  useEffect(() => {
    if (data) {
      setActiveData(data[activeSlide]);
    }
  }, [activeSlide, data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    vertical: true,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div className="">
        <ul className=" absolute w-[60%]  sm:w-[40%] pb-2 pr-[10%] flex justify-between left-[10%] sm:left-[-87%]  border-b-[2px] z-40">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <a>
        {activeSlide === i ? (
          <p className="text-[#FF4D4F] ">0{i + 1}</p>
        ) : (
          <p className="text-[#808080] ">0{i + 1}</p>
        )}
      </a>
    ),
  };

  return (
    <div className="h-[80vh] sm:h-[90vh] w-full flex flex-col md:flex-row mb-6 sm:mb-0 ">
      <h1 className="absolute mt-8 sm:mt-24 px-12 md:px-24 z-20 text-pink font-light text-[1rem] sm:text-[2rem] ">
        Our Top Products
      </h1>
      <ProductDetailsSection data={activeData} />
      <div className="sm:w-[50%] sm:h-full flex justify-center items-center overflow-hidden">
        <Slider {...settings}>
          {data &&
            data?.map((product, index) => {
              return (
                <div
                  key={product?.id}
                  className={`h-[50vh] sm:h-[60vh] w-full overflow-hidden ${
                    index === activeSlide ? "opacity-100" : "opacity-0"
                  } transition-all duration-1000 `}
                >
                  <div className="w-full opacity-0">
                    ........................................................................................................................................................................................................................
                  </div>
                  <img
                    src={product?.thumbnail}
                    alt={product?.type}
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default TopProducts;
