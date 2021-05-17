//Iniciar Carrusel con un tiempo de intervalo de 3 seg
$(".carousel").carousel({ interval: 3000 });

//Agregar clase a navbar cuando el scroll se desliza hacia abajo despues del carrusel
$(window).scroll(function() {
    var offset = $(window).scrollTop();

    $(".navbar").toggleClass("trans", offset > 50);
});
// inicializar tooltip para la seccion quienes somos
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

//inicializar popover para la seccion destacados
$('[data-toggle="popover"]').popover();