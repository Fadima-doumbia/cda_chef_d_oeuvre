import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteEvent(props) {
  const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
      deleteById()
    
    }, [isDeleted])
    
  const deleteById = () => {
    console.log("first");
    if (isDeleted === true) {
      console.log("condition");
      axios
        .delete(`http://localhost:8080/api/events/final/${props.id}`)
        .then((res) => {
          console.log(res.data);
          // props.setEvent((prev) => {
          // })
        });
    }
    props.onHide();
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
          Supprimer un évènement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Etes-vous sure de vouloir supprimer cet evènement ? </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Annuler</Button>
        <Button onClick={() => setIsDeleted(true)}>Supprimer</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default DeleteEvent;
