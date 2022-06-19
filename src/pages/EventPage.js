import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { getAllByAltText } from "@testing-library/react";

const EventPage = (props) => {
  //   {
  //     "name": "alfssd",
  //     "detailsEvent": {
  //     "desription": "alfsd blablabla",
  //     "child": false,
  //     "heureDebut": "14:35",
  //     "heureFin": "17:30",
  //     "places": 15,
  //     "prix": 15,
  //     "address": "sdkjnfe@lkfn"
  //     }
  // }
  const initFormValue = {
    name: "n",
    // detailsEvent: {
    desription: "h",
    child: false,
    address: "iu",
    prix: 8,
    places: 1,
    // date: new Date(),
    heureFin: "14:35",
    heureDebut: "17:30",
    // },
  };

  const detailsEvent = {
    desription: "h",
    address: "iu",
    prix: 8,
    places: 1,
    // date: new Date(),
    child: false,
    heureFin: "14:35",
    heureDebut: "17:30",
  };
  const [formValue, setFormValue] = useState(initFormValue);
  const [formDetail, setFormDetail] = useState(initFormValue);

  const handleChange = (event) => {
    // if (event.target.name === "name") {
    //   setFormValue((value) => ({
    //     ...value,
    //     [event.target.name]: event.target.value,
    //   }));
    //   console.log(formValue);
    // } else {
    //   setFormDetail((prev) => ({
    //     ...prev,
    //     [event.target.name]: event.target.value,
    //   }));
    //   console.log(formDetail);
    // }

    if (event.target.name === "child") {
      if (event.target.value === "true") {
        setFormDetail((prev) => ({
          ...prev,
          [event.target.name]: true,
        }));
      } else {
        setFormDetail((prev) => ({
          ...prev,
          [event.target.name]: false,
        }));
      }
    } else {
      setFormDetail((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }

    // setFormValue((value) => ({
    //   ...value,
    //   [detailsEvent]: formDetail((prev) => ({
    //     ...prev,
    //     [event.target.name]:event.target.value,
    //   })),
    // }));
  };

  const handleSubmit = () => {
    formDetail.prix = parseInt(formDetail.prix);
    // formValue.detailsEvent = formDetail;

    console.log(formDetail);
    // console.log(formValue);

    axios
      .post(`http://localhost:8080/api/events/final`, { formDetail })
      .then((res) => {
        console.log(res.data);
      });

    axios.get(`http://localhost:8080/api/events/final`).then((res) => {
      console.log(res.data);
      props.setEvent(res.data);
    });
  };


  // console.log(formValue);
  return (
    <div>
      {props.edithForm ? (
        <Button onClick={props.reset} >Edit</Button>
      ) : (
        <Button onClick={props.reset} >save</Button>
      )}

      {props.edithForm ? (
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formDetail.name}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDesription"
          >
            <Form.Label column sm={2}>
              Desription
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Desription"
                name="desription"
                value={formDetail.desription}
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
                value={formDetail.address}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPrix">
            <Form.Label column sm={2}>
              Prix
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Prix"
                name="prix"
                value={formDetail.prix}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPlaces"
          >
            <Form.Label column sm={2}>
              Places
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Places"
                name="places"
                value={formDetail.places}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalChild">
            <Form.Label column sm={2}>
              Enfant
            </Form.Label>
            <Col sm={10}>
              <Form.Select
                name={"child"}
                value={formDetail.child}
                onChange={handleChange}
              >
                <option value="true">OUI</option>
                <option value="false">NON</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalHeureDebut"
          >
            <Form.Label column sm={2}>
              Heure de debut
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="time"
                placeholder="Heure de debut"
                name={"heureDebut"}
                value={formDetail.heureDebut}
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
              Heure de fin
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="time"
                placeholder="Heure de fin"
                name={"heureFin"}
                value={formDetail.heureFin}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="button" onClick={handleSubmit}>
                Edit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      ) : (
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formDetail.name}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDesription"
          >
            <Form.Label column sm={2}>
              Desription
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Desription"
                name="desription"
                value={formDetail.desription}
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
                value={formDetail.address}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPrix">
            <Form.Label column sm={2}>
              Prix
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Prix"
                name="prix"
                value={formDetail.prix}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPlaces"
          >
            <Form.Label column sm={2}>
              Places
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Places"
                name="places"
                value={formDetail.places}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate">
          <Form.Label column sm={2}>
            Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              placeholder="Date"
              name="date"
              value={formDetail.date}
              onChange={handleChange}
            />
          </Col>
        </Form.Group> */}

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalChild">
            <Form.Label column sm={2}>
              Enfant
            </Form.Label>
            <Col sm={10}>
              <Form.Select
                name={"child"}
                value={formDetail.child}
                onChange={handleChange}
              >
                <option value="true">OUI</option>
                <option value="false">NON</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalHeureDebut"
          >
            <Form.Label column sm={2}>
              Heure de debut
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="time"
                placeholder="Heure de debut"
                name={"heureDebut"}
                value={formDetail.heureDebut}
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
              Heure de fin
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="time"
                placeholder="Heure de fin"
                name={"heureFin"}
                value={formDetail.heureFin}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="button" onClick={handleSubmit}>
                Save
              </Button>
            </Col>
          </Form.Group>
        </Form>
      )}

    </div>
  );
};
export default EventPage;
