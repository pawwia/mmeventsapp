import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return ( 
<footer>
<div className='footerContent'>

<div className='newFooter'>
  <div className=" footerelement">
  <h3 style={{color:'#fff'}}>Magic Moments Events</h3>
  <p>Fotolustro na Twojej imprezie!</p>
  
  </div>
  <div className=" footerelement">
  <h3 style={{color:'#fff'}}>Zaobserwuj nas</h3>
  <div>
    <a href="https://www.facebook.com/mmevents.fotolustro">
  {/*<img src={Facebook} alt="Facebook" width="35px"/>*/}
  <FontAwesomeIcon icon={faFacebook} size="2x"  />
  </a>
  <a href="https://www.facebook.com/mmevents.fotolustro">
    Facebook
  </a>
  </div>
  <div>
    <a href="https://www.instagram.com/magicmoments.fotolustro/">
    {/*<img src={Instagram} alt="Instagram" width="35px"/>*/}
    <FontAwesomeIcon icon={faInstagram} size="2x"  />
  </a>
    <a href="https://www.instagram.com/magicmoments.fotolustro/">
      Instagram
    </a>
    </div>
   
    
  </div>
  <div className="footerelement">
    <h3 style={{color:'#fff'}}>Skontaktuj się z nami</h3>
  <div>
   <div> E-mail:<a style={{color:'#fff'}} href="mailto:kontakt@mmevents.pl">kontakt@mmevents.pl</a></div>
    <div>Tel:<a style={{color:'#fff'}}  href="tel:+575046074">+48 575 046 074</a></div>
  </div>  
  </div>
  <div className=" footerelement">
    <h3 style={{color:'#fff'}}>Strefa klienta</h3>
  <div> <Link to="/galery">Galeria zdjęć</Link></div>
    
  </div>
  </div>
  
  


<div className='secondLineFooter'>
    <div className='secondLineElement'>© 2022 All Copyrights Reserved To mmevents.pl </div>
    <div className='secondLineElement'><Link to="/privacy">Polityka prywatności</Link></div>
  <div className='secondLineElement'> <Link to="/rules"> Regulamin witryny</Link></div>
</div>

</div>
</footer>
     );
}
 
export default Footer;