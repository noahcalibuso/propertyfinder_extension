/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/popup-controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/popup-controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_investment_assumptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/investment-assumptions.js */ "./src/models/investment-assumptions.js");
/* harmony import */ var _services_storage_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage-service.js */ "./src/services/storage-service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileoverview Controller for the extension popup.
 */




/**
 * Controller for the extension popup.
 */
var PopupController = /*#__PURE__*/function () {
  /**
   * Create a new PopupController.
   */
  function PopupController() {
    _classCallCheck(this, PopupController);
    this.storage = new _services_storage_service_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.assumptions = null;
    this.statusElement = null;
    this.saveButton = null;

    // Bind methods to maintain context
    this.handleSave = this.handleSave.bind(this);
    this.showStatus = this.showStatus.bind(this);
  }

  /**
   * Initialize the popup.
   * @return {Promise<void>}
   */
  return _createClass(PopupController, [{
    key: "initialize",
    value: (function () {
      var _initialize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.storage.loadAssumptions();
            case 2:
              this.assumptions = _context.sent;
              // Set up UI elements
              this.setupUI();

              // Populate form with current values
              this.populateForm();

              // Set up event listeners
              this.setupEventListeners();
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }()
    /**
     * Set up UI element references.
     */
    )
  }, {
    key: "setupUI",
    value: function setupUI() {
      this.saveButton = document.getElementById('save');
      this.statusElement = document.getElementById('status');
    }

    /**
     * Populate form fields with current assumption values.
     */
  }, {
    key: "populateForm",
    value: function populateForm() {
      // Populate mortgage assumption fields
      document.getElementById('interestRate').value = this.assumptions.interestRate;
      document.getElementById('loanTerm').value = this.assumptions.loanTerm;
      document.getElementById('downPayment').value = this.assumptions.downPayment;
      document.getElementById('closingCosts').value = this.assumptions.closingCosts;

      // Populate operating expense assumption fields
      document.getElementById('propertyTaxRate').value = this.assumptions.propertyTaxRate;
      document.getElementById('insuranceRate').value = this.assumptions.insuranceRate;
      document.getElementById('maintenanceRate').value = this.assumptions.maintenanceRate;
      document.getElementById('propertyManagementRate').value = this.assumptions.propertyManagementRate;
      document.getElementById('vacancyRate').value = this.assumptions.vacancyRate;
    }

    /**
     * Set up event listeners.
     */
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;
      // Add save button click handler
      if (this.saveButton) {
        this.saveButton.addEventListener('click', this.handleSave);
      }

      // Add input validation handlers
      var numberInputs = document.querySelectorAll('input[type="number"]');
      numberInputs.forEach(function (input) {
        input.addEventListener('input', _this.validateNumberInput);
      });
    }

    /**
     * Validate number input to ensure it's within min/max bounds.
     * @param {Event} event - The input event.
     */
  }, {
    key: "validateNumberInput",
    value: function validateNumberInput(event) {
      var input = event.target;
      var value = parseFloat(input.value);
      var min = parseFloat(input.min) || 0;
      var max = parseFloat(input.max) || Infinity;
      if (value < min) {
        input.value = min;
      } else if (value > max) {
        input.value = max;
      }
    }

    /**
     * Handle save button click.
     */
  }, {
    key: "handleSave",
    value: (function () {
      var _handleSave = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var options;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // Get values from form
              options = {
                // Mortgage assumptions
                interestRate: parseFloat(document.getElementById('interestRate').value),
                loanTerm: parseInt(document.getElementById('loanTerm').value, 10),
                downPayment: parseFloat(document.getElementById('downPayment').value),
                closingCosts: parseFloat(document.getElementById('closingCosts').value),
                // Operating expense assumptions
                propertyTaxRate: parseFloat(document.getElementById('propertyTaxRate').value),
                insuranceRate: parseFloat(document.getElementById('insuranceRate').value),
                maintenanceRate: parseFloat(document.getElementById('maintenanceRate').value),
                propertyManagementRate: parseFloat(document.getElementById('propertyManagementRate').value),
                vacancyRate: parseFloat(document.getElementById('vacancyRate').value)
              }; // Update assumptions with new values
              this.assumptions.update(options);

              // Save to storage
              _context2.next = 5;
              return this.storage.saveAssumptions(this.assumptions);
            case 5:
              // Show success message
              this.showStatus('Settings saved!', 'success');

              // Notify content script to update analysis
              this.notifyTabsOfUpdate(options);
              _context2.next = 13;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.error('Error saving settings:', _context2.t0);
              this.showStatus('Error saving settings', 'error');
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 9]]);
      }));
      function handleSave() {
        return _handleSave.apply(this, arguments);
      }
      return handleSave;
    }()
    /**
     * Show status message to the user.
     * @param {string} message - The message to display.
     * @param {string} type - The type of message ('success' or 'error').
     */
    )
  }, {
    key: "showStatus",
    value: function showStatus(message, type) {
      var _this2 = this;
      if (!this.statusElement) return;
      this.statusElement.textContent = message;
      this.statusElement.className = 'status ' + type;
      this.statusElement.style.display = 'block';

      // Hide the message after a delay
      setTimeout(function () {
        _this2.statusElement.style.display = 'none';
      }, 2000);
    }

    /**
     * Notify active tabs about settings update.
     * @param {Object} options - The updated settings.
     */
  }, {
    key: "notifyTabsOfUpdate",
    value: function notifyTabsOfUpdate(options) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        var currentTab = tabs[0];
        if (currentTab && currentTab.url && currentTab.url.includes('zillow.com')) {
          chrome.tabs.sendMessage(currentTab.id, {
            action: 'settingsUpdated',
            options: options
          });
        }
      });
    }
  }]);
}(); // Initialize popup when DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  var popupController = new PopupController();
  popupController.initialize()["catch"](function (error) {
    console.error('Error initializing popup:', error);
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupController);

/***/ }),

/***/ "./src/models/investment-assumptions.js":
/*!**********************************************!*\
  !*** ./src/models/investment-assumptions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileoverview Model representing investment assumption settings.
 */
/**
 * Model representing investment assumption settings.
 */
