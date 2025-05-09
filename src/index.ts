// import { test } from "./test";

import { log } from "node:console";

// const button = document.querySelector("button")!;
// const input = document.querySelector("input")!;

// if (button && input) {
//   button.addEventListener("click", () => {
//     test(input.value, "hello!");
//   });
// }

// 7 kyu → близько 20-30 Honor
// 6 kyu → близько 75-100 Honor
// 5 kyu → близько 200-300 Honor


// 1 перевернути строку
function solution(str: string): string {
  return str.split("").reverse().join("");
}

// export const solution = (str: string): string => [...str].reverse().join("");
// console.log(solution("sssaaa"));


//  ***************************************************************************
// 2 число в строку
function numberToString(num: number): string{
    return num.toString();
}

// export function numberToString(num: number): string {
//   return String(num);
// }
// console.log(numberToString(123));

//  ***************************************************************************
// 3 залишок від ділення
function isSumEven(num1: number, num2: number):boolean {
  let sum = num1 + num2;
  return sum % 2 === 0; // Якщо залишок від ділення на 2 = 0, значить число парне
}

// console.log(isSumEven(2, 4)); // true (парне)
// console.log(isSumEven(1, 3)); // true (парне)
// console.log(isSumEven(2, 3)); // false (непарне)

//  ***************************************************************************
// 4 знайти суму чисел масива
function sumMix(x: any[]): number {
    let sum = x.reduce((acum, item) => acum + Number(item),0);
  return sum;
}

// console.log(sumMix([1, 3, 5, 2, 3, "2"]));

//  ***************************************************************************
// 5 середнє значення
function findAverage(array: number[]): number{
    let sum:any =  array.reduce((acum, item) => acum + item, 0);
    return sum===0 ? 0 : (sum / array.length);
}
// let array = [1, 2, 4, 2, 3, 4, 3];
let array: any[] = [];
// console.log(0/0); //Nan

// console.log(findAverage(array));
 

//  ***************************************************************************
//6 Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight: number, height: number): string{
    let message = "";
    let bmi = weight / (height * height);

    if (bmi <= 18.5) {
      message = "Underweight";
    } else if (bmi > 18.5 && bmi <= 25.0) {
      message = "Normal";
    } else if (bmi > 25.0 && bmi <= 30.0) {
      message = "Overweight";
    } else if (bmi > 30.0) {
      message = "Obese";
    }
    // console.log(bmi);
    return message;
}
// console.log(bmi(73, 1.64));

// export function bmi(weight: number, height: number): string {
//   let bmi: number = weight / height ** 2;
//   return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
// }

//  ***************************************************************************
//7 
const reverseSeq = (n: number): number[] => {
  let array = []
  for (let i = n; i > 0; i--){
      array.push(i)
    }

    return array;
}

// console.log(reverseSeq(7));

//  ***************************************************************************
//8
function squareSum(numbers: number[]): number{
  return  numbers.reduce((acum, item) => acum + item**2, 0)
}
// console.log(squareSum([1, 2]));

//  ***************************************************************************
//9
function smash(words: string[]): string{
  let str = words.reduce((acum, item) => acum + item + " ", "");
  // console.log(str.trim().length);
return "c"
}

// smash(["hello", "im", "worker"])

//  ***************************************************************************
// В этом ката вам предлагается возвести в квадрат каждую цифру числа и сложить их.
// 9

let num = 9119;
let str = num.toString();
let sum = '';
// console.log(str.length);

for (let i = 0; i < str.length; i++){
  sum = parseInt(str[i]) !== 0 ? sum + parseInt(str[i])**2 : sum + 0;
  
}

// console.log(sum);

// export class Kata {
//   static squareDigits(num: number) {
//     // we can use '+' insted 'Number', '+' mean the data will be numerical
//     // return +(String(num).split('').map(a => Number(a)**2).join(''));
//     return Number(
//       String(num)
//         .split("")
//         .map((a) => Number(a) ** 2)
//         .join("")
//     );
//   }
// }

//  ***************************************************************************
// 10

let a = 0;
let b = -1;
let c = 0;
a > b ? [a, b] = [b, a] : null;

for (let i = a; i <= b; i++){
  // console.log("i = "+i);  
  c = c + i;
}

// console.log(c);

//  ***************************************************************************
// 11 вернути кількість мілісекунд з опівночі. ф-ція примає години, хвилини та секунди

function past(h:number, m:number, s:number):number{
  return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
}

// console.log(past(0,0,0));

//  ***************************************************************************
// 12

function basicOp(operation: string, value1: number, value2: number): number{
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }

  //  eval(`${value1}${operation}${value2}`); //альтернатива
}

// console.log(basicOp('+', 4, 7));
// console.log(basicOp("-", 15, 18));
// console.log(basicOp("*", 5, 5));
// console.log(basicOp("/", 49, 7));

//  ***************************************************************************
// 13 знайти саме коротке слово

function findShort(s: string): number{
  let words = s.split(" "); 
  return words.reduce((min, word) => word.length < min.length ? word : min, words[0]).length;   
}

// export function findShort(s: string): number {
//   return Math.min(...s.split(" ").map((w) => w.length));
// }

// console.log(findShort("findShort ddd w wewewe eeeeeeeeeeeeeeee dd"));

//  ***************************************************************************
// 14 вивести усі слова, які з 4 букв

