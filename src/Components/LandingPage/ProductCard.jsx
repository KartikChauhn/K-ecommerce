import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ imageUrl, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div className={`h-[20rem] w-full border rounded-[6px] hover:shadow-md`}>
      <img
        src={
          imageUrl
            ? imageUrl
            : "https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/1704360718.png"
        }
        alt="logo"
        className="h-[48%] w-full object-cover"
      />
      <div className="h-[52%] w-full flex flex-col justify-around px-3">
        <div>
          <p className="text-[0.9rem] font-semibold mb-2">{name}</p>
          <p className="text-fadeLow  text-[0.8rem] hideLongTypography2">
            {desc}
          </p>
        </div>
        <div className="flex justify-between">
          <button
            className="font-semibold text-[0.68rem] border w-[48%] rounded-[2px] py-2 border-pink text-pink"
            onClick={() => navigate(`/product/${id}`)}
          >
            {" "}
            View More
          </button>
          <button className="font-semibold text-[0.68rem] text-white bg-pink w-[48%] rounded-[2px] py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
