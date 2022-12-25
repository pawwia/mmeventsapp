import React,{useState} from 'react';
import './Avability.css';
import {Link} from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";


const urlAvability='http://localhost/db/checkAvability.php';
const getAvable=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'

}  

    });
 


    const json = await resp.json();
    return json;
}
const Avability = () => {
    
const d=new Date();
const Month=(d.getMonth()<9)?('0'+(d.getMonth()+1)):(d.getMonth()+1);
const Day=(d.getDate()<9)?('0'+(d.getDate())):(d.getDate());
const Year=d.getFullYear();
const Today=Year+'-'+Month+'-'+Day;
const max=(Year+1)+'-12-31';
const [dateToCheck,setDateToCheck]=useState(Today);
const [showResult,setShowResult]=useState(0);
const [avabilityResult,setAvabilityResult]=useState(null);

const checkAvability=()=>{
   const data={
        dateAv:dateToCheck,
    }
    
    const resultsAv= getAvable(urlAvability,data)
    if(resultsAv)
    {
        resultsAv.then((result)=>{
setShowResult(result)

        })
        setShowResult(1);

    }



}
    return (  
<div className='avability login-box'>
    <h1> Sprawdź dostępność fotolustra na Twojej imprezie! </h1>
    {showResult?
    showResult.avable?
    <div className='resultAvable'>Niestety tego dnia mamy już jedną potwierdzoną imprezę która rozpoczyna się o godzinie {showResult.start_hour}. Jeśli chciałbyś wynająć fotolustro w innej porze, skontaktuj się z nami bezpośrednio.</div>
    
    :
    <div>Ten termin jest wolny. Przejdź do rezerwacji terminu tutaj. <Link to={'/products/fotolustro'}>Kliknij tutaj</Link> </div>
    
:<form>
<div class="user-box">

    Wybierz datę: <input type="date"  min={Today} max={max} Value={dateToCheck} onChange={(e)=>setDateToCheck(e.target.value)} />
    </div>
    <ReCAPTCHA
    sitekey="6Lehw6cjAAAAAOWRtuQlXrWc1VyVGCtgLx1CbH8f"
    onChange={null}
  />

    <a onClick={checkAvability}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Sprawdź termin!
    </a>
    
</form>}

</div>

    );
}
 
export default Avability;