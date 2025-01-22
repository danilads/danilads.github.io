const WORDS1 = [
	// A
	['architekt', 'архитектор'],

	// B
	['bardzo', 'очень'],
	['bardziej', 'более'],

	['będzie', 'будет'],
	['blisko', 'близко'],
	['biuro', 'бюро'],
	['biały', 'белый'],
	['brązowy', 'коричневый'],

	// C

	['ciebie', 'тебя'],
	['chory', 'больной'],
	['cześć', 'привет'],
	['czego', 'чего'],
	['czekać', 'ждать'],
	['czekając', 'ожидая'],
	['czarny', 'черный'],
	['czerwony', 'красный'],
	// D
	['dentysta', 'дантист'],
	['dziennikarz', 'журналист'],
	['dzisiaj', 'сегодня'],
	['dokumenty', 'документы'],
	['dziękuję', 'спасибо'],
	['dopóki', 'пока'],
	['dobrze', 'хорошо'],
	['daleko', 'далеко'],
	['dywan', 'ковёр'],
	['dziesięć', 'десять'],
	// E
	// F
	['fotografia', 'фотография'],
	['firma', 'фирма'],
	['fotograf', 'фотограф'],
	// G

	['gdzie', 'где'],
	['gabinet', 'кабинет'],
	['gotować', 'готовить'],
	// H
	['hotel', 'отель'],
	// I
	['impreza', 'вечеринка'],
	['informacja', 'информация'],
	// J

	['język', 'язык'],
	['jedzenie', 'еда'],
	['jeśli', 'если'],
	['jeszcze', 'еще'],

	// K
	['każdy', 'каждый'],

	['który', 'который'],
	['kolor', 'цвет'],
	['konkretny', 'конкретный'],
	['komputer', 'компьютер'],
	['kobieta', 'женщина'],
	['kryzys', 'кризис'],
	['kiedy', 'когда'],
	['kelner', 'официант'],
	['kucharz', 'повар'],
	// L
	['leczyć', 'лечить'],
	['lekarz', 'врач'],
	['ludzie', 'люди'],
	// M

	['między', 'между'],

	['mniej', 'меньше'],

	['mówić', 'говорить'],
	// N
	['najbliższy', 'ближайший'],
	['nauczyciel', 'учитель'],
	['nagle', 'вдруг'],
	['naprzeciw', 'напротив'],
	['nawet', 'даже'],

	['niżej', 'ниже'],
	['nigdy', 'никогда'],
	['niedaleko', 'недалеко'],

	['niebieski', 'синий'],
	// O
	['około', 'около'],
	['oprócz', 'кроме'],
	['osoba', 'человек'],
	['ostatni', 'последний'],
	['odpowiedzieć', 'ответить'],

	// P

	['podczas', 'во время'],
	['pisać', 'писать'],

	['pierwszy', 'первый'],
	['poznać', 'познать'],
	['popularny', 'популярный'],
	['powiedzieć', 'сказать'],
	['potem', 'потом'],

	['pomarańczowy', 'оранжевый'],
	['przez', 'через'],
	['przed', 'перед'],
	['przeciw', 'против'],
	['przyjaciel', 'друг'],
	['pracuje', 'работает'],
	['prezentować', 'презентовать'],
	['pracować', 'работать'],
	['program', 'программа'],
	['projektować', 'проектировать'],
	['przygotować', 'приготовить'],

	['pytanie', 'вопрос'],
	// R
	['robić', 'делать'],
	['restauracja', 'ресторан'],
	['rzecz', 'вещь'],
	['radio', 'радио'],
	['ruszać', 'двигаться'],
	['rysunek', 'рисунок'],
	// S
	['sobie', 'себе'],
	['siebie', 'себя'],
	['sierota', 'сирота'],
	['słuchając', 'слушая'],
	['szpital', 'больница'],
	['student', 'студент'],
	['szkoła', 'школа'],
	['serwuje', 'сервирует'],
	['studio', 'студия'],
	['sprzeciw', 'возражение'],
	// T

	['telewizja', 'телевизор'],
	['telefon', 'телефон'],

	['teraz', 'сейчас'],
	['tutaj', 'здесь'],
	['trzeba', 'нужно'],
	['trochę', 'чуть-чуть'],
	['tylko', 'только'],
	// U
	['kochany', 'любимый'],
	['uczeń', 'ученик'],
	['urząd', 'учреждение'],
	['uwaga', 'внимание'],
	['uniwersytet', 'университет'],
	['urzędnik', 'чиновник'],
	// W
	['większość', 'большинство'],
	['więcej', 'больше'],
	['wiedzieć', 'знать'],
	['wielki', 'великий'],
	['wokół', 'вокруг'],
	['wśród', 'среди'],
	['wszystko', 'всё'],
	['wyżej', 'выше'],
	['wzdłuż', 'вдоль'],
	['wrócić', 'вернуться'],
	['włamywacz', 'взломщик'],

	// Z
	['zwracać', 'возвращать'],
	['zamiast', 'вместо'],
	['zaraz', 'скоро'],
	['zawód', 'профессия'],
	['zaczynać', 'начинать'],
	['zawsze', 'всегда'],
	['zwierzę', 'животное'],
	['żółty', 'желтый'],
	['zielony', 'зеленый'],
	['zwrócić', 'вернуть']

];

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