$(document).ready(function(){
    $(".link").on('click', function(e) {
        console.log(e.target.classList[4]);
        if (this.hash !== e.target.classList[4]) {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
  });