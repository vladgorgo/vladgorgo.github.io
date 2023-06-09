$(document).ready(function() {
    incarcaMeniu();
});

function incarcaMeniu()
{
        // Încărcarea fișierului JSON folosind jQuery
        $.getJSON("produse.json", function(data) {
        // Parcurgerea listei de obiecte JSON

        var categ="";
        var categCurenta="";
        $.each(data, function(index, produs) {
            categCurenta=produs.categorieProdus;
            if(categ===categCurenta)
            {
                var cardProdus='<div class="cardProdus"><b>'+ produs.numeProdus + '</b> ('+produs.gramajProdus+') <p style="color:green;display:inline;position: absolute; right: 2rem;font-size:1rem;">'+produs.pretProdus+' lei</p>';
                cardProdus+='<br><div style="color:gray;width:15rem;">'+produs.descriereProdus+'</div>'
                cardProdus+='</div>';
                $('.meniu').append(cardProdus);
            }
            else
            {
                categ=categCurenta;
                $('.meniu').append('<div class="categorie" id="'+produs.categorieProdus+'">'+produs.categorieProdus+'</div>');
                var cardProdus='<div class="cardProdus"><b>'+ produs.numeProdus + '</b> ('+produs.gramajProdus+') <p style="color:green;display:inline;position: absolute; right: 2rem;font-size:1rem;">'+produs.pretProdus+' lei</p>';
                cardProdus+='<br><div style="color:gray;width:15rem;">'+produs.descriereProdus+'</div>'
                cardProdus+='</div>';
                $('.meniu').append(cardProdus);
            }
            


        });
        });
  
}


function toggleParagraph() {
    var paragraph = $("#paragraph");
    paragraph.toggleClass("hidden");
  }