import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import PrivateOutlet from "./PrivateOutlet";
import { Pathname } from "./pathName";
import "./App.css";

const LandingPage = React.lazy(() => import("./Pages/LandingPage/Index"));
const IndividualProject = React.lazy(() =>
  import("./Pages/IndividualProject/Index")
);
const Cart = React.lazy(() => import("./Pages/Cart/Index"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <Routes>
          <Route path={Pathname.LANDINGPAGE} element={<PrivateOutlet />}>
            <Route index element={<LandingPage />} />
            <Route path={Pathname.PRODUCT} element={<IndividualProject />} />
            <Route path={Pathname.CART} element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
