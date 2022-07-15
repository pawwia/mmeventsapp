import React,{useState} from 'react';

const urlLogin='http://localhost/db/updateData.php';
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



const ShowUserDate = (props) => {

    const {id_user,name, surname,pesel,adress,tel}=props;
const [changeName, setChangeName]=useState(0);
const [changeSurName, setChangeSurName]=useState(0);
const [changeAdress, setChangeAdress]=useState(0);
const [changeTel, setChangeTel]=useState(0);

const [changedName, setChangedName]=useState(name);
const [changedSurName, setChangedSurName]=useState(surname);
const [changedAdress, setChangedAdress]=useState(adress);
const [changedTel, setChangedTel]=useState(tel);
const handleChangeName=()=>{
    const data={
name:changedName,
id:id_user,
which:"name"    
    };

enviarData(urlLogin,data);
    setChangeName(0);
}
const handleChangeSurName=()=>{
    const data={
        name:changedSurName,
        id:id_user,
        which:"surname"    
            };
        
        enviarData(urlLogin,data);
            setChangeSurName(0);
}
const handleChangeAdress=()=>{
    const data={
        name:changedAdress,
        id:id_user,
        which:"adress"    
            };
        
        enviarData(urlLogin,data);
            setChangeAdress(0);
}
const handleChangeTel=()=>{
    const data={
        name:changedTel,
        id:id_user,
        which:"tel"    
            };
        
        enviarData(urlLogin,data);
            setChangeTel(0);
            
}


    return (
        <>
<div className='TitleorderInfo'>Twoje dane</div>

<div className='orderinfoElement'>
    <span>Imię</span>
    <span>{changeName?<input type="text" value={changedName} onChange={e=>setChangedName(e.target.value)}/>:changedName}</span>
    <span>{changeName?<button onClick={handleChangeName}>Zatwierdź</button>:<button onClick={()=>setChangeName(1)} >Edytuj</button> }</span>
</div>
<div className='orderinfoElement'>
    <span>Nazwisko</span>
    <span>{changeSurName?<input type="text" value={changedSurName} onChange={e=>setChangedSurName(e.target.value)}/>:changedSurName}</span>
    <span>{changeSurName?<button onClick={handleChangeSurName}>Zatwierdź</button>:<button onClick={()=>setChangeSurName(1)} >Edytuj</button> }</span>
</div>
<div className='orderinfoElement'>
    <span>Adres</span>
    <span>{changeAdress?<input type="text" value={changedAdress} onChange={e=>setChangedAdress(e.target.value)}/>:changedAdress}</span>
    <span>{changeAdress?<button onClick={handleChangeAdress}>Zatwierdź</button>:<button onClick={()=>setChangeAdress(1)} >Edytuj</button> }</span>
</div>
<div className='orderinfoElement'>
    <span>Numer telefonu</span>
    <span>{changeTel?<input type="text" value={changedTel} onChange={e=>setChangedTel(e.target.value)}/>:changedTel}</span>
    <span>{changeTel?<button onClick={handleChangeTel}>Zatwierdź</button>:<button onClick={()=>setChangeTel(1)} >Edytuj</button> }</span>
</div>
<div className='orderinfoElement'>
    <span>Pesel</span>
    <span>{pesel}</span>
    <span></span>
</div>

</>

     );
}
 
export default ShowUserDate;