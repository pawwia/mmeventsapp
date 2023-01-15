import React, {useState,} from 'react';
import './ShopProduct.css';
import Popup from './Popup';
import { BackgroundImage } from 'react-image-and-background-image-fade'



const ShopProduct = (props) => {
const Imagej = require(`../images/shop/${props.img}`);

const [showPopup,setShowPopup]=useState(false);

const togglePopup=()=>
{
    setShowPopup(!showPopup);
}



    return (<>
        <div onClick={togglePopup} className="ProductElement">
        <BackgroundImage 
        src={Imagej}  
        unselectable="on" 
        alt={props.name}   
       isResponsive
lazyLoad
       width="1536px" height="1092px"
        title='fotolustro' className="mirrorimg"/>
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
 setLogData={props.setLogData}

    />  
    : null  
    }  </>
      );

}
 
export default ShopProduct;