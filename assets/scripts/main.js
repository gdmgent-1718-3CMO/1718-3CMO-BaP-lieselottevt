$(document).ready(function(){
    $(".link").on('click', function(e) {
        if (this.hash !== e.target.classList[4]) {
            e.preventDefault();
            var hash = this.hash;
            console.log('hash', hash);
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
  });