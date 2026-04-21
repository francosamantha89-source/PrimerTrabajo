(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 18,
    title: "Carrito con Descuento",
    level: 3,
    run: function () {
      var prices = [];
      var total = 0;

      while (true) {
        var price = utils.promptNumber(
          "Ingresa el precio del producto (0 para terminar):",
          { min: 0 }
        );
        if (price === null) {
          return;
        }

        if (price === 0) {
          break;
        }

        prices.push(price);
        total += price;
      }

      if (prices.length === 0) {
        console.log("No se registraron productos.");
        return;
      }

      var discount = 0;
      var finalTotal = total;
      if (total > 100) {
        discount = total * 0.1;
        finalTotal = total - discount;
      }

      console.log("Precios registrados: " + prices.join(", "));
      console.log("Subtotal: " + utils.formatCurrency(total, "USD"));
      console.log("Descuento aplicado: " + utils.formatCurrency(discount, "USD"));
      console.log("Total final: " + utils.formatCurrency(finalTotal, "USD"));
    }
  });
})();
