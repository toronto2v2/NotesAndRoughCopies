'use strict';


// РАСЧЕТ ПОЛНОЙ ПОВЕРНХНОСТИ И ПЛОЩАДИ КУБА?
function fullSurface (num){
    if(typeof(num) !== 'number' || num <= 0 || num != num.toFixed(0) ){
        return console.log(`При вычислении значения ${num} произошла ошибка`);
    }

    let a = num;
    for ( let i = 1; i < 3; i++ ){
        a *= num;
    }
    
    return console.log(`Объем куба: ${a}, площадь всей поверхности: ${6*(num*num)}`);
}
// fullSurface(5);



// ПОЛУЧЕНИЕ НОМЕРА КУПЕ В ЗАВИСИМОСТИ ОТ МЕСТА
function whichSit (num){
    if(typeof(num) !== 'number' || num < 0 || num != num.toFixed(0)){
        return console.log('Ошибка. Проверьте правильность введенного номера места');
    }else if(num == 0 || num > 36){
        return console.log('Таких мест в вагоне не существует');
    }

    for (let i = 1; i <= 9; i++){
        
        for (let j = 0; j <= 4*i; j++){

            if ( j === num){
                return console.log(i);
            }
        }
    }
}
// whichSit(25);






// ЗАДАЧА НА ПОЛУЧЕНИЕ ЧАСОВ ОТ МИНУТ
function getTimeFromMinutes ( number ){

    if (typeof(number) !== 'number' || number != number.toFixed (0) || number < 0 ){
        return console.log('Ошибка, проверьте данные');
    }

    let hours = Math.floor( number / 60);
    let minutes = (( number / 60 ) - hours) * 60;

    let hoursStr = '';
    let minutesStr = '';

    switch (hours){
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    switch(minutes){
        case 2:
        case 3:
        case 4:
        case 22:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
            minutesStr = 'минуты';
            break;
        case 21:
        case 31:
        case 41:
        case 51:
            minutesStr = 'минута';
            break;
        default:
            minutesStr = 'минут';
        }
            
        return console.log(`это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`);

}
// getTimeFromMinutes(150);





// НАЙТИ МАКСИМАЛЬНОЕ ЧИСЛО
function findMaxNumber ( a, b, c, d ){
    if(typeof(a) !== 'number' ||
       typeof(b) !== 'number' ||
       typeof(c) !== 'number' ||
       typeof(d) !== 'number' ||
       (a === undefined || null) ||
       (b === undefined || null) ||
       (c === undefined || null) ||
       (d === undefined || null) ){
        return console.log('0');
    }else{
        return console.log(Math.max(a, b, c, d));
    } 
}
// findMaxNumber(1, 2, 3, 4);





// ЗАДАЧА НА ЧИСЛА ФИБОНАЧЧИ БЕЗ РЕКУРСИИ
function fibonachiNum (n){
    if(typeof(n) !== 'number' || n <= 0 || !Number.isInteger(n) ){
        return console.log('Error');
    }


    let result = '';
    let first = 0;
    let second = 1;

    for ( let i = 0; i < n; i++){
        // if (i + 1 === n){
        //     result += `${first}`;
        // }else{
        //     result += `${first} `;
        // }

        result += `${first} `;

        let third = first + second;
        first = second;
        second = third;

    }
    return console.log(result.trim());
}
// fibonachiNum(5);





// КОЛБЭКИ
function showSum( a, b, callback ){
    return callback( a, b);
}
function sum (a, b){
    return a+b;
}
// console.log( showSum(5, 5, sum)) ;





// СОЗДАНИЕ СОБСТВЕННОГО МЕТОДА И ПЕРЕБОР КЛЮЧЕЙ

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red,'
    },
    makeTest: function(){
        console.log('test');
    }
};

// options.makeTest();

for (let key in options){
    
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]){
            // console.log( `Свойство: ${i}, значение: ${options[key][i]}`);
        }
    }else{
        // console.log( `Свойство: ${key}, значение: ${options[key]}`);
    }

}   





// ДЕСТРУКТУРИЗАЦИЯ

function destruct (){
    const obj = {
        myName: 'Misha',
        surname: 'Yevrii',
        age: 24,
        hobby: "IT",
    };
    
    let {surname: mySurname} = obj; 
    // можно указывать значения по умолчанию через '=' а также использовать '...' для вывода оставшихся ключей 
    
    // console.log(mySurname);


    const obj2 = {
        size: {
            width: 100,
            height: 200
          },
        items: ["Cake", "Donut"],
        extra: true 
    };

    let {size, size:{width, height}, items, items:{item1, item2}, title = 'Cannot find key'} = obj2;
    // каждому свойству выше можно дать другое имя переменной через ':'

    // console.log(size, width, height, items, item1, item2, title  );

    let result2 = Object.getOwnPropertyDescriptor(obj2.size, 'width');
    // console.log(result2) ;

}
// destruct();




