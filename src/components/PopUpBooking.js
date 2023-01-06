import { option } from 'lightbox2';
import React, {useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';
import './PopUpBooking.css';
import { domToReact } from 'html-react-parser';
import ReCAPTCHA from "react-google-recaptcha";
import PopUpRules from './popUpRules';



const d=new Date(); 
let NextYear=d.getFullYear()+1;

const urlAvability='http://app.mmevents.pl/db/checkAvability.php';
const getAvable=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
  const json = await resp.json();
    return json;
}


const urlFindByEmail='http://app.mmevents.pl/db/findByEmail.php';
const FindByEmail=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
  const json = await resp.json();
    return json;
}


const urlRegToUsers='http://app.mmevents.pl/db/regToUsers.php';
const urlGetIdByEmail='http://app.mmevents.pl/db/getUserId.php';
const urlRegUserData='http://app.mmevents.pl/db/regToUserData.php';
const urlGetCities='http://app.mmevents.pl/db/getCities.php';
const urlGetDate='http://app.mmevents.pl/db/getDate.php';
const urlAddBooking='http://app.mmevents.pl/db/addBooking.php';

const RegToUsers=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
  const json = await resp.json();
    return json;
}


const urlLoginAndGetData='http://app.mmevents.pl/db/LoginAndGetData.php';
const LoginAndGetData=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
  const json = await resp.json();
    return json;
}


const PopUpBooking = (props) => {
    window.addEventListener("beforeunload", (ev) => 
{  
    ev.preventDefault();
    return ev.returnValue = 'Rozpocząłeś rezerację. Czy jesteś pewny, że chcesz anulować?';
});
const d=new Date();
const Month=(d.getMonth()<9)?('0'+(d.getMonth()+1)):(d.getMonth()+1);
const Day=(d.getDate()<9)?('0'+(d.getDate())):(d.getDate());
const Year=d.getFullYear();
const Today=Year+'-'+Month+'-'+Day;
const max=(Year+1)+'-12-31';
const [loading,setLoading]=useState(0);
const [errorText,setErrorText]=useState(null);

const [dateToCheck,setDateToCheck]=useState(Today);

const [stepForm,setStepForm]=useState(1);

const [orderPrice,setOrderPrice]=useState(0);
const [orderDuration,setOrderDuration]=useState(props.hours);
const [orderKmAdd,setOrderKmAdd]=useState(null);
const [orderGbAdd,setOrderGbAdd]=useState(null);
const [finalPrice,setFinalPrice]=useState(null);



const [orderDate,setOrderDate]=useState(null);

const [email,setEmail]=useState(null);
const [showEmail,setShowEmail]=useState(1);
const [password,setPassword]=useState("");

const [valNewUser,setValNewUser]=useState(0);
const [valLen,setValLen]=useState(0);
const [valNum,setValNum]=useState(0);
const [valUpp,setValUpp]=useState(0);
const [valName,setValName]=useState(0);
const [valSurName,setValSurName]=useState(0);
const [valAdress,setValAdress]=useState(0);
const [valPesel,setValPesel]=useState(0);
const [valTel,setValTel]=useState(0);
const [valRegulamin,setValRegulamin]=useState(0);
const [valOrderObjectName,setValOrderObjectName]=useState(0);
const [valOrderAdress,setValOrderAdress]=useState(0);

const [orderWoj,setOrderWoj]=useState("Wybierz ");
const [orderMias,setOrderMias]=useState(null);
const [numKm,setNumKm]=useState(null);

const [message,setMessage]=useState(null);
const [btnActive,setBtnActive]=useState(1);




const [userName,setUserName]=useState(null);
const [userSurName,setUserSurName]=useState(null);
const [userPesel,setUserPesel]=useState(null);
const [userAdress,setUserAdress]=useState(null);
const [userTel,setUserTel]=useState(null);
const [userId,setUserId]=useState(null);

const [guestNumber,setGuestNumber]=useState(null);
const [partyType,setPartyType]=useState(null);


const [orderStartTime,setOrderStartTime]=useState("16:00");
const [orderGuestBook,setGuestBook]=useState(null);
const [orderGuestBookType,setOrderGuestBookType]=useState(null);
const [orderAdress,setOrderAdress]=useState(null);
const [orderObjectName,setOrderObjectName]=useState(null);

const[isVeryfied, setIsVeryfied]=useState(false)
const [captchaError,setCaptchaError]=useState(null);
const recaptchaRef = useRef(null)

const[popUpRulesOption,setPopUpRulesOption]=useState(null)

const closeRules=()=>{

    setPopUpRulesOption(null)
}

function validatepesel(pesel) {
    if (pesel==="18473213212") return true;
    var reg = /^[0-9]{11}$/;
    if(reg.test(pesel) == false) 
        return false;
    else
    {
        var digits = (""+pesel).split("");
        if ((parseInt(pesel.substring( 4, 6)) > 31)||(parseInt(pesel.substring( 2, 4)) > 12))
            return false;
          
        var checksum = (1*parseInt(digits[0]) + 3*parseInt(digits[1]) + 7*parseInt(digits[2]) + 9*parseInt(digits[3]) + 1*parseInt(digits[4]) + 3*parseInt(digits[5]) + 7*parseInt(digits[6]) + 9*parseInt(digits[7]) + 1*parseInt(digits[8]) + 3*parseInt(digits[9]))%10;
        if(checksum===0) checksum = 10;
            checksum = 10 - checksum;
  
        return (parseInt(digits[10])===checksum);
    }
}

const ValidateUserName=(e)=>{
    setUserName(    e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)   );
if (e.target.value.length>3)
setValName(1)
else setValName(0)


}
const ValidateObjectName=(e)=>{
    setOrderObjectName(    e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)   );
