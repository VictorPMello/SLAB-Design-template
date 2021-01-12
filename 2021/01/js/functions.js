$(function(){
    // Efeito do menu mobile 
    $('.mobile').click(function(){
        $(this).find('ul').slideToggle();
    })
    // Fim do menu mobile
}); 

$(function(){
    // Efeito de slide do testimonials

    var testimonialsBox = $('.testimonials-text').length;
    var curIndex = 0;

    iniciarTestimonial();
    navegarTestimonials();

    // Esconde todos os elementos e mostra apenas o elemento ta posição eq(posição)
    function iniciarTestimonial(){
        $('.testimonials-text').hide();
        $('.testimonials-text').eq(0).show();
    };


    function navegarTestimonials(){
        $('[next]').click(function(){
            curIndex++;
            if(curIndex >= testimonialsBox)
            curIndex = 0;
            $('.testimonials-text').hide();
            $('.testimonials-text').eq(curIndex).fadeIn(1000);
        })

        $('[prev]').click(function(){
            curIndex--;
            if(curIndex < 0)
            curIndex = testimonialsBox-1;
            $(".testimonials-text").hide();
            $('.testimonials-text').eq(curIndex).fadeIn(1000);
        })
    }
});