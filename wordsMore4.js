// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "ale"
const WORDS1 = [
	// A
	['architekt', 'архитектор', '', []],

	// B
	['bardzo', 'очень', '', []],
	['bardziej', 'больше', '(в качественном смысле)', []],

	['będzie', 'будет', '', []],

	['biegać', 'бегать', '', []],
	['bilet', 'билет', '', []],
	['biblioteka', 'библиотека', '', []],
	['biuro', 'офис', '(офис / бюро)', []],
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
	['człowiek', 'человек', '(просто человек)', []],
	// D
	['daleko', 'далеко', '', []],
	['dentysta', 'дантист', '', []],

	['dokumenty', 'документы', '', []],
	['dorośli', 'взрослые', '', []],
	['dopóki', 'пока', '', []],
	['dobra', 'хорошая', '', []],
	['dobry', 'хороший', '(добрый)', []],
	['dobrze', 'хорошо', '', []],
	['dojrzewać', 'cозревать', '', []],

	['drogo', 'дорого', '', []],
	['dziękuję', 'спасибо', '', []],
	['dywan', 'ковёр', '', []],
	['dziesięć', 'десять', '', []],
	['dziennikarz', 'журналист', '', []],
	['dzisiaj', 'сегодня', '', []],
	// E
	// F
	['fajnie', 'классно', '', []],
	['firma', 'фирма', '', []],

	['fotografia', 'фотография', '', []],
	['fotograf', 'фотограф', '', []],
	// G
	['gabinet', 'кабинет', '', []],
	['gdzie', 'где', '', []],
	
	['gotować', 'готовить', '(еду)', []],
	// H
	['herbata', 'чай', '', []],
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

	['klient', 'клиент', '', []],
	['klucze', 'ключи', '', []],


	['kochać', 'любить', '(про глубокую любовь и сильные чувства)', []],
	['kochany', 'любимый', '(очень любимый)', []],
	['kolor', 'цвет', '', []],
	['kolejka', 'очередь', '', []],
	['koncert', 'концерт', '', []],
	['konkretny', 'конкретный', '', []],
	['komputer', 'компьютер', '', []],
	['kobieta', 'женщина', '', []],

	['kryzys', 'кризис', '', []],

	['książka', 'книга', '', []],
	['który', 'который', '', []],
	['kucharz', 'повар', '', []],
	// L
	['lepszy', 'лучший', '', []],
	['leczyć', 'лечить', '', []],
	['lekarz', 'врач', '', []],
	['lokalny', 'местный', '', []],
	['ludzie', 'люди', '', []],
	['lubić', 'любить', '(про симпатию и предпочтения)', []],
	// M

	['między', 'между', '', []],

	['mniej', 'меньше', '', []],

	['mówić', 'говорить', '', []],
	['możliwe', 'возможно', '', []],


	['myśleć', 'думать', '', []],
	['muzyka', 'музыка', '', []],
	['muszę', 'должен', '', []],

	


	// N
	['nadawca', 'отправитель', '', []],
	['najbliższy', 'наиближайший ', '', []],
	['najlepszy', 'наилучший', '', []],
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
	['obietnica ', 'обещание', '', []],
	['odpowiedzieć', 'ответить', '', []],

	['około', 'около', '', []],
	['oprócz', 'кроме', '', []],

	['osoba', 'человек', '(персона или личность)', []],
	['ostatni', 'последний', '', []],

	['oznacza', 'означает', '', []],



	// P

	['paczka', 'посылка', '', []],

	['pisać', 'писать', '', []],
	['pieniądze', 'деньги', '', []],
	['pierwszy', 'первый', '', []],
	['pierścień', 'кольцо', '', []],

	['podczas', 'во время', '', []],
	['pomoc', 'помощь', '', []],
	['poznać', 'познать', '', []],
	['później', 'позже', '', []],
	['popularny', 'популярный', '', []],
	['powiedzieć', 'сказать', '', []],
	['potem', 'потом', '', []],
	['pomarańczowy', 'оранжевый', '', []],

	['prawo', 'право', '(направление или закон)', []],
	['pracuje', 'работает', '', []],
	['pracować', 'работать', '', []],
	['prezentować', 'презентовать', '', []],
	['problem', 'проблема', '', []],
	['produkt', 'продукт', '(еда или товар или изделие)', []],
	['program', 'программа', '', []],
	['proszę', 'пожалуйста', '', []],
	['projektować', 'проектировать', '', []],
	['przygotować', 'подготовить', '', []],
	['przez', 'через', '', []],
	['przed', 'перед', '', []],
	['przeciw', 'против', '', []],
	['przyjaciel', 'друг', '', []],

	['pytanie', 'вопрос', '', []],
	// R
	['radio', 'радио', '', []],
	['restauracja', 'ресторан', '', []],
	['reszta', 'остальное', '(остаток, сдача)', []],
	['robić', 'делать', '', []],



	['ruszać', 'двигаться', '', []],
	['rysunek', 'рисунок', '', []],
	['rzecz', 'вещь', '', []],
	// S
	['samoobsługa', 'самообслуживание', '', []],
	['serwuje', 'сервирует', '(подаёт)', []],
	
	['siebie', 'себя', '', []],
	['sierota', 'сирота', '', []],
	['słowo', 'слово', '', []],
	['słuchając', 'слушая', '', []],
	
	['sobie', 'себе', '', []],
	['sprawdzić', 'проверять', '', []],
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

	['towar', 'товар', '', []],
	['tobie', 'тебе', '', []],

	['trudno', 'трудно', '', []],
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

	['uszkodzony', 'поврежденный', '', []],

	['uwaga', 'внимание', '', []],
	// W
	['wadliwy', 'бракованный', '', []],

	['większość', 'большинство', '', []],
	['więcej', 'больше', '(в количественном смысле)', []],
	['wiedzieć', 'знать', '(о ком-то или чем-то)', []],
	['wielki', 'великий', '', []],

	['właściciel', 'владелец', '', []],

	['wokół', 'вокруг', '', []],

	['wśród', 'среди', '', []],
	['wszystko', 'всё', '', []],
	['wyżej', 'выше', '', []],
	['wzdłuż', 'вдоль', '', []],

	// Z
	
	['zakupy', 'покупки', '', []],
	['zamknięte', 'закрыто', '', []],
	['zamiast', 'вместо', '', []],
	['zapomnieć', 'забудь', '', []],
	['zapamiętać', 'запомнить', '', []],
	['zaraz', 'скоро', '', []],
	['zawód', 'профессия', '', []],
	['zaczynać', 'начинать', '', []],
	['zawsze', 'всегда', '', []],
	
	['zielony', 'зеленый', '', []],

	['znać', 'знать', '(кого-то или что-то лично)', []],
	['znaczy', 'значит', '', []],
	['znajomy', 'знакомый', '', []],

	['zmęczony', 'усталый', '', []],

	['żółty', 'желтый', '', []],
	['zrobić', 'сделать', '', []],
	
	
	['zwierzę', 'животное', '', []],


	['zwrócił', 'вернул', '', [['Zwrócił książkę do biblioteki', 'Вернул книгу в библиотеку'],['Zwrócił się do mnie o pomoc', 'Обратился ко мне за помощью'],['Zwrócił jej list', 'Вернул ей письмо'],['Zwróciła mu pierścionek', 'Вернула ему кольцо'],['Klient zwrócił wadliwy produkt', 'Клинет вернул бракованный продукт'],['Zwrócił uwagę na problem', 'Обратил внимание на проблему'],['Zwróciła dokumenty do biura', 'Вернула документы в офис'],['Zwrócił mi pieniądze', 'Вернул мне деньги'],['Zwrócił uwagę na jej słowa', 'Обратил внимание на ее слова'],['Zwrócił się do mnie po pomoc', 'Обратился ко мне за помощью']]],
	['zwrócić', 'вернуть', '', [['Muszę zwrócić tę książkę', 'Должен вернуть эту книгу'],['Muszę zwrócić ten telefon', 'Должен вернуть этот телефон'],['Czy mogę zwrócić ten bilet?', 'Могу ли я вернуть этот билет?'],['Musisz zwrócić dług', 'Вы должны вернуть долг'],['Musisz zwrócić na to uwagę', 'Вам нужно обратить на это внимание'],['Proszę zwrócić mi resztę', 'Пожалуйста, верните мне сдачу'],['Muszę zwrócić książkę do biblioteki', 'Нужно вернуть книгу в библиотеку'],['Chcę zwrócić ten towar', 'Хочу вернуть этот товар'],['Nie zapomnij zwrócić kluczy', 'Не забудьте вернуть ключи'],['Chciałbym zwrócić bilet', 'Хотел бы вернуть билет']]],
	['zwracam', 'возвращать', '(я возвращаю)', [['Zwracam książkę do biblioteki', 'Возвращаю книгу в библиотеку'],['Zwracam dług, jak obiecałem', 'Возвращаю долг, как и обещал'],['Zwracam towar, bo jest wadliwy', 'Возвращаю товар, потому что он бракованный'],['Zwracam pieniądze za zakupy', 'Возвращаю деньги за покупки'],['Zwracam dokumenty do biura', 'Возвращаю документы в офис'],['Zwracam klucze właścicielowi', 'Возвращаю ключи владельцу'],['Zwracam to, bo jest uszkodzone', 'Возвращаю его, потому что он поврежден'],['Zwracam dług przyjacielowi', 'Отдаю долг другу'],['Zwracam paczkę do nadawcy', 'Возвращаю посылку отправителю'],['Zwracam bilet na koncert', 'Возвращаю билет на концерт']]]
];
// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "ale"

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