if (e.target.value.length>5)
setValOrderObjectName(1)
else setValOrderObjectName(0)
}

const ValidateObjectAdress=(e)=>{
    setOrderAdress(    e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)   );
if (e.target.value.length>10)
setValOrderAdress(1)
else setValOrderAdress(0)
}

const ValidatePesel=(e)=>{

    setUserPesel(e.target.value);
    if (validatepesel(e.target.value))
    setValPesel(1);
    else setValPesel(0);
    
    }
    const ValidateUserSurName=(e)=>{

        setUserSurName(    e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)   );

if (e.target.value.length>3)
setValSurName(1)
else setValSurName(0)

}

const validateUserAdress=(e)=>{

    setUserAdress(e.target.value);
    if (e.target.value.length>=10)
setValAdress(1)
else setValAdress(0)
    
    }

    const validateUserTel=(e)=>{

        setUserTel(e.target.value);
        if (e.target.value.length>=9)
setValTel(1)
else setValTel(0)
        
        }
const validatePassword=(e)=>{

    setPassword(e.target.value);

    if(valNewUser)
    {

     if (e.target.value.length>=8)   setValLen(1) 
     else setValLen(0);
     if (e.target.value.length===0)   {setValLen(0);setValUpp(0);setValNum(0); }
    
   let loper=0;
   while(loper<e.target.value.length)
   {
    if(e.target.value.charAt(loper)===e.target.value.charAt(loper).toUpperCase()&& e.target.value.charAt(loper).match(/[a-z]/i))
    { setValUpp(1);
loper=e.target.value.length;
        }
    else setValUpp(0);
    loper=loper+1
    
   }
    loper=0;
   while(loper<e.target.value.length)
   {
    if(e.target.value.charAt(loper)==="0"||e.target.value.charAt(loper)==="1"||e.target.value.charAt(loper)==="2"||e.target.value.charAt(loper)==="3"||e.target.value.charAt(loper)==="4"||e.target.value.charAt(loper)==="5"||e.target.value.charAt(loper)==="6"||e.target.value.charAt(loper)==="7"||e.target.value.charAt(loper)==="8"||e.target.value.charAt(loper)==="9")
    { setValNum(1);
loper=e.target.value.length;
        }
    else setValNum(0);
    loper=loper+1
    
   }
 

    }


}

const getDataofLoggedUser=()=>{
    
    const data={
        user_id:props.isLogged
    }
    const resultGetDateOfLoggedUser= RegToUsers(urlGetDate,data)
    if(resultGetDateOfLoggedUser)
    {
        resultGetDateOfLoggedUser.then((result)=>{
setUserName(result.name);
setUserSurName(result.surname);
setUserAdress(result.adress);
setUserPesel(result.pesel);
setUserTel(result.tel);
setUserId(result.id_user);
setStepForm(4);

        })
    }


    }




