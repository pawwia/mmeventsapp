import React from 'react';
import './Popup.css'

  const Popup = (props) => {
      return ( 
        <div className='popup' >  
        <div className='popup_open'> 
        <div className='TitleBar'>
          <span className='Title'><span>{props.tittle}</span></span>
          <span className='Close'><span onClick={props.closePopup}>X</span></span>
          </div>
          <div className='contentBar'>
          {props.name} {props.hours} {props.price}


          </div>
        </div>  
        </div>  
       );
  }
   
  export default Popup;