minął - прошел
pociąg - поезд

łączyć - объединят
ręcznik полотенце

gęsty - густой
wąski - узкий

nieprzyjaciel - враг / неприятель

średni - средний
wymachiwać - размахивать

drogie - дорогие

życie  - жизнь
dieta - диета

teatr - театр
gołąb - голубь
kontrola – контроль
koncert – концерт
gęsty - густой

ciągnąć - тянуть

piąty - пятый

tragedia - трагедия

generacja - поколени
drugie - другое
ogień - огонь
teoria – теория
dialog – диалог
dieta – диета
studiować – изучать
kopia – копия
odjechać - отъехать
wjazd - въезд
objąć - обнять
objętość - объем
operacja - операция
stacja - станция
nadzieja - надежда

jezioro - озеро
jesień - осень
jutro - завтра
herbata – чай
alkohol – алкоголь
historia – история
wszędzie - везде
pszenica - пшеница

rzeka – река
rzadko – редко 
rzech – орех
korzeń – корень
porządek – порядок
młodzież - молодежь
odzież - одежда
grabież - грабеж
sprzedaż - продажа
żelazny - железный

ważny - важный

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


lider - лидер
biznes - бизнес

hobby - хобби
prosić – просить

zając - заяц
bielizna – белье
lakier – лак
mięso – мясо
ziemia – земля
wiosna – весна
inżynier – инженер
groźba – угроза
dziecko – ребенок 
wiele – много
tańczyć – танцевать
czysty - чистый

