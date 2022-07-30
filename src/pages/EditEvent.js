import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const EditEvent = () => {
  const initialState = {
    address: "",
    name: "",
    city: "",
    date: "",
    description: "",
    child: false,
    places: 0,
    prix: 0,
    heureDebut: "",
    heureFin: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [datas, setDatas] = useState([]);

  return (
    <div>
      <Card style={{ backgroundColor: "#5882b3", color: "white" }}>
        <Card.Header style={{ backgroundColor: "#3C6DA6" }}>
          Nom Evenement
        </Card.Header>
        <Card.Body>
          <div style={{ display: "flex" }}>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    defaultValue="email@example.com"
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Form>
            {/* <div style={{ width: "60%" }}>
              <p style={{ margin: "0" }}>
                Places disponibles :{" "}
                <span style={{ fontSize: "12px" }}>
                  {" "}
                  {formData.date} places
                </span>
              </p>
              <p style={{ margin: "0" }}>
                Adresse :{" "}
                <span style={{ fontSize: "12px" }}> {formData.address} </span>
              </p>
              <p style={{ margin: "0" }}>
                Date :{" "}
                <span style={{ fontSize: "12px" }}> {formData.date} </span>
              </p>
              <p style={{ margin: "0" }}>
                Heure :{" "}
                <span style={{ fontSize: "12px" }}>
                  {" "}
                  {formData.heureDebut} - {formData.heureFin}{" "}
                </span>
              </p>
              <p style={{ margin: "0" }}>
                Prix :{" "}
                <span style={{ fontSize: "12px" }}> {formData.prix} </span>
              </p>
            </div>
            <div>
              <h5>Liste de personnes</h5>
              <ul
                style={{
                  height: "100px",
                  overflowY: "scroll",
                  scrollbarColor: "rebeccapurple green",
                  scrollbarWidth: "thin",
                }}
              >
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
              </ul>
            </div> */}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary" style={{ backgroundColor: "#3C6DA6" }}>
              Modifier
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default EditEvent;
