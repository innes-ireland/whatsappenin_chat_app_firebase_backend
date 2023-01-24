import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import SendMessage from "./SendMessage";
import { query, orderBy, onSnapshot, limit, } from "firebase/firestore";
import Message from "./Message";
import "../stylesheets/chatWindowStyleSheet.css"


export default function ChatWindow() {

    const [messages, setMessages] = useState([]);
    const scroll = useRef()

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        ); // const 'q' queries database looking for "messages" collection, orders chronologically and retrieves latest 50 objects from database
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id }); // foreach loop is going through each document in the collection and saving the data to a new array
            });
            setMessages(messages); // messages is being set to the now populated array  
        });
        return () => unsubscribe;
    }, []);

    return (

        <div className="chatWindow_wrapper">
            <span ref={scroll}> </span>
            <div className="messageWindow">
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <SendMessage scroll={scroll} />
        </div>

    )

}