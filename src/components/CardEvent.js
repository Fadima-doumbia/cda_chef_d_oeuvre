import { fontSize } from "@mui/system";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDetailsEvent from "./CardDetailsEvent";
import ReservationModal from "./ReservationModal";
import SearchBar from "./SearchBar";

const CardEvent = () => {
  let products = [
    "apples",
    "bananas",
    "grapefruit",
    "kiwi",
    "avocados",
    "lettuce",
    "tomatoes",
    "cheese",
    "bread",
    "yogurt",
    "peas",
    "carrots",
    "broccoli",
    "beans",
    "pizza",
    "pasta",
    "rice",
    "cereal",
    "butter",
    "milk",
    "eggs",
    "onions",
    "garlic",
    "honey",
    "soup",
    "salt",
    "pepper",
    "oregano",
    "basil",
    "paprika",
  ];
  return (
    <div>
      {/* <SearchBar products={products} /> */}

      <Card
        style={{
          width: "30%",
          backgroundColor: "#5882b3",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Card Title <span>LOGO</span>{" "}
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
              <span style={{ fontSize: "12px" }}>20 places</span>
            </p>
            <p style={{ margin: "0" }}>
              Adresse :{" "}
              <span style={{ fontSize: "12px" }}>20 rue de louvre Bamako</span>
            </p>
            <p style={{ margin: "0" }}>
              Heure : <span style={{ fontSize: "12px" }}>14h - 18h</span>
            </p>
            <p style={{ margin: "0" }}>
              Date : <span style={{ fontSize: "12px" }}>20 Decembre 2022</span>
            </p>
            <p style={{ margin: "0" }}>
              Prix : <span style={{ fontSize: "12px" }}>20 000</span>
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
            <CardDetailsEvent />
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
