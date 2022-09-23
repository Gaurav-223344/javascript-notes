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
    if (numbersWeWant <= maxRange) {
        arrayForShuffledNumbers = [];
        index = 0
        while (arrayForShuffledNumbers.length < numbersWeWant) {
            randomNumber = randomNumberGenerator(maxRange)
            if (!isAlreadyAdded(arrayForShuffledNumbers, randomNumber)) {
                arrayForShuffledNumbers.push(randomNumber)
                index++
            }
        }
        return arrayForShuffledNumbers;
    }
}



function shuffleWord(word,number) {
    document.getElementById('number').innerText = number;
    arrayOfWord = word.split('')
    indexOfShuffledWord = shuffleNumbers(word.length, word.length)
    arrayOfShuffledWord = []
    
    for (let i = 0; i < indexOfShuffledWord.length; i++) {
        arrayOfShuffledWord[i] = arrayOfWord[indexOfShuffledWord[i]]
    }

    for (let i = 0; i < indexOfShuffledWord.length; i++) {
        idOfDivTag = document.getElementById('box_' + i)
        document.getElementById('box_' + i).classList.add('letterContainer')
        document.getElementById('letter_' + i).classList.remove('hidden')
        idOfDivTag.innerHTML = arrayOfShuffledWord[i];
        idOfDivTag.value = arrayOfShuffledWord[i]
    }
    
}

function clientResponse(word){
    arrayOfClientResponse = '';
    letterBoxId = 0;
    for (let i = 0; i < word.length; i++) {
        document.getElementById('box_' + i).addEventListener('click', function (event) {
            document.getElementById('box_' + i).classList.add('clientResponse')
            
            clientResponseLetter = document.getElementById('box_' + i).value
            if (document.getElementById('box_' + i).attributes.isClicked.value === 'false'){
                arrayOfClientResponse += clientResponseLetter
                document.getElementById('letter_' + letterBoxId).value = clientResponseLetter
                document.getElementById('box_' + i).attributes.isClicked.value = 'true'
                letterBoxId++
            }
            if(arrayOfClientResponse.length === word.length){
                console.log(arrayOfClientResponse)
                if(arrayOfClientResponse === word){
                    document.getElementById('statement').innerText = 'Winner Winner Chicken Dinner'
                }else{
                    document.getElementById('statement').innerText = 'Sorry, Better luck next time'
                }
            }             
        })
        

    }
}




function wordGame(word,number){
    
    shuffleWord(word,number)
    clientResponse(word)
}


function randomSpellings(){
    spellingOfNumbers = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN']
    // spellingOfNumbers = ['FOUR','FIVE','NINE']
    indexOfSpellings = randomNumberGenerator(spellingOfNumbers.length)
    // console.log(indexOfSpellings+1)
    // console.log(spellingOfNumbers[indexOfSpellings])
    wordGame(spellingOfNumbers[indexOfSpellings],indexOfSpellings+1);
}

// randomSpellings()

wordGame('THREE',3)