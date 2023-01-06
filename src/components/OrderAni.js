import React, {useEffect,useState} from 'react';
import './OrderAni.css';
import Parser from 'html-react-parser';    

const urlShowBg='http://app.mmevents.pl/db/showAllAni.php';
const showAllBg=async(url)=>{

const resp=await fetch(url,{
headers:{
  'Content-Type': 'application/json'

}  

    });
 


    const json = await resp.json();
    return json;
}
const urlBg='http://app.mmevents.pl/db/updateAni.php';
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
const OrderAni = (props) => {
    const [tempBg, setTempBg]=useState(props.changeBg);
    const [dataBg, setDataBg]=useState();
    const [actButton, setActButton]=useState(0)
    const [allBg,setAllBg]=useState();
    const [showNumber,setShowNumber]=useState(1);

    var stringToHTML = function (str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
    };
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
}
else alert("nastąpił błąd. Skontaktuj się z administratorem.")  }
    return ( 
        <div className='popup' >  
        <div className='popup_open'> 
        <div className='TitleBar'>
          <span className='Title'><span>Wybór animacji</span></span>
          <span className='Close'><span onClick={props.close}>X</span></span>
          </div>
          <div className='contentBar'>
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
              {allBg?
              <div className='animations'>
                  <div className='showAniImg'>
                  {Parser(allBg[showNumber-1].url)}

                  </div>
                 <div className='actualUpdate'>
                     <div className='showBgInfo'>
Ta animacja: {allBg[showNumber-1].name}

                     </div>
                  <span>
Aktualnie wybrana animacja: {tempBg}
                </span>
                {actButton? <span onClick={setNewBg}>
                  Zmieniamy animację. Proszę czekać.
              </span>:
                <span onClick={setNewBg}>
               Wybierz tą animację
           </span>}


                  </div>
                  </div>
              
              :null}
      
      </div>
      </div>
        </div> 
    
    );
}
 
export default OrderAni;