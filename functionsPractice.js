//  JavaScript function that reverse a number

function reverseNumber(number) {
    if (Number(number) !== NaN) {
        let revNumber = 0;
        while (number > 0) {
            let remainder = number % 10;   // remainder (last digit of number)
            revNumber = ((revNumber * 10) + remainder)  //appending last digit
            number /= 10;
            number = Math.floor(number)
        }
        return revNumber;

    }
    else {
        console.error("Only number is allowed....")
    }
}

function reverseNumberNew(number) {                                           //alternate way to create reverse of number

    return +(number.toString().split('').reverse().join(""));

    /*

       Explaination :
    number.toString() // number to string
   .split('') // for creating array of letters of string
   .reverse() // reverse it
   .join("") // to make array to string
   +() // string to number
   
   */
}


/* 
Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

function sortString(string) {
    return string.split('').sort().join("");
}

/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function longestWord(string) {
    arr = string.split(" ");
    maxString = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (maxString.length < arr[i].length) {
            maxString = arr[i];
        }
    }
    return maxString;
}



/*
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/

function calculateVowels(string) {
    regex = /[aeiou]/gi
    return string.match(regex).length
}


// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
function isPrime(number) {
    if (!isNaN(Number(number))) {
        if (number === 0 || number === 1) {
            return false;
        }
        if (number === 2 || number === 3) {
            return true;
        }
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    else {
        console.error('Only Numbers are allowed');
    }
}

/*
Write a JavaScript function which says whether a number is perfect. Go to the editor
According to Wikipedia : In number theory, a perfect number is a positive integer that 
is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors 
excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a
 number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 
1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its 
positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
This is followed by the perfect numbers 496 and 8128.
*/

function isPerfect(number){
    perfectNumber = 0;
    for(let i = 1; i<number; i++){
        if(number%i === 0){
            perfectNumber+=i;
        }
    }
    if (number === perfectNumber){
        return true;
    }
    else {
        return false;
    }
}



// Write a JavaScript function to compute the factors of a positive integer.
function getFactors(number){
    let factors = []
    for(let i = 1; i<number+1; i++){
        if(number%i === 0){
            factors.push(i);
        }
    }
    return factors;
}


/*
Write a JavaScript function to convert an amount to coins. Go to the editor
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
*/
// best example of "Functions that return a function"
function amountToCoin(arrayOfCoins){
    return function(amount){
        var coins= []
        while(amount>0){
            for(let i=0; i<arrayOfCoins.length; i++){
                if(arrayOfCoins[i] <= amount){
                    coins.push(arrayOfCoins[i]);
                    amount -= arrayOfCoins[i];
                    break;
                }            
            }
        }
        return coins;
    }
}

/*
Write a JavaScript function to compute the value of b^n where n is the exponent and b is the bases. 
Accept b and n from the user and display the result.
*/

// function getExponent(bases,exponent){
//     return bases**exponent;
// }

// best example of "Functions that return a function"
console.log("--------------");

function setExponent(exponent){
    return function (bases){
        return bases**exponent;
    }
}
console.log("power of 4");

powerOf4 = setExponent(4);
console.log(powerOf4(3));
console.log(powerOf4(12));
console.log(powerOf4(5));
console.log("--------------");


console.log("Cube");

cube = setExponent(3);
console.log(cube(3));
console.log(cube(6));
console.log(cube(11));
console.log("--------------");



