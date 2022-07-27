import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Searchh from "../../components/Searchh";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* <Searchh /> */}
      {/* <Container style={{ height: "auto", backgroundColor: "lightgray" }}> */}
        {/* <SearchBar/> */}
        {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search ssssss</Button>
          </Form> */}
        <Outlet />
      {/* </Container> */}
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
