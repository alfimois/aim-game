$(document).ready( function() {
  var time       = Number( prompt("Delay in ms?") ) || 700;
  var game       = $("#game");
  var score      = $("#score");
  var countScore = 0;

  function random(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
  };

	function newTarget() {
    var target = $("<div></div>", { class : "target" });
    var left   = random(0, game.width()  - target.width()  - 65);
    var top    = random(0, game.height() - target.height() - 65);

    $(target).appendTo(game);

    target.offset({ left : left, top : top })
      .animate({transform : "scale(0.1)"}, {
        duration: 4000,
        easing  : "linear",
        complete: function () {
          target.remove();
        }
      })
      .on("mousedown", function  () {
        target.remove();
        score.text(++countScore);
      });
  };

  setInterval(newTarget, time);
});
