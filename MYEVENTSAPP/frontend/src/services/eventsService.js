import apiClient from "./apiClient";

class EventService {
    createBouhgtTicket = (bouhgtTicket) => {
        return apiClient.post("/boughtTickets", bouhgtTicket);
    };
    createTicket = (event) => {
        return apiClient.post("/tickets", event);
    };
    createEvent = (event) => {
        return apiClient.post("/events", event);
    };

    updateEvent = (event) => {
        return apiClient.put("/events/" + event.id, event);
    };

    deleteEvent = (id) => {
        return apiClient.delete("/events/" + id);
    };
}

export default new EventService();
