(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 20,
    title: "Reemplazo en Array",
    level: 3,
    run: function () {
      var numbers = [10, 20, 30, 40, 50];
      var before = numbers.slice();

      var newValue = utils.promptNumber("Ingresa el nuevo numero:");
      if (newValue === null) {
        return;
      }

      var position = utils.promptNumber("Ingresa la posicion (0 a 4):", {
        integer: true,
        min: 0,
        max: 4
      });
      if (position === null) {
        return;
      }

      numbers[position] = newValue;

      console.log("Array inicial: " + before.join(", "));
      console.log("Array final:   " + numbers.join(", "));
    }
  });
})();
