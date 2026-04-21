(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 19,
    title: "El Menu Infinito",
    level: 3,
    run: function () {
      var option;

      do {
        option = utils.promptText(
          "Menu:\n1. Saludar\n2. Despedirse\n3. Salir"
        );

        if (option === null) {
          return;
        }

        switch (option.trim()) {
          case "1":
            console.log("Hola! Que gusto saludarte.");
            break;
          case "2":
            console.log("Hasta luego! Nos vemos pronto.");
            break;
          case "3":
            console.log("Saliendo del menu infinito.");
            break;
          default:
            console.log("Opcion invalida. Elige 1, 2 o 3.");
        }
      } while (option.trim() !== "3");
    }
  });
})();
