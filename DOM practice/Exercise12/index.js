function onMouseOverHandler(){
    for(let i=0; i<document.getElementsByTagName('b').length; i++){
        document.getElementsByTagName('b')[i].style.backgroundColor= 'yellow';
    }
}


function onMouseOutHandler(){
    for(let i=0; i<document.getElementsByTagName('b').length; i++){
        document.getElementsByTagName('b')[i].style.backgroundColor= 'white';
    }
}