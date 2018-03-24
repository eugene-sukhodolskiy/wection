$(document).ready(function(){
    $('#info .contain ul li').mouseover(function(){
        if($(this).parent().attr('class') != 'lang-list'){
        
            $(this).find('span.price').css({
                'margin-top': '310px'
            });
            $(this).css('margin-top','-20px');
        }
    });
    
    $('#info .contain ul li').mouseout(function(){
        if($(this).parent().attr('class') != 'lang-list'){
            $(this).find('span.price').css({
                'margin-top': '250px'
            });
            $(this).css('margin-top','0');
        }
    });
    
    
});