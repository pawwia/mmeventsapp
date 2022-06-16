import React, {useState} from 'react';
import './PopUpBooking.css'
const PopUpBooking = () => {
    window.addEventListener("beforeunload", (ev) => 
{  
    ev.preventDefault();
    return ev.returnValue = 'Rozpocząłeś rezerację. Czy jesteś pewny, że chcesz anulować?';
});
const [stepForm,setStepForm]=useState(1);
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
<div className='booking'>Sprawdzanie dostępności</div>
{stepForm}
<div className='bookingForm'>

</div>
<div className='bookingButtons'>
  { stepForm>1? <button onClick={prevStep}>Wróć</button>:null}
   {stepForm<20? <button onClick={nextStep}>Dalej</button>:null}
</div>
        </div>


        </div>

    );
}
 
export default PopUpBooking;