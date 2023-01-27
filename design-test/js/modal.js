// 모달 창 자바스크립트

$(function(){
    $('.modal-1').click(function(){
        $('.modal').css({'display':'block'});
        $('body').css({'overflow':'hidden'});
    });
    $('.modal-close').click(function(){
        $('.modal').css({'display':'none'});
        $('body').css({'overflow':'auto'});
    });

});
