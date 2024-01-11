import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/CommonComponents/Header";

const PrivateOutlet = () => {
  return (
    <>
      <div className="fixed z-50 top-0 left-0 w-full">
        <Header />
      </div>
      <div className="pt-[10vh]">
        <Outlet />
      </div>
      <div className="bg-slate-200 w-full h-52 mt-20"></div>
    </>
  );
};

export default PrivateOutlet;
