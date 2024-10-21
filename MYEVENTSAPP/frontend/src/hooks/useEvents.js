import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get("/events", { signal: controller.signal })
            .then((res) => setEvents(res.data))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
        return () => controller.abort();
    }, []);

    return { events, error, setEvents, setError };
};

export default useEvents;
