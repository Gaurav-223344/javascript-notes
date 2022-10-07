function toCamelCase(string){
    let newStr = '';
    let arrayOfString = string.split(" ");
    if(arrayOfString.length > 0){
        newStr += arrayOfString[0].toLowerCase()
        if(arrayOfString.length > 1){
            for (let index = 1; index < arrayOfString.length; index++) {
                newStr += arrayOfString[index][0].toUpperCase() + arrayOfString[index].slice(1)
            }
        }

    }
    return newStr
}