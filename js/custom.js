
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      
      $('.preloader').fadeOut(1000); 
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);

      
  }

  
});


})(window.jQuery);


function changeLanguage(numar_limba)
{
 if(numar_limba===1)
 {
  $("#lang_RO").addClass("lang_active");
  $("#lang_EN").removeClass("lang_active");
 }

 if(numar_limba===2)
 {
  $("#lang_RO").removeClass("lang_active");
  $("#lang_EN").addClass("lang_active");
 }
    
      
}

function pozaCertificate()
{
    if(screen.height>screen.width)
    {
      $('#certificate_poza').empty().append('<img src="images/cert/cert_mobile.png" style="width: 90%;margin-left:1rem;"/>');
    }
    else{
      $('#certificate_poza').empty().append('<img src="images/cert/cert.png" style="width: 90%;margin-left:4rem;"/>');
    }
}

function deschidePozaFullscreen(path)
{
  //$("#poza_fs").empty().append('<img src="'+path+'"/>')
  $('#poza_fs').magnificPopup({type:'image'});

}

function adaugaPoza(path)
{
  $(".containerGalerie").append(
      '<div class="gallery">'
      // +'<a class="poza_fs" onclick="deschidePozaFullscreen(\''+path+'\')">'
      +'<a class="poza_fs" href="'+path+'")>'

       +'<img src="thb-'+path+'" width="800" height="800">'
      +'</a>'
      +'</div>');
} 

