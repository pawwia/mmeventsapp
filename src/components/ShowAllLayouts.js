import React, {useState, useEffect} from 'react';
import './ShowAllLayouts.css';
import Loader from './Loader';

const urlLay='http://app.mmevents.pl/db/updateLayout.php';
const updateLayout=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
   const json = await resp.json();
    return json;
}


const ShowAllLayouts = (props) => {

    useEffect(()=>
    {
        setWait(0)},[])
    const [wait,setWait]=useState(0);

    const changeLayoutHandle=()=>
    {setWait(1)
        const data={
        id:props.idOrder,
        newLayout:props.name
    };
  
if(updateLayout(urlLay,data)){    
        props.changeLayoutOnOrder(props.name);
        props.setActualLayout(props.name);
        setWait(0);
}


    }
    return (
        props.name===props.actualLayout?<div className='oneLayout activeLayout'>
    <div className='TitleLayout '>{props.name}{props.name===props.actualLayout?"  -Ten szablon jest teraz wybrany.":null}</div>
<div className='imagesLayout activeImagesLayout'>
<img alt='{props.name}' src={require('../images/layouts/5x15/'+props.img)} loading="lazy" unselectable="on"/>
<img alt='{props.name}' src={require('../images/layouts/10x15/'+props.img)} loading="lazy" unselectable="on"/>
</div>
</div>

:

<div className='oneLayout' onClick={changeLayoutHandle} >
    <div className='TitleLayout '>{props.name}{props.name===props.actualLayout?"  -Aktualnie wybrany szablon":null}</div>
<div className='imagesLayout '>
<img alt='{props.name}' src={require('../images/layouts/5x15/'+props.img)} loading="lazy" unselectable="on"/>
<img alt='{props.name}' src={require('../images/layouts/10x15/'+props.img)} loading="lazy" unselectable="on"/>
</div>
{wait?<Loader/>:null}
</div>

      );
}
 
export default ShowAllLayouts;