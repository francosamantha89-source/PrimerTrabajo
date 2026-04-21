(function () {
  "use strict";

  var app = window.ExercisesApp || {};
  if (!app.registry || !app.utils) {
    console.error("Faltan dependencias base para iniciar el menu.");
    return;
  }

  var registry = app.registry;
  var utils = app.utils;
  var selectedExercise = null;
  var selectedSchema = null;

  var INPUT_SCHEMAS = {
    1: {
      type: "fixed",
      helper: "Ingresa la edad del usuario.",
      fields: [{ label: "Edad", type: "integer", min: 0, max: 130, placeholder: "18" }]
    },
    2: {
      type: "fixed",
      helper: "Escribe el topping exacto.",
      fields: [{ label: "Topping", type: "text", placeholder: "Oreo / KitKat / Brownie" }]
    },
    3: {
      type: "fixed",
      helper: "Ingresa un numero entero.",
      fields: [{ label: "Numero", type: "integer", placeholder: "9" }]
    },
    4: {
      type: "fixed",
      helper: "Ingresa un numero entre 1 y 7.",
      fields: [{ label: "Numero del dia", type: "integer", min: 1, max: 7, placeholder: "4" }]
    },
    5: {
      type: "fixed",
      helper: "Ingresa dos numeros y una operacion.",
      fields: [
        { label: "Primer numero", type: "number", placeholder: "10" },
        { label: "Segundo numero", type: "number", placeholder: "5" },
        { label: "Operacion", type: "text", placeholder: "suma / resta / mult / div" }
      ]
    },
    6: {
      type: "fixed",
      helper: "Ingresa las 3 notas.",
      fields: [
        { label: "Nota 1", type: "number", placeholder: "7" },
        { label: "Nota 2", type: "number", placeholder: "6" },
        { label: "Nota 3", type: "number", placeholder: "8" }
      ]
    },
    7: {
      type: "fixed",
      helper: "Ingresa dolares y moneda destino.",
      fields: [
        { label: "Dolares", type: "number", min: 0, placeholder: "100" },
        { label: "Moneda destino", type: "text", placeholder: "Euros / Pesos / Soles" }
      ]
    },
    8: {
      type: "none",
      helper: "Este ejercicio no requiere datos de entrada."
    },
    9: {
      type: "fixed",
      helper: "Ingresa N (entero mayor o igual a 1).",
      fields: [{ label: "N", type: "integer", min: 1, placeholder: "5" }]
    },
    10: {
      type: "none",
      helper: "Este ejercicio no requiere datos de entrada."
    },
    11: {
      type: "list",
      helper: "Agrega intentos de clave en orden. Debes incluir SESAMO123 para terminar.",
      itemLabel: "Intento",
      itemType: "text",
      min: 1
    },
    12: {
      type: "fixed",
      helper: "Ingresa el numero base.",
      fields: [{ label: "Numero base", type: "number", placeholder: "3" }]
    },
    13: {
      type: "list",
      helper: "Agrega numeros en orden. El bucle termina cuando encuentre un negativo.",
      itemLabel: "Numero",
      itemType: "number",
      min: 1
    },
    14: {
      type: "fixed",
      helper: "Ingresa los 5 productos.",
      fields: [
        { label: "Producto 1", type: "text", placeholder: "Leche" },
        { label: "Producto 2", type: "text", placeholder: "Pan" },
        { label: "Producto 3", type: "text", placeholder: "Huevos" },
        { label: "Producto 4", type: "text", placeholder: "Arroz" },
        { label: "Producto 5", type: "text", placeholder: "Fruta" }
      ]
    },
    15: {
      type: "fixed",
      helper: "Ingresa el nombre a buscar.",
      fields: [{ label: "Nombre", type: "text", placeholder: "Maria" }]
    },
    16: {
      type: "fixed",
      helper: "Ingresa el nuevo año del auto.",
      fields: [{ label: "Nuevo año", type: "integer", min: 1886, placeholder: "2026" }]
    },
    17: {
      type: "fixed",
      helper: "Ingresa datos de 3 estudiantes (nombre y nota).",
      fields: [
        { label: "Nombre estudiante 1", type: "text", placeholder: "Ana" },
        { label: "Nota estudiante 1", type: "number", placeholder: "7.5" },
        { label: "Nombre estudiante 2", type: "text", placeholder: "Luis" },
        { label: "Nota estudiante 2", type: "number", placeholder: "8.2" },
        { label: "Nombre estudiante 3", type: "text", placeholder: "Sofia" },
        { label: "Nota estudiante 3", type: "number", placeholder: "6.9" }
      ]
    },
    18: {
      type: "list",
      helper: "Agrega precios en orden y finaliza con 0.",
      itemLabel: "Precio",
      itemType: "number",
      min: 1
    },
    19: {
      type: "list",
      helper: "Agrega opciones del menu (1, 2, 3) en orden. Debe aparecer 3 para salir.",
      itemLabel: "Opcion",
      itemType: "text",
      min: 1
    },
    20: {
      type: "fixed",
      helper: "Ingresa el nuevo valor y la posicion.",
      fields: [
        { label: "Nuevo numero", type: "number", placeholder: "99" },
        { label: "Posicion (0 a 4)", type: "integer", min: 0, max: 4, placeholder: "2" }
      ]
    }
  };

  function getElement(id) {
    return document.getElementById(id);
  }

  function getSchemaForExercise(code) {
    return INPUT_SCHEMAS[code] || { type: "none", helper: "Sin datos de entrada." };
  }

  function createMenuButton(exercise) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "menu-btn";
    button.dataset.code = String(exercise.code);
    button.textContent = exercise.code + ". " + exercise.title;
    button.addEventListener("click", function () {
      selectExercise(exercise.code);
    });
    return button;
  }

  function renderMenu(exercises) {
    var target = getElement("menu-list");
    if (!target) {
      return;
    }

    target.innerHTML = "";

    [1, 2, 3].forEach(function (level) {
      var levelExercises = exercises.filter(function (exercise) {
        return exercise.level === level;
      });

      if (levelExercises.length === 0) {
        return;
      }

      var card = document.createElement("div");
      card.className = "menu-level";

      var title = document.createElement("h3");
      title.textContent = "Nivel " + level;
      card.appendChild(title);

      levelExercises.forEach(function (exercise) {
        card.appendChild(createMenuButton(exercise));
      });

      target.appendChild(card);
    });
  }

  function updateMenuSelectionUI() {
    var buttons = document.querySelectorAll(".menu-btn");
    buttons.forEach(function (button) {
      var isActive =
        selectedExercise && Number(button.dataset.code) === selectedExercise.code;
      if (isActive) {
        button.classList.add("is-active");
      } else {
        button.classList.remove("is-active");
      }
    });
  }

  function createFixedField(field, index) {
    var row = document.createElement("div");
    row.className = "form-row";

    var label = document.createElement("label");
    label.className = "field-label";
    label.textContent = field.label;
    label.setAttribute("for", "fixed-field-" + index);

    var input = document.createElement("input");
    input.type = "text";
    input.id = "fixed-field-" + index;
    input.className = "field-input fixed-input";
    input.dataset.fieldIndex = String(index);
    input.placeholder = field.placeholder || "";

    row.appendChild(label);
    row.appendChild(input);
    return row;
  }

  function refreshListRowLabels() {
    if (!selectedSchema || selectedSchema.type !== "list") {
      return;
    }

    var rows = document.querySelectorAll(".list-row");
    rows.forEach(function (row, index) {
      var label = row.querySelector(".field-label");
      var input = row.querySelector(".field-input");
      var number = index + 1;

      if (label) {
        label.textContent = (selectedSchema.itemLabel || "Dato") + " " + number;
      }

      if (input) {
        input.placeholder = (selectedSchema.itemLabel || "Dato") + " " + number;
      }
    });
  }

  function createListRow(initialValue) {
    var row = document.createElement("div");
    row.className = "form-row list-row";

    var label = document.createElement("label");
    label.className = "field-label";

    var input = document.createElement("input");
    input.type = "text";
    input.className = "field-input list-input";
    input.value = initialValue || "";

    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "row-remove-btn";
    removeButton.textContent = "Quitar";
    removeButton.addEventListener("click", function () {
      var rows = document.querySelectorAll(".list-row");
      if (rows.length <= 1) {
        input.value = "";
        input.focus();
        return;
      }

      row.remove();
      refreshListRowLabels();
    });

    row.appendChild(label);
    row.appendChild(input);
    row.appendChild(removeButton);
    return row;
  }

  function renderInputFields() {
    var wrapper = getElement("input-fields-wrapper");
    var listControls = getElement("list-controls");
    var addRowButton = getElement("add-input-row-btn");

    if (!wrapper) {
      return;
    }

    wrapper.innerHTML = "";

    if (listControls) {
      listControls.style.display = "none";
    }

    if (!selectedSchema || selectedSchema.type === "none") {
      var note = document.createElement("p");
      note.className = "input-note";
      note.textContent = "Este ejercicio no requiere datos de entrada.";
      wrapper.appendChild(note);
      return;
    }

    if (selectedSchema.type === "fixed") {
      selectedSchema.fields.forEach(function (field, index) {
        wrapper.appendChild(createFixedField(field, index));
      });
      return;
    }

    if (selectedSchema.type === "list") {
      if (listControls) {
        listControls.style.display = "block";
      }

      var initialRows = Math.max(selectedSchema.min || 1, 1);
      for (var i = 0; i < initialRows; i += 1) {
        wrapper.appendChild(createListRow(""));
      }

      refreshListRowLabels();

      if (addRowButton) {
        addRowButton.onclick = function () {
          wrapper.appendChild(createListRow(""));
          refreshListRowLabels();
        };
      }
    }
  }

  function selectExercise(code) {
    var exercise = registry.getByCode(code);
    if (!exercise) {
      return;
    }

    selectedExercise = exercise;
    selectedSchema = getSchemaForExercise(exercise.code);
    updateMenuSelectionUI();

    var title = getElement("selected-exercise-title");
    var guide = getElement("input-guide");
    var variantWrap = getElement("variant-wrap");

    if (title) {
      title.textContent = "Ejercicio " + exercise.code + ": " + exercise.title;
    }

    if (guide) {
      guide.textContent = selectedSchema.helper || "Ingresa los datos requeridos.";
    }

    if (variantWrap) {
      variantWrap.style.display = exercise.level === 2 ? "block" : "none";
    }

    renderInputFields();
    utils.setStatusMessage(
      "Seleccionado: Ejercicio " + exercise.code + ". Completa los campos y pulsa Ejecutar."
    );
  }

  function validateValueByType(value, type, min, max) {
    var trimmed = value.trim();
    if (trimmed === "") {
      return "Este campo es obligatorio.";
    }

    if (type === "text") {
      return null;
    }

    var parsed = utils.parseNumber(trimmed);
    if (parsed === null) {
      return "Debe ser un numero valido.";
    }

    if (type === "integer" && !Number.isInteger(parsed)) {
      return "Debe ser un numero entero.";
    }

    if (Number.isFinite(min) && parsed < min) {
      return "Debe ser mayor o igual a " + min + ".";
    }

    if (Number.isFinite(max) && parsed > max) {
      return "Debe ser menor o igual a " + max + ".";
    }

    return null;
  }

  function collectFixedInputs() {
    var values = [];
    var inputs = document.querySelectorAll(".fixed-input");

    for (var i = 0; i < inputs.length; i += 1) {
      var input = inputs[i];
      var field = selectedSchema.fields[i];
      var value = input.value;
      var error = validateValueByType(value, field.type, field.min, field.max);

      if (error) {
        utils.setStatusMessage(field.label + ": " + error);
        input.focus();
        return null;
      }

      values.push(value);
    }

    return values;
  }

  function collectListInputs() {
    var rows = document.querySelectorAll(".list-input");
    var values = [];

    for (var i = 0; i < rows.length; i += 1) {
      var rawValue = rows[i].value;
      var trimmed = rawValue.trim();
      if (trimmed === "") {
        continue;
      }

      var error = validateValueByType(
        rawValue,
        selectedSchema.itemType || "text",
        selectedSchema.minValue,
        selectedSchema.maxValue
      );

      if (error) {
        utils.setStatusMessage((selectedSchema.itemLabel || "Dato") + " " + (i + 1) + ": " + error);
        rows[i].focus();
        return null;
      }

      values.push(rawValue);
    }

    var minCount = selectedSchema.min || 1;
    if (values.length < minCount) {
      utils.setStatusMessage("Debes ingresar al menos " + minCount + " dato(s).");
      return null;
    }

    return values;
  }

  function collectInputs() {
    if (!selectedSchema || selectedSchema.type === "none") {
      return [];
    }

    if (selectedSchema.type === "fixed") {
      return collectFixedInputs();
    }

    if (selectedSchema.type === "list") {
      return collectListInputs();
    }

    return [];
  }

  function runSelectedExercise() {
    if (!selectedExercise) {
      utils.setStatusMessage("Selecciona un ejercicio.");
      return;
    }

    var inputs = collectInputs();
    if (inputs === null) {
      return;
    }

    utils.clearOutput();
    utils.setInputQueue(inputs);

    try {
      if (selectedExercise.level === 2) {
        var variantSelect = getElement("loop-variant");
        var variant = variantSelect ? variantSelect.value : "for";

        if (variant === "for") {
          selectedExercise.runFor();
        } else if (variant === "while") {
          selectedExercise.runWhile();
        } else {
          selectedExercise.runDoWhile();
        }
      } else {
        selectedExercise.run();
      }

      var remaining = utils.getRemainingInputs();
      if (remaining > 0) {
        console.warn(
          "Quedaron " + remaining + " dato(s) sin usar. Revisa la cantidad de campos."
        );
      }

      utils.setStatusMessage("Ejercicio ejecutado. Revisa el panel de resultados.");
    } catch (error) {
      console.error("Error al ejecutar:", error.message || error);
      utils.setStatusMessage("Ocurrio un error. Revisa el panel de resultados.");
    }
  }

  function clearCurrentInputs() {
    if (!selectedSchema) {
      return;
    }

    if (selectedSchema.type === "fixed") {
      var fixed = document.querySelectorAll(".fixed-input");
      fixed.forEach(function (input) {
        input.value = "";
      });
      return;
    }

    if (selectedSchema.type === "list") {
      renderInputFields();
    }
  }

  function attachActions() {
    var runButton = getElement("run-exercise-btn");
    var clearButton = getElement("clear-input-btn");

    if (runButton) {
      runButton.addEventListener("click", runSelectedExercise);
    }

    if (clearButton) {
      clearButton.addEventListener("click", clearCurrentInputs);
    }
  }

  function start() {
    var exercises = registry.list();
    if (exercises.length === 0) {
      utils.setStatusMessage("No hay ejercicios registrados.");
      return;
    }

    utils.installConsoleProxy();
    renderMenu(exercises);
    attachActions();
    selectExercise(exercises[0].code);

    app.config = Object.freeze({
      select: function (code) {
        selectExercise(code);
      },
      run: function () {
        runSelectedExercise();
      }
    });
  }

  app.menu = Object.freeze({
    start: start
  });
})();