function changeLucrariReferinta(numar)
{
  var lucrariReferinta="";
  $(".containerGalerie").empty();
if(numar==1)
{
  lucrariReferinta+="<ul>"
  +"<li>Fabrica de var Corbu</li>"
  +"<li>Structuri de beton armat pentru Silozuri Heineken Constanța</li>"
  +"<li>Stația de epurare biologica Fabrica de Ulei Constanța</li>"
  +"<li>Structuri de beton armat pentru Siloz cereale 50000 t SOCEP Constanța</li>"
  +"</ul> "
  
  +"<p>Nuclear:</p>"
  +"<ul>"

  +"<li>SN Nuclearelectrica, CNE Cernavodă - EFCVS</li>";
  +"<li>SN Nuclearelectrica, CNE Cernavodă - extindere BCU</li>";
  +"<li>SN Nuclearelectrica, CNE Cernavodă - Seiru</li>";

+"</ul> "

$("#titluLucrare").empty().append("Construcții industriale:");

adaugaPoza("img-domenii/constructii/constructiiEFFCVS.jpg");
adaugaPoza("img-domenii/constructii/constructiiCorbu2.jpg");
adaugaPoza("img-domenii/constructii/Socep 20221026_172828.jpg");
adaugaPoza("img-domenii/constructii/StatiadetratareFabricadeUleip12.jpg");
adaugaPoza("img-domenii/constructii/StatiedetratareFabricadeUlei 11.jpg");


}

if(numar==2)
{
  lucrariReferinta+="<ul>"
  +"<li>Consolidare hotel Astoria – Eforie Nord, hotel Europa – Eforie Nord; hotel Carmen – Venus; </li>"
  +"<li>Consolidare siloz fosforita CHIMPEX Port Constanța</li>"
  +"<li>Consolidare rezervor Rompetrol MIDIA</li>"
  +"</ul>"
  $("#titluLucrare").empty().append("Consolidări de structuri în construcții:")
  
  adaugaPoza("img-domenii/consolidari_structuri/Chimpex20221027_103314.jpg");
  adaugaPoza("img-domenii/consolidari_structuri/ConsolidarerezervorMidia20180519_100519.jpg");
  adaugaPoza("img-domenii/consolidari_structuri/ConsolidarerezervorMidia20180512_093045.jpg");
  adaugaPoza("img-domenii/consolidari_structuri/ConsolidareRezervorMidia20180512_130426.jpg");


}
if(numar==3)
{
  lucrariReferinta+="<ul>"
  +"<li>Izolații calde:</li>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2 </li>"
  +"<li>Rompetrol</li>"
  +"<li>Lukoil</li>"
  +"</ul>"
  +"<li>Izolații reci:</li>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2 </li>"
  +"<li>Rompetrol </li>"
  +"<li>Linde Galați</li>"
  +"</ul>"
  +"</ul>"
  $("#titluLucrare").empty().append("Termoizolații:")

  adaugaPoza("img-domenii/termoizolatii/IzolatiireciLinde1.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiireciLindep23.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiireciLindep24.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiireciLindep25.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiitermicecaldeMidia1.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiitermicecaldeMidia2.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiitermicecaldeMidia3.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiitermicecaldeMidiap81.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiitermicecaldeRompetrol.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiitermicecaldeRompetrolMidiap27.jpg");
  adaugaPoza("img-domenii/termoizolatii/IzolatiitermiceSNN3.jpg");
  adaugaPoza("img-domenii/termoizolatii/TermoizolatiiCNEp19.jpg");
  adaugaPoza("img-domenii/termoizolatii/TermoizolatiiCNEp20.jpg");
  adaugaPoza("img-domenii/termoizolatii/TermoizolatiiCNEp21.jpg");
  adaugaPoza("img-domenii/termoizolatii/TermoizolatiiCNEp22.jpg");


}
if(numar==4)
{
  lucrariReferinta+="<ul>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2</li>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Seiru</li>"
  +"</ul>"

  $("#titluLucrare").empty().append("Închideri cu panouri sandwich:")
  adaugaPoza("img-domenii/inchideri_panouri_sandwich/CNErompan.jpg");
  adaugaPoza("img-domenii/inchideri_panouri_sandwich/Seiru20181113_143250.jpg");
  adaugaPoza("img-domenii/inchideri_panouri_sandwich/SeiruIMG20221031WA0004.jpg");
  adaugaPoza("img-domenii/inchideri_panouri_sandwich/SeiruIMG20221031WA0006.jpg");
  adaugaPoza("img-domenii/inchideri_panouri_sandwich/SeiruIMG20221031WA000708.jpg");
  adaugaPoza("img-domenii/inchideri_panouri_sandwich/SeiruIMG20221031WA0008.jpg");
  adaugaPoza("img-domenii/inchideri_panouri_sandwich/SeiruIMG2022103WA0002.jpg");
  adaugaPoza("img-domenii/inchideri_panouri_sandwich/SeiruIMG2022103WA0007.jpg");
  adaugaPoza("img-domenii/inchideri_panouri_sandwich/SeiruIMG2022103WA0011.jpg");
  
}
if(numar==5)
{
  lucrariReferinta+="<p>Protecții anti-corozive:</p>"
  +"<ul>"
  +"<li>Pod Cernavodă (vopsitorie)</li>"
  +"<li>Linde Galați</li>"
  +"</ul> "
  
  +"<p>Nuclear:</p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2 – Captușeli epoxidice / poliuretanice decontaminabile</li>"
  +"<li>Fabrica de Combustibil Nuclear Pitești - Căptușeli epoxidice / poliuretanice decontaminabile</li>"
+"</ul> "

$("#titluLucrare").empty().append("Construcții industriale:")
adaugaPoza("img-domenii/protectii_anticorozive/p1protectiianticorozivenuclear.jpg");
adaugaPoza("img-domenii/protectii_anticorozive/p2protectiianticorozivenuclear.jpg");
adaugaPoza("img-domenii/protectii_anticorozive/p5bcaptuseliepoxinuclear.jpg");
adaugaPoza("img-domenii/protectii_anticorozive/PodCernavodaDSC9039.jpg");
adaugaPoza("img-domenii/protectii_anticorozive/PodCernavodaDSC9113.jpg");
adaugaPoza("img-domenii/protectii_anticorozive/PodCernavodaDSC9176.jpg");
adaugaPoza("img-domenii/protectii_anticorozive/ProtectiianticoroziveLindep8.jpg");

}

if(numar==6)
{
  lucrariReferinta+="<p>Izolații cu betoane refractare:</p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2</li>"
  +"<li>Rominserv</li>"
  +"<li>Petrotel Lukoil Ploiești</li>"
  +"</ul> "
$("#titluLucrare").empty().append("Construcții industriale:")

}

if(numar==7)
{
  lucrariReferinta+="<p>Foc celulozic:</p>"
  +"<ul>"
 




+"<li>SN Nuclearelectrica, CNE Cernavodă </li>";
+"<li>Tribunalul Municipiului București </li>";
+"<li>BRD Piața Victoriei </li>";
+"<li>BRD Televiziunea București </li>";
+"<li>Mobexpert Pipera </li>";
+"<li>Kaufland: București, Timișoara, Satu Mare, Târgu Mures, Alba Iulia </li>";
+"<li>Centrul Expozițional Moldova Iași </li>";
+"<li>Real Vitan București </li>";
+"<li>Biofuel – Fabrica de alcool Zimnicea </li>";
+"<li>Fabrica de ulei – Dropia Zimnicea </li>";
+"<li>Carrefour Ploiești </li>";
+"<li>Hypermarket Cora București, Titan București </li>";
+"<li>SN Nuclearelectrica, Fabrica de Combustibil Nuclear Pitești </li>";


  +"</ul> "
  
  +"<p>Foc hidrocarburi :</p>"
  +"<ul>"
  +"<li>Rominserv</li>"
  +"<li>Petrotel Lukoil Ploiești</li>"
  +"<li>Combinatul Petrochimic Pitești</li>"

+"</ul> "



$("#titluLucrare").empty().append("Protecții antifoc:")
adaugaPoza("img-domenii/protectii_foc/ProtectiefocMidia1.jpg");
adaugaPoza("img-domenii/protectii_foc/ProtectiefocMidia2.jpg");
adaugaPoza("img-domenii/protectii_foc/ProtectiefocMidiap62.jpg");


}

if(numar==8)
{
  lucrariReferinta+="<p></p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă (domeniul Nuclear)</li>";
  +"<li>CHIMPEX, Port Constanța (domeniul Civil)</li>";
  +"<li>SOCEP, Port Constanța (domeniul Civil)</li>";




  +"</ul> "


adaugaPoza("img-domenii/termohidroizolatii/Hidroizolatiip1.jpg");
adaugaPoza("img-domenii/termohidroizolatii/Hidroizolatiip2.jpg");
adaugaPoza("img-domenii/termohidroizolatii/Hidroizolatiip3.jpg");
adaugaPoza("img-domenii/termohidroizolatii/Hidroizolatiip4.jpg");


$("#titluLucrare").empty().append("Termohidroizolații:")

}

if(numar==9)
{
  lucrariReferinta+="<p>În domeniul Nuclear:</p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2 - injecții cu mortare</li>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2 - etanșări rosturi de tasare</li>"
  +"</ul> "
  
  +"<p>În domeniul Civil:</p>"
  +"<ul>"
  +"<li>CHIMPEX, Port Constanța - etanșări rosturi de tasare Siloz fosforita</li>"
  +"<li>SOCEP, Port Constanța - etanșări rosturi de tasare Siloz cereale</li>"
+"</ul> "


$("#titluLucrare").empty().append("Lucrări speciale:")

}
  $("#lucrariReferinta").empty().append(lucrariReferinta);
  $('.poza_fs').magnificPopup({type:'image'});



  

}




$(document).ready(function () {
  //pozaCertificate();
  changeLanguage(1);



  // Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
});






