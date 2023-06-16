document.getElementById("clock-box").style.borderTopRightRadius =
  Math.random() * 60 + 100 + "%";
document.getElementById("clock-box").style.borderTopLeftRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("clock-box").style.borderBottomRightRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("clock-box").style.borderBottomLeftRadius =
  Math.random() * 60 + 40 + "%";

document.getElementById("menu__box").style.borderTopRightRadius =
  Math.random() * 60 + 100 + "%";
document.getElementById("menu__box").style.borderTopLeftRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("menu__box").style.borderBottomRightRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("menu__box").style.borderBottomLeftRadius =
  Math.random() * 60 + 40 + "%";

// var imgs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
var imgs = ["🍄", "🌿", "🌈", "🎉", "💌", "🥁", "🎒", "🎓", "🎈", "📚", "🕶"];

function updateClock() {
  var countDownDate = new Date("August 7, 2023 23:59:59").getTime();
  var d = new Date();
  var distance = countDownDate - d;

  // var hours = d.getHours();
  // var minutes = d.getMinutes();
  // var seconds = d.getSeconds();

  const difDay = Math.floor(distance / (1000 * 60 * 60 * 24));
  const difHour = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const difMin = Math.floor((distance / (1000 * 60)) % 60);
  const difSec = Math.floor((distance / 1000) % 60);

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  var minutes = Math.floor((distance / (1000 * 60)) % 60);
  var seconds = Math.floor((distance / 1000) % 60);

  if (hours > 0 && hours <= 12) {
    hours = hours;
  } else if (hours > 12) {
    hours = hours - 12;
  } else if (hours == 0) {
    hours = 12;
  }

  var daysE = "";
  var hoursE = "";
  var minutesE = "";
  var secondsE = "";

  for (i = 0; i < days.toString().length; i++) {
    var stringH = days.toString().charAt(i);
    // convert the first digit back to an integer
    var numberH = parseInt(stringH);
    daysE += imgs[numberH];
  }

  for (i = 0; i < hours.toString().length; i++) {
    var stringH = hours.toString().charAt(i);
    // convert the first digit back to an integer
    var numberH = parseInt(stringH);
    hoursE += imgs[numberH];
  }

  for (i = 0; i < minutes.toString().length; i++) {
    var stringH = minutes.toString().charAt(i);
    // convert the first digit back to an integer
    var numberH = parseInt(stringH);

    minutesE += imgs[numberH];
  }

  for (i = 0; i < seconds.toString().length; i++) {
    var stringH = seconds.toString().charAt(i);
    // convert the first digit back to an integer
    var numberH = parseInt(stringH);

    secondsE += imgs[numberH];
  }

  document.getElementById(
    "number"
  ).innerText = `${difDay}일 ${difHour}시간 ${difMin}분`;

  $("#days-1").html(daysE);
  $("#hours-1").html(hoursE);
  $("#minutes-1").html(minutesE);
  // $("#seconds").html(secondsE);

  // set replace text

  // $("#seconds").html(function (index, text) {
  //   this.innerHTML = text.replace(
  //     /([0-z]+)/g,
  //     "<img src='https://ik.imagekit.io/gyeon/nodl/sec$1.svg'>"
  //   );
  // });
}

updateClock();

setInterval(function () {
  updateClock();
}, 1000);

// click function
$(".about").click(function (e) {
  e.preventDefault();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#about").toggle();
});

$(".newsletter").click(function (e) {
  e.preventDefault();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#newsletter").toggle();
});

$(".history").click(function (e) {
  e.preventDefault();
  swap();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#history").css("display", "block");
});

// $(".archive").click(function (e) {
//   $(".topnav").removeClass("current");
//   $(this).addClass("current");
// });

$(".faq").click(function (e) {
  e.preventDefault();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#faq").toggle();
});

$(".conduct").click(function (e) {
  e.preventDefault();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#conduct").toggle();
});

$("a.button.apply").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("pressed");
  $("#apply").toggle();
});

function none() {
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
}

$(".press").click(function () {
  $(this).find(".answer").toggle();
  $(this).find(".expand").toggle();
  $(this).find(".disband").toggle();
});

// randomize teachers order
const teachers = Array.from(document.querySelectorAll("#history p"));

