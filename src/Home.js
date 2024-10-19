import React, { useEffect, useState } from "react";
import socket, { useSocket } from "./Socket";
import Chat from "./Chat";
import "./home.css";
const Home = () => {
  const { allMessage, setAllMessage, socket } = useSocket();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("user connected");
    });

    socket.on("message-from-server", (message) => {
      setAllMessage((previousMessage) => [...previousMessage, message]);
    });
    return () => {
      socket.off("disconnect", () => {
        console.log("user disconnected");
      });
    };
  }, []);
  console.log(allMessage);

  return (
    <div className="container">
      <h1 className="title">Chat App</h1>
      <div className="chat-box">
        <div className="message-container">
          {allMessage.length > 0 &&
            allMessage.map((item, ind) => {
              return (
                <h6
                  className={
                    item.id === socket.id
                      ? "display-message-right"
                      : "display-message-left"
                  }
                  key={ind}
                >
                  {item.message}
                </h6>
              );
            })}
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default Home;
