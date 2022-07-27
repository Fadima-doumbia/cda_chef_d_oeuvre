import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Event = () => {
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

  const handleChange = (event) => {
    const prix = parseInt(event.target.value);
    const places = parseInt(event.target.value);
    console.log("first");
    setFormData((value) => ({
      ...value,
      [event.target.name]: event.target.value,
    }));

    if (event.target.name === "places") {
      setFormData((value) => ({
        ...value,
        [event.target.name]: places,
      }));
    }

    if (event.target.name === "prix") {
      setFormData((value) => ({
        ...value,
        [event.target.name]: prix,
      }));
    }
  };

  const handleSubmit = () => {
    if (formData.child === "true") {
        formData.child=true
    } else {
        formData.child=false;
    }
    console.log("formData");
    console.log(formData);
    axios.post(`http://localhost:8080/api/events`, formData)
    .then((res) => {
      console.log(res.data);
      datas.push(res.data)
    });
  };

  console.log(formData);
  console.log(datas)
  return (
    <>
      <Form
        style={{
          backgroundColor: "#5882b3",
          width: "60%",
          margin: " 1rem auto",
          padding: "2rem auto",
        }}
      >
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
          <Form.Label column sm={3}>
            Titre
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="titre"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalDescription"
        >
          <Form.Label column sm={3}>
            Description
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Description"
              value={formData.description}
              name="description"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
          <Form.Label column sm={3}>
            Address
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Address"
              value={formData.address}
              name="address"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCity">
          <Form.Label column sm={3}>
            City
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="City"
              value={formData.city}
              name="city"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate">
          <Form.Label column sm={3}>
            Date
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="date"
              placeholder="Date"
              value={formData.date}
              name="date"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPlaces"
          style={{ justifyContent: "space-around" }}
          sm={8}
        >
          <Col
            style={{ display: "flex", justifyContent: "space-between" }}
            sm={5}
          >
            <Form.Label column sm={2}>
              Places
            </Form.Label>
            <Form.Control
              sm={5}
              type="number"
              placeholder="Places"
              value={formData.places}
              name="places"
              onChange={handleChange}
            />
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "space-between" }}
            sm={4}
          >
            <Form.Label column sm={2}>
              Prix
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Prix"
              value={formData.prix}
              name="prix"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPlaces"
          style={{ justifyContent: "space-around" }}
          sm={8}
        >
          <Col
            style={{ display: "flex", justifyContent: "space-between" }}
            sm={5}
          >
            <Form.Label column sm={2}>
              heureDebut
            </Form.Label>
            <Form.Control
              sm={5}
              type="time"
              placeholder="HeureDebut"
              value={formData.heureDebut}
              name="heureDebut"
              onChange={handleChange}
            />
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "space-between" }}
            sm={4}
          >
            <Form.Label column sm={2}>
              heureFin
            </Form.Label>
            <Form.Control
              type="time"
              placeholder="HeureFin"
              value={formData.heureFin}
              name="heureFin"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={4}>
              Enfant autorisé
            </Form.Label>
            <Col sm={6}>
              <Form.Check
                type="radio"
                label="oui"
                name="child"
                value={true}
                id="formHorizontalRadios1"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="non"
                name="child"
                value={false}
                id="formHorizontalRadios2"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" onClick={handleSubmit}>
              Primary
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};
export default Event;
