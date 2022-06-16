import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import LoginButton from './LoginButton';
import './Header.css';
import Logo from '../images/page/magicmomentsevents.svg'
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
    

<a href="https://mmevents.pl">Powrót na stronę</a>
<Link to="/products">Produkty</Link>
<Link to="/avability">Dostępność terminu</Link>


</div>
<div className='rightMenu'>{!props.isLogged?<button onClick={toggleLoginButton}>Zaloguj się</button>:              <Link to="/MyAccount">Moje konto</Link>}</div>

{loginActive?<LoginButton logData={props.setLogData} logged={props.setIsLogged} close={toggleLoginButton}/>:null}
        </header>

     );
}
 
export default Header;