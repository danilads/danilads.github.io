// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "ale"
const WORDS2 = [
	// A
	['a', 'а', '', [['A co u сiebie?','А что у тебя?'],['A ty jak myślisz?','А ты как думаешь?'],['A teraz twoja kolej','А теперь твоя очередь'],['A to niespodzianka','А это сюрприз!'],['A gdzie on jest?','А где он?'],['Byłem tam, a ty gdzie? ','Был там, а ты где?'],['A jak to zrobić?','А как это сделать?'],['A co to znaczy?','А что это значит?'],['A ty co robisz?','А ты что делаешь?'],['Masz czas, a ja nie','Есть время, а у меня нет']]],
	['ale', 'но', '', [['Chciałem iść, ale nie mogłem', 'Хотел пойти, но не смог'], ['Dziękuję, ale nie trzeba', 'Спасибо, но не нужно'],['Zmęczony, ale szczęśliwy', 'Уставший, но счастливый'],['Chciałem pomóc, ale nie wiedziałem jak', 'Я хотел помочь, но не знал как'],['Możemy to zrobić, ale później', 'Можем это сделать, но позже'],['Lubię kawę, ale wolę herbatę', 'Люблю кофе, но предпочитаю чай'],['Nie lubię biegać, ale muszę', 'Не люблю бегать, но должен'],['To trudne, ale możliwe', 'Это трудно, но возможно'],['Nie wiem, ale sprawdzę', 'Я не знаю, но проверю'],['Fajnie, ale drogo', 'Классно, но дорого']
	]],
	// B
	['bar', 'бар', '', [['Idziemy dziś do baru?', 'Идём сегодня в бар?'],['To mój ulubiony bar', 'Это мой любимый бар'],['Ten bar jest zamknięty', 'Этот бар закрыт'],['To bar samoobsługowy', 'Это бар самообслуживания'],['Gdzie jest najbliższy bar?', 'Где ближайший бар?'],['To bar tylko dla dorosłych', 'Это бар только для взрослых'],['Bar serwuje lokalne piwo', 'Бар подает местное пиво'],['Lubisz bary tematyczne?', 'Любишь бары тематические?'],['W barze grała dobra muzyka', 'В баре играла хорошая музыка'],['W tym barze pracuje mój znajomy', 'В этом баре работает мой знакомый']
	]], 
	['bez', 'без', '', []],
	['bo', 'потому что', '', []],
	['było', 'было', '', []],
	['być', 'быть', '', []],
	// C
	['cały', 'весь', '', []],
	['chcę', 'хочу', '', []],

	['co', 'что', '', []],
	['coś', 'кое-что', '', []],
	['czas', 'время', '', []],


	// D
	['dane', 'данные', '', []], 
	['do', 'к', '', []],
	['dla', 'для', '', []],

	['dom', 'дом', '', []],
	['dług', 'долг', '', []],

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
	['ja', 'я', '', []],
	['jak', 'как', '', []],
	['jej', 'её', '', []],
	['jest', 'есть', '(быть)', []],
	['jeść', 'есть', '(кушать)', []],
	['już', 'уже', '', []],



	// K
	['kawa', 'кофе', '', []],
	['koń', 'конь', '', []],
	['kraj', 'страна', '', []],

	// L
	['lody', 'мороженое', '', []],
	['lewo', 'лево', '', []],
	['list', 'письмо', '(список / лист растения)', []],
	// M
	['ma', 'имеет', '', []],
	['masz', 'есть', '(у тебя есть?)', []],
	['my', 'мы', '', []],
	['mieć', 'иметь', '', []],

	['mój', 'мой', '', []],
	['może', 'может', '', []],
	['mogę', 'могу', '', []],
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
	['sofa', 'диван', '', []],
	// T
	['tam', 'там', '', []],
	['też', 'тоже', '', []],
	['ten', 'этот', '', []],

	['to', 'это', '', []],


	['typ', 'тип', '(вид, категория / парень, чувак)', []],
	['ty', 'ты', '', []],

	// U
	['u', 'у', '', []],

	['uczy', 'учит', '', []],

	// W
	['w', 'в', '', []],
	['wolę', 'предпочитаю', '', []],
	['wiem', 'знаю', '', []],
	// Z
	['z', 'из', '', []],
	['za', 'за', '', []],
	['zdać', 'сдать', '', []],
	['zęby', 'зубы', '', []],
	['znać', 'знать', '(просто знать)', []]
	
];
// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "ale"

// by, czy, ni, no, że, że
// są, ja, on, ona, ono, wy, oni, one, się
// ci, mi, go, mu, ją, je, jej, im, ich, mnie, jego, jemu, nami, wami, ich, im

// nas, kto, gdy, raz, tak, tu, te, to, czy, lub, ani
//  był, tego
//  pan, mają, lub, taki, nim, sam, 

// wasz, oraz, niż, nikt, ktoś, móc, gra, stąd, źle, mimo, albo, ktoś, nikt, tak, aby, nowe, dni, noce, lata, robi,

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
pech - неудача
pięć – пять
['wraz', 'включая'],właśnie ?
[niby, вроде], jakby. ?
oddać ?
слишком – za, zbyt. ?

*/