(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  function askLimit() {
    return utils.promptNumber("Ingresa N (entero mayor o igual a 1):", {
      integer: true,
      min: 1
    });
  }

  register({
    code: 9,
    title: "Suma Acumulativa",
    level: 2,
    runFor: function () {
      var n = askLimit();
      if (n === null) {
        return;
      }

      var sum = 0;
      for (var i = 1; i <= n; i += 1) {
        sum += i;
      }

      console.log("[for] Suma de 1 a " + n + " = " + sum);
    },
    runWhile: function () {
      var n = askLimit();
      if (n === null) {
        return;
      }

      var sum = 0;
      var i = 1;
      while (i <= n) {
        sum += i;
        i += 1;
      }

      console.log("[while] Suma de 1 a " + n + " = " + sum);
    },
    runDoWhile: function () {
      var n = askLimit();
      if (n === null) {
        return;
      }

      var sum = 0;
      var i = 1;
      do {
        sum += i;
        i += 1;
      } while (i <= n);

      console.log("[do-while] Suma de 1 a " + n + " = " + sum);
    }
  });
})();
