import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../redux/landingPageSlice";
import ProductDetailsSection from "../../Components/CommonComponents/ProductDetailsSection";

const IndividualProject = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);
  const productData = useSelector((state) => state.landingPage.selectedProduct);
  return (
    <div className="w-full min-h-[90vh] flex flex-col sm:flex-row items-center">
      <div className="w-full sm:w-[50%] h-[50vh] sm:h-full flex justify-center items-center">
        <div className="relative">
          <p className="italic text-pink font-semibold font-mukta text-[6rem] absolute top-[-50%] left-[0%] -z-10">K</p>
        </div>
      </div>
      <ProductDetailsSection data={productData} />
    </div>
  );
};

export default IndividualProject;
