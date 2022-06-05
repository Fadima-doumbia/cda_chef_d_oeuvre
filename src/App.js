import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";import NotFoundPage from "./pages/NotFoungPage";
import HomePage from "./pages/HomePage";
import SideBar from "./component/SideBar";
import { Dashboard, Gear, UserChange } from "@rsuite/icons";
import { Sidenav, Nav, Container, Header } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "rsuite/styles/index.less";
import AdvancedAnalyticsIcon from "@rsuite/icons/AdvancedAnalytics";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { blue } from "@mui/material/colors";
import { Card } from "@mui/material";
import FormStep1 from "./component/FormStep1";
import FormEvent from "./component/FormEvent";
import FormEvt from "./component/FormEvt";
import Cards from "./component/Cards";

function App() {
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
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const primary = blue[600];


  return (
    <BrowserRouter>

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
              <Nav.Item eventKey="1" icon={<Dashboard />} as={Link} to="/home">
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<UserChange />} as={Link} to="/form">
                Organisations
              </Nav.Item>
              <Nav.Menu eventKey="3" title="Mon Espace et Settings" icon={<Dashboard />}>
                <Nav.Item eventKey="3-1"  as={Link} to="*">Changer le Mot de passe</Nav.Item>
                <Nav.Item eventKey="3-2">Modifier mon profil</Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="4" title="Evenement" icon={<Gear />}>
                <Nav.Item eventKey="4-1">Mon planing</Nav.Item>
                <Nav.Item eventKey="4-2">Mes Reservatios</Nav.Item>
                <Nav.Item eventKey="4-3">Mes anulations</Nav.Item>
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
                  to={"/"}
                />
                <BottomNavigationAction
                  label="Nous Contacter"
                  value="favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Calendrier"
                  value="calandar"
                  icon={<LocationOnIcon />}
                />
              </BottomNavigation>
            </Header>
          </header>

          <div style={content}>
            {/* <FormEvent/> */}
            <Cards />
            <Routes>
              <Route path="/home" component={<HomePage />} />
              <Route path="/form" component={<FormStep1 />} />
              <Route path="*" component={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </Container>      
      </BrowserRouter>
  );
}

export default App;

