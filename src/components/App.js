import React, {Suspense, lazy, useState, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Loader from './Loader';
import MagicMirror from './MagicMirror';
import Home from './home';


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


  },[])
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
    <Route path='products/fotolustro' element={<Shop isLogged={isLogged} setIsLogged={setIsLogged} text={"Fotolustro"}  />}/>

    <Route path='offer' element={<Page/>}/>
      <Route path='avability' element={<Avability/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/magicmirror' element={<MagicMirror  />}/>
      <Route path='/MyAccount' element={<MyAccount setIsLogged={setIsLogged} isLogged={isLogged} data={logData}/>}/>

    </Routes>
    <Footer/>

    </BrowserRouter>
    
    
    </Suspense>
  );
}

export default App;