function friend(friends: string[]): string[]{
  return friends.filter(word => word.length === 4);
}

// console.log(friend(["patrik", "dada", "Rizgik", "gaga"]));

//  ***************************************************************************
// 15 solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution1(str: string, ending: string): boolean{ 
  return str.endsWith(ending);
  
}
// console.log(solution1('abcde', 'dar'));


//  ***************************************************************************
// 16

function betterThenAverage(classPoint: number[], yourPoints: number): boolean{
  let sum = classPoint.reduce((acum, item) => acum + item, 0);
  let average = sum / classPoint.length;
  return yourPoints > average;

  // return classPoints.reduce((a, v) => a + v) / classPoints.length < yourPoints;
}

// console.log(betterThenAverage([100, 35, 27, 72, 15], 75));


//  ***************************************************************************
// 17

function oddOrEven(array: number[]) {
  let res = "";

  if (array.length !== 0) {
   res = array.reduce((prev, next) => prev + next) % 2 === 0 ? "even" : "odd";
  }
  else {
    res = "even"
  }
  
  return res
}

// console.log(oddOrEven([1]));

//  ***************************************************************************
// 18

function isSquare(n: number): boolean{
  
  return Number.isInteger(Math.sqrt(n))
}

// console.log(isSquare(-1));

//  ***************************************************************************
// 19

function getCount(str: string): number{
  let vowels = ["a", "i", "o", "e", "u"];
  let arrStr = str.split("");
  console.log(arrStr);

  let res: number = arrStr.reduce(
    (acum: number, item: any) => (vowels.includes(item) ? acum + 1 : acum + 0),
    0
  );
  return res;
  // return [...str].filter((char) => "aeiou".includes(char)).length;
}

// console.log(getCount('abracadabra'));


//  ***************************************************************************
// 20

function summation(n: number) {
  let sum = 0;
  for (let i = 0; i <= n; i++){
    console.log(i);
    
    sum = sum + i;
  }
  // console.log(sum);
  //  return (n * (n + 1)) / 2;
}

// summation(3);

//  ***************************************************************************
// 21 
//Вам надається список (або масив) пар цілих чисел. Елементи кожної пари представляють кількість людей, які сходять в автобус (перший елемент) і кількість людей, які виходять з автобуса (другий елемент) на автобусній зупинці.
//Ваше завдання — повернути кількість людей, які ще залишаються в автобусі після останньої зупинки (після останнього масиву). Незважаючи на те, що це остання автобусна зупинка, автобус може бути не порожнім, і деякі люди все ще можуть бути в автобусі, вони, ймовірно, сплять там :D

function number(busStop: [number, number][]): number{
  return busStop.reduce((acum, item) => acum + item[0] - item[1], 0);
  // return busStops.reduce((rem, [on, off]) => rem + (on - off), 0);
}
// console.log(number([[0, 0]]));

//  ***************************************************************************
// 22

function countBy(x: number, n: number): number[]{
 
  let i = x;
  let array:number[] = [];

  while (n !== 0) {
    if (i % x === 0) {      
      array.push(i);  
      n--;
    }
    i++;
  }
  
  //  for (let i = 1; i <= n; i++) {
  //    array.push(x * i);
  // }
  
  return array
}

// console.log(countBy(100, 6));

//  ***************************************************************************
// 23
function dnaStrand(dna: string) {
  let res = [...dna].map(item => {
    switch (item) {
      case "A":
        return "T";
      case "T":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C";
    }
  }).join('');
  // console.log(res);  
 }

// dnaStrand("GTAT");

//  ***************************************************************************
// 24

function rps(p1: string, p2: string): string{
   if (p1 === p2) {
     return "Draw!";
  }
  
  let array = [
    ["rock", "scissors"],
    ["scissors", "paper"],
    ["paper", "rock"],
  ]; 

  let res1 = array.find(item => item[0] === p1 && item[1] === p2);
  let res2 = array.find((item) => item[0] === p2 && item[1] === p1);
  
  return res1 === undefined ? "Player 2 won!" : "Player 1 won!";
}
// console.log( rps("scissors", "scissors"));

//  ***************************************************************************
// 25

function doubleChar(str: string): string{
  return [...str].reduce((acum, item) => acum + item + item, ""); 
}

// console.log(doubleChar("balabaga"));

//  ***************************************************************************
// 26

function points(games: string[]): number{
  return games.reduce((acum, item) => {
    acum = item[0] === item[2] ? acum + 1 : acum + 0;
    acum = Number(item[0]) > Number(item[2]) ? acum + 3 : acum + 0;

    // acum = Number(item[0]) > Number(item[2]) ? 3 : Number(item[0]) < Number(item[2]) ? 0 : 1;
    return acum;
  }, 0)
}
// console.log(points(["1:0", "2:0"]));
//     points = x > y ? 3 : x < y ? 0 : 1; скорочений вираз порівняння

 
//  ***************************************************************************
// 27

function removeChar(str: string): string{  
  return str.substring(1, str.length - 1)
  //  return str.slice(1, -1);
}

// console.log(removeChar("Banana"));

//  ***************************************************************************
// 28

function feast(beast: string, dish: string): boolean{
  return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
}

// console.log(feast("brown bear", "bear claw"));

//  ***************************************************************************
// 29

function inuqueInOrder(iterable: string | (string | number)[]): (string | number)[]{
  if (typeof iterable === "string") {
    iterable = iterable.split("");  
  }

 return iterable.filter((item, index) => item !== iterable[index-1])
}

