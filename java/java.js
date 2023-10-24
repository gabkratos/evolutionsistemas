// O Bootstrap Carousel já é ativado automaticamente pela classe "data-ride"
// Se você deseja adicionar funcionalidades personalizadas, pode fazer isso aqui

// Exemplo de pausa automática e velocidade de transição
$('#imagemCarousel').carousel({
    interval: 5000, // 5 segundos de intervalo entre as imagens
});

// Para pausar o carrossel ao passar o mouse sobre ele
$('#imagemCarousel').hover(function() {
    $(this).carousel('pause');
}, function() {
    $(this).carousel('cycle');
});

// Adicionar comportamento de clique nos controles de navegação (opcional)
$('.carousel-control-prev').click(function() {
    $('#imagemCarousel').carousel('prev');
});

$('.carousel-control-next').click(function() {
    $('#imagemCarousel').carousel('next');
});