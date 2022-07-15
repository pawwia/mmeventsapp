import React, {useState} from 'react';
import './PopUpBooking.css'
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
const [dateToCheck,setDateToCheck]=useState(Today);

const [stepForm,setStepForm]=useState(1);

const [orderPrice,setOrderPrice]=useState(props.price);
const [orderDuration,setOrderDuration]=useState(props.hours);
const [orderFreeKm,setOrderFreeKm]=useState(props.km);

const [orderDate,setOrderDate]=useState(null);

const [email,setEmail]=useState(null);
const [password,setPassword]=useState(null);

const [userName,setUserName]=useState(null);
const [userSurName,setUserSurName]=useState(null);
const [userPesel,setUserPesel]=useState(null);
const [userAdress,setUserAdress]=useState(null);

const [orderStartTime,setOrderStartTime]=useState(null);
const [orderGuestBook,setGuestBook]=useState(null);
const [orderGuestBookType,setGuestBookType]=useState(null);
const [orderAdress,setOrderAdress]=useState(null);
const [orderObjectName,setOrderObjectName]=useState(null);


const prevStep=()=>{
if(stepForm>1)setStepForm(stepForm-1)

}

const nextStep=()=>{
    if (stepForm<20) setStepForm(stepForm+1)


}
    return (  
<div className='popupbooking' >  
        <div className='popupbooking_open'>
        <div className='bookingName'>Rezerwacja</div>
<div className='bookingForm'>

</div>
<div className='bookingButtons'>
{stepForm===1?<div>

    <div className='avability login-box'>
    <h1> Na początku wybierz datę imprezy :)  </h1>
   <form>
<div class="user-box">

    Wybierz datę: <input type="date"  min={Today} max={max} Value={dateToCheck} onChange={(e)=>setDateToCheck(e.target.value)} />
    </div>
    <a onClick={checkAvability}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Sprawdź termin!
    </a>
    
</form>

</div>



</div>:null}
{stepForm===2?<div>

    <div className='avability login-box'>
</div>

</div>:null}
{stepForm===3?<div>3</div>:null}
{stepForm===4?<div>4</div>:null}
{stepForm===5?<div>5</div>:null}
{stepForm===6?<div>6</div>:null}
{stepForm===7?<div>7</div>:null}
{stepForm===8?<div>8</div>:null}
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

  
</div>
        </div>


        </div>

    );
}
 
export default PopUpBooking;