var InvestmentAssumptions = /*#__PURE__*/function () {
  /**
   * Create a new InvestmentAssumptions instance.
   * @param {Object=} options - Investment assumption settings.
   */
  function InvestmentAssumptions() {
    var _options$interestRate, _options$loanTerm, _options$downPayment, _options$closingCosts, _options$propertyTaxR, _options$insuranceRat, _options$maintenanceR, _options$propertyMana, _options$vacancyRate;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, InvestmentAssumptions);
    var defaults = InvestmentAssumptions.defaults;

    // Mortgage assumptions
    this.interestRate = (_options$interestRate = options.interestRate) !== null && _options$interestRate !== void 0 ? _options$interestRate : defaults.interestRate;
    this.loanTerm = (_options$loanTerm = options.loanTerm) !== null && _options$loanTerm !== void 0 ? _options$loanTerm : defaults.loanTerm;
    this.downPayment = (_options$downPayment = options.downPayment) !== null && _options$downPayment !== void 0 ? _options$downPayment : defaults.downPayment;
    this.closingCosts = (_options$closingCosts = options.closingCosts) !== null && _options$closingCosts !== void 0 ? _options$closingCosts : defaults.closingCosts;

    // Operating expense assumptions
    this.propertyTaxRate = (_options$propertyTaxR = options.propertyTaxRate) !== null && _options$propertyTaxR !== void 0 ? _options$propertyTaxR : defaults.propertyTaxRate;
    this.insuranceRate = (_options$insuranceRat = options.insuranceRate) !== null && _options$insuranceRat !== void 0 ? _options$insuranceRat : defaults.insuranceRate;
    this.maintenanceRate = (_options$maintenanceR = options.maintenanceRate) !== null && _options$maintenanceR !== void 0 ? _options$maintenanceR : defaults.maintenanceRate;
    this.propertyManagementRate = (_options$propertyMana = options.propertyManagementRate) !== null && _options$propertyMana !== void 0 ? _options$propertyMana : defaults.propertyManagementRate;
    this.vacancyRate = (_options$vacancyRate = options.vacancyRate) !== null && _options$vacancyRate !== void 0 ? _options$vacancyRate : defaults.vacancyRate;

    // Validate all values
    this.validate();
  }

  /**
   * Validate all assumption values and set to defaults if invalid.
   */
  return _createClass(InvestmentAssumptions, [{
    key: "validate",
    value: function validate() {
      var defaults = InvestmentAssumptions.defaults;

      // Helper function to validate numeric values
      var validateNumber = function validateNumber(value, defaultValue) {
        var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.MAX_VALUE;
        var num = parseFloat(value);
        return !isNaN(num) && num >= min && num <= max ? num : defaultValue;
      };

      // Validate all properties
      this.interestRate = validateNumber(this.interestRate, defaults.interestRate, 0, 30);
      this.loanTerm = validateNumber(this.loanTerm, defaults.loanTerm, 1, 50);
      this.downPayment = validateNumber(this.downPayment, defaults.downPayment, 0, 100);
      this.closingCosts = validateNumber(this.closingCosts, defaults.closingCosts, 0, 20);
      this.propertyTaxRate = validateNumber(this.propertyTaxRate, defaults.propertyTaxRate, 0, 10);
      this.insuranceRate = validateNumber(this.insuranceRate, defaults.insuranceRate, 0, 5);
      this.maintenanceRate = validateNumber(this.maintenanceRate, defaults.maintenanceRate, 0, 15);
      this.propertyManagementRate = validateNumber(this.propertyManagementRate, defaults.propertyManagementRate, 0, 20);
      this.vacancyRate = validateNumber(this.vacancyRate, defaults.vacancyRate, 0, 50);
    }

    /**
     * Update assumptions with new values.
     * @param {Object} options - New assumption values.
     */
  }, {
    key: "update",
    value: function update(options) {
      if (options.interestRate !== undefined) this.interestRate = options.interestRate;
      if (options.loanTerm !== undefined) this.loanTerm = options.loanTerm;
      if (options.downPayment !== undefined) this.downPayment = options.downPayment;
      if (options.closingCosts !== undefined) this.closingCosts = options.closingCosts;
      if (options.propertyTaxRate !== undefined) this.propertyTaxRate = options.propertyTaxRate;
      if (options.insuranceRate !== undefined) this.insuranceRate = options.insuranceRate;
      if (options.maintenanceRate !== undefined) this.maintenanceRate = options.maintenanceRate;
      if (options.propertyManagementRate !== undefined) {
        this.propertyManagementRate = options.propertyManagementRate;
      }
      if (options.vacancyRate !== undefined) this.vacancyRate = options.vacancyRate;

      // Validate after updating
      this.validate();
    }

    /**
     * Convert to JSON object.
     * @return {Object} JSON representation.
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        interestRate: this.interestRate,
        loanTerm: this.loanTerm,
        downPayment: this.downPayment,
        closingCosts: this.closingCosts,
        propertyTaxRate: this.propertyTaxRate,
        insuranceRate: this.insuranceRate,
        maintenanceRate: this.maintenanceRate,
        propertyManagementRate: this.propertyManagementRate,
        vacancyRate: this.vacancyRate
      };
    }

    /**
     * Create InvestmentAssumptions from JSON.
     * @param {Object} json - JSON data.
     * @return {InvestmentAssumptions} New InvestmentAssumptions instance.
     */
  }], [{
    key: "defaults",
    get:
    /**
     * Default values for investment assumptions.
     * @return {Object} Default settings.
     */
    function get() {
      return {
        // Mortgage assumptions
        interestRate: 7.5,
        loanTerm: 30,
        downPayment: 20,
        closingCosts: 3,
        // Operating expense assumptions
        propertyTaxRate: 1.2,
        insuranceRate: 0.5,
        maintenanceRate: 1,
        propertyManagementRate: 10,
        vacancyRate: 5
      };
    }
  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      return new InvestmentAssumptions(json);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvestmentAssumptions);

/***/ }),

/***/ "./src/models/property.js":
/*!********************************!*\
  !*** ./src/models/property.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileoverview Property model representing a real estate property listing.
 */
/**
 * Property model representing a real estate property listing.
 */
var Property = /*#__PURE__*/function () {
  /**
   * Create a new Property instance.
   * @param {Object=} data - Property data.
   * @param {number=} data.price - Listing price.
   * @param {number=} data.rentEstimate - Monthly rent estimate.
   * @param {number=} data.repairCost - Estimated repair costs.
   * @param {number=} data.monthlyIncome - Monthly rental income.
   * @param {string=} data.address - Property address.
   * @param {string=} data.url - Property listing URL.
   */
  function Property() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Property);
    this.price = data.price || 0;
    this.rentEstimate = data.rentEstimate || 0;
    this.repairCost = data.repairCost || 0;
    this.monthlyIncome = data.monthlyIncome || this.rentEstimate || 0;
    this.address = data.address || '';
    this.url = data.url || '';
  }

  /**
   * Get the adjusted purchase price including repair costs.
   * @return {number} Adjusted price.
   */
  return _createClass(Property, [{
    key: "getAdjustedPrice",
    value: function getAdjustedPrice() {
      return this.price + this.repairCost;
    }

    /**
     * Get the annual rental income.
     * @return {number} Annual income.
     */
  }, {
    key: "getAnnualIncome",
    value: function getAnnualIncome() {
      return this.monthlyIncome * 12;
    }

    /**
     * Updates property data.
     * @param {Object} data - Updated property data.
     * @param {number=} data.price - Listing price.
     * @param {number=} data.repairCost - Estimated repair costs.
     * @param {number=} data.monthlyIncome - Monthly rental income.
     * @param {number=} data.rentEstimate - Monthly rent estimate.
     * @param {string=} data.address - Property address.
     * @param {string=} data.url - Property listing URL.
     */
  }, {
    key: "update",
    value: function update(data) {
      if (data.price !== undefined) this.price = data.price;
      if (data.repairCost !== undefined) this.repairCost = data.repairCost;
      if (data.monthlyIncome !== undefined) this.monthlyIncome = data.monthlyIncome;
      if (data.rentEstimate !== undefined && !data.monthlyIncome) {
        this.rentEstimate = data.rentEstimate;
        // Only update monthly income with rent estimate if not explicitly set
        if (this.monthlyIncome === 0) {
          this.monthlyIncome = data.rentEstimate;
        }
      }
      if (data.address !== undefined) this.address = data.address;
      if (data.url !== undefined) this.url = data.url;
    }

    /**
     * Converts the property to JSON.
     * @return {Object} JSON representation.
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        price: this.price,
        rentEstimate: this.rentEstimate,
        repairCost: this.repairCost,
        monthlyIncome: this.monthlyIncome,
        address: this.address,
        url: this.url
      };
    }

    /**
     * Create a Property from JSON data.
     * @param {Object} json - JSON data.
     * @return {Property} New Property instance.
     */
  }], [{
    key: "fromJSON",
    value: function fromJSON(json) {
      return new Property(json);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Property);

/***/ }),

/***/ "./src/services/storage-service.js":
/*!*****************************************!*\
  !*** ./src/services/storage-service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_investment_assumptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/investment-assumptions.js */ "./src/models/investment-assumptions.js");
