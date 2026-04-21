(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 1,
    title: "El Validador de Edad",
    level: 1,
    run: function () {
      var age = utils.promptNumber("Ingresa tu edad:", {
        integer: true,
        min: 0,
        max: 130
      });
      if (age === null) {
        return;
      }

      var resultMessage = "";
      if (age < 18) {
        resultMessage = "Acceso denegado";
      } else {
        resultMessage = "Bienvenido";
      }

      window.alert(resultMessage);
    }
  });
})();
