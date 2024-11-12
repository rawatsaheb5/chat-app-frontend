import React from "react";
import "./rightSideBarFooter.css";
import { GrEmoji } from "react-icons/gr";
import { CiImageOn } from "react-icons/ci";
import { LuSendHorizonal } from "react-icons/lu";
const RightSideBarFooter = () => {

  return (
    <div className="right-side-bar-footer">
      <div className="right-side-bar-footer-left-icon-group">
              <GrEmoji style={{ fontSize: '24px', color:"#FFFFFF" }}/>
        <CiImageOn style={{ fontSize: '24px',color:"#FFFFFF" }} />
      </div>

      <div className="right-side-bar-footer-middle-div">
       <input className="right-side-bar-footer-middle-div-input" type="text" placeholder="Type here"/>
      </div>
      <div className="right-side-bar-footer-right-icon-group">
        <LuSendHorizonal style={{ fontSize: '24px',color:"#FFFFFF" }} />
      </div>
    </div>
  );
};

export default RightSideBarFooter;
