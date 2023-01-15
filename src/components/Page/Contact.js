import React, {useState} from 'react';
import './Contact.css';

import Logo from '../../images/page/magicmomentsevents.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faMobileScreenButton, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'

const sendContact=async(url,data)=>{

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
const Contact = (props) => {
const [respEmail,setRespEmail]=useState("");
const [message,setMessage]=useState("");
const [acceptRules,setAcceptRules]=useState(false);
const [errorMsg,setErrorMsg]=useState(null);
const sendMessage=()=>{

    if(respEmail.length>4 && message.length>20&&acceptRules)
    {
        setErrorMsg(null);
       
const topic="Wysłano formularz mmevents.pl"
const text1="Dzień dobry, potwierdzamy nadanie wiadomości o treści: <br/>"+message+"Odpowiemy na wiadomość w ciągu jednego dnia roboczego.";
const text2="Nowy formularz ze strony mmevents <br/> E-mail: "+respEmail+"<br/>Treść:"+message;
const urlContact='http://localhost/db/sendContactForm.php';

const data={
topic:topic,
text1:text1,
text2:text2,
email:respEmail,

}




    setErrorMsg(null);
const resultsAv= sendContact(urlContact,data)
if(resultsAv)
{
    resultsAv.then((result)=>{
if(result.connected===true)
{ 
    setErrorMsg("Wiadomość wysłana poprawnie");
    setMessage("");
    setRespEmail("");
    setAcceptRules(false);
}
else setErrorMsg("Nie można było wysłać wiadomości. Napisz do nas pod adres E-mail: kontakt@mmevents.pl")

    })

}



    }
    else 
    {
        setErrorMsg("Wypełnij poprawnie formularz i spróbuj ponownie")
    }
    if ( !acceptRules)
    setErrorMsg("Nie zaakceptowałeś zgody na przetwarzanie danych. Spróbuj jeszcze raz.")

}

    return ( 
<div className='contactElement'>
<div className='contactForm'>
<div className='mainForm'>
<p>Całość rezerwacji możesz przeprowadzić na stronie klikając w razerwacje i wybierając odpowiedni pakiet lub sprawdzając uprzednio wolny termin.
Jeśli miałbyś do nas jakieś pytania, wątpiwości, problemy jesteśmy zawsze do Twojej dyspozycji.</p>
<h3 > Formularz kontaktowy</h3>
<input type="email" className='giveEmail' value={respEmail} onChange={(e)=>{setRespEmail(e.target.value)}} placeholder='Adres Email'/>
<textarea className='giveEmail' rows="10" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Treść wiadomości'></textarea>
<input type='checkbox' checked={acceptRules} onChange={(e)=>setAcceptRules(!acceptRules)} />
Wyrażam zgodę na przetwarzanie danych osobowych oraz potwierdzam przeczytanie Regulaminu
{errorMsg?<p className="errorMsg">{errorMsg}</p>:null}
<button onClick={sendMessage}>Wyślij wiadomość</button>.
</div>

</div>
<div className='contactData'>
<div className='contactDataBlur'>
<div className='contactDataBlurContent'>
<AnimationOnScroll initiallyVisible={true} delay={2000} animateIn="animate__wobble">
<img src={Logo} width="300px" alt="Magic Moments Events"/></AnimationOnScroll>

<h3> Fotolustro na Twoją imprezę</h3>
<a href="tel:+48575046074" ><FontAwesomeIcon icon={faMobileScreenButton} size="2x"  />  575 046 074</a>
<a href="mailto:kontakt@mmevents.pl" > <FontAwesomeIcon icon={faEnvelope} size="1x"  />  kontakt@mmevents.pl</a>
<a href="mailto:pawel@mmevents.pl" ><FontAwesomeIcon icon={faEnvelope} size="1x"  />  pawel@mmevents.pl</a>
<a href="mailto:ewelina@mmevents.pl" ><FontAwesomeIcon icon={faEnvelope} size="1x"  /> ewelina@mmevents.pl</a>
<a href="https://www.facebook.com/mmevents.fotolustro"> <FontAwesomeIcon icon={faFacebook} size="2x"  /></a>
<a href="https://www.instagram.com/magicmoments.fotolustro/"> <FontAwesomeIcon icon={faInstagram} size="2x"  /></a>




</div>

</div>

</div>
</div>

     );
}
 
export default Contact;