/* harmony import */ var _models_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/property.js */ "./src/models/property.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileoverview Service for managing extension storage.
 */




/**
 * Service for managing extension storage.
 */
var StorageService = /*#__PURE__*/function () {
  /**
  * Create a new StorageService.
  */
  function StorageService() {
    _classCallCheck(this, StorageService);
    this.storageApi = chrome.storage.sync;
  }
  /**
  * Save investment assumptions to storage.
  * @param {InvestmentAssumptions} assumptions - The assumptions to save.
  * @return {Promise} Promise resolving when save is complete.
  */
  return _createClass(StorageService, [{
    key: "saveAssumptions",
    value: function saveAssumptions(assumptions) {
      return this.storageApi.set(assumptions.toJSON());
    }
    /**
    * Load investment assumptions from storage.
    * @return {Promise<InvestmentAssumptions>} Promise resolving to loaded assumptions.
    */
  }, {
    key: "loadAssumptions",
    value: (function () {
      var _loadAssumptions = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var defaults, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              defaults = _models_investment_assumptions_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaults;
              _context.next = 4;
              return this.storageApi.get(defaults);
            case 4:
              data = _context.sent;
              return _context.abrupt("return", new _models_investment_assumptions_js__WEBPACK_IMPORTED_MODULE_0__["default"](data));
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error('Error loading assumptions:', _context.t0);
              return _context.abrupt("return", new _models_investment_assumptions_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 8]]);
      }));
      function loadAssumptions() {
        return _loadAssumptions.apply(this, arguments);
      }
      return loadAssumptions;
    }()
    /**
    * Save property data to storage.
    * @param {Property} property - The property to save.
    * @param {string=} key - Storage key for the property.
    * @return {Promise} Promise resolving when save is complete.
    */
    )
  }, {
    key: "saveProperty",
    value: function saveProperty(property) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'currentProperty';
      return this.storageApi.set(_defineProperty({}, key, property.toJSON()));
    }
    /**
    * Load property data from storage.
    * @param {string=} key - Storage key for the property.
    * @return {Promise<?Property>} Promise resolving to loaded property.
    */
  }, {
    key: "loadProperty",
    value: (function () {
      var _loadProperty = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var key,
          data,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              key = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 'currentProperty';
              _context2.prev = 1;
              _context2.next = 4;
              return this.storageApi.get(key);
            case 4:
              data = _context2.sent;
              if (!data[key]) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", _models_property_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(data[key]));
            case 7:
              return _context2.abrupt("return", null);
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              console.error("Error loading property with key ".concat(key, ":"), _context2.t0);
              return _context2.abrupt("return", null);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[1, 10]]);
      }));
      function loadProperty() {
        return _loadProperty.apply(this, arguments);
      }
      return loadProperty;
    }()
    /**
    * Save data to storage with custom key.
    * @param {string} key - Storage key.
    * @param {*} value - Data to store.
    * @return {Promise} Promise resolving when save is complete.
    */
    )
  }, {
    key: "save",
    value: function save(key, value) {
      return this.storageApi.set(_defineProperty({}, key, value));
    }
    /**
    * Load data from storage with custom key.
    * @param {string} key - Storage key.
    * @param {*=} defaultValue - Default value if key doesn't exist.
    * @return {Promise<*>} Promise resolving to loaded data.
    */
  }, {
    key: "load",
    value: (function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(key) {
        var defaultValue,
          data,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              defaultValue = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
              _context3.prev = 1;
              _context3.next = 4;
              return this.storageApi.get(key);
            case 4:
              data = _context3.sent;
              return _context3.abrupt("return", data[key] !== undefined ? data[key] : defaultValue);
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.error("Error loading key ".concat(key, ":"), _context3.t0);
              return _context3.abrupt("return", defaultValue);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[1, 8]]);
      }));
      function load(_x) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
    /**
    * Remove data from storage.
    * @param {string|Array<string>} keys - Key(s) to remove.
    * @return {Promise} Promise resolving when removal is complete.
    */
    )
  }, {
    key: "remove",
    value: function remove(keys) {
      return this.storageApi.remove(keys);
    }
    /**
    * Clear all storage data.
    * @return {Promise} Promise resolving when clear is complete.
    */
  }, {
    key: "clear",
    value: function clear() {
      return this.storageApi.clear();
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageService);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_popup_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/popup-controller.js */ "./src/controllers/popup-controller.js");
/**
 * @fileoverview Entry point for the popup UI.
 */



