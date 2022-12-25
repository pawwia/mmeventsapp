import React from 'react';
import { Link } from 'react-router-dom';
import './cta.css';

const Cta = () => {
    return (  

        <div className='CTA'>
<h3> Czy wiesz że... </h3>
<p>Z nami sprawdzisz termin, zarezerwujesz i spresonalizujesz fotolustro na swojej imprezie w pełni online?  Wybierz na górze strony "REZERWACJE" lub "SPRAWDŻ TERMNIN"! Zaoszczędź czas i odhacz już naszą atrakcję jako "załatwioną" </p>
<Link to="../products/fotolustro">Kliknij tutaj i rozpocznij rezerwację! </Link>
     </div>
    );
}
 
export default Cta;