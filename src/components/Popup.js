import React, {useState} from 'react';
import './Popup.css'
import PopUpBooking from './PopUpBooking'
  const Popup = (props) => {
    const [showReservation,setShowReservation]=useState(false);
const PopUpBook=()=>
{
setShowReservation(!showReservation);

}

      return ( 
        <div className='popup' >  
        <div className='popup_open'> 
        <div className='TitleBar'>
          <span className='Title'><span>{props.tittle}</span></span>
          <span className='Close'><span onClick={props.closePopup}>X</span></span>
          </div>
          <div className='contentBar'>
            <div className='introduce'>
<span>Koszt pakietu:{props.price}zł / {props.hours}h</span>

            </div>
            <div className='pactage'>
<span>
  <h3> Co zawiera wybrany pakiet?</h3>
  <div className='whatContain'>{props.hours} godzin świetnej zabawy</div>
  <div className='whatContain'>Nielimitowaną liczbę wydurków</div>
  <div className='whatContain'>Pomoc asystentów</div>
  <div className='whatContain'>Zestaw gadżetów imprezowych</div>
  <div className='whatContain'>Indywidualne szablony zdjęć</div>
  <div className='whatContain'>Indywidualne indywidualnie wybrane tło</div>
  <div className='whatContain'>Galeria zdjęć z wykonanymi zdjęciami</div>
  {props.carpet?<div className='whatContain'>Czerwony dywan i eleganckie słupki</div>:null}
  {props.guestBook?<div className='whatContain'>Darmowa księga gości</div>:null}
  
  <h3>W tym pakiecie dostarczamy fotolustro do {props.km} km od Szczecina</h3>
  
  <button onClick={PopUpBook}>Sprawdź i zarezerwuj swój termin klikając tutaj!</button>
<button onClick={props.closePopup}>Wróć i wybierz inny pakiet</button>
</span>

            </div>


          </div>
        </div>  
        {showReservation?<PopUpBooking 
        hour={props.hour}
        name={props.name}
        price={props.price}
         hours={props.hours}
        guestBook={props.guestBook}
        km={props.km}
        />:null}

        </div>  
       );
  }
   
  export default Popup;