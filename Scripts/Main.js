$(document).ready(function () {
    AddHeader();
    AddGameLeft();
    Intro();
    AddFooter();
});



function AddHeader()
{
    var icon_width = 60; 
    $('#Header').empty().append(
        ''
        +'<ul class="topnav">'
        + '<li><a href="./"><img src="Images/lw-cropped.png" width="170" height="60"></a></li>'
        //+ '<li><a href="/AboutUs" height="48">About Us</a></li>'

        + '<li class="right"><a href="https://www.facebook.com/ReplayStud" target="_blank"><img src="Images/Icons/facebook.png" width="' + icon_width + '" height="' + icon_width +'"></a></li>'
        + '<li class="right"><a href="https://www.instagram.com/replay.stud" target="_blank"><img  src="Images/Icons/instagram.png" width="' + icon_width + '" height="' + icon_width +'"></a></li>'
        + '<li class="right"><a href="https://www.tiktok.com/@replaystud" target="_blank"><img src="Images/Icons/tiktok.png" width="' + icon_width + '" height="' + icon_width +'"></a></li>'
        + '<li class="right"><a href="https://twitter.com/ReplayStud" target="_blank"><img src="Images/Icons/twitter.png" width="' + icon_width + '" height="' + icon_width +'"></a></li>'
        + '<li class="right"><a href="https://www.youtube.com/channel/UC74gkNZCTSVaExwAFtEWCFw" target="_blank"><img src="Images/Icons/youtube.png" width="' + icon_width + '" height="' + icon_width +'"></a></li>'


        +'</ul>'
    );
}

function AddFooter()
{
    $('#Footer').empty().append(
        ''
        
        + '<footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">'
        +   '<i class="fa fa-facebook-official w3-hover-opacity"></i>'
        +   '<i class="fa fa-instagram w3-hover-opacity"></i>'
        +   '<i class="fa fa-twitter w3-hover-opacity"></i>'
        +   '<p class="w3-medium">Replay Studio SRL</a></p>'
        + '</footer>'
    );
}



function AddGameLeft() {
    $('#Game').append(
        ''
        
        + '<div class="gamepreview">'
        + '<div class="row">'

        + '<div class="column2">'
        + '<br>'
        + '<br>'
        + '<a href="https://play.google.com/store/apps/details?id=com.ReplayStudio.Ballzing&gl=RO" target="_blank"> <img src="Images/Games/Ballzing.png" width="150" height="150"></a>'
        + '<p><h1>Ballzing</h1></p>'
        + '<p style="padding-left:10%">Ballzing is a new challange that will test your nerves.'
        + 'In order to beat this game you\'ll need to develop a very strong muscle memory and reflexes.'
        + 'Try to beat this game and win the race between you and your friends.</p>'
        + '<a href="https://play.google.com/store/apps/details?id=com.ReplayStudio.Ballzing&gl=RO" target="_blank"> <img src="Images/Other/GooglePlay.png" width="250" height="75"></a>'
        + '</div>'

        + '<div class="column2">'
        + '<br>'
        + '<br>'
        + '<br>'
        + '<br>'
        +'<iframe width="560" height="315" src="https://www.youtube.com/embed/ergiG9zVtPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        + '<br>'
        + '<br>'
        + '<br>'
        + '<br>'
        + '</div>'

        + '</div>'
        + '<br>'
        + '<br>'

        + '</div>'

    );

}

function AddGameRight() {
    $('#Game').append(
        ''
        
        + '<div class="gamepreview">'
        + '<div class="row">'



        + '<div class="column2">'
        + '<br>'
        + '<br>' 
        + '<br>'
        + '<br>'
        + '<iframe width="560" height="315" src="https://www.youtube.com/embed/ergiG9zVtPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        + '<br>'
        + '<br>'
        + '<br>'
        + '<br>'
        + '</div>'

        + '<div class="column2">'
        + '<br>'
        + '<br>'
        + '<img src="Images/Games/Ballzing.png" width="150" height="150">'
        + '<p><h1>Ballzing</h1></p>'
        + '<p style="padding-right:10%">Ballzing is a new challange that will test your nerves.'
        + 'In order to beat this game you\'ll need to develop a very strong muscle memory and reflexes.'
        + 'Try to beat this game and win the race between you and your friends.</p>'
        + '<a href="https://play.google.com/store/apps/details?id=com.ReplayStudio.Ballzing" target="_blank"> <img src="Images/Other/GooglePlay.png" width="250" height="75"></a>'
        + '</div>'

       

        + '</div>'
        + '<br>'
        + '<br>'

        + '</div>'

    );

}


function Intro() {
    $('#Intro').empty().append(
        ''
        +'<div class="center"><img src="Images/ws.png" width="300px" height="300px"></div>'
        +'<div class="center"><p style="color:white;">We\'re a small studio that started our journey in 2021. </p></div>'
        )
}


function Persoane() {
    $('#Peroane').empty().append(
        ''
        +'ceva'
        
        )
}