$( document ).ready(function() {
    games.reverse();
    var i = 0;
    var size = games.length - 1;
    $.each( games, function( key, value ) {
        $(".bwrapper div:eq(0)").after( '<div class="item"><a href="./juego/'+ value.url +'"><h3>'+ value.name +'</h3></a><a href="./juego/'+ value.url +'"><img src="./img/'+ value.img +'" width="338" height="177" alt="'+ value.description +'" title="'+ value.name +'" /></a><p>'+ value.description +'</p></div>' );
        
        if(i == (games.length - 2)){
            $(".bwrapper div:eq(0)").after('<div class="item"><p>Publicidad</p><div class="pub"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- Juegos Ind Ret --><ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-3435185060070353" data-ad-slot="3816594626"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div></div>');
        }
        i++;
        size--;
    });
    
});