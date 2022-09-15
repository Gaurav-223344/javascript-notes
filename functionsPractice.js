//  JavaScript function that reverse a number

function reverseNumber(number){
    if (Number(number) !== NaN){
        let revNumber = 0;
        while (number >0){
            let remainder = number%10;   // remainder (last digit of number)
            revNumber = ((revNumber*10) +  remainder)  //appending last digit
            number /= 10;  
            number = Math.floor(number)
        }
        return revNumber;
        
    }
    else{
        console.error("Only number is allowed....")
    }
}

function reverseNumberNew(number){                                           //alternate way to create reverse of number
   
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

function sortString(string){
    return string.split('').sort().join("");
}

/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function longestWord(string){
    arr = string.split(" ");
    maxString = arr[0];
    for(let i=1; i<arr.length; i++){
        if(maxString.length < arr[i].length){
            maxString =  arr[i];
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


function calculateVowels(string){
    regex = /[aeiou]/gi
    return string.match(regex).length
}



