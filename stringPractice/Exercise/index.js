// Ex1: Write a JavaScript function to check whether an `input` is a string or not
function isString(string) {
    if (typeof string === 'string') {
        return true;
    } else {
        return false;
    }
}
// console.log(isString('gaurav'))


// Ex:2 Write a JavaScript function to check whether a string is blank or not
function isBlank(string) {
    if (string === '') {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isBlank(''))

// Ex:3 Write a JavaScript function to split a string and convert it into an array of words.
function arrayOfWords(string) {
    return string.split(' ');
}
// console.log(arrayOfWords('My name is Gaurav'))

// Ex:4 Write a JavaScript function to extract a specified number of characters from a string.
function extract(string, number) {
    return string.slice(0, number);
}
// console.log(extract('Alaska',2))

// Ex:5  Write a JavaScript function to convert a string in abbreviated form
function abbrevName(string) {
    arr = arrayOfWords(string);
    abbreviatedString = arr[0]
    for (let i = 1; i < arr.length; i++) {
        abbreviatedString += " " + arr[i][0].toUpperCase() + "."
    }
    return abbreviatedString
}
// console.log(abbrevName('Hubert Blaine Wolfeschlegelsteinhausenbergerdorff'))
// console.log(abbrevName('kakashi hatake'))
// console.log(abbrevName('jay jonah jameson'))


// Ex:6 Write a JavaScript function to hide email addresses to protect from unauthorized user.\
function protectEmail(email) {
    arr = email.split('@');
    halfLength = Math.floor(arr[0].length / 2);
    return arr[0].slice(0, halfLength) + "...@" + arr[1];
}
// console.log(protectEmail("Gaurav@abc.com"));

// Ex:7 Write a JavaScript function to parameterize a string
function stringParameterize(string) {
    arr = arrayOfWords(string.toLowerCase());
    return arr.join('-');
}
// console.log(stringParameterize('Robin Singh from USA.'))

// Ex:8 Write a JavaScript function to capitalize the first letter of a string
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1,)
}
// console.log(capitalize('js string exercises'))

// Ex:9 Write a JavaScript function to capitalize the first letter of each word in a string.
function capitalizeWords(string) {
    arr = arrayOfWords(string)
    newString = ''

    for (let i = 0; i < arr.length; i++) {
        newString += capitalize(arr[i]) + ' ';
    }
    return newString;
}

// console.log(capitalizeWords('js string exercises'));

// Ex:10 Write a JavaScript function that takes a string which has lower and upper case letters as 
// a parameter and converts upper case letters to lower case, and lower case letters to upper case.

function swapcase(string) {
    upper = /^[A-Z]$/
    lower = /^[a-z]$/
    newString = ''
    for (let index = 0; index < string.length; index++) {
        if (upper.test(string[index])) {
            newString += string[index].toLowerCase()
        }
        else if (lower.test(string[index])) {
            newString += string[index].toUpperCase()
        }
        else {
            newString += string[index]
        }
    }
    return newString
}

function swapcase0(string) {

    newString = ''
    for (let index = 0; index < string.length; index++) {
        if (string[index] === string[index].toLowerCase()) {
            newString += string[index].toUpperCase()
        }
        else {
            newString += string[index].toLowerCase()
        }
    }
    return newString
}

// console.log(swapcase0('Gaurav Gaikwad'))

// Ex:11 Write a JavaScript function to concatenates a given string n times (default is 1).
function repeat(string, number = 1) {
    return string.repeat(number);
}

// console.log(repeat('Gaurav',10))
// console.log(repeat('Gaurav'))

// Ex:12 Write a JavaScript function to insert a string within a string at a particular position (default is 1).
function insert(string, insertString, position) {
    if ((insertString === undefined) && (position === undefined)) {
        return string
    }
    else if (position === undefined) {
        return insertString + string
    }
    else {
        return string.slice(0, position) + insertString + string.slice(position)
    }
}

// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript '));
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

// Ex:13 Write a JavaScript function to humanized number (Formats a number to a human-readable string.) 
// with the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanizeFormat(number) {
    lastDigit = number % 10
    if (lastDigit === 1) {
        return number + 'st'
    }
    else if (lastDigit === 2) {
        return number + 'nd'
    }
    else if (lastDigit === 3) {
        return number + 'rd'
    }
    else {
        return number + 'th'
    }
}

// console.log(humanizeFormat(1112))
// console.log(humanizeFormat(10))
// console.log(humanizeFormat(134))
// console.log(humanizeFormat(134401))
// console.log(humanizeFormat(8))


