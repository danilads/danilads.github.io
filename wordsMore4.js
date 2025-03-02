// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "a"
const WORDS1 = [
	// A
	['architekt', 'архитектор', '', []],

	// B
	['bardzo', 'очень', '', []],
	['bardziej', 'более', '(с прилагательными и наречиями)', []],

	['będzie', 'будет', '', []],

	['biuro', 'бюро', '', []],
	['biały', 'белый', '', []],

	['blisko', 'близко', '', []],
	
	['brązowy', 'коричневый', '', []],

	// C
	['chory', 'больной', '', []],
	['chcieć', 'хотеть', '', []],

	['ciebie', 'тебя', '', []],


	['cześć', 'привет', '', []],
	['czego', 'чего', '', []],
	['czekać', 'ждать', '', []],
	['czekając', 'ожидая', '', []],
	['czarny', 'черный', '', []],
	['czerwony', 'красный', '', []],
	['сzłowiek', 'человек', '(просто человек)', []],
	// D
	['daleko', 'далеко', '', []],
	['dentysta', 'дантист', '', []],

	['dokumenty', 'документы', '', []],
	['dorośli', 'взрослые', '', []],
	['dopóki', 'пока', '', []],
	['dobry', 'хороший', '', []],
	['dobrze', 'хорошо', '', []],
	['dojrzewać', 'cозревать', '', []],

	['dziękuję', 'спасибо', '', []],
	['dywan', 'ковёр', '', []],
	['dziesięć', 'десять', '', []],
	['dziennikarz', 'журналист', '', []],
	['dzisiaj', 'сегодня', '', []],
	// E
	// F
	['firma', 'фирма', '', []],

	['fotografia', 'фотография', '', []],
	['fotograf', 'фотограф', '', []],
	// G
	['gabinet', 'кабинет', '', []],
	['gdzie', 'где', '', []],
	
	['gotować', 'готовить', '', []],
	// H
	['hotel', 'отель', '', []],
	// I
	['impreza', 'вечеринка', '', []],
	['informacja', 'информация', '', []],
	// J


	['jedzenie', 'еда', '', []],
	['jeśli', 'если', '', []],
	['jeszcze', 'еще', '', []],

	['język', 'язык', '', []],

	// K
	['każdy', 'каждый', '', []],

	['kelner', 'официант', '', []],

	['kiedy', 'когда', '', []],

	['kryzys', 'кризис', '', []],

	['kochać', 'любить', '(про глубокую любовь и сильные чувства)', []],
	['kochany', 'любимый', '(очень любимый)', []],
	['kolor', 'цвет', '', []],
	['kolejka', 'очередь', '', []],
	['konkretny', 'конкретный', '', []],
	['komputer', 'компьютер', '', []],
	['kobieta', 'женщина', '', []],


	['który', 'который', '', []],
	['kucharz', 'повар', '', []],
	// L
	['leczyć', 'лечить', '', []],
	['lekarz', 'врач', '', []],
	['lokalny', 'местный', '', []],
	['ludzie', 'люди', '', []],
	['lubić', 'любить', '(про симпатию и предпочтения)', []],
	// M

	['między', 'между', '', []],

	['mniej', 'меньше', '', []],

	['mówić', 'говорить', '', []],

	['myśleć', 'думать', '', []],
	['muzyka', 'музыка', '', []],

	


	// N
	['najbliższy', 'ближайший', '', []],
	['najlepszy', 'лучший', '', []],
	['nauczyciel', 'учитель', '', []],
	['nagle', 'вдруг', '', []],
	['naprzeciw', 'напротив', '', []],
	['nawet', 'даже', '', []],

	['niespodzianka', 'сюрприз', '', []],
	['niżej', 'ниже', '', []],
	['nigdy', 'никогда', '', []],
	['niedaleko', 'недалеко', '', []],

	['niebieski', 'синий', '', []],
	// O
	['odpowiedzieć', 'ответить', '', []],

	['około', 'около', '', []],
	['oprócz', 'кроме', '', []],

	['osoba', 'человек', '(персона или личность)', []],
	['ostatni', 'последний', '', []],

	['oznacza', 'означает', '', []],



	// P

	['pisać', 'писать', '', []],

	['pierwszy', 'первый', '', []],

	['podczas', 'во время', '', []],
	['pomoc', 'помощь', '', []],
	['poznać', 'познать', '', []],
	['później', 'позже', '', []],
	['popularny', 'популярный', '', []],
	['powiedzieć', 'сказать', '', []],
	['potem', 'потом', '', []],
	['pomarańczowy', 'оранжевый', '', []],

	['prawo', 'право', '(как направление так и закон)', []],
	['pracuje', 'работает', '', []],
	['pracować', 'работать', '', []],
	['prezentować', 'презентовать', '', []],
	['program', 'программа', '', []],
	['projektować', 'проектировать', '', []],
	['przygotować', 'приготовить', '', []],
	['przez', 'через', '', []],
	['przed', 'перед', '', []],
	['przeciw', 'против', '', []],
	['przyjaciel', 'друг', '', []],

	['pytanie', 'вопрос', '', []],
	// R
	['radio', 'радио', '', []],
	['restauracja', 'ресторан', '', []],
	['robić', 'делать', '', []],



	['ruszać', 'двигаться', '', []],
	['rysunek', 'рисунок', '', []],
	['rzecz', 'вещь', '', []],
	// S
	['samoobsługa', 'самообслуживание', '', []],
	['serwuje', 'сервирует', '(подаёт)', []],
	
	['siebie', 'себя', '', []],
	['sierota', 'сирота', '', []],
	['słuchając', 'слушая', '', []],
	
	['sobie', 'себе', '', []],
	['sprzeciw', 'возражение', '', []],

	['student', 'студент', '', []],

	
	['studio', 'студия', '', []],


	['szczęśliwy', 'счастливый', '', []],
	['szpital', 'больница', '', []],
	['szkoła', 'школа', '', []],
	
	// T

	['także', 'также', '', []],
	['telewizja', 'телевизор', '', []],
	['telefon', 'телефон', '', []],
	['teraz', 'сейчас', '', []],
	['tematyczny', 'тематический', '', []],

	['tobie', 'тебе', '', []],

	['trzeba', 'нужно', '', []],
	['trochę', 'чуть-чуть', '', []],

	['tutaj', 'здесь', '', []],

	['tylko', 'только', '', []],
	['twoja', 'твоя', '', []],
	// U
	['uczeń', 'ученик', '', []],


	['uniwersytet', 'университет', '', []],
	['ulubiony', 'любимый', '(предмет)', []],

	['urząd', 'учреждение', '', []],
	['urzędnik', 'чиновник', '', []],

	['uwaga', 'внимание', '', []],
	// W
	['większość', 'большинство', '', []],
	['więcej', 'больше', '(в количественном смысле)', []],
	['wiedzieć', 'знать', '(быть осведомленным)', []],
	['wielki', 'великий', '', []],
	['wokół', 'вокруг', '', []],

	['wśród', 'среди', '', []],
	['wszystko', 'всё', '', []],
	['wyżej', 'выше', '', []],
	['wzdłuż', 'вдоль', '', []],

	// Z
	
	['zamknięte', 'закрыто', '', []],
	['zamiast', 'вместо', '', []],
	['zaraz', 'скоро', '', []],
	['zawód', 'профессия', '', []],
	['zaczynać', 'начинать', '', []],
	['zawsze', 'всегда', '', []],
	
	['zielony', 'зеленый', '', []],
	['znaczy', 'значит', '', []],
	['znajomy', 'знакомый', '', []],
	['zmęczony', 'усталый', '', []],

	['żółty', 'желтый', '', []],
	
	
	['zwierzę', 'животное', '', []]


	// TODO++ доделать WRACAC
	//
	// ['zwrócić', 'вернуть', '(завершённое действие)', []],
	
	//
	// ['zwracać', 'возвращать', '(действие в процессе)', []]

	// Zwracam książkę do biblioteki. - Я возвращаю книгу в библиотеку.
	// Zwracam dług, jak obiecałem. - Я возвращаю долг, как и обещал.
	// Zwracam towar, bo jest wadliwy. - Я возвращаю товар, потому что он неисправным.
	// Zwracam pieniądze za zakupy. - Я возвращаю деньги за покупки.
	// Zwracam dokumenty do biura. - Я возвращаю документы в офис.
	// Zwracam klucze właścicielowi - Я возвращаю ключи владельцу. 

	// Musisz zwrócić dług. - Вы должны вернуть долг.
	// Proszę zwrócić towar. - Пожалуйста, верните товар.

	// Zwrócił jej pierścionek. - Он вернул ей кольцо.
	// Zwróciła dokumenty do biura. - Она вернула документы в офис.
	// Proszę zwrócić mi resztę. - Пожалуйста, верните мне сдачу.
];
// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "Zwracam"

