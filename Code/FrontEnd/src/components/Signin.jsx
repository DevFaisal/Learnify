import Input from "./Input";
import { app } from "../utils/firebase";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(app);
    const googleAuthProvider = new GoogleAuthProvider();
    const navigate = useNavigate();


    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const token = user.accessToken;
                console.log(user);
                if (user) {
                    localStorage.setItem("user", token);
                    console.log("User Login successfully");
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
                if (user) {
                    console.log("User Login successfully");
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
            <h1 className="text-2xl text-center text-gray-700">Sign In</h1>
            <Input
                onChange={(e) => { setEmail(e.target.value) }}
                label={"Email"} type="email" />
            <Input
                onChange={(e) => { setPassword(e.target.value) }}
                label={"Password"} type="password" />
            <button
                onClick={signIn}
                className="bg-[#458858] max-w-40 self-center px-10 mt-2 py-1 text-white p-2 outline-0 hover:bg-green-900 rounded-md">Sign In</button>
            <button
                onClick={signInWithGoogle}
                className=" max-w-40 self-center flex flex-col p-4 justify-center items-center outline-0  rounded-md"
            >

                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" />
            </button>
        </div>
    );
}

export default Signin;