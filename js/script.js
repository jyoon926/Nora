//Loader
$(window).load(function() {
    document.getElementById('loadertext').style.transitionDuration = "1s";
    document.getElementById('loadertext').style.opacity = "0";
    document.getElementById('loader').style.transitionDelay = "1s";
    document.getElementById('loader').style.transitionDuration = "1s";
    document.getElementById('loader').style.opacity = "0";
    setTimeout(function(){
        document.getElementById('loader').style.pointerEvents = "none";
        document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }, 1000);
});

//Hiding Header
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("bar").style.opacity = "1";
        document.getElementById("bar").style.height = "62px";
        document.getElementById("header").style.padding = "10px 40px";
        document.getElementById("logo").style.fontSize = "30px";
        document.getElementById("menu").style.left = "20px";
    } else {
        document.getElementById("bar").style.opacity = "0";
        document.getElementById("bar").style.height = "135px";
        document.getElementById("header").style.padding = "30px 40px";
        document.getElementById("logo").style.fontSize = "40px";
        document.getElementById("menu").style.left = "40px";
    }

    //Banner
    document.getElementById("banner").style.transform = "translateX(-" + ((document.documentElement.scrollTop / window.innerHeight) * (window.innerWidth * 0.42)) + "px)";
}