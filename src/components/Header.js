import React, {useState} from 'react';
import {  
    Link
  } from "react-router-dom";
  import LoginButton from './LoginButton';
import './Header.css';
import Logo from '../images/page/magicmomentsevents.png'
const Header = (props) => {
  
    const [loginActive,setLoginActive]=useState(0);

const toggleLoginButton=()=>
{
setLoginActive(!loginActive);

}
const handleAccount=()=>{
    return null;
}

    return (
        <header>
<div className="logoApp"><img src={Logo} alt="logo"/></div>
<div className='leftMenu'>
    

<Link to="/offer">Fotolustro</Link>
<Link to="/products/fotolustro">Rezerwacje</Link>
<Link to="/avability">Sprawdź termin</Link>


</div>
<div className='rightMenu'>{!props.isLogged?<button onClick={toggleLoginButton}>Zaloguj się</button>:              <Link to="/MyAccount">Moje konto</Link>}</div>

{loginActive?<LoginButton logData={props.setLogData} logged={props.setIsLogged} close={toggleLoginButton}/>:null}
        </header>

     );
}
 
export default Header;