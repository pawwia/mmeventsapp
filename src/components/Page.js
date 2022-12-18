import React, {useState} from 'react';
import './Page.css';
import Faq from './Faq';
const Page = () => {
const [startFaqAnimation,setStartFaqAnimation]=useState(false);

    return ( 
        <div className="Page">
<div className='categoryShop'>
    <a href='#fotolustro' className='categoryElement'>Fotolustro</a>
    <a href='#personalizacja' className='categoryElement'>Personalizacja</a>
    <a href='#cennik' className='categoryElement'>Cennik</a>
    <a href='#kontakt'  className='categoryElement'>Kontakt</a>
    <a href='#faq' className='categoryElement'>FAQ</a>



</div>
<div className='categoryPage' id='fotolustro'>
<h1>Fotolustro</h1>

</div>
<div className='categoryPage' id='personalizacja'>
<h1>Personalizacja</h1>
    
</div>
<div className='categoryPage' id='cennik'>
<h1>Cennik</h1>

</div>
<div className='categoryPage' id='kontakt'>
<h1>Kontakt</h1>

</div>
<div className='categoryPage' id='faq'>
    <h1 >Najczęściej zadawane pytania</h1>
    <div class="questiondiv">
<div  className='Questiontitle'>
<h2> Ile trwa jedna sesja?</h2>
</div>

<Faq  answer="Jedna sesja trwa w zależności od długości animacji ok. 30 sekund do 1 minuty."/>

    </div>
    <div className='Questiontitle'>
<h2> Ile zdjęć drukuje się po sesji?</h2>
</div>
<Faq answer="    Po sesji drukujemy tyle zdjęć ile jest osób lub par na zdjęciu. Nie więcej jednak niż 10pasków  / 5 pocztówek"/>

    </div>

</div>

     );
}
 
export default Page;