// МЕТОДЫ МАССИВОВ

function arrayMethods () {
    const arr = [ 2, 3, 6, 8, 10,];

    arr.forEach(function (item, i, arr){
        // item - элементы массива
        // i    - номер по порядку перебираемых элементов
        // arr  - ссылка на массив который перебираем

        // console.log(`${i}: ${item} внутри массива ${arr}`);
    });

    // Method .split();


    const str = 'aaaa ddd fff ccc';
    const resulted = str.split(' ');
    // console.log(str);
    // console.log(resulted);
    // console.log(resulted.sort());
}
// arrayMethods();



// ЗАДАЧИ НА МЕТОДЫ         ПОСЛЕ УРОКА 35
function methodsAndTasks (){
    const personalPlanPeter = {
        name: "Peter",
        age: "24",
        skills: {
            languages: ['ru', 'eng', 'ua'],
            programmingLangs: {
                js: '20%',
                php: '10%'
            },
            exp: '1 month'
        },
        showAgeAndLangs: function (obj){
            let {skills:{languages}} = obj;
            let {age} = obj;
            let str = '';
    
            if(languages.length == 0){
                str += `Мне ${age} и я не владею никакими языками`;
            }else{
                str += `Мне ${age} и я владею языками: ${languages.join(' ').toUpperCase()}`;
            }
            return str;
        },
    };
    
    console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
    
    function showExperience(plan) {
    
        let {skills: {exp: experience}} = plan;
    
        return `${experience}`;
    }
    console.log(showExperience(personalPlanPeter));
    
    
    
    function showProgrammingLands (obj){
        let str = '';
        
        let {skills:{programmingLangs}} = obj;
    
        for (let key in programmingLangs){
            str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        }
        
       if (Object.keys(programmingLangs).length == 0){
        return str += `BULLSHIT`;
       }else{
        return str.trim();
       }
    }
    console.log(showProgrammingLands(personalPlanPeter));
}
// methodsAndTasks();


function methodsAndTasks2 () {

    const family = ['Peter', 'Ann', 'Alex', 'Linda'];
    function namesFromArray (array) {

        if(array.length === 0){
            return `Семья пуста`;
        }

        return `Семья состоит из: ${array.join (' ').trim()}`;

    }
    
    console.log(namesFromArray(family));

    const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
    function standardizeStrings(arr) {
        // let result = '';

        // for (let keys of arr){
        //     result += `${keys}\n`;
        // }

        // return result.toLowerCase().trim()

        arr.forEach(element => {
            return console.log(element.toLowerCase());
        });

    }
    
    standardizeStrings(favoriteCities);

}
// methodsAndTasks2 ();

function methodsAndTasks3 (){

    const someString = `Мене звати Міша`;
  
    function reverseSmth (string){
        let strArray = [];
        if (typeof(string) !== 'string'){
            return `Mistake, not correct data type`;
        }else if (string.split('').length == 0){
            return `You have entered empty string`;
        }else if (string.split('').includes(' ') == true && string.trim() == ''){
            return `Enter something, not only spaces`;
        }
        
        strArray = string.split('');

        return strArray.reverse().join('');
    }
    console.log(reverseSmth(someString));


    const baseCurrencies = ['USD', 'EUR'];
    const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
    const togetherCourrencies = [...baseCurrencies, ...additionalCurrencies];
 

    function availableCurr(arr, missingCurr){

        let str = `Доступные валюты:\n`;

        if(arr.length == 0){
            return 'Нет доступных валют';
        }else if(arr.includes(missingCurr) === true){
            arr.splice(arr.indexOf(missingCurr), 1);
        }

        for(let key of arr){
            str += `${key}\n`;
        }

        return str.trim();
    }

    console.log(availableCurr(togetherCourrencies, 'USD'));
}
// methodsAndTasks3();

 

// ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ

function prototypes (){
    const human = {
        brain: 'availible',
        skin: 'white',
        maxLenghtOfLife: 100,
    };
    
    const blackHuman = Object.create(human);
    blackHuman.skin = 'black';
    
    for (let key in blackHuman){
        let isOwn = blackHuman.hasOwnProperty(key);
        if (isOwn === true){
            console.log(key);
        } 
    }
    console.log(blackHuman.skin);
}
// prototypes();



