$(document).ready(function(){
    if( $(window).width()>$(window).height() && $(window).width()>768  ){
        var newHeight = $(window).height();
        // console.log(newHeight);
        $('.getHeight').css('height', newHeight);
        $('.navPoint').css('display','block');
        $('.freeLandingPage .inviteBox ').css({
            position: 'absolute',
            bottom: 0
        });     
    }
    $('menu-icon').click(function(){
        $('..top-bar').css('height','auto');
    });
    $('.recommend li').hover(
        function(){
            $('.recommend li[class="active"]').removeClass('active');
            $(this).addClass('active')
        },
        function(){ $(this).removeClass('active') }
    );
    $('#getFocus').click(function(){
        $('#getInTouch ').find('input').focus();
    })
});
