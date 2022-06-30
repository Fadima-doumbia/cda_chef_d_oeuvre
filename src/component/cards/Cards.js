import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DoingRoundIcon from "@rsuite/icons/DoingRound";
import MyVerticallyCenteredModal from "../modals/MyVerticallyCenteredModal";
import EditEventModal from "../modals/EditEventModal";
import axios from "axios";
import DeleteEvent from "../modals/DeleteEvent";
import TrashIcon from "@rsuite/icons/Trash";
import EditIcon from "@rsuite/icons/Edit";
import DetailIcon from "@rsuite/icons/Detail";
import CloseIcon from "@rsuite/icons/Close";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import CalendarIcon from '@rsuite/icons/Calendar';
import EventDetailIcon from '@rsuite/icons/EventDetail';

const Cards = (props) => {
  const initial = {
    eventId:props.event.id,
    userId:0
  }
  const [reserve, setReserve] = useState(initial);
  const [showDetail, setShowDetail] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  const handleOnClick = () => {
    setShowDetail(!showDetail);
  };

  const handleOnClickReserved = (event) => {
    setReserve((value) => ({
      ...value,
      [event.target.name]: event.target.value
    }));
    console.log(reserve)
  }

  const submitReserved = () => {
    const reserved = parseInt(reserve.userId)
    const finalReserved = {
      userId: reserved,
      eventId: reserve.eventId
    }
    axios.post(`http://localhost:8080/api/events/reservations`, finalReserved).then((res) => {
      console.log(res.data);
      // props.setEvent((prev) => {
      // })
    });
    setModalShow(false);
    console.log(reserve);
  }

  const deleteById = (id) => {
    axios.delete(`http://localhost:8080/api/events/final/${id}`).then((res) => {
      console.log(res.data);
      // props.setEvent((prev) => {
      // })
    });
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
            Reserver<CalendarIcon/>
          </Button>
          {showDetail ? (
            <Button variant="outline-primary" onClick={handleClick}>
              <CloseIcon />
            </Button>
          ) : (
            <Button variant="outline-primary" onClick={handleClick}>
              {/* <DetailIcon />
              <AddOutlineIcon /> */}
               Detail<EventDetailIcon/>
            </Button>
          )}
          <Button variant="outline-primary" onClick={() => setModal(true)}>
            <EditIcon />
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => setDeleteModal(true)}
          >
            <TrashIcon />
          </Button>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
      eventId={props.event.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
        reserve={reserve}
        setReserve={setReserve}
        handleChange={handleOnClickReserved}
        submit={submitReserved}
      />
      <EditEventModal
        show={modal}
        onHide={() => setModal(false)}
        event={props.event}
        update={props.edit}
      />
      <DeleteEvent
        id={props.event.id}
        show={DeleteModal}
        onHide={() => setDeleteModal(false)}
      />
      <br />
    </>
  );
};
export default Cards;