// Initialize popup when DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  var popupController = new _controllers_popup_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  popupController.initialize()["catch"](function (error) {
    console.error('Error initializing popup:', error);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVpRTs7QUFFakU7QUFDQWtCLFFBQVEsQ0FBQ1ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsRCxJQUFNeUMsZUFBZSxHQUFHLElBQUl0RSx3RUFBZSxDQUFDLENBQUM7RUFDN0NzRSxlQUFlLENBQUN0RCxVQUFVLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQW1DLEtBQUssRUFBSTtJQUMxQ0QsT0FBTyxDQUFDQyxLQUFLLENBQUMsMkJBQTJCLEVBQUVBLEtBQUssQ0FBQztFQUNuRCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL2NvbnRyb2xsZXJzL3BvcHVwLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vLi9zcmMvbW9kZWxzL2ludmVzdG1lbnQtYXNzdW1wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vLi9zcmMvbW9kZWxzL3Byb3BlcnR5LmpzIiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS5qcyIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL3BvcHVwL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBDb250cm9sbGVyIGZvciB0aGUgZXh0ZW5zaW9uIHBvcHVwLlxuICovXG5cbmltcG9ydCBJbnZlc3RtZW50QXNzdW1wdGlvbnMgZnJvbSAnLi4vbW9kZWxzL2ludmVzdG1lbnQtYXNzdW1wdGlvbnMuanMnO1xuaW1wb3J0IFN0b3JhZ2VTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS5qcyc7XG5cbi8qKlxuICogQ29udHJvbGxlciBmb3IgdGhlIGV4dGVuc2lvbiBwb3B1cC5cbiAqL1xuY2xhc3MgUG9wdXBDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBQb3B1cENvbnRyb2xsZXIuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZVNlcnZpY2UoKTtcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gbnVsbDtcbiAgICB0aGlzLnN0YXR1c0VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuc2F2ZUJ1dHRvbiA9IG51bGw7XG4gICAgXG4gICAgLy8gQmluZCBtZXRob2RzIHRvIG1haW50YWluIGNvbnRleHRcbiAgICB0aGlzLmhhbmRsZVNhdmUgPSB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dTdGF0dXMgPSB0aGlzLnNob3dTdGF0dXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBwb3B1cC5cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgLy8gTG9hZCBjdXJyZW50IGFzc3VtcHRpb25zXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5sb2FkQXNzdW1wdGlvbnMoKTtcbiAgICBcbiAgICAvLyBTZXQgdXAgVUkgZWxlbWVudHNcbiAgICB0aGlzLnNldHVwVUkoKTtcbiAgICBcbiAgICAvLyBQb3B1bGF0ZSBmb3JtIHdpdGggY3VycmVudCB2YWx1ZXNcbiAgICB0aGlzLnBvcHVsYXRlRm9ybSgpO1xuICAgIFxuICAgIC8vIFNldCB1cCBldmVudCBsaXN0ZW5lcnNcbiAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgVUkgZWxlbWVudCByZWZlcmVuY2VzLlxuICAgKi9cbiAgc2V0dXBVSSgpIHtcbiAgICB0aGlzLnNhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZScpO1xuICAgIHRoaXMuc3RhdHVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZSBmb3JtIGZpZWxkcyB3aXRoIGN1cnJlbnQgYXNzdW1wdGlvbiB2YWx1ZXMuXG4gICAqL1xuICBwb3B1bGF0ZUZvcm0oKSB7XG4gICAgLy8gUG9wdWxhdGUgbW9ydGdhZ2UgYXNzdW1wdGlvbiBmaWVsZHNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50ZXJlc3RSYXRlJykudmFsdWUgPSB0aGlzLmFzc3VtcHRpb25zLmludGVyZXN0UmF0ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hblRlcm0nKS52YWx1ZSA9IHRoaXMuYXNzdW1wdGlvbnMubG9hblRlcm07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25QYXltZW50JykudmFsdWUgPSB0aGlzLmFzc3VtcHRpb25zLmRvd25QYXltZW50O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zaW5nQ29zdHMnKS52YWx1ZSA9IHRoaXMuYXNzdW1wdGlvbnMuY2xvc2luZ0Nvc3RzO1xuICAgIFxuICAgIC8vIFBvcHVsYXRlIG9wZXJhdGluZyBleHBlbnNlIGFzc3VtcHRpb24gZmllbGRzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnR5VGF4UmF0ZScpLnZhbHVlID0gdGhpcy5hc3N1bXB0aW9ucy5wcm9wZXJ0eVRheFJhdGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3VyYW5jZVJhdGUnKS52YWx1ZSA9IHRoaXMuYXNzdW1wdGlvbnMuaW5zdXJhbmNlUmF0ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnRlbmFuY2VSYXRlJykudmFsdWUgPSB0aGlzLmFzc3VtcHRpb25zLm1haW50ZW5hbmNlUmF0ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvcGVydHlNYW5hZ2VtZW50UmF0ZScpLnZhbHVlID0gXG4gICAgICAgIHRoaXMuYXNzdW1wdGlvbnMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFjYW5jeVJhdGUnKS52YWx1ZSA9IHRoaXMuYXNzdW1wdGlvbnMudmFjYW5jeVJhdGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIGV2ZW50IGxpc3RlbmVycy5cbiAgICovXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gQWRkIHNhdmUgYnV0dG9uIGNsaWNrIGhhbmRsZXJcbiAgICBpZiAodGhpcy5zYXZlQnV0dG9uKSB7XG4gICAgICB0aGlzLnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVNhdmUpO1xuICAgIH1cblxuICAgIC8vIEFkZCBpbnB1dCB2YWxpZGF0aW9uIGhhbmRsZXJzXG4gICAgY29uc3QgbnVtYmVySW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cIm51bWJlclwiXScpO1xuICAgIG51bWJlcklucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0ZU51bWJlcklucHV0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBudW1iZXIgaW5wdXQgdG8gZW5zdXJlIGl0J3Mgd2l0aGluIG1pbi9tYXggYm91bmRzLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBpbnB1dCBldmVudC5cbiAgICovXG4gIHZhbGlkYXRlTnVtYmVySW5wdXQoZXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoaW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IG1pbiA9IHBhcnNlRmxvYXQoaW5wdXQubWluKSB8fCAwO1xuICAgIGNvbnN0IG1heCA9IHBhcnNlRmxvYXQoaW5wdXQubWF4KSB8fCBJbmZpbml0eTtcbiAgICBcbiAgICBpZiAodmFsdWUgPCBtaW4pIHtcbiAgICAgIGlucHV0LnZhbHVlID0gbWluO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gbWF4O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgc2F2ZSBidXR0b24gY2xpY2suXG4gICAqL1xuICBhc3luYyBoYW5kbGVTYXZlKCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBHZXQgdmFsdWVzIGZyb20gZm9ybVxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgLy8gTW9ydGdhZ2UgYXNzdW1wdGlvbnNcbiAgICAgICAgaW50ZXJlc3RSYXRlOiBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRlcmVzdFJhdGUnKS52YWx1ZSksXG4gICAgICAgIGxvYW5UZXJtOiBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hblRlcm0nKS52YWx1ZSwgMTApLFxuICAgICAgICBkb3duUGF5bWVudDogcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93blBheW1lbnQnKS52YWx1ZSksXG4gICAgICAgIGNsb3NpbmdDb3N0czogcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2luZ0Nvc3RzJykudmFsdWUpLFxuICAgICAgICBcbiAgICAgICAgLy8gT3BlcmF0aW5nIGV4cGVuc2UgYXNzdW1wdGlvbnNcbiAgICAgICAgcHJvcGVydHlUYXhSYXRlOiBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9wZXJ0eVRheFJhdGUnKS52YWx1ZSksXG4gICAgICAgIGluc3VyYW5jZVJhdGU6IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3VyYW5jZVJhdGUnKS52YWx1ZSksXG4gICAgICAgIG1haW50ZW5hbmNlUmF0ZTogcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnRlbmFuY2VSYXRlJykudmFsdWUpLFxuICAgICAgICBwcm9wZXJ0eU1hbmFnZW1lbnRSYXRlOiBcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnR5TWFuYWdlbWVudFJhdGUnKS52YWx1ZSksXG4gICAgICAgIHZhY2FuY3lSYXRlOiBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWNhbmN5UmF0ZScpLnZhbHVlKSxcbiAgICAgIH07XG4gICAgICBcbiAgICAgIC8vIFVwZGF0ZSBhc3N1bXB0aW9ucyB3aXRoIG5ldyB2YWx1ZXNcbiAgICAgIHRoaXMuYXNzdW1wdGlvbnMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgXG4gICAgICAvLyBTYXZlIHRvIHN0b3JhZ2VcbiAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zYXZlQXNzdW1wdGlvbnModGhpcy5hc3N1bXB0aW9ucyk7XG4gICAgICBcbiAgICAgIC8vIFNob3cgc3VjY2VzcyBtZXNzYWdlXG4gICAgICB0aGlzLnNob3dTdGF0dXMoJ1NldHRpbmdzIHNhdmVkIScsICdzdWNjZXNzJyk7XG4gICAgICBcbiAgICAgIC8vIE5vdGlmeSBjb250ZW50IHNjcmlwdCB0byB1cGRhdGUgYW5hbHlzaXNcbiAgICAgIHRoaXMubm90aWZ5VGFic09mVXBkYXRlKG9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgc2V0dGluZ3M6JywgZXJyb3IpO1xuICAgICAgdGhpcy5zaG93U3RhdHVzKCdFcnJvciBzYXZpbmcgc2V0dGluZ3MnLCAnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBzdGF0dXMgbWVzc2FnZSB0byB0aGUgdXNlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0byBkaXNwbGF5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIG9mIG1lc3NhZ2UgKCdzdWNjZXNzJyBvciAnZXJyb3InKS5cbiAgICovXG4gIHNob3dTdGF0dXMobWVzc2FnZSwgdHlwZSkge1xuICAgIGlmICghdGhpcy5zdGF0dXNFbGVtZW50KSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5zdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YXR1c0VsZW1lbnQuY2xhc3NOYW1lID0gJ3N0YXR1cyAnICsgdHlwZTtcbiAgICB0aGlzLnN0YXR1c0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgXG4gICAgLy8gSGlkZSB0aGUgbWVzc2FnZSBhZnRlciBhIGRlbGF5XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXR1c0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3RpZnkgYWN0aXZlIHRhYnMgYWJvdXQgc2V0dGluZ3MgdXBkYXRlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSB1cGRhdGVkIHNldHRpbmdzLlxuICAgKi9cbiAgbm90aWZ5VGFic09mVXBkYXRlKG9wdGlvbnMpIHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgKHRhYnMpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJzWzBdO1xuICAgICAgaWYgKGN1cnJlbnRUYWIgJiYgY3VycmVudFRhYi51cmwgJiYgY3VycmVudFRhYi51cmwuaW5jbHVkZXMoJ3ppbGxvdy5jb20nKSkge1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShjdXJyZW50VGFiLmlkLCB7XG4gICAgICAgICAgYWN0aW9uOiAnc2V0dGluZ3NVcGRhdGVkJyxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8vIEluaXRpYWxpemUgcG9wdXAgd2hlbiBET00gY29udGVudCBpcyBsb2FkZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHBvcHVwQ29udHJvbGxlciA9IG5ldyBQb3B1cENvbnRyb2xsZXIoKTtcbiAgcG9wdXBDb250cm9sbGVyLmluaXRpYWxpemUoKS5jYXRjaChlcnJvciA9PiB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIHBvcHVwOicsIGVycm9yKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBDb250cm9sbGVyOyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBNb2RlbCByZXByZXNlbnRpbmcgaW52ZXN0bWVudCBhc3N1bXB0aW9uIHNldHRpbmdzLlxuICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGludmVzdG1lbnQgYXNzdW1wdGlvbiBzZXR0aW5ncy5cbiAqL1xuY2xhc3MgSW52ZXN0bWVudEFzc3VtcHRpb25zIHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBpbnZlc3RtZW50IGFzc3VtcHRpb25zLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IERlZmF1bHQgc2V0dGluZ3MuXG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBNb3J0Z2FnZSBhc3N1bXB0aW9uc1xuICAgICAgaW50ZXJlc3RSYXRlOiA3LjUsXG4gICAgICBsb2FuVGVybTogMzAsXG4gICAgICBkb3duUGF5bWVudDogMjAsXG4gICAgICBjbG9zaW5nQ29zdHM6IDMsXG4gICAgICBcbiAgICAgIC8vIE9wZXJhdGluZyBleHBlbnNlIGFzc3VtcHRpb25zXG4gICAgICBwcm9wZXJ0eVRheFJhdGU6IDEuMixcbiAgICAgIGluc3VyYW5jZVJhdGU6IDAuNSxcbiAgICAgIG1haW50ZW5hbmNlUmF0ZTogMSxcbiAgICAgIHByb3BlcnR5TWFuYWdlbWVudFJhdGU6IDEwLFxuICAgICAgdmFjYW5jeVJhdGU6IDVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBJbnZlc3RtZW50QXNzdW1wdGlvbnMgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucyAtIEludmVzdG1lbnQgYXNzdW1wdGlvbiBzZXR0aW5ncy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gSW52ZXN0bWVudEFzc3VtcHRpb25zLmRlZmF1bHRzO1xuICAgIFxuICAgIC8vIE1vcnRnYWdlIGFzc3VtcHRpb25zXG4gICAgdGhpcy5pbnRlcmVzdFJhdGUgPSBvcHRpb25zLmludGVyZXN0UmF0ZSA/PyBkZWZhdWx0cy5pbnRlcmVzdFJhdGU7XG4gICAgdGhpcy5sb2FuVGVybSA9IG9wdGlvbnMubG9hblRlcm0gPz8gZGVmYXVsdHMubG9hblRlcm07XG4gICAgdGhpcy5kb3duUGF5bWVudCA9IG9wdGlvbnMuZG93blBheW1lbnQgPz8gZGVmYXVsdHMuZG93blBheW1lbnQ7XG4gICAgdGhpcy5jbG9zaW5nQ29zdHMgPSBvcHRpb25zLmNsb3NpbmdDb3N0cyA/PyBkZWZhdWx0cy5jbG9zaW5nQ29zdHM7XG4gICAgXG4gICAgLy8gT3BlcmF0aW5nIGV4cGVuc2UgYXNzdW1wdGlvbnNcbiAgICB0aGlzLnByb3BlcnR5VGF4UmF0ZSA9IG9wdGlvbnMucHJvcGVydHlUYXhSYXRlID8/IGRlZmF1bHRzLnByb3BlcnR5VGF4UmF0ZTtcbiAgICB0aGlzLmluc3VyYW5jZVJhdGUgPSBvcHRpb25zLmluc3VyYW5jZVJhdGUgPz8gZGVmYXVsdHMuaW5zdXJhbmNlUmF0ZTtcbiAgICB0aGlzLm1haW50ZW5hbmNlUmF0ZSA9IG9wdGlvbnMubWFpbnRlbmFuY2VSYXRlID8/IGRlZmF1bHRzLm1haW50ZW5hbmNlUmF0ZTtcbiAgICB0aGlzLnByb3BlcnR5TWFuYWdlbWVudFJhdGUgPSBcbiAgICAgICAgb3B0aW9ucy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlID8/IGRlZmF1bHRzLnByb3BlcnR5TWFuYWdlbWVudFJhdGU7XG4gICAgdGhpcy52YWNhbmN5UmF0ZSA9IG9wdGlvbnMudmFjYW5jeVJhdGUgPz8gZGVmYXVsdHMudmFjYW5jeVJhdGU7XG4gICAgXG4gICAgLy8gVmFsaWRhdGUgYWxsIHZhbHVlc1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBhbGwgYXNzdW1wdGlvbiB2YWx1ZXMgYW5kIHNldCB0byBkZWZhdWx0cyBpZiBpbnZhbGlkLlxuICAgKi9cbiAgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBJbnZlc3RtZW50QXNzdW1wdGlvbnMuZGVmYXVsdHM7XG4gICAgXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIG51bWVyaWMgdmFsdWVzXG4gICAgY29uc3QgdmFsaWRhdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSwgbWluID0gMCwgbWF4ID0gTnVtYmVyLk1BWF9WQUxVRSkgPT4ge1xuICAgICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gIWlzTmFOKG51bSkgJiYgbnVtID49IG1pbiAmJiBudW0gPD0gbWF4ID8gbnVtIDogZGVmYXVsdFZhbHVlO1xuICAgIH07XG4gICAgXG4gICAgLy8gVmFsaWRhdGUgYWxsIHByb3BlcnRpZXNcbiAgICB0aGlzLmludGVyZXN0UmF0ZSA9IHZhbGlkYXRlTnVtYmVyKHRoaXMuaW50ZXJlc3RSYXRlLCBkZWZhdWx0cy5pbnRlcmVzdFJhdGUsIDAsIDMwKTtcbiAgICB0aGlzLmxvYW5UZXJtID0gdmFsaWRhdGVOdW1iZXIodGhpcy5sb2FuVGVybSwgZGVmYXVsdHMubG9hblRlcm0sIDEsIDUwKTtcbiAgICB0aGlzLmRvd25QYXltZW50ID0gdmFsaWRhdGVOdW1iZXIodGhpcy5kb3duUGF5bWVudCwgZGVmYXVsdHMuZG93blBheW1lbnQsIDAsIDEwMCk7XG4gICAgdGhpcy5jbG9zaW5nQ29zdHMgPSB2YWxpZGF0ZU51bWJlcih0aGlzLmNsb3NpbmdDb3N0cywgZGVmYXVsdHMuY2xvc2luZ0Nvc3RzLCAwLCAyMCk7XG4gICAgXG4gICAgdGhpcy5wcm9wZXJ0eVRheFJhdGUgPSBcbiAgICAgICAgdmFsaWRhdGVOdW1iZXIodGhpcy5wcm9wZXJ0eVRheFJhdGUsIGRlZmF1bHRzLnByb3BlcnR5VGF4UmF0ZSwgMCwgMTApO1xuICAgIHRoaXMuaW5zdXJhbmNlUmF0ZSA9IFxuICAgICAgICB2YWxpZGF0ZU51bWJlcih0aGlzLmluc3VyYW5jZVJhdGUsIGRlZmF1bHRzLmluc3VyYW5jZVJhdGUsIDAsIDUpO1xuICAgIHRoaXMubWFpbnRlbmFuY2VSYXRlID0gXG4gICAgICAgIHZhbGlkYXRlTnVtYmVyKHRoaXMubWFpbnRlbmFuY2VSYXRlLCBkZWZhdWx0cy5tYWludGVuYW5jZVJhdGUsIDAsIDE1KTtcbiAgICB0aGlzLnByb3BlcnR5TWFuYWdlbWVudFJhdGUgPSBcbiAgICAgICAgdmFsaWRhdGVOdW1iZXIodGhpcy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlLCBkZWZhdWx0cy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlLCAwLCAyMCk7XG4gICAgdGhpcy52YWNhbmN5UmF0ZSA9IFxuICAgICAgICB2YWxpZGF0ZU51bWJlcih0aGlzLnZhY2FuY3lSYXRlLCBkZWZhdWx0cy52YWNhbmN5UmF0ZSwgMCwgNTApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhc3N1bXB0aW9ucyB3aXRoIG5ldyB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gTmV3IGFzc3VtcHRpb24gdmFsdWVzLlxuICAgKi9cbiAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5pbnRlcmVzdFJhdGUgIT09IHVuZGVmaW5lZCkgdGhpcy5pbnRlcmVzdFJhdGUgPSBvcHRpb25zLmludGVyZXN0UmF0ZTtcbiAgICBpZiAob3B0aW9ucy5sb2FuVGVybSAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvYW5UZXJtID0gb3B0aW9ucy5sb2FuVGVybTtcbiAgICBpZiAob3B0aW9ucy5kb3duUGF5bWVudCAhPT0gdW5kZWZpbmVkKSB0aGlzLmRvd25QYXltZW50ID0gb3B0aW9ucy5kb3duUGF5bWVudDtcbiAgICBpZiAob3B0aW9ucy5jbG9zaW5nQ29zdHMgIT09IHVuZGVmaW5lZCkgdGhpcy5jbG9zaW5nQ29zdHMgPSBvcHRpb25zLmNsb3NpbmdDb3N0cztcbiAgICBcbiAgICBpZiAob3B0aW9ucy5wcm9wZXJ0eVRheFJhdGUgIT09IHVuZGVmaW5lZCkgdGhpcy5wcm9wZXJ0eVRheFJhdGUgPSBvcHRpb25zLnByb3BlcnR5VGF4UmF0ZTtcbiAgICBpZiAob3B0aW9ucy5pbnN1cmFuY2VSYXRlICE9PSB1bmRlZmluZWQpIHRoaXMuaW5zdXJhbmNlUmF0ZSA9IG9wdGlvbnMuaW5zdXJhbmNlUmF0ZTtcbiAgICBpZiAob3B0aW9ucy5tYWludGVuYW5jZVJhdGUgIT09IHVuZGVmaW5lZCkgdGhpcy5tYWludGVuYW5jZVJhdGUgPSBvcHRpb25zLm1haW50ZW5hbmNlUmF0ZTtcbiAgICBpZiAob3B0aW9ucy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZSA9IG9wdGlvbnMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudmFjYW5jeVJhdGUgIT09IHVuZGVmaW5lZCkgdGhpcy52YWNhbmN5UmF0ZSA9IG9wdGlvbnMudmFjYW5jeVJhdGU7XG4gICAgXG4gICAgLy8gVmFsaWRhdGUgYWZ0ZXIgdXBkYXRpbmdcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0byBKU09OIG9iamVjdC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBKU09OIHJlcHJlc2VudGF0aW9uLlxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlcmVzdFJhdGU6IHRoaXMuaW50ZXJlc3RSYXRlLFxuICAgICAgbG9hblRlcm06IHRoaXMubG9hblRlcm0sXG4gICAgICBkb3duUGF5bWVudDogdGhpcy5kb3duUGF5bWVudCxcbiAgICAgIGNsb3NpbmdDb3N0czogdGhpcy5jbG9zaW5nQ29zdHMsXG4gICAgICBcbiAgICAgIHByb3BlcnR5VGF4UmF0ZTogdGhpcy5wcm9wZXJ0eVRheFJhdGUsXG4gICAgICBpbnN1cmFuY2VSYXRlOiB0aGlzLmluc3VyYW5jZVJhdGUsXG4gICAgICBtYWludGVuYW5jZVJhdGU6IHRoaXMubWFpbnRlbmFuY2VSYXRlLFxuICAgICAgcHJvcGVydHlNYW5hZ2VtZW50UmF0ZTogdGhpcy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlLFxuICAgICAgdmFjYW5jeVJhdGU6IHRoaXMudmFjYW5jeVJhdGVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBJbnZlc3RtZW50QXNzdW1wdGlvbnMgZnJvbSBKU09OLlxuICAgKiBAcGFyYW0ge09iamVjdH0ganNvbiAtIEpTT04gZGF0YS5cbiAgICogQHJldHVybiB7SW52ZXN0bWVudEFzc3VtcHRpb25zfSBOZXcgSW52ZXN0bWVudEFzc3VtcHRpb25zIGluc3RhbmNlLlxuICAgKi9cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICByZXR1cm4gbmV3IEludmVzdG1lbnRBc3N1bXB0aW9ucyhqc29uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZlc3RtZW50QXNzdW1wdGlvbnM7IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFByb3BlcnR5IG1vZGVsIHJlcHJlc2VudGluZyBhIHJlYWwgZXN0YXRlIHByb3BlcnR5IGxpc3RpbmcuXG4gKi9cblxuLyoqXG4gKiBQcm9wZXJ0eSBtb2RlbCByZXByZXNlbnRpbmcgYSByZWFsIGVzdGF0ZSBwcm9wZXJ0eSBsaXN0aW5nLlxuICovXG5jbGFzcyBQcm9wZXJ0eSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgUHJvcGVydHkgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gZGF0YSAtIFByb3BlcnR5IGRhdGEuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5wcmljZSAtIExpc3RpbmcgcHJpY2UuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5yZW50RXN0aW1hdGUgLSBNb250aGx5IHJlbnQgZXN0aW1hdGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5yZXBhaXJDb3N0IC0gRXN0aW1hdGVkIHJlcGFpciBjb3N0cy5cbiAgICogQHBhcmFtIHtudW1iZXI9fSBkYXRhLm1vbnRobHlJbmNvbWUgLSBNb250aGx5IHJlbnRhbCBpbmNvbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gZGF0YS5hZGRyZXNzIC0gUHJvcGVydHkgYWRkcmVzcy5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBkYXRhLnVybCAtIFByb3BlcnR5IGxpc3RpbmcgVVJMLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5wcmljZSA9IGRhdGEucHJpY2UgfHwgMDtcbiAgICB0aGlzLnJlbnRFc3RpbWF0ZSA9IGRhdGEucmVudEVzdGltYXRlIHx8IDA7XG4gICAgdGhpcy5yZXBhaXJDb3N0ID0gZGF0YS5yZXBhaXJDb3N0IHx8IDA7XG4gICAgdGhpcy5tb250aGx5SW5jb21lID0gZGF0YS5tb250aGx5SW5jb21lIHx8IHRoaXMucmVudEVzdGltYXRlIHx8IDA7XG4gICAgdGhpcy5hZGRyZXNzID0gZGF0YS5hZGRyZXNzIHx8ICcnO1xuICAgIHRoaXMudXJsID0gZGF0YS51cmwgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhZGp1c3RlZCBwdXJjaGFzZSBwcmljZSBpbmNsdWRpbmcgcmVwYWlyIGNvc3RzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEFkanVzdGVkIHByaWNlLlxuICAgKi9cbiAgZ2V0QWRqdXN0ZWRQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmljZSArIHRoaXMucmVwYWlyQ29zdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFubnVhbCByZW50YWwgaW5jb21lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEFubnVhbCBpbmNvbWUuXG4gICAqL1xuICBnZXRBbm51YWxJbmNvbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9udGhseUluY29tZSAqIDEyO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgcHJvcGVydHkgZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBVcGRhdGVkIHByb3BlcnR5IGRhdGEuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5wcmljZSAtIExpc3RpbmcgcHJpY2UuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5yZXBhaXJDb3N0IC0gRXN0aW1hdGVkIHJlcGFpciBjb3N0cy5cbiAgICogQHBhcmFtIHtudW1iZXI9fSBkYXRhLm1vbnRobHlJbmNvbWUgLSBNb250aGx5IHJlbnRhbCBpbmNvbWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5yZW50RXN0aW1hdGUgLSBNb250aGx5IHJlbnQgZXN0aW1hdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gZGF0YS5hZGRyZXNzIC0gUHJvcGVydHkgYWRkcmVzcy5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBkYXRhLnVybCAtIFByb3BlcnR5IGxpc3RpbmcgVVJMLlxuICAgKi9cbiAgdXBkYXRlKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5wcmljZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnByaWNlID0gZGF0YS5wcmljZTtcbiAgICBpZiAoZGF0YS5yZXBhaXJDb3N0ICE9PSB1bmRlZmluZWQpIHRoaXMucmVwYWlyQ29zdCA9IGRhdGEucmVwYWlyQ29zdDtcbiAgICBpZiAoZGF0YS5tb250aGx5SW5jb21lICE9PSB1bmRlZmluZWQpIHRoaXMubW9udGhseUluY29tZSA9IGRhdGEubW9udGhseUluY29tZTtcbiAgICBpZiAoZGF0YS5yZW50RXN0aW1hdGUgIT09IHVuZGVmaW5lZCAmJiAhZGF0YS5tb250aGx5SW5jb21lKSB7XG4gICAgICB0aGlzLnJlbnRFc3RpbWF0ZSA9IGRhdGEucmVudEVzdGltYXRlO1xuICAgICAgLy8gT25seSB1cGRhdGUgbW9udGhseSBpbmNvbWUgd2l0aCByZW50IGVzdGltYXRlIGlmIG5vdCBleHBsaWNpdGx5IHNldFxuICAgICAgaWYgKHRoaXMubW9udGhseUluY29tZSA9PT0gMCkge1xuICAgICAgICB0aGlzLm1vbnRobHlJbmNvbWUgPSBkYXRhLnJlbnRFc3RpbWF0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEuYWRkcmVzcyAhPT0gdW5kZWZpbmVkKSB0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XG4gICAgaWYgKGRhdGEudXJsICE9PSB1bmRlZmluZWQpIHRoaXMudXJsID0gZGF0YS51cmw7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHByb3BlcnR5IHRvIEpTT04uXG4gICAqIEByZXR1cm4ge09iamVjdH0gSlNPTiByZXByZXNlbnRhdGlvbi5cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXG4gICAgICByZW50RXN0aW1hdGU6IHRoaXMucmVudEVzdGltYXRlLFxuICAgICAgcmVwYWlyQ29zdDogdGhpcy5yZXBhaXJDb3N0LFxuICAgICAgbW9udGhseUluY29tZTogdGhpcy5tb250aGx5SW5jb21lLFxuICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUHJvcGVydHkgZnJvbSBKU09OIGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIC0gSlNPTiBkYXRhLlxuICAgKiBAcmV0dXJuIHtQcm9wZXJ0eX0gTmV3IFByb3BlcnR5IGluc3RhbmNlLlxuICAgKi9cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5KGpzb24pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5OyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTZXJ2aWNlIGZvciBtYW5hZ2luZyBleHRlbnNpb24gc3RvcmFnZS5cbiAqL1xuXG5pbXBvcnQgSW52ZXN0bWVudEFzc3VtcHRpb25zIGZyb20gJy4uL21vZGVscy9pbnZlc3RtZW50LWFzc3VtcHRpb25zLmpzJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICcuLi9tb2RlbHMvcHJvcGVydHkuanMnO1xuXG4vKipcbiAqIFNlcnZpY2UgZm9yIG1hbmFnaW5nIGV4dGVuc2lvbiBzdG9yYWdlLlxuICovXG5jbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gICAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBTdG9yYWdlU2VydmljZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcmFnZUFwaSA9IGNocm9tZS5zdG9yYWdlLnN5bmM7XG4gICAgfVxuICAgIC8qKlxuICAgKiBTYXZlIGludmVzdG1lbnQgYXNzdW1wdGlvbnMgdG8gc3RvcmFnZS5cbiAgICogQHBhcmFtIHtJbnZlc3RtZW50QXNzdW1wdGlvbnN9IGFzc3VtcHRpb25zIC0gVGhlIGFzc3VtcHRpb25zIHRvIHNhdmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdoZW4gc2F2ZSBpcyBjb21wbGV0ZS5cbiAgICovXG4gIHNhdmVBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VBcGkuc2V0KGFzc3VtcHRpb25zLnRvSlNPTigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIExvYWQgaW52ZXN0bWVudCBhc3N1bXB0aW9ucyBmcm9tIHN0b3JhZ2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8SW52ZXN0bWVudEFzc3VtcHRpb25zPn0gUHJvbWlzZSByZXNvbHZpbmcgdG8gbG9hZGVkIGFzc3VtcHRpb25zLlxuICAgKi9cbiAgYXN5bmMgbG9hZEFzc3VtcHRpb25zKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IEludmVzdG1lbnRBc3N1bXB0aW9ucy5kZWZhdWx0cztcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnN0b3JhZ2VBcGkuZ2V0KGRlZmF1bHRzKTtcbiAgICAgIHJldHVybiBuZXcgSW52ZXN0bWVudEFzc3VtcHRpb25zKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBhc3N1bXB0aW9uczonLCBlcnJvcik7XG4gICAgICByZXR1cm4gbmV3IEludmVzdG1lbnRBc3N1bXB0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgKiBTYXZlIHByb3BlcnR5IGRhdGEgdG8gc3RvcmFnZS5cbiAgICogQHBhcmFtIHtQcm9wZXJ0eX0gcHJvcGVydHkgLSBUaGUgcHJvcGVydHkgdG8gc2F2ZS5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBrZXkgLSBTdG9yYWdlIGtleSBmb3IgdGhlIHByb3BlcnR5LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBQcm9taXNlIHJlc29sdmluZyB3aGVuIHNhdmUgaXMgY29tcGxldGUuXG4gICAqL1xuICBzYXZlUHJvcGVydHkocHJvcGVydHksIGtleSA9ICdjdXJyZW50UHJvcGVydHknKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZUFwaS5zZXQoe1xuICAgICAgICAgICAgW2tleVxuICAgICAgICAgICAgXTogcHJvcGVydHkudG9KU09OKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBMb2FkIHByb3BlcnR5IGRhdGEgZnJvbSBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IGtleSAtIFN0b3JhZ2Uga2V5IGZvciB0aGUgcHJvcGVydHkuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8P1Byb3BlcnR5Pn0gUHJvbWlzZSByZXNvbHZpbmcgdG8gbG9hZGVkIHByb3BlcnR5LlxuICAgKi9cbiAgYXN5bmMgbG9hZFByb3BlcnR5KGtleSA9ICdjdXJyZW50UHJvcGVydHknKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnN0b3JhZ2VBcGkuZ2V0KGtleSk7XG4gICAgICBpZiAoZGF0YVtrZXlcbiAgICAgICAgICAgIF0pIHtcbiAgICAgICAgcmV0dXJuIFByb3BlcnR5LmZyb21KU09OKGRhdGFba2V5XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxvYWRpbmcgcHJvcGVydHkgd2l0aCBrZXkgJHtrZXlcbiAgICAgICAgICAgIH06YCwgZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAqIFNhdmUgZGF0YSB0byBzdG9yYWdlIHdpdGggY3VzdG9tIGtleS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFN0b3JhZ2Uga2V5LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gRGF0YSB0byBzdG9yZS5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSByZXNvbHZpbmcgd2hlbiBzYXZlIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgc2F2ZShrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZUFwaS5zZXQoe1xuICAgICAgICAgICAgW2tleVxuICAgICAgICAgICAgXTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBMb2FkIGRhdGEgZnJvbSBzdG9yYWdlIHdpdGggY3VzdG9tIGtleS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFN0b3JhZ2Uga2V5LlxuICAgKiBAcGFyYW0geyo9fSBkZWZhdWx0VmFsdWUgLSBEZWZhdWx0IHZhbHVlIGlmIGtleSBkb2Vzbid0IGV4aXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPCo+fSBQcm9taXNlIHJlc29sdmluZyB0byBsb2FkZWQgZGF0YS5cbiAgICovXG4gIGFzeW5jIGxvYWQoa2V5LCBkZWZhdWx0VmFsdWUgPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnN0b3JhZ2VBcGkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gZGF0YVtrZXlcbiAgICAgICAgICAgIF0gIT09IHVuZGVmaW5lZCA/IGRhdGFba2V5XG4gICAgICAgICAgICBdIDogZGVmYXVsdFZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbG9hZGluZyBrZXkgJHtrZXlcbiAgICAgICAgICAgIH06YCwgZXJyb3IpO1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICogUmVtb3ZlIGRhdGEgZnJvbSBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSBrZXlzIC0gS2V5KHMpIHRvIHJlbW92ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSByZXNvbHZpbmcgd2hlbiByZW1vdmFsIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgcmVtb3ZlKGtleXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlQXBpLnJlbW92ZShrZXlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENsZWFyIGFsbCBzdG9yYWdlIGRhdGEuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdoZW4gY2xlYXIgaXMgY29tcGxldGUuXG4gICAqL1xuICBjbGVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlQXBpLmNsZWFyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlU2VydmljZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IEVudHJ5IHBvaW50IGZvciB0aGUgcG9wdXAgVUkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFBvcHVwQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9wb3B1cC1jb250cm9sbGVyLmpzJztcclxuXHJcbi8vIEluaXRpYWxpemUgcG9wdXAgd2hlbiBET00gY29udGVudCBpcyBsb2FkZWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBwb3B1cENvbnRyb2xsZXIgPSBuZXcgUG9wdXBDb250cm9sbGVyKCk7XHJcbiAgcG9wdXBDb250cm9sbGVyLmluaXRpYWxpemUoKS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgcG9wdXA6JywgZXJyb3IpO1xyXG4gIH0pO1xyXG59KTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIkludmVzdG1lbnRBc3N1bXB0aW9ucyIsIlN0b3JhZ2VTZXJ2aWNlIiwiUG9wdXBDb250cm9sbGVyIiwic3RvcmFnZSIsImFzc3VtcHRpb25zIiwic3RhdHVzRWxlbWVudCIsInNhdmVCdXR0b24iLCJoYW5kbGVTYXZlIiwiYmluZCIsInNob3dTdGF0dXMiLCJfaW5pdGlhbGl6ZSIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibG9hZEFzc3VtcHRpb25zIiwic2V0dXBVSSIsInBvcHVsYXRlRm9ybSIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJpbml0aWFsaXplIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImludGVyZXN0UmF0ZSIsImxvYW5UZXJtIiwiZG93blBheW1lbnQiLCJjbG9zaW5nQ29zdHMiLCJwcm9wZXJ0eVRheFJhdGUiLCJpbnN1cmFuY2VSYXRlIiwibWFpbnRlbmFuY2VSYXRlIiwicHJvcGVydHlNYW5hZ2VtZW50UmF0ZSIsInZhY2FuY3lSYXRlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwibnVtYmVySW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0IiwidmFsaWRhdGVOdW1iZXJJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwicGFyc2VGbG9hdCIsIm1pbiIsIm1heCIsIkluZmluaXR5IiwiX2hhbmRsZVNhdmUiLCJfY2FsbGVlMiIsIm9wdGlvbnMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwYXJzZUludCIsInVwZGF0ZSIsInNhdmVBc3N1bXB0aW9ucyIsIm5vdGlmeVRhYnNPZlVwZGF0ZSIsInQwIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsIl90aGlzMiIsInRleHRDb250ZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsImNocm9tZSIsInRhYnMiLCJxdWVyeSIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJjdXJyZW50VGFiIiwidXJsIiwiaW5jbHVkZXMiLCJzZW5kTWVzc2FnZSIsImlkIiwiYWN0aW9uIiwicG9wdXBDb250cm9sbGVyIiwiX29wdGlvbnMkaW50ZXJlc3RSYXRlIiwiX29wdGlvbnMkbG9hblRlcm0iLCJfb3B0aW9ucyRkb3duUGF5bWVudCIsIl9vcHRpb25zJGNsb3NpbmdDb3N0cyIsIl9vcHRpb25zJHByb3BlcnR5VGF4UiIsIl9vcHRpb25zJGluc3VyYW5jZVJhdCIsIl9vcHRpb25zJG1haW50ZW5hbmNlUiIsIl9vcHRpb25zJHByb3BlcnR5TWFuYSIsIl9vcHRpb25zJHZhY2FuY3lSYXRlIiwidW5kZWZpbmVkIiwiZGVmYXVsdHMiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlTnVtYmVyIiwiZGVmYXVsdFZhbHVlIiwiTUFYX1ZBTFVFIiwibnVtIiwidG9KU09OIiwiZ2V0IiwiZnJvbUpTT04iLCJqc29uIiwiUHJvcGVydHkiLCJkYXRhIiwicHJpY2UiLCJyZW50RXN0aW1hdGUiLCJyZXBhaXJDb3N0IiwibW9udGhseUluY29tZSIsImFkZHJlc3MiLCJnZXRBZGp1c3RlZFByaWNlIiwiZ2V0QW5udWFsSW5jb21lIiwic3RvcmFnZUFwaSIsInN5bmMiLCJzZXQiLCJfbG9hZEFzc3VtcHRpb25zIiwic2F2ZVByb3BlcnR5IiwicHJvcGVydHkiLCJfZGVmaW5lUHJvcGVydHkiLCJfbG9hZFByb3BlcnR5IiwiX2FyZ3MyIiwiY29uY2F0IiwibG9hZFByb3BlcnR5Iiwic2F2ZSIsIl9sb2FkIiwiX2NhbGxlZTMiLCJfYXJnczMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJsb2FkIiwiX3giLCJyZW1vdmUiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=