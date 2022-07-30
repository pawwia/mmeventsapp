import React, {useState, useEffect} from 'react';
import MagicMirror from './MagicMirror';

import './Shop.css';
import ShopProduct from './ShopProduct';
const Shop = (props) => {

const [showDescription, setShowDescription]=useState(0);
const [showConfiguration, setShowConfiguration]=useState(0);
const [showProducts, setShowProducts]=useState(1); 

    return (
        <div className='shopApp'>
<p>{props.text}</p>


<ShopProduct
name="Fotolustro - 1h"
img="fotolustro.jpg"
price={600}
hours={1}
morekm={2.50}
gbPriceIndywidual={100}
gbPriceNormal={50}
guestBook={false}
carpet={false}
km={1}
isLogged={props.isLogged}
 setIsLogged={props.setIsLogged}

/>
<ShopProduct
name="Fotolustro - 2h"
img="fotolustro.jpg"
price={800}
hours={2}
morekm={2.50}
gbPriceIndywidual={100}
gbPriceNormal={50}
guestBook={false}
carpet={false}
km={30}
isLogged={props.isLogged}
 setIsLogged={props.setIsLogged}
/>
<ShopProduct
name="Fotolustro - 3h"
img="fotolustro.jpg"
price={1000}
hours={3}
morekm={2.50}
gbPriceIndywidual={100}
gbPriceNormal={50}
guestBook={false}
carpet={false}
km={50}
isLogged={props.isLogged}
 setIsLogged={props.setIsLogged}
/>
<ShopProduct
name="Fotolustro - 4h"
img="fotolustro.jpg"
price={1200}
hours={4}
gbPriceIndywidual={100}
gbPriceNormal={50}
morekm={2.50}
guestBook={true}
carpet={false}
km={80}
isLogged={props.isLogged}
 setIsLogged={props.setIsLogged}
/>
<ShopProduct
name="Fotolustro - 5h"
img="fotolustro.jpg"
price={1400}
hours={5}
morekm={2.50}
gbPriceIndywidual={100}
gbPriceNormal={50}
guestBook={true}
carpet={false}
km={120}
isLogged={props.isLogged}
 setIsLogged={props.setIsLogged}
/>
<ShopProduct
name="Fotolustro - 6h"
img="fotolustro.jpg"
price={1600}
hours={6}
morekm={2.50}
gbPriceIndywidual={100}
gbPriceNormal={50}
guestBook={true}
carpet={false}
km={140}
isLogged={props.isLogged}
 setIsLogged={props.setIsLogged}
/>
        </div>
     );
}
 
export default Shop;