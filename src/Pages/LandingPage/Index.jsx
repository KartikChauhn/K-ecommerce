import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/landingPageSlice";
import TopProducts from "../../Components/LandingPage/TopProducts";
import "./../../Styles/landingPage.css";
import ProductList from "../../Components/LandingPage/ProductList";
import logo from "./../../assets/Images/Ecomlogo.png";
import { Pagination } from "antd";

const LandingPage = () => {
  const dispactch = useDispatch();

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 12,
    total: 0,
  });

  const { topProducts, productList, totalCount } = useSelector(
    (state) => state.landingPage
  );

  useEffect(() => {
    dispactch(fetchData(pagination));
  }, [pagination.current, pagination.pageSize]);

  useEffect(() => {
    setPagination({
      ...pagination,
      total: totalCount,
    });
  }, [totalCount]);

  console.log(totalCount, "lkahsdf");
  const handlePaginationChange = (page, pageSize) => {
    setPagination({
      ...pagination,
      current: page,
      pageSize: pageSize,
    });
  };

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
        <div className="mt-12 px-4 w-full flex justify-end">
          <Pagination
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={pagination.total}
            onChange={handlePaginationChange}
            showSizeChanger={false}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            size="small"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