// ЗАДАЧИ НА МЕТОДЫ         ПОСЛЕ УРОКА 35
function methodsAndTasks3 (){
    const shoppingMallData = {
        shops: [
            {
                width: 10,
                length: 5
            },
            {
                width: 15,
                length: 7
            },
            {
                width: 20,
                length: 5
            },
            {
                width: 8,
                length: 10
            },
        ],
        height: 5,
        moneyPer1m3: 25,
        budget: 41875
    };


    function calculateArea (item){
        let totalArea = 0;
        for (let i = 0; i < item.shops.length; i++){
            totalArea += item.shops[i].width * item.shops[i].length;
        }
        return totalArea;
    }

    function totalMallArea (item){
        let calculatedDebt = 0;
        calculatedDebt += calculateArea(item) * item.height;
        return calculatedDebt;
    }

    function isBudgetEnough(data) {
        if( totalMallArea(data) * data.moneyPer1m3 <= data.budget){
            return `Бюджета достаточно`;
        }else {
            return `Бюджета недостаточно`;
        }
    }
    console.log();
    console.log(totalMallArea(shoppingMallData)* shoppingMallData.moneyPer1m3);
    isBudgetEnough(shoppingMallData);
}
// methodsAndTasks3 ();

function methodsAndTasks4 (){

    const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam',];


    function sortStudentsByGroups(arr) {
        const arrSorted = arr.sort();
        let elsePlayers = `Оставшиеся студенты: `;
        const together = [];


        for (let i = 0; i < 3; i++){
            together.push(arrSorted.splice(0, 3));
        }

        if(arrSorted.length !== 0){
            elsePlayers += arrSorted.join(', ');
        }else{
            elsePlayers += `-`;
        }

        together.push( elsePlayers);

        

        return together;
    }
    console.log(sortStudentsByGroups(students));
}
// methodsAndTasks4 ();


// ЗАДАНИЯ НА ПОИСК ОШИБОК В КОДЕ
function findMistake (){
    const restorantData = {
        menu: [
            {
                name: 'Salad Caesar',
                price: '14$'
            },
            {
                name: 'Pizza Diavola',
                price: '9$'
            },
            {
                name: 'Beefsteak',
                price: '17$'
            },
            {
                name: 'Napoleon',
                price: '7$'
            }
        ],
        waitors: [
            {name: 'Alice', age: 22}, {name: 'John', age: 24}
        ],
        averageLunchPrice: '20$',
        openNow: true
    };
    
    function isOpen(prop) {
        let answer = '';
        if(prop === true){
            answer += 'Открыто';
        }else{
            answer += 'Закрыто';
        }
    
        return answer;
    }
    console.log(isOpen(restorantData.openNow));
    
    function isAverageLunchPriceTrue(fDish, sDish, average) {
        if (+(fDish.price.slice(0, -1)) + (+(sDish.price.slice(0, -1))) < +(average.slice(0, -1)) ) {
            
            return 'Цена ниже средней';
        } else {
            console.log(+(average.slice(0, -1)));
            return 'Цена выше средней';
            
        }
    }
    
    
    console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));
    
    
    function transferWaitors(data) {
        const copy = Object.assign({}, data);
        copy.waitors = [{name: 'Mike', age: 32}];
        console.log(data);
        return copy;
        
    
    }
    
    console.log(transferWaitors(restorantData));
}
// findMistake();




// УРОК ПО РЕКУРСИИ

function ngRecorsion (){
    let students = {
        js: [{
            name: 'John',
            progress: 100
        },{
            name: 'Ivan',
            progress: 60
        }],
    
        html: {
            basic: [{
                name: 'Peter',
                progress: 20
            },
            {
                name: 'Ann',
                progress: 18
            }],
            pro: [{
                name: 'Sam',
                progress: 10
            }]
        }
    };
    
    
    function getTotalProgressByIteration (data){
        let total = 0;
        let students = 0;
    
        for (let course of Object.values(data)){
            if (Array.isArray(course)){
                students += course.length;
                for (let i = 0; i < course.length; i++){
                    total += course[i].progress ;
    
                }
            }else{
                for (let subCourse of Object.values(course)){   
                    students += subCourse.length;
                    for(let i = 0; i < subCourse.length; i++){
                      total += subCourse[i].progress;
                    }
                }
                
            }
        }
    
        return total / students;
    
    }
    
    // console.log(getTotalProgressByIteration(students));
    
    
    function getTotalProgressByRecorsion (data){
        if (Array.isArray(data)){
            let total = 0;
    
            for (let i = 0; i < data.length; i++){
                total += data[i].progress;
            }
            return [total, data.length];
        }else{
            let total = [0, 0];
    
            for(let subData of Object.values(data)){
                const subDataArr = getTotalProgressByRecorsion(subData);
                total[0] += subDataArr[0];
                total[1] += subDataArr[1];
            }
            return total;
        }
    }
    const result = getTotalProgressByRecorsion (students);
    // console.log(result[0]/result[1]);
}
// ngRecorsion();


