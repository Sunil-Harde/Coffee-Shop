import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import { motion } from "motion/react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        console.log(email);
        setUsername("");
        setPassword("");
        setEmail("");
    };

    return (
        <div className="font-mono">
            {/* <Navbar /> */}
            <div className="container mx-auto p-4 bg-red-100 shadow-md rounded-lg mt-10 w-110 mb-10">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <p className="mb-4">Please enter your credentials to login.</p>
                <form className="" onSubmit={handelSubmit}>
                    <motion.input
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "20px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <motion.input
                        type="Password"
                        placeholder="Password"
                        required
                        value={password}
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "20px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <motion.input
                        type="email"
                        required
                        placeholder="email"
                        value={email}
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "20px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        style={{
                            // width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "none",
                            background: "#007bff",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        Login
                    </motion.button>
                </form>
            </div>
        </div>
    );
}

export default Login;
