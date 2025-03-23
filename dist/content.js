/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/app-controller.js":
/*!*******************************************!*\
  !*** ./src/controllers/app-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_event_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/event-emitter.js */ "./src/utils/event-emitter.js");
/* harmony import */ var _models_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/property.js */ "./src/models/property.js");
/* harmony import */ var _models_investment_assumptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/investment-assumptions.js */ "./src/models/investment-assumptions.js");
/* harmony import */ var _services_property_data_extractor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/property-data-extractor.js */ "./src/services/property-data-extractor.js");
/* harmony import */ var _services_investment_calculator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/investment-calculator.js */ "./src/services/investment-calculator.js");
/* harmony import */ var _services_storage_service_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage-service.js */ "./src/services/storage-service.js");
/* harmony import */ var _ui_ui_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui-manager.js */ "./src/ui/ui-manager.js");
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
 * @fileoverview Main controller for the PropFinder Pro extension.
 */









/**
 * Main controller for the PropFinder Pro extension.
 */
var AppController = /*#__PURE__*/function () {
  /**
   * Create a new AppController.
   */
  function AppController() {
    _classCallCheck(this, AppController);
    // Initialize event emitter
    this.events = new _utils_event_emitter_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    // Initialize services
    this.propertyExtractor = new _services_property_data_extractor_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.calculator = new _services_investment_calculator_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.storage = new _services_storage_service_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

    // Initialize UI manager
    this.ui = new _ui_ui_manager_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.calculator, this.events);

    // Current state
    this.currentProperty = null;
    this.assumptions = null;

    // Bind methods to maintain context
    this.handlePropertyInput = this.handlePropertyInput.bind(this);
    this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);
  }

  /**
   * Initialize the app.
   * @return {Promise<void>}
   */
  return _createClass(AppController, [{
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
              // Extract property data from the page
              this.currentProperty = this.propertyExtractor.extractProperty();

              // Set up event listeners
              this.setupEventListeners();

              // Initialize UI
              this.ui.initialize();

              // Update UI with initial property data
              this.events.emit('propertyUpdated', this.currentProperty);

              // Calculate and display initial analysis
              this.updateAnalysis();
            case 8:
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
     * Set up event listeners.
     */
    )
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;
      // Listen for property input updates from UI
      this.events.on('propertyInputUpdated', this.handlePropertyInput);

      // Listen for settings updates from popup
      chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.action === 'settingsUpdated') {
          _this.handleSettingsUpdate(message.options, sendResponse);
          return true; // Keep the message channel open for async response
        }
      });

      // Listen for URL changes
      this.observeUrlChanges();
    }

    /**
     * Handle property input updates from UI.
     * @param {Object} propertyData - Updated property data.
     */
  }, {
    key: "handlePropertyInput",
    value: function handlePropertyInput(propertyData) {
      // Update the current property
      this.currentProperty.update(propertyData);

      // Recalculate and display analysis
      this.updateAnalysis();

      // Save updated property to storage
      this.storage.saveProperty(this.currentProperty);
    }

    /**
     * Handle settings updates from popup.
     * @param {Object} options - Updated investment assumptions.
     * @param {Function=} sendResponse - Function to send response to popup.
     */
  }, {
    key: "handleSettingsUpdate",
    value: function handleSettingsUpdate(options, sendResponse) {
      try {
        // Update assumptions
        this.assumptions.update(options);

        // Recalculate and display analysis
        this.updateAnalysis();

        // Respond that update was successful
        if (sendResponse) {
          sendResponse({
            success: true
          });
        }
      } catch (error) {
        console.error('Error updating settings:', error);
        if (sendResponse) {
          sendResponse({
            success: false,
            error: error.message
          });
        }
      }
    }

    /**
     * Update the investment analysis.
     */
  }, {
    key: "updateAnalysis",
    value: function updateAnalysis() {
      // Calculate metrics
      var analysisResults = this.calculator.analyze(this.currentProperty, this.assumptions);

      // Emit event with analysis results
      this.events.emit('analysisUpdated', analysisResults);
    }

    /**
     * Observe URL changes for single-page app navigation.
     */
  }, {
    key: "observeUrlChanges",
    value: function observeUrlChanges() {
      var _this2 = this;
      var currentUrl = window.location.href;

      // Check for URL changes periodically
      setInterval(function () {
        if (currentUrl !== window.location.href) {
          currentUrl = window.location.href;

          // Check if we're on a property details page
          if (_this2.isPropertyPage(currentUrl)) {
            // Wait for page to load
            setTimeout(function () {
              // Extract new property data
              _this2.currentProperty = _this2.propertyExtractor.extractProperty();

              // Update UI with new property data
              _this2.events.emit('propertyUpdated', _this2.currentProperty);

              // Recalculate and display analysis
              _this2.updateAnalysis();
            }, 1500);
          }
        }
      }, 500);

      // Also listen for History API changes
      window.addEventListener('popstate', function () {
        // Check if we're on a property details page
        if (_this2.isPropertyPage(window.location.href)) {
          // Wait for page to load
          setTimeout(function () {
            // Extract new property data
            _this2.currentProperty = _this2.propertyExtractor.extractProperty();

            // Update UI with new property data
            _this2.events.emit('propertyUpdated', _this2.currentProperty);

            // Recalculate and display analysis
            _this2.updateAnalysis();
          }, 1500);
        }
      });
    }

    /**
     * Check if the current URL is a property details page.
     * @param {string} url - URL to check.
     * @return {boolean} True if it's a property details page.
     */
  }, {
    key: "isPropertyPage",
    value: function isPropertyPage(url) {
      return url.includes('zillow.com/homedetails');
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppController);

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

/***/ "./src/services/investment-calculator.js":
/*!***********************************************!*\
  !*** ./src/services/investment-calculator.js ***!
  \***********************************************/
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
 * @fileoverview Service for calculating real estate investment metrics.
 */
/**
 * Service for calculating real estate investment metrics.
 */
var InvestmentCalculator = /*#__PURE__*/function () {
  function InvestmentCalculator() {
    _classCallCheck(this, InvestmentCalculator);
  }
  return _createClass(InvestmentCalculator, [{
    key: "calculateMetrics",
    value:
    /**
     * Calculate all investment metrics for a property.
     * @param {Property} property - The property to analyze.
     * @param {InvestmentAssumptions} assumptions - Investment assumptions.
     * @return {Object} Calculated investment metrics.
     */
    function calculateMetrics(property, assumptions) {
      // Property data
      var price = property.price;
      var repairCost = property.repairCost;
      var monthlyIncome = property.monthlyIncome;
      var adjustedPrice = property.getAdjustedPrice();
      var annualIncome = property.getAnnualIncome();

      // Calculate annual expenses
      var expenses = this.calculateExpenses(property, assumptions);
      var totalAnnualExpenses = expenses.total;

      // Calculate NOI and cap rate
      var netOperatingIncome = annualIncome - totalAnnualExpenses;
      var capRate = price > 0 ? netOperatingIncome / price * 100 : 0;

      // Calculate cash needed
      var downPayment = adjustedPrice * (assumptions.downPayment / 100);
      var closingCosts = price * (assumptions.closingCosts / 100);
      var totalCashNeeded = downPayment + closingCosts + repairCost;

      // Calculate mortgage payment
      var loanAmount = price - downPayment;
      var mortgagePayment = this.calculateMortgagePayment(loanAmount, assumptions.interestRate, assumptions.loanTerm);

      // Calculate cash flow
      var annualMortgagePayment = mortgagePayment * 12;
      var annualCashFlow = netOperatingIncome - annualMortgagePayment;
      var monthlyCashFlow = annualCashFlow / 12;

      // Calculate returns
      var cashOnCash = totalCashNeeded > 0 ? annualCashFlow / totalCashNeeded * 100 : 0;
      var grossRentMultiplier = annualIncome > 0 ? price / annualIncome : 0;

      // Return all metrics
      return {
        // Financial metrics
        netOperatingIncome: netOperatingIncome,
        capRate: capRate,
        cashOnCash: cashOnCash,
        grossRentMultiplier: grossRentMultiplier,
        // Cash flow metrics
        annualCashFlow: annualCashFlow,
        monthlyCashFlow: monthlyCashFlow,
        // Expense breakdown
        expenses: expenses,
        totalAnnualExpenses: totalAnnualExpenses,
        // Investment breakdown
        downPayment: downPayment,
        closingCosts: closingCosts,
        totalCashNeeded: totalCashNeeded,
        // Loan metrics
        loanAmount: loanAmount,
        mortgagePayment: mortgagePayment,
        annualMortgagePayment: annualMortgagePayment
      };
    }

    /**
     * Calculate property expenses.
     * @param {Property} property - The property.
     * @param {InvestmentAssumptions} assumptions - Investment assumptions.
     * @return {Object} Expense breakdown.
     */
  }, {
    key: "calculateExpenses",
    value: function calculateExpenses(property, assumptions) {
      var price = property.price;
      var annualIncome = property.getAnnualIncome();

      // Calculate individual expenses
      var propertyTaxes = price * (assumptions.propertyTaxRate / 100);
      var insurance = price * (assumptions.insuranceRate / 100);
      var maintenance = annualIncome * (assumptions.maintenanceRate / 100);
      var propertyManagement = annualIncome * (assumptions.propertyManagementRate / 100);
      var vacancy = annualIncome * (assumptions.vacancyRate / 100);

      // Calculate total expenses
      var total = propertyTaxes + insurance + maintenance + propertyManagement + vacancy;

      // Return expense breakdown
      return {
        propertyTaxes: propertyTaxes,
        insurance: insurance,
        maintenance: maintenance,
        propertyManagement: propertyManagement,
        vacancy: vacancy,
        total: total
      };
    }

    /**
     * Calculate monthly mortgage payment.
     * @param {number} loanAmount - Principal loan amount.
     * @param {number} interestRate - Annual interest rate (percentage).
     * @param {number} loanTerm - Loan term in years.
     * @return {number} Monthly mortgage payment.
     */
  }, {
    key: "calculateMortgagePayment",
    value: function calculateMortgagePayment(loanAmount, interestRate, loanTerm) {
      // Return 0 if any input is invalid
      if (!loanAmount || !interestRate || !loanTerm) return 0;

      // Convert annual interest rate to monthly decimal
      var monthlyInterest = interestRate / 100 / 12;

      // Calculate number of payments
      var numPayments = loanTerm * 12;

      // Return 0 if monthly interest is 0 to avoid division by zero
      if (monthlyInterest === 0) return loanAmount / numPayments;

      // Calculate monthly payment using formula: P = L[c(1 + c)^n]/[(1 + c)^n - 1]
      // where P = payment, L = loan amount, c = monthly interest rate, n = number of payments
      var payment = loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, numPayments)) / (Math.pow(1 + monthlyInterest, numPayments) - 1);
      return payment;
    }

    /**
     * Format metrics to display strings.
     * @param {Object} metrics - Calculated metrics.
     * @return {Array<string>} Array of formatted analysis strings.
     */
  }, {
    key: "formatResults",
    value: function formatResults(metrics) {
      // Currency formatter
      var formatCurrency = function formatCurrency(value) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(value);
      };

      // Percentage formatter
      var formatPercent = function formatPercent(value) {
        return value.toFixed(1) + '%';
      };

      // Ratio formatter
      var formatRatio = function formatRatio(value) {
        return value.toFixed(1);
      };

      // Format all metrics for display
      return ["Cash Needed: ".concat(formatCurrency(metrics.totalCashNeeded)), "Mortgage Payment: ".concat(formatCurrency(metrics.mortgagePayment)), "Monthly Cash Flow: ".concat(formatCurrency(metrics.monthlyCashFlow)), "NOI: ".concat(formatCurrency(metrics.netOperatingIncome)), "Total Expenses: ".concat(formatCurrency(metrics.totalAnnualExpenses), "/yr"), "Annual Cash Flow: ".concat(formatCurrency(metrics.annualCashFlow)), "GRM: ".concat(formatRatio(metrics.grossRentMultiplier)), "Cap Rate: ".concat(formatPercent(metrics.capRate)), "Cash on Cash Return: ".concat(formatPercent(metrics.cashOnCash))];
    }

    /**
     * Calculate and format investment analysis results.
     * @param {Property} property - The property to analyze.
     * @param {InvestmentAssumptions} assumptions - Investment assumptions.
     * @return {Array<string>} Formatted investment analysis results.
     */
  }, {
    key: "analyze",
    value: function analyze(property, assumptions) {
      var metrics = this.calculateMetrics(property, assumptions);
      return this.formatResults(metrics);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvestmentCalculator);

/***/ }),

/***/ "./src/services/property-data-extractor.js":
/*!*************************************************!*\
  !*** ./src/services/property-data-extractor.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/property.js */ "./src/models/property.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileoverview Service for extracting property data from real estate websites.
 */



/**
 * Service for extracting property data from real estate websites.
 */
var PropertyDataExtractor = /*#__PURE__*/function () {
  /**
   * Create a new PropertyDataExtractor.
   * @param {Object=} selectors - DOM selectors for extracting data.
   */
  function PropertyDataExtractor() {
    var selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, PropertyDataExtractor);
    // Default selectors for Zillow
    this.selectors = _objectSpread({
      price: 'span[data-testid="price"]',
      rentZestimate: '[data-testid="rental-container"]',
      rentZestimateValue: '[data-testid="rental-value"]',
      rentZestimateText: '.Text-c11n-8-106-0__sc-aiai24-0',
      address: '[data-testid="home-details-chip"]'
    }, selectors);
  }

  /**
   * Extract property data from the current page.
   * @return {Property} Extracted property data.
   */
  return _createClass(PropertyDataExtractor, [{
    key: "extractProperty",
    value: function extractProperty() {
      try {
        var price = this.extractPrice();
        var rentEstimate = this.extractRentEstimate();
        var address = this.extractAddress();
        var url = window.location.href;
        return new _models_property_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          price: price,
          rentEstimate: rentEstimate,
          address: address,
          url: url
        });
      } catch (error) {
        console.error('Error extracting property data:', error);
        return new _models_property_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }
    }

    /**
     * Extract property price.
     * @return {number} The property price.
     */
  }, {
    key: "extractPrice",
    value: function extractPrice() {
      var priceElement = document.querySelector(this.selectors.price);
      if (!priceElement) return 0;
      return this.parseMoneyValue(priceElement.textContent);
    }

    /**
     * Extract rent estimate using multiple strategies.
     * @return {number} The monthly rent estimate.
     */
  }, {
    key: "extractRentEstimate",
    value: function extractRentEstimate() {
      var rentEstimate = 0;

      // Strategy 1: Look for rental container with specific data attribute
      try {
        var rentContainer = document.querySelector(this.selectors.rentZestimate);
        if (rentContainer) {
          var rentValue = rentContainer.querySelector(this.selectors.rentZestimateValue);
          if (rentValue) {
            rentEstimate = this.parseMoneyValue(rentValue.textContent);
            if (rentEstimate > 0) return rentEstimate;
          }
        }
      } catch (e) {
        console.warn('Error in rent estimate extraction strategy 1:', e);
      }

      // Strategy 2: Look for "Rent Zestimate" text and adjacent value
      try {
        var rentElements = Array.from(document.querySelectorAll(this.selectors.rentZestimateText));
        for (var i = 0; i < rentElements.length; i++) {
          if (rentElements[i].textContent === 'Rent Zestimate®' && i + 1 < rentElements.length) {
            // The next element should contain the rent value
            var rentText = rentElements[i + 1].textContent;
            var _rentValue = this.parseMoneyValue(rentText);
            if (_rentValue > 0) return _rentValue;
          }
        }
      } catch (e) {
        console.warn('Error in rent estimate extraction strategy 2:', e);
      }

      // Strategy 3: General regex search for rent pattern in the page
      try {
        var rentPattern = /Rent(?:\\s+)?(?:Zestimate|Estimate)(?:®)?(?:\\s+)?(?:is)?(?:\\s+)?\\$([0-9,]+)/i;
        var pageText = document.body.innerText;
        var match = pageText.match(rentPattern);
        if (match && match[1]) {
          rentEstimate = this.parseMoneyValue('$' + match[1]);
          if (rentEstimate > 0) return rentEstimate;
        }
      } catch (e) {
        console.warn('Error in rent estimate extraction strategy 3:', e);
      }
      return rentEstimate;
    }

    /**
     * Extract property address.
     * @return {string} The property address.
     */
  }, {
    key: "extractAddress",
    value: function extractAddress() {
      try {
        var addressElement = document.querySelector(this.selectors.address);
        return addressElement ? addressElement.textContent.trim() : '';
      } catch (e) {
        console.warn('Error extracting address:', e);
        return '';
      }
    }

    /**
     * Parse a money value from text.
     * @param {string} text - Text containing a money value.
     * @return {number} Parsed numeric value.
     */
  }, {
    key: "parseMoneyValue",
    value: function parseMoneyValue(text) {
      if (!text) return 0;

      // Try to extract using regex for money pattern
      var moneyPattern = /\\$([0-9,.]+)/;
      var match = text.match(moneyPattern);
      if (match && match[1]) {
        // Remove commas and convert to number
        return parseFloat(match[1].replace(/,/g, '')) || 0;
      }

      // Fallback: just try to remove $ and commas from the whole string
      return parseFloat(text.replace(/[$,]/g, '')) || 0;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyDataExtractor);

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

/***/ }),

/***/ "./src/ui/ui-manager.js":
/*!******************************!*\
  !*** ./src/ui/ui-manager.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_formatter_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/formatter-util.js */ "./src/utils/formatter-util.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileoverview Manages UI elements and interactions.
 */



/**
 * Manages UI elements and interactions.
 */
