import React from "react";
import { useState } from "react";
import { auth } from "../firebase.js";
import signInButton from "../images/google-logo.png"
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "../stylesheets/navBarStyleSheet.css"

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
                    <button  >
                        <img src={signInButton} alt="google sign in logo" onClick={signOut} className="signIn_btn" type="button" />
                    </button>
                ) : (
                    <button>
                        <img src={signInButton} alt="google sign in logo" onClick={googleSignIn} className="signOut_btn" type="button" />
                    </button>
                )

                }
            </nav>
        </div>
    )
}