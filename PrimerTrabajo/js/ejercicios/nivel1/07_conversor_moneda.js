(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;
  var utils = app.utils;

  register({
    code: 7,
    title: "Conversor de Moneda",
    level: 1,
    run: function () {
      var dollars = utils.promptNumber("Ingresa el valor en dolares:", {
        min: 0
      });
      if (dollars === null) {
        return;
      }

      var currencyInput = utils.promptText(
        "Convertir a: Euros, Pesos o Soles"
      );
      if (currencyInput === null) {
        return;
      }

      var currency = utils
        .normalizeText(currencyInput)
        .replace(/\s+/g, "");
      var rate = 0;
      var targetLabel = "";
      var targetCode = "";

      switch (currency) {
        case "euros":
        case "euro":
        case "eur":
          rate = 0.92;
          targetLabel = "Euros";
          targetCode = "EUR";
          break;
        case "pesos":
        case "peso":
        case "cop":
          rate = 3900;
          targetLabel = "Pesos (COP)";
          targetCode = "COP";
          break;
        case "soles":
        case "sol":
        case "pen":
          rate = 3.75;
          targetLabel = "Soles";
          targetCode = "PEN";
          break;
        default:
          console.log("Moneda invalida. Elige Euros, Pesos o Soles.");
          return;
      }

      var converted = dollars * rate;
      console.log("USD ingresados: " + utils.formatCurrency(dollars, "USD"));
      console.log("Moneda destino: " + targetLabel);
      console.log("Tasa usada: " + rate);
      console.log("Resultado: " + utils.formatCurrency(converted, targetCode));
    }
  });
})();
