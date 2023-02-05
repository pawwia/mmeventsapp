import React,{useEffect} from 'react';
import './Rules.css'
const Rules = (props) => {
  useEffect(()=>{
   if (props.cpt &&props.title) props.cpt(props.title);
    },[])
    return (
        <div className='Privacy'>
<h2> Regulamin witryny</h2>
<p>
<ol type="i">
<li> Interpretacja</li>
1.	 DownWind Paweł Wiatrak, Pozdawilska 4a, 71-772, Szczecin NIP:851-322-69-14  niniejszym ustala poniższy regulamin serwisu internetowego znajdującego się pod adresem www.mmevents.pl.
<li>	Definicje</li>
<ol>
<li>Administrator serwisu, operator Serwisu, właściciel serwisu – Downwind Paweł Wiatrak</li>
<li>	Witryna, serwis, system, mmevents.pl– strona internetowa znajdująca się pod adresem mmevents.pl
</li>

</ol>
<li>	Postanowienia ogólne</li>
<ol>
<li>	Administratorem serwisu jest Downwind Paweł Wiatrak, Pozdawilska 4a, 71-772, Szczecin NIP:851-322-69-14  </li>
<li>	Regulamin udostępniony jest użytkownikowi w serwisie internetowym</li>
<li>	Warunkiem niezbędnym do korzystania z pełnej funkcjonalności serwisu jest akceptacja niniejszego regulaminu.</li>
<li>Użytkownik składając w serwisie rezerwację potwierdza, że zapoznał się z regulaminem i rozumie jego treść.</li> 
</ol>
<li>System rezerwacji </li>
<ol>
<li>	Serwis zapewnia użytkownikowi możliwość rezerwacji usługi wynajmu fotolustra na imprezy okolicznościowe.  Serwis jest ułatwieniem w zarządzaniu rezerwacjami oraz w personalizacji usługi przez klienta jednak nie jest podstawą realizacji usługi.</li>
<li>	Samo złożenie rezerwacji w systemie nie jest jednoznaczne z rezerwacją usługi.</li>
<ol type='a'>
<li>	Po złożeniu rezerwacji w systemie operator serwisu przeanalizuje zgłoszenie pod względem dostępności terminu oraz prawidłowym przeliczeniu kosztów danej rezerwacji.</li>
<li>	Jeżeli nastąpił błąd w przeliczaniu cen przez system lub organizowana przez użytkownika impreza jest inna niż zakłada to cennik dostępny na podstronie fotolustro, operator niezwłocznie powiadomi użytkownika serwisu o tej sytuacji oraz przedstawi możliwe rozwiązania. </li>
<li>	Jeżeli termin jest dostępny oraz koszty zostały przeliczone prawidłowo – operator skontaktuje się z użytkownikiem przesyłając do podpisu właściwą umowę – podpis składany jest za pośrednictwem platformy Autenti lub przesłania podpisanego przez użytkownika skanu umowy. </li>
<li>	Po wpłacie zadatku wynikającego z umowy właściwej operator zmieni status rezerwacji w systemie na „Potwierdzona”. </li>
</ol>
<li>	Każdy użytkownik chcący złożyć rezerwację w systemie obowiązany jest do założenia bezpłatnego konta w systemie. </li>
<ol>
<li>	Jeżeli użytkownik ma już konto w serwisie to przy dokonywaniu rezerwacji zostanie poproszony o hasło celem zalogowania się do systemu.</li>
<li>	Jeżeli użytkownik nie ma jeszcze konta w serwisie to przy dokonywaniu rezerwacji zostanie poproszony o wypełnienie formularza celem założenia konta w serwisie.</li>
</ol >
<li>	Przy zakładaniu konta użytkownik zostanie poproszony o następujące dane:</li>
<ol type="a">
<li>	Imię i nazwisko</li>
<li>	Adres korespondencyjny</li>
<li>	Numer PESEL</li>
<li>	Numer telefonu</li>
<li>	Adres e-mail</li>
</ol>
<li>	Przy dokonywaniu rezerwacji Użytkownik zostanie poproszony o:</li>
<ol type="a">
<li>	Wybranie czasu trwania wynajmu </li>
<li>	Wybranie dnia usługi</li>
<li>	Wybranie czasu rozpoczęcia trwania usługi</li>
<li>	Podanie nazwy hotelu/ Sali / obiektu w którym usługa będzie wykonywana</li>
<li>	Podanie adresu hotelu / Sali/ obiektu w którym usługa będzie wykonywana</li>
<li>	Wybranie z listy Województwa oraz najbliższego miasta powiatowego w którym usługa będzie realizowana.</li>
<li>	Wybranie typu księgi gości</li>
<li>	Podanie typu imprezy oraz orientacyjnej ilość osób na niej będących.</li>
</ol>
<li>	Jeżeli użytkownik nie posiada polskiego numeru pesel celem ominięcia walidacji pola może podać numer: 18473213212.</li>
<li>	Po rejestracji użytkownik ma możliwość zalogowania się do swojego konta</li>
</ol>
<li>Konto użytkownika</li>
<ol>
<li>	Po zalogowaniu się serwis umożliwia przejście do konta klienta.</li> 
<li>	Zakładka moje rezerwacje umożliwia podgląd wszystkich przypisanych do konta rezerwacji. Znajdują się tutaj również zrealizowane zlecenia. </li>
<li>	Statusy rezerwacji dzielą się na 6 typów</li>
<ol type='a'>
<li>	Utworzony</li>
<li>	Zarejestrowany</li>
<li>	Oczekiwanie na umowę</li>
<li>	Potwierdzona</li>
<li>	Oczekująca</li>
<li>	Wykonana</li>
</ol>
Wszystkie statusy nadawane są przez operatora serwisu ręcznie na każdym etapie rezerwacji. 
<li>	Użytkownik ma możliwość edycji niektórych elementów zlecenia</li> 
<ol type='a'>
<li>	Nazwa obiektu</li> 
<li>	Czas rozpoczęcia oraz czas trwania – użytkownik nie może zmienić samodzielnie tej opcji. Serwis umożliwia złożenie zapytania o zmianę tych elementów. Operator po sprawdzeniu możliwości wykonania usługi w takim zakresie informuje użytkownika za pomocą wiadomości email o decyzji oraz wprowadza ewentualne korekty rezerwacji.</li> 
</ol>
<li>	Użytkownik za pośrednictwem serwisu ma możliwość personalizacji usługi</li> 
<ol type='a'>

<li>	Wybór animacji wyświetlanych na fotolustrze</li> 
<li>	Wybór szablonu wydruku</li> 
<li>	Wybór imion widocznych na szablonach wydruku</li> 
<li>	Wybór tła do zdjęć</li> 
<li>	Wybór napisu widniejącego na księdze gości (jeśli dotyczy danej rezerwacji)</li> 
</ol>
Możliwość personalizacji usługi zostaje wyłączona w witrynie na 2 dni przed wydarzeniem.
Jeżeli użytkownik wprowadza zmiany na krócej niż 7 dni przed wydarzeniem w wybranych opcjach zobowiązany jest powiadomić o tym fakcie (telefonicznie lub mailowo) operatora strony. W przypadku zmiany opcji personalizacji w ostatnich dniach przed zleceniem operator zastrzega sobie ewentualny brak możliwości zmiany niektórych elementów opcji ze względu na niemożliwość ich spełnienia. Przykładem może być tutaj indywidualna księga gości która jest wykonywana przez firmę zewnętrzną. Jeżeli użytkownik chciałby zmienić jej wzór lub napisy nie jest to możliwe np. dzień przed imprezą ze względów logistycznych.
<li>	W zakładce Moje dane użytkownik może sprawdzić dane które administrator strony posiada o użytkowniku.</li> 
<li>	Użytkownik posiada możliwość zmiany niektórych danych na stronie:</li> 
<ol type='a'>
<li>	Imię</li> 
<li>	Nazwisko</li> 
<li>	Adres</li> 
<li>	Numer telefonu </li> 
</ol>
</ol>
Operator serwisu może zmienić adres email na jaki  zostało zarejestrowane dane konto. W takim przypadku użytkownik zobowiązany jest do kontaktu z operatorem pod adresem email: kontakt@mmevents.pl
<li>	Inne informacje</li>
<ol >
<li>	Operator na prośbę e-mail użytkownika prześle fakturę bez Vat. Prosimy w tym celu o przesłanie prośby pod adres kontakt@mmevents.pl</li>
<li>	Operator na prośbę e-mail użytkownika reprezentującego organizacje wystawi fakturę pro formę. Prosimy w tym celu o przesłanie prośby pod adres kontakt@mmevents.pl</li>
<li>	Umieszczone w witrynie funkcje sprawdzania terminu pokazują termin zajęty tylko i wyłącznie w przypadku kiedy rezerwacja ma status „potwierdzona” i wyżej zatem:</li>
<ol type="a">
<li>	Złożona jest rezerwacja w witrynie</li>
<li>	Podpisana jest umowa z użytkownikiem</li>
<li>	Wpłacony jest zadatek</li>
</ol>
Termin wolny będzie wyświetlał się do momentu ręcznego potwierdzenia rezerwacji przez operatora. Prosimy zatem nie powielać rezerwacji.
<li>	Operator zastrzega sobie prawo niepotwierdzania rezerwacji w przypadku gdy inny użytkownik złożył rezerwację na ten sam dzień. Pierwszeństwo ma użytkownik który złożył rezerwację wcześniej. </li>
<li>	W razie pytań operator chętnie udzieli odpowiedzi na wszystkie wątpliwe kwestie. Email kontaktowy: kontakt@mmevents.pl</li>
</ol>
<li>	Reklamacje, opinie, pomysły</li>
<ol >
<li>	Użytkownik ma możliwość złożenia reklamacji dotyczącej działania serwisu, opinii o serwisie, pomysł nowej funkcjonalności. Wszystkie tego typu prośby przyjmowane są pod adresem kontakt@mmevents.pl </li>
<li>	Nieprawidłowe zachowanie witryny prosimy zgłaszać pod adres email: kontakt@mmevents.pl</li>
</ol></ol>

</p>
        </div>
      );
}
 
export default Rules;