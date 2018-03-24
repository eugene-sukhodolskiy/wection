var Nav = {
    currentPage: '',
    btnPage: '',
    defaultPage: '',
    homePage: '',
    firstLoad: true,
    timeToChangePage: 0,
    params: [],
    
    setParams: function(){
        var url = new String(new String(document.location.hash).split('#!')[1]);
        url = url.split('&');
        for(var i=0;i<url.length;i++){
            var tmp = new String(url[i]).split('=');
            this.params[tmp[0]] = tmp[1];
        }
    },
    
    pushParams: function(){
        var url = "";
        var keys = Object.keys(this.params);
        for(var i=0;i<keys.length;i++){
            keys[i] = new String(keys[i]);
            if(keys[i] == "undefined" || keys[i] == '') continue;
            if(url != "")
                url += '&';
            url += keys[i] + '=' + this.params[keys[i]];
        }
        document.location.hash = "#!" + url;
    },
    
    init: function(obj){
        this.btnPage = obj.btnPage;
        this.defaultPage = obj.defaultPage;
        this.homePage = obj.homePage;
        this.timeToChangePage = obj.timeToChangePage;
        
        $('button[' + this.btnPage + ']').click(function(){
            var page = $(this).attr(Nav.btnPage);
            page = new String(page);
            Nav.params['page'] = page;
            Nav.pushParams();
        })
        this.monitorUrlBody();
        this.monitorUrl();
    },
    
    goToPage: function(page){
        this.params['page'] = page;
        this.pushParams();
        return true;
    },
    
    goTo: function(page){
        if(this.currentPage == page) 
            return false;
        if(!this.issetPage(page)){
            page = this.defaultPage;
            Nav.params['page'] = page;
            Nav.pushParams();
        }
        window[page+'_before_load'](Nav.firstLoad);
        setTimeout(function(){
            $('section.page').css('display','none')
            $('#' + page).css('display','block');
            Nav.firstLoad = false;
        },this.timeToChangePage);
        this.currentPage = page;
        return true;
    },
    
    issetPage: function(p){
        if($('#'+p).attr('id') == p){
            return true;
        }
        return false;
    },
    
    monitorUrlBody(){
        Nav.setParams();
        page = Nav.params['page'];
        if(new String(page) == "undefined"){
            page = Nav.homePage;
            Nav.params['page'] = Nav.homePage;
            Nav.pushParams();
        }
        if(page != Nav.currentPage){
            $('button.focus').removeClass('focus');
            $('button[' + Nav.btnPage + '="' + page + '"]').addClass('focus');
            Nav.goTo(page);
        }
        setTimeout(arguments.callee,100);
    },
    
    monitorUrl: function(){
        setTimeout(function(){
            Nav.monitorUrlBody();
        },100);    
    }
    
    
}