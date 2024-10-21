import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/apiClient";
const useTicket = (eventId) => {
    const [tickets, setTickets] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get(
                `/tickets/${eventId}`,
                // { eventId },
                { signal: controller.signal }
            )
            .then((res) => setTickets(res.data))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
        return () => controller.abort();
    }, [eventId]);

    return { tickets, error, setTickets, setError };
};

export default useTicket;
