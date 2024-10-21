import { useState, useEffect } from "react";

const AllService = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem("username");
        setIsAuthenticated(username !== null);
    }, []);

    return { isAuthenticated };
};

export default AllService;