// console.log(inuqueInOrder("AAAABBBBCCCCcDDDD"));

//  ***************************************************************************
// 30

function addBinary(a: number, b: number): string{
  let sum = a + b;
  return sum.toString(2);
}

// console.log(addBinary(1,1));

//  ***************************************************************************
// 31

function countSmileys(arr: string[]): number{
  if (arr.length === 0) {
    return 0;
  }

  let count: number = arr.reduce((acum, item) => {
    // console.log(`${item} довжина ${item.length}`);
    if (item.length === 2) {
      if ((item[0] === ':' || item[0] === ';') && (item[1] === 'D' || item[1] === ')')) {
        acum = acum + 1;        
      }
    }
    else if (item.length === 3) {
      if ((item[0] === ":" || item[0] === ";") && (item[1] === "-" || item[1] === "~") && (item[2] === "D" || item[2] === ")")) {
        acum = acum + 1;
      }
    }
    return acum;    
  },0) 
  return count;
}

// console.log(countSmileys([';(',':~>',':-}',':]', ':D', ':)']));

//  ***************************************************************************
// 32

function openOrSenior(data: number[][]): string[]{
  
  let arrayString = data.reduce((acum:string[], item) => {
    // console.log(item);
    if (item[0] >= 55 && item[1] > 7) {
      return [...acum, "Senior"];
    }
    return [...acum, "Open"];
}, [])


  return arrayString;
  //  return data.map((x) => (x[0] >= 55 && x[1] > 7 ? "Senior" : "Open"));
}

// console.log(openOrSenior([
//   [18, 20],
//   [45, 2],
//   [61, 12],
//   [37, 6],
//   [21, 21],
//   [78, 9],
// ]));


//  ***************************************************************************
// 33

function sumTwoSmallestNumbers(numbers: Array<number>): number{
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];

  // const [first, sencond] = numbers.sort((a, b) => a - b);
  // return first + second;
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

//  ***************************************************************************
// 34

function binaryArrayToNumber(arr: number[]): number{
  return parseInt(arr.join(''), 2);
}

// console.log(binaryArrayToNumber([1, 0, 0, 1]));

//  ***************************************************************************
// 35

function findUnic(arr: number[]): number{
  arr.sort((a, b) => a - b);
  let num1 = arr[0];
  let num2 = arr[arr.length - 1];
  return num1 === arr[1] ? num2 : num1;
}

// console.log(findUnic([1, 1, 1, 2, 1, 1]));

//  ***************************************************************************
// 36

function countSheep(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.filter(item => item === true).length;
}

// console.log(countSheep([
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ]));

//  ***************************************************************************
// 37

function validatePin(pin: string): boolean{

  if (pin.length !== 4 && pin.length !== 6) {
     return false;
  }

  return /^\d+$/.test(pin);
}

// console.log(validatePin("123"));

//  ***************************************************************************
// 38

function accum(s: string): string{  
  return [...s].reduce((acum, item, index) => {
    acum = acum + item.toUpperCase() + item.toLowerCase().repeat(index)+'-'
    return acum
  }, '').slice(0, -1);

}

// accum("abcd"); //accum("abcd") -> "A-Bb-Ccc-Dddd"

//  ***************************************************************************
// 39

// String.prototype.toJadenCase = function () {
  
//   return this.split(" ").map((word) => {
//        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}).join(" "); 
// };

// interface String {
//   toJadenCase(): string;
// }

//  ***************************************************************************
// 40

function areYouPlayingBandjo(name: string): boolean{
  return name.charAt(0).toLowerCase() === 'r' ? true: false
}

// console.log(areYouPlayingBandjo("Rdam"));

//  ***************************************************************************
// 41

export class G964 {
  public static digPow = (n: number, p: number) => {
    let index = p;
    let sum = [...n.toString()].reduce((acum, item) => {
      acum = acum + Number(item) ** index;
      index = index + 1;
      return acum;
    }, 0);

    let k = sum / n;
    return Number.isInteger(k) ? k : -1;
  };

  // public static digPow = (n: number, p: number) => {
  //   const numbers = Array.from(String(n), Number);
  //   const pows = numbers.map((n) => Math.pow(n, p++));
  //   const powsSum = pows.reduce((a, b) => a + b);
  //   const diff = powsSum / n;
  //   return diff % 1 === 0 ? diff : -1;
  // };
}

// console.log(G964.digPow(89, 1));

//  ***************************************************************************
// 42

function abbrevName(name: string): string{
  let words = name.split(" ");
  return words[0].charAt(0).toUpperCase() + "." + words[1].charAt(0).toUpperCase();
}

// console.log(abbrevName("patrick feeney"));

//  ***************************************************************************
// 43
// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false | false    => false

function setAlarm(employed: boolean, vacation: boolean) {
  return employed && !vacation;
}

//  ***************************************************************************
// 44

function towerBuilder(nFloors: number): string[]{
  let count = 1;
  let arr = [];

  for (let a = 0; a < nFloors; a++){
    let str = ' '.repeat(nFloors - a-1);
    
    for (let b = 0; b < count; b++){
      str = str + '*';
    }

    str = str + ' '.repeat(nFloors - a-1);   
    count = count + 2;
    arr.push(str);
    
    str = '';
  }
  return arr
}

// towerBuilder(7);

