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
           
<span>Koszt pakietu rok {new Date().getFullYear()}:{props.price}zł / {props.hours}h</span>
<span>Koszt pakietu rok {new Date().getFullYear()+1}:{props.priceNY}zł / {props.hours}h</span>
<p className='priceDesc'> Koszty usługi dla wesel, urodzin itp do 200 osób. </p>
              <p className='priceDesc'>Koszty usługi dla imprez plenerowych, imprez firmowych, studniówek, konferencji itp. ustalane są indywidualnie. Celem wyceny wyślij do nas e-mail, skorzystaj z formularza kontaktowego w zakładce fotolustro lub przejdź przez rezerwację a my przy potwierdzaniu zapytamy Cię o szczegóły  </p>

            </div>
            <div className='pactage'>
<span>
  <h2> Co zawiera wybrany pakiet wynajmu fotolustra?</h2>
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
  
  <button className="resCheck" onClick={PopUpBook}>Sprawdź i zarezerwuj swój termin klikając tutaj!</button>
<button className="resCheck" onClick={props.closePopup}>Wróć i wybierz inny pakiet</button>
</span>

            </div>


          </div>
        </div>  
        {showReservation?<PopUpBooking 
        close={PopUpBook}
        hour={props.hour}
        name={props.name}
        price={props.price}
        priceNY={props.priceNY}
         hours={props.hours}
         morekm={props.morekm} 
         gbPriceIndywidual={props.guestBook?props.gbPriceIndywidual/2:props.gbPriceIndywidual}
         gbPriceNormal={props.guestBook?0:props.gbPriceNormal}
        guestBook={props.guestBook}
        km={props.km}
        priceKm={props.priceKm}
     
        isLogged={props.isLogged}
 setIsLogged={props.setIsLogged}
 setLogData={props.setLogData}

        />:null}

        </div>  
       );
  }
   
  export default Popup;