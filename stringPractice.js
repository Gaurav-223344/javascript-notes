// String Practice 



// to check string or not
function isString(string) {
    if (typeof string === 'string') {
        return true;
    }
    else return false;
}


// to check blank or not
function isBlank(string) {
    if (isString(string)) {
        if (string === '') {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        console.error('Please enter string type')
    }
}

// string to array
function strinToArray(string) {
    return string.split(' ');
}

// to convert a string in abbreviated form
function toAbbreviate(string) {
    arr = strinToArray(string)
    if (arr.length == 2) {
        return arr[0] + " " + arr[1][0].toUpperCase() + '.'
    }
    else {
        console.error("Please Enter first name and last name only....")
    }
}

// function to hide email addresses to protect from unauthorized user

function hideEmail(string) {
    arr = string.split('@');
    // Math.round(arr[0].length/2)  for half length of first element in array to hide another half
    // substr() function to get only halg od string 
    return arr[0].substr(0, Math.round(arr[0].length / 2)) + '...@' + arr[1];
}

/*
JavaScript function to parameterize a string
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/
function toParameterize(string) {
    arr = string.toLowerCase().split(' ');
    return arr.join('_');
}


// to capitalize the first letter of a string
function toCapitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substring(1);
}

//capitalize the first letter of each word in a string
function toTitle(string) {
    string = string.trim();  //to remove all blank spaces from start and end of a string
    arr = string.split(' ')   // create array of words
    newarr = arr.map(item => {
        return toCapitalizeFirstLetter(item) //capitalize fisrt letter of string(word)
    })

    return newarr.join(' ')
}


/* 
takes a string which has lower and upper case letters as a parameter and converts upper
case letters to lower case, and lower case letters to upper case. 
*/
function changeCase(string){
    newString = '';
    for(let i=0; i<string.length; i++){
        if(/^[A-Z]$/.test(string[i])){
            newString += string[i].toLowerCase();
        }
        else if(/^[a-z]$/.test(string[i])){
            newString += string[i].toUpperCase();
        }
        else{
            newString += string[i]
        }
    }
    return newString;
}