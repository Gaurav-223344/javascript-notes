
// function getFormvalue(){
//     let firstName = document.getElementsByName('fname')[0].value;
//     let lastName = document.getElementsByName('lname')[0].value;
    
//     // console.log(firstName+" "+lastName);
    
//     alert(firstName+" "+lastName)
// }


// alternate approach
function getFormvalue(){
    form = document.forms[0]
    for(let i = 0; i< form.elements.length; i++){
        if(form.elements[i].value !== 'Submit'){
            console.log(form.elements[i].value);
        }
    }
}

