import React, {useState} from 'react';
import './LoginButton.css'
import RecoverPassword from './RecoverPassword';

const urlLogin='http://localhost/db/login.php';
const enviarData=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'

}  

    });
 
    //console.log(resp);


    const json = await resp.json();
    //console.log(json);
    return json;
}


const LoginButton = (props) => {
const [login,setLogin]=useState('');
const [error,setError]=useState(null);
const [waiter,setWaiter]=useState(false);
const [popupRemindPassword, setPopupRemindPassword]=useState(0);


const [password,setPassword]=useState('');

const togglePopupRemindPassword=()=>{

    setPopupRemindPassword(!popupRemindPassword)
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

const handleLogin=async()=>{

    setWaiter(true);
    const data={
'email':login,

'password':password
    }
    //console.log(data);
   const respuestajson= await enviarData(urlLogin,data);
console.log("respuesta: ", respuestajson);

//props.acceder(respuestajson.conectado)
setError(respuestajson.error);
setWaiter(false);
if (respuestajson.connected){
//props.logData(respuestajson);
//props.logged(respuestajson.id);
//window.localStorage.setItem('id', respuestajson.id );
sessionStorage.setItem("token", respuestajson.token);
 props.logged(parseJwt(respuestajson.token).user_id);
props.logData(parseJwt(respuestajson.token).email);

props.close();
}
   
}

    return (  
        <div className='Loginbg'>
            <div className='LoginWindow'>
            <div className='TitleBar'>
          <span className='Title'><span>Logowanie</span></span>
          <span className='Close'><span onClick={props.close}>X</span></span>
          </div>
          <div className='contentBar'>

<input type="text" className='loginInput' value={login} onChange={(e)=>{setLogin(e.target.value)}} placeholder="Login"/>
<input type="password" className='loginInput' placeholder='Hasło' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
{error?<div className="error">{error}</div>:null}
{waiter?<div className="error">Proszę czekać. Ładowanie... </div>:null}
<button className='loginInput loginButton' onClick={handleLogin}>Zaloguj</button>
<div className='remindPassword'><a href="#/" onClick={togglePopupRemindPassword}>Nie pamiętasz Hasła? Kliknij tutaj aby je przypomnieć</a></div>
{popupRemindPassword?<RecoverPassword close={togglePopupRemindPassword}/>:null}


              </div>

            </div>
            
             </div>
    );
}
 
export default LoginButton
