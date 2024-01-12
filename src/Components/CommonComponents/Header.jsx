import {
  CloseOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import logo from "./../../assets/Images/Ecomlogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
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

  console.log(searhedKeyword, "akllsdhfs");

  return (
    <div className="h-[10vh] max-w-[100vw] border-b-2 bg-white flex justify-between items-center px-4 sm:px-10 overflow-hidden">
      <div>
        <img
          src={logo}
          alt=""
          className=" w-[6rem] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex items-center gap-4 sm:gap-8">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => setShowSearch(true)}
        >
          <SearchOutlined className=" text-[1.5rem] " />
          <p className="hidden sm:block">Search</p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <ShoppingCartOutlined className=" text-[1.5rem] " />
          <p className="hidden sm:block">Cart</p>
        </div>
        <div className="flex gap-2 items-center">
          <UserOutlined className=" text-[1.5rem] cursor-pointer" />
          <p className="hidden sm:block">Account</p>
        </div>
      </div>

      {showSearch && (
        <div className="fixed w-full h-full bg-black top-0 left-0  bg-opacity-[0.4]  ">
          <div className="flex justify-between sm:justify-center items-center h-[10vh] bg-white w-full px-6">
            <div className="flex justify-between items-center rounded border-[#D9D9D9]  border-[1.5px] p-1 mr-4 w-[100%] md:w-[30%] text-[0.9rem] bg-white ">
              <input
                type="text"
                placeholder={"Search Products"}
                className="p-2 outline-none h-6 w-[80%]"
                onChange={debouncedHandleInputChange}
              />
              <SearchOutlined className="cursor-pointer bg-white text-[#8C8C8C] text-[1.2rem] mr-[0.5rem]" />
            </div>
            <CloseOutlined
              className=" text-[1.4rem]"
              onClick={() => setShowSearch(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
