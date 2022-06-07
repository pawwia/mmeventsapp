import React, {Suspense, lazy, useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Loader from './Loader';
import MagicMirror from './MagicMirror';


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
    setTimeout(() => resolve(import("./Page")), 100);
  });
});
const Avability = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Avability")), 100);
  });
});
const Shop = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Shop")), 100);
  });
});

function App() {
  

  return (
  
    <Suspense fallback={<Loader/>}>
    <Header/>
    <BrowserRouter>
    <Routes>
    <Route path='products/fotolustro' element={<Shop text={"Fotolustro"}  />}/>

    <Route path='products' element={<Page/>}/>
      <Route path='avability' element={<Avability/>}/>
      <Route path='/' element={<Page/>}/>
      <Route path='/products/magicmirror' element={<MagicMirror />}/>

    </Routes>
    </BrowserRouter>
    <Footer/>
    
    
    </Suspense>
  );
}

export default App;
