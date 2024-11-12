import React from 'react'
import './rightSideBar.css'
import RightSideBarHeader from './header/RightSideBarHeader'
import RightSideBarMiddle from './middle/RightSideBarMiddle'
import RightSideBarFooter from './footer/RightSideBarFooter'
const RightSideBar = () => {
  return (
      <div className='right-side-bar'> 
          <RightSideBarHeader />
          <RightSideBarMiddle />
          <RightSideBarFooter />
      </div>
  )
}

export default RightSideBar