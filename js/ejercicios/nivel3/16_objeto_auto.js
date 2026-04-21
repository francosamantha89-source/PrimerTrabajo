(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 16,
    title: "Objeto Auto",
    level: 3,
    run: function () {
      var car = {
        marca: "Toyota",
        modelo: "Corolla",
        anio: 2020
      };

      console.log("Auto inicial:", car);

      var newYear = utils.promptNumber(
        "Ingresa el nuevo anio del auto:",
        {
          integer: true,
          min: 1886
        }
      );
      if (newYear === null) {
        return;
      }

      car.anio = newYear;
      console.log("Auto actualizado:", car);
    }
  });
})();
