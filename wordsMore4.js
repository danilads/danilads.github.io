// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "ale"
const WORDS1 = [
	// A
	['architekt', 'архитектор', '', []],

	// B
	['bardzo', 'очень', '', []],
	['bardziej', 'больше', '(в качественном смысле)', []],

	['będzie', 'будет', '', []],

	['biały', 'белый', '', []],
	['biblioteka', 'библиотека', '', []],
	['biegać', 'бегать', '', []],
	['bilet', 'билет', '', []],
	['biuro', 'офис', '(офис / бюро)', []],

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
	['człowiek', 'человек', '(как вид)', []],
	['cztery', 'четыре', '', []],
	['czwartek', 'четверг', '', []],
	// D
	['daleko', 'далеко', '', []],

	['decyzja', 'решение', '', []],
	['dentysta', 'дантист', '', []],

	['dobra', 'хорошая', '', []],
	['dobry', 'хороший', '(добрый)', []],
	['dobrze', 'хорошо', '', []],
	['dojrzewać', 'cозревать', '', []],
	['dokumenty', 'документы', '', []],
	['dorośli', 'взрослые', '', []],
	['dopóki', 'пока', '', []],

	['drogo', 'дорого', '', []],

	['dziękuję', 'спасибо', '', []],
	['dywan', 'ковёр', '', []],
	['dziecko', 'ребенок', '', []],
	['dziesięć', 'десять', '', []],
	['dziewięć', 'девять', '', []],
	['dziennikarz', 'журналист', '', []],
	['dzisiaj', 'сегодня', '', []],
	// E
	// F
	['fajnie', 'классно', '', []],
	['firma', 'фирма', '', []],


	['fotograf', 'фотограф', '', []],
	['fotografia', 'фотография', '', []],
	['funkcjonować', 'функционировать', '(работать», действовать)', []],
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


	['jeden', 'один', '', []],
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

	['kobieta', 'женщина', '', []],
	['kochać', 'любить', '(про глубокую любовь и сильные чувства)', []],
	['kochany', 'любимый', '(очень любимый)', []],
	['kolor', 'цвет', '', []],
	['kolejka', 'очередь', '', []],
	['komputer', 'компьютер', '', []],
	['koncert', 'концерт', '', []],
	['konkretny', 'конкретный', '', []],
	['korzeń', 'корень', '(растения, родословная)', []],

	['kryzys', 'кризис', '', []],

	['książęce', 'княжеский', '', [['Miał książęce maniery', 'У него были королевские манеры'],['Zamek należał do książęcej rodziny', 'Замок принадлежал княжеской семье'],['Spotkali się na książęcym balu', 'Они встретились на княжеском балу'],['To książęce piwo jest pyszne', 'Это княжеское пиво восхитительно'],['Marzyła o książęcym życiu', 'Она мечтала о княжеской жизни'],['Spotkanie odbyło się w książęcej sali', 'Встреча состоялась в княжеском зале'],['To była książęca decyzja', 'Это было княжеское решение'],['Chcę zobaczyć książęcy dwór', 'Я хочу увидеть княжеский двор'],['Ich ród miał książęce korzenie', 'Их род имела княжеские корни'],['Dziecko otrzymało książęce imię', 'Ребенку дали княжеское имя']]],
	['książka', 'книга', '', []],

	['który', 'который', '', []],

	['kucharz', 'повар', '', []],
	['kupić', 'купить', '', []],
	['kurtka', 'куртка ', '', []],

	// L
	['leczyć', 'лечить', '', []],
	['lekarz', 'врач', '', []],
	['lepszy', 'лучший', '', []],
	['lokalny', 'местный', '', []],
	['ludzie', 'люди', '', []],
	['lubić', 'любить', '(про симпатию и предпочтения)', []],
	// M
	
	
	['maniery', 'манеры', '', []],
	['marzyć', 'мечтать', '', []],
	['między', 'между', '', []],

	['mniej', 'меньше', '', []],

	['mówić', 'говорить', '', []],
	['możliwe', 'возможно', '', []],

	['muzyka', 'музыка', '', []],
	['muszę', 'должен', '', []],

	['myśleć', 'думать', '', []],


	// N
	['nadawca', 'отправитель', '', []],
	['najbliższy', 'наиближайший ', '', []],
	['najlepszy', 'наилучший', '', []],
	
	['nagle', 'вдруг', '', []],
	['należał', 'принадлежал', '', []],


	['naprzeciw', 'напротив', '', []],

	['nauczyciel', 'учитель', '', []],
	['nawet', 'даже', '', []],

	['niebieski', 'синий', '', []],
	['niedaleko', 'недалеко', '', []],
	['niedziela ', 'воскресенье', '', []],
	['niego', 'него', '(без него)', []],
	['niespodzianka', 'сюрприз', '', []],
	['nigdy', 'никогда', '', []],
	['niżej', 'ниже', '', []],

	// O
	['obietnica', 'обещание', '', []],
	['odbyć', 'состояться', '(пройти / провести)', []],
	['odpowiedzieć', 'ответить', '', []],

	['około', 'около', '', []],
	['oprócz', 'кроме', '', []],

	['osiem', 'восем', '', []],
	['osoba', 'человек', '(лицо, персона)', []],
	['ostatni', 'последний', '', []],
	['otrzymać', 'получить', '', []],

	['oznacza', 'означает', '', []],



	// P
	['pałac', 'дворец', '', []],

	['piątek', 'пятница', '', []],
	['paczka', 'посылка', '', []],
	['pieniądze', 'деньги', '', []],
	['pierwszy', 'первый', '', []],
	['pierścień', 'кольцо', '', []],
	['pisać', 'писать', '', []],

	['podwórko', 'двор', '(дворовое пространство)', []],
	['podczas', 'во время', '', []],
	['północ', 'полночь', '', []],
	['pomarańczowy', 'оранжевый', '', []],
	['pomoc', 'помощь', '', []],
	['poniedziałek ', 'понедельник', '', []],
	['popularny', 'популярный', '', []],
	['poznać', 'познать', '', []],
	['później', 'позже', '', []],
	['potem', 'потом', '', []],
	['powiedzieć', 'сказать', '', []],


	['pracować', 'работать', '', []],
	['pracuje', 'работает', '', []],
	['prawo', 'право', '(направление или закон)', []],

	['prezentować', 'презентовать', '', []],
	['problem', 'проблема', '', []],
	['produkt', 'продукт', '(еда или товар или изделие)', []],
	['projektować', 'проектировать', '', []],
	['program', 'программа', '', []],
	['proszę', 'пожалуйста', '', []],


	['przeciw', 'против', '', []],
	['przed', 'перед', '', []],
	['przerwa', 'перерыв', '', []],
	['przez', 'через', '', []],
	['przygotować', 'подготовить', '', []],
	['przyjaciel', 'друг', '', []],

	['pyszne', 'вкусное', '(очень вкусное)', []],
	['pytanie', 'вопрос', '', []],
	// R
	['radio', 'радио', '', []],
	['restauracja', 'ресторан', '', []],
	['reszta', 'остальное', '(остаток, сдача)', []],
	['robić', 'делать', '', []],
	['rodzina', 'семья', '', []],



	['ruszać', 'двигаться', '', []],
	['rysunek', 'рисунок', '', []],
	['rzecz', 'вещь', '', []],
	// S
	['samoobsługa', 'самообслуживание', '', []],
	['serwuje', 'сервирует', '(подаёт)', []],
	
	['siebie', 'себя', '', []],
	['siedem', 'семь', '', []],
	['sierota', 'сирота', '', []],
	['słowo', 'слово', '', []],
	['słuchając', 'слушая', '', []],
	
	['sobota', 'суббота', '', []],
	['sobie', 'себе', '', []],
	['sprawdzić', 'проверять', '', []],
	['sprzeciw', 'возражение', '', []],
	['spotkać', 'встретить', '', []],

	['środa', 'среда', '', []],

	['student', 'студент', '', []],	
	['studio', 'студия', '', []],


	['sukienka', 'платье', '', []],

	['szczęśliwy', 'счастливый', '', []],
	['sześć', 'шесть', '', []],
	['szpital', 'больница', '', []],
	['szkoła', 'школа', '', []],
	
	// T

	['także', 'также', '', []],
	['telefon', 'телефон', '', []],
	['telewizja', 'телевизор', '', []],
	['tematyczny', 'тематический', '', []],
	['teraz', 'сейчас', '', []],


	['tobie', 'тебе', '', []],
	['towar', 'товар', '', []],

	['trochę', 'чуть-чуть', '', []],
	['trudno', 'трудно', '', []],
	['trzeba', 'нужно', '', []],

	['tutaj', 'здесь', '', []],

	['tylko', 'только', '', []],
	['twoja', 'твоя', '', []],
	// U
	['uczeń', 'ученик', '', []],

	['ulubiony', 'любимый', '(предмет)', []],
	['uniwersytet', 'университет', '', []],


	['urząd', 'учреждение', '', []],
	['urzędnik', 'чиновник', '', []],

	['uszkodzony', 'поврежденный', '', []],

	['uwaga', 'внимание', '', []],
	// W
	['wadliwy', 'бракованный', '', []],


	['więcej', 'больше', '(в количественном смысле)', []],
	['wiedzieć', 'знать', '(быть осведомлённым)', []],
	['większość', 'большинство', '', []],
	['wielki', 'великий', '', []],

	['właściciel', 'владелец', '', []],

	['wokół', 'вокруг', '', []],

	['wśród', 'среди', '', []],
	['wszystko', 'всё', '', []],

	['wtorek ', 'вторник', '', []],
	['wychodzić', 'выходить', '', []],
	['wyżej', 'выше', '', []],
	['wzdłuż', 'вдоль', '', []],

	// Z
	['zaczynać', 'начинать', '', []],
	['zakupy', 'покупки', '', []],
	['zamek', 'замок', '', []],
	['zamknięte', 'закрыто', '', []],
	['zamiast', 'вместо', '', []],
	
	['zapamiętać', 'запомнить', '', []],
	['zapomnieć', 'забудь', '', []],
	['zaprosić', 'пригласить', '', []],

	['zaraz', 'скоро', '', []],

	['zawód', 'профессия', '', []],
	['zawsze', 'всегда', '', []],
	
	['zielony', 'зеленый', '', []],

	
	['znaczenie', 'значение', '', []],
	['znaczy', 'значит', '', []],
	['znajomy', 'знакомый', '', []],

	['zmęczony', 'усталый', '', []],

	['zobaczyć', 'увидеть', '', []],
	['żółty', 'желтый', '', []],

	['zrobić', 'сделать', '', []],

	['życie', 'жизнь', '', []],
	
	
	['zwierzę', 'животное', '', []],
	['zwrócił', 'вернул', '(он вернул)', [['Zwrócił książkę do biblioteki', 'Вернул книгу в библиотеку'],['Zwrócił się do mnie o pomoc', 'Обратился ко мне за помощью'],['Zwrócił jej list', 'Вернул ей письмо'],['Zwróciła mu pierścionek', 'Вернула ему кольцо'],['Klient zwrócił wadliwy produkt', 'Клинет вернул бракованный продукт'],['Zwrócił uwagę na problem', 'Обратил внимание на проблему'],['Zwróciła dokumenty do biura', 'Вернула документы в офис'],['Zwrócił mi pieniądze', 'Вернул мне деньги'],['Zwrócił uwagę na jej słowa', 'Обратил внимание на ее слова'],['Zwrócił się do mnie po pomoc', 'Обратился ко мне за помощью']]],
	['zwrócić', 'вернуть', '(вернуть / обратить)', [['Muszę zwrócić tę książkę', 'Должен вернуть эту книгу'],['Muszę zwrócić ten telefon', 'Должен вернуть этот телефон'],['Czy mogę zwrócić ten bilet?', 'Могу ли я вернуть этот билет?'],['Musisz zwrócić dług', 'Вы должны вернуть долг'],['Musisz zwrócić na to uwagę', 'Вам нужно обратить на это внимание'],['Proszę zwrócić mi resztę', 'Пожалуйста, верните мне сдачу'],['Muszę zwrócić książkę do biblioteki', 'Нужно вернуть книгу в библиотеку'],['Chcę zwrócić ten towar', 'Хочу вернуть этот товар'],['Nie zapomnij zwrócić kluczy', 'Не забудьте вернуть ключи'],['Chciałbym zwrócić bilet', 'Хотел бы вернуть билет']]],
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