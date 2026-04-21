(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 14,
    title: "El Array de Compras",
    level: 3,
    run: function () {
      var products = [];

      for (var i = 1; i <= 5; i += 1) {
        var product = utils.promptText("Ingresa el producto #" + i + ":");
        if (product === null) {
          return;
        }
        products.push(product);
      }

      console.log("Lista final de compras:");
      products.forEach(function (product, index) {
        console.log(index + 1 + ". " + product);
      });
    }
  });
})();