// export const towerBuilder = (nFloors: number): string[] => {
//   const tower = [];
//   for (let i = 1, nStars = 1; i <= nFloors; i++, nStars += 2) {
//     tower.push(
//       " ".repeat(nFloors - i) + "*".repeat(nStars) + " ".repeat(nFloors - i)
//     );
//   }
//   return tower;
// };

//  ***************************************************************************
// 45

export const likes = (a: string[]): string => {
  if (a.length === 0) {
    return "no one likes this";
  } else if (a.length === 1) {
    return `${a[0]} likes this`;
  } else if (a.length === 2) {
    return `${a[0]} and ${a[1]} like this`;
  } else if (a.length === 3) {
    return `${a[0]}, ${a[1]} and ${a[2]} like this`;
  } else if (a.length === 4) {
    return `${a[0]}, ${a[1]} and 2 others like this`;
  }
  else {
    return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
  }
  
}

// console.log(likes(["Jacob", "Alex"]));

//  ***************************************************************************
// 46

function isIsogram(str: string): boolean{
  return [...new Set([...str.toLowerCase()])].length === str.length
}

// console.log(isIsogram("lkjjoijoijiugytfdtrd"));

//  ***************************************************************************
// 47

function sumStr(a: string, b: string): string{ 
  return (Number(a) + Number(b)).toString();
}

// console.log(sumStr('4', '5'));

//  ***************************************************************************
// 48

function reverseWord(str: string): string{
  
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// reverseWord("This is an example!"); //"sihT si na !elpmaxe"

//  ***************************************************************************
// 49

function comp(a1: number[] | null, a2: number[] | null): boolean{
  if (a1 ===null || a2 === null || (a1.length !== a2.length)) {
    return false;
  }
   
  a1 = a1.map(item => item ** 2).sort();
  a2.sort();
  
  let res = a1.find((item, index) => item !== a2[index])
  
  return res === undefined? true: false
}

//  if (!(a1 && a2) || a1.length !== a2.length) return false;
// return a1.map(x => x * x).sort().toString() === a2.sort().toString();
   
// console.log(comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//   )
// );

//  ***************************************************************************
// 50

function arrayDiff(a: number[], b: number[]): number[]{
  // a.length > b.length ? ([a, b] = [b, a]) : null;
  return a.filter(item => !b.includes(item));
}

// console.log(arrayDiff([], [4,5]));

//  ***************************************************************************
// 51

const isPangram = (phrase: string): boolean => {
  let lowerPhrase = phrase.toLowerCase();

  for (let i = 97; i <= 122; i++){   
    let letter = String.fromCharCode(i);

    if (!lowerPhrase.includes(letter)) {
      return false;
    }
  }

  return true
}

// export const isPangram = (phrase: string): boolean => new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

//  ***************************************************************************
// 52

function isValidWalk(walk: string[]) {
  if (walk.length !== 10) {
    return false;
  }

  let nCount = 0, sCount = 0, eCount = 0,  wCount = 0;

  // Підраховуємо кількість кожного напрямку
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") nCount++;
    if (walk[i] === "s") sCount++;
    if (walk[i] === "e") eCount++;
    if (walk[i] === "w") wCount++;
  }

  // Перевіряємо, чи кількість півночі і півдня однакова, і схід-захід теж
  return nCount === sCount && eCount === wCount;  
}

// console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "s"]));

//  ***************************************************************************
// 53

const testEven = (n: number): boolean => {
   return n % 2 === 0;
}

// testEven(2.5)

//  ***************************************************************************
// 54

function longestConsec(strarr: string[], k: number): string{
  let n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return '';
  }  

  let arrayNew = strarr.map((Item, index) => {
    if (index < strarr.length - (k - 1)) {
      let str = '';
      for (let i = 0; i < k; i++){
        str = str + strarr[index + i];
      }
      return str;
    }
    return ''
  }).reduce((longest, current) => current.length > longest.length? current : longest);

  return arrayNew
}
  
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2);

//  ***************************************************************************
// 55 знаходимо скільки букв дублюється більше одного разу

function dublicateCount(text: string): number{
  const myMap = new Map();

  [...text.toLocaleLowerCase()].map(item => {          
    myMap.set(item, (myMap.get(item) || 0) + 1);
  })

  myMap.forEach((value, key) => {
    if (value === 1) {
      myMap.delete(key);
    }
  })
  
  return myMap.size
}

// console.log(dublicateCount("Indivisibilities"));

//  ***************************************************************************
// 56  числа трібоначчі

function tribonacci([a, b, c]: [number, number, number], n: number): number[]{
  if (n === 0) return [];
  if (n <= 3)  return [a, b, c].slice(0, n);

  let newArray = [a, b, c];
 
  for (let i = 3; i < n; i++){
    let sum = newArray[i - 1] + newArray[i - 2] + newArray[i - 3];
    // console.log(`i: ${i} sum ${sum}`);
    newArray.push(sum);    
  }  
  return newArray;
}
  
// console.log(tribonacci([0.5, 0.5, 0.5], 30));


// export function tribonacci(
//   [a, b, c]: [number, number, number],
//   n: number
// ): number[] {
//   if (n == 0) return [];
//   if (n == 1) return [a];
//   if (n == 2) return [a, b];
//   if (n == 3) return [a, b, c];
//   var result: number[] = [a, b, c];
//   for (var i = 3; i < n; i++) {
//     result[i] = result[i - 1] + result[i - 2] + result[i - 3];
//   }
//   return result;
// }
//  ***************************************************************************
// 57 Завершіть функцію, щоб вона знайшла середнє значення трьох переданих їй балів і повернула літерне значення, пов’язане з цією оцінкою.

