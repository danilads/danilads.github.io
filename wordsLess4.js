// Przyprowadź mi 20 najczęściej używanych krótkich zdań ze słowem "ale"
const WORDS2 = [
	// A
	['a', 'а', '', [['A co u ciebie?','А что у тебя?'],['A ty jak myślisz?','А ты как думаешь?'],['A teraz twoja kolej','А теперь твоя очередь'],['A to niespodzianka','А это сюрприз!'],['A gdzie on jest?','А где он?'],['Byłem tam, a ty gdzie? ','Был там, а ты где?'],['A jak to zrobić?','А как это сделать?'],['A co to znaczy?','А что это значит?'],['A ty co robisz?','А ты что делаешь?'],['Masz czas, a ja nie','Есть время, а у меня нет']]],
	['ale', 'но', '', [['Chciałem iść, ale nie mogłem', 'Хотел пойти, но не смог'], ['Dziękuję, ale nie trzeba', 'Спасибо, но не нужно'],['Zmęczony, ale szczęśliwy', 'Уставший, но счастливый'],['Chciałem pomóc, ale nie wiedziałem jak', 'Я хотел помочь, но не знал как'],['Możemy to zrobić, ale później', 'Можем это сделать, но позже'],['Lubię kawę, ale wolę herbatę', 'Люблю кофе, но предпочитаю чай'],['Nie lubię biegać, ale muszę', 'Не люблю бегать, но должен'],['To trudne, ale możliwe', 'Это трудно, но возможно'],['Nie wiem, ale sprawdzę', 'Я не знаю, но проверю'],['Fajnie, ale drogo', 'Классно, но дорого']]],
	// B
	['bar', 'бар', '', [['Idziemy dziś do baru?', 'Идём сегодня в бар?'],['To mój ulubiony bar', 'Это мой любимый бар'],['Ten bar jest zamknięty', 'Этот бар закрыт'],['To bar samoobsługowy', 'Это бар самообслуживания'],['Gdzie jest najbliższy bar?', 'Где ближайший бар?'],['To bar tylko dla dorosłych', 'Это бар только для взрослых'],['Bar serwuje lokalne piwo', 'Бар подает местное пиво'],['Lubisz bary tematyczne?', 'Любишь бары тематические?'],['W barze grała dobra muzyka', 'В баре играла хорошая музыка'],['W tym barze pracuje mój znajomy', 'В этом баре работает мой знакомый']]], 
	['bal', 'бал', '(танцевального мероприятия) ', [['Idę dziś na bal', 'Я сегодня иду на бал'],['Bal zaczyna się o ósmej', 'Бал начинается в восемь'],['Kupiłam sukienkę na bal', 'Я купила платье на бал'],['On zaprosił mnie na bal', 'Он пригласил меня на бал'],['Bal odbędzie się w sobotę', 'Бал состоится в субботу'],['Spotkaliśmy się na balu', 'Мы встретились на балу'],['Bal odbył się w pałacu', 'Бал состоялся во дворце'],['Na balu było dużo ludzi', 'На балу было много людей'],['Bal zakończył się o północy', 'Бал закончился в полночь'],['Pamiętasz nasz pierwszy bal?', 'Ты помнишь наш первый бал?']]],
	['bez', 'без', '', [['Nie mogę żyć bez ciebie', 'Я не могу жить без тебя'],['Zrobiłem to bez problemu', 'Я сделал это без проблем'],['Bez kawy nie funkcjonuję', 'Без кофе я не функционирую'],['Pracuję bez przerwy', 'Я работаю без перерыва'],['Bez niego to niemożliwe', 'Без него это невозможно'],['Nie ruszam się bez telefonu', 'Я не двигаюсь без телефона'],['To było bez znaczenia', 'Это не имело значения'],['Nie mogę żyć bez muzyki', 'Я не могу жить без музыки'],['Zrobił to bez pytania', 'Он сделал это без вопросов'],['Nie wychodź bez kurtki', '']]],
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
	['dom', 'дом', '', []],

	['dla', 'для', '', []],
	['dług', 'долг', '', []],

	['dużo', 'много', '', []],
	
	['dwór', 'королевский двор', '(Усадьба / поместье)', []],
	['dwa', 'два', '', []],

	// E
	// F

	// G
	['grać', 'играть', '', []],

	// H

	// I
	['i', 'и', '', []],
	['ich', 'их', '', []],
	['ile', 'сколько', '', []],

	['imię', 'имя', '', []],
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
	['list', 'письмо', '(или список или лист растения)', []],
	// M
	['ma', 'имеет', '', []],
	['masz', 'есть', '(у тебя есть?)', []],
	
	['miał', 'имел', '', []],
	['mieć', 'иметь', '', []],

	['mój', 'мой', '', []],
	['może', 'может', '', []],
	['mogę', 'я могу', '', []],
	['mógł', 'мог', '', []],

	['my', 'мы', '', []],

	// N
	['na', 'на', '', []],
	['nad', 'над', '', []],
	['nasz', 'наш', '', []],

	['nie', 'нет', '', []],
	['nic', 'ничего', '', []],



	// O
	['o', 'о', '', []],
	['obok', 'рядом', '', []],
	['od', 'от', '', []],

	// P
	['pięć', 'пять', '', []],
	['piwo', 'пиво', '', []],
	['po', 'после', '', []],
	['pod', 'под', '', []],
	['poza', 'вне', '', []],

	['przy', 'при', '', []],

	// R
	['ród', 'род', '(семья династия)', []],
	['ruch', 'движение', '', []],
	// S
	['sala', 'зал', '', []],
	['sofa', 'диван', '', []],
	// T
	['tam', 'там', '', []],
	['też', 'тоже', '', []],
	['ten', 'этот', '', []],

	['trzy', 'три', '', []],

	['to', 'это', '', []],


	['typ', 'тип', '(вид, категория / парень, чувак)', []],
	['ty', 'ты', '', []],


	// U
	['u', 'у', '', []],

	['uczy', 'учит', '', []],

	// W
	['w', 'в', '', []],
	['wiem', 'знаю', '', []],
	['wolę', 'предпочитаю', '', []],

	// Z
	['z', 'из', '', []],
	['za', 'за', '', []],
	['zdać', 'сдать', '', []],
	['zęby', 'зубы', '', []],
	['znać', 'знать', '(просто знать)', []],
	['żyć', 'жить', '', []]
	
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