władza - власть
niedźwiedź - медведь
dźwięk - звук
chodźmy - давай пойдем
jeżdżę - езжу
dżdżysty - дождливый

morze - море
krzesło - стул
drzewo - дерево
szósty - шестой
odzyskać - отыскать
porządek - порядок
rzadko - редко
marzec - март
powietrze - воздуx
czwarty - четвертый
krzyk  - крик
część – часть
marznąć - мерзнуть
twardy - твердый
zmarzły - замерзший
polecenia - поручения
propozycje - предложения

wcale - вообще
zabraniać - запрещать
jednak - всё-таки
wciągać - втягивать
wyjeżdżać - выезжать


wystawa - выставка

trawnik - газон
pokojówka - горничная
naprawdę - действительно
jeansy - джинсы
zakres - диапазон
magisterka - диплом
bohaterski, odważny, waleczny - доблестный
bohaterstwo, odwaga, waleczność - доблесть
ochotnik - доброволец
dożyć - дожить
osobliwość - достопримечательность
dziura - дырка
życzyć - желать
chcąc - желая
mieszkaniec - житель
kończyć - заканчивать
znakomity, wspaniały - замечайтельный
dostać, zdobyć - заполучить
posiedzenie - заседание
wartość - значение
wydawnictwo - издательство
wyrób
koszty - издержки
zmienić - изменить
studiować - изучать