const SubmitPasswordRegisterHandle=()=>{
    setErrorText(null);
    setLoading(1);
        setLoading(0);
        setStepForm(3);

    }
    const submitAllUserData=()=>{
        setLoading(1);
        setErrorText(null);

      
         let data={
        email:email,
        pas:password,
    }
    const resultsRegToUsers= RegToUsers(urlRegToUsers,data)
    if(resultsRegToUsers)
    {
        resultsRegToUsers.then((result)=>{
            if (result.error===null)
            {
                 data={
                    email:email,
                }
               const resultsGetIdByEmail=RegToUsers(urlGetIdByEmail,data);
               if(resultsGetIdByEmail)
               {
                resultsGetIdByEmail.then((result)=>
                {
                    if (result.error===null)
                    {
                        setUserId(result.id)
                       if (result.id)
                        {
                                    data={

                                        id:result.id,
                                        name:userName,
                                        surname:userSurName,
                                        adress: userAdress,
                                        tel:userTel,
                                        pesel:userPesel,
                                    }
                                    const resultRegToUserData= RegToUsers(urlRegUserData,data)
                                    if (resultRegToUserData)
                                    {
                                        resultRegToUserData.then((results)=>
                                        {
                                            if (results.error===null)
                                            {
                                                setLoading(0);
                                                setErrorText(null);
                                                props.setIsLogged(result.id);
                                                window.localStorage.setItem('id', result.id );
                                                 setStepForm(4);

                                            }
                                            else 
                                            {
                                                
                                                    setLoading(0);
                                                    setErrorText(result.error);
                                                  

                                                         


                                            }



                                        })

                                    }



                        }

                       
                    }


                    else 
                    {
               setLoading(0);
               setErrorText(result.error)
                    }
               });
               }
            }
            else 
            {
            setLoading(0);
setErrorText(result.error)
            }
        })}


    }

const SubmitPasswordLoginHandle=()=>{
    setErrorText(null);
    setLoading(1);
    
    
    const data={
        email:email,
        pas:password,
    }
    const resultsLoginAndGetData= LoginAndGetData(urlLoginAndGetData,data)
    if(resultsLoginAndGetData)
    {
        resultsLoginAndGetData.then((result)=>{
            if (result.connected===true)
            
            {   setUserName(result.name);
                setUserSurName(result.surname);
                setUserTel(result.tel);
                setUserPesel(result.pesel);
                setUserAdress(result.adress)
                props.setIsLogged(result.id_user);
                window.localStorage.setItem('id', result.id_user );
                setUserId(result.id_user)


                setLoading(0);
                setStepForm(4);
            }
            else 
            {
            setLoading(0);
setErrorText(result.error)
            }
        })}
}
const  SubmitEmailHandle=()=>{

 setEmail(email.toString().toLowerCase());
 const l=email.toString().length-1;


if( (email.length>6) && (email.search('@')!==-1) &&(email.search(/\./)!==-1)&&(email[0]!=='@') &&(email[0]!=='.')&&(email[l]!=='.')&&(email[l]!=='@') )
{
setErrorText(null);
setLoading(1);


const data={
    email:email
}
const resultsFindByEmail= FindByEmail(urlFindByEmail,data)
if(resultsFindByEmail)
{
    resultsFindByEmail.then((result)=>{
        if (result.email===email)
        {setLoading(0);
        setValNewUser(0);
        setShowEmail(false);
        }
        else 
        {
        setLoading(0);
        setValNewUser(1);
        setShowEmail(false);
        }
    })}}





else {setErrorText("To nie jest poprawny adres e-mail");


}

}

const changeWoj=(e)=>{
setOrderWoj(e.target.value)

setLoading(1);
setOrderMias(null);
const data={
    woj:e.target.value,
}
const resultsGetCities= FindByEmail(urlGetCities,data)
if(resultsGetCities)
{
    resultsGetCities.then((result)=>{
        if (result)
        {setLoading(0);
setOrderMias(result)
      
        }
        else 
        {
        setLoading(0);
        
        }
    })}
}

const takeGb=(option)=>{
    setOrderGuestBookType(option);
if (option===0) {setOrderGbAdd(0);setFinalPrice(Math.round(orderPrice+orderKmAdd));}
else if (option===1) {setOrderGbAdd(props.gbPriceNormal);setFinalPrice(Math.round(orderPrice+props.gbPriceNormal+orderKmAdd));}
else if (option===2) {setOrderGbAdd(props.gbPriceIndywidual);setFinalPrice(Math.round(orderPrice+props.gbPriceIndywidual+orderKmAdd));}

}