// ДЗ НА РЕКУРСИЮ

function recorsionHomme ( n ) {
    if(typeof(n) !== 'number' || !Number.isInteger(n) || n < 0 ){
        return `Enter valid number instead of ${n}`;
    }else{
        if( n === 1 ){
            return n;
        }else if(n === 0) {
            return 1;
        }else {
            return n * recorsionHomme(n - 1);
        }
       
    }
}
// console.log(recorsionHomme(-5));



function digitalRoot(n) {
   let arr = n.toString().split('');
   let result = 0;

    if(arr.length >= 2  ){
        for (let i = 0; i < arr.length; i++){
            result += Number(arr[i]);
        }
        return digitalRoot(result);      
    }else{
        return  Number(arr.join());       
    }

}

// console.log(digitalRoot(456));

function countPositivesSumNegatives(input) {
    const newArray = [];
    let firstNum = 0;
    let secondNum = 0;
    if(input === null || input.length == 0){
        return [];
    }

    input.forEach( ( item, i) => {
        if (item > 0 ){
            firstNum += 1;
        }else if(item < 0){
            secondNum += item;
        }
    } );

    newArray.push(firstNum);
    newArray.push(secondNum);
    console.log(input.length);
    return newArray;


}
// console.log(countPositivesSumNegatives(null) );

function check(a, x) {
    
    for (let key of a){
        if (key === x){
            return true;
        }else if(key === `${x}`){
            return true;
        }
    }
    return false;

}
//   console.log(check(['t', 'e', 's', 't'], 'e'));

function _if(bool, func1, func2) {

    let result = bool == true ? func1() : func2();


}

// _if(true, function(){console.log("True");}, function(){console.log("false");});


function numberToPower(number, power){

    if(power == 0){
        return 1;
    }

    if (power === 1){
      return number;
    }else{
      let result = number * numberToPower(number, power - 1);
      return result;
    }
    
  }

// console.log(  numberToPower(10, 0));

// var arr1 = ['a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd',];
function first(arr, n ) {
    const newArray = [];

    if(n === undefined){
        newArray.push(arr1[0]);
        return newArray;
    }else if(n === 0){
        return newArray;
    }else if(arr.length < n ){
        return arr;
    }else{
        for (let i = 0; i <= n - 1; i++){
            newArray.push(arr[i]);
        }
        return newArray;
    }


console.log(newArray);
    
}

// console.log(first( arr1, 15 ));

// let exNames = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
function duckDuckGoose(players, goose) {
    if (goose === 0 ){
        return players[players.length-1];
    }

    if (goose <= players.length){
        return players[goose-1];
      }else{
        return duckDuckGoose(players, (goose % players.length));
      }
}
// console.log(  duckDuckGoose(exNames, 20));


function enough(cap, on, wait) {
   if (on + wait > cap){
    return (on + wait) - cap;
   }else{
    return 0;
   }
    
}
// console.log(enough(100, 60, 50));

function century(year) {
    return Math.ceil(year / 100);
}
// console.log(century(101));


function whatday(num) { 

    if (num > 7 || typeof(num) !== 'number' || num == 0){
      return "Wrong, please enter a number between 1 and 7";
    }else{
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      
      return days[num - 1];
    }
}
// console.log(whatday(0));

function toCsvText(array) {

    let string = '';

    array.forEach((item, i) => {
        if (!Array.isArray(item)){
            string += `${item} `;
        }else{
            return toCsvText(item);
        }
    });

    string.trim();

   
    return string;


}
// toCsvText(   [[ 0, 1, 2, 3, 4 ],
//     [ 10, ],
//     [ 20,21,22,24 ],
//     [ 30,31,32,33,34,24 ]]);


function mapTesting (){

    let recipeMap = new Map();


    recipeMap.set('огурец', 500)
                .set("помидор", 350)
                .set("лук",    50);

  
    for (let items of recipeMap.entries()){
        console.log(items);
    }

}
// mapTesting();


function amountOfPages(summary){

    let arrayOfSum = [];
    let strOfSum = '';



    for(let i = 1; strOfSum.length < summary; i++){
        arrayOfSum.push(i);
        strOfSum += `${i}`;
    }
    
    if (summary < 10) {
        return arrayOfSum[summary-1];
    }
    console.log(arrayOfSum);
    console.log(strOfSum);
   return arrayOfSum[arrayOfSum.length - 1];


}
// console.log(amountOfPages(185));