function getGrade(a: number, b: number, c: number): string{
  let average = (a + b + c) / 3;

  if (average >= 90 && average <= 100) return 'A'
  if (average >= 80 && average < 90) return "B";
  if (average >= 70 && average < 80) return "C";
  if (average >= 60 && average < 70) return "D";

  return 'F'
}

// console.log(getGrade(44, 55, 52));

//  ***************************************************************************
// 58

function rentalCarCost(d: number): number{
  let cost = d * 40;

  if (d >= 7) return cost - 50;
  if (d >= 3 && d < 7) return cost - 20;
  return cost
}

// console.log(rentalCarCost(7));

//  ***************************************************************************
// 59

function gooseFilter(birds: string[]): string[]{
  const geese: string[] = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  return birds.filter(item => !geese.includes(item));
}

// console.log(
//   gooseFilter([
//     "Mallard",
//     "Hook Bill",
//     "African",
//     "Crested",
//     "Pilgrim",
//     "Toulouse",
//     "Blue Swedish",
//   ])
// );

//  ***************************************************************************
// 60 знайти скільки букв не в діапазоні від a до m і повернути рядок у форматі s/d (s-к-сть букв які не в діапазоні d-довжина строки)

function printerError(s: string): string{
  let lengthS = s.length;
  let countErrors = 0;

 [...s.toLowerCase()].map(item => {
    item.charCodeAt(0) < 97 || item.charCodeAt(0) > 109? countErrors++ : countErrors;    
  })
  
  return "" + countErrors + "/" + lengthS;
}

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

//  ***************************************************************************
// 61

function countPositivesSumNegatives(input: any) {
  if (!input || input.length === 0) return [];

  return input.reduce((accum:any, item:number) => {
    if (item > 0) {
      accum[0] = accum[0] + 1;
    return accum
    }
    else {
      accum[1] = accum[1] + item;
      return accum
    }
  }, [0,0])
}

// console.log(countPositivesSumNegatives([0,2,3,0,5,6,7,8,9,10,-11,-12,-13,-14])

// export function countPositivesSumNegatives(input: any) {
//   return input && input.length
//     ? [
//         input.filter((p: number) => p > 0).length,
//         input
//           .filter((n: number) => n < 0)
//           .reduce((a: number, b: number) => a + b, 0),
//       ]
//     : [];
// }


//  ***************************************************************************
// 62

function isPalindrome(x: string): boolean{
  if (x.length === 1) return true;
  let lengthOfHalfStr = Math.trunc(x.length / 2);
  let halfStr1 = x.toLowerCase().slice(0, lengthOfHalfStr);
  let halfStr2 = x.toLowerCase().slice(-lengthOfHalfStr).split('').reverse().join('');

  return halfStr1 === halfStr2 ? true : false;
}

// export function isPalindrome(x: string): boolean {
//   return x.toLowerCase().split("").reverse().join("") == x.toLowerCase();
// } !!!!!!!!!!!!!!!!!!!!!!!!!!

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("abba"));

//  ***************************************************************************
// 63

function wave(str: string): Array<String>{
  let arr = [];
  
  for (let i = 0; i < str.length; i++){
    if (str[i] == " ") continue;

    let a = [...str.toLowerCase()];
    a[i] = a[i].toUpperCase();
    let strNew = a.join("");
    arr.push(strNew);   
  }  
  return arr;
}

// console.log(wave("Two words"));

//  ***************************************************************************
// 64

function countSleep(num: number): string{
  let str = ''
  for (let i = 0; i < num; i++){
    str = str + `${i+1} sheep...`
  }
  return str;
}

// function countSleep(num: number): string {
//   return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join("");
// }

// console.log(countSleep(7));


//  ***************************************************************************
// 65

export const square = (n: number): number => n * n;

//  ***************************************************************************
// 66

export const findOdd = (xs: number[]): number => {
  let result = 0;

  xs.forEach(num => {
    result = result ^ num;
  })
  return result
  // return xs.reduce((a, b) => a ^ b);
}

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

//  ***************************************************************************
// 67

function isTriangle(a: number, b: number, c: number): boolean{
  if ((a + b > c) && (a + c > b) && (b + c > a)) {
    return true
    // return a + b > c && a + c > b && b + c > a;
  }
  
  return false
}

// console.log(isTriangle(-5, 1, 3));

//  ***************************************************************************
// 68

function findNeddle(haystack: any[]): string{
  let pos = haystack.reduce((acum, item, index) => {
    if (item === 'needle') { 
      acum = index
    } 
    return acum
  } ,0)

  console.log(pos);
  
  return `found the needle at position ${pos}`;
}

// export function findNeedle(haystack: any[]): string {
//   return "found the needle at position " + haystack.indexOf("needle");
// }

// console.log(
//   findNeddle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// );

//  ***************************************************************************
// 69

function positiveSum(arr: number[]): number{
  return arr.reduce((acum, item) => item > 0? acum + item: acum ,0)
}

// console.log(positiveSum([1, -4, 7, 12]));

//  ***************************************************************************
// 70

