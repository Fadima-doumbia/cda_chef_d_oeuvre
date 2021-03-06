import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row, Modal } from "react-bootstrap";
function EditEventModal(props) {
  const [formDetail, setFormDetail] = useState(props.event);

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
  };

  const edit = (formDetail) => {
    axios.put(`http://localhost:8080/api/events/final/${formDetail.id}`, formDetail).then((res) => {
      console.log(res.data);
      // props.setEvent((prev) => {
      // })
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modification de l'evènement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPlaces"
          >
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

          {/* 
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate">
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
      </Form.Group> 
      */}

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

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalHeureFin"
          >
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Annuler</Button>
        <Button onClick={edit(formDetail)}>Modifier</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditEventModal;