function isPangram(string) {

    const strNoSpaces = string.toLowerCase().split(' ').join('');
    let setFromString = new Set(strNoSpaces);

    return setFromString.size == 26;


}
// console.log(isPangram('The quick brown fox jumps over the lazy dog'));


function deepCount(a){   
    let total = 0;

    a.forEach(item => {
        total++;
        if(Array.isArray(item)){
            return total += deepCount(item);
        }
    });
    return total;
}
// console.log(deepCount([[[[[[[[[]]]]]]]]]));

  


// WeakSet && WeakMap 

function weakMap (){

    // let user = {name :'MISHA'};
    // let map = new WeakMap();

    // map.set(user, 'data');
    // user = null;




    // console.log(map);


    let cache = new WeakMap();

    function cacheUser (user){

        if (!cache.has(user)){
            cache.set(user, Date.now);
        }
        return cache.get(user);

    }
    

    let lena = {name: 'elena'};
    let alex = {name: 'alex'};
     
    cacheUser(lena);
    cacheUser(alex);

    lena = null;

    console.log(cache.has(lena));
    console.log(cache.has(alex));

}
// weakMap ();

function weakSet (){

    let messages = [
        {text: 'Hello', from: 'Misha'},
        {text: 'World', from: 'Alex'},
        {text: '////', from: 'Anna'},
    ];

    let readMessages = new WeakSet();


    readMessages.add(messages[0]);
    readMessages.add(messages[1]);

    console.log(readMessages.has(messages[1]));
}
// weakSet ();



// РАБОТА С ДАТАМИ

function dateLearning (){

    // const date = new Date(2014, 0, 3);
    
    // const days = [
    //     'Sun', 'M','T','W','Th','F', 'Sat', 
    // ];

    // return console.log(days[date.getDay()]);


    // ===================================================

    // let date = new Date();

    // let result = date.getDay();
    // if(result == 0){
    //     result = 7;
    // }


    // =======================================================
    // let myDate = new Date(2015, 0, 2);
    // function getDateAgo(date, days){
        
    //     let newDate = new Date(myDate);

    //     newDate.setDate(date.getDate() - days);
    //     return newDate;


    // }
    // console.log(getDateAgo(myDate, 2));

    // =====================================================


    // function getLastDayOfMonth(year, month){

    //     let date = new Date(year, month + 1, 0);
    //     return date.getDate();



    // }
    // console.log(getLastDayOfMonth(2012, 0));


    // ==============================================

    function getSecondsToTomorrow(){

        let now = new Date();

        // завтрашняя дата
        let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
      
        let diff = tomorrow - now; // разница в миллисекундах
        return Math.round(diff / 1000); // преобразуем в секунды
    }
    console.log(getSecondsToTomorrow());
}
// dateLearning ();


// ФУНКЦИИ КОНСТРУКТОРЫ 


function constructorsFunctions (){
    // function NewUser (name, surname, age){
    //     this.name = name;
    //     this.surname = surname;
    //     this.age = age;
    //     this.sayHi = function (){
    //         console.log(`Users name:${this.name}; Users surname: ${this.surname}; age: ${this.age}`);
    //     };

    // }

    // let annaUser = new NewUser('Anna', 'Yevrii', 12);

    // annaUser.sayHi();

    function Calculator (){

        this.read = function (){
        this.a = +prompt('number', 2);
        this.b= +prompt('number', 3);
        
        };  
        this.sum = function () {
            return this.a + this.b;
        };
        this.mul = function (){
            return this.a * this.b;
        };
    }

    // let eus = new Calculator();
    // eus.read();
    // alert(`Sum = ${eus.sum()}`);
    // alert( `mul = ${eus.mul()}`);
    // ====================================================

    function Accumulator (start){
        this.value = start;
        this.read = function () {
            this.value += +prompt('num', 2);
        };
    }

    let accumulator = new Accumulator(1);
    accumulator.read();
    accumulator.read();

    // alert(accumulator.value);


}
// constructorsFunctions ();



// КЛАССЫ

