import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MyVerticallyCenteredModal from "./modals/MyVerticallyCenteredModal";

const Cards = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleClick = () => {
    setShowDetail(!showDetail)
    // console.log(showDetail)
  }
  return (
    <>
      <Card border="primary" style={{ width: "18rem", borderRadius: "10px" }}>
        <Card.Header>Evènement : Logo   </Card.Header>
        <Card.Body>
          <Card.Title>Card Title : </Card.Title>
          <Card.Text>
            Description : Some quick example text to build on the card title and
            make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
        {showDetail ? (
          <ListGroup className="list-group-flush">
            <ListGroupItem>Date  :  </ListGroupItem>
            <ListGroupItem>Lieu : </ListGroupItem>
            <ListGroupItem>Prix :  </ListGroupItem>
            <ListGroupItem>Place Restantes :  </ListGroupItem>
            <ListGroupItem>Pour Enfant :  </ListGroupItem>
            <ListGroupItem>Heure de Debut :  </ListGroupItem>
            <ListGroupItem>Heure de Fin :  </ListGroupItem>
          </ListGroup>
        ) : null}
        <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="outline-primary" onClick={() => setModalShow(true)}>Reserver</Button>
          {showDetail ? (
          <Button variant="outline-primary" onClick={handleClick}>Fermer</Button>
          ) : (
            <Button variant="outline-primary" onClick={handleClick}>Details</Button>
          )}
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
