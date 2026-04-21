(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 5,
    title: "Calculadora Basica",
    level: 1,
    run: function () {
      var first = utils.promptNumber("Ingresa el primer numero:");
      if (first === null) {
        return;
      }

      var second = utils.promptNumber("Ingresa el segundo numero:");
      if (second === null) {
        return;
      }

      var operationInput = utils.promptText(
        "Ingresa operacion: suma, resta, mult o div"
      );
      if (operationInput === null) {
        return;
      }

      var operation = utils
        .normalizeText(operationInput)
        .replace(/\s+/g, "");
      var result;

      switch (operation) {
        case "suma":
        case "+":
          result = first + second;
          break;
        case "resta":
        case "-":
          result = first - second;
          break;
        case "mult":
        case "*":
          result = first * second;
          break;
        case "div":
        case "/":
          if (second === 0) {
            console.log("No se puede dividir por cero.");
            return;
          }
          result = first / second;
          break;
        default:
          console.log("Operacion invalida. Usa suma, resta, mult o div.");
          return;
      }

      console.log("Resultado: " + result);
    }
  });
})();
