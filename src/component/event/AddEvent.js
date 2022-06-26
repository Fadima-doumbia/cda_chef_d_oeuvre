import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";

const AddEvent = (props) => {
  const initFormValue = {
    id: null,
    name: "",
    desription: "",
    child: false,
    address: "",
    prix: 15.0,
    places: 0,
    heureDebut: "11:30:00",
    heureFin: "14:35:00",
  };  
  const [formDetail, setFormDetail] = useState(initFormValue);

  const handleChange = (event) => {
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
    console.log(formDetail)
  };

  const handleSubmit = () => {
    formDetail.prix = parseInt(formDetail.prix);
    formDetail.places = parseInt(formDetail.places);
    console.log(formDetail);
    axios
      .post(`http://localhost:8080/api/events/final`, formDetail )
      .then((res) => {
        console.log(res.data);
        props.setEvent((prev)=>[...prev, res.data]);
      });
  };

  return (
    <div>
    {props.edithForm ? (
      <Button onClick={props.reset}>Edit</Button>
    ) : (
      <Button onClick={props.reset}>save</Button>
    )}
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
              Creer un evènement
            </Button>
          </Col>
        </Form.Group>
      </Form>
    {/* {props.edithForm ? ( 
      // <EditEvent 
      // initFormValue={props.initFormValue}
      // edit={props.edit}
      // />
    // ) : (
    // )}*/}
  </div>
    // <Form layout="horizontal" 
    // onChange={handleChange }
    // >
    //   <Form.Group controlId="name-6">
    //     <Form.ControlLabel>Nom de L'évènement</Form.ControlLabel>
    //     <Form.Control name="name" value={formValue.name}  />
    //   </Form.Group>
    //   <Form.Group controlId="description-6">
    //     <Form.ControlLabel>Description</Form.ControlLabel>
    //     <Form.Control name="description"  />
    //   </Form.Group>
    //   <Form.Group controlId="address-6">
    //     <Form.ControlLabel>Adresse</Form.ControlLabel>
    //     <Form.Control name="address" />
    //   </Form.Group>
    //   <Form.Group controlId="prix-6">
    //     <Form.ControlLabel>Prix</Form.ControlLabel>
    //     <Form.Control name="prix" type="number" />
    //   </Form.Group>
    //   <Form.Group controlId="places-6">
    //     <Form.ControlLabel>Place</Form.ControlLabel>
    //     <Form.Control name="places" type="number" />
    //   </Form.Group>
    //   <Form.Group controlId="child-6">
    //     <Form.ControlLabel>Enfant</Form.ControlLabel>
    //     <Form.Control name="child" type="bolean"  />
    //     <Form.HelpText tooltip>Required</Form.HelpText>
    //   </Form.Group>
    //   <Form.Group controlId="heureDebut-6">
    //     <Form.ControlLabel>Heure Debut</Form.ControlLabel>
    //     <Form.Control name="heureDebut" type="time" autoComplete="off" />
    //   </Form.Group>
    //   <Form.Group controlId="heureFin-6">
    //     <Form.ControlLabel>Heure Fin</Form.ControlLabel>
    //     <Form.Control name="heureFin" type="time" autoComplete="off" />
    //   </Form.Group>
    //   <Form.Group>
    //     <ButtonToolbar>
    //       <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
    //       <Button appearance="default">Cancel</Button>
    //     </ButtonToolbar>
    //   </Form.Group>
    // </Form>
  );
};

export default AddEvent;
