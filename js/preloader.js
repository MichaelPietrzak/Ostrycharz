//  var actors = {};
//  actors.actor_1 = {
//    node: document.getElementById("SVG-Circus-6a129fba-e8a6-0862-3520-41d56566ed64").getElementById("actor_1")
//    , type: "square"
//    , cx: 20
//    , cy: 50
//    , dx: 10
//    , dy: 13
//    , opacity: 1
//  };
//  actors.actor_2 = {
//    node: document.getElementById("SVG-Circus-6a129fba-e8a6-0862-3520-41d56566ed64").getElementById("actor_2")
//    , type: "square"
//    , cx: 35
//    , cy: 50
//    , dx: 10
//    , dy: 13
//    , opacity: 1
//  };
//  actors.actor_3 = {
//    node: document.getElementById("SVG-Circus-6a129fba-e8a6-0862-3520-41d56566ed64").getElementById("actor_3")
//    , type: "square"
//    , cx: 50
//    , cy: 50
//    , dx: 10
//    , dy: 13
//    , opacity: 1
//  };
//  actors.actor_4 = {
//    node: document.getElementById("SVG-Circus-6a129fba-e8a6-0862-3520-41d56566ed64").getElementById("actor_4")
//    , type: "square"
//    , cx: 65
//    , cy: 50
//    , dx: 10
//    , dy: 13
//    , opacity: 1
//  };
//  actors.actor_5 = {
//    node: document.getElementById("SVG-Circus-6a129fba-e8a6-0862-3520-41d56566ed64").getElementById("actor_5")
//    , type: "square"
//    , cx: 80
//    , cy: 50
//    , dx: 10
//    , dy: 13
//    , opacity: 1
//  };
//  var tricks = {};
//  tricks.trick_1 = (function (_, a) {
//    a = (function (n) {
//      return .5 > n ? 2 * n * n : -1 + (4 - 2 * n) * n
//    })(a) % 1, a = a * 1 % 1, a = 0 > a ? 1 + a : a;
//    var t, n;.5 > a ? (t = 2 * a * 25 * Math.cos(0 * Math.PI / 180), n = 2 * -a * 25 * Math.sin(0 * Math.PI / 180)) : (t = 2 * (1 - a) * 25 * Math.cos(0 * Math.PI / 180), n = 2 * -(1 - a) * 25 * Math.sin(0 * Math.PI / 180)), _._tMatrix[4] += t, _._tMatrix[5] += n
//  });
//  var scenarios = {};
//  scenarios.scenario_1 = {
//    actors: ["actor_1", "actor_2", "actor_3", "actor_4", "actor_5"]
//    , tricks: [{
//      trick: "trick_1"
//      , start: 0
//      , end: 1
//    }]
//    , startAfter: 0
//    , duration: 1500
//    , actorDelay: 100
//    , repeat: 0
//    , repeatDelay: 0
//  };
//  var _reqAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame
//    , fnTick = function (t) {
//      var r, a, i, e, n, o, s, c, m, f, d, k, w;
//      for (c in actors) actors[c]._tMatrix = [1, 0, 0, 1, 0, 0];
//      for (s in scenarios)
//        for (o = scenarios[s], m = t - o.startAfter, r = 0, a = o.actors.length; a > r; r++) {
//          if (i = actors[o.actors[r]], i && i.node && i._tMatrix)
//            for (f = 0, m >= 0 && (d = o.duration + o.repeatDelay, o.repeat > 0 && m > d * o.repeat && (f = 1), f += m % d / o.duration), e = 0, n = o.tricks.length; n > e; e++) k = o.tricks[e], w = (f - k.start) * (1 / (k.end - k.start)), tricks[k.trick] && tricks[k.trick](i, Math.max(0, Math.min(1, w)));
//          m -= o.actorDelay
//        }
//      for (c in actors) i = actors[c], i && i.node && i._tMatrix && i.node.setAttribute("transform", "matrix(" + i._tMatrix.join() + ")");
//      _reqAnimFrame(fnTick)
//    };
//  _reqAnimFrame(fnTick);