import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import SearchIcon from "@rsuite/icons/Search";

const Searchh = () => {
  return (
    <>
      <div>
        <Form className="d-block">
          <div
            className="d-flex"
            style={{
              border: "2px solid #3C6DA6",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <SearchIcon />
            </Button>
          </div>
          <div
            className="d-flex"
            style={{ justifyContent: "space-around", marginTop: "1rem" }}
          >
            <Col
              className="d-flex"
              sm={8}
              style={{ justifyContent: "space-around", marginTop: "1rem" }}
            >
              <Form.Check label="Date" />
              <Form.Check label="Heure" />
              <Form.Check label="Enfant" />
              <Form.Check label="Prix" />
            </Col>
            <Col
              className="d-flex"
              style={{ justifyContent: "space-around", marginTop: "1rem" }}
            >
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
