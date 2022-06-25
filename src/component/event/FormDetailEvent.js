import { useState } from "react";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const FormDetailEvent = (props) => {
  const handleChange = (event) => {
    if (event.target.name === "prix" || event.target.name === "places" || event.target.name === "child") {
        if(event.target.name === "child" && event.target.value === "true"){
            props.setFormValue((prev) => ({
                ...prev,
                detailsEvent: {
                  ...prev.detailsEvent,
                  [event.target.name]: true,
                },
              }));
        } else {
            props.setFormValue((prev) => ({
                ...prev,
                detailsEvent: {
                  ...prev.detailsEvent,
                  [event.target.name]: false,
                },
              }));
        }

        if (event.target.name === "prix" || event.target.name === "places") {
            let parsing = parseInt(event.target.value);
            props.setFormValue((prev) => ({
                ...prev,
                detailsEvent: {
                    ...prev.detailsEvent,
                    [event.target.name]: parsing,
                }
            }))
        }
    }else{
        props.setFormValue((prev) => ({
            ...prev,
            detailsEvent: {
              ...prev.detailsEvent,
              [event.target.name]: event.target.value,
            },
          }));
    }
  };

  return (
    <>
      <Form
        onSubmit={props.handleSubmit}
        className="bg-light p3 border shadow-lg"
      >
        <Row>
          <Col lg>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalDescription"
            >
              <Form.Label column sm={2}>
                Description
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={props.formValue.desription}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalAdresse"
            >
              <Form.Label column sm={2}>
                Adresse
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Adresse"
                  name="address"
                  value={props.formValue.address}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPrix"
            >
              <Form.Label column sm={2}>
                Prix
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  placeholder="Prix"
                  name="prix"
                  value={props.formValue.prix}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEnfant"
            >
              <Form.Label column sm={2}>
                Enfant
              </Form.Label>
              <Col sm={10}>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="child"
                  value={props.formValue.child}
                >
                  <option>Enfant</option>
                  <option value="true">Oui</option>
                  <option value="false">Non</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalDate"
            >
              <Form.Label column sm={2}>
                Date
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="date"
                  placeholder="Date"
                  name="date"
                  value={props.formValue.date}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalHeureDebut"
            >
              <Form.Label column sm={2}>
                Heure Debut
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="time"
                  placeholder="HeureDebut"
                  name="heureDebut"
                  value={props.formValue.heureDebut}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalHeureFin"
            >
              <Form.Label column sm={2}>
                Heure Fin
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="time"
                  placeholder="HeureFin"
                  name="heureFin"
                  value={props.formValue.heureFin}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Primary
        </Button>
      </Form>
    </>
  );
};

export default FormDetailEvent;
