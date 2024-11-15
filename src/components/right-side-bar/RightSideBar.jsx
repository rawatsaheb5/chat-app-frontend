import React from 'react'
import './rightSideBar.css'
import RightSideBarHeader from './header/RightSideBarHeader'
import RightSideBarMiddle from './middle/RightSideBarMiddle'
import RightSideBarFooter from './footer/RightSideBarFooter'
import { useSelectUserToChat } from '../../context/SelectUser'
const RightSideBar = () => {

  const { selectedUserToChat, setSelectedUserToChat } = useSelectUserToChat();
  return (
    <div className='right-side-bar'> 
      {selectedUserToChat.name !== "" ? <>
        <RightSideBarHeader />
          <RightSideBarMiddle />
        <RightSideBarFooter />
      </> :
        <>
          <div className='no-chat-user-selected'>No Chat User selected</div>
        </>}
          
      </div>
  )
}

export default RightSideBar