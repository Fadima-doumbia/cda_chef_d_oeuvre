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
import { Card } from "@mui/material";
// import React from "react";


const SideBar = () => {
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
        backgroundColor: "lightsteelblue",
      };
      const header = {
        // width: "100%",
        height: "10vh",
        position: "relative",
        backgroundColor: "purple",
      };
      const content = {
        // width: "100%",
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

    return(
        <Container style={containerStyles}>
        <Sidenav style={styles}>
          <Sidenav.Header>
            <div>
              <AdvancedAnalyticsIcon style={{ fontSize: 20 }} />
              <span style={{ marginLeft: 12 }}> BRAND</span>
            </div>
          </Sidenav.Header>
          <Sidenav.Body>
            <Nav activeKey="1">
              <Nav.Item eventKey="1" icon={<Dashboard />}>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<UserChange />}>
                User Group
              </Nav.Item>
              <Nav.Menu eventKey="3" title="Advanced" icon={<Dashboard />}>
                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="4" title="Settings" icon={<Gear />}>
                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                <Nav.Menu eventKey="4-5" title="Custom Action">
                  <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                  <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>

        <>
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
                >
                  <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon />}
                  />
                  <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                  />
                  <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                  />
                  <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon />}
                  />
                </BottomNavigation>
              </Header>
            </header>

            {/* <div style={content}> */}
            <div style={content}>
              content
              <p>debut</p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <p>
                lorem azerty-èui_op sdfgthujolk;,njvgcfdxfcghujoçlm;,nbvc
                xdfgthujlk, ;nbvgfhyujk,;nbhjk,;nbvgfhjn, vbghbj
              </p>
              <Card />
            </div>
          </div>
        </>
      </Container>
    )
}

export default SideBar;