import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { async } from "@firebase/util";
import "../stylesheets/sendMessageStyleSheet.css"



export default function SendMessage(scroll) {

    const [message, setMessage] = useState("");
    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
            return (
                alert("please enter valid message"))
        }

        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid

        });
        setMessage("")
        scroll.current.scrollIntoView({ behaviour: "smooth" });
    }
    return (
        <form onSubmit={(event) => sendMessage(event)} className="sendMessageForm">
            <label htmlFor="messageInput" hidden>
                Enter your message here
            </label>

            <input
                id="messageInput"
                name="messageInput"
                type="text"
                className="message_input_form"
                placeholder="type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" className="sendButton"> send message</button>
        </form>
    )
}