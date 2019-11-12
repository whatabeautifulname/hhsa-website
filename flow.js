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


  $("#green, #events").click(function() {
    // $('html').css('background: linear-gradient(to bottom, #BC8080, #808080)');
     $("span#theteam, span#hiphop, span#dance, span#home").addClass("vis");
    $(".nav-mimic-spacer").css("height", "100px");
    $("#z1").removeClass("hidden-display");
    $("#z2, #z0, #wdsgraphic").addClass("hidden-display");
    $("#events").removeClass("vis");

    var firstRowEvents = anime.timeline();

    firstRowEvents
      .add({
        targets: "#event1",
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
        translateY: [-900, 0],
        // translateY: 1450,
        easing: "easeOutSine",
        duration: 900,
        offset: 400
      })

      .add({
        targets: "#event5",
        translateY: [-900, 0],
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
  });

  $("#blue, #dance").click(function() {
   $('#back').css('visibility: visible');
    $("span#events, span#hiphop, span#theteam, span#home").addClass("vis");
    $(".nav-mimic-spacer").css("height", "100px");
        $("#z0").addClass("hidden-display");
    $("#z1, #z5, #wdsgraphic").addClass("hidden-display");
    $("#z2").removeClass("hidden-display");
    $("#dance").removeClass("vis");
    // $("#blue").css("background-size", "40vw 40vw");
  });

  $("#yellow, #hiphop").click(function() {
    $("span#events, span#theteam, span#dance, span#home").addClass("vis");
    $("#z0, #z1, #z2, #z5, #wdsgraphic").addClass("hidden-display");
    $("#hiphop").removeClass("vis");
    $("z5").addClass("hidden-display");
  });

  $("#red, #theteam").click(function() {
    $('html').css('background: linear-gradient(to bottom, #BC8080, #808080)');
    $("span#events, span#hiphop, span#dance, span#home").addClass("vis");
    $(".nav-mimic-spacer").css("height", "100px");
    $("#z1, #z2, #z5, #wdsgraphic").addClass("hidden-display");
    $('#theteam').removeClass('vis');
    $("#z0").removeClass("hidden-display");
  });
});


