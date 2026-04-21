(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 15,
    title: "Buscador de Nombres",
    level: 3,
    run: function () {
      var names = ["Ana", "Luis", "Maria", "Pedro", "Sofia"];
      var targetInput = utils.promptText(
        "Ingresa un nombre para buscar (Ana, Luis, Maria, Pedro, Sofia):"
      );
      if (targetInput === null) {
        return;
      }

      var target = utils.normalizeText(targetInput);
      var found = false;

      for (var i = 0; i < names.length; i += 1) {
        if (utils.normalizeText(names[i]) === target) {
          found = true;
          break;
        }
      }

      console.log("Lista base: " + names.join(", "));
      if (found) {
        console.log("El nombre SI existe en la lista.");
      } else {
        console.log("El nombre NO existe en la lista.");
      }
    }
  });
})();
