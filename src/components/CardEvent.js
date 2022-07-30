import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardDetailsEvent from "./CardDetailsEvent";
import ReservationModal from "./ReservationModal";

const CardEvent = (props) => {
  const formData = props.formData;

  // let products = [
  //   "apples",
  //   "bananas",
  //   "grapefruit",
  //   "kiwi",
  //   "avocados",
  //   "lettuce",
  //   "tomatoes",
  //   "cheese",
  //   "bread",
  //   "yogurt",
  //   "peas",
  //   "carrots",
  //   "broccoli",
  //   "beans",
  //   "pizza",
  //   "pasta",
  //   "rice",
  //   "cereal",
  //   "butter",
  //   "milk",
  //   "eggs",
  //   "onions",
  //   "garlic",
  //   "honey",
  //   "soup",
  //   "salt",
  //   "pepper",
  //   "oregano",
  //   "basil",
  //   "paprika",
  // ];
  return (
    <div>
      {/* <SearchBar products={products} /> */}

      <Card
        style={{
          width: "350px",
          backgroundColor: "#5882b3",
          margin:"1rem",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {formData.name} <span>LOGO</span>{" "}
          </Card.Title>
          <hr style={{ backgroundColor: "blue", height: "2px" }} />
          <Card.Text>
            {/* <p style={{ margin: "0" }}>
              Description :{" "}
              <span style={{ fontSize: "12px" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </p> */}
            <p style={{ margin: "0" }}>
              Places disponibles :{" "}
              <span style={{ fontSize: "12px" }}> {formData.date} places</span>
            </p>
            <p style={{ margin: "0" }}>
              Adresse :{" "}
              <span style={{ fontSize: "12px" }}> {formData.address} </span>
            </p>
            <p style={{ margin: "0" }}>
              Heure : <span style={{ fontSize: "12px" }}> {formData.heureDebut} - {formData.heureFin}</span>
            </p>
            <p style={{ margin: "0" }}>
              Date : <span style={{ fontSize: "12px" }}> {formData.date} </span>
            </p>
            <p style={{ margin: "0" }}>
              Prix : <span style={{ fontSize: "12px" }}> {formData.prix} </span>
            </p>
          </Card.Text>

          {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
          {/* <Button variant="primary" href="/details" style={{ heigth: "35px", width: "auto", backgroundColor: "#3C6DA6" }}>
              Details
            </Button> */}
          {/* <Button variant="primary" style={{ heigth: "35px", width: "auto", backgroundColor: "#3C6DA6" }}>
              Reserver
            </Button> */}
          {/* <CardDetailsEvent/>
            <ReservationModal/> */}
          {/* </div> */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CardDetailsEvent formData={formData} />
            <ReservationModal />
            {/* <SearchBar/> */}
          </div>
          {/* <Card.Link href="#">Card Link</Card.Link> */}
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardEvent;
