import React, {useState} from 'react';
import './ShowOrder.css';
import OneOrder from './oneOrder';


const ShowOrder = (props) => {
    const [oneOrderState, setOneOrderState]=useState(0);
    

    const {
        id,user_id,names,statusa,add_date,event_date,start_hour,duration,price,deposit,bg_color,animation,
        layout,guestbook,guestbook_type,adress,object_name }=props;
        let statusDec=null;
        
        switch(statusa){
            case 0:statusDec="Utworzony";break;
            case 1:statusDec="Zarejstrowany";break;
            case 2:statusDec="Oczekiwanie na umowę";break;
            case 3:statusDec="potwierdzona";break;
            case 4:statusDec="oczekująca";break;
            case 5:statusDec="Wykonana";break;
            case 0:statusDec="Z";break;


        }
        let DurationHour
        switch(duration){
            case 1:DurationHour="godzinę";break;
            case 2:DurationHour="godziny";break;
            case 3:DurationHour="godziny";break;
            case 4:DurationHour="godziny";break;
            case 5:DurationHour="godzin";break;
            case 6:DurationHour="godzin";break;
            default:DurationHour="godzin";break;


        }
        const toggleOneOrderButton=()=>
{
setOneOrderState(!oneOrderState);

}
    return (

      <div className='anOrder'>
<div className='statusOfOrder'>{statusDec}</div>
<div className='dateOfOrder'>Dnia {event_date} </div>
<div className='hourOfOrder'>od godziniy {start_hour} </div>
<div className='durationOfOrder'>przez {duration} {DurationHour} </div>
<div className='adressOfOrder'>W {object_name}  </div>
<div className='showOrderDetails' onClick={toggleOneOrderButton}>Pokaż więcej szczegółów  </div>
{oneOrderState?<OneOrder 
names={names}
id={id} user_id={user_id} statusDec={statusDec} add_date={add_date} event_date={event_date} start_hour={start_hour} duration={duration} price={price} deposit={deposit} bg_color={bg_color} animation={animation} 
layout={layout} guestbook={guestbook} guestbook_type={guestbook} adress={adress} object_name={object_name} DurationHour={DurationHour}
close={toggleOneOrderButton} />:null}

       </div>


       
      );
}
 
export default ShowOrder;