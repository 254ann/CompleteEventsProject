import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/apiClient";
const useBoughtTicket = (userId) => {
    const [boughtTickets, setBoughtTickets] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get(`/boughtTickets/${userId}`, { signal: controller.signal })
            .then((res) => setBoughtTickets(res.data))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
        return () => controller.abort();
    }, [userId]);

    return { boughtTickets, error, setBoughtTickets, setError };
};

export default useBoughtTicket;
