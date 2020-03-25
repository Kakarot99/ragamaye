$(document).ready(function(){
   
    $('.CMore').click(function(){
        $('.L').toggle();
    })
    $(window).resize(function(){

        if ($(window).width() <= 768) {  
 
            $('.flip-box-front').click(function(){
                $('.flip-box-back').show();
            })
 
        }     
 
 });

})

