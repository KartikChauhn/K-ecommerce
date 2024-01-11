import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";

const Header = () => {
  return (
    <div className="h-[10vh] w-full border-b-2 bg-white flex justify-between items-center px-4 sm:px-10">
      <div></div>
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
