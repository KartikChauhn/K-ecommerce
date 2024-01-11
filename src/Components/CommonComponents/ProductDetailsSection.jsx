import { StarFilled } from "@ant-design/icons";
import React from "react";

const ProductDetailsSection = ({ data, isIndividualPage }) => {
  const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return Math.floor(discountedPrice);
  };
  return (
    <div
      className="w-full sm:w-[50%] h-[40vh] sm:h-full md:py-14 px-10 md:px-24 flex flex-col justify-center bg-white fadeOut"
      key={data?.id ? data?.id : 0}
    >
      <div className=" w-full sm:w-[70%] ">
        <h3 className="text-[1.4rem] sm:text-[2rem] font-normal leading-tight font-mukta mb-2 sm:mb-1">
          {data?.title}{" "}
          <span className="text-fade text-[0.85rem] capitalize">
            {data.category}
          </span>
        </h3>

        <div className="text-white bg-green text-[0.75rem] sm:text-[0.8rem] w-[3.2rem] py-[2px] sm:py-1 flex justify-center items-center rounded-[4px]">
          {data.rating}
          <StarFilled className="ml-1 " />
        </div>

        <p
          className={`text-fade text-[0.85rem] sm:block sm:text-[0.9rem] mt-6 `}
        >
          {data?.description?.length > 90
            ? data?.description.slice(0, 90) + "... "
            : data?.description}
        </p>

        <p className="font-normal text-xl font-mukta mt-4">
          ₹{calculateDiscountedPrice(data.price, data?.discountPercentage)}{" "}
          <span className="font-light text-[0.8rem]">
            <del>₹{data?.price}</del>
          </span>
          <span className="font-medium text-green ml-2 text-[1rem]">
            {Math.floor(data?.discountPercentage)}%
          </span>
        </p>

        {isIndividualPage && (
          <button className="border-2 border-pink mt-4 px-4 py-1 rounded-[4px] text-pink hover:text-white hover:bg-pink text-[0.75rem] sm:text-[0.8rem]">
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsSection;
