import React from 'react';
import './Pricing.css';
import check from '../../images/page/check.png';
import del from '../../images/page/delete.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";





const Pricing = (props) => {

      

    return ( 

       <div className='PriceOffer'>
<div className='PriceOfferName'></div>
<div className='PriceOfferPrice'><AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">

<p>{props.price} ZŁ</p><p>/ {props.hours} godz. </p></AnimationOnScroll>
</div>
<div className='PriceOfferLine'>⚬ ⚬ ⚬ ⚬ ⚬ ⚬ ⚬ ⚬ ⚬</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><img src={check} alt="tak" width="30px"/></span>
<span className='PriceOfferDesc'>Opieka asystenta</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><img src={check} alt="tak" width="30px"/></span>
<span className='PriceOfferDesc'>Nielimitowana ilość wydruków	</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><img src={check} alt="tak" width="30px"/></span>
<span className='PriceOfferDesc'>Gadżety imprezowe</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><img src={check} alt="tak" width="30px"/></span>
<span className='PriceOfferDesc'>Dwa szablony wydruków do wyboru (2 paski 5cm x 15cm lub 10cm x 15cm )</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><img src={check} alt="tak" width="30px"/></span>
<span className='PriceOfferDesc'>Personalizowane tło</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><img src={check} alt="tak" width="30px"/></span>
<span className='PriceOfferDesc'>Personalizacja szablonów wydruków	</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'><img src={check} alt="tak" width="30px"/></span>
<span className='PriceOfferDesc'>Galeria zdjęć online</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'>{props.slupki?<img src={check} alt="tak" width="30px"/>:<img src={del} alt="tak" width="30px"/>}</span>
<span className='PriceOfferDesc'>Czerwony dywan i eleganckie słupki</span>
</div>
<div className='PriceOfferContain'>
<span className='PriceOfferIcon'>{props.guestbook?<img src={check} alt="tak" width="30px"/>:<img src={del} alt="tak" width="30px"/>}</span>
<span className='PriceOfferDesc'>Księga gości/album</span>
</div>
<div className='PriceOfferContain'>

<span className='PriceOfferDesc'>Dojazd {props.km}</span>
</div>



        </div>
        
     );
}
 
export default Pricing;