import { Gear } from '@rsuite/icons';
import { Navbar, Nav } from 'rsuite';
import { Magic } from "react-bootstrap-icons";

const NavBar = () => {
    return(
        <Navbar style={{backgroundColor: "#3c5aa6", color: "white"}}>
        <Navbar.Brand href="#">RSUITE</Navbar.Brand>
        <Nav>
          <Nav.Item icon={<Magic />}>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Gear />}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    )
}

export default NavBar;