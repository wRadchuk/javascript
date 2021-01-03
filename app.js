/**
            Файл с описанием основ Javascript

    Решил пробежаться по основам Javascript. В 2014 году пробовал писать на Javascript для себя и мне
    не понравилось. На тот момент я изучал C++ и OpenGL которые меня влекли куда больше. Затем решил
    выучить Java SE, так как раньше писал на Java ME и был хорошо знаком с синтаксисом языка. Дальше
    был основным и единственным разработчиком в Android стартапе, ну в общем было не до Javascript.
    Сейчас осваиваю Frontend разработку и понимаю что без базовых знаний JS нет смысла в изучении
    его библиотек и фреймворков. К тому же спустя неделю изучения JS узнал для себя кучу нового,
    например стрелочные функции. Раньше не в одном из пяти известных языков на которых писал - не
    встречал стрелочных функций и везде была строгая типизация данных. Ну и к тому же JS может
    работать практически везде, особенно с появлением Node JS. Уже не 2014 год и JS достаточно развит,
    а я так не разу на нем b не писал. Не хорошо как-то и я решил исправить данную ситуацию. Тем более
    мне как Frontend разработчику просто необходимо его выучить на достаточном уровне.

    Нахватавшись некоторых знаний решил реализовать графическую консоль. Это не так уж и сложно, но мне
    кажется быдлокода накидал и в дальнейшем я узнаю так ли это или нет. На первое время пойдет, учу JS
    вторую неделю и решил поэтапно расписать здесь про переменные, константы, операторы и операции над
    операндами, логические операторы, циклы, массивы, функции, объекты и всё то что нужно знать. Так
    что это по сути некая шпаргалка для меня и случайного пользователя заблудившегося здесь.

*/





/**
    Как мне кажется это быдлокод, но тем немение он и выполняет то что я от него хотел...
    Случайный пользователь который смотрит на этот быдло код и не понимает его - сможет понять суть
    читая комментарии...
*/

const HTML_CONSOLE = document.getElementById('html__console') // константа для доступа к HTML тегу с id = "html__console"
let tempStorage = '' // пустая строка для хранения HTML кода


/***
    Создает блочный тег LI
    tagClass - класс для стилизации в CSS
    message - контент выводимый внутри тега
    return - возвращает конкатенированную строку
*/
function createBlockTag(tagClass, message) {
    return '<li class="' + tagClass + '">' + message + '<\/li>'
}

/***
    Создает не блочный тег SPAN
    tagClass - класс для стилизации в CSS
    value - переменная у которой хотим узнать тип или значение
    message - контент выводимый перед тегом
    return - возвращает конкатенированную строку
*/
function createUnBlockTag(tagClass, value, message) {
    return message + '<span class="' + tagClass + '">' + value + '<\/span>'
}


/***
    Для вывода заголовков в мою HTML консоль
    Сначала создает тег с контентом, а затем
    аккамулирует его в переменную tempStorage

    message -  контент выводимый в тег
*/
function addSubtitle(message) {
    tempStorage += createBlockTag('box__subtitle', message)
}

/***
    Для вывода обычного текста в мою HTML консоль
    Сначала создает тег с контентом, а затем
    аккамулирует его в переменную tempStorage

    message -  контент выводимый в тег
*/
function addText(message) {
    tempStorage += createBlockTag('box__text', message)
}

/***
    Для вывода блока с кодом в мою HTML консоль
    Сначала создает тег с контентом, а затем
    аккамулирует его в переменную tempStorage

    message -  контент выводимый в тег
*/
function addCode(message) {
    tempStorage += createBlockTag('box__code', message)
}

/***
    Для вывода блока с выполненным кодом в мою HTML консоль
    Сначала создает тег с контентом, а затем
    аккамулирует его в переменную tempStorage

    message -  контент выводимый в тег
*/
function addConsole(message) {
    tempStorage += createBlockTag('box__console', message)
}

/***
    Эксперементальная функция для вывода
    информации о переменной. Сначала создает
    теги с контентом, а затем аккамулирует их
    в переменную tempStorage

    message -  контент выводимый в тег
    value   - переменная у которой хотим
    узнать тип и значение
*/
function addExCode(message, value) {
    let temp = createUnBlockTag('box__ex__type', typeof value, ': тип - ')
    temp +=    createUnBlockTag('box__ex_value', value, ' значение - ')
    message += temp
    tempStorage += createBlockTag('box__ex', message)
}


/***
    Выводит в HTML консоль всё что было
    аккамулированно в переменной tempStorage.
    Следует вызивать после всех вызванных функций
    для работы с консолью в самом конце программы.
*/
function printHTMLLog() {
    HTML_CONSOLE.innerHTML = tempStorage
    tempStorage = ''
}


// Ниже привожу пример вызова функций.

