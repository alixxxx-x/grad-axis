import { useState } from "react";
import api from "../services/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/auth/login/", { username, password });
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/");
        } catch (error) {
            alert("Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email Address"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </form>
    );
}

export default Login;
