$(document).ready(function(){
//---mapa---
	$(".oculto").hide();
    $(".inf").click(function(){
          var nodo = $(this).attr("href");

          if ($(nodo).is(":visible")){
               $(nodo).hide();
               return false;
          }else{
        $(".oculto").hide("slow");
        $(nodo).fadeToggle("fast");
        return false;
          }
    });
//---sinopsis---
	$(".nomues").hide();
		$(".sinop").click(function(){
					var nodo = $(this).attr("href");

					if ($(nodo).is(":visible")){
							 $(nodo).hide();
							 return false;
					}else{
				$(".nomues").hide("slow");
				$(nodo).fadeToggle("fast");
				return false;
					}
		});
//---productos---
$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
});
