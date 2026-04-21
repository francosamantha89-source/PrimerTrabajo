(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 4,
    title: "Dia de la Semana",
    level: 1,
    run: function () {
      var dayNumber = utils.promptNumber("Ingresa un numero del 1 al 7:", {
        integer: true
      });
      if (dayNumber === null) {
        return;
      }

      var dayName = "";
      switch (dayNumber) {
        case 1:
          dayName = "Lunes";
          break;
        case 2:
          dayName = "Martes";
          break;
        case 3:
          dayName = "Miercoles";
          break;
        case 4:
          dayName = "Jueves";
          break;
        case 5:
          dayName = "Viernes";
          break;
        case 6:
          dayName = "Sabado";
          break;
        case 7:
          dayName = "Domingo";
          break;
        default:
          console.log("Error: el numero debe estar entre 1 y 7.");
          return;
      }

      console.log("Dia seleccionado: " + dayName);
    }
  });
})();
