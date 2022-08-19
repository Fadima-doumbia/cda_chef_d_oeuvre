import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditEvent from "../pages/EditEvent";
import '../styles.scss'

const AdminCardEvent = (props) => {
  const [formData, setFormData] = useState(props.data);
  const [isEdit, setIsEdit] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const style = {
    width: "60%",
    // height: "auto"
  };

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const updateEvent = () => {
    props.edit(formData);
  };

  const editEvent = () => {
    setIsEdit(true);
  };

  return (
    <div>
      <Card className="admin-card-container">
        <Card.Header className="header-card">
          {formData.name}
        </Card.Header>
        <Card.Body>
          <div className="flex-container">
            <div style={style}>
              <p className="p">
                Places disponibles :{" "}
                <span className="span">
                  {" "}
                  {formData.places} places
                </span>
              </p>
              <p className="p">
                Adresse :{" "}
                <span className="span"> {formData.address} </span>
              </p>
              <p  className="p">
                Date :{" "}
                <span className="span"> {formData.date} </span>
              </p>
              <p className="p">
                Heure :{" "}
                <span className="span">
                  {" "}
                  {formData.heureDebut} - {formData.heureFin}{" "}
                </span>
              </p>
              <p className="p">
                Prix :{" "}
                <span className="span"> {formData.prix} </span>
              </p>
            </div>
            <div>
              <h5>Liste de personnes</h5>
              <ul
                style={{
                  height: "100px",
                  overflowY: "scroll",
                  scrollbarColor: "rebeccapurple green",
                  scrollbarWidth: "thin",
                }}
              >
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
                <li>Adama doumbia</li>
              </ul>
            </div>
          </div>
          <div className="admin-card-button-container">
            <Button variant="primary" onClick={() => setModalShow(true)} style={{ backgroundColor: "#3C6DA6" }} >
              Modifier
            </Button>
            <EditEvent
              formData={formData}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default AdminCardEvent;
