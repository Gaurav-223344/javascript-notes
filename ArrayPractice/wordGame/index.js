function randomNumberGenerator(maxRange) {
    return Math.floor(Math.random() * maxRange);
}


function isAlreadyAdded(array, element) {
    if (array.indexOf(element) === -1) {
        return false;
    } else {
        return true;
    }
}


function shuffleNumbers(maxRange, numbersWeWant) {
    if (numbersWeWant<=maxRange){
        arrayForShuffledNumbers = [];
        index = 0
        while (arrayForShuffledNumbers.length < numbersWeWant) {
            randomNumber = randomNumberGenerator(maxRange)
            // console.log(randomNumber)
            if (!isAlreadyAdded(arrayForShuffledNumbers, randomNumber)) {
                arrayForShuffledNumbers.push(randomNumber)
                index++
            }
        }
        return arrayForShuffledNumbers;
    }
}



function shuffleWord(word){
    arrayOfWord = word.split('')
    indexOfShuffledWord = shuffleNumbers(word.length,word.length)
    arrayOfShuffledWord = []
    for (let i = 0; i<indexOfShuffledWord.length; i++){
        arrayOfShuffledWord[i] = arrayOfWord[indexOfShuffledWord[i]]
    }
    console.log(arrayOfShuffledWord)

    for (let i=0; i<indexOfShuffledWord.length; i++){
        idOfDivTag = document.getElementById('box_'+i)
        idOfDivTag.innerHTML = arrayOfShuffledWord[i];
        idOfDivTag.addEventListener('click',function(event){
            
            idOfDivTag.classList.add('')
        })
    }
}

shuffleWord('FOUR')