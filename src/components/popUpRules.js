import React from 'react';
import './popUpRules.css';
import Privacy from './footer/Privacy';
import Rules from './footer/Rules';

const PopUpRules = (props) => {
    return (  
<div className='popupbooking' >
        <div className='popupbooking_open' style={{zIndex:"29999"}}>
        <div className='TitleBar'>
          <span className='Title'><span>Tworzenie rezerwacji w systemie</span></span>
          <span className='Close'><span onClick={props.close}>X</span></span>
          </div>
{props.option===1?<Privacy />:null}
{props.option===2?<Rules />:null}

        </div>
        </div>
    );
}
 
export default PopUpRules;