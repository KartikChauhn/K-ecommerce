import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/landingPageSlice";
import TopProducts from "../../Components/LandingPage/TopProducts";
import "./../../Styles/landingPage.css";
import ProductList from "../../Components/LandingPage/ProductList";

const LandingPage = () => {
  const dispactch = useDispatch();

  useEffect(() => {
    dispactch(fetchData());
  }, []);
  const { topProducts, productList } = useSelector(
    (state) => state.landingPage
  );

  return (
    <div className="min-h-[100vh]">
      <div className="w-full">
        {topProducts && topProducts.length > 0 && (
          <TopProducts data={topProducts} />
        )}
      </div>
      <ProductList productList={productList} />
    </div>
  );
};

export default LandingPage;
