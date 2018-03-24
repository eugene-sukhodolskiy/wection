 /* before */

function home_before_load(firstload){
    begin_load(firstload);
    var tst = Nav.timeToChangePage;
    if(firstload == true)
        tst = Nav.timeToChangePage * 0.7;
    
    setTimeout(function(){
        end_load();
    },tst);
}

function portfolio_before_load(firstload){
    begin_load(firstload);
    var tst = Nav.timeToChangePage;
    if(firstload == true)
        tst = Nav.timeToChangePage * 0.7;
    
    setTimeout(function(){
        end_load();
    },tst);
}

function about_before_load(firstload){
    begin_load(firstload);
    var tst = Nav.timeToChangePage;
    if(firstload == true)
        tst = Nav.timeToChangePage * 0.7;
    
    setTimeout(function(){
        end_load();
    },tst);
}

function info_before_load(firstload){
    begin_load(firstload);
    var tst = Nav.timeToChangePage;
    if(firstload == true)
        tst = Nav.timeToChangePage * 0.7;
    
    setTimeout(function(){
        end_load();
    },tst);
}

function order_before_load(firstload){
    begin_load(firstload);
    var tst = Nav.timeToChangePage;
    if(firstload == true)
        tst = Nav.timeToChangePage * 0.7;
    
    setTimeout(function(){
        end_load();
    },tst);
}

function default_before_load(firstload){
    begin_load(firstload);
    var tst = Nav.timeToChangePage;
    if(firstload == true)
        tst = Nav.timeToChangePage * 0.7;
    
    setTimeout(function(){
        end_load();
    },tst);
}