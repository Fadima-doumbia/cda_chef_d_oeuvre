import { Gear } from '@rsuite/icons';
import { Navbar, Nav } from 'rsuite';
import { Magic } from "react-bootstrap-icons";

const NavBar = () => {
    return(
        <Navbar style={{backgroundColor: "#3C6DA6", color: "white"}} sticky="top" >
        <Navbar.Brand href="#">RSUITE</Navbar.Brand>
        <Nav>
          <Nav.Item href='/table' icon={<Magic />}>Home</Nav.Item>
          <Nav.Item href='/profil'>profil</Nav.Item>
          <Nav.Item href='/card'>card</Nav.Item>
          <Nav.Item href='/admin'>Admin</Nav.Item>
          <Nav.Item href='/edit'>edit</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item href='/search'>SEARCH</Nav.Item>
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