$(".instance").on('click', clickHandler)

let player1Turn = true
function clickHandler() {
    // console.log($(this).attr('isClicked'))
    if ($(this).attr('isClicked') === 'false') {
        if (player1Turn === true) {
            $(this).text('X');
            player1Turn = false;
            $(this).attr('isClicked', 'true');
            $(".player1").toggleClass("myTurn")
            $(".player2").toggleClass("myTurn")
        } else {
            $(this).text('O');
            player1Turn = true;
            $(this).attr('isClicked', 'true');
            $(".player1").toggleClass("myTurn")
            $(".player2").toggleClass("myTurn")
        }
    }
    gameResult()

}


function gameResult() {
    let value;
    if ($('#row1col1').attr('isClicked') === 'true' &&
        $('#row1col2').attr('isClicked') === 'true' &&
        $('#row1col3').attr('isClicked') === 'true' &&
        $('#row1col1').text() === $('#row1col2').text() &&
        $('#row1col1').text() === $('#row1col3').text()) 
    {
        value = $('#row1col1').text()
    }

    else if ($('#row2col1').attr('isClicked') === 'true' &&
            $('#row2col2').attr('isClicked') === 'true' &&
            $('#row2col3').attr('isClicked') === 'true' &&
            $('#row2col1').text() === $('#row2col2').text() &&
            $('#row2col1').text() === $('#row2col3').text()) 
    {
            value = $('#row2col1').text()
    }

    else if ($('#row3col1').attr('isClicked') === 'true' &&
            $('#row3col2').attr('isClicked') === 'true' &&
            $('#row3col3').attr('isClicked') === 'true' &&
            $('#row3col1').text() === $('#row3col2').text() &&
            $('#row3col1').text() === $('#row3col3').text()) 
    {
            value = $('#row3col1').text()
    }

    else if ($('#row1col1').attr('isClicked') === 'true' &&
            $('#row2col1').attr('isClicked') === 'true' &&
            $('#row3col1').attr('isClicked') === 'true' &&
            $('#row1col1').text() === $('#row2col1').text() &&
            $('#row1col1').text() === $('#row3col1').text()) 
    {
            value = $('#row1col1').text()
    }

    else if ($('#row1col2').attr('isClicked') === 'true' &&
            $('#row2col2').attr('isClicked') === 'true' &&
            $('#row3col2').attr('isClicked') === 'true' &&
            $('#row1col2').text() === $('#row2col2').text() &&
            $('#row1col2').text() === $('#row3col2').text()) 
    {
            value = $('#row1col2').text()
    }

    else if ($('#row1col3').attr('isClicked') === 'true' &&
            $('#row2col3').attr('isClicked') === 'true' &&
            $('#row3col3').attr('isClicked') === 'true' &&
            $('#row1col3').text() === $('#row2col3').text() &&
            $('#row1col3').text() === $('#row3col3').text()) 
    {
            value = $('#row1col3').text()
    }

    else if ($('#row1col3').attr('isClicked') === 'true' &&
            $('#row2col3').attr('isClicked') === 'true' &&
            $('#row3col3').attr('isClicked') === 'true' &&
            $('#row1col3').text() === $('#row2col3').text() &&
            $('#row1col3').text() === $('#row3col3').text()) 
    {
            value = $('#row1col3').text()
    }


    else if ($('#row1col1').attr('isClicked') === 'true' &&
            $('#row2col2').attr('isClicked') === 'true' &&
            $('#row3col3').attr('isClicked') === 'true' &&
            $('#row1col1').text() === $('#row2col2').text() &&
            $('#row1col1').text() === $('#row3col3').text()) 
    {
            value = $('#row1col1').text()
    }

    else if ($('#row1col3').attr('isClicked') === 'true' &&
            $('#row2col2').attr('isClicked') === 'true' &&
            $('#row3col1').attr('isClicked') === 'true' &&
            $('#row1col3').text() === $('#row2col2').text() &&
            $('#row1col3').text() === $('#row3col1').text()) 
    {
            value = $('#row1col3').text()
    }

    else if($('#row1col1').attr('isClicked') === 'true'  &&
            $('#row1col2').attr('isClicked') === 'true'  &&
            $('#row1col3').attr('isClicked') === 'true'  &&
            $('#row2col1').attr('isClicked') === 'true'  &&
            $('#row2col2').attr('isClicked') === 'true'  &&
            $('#row2col3').attr('isClicked') === 'true'  &&
            $('#row3col1').attr('isClicked') === 'true'  &&
            $('#row3col2').attr('isClicked') === 'true'  &&
            $('#row3col3').attr('isClicked') === 'true'
    ){
        value = -1;
    }


    if (value === 'X') {
        $(".resultStatement").text("Player 1 won")
        $(".refresh").removeClass("hidden")
        for (let element of $(".instance")) {
            $(element).attr('isClicked','true')
        }
    }
    else if (value === 'O') {
        $(".resultStatement").text("Player 2 won")
        $(".refresh").removeClass("hidden")
        for (let element of $(".instance")) {
            $(element).attr('isClicked','true')
        }
    }

    else if(value === -1) {
        $(".resultStatement").text("Draw")
    }
    
}


function refreshButton(){
    window.location.reload();
}