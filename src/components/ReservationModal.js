import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ReservationModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
        //   heigth: "35px",
          width: "auto",
          backgroundColor: "#3C6DA6",
        //   maxWidth: "40%",
        }}
      >
        Reserver
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} style={{ color: "#5882b3"}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ margin: "0" }}>
            Evenemment :{" "}
            <span style={{ fontSize: "12px" }}>
              Vente privé
            </span>
          </p>
          <p style={{ margin: "0" }}>
            Adresse :{" "}
            <span style={{ fontSize: "12px" }}>
               20 rue de louvre BKO 
            </span>
          </p>
          <p style={{ margin: "0" }}>
            Date et heure :{" "}
            <span style={{ fontSize: "12px" }}>
              Le 20 janvier 2022 de 14h à 18h
            </span>
          </p>
          <p style={{ margin: "0" }}>
            Prix :{" "}
            <span style={{ fontSize: "12px" }}>
              20 000 fcfa
            </span>
          </p>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="6" style={{color: "#3C6DA6"}}>
                Veuillez entrer votre email :
              </Form.Label>
              <Col sm="6">
                <Form.Control style={{color: "#3C6DA6"}}
                //   plaintext
                  readOnly
                  defaultValue="email@example.com"
                />
              </Col>
            </Form.Group>
          </Form>
          {/* <hr style={{ backgroundColor: "blue", height: "2px" }} /> */}
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "2px solid #3C6DA6" }}>
          <Button variant="primary" onClick={handleClose}>
            Reserver
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReservationModal;