/*
[skandal  - безобразие] ?
[беспредел swawola, anarchia]?
oddać ? 
[весьма – całkiem, dosyć] ?
вид – widok / rodzaj ?
вовсе – całkiem / wcale ?



zjadłby / żółw / gorąca / pchają / zając / krzyczał / Znosił / nareszcie

// nasze, , tamtego, , wszyscy, żaden,  znowu, jakikolwiek, kogoś, powoli, właśnie, kochać, miłość, 

//  czasami, , śmiać,  zapytać, słuchać, usłyszeć, widzieć, patrzeć, wstawać, siadać, lubić, nienawidzić, myśleć, rozumieć, pamiętać, zapomnieć, wszędzie, nigdzie, wewnątrz,

// na zewnątrz, w środku, na górze, na dole, po lewej, po prawej, szybko, wolno,  lepiej, gorzej, najgorzej, najpierw, później, wcześniej, wkrótce, długo,

//  krótko, często, rzadko, prawie, chyba, na pewno, prawdopodobnie, raczej, z pewnością, bez wątpienia, absolutnie, naprawdę, rzeczywiście, oczywiście, pewnie, chociaż, jednak, 

// wanna, prysznic, toaleta, umywalka, szczotka, pasta, mydło, szampon, ręcznik, papier, nożyczki, widelec, łyżka, talerz, kubek, szklanka, butelka, miska, garnek, patelnia, czajnik

// zarówno,  czasami, ponieważ, zatem, po prostu, jedynie, rzeczy, swoje, wszystkich, jakieś, , nasze, twoje, kilka, , tygodni, miesięcy, godzin, minut, sekund, wiesz, 

//  mężczyzna, dziecko, samochód, książka, piosenka, praca, picie, chleb, masło, mleko, , herbata,  , mięso, , warzywa, owoce, zegarek, ubranie, 

// spodnie, koszula, bluzka, kurtka, płaszcz, czapka, rękawiczki, okulary, światło, dźwięk, szary, różowy, fioletowy, słońce, księżyc, gwiazdy, niebo, ziemia, morze

// rzeka, jezioro miasto, droga, ulica,  budynek, sklep, mieszkanie, pokój, kuchnia, łazienka, salon, sypialnia, korytarz, , drzwi, podłoga, sufit, ściana, łóżko, 

// krzesło, fotel, kanapa, półka, szafa, firanka, zasłona, obraz, lustro, telewizor, pralka, lodówka, kuchenka, piekarnik, mikrofalówka, 

// toster, blender, mikser, odkurzacz, żelazko, wiadro, zmiotka, szufelka, worek, lampka, świeca, zapałka, zapalniczka,

// klawiatura, monitor, głośnik, słuchawki, drukarka, skaner, aparat, kamera, ładowarka, kabel, bateria, karta, pamięć, płyta, książka, zeszyt

// długopis, ołówek, gumka, temperówka, linijka, ekierka, cyrkiel, taśma, nożyczki, zszywacz, dziurkacz, notes, kalendarz

// bilet, gazeta, czasopismo, koperta, znaczek, paczka, pudełko, torba, plecak, walizka, parasol, klucz, portfel, pieniądze, karta, bilet, dowód, paszport, legitymacja, licencja, certyfikat, dyplom, świadectwo, 

// dokument, , rachunek, faktura, umowa, formularz, , wniosek, petycja, podanie, prośba, skarga, wezwanie, ostrzeżenie, zgłoszenie, oświadczenie, deklaracja, zeznanie, raport, protokół, sprawozdanie, notatka, przypomnienie

// zaproszenie, ogłoszenie, reklama, oferta, zamówienie, rezerwacja, potwierdzenie, zgoda, pozwolenie, akceptacja, odmowa, protest, wezwanie

// mandat, grzywna, skarga, apelacja, pozew, wyrok, postanowienie, orzeczenie, decyzja, polecenie, nakaz, zakaz

// instrukcja, regulamin, kodeks, ustawa, prawo, przepis, zasada, reguła, standard, norma, procedura, protokół, umowa, kontrakt, porozumienie, 

// układ, sojusz, traktat, konwencja, deklaracja, zgoda, kompromis, współpraca, partnerstwo, sojusz, koalicja, stowarzyszenie, organizacja, fundacja, instytut, agencja, departament, ministerstwo, ambasada, konsulat

// misja, komisja, komitet, zgromadzenie, parlament, senat, administracja, zarząd, dyrekcja, kierownictwo, sztab, komenda, inspektorat, nadzór, kontrola, audyt, rewizja, ocena, ekspertyza, analiza, badanie, sprawdzian, egzamin, kwalifikacja, selekcja, rekrutacja, nabor, zatrudnienie, praca

// stanowisko, posada, profesja, specjalność, funkcja, zadanie, obowiązek, odpowiedzialność, kompetencja, uprawnienie, prawo, przywilej, przyjemność
// korzyść, profit, premia, bonus, nagroda, gratyfikacja, odznaczenie, medal, order, tytuł, stopień, stanowisko, funkcja, ranga, status, prestiż, honor
// reputacja, autorytet, sława, renoma, marka, nazwisko, pseudonim, kryptonim, przydomek, ksywa, inicjały, tytuł, nagłówek, podtytuł, rozdział, sekcja
// paragraf, ustęp, punkt, podpunkt, akapit, zdanie, fraza, wyrażenie, zwrot, słowo, litera, symbol, ikona, piktogram, emblemat
// godło, flaga, sztandar, chorągiew, proporzec, odznaka, plakietka, medalion, pieczęć, stempel, sygnet, tablica, tabliczka, szyld, napis, ogłoszenie

// komunikat, wiadomość, nowina, plotka, ploteczka, wieść, pogłoska, słuch, słuchy, opowieść, historia, narracja, fabuła, scenariusz, dramat
// komedia, tragedia, farsa, burleska, skecz, , dowcip, , kawał, anegdota, przysłowie, porzekadło, powiedzenie, maksymum, motto, hasło, slogan, dewiza, aforyzm, cytat, sentencja, fraza, frazes,

minął  „прошел‟
 pociąg „поезд

będzie „будет‟;
łączyć „объединять
ręcznik „полотенце

gęsty густой‟
wąski  „узкий‟

nieprzyjaciel  „враг‟

średni  „средний‟
wymachiwać „размахивать‟.

drogie „дорогие

życie  „жизнь
dieta „диета‟

teatr  „театр
gołąb  „голубь‟
kontrola – контроль
koncert – концерт
gęsty „густой‟,

ciągnąć „тянуть‟

 piąty „пятый‟

tragedia „трагедия

generacja „поколени
drugie „другое
ogień „огонь
teoria – теория
dialog – диалог
dieta – диета
studiować – изучать
kopia – копия
odjechać „отъехать‟
 wjazd „въезд‟
objąć „обнять‟
objętość „объем
operacja „операция
stacja „станция
nadzieja „надежда

 jezioro „озеро‟
jesień „осень‟
 jutro „завтра
herbata – чай
alkohol – алкоголь
historia – история
 wszędzie „везде
pszenica „пшеница

rzeka – река
rzadko – редко 
rzech – орех
korzeń – корень
porządek – порядок
młodzież „молодежь‟,
odzież „одежда‟,
grabież „грабеж‟;
sprzedaż „продажа
żelazny „железный‟

ważny „важный

rumianek – ромашка
długi – долгий
zasuwać – засовывать
skuwać – сковывать
szukać – искат
ogórek – огурец.

późno – поздно

równy – ровный
różny – разный
krótki – короткий


lider „лидер‟
biznes „бизнес

hobby „хобби‟ 
prosić – просить

zając „заяц‟
bielizna – белье
lakier – лак
mięso – мясо
ziemia – земля
wiosna – весна
inżynier – инженер
groźba – угроза
dziecko – ребенок pięć – пять
wiele – много
tańczyć – танцевать
czysty „чистый‟
człowiek „человек‟,
władza „власть‟
niedźwiedź „медведь‟
 dźwięk „звук‟,
chodźmy „давай пойдем‟
jeżdżę „езжу
dżdżysty „дождливый

morze „море‟
 krzesło „стул‟,
 drzewo „дерево‟
szósty „шестой
odzyskać  отыскать
porządek „порядок
rzadko „редко
marzec „март
powietrze „воздуx
czwarty „четвертый‟.
krzyk  „крик‟
część – часть
marznąć „мерзнуть‟
twardy „твердый‟
 zmarzły „замерзший

вообще – w ogóle, wcale
запрещать – zabraniać
всё-таки – jednak
втягивать – wciągać
выезжать – wyjeżdżać
выжить – wytrzymać,
высокоточный – precyzyjny
выставка – wystawa
гадить – brudzić, paskudzić
газон – trawnik
горничная – pokojówka
действительно – naprawdę
джинсы – jeansy
диапазон – zakres
диплом (разг.) –  magisterka
доблестный – bohaterski, odważny, waleczny
доблесть – bohaterstwo, odwaga, waleczność
доброволец – ochotnik
дожить – dożyć
достопримечательность –osobliwość
дырка – dziura
желать – życzyć
желая – chcąc
житель – mieszkaniec
заканчивать – kończyć
замечайтельный – znakomity, wspaniały
заполучить – dostać, zdobyć
заседание – posiedzenie
значение – wartość
издательство – wydawnictwo
изделие – wyrób, produkt
издержки – koszty
изменить – zmienić
изучать – studiować
именинник – solenizant, jubilat
инсценировка – mistyfikacja
карманник – kieszonkowiec
качели – huśtawka
квартал – dzielnica
кондитерская – cukiernia
конкретно – konkretnie
костёл – kościół
кукла – kukła
кулёк – siatka, reklamówka
культура – uprawa
кустарник – krzew
ледник – lodowiec
лектор – lektor
лекция – wykład
любезный – uprzejmy
мелочь – drobnostka, drobne
меньшинство – mniejszość
мостовая – jezdnia
мотороллер – skuter
мошенник – oszust
мчаться – mknąć, pędzić
начало – początek
начинающий – początkujący
недействительный – nieważny
неоновый – neonowy
объяснить – wyjaśnić
обычно – na ogół, zazwyczaj
обязательно – koniecznie
овощи – warzywa
огни – światła
олень – jeleń, renifer
опять – znowu
особенно – szczególnie
ответ – odpowiedź
ответить – odpisać
отделение – oddział
отменить – odwołać
отпуск – urlop
отметить – zaznaczyć
охотник – myśliwy
памятник – pomnik
передать – przekazać
пережить – przeżyć, przetrwać
перекрёсток – skrzyżowanie
периметр – obwód
поганый – parszywy
подальше – dalej 
подойти – podejść, nadejść,
подробно – szczegółowo
подходить – odpowiadać, pasować
подъезжать – podjeżdżać
подъезд – podjazd, klatka 
позволить – pozwolić
попытка – próba
постоянно – ciągle
посчитать – policzyć
потерять – zgubić, stracić
правда – rzeczywiście
предупредить – uprzedzić
преподаватель – wykładowca
преподавать – wykładać
пригород – przedmieście
придумать – wymyślić
пробник – próbka
проводить – spędzać (czas), odprowadzić
производство – wykonanie
промышленный – przemysłowy
прорыв – przełom
проснуться – obudzić 
прочный – trwały, masywny, mocny, wytrzymały
размышлять – rozmyślać
разноцветный – różnokolorowy
разрешить – pozwolić
решить – zdecydować, postanowić, rozwiązać (zadanie)
свернуть – zwinąć, skręcić
сдaча – reszta
сесть – usiąść
сидеть – siedzieć
скамейка – ławka
слать – słać, wysyłać
слитно – łącznie
смета – kosztorys
снова – znowu
совсем – całkiem
спасать – ratować
спешить – spieszyć, 
спичка – zapałka
стая – ławica
столовка – stołówka
строго – surowo, ściśle
сумерки – zmrok
счёт – rachunek
считать – liczyć
туалет – toaleta
увлекать – wciągać
уезжать – odjeżdżać, wyjeżdżać
узнать – dowiedzieć
уснуть – usnąć, zasnąć
успеть – zdążyć
устарелый – nieaktualny
фрукты – owoce
хотя – chociaż
часто – często
Поезд - pociąg
ярко – jasno, jaskrawo
Proszę - Пожалуйста
Żegnaj - прощай
Przepraszam- извнините
wybaczać - извинять
извиняться - przepraszać
Конечно - Oczywiście
Согласен - Zgoda
Dosyć - Хватит
Chłopczyku - мальчик
Dziewczynko - девочка
*/