function classPractice (){
    class Rectangle {
        constructor(height, width){
            // CONSTRUCTOR ТЕХНИЧЕСКИ ЭТО ФУНКЦИЯ
            this.height = height;
            this.width = width;
        }
    
        calcArea(){
            return this.height * this.width;
        }
        // МEЖДУ МЕТОДАМИ НЕ НУЖНО СТАВИТЬ ЗАПЯТУЮ ЛИБО ТОЧКУ С ЗАПЯТОЙ!
    
    }
    
    // ДАЛЕЕ МЫ СОЗДАЕМ МОДИФИЦИРОВАНЫЙ КЛАСС, КОТОРЫЙ БУДЕТ ИМЕТЬ ОСНОВЫ Rectangle, НО БУДЕТ
    // НЕМНОГО ЕГО МОДИФИЦИРОВАТЬ
    
    class ColoredRectangleWithText extends Rectangle{
        // ключевое слово EXTANDS позволяет унаследовать свойства и методы
        // для ColoredRectangleWithTеxt от Rectangle
        constructor(height, width, text, color){
            super(height, width);
            this.text = text;
            this.color = color;
            // ключевое слово SUPER позволяет "скопировать код" от указаного родителя Rectangle
            // тоесть нам не нужно опять писать this.htight = height и тд. SUPER всегда должно идти первой строчкой
            // в скобках указываем то, что хотим унаследовать
        }
    
        showMyProps(){
            console.log(`Текст:${this.text}, цвет: ${this.color}`);
        }
    
    }
    
    const div = new ColoredRectangleWithText(25, 10, 'some text', 'red');
    
    div.showMyProps();
    console.log(div.calcArea());
    // calcArea унаследовалось от Rectangle
    
    
}
// classPractice ();


// PROMISE

function promisePractice (){

    let promise = new Promise ((resolve, reject) => {
        console.log('Creating request');
        setTimeout(() => {
            
            const requestObject = {
                name: 'Misha',
                surname: 'Yevrii'
            };
            resolve(requestObject);
        }, 2000);

    });
    promise.then((data) => {
        return new Promise((resolve, reject) => {
           
            setTimeout(() => {
                console.log('Modifying request');
                data.age = 18;
                data.gender = 'Male';
                resolve(data);
            },2000);
        });
    }).then(data => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                console.log( `your data:` ,data);
                resolve();
            },2000);
        });
    }).finally(() => {
        setTimeout(() => {
            console.log(`finally`);
        }, 2000);
        
    }).catch(() => {
        setTimeout(() => {
            console.log(`mistake`);
        },2000);
    });
}
// promisePractice ();


// МЕТОД FILTER
function filterMethod (){
// перебирает все значения внутри масива, и помещает в новый массив те значения, которые прошли
// проверку, заданую в колбек функции. 

const names = ['ivan', 'ann', 'lolo', 'alexander'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
    // колбек функция обязательно должна возвратить результат, чтоб
    // он попал в новый массив!
});

console.log(shortNames);
}
// filterMethod ();

// МЕТОД MAP
function mapMethod () {
    // позволяет взять исходный массив и изменить каждый элемент внутри него, на выходе
    // получим новый, измененный массив

    let answers = ['IvAn', 'aNNa', 'CaMeLcAsE'];

    // const fixedAnswers = answers.map(item => item.toLocaleLowerCase());
    // console.log(fixedAnswers);


    // также можно переизменить исходный массив, без создания новой переменной fixedAnswers
    // но это лучше делать только тогда когда знаешь что делаешь, в других случаях
    // лучше делать как в закомментированном примере выше
    answers = answers.map(item => item.toLocaleLowerCase());
    console.log(answers);
}
// mapMethod ();

// МЕТОД SOME
function someMethod () {
    // перебирает массив и если у нас хотябы один элемент подходит по условию, передаваемому
    // в колбек функции, то в таком случае вернет - true, в обратном - FALSE

    const someArr = [4, 'qwe', 'sad','ffsafsa'];
    console.log(someArr.some(item => typeof(item) === 'number'));
    // в консоли получим TRUE
}
// someMethod ();


// МЕТОД EVERY
function everyMethod (){
    // если все элементы в массиве подходят под условие, указанное в колбек функции,
    // вернет true, если нет false
    const someArr = [4, 'qwe', 'sad','ffsafsa'];
    console.log(someArr.every(item => typeof(item) === 'number'));
    // в консоли получим false

}
// everyMethod();

// МЕТОД REDUCE
function reduceMethod (){
    // нужен он для того чтобы схлопывать или собирать массив в одно единое целое
    // возвращает новый сформированый массив на основе функции редюсера
    // необходимо в колбек функции указывать два аргумента, которые подставляются автоматически
    // также вторым аргументом методом reduce, после колбек функции, можно указать начальное значение 

    const numArr = [4, 5, 1, 3, 2, 6];
    const numArrResulted = numArr.reduce((sum, current) => sum + current);
    console.log(numArrResulted);
}
// reduceMethod ();


