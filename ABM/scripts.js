


$( document ).ready(function() {
    LoadPage(1);
});




function LoadPage(i){

    var j=1;
    var buffer=(i-1)*12;
    var poze='';

    while(j<13)
    {
        poze+='<div class="w3-col l3 m6 w3-margin-bottom"><div class="w3-display-container"><img src="img/'+(j+buffer)+'.jpeg" style="width:100%"></div></div>'
        j++;
    }
    $(".PhotoGallery").empty().append('<div class="w3-row-padding">'
        +poze+'</div>');

}



    
