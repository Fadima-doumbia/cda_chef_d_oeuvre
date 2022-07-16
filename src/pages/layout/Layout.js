import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/navbar/SideBar";
import NavBar from "../../components/navbar/NavBar";

const Layout = () => {
  const style = {
    display: "flex",
  };
  return (
    <>
      <NavBar />
      <Container style={{ height: "auto", backgroundColor: "lightgray" }}>
        <Outlet />
      </Container>
    </>
    // <div style={style}>
    //     <div style={{width: "25%"}}><SideBar /></div>
    //     <div style={{minWidth: "75%", backgroundColor: "lightgrey"}}><Outlet /></div>
    //   <Row>
    //     <Col xs={6} md={4} >
    //       <SideBar />
    //     </Col>
    //     <Col xs={12} md={8}>
    //       <Outlet />
    //     </Col>
    //   </Row>
    // </div>
  );
};
export default Layout;
