import Sidenav from "rsuite/Sidenav";
import Nav from "rsuite/Nav";
import { useState } from "react";
import GearIcon from '@rsuite/icons/Gear';
import { Dashboard, Setting } from "@rsuite/icons";
import { Group } from "@mui/icons-material";
import { Magic } from "react-bootstrap-icons";

const SideBar = () => {
  const styles = {
    width: 240,
    display: "inline-table",
    marginRight: 10,
  };
  const [activeKey, setActiveKey] = useState("1");
  const [openKeys, setOpenKeys] = useState(["3", "4"]);
  const [expanded, setExpand] = useState(true);

  const handleChange = () => {
    setExpand(!expanded)
  }
  return (
    <div style={styles}>
      {/* #3c5aa6*/}
      <Sidenav
        appearance={"inverse"}
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
      >
        <Sidenav.Body>
          <Nav style={{minHeight: "90vh"}}>
          {/* <Nav {...navProps}> */}
            <Nav.Item href = "/" active icon={<Dashboard />}>
              Dashboard
            </Nav.Item>
            <Nav.Item href="/" icon={<Group />}>
              User Group
            </Nav.Item>
            <Nav.Menu href="3" title="Advanced" icon={<Magic />}>
              <Nav.Item href="3-1">Geo</Nav.Item>
              <Nav.Item href="3-2">Devices</Nav.Item>
              <Nav.Item href="3-3">Loyalty</Nav.Item>
              <Nav.Item href="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu href="4" title="Settings" icon={<GearIcon />}>
              <Nav.Item href="4-1">Applications</Nav.Item>
              <Nav.Item href="4-2">Channels</Nav.Item>
              <Nav.Item href="4-3">Versions</Nav.Item>
              <Nav.Menu href="4-5" title="Custom Action">
                <Nav.Item href="4-5-1">Action Name</Nav.Item>
                <Nav.Item href="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={handleChange} />
      </Sidenav>
    </div>
  );
};
export default SideBar;
