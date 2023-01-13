import React from 'react';
import './AditionalService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBookOpen, faCarSide, faClock } from '@fortawesome/free-solid-svg-icons'



const AditionalService = (props) => {
    return (

<div className='AdditionalService'>
   
<div className='AdditionalServiceOne'>
    <div className='AddServiceOneImg'><FontAwesomeIcon inverse icon={faCarSide}size="5x"/></div>
    <div className='AddServiceOneDesc'>Transport poza limit w pakiecie<br/>{props.km} PLN / 1km</div>
</div>
<div className='AdditionalServiceOne'>
    <div className='AddServiceOneImg'><FontAwesomeIcon inverse icon={faBookOpen}size="5x"/></div>
    <div className='AddServiceOneDesc'>Księga gości / album (poza pakietem)<br/>{props.guestBook} PLN</div>
</div>
<div className='AdditionalServiceOne'>
    <div className='AddServiceOneImg'><FontAwesomeIcon inverse icon={faAddressBook}size="5x"/></div>
    <div className='AddServiceOneDesc'>Personalizowana ksiega gości<br/>{props.guestBookInd} PLN</div>
</div>


<div className='AdditionalServiceOne'>
    <div className='AddServiceOneImg'><FontAwesomeIcon inverse icon={faClock}size="5x"/></div>
    <div className='AddServiceOneDesc'>Przedłużenie najmu w trakcie imprezy <br/>{props.addHour} PLN</div>
</div>

</div>
          
      );
}
 
export default AditionalService;