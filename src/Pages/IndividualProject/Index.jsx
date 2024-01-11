import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../redux/landingPageSlice";
import ProductDetailsSection from "../../Components/CommonComponents/ProductDetailsSection";
import ImageSlider from "../../Components/IndividualProject/ImageSlider";

const IndividualProject = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductById(id));
  }, [id]);
  const productData = useSelector((state) => state.landingPage.selectedProduct);
  return (
    <div className="w-full min-h-[90vh] flex flex-col sm:flex-row items-center">
      <div className="w-full sm:w-[50%] h-[50vh] sm:h-full flex justify-center items-center">
        <ImageSlider imageArray={productData?.images} />
      </div>
      <ProductDetailsSection data={productData} isIndividualPage={true} />
    </div>
  );
};

export default IndividualProject;
