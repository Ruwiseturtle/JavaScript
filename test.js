// 7 kyu → близько 20-30 Honor
// 6 kyu → близько 75-100 Honor
// 5 kyu → близько 200-300 Honor
var _a;
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
    var sum = num1 + num2;
    return sum % 2 === 0; // Якщо залишок від ділення на 2 = 0, значить число парне
}
// console.log(isSumEven(2, 4)); // true (парне)
// console.log(isSumEven(1, 3)); // true (парне)
// console.log(isSumEven(2, 3)); // false (непарне)
//  ***************************************************************************
// 4 знайти суму чисел масива
function sumMix(x) {
    var sum = x.reduce(function (acum, item) { return acum + Number(item); }, 0);
    return sum;
}
// console.log(sumMix([1, 3, 5, 2, 3, "2"]));
//  ***************************************************************************
// 5 середнє значення
function findAverage(array) {
    var sum = array.reduce(function (acum, item) { return acum + item; }, 0);
    return sum === 0 ? 0 : (sum / array.length);
}
// let array = [1, 2, 4, 2, 3, 4, 3];
var array = [];
// console.log(0/0); //Nan
// console.log(findAverage(array));
//  ***************************************************************************
//6 Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
    var message = "";
    var bmi = weight / (height * height);
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
    console.log(bmi);
    return message;
}
// console.log(bmi(73, 1.64));
// export function bmi(weight: number, height: number): string {
//   let bmi: number = weight / height ** 2;
//   return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
// }
//  ***************************************************************************
//7 
var reverseSeq = function (n) {
    var array = [];
    for (var i = n; i > 0; i--) {
        array.push(i);
    }
    return array;
};
// console.log(reverseSeq(7));
//  ***************************************************************************
//8
function squareSum(numbers) {
    return numbers.reduce(function (acum, item) { return acum + Math.pow(item, 2); }, 0);
}
// console.log(squareSum([1, 2]));
//  ***************************************************************************
//9
function smash(words) {
    var str = words.reduce(function (acum, item) { return acum + item + " "; }, "");
    console.log(str.trim().length);
    return "c";
}
// smash(["hello", "im", "worker"])
//  ***************************************************************************
// В этом ката вам предлагается возвести в квадрат каждую цифру числа и сложить их.
// 9
var num = 9119;
var str = num.toString();
var sum = '';
// console.log(str.length);
for (var i = 0; i < str.length; i++) {
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
var a = 0;
var b = -1;
var c = 0;
a > b ? (_a = [b, a], a = _a[0], b = _a[1], _a) : null;
for (var i = a; i <= b; i++) {
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
    var words = s.split(" ");
    return words.reduce(function (min, word) { return word.length < min.length ? word : min; }, words[0]).length;
}
// export function findShort(s: string): number {
//   return Math.min(...s.split(" ").map((w) => w.length));
// }
// console.log(findShort("findShort ddd w wewewe eeeeeeeeeeeeeeee dd"));
//  ***************************************************************************
// 14 вивести усі слова, які з 4 букв
function friend(friends) {
    return friends.filter(function (word) { return word.length === 4; });
}
console.log(friend(["patrik", "dada", "Rizgik", "gaga"]));
