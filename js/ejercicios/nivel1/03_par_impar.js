(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 3,
    title: "Par o Impar",
    level: 1,
    run: function () {
      var number = utils.promptNumber("Ingresa un numero entero:", {
        integer: true
      });
      if (number === null) {
        return;
      }

      if (number % 2 === 0) {
        console.log("El numero " + number + " es par.");
      } else {
        console.log("El numero " + number + " es impar.");
      }
    }
  });
})();
