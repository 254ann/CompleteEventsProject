import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import "./register.css";
import { HStack } from "@chakra-ui/react";
const RegisterComponent = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        AuthService.registerUser({ username, password, email, isAdmin: false })
            .then((res) => {
                navigate("/login");
                alert(`regitered successful ${res.status}`);
            })
            .catch((err) => {
                alert(`Error registering:${err.message}`);
            });
    };

    return (
        <div className="register-form-container">
            <form className="register-form" onSubmit={handleRegister}>
                <h2>Register</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        UserName
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"></label>
                    <input
                        className="form-control"
                        type="password"
                        id="passwords"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <HStack justifyContent="space-between">
                    <button className="btn btn-primary" type="submit">
                        Register
                    </button>
                    <Link to="/login">Login</Link>
                </HStack>
            </form>
        </div>
    );
};

export default RegisterComponent;
