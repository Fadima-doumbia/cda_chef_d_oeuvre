import { Dashboard, Gear, UserChange } from "@rsuite/icons";
import { Sidenav, Nav, Container, Header } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "rsuite/styles/index.less";
import AdvancedAnalyticsIcon from "@rsuite/icons/AdvancedAnalytics";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { blue } from "@mui/material/colors";
import "rsuite/dist/rsuite.min.css";
import "rsuite/styles/index.less";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import TrashIcon from '@rsuite/icons/Trash';


const SideBarApp = () => {
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
  const [value, setValue] = useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const primary = blue[600];


  return (
    <Container style={containerStyles}>
      <Sidenav style={styles}>
        <Sidenav.Header>
          <div>
            <AdvancedAnalyticsIcon style={{ fontSize: 30 }} />
            <span style={{ marginLeft: 15 }}> BRAND</span>
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item eventKey="1" icon={<Dashboard />}>
              <Link to="home">Dashboard</Link>
              {/* Dashboard */}
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<UserChange />}>
              <Link to="form">Organisations</Link>
              {/* Organisations */}
            </Nav.Item>
            <Nav.Menu
              eventKey="3"
              title="Mon Espace et Settings"
              icon={<Dashboard />}
            >
              <Nav.Item eventKey="3-1">
                <Link to="home">Changer le Mot de passe</Link>
                {/* Changer le Mot de passe */}
              </Nav.Item>
              <Nav.Item eventKey="3-2">
                <Link to="home">Modifier mon profil</Link>
                {/* Modifier mon profil */}
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Evenement" icon={<Gear />}>
              <Nav.Item eventKey="4-1">
                {/* Mon planing */}
                <Link to="home">Mon planing</Link>
              </Nav.Item>
              <Nav.Item eventKey="4-2">
                <Link to="home">Mes Reservatios</Link>
                Mes Reservatios
              </Nav.Item>
              <Nav.Item eventKey="4-3">
                <Link to="home">Mes anulations</Link>

                {/* Mes anulations */}
              </Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <div style={container}>
          <header style={header}>
            <Header
              background={primary}
              style={{
                position: "fixed",
                width: "80%",
                backgroundColor: "royalblue",
              }}
            >
              <BottomNavigation
                showLabels
                value={value}
                onChange={handleChange}
                style={{
                  backgroundColor: "#b8babb",
                }}
              >
                <BottomNavigationAction
                  label="Evènements"
                  value="recents"
                  icon={<RestoreIcon />}
                  href={"/events"}
                />
                <BottomNavigationAction
                  label="Nous Contacter"
                  value="favorites"
                  icon={<FavoriteIcon />}
                  href={"/form"}
                />
                <BottomNavigationAction
                  label="Calendrier"
                  value="calandar"
                  icon={<LocationOnIcon />}
                  href={"/home"}
                />
              </BottomNavigation>
            </Header>
          </header>
        <Outlet/>
          
      </div>
    </Container>
  );
};

export default SideBarApp;
