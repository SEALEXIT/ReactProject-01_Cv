import React from 'react'
import cvlogo from './cvlogo.png'
import reactlogo from './reactlogo.png'


function Landing() {
  return (
    <div className="container">
        
        <div className="title">Hi , This is my web React Cv Application </div>
        <div className="image">
            <span className="img"><img className='img' src={cvlogo} alt="cv Logo " /> </span>
          
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              <span><img  className="img" src={reactlogo} alt="react Logo" /></span>
             </div>
   
    </div>
  )
}
export default Landing