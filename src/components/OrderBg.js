import React, {useEffect,useState} from 'react';
import './OrderBg.css';
const urlShowBg='http://localhost/db/showAllBg.php';
const showAllBg=async(url)=>{

const resp=await fetch(url,{
headers:{
  'Content-Type': 'application/json'

}  

    });
 


    const json = await resp.json();
    return json;
}
const urlBg='http://localhost/db/updateBg.php';
const updateBg=async(url,data)=>{

const resp=await fetch(url,{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-Type': 'application/json'
}     });
   const json = await resp.json();
    return json;
}
const OrderBg = (props) => {
    const [tempBg, setTempBg]=useState(props.changeBg);
    const [dataBg, setDataBg]=useState();
    const [actButton, setActButton]=useState(0)
    const [allBg,setAllBg]=useState();
    const [showNumber,setShowNumber]=useState(1);
     useEffect(()=>{
        
               const respuestajson=showAllBg(urlShowBg);
            if (respuestajson){
       
    
        respuestajson.then( function(result) {
            
    
            setAllBg(result);
    
     })    
   
     }
    
    
    },[]);
    const setNewBg=()=>{
        setActButton(1);
const newBg= allBg[showNumber-1].name;
const updateBgv={
    bg:newBg,
    id:props.id
}
if (updateBg(urlBg,updateBgv))
{
setTempBg(newBg);
props.changeBgfunc(newBg);
setActButton(0);
props.close();
}
else alert("nastąpił błąd. Skontaktuj się z administratorem.")  }
    return ( 
        <div className='popup' >  
        <div className='popup_open'> 
        <div className='TitleBar'>
          <span className='Title'><span>Wybór tła</span></span>
          <span className='Close'><span onClick={props.close}>X</span></span>
          </div>
          <div className='contentBar'>
              {allBg?
              <div>
                  <div className='showBgImg'>
                  <img className="bgimage" src={require('../images/backgrounds/'+allBg[showNumber-1].img)} />
                 {showNumber>1? <div className='leftArrowBg' onClick={()=>{setShowNumber(showNumber-1)}}></div>:null}

                 {showNumber<allBg.length? <div className='rightArrowBg' onClick={()=>{setShowNumber(showNumber+1)}}></div>:null}
                  </div>

                 <div className='actualUpdate'>
                     <div className='showBgInfo'>
To tło: {allBg[showNumber-1].name}, {allBg[showNumber-1].type}

                     </div>
                  <span>
Aktualnie wybrane tło: {tempBg}
                </span>
                {actButton? <span onClick={setNewBg}>
                  Zmieniamy tło. Proszę czekać.
              </span>:
                <span onClick={setNewBg}>
               Wybierz to tło 
           </span>}


                  </div>
                  </div>
              
              :null}
          {allBg?
<div className='buttonsAll'>
   {showNumber>1?<div className='bgButtons'> <button onClick={()=>{setShowNumber(showNumber-1)}}>Cofnij</button></div>:null}
{allBg.map(result=>
    <div className='bgButtons'><button onClick={()=>{setShowNumber(result.id)}}>{result.name}</button></div>
    )}
   {showNumber<allBg.length?<div className='bgButtons'> <button onClick={()=>{setShowNumber(showNumber+1)}}>Dalej</button></div>:null}

    </div>

:null
          }
      </div>
      </div>
        </div> 
    
    );
}
 
export default OrderBg;