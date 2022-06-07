import React, {useState } from 'react';
import './ShopProduct.css';
import Popup from './Popup';

const ShopProduct = (props) => {
const Image = require(`../images/shop/${props.img}`);

const [showPopup,setShowPopup]=useState(false);

const togglePopup=()=>
{
    setShowPopup(!showPopup);
}



    return (<>
        <div onClick={togglePopup} className="ProductElement">
        <img src={Image} alt={props.name} />
        <div className='NameElement'>{props.name}</div>
        <div className='PriceElement'>{props.price} zł</div>
    </div>
   {showPopup ?  
    <Popup  
      tittle={props.name}
      text='X'  
      closePopup={togglePopup}  
      name={props.name}
      price={props.price}
      img={props.img}
      hours={props.hours}
    />  
    : null  
    }  </>
      );

}
 
export default ShopProduct;