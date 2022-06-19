import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { getAllByAltText } from "@testing-library/react";

const EditEvent = (props) => {
  const [formDetail, setFormDetail] = useState(props.initFormValue);

  const handleChange = (event) => {
    if (event.target.name === "child") {
      if (event.target.value === "true") {
        setFormDetail((prev) => ({
          ...prev,
          [event.target.name]: true,
        }));
      } else {
        setFormDetail((prev) => ({
          ...prev,
          [event.target.name]: false,
        }));
      }
    } else {
      setFormDetail((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }

    // setFormValue((value) => ({
    //   ...value,
    //   [detailsEvent]: formDetail((prev) => ({
    //     ...prev,
    //     [event.target.name]:event.target.value,
    //   })),
    // }));
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formDetail.name}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formHorizontalDesription"
      >
        <Form.Label column sm={2}>
          Desription
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Desription"
            name="desription"
            value={formDetail.desription}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalAdresse">
        <Form.Label column sm={2}>
          Adresse
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Adresse"
            name="address"
            value={formDetail.address}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPrix">
        <Form.Label column sm={2}>
          Prix
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            placeholder="Prix"
            name="prix"
            value={formDetail.prix}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPlaces">
        <Form.Label column sm={2}>
          Places
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            placeholder="Places"
            name="places"
            value={formDetail.places}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate">
        <Form.Label column sm={2}>
          Date
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="date"
            placeholder="Date"
            name="date"
            value={formDetail.date}
            onChange={handleChange}
          />
        </Col>
      </Form.Group> */}

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalChild">
        <Form.Label column sm={2}>
          Enfant
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            name={"child"}
            value={formDetail.child}
            onChange={handleChange}
          >
            <option value="true">OUI</option>
            <option value="false">NON</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formHorizontalHeureDebut"
      >
        <Form.Label column sm={2}>
          Heure de debut
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="time"
            placeholder="Heure de debut"
            name={"heureDebut"}
            value={formDetail.heureDebut}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalHeureFin">
        <Form.Label column sm={2}>
          Heure de fin
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="time"
            placeholder="Heure de fin"
            name={"heureFin"}
            value={formDetail.heureFin}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="button" onClick={props.EditEvent(props.event.id)}>
            Save
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
