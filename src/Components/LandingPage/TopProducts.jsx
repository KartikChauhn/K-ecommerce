import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const TopProducts = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeData, setActiveData] = useState(data?.[0] ?? {});

  console.log(activeData, "asdlfhs");

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

  const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return Math.floor(discountedPrice);
  };

  return (
    <div className="h-[80vh] sm:h-[90vh] w-full flex flex-col md:flex-row mb-6 sm:mb-0 ">
      <div
        className="w-full sm:w-[50%]  h-full md:py-14 px-12 md:px-24 flex flex-col justify-center bg-white fadeOut"
        key={activeData?.id ? activeData?.id : 0}
      >
        <div className=" w-full sm:w-[70%]">
          <h3 className="text-[1.2rem] sm:text-[2rem] font-normal leading-tight font-mukta">
            {activeData?.title}{" "}
            <span className="text-fade text-[0.85rem] capitalize">
              ( {activeData.category} )
            </span>
          </h3>

          <p
            className={`text-fade text-[0.85rem] sm:block sm:text-[0.9rem] mt-6 `}
          >
            {activeData?.description?.length > 90
              ? activeData?.description.slice(0, 90) + "... "
              : activeData?.description}
          </p>

          <p className="font-normal text-xl font-mukta mt-4">
            ₹
            {calculateDiscountedPrice(
              activeData.price,
              activeData?.discountPercentage
            )}{" "}
            <span className="font-light text-[0.8rem]">
              <del>₹{activeData?.price}</del>
            </span>
            <span className="font-medium text-pink ml-2 text-[1rem]">
              {Math.floor(activeData?.discountPercentage)}%
            </span>
          </p>
        </div>
      </div>
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