function number1(array: string[]): string[]{
  return array.map((item, index)=> `${index+1}: ${item}`)
}

// console.log(number1(["a", "b", "c"]));

//  ***************************************************************************
// 71

export const booleanToString = (b: boolean): string => {
  return b.toString();
}

// console.log(booleanToString(true));


//  ***************************************************************************
// 72

export function SeriesSum(n: number): string{
  let denominator = 1;
  let sum = 0;

  for (let i = 1; i <= n; i++){
    sum = sum + 1 / denominator;
    console.log(`1/${denominator}`);
    denominator += 3;    
  }
  
  return sum.toFixed(2);
}

// SeriesSum(5);

//  ***************************************************************************
// 73

export const maleNegative = (num: number): number =>{
  if (num === 0) return 0;
  if (num > 0) return num * (-1);
  
  return num
}

// console.log(maleNegative(-5));

//  ***************************************************************************
// 74

export const min = (list: number[]): number => {
  return Math.min(...list);
}

export const max = (list: number[]): number => {
  return Math.max(...list);
};

// console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

//  ***************************************************************************
// 75

export function howMuchLoveYou(petals: number): string{
  let arr = ["I love you","a little","a lot","passionately", "madly", "not at all",];

  let res = '';
  let ind = 0;

  for (let a = 0; a < petals; a++) {
   
    res = arr[ind];
    ind = ind + 1;

    if (ind === arr.length) {
      ind = 0;
    }      
  }
  return res
}

// howMuchLoveYou(9);
// console.log(howMuchLoveYou(9));

// export function howMuchILoveYou(petals: number): string {
//   switch ((petals - 1) % 6) {
//     case 1:
//       return "a little";
//     case 2:
//       return "a lot";
//     case 3:
//       return "passionately";
//     case 4:
//       return "madly";
//     case 5:
//       return "not at all";
//     default:
//       return "I love you";
//   }
// }


//  ***************************************************************************
// 76

function filter_list(l: Array<any>): Array<number>{
  return l.filter(item => typeof item === "number")
}

// console.log(filter_list([1, 2, "a", "b"]));

//  ***************************************************************************
// 77
// h - поверх на якому грається дитина
// bounce - відскок
function bouncingBall(h: number, bounce: number, window: number): number{
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1
  
  let times = 1;
  let height = h;

  while (height*bounce > window) {
    height = height * bounce;
    times += 2;
  }

  return times;
}

// console.log(bouncingBall(30, 0.66, 1.5));

//  ***************************************************************************
// 77

function order(words: string): string{
  let arr = words.split(' ');
  let sortArr:string[] = [];

  arr.forEach(element => {
    for (let i = 0; i < element.length; i++){
      if (!isNaN(Number(element[i]))) {
        let ind = Number(element[i]);
        sortArr[ind-1] = element;        
      }
      
    }
  });  
  return sortArr.join(' ');
}

// export function order(words: String): String {
//   return words
//     .split(" ")
//     .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
//     .join(" ");
// }

// console.log(order("is2 Thi1s T4est 3a"));

//  ***************************************************************************
// 78

export const high = (str: string): string => {
  let arrStr = str.split(' ');
  let indexWord = 0;
  let max = 0;
  
  arrStr.forEach((element, index) => {
    let weightWord = [...element].reduce((acum, letter) => acum + (letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)+1),0)
    if (weightWord > max) {
      max = weightWord;
      indexWord = index;
    }
  });

  return arrStr[indexWord];
}

// console.log(high("man i need a taxi up to ubud"));

//  ***************************************************************************
// 79

function highAndLow(numbers: string): string{
  let arrNumbers = numbers.split(' ');
  let min = Number(arrNumbers[0]);
  let max = Number(arrNumbers[0]);

  arrNumbers.forEach(element => {
    if (Number(element) < min) min = Number(element);
    if (Number(element) > max) max = Number(element);
  });

  //  let min = Math.min(...arrNumbers);
  //  let max = Math.max(...arrNumbers);
  return max.toString() + " " + min.toString();
}

// console.log(highAndLow("1 2 3 4 5"));

//  ***************************************************************************
// 80
//p0 - початкова кількість населення в місті.
//percent - відсоток приросту населення щороку (наприклад, якщо percent = 2, це означає +2% на рік).
//aug - кількість нових жителів, які прибувають або залишають місто щороку (може бути додатним або від’ємним числом).
//p (number) – цільова кількість населення, яку потрібно досягти або перевищити.
export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
  let year = 0

  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * (percent*0.01) + aug);
    year += 1;
  }

  
  return year;
}

// console.log(nbYear(1500, 5, 100, 5000));

//  ***************************************************************************
// 81

export function isUpperCase(str: string) {
  let strNew = str.split(' ').join('')
  return [...strNew].every((letter) => letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90);
  // return str === str.toUpperCase();
}

// console.log(isUpperCase("HELLO I AM DONALD"));

//  ***************************************************************************
// 82

export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.includes(x);
}

// console.log(check([66, 101], '66'));

//  ***************************************************************************
// 83

export function twoSort(s: string[]): string{
  let newArr = s.sort();
  return newArr[0].split("").join("***");
}

// console.log(twoSort(['xsxsa','sdasd','xzcv','werh']));

//  ***************************************************************************
// 84

export function firstNonConsecutive(arr: number[]): null | number{
  let result = arr.find((item, i) => i > 0 && item !== arr[i - 1] + 1);
  return result === undefined ? null : result;
 
}

// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 8]));

//  ***************************************************************************
// 85

export function solution2(nums: number[]): number[]{
  return nums.length === 0 ? [] : nums.sort((a, b) => a - b);
  // return nums ? nums.sort((a, b) => a - b) : [];
}

// console.log(solution2([1, 2, 10, 50, 5]));

//  ***************************************************************************
// 86

export function alphabetPosition(text: string): string{

 return  [...text.toLowerCase()].map(letter => {
    return (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) ||
           (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90)
      ? letter.charCodeAt(0) - 96
      : null;
  }).filter(Boolean).join(' ');

}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

//  ***************************************************************************
// 87

export function getChar(c: number): string{
  return String.fromCharCode(c).toString();
}

// console.log(getChar(59));

//  ***************************************************************************
// 88

export function between(a: number, b: number): number[]{
  let arr = []
  for (let i = a; i <= b; i++) {
    arr.push(i);    
  }
  return arr;
}

// console.log(between(3, 7));

//  ***************************************************************************
// 89

export function correct(s: string): string{
  let arrSet: Record<string, string> = {
    '5': 'S',
    '1': 'I',
    '0': 'O'
  }
console.log(!isNaN(Number(' ')));

  return [...s].map(char =>  arrSet[char] || char).join('');
}

// correct('L0ND0N');

//  ***************************************************************************
// 90

export function position(alphabet: string): string{
  return (alphabet.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1).toString();
}

// console.log(position('z'));

//  ***************************************************************************
// 91

export function invert(array: number[]): number[]{
  return array.map(item => item * (-1));
}

// console.log(invert([1, 2, 3, 4, 5]));

//  ***************************************************************************
// 92

export function finalGrade(exam: number, projects: number): number{
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75;
  return 0
}

// console.log(finalGrade(64, 1));

//  ***************************************************************************
// 93

export function sumDigits(n: number): number{
  return Number([...Math.abs(n).toString()].reduce((acum, item) => acum + Number(item),0))
}

// console.log(sumDigits(-32));

//  ***************************************************************************
// 94

export function getMiddle(s: string) {
 return s.length % 2 === 0 ? `${s[(s.length / 2) - 1]}${s[s.length / 2]}` : `${s[(s.length-1) / 2]}`;
}

// getMiddle("testx")

//  ***************************************************************************
// 95

// a >= 97 && a <= 122 маленькі
// a >= 65 && a <= 90  великі

export function solve(s: string): string{
  let smallLetters = 0;
  let bigLetters = 0;

  s.split('').forEach(letter => {
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) smallLetters += 1;
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) bigLetters += 1;     
  });

  if (smallLetters === bigLetters) return s.toLowerCase();
  if (smallLetters > bigLetters) return s.toLowerCase();

   return s.toUpperCase();
}

// console.log(solve("CODe"));

//  ***************************************************************************
// 96

export function descendingOrder(n: number): number{
 return Number(n
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join(''));

}

// descendingOrder(987654321);

//  ***************************************************************************
// 97

export function peopleWithAgeDrink(old: number): string{
  if (old < 14) return "drink toddy";
  if (old < 18) return "drink coke";
  if (old < 21) return "drink beer";
  return "drink whisky";
}

//  ***************************************************************************
// 98
// principal - сума грошей
// interest - відсотки, які щорічно виплачуються
// tax - податки за рік (оподатковуються річні нараховані відсотки)
// desired - бажана сума грошей

export function calculateYears(principal: number, interest: number, tax: number, desired: number): number {
  let year = 0;

  while (principal < desired) {
    let profit = principal * interest;
    let tax1 = profit * tax;
    principal = principal + (profit - tax1);
    year += 1;    
  }
  return year;
}

// calculateYears(1000, 0.01625, 0.18, 1200)

//  ***************************************************************************
// 99

export function hello(name = ''): string {
  return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;
  // return name
  //   ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
  //   : "Hello, World!";
}

// console.log(hello('johN'));

//  ***************************************************************************
// 100

// a >= 97 && a <= 122 маленькі
// a >= 65 && a <= 90  великі

export function capitals(word: string): number[]{
  return [...word].map((a, index) => a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90 ?  index : null    
  ).filter((item): item is number => item !== null)
}

// capitals("CodEWaRs");

//  ***************************************************************************
// 101

export function reverseList(list: number[]): number[]{
  
  return list.reverse()
}

// console.log(reverseList([1, 2, 3, 4]));

//  ***************************************************************************
// 102

export function checkExam(array1: string[], array2: string[]): number{
  let res =  array1.reduce((accum, item, index) => {
    if (array2[index] === "") return accum;
    return item === array2[index] ? accum + 4 : accum - 1;
  }, 0)

  return Math.max(res, 0); // повертаємо більше з двух чисел, бо якщо рез буде 0 , то повертаємо 0
}

// checkExam(["a", "a", "b", "b"],["a", "c", "b", "d"]);

//  ***************************************************************************
// 103

export function warnTheSheep(queue: string[]): string {
  if (queue[queue.length - 1] === "wolf")
    return "Pls go away and stop eating my sheep";
  let number = queue.reverse().findIndex((item) => item === "wolf");
  return `Oi! Sheep number ${number}! You are about to be eaten by a wolf!`;

  // const position = queue.reverse().indexOf('wolf');
  // return position ? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep';

}
// warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']);

