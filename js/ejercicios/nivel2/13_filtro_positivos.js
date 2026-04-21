(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  function printValues(tag, values) {
    var content = values.length > 0 ? values.join(", ") : "(ninguno)";
    console.log("[" + tag + "] Valores no negativos: " + content);
    console.log("Cantidad registrada: " + values.length);
  }

  register({
    code: 13,
    title: "Filtro de Positivos",
    level: 2,
    runFor: function () {
      var values = [];

      for (;;) {
        var number = utils.promptNumber(
          "Ingresa un numero (negativo para detener):"
        );
        if (number === null) {
          return;
        }

        if (number < 0) {
          break;
        }
        values.push(number);
      }

      printValues("for", values);
    },
    runWhile: function () {
      var values = [];
      var keepAsking = true;

      while (keepAsking) {
        var number = utils.promptNumber(
          "Ingresa un numero (negativo para detener):"
        );
        if (number === null) {
          return;
        }

        if (number < 0) {
          keepAsking = false;
        } else {
          values.push(number);
        }
      }

      printValues("while", values);
    },
    runDoWhile: function () {
      var values = [];
      var number;

      do {
        number = utils.promptNumber("Ingresa un numero (negativo para detener):");
        if (number === null) {
          return;
        }

        if (number >= 0) {
          values.push(number);
        }
      } while (number >= 0);

      printValues("do-while", values);
    }
  });
})();
