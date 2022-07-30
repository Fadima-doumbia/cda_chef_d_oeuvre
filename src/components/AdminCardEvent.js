import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const AdminCardEvent = (props) => {
  const [formData, setFormData] = useState(props.data)
  const style = {
    width: "60%",
    // height: "auto"  
  };

  const handleChange = (event) => {
    setFormData((prev)=>({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const updateEvent = () => {

    props.edit(formData)
  }

  return (
    <div>
      <Card style={{  backgroundColor: "#5882b3", color: "white" }}>
        <Card.Header style={{ backgroundColor: "#3C6DA6" }}>
          Nom Evenement
        </Card.Header>
        <Card.Body>
          <div style={{display: "flex"}}>
          <div style={style}>
            <p style={{ margin: "0" }}>
              Places disponibles :{" "}
              <span style={{ fontSize: "12px" }}> {formData.date} places</span>
            </p>
            <p style={{ margin: "0" }}>
              Adresse :{" "}
              <span style={{ fontSize: "12px" }}> {formData.address} </span>
            </p>
            <p style={{ margin: "0" }}>
              Date : <span style={{ fontSize: "12px" }}> {formData.date} </span>
            </p>
            <p style={{ margin: "0" }}>
              Heure : <span style={{ fontSize: "12px" }}>  {formData.heureDebut} - {formData.heureFin} </span>
            </p>
            <p style={{ margin: "0" }}>
              Prix : <span style={{ fontSize: "12px" }}> {formData.prix} </span>
            </p>
          </div>
          <div >
            <h5>Liste de personnes</h5>
            <ul style={{ height: "100px",overflowY: "scroll", scrollbarColor: "rebeccapurple green", scrollbarWidth: "thin"}}>
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
          <div style={{display: "flex", justifyContent: "center"}} >
          <Button variant="primary" style={{ backgroundColor: "#3C6DA6" }}>Modifier</Button>
          </div>
        </Card.Body>
      </Card>

    </div>
  );
};
export default AdminCardEvent;
