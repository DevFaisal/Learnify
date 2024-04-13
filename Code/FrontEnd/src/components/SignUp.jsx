import Input from "./Input";
import { app } from "../utils/firebase";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const auth = getAuth(app);
    const googleAuthProvider = new GoogleAuthProvider();
    const navigate = new useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const signUp = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential.user;
                const token = user.accessToken;
                if (user) {
                    console.log("User created successfully");
                    localStorage.setItem("user", token);
                    navigate("/dashboard");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                if (user) {
                    console.log("User created successfully");
                    localStorage.setItem("user", token);
                    navigate("/dashboard");
                }

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential);
            });
    };


    return (
        <div className="flex flex-col gap-2 p-5 bg-white rounded-md">
            <h1 className="text-2xl text-center text-gray-700">Sign Up</h1>
            <Input
                onChange={(e) => { setEmail(e.target.value) }}
                label={"Full Name"} type="text" />
            <Input
                onChange={(e) => { setEmail(e.target.value) }}
                label={"Email"} type="email" />
            <Input
                onChange={(e) => { setPassword(e.target.value) }}
                label={"Password"} type="password" />
            <Input
                onChange={(e) => { setConfirmPassword(e.target.value) }}
                label={"Confirm Password"} type="text" />
            <button
                onClick={signUp}
                className="bg-[#458858] max-w-40 self-center px-10 mt-2 py-1 text-white p-2 outline-0 hover:bg-green-900 rounded-md">Sign Up</button>

            <button
                onClick={signInWithGoogle}
                className=" max-w-40 self-center flex flex-col p-4 justify-center items-center outline-0  rounded-md"
            >

                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" />

            </button>
        </div>
    );
}

export default SignUp;