// MODAL
$('#infoBtn').click(function () {

    $('.ui.modal')
        .modal('show');

});

// BOTONES COMPRAR
$('.comprar-btn').click(function () {

    const producto = $(this)
        .closest('.card')
        .find('.header')
        .text();

    alert(`Has seleccionado: ${producto}`);

});

// FORMULARIO
$('#contactForm').submit(function (e) {

    e.preventDefault();

    alert('Formulario enviado correctamente');

    this.reset();

});