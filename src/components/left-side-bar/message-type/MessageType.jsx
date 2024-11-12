import React, { useState } from 'react'
import './messageType.css'
import { IoPersonAdd } from "react-icons/io5";
import AddUserToChat from '../modal/AddUserToChat';
const MessageType = () => {


    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
  return (
      <div className='message-type-div'>
          <button className='message-type-btn'>Message</button>
          <button className='message-type-btn'>Group message</button>
          <IoPersonAdd style={{ fontSize: '24px', color: "#FFFFFF" }} onClick={openModal} />
          <AddUserToChat showModal={showModal} closeModal = {closeModal} />
    </div>
  )
}

export default MessageType