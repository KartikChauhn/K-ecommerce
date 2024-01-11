import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/landingPageSlice";
import TopProducts from "../../Components/LandingPage/TopProducts";
import "./../../Styles/landingPage.css";
import ProductList from "../../Components/LandingPage/ProductList";
import logo from "./../../assets/Images/Ecomlogo.png";

const LandingPage = () => {
  const dispactch = useDispatch();

  useEffect(() => {
    dispactch(fetchData());
  }, []);
  const { topProducts, productList } = useSelector(
    (state) => state.landingPage
  );

  return (
    <>
      <head>
        <title>K-Store</title>
        <meta name="Elchemy Home Page" content="Home Page" key="desc" />
        <meta property="og:title" content="Artisian : Kartik Chauhan" />
        <meta
          property="og:description"
          content={
            "This is site is just an assignment, developed by Kartik Chauan."
          }
        />
        <meta property="og:image" content={logo} />
      </head>
      <div className="min-h-[100vh]">
        <div className="w-full">
          {topProducts && topProducts.length > 0 && (
            <TopProducts data={topProducts} />
          )}
        </div>
        <ProductList productList={productList} />
      </div>
    </>
  );
};

export default LandingPage;
