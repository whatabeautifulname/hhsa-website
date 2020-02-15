document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
var v = document.createElement("myVideo");

v.addEventListener("error", function (e) {
    console.log("Error while loading the video");
});

v.addEventListener("loadeddata", function () {
    console.log("Video has started loading successfully!");
});

v.src = "https://students.washington.edu/whitec23/portfolio/media/4wxdn.mp4"




$(document).ready(function() {
  $('.dupOfficer').hover(function() {
    $('.info-content-box').css('filter', 'blur(6px)');
  }, function() {
    // on mouseout, reset the background colour
    $('.info-content-box').css('filter', 'blur(0px)');
  });

  $('#2019events').click(function() {
     $("#z1").removeClass("hidden-display");
      lastyearevents();
   });
 
   $('#2020events').click(function() {
     $('#z7').removeClass('hidden-display');
      thisyearevents();
   })

 $("#green, #events").click(function() {
    $("span#theteam, span#hiphop, span#dance").addClass("vis");
   $(".nav-mimic-spacer").css("height", "100px");
   // $("a#events").addClass("hidden-display");nav-mim
   // $("a#hiphop, a#dance ,a#theteam").removeClass("hidden-display");
 
   $("#z2").addClass("hidden-display");
   $("#z0").addClass("hidden-display");
   
   // $("#hip-title").addClass("vis");
   $("#events").removeClass("vis");

 });
 
function lastyearevents() {
 
     var firstRowEvents = anime.timeline();
   firstRowEvents
     .add({
       targets: "#event1",
     // i = 0, i * number of times pressed max = 2 + number pixels
       translateY: [-700, 0],
       duration: 2000,
       easing: "easeOutExpo",
       offset: 0
     })
     .add({
       targets: "#event2",
       translateY: [-700, 0],
       // translateY: 1400,
       easing: "easeOutExpo",
       duration: 2000,
       offset: 200
     })
     .add({
       targets: "#event3",
       translateY: [-700, 0],
       // translateY: 1400,
       easing: "easeOutExpo",
       duration: 2000,
       offset: 400
     });

   var secondRowEvents = anime.timeline();
   secondRowEvents
     .add({
       targets: "#event4",
       translateY: [0, 0],
       // translateY: 1450,
       easing: "easeOutSine",
       duration: 900,
       offset: 400
     })

     .add({
       targets: "#event5",
       translateY: [0, 0],
       // translateY: 1450,
       easing: "easeOutSine",
       duration: 700,
       offset: 600
     })

     .add({
       targets: "#event6",
       translateY: [-900, 0],
       // translateY: 1450,
       easing: "easeOutSine",
       duration: 800,
       offset: 800
     });
}
 
function thisyearevents() {
    var yearTitle = anime.timeline();
 yearTitle
 .add({
   targets: '#nineteen',
   translateX: [0, 1400],
   duration: 1500, 
   easing: 'easeInSine',
   offset: 0   
 })
   var firstColumnEvents = anime.timeline();
   firstColumnEvents
   .add({
     targets: "#event1",
     translateX: [0, -700],
     easing:"easeInSine",
     duration: 800,
     offset: 800
   })
    .add({
     targets:"#event4",
     translateX:[0, -700],
     easing: "easeInSine",
     duration: 800,
     offset: 800
   })
 var secondColumnEvents = anime.timeline();
 secondColumnEvents
     .add({
     targets: '#event2',
     translateX: [0, -1000],
     easing: 'easeInSine',
     duration: 800,
     offset: 800
   })
   .add({
     targets: '#event5',
     translateX: [0, -1000],
     easing: 'easeInSine',
     duration: 800,
     offset: 800
   })
 var thirdColumnEvents = anime.timeline();
 thirdColumnEvents
   .add({
     targets: '#event3',
     translateX: [0, -1400],
     easing: 'easeInSine',
     duration: 1000,
     offset: 800
   })
   .add({
     targets: '#event6',
     translateX: [0, -1400],
     easing: 'easeInSine',
     duration: 1000,
     offset: 800
   })
   
 var tierTwoEvents = anime.timeline();
 tierTwoEvents
 .add({
   targets: '#twenty',
   translateY: [700, -975],
   easing: 'easeInSine',
   duration: 2000,
   offset: 800
 })
 .add({
   targets: '#event7',
   translateY: [0, -975],
   easing: 'easeInSine',
   duration: 2000,
   offset: 800
 })
 .add({
  targets: '#event8',
  translateY: [0, -975],
  easing: 'easeInSine',
  duration: 2000,
  offset: 900
})
.add({
  targets: '#event9',
  translateY: [0, -975],
  easing: 'easeInSine',
  duration: 2000,
  offset: 1200
})
.add({
  targets: '#event10',
  translateY: [0, -975],
  easing: 'easeInSine',
  duration: 2000,
  offset: 1000
})
.add({
  targets: '#event11',
  translateY: [0, -975],
  easing: 'easeInSine',
  duration: 2000,
  offset: 1200
})
.add({
  targets: '#event12',
  translateY: [0, -975],
  easing: 'easeInSine',
  duration: 2000,
  offset: 1300
})
 }

 $("#blue, #dance").click(function() {
 
   $("span#events, span#hiphop, span#theteam").addClass("vis");
   $(".nav-mimic-spacer").css("height", "100px");
   // $("a#hiphop, a#theteam, a#events").removeClass("hidden-display");
   // $("a#dance").addClass("hidden-display");
       $("#z0").addClass("hidden-display");
   $("#z1").addClass("hidden-display");
   $("#z2").removeClass("hidden-display");
   $("#z5").addClass("hidden-display");
   // $("#hip-title").addClass("vis");
   $("#dance").removeClass("vis");
   $("#blue").css("background-size", "40vw 40vw");
 });

 $("#yellow, #hiphop").click(function() {
   $("span#events, span#theteam, span#dance").addClass("vis");
   // $(".nav-mimic-spacer").css("height", "500px");
   // $("a#theteam, a#dance, a#events").removeClass("hidden-display");
   // $("a#hiphop").addClass("hidden-display");
   $("#z1").addClass("hidden-display");
   $("#z2").addClass("hidden-display");
   $('#z0').addClass('hidden-display');
   $("#hiphop").removeClass("vis");
   // $(".top-title").removeClass("vis");
   $("z5").addClass("hidden-display");
 });

 $("#red, #theteam").click(function() {
   $("span#events, span#hiphop, span#dance").addClass("vis");
   $(".nav-mimic-spacer").css("height", "100px");
   // $('a#theteam').addClass('hidden-display');
   // $("a#hiphop, a#dance ,a#events").removeClass("hidden-display");
   $("#z1").addClass("hidden-display");
   $("#z2").addClass("hidden-display");
   // $("#hip-title").addClass("vis");
   $('#theteam').removeClass('vis');
   $("#z0").removeClass("hidden-display");
   $("#z5").addClass("hidden-display");
 });
});


 $('.dupOfficer').hover(function() {
   $('.info-content-box').css('filter', 'blur(6px)');
 }, function() {
   // on mouseout, reset the background colour
   $('.info-content-box').css('filter', 'blur(0px)');
 });


/* why join HHSA in grafitti typography (transparent? or blackout?) */
/* add color overlay that changes properties of picture when hovered over*/

// find out what to put on main page
// - carousel/slider of photographs from dance practice or workshop
// - video background
// 

/* play video when loaded on page  -streamable API isn't nice, using youtube API for now*/ 
// add sponsors section - Ethnic Cultural Community Center
// social media - Facebook, Instagram, Twitter, Youtube
//spotify playlist - ask who's making the spotify playlist
//spinitron player from RDR
//facebook live - ask Mady if there will be video

//Google Analytics before DEPLOYMENT!!! DON'T BE LAZY!!!

