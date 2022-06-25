import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Dashboard, Gear, UserChange } from "@rsuite/icons";
import { Sidenav, Nav, Container, Header } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "rsuite/styles/index.less";
import AdvancedAnalyticsIcon from "@rsuite/icons/AdvancedAnalytics";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { blue } from "@mui/material/colors";
import axios from "axios";
import "rsuite/dist/rsuite.min.css";
import "rsuite/styles/index.less";
import { useState, useEffect } from "react";

const Layout = () => {
  const containerStyles = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    display: "flex !important",
    flexDirection: "inherit",
  };
  const styles = {
    width: "20%",
    height: "100vh",
    display: "inline-table",
    position: "fixed",
  };
  const container = {
    width: "80%",
    height: "90vh",
    position: "absolute",
    right: 0,
  };
  const header = {
    height: "10vh",
    position: "relative",
  };
  const content = {
    height: "90vh",
    position: "relative",
    backgroundColor: "#e5e5e5",
    overflow: "auto",
    padding: "10px",
  };
  const [value, setValue] = useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const primary = blue[600];
  const [event, setEvent] = useState([]);
  const [edithForm, setEditForm] = useState(false);
  const reset = () => {
    setEditForm(!edithForm);
    console.log(edithForm);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "20%" }}>
          <SideBar />
        </div>
      </div>
    </>
  );
};
export default Layout;
