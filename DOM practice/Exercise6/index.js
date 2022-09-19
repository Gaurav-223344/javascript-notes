function changeContent(){
    row = prompt("Rows (0,1,2): ")
    column = prompt("Columns (0,1): ")
    content = prompt("Content: ")
    document.getElementById('myTable').rows[row].cells[column].innerHTML = content
}