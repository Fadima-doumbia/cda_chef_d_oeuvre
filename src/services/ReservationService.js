import axios from "axios";

class ReservationService {
    addReservation (data) {
        return axios({
            method: "POST",
            url: "http://localhost:8080/api/events/reservations",
            data: data,
            responseType: "json"
        })
    }

    getAllReservation(eventId){
        return axios.get(`http://localhost:8080/api/events/r/${eventId}`)
    }

    cancelReservation(id){
        return axios.put(`http://localhost:8080/api/events/annuler/${id}`)
    }
// /annuler/{id}

}
export default new ReservationService();