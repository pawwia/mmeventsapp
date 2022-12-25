import React, {useState, useRef} from 'react';
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

const Page = () => {

    
const [startFaqAnimation,setStartFaqAnimation]=useState(false);
const ref = useRef(null);


const goUpFunc=()=>
{
    window.scrollTo(0, 0);

}

    return ( 
        <div className="Page">
            <div className='menusBoth' >
<div className='categoryShop' id="menuMobile">
    <a href='#fotolustro'  id="men1" className='categoryElement'>Fotolustro</a>
    <a href='#wydruki' className='categoryElement'>Wydruki</a>
    <a href='#gadzety' className='categoryElement'>Gadżety</a>
    <a href='#animacje' className='categoryElement'>Animacje</a>
    <a href='#tla' className='categoryElement'>Tła</a>
    <a href='#cennik' className='categoryElement'>Cennik</a>
    <a href='#opinie' className='categoryElement'>Opinie</a>
    <a href='#kontakt'  className='categoryElement'>Kontakt</a>
    <a  href='#faq' className='categoryElement'>FAQ</a>

</div>
</div>
<div className='categoryPage' >
<AnimationOnScroll  animateIn="animate__tada"><h1>Magic Moments Events</h1></AnimationOnScroll>
<p className='introductionMirror'>
   W Magic moments events zajmujemy się zapewnianiem świetnej zabawy na Waszych imprezach! Nasze fotolustro świetnie sprawdzi się na weselach, urodzinach, przyjęciach, studniówkach, festynach,  imprezach firmowych i innych eventach. Poza szaloną zabawą otrzymacie od nas pamiątkę w postaci wydruku wykonanych zdjęć już w kilka sekund. Pozytywne emocje upamiętnione na zdjęciach prosto z Waszej imprezy!
</p>
<Fotolustro/>

</div>

<div className='categoryPage' id='cennik'>
<AnimationOnScroll animateIn="animate__tada">
<h1>Cennik</h1></AnimationOnScroll>


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
<div className='categoryPage' id='opinie'>

<Reviews/>
</div>
<div className='categoryPage' id='kontakt'>
<AnimationOnScroll animateIn="animate__tada">
<h1>Kontakt i rezerwacja</h1></AnimationOnScroll>



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

    <div class="questiondiv">


<Faq 
id={1}
 question="Ile trwa jedna sesja?"
answer="Jedna sesja trwa w zależności od długości animacji ok. 30 sekund do 1 minuty."
/>

    
<Faq 
id={2}
question="Ile zdjęć drukuje się po sesji?"
answer="    Po sesji drukujemy tyle zdjęć ile jest osób lub par na zdjęciu. Nie więcej jednak niż 10pasków  / 5 pocztówek"
/>
<Faq 
id={3}
question="Jak zarezerwować fotobudkę?"
answer="Napisz do nas lub zarezerwuj korzystając z naszego systemu rezerwacji. Celem potwierdzenia rezerwacji wymagana jest wpłata zadatku. Po wpłacie zadku mamy pewność, że fotolustro jest danego dnia dostępne tylko dla Ciebie."
/>
<Faq 
id={4}
question="Czy dojazd z fotolustrem jest płatny"
answer="Nasze pakiety opisują ilosć darmowych kilometrów. Po przekroczeniu ilości darmowych kilometrów doliczamy stawkę paliwową także widniejącą na stronie :) "
/>
<Faq 
id={5}
question="Ile miejsca potrzeba na fotolustro?"
answer="Potrzebujemy przestrzeń około 2m x 2m "
/>
<Faq 
id={6}
question="Co jest potrzebne na miejscu do fotolustra?"
answer="Wymagane jest podłączenie do prądu w odległości do 2m od miejsca gdzie ma stanąć fotolsutro. Zwykle także prosimy o stolik na gadżety i jeśli bierzecie to drugi stolik na księgę gości. "
/>
<Faq 
id={7}
question="Czy montaż i demontaż także jest płatny?"
answer="Nie. Umawiamy się na konkretny przedział czasowy w którym fotolustro jest gotowe i robi zdjęcia. Przed imprezą przyjeżdżamy ok. 40 min wcześniej aby wszystko rozłożyć. Po imprezie będziemy się pakować około 20 min. "
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
answer="To wszystko zależy od ilości gości oraz budżetu. W przypadku małych wesel lub raczej obiadów w ramach wesela ( 30-40 osób) polecamy pakiet 2 godziny. Wesela do 90-100 osób powinny wybrać min. 3 godziny. Powyżej 100 osób - min. 4 godziny. Generalnie fotobudka na weselach rzadko kiedy stoi pusta zatem nie powinniście się martwić, że weźmiecie za dużo a przy większej ilości godzin jest lepszy komfort, bo jedni goście robią sobie zdjęcie podczas gdy inni się bawią. Jeżeli czas jest bardzo krótki zwykle jest sytuacja, że wszyscy goście schodzą z parkietu aby zdążyć sobie zrobić zdjęcie."
/>
<Faq 
id={11}
question="W jakich godzinach powinno być dostępne fotolustro na imprezie?"
answer="To zależy od imprezy. Na weselach polecamy start o około 19-20 - start po obiedzie, koniec przed otrzepinami; Na urodzinach i innych imprezach również rekomendujemy start po głównym posiłku. "
/>
<Faq 
id={12}
question="Czy obecność asystentów oraz gadżety są dodatkowo płatna?"
answer="Nie, zarówno asysta w obsłudze, przygotowanie stanowiska jak i gadżety są już wliczone w cenę usługi. "
/>
<Faq 
id={13}
question="Czy jeśli mamy w pakiecie księgę gości to musimy dokupywać akcesoria do niej - kleje, pisaki itp?"
answer="Jeśli my zapewniamy księgę gości to zapewniamy także wszystkie akcesoria. Na miejscu mamy dla gości tasiemki, pisaki, kleje i inne rzeczy do przyzdobienia swoich życzeń.  Często jednak pary dają nam swoje rzeczy np. indywidualnie zrobione naklejki :) "
/>

<Faq 
id={14}
question="Czy konieczne jest podpisanie umowy na spotkaniu?"
answer="Umowę podpisujemy zdalnie przez portal Autenti- potwierdzenie poprzez email. Spotkanie nie jest wymagane."
/>
<Faq 
id={15}
question="Jak możemy spersonalizować usługę?"
answer="Po rezerwacji terminu macie dostępne na swoim koncie wszystkie narzędzia do personalizacji usługi. Można tam wybrać tła, animacje, szablon wydruku, imiona na szablonach wydruku. Możecie złożyć zapytanie o zmianę czasu startu fotolustra a także zobaczyć jaka kwota została już wpłacona a jaka pozostała do zapłaty. "
/>
<Faq 
id={16}
question="Czy można wynająć fotolustro bez obsługi aby zaoszczędzić na kosztach?"
answer="Nie wynajmujemy już samego fotolustra. Dlaczego? Po pierwsze w przypadku zacięcia lub skończenia się papieru ktoś by musiał umieć go wymieniać. Po drugie w razie zacięcia się oprogramowania - ktoś znów musiałby umieć skonfigurować je ponownie. Z naszego doświadczenia wynika, że jeśli nie ma nikogo przy fotolustrze mało kto robi sobie zdjęcia, a też nie są najlepszej jakości ze względu na to, że nikt nie poprawia tła, nie motywuje gości do szybszej zmiany gadżetów itp :)  "
/>

    </div>

</div>
<div className='goUp' onClick={goUpFunc}>▲</div>
</div>

     );
}
 
export default Page;