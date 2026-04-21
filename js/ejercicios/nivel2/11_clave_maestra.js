(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;
  var SECRET = "SESAMO123";

  register({
    code: 11,
    title: "La Clave Maestra",
    level: 2,
    runFor: function () {
      var attempts = 0;

      for (;;) {
        var input = utils.promptText("Ingresa la clave maestra:");
        if (input === null) {
          return;
        }

        attempts += 1;
        if (input === SECRET) {
          console.log("[for] Clave correcta. Intentos: " + attempts);
          break;
        }

        console.log("Clave incorrecta. Intenta nuevamente.");
      }
    },
    runWhile: function () {
      var attempts = 0;
      var isCorrect = false;

      while (!isCorrect) {
        var input = utils.promptText("Ingresa la clave maestra:");
        if (input === null) {
          return;
        }

        attempts += 1;
        if (input === SECRET) {
          isCorrect = true;
          console.log("[while] Clave correcta. Intentos: " + attempts);
        } else {
          console.log("Clave incorrecta. Intenta nuevamente.");
        }
      }
    },
    runDoWhile: function () {
      var attempts = 0;
      var input = "";

      do {
        input = utils.promptText("Ingresa la clave maestra:");
        if (input === null) {
          return;
        }

        attempts += 1;
        if (input !== SECRET) {
          console.log("Clave incorrecta. Intenta nuevamente.");
        }
      } while (input !== SECRET);

      console.log("[do-while] Clave correcta. Intentos: " + attempts);
    }
  });
})();
