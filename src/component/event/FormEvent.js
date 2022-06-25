import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";
import EventService from "../../services/EventService";
import EventList from "./EventList";
import EventsList from "./EventsList";
import FormDetailEvent from "./FormDetailEvent";

const FormEvent = () => {
  const defaultFormValue = {
    name: "",
    detailsEvent: {
      desription: "",
      address: "",
      prix: 0.0,
      places: 1,
      date: null, //AAAAMMDD
      child: false,
      heureFin: "",
      heureDebut: "",
    },
  };
  const initFormValue = {
    name: "",
    detailsEvent: {
      desription: "",
      address: "",
      prix: 0.0,
      places: 1,
      date: null, //AAAAMMDD
      child: false,
      heureFin: "",
      heureDebut: "",
    },
  };
  const [formValue, setFormValue] = useState(initFormValue);
  const [next, setNext] = useState(false);
  // const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState();

  const handleChangee = (event) => {
    setFormValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    // setNext(true);
  };
  const handleNext = (event) => {
    setNext(!next);
  };

  const handleChange = (event) => {
    if (
      event.target.name === "prix" ||
      event.target.name === "places" ||
      event.target.name === "child"
    ) {
      if (event.target.name === "child" && event.target.value === "true") {
        setFormValue((prev) => ({
          ...prev,
          detailsEvent: {
            ...prev.detailsEvent,
            [event.target.name]: true,
          },
        }));
      } else {
        setFormValue((prev) => ({
          ...prev,
          detailsEvent: {
            ...prev.detailsEvent,
            [event.target.name]: false,
          },
        }));
      }

      if (event.target.name === "prix" || event.target.name === "places") {
        let parsing = parseInt(event.target.value);
        setFormValue((prev) => ({
          ...prev,
          detailsEvent: {
            ...prev.detailsEvent,
            [event.target.name]: parsing,
          },
        }));
      }
    } else {
      setFormValue((prev) => ({
        ...prev,
        detailsEvent: {
          ...prev.detailsEvent,
          [event.target.name]: event.target.value,
        },
      }));
    }
  };

  const getAllEvent = () => {
    EventService.getAllEvent().then((res) => {
      setEvents(res.data);
      // setOpen(true)
      console.log(res.data);
    });
  };

  const getEvent = (id) => {
    EventService.getEvent(id).then((res) => {
      setEvent(res.data);
      console.log(res.data);
    });
  };

  const editEvent = (event) => {
    EventService.editEvent(event).then((res) => {
      setEvent(res.data);
      console.log(res.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    EventService.addEvent(formValue).then((res) => {
      console.log(res.data);
    });
    console.log(formValue);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="bg-light p3 border shadow-lg">
        <Row>
          <Col lg>
            <>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="input"
                    placeholder="Name"
                    name="name"
                    value={formValue.name}
                    onChange={handleChangee}
                  />
                </Col>
              </Form.Group>
              {next === false ? (
                <Button variant="primary" type="button" onClick={handleNext}>
                  Primary
                </Button>
              ) : null}
            </>
            {next ? (
              <>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalDescription"
                >
                  <Form.Label column sm={2}>
                    Description
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      name="desription"
                      value={formValue.detailsEvent.desription}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalAdresse"
                >
                  <Form.Label column sm={2}>
                    Adresse
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Adresse"
                      name="address"
                      value={formValue.detailsEvent.address}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPrix"
                >
                  <Form.Label column sm={2}>
                    Prix
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="number"
                      placeholder="Prix"
                      name="prix"
                      value={formValue.detailsEvent.prix}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEnfant"
                >
                  <Form.Label column sm={2}>
                    Enfant
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={handleChange}
                      name="child"
                      value={formValue.detailsEvent.child}
                    >
                      <option>Enfant</option>
                      <option value="true">Oui</option>
                      <option value="false">Non</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalDate"
                >
                  <Form.Label column sm={2}>
                    Date
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="date"
                      placeholder="Date"
                      name="date"
                      value={formValue.detailsEvent.date}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalHeureDebut"
                >
                  <Form.Label column sm={2}>
                    Heure Debut
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="time"
                      placeholder="HeureDebut"
                      name="heureDebut"
                      value={formValue.detailsEvent.heureDebut}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalHeureFin"
                >
                  <Form.Label column sm={2}>
                    Heure Fin
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="time"
                      placeholder="HeureFin"
                      name="heureFin"
                      value={formValue.detailsEvent.heureFin}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
              </>
            ) : null}
          </Col>
        </Row>
        {next ? (
          <Button variant="primary" type="submit">
            Primary
          </Button>
        ) : null}
      </Form>
      <Button variant="primary" type="button" onClick={getAllEvent}>
        Primary
      </Button>
      <EventsList events={events} eventLength={events.length} getEvent={getEvent}  />
      <EventList events={events} eventLength={events.length} getEvent={getEvent}  />
    </>
  );
};
export default FormEvent;
/**
 *         <Table striped bordered hover>
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
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.detailsEvent.desription}</td>
                <td>{event.detailsEvent.address}</td>
                <td>{event.detailsEvent.prix}</td>
                <td>{event.detailsEvent.places}</td>
                <td>{event.detailsEvent.date}</td>
                <td>{event.detailsEvent.heureDebut}</td>
                <td>{event.detailsEvent.heureFin}</td>
              </tr>
            ))}
          </tbody>
        </Table>   
 * import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";
import EventService from "../services/EventService";
import FormDetailEvent from "./FormDetailEvent";

const FormEvent = () => {
  const defaultFormValue = {
    name: "",
    detailsEvent: {
      desription: "",
      address: "",
      prix: 0.0,
      places: 1,
      date: null, //AAAAMMDD
      child: false,
      heureFin: "",
      heureDebut: "",
    },
  };
  const initFormValue = {
    name: "",
    detailsEvent: {
      desription: "",
      address: "",
      prix: 0.0,
      places: 1,
      date: new Date(), //AAAAMMDD
      child: false,
      heureFin: "",
      heureDebut: "",
    }
  };
  const [formValue, setFormValue] = useState(initFormValue);
  const [next, setNext] = useState(false);

//   const handleChange = (event) => {
//     setFormValue((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//     // setNext(true);
//   };

const handleChange = (event) => {
    if (event.target.name === "prix" || event.target.name === "places" || event.target.name === "child") {
        if(event.target.name === "child" && event.target.value === "true"){
            setFormValue((prev) => ({
                ...prev,
                detailsEvent: {
                  ...prev.detailsEvent,
                  [event.target.name]: true,
                },
              }));
        } else {
            setFormValue((prev) => ({
                ...prev,
                detailsEvent: {
                  ...prev.detailsEvent,
                  [event.target.name]: false,
                },
              }));
        }

        if (event.target.name === "prix" || event.target.name === "places") {
            let parsing = parseInt(event.target.value);
            setFormValue((prev) => ({
                ...prev,
                detailsEvent: {
                    ...prev.detailsEvent,
                    [event.target.name]: parsing,
                }
            }))
        }
    }else{
        setFormValue((prev) => ({
            ...prev,
            detailsEvent: {
              ...prev.detailsEvent,
              [event.target.name]: event.target.value,
            },
          }));
    }
  };

  const handleNext = (event) => {
    setNext(!next);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if(formValue.enfant === "true"){
    //     formValue.enfant = true;
    //     console.log(formValue.enfant)
    // }else{
    //     formValue.enfant = false;
    //     console.log(formValue.enfant)
    // }
    // formValue.prix = parseInt(formValue.prix);
    EventService.addEvent(formValue).then((res) => {
      console.log(res.data);
    });
    // alert("inputs");
    console.log(formValue);
  };

  console.log(formValue);
  return (
    <>
      <Form onSubmit={handleSubmit} className="bg-light p3 border shadow-lg">
        <Row>
          <Col lg>
            <>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="input"
                    placeholder="Name"
                    name="name"
                    value={formValue.name}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              {next === false ? (
                <Button variant="primary" type="button" onClick={handleNext}>
                  Primary
                </Button>
              ) : null}
            </>
            {next ? (
              <>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalDescription"
                >
                  <Form.Label column sm={2}>
                    Description
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      name="description"
                      value={formValue.detailsEvent.desription}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalAdresse"
                >
                  <Form.Label column sm={2}>
                    Adresse
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Adresse"
                      name="address"
                      value={formValue.detailsEvent.address}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPrix"
                >
                  <Form.Label column sm={2}>
                    Prix
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="number"
                      placeholder="Prix"
                      name="prix"
                      value={formValue.detailsEvent.prix}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEnfant"
                >
                  <Form.Label column sm={2}>
                    Enfant
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={handleChange}
                      name="enfant"
                      value={formValue.detailsEvent.child}
                    >
                      <option>Enfant</option>
                      <option value="true">Oui</option>
                      <option value="false">Non</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalDate"
                >
                  <Form.Label column sm={2}>
                    Date
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="date"
                      placeholder="Date"
                      name="date"
                      value={formValue.detailsEvent.date}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalHeureDebut"
                >
                  <Form.Label column sm={2}>
                    Heure Debut
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="time"
                      placeholder="HeureDebut"
                      name="heureDebut"
                      value={formValue.detailsEvent.heureDebut}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalHeureFin"
                >
                  <Form.Label column sm={2}>
                    Heure Fin
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="time"
                      placeholder="HeureFin"
                      name="heureFin"
                      value={formValue.detailsEvent.heureFin}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
              </>
            ) : null}
          </Col>
        </Row>
        {next ? (
          <Button variant="primary" type="submit">
            Primary
          </Button>
        ) : null}
      </Form>
    </>
  );
};
export default FormEvent;

 * 
 */
