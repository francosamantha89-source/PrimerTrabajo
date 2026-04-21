(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 6,
    title: "Aprobado o Reprobado",
    level: 1,
    run: function () {
      var note1 = utils.promptNumber("Ingresa la nota 1:");
      if (note1 === null) {
        return;
      }

      var note2 = utils.promptNumber("Ingresa la nota 2:");
      if (note2 === null) {
        return;
      }

      var note3 = utils.promptNumber("Ingresa la nota 3:");
      if (note3 === null) {
        return;
      }

      var average = (note1 + note2 + note3) / 3;
      console.log("Promedio: " + average.toFixed(2));

      if (average >= 6) {
        console.log("Aprobado");
      } else {
        console.log("Reprobado");
      }
    }
  });
})();