//          addSubtitle('Я подзаголовок')
//          addText('Я просто текст')
//          addCode('Я пример кода')
//          addConsole('Я результат исполнения кода')
//          addExCode('Я знаю что в переменной и какой у неё тип', 'Я текстовая переменная')

//          printHTMLLog() // Я нужна для вывода в HTML консоль после этих 4 функций

// Об этом поговорим позже...



addSubtitle('Цель этого скрипта-репозитория')


addText(`Решил пробежаться по основам Javascript. В 2014 году пробовал писать на Javascript для себя и мне
    не понравилось. На тот момент я изучал C++ и OpenGL которые меня влекли куда больше. Затем решил
    выучить Java SE, так как раньше писал на Java ME и был хорошо знаком с синтаксисом языка. Дальше
    был основным и единственным разработчиком в Android стартапе, ну в общем было не до Javascript.
    Сейчас осваиваю Frontend разработку и понимаю что без базовых знаний JS нет смысла в изучении
    его библиотек и фреймворков. К тому же спустя неделю изучения JS узнал для себя кучу нового,
    например стрелочные функции. Раньше не в одном из пяти известных языков на которых писал - не
    встречал стрелочных функций и везде была строгая типизация данных. Ну и к тому же JS может
    работать практически везде, особенно с появлением Node JS. Уже не 2014 год и JS достаточно развит,
    а я так не разу на нем b не писал. Не хорошо как-то и я решил исправить данную ситуацию. Тем более
    мне как Frontend разработчику просто необходимо его выучить на достаточном уровне.`);

addText(`Нахватавшись некоторых знаний решил реализовать графическую консоль. Это не так уж и сложно, но мне
    кажется быдлокода накидал и в дальнейшем я узнаю так ли это или нет. На первое время пойдет, учу JS
    вторую неделю и решил поэтапно расписать здесь про переменные, константы, операторы и операции над
    операндами, логические операторы, циклы, массивы, функции, объекты и всё то что нужно знать. Так
    что это по сути некая шпаргалка для меня и случайного пользователя заблудившегося здесь.`);



/*              1. Переменные и константы

        Переменные - это очень просто. Переменная служит для хранения и оперирования данными. В Javascrit нет
    стогой типизации и поэтому мы можем в одну переменную в ходе работы программы записывать любые данные.
    Если нам нужно записать статичные данные и в дальнейшем мы не будем их переопределять, то следует использовать
    константы для хранения таких данных. Константа - это такая же переменная, но в неё мы не можем повторно записать
    значение. Чтобы узнать тип данных переменной или константы - пишем конструкцию typeof:

    let name = 'Владимир'     // создать переменную с именем name и присвоить значение Владимир
    console.log(name)         // вывести значение переменной в консоль
    console.log(typeof name)  // вывести тип переменной в консоль
    name = 'Сергей'           // перезаписать значение переменной

*/

addSubtitle('Переменные и константы')



addText(`Переменные - это очень просто. Переменная служит для хранения и оперирования данными. В Javascrit нет
стогой типизации и поэтому мы можем в одну переменную в ходе работы программы записывать любые данные.
Если нам нужно записать статичные данные и в дальнейшем мы не будем их переопределять, то следует использовать
константы для хранения таких данных. Константа - это такая же переменная, но в неё мы не можем повторно записать
значение. Чтобы узнать тип данных переменной или константы - пишем конструкцию typeof:`);


addCode(`let name = 'Владимир'     // создать переменную с именем name и присвоить значение Владимир`)
addCode(`console.log(name)         // вывести значение переменной в консоль`)
addCode(`console.log(typeof name)  // вывести тип переменной в консоль`)
addCode(`name     = 'Сергей'       // перезаписать значение переменной`)



addText(`Ниже выводим переменные и константы в нашу консоль и посмотрим что содержится в них и какой тип данных.`)

let name  = 'Владимир' // переменная с типом string    (текст)
let age   = 24         // переменная с типом number    (числа)
let isMan = true       // переменная с типом boolean   (логика)
let money = 10.567     // переменная с типом number    (float)
let help               // переменная с типом undefined (не определена)
let info  = null       // переменная с типом null      (умышленно пустая)
let big   = 10n        // переменная с типом BigInt    (для больших чисел)


// Выводим в консоль и на html страницу
addExCode('Переменная с типом string    (текст)', name)
addExCode('Переменная с типом number    (числа)',  age)
addExCode('Переменная с типом boolean   (логика)',  isMan)
addExCode('Переменная с типом number    (float)',  money)
addExCode('Переменная с типом undefined (не определена)',  help)
addExCode('Переменная с типом null      (умышленно пустая)',  info)
addExCode('Переменная с типом BigInt    (для больших чисел)',  big)

