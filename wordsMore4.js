// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "a"
const WORDS1 = [
	// A
	['architekt', 'архитектор', '', []],

	// B
	['bardzo', 'очень', '', []],
	['bardziej', 'более', '', []],

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

	['kochany', 'любимый', '(человек)', []],
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
	['lubić', 'любить', '', []],
	// M

	['między', 'между', '', []],

	['mniej', 'меньше', '', []],

	['mówić', 'говорить', '', []],

	['myśleć', 'думать', '', []],
	['muzyka', 'музыка', '', []],

	


	// N
	['najbliższy', 'ближайший', '', []],
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

	['osoba', 'человек', '', []],
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

	['telewizja', 'телевизор', '', []],
	['telefon', 'телефон', '', []],
	['teraz', 'сейчас', '', []],
	['tematyczny', 'тематический', '', []],


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
	['więcej', 'больше', '', []],
	['wiedzieć', 'знать', '', []],
	['wielki', 'великий', '', []],
	['wokół', 'вокруг', '', []],
	['wśród', 'среди', '', []],
	['wszystko', 'всё', '', []],
	['wyżej', 'выше', '', []],
	['wzdłuż', 'вдоль', '', []],
	['wrócić', 'вернуться', '', []],

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
	
	['zwrócić', 'вернуть', '', []],
	['zwierzę', 'животное', '', []],
	['zwracać', 'возвращать', '', []]
];
// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "a"

/*
[skandal  - безобразие] ?
[беспредел swawola, anarchia]?
oddać ? 
[весьма – całkiem, dosyć] ?
вид – widok / rodzaj ?
вовсе – całkiem / wcale ?
возвращаться – powracać / wracać ?


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