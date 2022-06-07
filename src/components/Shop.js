import React, {useState} from 'react';
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

/>
<ShopProduct
name="Fotolustro - 2h"
img="fotolustro.jpg"
price={800}
hours={2}
/>
<ShopProduct
name="Fotolustro - 3h"
img="fotolustro.jpg"
price={1000}
hours={3}
/>
<ShopProduct
name="Fotolustro - 4h"
img="fotolustro.jpg"
price={1200}
hours={4}
/>
<ShopProduct
name="Fotolustro - 5h"
img="fotolustro.jpg"
price={1400}
hours={5}
/>
<ShopProduct
name="Fotolustro - 6h"
img="fotolustro.jpg"
price={1600}
hours={6}
/>
        </div>
     );
}
 
export default Shop;