// sort Movies Exercise
function sortMovies (){

    const films = [
        {
            name: 'Titanic',
            rating: 9
        },
        {
            name: 'Die hard 5',
            rating: 5
        },
        {
            name: 'Matrix',
            rating: 8
        },
        {
            name: 'Some bad film',
            rating: 4
        }
    ];

    function showGoodFilms(arr = films) {
        return arr.filter(film => film.rating >=8);
    }
    showGoodFilms();

    function showListOfFilms (arr = films) {
        return arr.reduce((acc, next) => {
            return `${typeof(acc) === 'object' ? acc.name : acc}, ${next.name}`;
        });
    }
    showListOfFilms();

    function setFilmsIds (arr = films){
        return arr.map((item, idx) => {
            item.id = idx;
            return item;
        });
    }
    setFilmsIds();

    let tranformedArray = setFilmsIds();

    function checkFilms (arr) {
        return arr.every(item => item.id !== undefined);
    }
    checkFilms(tranformedArray);


}
// sortMovies ();


// METHODS Exercise
function advencedMethods (){

    const funds = [
        {amount: 1400},
        {amount: 2400},
        {amount: 1000},
        {amount: 500},
        {amount: 10400},
        {amount: 11400}
    ];

    const getPositiveIncomeAmount = (data) => {
       return data.filter(item => item.amount > 0).reduce((acc, next) => {
        return typeof(acc)==='object' ? acc.amount + next.amount : acc + next.amount;
       });
    };
    
    const getTotalIncomeAmount = (data) => {
        if(data.some(item => item.amount < 0)){
            return data.reduce((acc, next) => typeof(acc)==='object' ? acc.amount + next.amount : acc + next.amount);
        }else{
            return getPositiveIncomeAmount(data);
        }
    };
    console.log(getTotalIncomeAmount(funds));



}
// advencedMethods ();


// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ====REGULAR EXPRESSION

function regularExpressions (){

    const answ = 'Annnnnnnnn';
    const reg = /n/ig;
    // console.log(answ.search(reg));
    // Ищет букву n в строке answ в соответствии с регулярным выражением reg. Результат - ПОЗИЦИЯ 
    // Находит первый попавший вариант и возвращает индекс позиции данной буквы
    // если отсутствует то возвращает -1
// ===================================================================================================

    // console.log(answ.match(reg));

// ===================================================================================================
    // console.log(answ.replace(/./g, '*'));

    // не забывай как экранировать! В случае если надо будет найти например все точки, то запись будет такова:
    // answ.replace(/\./g, '*')
// ===================================================================================================






}
// regularExpressions ();



// СВОЙСТВА АКСЕССОРЫ( ГЕТТЕРЫ И СЕТТЕРЫ)

function gettersAndSetters (){

    const someObj = {
        name: 'misha',
        surname: 'yevrii',

        get nameOf() {
            return console.log(`name : ${this.name}`);
        },

        set nameOf (value){
            this.name = value;
        }
    };

    someObj.nameOf = 'anna';
    someObj.nameOf;

}
// gettersAndSetters ();


// ИНКАПСУЛЯЦИЯ

function User (name, surname) {
    this.name = name;
    let userSurname  = surname;
    // так как мы userSurname указали просто как создание переменной, то мы не сможем снаружи достучаться до нее.
    // то есть не сможем получить содержимое либо изменить его. Чтобы реализовать данный функционал необходимо
    // создать методы, которые позволят взаимодействовать с данной переменной

    this.sayFullName = function() {
        console.log(` users name: ${this.name} |||| surname: ${userSurname}`);
    };

    this.getSurname = function (){
        return userSurname;
    };

    this.setSurname = function(newSurname){
        if( !isNaN(+newSurname) || typeof(newSurname) !== 'string' || +newSurname.replace(/\D/g, '') !== 0 ){
            return console.log(`not correct surname`);
        }else{
            userSurname = newSurname;
        }
    };
}


// далее будет тот же функционал, но  с использолванием классов


class User1  {
    constructor(name, surname){
        this.name = name;

        // let userSurname  = surname;
        // нельзя создать переменную в классах
        // вместо этого используем lowdash: _surname

        this._surname = surname;
    }

    // в новых стандартах можно создавать свойства следующим образом:
    // age = 24;
    // совойство это может находится за пределами constructor

    // также в новых стандартах в классах можно создавать методы путем стрелочных функций

    // также в новых стандартах можно создавать приватные свойства в классах, что даст такой же результат,
    // как когда мы в функции конструкторе создавали переменную, которая была не видна во внешней области кода
    // делается это следующим образом:
    // #age = 24;
    // чтоб использовать такое свойство необходимо привязать его к свойствам аксессорам 


    sayFullName() {
        console.log(` users name: ${this.name} |||| surname: ${this._surname}`);
    }
    
    // чтобы не работать напрямую с User1._surname мы создаем геттер и сеттер, который уже будет работать с _surname, 
    // и обращаться уже напрямую к _surname не будет необходимости так как для этого уже есть свойства-аксессоры
    // но возможность обращаться напрямую к _surname не через аксесоры сохраняется, но это считается не правильным
    // поведением

