function validation(){
    cls = document.getElementById('radius').classList.value
    if (cls.includes('notValid') || document.getElementById('radius').value === ''){
        return false;
    }else {
        return true;
    }
}

function blurHandler(){
    RegExp = /^([0-9]{1,10})(|\.([0-9]{1,10}))$/
    if (!RegExp.test(document.getElementById('radius').value)){
        document.getElementById('radius').classList.add('notValid')
        document.getElementById('radius').classList.remove('Valid')
        document.getElementById('validationStatement').innerText = 'Please Enter Number only (maximum 10 digit and  at least 1 and maximum 10 digits after \'.\')'
    }else{
        document.getElementById('radius').classList.add('Valid')
        document.getElementById('radius').classList.remove('notValid')
        document.getElementById('validationStatement').innerText = ''
    }
}

document.getElementById('radius').addEventListener('blur',blurHandler)

function calculateAreaOfSphere(){
    if(validation()){
        getRadius = parseFloat(document.getElementById('radius').value)
        document.getElementById('result').value = (4* 3.14159* getRadius**2).toFixed(5)
    }
}


function calculateVolumeOfSphere(){
    if(validation()){
        getRadius = parseFloat(document.getElementById('radius').value)
        document.getElementById('result').value = ((4* 3.14159* getRadius**3)/3).toFixed(5)
    }
}
