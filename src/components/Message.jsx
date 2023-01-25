import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../stylesheets/messageStyleSheet.css"

export default function Message({ message }) {

    const [user] = useAuthState(auth)
    // classname for each chat bubble is decided based on if message uid is the same as user uid. If so messages will be displayed to the right of the screen 
    return (
        <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
            <img className="chat-bubble__left"
                src={message.avatar}
                alt="the users avatar" />

            <div className="chat-bubble__right">
                <p className="userName"> {message.name}</p>
                <p className="userMessage"> {message.text}</p>
            </div>
        </div>
    )

}