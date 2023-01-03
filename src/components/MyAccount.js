import React, {useState,useEffect} from 'react';
import ShowOrder from './ShowOrder';
import { Link } from 'react-router-dom';
import './MyAccount.css'
import ShowUserData from './ShowUserData';

const urlLogin='http://localhost/db/getOrders.php';
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

const urlDate='http://localhost/db/getDate.php';
const getDate=async(url,data)=>{

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

const MyAccount = (props) => {
    const [userData,setUserData]=useState(null);
    const [switcher,setSwitcher]=useState(0);
    const [dataVar,setDataVar]=useState(null);

    const [error,setError]=useState(null);
const [orders,setOrders]=useState(null);

useEffect(()=>{
    props.cpt(props.title);
    },[])
     
useEffect(()=>{

    if (props.isLogged)
    {
        
      
    
            const data={
        'user_id':props.isLogged,
            }
            setDataVar(data);
           const respuestajson=   enviarData(urlLogin,data);
        setError(respuestajson.error);
        if (respuestajson){
   

    respuestajson.then( function(result) {
        setOrders(result);
 })    
 }

 
           
    


        
    
    }

},[props.isLogged])
    
    const showUserDate=(urlDate,data)=>{

        const getDateUser=   getDate(urlDate,data);
        setError(getDateUser.error);
        if (getDateUser){
   

            getDateUser.then( function(result) {
setUserData(result);
 })    
 }
    }


console.log("Orders:");

console.log(orders);

const Logout=()=>{
    setOrders(null);
    localStorage.removeItem('id');

    props.setIsLogged(null);


}

    return (  
        props.isLogged?
        <div className='MyAccountPage'>
            <div className='MyMenu'>
            <div className='MyMenuElement' onClick={()=>setSwitcher(0)}>Moje rezerwacje</div>
            <div className='MyMenuElement' onClick={()=>{ showUserDate(urlDate,dataVar); setSwitcher(1); ;}}>Moje dane</div>
            <div className='MyMenuElement' onClick={Logout}>Wyloguj</div>

            </div>
       <p className='MyAccontDescription'>Moje </p>
       <div className='ordersResult'>

   
{

!switcher?
orders?
orders.map((order)=>
<ShowOrder
key={order.id}
names={order.names}
user_id={order.user_id}
id={order.id}
statusa={order.status}
add_date={order.add_date}
event_date={order.event_date}
start_hour={order.start_hour}
duration={order.duration}
price={order.price}
deposit={order.deposit}
bg_color={order.bg_color}
animation={order.animation}
layout={order.layout}
guestbook={order.guestbook}
guestbook_type={order.guestbook_type}
adress={order.adress}
object_name={order.object_name}
/>

):<div className='errorAcount'>Niestety nie udało się nam załadować danych. Skontaktuj się z administratorem lub spróbuj ponownie później.</div>


:
userData?
   <ShowUserData
name={userData.name}
surname={userData.surname}
pesel={userData.pesel}
adress={userData.adress}
tel={userData.tel}
id_user={userData.id_user}
ref={showUserDate}
   />:<div className='errorAcount'>Niestety nie udało się nam załadować danych. Skontaktuj się z administratorem lub spróbuj ponownie później.</div>



}


</div>

        </div>:<div className='errorAcount'>Zaloguj się i spróbuj ponownie</div>

    );
}
 
export default MyAccount;