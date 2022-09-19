function insert_Row(){
    row = document.getElementById('sampleTable').insertRow(-1)
    row.insertCell(0).innerHTML = 'Hello'
    row.insertCell(1).innerHTML = 'World'
}