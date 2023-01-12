import React, {useState, useEffect} from 'react';
import MagicMirror from './MagicMirror';

import './Shop.css';
import ShopProduct from './ShopProduct';
const urlGetFotolustro='http://localhost/db/getFotolustro.php';
const getData=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });

  const json = await resp.json();
    return json;
}


const Shop = (props) => {
 
  useEffect(()=>{
    props.cpt(props.title);
    },[])



const [showDescription, setShowDescription]=useState(0);
const [showConfiguration, setShowConfiguration]=useState(0);
const [showProducts, setShowProducts]=useState(1);
const [dataFotolustro, setDataFotolustro]=useState(null); 



useEffect(() => {
    const data={
        data:0,
    };
    const getFotolustro=  getData(urlGetFotolustro,data)
    if(getFotolustro)
    {
        getFotolustro.then((result)=>{
            if (result)
            
            {   
setDataFotolustro(result);

                            }
            else 
            {
          return null;
            }
        })}

  },[]);

    return (
        <div className='shopApp'>
<p>{props.text}</p>

{
dataFotolustro?dataFotolustro.map((element)=>

<ShopProduct
key={element.id}
name={element.name}
img={element.img}
price={element.priceTy}
priceNY={element.priceNY}
hours={element.hours}
morekm={element.priceKm}
gbPriceIndywidual={element.gbPriceIndywidual}
gbPriceNormal={element.gbPriceNormal}
guestBook={element.guestBook}
carpet={false}
km={element.km}
isLogged={props.isLogged}
 setIsLogged={props.setIsLogged}

/>
)

:null

}

        </div>
     );
}
 
export default Shop;