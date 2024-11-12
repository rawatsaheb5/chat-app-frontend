import React from 'react'
import './card.css';
const Card = () => {
  return (
      <div className='message-card'>
          <div className='message-card-left-div'>
              <img className='message-card-left-div-img' src='https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg' />
          </div>
          <div className='message-card-right-div'>
              <span className='message-card-right-div-outer-span'>
                  <span className='message-card-right-div-inner-span-1' >name</span>
                  {/* <span className='message-card-right-div-inner-span-2'>yesterday</span> */}
              </span>
             
          </div>
    </div>
  )
}

export default Card