import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditEvent from "../../pages/EditEvent";
import "../../styles.scss";

const AdminCardEvent = (props) => {
  const [formData, setFormData] = useState(props.data);
  const [isEdit, setIsEdit] = useState(false);
  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
getAllEvent();
  }, [modalShow])
  
  const getAllEvent = () => {
    axios.get("http://localhost:8080/api/events/all/reservations/event").then((res) => {
      props.setDatas(res.data);
      console.log(res.data);
    });
  }
  const style = {
    width: "60%",
  };

  const deleteEvent = (id) => {
    axios.delete(`http://localhost:8080/api/events/${id}`);
    getAllEvent();
    // axios.get("http://localhost:8080/api/events/all/reservations/event").then((res) => {
    //   props.setDatas(res.data);
    //   console.log(res.data);
    // });
  };
  // console.log(formData);

  return (
    <div>
      <Card className="admin-card-container">
        <Card.Header className="header-card">{formData.name}</Card.Header>
        <Card.Body>
          <div className="flex-container">
            <div style={style}>
              <p className="p">
                Places disponibles :{" "}
                <span className="span"> {formData.places} places</span>
              </p>
              <p className="p">
                Adresse : <span className="span"> {formData.address} </span>
              </p>
              <p className="p">
                Date : <span className="span"> {formData.date} </span>
              </p>
              <p className="p">
                Heure :{" "}
                <span className="span">
                  {" "}
                  {formData.heureDebut} - {formData.heureFin}{" "}
                </span>
              </p>
              <p className="p">
                Prix : <span className="span"> {formData.prix} </span>
              </p>
            </div>
            <div>
              <h5>Liste de personnes</h5>
              {formData.reservations.length > 0 ? (
                formData.reservations.map((reservation) => (
                  <ul
                    style={{
                      height: "100px",
                      overflowY: "scroll",
                      scrollbarColor: "rebeccapurple green",
                      scrollbarWidth: "thin",
                    }}
                  >
                    <li>{reservation.user.firstName} - {reservation.user.lastName}</li>
                  </ul>
                ))
              ) : (
                <li>Aucune reservation</li>
              )}
            </div>
          </div>
          <div className="admin-card-button-container">
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
              style={{ backgroundColor: "#3C6DA6" }}
            >
              Modifier
            </Button>
            <Button
              variant="primary"
              onClick={() => deleteEvent(formData.id)}
              style={{ backgroundColor: "#3C6DA6", margin: "0 1rem" }}
            >
              Supprimer
            </Button>
            <EditEvent
              formData={formData}
              show={modalShow}
              // setDatas={props.setDatas}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default AdminCardEvent;
