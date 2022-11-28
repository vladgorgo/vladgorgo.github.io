
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
  +"<li>Lime Factory CELCO, Corbu</li>"
  +"<li>Reinforced concrete structures for Silos Heineken, Constanța</li>"
  +"<li>Biological treatment station ARGUS Oil Plant, Constanța</li>"
  +"<li>Reinforced concrete structures for Grain Storage Silo 50000 tons SOCEP, Port of Constanța </li>"
  +"</ul> "
  
  +"<p>Nuclear:</p>"
  +"<ul>"

  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă – EFCVS </li>";
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă – extension BCU</li>";
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă – Seiru</li>";

+"</ul> "

$("#titluLucrare").empty().append("Industrial constructions:");

adaugaPoza("img-domenii/constructii/constructiiEFFCVS.jpg");
adaugaPoza("img-domenii/constructii/constructiiCorbu2.jpg");
adaugaPoza("img-domenii/constructii/Socep 20221026_172828.jpg");
adaugaPoza("img-domenii/constructii/StatiadetratareFabricadeUleip12.jpg");
adaugaPoza("img-domenii/constructii/StatiedetratareFabricadeUlei 11.jpg");


}

if(numar==2)
{
  lucrariReferinta+="<ul>"
  +"<li>Consolidation: Astoria hotel – Eforie Nord, Europa hotel – Eforie Nord; Carmen hotel – Venus; </li>"
  +"<li>Consolidation: phosphorite Silo CHIMPEX, Port of Constanța </li>"
  +"<li>Consolidation: Tank Rompetrol, MIDIA</li>"
  +"</ul>"
  $("#titluLucrare").empty().append("Consolidation of structures in construction:")
  
  adaugaPoza("img-domenii/consolidari_structuri/Chimpex20221027_103314.jpg");
  adaugaPoza("img-domenii/consolidari_structuri/ConsolidarerezervorMidia20180519_100519.jpg");
  adaugaPoza("img-domenii/consolidari_structuri/ConsolidarerezervorMidia20180512_093045.jpg");
  adaugaPoza("img-domenii/consolidari_structuri/ConsolidareRezervorMidia20180512_130426.jpg");


}
if(numar==3)
{
  lucrariReferinta+="<ul>"
  +"<li>Hot Insulations:</li>"
  +"<ul>"
  +"<li> SN Nuclearelectrica, Nuclear Power Plant Cernavodă Unit 1 and Unit 2 </li>"
  +"<li>Rompetrol</li>"
  +"<li>Lukoil</li>"
  +"</ul>"
  +"<li>Cold Insulations:</li>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă Unit 1 și Unit 2 </li>"
  +"<li>Rompetrol </li>"
  +"<li>Linde Galați</li>"
  +"</ul>"
  +"</ul>"
  $("#titluLucrare").empty().append("Thermal insulation:")

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
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă Unit 1 și Unit 2</li>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă – Seiru</li>"
  +"</ul>"

  $("#titluLucrare").empty().append("Closing structures with sandwich panels:")
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
  lucrariReferinta+="<p></p>"
  +"<ul>"
  +"<li>Cernavodă Bridge (painting work)</li>"
  +"<li>Linde Galați</li>"
  +"</ul> "
  
  +"<p>Nuclear:</p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă Unit 1 și Unit 2 – decontaminable epoxy/polyurethane linings</li>"
  +"<li>SN Nuclearelectrica, Nuclear Fuel Plant Pitești – decontaminable epoxy/polyurethane linings </li>"
+"</ul> "

$("#titluLucrare").empty().append("Anti-corrosive protections:")
adaugaPoza("img-domenii/protectii_anticorozive/p1protectiianticorozivenuclear.jpg");
adaugaPoza("img-domenii/protectii_anticorozive/p2protectiianticorozivenuclear.jpg");
adaugaPoza("img-domenii/protectii_anticorozive/p5bcaptuseliepoxinuclear.jpg");
adaugaPoza("img-domenii/protectii_anticorozive/PodCernavodaDSC_9039.JPG");
adaugaPoza("img-domenii/protectii_anticorozive/PodCernavodaDSC_9113.JPG");
adaugaPoza("img-domenii/protectii_anticorozive/PodCernavodaDSC_9176.JPG");
adaugaPoza("img-domenii/protectii_anticorozive/ProtectiianticoroziveLindep8.jpg");

}

