function getSlideShow(obj){ // time,container,name
	var ret = {
		// data //
		time: obj.time,
		container: obj.container,
        navContainer: obj.navContainer,
		count: 0,
		current: 0,
		counter: 0,

		// methods //
		start: function(name){
            $(this.container + ' .slide-container').css('width',100*this.count + '%');
            $(this.container + ' .slide-container .slide').css('width',100/this.count+'%');
			setTimeout(function(){
				console.log(name);
				Gobj[name].counter++;
				if(Gobj[name].counter == Gobj[name].time){
					Gobj[name].next();
				}
                if(Gobj[name].time != 0)
                    setTimeout(arguments.callee,100);
			},100);
		},

		goToSlide: function(){
            $(this.container + ' .' + this.navContainer + ' button[data-slide-num]').removeAttr('data-active-slide');
            $(this.container + ' .' + this.navContainer + ' button[data-slide-num="' + this.current + '"]').attr('data-active-slide','true');
            $(this.container + ' .slide-container').css({'margin-left': '-' + (this.current * 100) + '%'});
			this.counter = 0;
		},
        
        _goToSlide: function(slide){
            this.counter = 0;
            this.current = slide;
            if(this.current < 0 || this.current >= this.count)
                this.current = 0;
            this.goToSlide();
        },

		next: function(){
			this.counter = 0;
			this.current++;
			if(this.current == this.count)
				this.current = 0;
			this.goToSlide();
		},

		back: function(){
			this.counter = 0;
			this.current--;
			if(this.current < 0){
				this.current = 0;
                return false;
            }
			this.goToSlide();
            if(this.current === 0)
                return 0;
		},
        
        addNavButtons: function(){
            var cont = $(this.container + ' .' + this.navContainer);
            var html = '<ul>';
            for(var i=0;i<this.count;i++){
                if(i == 0){
                    html += '<li><button data-active-slide="true" data-slide-num="' + i + '"></button></li>';
                    continue;
                }
                html += '<li><button data-slide-num="' + i + '"></button></li>';
            }
            html += '</ul>';
            $(cont).html(html);
        },
        
        initNavButtons: function(oname){
            $(this.container + ' .' + this.navContainer + ' [data-slide-num]').click(function(){
                Gobj[oname]._goToSlide($(this).attr('data-slide-num'));
            });
        }
	}

	var imgs = $(obj.container + ' .slide');
	ret.count = imgs.length;
	return ret;
}
