import React from 'react'
import './messageCard.css'
const MessageCard = ({ content, senderOfTheMessage }) => {
  const userId = JSON.parse(localStorage.getItem('user'))._id;
  const isCurrentUser = senderOfTheMessage === userId;
  return (
    <div className={`message-container ${isCurrentUser ? 'right' : 'left'}`}>
    <div className="message-content">{content}</div>
  </div>
  )
}

export default MessageCard