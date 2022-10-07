function imageExtractor(object) {
    return `<img id='image_${object['id']}' class='imageOfHokage' src='${object['image']}' />`
}

function termExtractor(object) {
    return `<div id='name_${object['id']}' class='nameOfHokage'>${object['term']}</div>`
}

function informationExtractor(object) {
    return `<div  id='info_${object['id']}' class='infoOfHokage'>${object['description']}</div>`
}

function extractContaint(object) {
    return `<div class='objectContainer'><div class='imageContainer'> ${imageExtractor(object)} </div><div id='fullInfo_${object['id']}' class='informationContainer'><div>${termExtractor(object)}</div> <div>${informationExtractor(object)}</div></div></div>`
}

for (let index = 0; index < data.length; index++) {
    let newDiv = extractContaint(data[index])
    $(newDiv).appendTo("#information")
    $('#fullInfo_' + index).fadeOut()
}


$('.objectContainer').on('mouseenter', function () {
    getImage = $(this).children().children().first()
    getImage.animate({ height: '200px', width: '200px' })
    getId = $(getImage).attr('id').split('_')[1]
    $('#fullInfo_' + getId).fadeIn()

})

$('.objectContainer').on('mouseleave',function(){
    getImage = $(this).children().children().first()
    getImage.animate({ height: '400px', width: '400px' })
    getId = $(getImage).attr('id').split('_')[1]
    $('#fullInfo_' + getId).fadeOut()
})
