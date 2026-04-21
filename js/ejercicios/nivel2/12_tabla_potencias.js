(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  function askBase() {
    return utils.promptNumber("Ingresa un numero para calcular 5 potencias:");
  }

  function printPowers(tag, lines) {
    console.log("[" + tag + "] Tabla de potencias:");
    lines.forEach(function (line) {
      console.log(line);
    });
  }

  register({
    code: 12,
    title: "Tabla de Potencias",
    level: 2,
    runFor: function () {
      var base = askBase();
      if (base === null) {
        return;
      }

      var lines = [];
      for (var exp = 1; exp <= 5; exp += 1) {
        lines.push(base + "^" + exp + " = " + Math.pow(base, exp));
      }

      printPowers("for", lines);
    },
    runWhile: function () {
      var base = askBase();
      if (base === null) {
        return;
      }

      var lines = [];
      var exp = 1;
      while (exp <= 5) {
        lines.push(base + "^" + exp + " = " + Math.pow(base, exp));
        exp += 1;
      }

      printPowers("while", lines);
    },
    runDoWhile: function () {
      var base = askBase();
      if (base === null) {
        return;
      }

      var lines = [];
      var exp = 1;
      do {
        lines.push(base + "^" + exp + " = " + Math.pow(base, exp));
        exp += 1;
      } while (exp <= 5);

      printPowers("do-while", lines);
    }
  });
})();
