(function () {
  "use strict";

  var app = (window.ExercisesApp = window.ExercisesApp || {});
  var inputQueue = [];
  var consoleProxyInstalled = false;
  var nativeConsole = {
    log: console.log.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console)
  };

  function normalizeText(value) {
    if (typeof value !== "string") {
      return "";
    }
    return value.trim().toLowerCase();
  }

  function parseNumber(value) {
    if (typeof value !== "string") {
      return null;
    }

    var cleaned = value.trim().replace(",", ".");
    if (cleaned === "") {
      return null;
    }

    var parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : null;
  }

  function stringifyValue(value) {
    if (typeof value === "string") {
      return value;
    }

    if (value instanceof Error) {
      return value.message;
    }

    if (typeof value === "object" && value !== null) {
      try {
        return JSON.stringify(value, null, 2);
      } catch (error) {
        return String(value);
      }
    }

    return String(value);
  }

  function getOutputContainer() {
    var container = document.getElementById("exercise-output");
    if (container) {
      return container;
    }

    var fallback = document.createElement("section");
    fallback.id = "exercise-output";
    fallback.style.margin = "16px";
    fallback.style.padding = "12px";
    fallback.style.border = "1px solid #cbd5e1";
    fallback.style.borderRadius = "12px";
    fallback.style.background = "#ffffff";
    document.body.appendChild(fallback);
    return fallback;
  }

  function appendOutputLine(message, type) {
    var container = getOutputContainer();
    var line = document.createElement("div");
    line.className = "output-line output-" + type;
    line.textContent = message;
    container.appendChild(line);
  }

  function appendOutputTable(value) {
    var container = getOutputContainer();
    var block = document.createElement("pre");
    block.className = "output-table";
    block.textContent = stringifyValue(value);
    container.appendChild(block);
  }

  function clearOutput() {
    getOutputContainer().innerHTML = "";
  }

  function setStatusMessage(message) {
    var status = document.getElementById("menu-status");
    if (status) {
      status.textContent = message;
    }
  }

  function setInputQueue(values) {
    if (!Array.isArray(values)) {
      inputQueue = [];
      return;
    }

    inputQueue = values.map(function (value) {
      return value == null ? "" : String(value);
    });
  }

  function getRemainingInputs() {
    return inputQueue.length;
  }

  function nextInput(message) {
    if (inputQueue.length === 0) {
      console.error(
        "No hay suficientes datos de entrada. Falta valor para: " + message
      );
      return null;
    }

    var raw = inputQueue.shift();
    appendOutputLine("[Entrada] " + message + " -> " + raw, "input");

    if (normalizeText(raw) === "[cancel]") {
      return null;
    }

    return raw;
  }

  function emit(method, args) {
    if (method === "table") {
      appendOutputTable(args[0]);
      return;
    }

    var text = args.map(stringifyValue).join(" ");
    var type = method === "warn" ? "warn" : method === "error" ? "error" : "log";
    var prefix = method === "warn" ? "Aviso: " : method === "error" ? "Error: " : "";
    appendOutputLine(prefix + text, type);
  }

  function installConsoleProxy() {
    if (consoleProxyInstalled) {
      return;
    }

    console.log = function () {
      emit("log", Array.prototype.slice.call(arguments));
    };

    console.warn = function () {
      emit("warn", Array.prototype.slice.call(arguments));
    };

    console.error = function () {
      emit("error", Array.prototype.slice.call(arguments));
    };

    console.table = function () {
      emit("table", Array.prototype.slice.call(arguments));
    };

    consoleProxyInstalled = true;
    nativeConsole.log("Console proxy activado (salida principal en DOM).");
  }

  function promptText(message, options) {
    var settings = options || {};
    var allowEmpty = Boolean(settings.allowEmpty);

    while (true) {
      var input = nextInput(message);
      if (input === null) {
        console.log("Operacion cancelada por el usuario.");
        return null;
      }

      var value = input.trim();
      if (!allowEmpty && value === "") {
        console.log("Entrada vacia. Intenta nuevamente.");
        continue;
      }

      return value;
    }
  }

  function promptNumber(message, options) {
    var settings = options || {};
    var integer = Boolean(settings.integer);
    var min = Number.isFinite(settings.min) ? settings.min : -Infinity;
    var max = Number.isFinite(settings.max) ? settings.max : Infinity;

    while (true) {
      var input = nextInput(message);
      if (input === null) {
        console.log("Operacion cancelada por el usuario.");
        return null;
      }

      var value = parseNumber(input);
      if (value === null) {
        console.log("Debes ingresar un numero valido.");
        continue;
      }

      if (integer && !Number.isInteger(value)) {
        console.log("Debes ingresar un numero entero.");
        continue;
      }

      if (value < min) {
        console.log("El numero debe ser mayor o igual a " + min + ".");
        continue;
      }

      if (value > max) {
        console.log("El numero debe ser menor o igual a " + max + ".");
        continue;
      }

      return value;
    }
  }

  function formatCurrency(value, currency) {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: currency
    }).format(value);
  }

  app.utils = Object.freeze({
    normalizeText: normalizeText,
    parseNumber: parseNumber,
    promptText: promptText,
    promptNumber: promptNumber,
    formatCurrency: formatCurrency,
    installConsoleProxy: installConsoleProxy,
    clearOutput: clearOutput,
    setStatusMessage: setStatusMessage,
    setInputQueue: setInputQueue,
    getRemainingInputs: getRemainingInputs
  });
})();
