import React from 'react';
import './Header.css';
import Logo from '../images/page/magicmomentsevents.svg'
const Header = () => {
    return (
        <header>
<div className="logoApp"><img src={Logo} alt="logo"/></div>
<div className='leftMenu'>
    

<a href="https://mmevents.pl">Powrót na stronę</a>
<a href="/products">Produkty</a>
<a href="/avability">Dostępność terminu</a>


</div>
<div className='rightMenu'><button>Zaloguj się</button></div>


        </header>

     );
}
 
export default Header;