(function () {
  "use strict";

  var app = (window.ExercisesApp = window.ExercisesApp || {});
  var exercises = new Map();

  function validateExercise(exercise) {
    if (!exercise || typeof exercise !== "object") {
      throw new Error("El ejercicio debe ser un objeto.");
    }

    if (!Number.isInteger(exercise.code)) {
      throw new Error("El campo 'code' debe ser un numero entero.");
    }

    if (![1, 2, 3].includes(exercise.level)) {
      throw new Error("El campo 'level' debe ser 1, 2 o 3.");
    }

    if (typeof exercise.title !== "string" || exercise.title.trim() === "") {
      throw new Error("El campo 'title' es obligatorio.");
    }

    if (exercise.level === 2) {
      if (
        typeof exercise.runFor !== "function" ||
        typeof exercise.runWhile !== "function" ||
        typeof exercise.runDoWhile !== "function"
      ) {
        throw new Error(
          "Los ejercicios de nivel 2 deben definir runFor, runWhile y runDoWhile."
        );
      }
      return;
    }

    if (typeof exercise.run !== "function") {
      throw new Error("El ejercicio debe definir una funcion run.");
    }
  }

  function register(exercise) {
    validateExercise(exercise);

    if (exercises.has(exercise.code)) {
      console.warn(
        "El codigo " + exercise.code + " ya existia. Se reemplazara el ejercicio."
      );
    }

    exercises.set(exercise.code, exercise);
  }

  function getByCode(code) {
    return exercises.get(code);
  }

  function list() {
    return Array.from(exercises.values()).sort(function (a, b) {
      return a.code - b.code;
    });
  }

  app.registry = Object.freeze({
    register: register,
    getByCode: getByCode,
    list: list
  });
})();
