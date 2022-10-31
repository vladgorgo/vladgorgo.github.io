
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



$(document).ready(function () {
  changeContinutDomenii(1)
});


/*Photo Gallery*/ 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeGallery", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeGallery";
}