import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5002/api/user/login",
                {
                    username,
                    password,
                }
            );

            const { accessToken } = response.data;

            // Store the JWT token in localStorage
            localStorage.setItem("jwtToken", accessToken);

            console.log("User inserted:", response.data);

            // Redirect to the backoffice page
            router.push("/backoffice-management");
        } catch (error) {
            console.error("Error inserting user:", error);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="username"
                        className="form-control"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default Login;
