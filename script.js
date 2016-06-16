
var $bienvenido = $('.bienvenido');
var $traveler = $('.traveler');
var username = $("#nombre").val();

console.log(username);


$('.form').hide();
$('.bienvenido').hide();
$(".logo").click(function(){

        $(".logo").hide('slow');
        $(".form").fadeIn('fast');
    });



//var traveler = document.getElementById("nombre").value;
//var traveler = document.querySelector('#nombre').value;

