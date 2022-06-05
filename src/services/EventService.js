import axios from "axios";

class EventService {
    addEvent(data){
        return axios({
            method: "POST",
            url: "http://localhost:8080/api/events",
            data: data,
            responseType: "json"
        })
    }

    getAllEvent(){
        return axios({
            method: "GET",
            url: "http://localhost:8080/api/events",
            responseType: "json"
        })
    }

    getEvent(id){
        return axios.get(`http://localhost:8080/api/events/${id}`)
    }

    editEvent(data){
        return axios.put(`http://localhost:8080/api/events/${data.id}`, { data })
    }

    deleteEvent(data){
        return axios.delete(`http://localhost:8080/api/events/${data.id}`)
    }

}

export default new EventService();