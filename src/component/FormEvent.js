import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";

const FormEvent = () => {
  const defaultFormValue = {
    name: "",
    description: "",
    address: "",
    prix: 0.0,
    date: null,
    enfant: false,
    heureFin: "",
    heureDebut: "",
  };
  const initFormValue = {
    name: "",
    description: "",
    address: "",
    prix: 0.0,
    date: new Date(),
    enfant: false,
    heureFin: "",
    heureDebut: "",
  };
  const [formValue, setFormValue] = useState(initFormValue);

  const handleChange = (event) => {
      console.log(event.target.name)
    setFormValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log(form);
    alert("inputs");
  };

  console.log(formValue);
  return (
    <>
      <Form onSubmit={handleSubmit} className="bg-light p3 border shadow-lg">
        <Row>
          <Col lg>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="input"
                  placeholder="Name"
                  name = "name"
                  value={formValue.name}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

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
                  name = "description"
                  value={formValue.description}
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
                  name = "address"
                  value={formValue.address}
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
                  name = "prix"
                  value={formValue.prix}
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
                  onChange={handleChange} name = "enfant"
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
                    name = "date"
                    value={formValue.date}
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
                    name = "heureDebut"
                    value={formValue.heureDebut}
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
                    name = "heureFin"
                    value={formValue.heureFin}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">Primary</Button>

      </Form>
    </>
  );
};
export default FormEvent;
