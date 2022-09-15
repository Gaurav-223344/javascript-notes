// document.getElementsByClassName('container')[0].addEventListener('mouseover',()=>{
//     document.getElementsByClassName('container')[0].classList.add('backgroundColorBlue')
// })

document.getElementsByClassName('container2')[0].addEventListener('mouseover', () => {
    document.getElementsByClassName('container2')[0].classList.add('backgroundColorRed')
})

document.getElementsByClassName('container')[0].addEventListener('mouseout', () => {
    document.getElementsByClassName('container')[0].classList.remove('backgroundColorBlue')
})

document.getElementsByClassName('container2')[0].addEventListener('mouseout', () => {
    document.getElementsByClassName('container2')[0].classList.remove('backgroundColorRed')
})


function mouseOverHandler(event) {
    document.getElementsByClassName('container')[0].classList.add('backgroundColorBlue')
}

document.getElementsByClassName('container')[0].addEventListener('mouseover', mouseOverHandler)

// function as a parameter
function calculation(value1, value2, calc) {
    let result = calc(+value1, +value2)
    console.log(result);
}

function add(val1, val2) {
    return val1 + val2
}

function sub(val1, val2) {
    return val1 - val2
}
calculation(7, 9, add)
calculation(7, 9, sub)



function circleCalculations(radius, func) {

    let result = func(+radius)
    console.log(result);
}

function getDiameter(radius) {
    if (!isNaN(radius) && (radius >= 0)) {
        return radius * 2;
    }
    else {
        console.error("Enter correct radius")
    }
}

function getCircumference(radius) {
    if (!isNaN(radius) && (radius >= 0)) {

        return 2 * 3.14 * radius;
    }
    else {
        console.error("Enter correct radius")
    }
}

function getArea(radius) {
    if (!isNaN(radius) && (radius >= 0)) {

        return 3.14 * (radius) ** 2;
    }
    else {
        console.error("Enter correct radius")
    }
}

// function return another function
function getGSTCalculator(taxRate) {
    return function (amount) {
        return amount * taxRate / 100;
    }
}

var service = getGSTCalculator(18);
var tax = service(2000);
console.log('Tax Rs.', tax);

var grossary = getGSTCalculator(5);
var tax = grossary(1000);
console.log('Tax Rs.', tax);

function getIncreption(steps) {
    return function (string) {
        let myalpha = 'abcdefghijklmnopqrstuvwxyz';
        let number = [];
        let encryptString = '';
        for (let i = 0; i < string.length; i++) {
            number.push(myalpha.indexOf(string[i]));
        }
        newNumber = number.map(item => {
            return convertFunction(item + steps);
        })

        console.log(newNumber);
        for (let i = 0; i < newNumber.length; i++) {
            encryptString+=(myalpha[newNumber[i]]);
        }
        console.log(encryptString)
        
    }
}

// prototype[inheritance]
function convertFunction(num) {
    if (num < 26) {
        return num;
    }
    else{
        let newNum = num - 26;
        return convertFunction(+newNum)
    }
}

inc = getIncreption(26)
function Person(name, mobile, email) {
    var id = 0;
    this.name = name;
    this.mobile = mobile;
    this.email = email;
    this.printId = function () {
        console.log('Id:', id);
        validateEmail();
    }

    function validateEmail() {
        console.log('validating email');
    }
}

Person.prototype.show = function () {
    console.log(this.name, this.email, this.mobile);
}

per1 = new Person('gaur', 456745674567, 'abc@yz.com')
console.log(per1.show())




function student(name, age) {

    this.name = name;
    this.age = age
}

function address(city, pincode) {
    this.city = city;
    this.pincode = pincode;
}

function hobbie(drawing, music) {
    this.drawing = drawing;
    this.music = music;
}

function games(cricket, hocky) {
    this.cricket = cricket;
    this.hocky = hocky;
}



student = {
    name : 'abc',
    age : 20
}

address = {
    city: 'Pune',
    pincode: 411011
}

hobbie = {
    drawing: 1,
    music: 1
}
Object.setPrototypeOf(address,student)


// apply method
function marks(physics,chemistry,maths,biology){
    this.physics = physics;
    this.chemistry = chemistry;
    this.maths = maths;
    this.biology = biology;
}

marksOfStudent1 = new marks(70,78,69,81);

function total(physics,chemistry,maths,biology){
    return this.physics+this.chemistry+this.maths+this.biology
}


// to check string or not
function isString(string){
    if (typeof string === 'string'){
        return true;
    }
    else return false;
}


// to check blank or not
function isBlank(string){
    if(isString(string)){
        if(string===''){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        console.error('Please enter string type')
    }
}

// string to array
function strinToArray(string){
    return string.split(' ');
}








