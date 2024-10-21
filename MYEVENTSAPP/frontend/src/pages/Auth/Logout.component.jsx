import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient";

function LogoutComponent() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await apiClient.post("/auth/logout");
            setUser(null);
            navigate("/");
            localStorage.clear();
            window.location.reload();
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutComponent;
