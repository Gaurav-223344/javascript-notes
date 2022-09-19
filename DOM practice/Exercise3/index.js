
document.getElementsByClassName('container')[0].firstElementChild.style.cursor = 'pointer'

function clickhandler(event){
    document.getElementsByClassName('container')[0].firstElementChild.style.background = 'red';
    event.defaultPrevented
}
document.getElementsByClassName('container')[0].firstElementChild.addEventListener('click',clickhandler)