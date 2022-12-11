
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

adaugaPoza("img-domenii/1_constructii/1_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/2_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/3_constructii nuclear.jpg");
adaugaPoza("img-domenii/1_constructii/4_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/5_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/6_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/7_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/8_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/9_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/10_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/11_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/12_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/13_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/14_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/15_constructii.jpg");
adaugaPoza("img-domenii/1_constructii/16_constructii.jpg");

}

if(numar==2)
{
  lucrariReferinta+="<ul>"
  +"<li>Consolidation: Astoria hotel – Eforie Nord, Europa hotel – Eforie Nord; Carmen hotel – Venus; </li>"
  +"<li>Consolidation: phosphorite Silo CHIMPEX, Port of Constanța </li>"
  +"<li>Consolidation: Tank Rompetrol, MIDIA</li>"
  +"</ul>"
  $("#titluLucrare").empty().append("Consolidation of structures in construction:")
  
  adaugaPoza("img-domenii/2_consolidari_structuri/1_consolidari structuri.jpg");
  adaugaPoza("img-domenii/2_consolidari_structuri/2_consolidari structuri.jpg");
  adaugaPoza("img-domenii/2_consolidari_structuri/3_consolidari structuri.jpg");
  adaugaPoza("img-domenii/2_consolidari_structuri/4_consolidari structuri.jpg");
  adaugaPoza("img-domenii/2_consolidari_structuri/5_consolidari structuri.jpg");
  adaugaPoza("img-domenii/2_consolidari_structuri/6_consolidari structuri.jpg");
  adaugaPoza("img-domenii/2_consolidari_structuri/7_consolidari structuri.jpg");


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

  adaugaPoza("img-domenii/3_termoizolatii/1_termoizolatii calde.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/2_termoizolatii reci.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/3_termoizolatii nuclear.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/4_termoizolatii reci.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/5_termoizolatii calde.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/6_termoizolatii nuclear.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/7_termoizolatii reci.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/8_termoizolatii calde.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/9_termoizolatii nuclear.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/10_termoizolatii calde.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/11_termoizolatii nuclear.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/12_termoizolatii.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/13_termoizolatii reci.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/14_termoizolatii calde.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/15_termoizolatii calde.jpg");
  adaugaPoza("img-domenii/3_termoizolatii/16_termoizolatii nuclear.jpg");


}
if(numar==4)
{
  lucrariReferinta+="<ul>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă Unit 1 și Unit 2</li>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă – Seiru</li>"
  +"</ul>"

  $("#titluLucrare").empty().append("Closing structures with sandwich panels:")

  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/1_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/2_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/3_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/4_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/5_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/6_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/7_panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/8_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/9_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/10_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/11_inchideri panouri sandwich.jpg");
  adaugaPoza("img-domenii/4_inchideri_panouri_sandwich/12_inchideri panouri sandwich.jpg");
  
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

adaugaPoza("img-domenii/6_protectii_anticorozive/1_protectii anticorozive.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/2_protectii anticorozive nuclear.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/3_protectii anticorozive.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/4_protectii anticorozive nuclear.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/5_protectii anticorozive.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/6_protectii anticorozive nuclear.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/7_protectii anticorozive.jpg");


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

adaugaPoza("img-domenii/5_izolatii_betoane_refractare/1_izolatii betoane refractare.jpg");
adaugaPoza("img-domenii/5_izolatii_betoane_refractare/2_izolatii betoane refractare.jpg");
adaugaPoza("img-domenii/5_izolatii_betoane_refractare/3_izolatii betoane refractare.jpg");
adaugaPoza("img-domenii/5_izolatii_betoane_refractare/4_izolatii betoane refractare.jpg");
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

adaugaPoza("img-domenii/7_protectii_foc/1_protectie foc hidrocarburi.jpg");
adaugaPoza("img-domenii/7_protectii_foc/2_protectie foc.jpg");
adaugaPoza("img-domenii/7_protectii_foc/3_protectie foc hidrocarburi.jpg");
adaugaPoza("img-domenii/7_protectii_foc/4_protectie foc hidrocarburi.jpg");
adaugaPoza("img-domenii/7_protectii_foc/5_protectie foc.jpg");
adaugaPoza("img-domenii/7_protectii_foc/6_protectie foc hidrocarburi.jpg");
adaugaPoza("img-domenii/7_protectii_foc/7_protectie foc.jpg");
adaugaPoza("img-domenii/7_protectii_foc/8_protectie foc hidrocarburi.jpg");
adaugaPoza("img-domenii/7_protectii_foc/9_protectie foc.jpg");
adaugaPoza("img-domenii/7_protectii_foc/10_protectie foc.jpg");
adaugaPoza("img-domenii/7_protectii_foc/11_protectie foc hidrocarburi.jpg");


}

if(numar==8)
{
  lucrariReferinta+="<p></p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, Nuclear Power Plant Cernavodă (Nuclear field)</li>";
  +"<li>CHIMPEX, Port of Constanța (Civil field)</li>";
  +"<li>SOCEP, Port of Constanța (Civil field)</li>";




  +"</ul> "


  adaugaPoza("img-domenii/8_termohidroizolatii/1_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/2_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/3_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/4_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/5_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/6_termohidroizolatii.jpg");


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






