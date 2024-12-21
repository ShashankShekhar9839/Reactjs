import React from "react";
import SideBar from "../../components/Sidebar/SideBar";
import CityList from "../../components/CityList/CityList";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <SideBar />
       <Outlet/>
    </div>
  );
};

export default AppLayout;
