import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, HStack } from "@chakra-ui/react";
import "./login.css";
import AuthService from "../../services/AuthService";

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        AuthService.login({ username, password })
            .then((res) => {
                console.log(res);
                localStorage.setItem("userId", res.data.user.id);
                localStorage.setItem("isAdmin", res.data.user.isAdmin);
                localStorage.setItem("username", res.data.user.username);
                localStorage.setItem("token", res.data.token);
                navigate("/events");
                window.location.reload();
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <Input
                    className="input-field"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <Input
                    className="input-field"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <HStack justifyContent="space-between">
                    <Button type="submit" colorScheme="blue">
                        Login
                    </Button>
                    <Link to="/register">Register</Link>
                </HStack>
            </form>
        </div>
    );
}

export default LoginComponent;
