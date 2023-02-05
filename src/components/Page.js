import React, {useState,useEffect, useRef} from 'react';
import './Page.css';
import Faq from './Page/Faq';
import Fotolustro from './Page/fotolustro';
import Contact from './Page/Contact';
import Pricing from './Page/Pricing';
import Reviews from './Page/reviews';
import $ from 'jquery';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Gallery from './Page/gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCircleArrowUp, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

import AditionalService from './Page/AditionalService';

const Page = (props) => {
    useEffect(()=>{
        props.cpt(props.title);
        },)
    
const ref = useRef(null);


const goUpFunc=()=>
{
    window.scrollTo(0, 0);

}
const menuForPhonesOn=()=>{

    setMenuForPhones(1);
}
const menuForPhonesOff=()=>{

  //  $(".openMenuPhone").slideUp(function (){setMenuForPhones(0);})
  //$(".openMenuPhone").hide("slide",{direction:"right"},1000,function (){setMenuForPhones(0);} )
  $(".openMenuPhone").animate({
    'margin-left' : "50%",
    'opacity' : '0',
    },500,function (){setMenuForPhones(0);});
}
const [menuForPhones,setMenuForPhones]=useState(0)

    return ( 
        <div className="Page">
            <nav className='menusBoth' >
<div className='categoryShop' id="menuMobile">
    <a href='#fotolustro'  id="men1" className='categoryElement'>Fotolustro</a>
    <a href='#wydruki' className='categoryElement'>Wydruki</a>
    <a href='#gadzety' className='categoryElement'>Gadżety</a>
    <a href='#animacje' className='categoryElement'>Animacje</a>
    <a href='#cennik' className='categoryElement'>Cennik</a>
    <a href='#opinie' className='categoryElement'>Opinie</a>
    <a href='#Galeria' className='categoryElement'>Galeria</a>
    <a href='#kontakt'  className='categoryElement'>Kontakt</a>
    <a  href='#faq' className='categoryElement'>FAQ</a>

</div>
</nav>
<div className='categoryPage' >
<h1 className="loaded">Magic Moments Events</h1>
<p className='introductionMirror'>
   W Magic moments events zajmujemy się zapewnianiem świetnej zabawy na Waszych imprezach! Nasze fotolustro świetnie sprawdzi się na weselach, urodzinach, przyjęciach, studniówkach, festynach,  imprezach firmowych i innych eventach. Poza szaloną zabawą otrzymacie od nas pamiątkę w postaci wydruku wykonanych zdjęć już w kilka sekund. Pozytywne emocje upamiętnione na zdjęciach prosto z Waszej imprezy!
</p>
<Fotolustro/>

</div>

<div className='categoryPage' id='cennik'>
<AnimationOnScroll animateIn="animate__tada">
<h1>Cennik Fotolustro - 2023</h1></AnimationOnScroll>


<div className='c'>
<Pricing
 id={1} 
 hours={2}
 price={899}
 guestbook={0}
 slupki={0} 
 km={"na terenie Szczecina GRATIS!"}
 />
 <Pricing
 id={2} 
 hours={3}
 price={1099}
 guestbook={0}
 slupki={1} 
 km={"do 20 Km od Szczecina GRATIS!"}

 />
 <Pricing
 id={3} 
 hours={4}
 price={1299}
 guestbook={1}
 slupki={1} 
 km={"do 50 Km od Szczecina GRATIS!"}

 />
 <Pricing
 id={4} 
 hours={5}
 price={1499}
 guestbook={1}
 slupki={1} 
 km={"do 100 Km od Szczecina GRATIS!"}

 />
 </div>

 </div>
<div>.</div>
<AnimationOnScroll animateIn="animate__tada">
<h2>Dodatkowe usługi</h2></AnimationOnScroll>
<div className="addSrv">

<AditionalService
 guestBook={80}
 guestBookInd={100}
 addHour={250}
 km={1.6}

 />
</div>
<div className='categoryPage' id='opinie'>

<Reviews/>
</div>
<div className='categoryPage' id='kontakt'>
<AnimationOnScroll animateIn="animate__tada">
<h2>Kontakt i rezerwacja</h2></AnimationOnScroll>



<Contact/>

</div>

<div className='categoryPage' >

<AnimationOnScroll animateIn="animate__tada">
 <h1 >Galeria zdjęć</h1></AnimationOnScroll>

<Gallery/>
</div>

<div className='categoryPage' id='faq' ref={ref}>
<AnimationOnScroll animateIn="animate__tada">
 <h1 >Najczęściej zadawane pytania</h1></AnimationOnScroll>

    <div className="questiondiv">


<Faq 
id={1}
 question="Ile trwa jedna sesja?"
answer="Jedna sesja trwa w zależności od długości animacji ok. 30 sekund do 1,5 minuty."
/>

    
<Faq 
id={2}
question="Ile zdjęć drukuje się po sesji?"
answer="    Po sesji drukujemy tyle zdjęć ile jest osób lub par na zdjęciu. Nie więcej jednak niż 10pasków  / 5 pocztówek"
/>
<Faq 
id={3}
question="Jak zarezerwować fotobudkę?"
answer="Napisz do nas lub zarezerwuj korzystając z naszego systemu rezerwacji. W ciągu 1 dnia roboczego skontaktujemy się z Tobą w celu podpisania umowy."
/>
<Faq 
id={4}
question="Czy dojazd z fotolustrem jest płatny"
answer="Nasze pakiety opisują ilosć darmowych kilometrów. Po przekroczeniu ilości darmowych kilometrów doliczamy stawkę paliwową.  "
/>
<Faq 
id={5}
question="Ile miejsca potrzeba na fotolustro?"
answer="Potrzebujemy przestrzeń około 2m x 2m "
/>
<Faq 
id={6}
question="Co jest potrzebne na miejscu do fotolustra?"
answer="Dostęp do prądu (230V, 50Hz) oraz  stolik na gadżety, jeśli w pakiecie jest księga gości to dodatkowo mały stolik na nią."
/>
<Faq 
id={7}
question="Czy montaż i demontaż także jest płatny?"
answer="Nie. Montaż i demontaż zawarty jest w cenie wynajmu fotolustra i następuje przed oraz po czasie wynajmu określonego w umowie. "
/>
<Faq 
id={8}
question="Czy fotolustro może stać na zewnątrz?"
answer="Może jeżeli na zewnątrz jest przynajmniej 15 stopni. Ze względu na specyfikę pracy drukarki poniżej tej temperatury drukarka nie będzie w stanie pracować. Fotolustro musi być jednak pod dachem ( możemy także za dodatkową opłatą wynająć namiot)."
/>
<Faq 
id={9}
question="Czy na miejscu jest obsługa?"
answer="Tak, w 2 osoby czuwamy nad prawidłową pracą fotolustra, obsługujemy, podajemy wydruki i pilnujemy, żeby każdy dobrze wyszedł na zdjęciu."
/>
<Faq 
id={10}
question="Który pakiet fotolustra powinniśmy wziąć?"
answer="Czas wynajmu zależy od okoliczności oraz budżetu. Przy imprezach do 100 osób polecamy pakiet 2/3 godzin, powyżej- pozostałe pakiety. W przypadku wesel zawsze warto wziąć wyższy pakiet na wypadek sytuacji w których goście będą 'odciągnięci' od fotobudki np przez tort weselny czy inne atrakcje :)"
/>
<Faq 
id={11}
question="W jakich godzinach powinno być dostępne fotolustro na imprezie?"
answer="Wszystko zależy od rodzaju imprezy i wybranego pakietu. Najlepszy czas na rozpoczęcie pracy z fotobudką jest po posiłku,a w przypadku wesel po pierwszym tańcu. Najlepszy czas na zakończenie jest przed oczepinami.  "
/>
<Faq 
id={12}
question="Czy gadżety są w cenie?"
answer="Tak, w każdym z naszych pakietów gadżety są w cenie usługi.  "
/>
<Faq 
id={13}
question="Czy zapewniacie akcesoria do księgi gości? "
answer="Tak, jeśli w pakiecie jest księga gości to zapewniamy pisaki, kleje, tasiemki, naklejki i inne potrzebne akcesoria do wklejania zdjęć i wpisywania życzeń. "
/>

<Faq 
id={14}
question="Czy możemy mieć swoją księgę gości?"
answer="Jak najbardziej natomiast w takim przypadku akcesoria do księgi są we własnym zakresie. "
/>
<Faq 
id={15}
question="Jak możemy spersonalizować usługę?"
answer="Po rezerwacji terminu macie dostępne na swoim koncie wszystkie narzędzia do personalizacji usługi. Można tam wybrać tła, animacje, szablon wydruku, imiona na szablonach wydruku. Możecie złożyć zapytanie o zmianę czasu startu fotolustra a także zobaczyć jaka kwota została już wpłacona a jaka pozostała do zapłaty. "
/>
<Faq 
id={16}
question="Czy można wynająć fotolustro bez obsługi?"
answer="Nie jest to możliwe. W przypadku zaniku prądu, wymiany papieru, awarii czy po prostu złośliwości rzeczy martwych nie będzie na miejscu nikogo kto będzie mógł to naprawić."
/>
<Faq
id={17}
question="Czy konieczne jest podpisanie umowy na spotkaniu?"
answer="Umowę podpisujemy zdalnie przez portal Autenti- potwierdzenie poprzez email. Spotkanie nie jest wymagane."

/>
<Faq
id={18}
question="Na jakim obszarze działacie?"
answer="Działamy na obszarze województwa zachodniopomorskiego oraz lubuskiego. "

/>
<Faq
id={19}
question="Czy dostaniemy dostęp do zdjęć z fotolustra?"
answer="Tak, w ciagu kilku dni po imprezie udostępniamy galerię zdjęć online z której będzie można pobrać zdjęcia. Zdjęcia do pobrania będą przez 1 miesiąc od daty udostępnienia.  "

/>
    </div>

</div>
<div className='goUp' onClick={goUpFunc}><FontAwesomeIcon inverse icon={faCircleArrowUp}/></div>
<div className='menuForPhone' onClick={menuForPhonesOn}><FontAwesomeIcon icon={faBars} size="2x" inverse/></div>
{menuForPhones?<nav className="openMenuPhone">
    <div className="phoneMenuFirstBar">
        <FontAwesomeIcon onClick={menuForPhonesOff} icon={faXmark} size="2x" inverse />
        </div>
        <div className="phoneMenuContent">
            <ul >
 <li className='phoneCategoryEl' onClick={menuForPhonesOff}> <a href='#fotolustro'  >Fotolustro</a></li>
<li className='phoneCategoryEl' onClick={menuForPhonesOff}><a href='#wydruki'>Wydruki</a></li>
<li className='phoneCategoryEl' onClick={menuForPhonesOff}> <a href='#gadzety' >Gadżety</a></li>
<li className='phoneCategoryEl' onClick={menuForPhonesOff}><a href='#animacje' >Animacje i tła</a></li>
<li className='phoneCategoryEl' onClick={menuForPhonesOff}><a href='#cennik' >Cennik</a></li>
<li className='phoneCategoryEl' onClick={menuForPhonesOff}><a href='#opinie' >Opinie</a></li>
<li className='phoneCategoryEl' onClick={menuForPhonesOff}><a href='#Galeria' >Galeria zdjęć</a></li>
<li className='phoneCategoryEl' onClick={menuForPhonesOff}><a href='#kontakt'  >Kontakt</a></li>
<li className='phoneCategoryEl' onClick={menuForPhonesOff}><a  href='#faq' >FAQ</a></li>

            </ul>
            </div>
    
     </nav>:null}
</div>

     );
}
 
export default Page;