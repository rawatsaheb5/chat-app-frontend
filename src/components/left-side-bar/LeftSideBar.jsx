import React from 'react'
import './leftSideBar.css'
import Card from './message-card/Card'
import SearchBar from '../search-bar/SearchBar'
import MessageType from './message-type/MessageType'
const LeftSideBar = () => {
  return (
      <div className='left-side-bar'>
          <SearchBar />
          <MessageType />
          <Card />
          <Card />
    </div>
  )
}

export default LeftSideBar