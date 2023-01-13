import React from 'react';
import './AditionalService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'



const AditionalService = (props) => {
    return (

<div className='AdditionalService'>
   
<div className='AdditionalServiceOne'>
    <div className='AddServiceOneImg'><FontAwesomeIcon inverse icon={solid("car-side")}size="5x"/></div>
    <div className='AddServiceOneDesc'>Transport poza limit w pakiecie<br/>{props.km} PLN / 1km</div>
</div>
<div className='AdditionalServiceOne'>
    <div className='AddServiceOneImg'><FontAwesomeIcon inverse icon={solid("book-open")}size="5x"/></div>
    <div className='AddServiceOneDesc'>Księga gości / album (poza pakietem)<br/>{props.guestBook} PLN</div>
</div>
<div className='AdditionalServiceOne'>
    <div className='AddServiceOneImg'><FontAwesomeIcon inverse icon={solid("address-book")}size="5x"/></div>
    <div className='AddServiceOneDesc'>Personalizowana ksiega gości<br/>{props.guestBookInd} PLN</div>
</div>


<div className='AdditionalServiceOne'>
    <div className='AddServiceOneImg'><FontAwesomeIcon inverse icon={solid("clock")}size="5x"/></div>
    <div className='AddServiceOneDesc'>Przedłużenie najmu w trakcie imprezy <br/>{props.addHour} PLN</div>
</div>

</div>
          
      );
}
 
export default AditionalService;