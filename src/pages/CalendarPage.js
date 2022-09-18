import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CardEvent from "../components/modal - card/CardEvent";

const CalendarPage = () => {
    const [datas, setDatas] = useState([]);
    const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);
  useEffect(() => {
    axios.get("http://localhost:8080/api/events/all/reservations/event").then((res) => {
      let objectList=  {
        'title': '',
        'start': new Date(),
        'end': new Date()
      }
      res.data.forEach(element => {
        events.push({
          'title':element.name,
          'start':new Date(element.date),
          'end':new Date(element.date),
        })
      });

      setDatas(res.data);
    });
  }, []);
  const container = {
    // border: "3px solid black",
    // borderRadius: "5px",
    height: "500px",
    overflow: "auto",
  }
  return (
    <Container fluid style={{height: "100%"}}>
        <h2>Le Planning</h2>
      <Row >
        <Col sm={8}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </Col>
        <Col sm={4} fluid  style={container}>
          {datas.length > 0 ? (
            datas.map((data, index) => (
              <div key={index}>
                <CardEvent formData={data} />
              </div>
            ))
          ) : (
            <div>null</div>
          )} 
        </Col>
      </Row>
    </Container>
  );
};
export default CalendarPage;
