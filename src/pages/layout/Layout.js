import { Outlet } from "react-router-dom";
// import NavBar from "../../components/navbar/NavBar";
import Navbars from "../../components/navbar/Navbars";

const Layout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Navbars/>
      <Outlet />
    </>
  );
};
export default Layout;
