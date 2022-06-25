import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DoingRoundIcon from "@rsuite/icons/DoingRound";
import MyVerticallyCenteredModal from "./modals/MyVerticallyCenteredModal";
import EditEventModal from "./modals/EditEventModal";

const Cards = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      <Card border="primary" style={{ width: "18rem", borderRadius: "10px" }}>
        <Card.Header>
          Evènement : Logo <DoingRoundIcon />{" "}
        </Card.Header>
        <Card.Body>
          <Card.Title>Card Title : {props.event.name} </Card.Title>
          <Card.Text>{props.event.description}</Card.Text>
        </Card.Body>
        {showDetail ? (
          <ListGroup className="list-group-flush">
            <ListGroupItem>Date : {props.event.date} </ListGroupItem>
            <ListGroupItem>Lieu : {props.event.address} </ListGroupItem>
            <ListGroupItem>Prix : {props.event.prix} </ListGroupItem>
            <ListGroupItem>
              Place Restantes : {props.event.places}{" "}
            </ListGroupItem>
            <ListGroupItem>Pour Enfant : {props.event.child} </ListGroupItem>
            <ListGroupItem>
              Heure de Debut : {props.event.heureDebut}{" "}
            </ListGroupItem>
            <ListGroupItem>
              Heure de Fin : {props.event.heureFin}{" "}
            </ListGroupItem>
          </ListGroup>
        ) : null}
        <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="outline-primary" onClick={() => setModalShow(true)}>
            Reserver
          </Button>
          {showDetail ? (
            <Button variant="outline-primary" onClick={handleClick}>
              Fermer
            </Button>
          ) : (
            <Button variant="outline-primary" onClick={handleClick}>
              Details
            </Button>
          )}
          <Button variant="outline-primary" onClick={() => setModal(true)}>
            Modifier
          </Button>
          {/* <Button
            variant="outline-primary"
            // href={`/home/${props.event.id}`}
            // onClick={props.edit(props.event.id)}
          >
            Modifier
          </Button> */}
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <EditEventModal
        show={modal}
        onHide={() => setModal(false)}
        event={props.event}
        update={props.edit(props.event.child)}
      />
      <br />
    </>
  );
};
export default Cards;
