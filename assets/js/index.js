// loading
// __box border-radius

document.getElementById("clock__box").style.borderTopRightRadius =
  Math.random() * 60 + 100 + "%";
document.getElementById("clock__box").style.borderTopLeftRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("clock__box").style.borderBottomRightRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("clock__box").style.borderBottomLeftRadius =
  Math.random() * 60 + 40 + "%";

document.getElementById("menu__box").style.borderTopRightRadius =
  Math.random() * 60 + 100 + "%";
document.getElementById("menu__box").style.borderTopLeftRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("menu__box").style.borderBottomRightRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("menu__box").style.borderBottomLeftRadius =
  Math.random() * 60 + 40 + "%";

document.getElementById("footer__box").style.borderTopRightRadius =
  Math.random() * 60 + 100 + "%";
document.getElementById("footer__box").style.borderTopLeftRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("footer__box").style.borderBottomRightRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("footer__box").style.borderBottomLeftRadius =
  Math.random() * 60 + 40 + "%";

// clock

var imgs = ["🍄", "🌿", "🌈", "🎉", "💌", "🥁", "🎒", "🌾", "🎈", "🎂", "✨"];

function updateClock() {
  var countDownDate = new Date("October 17, 2023 00:00:00").getTime();
  var d = new Date();
  var distance = countDownDate - d;

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
    var numberH = parseInt(stringH);
    daysE += imgs[numberH];
  }

  for (i = 0; i < hours.toString().length; i++) {
    var stringH = hours.toString().charAt(i);
    var numberH = parseInt(stringH);
    hoursE += imgs[numberH];
  }

  for (i = 0; i < minutes.toString().length; i++) {
    var stringH = minutes.toString().charAt(i);
    var numberH = parseInt(stringH);

    minutesE += imgs[numberH];
  }

  for (i = 0; i < seconds.toString().length; i++) {
    var stringH = seconds.toString().charAt(i);

    var numberH = parseInt(stringH);

    secondsE += imgs[numberH];
  }

  document.getElementById("number-1").innerText = `${difDay + 1}일 ${
    difHour + 1
  }시간 ${difMin}분 ${difSec}초`;

  // $("#days-1").html(daysE);
  // $("#hours-1").html(hoursE);
  // $("#minutes-1").html(minutesE);
  // $("#seconds-1").html(secondsE);
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

$(".around").click(function (e) {
  e.preventDefault();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#around").toggle();
});

$("a.button.apply").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("pressed");
  $("#apply").toggle();
});

$(".press").click(function () {
  $(this).find(".answer").toggle();
  $(this).find(".expand").toggle();
  $(this).find(".disband").toggle();
});

$(".archive-press").click(function () {
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

// menu check

$(function () {
  $("body")
    .find("a")
    .click(function () {
      $("input:checkbox[id='menu__toggle']").prop("checked", false);
      $("header, main, footer").css("opacity", "1");
    });

  $("input:checkbox[id='menu__toggle']").on("change", function () {
    if ($(this).is(":checked")) {
      $("header, main, footer").css("opacity", ".2");
      // $("button.scroll-to-top").css("opacity", "0");
    } else {
      $("header, main, footer").css("opacity", "1");
    }
  });
});

// menu button position

$(function () {
  $(
    "#menu__box a.about, #menu__box a.newsletter, #menu__box a.history, #menu__box a.around"
  ).click(function () {
    $("html, body")
      .stop(true, true)
      .delay(25)
      .animate({scrollTop: $("nav#main ul").offset().top}, "slow");
    // $("button.scroll-to-top").css("opacity", "1");
    return false;
  });
});

// scroll to top
$(function () {
  window.onscroll = function () {
    // scrolltotopFunction();
    menuFunction();
    switchFunction();
  };

  function menuFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
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

// archive

$(function () {
  $("#archive .archive-list").each(function () {
    var $list = $(this);
    var $liArr = $list.children("article");

    $liArr
      .sort(function (a, b) {
        var temp = parseInt(Math.random() * 7);
        var isOddOrEven = temp % 2;
        var isPosOrNeg = temp > 7 ? 1 : -1;
        return isOddOrEven * isPosOrNeg;
      })
      .appendTo($list);

    $list
      .children(":first")
      .removeClass("twenty-one")
      .appendTo(".archive-first-child");

    $(".archive-first-child #background-video .play-btn").css(
      "display",
      "block"
    );
  });
});

// newsletter, more

$(function () {
  $(".newsletter--button").click(function () {
    $(this).parent().siblings().css("display", "block");
    $(this).parent().removeClass("body-margin-0");

    $(this).css("display", "none");
  });
});

// fetti

PREMIUM = true;

var colors = PREMIUM
  ? ["a67c00", "bf9b30", "ffbf00", "ffcf40", "ffdc73"]
  : ["DF4678", "00CECB", "995AE2", "FFC857", "CA3B4E"];

function createElements(root, elementCount) {
  return Array.from({length: elementCount}).map((_, index) => {
    const element = document.createElement("div");
    element.classList = ["fetti"];
    const color = colors[index % colors.length];
    element.style.backgroundImage =
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23" +
      color +
      "' d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'/%3E%3C/svg%3E\")";

    var size = Math.random() * 12 + 4;

    element.style.opacity = 1;
    element.style.width = size + "px";
    root.appendChild(element);
    return element;
  });
}

function randomPhysics(angle, spread, startVelocity) {
  const radAngle = angle * (Math.PI / 180);
  const radSpread = spread * (Math.PI / 180);
  return {
    x: 0,
    y: 0,
    wobble: Math.random() * 10,
    velocity:
      startVelocity * 0.65 + Math.max(Math.random(), 0.35) * startVelocity,
    angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
    angle3D: -(Math.PI / 4) + Math.random() * (Math.PI / 2),
    // angle3D: 0,
    tiltAngle: Math.random() * Math.PI,
  };
}

function updateFetti(fetti, progress, decay) {
  /* eslint-disable no-param-reassign */
  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;
  fetti.physics.wobble += 0.05;
  fetti.physics.velocity *= decay;
  fetti.physics.y += 1;
  fetti.physics.tiltAngle += 7;

  const {x, y, tiltAngle, wobble} = fetti.physics;
  const wobbleX = x + 10 * Math.cos(wobble);
  const wobbleY = y + 10 * Math.sin(wobble);
  const transform = `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotateZ(${tiltAngle}deg)`;

  fetti.element.style.transform = transform;
  fetti.element.style.opacity = Math.min(1 - progress * 4.2, 100 - y);

  /* eslint-enable */
}

function animate(root, fettis, decay) {
  const totalTicks = 200;
  let tick = 0;

  function update() {
    fettis.forEach(fetti => updateFetti(fetti, tick / totalTicks, decay));

    tick += 1;
    if (tick < totalTicks) {
      requestAnimationFrame(update);
    } else {
      fettis.forEach(fetti => root.removeChild(fetti.element));
    }
  }

  requestAnimationFrame(update);
}

function confetti(
  root,
  {
    angle = 90,
    decay = 0.7,
    spread = 270,
    startVelocity = 11,
    elementCount = 15,
  } = {}
) {
  const elements = createElements(root, elementCount);
  const fettis = elements.map(element => ({
    element,
    physics: randomPhysics(angle, spread, startVelocity),
  }));
  animate(root, fettis, decay);
}

$(function () {
  $(".button-effect").click(function () {
    confetti(this);
  });
});
