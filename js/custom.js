
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

function changeContinutDomenii(nrDomeniu)
  {
    var content="";

    $("#elementListaDomenii1").removeClass("active");
    $("#elementListaDomenii2").removeClass("active");
    $("#elementListaDomenii3").removeClass("active");
    //$("#elementListaDomeniiExtra").empty()
    if(nrDomeniu===1)
    {
      content+="<p>Firma dispune de tehnologii de izolare a conductelor si echipamentelor la care temperatura de lucru este de "
      +"pana la -160ºC cu diferite materiale : foamglass, poliuretan , poliizocianurat, kaiflex,armaflex, polistiren.</p>";
      
      
      // content+="<img src=\"images\/domenii1_1.png\" style=\"width:25rem;height:25rem;\">";
      // content+="<img src=\"images\/domenii1_2.png\" style=\"width:25rem;height:25rem;\">";

      content+="<p><ul><li>CNE Cernavoda</li><li>Rompetrol</li><li>Interagro Zimnicea</li><li>Linde Galati</li></ul></p>"
      
      // $("#elementListaDomeniiExtra").empty().append("<img src=\"images\/domenii1_2.png\" style=\"width:25rem;height:25rem;padding-top:1rem;\">");

      $("#elementListaDomeniiExtra").empty().append(
        '<div class="slideshow-container">'
          +'<div class="mySlides">'
          +'<div class="numbertext">1 / 2</div>'
          +'<img src="images/domenii1_1.png" style="width:100%">'
          +'</div>'
          +'<div class="mySlides">'
          +'<div class="numbertext">2 / 2</div>'
          +'<img src="images/domenii1_2.png" style="width:100%">'
          +'</div>'
          +'<a class="prev" onclick="plusSlides(-1)">❮</a>'
          +'<a class="next" onclick="plusSlides(1)">❯</a>'
          +'</div>'
          +'<br>'
          +'<div style="text-align:center">'
          +'<span class="dot" onclick="currentSlide(1)"></span> '
          +'<span class="dot" onclick="currentSlide(2)"></span> '
          +'</div>'
      );
      currentSlide(1);

      $("#elementListaDomenii1").addClass("active");
    }
    

    if(nrDomeniu===2)
    {
      content+="<p>Dotarea cu scule si echipamente este conforma normelor UOP.</p>";


      // content+="<img src=\"images\/domenii2_1.png\" style=\"width:13.3rem;height:13.3rem;\">";
      // content+="<img src=\"images\/domenii2_2.png\" style=\"width:13.3rem;height:13.3rem;\">";
      // content+="<img src=\"images\/domenii2_3.png\" style=\"width:13.3rem;height:13.3rem;\">";
      // content+="<img src=\"images\/domenii2_4.png\" style=\"width:13.3rem;height:13.3rem;\">";
      // content+="<img src=\"images\/domenii2_5.png\" style=\"width:13.3rem;height:13.3rem;\">";
      // content+="<img src=\"images\/domenii2_6.png\" style=\"width:13.3rem;height:13.3rem;\">";
      // content+="<img src=\"images\/domenii2_7.png\" style=\"width:13.3rem;height:13.3rem;\">";


      content+="<p><ul><li>CNE Cernavoda Unitatea 1</li><li> Rafinaria Arpechim Pitesti</li><li>Rominserv</li><li>Petrotel Lukoil Ploiesti</li></ul></p>"

      // $("#elementListaDomeniiExtra").empty().append("<img src=\"images\/domenii2_1.png\" style=\"width:25rem;height:25rem;padding-top:1rem;\">");

      $("#elementListaDomeniiExtra").empty().append(
          '<div class="slideshow-container">'
          +'<div class="mySlides">'
          +'<div class="numbertext">1 / 7</div>'
          +'<img src="images/domenii2_1.png" style="width:100%">'
          +'</div>'
          +'<div class="mySlides">'
          +'<div class="numbertext">2 / 7</div>'
          +'<img src="images/domenii2_2.png" style="width:100%">'
          +'</div>'
          +'<div class="mySlides">'
          +'<div class="numbertext">3 / 7</div>'
          +'<img src="images/domenii2_3.png" style="width:100%">'
          +'</div>'
          +'<div class="mySlides">'
          +'<div class="numbertext">4 / 7</div>'
          +'<img src="images/domenii2_4.png" style="width:100%">'
          +'</div>'
          +'<div class="mySlides">'
          +'<div class="numbertext">5 / 7</div>'
          +'<img src="images/domenii2_5.png" style="width:100%">'
          +'</div>'
          +'<div class="mySlides">'
          +'<div class="numbertext">6 / 7</div>'
          +'<img src="images/domenii2_6.png" style="width:100%">'
          +'</div>'
          +'<div class="mySlides">'
          +'<div class="numbertext">7 / 7</div>'
          +'<img src="images/domenii2_7.png" style="width:100%">'
          +'</div>'
          +'<a class="prev" onclick="plusSlides(-1)">❮</a>'
          +'<a class="next" onclick="plusSlides(1)">❯</a>'
          +'</div>'
          +'<br>'
          +'<div style="text-align:center">'
          +'<span class="dot" onclick="currentSlide(1)"></span> '
          +'<span class="dot" onclick="currentSlide(2)"></span> '
          +'<span class="dot" onclick="currentSlide(3)"></span> '
          +'<span class="dot" onclick="currentSlide(4)"></span> '
          +'<span class="dot" onclick="currentSlide(5)"></span> '
          +'<span class="dot" onclick="currentSlide(6)"></span> '
          +'<span class="dot" onclick="currentSlide(7)"></span> '
          +'</div> '
      );

      currentSlide(1);


      $("#elementListaDomenii2").addClass("active");
    }
    


    if(nrDomeniu===3)
    {
      content+="<p>Vopselele termospumante ofera solutii atat pentru foc celulozic, cat si pentru foc hidrocarburi.</p>";

      content+="<li>Foc Celulozic</li>"
      content+="<ul>"
      content+="<li>CNE Cernavoda</li><li>Tribunalul Municipiului Bucuresti</li><li> BRD Piata Victoriei</li><li> BRD Televiziunea Bucuresti</li><li> Mobexpert Pipera</li>"
      content+="<li> Kaufland Bucuresti , Timisoara , Satu Mare , Targu Mures , Alba Iulia</li><li> Centrul Expozitional Moldova Iasi</li><li> Real Vitan Bucuresti</li>"
      content+="<li> Biofuel – Fabrica de alcool Zimnicea</li><li> Fabrica de ulei – Dropia Zimnicea</li><li> Carrefour Ploiesti</li>"
      content+="<li> Hypermarket Cora Bucuresti , Titan Bucuresti</li><li> FCN Pitesti</li>"
      content+="</ul>"

      content+="<li>Foc Hidrocarburi</li>"
      content+="<ul>"
      content+="<li>Rominserv</li>"
      content+="<li>Petrotel Lukoil Ploiesti</li>"
      content+="</ul>"

      // content+="<img src=\"images\/domenii3_1.png\" style=\"width:25rem;height:25rem;padding-top:2rem\">";



      $("#elementListaDomenii3").addClass("active");
      $("#elementListaDomeniiExtra").empty().append(
        '<div class="slideshow-container">'
          
          +'<div class="mySlides">'
          +'<div class="numbertext">1 / 1</div>'
          +'<img src="images/domenii3_1.png" style="width:100%">'
          +'</div>'
          +'<a class="prev" onclick="plusSlides(-1)">❮</a>'
          +'<a class="next" onclick="plusSlides(1)">❯</a>'
          +'</div>'
          +'<br>'
          +'<div style="text-align:center">'
          +'<span class="dot" onclick="currentSlide(1)"></span> '
          +'</div>'
      );
      currentSlide(1);

       //$("#elementListaDomeniiExtra").empty().append("<img src=\"images\/domenii3_1.png\" style=\"width:25rem;height:25rem;padding-top:1rem;\">");
    }
    


    $("#contentDomenii").empty().append(content)
    
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


function changeLucrariReferinta(numar)
{
  var lucrariReferinta="";

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
  +"<li>SNN Cernavodă - EFCVS </li>"
  +"<li>SNN Cernavodă - extindere BCU</li>"
  +"<li>SNN Cernavodă Seiru</li>"
+"</ul> "

$("#titluLucrare").empty().append("Construcții industriale:")
}

if(numar==2)
{
  lucrariReferinta+="<ul>"
  +"<li>Consolidare hotel Astoria – Eforie Nord, hotel Europa – Eforie Nord; hotel Carmen – Venus; </li>"
  +"<li>Consolidare siloz fosforita CHIMPEX Port Constanța</li>"
  +"<li>Consolidare rezervor Rompetrol MIDIA</li>"
  +"</ul>"
  $("#titluLucrare").empty().append("Consolidări de structuri în construcții:")

}
if(numar==3)
{
  lucrariReferinta+="<ul>"
  +"<li>Izolații calde:</li>"
  +"<ul>"
  +"<li>SNN Cernavodă Unitatea 1 și Unitatea 2 </li>"
  +"<li>Rompetrol</li>"
  +"<li>Lukoil</li>"
  +"</ul>"
  +"<li>Izolații reci:</li>"
  +"<ul>"
  +"<li>SNN Cernavodă Unitatea 1 și Unitatea 2 </li>"
  +"<li>Rompetrol </li>"
  +"<li>Linde Galați</li>"
  +"</ul>"
  +"</ul>"
  $("#titluLucrare").empty().append("Termoizolații:")

}
if(numar==4)
{
  lucrariReferinta+="<ul>"
  +"<li>SNN Cernavodă Unitatea 1 și Unitatea 2</li>"
  +"<li>SNN Cernavodă Seiru</li>"
  +"</ul>"

  $("#titluLucrare").empty().append("Închideri cu panouri sandwich:")
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
  +"<li>SNN Cernavodă Unitatea 1 și Unitatea 2 – Captușeli epoxidice / poliuretanice decontaminabile</li>"
  +"<li>Fabrica de Combustibil Nuclear Pitesti - Căptușeli epoxidice / poliuretanice decontaminabile</li>"
+"</ul> "

$("#titluLucrare").empty().append("Construcții industriale:")

}

if(numar==6)
{
  lucrariReferinta+="<p>Izolații cu betoane refractare:</p>"
  +"<ul>"
  +"<li>SNN Cernavodă Unitatea 1 și Unitatea 2</li>"
  +"<li>Rominserv</li>"
  +"<li>Petrotel Lukoil Ploiești</li>"
  +"</ul> "
$("#titluLucrare").empty().append("Construcții industriale:")

}

if(numar==7)
{
  lucrariReferinta+="<p>Foc celulozic:</p>"
  +"<ul>"
  +"<li>CNE Cernavodă</li>"
  +"<li>Tribunalul Municipiului București</li>"
  +"<li>BRD Piața Victoriei</li>"
  +"<li>BRD Televiziunea București</li>"
  +"<li>Mobexpert Pipera</li>"
  +"<li>Kaufland: București, Timisoara, Satu Mare, Targu Mures, Alba Iulia</li>"
  +"<li>Centrul Expozițional Moldova Iași</li>"
  +"<li>Real Vitan București</li>"
  +"<li>Biofuel – Fabrica de alcool Zimnicea</li>"
  +"<li>Fabrica de ulei – Dropia Zimnicea</li>"
  +"<li>Carrefour Ploiești</li>"
  +"<li>Hypermarket Cora București, Titan București</li>"
  +"<li>Fabrica de Combustibil Nuclear Pitești</li>"

  +"</ul> "
  
  +"<p>Foc hidrocarburi :</p>"
  +"<ul>"
  +"<li>Rominserv</li>"
  +"<li>Petrotel Lukoil Ploiești</li>"
  +"<li>Combinatul Petrochimic Pitești</li>"

+"</ul> "



$("#titluLucrare").empty().append("Protecții antifoc:")

}

if(numar==8)
{
  lucrariReferinta+="<p></p>"
  +"<ul>"
  +"<li>SNN Cernavodă (domeniul Nuclear)</li>"
  +"<li>Chimpex (domeniul Civil)</li>"
  +"<li>Socep (domeniul Civil)</li>"
  +"</ul> "





$("#titluLucrare").empty().append("Termohidroizolații:")

}

if(numar==9)
{
  lucrariReferinta+="<p>În domeniul Nuclear:</p>"
  +"<ul>"
  +"<li>SNN Cernavodă Unitatea 1 și Unitatea 2 - injecții cu mortare</li>"
  +"<li>SNN Cernavodă Unitatea 1 și Unitatea 2 - etanșări rosturi de tasare</li>"
  +"</ul> "
  
  +"<p>În domeniul Civil:</p>"
  +"<ul>"
  +"<li>Etanșare rosturi de tasare Siloz fosforita Chimpex</li>"
  +"<li>Etanșare rosturi de tasare Siloz cereale Socep</li>"
+"</ul> "


$("#titluLucrare").empty().append("Lucrări speciale:")

}
  $("#lucrariReferinta").empty().append(lucrariReferinta);


  

}




$(document).ready(function () {
  pozaCertificate();
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






// /*Photo Gallery*/ 
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" activeGallery", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " activeGallery";
// }