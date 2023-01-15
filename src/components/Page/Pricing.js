import React from 'react';
import './Pricing.css';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX} from '@fortawesome/free-solid-svg-icons'





const Pricing = (props) => {

      

    return ( 

       <div className='PriceOffer'>
<div className='PriceOfferName'>


</div>
<div className='PriceOfferPrice'><AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">

<p>{props.price} ZŁ</p><p>/ {props.hours} godz. </p></AnimationOnScroll>
</div>
<div className='PriceOfferLine'>⚬ ⚬ ⚬ ⚬ ⚬ ⚬ ⚬ ⚬ ⚬</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><FontAwesomeIcon icon={faCheck} size="2x"/></span>
<span className='PriceOfferDesc'>Opieka asystenta</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><FontAwesomeIcon icon={faCheck} size="2x"/></span>
<span className='PriceOfferDesc'>Nielimitowana ilość wydruków	</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><FontAwesomeIcon icon={faCheck} size="2x"/></span>
<span className='PriceOfferDesc'>Gadżety imprezowe</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><FontAwesomeIcon icon={faCheck} size="2x"/></span>
<span className='PriceOfferDesc'>Dwa szablony wydruków do wyboru (2 paski 5cm x 15cm lub 10cm x 15cm )</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><FontAwesomeIcon icon={faCheck} size="2x"/></span>
<span className='PriceOfferDesc'>Personalizowane tło</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><FontAwesomeIcon icon={faCheck} size="2x"/></span>
<span className='PriceOfferDesc'>Personalizacja szablonów wydruków	</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><FontAwesomeIcon icon={faCheck} size="2x"/></span>
<span className='PriceOfferDesc'>Galeria zdjęć online</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'>{props.slupki?<FontAwesomeIcon icon={faCheck} size="2x"/>:<FontAwesomeIcon icon={faX} size="2x"/>}</span>
<span className='PriceOfferDesc'>Czerwony dywan i eleganckie słupki</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'>{props.guestbook?<FontAwesomeIcon icon={faCheck} size="2x"/>:<FontAwesomeIcon icon={faX} size="2x"/>}</span>
<span className='PriceOfferDesc'>Księga gości/album</span>
</div>
<div className='PriceOfferContain'>

<span className='PriceOfferDesc'>Dojazd {props.km}</span>
</div>
<p>Ceny dla imprez do 200 osób. </p>
<p>W przypadku imprez firmowych, studniówek, imprez plenerowych, imprez masowych przygotowujemy indywidualne oferty. Prosimy o złożenie zapytania.  </p>


        </div>
        
     );
}
 
export default Pricing;