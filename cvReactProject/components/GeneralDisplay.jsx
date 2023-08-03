import React, { useState } from 'react'

export default function GeneralDisplay(props) {
  
    let {name, career, email, contact, marital} = props.userData
    
   
    
  return (
    <div className="generall">
        <span className="namer">
            <span id='generall-name'>{name}</span>
            <span id='generall-career'><em>{career}</em></span>
        </span>
       
        <span className="infodata">
            <span className="em">
                 <i className ="fa fa-envelope"/>  
                 <span id='generall-email'>{email}</span>
            </span>
       <span className="cont">
       <i class="fa fa-phone-square"/>
       <span id='generall-contact'>{contact}</span>
       </span>
        <span className="mar">
             <i class='fas fa-user-friends'/>
              <span id='generall-marital'>{marital}</span>
        </span>
      
        </span>
        

    
    </div>
  )
}
