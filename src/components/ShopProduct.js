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
        <img src={Image} loading="lazy" unselectable="on" alt={props.name} />
        <div className='NameElement'>{props.name}</div>
        <div className='PriceElement'>od {props.price} zł</div>
    </div>
   {showPopup ?  
    <Popup  
      tittle={props.name}

      text='X'  
      closePopup={togglePopup} 
      morekm={props.morekm} 
      name={props.name}
      price={props.price}
      priceNY={props.priceNY}
      img={props.img}
      hours={props.hours}
      guestBook={props.guestBook}
      gbPriceIndywidual={props.gbPriceIndywidual}
      gbPriceNormal={props.gbPriceNormal}
      carpet={props.carpet}
      km={props.km}
      isLogged={props.isLogged}
 setIsLogged={props.setIsLogged}
    />  
    : null  
    }  </>
      );

}
 
export default ShopProduct;