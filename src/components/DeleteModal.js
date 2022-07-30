import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formData = props.formData;
  const handleDelete = () => {
    console.log("first")
    props.delete(props.id);
    handleClose();
  };
  const style = {
    width: "60%",
  };

  return (
    <div style={{ backgroundColor: "#5882b3", color: "white" }}>
      <Button variant="danger" onClick={handleShow}>
        Supprimer
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} >
        <Modal.Header closeButton style={{ backgroundColor: "#3C6DA6", color: "white" }}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#3C6DA6" }}>
          {props.bodyText}
          <hr/>
          <div style={{ display: "flex" }}>
            <div style={style}>
              <p style={{ margin: "0" }}>
                Places disponibles :{" "}
                <span style={{ fontSize: "12px" }}>
                  {" "}
                  {formData.places} places
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
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="danger" onClick={handleDelete}>
            Supprimer
          </Button>
          <Button style={{ backgroundColor: "#5882b3" }} onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default DeleteModal;