const hairColor = 'черный' // константа с типом string (текст)
const speed     = 260.5    // константа с типом number (float)

addExCode('Константа с типом string (текст)',  hairColor)
addExCode('Константа с типом number (float)',  speed)




/*              1. Операторы Javascript

        Операторы - для чего нужны операторы потянто из названия. У нас есть переменные и мы можем их переопределять.
        Числа мы можем складывать, отнимать, делить и т.п. Строки мы например можем соединить (конкатенация) или сравнить.
        Также мы можем сравнивать логические переменные. В общем суть ясна - мы можем оперировать данными и для этого у нас
        в распоряжении есть операторы. У операторов также есть приоритеты выполнения и об этом поговорим ниже в примерах кода.
*/

addSubtitle('Операторы Javascript')

addText(`Операторы - для чего нужны операторы потянто из названия. У нас есть переменные и мы можем их переопределять.
        Числа мы можем складывать, отнимать, делить и т.п. Строки мы например можем соединить (конкатенация) или сравнить.
        Также мы можем сравнивать логические переменные. В общем суть ясна - мы можем оперировать данными и для этого у нас
        в распоряжении есть операторы. У операторов также есть приоритеты выполнения и об этом поговорим ниже в примерах кода.`)


// Создадим переменные и попробуем оперировать данными
let letA = 10
let letB = 5
let letC = '10'
let letD = true
let letE = false


addText(`Создадим переменные и попробуем оперировать данными. Поработаем с операторами присвоения, рассмотрим 4 из 13 операторов.`)


addConsole(`Оператор сложения  (${letA} + ${letB}) = ` + (letA + letB))
addConsole(`Оператор вычитания (${letA} - ${letB}) = ` + (letA - letB))
addConsole(`Оператор умножения (${letA} * ${letB}) = ` + (letA * letB))
addConsole(`Оператор деления   (${letA} / ${letB}) = ` + (letA / letB))


addText(`Попытка сложить строку с числом обернется в итоге конкатенацией. Из-за разности типов мы просто добавим к строке число в виде строки.`)

addConsole(`Оператор конкатенации   ('${letC}' + ${letA}) = ` + `'` +(letC + letA) + `'`)

addText(`Чтобы сложить строку с числом можно воспользоваться унарным оператором + перед строкой. Смотрите пример и результат ниже`)

addConsole(`Оператор сложения и унарный оператор + перед строкой  (+'${letC}' + ${letA}) = ` + (+letC + letA))


addText(`Есть и другие способы приведения типов и если вдруг будет необходимо например сложить или сравнить строку содержащую число с
числом, то выше была продемонстрирована возможная реализация. Также есть операторы равно, не равно, строго равно, строго не равно,
оператор больше-меньше, оператор больше или равно и меньше или равно  - она называются операторами сравнения. Давайте протестируем их
на наших переменных.`)


addConsole(`Оператор равно              ('${letC}' == ${letA})  = ` + (letC  == letA))
addConsole(`Оператор не равно           (${letD} != ${letE})    = ` + (letD  != letE))
addConsole(`Оператор строго равно       ('${letC}' === ${letA}) = ` + (letC === letA))
addConsole(`Оператор строго не равно    (${letD} !== ${letE})   = ` + (letD !== letE))
addConsole(`Оператор больше             (${letA} > ${letB})     = ` + (letA   > letB))
addConsole(`Оператор больше или равно   (+'${letC}' >= ${letA}) = ` + (+letC >= letA))
addConsole(`Оператор меньше             (+'${letC}' < ${letA})  = ` + (+letC  < letA))
addConsole(`Оператор меньше или равно   (${letA} <= ${letB})    = ` + (letA  <= letB))


addText(`Главное что следует запоинить, оператор строго рано вернет лож если строка с значением '10' будет сравниватся с числом 10,
а оператор равно вернет в этом случаи правду, так как он игнорирует тип данных. Так же существуют арифметические и бинарные
операторы, но их мы рассматривать не будем. При желании это легко гуглится и в принципе в них довольно легко разобраться. Возможно
ниже в коде будет приведен оператор инкремент и декремент, ну и мы использовали унарный оператор + для приведения строки в число.`)
addText(``)
addText(`Пожалуй финалом темы операторов и последним о чем стоит поговорить - будут логические операторы: И - если оба правда, то
вернет правду; ИЛИ - хоть один правда, то вернет правду; НЕ - была правда, тогда станет ложью и наоборот лож станет правдой.`)

addConsole(`Логическое И   (${letD} && ${letE}) = ` + (letD && letE))
addConsole(`Логическое ИЛИ   (${letD} || ${letE}) = ` + (letD || letE))
addConsole(`Логическое НЕ  !(${letD}) = ` + (!letD))


addText(`Ну вот и всё что следует знать об операторах для начала. Дальше в коде возможно разберём
и другие операторы. На этом тема закрыта и мы двигаемся дальше.`)


