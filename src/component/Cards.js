import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MyVerticallyCenteredModal from "./modals/MyVerticallyCenteredModal";
import DoingRoundIcon from '@rsuite/icons/DoingRound';

const Cards = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleClick = () => {
    setShowDetail(!showDetail)
  }
  const editEvent = (id) => {
    props.setEditForm(true);
    props.edit(id);
  }

  return (
    <>
      <Card border="primary" style={{ width: "18rem", borderRadius: "10px" }}>
        <Card.Header>Evènement : Logo  <DoingRoundIcon /> </Card.Header>
        <Card.Body>
          <Card.Title>Card Title : {props.event.name} </Card.Title>
          <Card.Text>
          {props.event.description} 
          </Card.Text>
        </Card.Body>
        {showDetail ? (
          <ListGroup className="list-group-flush">
            <ListGroupItem>Date  : {props.event.date}  </ListGroupItem>
            <ListGroupItem>Lieu : {props.event.address} </ListGroupItem>
            <ListGroupItem>Prix : {props.event.prix}  </ListGroupItem>
            <ListGroupItem>Place Restantes : {props.event.places}  </ListGroupItem>
            <ListGroupItem>Pour Enfant : {props.event.child}  </ListGroupItem>
            <ListGroupItem>Heure de Debut : {props.event.heureDebut}  </ListGroupItem>
            <ListGroupItem>Heure de Fin : {props.event.heureFin}  </ListGroupItem>
          </ListGroup>
        ) : null}
        <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="outline-primary" onClick={() => setModalShow(true)}>Reserver</Button>
          {showDetail ? (
          <Button variant="outline-primary" onClick={handleClick}>Fermer</Button>
          ) : (
            <Button variant="outline-primary" onClick={handleClick}>Details</Button>
          )}
          {/* <Button variant="outline-primary" onClick={editEvent(props.event.id)}>Modifier</Button> */}
        </Card.Body>
      </Card>
      <br />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        reserved={props.confirm}
      />
    </>
  );
};
export default Cards;
