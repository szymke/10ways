$(() => {

    $('#hamburger').on('click', function(){
        $(this).toggleClass('open');
        if( $("nav ul").css('display') == 'block'){
            $('nav ul').css('display', 'none');
        } else{
            $('nav ul').slideDown('slow');
            $('nav ul').css('display', 'block');
        }
	});

});
