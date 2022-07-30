import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditEvent from "../pages/EditEvent";
import DeleteEvent from "../components/DeleteModal"

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

  const deleteEvent = (id)=>{
    console.log('ici')
    axios.delete(`http://localhost:8080/api/events/delete/${id}`)
    .then((res) => {
        console.log(res.data);
        console.log("delete");
        let result = props.datas.filter( (element) => element.id !== id );
        props.setDatas(result)
      });
  }

  return (
    <div>
      <Card style={{ backgroundColor: "#5882b3", color: "white" }}>
        <Card.Header style={{ backgroundColor: "#3C6DA6" }}>
          {formData.name}
        </Card.Header>
        <Card.Body>
          <div style={{ display: "flex" }}>
            <div style={style}>
              <p style={{ margin: "0" }}>
                Places disponibles :{" "}
                <span style={{ fontSize: "12px" }}>
                  {" "}
                  {formData.places} places
                </span>
              </p>
              <p style={{ margin: "0" }}>
                Adresse :{" "}
                <span style={{ fontSize: "12px" }}> {formData.address} </span>
              </p>
              <p style={{ margin: "0" }}>
                Date :{" "}
                <span style={{ fontSize: "12px" }}> {formData.date} </span>
              </p>
              <p style={{ margin: "0" }}>
                Heure :{" "}
                <span style={{ fontSize: "12px" }}>
                  {" "}
                  {formData.heureDebut} - {formData.heureFin}{" "}
                </span>
              </p>
              <p style={{ margin: "0" }}>
                Prix :{" "}
                <span style={{ fontSize: "12px" }}> {formData.prix} </span>
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
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="primary" onClick={() => setModalShow(true)} style={{ backgroundColor: "#3C6DA6" }} >
              Modifier
            </Button>
            <EditEvent
              formData={formData}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <DeleteEvent 
            bodyText={"Est-vous sure de vouloir SUPPRIMER cet evenement ?"}
            title={"Suppression d'évenement"}
            id={formData.id}
            delete={deleteEvent}
            formData={formData}
            setDatas={props.setDatas}
            datas={props.datas}
            // style={{margin: "1rem"}}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default AdminCardEvent;
