(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 17,
    title: "Lista de Estudiantes",
    level: 3,
    run: function () {
      var students = [];

      for (var i = 1; i <= 3; i += 1) {
        var name = utils.promptText("Nombre del estudiante #" + i + ":");
        if (name === null) {
          return;
        }

        var grade = utils.promptNumber("Nota de " + name + ":");
        if (grade === null) {
          return;
        }

        students.push({
          nombre: name,
          nota: grade
        });
      }

      console.log("Estudiantes registrados:");
      console.table(students);
    }
  });
})();
