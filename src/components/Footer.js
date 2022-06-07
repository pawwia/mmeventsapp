import React from 'react';
import './Footer.css'
import Instagram from '../images/footer/instagram.svg'
import Facebook from '../images/footer/facebook.svg'
import Email from '../images/footer/email.svg'
import Telephone from '../images/footer/telephone.svg'
import Location from '../images/footer/location.svg'

const Footer = () => {
    return ( 

<footer>
<div className='footerContent'>
<div className='firstLineFooter'>
    <div className='firstLineElement'><span className='leftFirstLine'><img src={Location} alt='icon'/></span><span className='rightFirstLine'><p>Zachodnio- pomorskie<br/>Lubuskie</p></span></div>
    <div className='firstLineElement'><span className='leftFirstLine'><img src={Telephone} alt='icon'/></span><span className='rightFirstLine'><p>Tel: 575 046 074</p></span></div>
    <div className='firstLineElement'><span className='leftFirstLine'><img src={Email} alt='icon'/></span><span className='rightFirstLine'><p>E-mail: kontakt@mmevents.pl</p></span></div>
    <div className='firstLineElement'><span className="lastChildFirstLine"><img src={Facebook} alt='fb'/><img src={Instagram} alt='insta'/> <img src={Instagram} alt='insta'/> </span></div>
</div>
<div className='secondLineFooter'>
    <div className='secondLineElement'>© 2022 All Copyrights Reserved To mmevents.pl </div>
    <div className='secondLineElement'>Polityka prywatności</div>
    <div className='secondLineElement'>Regulamin witryny</div>
</div>

</div>
</footer>

     );
}
 
export default Footer;