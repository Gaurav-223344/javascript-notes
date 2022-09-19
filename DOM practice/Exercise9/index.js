function getOptions() {
    length = document.getElementById('mySelect').options.length
    items = ''
    for (let index = 0; index < document.getElementById('mySelect').options.length; index++) {
        items += document.getElementById('mySelect').options[index].innerHTML + ', ';
    }

    alert("Count : " + length + "\n" + items)
}