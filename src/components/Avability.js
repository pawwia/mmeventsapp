import React from 'react';
import './Avability.css'
const Avability = () => {
const d=new Date();
const Month=(d.getMonth()<9)?('0'+(d.getMonth()+1)):(d.getMonth()+1);
const Day=(d.getDate()<9)?('0'+(d.getDate())):(d.getDate());
const Year=d.getFullYear();
const Today=Year+'-'+Month+'-'+Day;
const max=(Year+1)+'-12-31';
    return (  
<div className='avability login-box'>
    <h1> Sprawdź dostępność fotolustra na Twojej imprezie! </h1>
<form>
<div class="user-box">

    Wybierz datę: <input type="date" min={Today} max={max} Value={Today}/>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Sprawdź termin!
    </a>
    
</form>

</div>

    );
}
 
export default Avability;