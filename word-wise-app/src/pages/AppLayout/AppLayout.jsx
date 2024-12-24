import React from "react";
import SideBar from "../../components/Sidebar/SideBar";
import Map from "../../components/Map/Map";
import User from "../../components/User/User";

const AppLayout = () => {
  return (
    <div>
      <SideBar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
