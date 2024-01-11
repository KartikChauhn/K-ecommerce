import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import logo from "./../../assets/Images/Ecomlogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
        <div className="flex gap-2 items-center cursor-pointer">
          <ShoppingCartOutlined className=" text-[1.5rem] " />
          <p className="hidden sm:visible">Cart</p>
        </div>
        <div className="flex gap-2 items-center">
          <UserOutlined className=" text-[1.5rem] cursor-pointer" />
          <p className="hidden sm:visible">Account</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