//  Write a JavaScript function to truncates a string if it is longer than the specified number of characters. 
// Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
function textTruncate(string, position, endWith = '...') {
    if (position === undefined) {
        return string;
    }
    else {
        return string.slice(0, position) + endWith
    }
}

// console.log(textTruncate('We are doing JS string exercises.'))
// console.log(textTruncate('We are doing JS string exercises.', 19))
// console.log(textTruncate('We are doing JS string exercises.', 15, '!!'))


//  Write a JavaScript function to chop a string into chunks of a given length.
function stringChop(string, position) {
    newStr = ''
    for (let i = 0; i < string.length; i += position) {
        newStr += string.substr(i, position) + ' ';
    }
    arr = arrayOfWords(newStr.trim());
    // arr.pop()
    return arr;
}

// console.log(stringChop('w3resource'));
// console.log(stringChop('w3resource', 2));
// console.log(stringChop('w3resource', 3));
// console.log(stringChop('w3resource', 4));

// Write a JavaScript function to count the occurrence of a substring in a string
function count(string, word) {
    arr = string.toLowerCase().split(" ");
    myObj = new Object()
    myObj[word] = 0
    for (let i = 0; i < arr.length; i++) {
        if (word in myObj) {
            myObj[arr[i]] += 1;
        }
    }
    return myObj[word];
}

// console.log(count("The quick brown fox jumps over the lazy the the the the dog", 'the'));
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));


// 
function escape_HTML(string) {
    // return string.apply(myObj);
    return string.replace(/[<>\"]/g, function(tag){
        var obj = {'<':'&lt;', '>':'&gt;', '\"':'&quot;'}
        return obj[tag];
    })
}

// console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));

// Write a JavaScript function that can pad (left, right) a string to get to a determined length
function formattedString(padding,string,position='r'){
    if (position==='l'){
        padingIndex =  padding.length - string.toString().length;
        return padding.substr(0,padingIndex) + string;
    }
    else if ((position==='r') || (position==='')){
        padingIndex =  padding.length - string.toString().length;
        return string + padding.slice(padingIndex) ;
    }
}
// console.log(formattedString('0000',123,'l'));
// console.log(formattedString('00000000',123,''));


// Write a JavaScript function to get a part of a string after a specified character
function subStrAfterChars(string,character,position='a'){
    if (position==='a'){
        return string.slice(0,string.indexOf(character));
    }
    else if (position==='b'){
        return string.slice(string.indexOf(character)+1);
    }
}

// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));

//  Write a JavaScript function to truncate a string to a certain number of words

function truncateWord(string,number){
    arr = arrayOfWords(string)
    return arr.slice(0,number).join(' ')
}

// console.log(truncateWord('The quick brown fox jumps over the lazy dog', 4));

// Write a JavaScript function to alphabetize a given st(ring.
function alphabetizeString(string){
    arr = string.split('')
    arr.sort()
    return arr.join('')
}
console.log(alphabetizeString('United States'));


//  Write a JavaScript function to remove the first occurrence of a given 'search string' from a string
function remove_first_occurrence(string,word){
    return string.replace(word+' ','')
}

// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));


function search_word(string,word){
    regExp = new RegExp(word,'g')
    return word+" found in string "+string.match(regExp).length+" times"
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa, aa', 'aa'));













// reverse a string

function reverseString(string){
    arr = string.split(" ")
    return arr.reverse().join(' ')
}
// console.log(reverseString("My name is Gaurav. I am work in Aptlogica."))



let myStr = "https://www.google.com/search?q=string+in+javascript+w3resource&rlz=1C1GCEU_en-gbIN1023IN1023&ei=EhkkY6rDA9eFmAXH8ZXoAQ&ved=0ahUKEwiqlK_82Jj6AhXXAqYKHcd4BR0Q4dUDCA4&uact=5&oq=string+in+javascript+w3resource&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEMgUIABCiBDIFCAAQogQ6BggAEB4QBzoGCAAQHhAIOgUIABCGAzoICCEQwwQQoAE6CgghEMMEEAoQoAFKBAhBGABKBAhGGABQAFihC2D3DGgAcAF4AIABsgGIAfMHkgEDMC43mAEAoAEBwAEB&sclient=gws-wiz"

// console.log(myStr.indexOf('w3resource'))
// console.log('w3resource'.length)
// console.log(myStr.indexOf('w3resource')+'w3resource'.length)
// console.log(myStr.substring(53,63).toUpperCase())

// console.log(myStr.split('/')[3].split('+')[3].split('&')[0].toUpperCase())

