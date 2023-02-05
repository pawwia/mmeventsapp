import React,{useState,useRef, useEffect} from 'react';
import './Avability.css';
import {Link} from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";



const urlAvability='http://localhost/db/checkAvability.php';
const urlCheckCaptcha='http://localhost/db/verifyCaptcha.php';

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
const Avability = (props) => {
    useEffect(()=>{
        props.cpt(props.title);
        },[])
const d=new Date();
const Month=(d.getMonth()<9)?('0'+(d.getMonth()+1)):(d.getMonth()+1);
const Day=(d.getDate()<9)?('0'+(d.getDate())):(d.getDate());
const Year=d.getFullYear();
const Today=Year+'-'+Month+'-'+Day;
const max=(Year+1)+'-12-31';
const [dateToCheck,setDateToCheck]=useState(Today);
const [showResult,setShowResult]=useState(0);
const [avabilityResult,setAvabilityResult]=useState(null);
const[isVeryfied, setIsVeryfied]=useState(false)
const [captchaError,setCaptchaError]=useState(null);

const recaptchaRef = useRef(null)



const handleSubmit =async ()=>{
    const captchaToken =await recaptchaRef.current.executeAsync();
    ;
    // window.recaptchaRef.reset();

    const data={
        captcha:captchaToken,
    }

  

  
        setCaptchaError(null);
    const resultsAv= getAvable(urlCheckCaptcha,data)
    if(resultsAv)
    {
        resultsAv.then((result)=>{
if(result.success===true)
{ checkAvability();
    setCaptchaError(null);}
 else setCaptchaError("Ograniczono dostęp do strony - błąd Captcha")

        })

    }
  





    

}

const checkAvability= ()=>{
    
   const data={
        dateAv:dateToCheck,
    }

    recaptchaRef.current.reset()

  
        setCaptchaError(null);
    const resultsAv= getAvable(urlAvability,data)
    if(resultsAv)
    {
        resultsAv.then((result)=>{
setShowResult(result)

        })
        setShowResult(1);

    }
    
   
    

}

const handleCaptchaChange=()=>{


        setIsVeryfied(true);



}


/*useEffect(()=>{
     recaptchaRef.current.reset();

},[])*/
function onChange(value) {
   if (recaptchaRef && recaptchaRef.current && recaptchaRef.current.reset) {
        recaptchaRef.current.reset()
    }
}

    return (  
<div className='avability login-box'>
    <h2> Sprawdź dostępność fotolustra na Twojej imprezie! </h2>
    {showResult?
    showResult.avable?
    <div className='resultAvable'>Niestety tego dnia mamy już jedną potwierdzoną imprezę która rozpoczyna się o godzinie {showResult.start_hour}. Jeśli chciałbyś wynająć fotolustro w innej porze, skontaktuj się z nami bezpośrednio.</div>
    
    :
    <div>Ten termin jest wolny. Przejdź do rezerwacji terminu tutaj. <Link to={'/products/fotolustro'}>Kliknij tutaj</Link> </div>
    
:<form>
<div className="user-box">

    Wybierz datę: <input type="date"  min={Today} max={max} value={dateToCheck} onChange={(e)=>setDateToCheck(e.target.value)} />
    </div>
    <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          size="invisible"
          onChange={onChange}
        />

  {captchaError?<div style={{color:"white"}}>{captchaError}</div>:null}

    <a  href="#/" className="checkAvbButton" onClick={ handleSubmit}>
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