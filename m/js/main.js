if(device.mobile() == false && device.tablet() == false){
   // document.location = "http://wection.dp.ua";
}

$(document).ready(function(){   
    initNavButton();
    initColors();
    initForm();
    
    $('.form button[data-form-b-name]').click(function(){
        feedback($(this).attr('data-form-b-name'),$(this).attr('data-post-url'));
    });
    
    $('button.menu').click(function(){
        if($(this).attr('data-menu-close') == 'true'){
            
            $(this).attr('data-menu-close','false');
        
            $(this).css({
                'background-size': '90% 140%',
                'background-image': "url('imgs/icons/menu_white.png')",
                "transform": 'rotate(0deg)'
            });

            $('nav.main').css({
                'top': '-460px'
            });
            
            return false;
        }
        
        $(this).attr('data-menu-close','true');
        
        $(this).css({
            'background-size': '90% 90%',
            'background-image': "url('imgs/icons/a-b.png')",
            "transform": 'rotate(180deg)',
        });
        
        $('nav.main').css({
            'top': '59px'
        });
    });
});

function initNavButton(){
    var btns = $('nav.main button[data-page]');
    for(var i=0;i<btns.length;i++){
        $(btns[i]).css('background-color',$(btns[i]).attr('data-color'));
    }
    $('button[data-page]').click(function(){
        document.location = './?page=' + $(this).attr('data-page');
        //document.location = 'm.wection.dp.ua/?page=' + $(this).attr('data-page');
    });
}

function initColors(){
    var page = $('section.page').attr('id');
    var color = $('nav.main button[data-page="' + page + '"]').attr('data-color');
    $('nav.main button[data-page="' + page + '"]').css({
        'width': '198px',
        'height': '38px',
        'border': '1px solid white'
    });
    $('header').css('background',color);
    $('nav.main').css('background',color);
}

function initForm(){
    $('.form input').focus(function(){
        var width = $(this).attr('data-width');
        $(this).parent().find('span').css('width',width);
    });
    
    $('.form input').blur(function(){
        $(this).parent().find('span').css('width',0);
    });
    
    $('.form textarea').focus(function(){
        var width = $(this).attr('data-width');
        $(this).parent().find('span').css('width',width);
    });
    
    $('.form textarea').blur(function(){
        $(this).parent().find('span').css('width',0);
    });
}

function openPopUp(name){
    $('.pop-up[data-name="'+name+'"]').css({
        'display': 'block',
        'opacity': 1
    });
}

function closePopUp(){
    $('.pop-up').css({
        'opacity': 0,
    });
    
    setTimeout(function(){
        $('.pop-up').css({
            'display': 'none'
        });
    },600);
}

function feedback(name,url){
    var data = {};
    var forms = $('.form [data-form-name]');
    for(var i=0;i<forms.length;i++){
        var val = $(forms[i]).attr('value');
        if(val.length < 2){
            $('.pop-up[data-name="feedback"] p').css('background-image', 'url("./imgs/icons/cross.png")').html('Не все поля заполнены');
            setTimeout(function(){
                closePopUp();
                setTimeout(function(){
                    $('.pop-up[data-name="feedback"] p').css('background-image', 'url("./imgs/icons/upload.png")').html('Отправка');
                },500);
            },2000);
            return false;
        }
        data[$(forms[i]).attr('name')] = val;
    }
    
    for(var i=0;i<forms.length;i++){
        $(forms[i]).attr('value','');
    }
    
    data = JSON.stringify(data);
    
    console.log(data);
    openPopUp('feedback');
    $.get(url,{'json': data},function(d){
        if(d == '1'){
            $('.pop-up[data-name="feedback"] p').css('background-image', 'url("./imgs/icons/check_grey.png")').html('Готово');
            setTimeout(function(){
                closePopUp();
                setTimeout(function(){
                    $('.pop-up[data-name="feedback"] p').css('background-image', 'url("./imgs/icons/upload.png")').html('Отправка');
                },500);
            },1500);
        }
    });
    return true;
}
