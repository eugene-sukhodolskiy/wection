if(device.mobile() == true || device.tablet() == true){
    document.location = "http://m.wection.in.ua";
}

$(document).ready(function()
{   
    Nav.init(
        {
            btnPage: 'data-page',
            defaultPage: 'default',
            homePage: 'home',
            timeToChangePage: 1100
        }
    );
    
    $('.logo').click(function(){
        document.location.hash = '!page=home';
    });
    
    $('#default h1').click(function(){
        document.location.hash = 'home';
    });
    
    $('button[data-page]').mouseover(function(){
         $('[data-label="'+$(this).attr('data-page')+'"]').css({
             'margin-left': '-110px',
             'width': '150px'
         });
    });
    
    $('button[data-page]').mouseout(function(){
        $('[data-label="'+$(this).attr('data-page')+'"]').css({
             'margin-left': '0px',
             'width': '40px'
         });
    });
    
    initBtnColor();
    initHomeServCards();
    initPopUp();
    initForm();
    
    $('.form button[data-form-b-name]').click(function(){
        feedback($(this).attr('data-form-b-name'),$(this).attr('data-post-url'));
    });
    
    Order.init();
    
    $('#portfolio .grid .cell').mouseover(function(){      
        $(this).find('.back').css({
            'opacity': .5
        });
        
        $(this).find('a').css({
            'opacity': 1,
            'margin-top': '85px'
        });
    });
    
    $('#portfolio .grid .cell').mouseout(function(){
        $(this).find('.back').css({
            'opacity': 0
        });
        
        $(this).find('a').css({
            'opacity': 0,
            'margin-top': '130px'
        });
    });
});

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

var GlobalVar = {};
GlobalVar.popupActive = false;
GlobalVar.popupVis = false;
GlobalVar.popupName = '';

function initPopUp(){
    $('[data-pop-up-over]').mouseover(function(){
        var name = $(this).attr('data-pop-up-over');
        var time = $(this).attr('data-pop-up-time');
        if(time === undefined) time = 2000;
        GlobalVar.popupName = name;
        
        if(GlobalVar.popupActive === false){
            GlobalVar.popupActive = true;
            setTimeout(function(){
                if(GlobalVar.popupActive === true){
                    $('[data-name="'+GlobalVar.popupName+'"]').css({'display': 'block','opacity':'1'});
                    $('header').css('opacity',0);
                    GlobalVar.popupVis = true;
                }
            },time);
        }
    });
    
    $('[data-pop-up-over]').mouseout(function(){
        if(GlobalVar.popupActive === true && GlobalVar.popupVis === true){
            $('.pop-up').css('opacity',0);
            setTimeout(function(){
                $('.pop-up').css({'display':'none','opacity': 0});
            },500);
            $('header').css('opacity',1);
            GlobalVar.popupVis = false;
        }
        GlobalVar.popupActive = false;
    });
    
    $('[data-pop-up-click]').click(function(){
        var name = $(this).attr('data-pop-up-click');
        $('[data-name="'+name+'"]').css({'display':'block','opacity': '1'});
        $('header').css('opacity',0);
    });
    
    $('[data-pop-up-close]').click(function(){
        closePopUp();
    });
    
}

function closePopUp(){
    $('.pop-up:visible').css('opacity', 0);
    setTimeout(function(){
        $('.pop-up:visible').css({'display': 'none','opacity': 0});
    },500);
    $('header').css('opacity',1);
}

function initHomeServCards(){
    $('#home .serv li, #home .platforms li').mouseover(function(){
        $(this).css({'background-position': 'center 0px'}).attr('data-mouseover','');
    
        $('#home .serv li[data-mouseover] h3, #home .platforms li[data-mouseover] h3').css({'margin-top': '-30px','color': '#00796B'});
    });
    
    $('#home .serv li, #home .platforms li').mouseout(function(){
        $(this).css({'background-position': 'center 30px'});
        
        $('#home .serv li[data-mouseover] h3, #home .platforms li[data-mouseover] h3').css({'margin-top': '0px','color': '#333'});
        $('#home .serv li[data-mouseover], #home .platforms li[data-mouseover]').removeAttr('data-mouseover');
    });
}

function initBtnColor(){
    var btns = $('nav.main button');
    var str = '';
    for(var i=0;i<btns.length;i++){
        $(btns[i]).css('background-color',$(btns[i]).attr('data-color'));
        str = '<div class="label" data-label="' + $(btns[i]).attr('data-page') + '">' + $(btns[i]).attr('data-title') + '</div>';
        $(btns[i]).parent().prepend(str);
    }
    
    for(var i=0;i<btns.length;i++){
        $('[data-label="'+$(btns[i]).attr('data-page')+'"]').css({
            'background-color': $(btns[i]).attr('data-color'),
        });
    }
    return true;
}

function begin_load(fl){
    if(!Nav.issetPage('load_disp')){
        $('body').prepend("<div id=\"load_disp\"><div class=\"logo\">WECTION<span></span></div></div>");
    }
    
    var btns = $('[data-page]');
    
    for(var i=0; i<btns.length;i++){
        if($(btns[i]).attr('class') != 'focus'){
            $(btns[i]).css({
                'opacity': 0,
                'cursor': 'pointer'
            });
        }
    }
    
    $('.focus').css('cursor','default');
    
    var left = '-50px';
    var tmp = $('.focus').attr('data-left');
    if(tmp != 'undefined') left = tmp;
    var color = $('.focus').attr('data-color');
    var top = $('.focus').attr('data-top');
    if(top === undefined){
        top = '50%';
        left = '-50%';
        color = '#000';
        $('footer').css('display','none');
    }else{
        $('footer').css('display','block');
    }
    var title = $('.focus').attr('data-title');
    if(title === undefined) title = '404';
    $('#load_disp .logo span').html('&lt; '+title+' /&gt;');
    $('title:eq(0)').html(title);
    
    $('#load_disp').css({
        'transition-duration': '0s',
        'margin-top': top + 'px',
        'margin-left': left,
        'opacity': 1,
        'background-color': color,
        'z-index': 3
    })
    
    $('nav.main .label').css('display','none');
    setTimeout(function(){
        var dtime = '.4s';
        if(Nav.firstLoad == true){
            dtime = '0s';
        }
        
        $('#load_disp').css(
        {
            'transition-duration': dtime,
            'width': '100%',
            'height': '100%',
            'left': 0,
            'top': 0,
            'margin-top': 0,
            'margin-left': 0,
            'border-radius': 0
        }
    );
    },0);
}

function end_load(){
    var color = $('.focus').attr('data-color');
    
    if(color === undefined)
        color = '#000';
    $('header').css({
        'background': color
    });
    
    $('#load_disp').css({'opacity': 0});
    
    var btns = $('[data-page]');
    
    for(var i=0; i<btns.length;i++){
        if($(btns[i]).attr('class') != 'focus'){
            $(btns[i]).css({
                'opacity': 1
            });
        }
    }
    
    setTimeout(function(){
        $('#load_disp').css(
            {
                'transition-duration': '0s',
                'left': '100%',
                'top': '50%',
                'border-radius': '100%',
                'margin-left': '-100px',
                'width': '50px',
                'height': '50px',
                'transition-duration': '.4s',
                'z-index': 0
            }
        );
        $('nav.main .label').css('display','block');
    },500);
}
