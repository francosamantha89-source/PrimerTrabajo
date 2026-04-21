(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 2,
    title: "Calculadora de Helados",
    level: 1,
    run: function () {
      var basePrice = 5;
      var toppingInput = utils.promptText(
        "Elige topping (Oreo, KitKat o Brownie):"
      );
      if (toppingInput === null) {
        return;
      }

      var topping = utils
        .normalizeText(toppingInput)
        .replace(/\s+/g, "");
      var extraCost = 0;
      var toppingName = "";

      switch (topping) {
        case "oreo":
          extraCost = 2;
          toppingName = "Oreo";
          break;
        case "kitkat":
          extraCost = 3;
          toppingName = "KitKat";
          break;
        case "brownie":
          extraCost = 4;
          toppingName = "Brownie";
          break;
        default:
          console.log("Topping invalido. Debe ser Oreo, KitKat o Brownie.");
          return;
      }

      var finalPrice = basePrice + extraCost;
      console.log("Helado base: " + utils.formatCurrency(basePrice, "USD"));
      console.log("Topping elegido: " + toppingName);
      console.log("Precio final: " + utils.formatCurrency(finalPrice, "USD"));
    }
  });
})();
