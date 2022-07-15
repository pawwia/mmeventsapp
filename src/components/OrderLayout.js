import React, {useEffect,useState} from 'react';
import './OrderLayout.css';
import ShowAllLayouts from './ShowAllLayouts';
const urlLo='http://localhost/db/getlayouts.php';
const funcgetleyouts=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
   const json = await resp.json();
    return json;
}


const OrderLayout = (props) => {
    const [tempBg, setTempBg]=useState(props.changeBg);
    const [dataLayout, setDataLayout]=useState();
    const [actButton, setActButton]=useState(0)
    const [allBg,setAllBg]=useState();
    const [showNumber,setShowNumber]=useState(1);

    const[showTypeOfLayout, setShowTypeOfLayout]=useState(null)
    const [chosenLayout,setChosenLayout]=useState(props.changeBg)

    
    const handleShowLayout=(urlLo,type)=>{
const data={
    typeLayout:type

}
        const getDateUser=   funcgetleyouts(urlLo,data);
        if (getDateUser){
   

            getDateUser.then( function(result) {
              console.log(dataLayout);
setDataLayout(result);
console.log(dataLayout);

 })    
 }
    }

    return ( 
        <div className='popup' >  
        <div className='popup_open'> 
        <div className='TitleBar'>
          <span className='Title'><span>Wybór szablonu wydruków</span></span>
          <span className='Close'><span onClick={props.close}>X</span></span>
          </div>
          <div className='contentBar'>
        <h2>Wybierz rodzaj swojej imprezy</h2>
        <div onClick={()=>{setShowTypeOfLayout("weselne");handleShowLayout(urlLo,showTypeOfLayout)}} className='typeofLayout'>Wesele</div>     
        <div onClick={()=>{setShowTypeOfLayout("urodziny");handleShowLayout(urlLo,showTypeOfLayout)}} className='typeofLayout'>Urodziny</div>     
        <div onClick={()=>{setShowTypeOfLayout("bale");handleShowLayout(urlLo,showTypeOfLayout)}} className='typeofLayout'>Bale</div>     
        <div onClick={()=>{setShowTypeOfLayout("uniwersalne");handleShowLayout(urlLo,showTypeOfLayout)}} className='typeofLayout'>Uniwersalne</div>     

{dataLayout?
dataLayout.map((data)=>
<ShowAllLayouts 
key={data.name}
idOrder={props.id}
changeLayoutOnOrder={props.changeBgfunc}
actualLayout={chosenLayout}
setActualLayout={setChosenLayout}

name={data.name}
img={data.img}




/>):null}
      </div>
      </div>
        </div> 
    
    );
}
 
export default OrderLayout;