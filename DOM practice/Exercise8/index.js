function createTable(){
    row = prompt("Number of rows: ")
    column = prompt("Number of columns: ")

    for (let i=0; i<row; i++){
    tableRow = document.getElementById('myTable').insertRow(i)
        for (let j=0; j<column; j++){
            tableRow.insertCell(j).innerHTML = 'row'+ (i).toString() + ' column' + (j).toString();
        }
    }
}