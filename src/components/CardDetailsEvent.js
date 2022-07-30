import Button from "react-bootstrap/Button";
import ReservationModal from "./ReservationModal";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const CardDetailsEvent=(props)=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let formData = props.formData;
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
                 {formData.description}
              </span>
            </p>
            <p style={{ margin: "0" }}>
              Autorisé aux enfants :{" "}
              <span style={{ fontSize: "12px" }}>{formData.child ? "OUI" : "NON"}</span>
            </p>
            <p style={{ margin: "0" }}>
              Places disponibles :{" "}
              <span style={{ fontSize: "12px" }}> {formData.places} places  </span>
            </p>
            <p style={{ margin: "0" }}>
              Adresse :{" "}
              <span style={{ fontSize: "12px" }}> {formData.address}</span>
            </p>
            <p style={{ margin: "0" }}>
              Heure : <span style={{ fontSize: "12px" }}> {formData.heureDebut} à {formData.heureFin} </span>
            </p>
            <p style={{ margin: "0" }}>
              Date : <span style={{ fontSize: "12px" }}> {formData.date}</span>
            </p>
            <p style={{ margin: "0" }}>
              Prix : <span style={{ fontSize: "12px" }}> {formData.prix} f CFA</span>
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