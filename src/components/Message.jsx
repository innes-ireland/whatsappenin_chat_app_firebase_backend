import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Message({ message }) {

    const [user] = useState(auth)
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