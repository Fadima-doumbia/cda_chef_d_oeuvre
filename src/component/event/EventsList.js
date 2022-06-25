import { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import EventService from "../../services/EventService";
import 'bootstrap/dist/css/bootstrap.min.css';

const EventsList = (props) => {
  let events = props.events;

  return (
    <>
      {props.eventLength > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Address</th>
              <th>prix</th>
              <th>places</th>
              <th>dates</th>
              <th>debut</th>
              <th>fin</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                {/* <td>{event.id}</td> */}
                <td>{event.name}</td>
                <td>{event.detailsEvent.desription}</td>
                <td>{event.detailsEvent.address}</td>
                <td>{event.detailsEvent.prix}</td>
                <td>{event.detailsEvent.places}</td>
                <td>{event.detailsEvent.date}</td>
                <td>{event.detailsEvent.heureDebut}</td>
                <td>{event.detailsEvent.heureFin}</td>
                <td>
                  {/* <Button variant="success" onClick={props.getEvent(event.id)}>Detail</Button> */}
                  <Button variant="warning" onClick={props.editEvent(event)}>Edit</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </>
  );
};
export default EventsList;
