var Gobj = {};
$(document).ready(function(){
	Gobj = {
        slsw_info: getSlideShow({
            time: 0,
            container: '#info .slide-show',
            navContainer: 'nav-contain'
        }),
        
        slsw_portfolio: getSlideShow({
            time: 0,
            container: '#portfolio .slide-show',
            navContainer: 'nav-contain'
        }),
        
        slsw_order: getSlideShow({
            time: 0,
            container: '#order .slide-show',
            navContainer: 'nav-contain'
        })
    }

	Gobj.slsw_info.start('slsw_info');
    Gobj.slsw_info.initNavButtons('slsw_info');
    
    Gobj.slsw_order.start('slsw_order');
    Gobj.slsw_order.addNavButtons();
    Gobj.slsw_order.initNavButtons('slsw_order');
    $('#order .slide-show button[data-slide="back"]').click(function(){
        if(Gobj.slsw_order.back() === 0){
            $(this).addClass('no-next-slide');
            $(this).css('cursor','default');
        }
        
        Order.viewOrderBtn(false);
        
        var step = parseInt($('#order button[data-next]').attr('data-step'));
        if(step > 0){
            $('#order button[data-next]').attr('data-step',step - 1);
        }
    });
});