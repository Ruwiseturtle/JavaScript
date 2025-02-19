"use strict";
// import { test } from "./test";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = exports.G964 = void 0;
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
function solution(str) {
    return str.split("").reverse().join("");
}
// export const solution = (str: string): string => [...str].reverse().join("");
// console.log(solution("sssaaa"));
//  ***************************************************************************
// 2 число в строку
function numberToString(num) {
    return num.toString();
}
// export function numberToString(num: number): string {
//   return String(num);
// }
// console.log(numberToString(123));
//  ***************************************************************************
// 3 залишок від ділення
function isSumEven(num1, num2) {
    let sum = num1 + num2;
    return sum % 2 === 0; // Якщо залишок від ділення на 2 = 0, значить число парне
}
// console.log(isSumEven(2, 4)); // true (парне)
// console.log(isSumEven(1, 3)); // true (парне)
// console.log(isSumEven(2, 3)); // false (непарне)
//  ***************************************************************************
// 4 знайти суму чисел масива
function sumMix(x) {
    let sum = x.reduce((acum, item) => acum + Number(item), 0);
    return sum;
}
// console.log(sumMix([1, 3, 5, 2, 3, "2"]));
//  ***************************************************************************
// 5 середнє значення
function findAverage(array) {
    let sum = array.reduce((acum, item) => acum + item, 0);
    return sum === 0 ? 0 : (sum / array.length);
}
// let array = [1, 2, 4, 2, 3, 4, 3];
let array = [];
// console.log(0/0); //Nan
// console.log(findAverage(array));
//  ***************************************************************************
//6 Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
    let message = "";
    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
        message = "Underweight";
    }
    else if (bmi > 18.5 && bmi <= 25.0) {
        message = "Normal";
    }
    else if (bmi > 25.0 && bmi <= 30.0) {
        message = "Overweight";
    }
    else if (bmi > 30.0) {
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
const reverseSeq = (n) => {
    let array = [];
    for (let i = n; i > 0; i--) {
        array.push(i);
    }
    return array;
};
// console.log(reverseSeq(7));
//  ***************************************************************************
//8
function squareSum(numbers) {
    return numbers.reduce((acum, item) => acum + Math.pow(item, 2), 0);
}
// console.log(squareSum([1, 2]));
//  ***************************************************************************
//9
function smash(words) {
    let str = words.reduce((acum, item) => acum + item + " ", "");
    // console.log(str.trim().length);
    return "c";
}
// smash(["hello", "im", "worker"])
//  ***************************************************************************
// В этом ката вам предлагается возвести в квадрат каждую цифру числа и сложить их.
// 9
let num = 9119;
let str = num.toString();
let sum = '';
// console.log(str.length);
for (let i = 0; i < str.length; i++) {
    sum = parseInt(str[i]) !== 0 ? sum + Math.pow(parseInt(str[i]), 2) : sum + 0;
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
for (let i = a; i <= b; i++) {
    // console.log("i = "+i);  
    c = c + i;
}
// console.log(c);
//  ***************************************************************************
// 11 вернути кількість мілісекунд з опівночі. ф-ція примає години, хвилини та секунди
function past(h, m, s) {
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
}
// console.log(past(0,0,0));
//  ***************************************************************************
// 12
function basicOp(operation, value1, value2) {
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
function findShort(s) {
    let words = s.split(" ");
    return words.reduce((min, word) => word.length < min.length ? word : min, words[0]).length;
}
// export function findShort(s: string): number {
//   return Math.min(...s.split(" ").map((w) => w.length));
// }
// console.log(findShort("findShort ddd w wewewe eeeeeeeeeeeeeeee dd"));
//  ***************************************************************************
// 14 вивести усі слова, які з 4 букв
function friend(friends) {
    return friends.filter(word => word.length === 4);
}
// console.log(friend(["patrik", "dada", "Rizgik", "gaga"]));
//  ***************************************************************************
// 15 solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution1(str, ending) {
    return str.endsWith(ending);
}
// console.log(solution1('abcde', 'dar'));
//  ***************************************************************************
// 16
function betterThenAverage(classPoint, yourPoints) {
    let sum = classPoint.reduce((acum, item) => acum + item, 0);
    let average = sum / classPoint.length;
    return yourPoints > average;
    // return classPoints.reduce((a, v) => a + v) / classPoints.length < yourPoints;
}
// console.log(betterThenAverage([100, 35, 27, 72, 15], 75));
//  ***************************************************************************
// 17
function oddOrEven(array) {
    let res = "";
    if (array.length !== 0) {
        res = array.reduce((prev, next) => prev + next) % 2 === 0 ? "even" : "odd";
    }
    else {
        res = "even";
    }
    return res;
}
// console.log(oddOrEven([1]));
//  ***************************************************************************
// 18
function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}
// console.log(isSquare(-1));
//  ***************************************************************************
// 19
function getCount(str) {
    let vowels = ["a", "i", "o", "e", "u"];
    let arrStr = str.split("");
    console.log(arrStr);
    let res = arrStr.reduce((acum, item) => (vowels.includes(item) ? acum + 1 : acum + 0), 0);
    return res;
    // return [...str].filter((char) => "aeiou".includes(char)).length;
}
// console.log(getCount('abracadabra'));
//  ***************************************************************************
// 20
function summation(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
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
function number(busStop) {
    return busStop.reduce((acum, item) => acum + item[0] - item[1], 0);
    // return busStops.reduce((rem, [on, off]) => rem + (on - off), 0);
}
// console.log(number([[0, 0]]));
//  ***************************************************************************
// 22
function countBy(x, n) {
    let i = x;
    let array = [];
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
    return array;
}
// console.log(countBy(100, 6));
//  ***************************************************************************
// 23
function dnaStrand(dna) {
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
function rps(p1, p2) {
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
function doubleChar(str) {
    return [...str].reduce((acum, item) => acum + item + item, "");
}
// console.log(doubleChar("balabaga"));
//  ***************************************************************************
// 26
function points(games) {
    return games.reduce((acum, item) => {
        acum = item[0] === item[2] ? acum + 1 : acum + 0;
        acum = Number(item[0]) > Number(item[2]) ? acum + 3 : acum + 0;
        // acum = Number(item[0]) > Number(item[2]) ? 3 : Number(item[0]) < Number(item[2]) ? 0 : 1;
        return acum;
    }, 0);
}
// console.log(points(["1:0", "2:0"]));
//     points = x > y ? 3 : x < y ? 0 : 1; скорочений вираз порівняння
//  ***************************************************************************
// 27
function removeChar(str) {
    return str.substring(1, str.length - 1);
    //  return str.slice(1, -1);
}
// console.log(removeChar("Banana"));
//  ***************************************************************************
// 28
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
// console.log(feast("brown bear", "bear claw"));
//  ***************************************************************************
// 29
function inuqueInOrder(iterable) {
    if (typeof iterable === "string") {
        iterable = iterable.split("");
    }
    return iterable.filter((item, index) => item !== iterable[index - 1]);
}
// console.log(inuqueInOrder("AAAABBBBCCCCcDDDD"));
//  ***************************************************************************
// 30
function addBinary(a, b) {
    let sum = a + b;
    return sum.toString(2);
}
// console.log(addBinary(1,1));
//  ***************************************************************************
// 31
function countSmileys(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let count = arr.reduce((acum, item) => {
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
    }, 0);
    return count;
}
// console.log(countSmileys([';(',':~>',':-}',':]', ':D', ':)']));
//  ***************************************************************************
// 32
function openOrSenior(data) {
    let arrayString = data.reduce((acum, item) => {
        // console.log(item);
        if (item[0] >= 55 && item[1] > 7) {
            return [...acum, "Senior"];
        }
        return [...acum, "Open"];
    }, []);
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
function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
    // const [first, sencond] = numbers.sort((a, b) => a - b);
    // return first + second;
}
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
//  ***************************************************************************
// 34
function binaryArrayToNumber(arr) {
    return parseInt(arr.join(''), 2);
}
// console.log(binaryArrayToNumber([1, 0, 0, 1]));
//  ***************************************************************************
// 35
function findUnic(arr) {
    arr.sort((a, b) => a - b);
    let num1 = arr[0];
    let num2 = arr[arr.length - 1];
    return num1 === arr[1] ? num2 : num1;
}
// console.log(findUnic([1, 1, 1, 2, 1, 1]));
//  ***************************************************************************
// 36
function countSheep(arrayOfSheep) {
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
function validatePin(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    return /^\d+$/.test(pin);
}
// console.log(validatePin("123"));
//  ***************************************************************************
// 38
function accum(s) {
    return [...s].reduce((acum, item, index) => {
        acum = acum + item.toUpperCase() + item.toLowerCase().repeat(index) + '-';
        return acum;
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
function areYouPlayingBandjo(name) {
    return name.charAt(0).toLowerCase() === 'r' ? true : false;
}
// console.log(areYouPlayingBandjo("Rdam"));
//  ***************************************************************************
// 41
class G964 {
}
exports.G964 = G964;
G964.digPow = (n, p) => {
    let index = p;
    let sum = [...n.toString()].reduce((acum, item) => {
        acum = acum + Math.pow(Number(item), index);
        index = index + 1;
        return acum;
    }, 0);
    let k = sum / n;
    return Number.isInteger(k) ? k : -1;
};
// console.log(G964.digPow(89, 1));
//  ***************************************************************************
// 42
function abbrevName(name) {
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
function setAlarm(employed, vacation) {
    return employed && !vacation;
}
//  ***************************************************************************
// 44
function towerBuilder(nFloors) {
    let count = 1;
    let arr = [];
    for (let a = 0; a < nFloors; a++) {
        let str = ' '.repeat(nFloors - a - 1);
        for (let b = 0; b < count; b++) {
            str = str + '*';
        }
        str = str + ' '.repeat(nFloors - a - 1);
        count = count + 2;
        arr.push(str);
        str = '';
    }
    return arr;
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
const likes = (a) => {
    if (a.length === 0) {
        return "no one likes this";
    }
    else if (a.length === 1) {
        return `${a[0]} likes this`;
    }
    else if (a.length === 2) {
        return `${a[0]} and ${a[1]} like this`;
    }
    else if (a.length === 3) {
        return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    }
    else if (a.length === 4) {
        return `${a[0]}, ${a[1]} and 2 others like this`;
    }
    else {
        return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }
};
exports.likes = likes;
// console.log(likes(["Jacob", "Alex"]));
//  ***************************************************************************
// 46
function isIsogram(str) {
    return [...new Set([...str.toLowerCase()])].length === str.length;
}
// console.log(isIsogram("lkjjoijoijiugytfdtrd"));
//  ***************************************************************************
// 47
function sumStr(a, b) {
    return (Number(a) + Number(b)).toString();
}
// console.log(sumStr('4', '5'));
//  ***************************************************************************
// 48
function reverseWord(str) {
    return str
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
        .join(" ");
}
// reverseWord("This is an example!"); //"sihT si na !elpmaxe"
//  ***************************************************************************
// 49
function comp(a1, a2) {
    if (a1 === null || a2 === null || (a1.length !== a2.length)) {
        return false;
    }
    a1 = a1.map(item => Math.pow(item, 2)).sort();
    a2.sort();
    let res = a1.find((item, index) => item !== a2[index]);
    return res === undefined ? true : false;
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
function arrayDiff(a, b) {
    // a.length > b.length ? ([a, b] = [b, a]) : null;
    return a.filter(item => !b.includes(item));
}
// console.log(arrayDiff([], [4,5]));
//  ***************************************************************************
// 51
const isPangram = (phrase) => {
    let lowerPhrase = phrase.toLowerCase();
    for (let i = 97; i <= 122; i++) {
        let letter = String.fromCharCode(i);
        if (!lowerPhrase.includes(letter)) {
            return false;
        }
    }
    return true;
};
// export const isPangram = (phrase: string): boolean => new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
//  ***************************************************************************
// 52
function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    let nCount = 0, sCount = 0, eCount = 0, wCount = 0;
    // Підраховуємо кількість кожного напрямку
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === "n")
            nCount++;
        if (walk[i] === "s")
            sCount++;
        if (walk[i] === "e")
            eCount++;
        if (walk[i] === "w")
            wCount++;
    }
    // Перевіряємо, чи кількість півночі і півдня однакова, і схід-захід теж
    return nCount === sCount && eCount === wCount;
}
// console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "s"]));
//  ***************************************************************************
// 53
const testEven = (n) => {
    return n % 2 === 0;
};
// testEven(2.5)
//  ***************************************************************************
// 54
function longestConsec(strarr, k) {
    let n = strarr.length;
    if (n === 0 || k > n || k <= 0) {
        return '';
    }
    let arrayNew = strarr.map((Item, index) => {
        if (index < strarr.length - (k - 1)) {
            let str = '';
            for (let i = 0; i < k; i++) {
                str = str + strarr[index + i];
            }
            return str;
        }
        return '';
    }).reduce((longest, current) => current.length > longest.length ? current : longest);
    return arrayNew;
}
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2);
//  ***************************************************************************
// 55 знаходимо скільки букв дублюється більше одного разу
function dublicateCount(text) {
    const myMap = new Map();
    [...text.toLocaleLowerCase()].map(item => {
        myMap.set(item, (myMap.get(item) || 0) + 1);
    });
    myMap.forEach((value, key) => {
        if (value === 1) {
            myMap.delete(key);
        }
    });
    return myMap.size;
}
// console.log(dublicateCount("Indivisibilities"));
//  ***************************************************************************
// 56  числа трібоначчі
function tribonacci([a, b, c], n) {
    if (n === 0)
        return [];
    if (n <= 3)
        return [a, b, c].slice(0, n);
    let newArray = [a, b, c];
    for (let i = 3; i < n; i++) {
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
function getGrade(a, b, c) {
    let average = (a + b + c) / 3;
    if (average >= 90 && average <= 100)
        return 'A';
    if (average >= 80 && average < 90)
        return "B";
    if (average >= 70 && average < 80)
        return "C";
    if (average >= 60 && average < 70)
        return "D";
    return 'F';
}
// console.log(getGrade(44, 55, 52));
//  ***************************************************************************
// 58
function rentalCarCost(d) {
    let cost = d * 40;
    if (d >= 7)
        return cost - 50;
    if (d >= 3 && d < 7)
        return cost - 20;
    return cost;
}
// console.log(rentalCarCost(7));
//  ***************************************************************************
// 59
function gooseFilter(birds) {
    const geese = [
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
function printerError(s) {
    let lengthS = s.length;
    let countErrors = 0;
    [...s.toLowerCase()].map(item => {
        item.charCodeAt(0) < 97 || item.charCodeAt(0) > 109 ? countErrors++ : countErrors;
    });
    return "" + countErrors + "/" + lengthS;
}
// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
//  ***************************************************************************
// 61
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0)
        return [];
    return input.reduce((accum, item) => {
        if (item > 0) {
            accum[0] = accum[0] + 1;
            return accum;
        }
        else {
            accum[1] = accum[1] + item;
            return accum;
        }
    }, [0, 0]);
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
function isPalindrome(x) {
    let lengthOfHalfStr = Math.trunc(x.length / 2);
    let halfStr1 = x.toLowerCase().slice(0, lengthOfHalfStr);
    let halfStr2 = x.toLowerCase().slice(-lengthOfHalfStr).split('').reverse().join('');
    console.log(lengthOfHalfStr);
    console.log(halfStr1);
    console.log(halfStr2);
    return halfStr1 === halfStr2 ? true : false;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("abba"));
//# sourceMappingURL=index.js.map