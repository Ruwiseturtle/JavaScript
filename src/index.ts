// import { test } from "./test";

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

console.log(feast("brown bear", "bear claw"));

