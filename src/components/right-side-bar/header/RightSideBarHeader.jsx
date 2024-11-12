import React from "react";
import "./rightSideBarHeader.css";
import { FiVideo } from "react-icons/fi";
import { MdCall } from "react-icons/md";
const RightSideBarHeader = () => {
  return (
    <div className="right-side-bar-header">
      <div className="right-side-bar-header-left-div">
        <img
          className="right-side-bar-header-icon"
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        />
        <span className="right-side-bar-header-span">
          <h4 className="right-side-bar-header-h4">Neeraj</h4>
          <p className=" right-side-bar-header-p">online</p>
        </span>
      </div>
      <div className="right-side-bar-header-right-div">
              <FiVideo style={{ fontSize: '24px',marginRight:"20px", color: "#FFFFFF" } } />
              <MdCall style={{ fontSize: '24px', color: "#FFFFFF" }}/>
      </div>
    </div>
  );
};

export default RightSideBarHeader;
