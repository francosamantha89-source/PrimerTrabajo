(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;

  function printMultiples(tag, values) {
    console.log("[" + tag + "] Multiplos de 5 entre 1 y 50: " + values.join(", "));
  }

  register({
    code: 10,
    title: "Buscador de Multiplos",
    level: 2,
    runFor: function () {
      var values = [];
      for (var i = 1; i <= 50; i += 1) {
        if (i % 5 === 0) {
          values.push(i);
        }
      }
      printMultiples("for", values);
    },
    runWhile: function () {
      var values = [];
      var i = 1;
      while (i <= 50) {
        if (i % 5 === 0) {
          values.push(i);
        }
        i += 1;
      }
      printMultiples("while", values);
    },
    runDoWhile: function () {
      var values = [];
      var i = 1;
      do {
        if (i % 5 === 0) {
          values.push(i);
        }
        i += 1;
      } while (i <= 50);
      printMultiples("do-while", values);
    }
  });
})();
