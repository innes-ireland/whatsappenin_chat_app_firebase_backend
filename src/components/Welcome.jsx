import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
export default function Welcome() {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider
        signInWithRedirect(auth, provider);
    }

    return (
        <div className="welcomeContainer">
            <h2> Welcome to whatsappenin, a react chat app</h2>
            <p> Sign in with your google account to get chatting </p>
            <button className="signin_btn" onClick={googleSignIn} type="button"> Sign in</button>
        </div>
    )
}