import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TableEvent from './TableEvent';

const ProfilPage = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent:"space-around", backgroundColor: "#5882b3", width: "70%", margin:"auto", padding:"1rem", color: "white" }}>
        <div style={{padding:"1rem 1rem 1rem 0" }}>
          <h3>Donnée Personnelles</h3>
          <h5>Nom Prenom : </h5>
          <h5>Email : </h5>
          <h5>Date De Naissance : </h5>
          <Button>Modifier</Button>
        </div>
        <div style={{padding:"1rem 1rem 1rem 2rem" ,borderLeft: "2px solid #3C6DA6"}}>
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
      <div>
      <TableEvent/>
      </div>
    </div>
  );
};
export default ProfilPage;
