import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import logo from "./../../assets/Images/Ecomlogo.png";

import SearchLayout from "./SearchLayout";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);


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
        <SearchLayout setShowSearch={setShowSearch} showSearch={showSearch} />
      )}


    </div>
  );
};

export default Header;
