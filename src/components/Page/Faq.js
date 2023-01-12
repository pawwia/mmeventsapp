import React from 'react';
import './Faq.css'
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
const Faq = (props) => {
    const toggleQuestion=()=>{
$("#ans"+props.id).slideToggle(300);

    }
    return ( 
<>
<div  id={"faq"+props.id} onClick={toggleQuestion} className='Questiontitle'>
<h2> <FontAwesomeIcon icon={faArrowDown} />{props.question}</h2>
</div>
<div id={"ans"+props.id} className='questionanswer' >
    <p>{props.answer}</p>
</div>
</>
     );
}
 
export default Faq;