    get surname(){
        return this._surname;
    }

    set surname (newSurname){
        if( !isNaN(+newSurname) || typeof(newSurname) !== 'string' || +newSurname.replace(/\D/g, '') !== 0 ){
            return console.log(`not correct surname`);
        }else{
            this._surname = newSurname;
        }
    }

}

// const misha2 = new User1('Miha', 'Europa');
// console.log(misha2.surname);




// ПРИЕМ МОДУЛЬ ===============================


function moduleMethod (){


    // первый способ создания модуля: использование анонимной самовызывающейся функции
    const number = 1;
    // внизу показана анонимная самовызывающаяся функция, ввесь прикол модулей в том, чтоб создать локальную переменную,
    // которую не будет видно из глобальной области
    // анонимная функция  заключена в еще одни скобки потому что это function declaration, а function declaration должно иметь
    // имя. ЗАключение в скобки позволяет создать function declaration без написания имени
    (function(){
        const number = 5;
        console.log(number);
        console.log(number + 5);
    }());
    console.log(number);

    // второй способ создания модуля: использование объектного интерфейса

    // мы создаем переменную и присваиваем ей анонимную самовызывающуюся функцию

    const user = (function(){
        // внутри модуля создаем еще одну функцию с нужными действиями, к этой внутренней функции мы не будем иметь доступа
        // с глобальной области
        const privat = function(){
            console.log(`I am privat`);
        };
        
        // и чтобы иметь доступ к работе этой функции с глобальной области, мы можем в анонимной самовызывающейся функции
        // создать return, который вернет ОБЪЕКТ с методом, который будет вызывать внутреннюю функцию

        return {
            toggleInnerFunction: privat
        };

    }());
    // и чтобы в конце концов достучаться до внутренней функции выше, мы обращаемся к переменной с анонимной самовызывающейся
    // функцией, которая вернет объект, который запишется в переменную user и у него юудет метод toggleInnerFunction(название метода
    // мы придумываем)

    user.toggleInnerFunction();

}
// moduleMethod ();


// ES6 MODULES========================

function modulesEs (){
    // ДАННЫЙ СИНТАКСИС ВСЕ РАВНО НУЖДАЕТСЯ В СБОРЩИКЕ !!!!!!!!!!!
    
    // =====EXPORT======
    // Чтобы чтото экспортировать есть несколько способов:
    export let one = 1;

    let two = 2;
    export {two};

    export function someFunc (){};
    
    // Самое важное для экспорта, это чтобы сущность будь то функция, переенная и тп и тд - имели имя

    // =====================================

    // также экспортировать можно по умолчанию, в таком случае экспортируемая сущность будет передаваться в
    // импортируемый файл без преобразование в объект, то есть напрямую
    // ЭКСПОРТ ПО УМОЛЧАНИЮ ДОЛЖЕН БЫТЬ ТОЛЬКО ОДИН

    export default function someFunc (){};


    // ======IMPORT======

    // чтобы что-то импортировать необходимо указать что именно в фигурных скобках{} и откуда импортироват:
    import {one, two} from 'путь к файлу где мы прописывали export';
    
    // после того как данные импортированы, можно их использовать


    // также при импорте есть возможность переименовать переменные, например импортировать переменную one но переименовать на first
    import {one as first} from 'путь к файлу где мы прописывали export';


    // можно импортировать все сразу:

    import * as data from 'путь к файлу где мы прописывали export';

    // в таком случае вернется объект со всеми сущностями которые экспортировались в указаном для экспорта файле
    // для обращения к этим сущностям обращаемся вот так:
    data.one;
    data.two;
    data.someFunc();
    // ===================================

    // импортирование с параметром "по умолчанию" позволяет принять импортируемую сущность без фигурных скобок:
    import someFunc from 'path';
}


// КОМПОЗИЦИЯ ФУНКЦИЙ

function composition (){
        // const  multiply20 = (price) => price * 20;
    function multiply20 (price) {
        return price * 20;
    }
    // const divide100 = (price) => price / 100;
    function divide100 (price){
        return price / 100;
    }
    // const normalizePrice = (price) => price.toFixed(2);
    function normalizePrice (price) {
        return price.toFixed(2);
    }

    const compose = (...funcs) => x => funcs.reduceRight((acc, next) => next(acc), x);

    const reslFunc = compose (normalizePrice, divide100, multiply20);

    console.log(reslFunc(200));

    function compoxe2 (...funcs){
        return function(x){
            return funcs.reduceRight((acc, next) => next(acc), x);
        }
    }
    }
// composition ();
// ssdds

