/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function calculateSum (a,b){
    let sum = a + b;
    if (a === b){
        return sum * 3;
    } else {
        return sum;
    }
}

console.log("Ex. 1:")
console.log(calculateSum(2,2));

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

function givenIntegers(a,b){
    let sum = a + b;
    if (a === 50 || b === 50 || sum === 50){
        return true;
    } else {
        return false;
    }
}

console.log("Ex. 2:")
console.log(givenIntegers(25,25));

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function removeCharacter(a,b){
    let ind = a;
    let str = b.split("");
    delete str[ind];
    let newStr = str.join("");
    return newStr;
}

console.log("Ex.3:")
console.log(removeCharacter(4,"hello"));

/* 4. Create a function to find and return the largest of three given integers. */

function largestInteger(a,b,c){
    return Math.max(a,b,c);
}

console.log("Ex. 4:")
console.log(largestInteger(1,2,3));

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

function inRange(a,b){
    if (a > 40 && a < 60 && b > 70 && b < 100){
        return true;
    } else {
        return false;
    }
}

console.log("Ex. 5:")
console.log(inRange(50,80));

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

function stringCopies(a,b){
    return a.repeat(b);
}

console.log("Ex. 6:")
console.log(stringCopies("ha",3));

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

function cityName(a){
    if (a.startsWith("Los") || a.startsWith("New")){
        return a;
    } else {
        return false;
    }
}

console.log("Ex. 7:")
console.log(cityName("New York"));

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

let myArr = [1,2,3];

function sumOfArray(a){
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

console.log("Ex. 8:")
console.log(sumOfArray(myArr));

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

function numberValues(a){
    if (a.includes(1) || a.includes(3)){
        return true;
    } else {
        return false;
    }
}

console.log("Ex. 9:")
console.log(numberValues(myArr));

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 

    function numberValuesOpposite(a){
        if (!a.includes(1) || !a.includes(3)){
            return true;
        } else {
            return false;
        }
    }
    
    console.log("Ex. 10:")
    console.log(numberValuesOpposite(myArr));

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 

let strArr = ["two", "three", "four"];

function longestString(a){
    let newArr = [];
    for (let i = 0; i < a.length; i++) {
        newArr.push(a[i].split(""));
    }
    let newerArray = [];
    for (let i = 0; i < newArr.length; i++) {
        newerArray.push(newArr[i].length);   
    }
    let max = Math.max(...newerArray);
    let ind = newerArray.indexOf(max);
    return strArr[ind];
}

console.log("Ex. 11:");
console.log(longestString(strArr));

/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

let myTriangle = {start: 95, end: 175};

function findAngle(a){
    if (a.start >= 0 && a.start < 90 && a.end <= 90){
        return "acute";
    } else if (a.start === 90 && a.end === 90) {
        return "right";
    } else if (a.start >= 90 && a.start < 180 && a.end <= 180) {
        return "obtuse";
    } else if (a.start === 180 && a.end === 180) {
        return "straight";
    } else {
        return "unknown";
    }
}

console.log("Ex. 12:")
console.log(findAngle(myTriangle))

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

let dateToday = [13,9,2021];

function greatestInteger(a){
    let max = Math.max(...a);
    let ind = a.indexOf(max);
    return a[ind];
}

console.log("Ex. 13:")
console.log(greatestInteger(dateToday))

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

let extraArr = [1,2,3,4,5,6,7,8,9];

function largestEven(a){
    let evens = a.filter(number => number % 2 == 0);
    return Math.max(...evens);
}

console.log("Ex. 14:")
console.log(largestEven(extraArr))

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */