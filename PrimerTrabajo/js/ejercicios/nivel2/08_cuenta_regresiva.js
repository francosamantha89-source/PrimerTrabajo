(function () {
  "use strict";

  var app = window.ExercisesApp;
  var register = app.registry.register;

  function printResult(tag, values) {
    console.log("[" + tag + "] Cuenta regresiva: " + values.join(" "));
  }

  register({
    code: 8,
    title: "Cuenta Regresiva",
    level: 2,
    runFor: function () {
      var values = [];
      for (var i = 10; i >= 1; i -= 1) {
        values.push(i);
      }
      printResult("for", values);
    },
    runWhile: function () {
      var values = [];
      var i = 10;
      while (i >= 1) {
        values.push(i);
        i -= 1;
      }
      printResult("while", values);
    },
    runDoWhile: function () {
      var values = [];
      var i = 10;
      do {
        values.push(i);
        i -= 1;
      } while (i >= 1);
      printResult("do-while", values);
    }
  });
})();
