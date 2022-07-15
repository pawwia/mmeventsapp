import React, {useState} from 'react';
import './oneOrder.css';
import OrderBg from './OrderBg';
import OrderAni from './OrderAni';
import OrderLayout from './OrderLayout';
import ChangeDurationOrHour from './ChangeDurationOrHour'
import { start } from 'lightbox2';

const urlLogin='http://localhost/db/updateOrder.php';
const enviarData=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
   const json = await resp.json();
    return json;
}


const OneOrder=(props)=>
{
    const [changeHotelName,setChangeHotelName]=useState(0);
    const [changedHotelName,setChangedHotelName]=useState(props.object_name);

    const [changeNames,setChangeNames]=useState(0);
    const [changedNames,setChangedNames]=useState(props.names);

    const [changedBgColor, setChangedBgColor]=useState(props.bg_color);
    const [changeBgColor, setChangeBgColor]=useState(0);

    const [changedAni, setChangedAni]=useState(props.animation);
    const [changeAni, setChangeAni]=useState(0);

    const [changeLayout,setChangeLayout]=useState(0);
    const [changedLayout,setChangedLayout]=useState(props.layout);

    const [askForChange,setAskForChange]=useState(0);


   

    const {id,user_id,names, statusDec,add_date,event_date,start_hour,duration,price,deposit,bg_color,animation,
    layout,guestbook,guestbook_type,adress,object_name,DurationHour }=props;
let guestBookDesc=null;
switch(guestbook)
{
case 0: guestBookDesc="Brak"; break;
case 1: guestBookDesc="Standardowa"; break;
case 2: guestBookDesc="Indywidualna"; break;
default: guestBookDesc="brak"; break;
}

var theEnd = new Date(event_date);
var today = new Date();
var difference = theEnd.getTime() - today.getTime();
difference = difference / 86400000; 
difference = Math.round(difference);

const handleChangeHotelName=()=>{
    const data={
        name:changedHotelName,
        id:id,
        which:"object_Name"    
            };
        enviarData(urlLogin,data);
            setChangeHotelName(0);
            
}

const handleChangeNames=()=>{
    const data={
        name:changedNames,
        id:id,
        which:"names"    
            };
        enviarData(urlLogin,data);
            setChangeNames(0);
            
}
const closeOrderBg=()=>{
    setChangeBgColor(!changeBgColor)
}
const closeOrderAni=()=>{
    setChangeAni(!changeAni)
}
const closeOrderLayout=()=>{
    setChangeLayout(!changeLayout)
}
const closeAskForChange=()=>{
    setAskForChange(!askForChange);
}




      return ( 
        <div className='popup' >  
        <div className='popup_open'> 
        <div className='TitleBar'>
          <span className='Title'><span>Rezerwacja {event_date}</span></span>
          <span className='Close'><span onClick={props.close}>X</span></span>
          </div>
          <div className='contentBar'>
          <div className='orderInfo'>
              <div className='TitleorderInfo'>Fotolustro</div>
              <div className='TitleorderInfo'>Gdzie?</div>

              <div className='orderinfoElement'>
                  <span>Nazwa miejsca</span>
                  <span>{changeHotelName?<input type="text" value={changedHotelName} onChange={e=>setChangedHotelName(e.target.value)}/>:changedHotelName}</span>
                  <span>{changeHotelName?<button onClick={handleChangeHotelName}>Zatwierdź</button>:<button onClick={setChangeHotelName} >Edytuj</button> }</span>
              </div>
              <div className='orderinfoElement'>
                  <span>Adres</span>
                  <span>{adress}</span>
                  <span></span>
              </div>
              <div className='TitleorderInfo'>Kiedy?</div>
              <div className='orderinfoElement'>
                  <span>Data</span>
                  <span>{event_date}</span>
                  <span></span>
              </div>
              <div className='orderinfoElement'>
                  <span>Godzina rozpoczęcia</span>
                  <span>{start_hour}</span>
                  <span><button onClick={closeAskForChange}>Zapytaj o zmianę</button></span>
              </div>
              <div className='orderinfoElement'>
                  <span>Czas trwania</span>
                  <span>{duration} {DurationHour}</span>
                  <span><button onClick={closeAskForChange}>Zapytaj o zmianę</button></span>
              </div>
              <div className='TitleorderInfo'>Płatności</div>
              <div className='orderinfoElement'>
                  <span>Cena</span>
                  <span>{price} zł</span>
                  <span></span>
              </div>
              <div className='orderinfoElement'>
                  <span>Wpłacono</span>
                  <span>{deposit} zł</span>
                  <span></span>
              </div>
              <div className='orderinfoElement'>
                  <span>Pozostało:</span>
                  <span>{price-deposit} zł</span>
                  <span></span>
              </div>
              <div className='orderinfoElement'>
                  <span> </span>
                  <span></span>
                  <span></span>
              </div>
              <div className='TitleorderInfo'>Wybrane opcje</div>
              <div className='orderinfoElement'>
                  <span>Animacja</span>
                  <span>{changedAni} </span>
                  <span>{difference<2?"Minął czas zmiany.":<button onClick={()=>setChangeAni(1)} >Edytuj</button>}</span>
              </div>
              <div className='orderinfoElement'>
                  <span>Szablon wydruku</span>
                  <span>{changeLayout?<input type="text" value={changedLayout} onChange={e=>setChangedLayout(e.target.value)}/>:changedLayout}</span>
                  <span> {difference<4?"Minął czas zmiany.":<button onClick={()=>setChangeLayout(1)} >Edytuj</button> }</span>
              </div>
              <div className='orderinfoElement'>
                  <span>Imię/ imiona na wydruku</span>
                  <span>{changeNames?<input type="text" value={changedNames} onChange={e=>setChangedNames(e.target.value)}/>:changedNames}</span>
                  <span>{changeNames?<button onClick={handleChangeNames}>Zatwierdź</button>:<button onClick={setChangeNames} >Edytuj</button> }</span>
             
              </div>
              <div className='orderinfoElement'>
                  <span>Tło</span>
                  <span>{changedBgColor} </span>
                  <span> {difference<2?"Minął czas zmiany.":<button onClick={()=>setChangeBgColor(1)} >Edytuj</button> }</span>
              </div>
              <div className='orderinfoElement'>
                  <span>Księga gości</span>
                  <span>{guestBookDesc} </span>
                  <span></span>
              </div>
              {guestbook?<div className='orderinfoElement'>
                  <span>typ księgi/ napis </span>
                  <span>{guestbook_type} </span>
                  <span>{difference<7?"Minął czas zmiany.":"Edytuj"}</span>
              </div>:null}
              <div className='TitleorderInfo'>Dodatkowe informacje?</div>
              <div className='orderinfoElement'>
                  <span>Status</span>
                  <span>{statusDec}</span>
                  <span></span>
              </div>
              <div className='orderinfoElement'>
                  <span>Data dodania</span>
                  <span>{add_date}</span>
                  <span></span>
              </div>
          </div>
          

          </div>
        </div>  
      
{changeBgColor?<OrderBg key={id} id={id} changeBgfunc={setChangedBgColor} changeBg={changedBgColor} close={closeOrderBg} />:null}
{changeAni?<OrderAni key={id} id={id} changeBgfunc={setChangedAni} changeBg={changedAni} close={closeOrderAni} />:null}
{changeLayout?<OrderLayout key={id} id={id} changeBgfunc={setChangedLayout} changeBg={changedLayout} close={closeOrderLayout} />:null}
{askForChange?<ChangeDurationOrHour close={closeAskForChange} id={id} duration={duration} hour={start_hour} />:null}
        </div>  
       );}
  
   
  export default OneOrder;