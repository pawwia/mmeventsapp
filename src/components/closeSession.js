import React, {useEffect} from 'react';
import './CloseSession.css';
const enviarData=async(url,data)=>{

    const resp=await fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    
    }  
    
        });
     const json = await resp.json();
        return json;
    }
const CloseSession = (props) => {


    useEffect(()=>{
        //setTimeout(setCloseSessionAlert(1),50000)
        if(props.isLogged){const timer=setTimeout(()=>{
        
        
            const data={
                id:props.isLogged,
            }

            if (enviarData("http://localhost/db/cleartoken.php", data))
            {
            sessionStorage.removeItem('token');
            props.setLogData(null);
                props.setIsLogged(null);
            }
        
            props.close(0);
            
            

        },60000);
        //1500000
        return ()=>clearTimeout(timer);}
          },);





function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
const renewToken=()=>{


    if(sessionStorage.getItem('token'))
    {
      const data={
        token:sessionStorage.getItem('token'),
        id:parseJwt(sessionStorage.getItem('token')).user_id,
        email:parseJwt(sessionStorage.getItem('token')).email,
    
    
    }
            const getDateUser= enviarData("http://localhost/db/checkToken.php",data);
            if (getDateUser){
       
    
                getDateUser.then(  function(result) {
                  if (result.connected===true)
                  {
                
                  props.setIsLogged(parseJwt(sessionStorage.getItem('token')).user_id);
                  props.setLogData(parseJwt(sessionStorage.getItem('token')).email);
                  props.close(0);

                  }
                 
    })
    }}
      
    



}


    return ( 
        
        <div className='closeSession'>
<div className='closeSessionWindow'>
<h2> Czy nadal tu jesteś? </h2>
<p> Od jakiegoś czasu nie zarejstrowaliśmy Twojego ruchu na stronie. Twoja sesja może zaraz wygasnąć. Odswież sesję aby kontynuować przeglądanie strony.</p>
<button onClick={renewToken}>Odśwież sesję</button>

</div>


        </div>
    );
}
 
export default CloseSession;