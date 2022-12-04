
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


function adaugaPoza(path)
{
  $(".containerGalerie").append(
      '<div class="gallery">'
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
  +"<li>Consolidare hotel Astoria – Eforie Nord, hotel Europa – Eforie Nord; hotel Carmen – Venus; </li>"
  +"<li>Consolidare siloz fosforita CHIMPEX Port Constanța</li>"
  +"<li>Consolidare rezervor Rompetrol MIDIA</li>"
  +"</ul>"
  $("#titluLucrare").empty().append("Consolidări de structuri în construcții:")
  

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
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2</li>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Seiru</li>"
  +"</ul>"

  $("#titluLucrare").empty().append("Închideri cu panouri sandwich:")


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
  +"<li>Pod Cernavodă (vopsitorie)</li>"
  +"<li>Linde Galați</li>"
  +"</ul> "
  
  +"<p>Nuclear:</p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2 – Captușeli epoxidice / poliuretanice decontaminabile</li>"
  +"<li>Fabrica de Combustibil Nuclear Pitești - Căptușeli epoxidice / poliuretanice decontaminabile</li>"
+"</ul> "

$("#titluLucrare").empty().append("Protecții anti-corozive:")

adaugaPoza("img-domenii/6_protectii_anticorozive/1_protectii anticorozive.JPG");
adaugaPoza("img-domenii/6_protectii_anticorozive/2_protectii anticorozive nuclear.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/3_protectii anticorozive.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/4_protectii anticorozive nuclear.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/5_protectii anticorozive.JPG");
adaugaPoza("img-domenii/6_protectii_anticorozive/6_protectii anticorozive nuclear.jpg");
adaugaPoza("img-domenii/6_protectii_anticorozive/7_protectii anticorozive.JPG");



}

if(numar==6)
{
  lucrariReferinta+="<p></p>"
  +"<ul>"
  +"<li>SN Nuclearelectrica, CNE Cernavodă Unitatea 1 și Unitatea 2</li>"
  +"<li>Rominserv</li>"
  +"<li>Petrotel Lukoil Ploiești</li>"
  +"</ul> "
$("#titluLucrare").empty().append("Izolații cu betoane refractare:")


adaugaPoza("img-domenii/5_izolatii_betoane_refractare/1_izolatii betoane refractare.jpg");
adaugaPoza("img-domenii/5_izolatii_betoane_refractare/2_izolatii betoane refractare.jpg");
adaugaPoza("img-domenii/5_izolatii_betoane_refractare/3_izolatii betoane refractare.jpg");
adaugaPoza("img-domenii/5_izolatii_betoane_refractare/4_izolatii betoane refractare.jpg");

}

if(numar==7)
{
  lucrariReferinta+="<p>Foc celulozic:</p>"
  +"<ul>"
 
  +"<li>SN Nuclearelectrica, CNE Cernavodă </li>"
  +"<li>Tribunalul Municipiului București </li>"
  +"<li>BRD Piața Victoriei </li>"
  +"<li>BRD Televiziunea București </li>"
  +"<li>Mobexpert Pipera </li>"
  +"<li>Kaufland: București, Timișoara, Satu Mare, Târgu Mures, Alba Iulia </li>"
  +"<li>Centrul Expozițional Moldova Iași </li>"
  +"<li>Real Vitan București </li>"
  +"<li>Biofuel – Fabrica de alcool Zimnicea </li>"
  +"<li>Fabrica de ulei – Dropia Zimnicea </li>"
  +"<li>Carrefour Ploiești </li>"
  +"<li>Hypermarket Cora București, Titan București </li>"
  +"<li>SN Nuclearelectrica, Fabrica de Combustibil Nuclear Pitești </li>"

  +"</ul> "
  
  +"<p>Foc hidrocarburi :</p>"
  +"<ul>"
  +"<li>Rominserv</li>"
  +"<li>Petrotel Lukoil Ploiești</li>"
  +"<li>Combinatul Petrochimic Pitești</li>"

+"</ul> "



$("#titluLucrare").empty().append("Protecții antifoc:")


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
  +"<li>SN Nuclearelectrica, CNE Cernavodă (domeniul Nuclear)</li>";
  +"<li>CHIMPEX, Port Constanța (domeniul Civil)</li>";
  +"<li>SOCEP, Port Constanța (domeniul Civil)</li>";




  +"</ul> "



  adaugaPoza("img-domenii/8_termohidroizolatii/1_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/2_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/3_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/4_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/5_termohidroizolatii.jpg");
  adaugaPoza("img-domenii/8_termohidroizolatii/6_termohidroizolatii.jpg");

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
  pozaCertificate();
  changeLanguage(1);
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