//  ***************************************************************************
// 104

// export function dirReduc(arr: string[]): string[]{
//   let arr1 = [...arr].map(item => item.toUpperCase());
   
//   for (let a = 0; a < arr.length; a++){
    
//     for (let b = a + 1; b < arr.length; b++){
//       if (arr1[a] === "NORTH") {
//         let index = arr1.indexOf("SOUTH");
//         if (index >= 0) arr1[a] = "null";
//         index >= 0 ? (arr1[index] = "null") : arr1[index];
//       } else if (arr1[a] === "SOUTH") {
//         let index = arr1.indexOf("NORTH");
//         if (index >= 0) arr1[a] = "null";
//         index >= 0 ? (arr1[index] = "null") : arr1[index];
//       } else if (arr1[a] === "EAST") {
//         let index = arr1.indexOf("WEST");
//         if (index >= 0) arr1[a] = "null";
//         index >= 0 ? (arr1[index] = "null") : arr1[index];
//       } else if (arr1[a] === "WEST") {
//         let index = arr1.indexOf("EAST");
//         if (index >= 0) arr1[a] = "null";
//         index >= 0 ? (arr1[index] = "null") : arr1[index];
//       }
//     }
//   }

//   arr1 = arr1.filter((item) => item !== "null");
//   console.log(arr1);
  
//   return arr1;
// }

// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "NORTH"]);

//  ***************************************************************************
// 104

export function dirReduc(arr: string[]): string[]{
  const stack: string[] = [];

  const opposites: Record<string, string> = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  for (const dir of arr) {
    if (stack.length > 0 && stack[stack.length - 1] === opposites[dir]) {
      console.log(`check: ${opposites[dir]}`);
      
      stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return stack;
}

// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "NORTH"]));

// пояснення
// 1
// dir = "NORTH"

// stack порожній → додаємо "NORTH"

// stack = ["NORTH"];
// 2
// dir = "SOUTH"

// stack[stack.length - 1] = "NORTH"
// opposites["SOUTH"] = "NORTH"
// "NORTH" === "NORTH" (співпадає ✅)
// Видаляємо "NORTH" (stack.pop())
// stack = [];

// dir = "EAST"

// stack порожній → додаємо "EAST"

// stack = ["EAST"];
// ......

//  ***************************************************************************
// 105

export function disemvowel(str: string): string{
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return [...str].map(item => vowels.includes(item) ? 'null' : item).filter(item => item !== 'null').join('')
}

// console.log(disemvowel("This website is for losers LOL!"));

//  ***************************************************************************
// 106

export function findSmallestInt(args: number[]): number{
  return Math.min(...args);
}

// console.log(findSmallestInt([34, 15, 88, 2]));

//  ***************************************************************************
// 107

export function noBoringZeros(n: number): number{
  if (n === 0) return 0;

  let strN = [...n.toString()];

  while (strN[strN.length - 1] === "0") {
    strN.pop();
  }
  
  let res = Number(strN.join(''));
 
  
  return res;
}

// noBoringZeros(1450);

//  ***************************************************************************
// 108

export function getRealFloor(n: number): number{
  if (n <= 0) return n;
  return n < 13 ? n - 1 : n - 2;
  // return n <= 0 ? n : n <= 13 ? n - 1 : n - 2;
}

// console.log(getRealFloor(-1));

//  ***************************************************************************
// 109

export function dublicateEncode(word: string) {
  let str = word.toLowerCase();
  let res = [...word];

  for (let i = 0; i < word.length; i++){
    let char = str[i];
    let count = str.split(char).length - 1;
    res[i] = count === 1 ? '(' : ')';  
  }

  return res.join('');  
}

// console.log(dublicateEncode("bAnanan"));

//  ***************************************************************************
// 110

export function divisors(n: number) {
  let count = 0;

  for (let a = 1; a <= n; a++){
    count = n % a === 0 ? count + 1 : count;    
  }

  return count;
}

// console.log(divisors(6));

//  ***************************************************************************
// 111
// Якщо сума кратна 2 → перевернути цей шматок.
// Якщо сума не кратна 2 → зробити зсув вліво (перенести перший символ у кінець).

export function revRot(s: string, sz: number): string {
  if (sz <= 0) return '';
  if (sz > s.length) return ""; 
  
  let res = "";
  
  for (let i = 0; i < Math.trunc(s.length / sz); i++){
    let startIndex = i * sz;
    let subStr = s.slice(startIndex, startIndex + sz);
   
    let sum = [...subStr].reduce((acum, item) => acum + Number(item), 0)

    //перевертаємо  
    // 
    if (sum % 2 !== 1) {
      let partOfStrReversed = [...subStr].reverse().slice().join('');
      res = res + partOfStrReversed;      
    }
    //переносимо перший символ у кінець
    else {
      let partOfStrFirstSToEnd = subStr.slice(1, sz) + subStr.slice(0, 1);
       res = res + partOfStrFirstSToEnd;     
    }    
  }

  return res;
}

// console.log(revRot("123456987654", 6));

//  ***************************************************************************
// 112  
 
export function get_age(age: string): number{
  
  return Number(age.split(" ")[0]);
}

// console.log(get_age("1 year old"));

//***************************************************************************
// 113 
export const sayHello = (name: string[], city: string, state: string): string => {
  
  return "";
};

//***************************************************************************
// 114


