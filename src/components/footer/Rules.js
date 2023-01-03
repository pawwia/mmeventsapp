import React,{useEffect} from 'react';
import './Rules.css'
const Rules = (props) => {
  useEffect(()=>{
   if (props.cpt &&props.title) props.cpt(props.title);
    },[])
    return (
        <div>
<h1> Regulamin witryny</h1>

        </div>
      );
}
 
export default Rules;