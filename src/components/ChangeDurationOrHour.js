import { data } from 'jquery';
import React, {useState} from 'react';
const reqURL='http://localhost/db/sendHourChangeRequest.php';
const sendRequest=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
   const json = await resp.json();
    return json;
}


const ChangeDurationOrHour = (props) => {
const[hours,setHours]=useState(props.hour);
const[duration,setDuration]=useState(props.duration);
const [additional,setAdditional]=useState("");


const sendChangeRequest=()=>{
    const data={
id:props.id,
hour:hours,
duration:duration,
additional:additional,

    };
if(sendRequest(reqURL,data))
    props.close();

}
    return ( 


        <div className='popup' >  
        <div className='popup_open'> 
        <div className='TitleBar'>
          <span className='Title'><span>Zapytanie o zmianę</span></span>
          <span className='Close'><span onClick={props.close}>X</span></span>
          </div>
          <div className='contentBar'>
        Ze względu na charakterystykę naszej pracy która odbywa się w terenie w konkretnych godzinach wszystkie zmiany co do terminu, godziny oraz czasu trwania usługi muszą być przez nas zaakceptowane. Wybierz która opcja zmiany cię interesuje i wyślij do nas zapytanie. Odpowiedź dostaniesz w maksymalnie 1 dzień roboczy.
<h3>Zmiana godziny</h3> 
<p>Rozpoczniemy usługę o godzinie {props.hour}</p>
Chcę rozpoczęcia usługi o godzinie <input type="text" value={hours} onChange={(e)=>setHours(e.target.value)}/>

<h3> Zmiana czasu trwania usługi</h3>
   <p>Twoja rezerwacja obejmuje {props.duration} godziny naszej pracy</p>
Chcę <input type="number" value={duration} onChange={(e)=>setDuration(e.target.value)}/> godzin
<h3>Dodatkowe informacje</h3>
<textarea value={additional} rows={4} column={3} onChange={(e)=>setAdditional(e.target.value)}/>
<br/>
<button onClick={sendChangeRequest}>Wyślij zapytanie</button>
      </div>
      </div>
        </div> 
     );
}
 
export default ChangeDurationOrHour;