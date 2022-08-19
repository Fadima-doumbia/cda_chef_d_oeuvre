import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ReservationTable from "./ReservationTable";
import TableEvent from "./TableEvent";

const ProfilPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/events").then((res) => {
      setDatas(res.data);
    });
  }, []);
  
  return (
    <div>
      <div
      className="profil-container">
        <div style={{ padding: "1rem 1rem 1rem 0" }}>
          <h3>Donnée Personnelles</h3>
          <h5>Nom Prenom : </h5>
          <h5>Email : </h5>
          <h5>Date De Naissance : </h5>
          <Button>Modifier</Button>
        </div>
        <div className="borderBar">
          <h3>Modifier le mot de passe</h3>
          <Form>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Mon Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Veuillez entrer votre mot de passe actuel"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Nouveau Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Veuillez entrer votre nouveau mot de passe"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Confirmation du Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Veuillez rentrer votre nouveau mot de passe"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button>Modifier</Button>
          </Form>
        </div>
      </div>
      <div style={{width:"90%", margin: "auto", color: "#3C6DA6"}}>
        <ReservationTable datas={datas} setDatas={setDatas}/>
        {/* <TableEvent /> */}
      </div>
    </div>
  );
};
export default ProfilPage;
