import { fontSize } from "@mui/system";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReservationModal from "./ReservationModal";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const CardDetailsEvent=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
<div>
<Button
        variant="primary"
        onClick={handleShow}
        style={{
          heigth: "35px",
          width: "auto",
          backgroundColor: "#3C6DA6",
        //   maxWidth: "40%",
        }}
      >
        Details
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} style={{color: "#5882b3"}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{ margin: "0" }}>
              Description :{" "}
              <span style={{ fontSize: "12px" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </p>
            <p style={{ margin: "0" }}>
              Autorisé aux enfants :{" "}
              <span style={{ fontSize: "12px" }}>Non</span>
            </p>
            <p style={{ margin: "0" }}>
              Places disponibles :{" "}
              <span style={{ fontSize: "12px" }}>20 places</span>
            </p>
            <p style={{ margin: "0" }}>
              Adresse :{" "}
              <span style={{ fontSize: "12px" }}>20 rue de louvre Bamako</span>
            </p>
            <p style={{ margin: "0" }}>
              Heure : <span style={{ fontSize: "12px" }}>14h - 18h</span>
            </p>
            <p style={{ margin: "0" }}>
              Date : <span style={{ fontSize: "12px" }}>20 Decembre 2022</span>
            </p>
            <p style={{ margin: "0" }}>
              Prix : <span style={{ fontSize: "12px" }}>20 000</span>
            </p>

          {/* <hr style={{ backgroundColor: "blue", height: "2px" }} /> */}
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "2px solid #3C6DA6" }}>
          {/* <Button variant="primary" onClick={handleClose}>
            Reserver
          </Button> */}
          <ReservationModal/>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    )
}

export default CardDetailsEvent;