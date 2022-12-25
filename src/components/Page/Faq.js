import React from 'react';
import './Faq.css'
import $ from 'jquery';

const Faq = (props) => {
    const toggleQuestion=()=>{
$("#ans"+props.id).slideToggle(300);

    }
    return ( 
<>
<div  id={"faq"+props.id} onClick={toggleQuestion} className='Questiontitle'>
<h2> 🠋{props.question}</h2>
</div>
<div id={"ans"+props.id} className='questionanswer' >
    <p>{props.answer}</p>
</div>
</>
     );
}
 
export default Faq;

