import React from "react";
import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header />

      <div>
        <main>
          {/* inside this outlet, the child routes will be rendere */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
