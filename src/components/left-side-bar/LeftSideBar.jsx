import React, { useEffect, useState } from "react";
import "./leftSideBar.css";
import Card from "./message-card/Card";
import SearchBar from "../search-bar/SearchBar";
import MessageType from "./message-type/MessageType";
import axios, { all } from "axios";
const LeftSideBar = () => {
  const [allChatUser, setAllChatUser] = useState([]);
  const token = localStorage.getItem("authToken");
  const getAllUserToChat = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/auth/get-all-chat`, // Replace with your API endpoint
        {
          headers: {
            Authorization: `Bearer ${token}`, // Setting the token in the header
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setAllChatUser(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error making Get request:", error);
    }
  };

  useEffect(() => {
    getAllUserToChat();
  }, []);
  return (
    <div className="left-side-bar">
      <SearchBar />
      <MessageType getAllUserToChat={getAllUserToChat} />
      {allChatUser.length > 0 ? (
        allChatUser.map((item, ind) => {
          return <Card key={ind} name={item.name} _id={item._id} />;
        })
      ) : (
        <div>No user in you chat</div>
      )}
    </div>
  );
};

export default LeftSideBar;