const Bookthis=()=>{
    setBtnActive(0);
const data={

     user_id:userId,
    event_date:dateToCheck,
    start_hour:orderStartTime,
    duration:orderDuration,
    price:finalPrice,
    guestbook:orderGuestBookType,
    adress:orderAdress,
   object_Name:orderObjectName,
   guestNumber:guestNumber,
   partyType:partyType,
}
   // urlAddBooking
   const resultAddBooking= RegToUsers(urlAddBooking,data)
                                    if (resultAddBooking)
                                    {
                                        resultAddBooking.then((results)=>
                                        {
                                            if (results.connected===true)
                                            {
                                                setLoading(0);
                                                setMessage(results.msg)
                                                 setStepForm(8);

                                            }
                                            else 
                                            {
                                                
                                                    setLoading(0);
                                                    setStepForm(8);
                                                    setMessage("Nastąpił błąd. Spróbuj ponownie później")
                                            }})}
}
const handleCaptchaChange=(value)=>{
    setIsVeryfied(true);
    
    }
    const Step1Captcha =async (e)=>{
        e.preventDefault();
        const captchaToken =await recaptchaRef.current.executeAsync();
        ;
    
        const data={
            captcha:captchaToken,
        }
    
        const urlCheckCaptcha='http://app.mmevents.pl/db/verifyCaptcha.php';

    
      
            setCaptchaError(null);
        const resultsAv= getAvable(urlCheckCaptcha,data)
        if(resultsAv)
        {
            resultsAv.then((result)=>{
    if(result.success===true)
    { Step1();
        setCaptchaError(null);}
     else setCaptchaError("Ograniczono dostęp do strony - błąd Captcha")
        })  }
        }
        function onChangeCaptcha(value) {
            if (recaptchaRef && recaptchaRef.current && recaptchaRef.current.reset) {
                 recaptchaRef.current.reset()
             }
         }
