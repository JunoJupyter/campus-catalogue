import firebase from "firebase/app";
// import auth from 'firebase/auth';
// import 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import backbtn from "../src/assets/images/shopmenuimg/backbtnicon.png";
import { Link } from "react-router-dom";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
    };

    return (
        <div className="sign-in-container">
            <Link to="/">
                <img
                    src={backbtn}
                    style={{
                        width: "10vw",
                        marginTop: "8vw",
                        marginLeft: "3vw",
                    }}
                    alt="back"
                ></img>
            </Link>
            <form onSubmit={signUp} style={{ textAlign: "center" }}>
                <h1 style={{ marginTop: "10vh", textAlign: "center" }}>
                    Create Account
                </h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginTop: "10vh", marginRight: "3vw" }}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <p style={{ textAlign: "center", marginTop: "2vh" }}>
                    <button type="submit">Sign Up</button>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