var UIManager = /*#__PURE__*/function () {
  /**
   * Create a new UIManager.
   * @param {InvestmentCalculator} calculator - Calculator for investment metrics.
   * @param {EventEmitter} eventEmitter - For publishing and subscribing to events.
   */
  function UIManager(calculator, eventEmitter) {
    _classCallCheck(this, UIManager);
    this.calculator = calculator;
    this.events = eventEmitter;
    this.formatter = new _utils_formatter_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.elements = {};

    // Bind event handlers to maintain context
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  /**
   * Initialize UI elements.
   */
  return _createClass(UIManager, [{
    key: "initialize",
    value: function initialize() {
      // Find or create the inputs container
      this.createInputsContainer();

      // Set up event listeners
      this.setupEventListeners();

      // Subscribe to relevant events
      this.subscribeToEvents();
    }

    /**
     * Create the input form container.
     */
  }, {
    key: "createInputsContainer",
    value: function createInputsContainer() {
      // Remove any existing inputs container
      var existingContainer = document.getElementById('propfinder-pro-inputs');
      if (existingContainer) {
        existingContainer.remove();
      }

      // Create container
      var container = document.createElement('div');
      container.id = 'propfinder-pro-inputs';
      container.className = 'propfinder-pro-container';

      // Add container styles
      container.style.padding = '12px';
      container.style.marginBottom = '12px';
      container.style.backgroundColor = '#f8f9fa';
      container.style.borderRadius = '4px';
      container.style.width = '100%';
      container.style.fontFamily = 'Arial, sans-serif';

      // Create header
      var header = document.createElement('div');
      header.className = 'propfinder-pro-header';
      header.innerHTML = "\n      <h3 style=\"margin: 0 0 10px; font-size: 16px; color: #0066cc;\">\n        PropFinder Pro Analysis\n      </h3>\n    ";
      container.appendChild(header);

      // Create inputs form
      var form = document.createElement('div');
      form.className = 'propfinder-pro-form';
      form.style.display = 'flex';
      form.style.flexWrap = 'wrap';
      form.style.gap = '8px';

      // Add form to container
      container.appendChild(form);

      // Create update button
      var button = document.createElement('button');
      button.id = 'propfinder-pro-update';
      button.textContent = 'Update Analysis';
      button.style.marginTop = '10px';
      button.style.padding = '8px 16px';
      button.style.backgroundColor = '#0066cc';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.borderRadius = '4px';
      button.style.cursor = 'pointer';
      button.style.fontWeight = 'bold';
      button.style.width = '100%';
      container.appendChild(button);

      // Store references to created elements
      this.elements.container = container;
      this.elements.form = form;
      this.elements.updateButton = button;

      // Try to find the best location to insert the container
      this.insertInputsContainer();
    }

    /**
     * Find suitable location and insert the inputs container.
     */
  }, {
    key: "insertInputsContainer",
    value: function insertInputsContainer() {
      // Try to find a good location on Zillow page
      var factsList = document.querySelector('.sc-kImNAt');
      if (factsList) {
        // Insert before facts list
        factsList.parentNode.insertBefore(this.elements.container, factsList);
        return;
      }

      // Secondary location: Any "facts" container
      var factsContainer = document.querySelector('[data-testid="facts-container"]');
      if (factsContainer) {
        // Insert at the beginning of facts container
        factsContainer.insertBefore(this.elements.container, factsContainer.firstChild);
        return;
      }

      // Fallback: Try to insert after the price section
      var priceSection = document.querySelector('[data-testid="price"]');
      if (priceSection) {
        // Look for parent elements
        var parent = priceSection.parentNode;
        for (var i = 0; i < 4; i++) {
          if (parent && parent.parentNode) {
            parent = parent.parentNode;
          }
        }
        if (parent) {
          // Insert after the price section parent
          if (parent.nextSibling) {
            parent.parentNode.insertBefore(this.elements.container, parent.nextSibling);
          } else {
            parent.parentNode.appendChild(this.elements.container);
          }
          return;
        }
      }

      // Last resort: Append to body
      console.warn('Could not find optimal location for PropFinder Pro container, adding to body');
      document.body.appendChild(this.elements.container);
    }

    /**
     * Create input fields for property data.
     * @param {Property} property - Current property data.
     */
  }, {
    key: "createInputFields",
    value: function createInputFields(property) {
      var _this = this;
      // Clear existing fields
      this.elements.form.innerHTML = '';

      // Create input fields
      var fields = [{
        id: 'price',
        label: 'Price',
        value: property.price
      }, {
        id: 'repairCost',
        label: 'Repair Cost',
        value: property.repairCost
      }, {
        id: 'monthlyIncome',
        label: 'Monthly Rent',
        value: property.monthlyIncome
      }];

      // Add each field to the form
      fields.forEach(function (field) {
        var fieldContainer = _this.createInputField(field.id, field.label, field.value);
        _this.elements.form.appendChild(fieldContainer);
      });
    }

    /**
     * Create a single input field.
     * @param {string} id - Field ID.
     * @param {string} label - Field label.
     * @param {number} value - Field value.
     * @return {HTMLElement} Input field container.
     */
  }, {
    key: "createInputField",
    value: function createInputField(id, label, value) {
      var container = document.createElement('div');
      container.className = 'propfinder-pro-input-field';
      container.style.flex = '1';
      container.style.minWidth = '150px';

      // Format value as currency
      var formattedValue = this.formatter.formatCurrency(value);

      // Create field HTML
      container.innerHTML = "\n      <label style=\"display: block; font-size: 12px; margin-bottom: 4px; color: #555;\">\n        ".concat(label, ":\n      </label>\n      <input\n        id=\"propfinder-pro-").concat(id, "\"\n        class=\"propfinder-pro-currency-input\"\n        type=\"text\"\n        value=\"").concat(formattedValue, "\"\n        style=\"width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; text-align: right; box-sizing: border-box;\"\n      >\n    ");
      return container;
    }

    /**
     * Set up event listeners.
     */
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this2 = this;
      // Add click handler for the update button
      if (this.elements.updateButton) {
        this.elements.updateButton.addEventListener('click', this.handleUpdateClick);
      }

      // Delay setting up currency input listeners until DOM is updated
      setTimeout(function () {
        _this2.setupCurrencyInputListeners();
      }, 0);
    }

    /**
     * Set up listeners for currency input fields to format values as user types.
     */
  }, {
    key: "setupCurrencyInputListeners",
    value: function setupCurrencyInputListeners() {
      var _this3 = this;
      var currencyInputs = document.querySelectorAll('.propfinder-pro-currency-input');
      currencyInputs.forEach(function (input) {
        input.addEventListener('input', function (event) {
          // Store cursor position and field content length before formatting
          var cursorPos = event.target.selectionStart;
          var originalLength = event.target.value.length;

          // Get raw value and convert to number
          var rawValue = _this3.formatter.parseMoneyValue(event.target.value);

          // Format as currency
          var formattedValue = _this3.formatter.formatCurrency(rawValue);

          // Calculate new cursor position (account for added/removed characters)
          var newCursorPos = cursorPos + (formattedValue.length - originalLength);

          // Update the field value
          event.target.value = formattedValue;

          // Restore cursor position
          event.target.setSelectionRange(newCursorPos, newCursorPos);
        });

        // Handle focus to select all text for easy editing
        input.addEventListener('focus', function (event) {
          event.target.select();
        });

        // Handle special cases (arrow keys, backspace, delete, etc.)
        input.addEventListener('keydown', function (event) {
          // Special case for backspace at the first non-digit position
          if (event.key === 'Backspace' && event.target.selectionStart === 1) {
            event.preventDefault();
            event.target.value = '$0';
            event.target.setSelectionRange(1, 1);
          }

          // Special case for delete at the $ sign
          if (event.key === 'Delete' && event.target.selectionStart === 0) {
            event.preventDefault();
            event.target.setSelectionRange(1, 1);
          }
        });
      });
    }

    /**
     * Subscribe to events from the event emitter.
     */
  }, {
    key: "subscribeToEvents",
    value: function subscribeToEvents() {
      var _this4 = this;
      // Subscribe to property update events
      this.events.on('propertyUpdated', function (property) {
        _this4.createInputFields(property);
        // Setup currency input listeners after fields are created
        _this4.setupCurrencyInputListeners();
      });

      // Subscribe to analysis results events
      this.events.on('analysisUpdated', function (analysisDetails) {
        _this4.updateAnalysisResults(analysisDetails);
      });
    }

    /**
     * Handle click on the update button.
     */
  }, {
    key: "handleUpdateClick",
    value: function handleUpdateClick() {
      // Get values from input fields
      var price = this.formatter.parseMoneyValue(document.getElementById('propfinder-pro-price').value);
      var repairCost = this.formatter.parseMoneyValue(document.getElementById('propfinder-pro-repairCost').value);
      var monthlyIncome = this.formatter.parseMoneyValue(document.getElementById('propfinder-pro-monthlyIncome').value);

      // Create property update data
      var propertyData = {
        price: price,
        repairCost: repairCost,
        monthlyIncome: monthlyIncome
      };

      // Emit event with the updated property data
      this.events.emit('propertyInputUpdated', propertyData);
    }

    /**
     * Create and inject the investment analysis results.
     * @param {Array<string>} analysisDetails - Analysis results to display.
     */
  }, {
    key: "updateAnalysisResults",
    value: function updateAnalysisResults(analysisDetails) {
      var _this5 = this;
      // Remove existing analysis items
      var existingItems = document.querySelectorAll('.propfinder-pro-result-item');
      existingItems.forEach(function (item) {
        return item.remove();
      });

      // Find the facts list
      var factsList = document.querySelector('.sc-kImNAt');
      if (!factsList) {
        console.warn('Could not find facts list for analysis results');
        return;
      }

      // Add each analysis detail as a fact item
      analysisDetails.forEach(function (detail) {
        var factItem = _this5.createFactItem(detail);
        factsList.appendChild(factItem);
      });
    }

    /**
     * Get the appropriate icon SVG for a specific metric.
     * @param {string} factDetails - Text content of the fact to determine icon.
     * @return {string} SVG markup for the appropriate icon.
     */
  }, {
    key: "getIconForFact",
    value: function getIconForFact(factDetails) {
      // Default icon as fallback
      var iconSvg = "\n      <svg viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\" role=\"img\" class=\"Icon-c11n-8-106-0__sc-13llmml-0 iBJybQ\">\n        <g stroke=\"none\">\n          <path d=\"M29 17h-2v-2a1 1 0 00-1-1h-6a1 1 0 00-1 1v2h-2v-7a1 1 0 00-1-1H9a1 1 0 00-1 1v7H6V3a1 1 0 00-1-1H3a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V18a1 1 0 00-1-1zM21 16h-4v-1h4zm-12-5h5v12H9zm19 17H4V4h1v13a1 1 0 001 1h3a1 1 0 001-1v-1h6a1 1 0 001-1v-2h2a1 1 0 001-1v-1h3a1 1 0 001-1v-1h1z\"></path>\n          <path d=\"M6 7h2v2H6zM6 11h2v2H6z\"></path>\n        </g>\n      </svg>\n    ";

      // Match fact content to determine which icon to use
      if (factDetails.includes('Cash Needed')) {
        // Money bag icon
        iconSvg = "\n        <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <svg width=\"1000px\" height=\"1000px\" fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"m11.726 17.102c-0.099-0.2175-0.304-0.3762-0.5521-0.4044-0.2101-0.024-0.4158-0.069-0.6114-0.1339-0.0877-0.0295-0.17-0.0617-0.2462-0.0962l0.1266-0.3451c0.0894 0.0399 0.1815 0.0764 0.2758 0.1094l0.0039 0.0014 4e-3 0.0013c0.3026 0.1 0.6004 0.1507 0.8849 0.1507 0.2857 0 0.4928-0.0383 0.6519-0.1204l0.0095-0.0049 0.0093-0.0054c0.241-0.1383 0.3793-0.376 0.3793-0.6523 0-0.3066-0.1654-0.5611-0.4539-0.6986-0.1451-0.0706-0.3512-0.138-0.6481-0.2118-0.3045-0.077-0.5603-0.1587-0.7587-0.2424-0.145-0.0656-0.2708-0.1703-0.3842-0.32-0.0976-0.1336-0.147-0.3345-0.147-0.5974 0-0.3172 0.0893-0.579 0.2731-0.8004 0.1636-0.194 0.3959-0.3258 0.7077-0.3997 0.2313-0.0548 0.4117-0.2199 0.4928-0.4331 0.0917 0.2161 0.2868 0.3768 0.5296 0.4155 0.2028 0.0323 0.389 0.0838 0.5564 0.1535l-0.1165 0.3382c-0.3161-0.1269-0.6272-0.191-0.9281-0.191-0.9993 0-1.0499 0.6894-1.0499 0.8276 0 0.2996 0.1618 0.5508 0.4439 0.6893l0.0079 0.0039 8e-3 0.0036c0.1425 0.0636 0.3447 0.1249 0.6365 0.1929 0.3017 0.0682 0.5533 0.1463 0.751 0.2329l0.0041 0.0018 0.0041 0.0017c0.1468 0.0611 0.2727 0.1631 0.3849 0.3119l0.0018 0.0023 0.0018 0.0024c0.0981 0.1268 0.1479 0.3229 0.1479 0.5829 0 0.3001-0.0869 0.5541-0.2657 0.7766-0.1551 0.193-0.3716 0.3266-0.6621 0.4084-0.2243 0.0632-0.3983 0.2347-0.4728 0.4488z\" fill=\"#000\"/>\n        <path d=\"m11.978 18h-0.4815c-0.1077 0-0.195-0.0895-0.195-0.2v-0.4015c0-0.1056-0.0801-0.1924-0.1825-0.2041-0.2438-0.0277-0.4796-0.0794-0.7075-0.155-0.2214-0.0746-0.41321-0.163-0.57543-0.2655-0.07455-0.0471-0.10167-0.1427-0.07085-0.2267l0.33028-0.9006c0.0445-0.1212 0.188-0.1676 0.2985-0.1049 0.1492 0.0845 0.3096 0.1568 0.481 0.2168 0.2555 0.0844 0.5007 0.1266 0.7355 0.1266 0.2019 0 0.3462-0.0223 0.4327-0.067 0.0865-0.0497 0.1298-0.1217 0.1298-0.216 0-0.1092-0.0577-0.1911-0.1731-0.2457-0.1112-0.0546-0.2967-0.1142-0.5562-0.1787-0.3338-0.0844-0.6119-0.1738-0.8344-0.2681-0.2225-0.0993-0.4162-0.2582-0.581-0.4766-0.16484-0.2234-0.24724-0.5238-0.24724-0.9011 0-0.4369 0.1298-0.8117 0.38934-1.1245 0.234-0.2774 0.557-0.465 0.9692-0.5627 0.0928-0.022 0.1619-0.1046 0.1619-0.2022v-0.4425c0-0.1105 0.0873-0.2 0.195-0.2h0.4815c0.1077 0 0.195 0.0895 0.195 0.2v0.4172c0 0.1022 0.0752 0.1873 0.1736 0.203 0.3611 0.0575 0.6784 0.1664 0.9518 0.3267 0.0776 0.0455 0.1084 0.1423 0.0786 0.2287l-0.3091 0.8969c-0.0409 0.1189-0.1774 0.1692-0.2872 0.1124-0.3482-0.18-0.6805-0.27-0.9971-0.27-0.375 0-0.5625 0.1092-0.5625 0.3276 0 0.1043 0.0557 0.1837 0.1669 0.2384 0.1113 0.0496 0.2946 0.1042 0.5501 0.1638 0.3296 0.0745 0.6078 0.1613 0.8344 0.2606 0.2266 0.0943 0.4223 0.2507 0.5872 0.4692 0.1689 0.2184 0.2534 0.5163 0.2534 0.8936 0 0.417-0.1257 0.7819-0.3771 1.0947-0.2189 0.2726-0.522 0.4634-0.9091 0.5725-0.089 0.0251-0.1539 0.1059-0.1539 0.2005v0.4642c0 0.1105-0.0873 0.2-0.195 0.2z\" fill=\"#000\"/>\n        <path d=\"m9.5924 5h4.2218c1.0813 0 0.4875 1.664 0.0497 2.679l-0.4982 1.164-0.0673 0.157c0.4719-0.02349 0.9386 0.11054 1.3299 0.382 1.4639 1.3738 2.652 3.0278 3.4974 4.869 0.3294 0.6808 0.4601 1.4448 0.3763 2.2-0.1006 1.9249-1.6063 3.4588-3.4837 3.549h-6.63c-1.8779-0.0875-3.3858-1.6198-3.4886-3.545-0.08381-0.7552 0.04688-1.5192 0.37635-2.2 0.84639-1.843 2.0361-3.4985 3.5022-4.873 0.39137-0.27146 0.85799-0.40549 1.3299-0.382l-0.078-0.181-0.48747-1.14c-0.43583-1.015-1.0325-2.679 0.04972-2.679z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n        <path d=\"m13.298 9.75c0.4142 0 0.75-0.33579 0.75-0.75s-0.3358-0.75-0.75-0.75v1.5zm-3.1902-1.5c-0.41419 0-0.74998 0.33579-0.74998 0.75s0.33579 0.75 0.74998 0.75v-1.5zm5.8695 0.39988c0.3589-0.20676 0.4823-0.66533 0.2755-1.0242s-0.6653-0.48227-1.0242-0.27551l0.7487 1.2998zm-2.612 0.19312 0.1447 0.73591 0.0022-4.3e-4 -0.1469-0.73548zm-3.3355-0.024 0.1553-0.73379-0.0068-0.00138-0.1485 0.73517zm-1.8641-1.4754c-0.36254-0.20035-0.81885-0.06888-1.0192 0.29365-0.20036 0.36254-0.06889 0.81885 0.29365 1.0192l0.72555-1.3129zm5.1323 0.90643h-3.1902v1.5h3.1902v-1.5zm1.9306-0.89988c-0.627 0.36116-1.3056 0.61671-2.0102 0.7574l0.2938 1.471c0.8653-0.1728 1.6976-0.48645 2.4651-0.9286l-0.7487-1.2998zm-2.008 0.75697c-1.0034 0.19732-2.0348 0.1899-3.0355-0.02184l-0.31054 1.4675c1.1983 0.25356 2.4337 0.26246 3.6354 0.02616l-0.2894-1.4718zm-3.0423-0.02326c-0.70273-0.14187-1.3812-0.39128-2.0126-0.74026l-0.72555 1.3129c0.76481 0.42267 1.5877 0.72541 2.4412 0.89774l0.29691-1.4703z\" fill=\"#000\"/>\n        </svg>\n\n      ";
      } else if (factDetails.includes('Mortgage Payment')) {
        // House with dollar sign
        iconSvg = "\n        <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <svg width=\"600px\" height=\"600px\" fill=\"#000000\" version=\"1.1\" viewBox=\"0 0 122.39 122.39\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t    <path d=\"m86.51 72.041v39.673h-17.153v-40.245h-29.671v40.244h-17.819v-56.587l29.649-20.388c0.128-5.292 1.379-10.31 3.54-14.817l-0.438-0.308-3.064 2.106-24.043 16.46v-8.379h-13.481v17.606l-14.03 9.605 6.051 8.836 5.106-3.496v59.318h86.042l0.02-50.793c-2.963 0.781-6.07 1.199-9.273 1.199-0.483 3e-3 -0.96-0.015-1.436-0.034z\"/>\n\t\t    <path d=\"m89.271 0.716c-18.287 0-33.113 14.826-33.113 33.114 0 18.289 14.826 33.114 33.113 33.114 18.289 0 33.114-14.826 33.114-33.115 1e-3 -18.287-14.824-33.113-33.114-33.113zm4.075 55.422v7.368h-8.408v-6.79c-4.054-0.326-8.107-1.534-10.604-3.2l-0.834-0.555 2.633-9.162 1.521 0.898c3.078 1.814 6.762 2.857 10.104 2.857 3.626 0 5.971-1.611 5.971-4.103 0-1.705-0.807-3.576-6.646-5.707-6.362-2.303-12.874-5.73-12.874-13.675 0-6.397 4.239-11.249 11.146-12.879v-7.035h8.407v6.506c3.265 0.245 6.088 1.003 8.796 2.359l1.023 0.512-2.637 8.979-1.828-0.838c-1.639-0.766-4.389-2.047-8.452-2.047-3.259 0-5.205 1.298-5.205 3.478 0 1.897 1.825 3.238 7.516 5.514 8.451 3.17 12.073 7.383 12.073 14.073-2e-3 6.676-4.556 11.852-11.702 13.447z\"/>\n        </svg>\n      ";
      } else if (factDetails.includes('Monthly Cash Flow')) {
        // Cash flow icon
        iconSvg = "\n        <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <svg width=\"800px\" height=\"800px\" fill=\"#000000\" version=\"1.1\" viewBox=\"0 0 122.55 122.55\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"25.454 55.023 6.446 55.023 6.446 83.555 25.454 73.139\"/>\n        <polygon points=\"6.446 109.33 25.454 109.33 25.454 92.715 6.446 103.13\"/>\n        <polygon points=\"56.575 35.756 37.567 35.756 37.567 66.5 56.575 56.084\"/>\n        <polygon points=\"37.567 109.33 56.575 109.33 56.575 75.661 37.567 86.079\"/>\n        <polygon points=\"69.602 109.33 88.608 109.33 88.608 58.105 69.602 68.522\"/>\n        <polygon points=\"88.608 13.217 69.602 13.217 69.602 48.945 88.608 38.528\"/>\n        <polygon points=\"96.338 22.941 102.73 35.22 0 91.946 0 101.75 106.7 42.837 113.37 54.326 122.55 29.562\"/>\n        </svg>\n      ";
      } else if (factDetails.includes('NOI')) {
        // Net icon
        iconSvg = "\n        <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <svg fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"m11.948 1.25h0.104c0.8985-3e-5 1.6477-5e-5 2.2425 0.07991 0.6278 0.08441 1.1946 0.27008 1.65 0.72555 0.4555 0.45547 0.6412 1.0223 0.7256 1.6501 0.0591 0.4396 0.0745 0.96357 0.0785 1.5698 0.6485 0.02081 1.2266 0.05873 1.7404 0.12781 1.1724 0.15762 2.1214 0.48974 2.8698 1.2381 0.7483 0.74837 1.0804 1.6973 1.2381 2.8697 0.1531 1.1392 0.1531 2.5948 0.1531 4.4326v0.1128c0 1.8378 0 3.2934-0.1531 4.4326-0.1577 1.1724-0.4898 2.1214-1.2381 2.8698-0.7484 0.7483-1.6974 1.0804-2.8698 1.2381-1.1392 0.1531-2.5948 0.1531-4.4326 0.1531h-4.1128c-1.8378 0-3.2934 0-4.4326-0.1531-1.1724-0.1577-2.1214-0.4898-2.8697-1.2381-0.74836-0.7484-1.0805-1.6974-1.2381-2.8698-0.15317-1.1392-0.15316-2.5948-0.15314-4.4326v-0.1128c-2e-5 -1.8378-3e-5 -3.2934 0.15314-4.4326 0.15762-1.1724 0.48974-2.1214 1.2381-2.8697 0.74837-0.74836 1.6973-1.0805 2.8697-1.2381 0.51377-0.06908 1.0919-0.107 1.7404-0.12781 4e-3 -0.60624 0.01941-1.1302 0.07851-1.5698 0.08441-0.62779 0.27008-1.1946 0.72555-1.6501s1.0223-0.64114 1.6501-0.72555c0.59478-0.07996 1.344-0.07994 2.2425-0.07991zm-3.1962 4.0018c0.37813-0.00179 0.77514-0.00178 1.1918-0.00178h4.1128c0.4167 0 0.8137-1e-5 1.1918 0.00178-0.0042-0.57032-0.0182-1.0005-0.0647-1.3464-0.0621-0.46146-0.1693-0.65895-0.2996-0.78927s-0.3278-0.23754-0.7893-0.29958c-0.483-0.06494-1.1306-0.06654-2.0946-0.06654s-1.6116 0.0016-2.0946 0.06654c-0.46146 0.06204-0.65896 0.16926-0.78927 0.29958-0.13032 0.13032-0.23754 0.32781-0.29958 0.78927-0.0465 0.34586-0.06053 0.77607-0.06474 1.3464zm-3.041 1.638c-1.0061 0.13527-1.5857 0.38894-2.009 0.81215-0.42321 0.4232-0.67688 1.0028-0.81214 2.0089-0.13817 1.0276-0.13976 2.3824-0.13976 4.2892s0.00159 3.2615 0.13976 4.2892c0.13526 1.006 0.38893 1.5857 0.81214 2.0089s1.0029 0.6769 2.009 0.8121c1.0277 0.1382 2.3823 0.1398 4.2892 0.1398h4c1.9068 0 3.2615-0.0016 4.2892-0.1398 1.006-0.1352 1.5857-0.3889 2.0089-0.8121s0.6769-1.0029 0.8121-2.0089c0.1382-1.0277 0.1398-2.3824 0.1398-4.2892s-0.0016-3.2615-0.1398-4.2892c-0.1352-1.0061-0.3889-1.5857-0.8121-2.0089-0.4232-0.42321-1.0029-0.67688-2.0089-0.81215-1.0277-0.13816-2.3824-0.13976-4.2892-0.13976h-4c-1.9068 0-3.2615 0.0016-4.2892 0.13976zm6.2892 2.3602c0.4142 0 0.75 0.33579 0.75 0.75v0.0102c1.0888 0.2743 2 1.1328 2 2.3231 0 0.4142-0.3358 0.75-0.75 0.75s-0.75-0.3358-0.75-0.75c0-0.384-0.4258-0.9166-1.25-0.9166s-1.25 0.5326-1.25 0.9166c0 0.3841 0.4258 0.9167 1.25 0.9167 1.3849 0 2.75 0.9598 2.75 2.4167 0 1.1903-0.9112 2.0488-2 2.3231v0.0102c0 0.4142-0.3358 0.75-0.75 0.75s-0.75-0.3358-0.75-0.75v-0.0102c-1.0888-0.2743-2-1.1328-2-2.3231 0-0.4142 0.33579-0.75 0.75-0.75 0.4142 0 0.75 0.3358 0.75 0.75 0 0.384 0.4258 0.9166 1.25 0.9166s1.25-0.5326 1.25-0.9166c0-0.3841-0.4258-0.9167-1.25-0.9167-1.3849 0-2.75-0.9597-2.75-2.4167 0-1.1903 0.9112-2.0488 2-2.3231v-0.0102c0-0.41421 0.3358-0.75 0.75-0.75z\" clip-rule=\"evenodd\" fill=\"#000\" fill-rule=\"evenodd\"/>\n        </svg>\n      ";
      } else if (factDetails.includes('Total Expenses')) {
        // Expense icon
        iconSvg = "\n        <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <svg class=\"icon line-color\" fill=\"#000000\" stroke=\"#000000\" data-name=\"Line Color\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n        <path d=\"M5,13H7.5A1.5,1.5,0,0,0,9,11.5H9A1.5,1.5,0,0,0,7.5,10h-1A1.5,1.5,0,0,1,5,8.5H5A1.5,1.5,0,0,1,6.5,7H9\" stroke=\"#000\"/>\n        <path d=\"M7,7V6m0,8V13m5,2h3m-2-4h2\" stroke=\"#000\" data-name=\"secondary\"/>\n        <path d=\"M5,18v3l2.33-1,2.33,1L12,20l2.34,1,2.33-1L19,21V4a1,1,0,0,0-1-1H11\" stroke=\"#000000000\"/>\n        </g>\n        </svg>\n      ";
      } else if (factDetails.includes('Annual Cash Flow')) {
        // Calendar icon
        iconSvg = "\n        <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <svg width=\"200px\" height=\"200px\" fill=\"#000000\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\">   \n        <path d=\"M15.673,399.151V90.906H122.04V18.808H73.454v56.425H0v339.592h316.082v-15.673H15.673z M89.128,34.482h17.24v40.751 h-17.24V34.482z\"/>     \n        <path d=\"m360.17 75.233v-56.425h-48.587v56.425h-166.04v15.673h272.41v47.02h-378.78v15.674h394.45v-78.367h-73.459zm-15.673 0h-17.24v-40.751h17.24v40.751z\"/>     \n        <path d=\"m433.63 321.16v-144.05h-15.673v144.04c-43.872 3.975-78.367 40.942-78.367 85.832 0 47.533 38.672 86.204 86.204 86.204s86.203-38.67 86.203-86.203c0-44.89-34.495-81.858-78.367-85.832zm-7.837 156.36c-38.891 0-70.531-31.64-70.531-70.531s31.639-70.531 70.531-70.531 70.531 31.64 70.531 70.531c0 38.892-31.64 70.531-70.531 70.531z\"/>     \n        <polygon points=\"433.63 399.15 433.63 359.97 417.96 359.97 417.96 414.82 472.82 414.82 472.82 399.15\"/>     \n        <path d=\"m156.73 179.72v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z\"/>     \n        <path d=\"m229.88 179.72v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z\"/>     \n        <path d=\"m303.02 179.72v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z\"/>     \n        <path d=\"m83.59 252.86v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.674v-15.673h15.673v15.673z\"/>     \n        <path d=\"m156.73 252.86v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z\"/>     \n        <path d=\"m229.88 252.86v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z\"/>     \n        <path d=\"m303.02 252.86v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z\"/>     \n        <path d=\"m83.59 326.01v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.674v-15.673h15.673v15.673z\"/>     \n        <path d=\"m156.73 326.01v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z\"/>     \n        <path d=\"m229.88 326.01v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z\"/>   </svg>\n      ";
      } else if (factDetails.includes('GRM')) {
        // Calculator icon
        iconSvg = "\n        <svg viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\" role=\"img\" class=\"Icon-c11n-8-106-0__sc-13llmml-0 iBJybQ\">\n          <g stroke=\"none\">\n            <path d=\"M24 4H8a2 2 0 00-2 2v20a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 22H8V6h16v20z\"></path>\n            <path d=\"M10 9h12v3H10zM10 14h3v3h-3zM14.5 14h3v3h-3zM19 14h3v3h-3zM10 18h3v3h-3zM14.5 18h3v3h-3zM19 18h3v3h-3zM19 22h3v3h-3z\"></path>\n          </g>\n        </svg>\n      ";
      } else if (factDetails.includes('Cap Rate')) {
        // Percentage icon
        iconSvg = "\n        <svg viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\" role=\"img\" class=\"Icon-c11n-8-106-0__sc-13llmml-0 iBJybQ\">\n          <g stroke=\"none\">\n            <path d=\"M13 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM11 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM28 23.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM26 23.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM8.76 25.67l15.68-18.4-1.52-1.3-15.68 18.4z\"></path>\n          </g>\n        </svg>\n      ";
      } else if (factDetails.includes('Cash on Cash Return')) {
        // Return arrow icon
        iconSvg = "\n        <svg fill=\"#000000\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M21.7,7.3c-0.4-0.4-1-0.4-1.4,0L14,13.6L9.7,9.3C9.5,9.1,9.3,9,9,9C8.7,9,8.5,9.1,8.3,9.3l-6,6C2.1,15.5,2,15.7,2,16c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3L9,11.4l4.3,4.3c0.1,0.1,0.2,0.2,0.3,0.2C13.7,16,13.9,16,14,16c0.2,0,0.5-0.1,0.6-0.3c0,0,0,0,0.1,0c0,0,0,0,0,0s0,0,0,0l7-7C22.1,8.3,22.1,7.7,21.7,7.3z\"></path></g></svg>\n      ";
      }
      return iconSvg;
    }

    /**
     * Create a fact item for displaying in the facts list.
     * @param {string} factDetails - Text content of the fact.
     * @return {HTMLElement} The fact item element.
     */
  }, {
    key: "createFactItem",
    value: function createFactItem(factDetails) {
      // Create container
      var factItem = document.createElement('div');
      factItem.className = 'sc-jNJNQp cjVrGl propfinder-pro-result-item';

      // Get the appropriate icon based on the fact content
      var iconSvg = this.getIconForFact(factDetails);

      // Use Zillow's styling for consistency
      factItem.innerHTML = "\n      <div class=\"sc-hlLBRy jXcrbC\">\n        ".concat(iconSvg, "\n      </div>\n      <span class=\"Text-c11n-8-106-0__sc-aiai24-0 sc-bTTELM ivqQFt jhRedY\">").concat(factDetails, "</span>\n    ");
      return factItem;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIManager);

/***/ }),

/***/ "./src/utils/event-emitter.js":
/*!************************************!*\
  !*** ./src/utils/event-emitter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @fileoverview Basic implementation of an event emitter for pub/sub pattern.
 */
/**
 * Basic implementation of an event emitter for pub/sub pattern.
 */
var EventEmitter = /*#__PURE__*/function () {
  /**
   * Create a new EventEmitter.
   */
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    // Initialize event listeners map
    this.events = new Map();
  }

  /**
   * Subscribe to an event.
   * @param {string} event - Event name.
   * @param {Function} listener - Event callback function.
   * @return {Function} Unsubscribe function.
   */
  return _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, listener) {
      var _this = this;
      // If this event doesn't exist yet, create it with an empty array of listeners
      if (!this.events.has(event)) {
        this.events.set(event, []);
      }

      // Add the listener to the event's array
      this.events.get(event).push(listener);

      // Return a function to remove this listener
      return function () {
        return _this.off(event, listener);
      };
    }

    /**
     * Subscribe to an event once.
     * @param {string} event - Event name.
     * @param {Function} listener - Event callback function.
     * @return {Function} Unsubscribe function.
     */
  }, {
    key: "once",
    value: function once(event, listener) {
      var _this2 = this;
      // Create a wrapper function that removes itself after first execution
      var _onceWrapper = function onceWrapper() {
        // Remove this wrapper
        _this2.off(event, _onceWrapper);
        // Call original listener
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        listener.apply(_this2, args);
      };

      // Store reference to original for removal
      _onceWrapper.originalListener = listener;

      // Register the wrapped listener
      return this.on(event, _onceWrapper);
    }

    /**
     * Unsubscribe from an event.
     * @param {string} event - Event name.
     * @param {Function} listenerToRemove - Listener function to remove.
     * @return {EventEmitter} this, for chaining.
     */
  }, {
    key: "off",
    value: function off(event, listenerToRemove) {
      // If no event exists, return early
      if (!this.events.has(event)) {
        return this;
      }

      // Get current listeners
      var listeners = this.events.get(event);

      // Filter out the listener to remove
      var filteredListeners = listeners.filter(function (listener) {
        return listener !== listenerToRemove && listener.originalListener !== listenerToRemove;
      });

      // If we have remaining listeners, update the array
      if (filteredListeners.length > 0) {
        this.events.set(event, filteredListeners);
      } else {
        // Otherwise delete the event entirely
        this.events["delete"](event);
      }
      return this;
    }

    /**
     * Emit an event.
     * @param {string} event - Event name.
     * @param {...*} args - Arguments to pass to listeners.
     * @return {boolean} True if the event had listeners, false otherwise.
     */
  }, {
    key: "emit",
    value: function emit(event) {
      var _this3 = this;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      // If no event exists, return false
      if (!this.events.has(event)) {
        return false;
      }

      // Get and call all listeners
      var listeners = this.events.get(event);
      listeners.forEach(function (listener) {
        try {
          listener.apply(_this3, args);
        } catch (error) {
          console.error("Error in ".concat(event, " event listener:"), error);
        }
      });
      return true;
    }

    /**
     * Remove all listeners.
     * @param {string=} event - Optional event name, if not provided all events are cleared.
     * @return {EventEmitter} this, for chaining.
     */
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(event) {
      if (event) {
        // Remove specific event
        this.events["delete"](event);
      } else {
        // Remove all events
        this.events.clear();
      }
      return this;
    }

    /**
     * Get all listeners for an event.
     * @param {string} event - Event name.
     * @return {Array<Function>} Array of listeners.
     */
  }, {
    key: "listeners",
    value: function listeners(event) {
      return this.events.has(event) ? _toConsumableArray(this.events.get(event)) : [];
    }

    /**
     * Get listener count for an event.
     * @param {string} event - Event name.
     * @return {number} Number of listeners.
     */
  }, {
    key: "listenerCount",
    value: function listenerCount(event) {
      return this.events.has(event) ? this.events.get(event).length : 0;
    }

    /**
     * Get all event names.
     * @return {Array<string>} Array of event names.
     */
  }, {
    key: "eventNames",
    value: function eventNames() {
      return Array.from(this.events.keys());
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventEmitter);

/***/ }),