const Step1=()=>
{
    
    const data={
        dateAv:dateToCheck
    }
    if (data)
{setLoading(1);
  //  e.preventDefault();

    const resultsAv= getAvable(urlAvability,data)
    if(resultsAv)
    {
        resultsAv.then((result)=>{
if (result.avable)
{setLoading(0);
    setErrorText("Niestety tego dnia mamy już przynajmniej jedną potwierdzoną imprezę która rozpoczyna się o godzinie "+result.start_hour+". Jeśli chciałbyś wynająć fotolustro w innej porze, skontaktuj się z nami bezpośrednio.")
        }
else {
    setErrorText(null);
    dateToCheck.toString().substring(0,4)===NextYear.toString()?setOrderPrice(props.priceNY):setOrderPrice(props.price)
    setLoading(0);
    setStepForm(2);
}
        })
       

    }

}
else setCaptchaError("Nie zaznaczyłeś pola Captha")

}
const confirmClose=()=>{

    if (window.confirm('Czy chcesz przerwać rezerwację? '))
{
   props.close();
}
}
    return (  
<div className='popupbooking' >  

        <div className='popupbooking_open'>
        <div className='TitleBar'>
          <span className='Title'><span>Tworzenie rezerwacji w systemie</span></span>
          <span className='Close'><span onClick={confirmClose}>X</span></span>
          </div>

<div className='bookingForm'>

</div>
<div className='bookingButtons'>

{stepForm===1?<div>

    <div className='avability login-box'>
    <h1> Na początku wybierz datę imprezy :)  </h1>
   <form>
<div class="user-box">

    Wybierz datę: <input type="date"  min={Today} max={max} Value={dateToCheck} onChange={(e)=>setDateToCheck(e.target.value)} />
    {loading?<div className='LoadingRes'> Trwa pobieranie danych. Proszę czekać... </div>:null}
    </div>
    
   {captchaError?<div style={{color:"white"}}>{captchaError}</div>:null}
   <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          size="invisible"
          onChange={onChangeCaptcha}
        />
   { !loading?<button onClick={(e)=>{Step1Captcha(e)}}>Sprawdź datę</button>:null}
   {errorText?<div className="LoadingRes">{errorText}</div>:null}
    
</form>

</div>



</div>:null}
{stepForm===2?<div>
    



    <div className='avability login-box'>

{
props.isLogged?
getDataofLoggedUser()
:<div>{showEmail?<input type="email" className='inputbooking' placeholder='Adres e-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
:<input className='inputbooking' placeholder={"Podaj Hasło"}  type="password" value={password} onChange={validatePassword}/>}
   {errorText?<div className="ErrorPole">{errorText}</div>:null}
    {loading?<div className='LoadingRes'> Trwa pobieranie danych. Proszę czekać... </div>:null}
{valNewUser?<div className="ValidationRes">
{valLen?<p className='validationOk'>Minimum 8 znaków</p>:<p className='ValidationNotOk'>Minimum 8 znaków</p>}
{valNum?<p className='validationOk'>Przynajmniej jedna cyfra</p>:<p className='ValidationNotOk'>Przynajmniej jedna cyfra</p>}
{valUpp?<p className='validationOk'>Przynajmniej jedna duża litera</p>:<p className='ValidationNotOk'>Przynajmniej jedna duża litera</p>}

</div>:null}
{showEmail?<button className='inputbookingbutton' onClick={()=>{if(email!==null)SubmitEmailHandle()}}>Zatwierdź</button>:valNewUser?valUpp&&valNum&&valLen?<button className='inputbookingbutton' onClick={SubmitPasswordRegisterHandle}>Dalej</button>:<button className='inputbookingbutton'>Wprowadź Hasło</button>:<button className='inputbookingbutton' onClick={SubmitPasswordLoginHandle}>Zaloguj</button>} </div>



}

        </div>
</div>

:null}
{stepForm===3?<div>
    <div className='avability login-box'>

<div className='reginput'>
<span>Imię</span>
<span><input type="text" placeholder='Imię' value={userName} onChange={ValidateUserName}/></span>
<span>{valName?<p className='validationOk'>ok</p>:<p className='ValidationNotOk'>Uzupełnij</p>}</span>
 </div>
 <div className='reginput'>
<span>Nazwisko</span>
<span><input type="text" placeholder='Nazwisko' value={userSurName} onChange={ValidateUserSurName}/></span>
<span>{valSurName?<p className='validationOk'>ok </p>:<p className='ValidationNotOk'>Uzupełnij</p>}</span>
 </div>
 <div className='reginput'>
<span>Adres(ulica,numer,kod pocztowy, miasto, kraj)</span>
<span><input type="text" placeholder='Adres (ulica,numer,kod pocztowy, miasto, kraj)' value={userAdress} onChange={validateUserAdress}/></span>
<span>{valAdress?<p className='validationOk'>ok </p>:<p className='ValidationNotOk'>Uzupełnij</p>}</span>
 </div>
 <div className='reginput'>
<span>Pesel</span>
<span><input type="text" placeholder='Pesel' value={userPesel} onChange={ValidatePesel}/></span>
<span>{valPesel?<p className='validationOk'>ok</p>:<p className='ValidationNotOk'>Uzupełnij</p>}</span>
 </div>
 <div className='reginput'>
<span>Telefon</span>
<span>
<input type="text" value={userTel} onChange={validateUserTel}/>
    </span>
<span>{valTel?<p className='validationOk'>ok </p>:<p className='ValidationNotOk'>Uzupełnij</p>}</span>
 </div>
 <div className='reginput'>
    <input className="checkregulamin" type="checkbox" value={valRegulamin} onChange={(e)=>setValRegulamin(e.target.checked)} /> *Oświadczam, że zapoznałem/zapoznałam się z <a onClick={()=>setPopUpRulesOption(2)}>regulaminem serwisu</a> oraz <a onClick={()=>setPopUpRulesOption(1)}>informacjami na temat przetrwarzania danych osobowych</a>
 </div>
 {loading?<div className='LoadingRes'> Trwa zapisywanie danych. Proszę czekać... </div>:null}

 {valAdress&&valName&&valPesel&&valSurName&&valTel&&valRegulamin?<button className='inputbookingbutton' onClick={submitAllUserData}>Zarejstruj</button>:<button className='inputbookingbutton'>Wprowadź dane</button>}


</div>
</div>:null}
{stepForm===4?<div>
    <div className='avability login-box'>
<h3>Dodawanie rezerwacji</h3>
<div className='reginput'>
    <span>Dzień</span>
    <span>{dateToCheck}</span>
    <span></span>

</div>
<div className='reginput'>
    <span>Czas trwania</span>
    <span>{orderDuration} godziny</span>
    <span></span>

</div>
<div className='reginput'>
    <span>Start usługi</span>
    <span><select value={orderStartTime} onChange={(e)=>setOrderStartTime(e.target.value)} ><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option><option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="02:00">02:00</option></select></span>
    <span></span>
</div>
<button className='inputbookingbutton' onClick={()=>setStepForm(5)}>Dalej</button>
</div>


</div>:null}
{stepForm===5?<div>
    <div className='avability login-box'>
    <h3>Miejsce imprezy</h3>
    <div className='reginput'>
    <span>Nazwa obiektu</span>
    <span><input type="text" placeholder="Hotel Transylwania" onChange={ValidateObjectName}/> </span>
    <span>{valOrderObjectName?<p className='validationOk'>ok :)</p>:<p className='ValidationNotOk'>Tu popraw :(</p>}</span>
</div>
<div className='reginput'>
    <span>Adres obiektu</span>
    <span><input type="text" placeholder="Imprezowa 12, 71-772 Szczecin" onChange={ValidateObjectAdress}/> </span>
    <span>{valOrderAdress?<p className='validationOk'>ok :)</p>:<p className='ValidationNotOk'>Tu popraw :(</p>}</span>
</div>

{loading?<h3>Trwa ładowanie. Proszę czekać... </h3>:null}
<div className='reginput'>
    <span>Województwo</span>
    <span><select value={orderWoj} onChange={changeWoj}><option  value={null}>Wybierz Województwo</option><option value="Zachodniopomorskie">Zachodniopomorskie</option><option value="Lubuskie">Lubuskie</option></select> </span>
    <span></span>
</div>
{orderMias?<div className='reginput'>
    <span>Najbliższe miasto</span>
    <span><select onChange={(e)=>{setNumKm(e.target.value);e.target.value>props.km?setOrderKmAdd((e.target.value-props.km)*props.morekm):setOrderKmAdd(0)}}><option>Wybierz miasto</option>{orderMias.map((option)=> <option key={option.id} value={option.km}>{option.mias}</option>)
    }</select> </span>
    <span></span>
</div>:null}

{numKm&&valOrderObjectName&&valOrderAdress?<button className='inputbookingbutton' onClick={()=>setStepForm(6)}>Dalej</button>:<button className='inputbookingbutton'>Uzupełnij</button>}

</div>

</div>:null}
{stepForm===6?<div>
    <div className='avability login-box'>
    <h3>Księga gości</h3>
    <div className='reginput gbtake' onClick={()=>takeGb(0)}>
    <span>Bez księgi gości</span>
    <span> +0 zł </span>
    <span>{orderGuestBookType===0? "Wybrano":null}</span>
</div>
<div className='reginput gbtake' onClick={()=>takeGb(1)}>
    <span>Księga gości standardowa <p className="gbopis">Księga gości bez personalizacji. </p> </span>
    <span>+{props.gbPriceNormal} zł
    <p className="gbopis">W cenie znajduje się pełna obsługa ksiegi gości tj: kleje, naklejki, taśmy itp.</p> </span>
    <span>{orderGuestBookType===1? "Wybrano":null}</span>
</div>
<div className='reginput gbtake' onClick={()=>takeGb(2)}>
    <span>Księga gości personalizowana  <p className="gbopis">Księga gości z personalizacją okładki (imiona, data uroczystości). </p> </span>
    <span>+{props.gbPriceIndywidual} zł 
    <p className="gbopis">W cenie znajduje się pełna obsługa ksiegi gości tj: kleje, naklejki, taśmy itp.</p></span>
    <span>{orderGuestBookType===2? "Wybrano":null}</span>
</div>
{orderGuestBookType===0||orderGuestBookType===1||orderGuestBookType===2?<button className='inputbookingbutton' onClick={()=>setStepForm(7)}>Dalej</button>:<button className='inputbookingbutton'>Wybierz opcję</button>}
        </div>

</div>:null}
{stepForm===7?<div>
    <div className='avability login-box'>
<h3> Podsumowanie</h3>
<div className='reginput ' >
    <span>Dzień imprezy</span>
    <span>{dateToCheck}  </span>
    <span></span>
</div>
<div className='reginput ' >
    <span>Od godziny</span>
    <span>od {orderStartTime}  </span>
    <span></span>
</div>
<div className='reginput ' >
    <span>Czas trwania</span>
    <span>{orderDuration} godziny  </span>
    <span></span>
</div>
<div className='reginput ' >
    <span>Miejsce</span>
    <span>{orderObjectName} / {orderAdress}  </span>
    <span></span>
</div>
<h3> Podsumowanie kosztów</h3>
<div className='reviewprice'>
<span>Wynajem - pakiet {orderDuration} godziny</span>
<span></span>
<span>{orderPrice} zł</span>
    </div>

    <div className='reviewprice'>
<span>Dojazd (poza pakietem)</span>
<span></span>
<span>{Math.round(orderKmAdd)} zł</span>
    </div>

    <div className='reviewprice'>
<span>Księga gości</span>
<span></span>
<span>{orderGbAdd} zł</span>
    </div>
    <div className='reviewprice'>
<span>Razem</span>
<span></span>
<span>{finalPrice} zł</span>
    </div>
    <div className='reginput'>
    <span>Orientacyjna ilość osób</span>
    <span><input type="number" placeholder="np. 200" onChange={(e)=>setGuestNumber(e.target.value)}/></span>
</div>
<div className='reginput'>

<span>Typ imprezy</span>
    <span><input type="text" placeholder="np. wesele" onChange={(e)=>setPartyType(e.target.value)}/></span>
</div>
<p className="gbopis">
Podane ceny dotyczą imprez do 200 osób. W przypadku imprez firmowych, imprez masowych, festynów, balów szkolnych, sylwestrów, dni świątecznych itp. cenę obliczamy indywidualnie. Złóż rezerwację a my poinformujemy Cię o ewentualnych zmianach cen.
</p>
<p className="gbopis">
Złożenie rezerwacji na stronie nie jest jednoznaczne z zawarciem umowy. W ciągu jednego dnia roboczego potwierdzimy rezerwację i prześlemy umowę do podpisu wraz z instrukcjami - umowę podpiszesz przez internet jednym kliknięciem. Rezerwacja jest w pełni aktywna po zaksięgowaniu na naszym koncie 30% zadatku wyszczególnionego w umowie. 
</p>
<p className="gbopis">
Dzięki systemowi rezerwacji spersonalizujesz usługę pod swoje preferencje.  Po zarezerwowaniu przejdź do konta aby wybrać tło, animacje oraz szablony wydruków.
</p>
    <p className="gbopis">Cena może ulec zmianie po przeliczeniu odległości. Stawka kilometrowa poza pakietem wynosi {props.morekm} zł. System wylicza odległość w zależności od odległości najbliższego podanego miasta.</p>
    <p className="gbopis">Klikając rezerwuję oświadczam, że zapoznałem/ zapoznałam się z <a onClick={()=>setPopUpRulesOption(2)}>regulaminem serwisu</a> oraz <a onClick={()=>setPopUpRulesOption(1)}>informacjami na temat przetrwarzania danych osobowych</a> </p>
    
{loading?"Proszę czekać. Trwa wysyłanie danych":null}
<button className='inputbookingbutton' onClick={()=>setStepForm(4)} >Zmień dane rezerwacji</button>
    {btnActive&&partyType&&guestNumber?<button className='inputbookingbutton' onClick={Bookthis} >Rezerwuję</button>:<button className='inputbookingbutton'>Czekam</button>}
</div>

</div>:null}
{stepForm===8?<div>

    <div className='avability login-box'>
        {message?message:null}
        <Link className='inputbookingbutton' to="/MyAccount">Przejdź do profilu</Link>

</div>
</div>:null}
{stepForm===9?<div>9</div>:null}
{stepForm===10?<div>10</div>:null}
{stepForm===11?<div>11</div>:null}
{stepForm===12?<div>12</div>:null}
{stepForm===13?<div>13</div>:null}
{stepForm===14?<div>14</div>:null}
{stepForm===15?<div>15</div>:null}
{stepForm===16?<div>16</div>:null}
{stepForm===17?<div>17</div>:null}
{stepForm===18?<div>18</div>:null}
{stepForm===19?<div>19</div>:null}

{popUpRulesOption?<PopUpRules option={popUpRulesOption} close={closeRules} title={props.title}/>:null}

</div>
        </div>

        </div>

    );
}
 
export default PopUpBooking;