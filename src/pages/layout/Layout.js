import { Outlet } from "react-router-dom";
import eventBus from "../../common/EventBus";
// import NavBar from "../../components/navbar/NavBar";
import Navbars from "../../components/navbar/Navbars";
import AuthService from "../../services/auth.service";
import { useEffect, useState } from "react";

const Layout = () => {

  return (
    <>
      <Navbars />
      <Outlet />
    </>
  );
};
export default Layout;
