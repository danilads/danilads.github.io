// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "a"
const WORDS2 = [
	// A
	['a', 'а', '', ['A co u Ciebie?', 'A ty jak myślisz?', 'A teraz twoja kolej.', 'A to niespodzianka!', 'A gdzie on jest?', 'A jak to zrobić?', 'A co to znaczy?', 'A ty co robisz?']],
	['ale', 'но', '', ['Chciałem iść, ale nie mogłem.', 'Dziękuję, ale nie trzeba', 'Zmęczony, ale szczęśliwy', 'Chciałem pomóc, ale nie wiedziałem jak.', 'Możemy to zrobić, ale później']],
	// B
	['bar', 'бар', '', ['Idziemy dziś do baru?', 'To mój ulubiony bar.', 'Ten bar jest zamknięty.', 'To bar samoobsługowy.', 'Gdzie jest najbliższy bar?', 'To bar tylko dla dorosłych.', 'Bar serwuje lokalne piwo.', 'Lubisz bary tematyczne?', 'W barze grała dobra muzyka.', 'W tym barze pracuje mój znajomy.']], 
	['bez', 'без', '', []],
	['bo', 'потому что', '', []],
	['było', 'было', '', []],
	['być', 'быть', '', []],
	// C
	['cały', 'весь', '', []],

	['co', 'что', '', []],
	['coś', 'кое-что', '', []],
	['czas', 'время', '', []],


	// D
	['dane', 'данные', '', []], 
	['do', 'к', '', []],
	['dla', 'для', '', []],

	['dom', 'дом', '', []],

	// E
	// F

	// G
	['grać', 'играть', '', []],

	// H

	// I
	['i', 'и', '', []],
	['ile', 'сколько', '', []],
	['iść', 'идти', '', []],

	// J
	['jak', 'как', '', []],
	['jest', 'есть', '(быть)', []],
	['jeść', 'есть', '(кушать)', []],
	['już', 'уже', '', []],



	// K
	['koń', 'конь', '', []],
	['kraj', 'страна', '', []],

	// L
	['lody', 'мороженое', '', []],
	['lewo', 'лево', '', []],
	// M
	['ma', 'имеет', '', []],
	['my', 'мы', '', []],
	['mieć', 'иметь', '', []],

	['mój', 'мой', '', []],
	['może', 'может', '', []],
	['mógł', 'мог', '', []],

	// N
	['na', 'на', '', []],
	['nad', 'над', '', []],

	['nie', 'нет', '', []],
	['nic', 'ничего', '', []],



	// O
	['o', 'о', '', []],
	['od', 'от', '', []],
	['obok', 'рядом', '', []],


	// P
	['piwo', 'пиво', '', []],
	['po', 'после', '', []],
	['pod', 'под', '', []],
	['poza', 'вне', '', []],

	['przy', 'при', '', []],

	// R
	['ruch', 'движение', '', []],
	// S

	// T
	['tam', 'там', '', []],
	['też', 'тоже', '', []],
	['ten', 'этот', '', []],

	['to', 'это', '', []],


	['typ', 'тип', '', []],
	['ty', 'ты', '', []],

	// U
	['u', 'у', '', []],

	['uczy', 'учит', '', []],

	// W
	['w', 'в', '', []],
	// Z
	['z', 'из', '', []],
	['za', 'за', '', []],
	['zdać', 'сдать', '', []],
	['zęby', 'зубы', '', []],
	['znać', 'знать', '(просто знать)', []]
	
];
// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "a"

// by, czy, ni, no, że, że
// są, ja, ty, on, ona, ono, wy, oni, one, się
// ci, mi, go, mu, ją, je, jej, im, ich, mnie, jego, jemu, nami, wami, ich, im

// nas, tam, kto, co, gdy, raz, tak, nie, tu, te, to, ile, czy, lub, ani
// ten, był, tego
//  pan, mają, coś, lub, taki, nim, sam, 

// wasz, oraz, mój, niż, nikt, ktoś, móc, gra, stąd, źle, mimo, albo, ktoś, nikt, tak, aby, tam, nowe, dni, noce, lata, robi,

// kawa, woda, wino, ryba, buty, góra, las, łąka, pole, wieś, most, okno, stół, zlew, nóż, mop, kosz, mysz, klej
		// mapa, list, akt, kwit, druk, apel, kara, pakt, rada, sejm, rząd, test, etat, rola, zysk, imię, znak, logo, herb, gag, żart
/*
bądź „будь‟
kąt  „угол
wąsy  „усы
 lato „лето
cień „тень
źle пло- хо‟,
giąć „гнуть
kura „курица
sen „сон‟,
 ręka „рука‟
 wąsy „усы‟
 ząb „зуб
krąg „круг‟
 kąt „угол‟
 dąb „дуб‟
gest - жест
pije „пьет‟;
 rząd – ряд
żona „жена‟
but – ботинок
rum – ром
sum – сом
póty – до тех пор
róża – роза
hall „холл‟
mózg – мозг
król – король
chór – хор
miód – мед
góra – гора
nikt – никто
zima – зима
kino – кинотеатр
gość  - гость
pech „неудача
['wraz', 'включая'],właśnie ?
[niby, вроде], jakby. ?
oddać ?
слишком – za, zbyt. ?

*/