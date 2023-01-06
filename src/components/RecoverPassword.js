import { wait } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import './RecoverPassword.css';

const urlLogin='http://app.mmevents.pl/db/newPassword.php';
const urlmnp='http://app.mmevents.pl/db/makenewpassword.php';

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
const RecoverPassword = (props) => {
    const [recoveryEmail,setRecoveryEmail]=useState(null)
    const [recoveryResult, setRecoveryResult]=useState(null);
    const [validationEmail,setValidationEmail]=useState(null);
    const [securityCode, setSecurityCode]=useState(null);
    const [securityCodeInp, setSecurityCodeInp]=useState(null);
    const [valCodeInfo, setValCodeInfo]=useState(null);
    const [codesSame, setCodesSame]=useState(0);
    const [newPassword, setNewPassword]=useState(null);
    const [wait, setWait]=useState(0);
    const [valPassword, setValPassword]=useState(0);
    const [newPasswordOk,setNewPasswordOk]=useState(0);
    const [changeResultFinal, setChangeResultFinal]=useState(null)

        const [error, setError]=useState();

    const handleRecover=()=>{
        setRecoveryEmail(recoveryEmail.toLowerCase())
        const l=recoveryEmail.toString().length-1;

        if( (recoveryEmail.length>6) && (recoveryEmail.search('@')!==-1) &&(recoveryEmail.search(/\./)!==-1)&&(recoveryEmail[0]!=='@') &&(recoveryEmail[0]!=='.')&&(recoveryEmail[l]!=='.')&&(recoveryEmail[l]!=='@') )
       {
        setValidationEmail(null);
        setRecoveryResult(null)
        const data={
            'email':recoveryEmail,
                }
               const respuestajson=   enviarData(urlLogin,data);
            setError(respuestajson.error);
            if (respuestajson){
       
    
        respuestajson.then( function(result) {
            setSecurityCode(result.securitycode)
            setRecoveryResult(result);
           
     })    
     }
    }
else setValidationEmail("Adres e-mail nie jest prawidłowy. Sprawdź email i spróbuj ponownie")

    }
    const veryfyCode=()=>

    {
if(securityCodeInp.length==4)
{
setValCodeInfo(null);
if(securityCodeInp===securityCode)
{setValCodeInfo(null);
    setCodesSame(1);

}
else{

    setValCodeInfo("Kod bezpieczeństwa jest niepoprawny. Sprawdź kod i spróbuj ponownie. W razie problemów odśwież tą stronę w przeglądarce.");

}
}
else {
    setValCodeInfo("Wprowadzono niepoprawny kod bezpieczeństwa. Kod powinien miec 4 znaki. ")
}
    }

    const sendNewPassword=()=>{
if(newPasswordOk)
{setWait(1)
    const data={
        'email':recoveryEmail,
        'recover':securityCodeInp,
        'password':newPassword,
            }
           const respuestajson=   enviarData(urlmnp,data);
        setError(respuestajson.error);
        if (respuestajson){
   

    respuestajson.then( function(result) {
        setChangeResultFinal(result);
       setWait(0);
 })    
 }

}
else {

}
        return null;
    }
    const valNewPassword=(e)=>
    {

        setNewPassword(e.target.value);

setNewPasswordOk(0)
let nums=0
     if (e.target.value.length>=8)   nums=nums+1
    
   let loper=0;
   while(loper<e.target.value.length)
   {
    if(e.target.value.charAt(loper)===e.target.value.charAt(loper).toUpperCase()&& e.target.value.charAt(loper).match(/[a-z]/i))
    { nums=nums+1;
loper=e.target.value.length;
        }
    loper=loper+1
    
   }
    loper=0;
   while(loper<e.target.value.length)
   {
    if(e.target.value.charAt(loper)==="0"||e.target.value.charAt(loper)==="1"||e.target.value.charAt(loper)==="2"||e.target.value.charAt(loper)==="3"||e.target.value.charAt(loper)==="4"||e.target.value.charAt(loper)==="5"||e.target.value.charAt(loper)==="6"||e.target.value.charAt(loper)==="7"||e.target.value.charAt(loper)==="8"||e.target.value.charAt(loper)==="9")
    { nums=nums+1;
loper=e.target.value.length;
        }
    loper=loper+1
    
   }
   if(nums===3)
   setNewPasswordOk(1)
 

    




    }
    return ( 
        <div className='Loginbg'>
        <div className='LoginWindow'>
        <div className='TitleBar'>
      <span className='Title'><span>Przywracanie hasła</span></span>
      <span className='Close'><span onClick={props.close}>X</span></span>
      </div>
      <div className='contentBar'>

<input disabled={securityCode?1:0} type="text" className='loginInput' value={recoveryEmail} onChange={(e)=>{setRecoveryEmail(e.target.value)}} placeholder="Wprowadź e-mail"/>
<button disabled={securityCode?1:0} className='loginInput loginButton' onClick={handleRecover}>Przywróć hasło</button>
{recoveryResult?<p className="infotext">{recoveryResult.message}</p>:null}
{validationEmail?<p className="infotext">{validationEmail}</p>:null}
{securityCode?
    <div>
      <p className="infotext">Na Twój adres E-mail wysłaliśmy wiadomość z kodem bezpieczeństwa. Wprowadź go poniżej aby zmienić hasło do konta.</p>  
        <input disabled={codesSame?1:0} type="text" className='loginInput'  value={securityCodeInp} onChange={(e)=>{setSecurityCodeInp(e.target.value)}} placeholder="Kod bezpieczeństwa"/>
        {valCodeInfo?<p className="infotext">{valCodeInfo}</p>:null}
        <button disabled={codesSame?1:0} className='loginInput loginButton' onClick={veryfyCode}>Weryfikuj kod</button>
{codesSame?
<div>
<input disabled={changeResultFinal?1:0} type="password" className='loginInput'  value={newPassword} onChange={(e)=>{valNewPassword(e)}} placeholder="Nowe hasło"/>
{newPasswordOk?<button disabled={changeResultFinal?1:0} className='loginInput loginButton' onClick={sendNewPassword}>Zmień hasło</button>:<p className="infotext">Poprawne hasło powinno zawierać:<br/>-8 znaków<br/>-1 cyfrę <br/>-1 dużą literę<br/>-1 małą literę</p>}

{wait?<p className="infotext"> Trwa ładowanie. Proszę czekać...</p>:null}
{changeResultFinal?<p className="infotext">{changeResultFinal.message}</p>:null}
    </div>
:null}
</div>
:null}




          </div>

        </div>
        
         </div>

     );
}
 
export default RecoverPassword;