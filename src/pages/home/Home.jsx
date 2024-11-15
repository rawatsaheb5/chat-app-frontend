import React, { useEffect } from "react";

import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import LeftSideBar from "../../components/left-side-bar/LeftSideBar";
import RightSideBar from "../../components/right-side-bar/RightSideBar";
import { useAuth } from "../../context/Auth";
import { useSocket } from "../../context/Socket";
import { SelectUser, SelectUserProvider } from "../../context/SelectUser";

const Home = () => {
 
  const { socket,allMessage, setAllMessage } = useSocket();
  const { auth } = useAuth();
  
  useEffect(() => {
    if (auth) {
      socket.connect();
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      socket.emit("a new user connected", userId);   
    }
    return () => {
      socket.disconnect();  
    };
  }, [auth, socket]);
  
  useEffect(() => {
    socket.on("receive-message", (data) => {
      console.log(data)
      setAllMessage((prevAllMessage) => [
        ...prevAllMessage,
        { content: data.content, sender: data.sender },
      ]);
    });
  }, [setAllMessage])
  

 console.log('all message => ', allMessage)
  return (
    <SelectUserProvider>
      <div className="home-page">
        <Navbar />
        <div className="side-bar">
          <LeftSideBar />
          <RightSideBar />
        </div>
      </div>
    </SelectUserProvider>
  );
};

export default Home;
