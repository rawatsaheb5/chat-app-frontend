import React, { useEffect, useState } from "react";
import socket from "./Socket";
import Chat from "./Chat";
const Home = () => {
  const [allMessage, setAllMessage] = useState([]);

  
  useEffect(() => {
    socket.on("connect", () => {
      console.log("user connected");
    });

    socket.on("message-from-server", (message) => {
      setAllMessage((previousMessage)=> [...previousMessage, message])
    });
    return () => {
      socket.off("disconnect", () => {
        console.log("user disconnected");
      });
    };
  }, []);
  console.log(allMessage)

  return (
    <div>
      <h1>Chat App</h1>
      <Chat />
      <div>
        <h2>Message box</h2>
        {allMessage.length > 0 && allMessage.map((item, ind) => {
          return (
            <h4 key={ind}>{item}</h4>
          )
        })}
      </div>
    </div>
  )
  
};

export default Home;