mistyfikacja - инсценировка 


dzielnica - квартал
cukiernia - кондитерская
konkretnie - конкретно
kościół - костёл
kukła - кукла 
siatka, reklamówka - кулёк
uprawa - культура
krzew - кустарник
lodowiec - ледник
lektor - лектор
wykład - лекция
uprzejmy - любезный
drobnostka, drobne - мелочь
mniejszość - меньшинство
jezdnia - мостовая
skuter - мотороллер
oszust - мошенник
mknąć, pędzić - мчаться 
początek - начало
początkujący - начинающий
nieważny - недействительный
neonowy - неоновый
wyjaśnić - объяснить
na ogół, zazwyczaj - обычно
koniecznie - обязательно
warzywa - овощи
światła - огни
jeleń, renifer - олень
znowu - опять
szczególnie - особенно
odpowiedź - ответ
odpisać - ответить
oddział - отделение
odwołać - отменить
urlop - отпуск
zaznaczyć - отметить
myśliwy - охотник
pomnik - памятник
przekazać - передать
przeżyć, przetrwać - пережить
skrzyżowanie - перекрёсток
obwód - периметр
parszywy - поганый
dalej - подальше
podejść, nadejść, - подойти 
szczegółowo - подробно 
odpowiadać, pasować - подходить 
podjeżdżać - подъезжать
podjazd, klatka  - подъезд 
pozwolić - позволить 
próba - попытка 
ciągle - постоянно 
policzyć - посчитать 
zgubić, stracić - потерять 
rzeczywiście - правда 
uprzedzić - предупредить 
wykładowca - преподаватель 
wykładać - преподавать 
przedmieści - пригород 
wymyślić - придумать 
próbka - пробник 
spędzać (czas), odprowadzić - проводить 
wykonanie - производство 
przemysłowy - промышленный 
przełom - прорыв 
obudzić  - проснуться 
trwały, masywny, mocny, wytrzymały - прочный 
rozmyślać - размышлять 
różnokolorowy - разноцветный
pozwolić - разрешить
zdecydować, postanowić, rozwiązać (zadanie) - решить 
zwinąć, skręcić - свернуть 
reszta - сдaча 
usiąść - сесть 
siedzieć - сидеть 
ławka - лавка скамейка 
słać, wysyłać - слать 
łącznie - слитно 
kosztorys - смета 
znowu - снова 
całkiem - совсем 
ratować - спасать 
spieszyć - спешить
zapałka - спичка 
ławica - стая 
stołówka - столовка 
surowo, ściśle - строго 
zmrok - сумерки 
rachunek - счёт 
liczyć - считать 
toaleta - туалет 
wciągać - увлекать 
odjeżdżać, wyjeżdżać - уезжать 
dowiedzieć - узнать 
usnąć, zasnąć - уснуть 
zdążyć - успеть 
nieaktualny - устарелый 
owoce - фрукты 
chociaż - хотя 
często - часто 
pociąg - Поезд 
jasno, jaskrawo - ярко 
Proszę - Пожалуйста
Żegnaj - прощай
Przepraszam- извнините
wybaczać - извинять
przepraszać - извиняться 
Oczywiście - Конечно
Zgoda - Согласен
Dosyć - Хватит
Chłopczyku - мальчик
Dziewczynko - девочка
*/