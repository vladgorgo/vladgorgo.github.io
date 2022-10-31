
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
    $("#elementListaDomeniiExtra").empty()
    if(nrDomeniu===1)
    {
      content+="<p>Firma dispune de tehnologii de izolare a conductelor si echipamentelor la care temperatura de lucru este de "
      +"pana la -160ºC cu diferite materiale : foamglass, poliuretan , poliizocianurat, kaiflex,armaflex, polistiren.</p>";
      
      
      // content+="<img src=\"images\/domenii1_1.png\" style=\"width:25rem;height:25rem;\">";
      // content+="<img src=\"images\/domenii1_2.png\" style=\"width:25rem;height:25rem;\">";

      content+="<p><ul><li>CNE Cernavoda</li><li>Rompetrol</li><li>Interagro Zimnicea</li><li>Linde Galati</li></ul></p>"
      
      $("#elementListaDomeniiExtra").empty().append("<img src=\"images\/domenii1_2.png\" style=\"width:25rem;height:25rem;padding-top:1rem;\">");

      
      $("#elementListaDomenii1").addClass("active");
    }
    

    if(nrDomeniu===2)
    {
      content+="<p>Dotarea cu scule si echipamente este conforma normelor UOP.</p>";


      content+="<img src=\"images\/domenii2_1.png\" style=\"width:13.3rem;height:13.3rem;\">";
      content+="<img src=\"images\/domenii2_2.png\" style=\"width:13.3rem;height:13.3rem;\">";
      content+="<img src=\"images\/domenii2_3.png\" style=\"width:13.3rem;height:13.3rem;\">";
      content+="<img src=\"images\/domenii2_4.png\" style=\"width:13.3rem;height:13.3rem;\">";
      content+="<img src=\"images\/domenii2_5.png\" style=\"width:13.3rem;height:13.3rem;\">";
      content+="<img src=\"images\/domenii2_6.png\" style=\"width:13.3rem;height:13.3rem;\">";
      content+="<img src=\"images\/domenii2_7.png\" style=\"width:13.3rem;height:13.3rem;\">";


      content+="<p><ul><li>CNE Cernavoda Unitatea 1</li><li> Rafinaria Arpechim Pitesti</li><li>Rominserv</li><li>Petrotel Lukoil Ploiesti</li></ul></p>"

      


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
      $("#elementListaDomeniiExtra").empty().append("<img src=\"images\/domenii3_1.png\" style=\"width:25rem;height:25rem;padding-top:1rem;\">");
    }
    


    $("#contentDomenii").empty().append(content)
    
  }


$(document).ready(function () {
  changeContinutDomenii(1)
});