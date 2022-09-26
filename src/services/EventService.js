import axios from "axios";

// const header = {
//   headers: {
//     'Authorization': `Basic ${token}`
//   }}

const postEvent = (data) => {
  return axios.post(`http://localhost:8080/api/events`, data);
};

const getAllEvent = () => {
  return axios.get("http://localhost:8080/api/events/all/reservations/event");
};

const getEvent = (id) => {
  return axios.get(`http://localhost:8080/api/events/reservations/event/${id}`);
};

const putEvent = (id, data) => {
  return axios.put(
    `http://localhost:8080/api/events/reservations/event/${id}`,
    data
  );
};

const deleteEvent = (id) => {
  return axios.delete(
    `http://localhost:8080/api/events/reservations/event/${id}`
  );
};


const EventService = {
  postEvent,
  getAllEvent,
  getEvent,
  putEvent,
  deleteEvent,
};

export default EventService;
