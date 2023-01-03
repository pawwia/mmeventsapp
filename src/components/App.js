import React, {Suspense, lazy, useState, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Loader from './Loader';
import MagicMirror from './MagicMirror';
import Home from './home';
import Rules from './footer/Rules';
import Privacy from './footer/Privacy';
import Gallery from './Page/gallery';
import CookieConsent from "react-cookie-consent";


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
  console.log(isLogged);

  useEffect(()=>{
    if(window.localStorage.getItem('id') )
    {
      setIsLogged(window.localStorage.getItem('id') )
    }


  },[]);


const changePageTitle=(title)=>
{
document.title=title;
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
    <Route path='products/fotolustro' element={<Shop cpt={changePageTitle} title="System rezerwacji fotolustra na imprezy - mmevents.pl" isLogged={isLogged} setIsLogged={setIsLogged} text={"Fotolustro"}  />}/>

    <Route path='offer' element={<Page cpt={changePageTitle} title="Page" />}/>
      <Route path='avability' element={<Avability cpt={changePageTitle} title="dostępność terminu"/>}/>
      <Route path='/' element={<Page cpt={changePageTitle} title="Page"/>}/>
      <Route path='rules' element={<Rules cpt={changePageTitle} title="Regulamin strony"/>}/>
      <Route path='privacy' element={<Privacy cpt={changePageTitle} title="Polityka prywatności"/>}/>
      <Route path='/MyAccount'  element={<MyAccount cpt={changePageTitle} title="Moje konto" setIsLogged={setIsLogged} isLogged={isLogged} data={logData}/>}/>
      <Route path='/galery'  element={<Gallery cpt={changePageTitle} title="Galeria zdjęć" />}/>

    </Routes>
    <CookieConsent
  location="bottom"
  buttonText="Jasne!"
  cookieName="cookiebaner"
  style={{ background: "#ff01af" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
 Ta strona wykorzystuje pliki cookie. Używamy informacji w nich zawartych w celu zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Gromadzone pliki cookie mogą wykorzystywać także współpracujące z nami firmy celem analityki serwisu oraz dopasowania reklam. Korzystając ze strony akceptujesz wykorzystywanie cookies. {" "}
 
</CookieConsent>
    <Footer/>

    </BrowserRouter>
    
    
    </Suspense>
  );
}

export default App;
