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
var num = 9119;
var str = num.toString();
var sum = '';
// console.log(str.length);
for (var i = 0; i < str.length; i++) {
    sum = parseInt(str[i]) !== 0 ? sum + Math.pow(parseInt(str[i]), 2) : sum + 0;
}
console.log(sum);
