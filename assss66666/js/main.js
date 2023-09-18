
$(window).scroll(function () {
    let sectionTop = $("#about").offset().top;
    let scrollTop = $(window).scrollTop();
    if (scrollTop > sectionTop) {
        $("nav").addClass("bg-primary p-3")
        $(".control").fadeIn(1000)
    } else {
        $("nav").removeClass("bg-primary p-3")
        $(".control").fadeOut(1000)
    }
})

$(".nav-link").click(function () {
    $(this).addClass("active");
    // $(this).parent().siblings().children().removeClass("active")
    $(".nav-link").not(this).removeClass("active");
    let hreF = $(this).attr("href");
    let scrollHight = $(hreF).offset().top
    // lazem tzbot el css  scroll-behavior: auto 
    $("html,body").animate({scrollTop : scrollHight }, {duration:2000 , queue :false });
})

$(".control").click(function(){
    $("html,body").animate({scrollTop: 0 } , 1000)
})


let boxWidth = $(".inner-color").outerWidth(true);
console.log(boxWidth)
$(".settings").css({left:`-${boxWidth}px`}) ;
$(".settingIcn").click(function(){
    // lazem el poss and boxthidth yb2o gwa el function click() 3shan kol lma a click yroo7 yshof el width bkam <<<<<
    let poss = $(".settings").css("left");
    if(poss == `0px` ){
        let boxWidth = $(".inner-color").outerWidth(true);
        console.log(boxWidth)
        $(".settings").animate({left:`-${boxWidth}px`} , 800) ;
    }else{
        $(".settings").animate({left:`0px`} , 800) ;

    }
    console.log(poss);
})

console.log(localStorage.getItem("color"))
if(localStorage.getItem("color") != null){
   $(":root").css(`--mainColor` , localStorage.getItem("color") );
}
$(".inner-color .box").click(function(){
    let color =  $(this).css("background-color");
    $(":root").css(`--mainColor` , color );
    localStorage.setItem("color" , color);
})
if(localStorage.getItem("bgImg") != null){
    $("header").css("background-image" , `url(${localStorage.getItem("bgImg")})`);
    $(".work-counter").css("background-image" , `url(${localStorage.getItem("bgImg")})`);
    $(".carousel-parent").css("background-image" , `url(${localStorage.getItem("bgImg")})`);
}
$(".box-bg img").click(function(){
   let mySrc =  $(this).attr("src") ;
   localStorage.setItem("bgImg" , mySrc);
   console.log(mySrc)
   $("header").css("background-image" , `url(${mySrc})`);
   $(".work-counter").css("background-image" , `url(${mySrc})`);
   $(".carousel-parent").css("background-image" , `url(${mySrc})`);
})

$(document).ready(function(){
    $(".landing").fadeOut(1000)
})