/***/ "./src/utils/formatter-util.js":
/*!*************************************!*\
  !*** ./src/utils/formatter-util.js ***!
  \*************************************/
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
 * @fileoverview Utility for formatting and parsing values.
 */
/**
 * Utility for formatting and parsing values.
 */
var FormatterUtil = /*#__PURE__*/function () {
  /**
   * Create a new FormatterUtil.
   */
  function FormatterUtil() {
    _classCallCheck(this, FormatterUtil);
    // Create reusable formatters
    this.currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    this.percentFormatter = new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });
    this.numberFormatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1
    });
  }

  /**
   * Format a value as currency.
   * @param {number} value - Value to format.
   * @return {string} Formatted currency string.
   */
  return _createClass(FormatterUtil, [{
    key: "formatCurrency",
    value: function formatCurrency(value) {
      // Handle invalid values
      var numValue = this.ensureNumber(value);
      return this.currencyFormatter.format(numValue);
    }

    /**
     * Format a value as percentage.
     * @param {number} value - Value to format (0-100).
     * @return {string} Formatted percentage string.
     */
  }, {
    key: "formatPercent",
    value: function formatPercent(value) {
      // Handle invalid values
      var numValue = this.ensureNumber(value);

      // Convert from percentage (0-100) to decimal (0-1)
      var decimalValue = numValue / 100;
      return this.percentFormatter.format(decimalValue);
    }

    /**
     * Format a value as a decimal number.
     * @param {number} value - Value to format.
     * @param {number=} decimals - Number of decimal places.
     * @return {string} Formatted number string.
     */
  }, {
    key: "formatNumber",
    value: function formatNumber(value) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      // Handle invalid values
      var numValue = this.ensureNumber(value);
      if (decimals !== this.numberFormatter.resolvedOptions().maximumFractionDigits) {
        // Create a new formatter with the specified decimals
        var formatter = new Intl.NumberFormat('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: decimals
        });
        return formatter.format(numValue);
      }
      return this.numberFormatter.format(numValue);
    }

    /**
     * Parse a money value from text.
     * @param {string} text - Text containing a money value.
     * @return {number} Parsed numeric value.
     */
  }, {
    key: "parseMoneyValue",
    value: function parseMoneyValue(text) {
      if (!text) return 0;

      // Try to extract using regex for money pattern
      var moneyPattern = /\$([0-9,.]+)/;
      var match = String(text).match(moneyPattern);
      if (match && match[1]) {
        // Remove commas and convert to number
        return parseFloat(match[1].replace(/,/g, '')) || 0;
      }

      // Fallback: just try to remove $ and commas from the whole string
      return parseFloat(String(text).replace(/[$,]/g, '')) || 0;
    }

    /**
     * Ensure value is a valid number.
     * @param {*} value - Value to check.
     * @return {number} Valid number or 0.
     */
  }, {
    key: "ensureNumber",
    value: function ensureNumber(value) {
      var num = parseFloat(value);
      return !isNaN(num) ? num : 0;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormatterUtil);

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
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_app_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/app-controller.js */ "./src/controllers/app-controller.js");
/**
 * @fileoverview Main entry point for the Zillow property analysis extension.
 */



/**
 * Initialize the application when the page is loaded.
 */
function initializeApp() {
  // Check if we're on a Zillow property page
  if (window.location.href.includes('zillow.com/homedetails')) {
    console.log('PropFinder Pro: Property page detected');

    // Create and initialize the app controller
    var app = new _controllers_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    // Give the page time to fully load
    setTimeout(function () {
      app.initialize();
    }, 1500);
  }
}