addSubtitle('Циклы и массивы')

addText(`В Javascript как и в других языках программирования существуют массивы и циклы для работы с ними.
Давайте создадим массив с числами и выведем его с помощью простого цикла for.`)

addCode(`let array = [1, 2, 3]`)
addCode(`for(let i = 0; i < array.length; i++) {`)
addCode(`console.log('Number:  + array[i] + ')`)
addCode(`}`)
const array = [1, 2, 3]
for(let i = 0; i < array.length; i++) {
    addConsole(`console.log('Number: ` + array[i] + `')`)
}


addText(`Теперь воспользуемся циклом for...of`)


addCode(`for(let num of array) {`)
addCode(`console.log('Number:  + num + ')`)
addCode(`}`)

for(let num of array) {
    addConsole(`console.log('Number:  ${num} ')`)
}


addText(`Теперь воспользуемся циклом while`)


addCode(`let itter = 0`)
addCode(`while (itter < array.length) {`)
addCode(`console.log('Number: + array[itter] + ')`)
addCode(`if(itter === array.length) { break; }`)
addCode(`itter++`)
addCode(`}`)

let itter = 0
while (itter < array.length) {
    addConsole(`console.log('Number: ` + array[itter] + `')`)

    if(itter === array.length) { break; }
    itter++
}


addText(`Существуют и другие циклы, но этих трех на первое время достаточно. При написании цикла while мы столкнулись
с условным оператором if и с оператором прерывания break. Сейчас о них поговорим, а так же рассмотрим оператор continue.`)



addSubtitle('Условия и операторы прерывания')


addText(`Создадим массив из 10 чисел и выведем в консоль числа от 0 до 5 и пропустим число 3.`)


addCode(`let numbers = [0,1,2,3,4,5,6,7,8,9]`)
addCode(`for(let i = 0; i < numbers.length; i++) {`)
addCode(`if(i > 5)  {`)
addCode(`console.log('Число уже больше чем ' + numbers[i] + ', время работы break');`)
addCode(`break;`)
addCode(`}`)
addCode(`if(i === 3) {`)
addCode(`console.log('Это число ' + numbers[i] + ', время работы continue');`)
addCode(`continue;`)
addCode(`}`)
addCode(`else console.log('Число '  + numbers[i]);`)
addCode(`}`)

let numbers = [0,1,2,3,4,5,6,7,8,9]

for(let i = 0; i < numbers.length; i++) {
    if(i > 5)  {
        addConsole(`Число уже больше чем ${numbers[i]}, время работы break`);
        break;
    }
    if(i === 3) {
        addConsole(`Это число ${numbers[i]}, время работы continue`);
        continue;
    }
    else addConsole(`Число  ${numbers[i]}`);
}


addText(`Думаю теперь стало понятно для чего нужны break и continue. if...else - это логические конструкции
для реализации ветвления. Мы говорим, если i > 5 то давай вызовем break и так же говорим, если i === 3 то
пропустим это число и продолжим итерацию, а иначе выведем числа нужные нам в блоке else. Есть также ещё
один способ реализации ветвления, но он обычно служит для иных целей.`)

addText(`Настало время познакомиться с switch..case. Например мы хотим отправив строку в switch,
получить один из вариантов ответа заранее заданный нами, тогда напишем следующий код:`)


addCode(`let our_string = 'Работа' // Привет - Пока - Работа`)
addCode(`switch(our_string) {`)
addCode(`case 'Привет':  console.log('Строка выводит приветствие. Выбран case Привет'); break;`)
addCode(`case 'Пока':    console.log('Строка прощается с вами. Выбран case Пока'); break;`)
addCode(`case 'Работа':  console.log('Сейчас работает скрипт. Выбран case Работа'); break;`)
addCode(`default:  console.log('Для этого слова нет вариантов ответа'); break;`)
addCode(`}`)

let our_string = 'Работа' // Привет - Пока - Работа
switch(our_string) {
    case 'Привет':  addConsole(`Строка выводит приветствие. Выбран case 'Привет'`); break;
    case 'Пока':    addConsole(`Строка прощается с вами.  Выбран case 'Пока'`); break;
    case 'Работа':  addConsole(`Сейчас работает скрипт. Выбран case 'Работа'`); break;
    default:  addConsole(`Для этого слова нет вариантов ответа`); break;
}



addText(`Думаю теперь понятно что такое условия и как с ними работать. Если что упустил, то это всегда легко
гуглится. Так что подробно узнать про переменные, константы, массивы, циклы и условия поможет гугл. Самое
главное - это практика и решения задач. Ну что, переходим к следующей теме.`)


addSubtitle('Функции и объекты')


































printHTMLLog() // Выводит наш лог на HTML страницу
