var Order = {
    funcs: [
        'slide_services',
        'slide_platform',
        'slide_type',
        'slide_feedback',
        'slide_order',
        'false'
    ],
    
    data: {},
    
    init: function(){
        $('#order button[data-next]').click(function(){
            var func = parseInt($(this).attr('data-step'));
            if(Order.funcs[func] != 'false'){
                Order[Order.funcs[func]]();
            }
        });
        
        Order.checkBoxInit();
        $("#order .slide:eq(4)").click(function(){
            Order.final_animation_back();
        });
    },
    
    send: function(){
        var containers = $('#order .slide');
        var data = {};
        var tmp = $(containers[0]).find('[data-check="true"]');
        for(var i=0;i<tmp.length;i++){
            if(i == 0)
                data['services'] = new String($(tmp[i]).parent().find('p').html());
            else
                data['services'] += '; ' + $(tmp[i]).parent().find('p').html();
        }
        
        tmp = $(containers[1]).find('[data-check="true"]');
        data['platform'] = $(tmp).parent().find('p').html();
        
        tmp = $(containers[2]).find('[data-check="true"]');
        for(var i=0;i<tmp.length;i++){
            if(i == 0)
                data['type'] = new String($(tmp[i]).parent().find('p').html());
            else
                data['type'] += '; ' + $(tmp[i]).parent().find('p').html();
        }
        
        tmp = $(containers[3]).find('input');
        for(var i=0;i<tmp.length;i++){
            if(i == 0)
                data['data_and_comments'] = '<em>' + $(tmp[i]).attr('name') + ':</em> ' + $(tmp[i]).attr('value');
            else
                data['data_and_comments'] += '; <em>' + $(tmp[i]).attr('name') + ':</em> ' + $(tmp[i]).attr('value');
        }
        
        data = JSON.stringify(data);
        //console.log(data);
        $.get('./order.php',{'json': data});
    },
    
    checkBoxInit:function(item){
        var idstr = '#order .slide .cell';
        if(item !== undefined){
            idstr = '#order .slide:eq('+item+') .cell';
        }
        $(idstr).mouseover(function(){
            if($(this).find('.check-box').attr('data-check') !== undefined){
                return false;
            }
            
            $(this).find('.back').css({
                'opacity': .5,
            });
            
            $(this).find('.check-box').css({
                "margin-top": '95px',
                'opacity': 1
            });
        });
        
        $(idstr).mouseout(function(){
            if($(this).find('.check-box').attr('data-check') !== undefined){
                return false;
            }
            
            $(this).find('.back').css({
                'opacity': 0,
            });
            
            $(this).find('.check-box').css({
                "margin-top": '170px',
                'opacity': 0
            });
        });
        
        $(idstr).click(function(){
            if($(this).parent().parent().parent().attr('data-radio') !== undefined && $(this).find('.check-box').attr('data-check') === undefined){
                $(this).parent().parent().parent().find('.check-box[data-check]').css({
                    "margin-top": '170px',
                    'opacity': 0
                });
                $(this).parent().parent().parent().find('.check-box').removeAttr('data-check');
                $(this).parent().parent().parent().find('.back').css('opacity',0);
            }
            if($(this).find('.check-box').attr('data-check') === undefined){
                $(this).find('.check-box').attr('data-check','true');
                $(this).find('.back').css('opacity',0.7);
                return false;
            }
            $(this).find('.check-box').removeAttr('data-check');
            $(this).find('.back').css('opacity',0.5);
        });
    },
    
    slide_services: function(){
        var arr = $('#order .slide:eq(0) .check-box[data-check]');
        for(var i = 0;i < arr.length; i++){
            arr[i] = $(arr[i]).attr('data-check-id');
        }
        var checked = arr.length;
        if(checked > 0){
            $('#order button[data-slide="back"]').removeClass('no-next-slide').css('cursor','pointer');;
            var btn = $('#order button[data-next]');
            var func = parseInt($(btn).attr('data-step'));
            $(btn).attr('data-step',func+1);
            Order.data['checked_id'] = arr;
            Gobj.slsw_order.next();
            return false;
        }
        Order.viewErr('Сделайте выбор');
    },
    
    slide_platform: function(){
        var checked = $('#order .slide:eq(1) .check-box[data-check]').length;
        if(checked > 0){
            $('#order button[data-slide="back"]').removeClass('no-next-slide').css('cursor','pointer');
            var btn = $('#order button[data-next]');
            var func = parseInt($(btn).attr('data-step'));
            $(btn).attr('data-step',func+1);
            if($("#order .slide:eq(1) .check-box:eq(0)").attr('data-check') === undefined){
                Order.androind_slide();
            }else{
                Order.web_slide();
            }
            Gobj.slsw_order.next();
            return false;
        }
        
        Order.viewErr('Сделайте выбор');
    },
    
    androind_slide: function(){
        var slide = '<div class="slide-content android"><h2>Выберите тип приложения</h2><div class="grid"><div class="cell"><div class="back"></div><div class="check-box" data-check-id="1"></div><p>Стандартное приложение</p></div><div class="cell"><div class="back"></div><div class="check-box"  data-check-id="2"></div><p>Фоновая</p></div><div class="cell"><div class="back"></div><div class="check-box" data-check-id="3"></div><p>Смешанный</p></div><div class="cell"><div class="back"></div><div class="check-box" data-check-id="4"></div><p>Виджет</p></div></div></div>';
        $('#order .slide:eq(2)').html(slide);
        Order.checkBoxInit(2);
        
    },
    
    web_slide: function(){
        var slide = '<div class="slide-content"><h2>Выберите тип сайта</h2><div class="grid"><div class="cell"><div class="back"></div><div class="check-box" data-check-id="1"></div><p>Сайт визитка</p></div><div class="cell"><div class="back"></div><div class="check-box"  data-check-id="2"></div><p>Блог</p></div><div class="cell"><div class="back"></div><div class="check-box" data-check-id="3"></div><p>Корпоративный сайт</p></div><div class="cell"><div class="back"></div><div class="check-box" data-check-id="4"></div><p>Портфолио</p></div></div></div>';
        $('#order .slide:eq(2)').html(slide);
        Order.checkBoxInit(2);
    },
    
    slide_type: function(){
        var checked = $('#order .slide:eq(2) .check-box[data-check]').length;
        if(checked > 0){
            $('#order button[data-slide="back"]').removeClass('no-next-slide').css('cursor','pointer');;
            var btn = $('#order button[data-next]');
            var func = parseInt($(btn).attr('data-step'));
            $(btn).attr('data-step',func+1);
            Gobj.slsw_order.next();
            
            Order.viewOrderBtn(true);
            
            return false;
        }
        
       Order.viewErr('Сделайте выбор');
    },
    
    viewOrderBtn: function(flag){
        if(flag === true){
            $('#order button[data-next]').css({
                'color': 'white',
                'background-color': '#00C853',
                'background-image': 'url("./imgs/icons/cart.png")'
            }).html('Сделать заказ');
        }else{
            $('#order button[data-next]').css({
                'color': '#767676',
                'background-color': 'white',
                'background-image': 'url("./imgs/icons/arrow-right-grey.png")'
            }).html("Следующий шаг");
        }
    },
    
    viewErr: function(text,func){
        var bcolor = '#B71C1C';
        $('#order button[data-next]').css({
            'color': 'white',
            'background-color': bcolor,
            'background-image': 'url("./imgs/icons/close.png")'
        }).html(text);
        
        setTimeout(function(){
            if(func === undefined){
                console.log('bad');
                $('#order button[data-next]').css({
                    'color': '#767676',
                    'background-color': 'white',
                    'background-image': 'url("./imgs/icons/arrow-right-grey.png")'
                }).html('Следующий шаг');
            }else{
                Order.viewOrderBtn(true);
            }
        },1500);
    },
    
    slide_feedback: function(){
        var forms = $('#order .slide:eq(3) input');
        var ta = new String($('#order .slide:eq(3) textarea').attr('value'));
        var countErr = 0;
        var data = [];
        var j = 0;
        for(var i=0;i<forms.length;i++){
            var str = new String($(forms[i]).attr('value'));
            data[j++] = str;
            
            if(str == ''){
                countErr++;
                continue;
            }
            var tmp = str.split(' ');
            tmp = new String(tmp.join(''));
            if(tmp == ''){
                countErr++;
                continue;
            }
        }
        
        if(ta == ''){
            countErr++;
        }
        var tmp = ta.split(' ');
        tmp = new String(tmp.join(''));
        if(tmp == ''){
            countErr++;
        }
        
        if(countErr != 0){
            j = 0;
            Order.viewErr('Пустые поля',1);
            return false;
        }
        
        var btn = $('#order button[data-next]');
        var func = parseInt($(btn).attr('data-step'));
        $(btn).attr('data-step',func+1);
        $('#order button[data-slide="back"]').removeClass('no-next-slide').css('cursor','pointer');
        
        Order.data['feedback'] = data;
        Gobj.slsw_order.next();
        Order.slide_order();
        return true;
    },
    
    slide_order: function(){
        $('#order button.back').css({
            'margin-top': '450px',
            'opacity': 0
        });
        
        $('#order button[data-next]').css({
            'margin-top': '450px',
            'opacity': 0,
        });
        
        setTimeout(function(){
            $('#order button[data-next]').css('display','none');
            $('#order button.back').css('display','none');
            $('#order .nav-contain').css({
                'transition-duration': '0.4s',
                'top': '640px',
                'opacity': 0
            });
        },500);
        
        setTimeout(function(){
             $('#order .nav-contain').css('display','none');
            Order.final_animation();
        },1000);
        
        Order.send();
    },
    
    circle_animation: function(el,size,resize){
        var top = parseInt(new String($(el).css('margin-top')));
        var left = parseInt(new String($(el).css('margin-left')));
        var w = parseInt(new String($(el).css('width')));
        var h = parseInt(new String($(el).css('height')));
        if(resize === undefined){
            top -= Math.ceil(size/2);
            left -= Math.ceil(size/2);
            w += size;
            h += size;
        }else{
            top += Math.ceil(size/2);
            left += Math.ceil(size/2);
            w -= size;
            h -= size;
        }
        $(el).css({
            'width': w+'px',
            'height': h+'px',
            'margin-left': left+'px',
            'margin-top': top+'px'
        });
    },
    
    final_animation: function(){
        $('#order .slide:eq(4) .slide-content').css('opacity',1);
        Order.circle_animation($('#order .slide .background'),250);
        setTimeout(function(){
            Order.circle_animation($('#order .slide .background'),50,1);
        },400);
        
        setTimeout(function(){
            Order.circle_animation($('#order .slide .background span:eq(0)'),440);
            setTimeout(function(){
                Order.circle_animation($('#order .slide .background span:eq(0)'),40,1);
            },400);
        },150);
        
        setTimeout(function(){
            Order.circle_animation($('#order .slide .background span:eq(1)'),300);
            setTimeout(function(){
                Order.circle_animation($('#order .slide .background span:eq(1)'),50,1);
            },400);
        },300);
        
        setTimeout(function(){
            document.location.hash = '!page=home';
        },5000);
    },
};