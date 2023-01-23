import React from "react";
import { useState } from "react";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default function Navbar() {
    const [user] = useAuthState(auth)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    const signOut = () => {
        auth.signOut();
    } //function clears the 'auth' data allowing signout from the app

    return (
        <div className="navBarContainer">
            <nav className="nav_bar">
                <h1> Whatsappenin, a react chat app built with firebase</h1>
                {user ? (
                    <button onClick={signOut} className="signout_btn" type="button"> Sign out</button>
                ) : (
                    <button onClick={googleSignIn} className="signin_btn" type="button"> Sign in with Google </button>
                )

                }
            </nav>
        </div>
    )
}