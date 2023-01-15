import React, {Suspense, lazy, useState, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Loader from './Loader';
import Rules from './footer/Rules';
import Privacy from './footer/Privacy';
import Gallery from './Page/gallery';
import CookieConsent from "react-cookie-consent";
import CloseSession from './closeSession';
const checkTokenRequest=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
   const json = await resp.json();
    return json;
}



const Header = lazy(() => {
 

  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Header")), 100);
  });
});
const Footer = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Footer")), 500);
  });
});
const Page = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Page")), 500);
  });
});
const Avability = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Avability")), 500);
  });
});
const Shop = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Shop")), 500);
  });
});

const MyAccount = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./MyAccount")), 500);
  });
});



function App() {
  const [isLogged, setIsLogged]=useState(null);
  const [logData, setLogData]=useState(null);
  const [closeSessionAlert,setCloseSessionAlert]=useState(0);




  useEffect(()=>{
    if(sessionStorage.getItem('token'))
    {
      const data={
        token:sessionStorage.getItem('token'),
        id:parseJwt(sessionStorage.getItem('token')).user_id,
        email:parseJwt(sessionStorage.getItem('token')).email,
    
    
    }
            const getDateUser= checkTokenRequest("http://localhost/db/checkToken.php",data);
            if (getDateUser){
       
    
                getDateUser.then(  function(result) {
                  if (result.connected===true)
                  {
                
                  setIsLogged(parseJwt(sessionStorage.getItem('token')).user_id);
                  setLogData(parseJwt(sessionStorage.getItem('token')).email);
                  }
                  else 
                  {
                    setIsLogged(null);
                    setLogData(null);
                    
                  }
    })
    }
      
    }





/*if (sessionStorage.getItem('token'))
{

setIsLogged(parseJwt(sessionStorage.getItem('token')).user_id);
setLogData(parseJwt(sessionStorage.getItem('token')).email);
}
*/



  },[]);

  useEffect(()=>{
//setTimeout(setCloseSessionAlert(1),50000)
if (isLogged){const timer=setInterval(()=>{


setCloseSessionAlert(1)

},1500000);
//1500000
return ()=>clearTimeout(timer);}
  },[isLogged]);


const changePageTitle=(title)=>
{
document.title=title;
}


function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

 

  return (
  
    <Suspense fallback={<Loader/>}>
    
    <BrowserRouter>
    <Header
    isLogged={isLogged}
    setIsLogged={setIsLogged}
    logData={logData}
    setLogData={setLogData}
    />
    <Routes>
    <Route path='products/fotolustro' element={<Shop cpt={changePageTitle} title="System rezerwacji fotolustra na imprezy - mmevents.pl" isLogged={isLogged} setIsLogged={setIsLogged} setLogData={setLogData} text={"Fotolustro"}  />}/>

    <Route path='offer' element={<Page cpt={changePageTitle} title="Page" />}/>
      <Route path='avability' element={<Avability cpt={changePageTitle} title="dostępność terminu"/>}/>
      <Route path='/' element={<Page cpt={changePageTitle} title="Page"/>}/>
      <Route path='rules' element={<Rules cpt={changePageTitle} title="Regulamin strony"/>}/>
      <Route path='privacy' element={<Privacy cpt={changePageTitle} title="Polityka prywatności"/>}/>
      <Route path='/MyAccount'  element={<MyAccount cpt={changePageTitle} title="Moje konto" setIsLogged={setIsLogged} isLogged={isLogged} data={logData}  setLogData={setLogData} />}/>
      <Route path='/galery'  element={<Gallery cpt={changePageTitle} title="Galeria zdjęć" />}/>

    </Routes>
    <CookieConsent
  location="bottom"
  buttonText="Rozumiem!"
  cookieName="cookiebaner"
  style={{ background: "#ff01af" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
 Ta strona wykorzystuje pliki cookie. Używamy informacji w nich zawartych w celu zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Gromadzone pliki cookie mogą wykorzystywać także współpracujące z nami firmy celem analityki serwisu oraz dopasowania reklam. Korzystając ze strony akceptujesz wykorzystywanie cookies. {" "}
 
</CookieConsent>
{(closeSessionAlert&&isLogged&&logData&&sessionStorage.getItem('token'))?<CloseSession logData={logData} isLogged={isLogged} setLogData={setLogData} setIsLogged={setIsLogged} close={setCloseSessionAlert}/>:null}

    <Footer/>
    </BrowserRouter>
    

    </Suspense>
  );
}

export default App;
