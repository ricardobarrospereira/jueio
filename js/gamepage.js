$( document ).ready(function() {
    games.reverse();
    $.each( games, function( key, value ) {
        $(".main_related div:eq(0)").after( '<div class="related_item"><a href="../juego/'+ value.url +'">'+ value.name +'</a></div>' );
    });
});