function swap() {
  const list = teachers.map(ele => ele.innerHTML);

  teachers.forEach(ele => {
    const index = Math.floor(Math.random() * list.length);
    ele.innerHTML = list.splice(index, 1);
  });
}

swap();

//table sorting
jQuery(window).load(function () {
  $("table")
    .tablesorter()
    .bind("sortStart", function () {
      var hasRowspans = false;

      $("[rowspan]", this).each(function () {
        hasRowspans = true;

        var rowspan = parseInt($(this).attr("rowspan"));

        // remove the rowspan attribute
        $(this).removeAttr("rowspan");

        var trIndex = $(this)
          .parentsUntil("table")
          .children("tr")
          .index($(this).parent());

        var tdIndex = $(this).parent().children("td").index(this);

        // traverse each row, and repopulate / reclone the values for rows with rowspan
        for (var tr = trIndex + 1; tr < trIndex + rowspan; ++tr) {
          var $row = $(this).parentsUntil("table").children("tr").eq(tr);

          if (tdIndex == 0) $row.prepend($(this).clone());
          else
            $row
              .children("td")
              .eq(tdIndex - 1)
              .after($(this).clone());
        }
      });

      if (hasRowspans) $(this).trigger("update");
    });
});

// permalinks

var hash = window.location.hash;
if (hash != "") {
  $('a[href="' + hash + '"]').click();
}

if (location.hash) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
}

jQuery.fn.center = function () {
  this.css("position", "fixed");
  this.css(
    "top",
    Math.max(
      0,
      ($(window).height() - $(this).outerHeight()) / 2 + $(window).scrollTop()
    ) + "px"
  );
  this.css(
    "left",
    Math.max(
      0,
      ($(window).width() - $(this).outerWidth()) / 2 + $(window).scrollLeft()
    ) + "px"
  );
  return this;
};

$(".no-style").click(function () {
  console.log("no style please");

  function no_style() {
    var links = document.querySelectorAll("link");

    document.querySelectorAll("link, style").forEach(function (node) {
      node.parentNode.removeChild(node);
    });

    document.querySelectorAll("*").forEach(function (node) {
      node.removeAttribute("style");
    });

    console.log("there are no styles");

    $("html,body").scrollTop(0);
  }

  no_style();
});

// iframe

jQuery(".play-btn").click(function (e) {
  e.preventDefault();
  jQuery(this).hide();
  jQuery("#background-video").find("iframe").show();
  jQuery("#background-video").find("iframe")[0].src += "?autoplay=1";
});

// copy to clipboard

function clip() {
  var copyText = document.getElementById("clip").value;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("클립보드에 복사되었습니다.");
  });
}

// menu

$(function () {
  $("body")
    .find("a")
    .click(function () {
      $("input:checkbox[id='menu__toggle']").prop("checked", false);
      $("main").css("opacity", "1");
    });

  $("input:checkbox[id='menu__toggle']").on("change", function () {
    if ($(this).is(":checked")) {
      $("header, main, footer").css("opacity", ".2");
    } else {
      $("header, main, footer").css("opacity", "1");
    }
  });
});

// menu button position

$(function () {
  $("#menu__box a.about, #menu__box a.newsletter").click(function () {
    $("html, body").animate({scrollTop: $("nav#main ul").offset().top}, "2000");
    return false;
  });
});

// scroll to top
$(function () {
  $(".scroll-to-top").click(function () {
    $("html, body").animate({scrollTop: $("body").offset().top}, "2000");
    return false;
  });

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $(".scroll-to-top").css({display: "none"});
  }

  window.onscroll = function () {
    scrolltotopFunction();
    menuFunction();
    switchFunction();
  };

  function scrolltotopFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      $(".scroll-to-top").css("display", "block");
    } else {
      $(".scroll-to-top").css("display", "none");
    }
  }

  function menuFunction() {
    if (
      document.body.scrollTop > 812 ||
      document.documentElement.scrollTop > 812
    ) {
      $(".menu__btn").css("display", "flex");
    } else {
      $(".menu__btn").css("display", "none");
    }
  }

  function switchFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      $(".switch").css("display", "block");
    } else {
      $(".switch").css("display", "none");
    }
  }
});
