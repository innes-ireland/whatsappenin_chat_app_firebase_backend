import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import refer from "../images/refer.png"
export default function Welcome() {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider
        signInWithRedirect(auth, provider);
    }

    return (
        <div className="welcomeContainer">
            <h2> Welcome to whatsappenin, a react chat app</h2>
            <p> Sign in with your google account to get chatting </p>
            <button className="signin_btn"> <img src={refer} alt="sign in using your google account" onClick={googleSignIn} type="button" /></button>
        </div>
    )
}