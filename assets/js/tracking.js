$(window).on("load", function () {
  var x = 0,
    y = 0,
    currentX = x,
    currentY = y,
    wWidth = $(this).width(),
    wHeight = $(this).height(),
    threshold = $(".slogan").width() / 8,
    slogan = {},
    count = 0,
    active = false;

  function resize() {
    wWidth = $(this).width();
    wHeight = $(this).height();
    threshold = $(".slogan").width() * 8;
  }

  $(window).on("resize", function () {
    resize();
  });

  $(this).on("mousemove touchstart touchmove", function (e) {
    if (!active) {
      active = true;
    }
    var thresholdY = threshold * 0.9;
    x = -threshold / 2 + (threshold / wWidth) * e.pageX;
    y = -thresholdY / 2 + (thresholdY / wHeight) * e.pageY;
  });

  function sloganParts() {
    slogan.head = $(".slogan");
  }

  function animate() {
    if (!active) {
      count++;
      x = Math.sin(count / 20) * 15;
    }
    currentX += (x - currentX) / 10;
    currentY += (y - currentY) / 10;

    var rotationX = (10 / threshold) * currentX,
      rotationY = (10 / threshold) * currentY,
      scaleY = 1 + (0.75 / threshold) * currentY,
      earsY = currentY * -1;

    if (earsY < 0) {
      earsY = 0;
    }

    slogan.head.css({
      transform:
        "rotateX(" + rotationY * -2 + "deg) rotateY(" + rotationX * 2 + "deg)",
    });

    window.requestAnimationFrame(animate);
  }

  sloganParts();
  window.requestAnimationFrame(animate);
});
