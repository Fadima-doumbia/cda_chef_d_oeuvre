import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchIcon from "@rsuite/icons/Search";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Searchh = (props) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    // setDatas(props.datas);
    getAllUseer();
  }, []);

  const getAllUseer = () => {
    axios
      .get("http://localhost:8080/api/events/all/reservations/user")
      .then((res) => {
        setDatas(res.data);
      });
  };

  const handleChange = (event) => {
    console.log("change")
    // console.log(event.target.value);
    let filtered = props.datas.filter((user) =>
      user.lastName.includes(event.target.value)
    );
    setDatas(filtered);
    props.setDatas(filtered);
    if (event.target.value === "") {
      console.log("first")
      getAllUseer();
      props.setDatas(datas)
    }
  };

  return (
    <>
      <div>
        <Form className="d-block">
          <div className="search-form-container">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success">
              <SearchIcon />
            </Button>
          </div>
          <div className="search-options-container">
            <Col className="search-options" sm={8}>
              <Form.Check label="Date" />
              <Form.Check label="Heure" />
              <Form.Check label="Enfant" />
              <Form.Check label="Prix" />
            </Col>
            <Col className="search-options">
              <Form.Check
                type="radio"
                label="Croissant"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Decroissant"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </div>
          <hr style={{ height: "2px", color: "#3C6DA6" }} />
        </Form>
      </div>
    </>
  );
};
export default Searchh;