if(numar==6)
{
  lucrariReferinta+="<p></p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă Unit 1 și Unit 2</li>"
  +"<li>Rominserv</li>"
  +"<li>Petrotel Lukoil, Ploiești</li>"
  +"</ul> "
$("#titluLucrare").empty().append("Refractory concrete insulation:")

}

if(numar==7)
{
  lucrariReferinta+="<p>Cellulosic fire :</p>"
  +"<ul>"

+"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă </li>"
+"<li>Tribunalul Municipiului București </li>"
+"<li>BRD Piața Victoriei </li>"
+"<li>BRD Televiziunea București </li>"
+"<li>Mobexpert Pipera </li>"
+"<li>Kaufland: București, Timișoara, Satu Mare, Târgu Mures, Alba Iulia </li>"
+"<li>Centrul Expozițional Moldova Iași </li>"
+"<li>Real Vitan București </li>"
+"<li>Biofuel –Alcohol Factory Zimnicea </li>"
+"<li>Oil Factory – Dropia Zimnicea </li>"
+"<li>Carrefour Ploiești </li>"
+"<li>Hypermarket Cora București, Titan București </li>"
+"<li>SN Nuclearelectrica, Nuclear Fuel Plant Pitești </li>"


  +"</ul> "
  
  +"<p>Hydrocarbon fire:</p>"
  +"<ul>"
  +"<li>Rominserv</li>"
  +"<li>Petrotel Lukoil Ploiești</li>"
  +"<li>Petrochemical Plant Pitești</li>"

+"</ul> "



$("#titluLucrare").empty().append("Fire protection:")
adaugaPoza("img-domenii/protectii_foc/ProtectiefocMidia1.jpg");
adaugaPoza("img-domenii/protectii_foc/ProtectiefocMidia2.jpg");
adaugaPoza("img-domenii/protectii_foc/ProtectiefocMidiap62.jpg");


}

if(numar==8)
{
  lucrariReferinta+="<p></p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă (Nuclear field)</li>";
  +"<li>CHIMPEX, Port of Constanța (Civil field)</li>";
  +"<li>SOCEP, Port of Constanța (Civil field)</li>";




  +"</ul> "


adaugaPoza("img-domenii/termohidroizolatii/Hidroizolatiip1.jpg");
adaugaPoza("img-domenii/termohidroizolatii/Hidroizolatiip2.jpg");
adaugaPoza("img-domenii/termohidroizolatii/Hidroizolatiip3.jpg");
adaugaPoza("img-domenii/termohidroizolatii/Hidroizolatiip4.jpg");


$("#titluLucrare").empty().append("Thermo-hydro insulations:")

}

if(numar==9)
{
  lucrariReferinta+="<p>Nuclear field:</p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă Unit 1 și Unit 2 - grout injections </li>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă Unit 1 și Unit 2 - settlement joints sealing</li>"
  +"</ul> "
  
  +"<p>Civil field:</p>"
  +"<ul>"
  +"<li>CHIMPEX, Port of Constanța - settlement joints sealing, phosphorite Silo</li>"
  +"<li>SOCEP, Port of Constanța - settlement joints sealing, Grain Storage Silo</li>"
+"</ul> "


$("#titluLucrare").empty().append("Special works:")

}
  $("#lucrariReferinta").empty().append(lucrariReferinta);
  $('.poza_fs').magnificPopup({
    // main options
    disableOn: 400,
  
    gallery: {
      enabled: true
    },
    type:'image'
  
  });



  

}




$(document).ready(function () {
  changeLanguage(2);
  changeLucrariReferinta(1);
  
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






