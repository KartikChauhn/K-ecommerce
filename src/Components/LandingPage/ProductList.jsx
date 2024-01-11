import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 sm:justify-start justify-center mt-28  px-8 sm:px-16 ">
        {productList?.map((e) => {
          return (
            <ProductCard
              key={e?.id}
              id={e?.id}
              imageUrl={e?.thumbnail}
              name={e?.title}
              desc={e?.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
