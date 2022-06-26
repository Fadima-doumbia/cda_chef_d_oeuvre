import axios from "axios";
import { useEffect, useState } from "react";
import AddEvent from "./AddEvent";
import EventList from "./EventList";

const Event = () => {
  // const initFormValue = {
  //   id: null,
  //   name: "",
  //   desription: "",
  //   child: false,
  //   address: "",
  //   prix: 15.0,
  //   places: 0,
  //   heureDebut: "11:30:00",
  //   heureFin: "14:35:00",
  // };
  const [event, setEvent] = useState([]);
  const [edithForm, setEditForm] = useState(false);

  const reset = () => {
    setEditForm(!edithForm);
    console.log(edithForm);
  };

  useEffect(() => {
    console.log("effect");
    axios.get(`http://localhost:8080/api/events/final`).then((res) => {
      console.log(res.data);
      setEvent(res.data);
    });
  }, []);

  return (
    <>
          <EventList
              eventLength={event.length}
              setEvent={setEvent}
              events={event}
      />
      <AddEvent reset={reset} edithForm={edithForm} setEvent={setEvent} />
    </>
  );
};
export default Event;
