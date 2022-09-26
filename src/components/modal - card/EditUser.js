import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";

const EditUser = (props) => {
  const [show, setShow] = useState(false);
  const [formReserved, setFormReserved] = useState({ email: "", id: 0 });
  const [user, setUser] = useState({
    lastName: "",
    firstName: "",
    role: "",
    email: "",
    birthday: new Date(),
    phone: "",
  });
  console.log(props.user)

  useEffect(() => {
    let currentUser={
        lastName: props.user.lastName,
        firstName: props.user.firstName,
        role: props.user.role,
        email: props.user.email,
        birthday: props.user.birthday,
        phone: props.user.phone,
      }
    setUser(currentUser);
  }, []);

  let reservation = {
    annulation: false,
    user: { id: 0 },
    event: { id: 0 },
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setFormReserved((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(formReserved);
  };

  const reserver = async () => {
    let userId = 0;
    let test;
    await axios
      .get(`http://localhost:8080/api/events/users/email/${formReserved.email}`)
      .then((res) => {
        setUser(res.data);
        userId = res.data.id;
        test = res.data;
      });

    reservation.event.id = props.id;
    reservation.user.id = test.id;
    axios
      .post(`http://localhost:8080/api/events/reservation`, reservation)
      .then((res) => {
        console.log("reservation", res.data);
      });

    // axios
    //   .get(`http://localhost:8080/api/events/allReservations`)
    //   .then((res) => {
    //     console.log(res.data);
    //   });

    handleClose();
  };

  return (
    <>
      <Button
        className="buttonSubmit"
        onClick={handleShow}
      >
        Reserver
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        style={{ color: "#5882b3" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modifier mes informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form className="form">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={3}>
                Nom
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Nom"
                  value={user.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalDescription"
            >
              <Form.Label column sm={3}>
                Prenom
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Prenom"
                  value={user.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalAddress"
            >
              <Form.Label column sm={3}>
                Date de naissance
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="date"
                  placeholder="Date de naissance"
                  value={user.birthday}
                  name="birthday"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalCity"
            >
              <Form.Label column sm={3}>
                Numéro
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Telephone"
                  value={user.phone}
                  name="phone"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>            

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button
                  variant="primary"
                //   onClick={handleSubmit}
                  className="buttonSubmit"
                >
                  Creer
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "2px solid #3C6DA6" }}>
          <Button className="buttonSubmit" onClick={reserver}>
            Modifier
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditUser;
