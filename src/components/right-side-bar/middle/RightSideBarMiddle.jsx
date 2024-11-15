import React, { useEffect } from "react";
import "./rightSideBarMiddle.css";

import MessageCard from "./display message card/MessageCard";
import { useSocket } from "../../../context/Socket";
const RightSideBarMiddle = () => {
  const { allMessage, setAllMessage, socket } =useSocket()
 
  return (
    <>
      {allMessage.length > 0 ? (
        <div className="right-side-bar-middle">
          {allMessage.map((item, ind) => {
            return <MessageCard key={ind} content = {item.content} senderOfTheMessage = {item.sender} />;
          })}
        </div>
      ) : (
        <div>No message to display</div>
      )}
    </>
  );
};

export default RightSideBarMiddle;
