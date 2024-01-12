import React, { useEffect, useState } from "react";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByKeyword } from "../../redux/landingPageSlice";

const SearchLayout = ({ setShowSearch, showSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searhedKeyword, setSearchedKeyword] = useState("");

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      const context = this;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        func.apply(context, args);
      }, delay);
    };
  }
  const handleInputChange = (e) => {
    setSearchedKeyword(e?.target?.value);
  };
  const debouncedHandleInputChange = debounce(handleInputChange, 350);

  useEffect(() => {
    if (showSearch) {
      dispatch(fetchProductByKeyword(searhedKeyword));
    }
  }, [searhedKeyword]);

  const searchedProducts = useSelector(
    (state) => state.landingPage.searchedProducts
  );

  return (
    <div className="fixed w-full h-full bg-black top-0 left-0  bg-opacity-[0.4]  ">
      <div className="flex justify-between sm:justify-center items-center h-[10vh] bg-white w-full px-6">
        <div className="flex justify-between items-center rounded border-[#D9D9D9]  border-[1.5px] p-1 mr-4 w-[100%] md:w-[30%] text-[0.9rem] bg-white ">
          <input
            type="text"
            placeholder={"Search Products"}
            className="p-2 outline-none h-6 w-[80%]"
            onChange={debouncedHandleInputChange}
            autoFocus={true}
          />
          <SearchOutlined className="cursor-pointer bg-white text-[#8C8C8C] text-[1.2rem] mr-[0.5rem]" />
        </div>
        <CloseOutlined
          className=" text-[1.4rem]"
          onClick={() => setShowSearch(false)}
        />
      </div>
      {searchedProducts?.length > 0 && searhedKeyword !== "" && (
        <div>
          {searchedProducts?.map((e) => (
            <div
              className="bg-white py-2 px-4 cursor-pointer"
              onClick={() => {
                navigate(`/product/${e?.id}`);
                setShowSearch(false);
              }}
            >
              {e?.brand}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchLayout;
