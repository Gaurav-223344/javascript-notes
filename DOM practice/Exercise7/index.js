function removecolor(){
    index = document.getElementById('colorSelect').selectedIndex     //index of selected element to remove from dropdown
    document.getElementById('colorSelect').remove(index)
}