// Run the app when the page is fully loaded
window.addEventListener('load', initializeApp);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQSxTQUFTMEcsYUFBYUEsQ0FBQSxFQUFHO0VBQ3ZCO0VBQ0EsSUFBSTVQLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNNLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO0lBQzNEYixPQUFPLENBQUNrUSxHQUFHLENBQUMsd0NBQXdDLENBQUM7O0lBRXJEO0lBQ0EsSUFBTUMsR0FBRyxHQUFHLElBQUl6UyxzRUFBYSxDQUFDLENBQUM7O0lBRS9CO0lBQ0FnRCxVQUFVLENBQUMsWUFBTTtNQUNmeVAsR0FBRyxDQUFDdlIsVUFBVSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNWO0FBQ0Y7O0FBRUE7QUFDQXlCLE1BQU0sQ0FBQ00sZ0JBQWdCLENBQUMsTUFBTSxFQUFFc1AsYUFBYSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby8uL3NyYy9jb250cm9sbGVycy9hcHAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby8uL3NyYy9tb2RlbHMvaW52ZXN0bWVudC1hc3N1bXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby8uL3NyYy9tb2RlbHMvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vLi9zcmMvc2VydmljZXMvaW52ZXN0bWVudC1jYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL3NlcnZpY2VzL3Byb3BlcnR5LWRhdGEtZXh0cmFjdG9yLmpzIiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS5qcyIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby8uL3NyYy91aS91aS1tYW5hZ2VyLmpzIiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL3V0aWxzL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vLi9zcmMvdXRpbHMvZm9ybWF0dGVyLXV0aWwuanMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby8uL3NyYy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBNYWluIGNvbnRyb2xsZXIgZm9yIHRoZSBQcm9wRmluZGVyIFBybyBleHRlbnNpb24uXG4gKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi91dGlscy9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICcuLi9tb2RlbHMvcHJvcGVydHkuanMnO1xuaW1wb3J0IEludmVzdG1lbnRBc3N1bXB0aW9ucyBmcm9tICcuLi9tb2RlbHMvaW52ZXN0bWVudC1hc3N1bXB0aW9ucy5qcyc7XG5pbXBvcnQgUHJvcGVydHlEYXRhRXh0cmFjdG9yIGZyb20gJy4uL3NlcnZpY2VzL3Byb3BlcnR5LWRhdGEtZXh0cmFjdG9yLmpzJztcbmltcG9ydCBJbnZlc3RtZW50Q2FsY3VsYXRvciBmcm9tICcuLi9zZXJ2aWNlcy9pbnZlc3RtZW50LWNhbGN1bGF0b3IuanMnO1xuaW1wb3J0IFN0b3JhZ2VTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS5qcyc7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gJy4uL3VpL3VpLW1hbmFnZXIuanMnO1xuXG4vKipcbiAqIE1haW4gY29udHJvbGxlciBmb3IgdGhlIFByb3BGaW5kZXIgUHJvIGV4dGVuc2lvbi5cbiAqL1xuY2xhc3MgQXBwQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgQXBwQ29udHJvbGxlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEluaXRpYWxpemUgZXZlbnQgZW1pdHRlclxuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIC8vIEluaXRpYWxpemUgc2VydmljZXNcbiAgICB0aGlzLnByb3BlcnR5RXh0cmFjdG9yID0gbmV3IFByb3BlcnR5RGF0YUV4dHJhY3RvcigpO1xuICAgIHRoaXMuY2FsY3VsYXRvciA9IG5ldyBJbnZlc3RtZW50Q2FsY3VsYXRvcigpO1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlU2VydmljZSgpO1xuICAgIFxuICAgIC8vIEluaXRpYWxpemUgVUkgbWFuYWdlclxuICAgIHRoaXMudWkgPSBuZXcgVUlNYW5hZ2VyKHRoaXMuY2FsY3VsYXRvciwgdGhpcy5ldmVudHMpO1xuICAgIFxuICAgIC8vIEN1cnJlbnQgc3RhdGVcbiAgICB0aGlzLmN1cnJlbnRQcm9wZXJ0eSA9IG51bGw7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IG51bGw7XG4gICAgXG4gICAgLy8gQmluZCBtZXRob2RzIHRvIG1haW50YWluIGNvbnRleHRcbiAgICB0aGlzLmhhbmRsZVByb3BlcnR5SW5wdXQgPSB0aGlzLmhhbmRsZVByb3BlcnR5SW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNldHRpbmdzVXBkYXRlID0gdGhpcy5oYW5kbGVTZXR0aW5nc1VwZGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGFwcC5cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgLy8gTG9hZCBpbnZlc3RtZW50IGFzc3VtcHRpb25zIGZyb20gc3RvcmFnZVxuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhd2FpdCB0aGlzLnN0b3JhZ2UubG9hZEFzc3VtcHRpb25zKCk7XG4gICAgXG4gICAgLy8gRXh0cmFjdCBwcm9wZXJ0eSBkYXRhIGZyb20gdGhlIHBhZ2VcbiAgICB0aGlzLmN1cnJlbnRQcm9wZXJ0eSA9IHRoaXMucHJvcGVydHlFeHRyYWN0b3IuZXh0cmFjdFByb3BlcnR5KCk7XG4gICAgXG4gICAgLy8gU2V0IHVwIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIFxuICAgIC8vIEluaXRpYWxpemUgVUlcbiAgICB0aGlzLnVpLmluaXRpYWxpemUoKTtcbiAgICBcbiAgICAvLyBVcGRhdGUgVUkgd2l0aCBpbml0aWFsIHByb3BlcnR5IGRhdGFcbiAgICB0aGlzLmV2ZW50cy5lbWl0KCdwcm9wZXJ0eVVwZGF0ZWQnLCB0aGlzLmN1cnJlbnRQcm9wZXJ0eSk7XG4gICAgXG4gICAgLy8gQ2FsY3VsYXRlIGFuZCBkaXNwbGF5IGluaXRpYWwgYW5hbHlzaXNcbiAgICB0aGlzLnVwZGF0ZUFuYWx5c2lzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIGV2ZW50IGxpc3RlbmVycy5cbiAgICovXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gTGlzdGVuIGZvciBwcm9wZXJ0eSBpbnB1dCB1cGRhdGVzIGZyb20gVUlcbiAgICB0aGlzLmV2ZW50cy5vbigncHJvcGVydHlJbnB1dFVwZGF0ZWQnLCB0aGlzLmhhbmRsZVByb3BlcnR5SW5wdXQpO1xuICAgIFxuICAgIC8vIExpc3RlbiBmb3Igc2V0dGluZ3MgdXBkYXRlcyBmcm9tIHBvcHVwXG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2V0dGluZ3NVcGRhdGVkJykge1xuICAgICAgICB0aGlzLmhhbmRsZVNldHRpbmdzVXBkYXRlKG1lc3NhZ2Uub3B0aW9ucywgc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIEtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZVxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8vIExpc3RlbiBmb3IgVVJMIGNoYW5nZXNcbiAgICB0aGlzLm9ic2VydmVVcmxDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHByb3BlcnR5IGlucHV0IHVwZGF0ZXMgZnJvbSBVSS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnR5RGF0YSAtIFVwZGF0ZWQgcHJvcGVydHkgZGF0YS5cbiAgICovXG4gIGhhbmRsZVByb3BlcnR5SW5wdXQocHJvcGVydHlEYXRhKSB7XG4gICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IHByb3BlcnR5XG4gICAgdGhpcy5jdXJyZW50UHJvcGVydHkudXBkYXRlKHByb3BlcnR5RGF0YSk7XG4gICAgXG4gICAgLy8gUmVjYWxjdWxhdGUgYW5kIGRpc3BsYXkgYW5hbHlzaXNcbiAgICB0aGlzLnVwZGF0ZUFuYWx5c2lzKCk7XG4gICAgXG4gICAgLy8gU2F2ZSB1cGRhdGVkIHByb3BlcnR5IHRvIHN0b3JhZ2VcbiAgICB0aGlzLnN0b3JhZ2Uuc2F2ZVByb3BlcnR5KHRoaXMuY3VycmVudFByb3BlcnR5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgc2V0dGluZ3MgdXBkYXRlcyBmcm9tIHBvcHVwLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFVwZGF0ZWQgaW52ZXN0bWVudCBhc3N1bXB0aW9ucy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbj19IHNlbmRSZXNwb25zZSAtIEZ1bmN0aW9uIHRvIHNlbmQgcmVzcG9uc2UgdG8gcG9wdXAuXG4gICAqL1xuICBoYW5kbGVTZXR0aW5nc1VwZGF0ZShvcHRpb25zLCBzZW5kUmVzcG9uc2UpIHtcbiAgICB0cnkge1xuICAgICAgLy8gVXBkYXRlIGFzc3VtcHRpb25zXG4gICAgICB0aGlzLmFzc3VtcHRpb25zLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgIFxuICAgICAgLy8gUmVjYWxjdWxhdGUgYW5kIGRpc3BsYXkgYW5hbHlzaXNcbiAgICAgIHRoaXMudXBkYXRlQW5hbHlzaXMoKTtcbiAgICAgIFxuICAgICAgLy8gUmVzcG9uZCB0aGF0IHVwZGF0ZSB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgaWYgKHNlbmRSZXNwb25zZSkge1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBzZXR0aW5nczonLCBlcnJvcik7XG4gICAgICBpZiAoc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBpbnZlc3RtZW50IGFuYWx5c2lzLlxuICAgKi9cbiAgdXBkYXRlQW5hbHlzaXMoKSB7XG4gICAgLy8gQ2FsY3VsYXRlIG1ldHJpY3NcbiAgICBjb25zdCBhbmFseXNpc1Jlc3VsdHMgPSB0aGlzLmNhbGN1bGF0b3IuYW5hbHl6ZSh0aGlzLmN1cnJlbnRQcm9wZXJ0eSwgdGhpcy5hc3N1bXB0aW9ucyk7XG4gICAgXG4gICAgLy8gRW1pdCBldmVudCB3aXRoIGFuYWx5c2lzIHJlc3VsdHNcbiAgICB0aGlzLmV2ZW50cy5lbWl0KCdhbmFseXNpc1VwZGF0ZWQnLCBhbmFseXNpc1Jlc3VsdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmUgVVJMIGNoYW5nZXMgZm9yIHNpbmdsZS1wYWdlIGFwcCBuYXZpZ2F0aW9uLlxuICAgKi9cbiAgb2JzZXJ2ZVVybENoYW5nZXMoKSB7XG4gICAgbGV0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBcbiAgICAvLyBDaGVjayBmb3IgVVJMIGNoYW5nZXMgcGVyaW9kaWNhbGx5XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRVcmwgIT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG4gICAgICAgIGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIHdlJ3JlIG9uIGEgcHJvcGVydHkgZGV0YWlscyBwYWdlXG4gICAgICAgIGlmICh0aGlzLmlzUHJvcGVydHlQYWdlKGN1cnJlbnRVcmwpKSB7XG4gICAgICAgICAgLy8gV2FpdCBmb3IgcGFnZSB0byBsb2FkXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBFeHRyYWN0IG5ldyBwcm9wZXJ0eSBkYXRhXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9wZXJ0eSA9IHRoaXMucHJvcGVydHlFeHRyYWN0b3IuZXh0cmFjdFByb3BlcnR5KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBVSSB3aXRoIG5ldyBwcm9wZXJ0eSBkYXRhXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KCdwcm9wZXJ0eVVwZGF0ZWQnLCB0aGlzLmN1cnJlbnRQcm9wZXJ0eSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGFuZCBkaXNwbGF5IGFuYWx5c2lzXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFuYWx5c2lzKCk7XG4gICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCA1MDApO1xuICAgIFxuICAgIC8vIEFsc28gbGlzdGVuIGZvciBIaXN0b3J5IEFQSSBjaGFuZ2VzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgd2UncmUgb24gYSBwcm9wZXJ0eSBkZXRhaWxzIHBhZ2VcbiAgICAgIGlmICh0aGlzLmlzUHJvcGVydHlQYWdlKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkge1xuICAgICAgICAvLyBXYWl0IGZvciBwYWdlIHRvIGxvYWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gRXh0cmFjdCBuZXcgcHJvcGVydHkgZGF0YVxuICAgICAgICAgIHRoaXMuY3VycmVudFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0eUV4dHJhY3Rvci5leHRyYWN0UHJvcGVydHkoKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBVcGRhdGUgVUkgd2l0aCBuZXcgcHJvcGVydHkgZGF0YVxuICAgICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoJ3Byb3BlcnR5VXBkYXRlZCcsIHRoaXMuY3VycmVudFByb3BlcnR5KTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBSZWNhbGN1bGF0ZSBhbmQgZGlzcGxheSBhbmFseXNpc1xuICAgICAgICAgIHRoaXMudXBkYXRlQW5hbHlzaXMoKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgVVJMIGlzIGEgcHJvcGVydHkgZGV0YWlscyBwYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGl0J3MgYSBwcm9wZXJ0eSBkZXRhaWxzIHBhZ2UuXG4gICAqL1xuICBpc1Byb3BlcnR5UGFnZSh1cmwpIHtcbiAgICByZXR1cm4gdXJsLmluY2x1ZGVzKCd6aWxsb3cuY29tL2hvbWVkZXRhaWxzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udHJvbGxlcjsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgTW9kZWwgcmVwcmVzZW50aW5nIGludmVzdG1lbnQgYXNzdW1wdGlvbiBzZXR0aW5ncy5cbiAqL1xuXG4vKipcbiAqIE1vZGVsIHJlcHJlc2VudGluZyBpbnZlc3RtZW50IGFzc3VtcHRpb24gc2V0dGluZ3MuXG4gKi9cbmNsYXNzIEludmVzdG1lbnRBc3N1bXB0aW9ucyB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBmb3IgaW52ZXN0bWVudCBhc3N1bXB0aW9ucy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBEZWZhdWx0IHNldHRpbmdzLlxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gTW9ydGdhZ2UgYXNzdW1wdGlvbnNcbiAgICAgIGludGVyZXN0UmF0ZTogNy41LFxuICAgICAgbG9hblRlcm06IDMwLFxuICAgICAgZG93blBheW1lbnQ6IDIwLFxuICAgICAgY2xvc2luZ0Nvc3RzOiAzLFxuICAgICAgXG4gICAgICAvLyBPcGVyYXRpbmcgZXhwZW5zZSBhc3N1bXB0aW9uc1xuICAgICAgcHJvcGVydHlUYXhSYXRlOiAxLjIsXG4gICAgICBpbnN1cmFuY2VSYXRlOiAwLjUsXG4gICAgICBtYWludGVuYW5jZVJhdGU6IDEsXG4gICAgICBwcm9wZXJ0eU1hbmFnZW1lbnRSYXRlOiAxMCxcbiAgICAgIHZhY2FuY3lSYXRlOiA1XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgSW52ZXN0bWVudEFzc3VtcHRpb25zIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnMgLSBJbnZlc3RtZW50IGFzc3VtcHRpb24gc2V0dGluZ3MuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IEludmVzdG1lbnRBc3N1bXB0aW9ucy5kZWZhdWx0cztcbiAgICBcbiAgICAvLyBNb3J0Z2FnZSBhc3N1bXB0aW9uc1xuICAgIHRoaXMuaW50ZXJlc3RSYXRlID0gb3B0aW9ucy5pbnRlcmVzdFJhdGUgPz8gZGVmYXVsdHMuaW50ZXJlc3RSYXRlO1xuICAgIHRoaXMubG9hblRlcm0gPSBvcHRpb25zLmxvYW5UZXJtID8/IGRlZmF1bHRzLmxvYW5UZXJtO1xuICAgIHRoaXMuZG93blBheW1lbnQgPSBvcHRpb25zLmRvd25QYXltZW50ID8/IGRlZmF1bHRzLmRvd25QYXltZW50O1xuICAgIHRoaXMuY2xvc2luZ0Nvc3RzID0gb3B0aW9ucy5jbG9zaW5nQ29zdHMgPz8gZGVmYXVsdHMuY2xvc2luZ0Nvc3RzO1xuICAgIFxuICAgIC8vIE9wZXJhdGluZyBleHBlbnNlIGFzc3VtcHRpb25zXG4gICAgdGhpcy5wcm9wZXJ0eVRheFJhdGUgPSBvcHRpb25zLnByb3BlcnR5VGF4UmF0ZSA/PyBkZWZhdWx0cy5wcm9wZXJ0eVRheFJhdGU7XG4gICAgdGhpcy5pbnN1cmFuY2VSYXRlID0gb3B0aW9ucy5pbnN1cmFuY2VSYXRlID8/IGRlZmF1bHRzLmluc3VyYW5jZVJhdGU7XG4gICAgdGhpcy5tYWludGVuYW5jZVJhdGUgPSBvcHRpb25zLm1haW50ZW5hbmNlUmF0ZSA/PyBkZWZhdWx0cy5tYWludGVuYW5jZVJhdGU7XG4gICAgdGhpcy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlID0gXG4gICAgICAgIG9wdGlvbnMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZSA/PyBkZWZhdWx0cy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlO1xuICAgIHRoaXMudmFjYW5jeVJhdGUgPSBvcHRpb25zLnZhY2FuY3lSYXRlID8/IGRlZmF1bHRzLnZhY2FuY3lSYXRlO1xuICAgIFxuICAgIC8vIFZhbGlkYXRlIGFsbCB2YWx1ZXNcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgYWxsIGFzc3VtcHRpb24gdmFsdWVzIGFuZCBzZXQgdG8gZGVmYXVsdHMgaWYgaW52YWxpZC5cbiAgICovXG4gIHZhbGlkYXRlKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gSW52ZXN0bWVudEFzc3VtcHRpb25zLmRlZmF1bHRzO1xuICAgIFxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byB2YWxpZGF0ZSBudW1lcmljIHZhbHVlc1xuICAgIGNvbnN0IHZhbGlkYXRlTnVtYmVyID0gKHZhbHVlLCBkZWZhdWx0VmFsdWUsIG1pbiA9IDAsIG1heCA9IE51bWJlci5NQVhfVkFMVUUpID0+IHtcbiAgICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgcmV0dXJuICFpc05hTihudW0pICYmIG51bSA+PSBtaW4gJiYgbnVtIDw9IG1heCA/IG51bSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9O1xuICAgIFxuICAgIC8vIFZhbGlkYXRlIGFsbCBwcm9wZXJ0aWVzXG4gICAgdGhpcy5pbnRlcmVzdFJhdGUgPSB2YWxpZGF0ZU51bWJlcih0aGlzLmludGVyZXN0UmF0ZSwgZGVmYXVsdHMuaW50ZXJlc3RSYXRlLCAwLCAzMCk7XG4gICAgdGhpcy5sb2FuVGVybSA9IHZhbGlkYXRlTnVtYmVyKHRoaXMubG9hblRlcm0sIGRlZmF1bHRzLmxvYW5UZXJtLCAxLCA1MCk7XG4gICAgdGhpcy5kb3duUGF5bWVudCA9IHZhbGlkYXRlTnVtYmVyKHRoaXMuZG93blBheW1lbnQsIGRlZmF1bHRzLmRvd25QYXltZW50LCAwLCAxMDApO1xuICAgIHRoaXMuY2xvc2luZ0Nvc3RzID0gdmFsaWRhdGVOdW1iZXIodGhpcy5jbG9zaW5nQ29zdHMsIGRlZmF1bHRzLmNsb3NpbmdDb3N0cywgMCwgMjApO1xuICAgIFxuICAgIHRoaXMucHJvcGVydHlUYXhSYXRlID0gXG4gICAgICAgIHZhbGlkYXRlTnVtYmVyKHRoaXMucHJvcGVydHlUYXhSYXRlLCBkZWZhdWx0cy5wcm9wZXJ0eVRheFJhdGUsIDAsIDEwKTtcbiAgICB0aGlzLmluc3VyYW5jZVJhdGUgPSBcbiAgICAgICAgdmFsaWRhdGVOdW1iZXIodGhpcy5pbnN1cmFuY2VSYXRlLCBkZWZhdWx0cy5pbnN1cmFuY2VSYXRlLCAwLCA1KTtcbiAgICB0aGlzLm1haW50ZW5hbmNlUmF0ZSA9IFxuICAgICAgICB2YWxpZGF0ZU51bWJlcih0aGlzLm1haW50ZW5hbmNlUmF0ZSwgZGVmYXVsdHMubWFpbnRlbmFuY2VSYXRlLCAwLCAxNSk7XG4gICAgdGhpcy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlID0gXG4gICAgICAgIHZhbGlkYXRlTnVtYmVyKHRoaXMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZSwgZGVmYXVsdHMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZSwgMCwgMjApO1xuICAgIHRoaXMudmFjYW5jeVJhdGUgPSBcbiAgICAgICAgdmFsaWRhdGVOdW1iZXIodGhpcy52YWNhbmN5UmF0ZSwgZGVmYXVsdHMudmFjYW5jeVJhdGUsIDAsIDUwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYXNzdW1wdGlvbnMgd2l0aCBuZXcgdmFsdWVzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE5ldyBhc3N1bXB0aW9uIHZhbHVlcy5cbiAgICovXG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaW50ZXJlc3RSYXRlICE9PSB1bmRlZmluZWQpIHRoaXMuaW50ZXJlc3RSYXRlID0gb3B0aW9ucy5pbnRlcmVzdFJhdGU7XG4gICAgaWYgKG9wdGlvbnMubG9hblRlcm0gIT09IHVuZGVmaW5lZCkgdGhpcy5sb2FuVGVybSA9IG9wdGlvbnMubG9hblRlcm07XG4gICAgaWYgKG9wdGlvbnMuZG93blBheW1lbnQgIT09IHVuZGVmaW5lZCkgdGhpcy5kb3duUGF5bWVudCA9IG9wdGlvbnMuZG93blBheW1lbnQ7XG4gICAgaWYgKG9wdGlvbnMuY2xvc2luZ0Nvc3RzICE9PSB1bmRlZmluZWQpIHRoaXMuY2xvc2luZ0Nvc3RzID0gb3B0aW9ucy5jbG9zaW5nQ29zdHM7XG4gICAgXG4gICAgaWYgKG9wdGlvbnMucHJvcGVydHlUYXhSYXRlICE9PSB1bmRlZmluZWQpIHRoaXMucHJvcGVydHlUYXhSYXRlID0gb3B0aW9ucy5wcm9wZXJ0eVRheFJhdGU7XG4gICAgaWYgKG9wdGlvbnMuaW5zdXJhbmNlUmF0ZSAhPT0gdW5kZWZpbmVkKSB0aGlzLmluc3VyYW5jZVJhdGUgPSBvcHRpb25zLmluc3VyYW5jZVJhdGU7XG4gICAgaWYgKG9wdGlvbnMubWFpbnRlbmFuY2VSYXRlICE9PSB1bmRlZmluZWQpIHRoaXMubWFpbnRlbmFuY2VSYXRlID0gb3B0aW9ucy5tYWludGVuYW5jZVJhdGU7XG4gICAgaWYgKG9wdGlvbnMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnByb3BlcnR5TWFuYWdlbWVudFJhdGUgPSBvcHRpb25zLnByb3BlcnR5TWFuYWdlbWVudFJhdGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnZhY2FuY3lSYXRlICE9PSB1bmRlZmluZWQpIHRoaXMudmFjYW5jeVJhdGUgPSBvcHRpb25zLnZhY2FuY3lSYXRlO1xuICAgIFxuICAgIC8vIFZhbGlkYXRlIGFmdGVyIHVwZGF0aW5nXG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdG8gSlNPTiBvYmplY3QuXG4gICAqIEByZXR1cm4ge09iamVjdH0gSlNPTiByZXByZXNlbnRhdGlvbi5cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZXJlc3RSYXRlOiB0aGlzLmludGVyZXN0UmF0ZSxcbiAgICAgIGxvYW5UZXJtOiB0aGlzLmxvYW5UZXJtLFxuICAgICAgZG93blBheW1lbnQ6IHRoaXMuZG93blBheW1lbnQsXG4gICAgICBjbG9zaW5nQ29zdHM6IHRoaXMuY2xvc2luZ0Nvc3RzLFxuICAgICAgXG4gICAgICBwcm9wZXJ0eVRheFJhdGU6IHRoaXMucHJvcGVydHlUYXhSYXRlLFxuICAgICAgaW5zdXJhbmNlUmF0ZTogdGhpcy5pbnN1cmFuY2VSYXRlLFxuICAgICAgbWFpbnRlbmFuY2VSYXRlOiB0aGlzLm1haW50ZW5hbmNlUmF0ZSxcbiAgICAgIHByb3BlcnR5TWFuYWdlbWVudFJhdGU6IHRoaXMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZSxcbiAgICAgIHZhY2FuY3lSYXRlOiB0aGlzLnZhY2FuY3lSYXRlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgSW52ZXN0bWVudEFzc3VtcHRpb25zIGZyb20gSlNPTi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGpzb24gLSBKU09OIGRhdGEuXG4gICAqIEByZXR1cm4ge0ludmVzdG1lbnRBc3N1bXB0aW9uc30gTmV3IEludmVzdG1lbnRBc3N1bXB0aW9ucyBpbnN0YW5jZS5cbiAgICovXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgcmV0dXJuIG5ldyBJbnZlc3RtZW50QXNzdW1wdGlvbnMoanNvbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52ZXN0bWVudEFzc3VtcHRpb25zOyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBQcm9wZXJ0eSBtb2RlbCByZXByZXNlbnRpbmcgYSByZWFsIGVzdGF0ZSBwcm9wZXJ0eSBsaXN0aW5nLlxuICovXG5cbi8qKlxuICogUHJvcGVydHkgbW9kZWwgcmVwcmVzZW50aW5nIGEgcmVhbCBlc3RhdGUgcHJvcGVydHkgbGlzdGluZy5cbiAqL1xuY2xhc3MgUHJvcGVydHkge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFByb3BlcnR5IGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge09iamVjdD19IGRhdGEgLSBQcm9wZXJ0eSBkYXRhLlxuICAgKiBAcGFyYW0ge251bWJlcj19IGRhdGEucHJpY2UgLSBMaXN0aW5nIHByaWNlLlxuICAgKiBAcGFyYW0ge251bWJlcj19IGRhdGEucmVudEVzdGltYXRlIC0gTW9udGhseSByZW50IGVzdGltYXRlLlxuICAgKiBAcGFyYW0ge251bWJlcj19IGRhdGEucmVwYWlyQ29zdCAtIEVzdGltYXRlZCByZXBhaXIgY29zdHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5tb250aGx5SW5jb21lIC0gTW9udGhseSByZW50YWwgaW5jb21lLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IGRhdGEuYWRkcmVzcyAtIFByb3BlcnR5IGFkZHJlc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gZGF0YS51cmwgLSBQcm9wZXJ0eSBsaXN0aW5nIFVSTC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGEgPSB7fSkge1xuICAgIHRoaXMucHJpY2UgPSBkYXRhLnByaWNlIHx8IDA7XG4gICAgdGhpcy5yZW50RXN0aW1hdGUgPSBkYXRhLnJlbnRFc3RpbWF0ZSB8fCAwO1xuICAgIHRoaXMucmVwYWlyQ29zdCA9IGRhdGEucmVwYWlyQ29zdCB8fCAwO1xuICAgIHRoaXMubW9udGhseUluY29tZSA9IGRhdGEubW9udGhseUluY29tZSB8fCB0aGlzLnJlbnRFc3RpbWF0ZSB8fCAwO1xuICAgIHRoaXMuYWRkcmVzcyA9IGRhdGEuYWRkcmVzcyB8fCAnJztcbiAgICB0aGlzLnVybCA9IGRhdGEudXJsIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYWRqdXN0ZWQgcHVyY2hhc2UgcHJpY2UgaW5jbHVkaW5nIHJlcGFpciBjb3N0cy5cbiAgICogQHJldHVybiB7bnVtYmVyfSBBZGp1c3RlZCBwcmljZS5cbiAgICovXG4gIGdldEFkanVzdGVkUHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpY2UgKyB0aGlzLnJlcGFpckNvc3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhbm51YWwgcmVudGFsIGluY29tZS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBBbm51YWwgaW5jb21lLlxuICAgKi9cbiAgZ2V0QW5udWFsSW5jb21lKCkge1xuICAgIHJldHVybiB0aGlzLm1vbnRobHlJbmNvbWUgKiAxMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHByb3BlcnR5IGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVXBkYXRlZCBwcm9wZXJ0eSBkYXRhLlxuICAgKiBAcGFyYW0ge251bWJlcj19IGRhdGEucHJpY2UgLSBMaXN0aW5nIHByaWNlLlxuICAgKiBAcGFyYW0ge251bWJlcj19IGRhdGEucmVwYWlyQ29zdCAtIEVzdGltYXRlZCByZXBhaXIgY29zdHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5tb250aGx5SW5jb21lIC0gTW9udGhseSByZW50YWwgaW5jb21lLlxuICAgKiBAcGFyYW0ge251bWJlcj19IGRhdGEucmVudEVzdGltYXRlIC0gTW9udGhseSByZW50IGVzdGltYXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IGRhdGEuYWRkcmVzcyAtIFByb3BlcnR5IGFkZHJlc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gZGF0YS51cmwgLSBQcm9wZXJ0eSBsaXN0aW5nIFVSTC5cbiAgICovXG4gIHVwZGF0ZShkYXRhKSB7XG4gICAgaWYgKGRhdGEucHJpY2UgIT09IHVuZGVmaW5lZCkgdGhpcy5wcmljZSA9IGRhdGEucHJpY2U7XG4gICAgaWYgKGRhdGEucmVwYWlyQ29zdCAhPT0gdW5kZWZpbmVkKSB0aGlzLnJlcGFpckNvc3QgPSBkYXRhLnJlcGFpckNvc3Q7XG4gICAgaWYgKGRhdGEubW9udGhseUluY29tZSAhPT0gdW5kZWZpbmVkKSB0aGlzLm1vbnRobHlJbmNvbWUgPSBkYXRhLm1vbnRobHlJbmNvbWU7XG4gICAgaWYgKGRhdGEucmVudEVzdGltYXRlICE9PSB1bmRlZmluZWQgJiYgIWRhdGEubW9udGhseUluY29tZSkge1xuICAgICAgdGhpcy5yZW50RXN0aW1hdGUgPSBkYXRhLnJlbnRFc3RpbWF0ZTtcbiAgICAgIC8vIE9ubHkgdXBkYXRlIG1vbnRobHkgaW5jb21lIHdpdGggcmVudCBlc3RpbWF0ZSBpZiBub3QgZXhwbGljaXRseSBzZXRcbiAgICAgIGlmICh0aGlzLm1vbnRobHlJbmNvbWUgPT09IDApIHtcbiAgICAgICAgdGhpcy5tb250aGx5SW5jb21lID0gZGF0YS5yZW50RXN0aW1hdGU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkYXRhLmFkZHJlc3MgIT09IHVuZGVmaW5lZCkgdGhpcy5hZGRyZXNzID0gZGF0YS5hZGRyZXNzO1xuICAgIGlmIChkYXRhLnVybCAhPT0gdW5kZWZpbmVkKSB0aGlzLnVybCA9IGRhdGEudXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBwcm9wZXJ0eSB0byBKU09OLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEpTT04gcmVwcmVzZW50YXRpb24uXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByaWNlOiB0aGlzLnByaWNlLFxuICAgICAgcmVudEVzdGltYXRlOiB0aGlzLnJlbnRFc3RpbWF0ZSxcbiAgICAgIHJlcGFpckNvc3Q6IHRoaXMucmVwYWlyQ29zdCxcbiAgICAgIG1vbnRobHlJbmNvbWU6IHRoaXMubW9udGhseUluY29tZSxcbiAgICAgIGFkZHJlc3M6IHRoaXMuYWRkcmVzcyxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFByb3BlcnR5IGZyb20gSlNPTiBkYXRhLlxuICAgKiBAcGFyYW0ge09iamVjdH0ganNvbiAtIEpTT04gZGF0YS5cbiAgICogQHJldHVybiB7UHJvcGVydHl9IE5ldyBQcm9wZXJ0eSBpbnN0YW5jZS5cbiAgICovXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eShqc29uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eTsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgU2VydmljZSBmb3IgY2FsY3VsYXRpbmcgcmVhbCBlc3RhdGUgaW52ZXN0bWVudCBtZXRyaWNzLlxuICovXG5cbi8qKlxuICogU2VydmljZSBmb3IgY2FsY3VsYXRpbmcgcmVhbCBlc3RhdGUgaW52ZXN0bWVudCBtZXRyaWNzLlxuICovXG5jbGFzcyBJbnZlc3RtZW50Q2FsY3VsYXRvciB7XG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYWxsIGludmVzdG1lbnQgbWV0cmljcyBmb3IgYSBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIHtQcm9wZXJ0eX0gcHJvcGVydHkgLSBUaGUgcHJvcGVydHkgdG8gYW5hbHl6ZS5cbiAgICogQHBhcmFtIHtJbnZlc3RtZW50QXNzdW1wdGlvbnN9IGFzc3VtcHRpb25zIC0gSW52ZXN0bWVudCBhc3N1bXB0aW9ucy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBDYWxjdWxhdGVkIGludmVzdG1lbnQgbWV0cmljcy5cbiAgICovXG4gIGNhbGN1bGF0ZU1ldHJpY3MocHJvcGVydHksIGFzc3VtcHRpb25zKSB7XG4gICAgLy8gUHJvcGVydHkgZGF0YVxuICAgIGNvbnN0IHByaWNlID0gcHJvcGVydHkucHJpY2U7XG4gICAgY29uc3QgcmVwYWlyQ29zdCA9IHByb3BlcnR5LnJlcGFpckNvc3Q7XG4gICAgY29uc3QgbW9udGhseUluY29tZSA9IHByb3BlcnR5Lm1vbnRobHlJbmNvbWU7XG4gICAgY29uc3QgYWRqdXN0ZWRQcmljZSA9IHByb3BlcnR5LmdldEFkanVzdGVkUHJpY2UoKTtcbiAgICBjb25zdCBhbm51YWxJbmNvbWUgPSBwcm9wZXJ0eS5nZXRBbm51YWxJbmNvbWUoKTtcbiAgICBcbiAgICAvLyBDYWxjdWxhdGUgYW5udWFsIGV4cGVuc2VzXG4gICAgY29uc3QgZXhwZW5zZXMgPSB0aGlzLmNhbGN1bGF0ZUV4cGVuc2VzKHByb3BlcnR5LCBhc3N1bXB0aW9ucyk7XG4gICAgY29uc3QgdG90YWxBbm51YWxFeHBlbnNlcyA9IGV4cGVuc2VzLnRvdGFsO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSBOT0kgYW5kIGNhcCByYXRlXG4gICAgY29uc3QgbmV0T3BlcmF0aW5nSW5jb21lID0gYW5udWFsSW5jb21lIC0gdG90YWxBbm51YWxFeHBlbnNlcztcbiAgICBjb25zdCBjYXBSYXRlID0gcHJpY2UgPiAwID8gKG5ldE9wZXJhdGluZ0luY29tZSAvIHByaWNlKSAqIDEwMCA6IDA7XG4gICAgXG4gICAgLy8gQ2FsY3VsYXRlIGNhc2ggbmVlZGVkXG4gICAgY29uc3QgZG93blBheW1lbnQgPSBhZGp1c3RlZFByaWNlICogKGFzc3VtcHRpb25zLmRvd25QYXltZW50IC8gMTAwKTtcbiAgICBjb25zdCBjbG9zaW5nQ29zdHMgPSBwcmljZSAqIChhc3N1bXB0aW9ucy5jbG9zaW5nQ29zdHMgLyAxMDApO1xuICAgIGNvbnN0IHRvdGFsQ2FzaE5lZWRlZCA9IGRvd25QYXltZW50ICsgY2xvc2luZ0Nvc3RzICsgcmVwYWlyQ29zdDtcbiAgICBcbiAgICAvLyBDYWxjdWxhdGUgbW9ydGdhZ2UgcGF5bWVudFxuICAgIGNvbnN0IGxvYW5BbW91bnQgPSBwcmljZSAtIGRvd25QYXltZW50O1xuICAgIGNvbnN0IG1vcnRnYWdlUGF5bWVudCA9IHRoaXMuY2FsY3VsYXRlTW9ydGdhZ2VQYXltZW50KFxuICAgICAgICBsb2FuQW1vdW50LCBcbiAgICAgICAgYXNzdW1wdGlvbnMuaW50ZXJlc3RSYXRlLCBcbiAgICAgICAgYXNzdW1wdGlvbnMubG9hblRlcm1cbiAgICApO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSBjYXNoIGZsb3dcbiAgICBjb25zdCBhbm51YWxNb3J0Z2FnZVBheW1lbnQgPSBtb3J0Z2FnZVBheW1lbnQgKiAxMjtcbiAgICBjb25zdCBhbm51YWxDYXNoRmxvdyA9IG5ldE9wZXJhdGluZ0luY29tZSAtIGFubnVhbE1vcnRnYWdlUGF5bWVudDtcbiAgICBjb25zdCBtb250aGx5Q2FzaEZsb3cgPSBhbm51YWxDYXNoRmxvdyAvIDEyO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSByZXR1cm5zXG4gICAgY29uc3QgY2FzaE9uQ2FzaCA9IHRvdGFsQ2FzaE5lZWRlZCA+IDAgPyAoYW5udWFsQ2FzaEZsb3cgLyB0b3RhbENhc2hOZWVkZWQpICogMTAwIDogMDtcbiAgICBjb25zdCBncm9zc1JlbnRNdWx0aXBsaWVyID0gYW5udWFsSW5jb21lID4gMCA/IHByaWNlIC8gYW5udWFsSW5jb21lIDogMDtcbiAgICBcbiAgICAvLyBSZXR1cm4gYWxsIG1ldHJpY3NcbiAgICByZXR1cm4ge1xuICAgICAgLy8gRmluYW5jaWFsIG1ldHJpY3NcbiAgICAgIG5ldE9wZXJhdGluZ0luY29tZSxcbiAgICAgIGNhcFJhdGUsXG4gICAgICBjYXNoT25DYXNoLFxuICAgICAgZ3Jvc3NSZW50TXVsdGlwbGllcixcbiAgICAgIFxuICAgICAgLy8gQ2FzaCBmbG93IG1ldHJpY3NcbiAgICAgIGFubnVhbENhc2hGbG93LFxuICAgICAgbW9udGhseUNhc2hGbG93LFxuICAgICAgXG4gICAgICAvLyBFeHBlbnNlIGJyZWFrZG93blxuICAgICAgZXhwZW5zZXMsXG4gICAgICB0b3RhbEFubnVhbEV4cGVuc2VzLFxuICAgICAgXG4gICAgICAvLyBJbnZlc3RtZW50IGJyZWFrZG93blxuICAgICAgZG93blBheW1lbnQsXG4gICAgICBjbG9zaW5nQ29zdHMsXG4gICAgICB0b3RhbENhc2hOZWVkZWQsXG4gICAgICBcbiAgICAgIC8vIExvYW4gbWV0cmljc1xuICAgICAgbG9hbkFtb3VudCxcbiAgICAgIG1vcnRnYWdlUGF5bWVudCxcbiAgICAgIGFubnVhbE1vcnRnYWdlUGF5bWVudFxuICAgIH07XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcHJvcGVydHkgZXhwZW5zZXMuXG4gICAqIEBwYXJhbSB7UHJvcGVydHl9IHByb3BlcnR5IC0gVGhlIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge0ludmVzdG1lbnRBc3N1bXB0aW9uc30gYXNzdW1wdGlvbnMgLSBJbnZlc3RtZW50IGFzc3VtcHRpb25zLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEV4cGVuc2UgYnJlYWtkb3duLlxuICAgKi9cbiAgY2FsY3VsYXRlRXhwZW5zZXMocHJvcGVydHksIGFzc3VtcHRpb25zKSB7XG4gICAgY29uc3QgcHJpY2UgPSBwcm9wZXJ0eS5wcmljZTtcbiAgICBjb25zdCBhbm51YWxJbmNvbWUgPSBwcm9wZXJ0eS5nZXRBbm51YWxJbmNvbWUoKTtcbiAgICBcbiAgICAvLyBDYWxjdWxhdGUgaW5kaXZpZHVhbCBleHBlbnNlc1xuICAgIGNvbnN0IHByb3BlcnR5VGF4ZXMgPSBwcmljZSAqIChhc3N1bXB0aW9ucy5wcm9wZXJ0eVRheFJhdGUgLyAxMDApO1xuICAgIGNvbnN0IGluc3VyYW5jZSA9IHByaWNlICogKGFzc3VtcHRpb25zLmluc3VyYW5jZVJhdGUgLyAxMDApO1xuICAgIGNvbnN0IG1haW50ZW5hbmNlID0gYW5udWFsSW5jb21lICogKGFzc3VtcHRpb25zLm1haW50ZW5hbmNlUmF0ZSAvIDEwMCk7XG4gICAgY29uc3QgcHJvcGVydHlNYW5hZ2VtZW50ID0gYW5udWFsSW5jb21lICogKGFzc3VtcHRpb25zLnByb3BlcnR5TWFuYWdlbWVudFJhdGUgLyAxMDApO1xuICAgIGNvbnN0IHZhY2FuY3kgPSBhbm51YWxJbmNvbWUgKiAoYXNzdW1wdGlvbnMudmFjYW5jeVJhdGUgLyAxMDApO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBleHBlbnNlc1xuICAgIGNvbnN0IHRvdGFsID0gcHJvcGVydHlUYXhlcyArIGluc3VyYW5jZSArIG1haW50ZW5hbmNlICsgcHJvcGVydHlNYW5hZ2VtZW50ICsgdmFjYW5jeTtcbiAgICBcbiAgICAvLyBSZXR1cm4gZXhwZW5zZSBicmVha2Rvd25cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcGVydHlUYXhlcyxcbiAgICAgIGluc3VyYW5jZSxcbiAgICAgIG1haW50ZW5hbmNlLFxuICAgICAgcHJvcGVydHlNYW5hZ2VtZW50LFxuICAgICAgdmFjYW5jeSxcbiAgICAgIHRvdGFsXG4gICAgfTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBtb250aGx5IG1vcnRnYWdlIHBheW1lbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2FuQW1vdW50IC0gUHJpbmNpcGFsIGxvYW4gYW1vdW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW50ZXJlc3RSYXRlIC0gQW5udWFsIGludGVyZXN0IHJhdGUgKHBlcmNlbnRhZ2UpLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9hblRlcm0gLSBMb2FuIHRlcm0gaW4geWVhcnMuXG4gICAqIEByZXR1cm4ge251bWJlcn0gTW9udGhseSBtb3J0Z2FnZSBwYXltZW50LlxuICAgKi9cbiAgY2FsY3VsYXRlTW9ydGdhZ2VQYXltZW50KGxvYW5BbW91bnQsIGludGVyZXN0UmF0ZSwgbG9hblRlcm0pIHtcbiAgICAvLyBSZXR1cm4gMCBpZiBhbnkgaW5wdXQgaXMgaW52YWxpZFxuICAgIGlmICghbG9hbkFtb3VudCB8fCAhaW50ZXJlc3RSYXRlIHx8ICFsb2FuVGVybSkgcmV0dXJuIDA7XG4gICAgXG4gICAgLy8gQ29udmVydCBhbm51YWwgaW50ZXJlc3QgcmF0ZSB0byBtb250aGx5IGRlY2ltYWxcbiAgICBjb25zdCBtb250aGx5SW50ZXJlc3QgPSAoaW50ZXJlc3RSYXRlIC8gMTAwKSAvIDEyO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSBudW1iZXIgb2YgcGF5bWVudHNcbiAgICBjb25zdCBudW1QYXltZW50cyA9IGxvYW5UZXJtICogMTI7XG4gICAgXG4gICAgLy8gUmV0dXJuIDAgaWYgbW9udGhseSBpbnRlcmVzdCBpcyAwIHRvIGF2b2lkIGRpdmlzaW9uIGJ5IHplcm9cbiAgICBpZiAobW9udGhseUludGVyZXN0ID09PSAwKSByZXR1cm4gbG9hbkFtb3VudCAvIG51bVBheW1lbnRzO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSBtb250aGx5IHBheW1lbnQgdXNpbmcgZm9ybXVsYTogUCA9IExbYygxICsgYylebl0vWygxICsgYylebiAtIDFdXG4gICAgLy8gd2hlcmUgUCA9IHBheW1lbnQsIEwgPSBsb2FuIGFtb3VudCwgYyA9IG1vbnRobHkgaW50ZXJlc3QgcmF0ZSwgbiA9IG51bWJlciBvZiBwYXltZW50c1xuICAgIGNvbnN0IHBheW1lbnQgPSBsb2FuQW1vdW50ICogXG4gICAgICAgICAgICAgICAgICAgKG1vbnRobHlJbnRlcmVzdCAqIE1hdGgucG93KDEgKyBtb250aGx5SW50ZXJlc3QsIG51bVBheW1lbnRzKSkgLyBcbiAgICAgICAgICAgICAgICAgICAoTWF0aC5wb3coMSArIG1vbnRobHlJbnRlcmVzdCwgbnVtUGF5bWVudHMpIC0gMSk7XG4gICAgXG4gICAgcmV0dXJuIHBheW1lbnQ7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBGb3JtYXQgbWV0cmljcyB0byBkaXNwbGF5IHN0cmluZ3MuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtZXRyaWNzIC0gQ2FsY3VsYXRlZCBtZXRyaWNzLlxuICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fSBBcnJheSBvZiBmb3JtYXR0ZWQgYW5hbHlzaXMgc3RyaW5ncy5cbiAgICovXG4gIGZvcm1hdFJlc3VsdHMobWV0cmljcykge1xuICAgIC8vIEN1cnJlbmN5IGZvcm1hdHRlclxuICAgIGNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDBcbiAgICAgIH0pLmZvcm1hdCh2YWx1ZSk7XG4gICAgfTtcbiAgICBcbiAgICAvLyBQZXJjZW50YWdlIGZvcm1hdHRlclxuICAgIGNvbnN0IGZvcm1hdFBlcmNlbnQgPSAodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKDEpICsgJyUnO1xuICAgIH07XG4gICAgXG4gICAgLy8gUmF0aW8gZm9ybWF0dGVyXG4gICAgY29uc3QgZm9ybWF0UmF0aW8gPSAodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKDEpO1xuICAgIH07XG4gICAgXG4gICAgLy8gRm9ybWF0IGFsbCBtZXRyaWNzIGZvciBkaXNwbGF5XG4gICAgcmV0dXJuIFtcbiAgICAgIGBDYXNoIE5lZWRlZDogJHtmb3JtYXRDdXJyZW5jeShtZXRyaWNzLnRvdGFsQ2FzaE5lZWRlZCl9YCxcbiAgICAgIGBNb3J0Z2FnZSBQYXltZW50OiAke2Zvcm1hdEN1cnJlbmN5KG1ldHJpY3MubW9ydGdhZ2VQYXltZW50KX1gLFxuICAgICAgYE1vbnRobHkgQ2FzaCBGbG93OiAke2Zvcm1hdEN1cnJlbmN5KG1ldHJpY3MubW9udGhseUNhc2hGbG93KX1gLFxuICAgICAgYE5PSTogJHtmb3JtYXRDdXJyZW5jeShtZXRyaWNzLm5ldE9wZXJhdGluZ0luY29tZSl9YCxcbiAgICAgIGBUb3RhbCBFeHBlbnNlczogJHtmb3JtYXRDdXJyZW5jeShtZXRyaWNzLnRvdGFsQW5udWFsRXhwZW5zZXMpfS95cmAsXG4gICAgICBgQW5udWFsIENhc2ggRmxvdzogJHtmb3JtYXRDdXJyZW5jeShtZXRyaWNzLmFubnVhbENhc2hGbG93KX1gLFxuICAgICAgYEdSTTogJHtmb3JtYXRSYXRpbyhtZXRyaWNzLmdyb3NzUmVudE11bHRpcGxpZXIpfWAsXG4gICAgICBgQ2FwIFJhdGU6ICR7Zm9ybWF0UGVyY2VudChtZXRyaWNzLmNhcFJhdGUpfWAsXG4gICAgICBgQ2FzaCBvbiBDYXNoIFJldHVybjogJHtmb3JtYXRQZXJjZW50KG1ldHJpY3MuY2FzaE9uQ2FzaCl9YFxuICAgIF07XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYW5kIGZvcm1hdCBpbnZlc3RtZW50IGFuYWx5c2lzIHJlc3VsdHMuXG4gICAqIEBwYXJhbSB7UHJvcGVydHl9IHByb3BlcnR5IC0gVGhlIHByb3BlcnR5IHRvIGFuYWx5emUuXG4gICAqIEBwYXJhbSB7SW52ZXN0bWVudEFzc3VtcHRpb25zfSBhc3N1bXB0aW9ucyAtIEludmVzdG1lbnQgYXNzdW1wdGlvbnMuXG4gICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59IEZvcm1hdHRlZCBpbnZlc3RtZW50IGFuYWx5c2lzIHJlc3VsdHMuXG4gICAqL1xuICBhbmFseXplKHByb3BlcnR5LCBhc3N1bXB0aW9ucykge1xuICAgIGNvbnN0IG1ldHJpY3MgPSB0aGlzLmNhbGN1bGF0ZU1ldHJpY3MocHJvcGVydHksIGFzc3VtcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRSZXN1bHRzKG1ldHJpY3MpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludmVzdG1lbnRDYWxjdWxhdG9yOyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTZXJ2aWNlIGZvciBleHRyYWN0aW5nIHByb3BlcnR5IGRhdGEgZnJvbSByZWFsIGVzdGF0ZSB3ZWJzaXRlcy5cbiAqL1xuXG5pbXBvcnQgUHJvcGVydHkgZnJvbSAnLi4vbW9kZWxzL3Byb3BlcnR5LmpzJztcblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBleHRyYWN0aW5nIHByb3BlcnR5IGRhdGEgZnJvbSByZWFsIGVzdGF0ZSB3ZWJzaXRlcy5cbiAqL1xuY2xhc3MgUHJvcGVydHlEYXRhRXh0cmFjdG9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBQcm9wZXJ0eURhdGFFeHRyYWN0b3IuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gc2VsZWN0b3JzIC0gRE9NIHNlbGVjdG9ycyBmb3IgZXh0cmFjdGluZyBkYXRhLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzID0ge30pIHtcbiAgICAvLyBEZWZhdWx0IHNlbGVjdG9ycyBmb3IgWmlsbG93XG4gICAgdGhpcy5zZWxlY3RvcnMgPSB7XG4gICAgICBwcmljZTogJ3NwYW5bZGF0YS10ZXN0aWQ9XCJwcmljZVwiXScsXG4gICAgICByZW50WmVzdGltYXRlOiAnW2RhdGEtdGVzdGlkPVwicmVudGFsLWNvbnRhaW5lclwiXScsXG4gICAgICByZW50WmVzdGltYXRlVmFsdWU6ICdbZGF0YS10ZXN0aWQ9XCJyZW50YWwtdmFsdWVcIl0nLFxuICAgICAgcmVudFplc3RpbWF0ZVRleHQ6ICcuVGV4dC1jMTFuLTgtMTA2LTBfX3NjLWFpYWkyNC0wJyxcbiAgICAgIGFkZHJlc3M6ICdbZGF0YS10ZXN0aWQ9XCJob21lLWRldGFpbHMtY2hpcFwiXScsXG4gICAgICAuLi5zZWxlY3RvcnNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgcHJvcGVydHkgZGF0YSBmcm9tIHRoZSBjdXJyZW50IHBhZ2UuXG4gICAqIEByZXR1cm4ge1Byb3BlcnR5fSBFeHRyYWN0ZWQgcHJvcGVydHkgZGF0YS5cbiAgICovXG4gIGV4dHJhY3RQcm9wZXJ0eSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJpY2UgPSB0aGlzLmV4dHJhY3RQcmljZSgpO1xuICAgICAgY29uc3QgcmVudEVzdGltYXRlID0gdGhpcy5leHRyYWN0UmVudEVzdGltYXRlKCk7XG4gICAgICBjb25zdCBhZGRyZXNzID0gdGhpcy5leHRyYWN0QWRkcmVzcygpO1xuICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICBcbiAgICAgIHJldHVybiBuZXcgUHJvcGVydHkoe1xuICAgICAgICBwcmljZSxcbiAgICAgICAgcmVudEVzdGltYXRlLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICB1cmxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleHRyYWN0aW5nIHByb3BlcnR5IGRhdGE6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IHByb3BlcnR5IHByaWNlLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwcm9wZXJ0eSBwcmljZS5cbiAgICovXG4gIGV4dHJhY3RQcmljZSgpIHtcbiAgICBjb25zdCBwcmljZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnByaWNlKTtcbiAgICBpZiAoIXByaWNlRWxlbWVudCkgcmV0dXJuIDA7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMucGFyc2VNb25leVZhbHVlKHByaWNlRWxlbWVudC50ZXh0Q29udGVudCk7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCByZW50IGVzdGltYXRlIHVzaW5nIG11bHRpcGxlIHN0cmF0ZWdpZXMuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1vbnRobHkgcmVudCBlc3RpbWF0ZS5cbiAgICovXG4gIGV4dHJhY3RSZW50RXN0aW1hdGUoKSB7XG4gICAgbGV0IHJlbnRFc3RpbWF0ZSA9IDA7XG4gICAgXG4gICAgLy8gU3RyYXRlZ3kgMTogTG9vayBmb3IgcmVudGFsIGNvbnRhaW5lciB3aXRoIHNwZWNpZmljIGRhdGEgYXR0cmlidXRlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnJlbnRaZXN0aW1hdGUpO1xuICAgICAgaWYgKHJlbnRDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgcmVudFZhbHVlID0gcmVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLnJlbnRaZXN0aW1hdGVWYWx1ZSk7XG4gICAgICAgIGlmIChyZW50VmFsdWUpIHtcbiAgICAgICAgICByZW50RXN0aW1hdGUgPSB0aGlzLnBhcnNlTW9uZXlWYWx1ZShyZW50VmFsdWUudGV4dENvbnRlbnQpO1xuICAgICAgICAgIGlmIChyZW50RXN0aW1hdGUgPiAwKSByZXR1cm4gcmVudEVzdGltYXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdFcnJvciBpbiByZW50IGVzdGltYXRlIGV4dHJhY3Rpb24gc3RyYXRlZ3kgMTonLCBlKTtcbiAgICB9XG4gICAgXG4gICAgLy8gU3RyYXRlZ3kgMjogTG9vayBmb3IgXCJSZW50IFplc3RpbWF0ZVwiIHRleHQgYW5kIGFkamFjZW50IHZhbHVlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlbnRFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9ycy5yZW50WmVzdGltYXRlVGV4dCkpO1xuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbnRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVudEVsZW1lbnRzW2ldLnRleHRDb250ZW50ID09PSAnUmVudCBaZXN0aW1hdGXCricgJiYgaSArIDEgPCByZW50RWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gVGhlIG5leHQgZWxlbWVudCBzaG91bGQgY29udGFpbiB0aGUgcmVudCB2YWx1ZVxuICAgICAgICAgIGNvbnN0IHJlbnRUZXh0ID0gcmVudEVsZW1lbnRzW2kgKyAxXS50ZXh0Q29udGVudDtcbiAgICAgICAgICBjb25zdCByZW50VmFsdWUgPSB0aGlzLnBhcnNlTW9uZXlWYWx1ZShyZW50VGV4dCk7XG4gICAgICAgICAgaWYgKHJlbnRWYWx1ZSA+IDApIHJldHVybiByZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGluIHJlbnQgZXN0aW1hdGUgZXh0cmFjdGlvbiBzdHJhdGVneSAyOicsIGUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBTdHJhdGVneSAzOiBHZW5lcmFsIHJlZ2V4IHNlYXJjaCBmb3IgcmVudCBwYXR0ZXJuIGluIHRoZSBwYWdlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlbnRQYXR0ZXJuID0gL1JlbnQoPzpcXFxccyspPyg/Olplc3RpbWF0ZXxFc3RpbWF0ZSkoPzrCrik/KD86XFxcXHMrKT8oPzppcyk/KD86XFxcXHMrKT9cXFxcJChbMC05LF0rKS9pO1xuICAgICAgY29uc3QgcGFnZVRleHQgPSBkb2N1bWVudC5ib2R5LmlubmVyVGV4dDtcbiAgICAgIGNvbnN0IG1hdGNoID0gcGFnZVRleHQubWF0Y2gocmVudFBhdHRlcm4pO1xuICAgICAgXG4gICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgcmVudEVzdGltYXRlID0gdGhpcy5wYXJzZU1vbmV5VmFsdWUoJyQnICsgbWF0Y2hbMV0pO1xuICAgICAgICBpZiAocmVudEVzdGltYXRlID4gMCkgcmV0dXJuIHJlbnRFc3RpbWF0ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGluIHJlbnQgZXN0aW1hdGUgZXh0cmFjdGlvbiBzdHJhdGVneSAzOicsIGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVudEVzdGltYXRlO1xuICB9XG4gIFxuICAvKipcbiAgICogRXh0cmFjdCBwcm9wZXJ0eSBhZGRyZXNzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBhZGRyZXNzLlxuICAgKi9cbiAgZXh0cmFjdEFkZHJlc3MoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFkZHJlc3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5hZGRyZXNzKTtcbiAgICAgIHJldHVybiBhZGRyZXNzRWxlbWVudCA/IGFkZHJlc3NFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSA6ICcnO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgZXh0cmFjdGluZyBhZGRyZXNzOicsIGUpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIG1vbmV5IHZhbHVlIGZyb20gdGV4dC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGNvbnRhaW5pbmcgYSBtb25leSB2YWx1ZS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBQYXJzZWQgbnVtZXJpYyB2YWx1ZS5cbiAgICovXG4gIHBhcnNlTW9uZXlWYWx1ZSh0ZXh0KSB7XG4gICAgaWYgKCF0ZXh0KSByZXR1cm4gMDtcbiAgICBcbiAgICAvLyBUcnkgdG8gZXh0cmFjdCB1c2luZyByZWdleCBmb3IgbW9uZXkgcGF0dGVyblxuICAgIGNvbnN0IG1vbmV5UGF0dGVybiA9IC9cXFxcJChbMC05LC5dKykvO1xuICAgIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaChtb25leVBhdHRlcm4pO1xuICAgIFxuICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgLy8gUmVtb3ZlIGNvbW1hcyBhbmQgY29udmVydCB0byBudW1iZXJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hdGNoWzFdLnJlcGxhY2UoLywvZywgJycpKSB8fCAwO1xuICAgIH1cbiAgICBcbiAgICAvLyBGYWxsYmFjazoganVzdCB0cnkgdG8gcmVtb3ZlICQgYW5kIGNvbW1hcyBmcm9tIHRoZSB3aG9sZSBzdHJpbmdcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0ZXh0LnJlcGxhY2UoL1skLF0vZywgJycpKSB8fCAwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5RGF0YUV4dHJhY3RvcjsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgU2VydmljZSBmb3IgbWFuYWdpbmcgZXh0ZW5zaW9uIHN0b3JhZ2UuXG4gKi9cblxuaW1wb3J0IEludmVzdG1lbnRBc3N1bXB0aW9ucyBmcm9tICcuLi9tb2RlbHMvaW52ZXN0bWVudC1hc3N1bXB0aW9ucy5qcyc7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSAnLi4vbW9kZWxzL3Byb3BlcnR5LmpzJztcblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBtYW5hZ2luZyBleHRlbnNpb24gc3RvcmFnZS5cbiAqL1xuY2xhc3MgU3RvcmFnZVNlcnZpY2Uge1xuICAgIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgU3RvcmFnZVNlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3JhZ2VBcGkgPSBjaHJvbWUuc3RvcmFnZS5zeW5jO1xuICAgIH1cbiAgICAvKipcbiAgICogU2F2ZSBpbnZlc3RtZW50IGFzc3VtcHRpb25zIHRvIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7SW52ZXN0bWVudEFzc3VtcHRpb25zfSBhc3N1bXB0aW9ucyAtIFRoZSBhc3N1bXB0aW9ucyB0byBzYXZlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBQcm9taXNlIHJlc29sdmluZyB3aGVuIHNhdmUgaXMgY29tcGxldGUuXG4gICAqL1xuICBzYXZlQXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlQXBpLnNldChhc3N1bXB0aW9ucy50b0pTT04oKSk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBMb2FkIGludmVzdG1lbnQgYXNzdW1wdGlvbnMgZnJvbSBzdG9yYWdlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEludmVzdG1lbnRBc3N1bXB0aW9ucz59IFByb21pc2UgcmVzb2x2aW5nIHRvIGxvYWRlZCBhc3N1bXB0aW9ucy5cbiAgICovXG4gIGFzeW5jIGxvYWRBc3N1bXB0aW9ucygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBJbnZlc3RtZW50QXNzdW1wdGlvbnMuZGVmYXVsdHM7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zdG9yYWdlQXBpLmdldChkZWZhdWx0cyk7XG4gICAgICByZXR1cm4gbmV3IEludmVzdG1lbnRBc3N1bXB0aW9ucyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgYXNzdW1wdGlvbnM6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIG5ldyBJbnZlc3RtZW50QXNzdW1wdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICogU2F2ZSBwcm9wZXJ0eSBkYXRhIHRvIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7UHJvcGVydHl9IHByb3BlcnR5IC0gVGhlIHByb3BlcnR5IHRvIHNhdmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0ga2V5IC0gU3RvcmFnZSBrZXkgZm9yIHRoZSBwcm9wZXJ0eS5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSByZXNvbHZpbmcgd2hlbiBzYXZlIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgc2F2ZVByb3BlcnR5KHByb3BlcnR5LCBrZXkgPSAnY3VycmVudFByb3BlcnR5Jykge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VBcGkuc2V0KHtcbiAgICAgICAgICAgIFtrZXlcbiAgICAgICAgICAgIF06IHByb3BlcnR5LnRvSlNPTigpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICogTG9hZCBwcm9wZXJ0eSBkYXRhIGZyb20gc3RvcmFnZS5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBrZXkgLSBTdG9yYWdlIGtleSBmb3IgdGhlIHByb3BlcnR5LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPD9Qcm9wZXJ0eT59IFByb21pc2UgcmVzb2x2aW5nIHRvIGxvYWRlZCBwcm9wZXJ0eS5cbiAgICovXG4gIGFzeW5jIGxvYWRQcm9wZXJ0eShrZXkgPSAnY3VycmVudFByb3BlcnR5Jykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zdG9yYWdlQXBpLmdldChrZXkpO1xuICAgICAgaWYgKGRhdGFba2V5XG4gICAgICAgICAgICBdKSB7XG4gICAgICAgIHJldHVybiBQcm9wZXJ0eS5mcm9tSlNPTihkYXRhW2tleVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBsb2FkaW5nIHByb3BlcnR5IHdpdGgga2V5ICR7a2V5XG4gICAgICAgICAgICB9OmAsIGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgKiBTYXZlIGRhdGEgdG8gc3RvcmFnZSB3aXRoIGN1c3RvbSBrZXkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBTdG9yYWdlIGtleS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIERhdGEgdG8gc3RvcmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdoZW4gc2F2ZSBpcyBjb21wbGV0ZS5cbiAgICovXG4gIHNhdmUoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VBcGkuc2V0KHtcbiAgICAgICAgICAgIFtrZXlcbiAgICAgICAgICAgIF06IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICogTG9hZCBkYXRhIGZyb20gc3RvcmFnZSB3aXRoIGN1c3RvbSBrZXkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBTdG9yYWdlIGtleS5cbiAgICogQHBhcmFtIHsqPX0gZGVmYXVsdFZhbHVlIC0gRGVmYXVsdCB2YWx1ZSBpZiBrZXkgZG9lc24ndCBleGlzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTwqPn0gUHJvbWlzZSByZXNvbHZpbmcgdG8gbG9hZGVkIGRhdGEuXG4gICAqL1xuICBhc3luYyBsb2FkKGtleSwgZGVmYXVsdFZhbHVlID0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zdG9yYWdlQXBpLmdldChrZXkpO1xuICAgICAgcmV0dXJuIGRhdGFba2V5XG4gICAgICAgICAgICBdICE9PSB1bmRlZmluZWQgPyBkYXRhW2tleVxuICAgICAgICAgICAgXSA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxvYWRpbmcga2V5ICR7a2V5XG4gICAgICAgICAgICB9OmAsIGVycm9yKTtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAqIFJlbW92ZSBkYXRhIGZyb20gc3RvcmFnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0ga2V5cyAtIEtleShzKSB0byByZW1vdmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdoZW4gcmVtb3ZhbCBpcyBjb21wbGV0ZS5cbiAgICovXG4gIHJlbW92ZShrZXlzKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZUFwaS5yZW1vdmUoa2V5cyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDbGVhciBhbGwgc3RvcmFnZSBkYXRhLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBQcm9taXNlIHJlc29sdmluZyB3aGVuIGNsZWFyIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZUFwaS5jbGVhcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZVNlcnZpY2U7IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1hbmFnZXMgVUkgZWxlbWVudHMgYW5kIGludGVyYWN0aW9ucy5cbiAqL1xuXG5pbXBvcnQgRm9ybWF0dGVyVXRpbCBmcm9tICcuLi91dGlscy9mb3JtYXR0ZXItdXRpbC5qcyc7XG5cbi8qKlxuICogTWFuYWdlcyBVSSBlbGVtZW50cyBhbmQgaW50ZXJhY3Rpb25zLlxuICovXG5jbGFzcyBVSU1hbmFnZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFVJTWFuYWdlci5cbiAgICogQHBhcmFtIHtJbnZlc3RtZW50Q2FsY3VsYXRvcn0gY2FsY3VsYXRvciAtIENhbGN1bGF0b3IgZm9yIGludmVzdG1lbnQgbWV0cmljcy5cbiAgICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGV2ZW50RW1pdHRlciAtIEZvciBwdWJsaXNoaW5nIGFuZCBzdWJzY3JpYmluZyB0byBldmVudHMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYWxjdWxhdG9yLCBldmVudEVtaXR0ZXIpIHtcbiAgICB0aGlzLmNhbGN1bGF0b3IgPSBjYWxjdWxhdG9yO1xuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRFbWl0dGVyO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gbmV3IEZvcm1hdHRlclV0aWwoKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG4gICAgXG4gICAgLy8gQmluZCBldmVudCBoYW5kbGVycyB0byBtYWludGFpbiBjb250ZXh0XG4gICAgdGhpcy5oYW5kbGVVcGRhdGVDbGljayA9IHRoaXMuaGFuZGxlVXBkYXRlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIFVJIGVsZW1lbnRzLlxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBGaW5kIG9yIGNyZWF0ZSB0aGUgaW5wdXRzIGNvbnRhaW5lclxuICAgIHRoaXMuY3JlYXRlSW5wdXRzQ29udGFpbmVyKCk7XG4gICAgXG4gICAgLy8gU2V0IHVwIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIFxuICAgIC8vIFN1YnNjcmliZSB0byByZWxldmFudCBldmVudHNcbiAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBpbnB1dCBmb3JtIGNvbnRhaW5lci5cbiAgICovXG4gIGNyZWF0ZUlucHV0c0NvbnRhaW5lcigpIHtcbiAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIGlucHV0cyBjb250YWluZXJcbiAgICBjb25zdCBleGlzdGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9wZmluZGVyLXByby1pbnB1dHMnKTtcbiAgICBpZiAoZXhpc3RpbmdDb250YWluZXIpIHtcbiAgICAgIGV4aXN0aW5nQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcbiAgICAvLyBDcmVhdGUgY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmlkID0gJ3Byb3BmaW5kZXItcHJvLWlucHV0cyc7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9wZmluZGVyLXByby1jb250YWluZXInO1xuICAgIFxuICAgIC8vIEFkZCBjb250YWluZXIgc3R5bGVzXG4gICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAnMTJweCc7XG4gICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMnB4JztcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmOGY5ZmEnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNHB4JztcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgY29udGFpbmVyLnN0eWxlLmZvbnRGYW1pbHkgPSAnQXJpYWwsIHNhbnMtc2VyaWYnO1xuICAgIFxuICAgIC8vIENyZWF0ZSBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3Byb3BmaW5kZXItcHJvLWhlYWRlcic7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGBcbiAgICAgIDxoMyBzdHlsZT1cIm1hcmdpbjogMCAwIDEwcHg7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6ICMwMDY2Y2M7XCI+XG4gICAgICAgIFByb3BGaW5kZXIgUHJvIEFuYWx5c2lzXG4gICAgICA8L2gzPlxuICAgIGA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGlucHV0cyBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ3Byb3BmaW5kZXItcHJvLWZvcm0nO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBmb3JtLnN0eWxlLmZsZXhXcmFwID0gJ3dyYXAnO1xuICAgIGZvcm0uc3R5bGUuZ2FwID0gJzhweCc7XG4gICAgXG4gICAgLy8gQWRkIGZvcm0gdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIFxuICAgIC8vIENyZWF0ZSB1cGRhdGUgYnV0dG9uXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlkID0gJ3Byb3BmaW5kZXItcHJvLXVwZGF0ZSc7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1VwZGF0ZSBBbmFseXNpcyc7XG4gICAgYnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9ICcxMHB4JztcbiAgICBidXR0b24uc3R5bGUucGFkZGluZyA9ICc4cHggMTZweCc7XG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDA2NmNjJztcbiAgICBidXR0b24uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIGJ1dHRvbi5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgYnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xuICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgYnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgYnV0dG9uLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIFxuICAgIC8vIFN0b3JlIHJlZmVyZW5jZXMgdG8gY3JlYXRlZCBlbGVtZW50c1xuICAgIHRoaXMuZWxlbWVudHMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuZWxlbWVudHMuZm9ybSA9IGZvcm07XG4gICAgdGhpcy5lbGVtZW50cy51cGRhdGVCdXR0b24gPSBidXR0b247XG4gICAgXG4gICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGJlc3QgbG9jYXRpb24gdG8gaW5zZXJ0IHRoZSBjb250YWluZXJcbiAgICB0aGlzLmluc2VydElucHV0c0NvbnRhaW5lcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgc3VpdGFibGUgbG9jYXRpb24gYW5kIGluc2VydCB0aGUgaW5wdXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGluc2VydElucHV0c0NvbnRhaW5lcigpIHtcbiAgICAvLyBUcnkgdG8gZmluZCBhIGdvb2QgbG9jYXRpb24gb24gWmlsbG93IHBhZ2VcbiAgICBjb25zdCBmYWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Mta0ltTkF0Jyk7XG4gICAgXG4gICAgaWYgKGZhY3RzTGlzdCkge1xuICAgICAgLy8gSW5zZXJ0IGJlZm9yZSBmYWN0cyBsaXN0XG4gICAgICBmYWN0c0xpc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50cy5jb250YWluZXIsIGZhY3RzTGlzdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIFNlY29uZGFyeSBsb2NhdGlvbjogQW55IFwiZmFjdHNcIiBjb250YWluZXJcbiAgICBjb25zdCBmYWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlc3RpZD1cImZhY3RzLWNvbnRhaW5lclwiXScpO1xuICAgIGlmIChmYWN0c0NvbnRhaW5lcikge1xuICAgICAgLy8gSW5zZXJ0IGF0IHRoZSBiZWdpbm5pbmcgb2YgZmFjdHMgY29udGFpbmVyXG4gICAgICBmYWN0c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50cy5jb250YWluZXIsIGZhY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBGYWxsYmFjazogVHJ5IHRvIGluc2VydCBhZnRlciB0aGUgcHJpY2Ugc2VjdGlvblxuICAgIGNvbnN0IHByaWNlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlc3RpZD1cInByaWNlXCJdJyk7XG4gICAgaWYgKHByaWNlU2VjdGlvbikge1xuICAgICAgLy8gTG9vayBmb3IgcGFyZW50IGVsZW1lbnRzXG4gICAgICBsZXQgcGFyZW50ID0gcHJpY2VTZWN0aW9uLnBhcmVudE5vZGU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyBJbnNlcnQgYWZ0ZXIgdGhlIHByaWNlIHNlY3Rpb24gcGFyZW50XG4gICAgICAgIGlmIChwYXJlbnQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICBwYXJlbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50cy5jb250YWluZXIsIHBhcmVudC5uZXh0U2libGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50cy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gTGFzdCByZXNvcnQ6IEFwcGVuZCB0byBib2R5XG4gICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgZmluZCBvcHRpbWFsIGxvY2F0aW9uIGZvciBQcm9wRmluZGVyIFBybyBjb250YWluZXIsIGFkZGluZyB0byBib2R5Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRzLmNvbnRhaW5lcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGlucHV0IGZpZWxkcyBmb3IgcHJvcGVydHkgZGF0YS5cbiAgICogQHBhcmFtIHtQcm9wZXJ0eX0gcHJvcGVydHkgLSBDdXJyZW50IHByb3BlcnR5IGRhdGEuXG4gICAqL1xuICBjcmVhdGVJbnB1dEZpZWxkcyhwcm9wZXJ0eSkge1xuICAgIC8vIENsZWFyIGV4aXN0aW5nIGZpZWxkc1xuICAgIHRoaXMuZWxlbWVudHMuZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICAvLyBDcmVhdGUgaW5wdXQgZmllbGRzXG4gICAgY29uc3QgZmllbGRzID0gW1xuICAgICAgeyBpZDogJ3ByaWNlJywgbGFiZWw6ICdQcmljZScsIHZhbHVlOiBwcm9wZXJ0eS5wcmljZSB9LFxuICAgICAgeyBpZDogJ3JlcGFpckNvc3QnLCBsYWJlbDogJ1JlcGFpciBDb3N0JywgdmFsdWU6IHByb3BlcnR5LnJlcGFpckNvc3QgfSxcbiAgICAgIHsgaWQ6ICdtb250aGx5SW5jb21lJywgbGFiZWw6ICdNb250aGx5IFJlbnQnLCB2YWx1ZTogcHJvcGVydHkubW9udGhseUluY29tZSB9XG4gICAgXTtcbiAgICBcbiAgICAvLyBBZGQgZWFjaCBmaWVsZCB0byB0aGUgZm9ybVxuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gdGhpcy5jcmVhdGVJbnB1dEZpZWxkKGZpZWxkLmlkLCBmaWVsZC5sYWJlbCwgZmllbGQudmFsdWUpO1xuICAgICAgdGhpcy5lbGVtZW50cy5mb3JtLmFwcGVuZENoaWxkKGZpZWxkQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW5nbGUgaW5wdXQgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIEZpZWxkIElELlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSBGaWVsZCBsYWJlbC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gRmllbGQgdmFsdWUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBJbnB1dCBmaWVsZCBjb250YWluZXIuXG4gICAqL1xuICBjcmVhdGVJbnB1dEZpZWxkKGlkLCBsYWJlbCwgdmFsdWUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3Byb3BmaW5kZXItcHJvLWlucHV0LWZpZWxkJztcbiAgICBjb250YWluZXIuc3R5bGUuZmxleCA9ICcxJztcbiAgICBjb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnMTUwcHgnO1xuICAgIFxuICAgIC8vIEZvcm1hdCB2YWx1ZSBhcyBjdXJyZW5jeVxuICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXR0ZXIuZm9ybWF0Q3VycmVuY3kodmFsdWUpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBmaWVsZCBIVE1MXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDEycHg7IG1hcmdpbi1ib3R0b206IDRweDsgY29sb3I6ICM1NTU7XCI+XG4gICAgICAgICR7bGFiZWx9OlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cInByb3BmaW5kZXItcHJvLSR7aWR9XCJcbiAgICAgICAgY2xhc3M9XCJwcm9wZmluZGVyLXByby1jdXJyZW5jeS1pbnB1dFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9XCIke2Zvcm1hdHRlZFZhbHVlfVwiXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IHBhZGRpbmc6IDZweDsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgYm9yZGVyLXJhZGl1czogNHB4OyBmb250LXNpemU6IDE0cHg7IHRleHQtYWxpZ246IHJpZ2h0OyBib3gtc2l6aW5nOiBib3JkZXItYm94O1wiXG4gICAgICA+XG4gICAgYDtcbiAgICBcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1cCBldmVudCBsaXN0ZW5lcnMuXG4gICAqL1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vIEFkZCBjbGljayBoYW5kbGVyIGZvciB0aGUgdXBkYXRlIGJ1dHRvblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLnVwZGF0ZUJ1dHRvbikge1xuICAgICAgdGhpcy5lbGVtZW50cy51cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVVwZGF0ZUNsaWNrKTtcbiAgICB9XG4gICAgXG4gICAgLy8gRGVsYXkgc2V0dGluZyB1cCBjdXJyZW5jeSBpbnB1dCBsaXN0ZW5lcnMgdW50aWwgRE9NIGlzIHVwZGF0ZWRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0dXBDdXJyZW5jeUlucHV0TGlzdGVuZXJzKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIGxpc3RlbmVycyBmb3IgY3VycmVuY3kgaW5wdXQgZmllbGRzIHRvIGZvcm1hdCB2YWx1ZXMgYXMgdXNlciB0eXBlcy5cbiAgICovXG4gIHNldHVwQ3VycmVuY3lJbnB1dExpc3RlbmVycygpIHtcbiAgICBjb25zdCBjdXJyZW5jeUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9wZmluZGVyLXByby1jdXJyZW5jeS1pbnB1dCcpO1xuICAgIFxuICAgIGN1cnJlbmN5SW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gU3RvcmUgY3Vyc29yIHBvc2l0aW9uIGFuZCBmaWVsZCBjb250ZW50IGxlbmd0aCBiZWZvcmUgZm9ybWF0dGluZ1xuICAgICAgICBjb25zdCBjdXJzb3JQb3MgPSBldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsTGVuZ3RoID0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCByYXcgdmFsdWUgYW5kIGNvbnZlcnQgdG8gbnVtYmVyXG4gICAgICAgIGNvbnN0IHJhd1ZhbHVlID0gdGhpcy5mb3JtYXR0ZXIucGFyc2VNb25leVZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBGb3JtYXQgYXMgY3VycmVuY3lcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdHRlci5mb3JtYXRDdXJyZW5jeShyYXdWYWx1ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IGN1cnNvciBwb3NpdGlvbiAoYWNjb3VudCBmb3IgYWRkZWQvcmVtb3ZlZCBjaGFyYWN0ZXJzKVxuICAgICAgICBsZXQgbmV3Q3Vyc29yUG9zID0gY3Vyc29yUG9zICsgKGZvcm1hdHRlZFZhbHVlLmxlbmd0aCAtIG9yaWdpbmFsTGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgZmllbGQgdmFsdWVcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIFxuICAgICAgICAvLyBSZXN0b3JlIGN1cnNvciBwb3NpdGlvblxuICAgICAgICBldmVudC50YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UobmV3Q3Vyc29yUG9zLCBuZXdDdXJzb3JQb3MpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIEhhbmRsZSBmb2N1cyB0byBzZWxlY3QgYWxsIHRleHQgZm9yIGVhc3kgZWRpdGluZ1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2VzIChhcnJvdyBrZXlzLCBiYWNrc3BhY2UsIGRlbGV0ZSwgZXRjLilcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBiYWNrc3BhY2UgYXQgdGhlIGZpcnN0IG5vbi1kaWdpdCBwb3NpdGlvblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyAmJiBldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQgPT09IDEpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICckMCc7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDEsIDEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIGRlbGV0ZSBhdCB0aGUgJCBzaWduXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdEZWxldGUnICYmIGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydCA9PT0gMCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDEsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gZXZlbnRzIGZyb20gdGhlIGV2ZW50IGVtaXR0ZXIuXG4gICAqL1xuICBzdWJzY3JpYmVUb0V2ZW50cygpIHtcbiAgICAvLyBTdWJzY3JpYmUgdG8gcHJvcGVydHkgdXBkYXRlIGV2ZW50c1xuICAgIHRoaXMuZXZlbnRzLm9uKCdwcm9wZXJ0eVVwZGF0ZWQnLCBwcm9wZXJ0eSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUlucHV0RmllbGRzKHByb3BlcnR5KTtcbiAgICAgIC8vIFNldHVwIGN1cnJlbmN5IGlucHV0IGxpc3RlbmVycyBhZnRlciBmaWVsZHMgYXJlIGNyZWF0ZWRcbiAgICAgIHRoaXMuc2V0dXBDdXJyZW5jeUlucHV0TGlzdGVuZXJzKCk7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gU3Vic2NyaWJlIHRvIGFuYWx5c2lzIHJlc3VsdHMgZXZlbnRzXG4gICAgdGhpcy5ldmVudHMub24oJ2FuYWx5c2lzVXBkYXRlZCcsIGFuYWx5c2lzRGV0YWlscyA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUFuYWx5c2lzUmVzdWx0cyhhbmFseXNpc0RldGFpbHMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjbGljayBvbiB0aGUgdXBkYXRlIGJ1dHRvbi5cbiAgICovXG4gIGhhbmRsZVVwZGF0ZUNsaWNrKCkge1xuICAgIC8vIEdldCB2YWx1ZXMgZnJvbSBpbnB1dCBmaWVsZHNcbiAgICBjb25zdCBwcmljZSA9IHRoaXMuZm9ybWF0dGVyLnBhcnNlTW9uZXlWYWx1ZShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BmaW5kZXItcHJvLXByaWNlJykudmFsdWUpO1xuICAgIGNvbnN0IHJlcGFpckNvc3QgPSB0aGlzLmZvcm1hdHRlci5wYXJzZU1vbmV5VmFsdWUoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9wZmluZGVyLXByby1yZXBhaXJDb3N0JykudmFsdWUpO1xuICAgIGNvbnN0IG1vbnRobHlJbmNvbWUgPSB0aGlzLmZvcm1hdHRlci5wYXJzZU1vbmV5VmFsdWUoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9wZmluZGVyLXByby1tb250aGx5SW5jb21lJykudmFsdWUpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBwcm9wZXJ0eSB1cGRhdGUgZGF0YVxuICAgIGNvbnN0IHByb3BlcnR5RGF0YSA9IHtcbiAgICAgIHByaWNlLFxuICAgICAgcmVwYWlyQ29zdCxcbiAgICAgIG1vbnRobHlJbmNvbWVcbiAgICB9O1xuICAgIFxuICAgIC8vIEVtaXQgZXZlbnQgd2l0aCB0aGUgdXBkYXRlZCBwcm9wZXJ0eSBkYXRhXG4gICAgdGhpcy5ldmVudHMuZW1pdCgncHJvcGVydHlJbnB1dFVwZGF0ZWQnLCBwcm9wZXJ0eURhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgaW5qZWN0IHRoZSBpbnZlc3RtZW50IGFuYWx5c2lzIHJlc3VsdHMuXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYW5hbHlzaXNEZXRhaWxzIC0gQW5hbHlzaXMgcmVzdWx0cyB0byBkaXNwbGF5LlxuICAgKi9cbiAgdXBkYXRlQW5hbHlzaXNSZXN1bHRzKGFuYWx5c2lzRGV0YWlscykge1xuICAgIC8vIFJlbW92ZSBleGlzdGluZyBhbmFseXNpcyBpdGVtc1xuICAgIGNvbnN0IGV4aXN0aW5nSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvcGZpbmRlci1wcm8tcmVzdWx0LWl0ZW0nKTtcbiAgICBleGlzdGluZ0l0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbW92ZSgpKTtcbiAgICBcbiAgICAvLyBGaW5kIHRoZSBmYWN0cyBsaXN0XG4gICAgY29uc3QgZmFjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLWtJbU5BdCcpO1xuICAgIGlmICghZmFjdHNMaXN0KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBmaW5kIGZhY3RzIGxpc3QgZm9yIGFuYWx5c2lzIHJlc3VsdHMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gQWRkIGVhY2ggYW5hbHlzaXMgZGV0YWlsIGFzIGEgZmFjdCBpdGVtXG4gICAgYW5hbHlzaXNEZXRhaWxzLmZvckVhY2goZGV0YWlsID0+IHtcbiAgICAgIGNvbnN0IGZhY3RJdGVtID0gdGhpcy5jcmVhdGVGYWN0SXRlbShkZXRhaWwpO1xuICAgICAgZmFjdHNMaXN0LmFwcGVuZENoaWxkKGZhY3RJdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFwcHJvcHJpYXRlIGljb24gU1ZHIGZvciBhIHNwZWNpZmljIG1ldHJpYy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZhY3REZXRhaWxzIC0gVGV4dCBjb250ZW50IG9mIHRoZSBmYWN0IHRvIGRldGVybWluZSBpY29uLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFNWRyBtYXJrdXAgZm9yIHRoZSBhcHByb3ByaWF0ZSBpY29uLlxuICAgKi9cbiAgZ2V0SWNvbkZvckZhY3QoZmFjdERldGFpbHMpIHtcbiAgICAvLyBEZWZhdWx0IGljb24gYXMgZmFsbGJhY2tcbiAgICBsZXQgaWNvblN2ZyA9IGBcbiAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgcm9sZT1cImltZ1wiIGNsYXNzPVwiSWNvbi1jMTFuLTgtMTA2LTBfX3NjLTEzbGxtbWwtMCBpQkp5YlFcIj5cbiAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjkgMTdoLTJ2LTJhMSAxIDAgMDAtMS0xaC02YTEgMSAwIDAwLTEgMXYyaC0ydi03YTEgMSAwIDAwLTEtMUg5YTEgMSAwIDAwLTEgMXY3SDZWM2ExIDEgMCAwMC0xLTFIM2ExIDEgMCAwMC0xIDF2MjZhMSAxIDAgMDAxIDFoMjZhMSAxIDAgMDAxLTFWMThhMSAxIDAgMDAtMS0xek0yMSAxNmgtNHYtMWg0em0tMTItNWg1djEySDl6bTE5IDE3SDRWNGgxdjEzYTEgMSAwIDAwMSAxaDNhMSAxIDAgMDAxLTF2LTFoNmExIDEgMCAwMDEtMXYtMmgyYTEgMSAwIDAwMS0xdi0xaDNhMSAxIDAgMDAxLTF2LTFoMXpcIj48L3BhdGg+XG4gICAgICAgICAgPHBhdGggZD1cIk02IDdoMnYySDZ6TTYgMTFoMnYySDZ6XCI+PC9wYXRoPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuXG4gICAgLy8gTWF0Y2ggZmFjdCBjb250ZW50IHRvIGRldGVybWluZSB3aGljaCBpY29uIHRvIHVzZVxuICAgIGlmIChmYWN0RGV0YWlscy5pbmNsdWRlcygnQ2FzaCBOZWVkZWQnKSkge1xuICAgICAgLy8gTW9uZXkgYmFnIGljb25cbiAgICAgIGljb25TdmcgPSBgXG4gICAgICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwMHB4XCIgaGVpZ2h0PVwiMTAwMHB4XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwibTExLjcyNiAxNy4xMDJjLTAuMDk5LTAuMjE3NS0wLjMwNC0wLjM3NjItMC41NTIxLTAuNDA0NC0wLjIxMDEtMC4wMjQtMC40MTU4LTAuMDY5LTAuNjExNC0wLjEzMzktMC4wODc3LTAuMDI5NS0wLjE3LTAuMDYxNy0wLjI0NjItMC4wOTYybDAuMTI2Ni0wLjM0NTFjMC4wODk0IDAuMDM5OSAwLjE4MTUgMC4wNzY0IDAuMjc1OCAwLjEwOTRsMC4wMDM5IDAuMDAxNCA0ZS0zIDAuMDAxM2MwLjMwMjYgMC4xIDAuNjAwNCAwLjE1MDcgMC44ODQ5IDAuMTUwNyAwLjI4NTcgMCAwLjQ5MjgtMC4wMzgzIDAuNjUxOS0wLjEyMDRsMC4wMDk1LTAuMDA0OSAwLjAwOTMtMC4wMDU0YzAuMjQxLTAuMTM4MyAwLjM3OTMtMC4zNzYgMC4zNzkzLTAuNjUyMyAwLTAuMzA2Ni0wLjE2NTQtMC41NjExLTAuNDUzOS0wLjY5ODYtMC4xNDUxLTAuMDcwNi0wLjM1MTItMC4xMzgtMC42NDgxLTAuMjExOC0wLjMwNDUtMC4wNzctMC41NjAzLTAuMTU4Ny0wLjc1ODctMC4yNDI0LTAuMTQ1LTAuMDY1Ni0wLjI3MDgtMC4xNzAzLTAuMzg0Mi0wLjMyLTAuMDk3Ni0wLjEzMzYtMC4xNDctMC4zMzQ1LTAuMTQ3LTAuNTk3NCAwLTAuMzE3MiAwLjA4OTMtMC41NzkgMC4yNzMxLTAuODAwNCAwLjE2MzYtMC4xOTQgMC4zOTU5LTAuMzI1OCAwLjcwNzctMC4zOTk3IDAuMjMxMy0wLjA1NDggMC40MTE3LTAuMjE5OSAwLjQ5MjgtMC40MzMxIDAuMDkxNyAwLjIxNjEgMC4yODY4IDAuMzc2OCAwLjUyOTYgMC40MTU1IDAuMjAyOCAwLjAzMjMgMC4zODkgMC4wODM4IDAuNTU2NCAwLjE1MzVsLTAuMTE2NSAwLjMzODJjLTAuMzE2MS0wLjEyNjktMC42MjcyLTAuMTkxLTAuOTI4MS0wLjE5MS0wLjk5OTMgMC0xLjA0OTkgMC42ODk0LTEuMDQ5OSAwLjgyNzYgMCAwLjI5OTYgMC4xNjE4IDAuNTUwOCAwLjQ0MzkgMC42ODkzbDAuMDA3OSAwLjAwMzkgOGUtMyAwLjAwMzZjMC4xNDI1IDAuMDYzNiAwLjM0NDcgMC4xMjQ5IDAuNjM2NSAwLjE5MjkgMC4zMDE3IDAuMDY4MiAwLjU1MzMgMC4xNDYzIDAuNzUxIDAuMjMyOWwwLjAwNDEgMC4wMDE4IDAuMDA0MSAwLjAwMTdjMC4xNDY4IDAuMDYxMSAwLjI3MjcgMC4xNjMxIDAuMzg0OSAwLjMxMTlsMC4wMDE4IDAuMDAyMyAwLjAwMTggMC4wMDI0YzAuMDk4MSAwLjEyNjggMC4xNDc5IDAuMzIyOSAwLjE0NzkgMC41ODI5IDAgMC4zMDAxLTAuMDg2OSAwLjU1NDEtMC4yNjU3IDAuNzc2Ni0wLjE1NTEgMC4xOTMtMC4zNzE2IDAuMzI2Ni0wLjY2MjEgMC40MDg0LTAuMjI0MyAwLjA2MzItMC4zOTgzIDAuMjM0Ny0wLjQ3MjggMC40NDg4elwiIGZpbGw9XCIjMDAwXCIvPlxuICAgICAgICA8cGF0aCBkPVwibTExLjk3OCAxOGgtMC40ODE1Yy0wLjEwNzcgMC0wLjE5NS0wLjA4OTUtMC4xOTUtMC4ydi0wLjQwMTVjMC0wLjEwNTYtMC4wODAxLTAuMTkyNC0wLjE4MjUtMC4yMDQxLTAuMjQzOC0wLjAyNzctMC40Nzk2LTAuMDc5NC0wLjcwNzUtMC4xNTUtMC4yMjE0LTAuMDc0Ni0wLjQxMzIxLTAuMTYzLTAuNTc1NDMtMC4yNjU1LTAuMDc0NTUtMC4wNDcxLTAuMTAxNjctMC4xNDI3LTAuMDcwODUtMC4yMjY3bDAuMzMwMjgtMC45MDA2YzAuMDQ0NS0wLjEyMTIgMC4xODgtMC4xNjc2IDAuMjk4NS0wLjEwNDkgMC4xNDkyIDAuMDg0NSAwLjMwOTYgMC4xNTY4IDAuNDgxIDAuMjE2OCAwLjI1NTUgMC4wODQ0IDAuNTAwNyAwLjEyNjYgMC43MzU1IDAuMTI2NiAwLjIwMTkgMCAwLjM0NjItMC4wMjIzIDAuNDMyNy0wLjA2NyAwLjA4NjUtMC4wNDk3IDAuMTI5OC0wLjEyMTcgMC4xMjk4LTAuMjE2IDAtMC4xMDkyLTAuMDU3Ny0wLjE5MTEtMC4xNzMxLTAuMjQ1Ny0wLjExMTItMC4wNTQ2LTAuMjk2Ny0wLjExNDItMC41NTYyLTAuMTc4Ny0wLjMzMzgtMC4wODQ0LTAuNjExOS0wLjE3MzgtMC44MzQ0LTAuMjY4MS0wLjIyMjUtMC4wOTkzLTAuNDE2Mi0wLjI1ODItMC41ODEtMC40NzY2LTAuMTY0ODQtMC4yMjM0LTAuMjQ3MjQtMC41MjM4LTAuMjQ3MjQtMC45MDExIDAtMC40MzY5IDAuMTI5OC0wLjgxMTcgMC4zODkzNC0xLjEyNDUgMC4yMzQtMC4yNzc0IDAuNTU3LTAuNDY1IDAuOTY5Mi0wLjU2MjcgMC4wOTI4LTAuMDIyIDAuMTYxOS0wLjEwNDYgMC4xNjE5LTAuMjAyMnYtMC40NDI1YzAtMC4xMTA1IDAuMDg3My0wLjIgMC4xOTUtMC4yaDAuNDgxNWMwLjEwNzcgMCAwLjE5NSAwLjA4OTUgMC4xOTUgMC4ydjAuNDE3MmMwIDAuMTAyMiAwLjA3NTIgMC4xODczIDAuMTczNiAwLjIwMyAwLjM2MTEgMC4wNTc1IDAuNjc4NCAwLjE2NjQgMC45NTE4IDAuMzI2NyAwLjA3NzYgMC4wNDU1IDAuMTA4NCAwLjE0MjMgMC4wNzg2IDAuMjI4N2wtMC4zMDkxIDAuODk2OWMtMC4wNDA5IDAuMTE4OS0wLjE3NzQgMC4xNjkyLTAuMjg3MiAwLjExMjQtMC4zNDgyLTAuMTgtMC42ODA1LTAuMjctMC45OTcxLTAuMjctMC4zNzUgMC0wLjU2MjUgMC4xMDkyLTAuNTYyNSAwLjMyNzYgMCAwLjEwNDMgMC4wNTU3IDAuMTgzNyAwLjE2NjkgMC4yMzg0IDAuMTExMyAwLjA0OTYgMC4yOTQ2IDAuMTA0MiAwLjU1MDEgMC4xNjM4IDAuMzI5NiAwLjA3NDUgMC42MDc4IDAuMTYxMyAwLjgzNDQgMC4yNjA2IDAuMjI2NiAwLjA5NDMgMC40MjIzIDAuMjUwNyAwLjU4NzIgMC40NjkyIDAuMTY4OSAwLjIxODQgMC4yNTM0IDAuNTE2MyAwLjI1MzQgMC44OTM2IDAgMC40MTctMC4xMjU3IDAuNzgxOS0wLjM3NzEgMS4wOTQ3LTAuMjE4OSAwLjI3MjYtMC41MjIgMC40NjM0LTAuOTA5MSAwLjU3MjUtMC4wODkgMC4wMjUxLTAuMTUzOSAwLjEwNTktMC4xNTM5IDAuMjAwNXYwLjQ2NDJjMCAwLjExMDUtMC4wODczIDAuMi0wLjE5NSAwLjJ6XCIgZmlsbD1cIiMwMDBcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJtOS41OTI0IDVoNC4yMjE4YzEuMDgxMyAwIDAuNDg3NSAxLjY2NCAwLjA0OTcgMi42NzlsLTAuNDk4MiAxLjE2NC0wLjA2NzMgMC4xNTdjMC40NzE5LTAuMDIzNDkgMC45Mzg2IDAuMTEwNTQgMS4zMjk5IDAuMzgyIDEuNDYzOSAxLjM3MzggMi42NTIgMy4wMjc4IDMuNDk3NCA0Ljg2OSAwLjMyOTQgMC42ODA4IDAuNDYwMSAxLjQ0NDggMC4zNzYzIDIuMi0wLjEwMDYgMS45MjQ5LTEuNjA2MyAzLjQ1ODgtMy40ODM3IDMuNTQ5aC02LjYzYy0xLjg3NzktMC4wODc1LTMuMzg1OC0xLjYxOTgtMy40ODg2LTMuNTQ1LTAuMDgzODEtMC43NTUyIDAuMDQ2ODgtMS41MTkyIDAuMzc2MzUtMi4yIDAuODQ2MzktMS44NDMgMi4wMzYxLTMuNDk4NSAzLjUwMjItNC44NzMgMC4zOTEzNy0wLjI3MTQ2IDAuODU3OTktMC40MDU0OSAxLjMyOTktMC4zODJsLTAuMDc4LTAuMTgxLTAuNDg3NDctMS4xNGMtMC40MzU4My0xLjAxNS0xLjAzMjUtMi42NzkgMC4wNDk3Mi0yLjY3OXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJtMTMuMjk4IDkuNzVjMC40MTQyIDAgMC43NS0wLjMzNTc5IDAuNzUtMC43NXMtMC4zMzU4LTAuNzUtMC43NS0wLjc1djEuNXptLTMuMTkwMi0xLjVjLTAuNDE0MTkgMC0wLjc0OTk4IDAuMzM1NzktMC43NDk5OCAwLjc1czAuMzM1NzkgMC43NSAwLjc0OTk4IDAuNzV2LTEuNXptNS44Njk1IDAuMzk5ODhjMC4zNTg5LTAuMjA2NzYgMC40ODIzLTAuNjY1MzMgMC4yNzU1LTEuMDI0MnMtMC42NjUzLTAuNDgyMjctMS4wMjQyLTAuMjc1NTFsMC43NDg3IDEuMjk5OHptLTIuNjEyIDAuMTkzMTIgMC4xNDQ3IDAuNzM1OTEgMC4wMDIyLTQuM2UtNCAtMC4xNDY5LTAuNzM1NDh6bS0zLjMzNTUtMC4wMjQgMC4xNTUzLTAuNzMzNzktMC4wMDY4LTAuMDAxMzgtMC4xNDg1IDAuNzM1MTd6bS0xLjg2NDEtMS40NzU0Yy0wLjM2MjU0LTAuMjAwMzUtMC44MTg4NS0wLjA2ODg4LTEuMDE5MiAwLjI5MzY1LTAuMjAwMzYgMC4zNjI1NC0wLjA2ODg5IDAuODE4ODUgMC4yOTM2NSAxLjAxOTJsMC43MjU1NS0xLjMxMjl6bTUuMTMyMyAwLjkwNjQzaC0zLjE5MDJ2MS41aDMuMTkwMnYtMS41em0xLjkzMDYtMC44OTk4OGMtMC42MjcgMC4zNjExNi0xLjMwNTYgMC42MTY3MS0yLjAxMDIgMC43NTc0bDAuMjkzOCAxLjQ3MWMwLjg2NTMtMC4xNzI4IDEuNjk3Ni0wLjQ4NjQ1IDIuNDY1MS0wLjkyODZsLTAuNzQ4Ny0xLjI5OTh6bS0yLjAwOCAwLjc1Njk3Yy0xLjAwMzQgMC4xOTczMi0yLjAzNDggMC4xODk5LTMuMDM1NS0wLjAyMTg0bC0wLjMxMDU0IDEuNDY3NWMxLjE5ODMgMC4yNTM1NiAyLjQzMzcgMC4yNjI0NiAzLjYzNTQgMC4wMjYxNmwtMC4yODk0LTEuNDcxOHptLTMuMDQyMy0wLjAyMzI2Yy0wLjcwMjczLTAuMTQxODctMS4zODEyLTAuMzkxMjgtMi4wMTI2LTAuNzQwMjZsLTAuNzI1NTUgMS4zMTI5YzAuNzY0ODEgMC40MjI2NyAxLjU4NzcgMC43MjU0MSAyLjQ0MTIgMC44OTc3NGwwLjI5NjkxLTEuNDcwM3pcIiBmaWxsPVwiIzAwMFwiLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIGA7XG4gICAgfSBlbHNlIGlmIChmYWN0RGV0YWlscy5pbmNsdWRlcygnTW9ydGdhZ2UgUGF5bWVudCcpKSB7XG4gICAgICAvLyBIb3VzZSB3aXRoIGRvbGxhciBzaWduXG4gICAgICBpY29uU3ZnID0gYFxuICAgICAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjYwMHB4XCIgaGVpZ2h0PVwiNjAwcHhcIiBmaWxsPVwiIzAwMDAwMFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDEyMi4zOSAxMjIuMzlcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQgICAgPHBhdGggZD1cIm04Ni41MSA3Mi4wNDF2MzkuNjczaC0xNy4xNTN2LTQwLjI0NWgtMjkuNjcxdjQwLjI0NGgtMTcuODE5di01Ni41ODdsMjkuNjQ5LTIwLjM4OGMwLjEyOC01LjI5MiAxLjM3OS0xMC4zMSAzLjU0LTE0LjgxN2wtMC40MzgtMC4zMDgtMy4wNjQgMi4xMDYtMjQuMDQzIDE2LjQ2di04LjM3OWgtMTMuNDgxdjE3LjYwNmwtMTQuMDMgOS42MDUgNi4wNTEgOC44MzYgNS4xMDYtMy40OTZ2NTkuMzE4aDg2LjA0MmwwLjAyLTUwLjc5M2MtMi45NjMgMC43ODEtNi4wNyAxLjE5OS05LjI3MyAxLjE5OS0wLjQ4MyAzZS0zIC0wLjk2LTAuMDE1LTEuNDM2LTAuMDM0elwiLz5cblx0XHQgICAgPHBhdGggZD1cIm04OS4yNzEgMC43MTZjLTE4LjI4NyAwLTMzLjExMyAxNC44MjYtMzMuMTEzIDMzLjExNCAwIDE4LjI4OSAxNC44MjYgMzMuMTE0IDMzLjExMyAzMy4xMTQgMTguMjg5IDAgMzMuMTE0LTE0LjgyNiAzMy4xMTQtMzMuMTE1IDFlLTMgLTE4LjI4Ny0xNC44MjQtMzMuMTEzLTMzLjExNC0zMy4xMTN6bTQuMDc1IDU1LjQyMnY3LjM2OGgtOC40MDh2LTYuNzljLTQuMDU0LTAuMzI2LTguMTA3LTEuNTM0LTEwLjYwNC0zLjJsLTAuODM0LTAuNTU1IDIuNjMzLTkuMTYyIDEuNTIxIDAuODk4YzMuMDc4IDEuODE0IDYuNzYyIDIuODU3IDEwLjEwNCAyLjg1NyAzLjYyNiAwIDUuOTcxLTEuNjExIDUuOTcxLTQuMTAzIDAtMS43MDUtMC44MDctMy41NzYtNi42NDYtNS43MDctNi4zNjItMi4zMDMtMTIuODc0LTUuNzMtMTIuODc0LTEzLjY3NSAwLTYuMzk3IDQuMjM5LTExLjI0OSAxMS4xNDYtMTIuODc5di03LjAzNWg4LjQwN3Y2LjUwNmMzLjI2NSAwLjI0NSA2LjA4OCAxLjAwMyA4Ljc5NiAyLjM1OWwxLjAyMyAwLjUxMi0yLjYzNyA4Ljk3OS0xLjgyOC0wLjgzOGMtMS42MzktMC43NjYtNC4zODktMi4wNDctOC40NTItMi4wNDctMy4yNTkgMC01LjIwNSAxLjI5OC01LjIwNSAzLjQ3OCAwIDEuODk3IDEuODI1IDMuMjM4IDcuNTE2IDUuNTE0IDguNDUxIDMuMTcgMTIuMDczIDcuMzgzIDEyLjA3MyAxNC4wNzMtMmUtMyA2LjY3Ni00LjU1NiAxMS44NTItMTEuNzAyIDEzLjQ0N3pcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgYDtcbiAgICB9IGVsc2UgaWYgKGZhY3REZXRhaWxzLmluY2x1ZGVzKCdNb250aGx5IENhc2ggRmxvdycpKSB7XG4gICAgICAvLyBDYXNoIGZsb3cgaWNvblxuICAgICAgaWNvblN2ZyA9IGBcbiAgICAgICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gICAgICAgIDxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgZmlsbD1cIiMwMDAwMDBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMjIuNTUgMTIyLjU1XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjI1LjQ1NCA1NS4wMjMgNi40NDYgNTUuMDIzIDYuNDQ2IDgzLjU1NSAyNS40NTQgNzMuMTM5XCIvPlxuICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI2LjQ0NiAxMDkuMzMgMjUuNDU0IDEwOS4zMyAyNS40NTQgOTIuNzE1IDYuNDQ2IDEwMy4xM1wiLz5cbiAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiNTYuNTc1IDM1Ljc1NiAzNy41NjcgMzUuNzU2IDM3LjU2NyA2Ni41IDU2LjU3NSA1Ni4wODRcIi8+XG4gICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjM3LjU2NyAxMDkuMzMgNTYuNTc1IDEwOS4zMyA1Ni41NzUgNzUuNjYxIDM3LjU2NyA4Ni4wNzlcIi8+XG4gICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjY5LjYwMiAxMDkuMzMgODguNjA4IDEwOS4zMyA4OC42MDggNTguMTA1IDY5LjYwMiA2OC41MjJcIi8+XG4gICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjg4LjYwOCAxMy4yMTcgNjkuNjAyIDEzLjIxNyA2OS42MDIgNDguOTQ1IDg4LjYwOCAzOC41MjhcIi8+XG4gICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjk2LjMzOCAyMi45NDEgMTAyLjczIDM1LjIyIDAgOTEuOTQ2IDAgMTAxLjc1IDEwNi43IDQyLjgzNyAxMTMuMzcgNTQuMzI2IDEyMi41NSAyOS41NjJcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgYDtcbiAgICB9IGVsc2UgaWYgKGZhY3REZXRhaWxzLmluY2x1ZGVzKCdOT0knKSkge1xuICAgICAgLy8gTmV0IGljb25cbiAgICAgIGljb25TdmcgPSBgXG4gICAgICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICAgICAgICA8c3ZnIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIm0xMS45NDggMS4yNWgwLjEwNGMwLjg5ODUtM2UtNSAxLjY0NzctNWUtNSAyLjI0MjUgMC4wNzk5MSAwLjYyNzggMC4wODQ0MSAxLjE5NDYgMC4yNzAwOCAxLjY1IDAuNzI1NTUgMC40NTU1IDAuNDU1NDcgMC42NDEyIDEuMDIyMyAwLjcyNTYgMS42NTAxIDAuMDU5MSAwLjQzOTYgMC4wNzQ1IDAuOTYzNTcgMC4wNzg1IDEuNTY5OCAwLjY0ODUgMC4wMjA4MSAxLjIyNjYgMC4wNTg3MyAxLjc0MDQgMC4xMjc4MSAxLjE3MjQgMC4xNTc2MiAyLjEyMTQgMC40ODk3NCAyLjg2OTggMS4yMzgxIDAuNzQ4MyAwLjc0ODM3IDEuMDgwNCAxLjY5NzMgMS4yMzgxIDIuODY5NyAwLjE1MzEgMS4xMzkyIDAuMTUzMSAyLjU5NDggMC4xNTMxIDQuNDMyNnYwLjExMjhjMCAxLjgzNzggMCAzLjI5MzQtMC4xNTMxIDQuNDMyNi0wLjE1NzcgMS4xNzI0LTAuNDg5OCAyLjEyMTQtMS4yMzgxIDIuODY5OC0wLjc0ODQgMC43NDgzLTEuNjk3NCAxLjA4MDQtMi44Njk4IDEuMjM4MS0xLjEzOTIgMC4xNTMxLTIuNTk0OCAwLjE1MzEtNC40MzI2IDAuMTUzMWgtNC4xMTI4Yy0xLjgzNzggMC0zLjI5MzQgMC00LjQzMjYtMC4xNTMxLTEuMTcyNC0wLjE1NzctMi4xMjE0LTAuNDg5OC0yLjg2OTctMS4yMzgxLTAuNzQ4MzYtMC43NDg0LTEuMDgwNS0xLjY5NzQtMS4yMzgxLTIuODY5OC0wLjE1MzE3LTEuMTM5Mi0wLjE1MzE2LTIuNTk0OC0wLjE1MzE0LTQuNDMyNnYtMC4xMTI4Yy0yZS01IC0xLjgzNzgtM2UtNSAtMy4yOTM0IDAuMTUzMTQtNC40MzI2IDAuMTU3NjItMS4xNzI0IDAuNDg5NzQtMi4xMjE0IDEuMjM4MS0yLjg2OTcgMC43NDgzNy0wLjc0ODM2IDEuNjk3My0xLjA4MDUgMi44Njk3LTEuMjM4MSAwLjUxMzc3LTAuMDY5MDggMS4wOTE5LTAuMTA3IDEuNzQwNC0wLjEyNzgxIDRlLTMgLTAuNjA2MjQgMC4wMTk0MS0xLjEzMDIgMC4wNzg1MS0xLjU2OTggMC4wODQ0MS0wLjYyNzc5IDAuMjcwMDgtMS4xOTQ2IDAuNzI1NTUtMS42NTAxczEuMDIyMy0wLjY0MTE0IDEuNjUwMS0wLjcyNTU1YzAuNTk0NzgtMC4wNzk5NiAxLjM0NC0wLjA3OTk0IDIuMjQyNS0wLjA3OTkxem0tMy4xOTYyIDQuMDAxOGMwLjM3ODEzLTAuMDAxNzkgMC43NzUxNC0wLjAwMTc4IDEuMTkxOC0wLjAwMTc4aDQuMTEyOGMwLjQxNjcgMCAwLjgxMzctMWUtNSAxLjE5MTggMC4wMDE3OC0wLjAwNDItMC41NzAzMi0wLjAxODItMS4wMDA1LTAuMDY0Ny0xLjM0NjQtMC4wNjIxLTAuNDYxNDYtMC4xNjkzLTAuNjU4OTUtMC4yOTk2LTAuNzg5MjdzLTAuMzI3OC0wLjIzNzU0LTAuNzg5My0wLjI5OTU4Yy0wLjQ4My0wLjA2NDk0LTEuMTMwNi0wLjA2NjU0LTIuMDk0Ni0wLjA2NjU0cy0xLjYxMTYgMC4wMDE2LTIuMDk0NiAwLjA2NjU0Yy0wLjQ2MTQ2IDAuMDYyMDQtMC42NTg5NiAwLjE2OTI2LTAuNzg5MjcgMC4yOTk1OC0wLjEzMDMyIDAuMTMwMzItMC4yMzc1NCAwLjMyNzgxLTAuMjk5NTggMC43ODkyNy0wLjA0NjUgMC4zNDU4Ni0wLjA2MDUzIDAuNzc2MDctMC4wNjQ3NCAxLjM0NjR6bS0zLjA0MSAxLjYzOGMtMS4wMDYxIDAuMTM1MjctMS41ODU3IDAuMzg4OTQtMi4wMDkgMC44MTIxNS0wLjQyMzIxIDAuNDIzMi0wLjY3Njg4IDEuMDAyOC0wLjgxMjE0IDIuMDA4OS0wLjEzODE3IDEuMDI3Ni0wLjEzOTc2IDIuMzgyNC0wLjEzOTc2IDQuMjg5MnMwLjAwMTU5IDMuMjYxNSAwLjEzOTc2IDQuMjg5MmMwLjEzNTI2IDEuMDA2IDAuMzg4OTMgMS41ODU3IDAuODEyMTQgMi4wMDg5czEuMDAyOSAwLjY3NjkgMi4wMDkgMC44MTIxYzEuMDI3NyAwLjEzODIgMi4zODIzIDAuMTM5OCA0LjI4OTIgMC4xMzk4aDRjMS45MDY4IDAgMy4yNjE1LTAuMDAxNiA0LjI4OTItMC4xMzk4IDEuMDA2LTAuMTM1MiAxLjU4NTctMC4zODg5IDIuMDA4OS0wLjgxMjFzMC42NzY5LTEuMDAyOSAwLjgxMjEtMi4wMDg5YzAuMTM4Mi0xLjAyNzcgMC4xMzk4LTIuMzgyNCAwLjEzOTgtNC4yODkycy0wLjAwMTYtMy4yNjE1LTAuMTM5OC00LjI4OTJjLTAuMTM1Mi0xLjAwNjEtMC4zODg5LTEuNTg1Ny0wLjgxMjEtMi4wMDg5LTAuNDIzMi0wLjQyMzIxLTEuMDAyOS0wLjY3Njg4LTIuMDA4OS0wLjgxMjE1LTEuMDI3Ny0wLjEzODE2LTIuMzgyNC0wLjEzOTc2LTQuMjg5Mi0wLjEzOTc2aC00Yy0xLjkwNjggMC0zLjI2MTUgMC4wMDE2LTQuMjg5MiAwLjEzOTc2em02LjI4OTIgMi4zNjAyYzAuNDE0MiAwIDAuNzUgMC4zMzU3OSAwLjc1IDAuNzV2MC4wMTAyYzEuMDg4OCAwLjI3NDMgMiAxLjEzMjggMiAyLjMyMzEgMCAwLjQxNDItMC4zMzU4IDAuNzUtMC43NSAwLjc1cy0wLjc1LTAuMzM1OC0wLjc1LTAuNzVjMC0wLjM4NC0wLjQyNTgtMC45MTY2LTEuMjUtMC45MTY2cy0xLjI1IDAuNTMyNi0xLjI1IDAuOTE2NmMwIDAuMzg0MSAwLjQyNTggMC45MTY3IDEuMjUgMC45MTY3IDEuMzg0OSAwIDIuNzUgMC45NTk4IDIuNzUgMi40MTY3IDAgMS4xOTAzLTAuOTExMiAyLjA0ODgtMiAyLjMyMzF2MC4wMTAyYzAgMC40MTQyLTAuMzM1OCAwLjc1LTAuNzUgMC43NXMtMC43NS0wLjMzNTgtMC43NS0wLjc1di0wLjAxMDJjLTEuMDg4OC0wLjI3NDMtMi0xLjEzMjgtMi0yLjMyMzEgMC0wLjQxNDIgMC4zMzU3OS0wLjc1IDAuNzUtMC43NSAwLjQxNDIgMCAwLjc1IDAuMzM1OCAwLjc1IDAuNzUgMCAwLjM4NCAwLjQyNTggMC45MTY2IDEuMjUgMC45MTY2czEuMjUtMC41MzI2IDEuMjUtMC45MTY2YzAtMC4zODQxLTAuNDI1OC0wLjkxNjctMS4yNS0wLjkxNjctMS4zODQ5IDAtMi43NS0wLjk1OTctMi43NS0yLjQxNjcgMC0xLjE5MDMgMC45MTEyLTIuMDQ4OCAyLTIuMzIzMXYtMC4wMTAyYzAtMC40MTQyMSAwLjMzNTgtMC43NSAwLjc1LTAuNzV6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGZpbGw9XCIjMDAwXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICBgO1xuICAgIH0gZWxzZSBpZiAoZmFjdERldGFpbHMuaW5jbHVkZXMoJ1RvdGFsIEV4cGVuc2VzJykpIHtcbiAgICAgIC8vIEV4cGVuc2UgaWNvblxuICAgICAgaWNvblN2ZyA9IGBcbiAgICAgICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJpY29uIGxpbmUtY29sb3JcIiBmaWxsPVwiIzAwMDAwMFwiIHN0cm9rZT1cIiMwMDAwMDBcIiBkYXRhLW5hbWU9XCJMaW5lIENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPGcgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNSwxM0g3LjVBMS41LDEuNSwwLDAsMCw5LDExLjVIOUExLjUsMS41LDAsMCwwLDcuNSwxMGgtMUExLjUsMS41LDAsMCwxLDUsOC41SDVBMS41LDEuNSwwLDAsMSw2LjUsN0g5XCIgc3Ryb2tlPVwiIzAwMFwiLz5cbiAgICAgICAgPHBhdGggZD1cIk03LDdWNm0wLDhWMTNtNSwyaDNtLTItNGgyXCIgc3Ryb2tlPVwiIzAwMFwiIGRhdGEtbmFtZT1cInNlY29uZGFyeVwiLz5cbiAgICAgICAgPHBhdGggZD1cIk01LDE4djNsMi4zMy0xLDIuMzMsMUwxMiwyMGwyLjM0LDEsMi4zMy0xTDE5LDIxVjRhMSwxLDAsMCwwLTEtMUgxMVwiIHN0cm9rZT1cIiMwMDAwMDAwMDBcIi8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICBgO1xuICAgIH0gZWxzZSBpZiAoZmFjdERldGFpbHMuaW5jbHVkZXMoJ0FubnVhbCBDYXNoIEZsb3cnKSkge1xuICAgICAgLy8gQ2FsZW5kYXIgaWNvblxuICAgICAgaWNvblN2ZyA9IGBcbiAgICAgICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyMDBweFwiIGhlaWdodD1cIjIwMHB4XCIgZmlsbD1cIiMwMDAwMDBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+ICAgXG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNjczLDM5OS4xNTFWOTAuOTA2SDEyMi4wNFYxOC44MDhINzMuNDU0djU2LjQyNUgwdjMzOS41OTJoMzE2LjA4MnYtMTUuNjczSDE1LjY3M3ogTTg5LjEyOCwzNC40ODJoMTcuMjR2NDAuNzUxIGgtMTcuMjRWMzQuNDgyelwiLz4gICAgIFxuICAgICAgICA8cGF0aCBkPVwibTM2MC4xNyA3NS4yMzN2LTU2LjQyNWgtNDguNTg3djU2LjQyNWgtMTY2LjA0djE1LjY3M2gyNzIuNDF2NDcuMDJoLTM3OC43OHYxNS42NzRoMzk0LjQ1di03OC4zNjdoLTczLjQ1OXptLTE1LjY3MyAwaC0xNy4yNHYtNDAuNzUxaDE3LjI0djQwLjc1MXpcIi8+ICAgICBcbiAgICAgICAgPHBhdGggZD1cIm00MzMuNjMgMzIxLjE2di0xNDQuMDVoLTE1LjY3M3YxNDQuMDRjLTQzLjg3MiAzLjk3NS03OC4zNjcgNDAuOTQyLTc4LjM2NyA4NS44MzIgMCA0Ny41MzMgMzguNjcyIDg2LjIwNCA4Ni4yMDQgODYuMjA0czg2LjIwMy0zOC42NyA4Ni4yMDMtODYuMjAzYzAtNDQuODktMzQuNDk1LTgxLjg1OC03OC4zNjctODUuODMyem0tNy44MzcgMTU2LjM2Yy0zOC44OTEgMC03MC41MzEtMzEuNjQtNzAuNTMxLTcwLjUzMXMzMS42MzktNzAuNTMxIDcwLjUzMS03MC41MzEgNzAuNTMxIDMxLjY0IDcwLjUzMSA3MC41MzFjMCAzOC44OTItMzEuNjQgNzAuNTMxLTcwLjUzMSA3MC41MzF6XCIvPiAgICAgXG4gICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjQzMy42MyAzOTkuMTUgNDMzLjYzIDM1OS45NyA0MTcuOTYgMzU5Ljk3IDQxNy45NiA0MTQuODIgNDcyLjgyIDQxNC44MiA0NzIuODIgMzk5LjE1XCIvPiAgICAgXG4gICAgICAgIDxwYXRoIGQ9XCJtMTU2LjczIDE3OS43MnY0Ny4wMmg0Ny4wMnYtNDcuMDJoLTQ3LjAyem0zMS4zNDcgMzEuMzQ3aC0xNS42NzN2LTE1LjY3M2gxNS42NzN2MTUuNjczelwiLz4gICAgIFxuICAgICAgICA8cGF0aCBkPVwibTIyOS44OCAxNzkuNzJ2NDcuMDJoNDcuMDJ2LTQ3LjAyaC00Ny4wMnptMzEuMzQ3IDMxLjM0N2gtMTUuNjczdi0xNS42NzNoMTUuNjczdjE1LjY3M3pcIi8+ICAgICBcbiAgICAgICAgPHBhdGggZD1cIm0zMDMuMDIgMTc5LjcydjQ3LjAyaDQ3LjAydi00Ny4wMmgtNDcuMDJ6bTMxLjM0NyAzMS4zNDdoLTE1LjY3M3YtMTUuNjczaDE1LjY3M3YxNS42NzN6XCIvPiAgICAgXG4gICAgICAgIDxwYXRoIGQ9XCJtODMuNTkgMjUyLjg2djQ3LjAyaDQ3LjAydi00Ny4wMmgtNDcuMDJ6bTMxLjM0NyAzMS4zNDdoLTE1LjY3NHYtMTUuNjczaDE1LjY3M3YxNS42NzN6XCIvPiAgICAgXG4gICAgICAgIDxwYXRoIGQ9XCJtMTU2LjczIDI1Mi44NnY0Ny4wMmg0Ny4wMnYtNDcuMDJoLTQ3LjAyem0zMS4zNDcgMzEuMzQ3aC0xNS42NzN2LTE1LjY3M2gxNS42NzN2MTUuNjczelwiLz4gICAgIFxuICAgICAgICA8cGF0aCBkPVwibTIyOS44OCAyNTIuODZ2NDcuMDJoNDcuMDJ2LTQ3LjAyaC00Ny4wMnptMzEuMzQ3IDMxLjM0N2gtMTUuNjczdi0xNS42NzNoMTUuNjczdjE1LjY3M3pcIi8+ICAgICBcbiAgICAgICAgPHBhdGggZD1cIm0zMDMuMDIgMjUyLjg2djQ3LjAyaDQ3LjAydi00Ny4wMmgtNDcuMDJ6bTMxLjM0NyAzMS4zNDdoLTE1LjY3M3YtMTUuNjczaDE1LjY3M3YxNS42NzN6XCIvPiAgICAgXG4gICAgICAgIDxwYXRoIGQ9XCJtODMuNTkgMzI2LjAxdjQ3LjAyaDQ3LjAydi00Ny4wMmgtNDcuMDJ6bTMxLjM0NyAzMS4zNDdoLTE1LjY3NHYtMTUuNjczaDE1LjY3M3YxNS42NzN6XCIvPiAgICAgXG4gICAgICAgIDxwYXRoIGQ9XCJtMTU2LjczIDMyNi4wMXY0Ny4wMmg0Ny4wMnYtNDcuMDJoLTQ3LjAyem0zMS4zNDcgMzEuMzQ3aC0xNS42NzN2LTE1LjY3M2gxNS42NzN2MTUuNjczelwiLz4gICAgIFxuICAgICAgICA8cGF0aCBkPVwibTIyOS44OCAzMjYuMDF2NDcuMDJoNDcuMDJ2LTQ3LjAyaC00Ny4wMnptMzEuMzQ3IDMxLjM0N2gtMTUuNjczdi0xNS42NzNoMTUuNjczdjE1LjY3M3pcIi8+ICAgPC9zdmc+XG4gICAgICBgO1xuICAgIH0gZWxzZSBpZiAoZmFjdERldGFpbHMuaW5jbHVkZXMoJ0dSTScpKSB7XG4gICAgICAvLyBDYWxjdWxhdG9yIGljb25cbiAgICAgIGljb25TdmcgPSBgXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgcm9sZT1cImltZ1wiIGNsYXNzPVwiSWNvbi1jMTFuLTgtMTA2LTBfX3NjLTEzbGxtbWwtMCBpQkp5YlFcIj5cbiAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI0IDRIOGEyIDIgMCAwMC0yIDJ2MjBhMiAyIDAgMDAyIDJoMTZhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJ6bTAgMjJIOFY2aDE2djIwelwiPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgOWgxMnYzSDEwek0xMCAxNGgzdjNoLTN6TTE0LjUgMTRoM3YzaC0zek0xOSAxNGgzdjNoLTN6TTEwIDE4aDN2M2gtM3pNMTQuNSAxOGgzdjNoLTN6TTE5IDE4aDN2M2gtM3pNMTkgMjJoM3YzaC0zelwiPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgYDtcbiAgICB9IGVsc2UgaWYgKGZhY3REZXRhaWxzLmluY2x1ZGVzKCdDYXAgUmF0ZScpKSB7XG4gICAgICAvLyBQZXJjZW50YWdlIGljb25cbiAgICAgIGljb25TdmcgPSBgXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgcm9sZT1cImltZ1wiIGNsYXNzPVwiSWNvbi1jMTFuLTgtMTA2LTBfX3NjLTEzbGxtbWwtMCBpQkp5YlFcIj5cbiAgICAgICAgICA8ZyBzdHJva2U9XCJub25lXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEzIDguNWE0LjUgNC41IDAgMTEtOSAwIDQuNSA0LjUgMCAwMTkgMHpNMTEgOC41YTIuNSAyLjUgMCAxMC01IDAgMi41IDIuNSAwIDAwNSAwek0yOCAyMy41YTQuNSA0LjUgMCAxMS05IDAgNC41IDQuNSAwIDAxOSAwek0yNiAyMy41YTIuNSAyLjUgMCAxMC01IDAgMi41IDIuNSAwIDAwNSAwek04Ljc2IDI1LjY3bDE1LjY4LTE4LjQtMS41Mi0xLjMtMTUuNjggMTguNHpcIj48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIGA7XG4gICAgfSBlbHNlIGlmIChmYWN0RGV0YWlscy5pbmNsdWRlcygnQ2FzaCBvbiBDYXNoIFJldHVybicpKSB7XG4gICAgICAvLyBSZXR1cm4gYXJyb3cgaWNvblxuICAgICAgaWNvblN2ZyA9IGBcbiAgICAgICAgPHN2ZyBmaWxsPVwiIzAwMDAwMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDI0IDI0XCI+PGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+PHBhdGggZD1cIk0yMS43LDcuM2MtMC40LTAuNC0xLTAuNC0xLjQsMEwxNCwxMy42TDkuNyw5LjNDOS41LDkuMSw5LjMsOSw5LDlDOC43LDksOC41LDkuMSw4LjMsOS4zbC02LDZDMi4xLDE1LjUsMiwxNS43LDIsMTZjMCwwLjYsMC40LDEsMSwxYzAuMywwLDAuNS0wLjEsMC43LTAuM0w5LDExLjRsNC4zLDQuM2MwLjEsMC4xLDAuMiwwLjIsMC4zLDAuMkMxMy43LDE2LDEzLjksMTYsMTQsMTZjMC4yLDAsMC41LTAuMSwwLjYtMC4zYzAsMCwwLDAsMC4xLDBjMCwwLDAsMCwwLDBzMCwwLDAsMGw3LTdDMjIuMSw4LjMsMjIuMSw3LjcsMjEuNyw3LjN6XCI+PC9wYXRoPjwvZz48L3N2Zz5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGljb25Tdmc7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZmFjdCBpdGVtIGZvciBkaXNwbGF5aW5nIGluIHRoZSBmYWN0cyBsaXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmFjdERldGFpbHMgLSBUZXh0IGNvbnRlbnQgb2YgdGhlIGZhY3QuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgZmFjdCBpdGVtIGVsZW1lbnQuXG4gICAqL1xuICBjcmVhdGVGYWN0SXRlbShmYWN0RGV0YWlscykge1xuICAgIC8vIENyZWF0ZSBjb250YWluZXJcbiAgICBjb25zdCBmYWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZhY3RJdGVtLmNsYXNzTmFtZSA9ICdzYy1qTkpOUXAgY2pWckdsIHByb3BmaW5kZXItcHJvLXJlc3VsdC1pdGVtJztcbiAgICBcbiAgICAvLyBHZXQgdGhlIGFwcHJvcHJpYXRlIGljb24gYmFzZWQgb24gdGhlIGZhY3QgY29udGVudFxuICAgIGNvbnN0IGljb25TdmcgPSB0aGlzLmdldEljb25Gb3JGYWN0KGZhY3REZXRhaWxzKTtcbiAgICBcbiAgICAvLyBVc2UgWmlsbG93J3Mgc3R5bGluZyBmb3IgY29uc2lzdGVuY3lcbiAgICBmYWN0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwic2MtaGxMQlJ5IGpYY3JiQ1wiPlxuICAgICAgICAke2ljb25Tdmd9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiVGV4dC1jMTFuLTgtMTA2LTBfX3NjLWFpYWkyNC0wIHNjLWJUVEVMTSBpdnFRRnQgamhSZWRZXCI+JHtmYWN0RGV0YWlsc308L3NwYW4+XG4gICAgYDtcbiAgICBcbiAgICByZXR1cm4gZmFjdEl0ZW07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUlNYW5hZ2VyOyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBCYXNpYyBpbXBsZW1lbnRhdGlvbiBvZiBhbiBldmVudCBlbWl0dGVyIGZvciBwdWIvc3ViIHBhdHRlcm4uXG4gKi9cblxuLyoqXG4gKiBCYXNpYyBpbXBsZW1lbnRhdGlvbiBvZiBhbiBldmVudCBlbWl0dGVyIGZvciBwdWIvc3ViIHBhdHRlcm4uXG4gKi9cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgRXZlbnRFbWl0dGVyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBldmVudCBsaXN0ZW5lcnMgbWFwXG4gICAgdGhpcy5ldmVudHMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGFuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIEV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVW5zdWJzY3JpYmUgZnVuY3Rpb24uXG4gICAqL1xuICBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICAvLyBJZiB0aGlzIGV2ZW50IGRvZXNuJ3QgZXhpc3QgeWV0LCBjcmVhdGUgaXQgd2l0aCBhbiBlbXB0eSBhcnJheSBvZiBsaXN0ZW5lcnNcbiAgICBpZiAoIXRoaXMuZXZlbnRzLmhhcyhldmVudCkpIHtcbiAgICAgIHRoaXMuZXZlbnRzLnNldChldmVudCwgW10pO1xuICAgIH1cbiAgICBcbiAgICAvLyBBZGQgdGhlIGxpc3RlbmVyIHRvIHRoZSBldmVudCdzIGFycmF5XG4gICAgdGhpcy5ldmVudHMuZ2V0KGV2ZW50KS5wdXNoKGxpc3RlbmVyKTtcbiAgICBcbiAgICAvLyBSZXR1cm4gYSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBsaXN0ZW5lclxuICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhbiBldmVudCBvbmNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIEV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVW5zdWJzY3JpYmUgZnVuY3Rpb24uXG4gICAqL1xuICBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIC8vIENyZWF0ZSBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCByZW1vdmVzIGl0c2VsZiBhZnRlciBmaXJzdCBleGVjdXRpb25cbiAgICBjb25zdCBvbmNlV3JhcHBlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAvLyBSZW1vdmUgdGhpcyB3cmFwcGVyXG4gICAgICB0aGlzLm9mZihldmVudCwgb25jZVdyYXBwZXIpO1xuICAgICAgLy8gQ2FsbCBvcmlnaW5hbCBsaXN0ZW5lclxuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgICBcbiAgICAvLyBTdG9yZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgZm9yIHJlbW92YWxcbiAgICBvbmNlV3JhcHBlci5vcmlnaW5hbExpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgXG4gICAgLy8gUmVnaXN0ZXIgdGhlIHdyYXBwZWQgbGlzdGVuZXJcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgb25jZVdyYXBwZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gYW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIEV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyVG9SZW1vdmUgLSBMaXN0ZW5lciBmdW5jdGlvbiB0byByZW1vdmUuXG4gICAqIEByZXR1cm4ge0V2ZW50RW1pdHRlcn0gdGhpcywgZm9yIGNoYWluaW5nLlxuICAgKi9cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lclRvUmVtb3ZlKSB7XG4gICAgLy8gSWYgbm8gZXZlbnQgZXhpc3RzLCByZXR1cm4gZWFybHlcbiAgICBpZiAoIXRoaXMuZXZlbnRzLmhhcyhldmVudCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICAvLyBHZXQgY3VycmVudCBsaXN0ZW5lcnNcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpO1xuICAgIFxuICAgIC8vIEZpbHRlciBvdXQgdGhlIGxpc3RlbmVyIHRvIHJlbW92ZVxuICAgIGNvbnN0IGZpbHRlcmVkTGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIgIT09IGxpc3RlbmVyVG9SZW1vdmUgJiYgXG4gICAgICAgICAgICAgbGlzdGVuZXIub3JpZ2luYWxMaXN0ZW5lciAhPT0gbGlzdGVuZXJUb1JlbW92ZTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyBJZiB3ZSBoYXZlIHJlbWFpbmluZyBsaXN0ZW5lcnMsIHVwZGF0ZSB0aGUgYXJyYXlcbiAgICBpZiAoZmlsdGVyZWRMaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5ldmVudHMuc2V0KGV2ZW50LCBmaWx0ZXJlZExpc3RlbmVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSBkZWxldGUgdGhlIGV2ZW50IGVudGlyZWx5XG4gICAgICB0aGlzLmV2ZW50cy5kZWxldGUoZXZlbnQpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCBuYW1lLlxuICAgKiBAcGFyYW0gey4uLip9IGFyZ3MgLSBBcmd1bWVudHMgdG8gcGFzcyB0byBsaXN0ZW5lcnMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGV2ZW50IGhhZCBsaXN0ZW5lcnMsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICAvLyBJZiBubyBldmVudCBleGlzdHMsIHJldHVybiBmYWxzZVxuICAgIGlmICghdGhpcy5ldmVudHMuaGFzKGV2ZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvLyBHZXQgYW5kIGNhbGwgYWxsIGxpc3RlbmVyc1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuZXZlbnRzLmdldChldmVudCk7XG4gICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBpbiAke2V2ZW50fSBldmVudCBsaXN0ZW5lcjpgLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gZXZlbnQgLSBPcHRpb25hbCBldmVudCBuYW1lLCBpZiBub3QgcHJvdmlkZWQgYWxsIGV2ZW50cyBhcmUgY2xlYXJlZC5cbiAgICogQHJldHVybiB7RXZlbnRFbWl0dGVyfSB0aGlzLCBmb3IgY2hhaW5pbmcuXG4gICAqL1xuICByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIC8vIFJlbW92ZSBzcGVjaWZpYyBldmVudFxuICAgICAgdGhpcy5ldmVudHMuZGVsZXRlKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudHNcbiAgICAgIHRoaXMuZXZlbnRzLmNsZWFyKCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbGlzdGVuZXJzIGZvciBhbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gRXZlbnQgbmFtZS5cbiAgICogQHJldHVybiB7QXJyYXk8RnVuY3Rpb24+fSBBcnJheSBvZiBsaXN0ZW5lcnMuXG4gICAqL1xuICBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudHMuaGFzKGV2ZW50KSA/IFsuLi50aGlzLmV2ZW50cy5nZXQoZXZlbnQpXSA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0ZW5lciBjb3VudCBmb3IgYW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIEV2ZW50IG5hbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn0gTnVtYmVyIG9mIGxpc3RlbmVycy5cbiAgICovXG4gIGxpc3RlbmVyQ291bnQoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudHMuaGFzKGV2ZW50KSA/IHRoaXMuZXZlbnRzLmdldChldmVudCkubGVuZ3RoIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGV2ZW50IG5hbWVzLlxuICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fSBBcnJheSBvZiBldmVudCBuYW1lcy5cbiAgICovXG4gIGV2ZW50TmFtZXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5ldmVudHMua2V5cygpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXI7IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFV0aWxpdHkgZm9yIGZvcm1hdHRpbmcgYW5kIHBhcnNpbmcgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVXRpbGl0eSBmb3IgZm9ybWF0dGluZyBhbmQgcGFyc2luZyB2YWx1ZXMuXG4gKi9cbmNsYXNzIEZvcm1hdHRlclV0aWwge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IEZvcm1hdHRlclV0aWwuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDcmVhdGUgcmV1c2FibGUgZm9ybWF0dGVyc1xuICAgIHRoaXMuY3VycmVuY3lGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDBcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLnBlcmNlbnRGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdwZXJjZW50JyxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMSxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMubnVtYmVyRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBhIHZhbHVlIGFzIGN1cnJlbmN5LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBWYWx1ZSB0byBmb3JtYXQuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gRm9ybWF0dGVkIGN1cnJlbmN5IHN0cmluZy5cbiAgICovXG4gIGZvcm1hdEN1cnJlbmN5KHZhbHVlKSB7XG4gICAgLy8gSGFuZGxlIGludmFsaWQgdmFsdWVzXG4gICAgY29uc3QgbnVtVmFsdWUgPSB0aGlzLmVuc3VyZU51bWJlcih2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVuY3lGb3JtYXR0ZXIuZm9ybWF0KG51bVZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgYSB2YWx1ZSBhcyBwZXJjZW50YWdlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBWYWx1ZSB0byBmb3JtYXQgKDAtMTAwKS5cbiAgICogQHJldHVybiB7c3RyaW5nfSBGb3JtYXR0ZWQgcGVyY2VudGFnZSBzdHJpbmcuXG4gICAqL1xuICBmb3JtYXRQZXJjZW50KHZhbHVlKSB7XG4gICAgLy8gSGFuZGxlIGludmFsaWQgdmFsdWVzXG4gICAgY29uc3QgbnVtVmFsdWUgPSB0aGlzLmVuc3VyZU51bWJlcih2YWx1ZSk7XG4gICAgXG4gICAgLy8gQ29udmVydCBmcm9tIHBlcmNlbnRhZ2UgKDAtMTAwKSB0byBkZWNpbWFsICgwLTEpXG4gICAgY29uc3QgZGVjaW1hbFZhbHVlID0gbnVtVmFsdWUgLyAxMDA7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMucGVyY2VudEZvcm1hdHRlci5mb3JtYXQoZGVjaW1hbFZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgYSB2YWx1ZSBhcyBhIGRlY2ltYWwgbnVtYmVyLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBWYWx1ZSB0byBmb3JtYXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGVjaW1hbHMgLSBOdW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gRm9ybWF0dGVkIG51bWJlciBzdHJpbmcuXG4gICAqL1xuICBmb3JtYXROdW1iZXIodmFsdWUsIGRlY2ltYWxzID0gMSkge1xuICAgIC8vIEhhbmRsZSBpbnZhbGlkIHZhbHVlc1xuICAgIGNvbnN0IG51bVZhbHVlID0gdGhpcy5lbnN1cmVOdW1iZXIodmFsdWUpO1xuICAgIFxuICAgIGlmIChkZWNpbWFscyAhPT0gdGhpcy5udW1iZXJGb3JtYXR0ZXIucmVzb2x2ZWRPcHRpb25zKCkubWF4aW11bUZyYWN0aW9uRGlnaXRzKSB7XG4gICAgICAvLyBDcmVhdGUgYSBuZXcgZm9ybWF0dGVyIHdpdGggdGhlIHNwZWNpZmllZCBkZWNpbWFsc1xuICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGRlY2ltYWxzXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQobnVtVmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5udW1iZXJGb3JtYXR0ZXIuZm9ybWF0KG51bVZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIG1vbmV5IHZhbHVlIGZyb20gdGV4dC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGNvbnRhaW5pbmcgYSBtb25leSB2YWx1ZS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBQYXJzZWQgbnVtZXJpYyB2YWx1ZS5cbiAgICovXG4gIHBhcnNlTW9uZXlWYWx1ZSh0ZXh0KSB7XG4gICAgaWYgKCF0ZXh0KSByZXR1cm4gMDtcbiAgICBcbiAgICAvLyBUcnkgdG8gZXh0cmFjdCB1c2luZyByZWdleCBmb3IgbW9uZXkgcGF0dGVyblxuICAgIGNvbnN0IG1vbmV5UGF0dGVybiA9IC9cXCQoWzAtOSwuXSspLztcbiAgICBjb25zdCBtYXRjaCA9IFN0cmluZyh0ZXh0KS5tYXRjaChtb25leVBhdHRlcm4pO1xuICAgIFxuICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgLy8gUmVtb3ZlIGNvbW1hcyBhbmQgY29udmVydCB0byBudW1iZXJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hdGNoWzFdLnJlcGxhY2UoLywvZywgJycpKSB8fCAwO1xuICAgIH1cbiAgICBcbiAgICAvLyBGYWxsYmFjazoganVzdCB0cnkgdG8gcmVtb3ZlICQgYW5kIGNvbW1hcyBmcm9tIHRoZSB3aG9sZSBzdHJpbmdcbiAgICByZXR1cm4gcGFyc2VGbG9hdChTdHJpbmcodGV4dCkucmVwbGFjZSgvWyQsXS9nLCAnJykpIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlIHZhbHVlIGlzIGEgdmFsaWQgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm4ge251bWJlcn0gVmFsaWQgbnVtYmVyIG9yIDAuXG4gICAqL1xuICBlbnN1cmVOdW1iZXIodmFsdWUpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICByZXR1cm4gIWlzTmFOKG51bSkgPyBudW0gOiAwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlclV0aWw7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgTWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIFppbGxvdyBwcm9wZXJ0eSBhbmFseXNpcyBleHRlbnNpb24uXG4gKi9cblxuaW1wb3J0IEFwcENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9hcHAtY29udHJvbGxlci5qcyc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb24gd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQuXG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVBcHAoKSB7XG4gIC8vIENoZWNrIGlmIHdlJ3JlIG9uIGEgWmlsbG93IHByb3BlcnR5IHBhZ2VcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCd6aWxsb3cuY29tL2hvbWVkZXRhaWxzJykpIHtcbiAgICBjb25zb2xlLmxvZygnUHJvcEZpbmRlciBQcm86IFByb3BlcnR5IHBhZ2UgZGV0ZWN0ZWQnKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgYW5kIGluaXRpYWxpemUgdGhlIGFwcCBjb250cm9sbGVyXG4gICAgY29uc3QgYXBwID0gbmV3IEFwcENvbnRyb2xsZXIoKTtcbiAgICBcbiAgICAvLyBHaXZlIHRoZSBwYWdlIHRpbWUgdG8gZnVsbHkgbG9hZFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXBwLmluaXRpYWxpemUoKTtcbiAgICB9LCAxNTAwKTtcbiAgfVxufVxuXG4vLyBSdW4gdGhlIGFwcCB3aGVuIHRoZSBwYWdlIGlzIGZ1bGx5IGxvYWRlZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0aWFsaXplQXBwKTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIkV2ZW50RW1pdHRlciIsIlByb3BlcnR5IiwiSW52ZXN0bWVudEFzc3VtcHRpb25zIiwiUHJvcGVydHlEYXRhRXh0cmFjdG9yIiwiSW52ZXN0bWVudENhbGN1bGF0b3IiLCJTdG9yYWdlU2VydmljZSIsIlVJTWFuYWdlciIsIkFwcENvbnRyb2xsZXIiLCJldmVudHMiLCJwcm9wZXJ0eUV4dHJhY3RvciIsImNhbGN1bGF0b3IiLCJzdG9yYWdlIiwidWkiLCJjdXJyZW50UHJvcGVydHkiLCJhc3N1bXB0aW9ucyIsImhhbmRsZVByb3BlcnR5SW5wdXQiLCJiaW5kIiwiaGFuZGxlU2V0dGluZ3NVcGRhdGUiLCJfaW5pdGlhbGl6ZSIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibG9hZEFzc3VtcHRpb25zIiwiZXh0cmFjdFByb3BlcnR5Iiwic2V0dXBFdmVudExpc3RlbmVycyIsImluaXRpYWxpemUiLCJlbWl0IiwidXBkYXRlQW5hbHlzaXMiLCJfdGhpcyIsIm9uIiwiY2hyb21lIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImFjdGlvbiIsIm9wdGlvbnMiLCJvYnNlcnZlVXJsQ2hhbmdlcyIsInByb3BlcnR5RGF0YSIsInVwZGF0ZSIsInNhdmVQcm9wZXJ0eSIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJhbmFseXNpc1Jlc3VsdHMiLCJhbmFseXplIiwiX3RoaXMyIiwiY3VycmVudFVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNldEludGVydmFsIiwiaXNQcm9wZXJ0eVBhZ2UiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVybCIsImluY2x1ZGVzIiwiX29wdGlvbnMkaW50ZXJlc3RSYXRlIiwiX29wdGlvbnMkbG9hblRlcm0iLCJfb3B0aW9ucyRkb3duUGF5bWVudCIsIl9vcHRpb25zJGNsb3NpbmdDb3N0cyIsIl9vcHRpb25zJHByb3BlcnR5VGF4UiIsIl9vcHRpb25zJGluc3VyYW5jZVJhdCIsIl9vcHRpb25zJG1haW50ZW5hbmNlUiIsIl9vcHRpb25zJHByb3BlcnR5TWFuYSIsIl9vcHRpb25zJHZhY2FuY3lSYXRlIiwidW5kZWZpbmVkIiwiZGVmYXVsdHMiLCJpbnRlcmVzdFJhdGUiLCJsb2FuVGVybSIsImRvd25QYXltZW50IiwiY2xvc2luZ0Nvc3RzIiwicHJvcGVydHlUYXhSYXRlIiwiaW5zdXJhbmNlUmF0ZSIsIm1haW50ZW5hbmNlUmF0ZSIsInByb3BlcnR5TWFuYWdlbWVudFJhdGUiLCJ2YWNhbmN5UmF0ZSIsInZhbGlkYXRlIiwidmFsaWRhdGVOdW1iZXIiLCJkZWZhdWx0VmFsdWUiLCJtaW4iLCJtYXgiLCJNQVhfVkFMVUUiLCJudW0iLCJwYXJzZUZsb2F0IiwidG9KU09OIiwiZ2V0IiwiZnJvbUpTT04iLCJqc29uIiwiZGF0YSIsInByaWNlIiwicmVudEVzdGltYXRlIiwicmVwYWlyQ29zdCIsIm1vbnRobHlJbmNvbWUiLCJhZGRyZXNzIiwiZ2V0QWRqdXN0ZWRQcmljZSIsImdldEFubnVhbEluY29tZSIsImNhbGN1bGF0ZU1ldHJpY3MiLCJwcm9wZXJ0eSIsImFkanVzdGVkUHJpY2UiLCJhbm51YWxJbmNvbWUiLCJleHBlbnNlcyIsImNhbGN1bGF0ZUV4cGVuc2VzIiwidG90YWxBbm51YWxFeHBlbnNlcyIsInRvdGFsIiwibmV0T3BlcmF0aW5nSW5jb21lIiwiY2FwUmF0ZSIsInRvdGFsQ2FzaE5lZWRlZCIsImxvYW5BbW91bnQiLCJtb3J0Z2FnZVBheW1lbnQiLCJjYWxjdWxhdGVNb3J0Z2FnZVBheW1lbnQiLCJhbm51YWxNb3J0Z2FnZVBheW1lbnQiLCJhbm51YWxDYXNoRmxvdyIsIm1vbnRobHlDYXNoRmxvdyIsImNhc2hPbkNhc2giLCJncm9zc1JlbnRNdWx0aXBsaWVyIiwicHJvcGVydHlUYXhlcyIsImluc3VyYW5jZSIsIm1haW50ZW5hbmNlIiwicHJvcGVydHlNYW5hZ2VtZW50IiwidmFjYW5jeSIsIm1vbnRobHlJbnRlcmVzdCIsIm51bVBheW1lbnRzIiwicGF5bWVudCIsIk1hdGgiLCJwb3ciLCJmb3JtYXRSZXN1bHRzIiwibWV0cmljcyIsImZvcm1hdEN1cnJlbmN5IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiLCJmb3JtYXRQZXJjZW50IiwidG9GaXhlZCIsImZvcm1hdFJhdGlvIiwiY29uY2F0Iiwic2VsZWN0b3JzIiwiX29iamVjdFNwcmVhZCIsInJlbnRaZXN0aW1hdGUiLCJyZW50WmVzdGltYXRlVmFsdWUiLCJyZW50WmVzdGltYXRlVGV4dCIsImV4dHJhY3RQcmljZSIsImV4dHJhY3RSZW50RXN0aW1hdGUiLCJleHRyYWN0QWRkcmVzcyIsInByaWNlRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcnNlTW9uZXlWYWx1ZSIsInRleHRDb250ZW50IiwicmVudENvbnRhaW5lciIsInJlbnRWYWx1ZSIsIndhcm4iLCJyZW50RWxlbWVudHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVudFRleHQiLCJyZW50UGF0dGVybiIsInBhZ2VUZXh0IiwiYm9keSIsImlubmVyVGV4dCIsIm1hdGNoIiwiYWRkcmVzc0VsZW1lbnQiLCJ0cmltIiwidGV4dCIsIm1vbmV5UGF0dGVybiIsInJlcGxhY2UiLCJzdG9yYWdlQXBpIiwic3luYyIsInNhdmVBc3N1bXB0aW9ucyIsInNldCIsIl9sb2FkQXNzdW1wdGlvbnMiLCJ0MCIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9sb2FkUHJvcGVydHkiLCJfY2FsbGVlMiIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxvYWRQcm9wZXJ0eSIsInNhdmUiLCJfbG9hZCIsIl9jYWxsZWUzIiwiX2FyZ3MzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwibG9hZCIsIl94IiwicmVtb3ZlIiwiY2xlYXIiLCJGb3JtYXR0ZXJVdGlsIiwiZXZlbnRFbWl0dGVyIiwiZm9ybWF0dGVyIiwiZWxlbWVudHMiLCJoYW5kbGVVcGRhdGVDbGljayIsImNyZWF0ZUlucHV0c0NvbnRhaW5lciIsInN1YnNjcmliZVRvRXZlbnRzIiwiZXhpc3RpbmdDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImNsYXNzTmFtZSIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImZvbnRGYW1pbHkiLCJoZWFkZXIiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImZvcm0iLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJnYXAiLCJidXR0b24iLCJtYXJnaW5Ub3AiLCJjb2xvciIsImJvcmRlciIsImN1cnNvciIsImZvbnRXZWlnaHQiLCJ1cGRhdGVCdXR0b24iLCJpbnNlcnRJbnB1dHNDb250YWluZXIiLCJmYWN0c0xpc3QiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZmFjdHNDb250YWluZXIiLCJmaXJzdENoaWxkIiwicHJpY2VTZWN0aW9uIiwicGFyZW50IiwibmV4dFNpYmxpbmciLCJjcmVhdGVJbnB1dEZpZWxkcyIsImZpZWxkcyIsImxhYmVsIiwiZmllbGQiLCJmaWVsZENvbnRhaW5lciIsImNyZWF0ZUlucHV0RmllbGQiLCJmbGV4IiwibWluV2lkdGgiLCJmb3JtYXR0ZWRWYWx1ZSIsInNldHVwQ3VycmVuY3lJbnB1dExpc3RlbmVycyIsIl90aGlzMyIsImN1cnJlbmN5SW5wdXRzIiwiaW5wdXQiLCJldmVudCIsImN1cnNvclBvcyIsInRhcmdldCIsInNlbGVjdGlvblN0YXJ0Iiwib3JpZ2luYWxMZW5ndGgiLCJyYXdWYWx1ZSIsIm5ld0N1cnNvclBvcyIsInNldFNlbGVjdGlvblJhbmdlIiwic2VsZWN0IiwicHJldmVudERlZmF1bHQiLCJfdGhpczQiLCJhbmFseXNpc0RldGFpbHMiLCJ1cGRhdGVBbmFseXNpc1Jlc3VsdHMiLCJfdGhpczUiLCJleGlzdGluZ0l0ZW1zIiwiaXRlbSIsImRldGFpbCIsImZhY3RJdGVtIiwiY3JlYXRlRmFjdEl0ZW0iLCJnZXRJY29uRm9yRmFjdCIsImZhY3REZXRhaWxzIiwiaWNvblN2ZyIsIk1hcCIsImxpc3RlbmVyIiwiaGFzIiwib2ZmIiwib25jZSIsIm9uY2VXcmFwcGVyIiwiX2xlbiIsImFyZ3MiLCJfa2V5Iiwib3JpZ2luYWxMaXN0ZW5lciIsImxpc3RlbmVyVG9SZW1vdmUiLCJsaXN0ZW5lcnMiLCJmaWx0ZXJlZExpc3RlbmVycyIsImZpbHRlciIsIl9sZW4yIiwiX2tleTIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJsaXN0ZW5lckNvdW50IiwiZXZlbnROYW1lcyIsImN1cnJlbmN5Rm9ybWF0dGVyIiwicGVyY2VudEZvcm1hdHRlciIsIm51bWJlckZvcm1hdHRlciIsIm51bVZhbHVlIiwiZW5zdXJlTnVtYmVyIiwiZGVjaW1hbFZhbHVlIiwiZm9ybWF0TnVtYmVyIiwiZGVjaW1hbHMiLCJyZXNvbHZlZE9wdGlvbnMiLCJpbml0aWFsaXplQXBwIiwibG9nIiwiYXBwIl0sInNvdXJjZVJvb3QiOiIifQ==