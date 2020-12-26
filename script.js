/* Add your script here */
// $("#l1").on({
//     click: function(){
//         $(this).css("background-color", "white");
//     }, 
//     mouseleave: function(){
//         let l1 = $('#l1').val()
//     let letter1 = $('<h1>').text(l1)
//     $("#div_display").append(letter1)
//     } 
// });


// for adding letter one
$('#l1').mouseleave(function(event){
    let l1 = $('#l1').val()
    let letter1 = $('<h1>').text(l1)
    $("#div_display").append(letter1)
})



// for adding letter two
$('#l2').mouseleave(function(event){
    let l2 = $('#l2').val()
    let letter2 = $('<h1>').text(l2)
    $("#div_display").append(letter2)
})




// for changing border width
$('#bw').mouseleave(function(event){
    let bw = $('#bw').val()
    $("#div_display").css("border-width",Number(bw))
})




// for changing border radius
$('#div_btn').click(function(event){
    $("#div_display").css("border-radius","25px")
})





// for changing the letter box background
function changeBGColor(event)
{
    $('#v').click(function(event){
        $("#div_display").css("background-color",'violet')
    })

    $('#i').click(function(event){
        $("#div_display").css("background-color",'indigo')
    })

    $('#bl').click(function(event){
        $("#div_display").css("background-color",'blue')
    })

    $('#g').click(function(event){
        $("#div_display").css("background-color",'green')
    })

    $('#y').click(function(event){
        $("#div_display").css("background-color",'yellow')
    })

    $('#o').click(function(event){
        $("#div_display").css("background-color",'orange')
    })

    $('#r').click(function(event){
        $("#div_display").css("background-color",'red')
    })

    $('#w').click(function(event){
        $("#div_display").css("background-color",'white')
    })
}




// for changing the letter box border
function changeBorderColor(event)
{
    $('#v').click(function(event){
        $("#div_display").css("border-color",'violet')
    })

    $('#i').click(function(event){
        $("#div_display").css("border-color",'indigo')
    })

    $('#bl').click(function(event){
        $("#div_display").css("border-color",'blue')
    })

    $('#g').click(function(event){
        $("#div_display").css("border-color",'green')
    })

    $('#y').click(function(event){
        $("#div_display").css("border-color",'yellow')
    })

    $('#o').click(function(event){
        $("#div_display").css("border-color",'orange')
    })

    $('#r').click(function(event){
        $("#div_display").css("border-color",'red')
    })

    $('#w').click(function(event){
        $("#div_display").css("border-color",'white')
    })
}




// for changing the letter one color
function changeL1Color(event)
{
    $('#v').click(function(event){

        $("#div_display").css("color",'violet')
    })

    $('#i').click(function(event){
        $("#div_display").css("color",'indigo')
    })

    $('#bl').click(function(event){
        $("#div_display").css("color",'blue')
    })

    $('#g').click(function(event){
        $("#div_display").css("color",'green')
    })

    $('#y').click(function(event){
        $("#div_display").css("color",'yellow')
    })

    $('#o').click(function(event){
        $("#div_display").css("color",'orange')
    })

    $('#r').click(function(event){
        $("#div_display").css("color",'red')
    })

    $('#w').click(function(event){
        $("#div_display").css("color",'white')
    })
}




//for changing letter two color
function changeL2Color(event)
{
    $('#v').click(function(event){

        $("#div_display").css("color",'violet')
    })

    $('#i').click(function(event){
        $("#div_display").css("color",'indigo')
    })

    $('#bl').click(function(event){
        $("#div_display").css("color",'blue')
    })

    $('#g').click(function(event){
        $("#div_display").css("color",'green')
    })

    $('#y').click(function(event){
        $("#div_display").css("color",'yellow')
    })

    $('#o').click(function(event){
        $("#div_display").css("color",'orange')
    })

    $('#r').click(function(event){
        $("#div_display").css("color",'red')
    })

    $('#w').click(function(event){
        $("#div_display").css("color",'white')
    })
}