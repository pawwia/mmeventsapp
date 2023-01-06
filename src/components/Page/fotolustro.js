import React from 'react';
import { Link } from 'react-router-dom';
import './fotolustro.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cta from './cta';
import guestbook1 from '../../images/fotolustro/guestbook.JPG'
import guestbook2 from '../../images/fotolustro/guestbook2.jpg'
import guestbook3 from '../../images/fotolustro/guestbook3.jpg'
import guestbook4 from '../../images/fotolustro/guestbook4.jpg'
import fotolustro from '../../images/fotolustro/fotolustro.jpg'
import fotolustro2 from '../../images/fotolustro/fotolustro2.jpg'
import fotolustro4 from '../../images/fotolustro/fotolustro4.jpg'
import gadgets from '../../images/fotolustro/gadgets.jpg'
import gadgets2 from '../../images/fotolustro/gadgets2.jpg'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Fotolustro = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: {}
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return ( 
        <div className='MagicMirror'>

<div className=' magicElement fotolustro'>
<div className='fotolustroAll'>
<div className='textfotolustro' id="fotolustro">

    <h3 className="loaded"  style={{textAlign:"left"}}>Fotolustro</h3>
<p>
Fotolustro to nowoczesna forma znanej dotychczas wszystkim fotobudki. Różni się przede wszystkim wyglądem - do złudzenia przypomina wielkie lustro. Przyozdobione jest elegancką srebrną ramą, którą możemy podświetlić w dowolnym kolorze. Posiada dotykowy, interaktywny ekran, który wyświetla zabawne animacje, które poprowadzą Was przez cały proces robienia zdjęć. Dzięki tematycznym animacjom fotolustro świetnie sprawdzi się na każdego rodzaju imprezie!  Mamy aż 8 animacji na różne okazje: weselne, imprezowe, dziecięce , świąteczne, halloweenowe oraz uniwersalne także w języku angielskim. Tak jak w tradycyjnej fotobudce zdjęcia drukowane są już w kilka sekund po ich wykonaniu! Fotolustro samo poprowadzi Was przez cały proces robienia zdjęcia, które następnie możecie dowolnie personalizować- dodawać podpisy oraz emotikony. Gotowe wyruki zdjęć możecie wkleić do pamiątkowej księgi gości i opatrzyć je swoimi podpisami i życzeniami.  Do fotolustra możemy dostawić eleganckie srebrne słupki oraz czerwony dywan dzięki czemu poczujecie się jak prawdziwe gwiazdy!  
</p>


</div>
<div className='imgfotolsutro'><img src={fotolustro} /></div>

</div>
    
</div>
<div id="ksiegi" className='magicElement guestbook'>

    
   
    <div className='fotolustroAll'>

    <div className='imgwydruki'><img src={fotolustro4} /></div>
<div className='textwydruki' id="wydruki">
<AnimationOnScroll animateIn="animate__tada"><h3 style={{textAlign:"left"}}>Wydruki</h3></AnimationOnScroll>

<p>
Nasze <b>fotolustro</b> daje Wam możliwość wyboru formatu zdjęcia- paski 5x15cm oraz pocztówki 10x15cm. Nie musicie decydować sie na jeden format przez całą imprezę - przed wykonaniem zdjęcia sami wybieracie który format wydruku chcecie. Dzięki profesjonalnym sprzętom jakie posiada nasza fotobudka jakość zdjęć oraz wydruków jest wręcz idealna! W każdym z naszych pakietów ilość wydruków jest nielimitowana więc nikt nie zostanie bez wydruku. Posiadamy duży wybór szablonów wydruków a także możemy wykonać personalizowane projekty z Waszym logiem lub pomysłem bez dodatkowych opłat :) Po każdej imprezie otrzymacie od nas galerię online wykonanych zdjęć, które będziecie mogli pobrać w wersji cyfrowej. 

</p>
<AnimationOnScroll animateIn="animate__tada"><h3 id="gadzety" style={{textAlign:"left"}}>Gadżety</h3></AnimationOnScroll>
<p>
    
Każdy pakiet zawiera unikalne gadżety imprezowe, które jeszcze bardziej uatrakcyjniom Wasze zdjęcia. Przebierajcie się w kapelusze, okulary i inne szalone akcesoria. Jeśli planujecie imprezę tematyczną to jesteśmy w stanie zapewnić Wam gadżety w tematyce imprezy.  
</p>
</div>


    </div>



</div>
<div id="gadzety" className='magicElement gadgets'>

            <div className='fotolustroAll'>
<div className='textfotolustro' id="animacje">
<AnimationOnScroll  animateIn="animate__tada"><h3 style={{textAlign:"left"}}>Animacje</h3></AnimationOnScroll>
<p>
W odróżnieniu od fotobudki nasze fotolustro wyświetla tematyczne, dźwiękowe animacje, które dostosują się do każdego typu imprezy. Przeprowadzą one Was przez całą sesję robienia zdjęć dzięki czemu lustro jest praktycznie bezobsługowe. Nasze fotolustro posiada aż 8 animacji:  dwie animacje weselne, dwie imprezowe które świetnie sprawdzą się np. na urodzinach, uniwersalną, dziecięcą, świąteczną oraz halloweenową. Znajdziecie też u nas animacje w języku angielskim.   

</p>

<AnimationOnScroll  animateIn="animate__tada"><h3 id="tla" style={{textAlign:"left"}}>Tła</h3></AnimationOnScroll>
<p>
W naszej ofercie posiadamy szeroki wybór teł w różnych stylach dzięki czemu wpasują się one w otoczenie i w wystrój sali. Tło sprawi, że wydruki Waszych zdjęć będą wyglądać perferykcyjnie :)  Jeśli potrzebujecie pomocy w dostosowaniu tła do szablonu wydruków tak aby wyglądały spójnie to służymy pomocą. 


</p>
</div>
<div className='imgfotolsutro'><img src={fotolustro2} /></div>

</div>



</div>

        </div>

     );
}
 
export default Fotolustro;