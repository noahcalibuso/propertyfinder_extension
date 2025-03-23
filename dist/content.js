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
      container.innerHTML = "\n      <label style=\"display: block; font-size: 12px; margin-bottom: 4px; color: #555;\">\n        ".concat(label, ":\n      </label>\n      <input\n        id=\"propfinder-pro-").concat(id, "\"\n        type=\"text\"\n        value=\"").concat(formattedValue, "\"\n        style=\"width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; text-align: right; box-sizing: border-box;\"\n      >\n    ");
      return container;
    }

    /**
     * Set up event listeners.
     */
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      // Add click handler for the update button
      if (this.elements.updateButton) {
        this.elements.updateButton.addEventListener('click', this.handleUpdateClick);
      }
    }

    /**
     * Subscribe to events from the event emitter.
     */
  }, {
    key: "subscribeToEvents",
    value: function subscribeToEvents() {
      var _this2 = this;
      // Subscribe to property update events
      this.events.on('propertyUpdated', function (property) {
        _this2.createInputFields(property);
      });

      // Subscribe to analysis results events
      this.events.on('analysisUpdated', function (analysisDetails) {
        _this2.updateAnalysisResults(analysisDetails);
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
      var _this3 = this;
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
        var factItem = _this3.createFactItem(detail);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7TUFDbEIsSUFBTWlNLEdBQUcsR0FBR0MsVUFBVSxDQUFDbE0sS0FBSyxDQUFDO01BQzdCLE9BQU8sQ0FBQ29FLEtBQUssQ0FBQzZILEdBQUcsQ0FBQyxHQUFHQSxHQUFHLEdBQUcsQ0FBQztJQUM5QjtFQUFDO0FBQUE7QUFHSCxpRUFBZStHLGFBQWE7Ozs7OztVQ2pINUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBLFNBQVM0RixhQUFhQSxDQUFBLEVBQUc7RUFDdkI7RUFDQSxJQUFJOU8sTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ00sUUFBUSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7SUFDM0RiLE9BQU8sQ0FBQ29QLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQzs7SUFFckQ7SUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSTNSLHNFQUFhLENBQUMsQ0FBQzs7SUFFL0I7SUFDQWdELFVBQVUsQ0FBQyxZQUFNO01BQ2YyTyxHQUFHLENBQUN6USxVQUFVLENBQUMsQ0FBQztJQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1Y7QUFDRjs7QUFFQTtBQUNBeUIsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUV3TyxhQUFhLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL2NvbnRyb2xsZXJzL2FwcC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL21vZGVscy9pbnZlc3RtZW50LWFzc3VtcHRpb25zLmpzIiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL21vZGVscy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby8uL3NyYy9zZXJ2aWNlcy9pbnZlc3RtZW50LWNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vLi9zcmMvc2VydmljZXMvcHJvcGVydHktZGF0YS1leHRyYWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vLi9zcmMvc2VydmljZXMvc3RvcmFnZS1zZXJ2aWNlLmpzIiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL3VpL3VpLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vLi9zcmMvdXRpbHMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby8uL3NyYy91dGlscy9mb3JtYXR0ZXItdXRpbC5qcyIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvcGZpbmRlci1wcm8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb3BmaW5kZXItcHJvLy4vc3JjL2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1haW4gY29udHJvbGxlciBmb3IgdGhlIFByb3BGaW5kZXIgUHJvIGV4dGVuc2lvbi5cbiAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL3V0aWxzL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gJy4uL21vZGVscy9wcm9wZXJ0eS5qcyc7XG5pbXBvcnQgSW52ZXN0bWVudEFzc3VtcHRpb25zIGZyb20gJy4uL21vZGVscy9pbnZlc3RtZW50LWFzc3VtcHRpb25zLmpzJztcbmltcG9ydCBQcm9wZXJ0eURhdGFFeHRyYWN0b3IgZnJvbSAnLi4vc2VydmljZXMvcHJvcGVydHktZGF0YS1leHRyYWN0b3IuanMnO1xuaW1wb3J0IEludmVzdG1lbnRDYWxjdWxhdG9yIGZyb20gJy4uL3NlcnZpY2VzL2ludmVzdG1lbnQtY2FsY3VsYXRvci5qcyc7XG5pbXBvcnQgU3RvcmFnZVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvc3RvcmFnZS1zZXJ2aWNlLmpzJztcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSAnLi4vdWkvdWktbWFuYWdlci5qcyc7XG5cbi8qKlxuICogTWFpbiBjb250cm9sbGVyIGZvciB0aGUgUHJvcEZpbmRlciBQcm8gZXh0ZW5zaW9uLlxuICovXG5jbGFzcyBBcHBDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBBcHBDb250cm9sbGVyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBldmVudCBlbWl0dGVyXG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgLy8gSW5pdGlhbGl6ZSBzZXJ2aWNlc1xuICAgIHRoaXMucHJvcGVydHlFeHRyYWN0b3IgPSBuZXcgUHJvcGVydHlEYXRhRXh0cmFjdG9yKCk7XG4gICAgdGhpcy5jYWxjdWxhdG9yID0gbmV3IEludmVzdG1lbnRDYWxjdWxhdG9yKCk7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2VTZXJ2aWNlKCk7XG4gICAgXG4gICAgLy8gSW5pdGlhbGl6ZSBVSSBtYW5hZ2VyXG4gICAgdGhpcy51aSA9IG5ldyBVSU1hbmFnZXIodGhpcy5jYWxjdWxhdG9yLCB0aGlzLmV2ZW50cyk7XG4gICAgXG4gICAgLy8gQ3VycmVudCBzdGF0ZVxuICAgIHRoaXMuY3VycmVudFByb3BlcnR5ID0gbnVsbDtcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gbnVsbDtcbiAgICBcbiAgICAvLyBCaW5kIG1ldGhvZHMgdG8gbWFpbnRhaW4gY29udGV4dFxuICAgIHRoaXMuaGFuZGxlUHJvcGVydHlJbnB1dCA9IHRoaXMuaGFuZGxlUHJvcGVydHlJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2V0dGluZ3NVcGRhdGUgPSB0aGlzLmhhbmRsZVNldHRpbmdzVXBkYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYXBwLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBMb2FkIGludmVzdG1lbnQgYXNzdW1wdGlvbnMgZnJvbSBzdG9yYWdlXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5sb2FkQXNzdW1wdGlvbnMoKTtcbiAgICBcbiAgICAvLyBFeHRyYWN0IHByb3BlcnR5IGRhdGEgZnJvbSB0aGUgcGFnZVxuICAgIHRoaXMuY3VycmVudFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0eUV4dHJhY3Rvci5leHRyYWN0UHJvcGVydHkoKTtcbiAgICBcbiAgICAvLyBTZXQgdXAgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgXG4gICAgLy8gSW5pdGlhbGl6ZSBVSVxuICAgIHRoaXMudWkuaW5pdGlhbGl6ZSgpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBVSSB3aXRoIGluaXRpYWwgcHJvcGVydHkgZGF0YVxuICAgIHRoaXMuZXZlbnRzLmVtaXQoJ3Byb3BlcnR5VXBkYXRlZCcsIHRoaXMuY3VycmVudFByb3BlcnR5KTtcbiAgICBcbiAgICAvLyBDYWxjdWxhdGUgYW5kIGRpc3BsYXkgaW5pdGlhbCBhbmFseXNpc1xuICAgIHRoaXMudXBkYXRlQW5hbHlzaXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgZXZlbnQgbGlzdGVuZXJzLlxuICAgKi9cbiAgc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgICAvLyBMaXN0ZW4gZm9yIHByb3BlcnR5IGlucHV0IHVwZGF0ZXMgZnJvbSBVSVxuICAgIHRoaXMuZXZlbnRzLm9uKCdwcm9wZXJ0eUlucHV0VXBkYXRlZCcsIHRoaXMuaGFuZGxlUHJvcGVydHlJbnB1dCk7XG4gICAgXG4gICAgLy8gTGlzdGVuIGZvciBzZXR0aW5ncyB1cGRhdGVzIGZyb20gcG9wdXBcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzZXR0aW5nc1VwZGF0ZWQnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2V0dGluZ3NVcGRhdGUobWVzc2FnZS5vcHRpb25zLCBzZW5kUmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gS2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLy8gTGlzdGVuIGZvciBVUkwgY2hhbmdlc1xuICAgIHRoaXMub2JzZXJ2ZVVybENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgcHJvcGVydHkgaW5wdXQgdXBkYXRlcyBmcm9tIFVJLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydHlEYXRhIC0gVXBkYXRlZCBwcm9wZXJ0eSBkYXRhLlxuICAgKi9cbiAgaGFuZGxlUHJvcGVydHlJbnB1dChwcm9wZXJ0eURhdGEpIHtcbiAgICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgcHJvcGVydHlcbiAgICB0aGlzLmN1cnJlbnRQcm9wZXJ0eS51cGRhdGUocHJvcGVydHlEYXRhKTtcbiAgICBcbiAgICAvLyBSZWNhbGN1bGF0ZSBhbmQgZGlzcGxheSBhbmFseXNpc1xuICAgIHRoaXMudXBkYXRlQW5hbHlzaXMoKTtcbiAgICBcbiAgICAvLyBTYXZlIHVwZGF0ZWQgcHJvcGVydHkgdG8gc3RvcmFnZVxuICAgIHRoaXMuc3RvcmFnZS5zYXZlUHJvcGVydHkodGhpcy5jdXJyZW50UHJvcGVydHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBzZXR0aW5ncyB1cGRhdGVzIGZyb20gcG9wdXAuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVXBkYXRlZCBpbnZlc3RtZW50IGFzc3VtcHRpb25zLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9uPX0gc2VuZFJlc3BvbnNlIC0gRnVuY3Rpb24gdG8gc2VuZCByZXNwb25zZSB0byBwb3B1cC5cbiAgICovXG4gIGhhbmRsZVNldHRpbmdzVXBkYXRlKG9wdGlvbnMsIHNlbmRSZXNwb25zZSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBVcGRhdGUgYXNzdW1wdGlvbnNcbiAgICAgIHRoaXMuYXNzdW1wdGlvbnMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgXG4gICAgICAvLyBSZWNhbGN1bGF0ZSBhbmQgZGlzcGxheSBhbmFseXNpc1xuICAgICAgdGhpcy51cGRhdGVBbmFseXNpcygpO1xuICAgICAgXG4gICAgICAvLyBSZXNwb25kIHRoYXQgdXBkYXRlIHdhcyBzdWNjZXNzZnVsXG4gICAgICBpZiAoc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHNldHRpbmdzOicsIGVycm9yKTtcbiAgICAgIGlmIChzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGludmVzdG1lbnQgYW5hbHlzaXMuXG4gICAqL1xuICB1cGRhdGVBbmFseXNpcygpIHtcbiAgICAvLyBDYWxjdWxhdGUgbWV0cmljc1xuICAgIGNvbnN0IGFuYWx5c2lzUmVzdWx0cyA9IHRoaXMuY2FsY3VsYXRvci5hbmFseXplKHRoaXMuY3VycmVudFByb3BlcnR5LCB0aGlzLmFzc3VtcHRpb25zKTtcbiAgICBcbiAgICAvLyBFbWl0IGV2ZW50IHdpdGggYW5hbHlzaXMgcmVzdWx0c1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoJ2FuYWx5c2lzVXBkYXRlZCcsIGFuYWx5c2lzUmVzdWx0cyk7XG4gIH1cblxuICAvKipcbiAgICogT2JzZXJ2ZSBVUkwgY2hhbmdlcyBmb3Igc2luZ2xlLXBhZ2UgYXBwIG5hdmlnYXRpb24uXG4gICAqL1xuICBvYnNlcnZlVXJsQ2hhbmdlcygpIHtcbiAgICBsZXQgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIFxuICAgIC8vIENoZWNrIGZvciBVUkwgY2hhbmdlcyBwZXJpb2RpY2FsbHlcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFVybCAhPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgICAgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UncmUgb24gYSBwcm9wZXJ0eSBkZXRhaWxzIHBhZ2VcbiAgICAgICAgaWYgKHRoaXMuaXNQcm9wZXJ0eVBhZ2UoY3VycmVudFVybCkpIHtcbiAgICAgICAgICAvLyBXYWl0IGZvciBwYWdlIHRvIGxvYWRcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgbmV3IHByb3BlcnR5IGRhdGFcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0eUV4dHJhY3Rvci5leHRyYWN0UHJvcGVydHkoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIFVJIHdpdGggbmV3IHByb3BlcnR5IGRhdGFcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoJ3Byb3BlcnR5VXBkYXRlZCcsIHRoaXMuY3VycmVudFByb3BlcnR5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmVjYWxjdWxhdGUgYW5kIGRpc3BsYXkgYW5hbHlzaXNcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5hbHlzaXMoKTtcbiAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gICAgXG4gICAgLy8gQWxzbyBsaXN0ZW4gZm9yIEhpc3RvcnkgQVBJIGNoYW5nZXNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiB3ZSdyZSBvbiBhIHByb3BlcnR5IGRldGFpbHMgcGFnZVxuICAgICAgaWYgKHRoaXMuaXNQcm9wZXJ0eVBhZ2Uod2luZG93LmxvY2F0aW9uLmhyZWYpKSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIHBhZ2UgdG8gbG9hZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBFeHRyYWN0IG5ldyBwcm9wZXJ0eSBkYXRhXG4gICAgICAgICAgdGhpcy5jdXJyZW50UHJvcGVydHkgPSB0aGlzLnByb3BlcnR5RXh0cmFjdG9yLmV4dHJhY3RQcm9wZXJ0eSgpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFVwZGF0ZSBVSSB3aXRoIG5ldyBwcm9wZXJ0eSBkYXRhXG4gICAgICAgICAgdGhpcy5ldmVudHMuZW1pdCgncHJvcGVydHlVcGRhdGVkJywgdGhpcy5jdXJyZW50UHJvcGVydHkpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGFuZCBkaXNwbGF5IGFuYWx5c2lzXG4gICAgICAgICAgdGhpcy51cGRhdGVBbmFseXNpcygpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCBVUkwgaXMgYSBwcm9wZXJ0eSBkZXRhaWxzIHBhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgdG8gY2hlY2suXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgaXQncyBhIHByb3BlcnR5IGRldGFpbHMgcGFnZS5cbiAgICovXG4gIGlzUHJvcGVydHlQYWdlKHVybCkge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXMoJ3ppbGxvdy5jb20vaG9tZWRldGFpbHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250cm9sbGVyOyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBNb2RlbCByZXByZXNlbnRpbmcgaW52ZXN0bWVudCBhc3N1bXB0aW9uIHNldHRpbmdzLlxuICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGludmVzdG1lbnQgYXNzdW1wdGlvbiBzZXR0aW5ncy5cbiAqL1xuY2xhc3MgSW52ZXN0bWVudEFzc3VtcHRpb25zIHtcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWVzIGZvciBpbnZlc3RtZW50IGFzc3VtcHRpb25zLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IERlZmF1bHQgc2V0dGluZ3MuXG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBNb3J0Z2FnZSBhc3N1bXB0aW9uc1xuICAgICAgaW50ZXJlc3RSYXRlOiA3LjUsXG4gICAgICBsb2FuVGVybTogMzAsXG4gICAgICBkb3duUGF5bWVudDogMjAsXG4gICAgICBjbG9zaW5nQ29zdHM6IDMsXG4gICAgICBcbiAgICAgIC8vIE9wZXJhdGluZyBleHBlbnNlIGFzc3VtcHRpb25zXG4gICAgICBwcm9wZXJ0eVRheFJhdGU6IDEuMixcbiAgICAgIGluc3VyYW5jZVJhdGU6IDAuNSxcbiAgICAgIG1haW50ZW5hbmNlUmF0ZTogMSxcbiAgICAgIHByb3BlcnR5TWFuYWdlbWVudFJhdGU6IDEwLFxuICAgICAgdmFjYW5jeVJhdGU6IDVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBJbnZlc3RtZW50QXNzdW1wdGlvbnMgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucyAtIEludmVzdG1lbnQgYXNzdW1wdGlvbiBzZXR0aW5ncy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gSW52ZXN0bWVudEFzc3VtcHRpb25zLmRlZmF1bHRzO1xuICAgIFxuICAgIC8vIE1vcnRnYWdlIGFzc3VtcHRpb25zXG4gICAgdGhpcy5pbnRlcmVzdFJhdGUgPSBvcHRpb25zLmludGVyZXN0UmF0ZSA/PyBkZWZhdWx0cy5pbnRlcmVzdFJhdGU7XG4gICAgdGhpcy5sb2FuVGVybSA9IG9wdGlvbnMubG9hblRlcm0gPz8gZGVmYXVsdHMubG9hblRlcm07XG4gICAgdGhpcy5kb3duUGF5bWVudCA9IG9wdGlvbnMuZG93blBheW1lbnQgPz8gZGVmYXVsdHMuZG93blBheW1lbnQ7XG4gICAgdGhpcy5jbG9zaW5nQ29zdHMgPSBvcHRpb25zLmNsb3NpbmdDb3N0cyA/PyBkZWZhdWx0cy5jbG9zaW5nQ29zdHM7XG4gICAgXG4gICAgLy8gT3BlcmF0aW5nIGV4cGVuc2UgYXNzdW1wdGlvbnNcbiAgICB0aGlzLnByb3BlcnR5VGF4UmF0ZSA9IG9wdGlvbnMucHJvcGVydHlUYXhSYXRlID8/IGRlZmF1bHRzLnByb3BlcnR5VGF4UmF0ZTtcbiAgICB0aGlzLmluc3VyYW5jZVJhdGUgPSBvcHRpb25zLmluc3VyYW5jZVJhdGUgPz8gZGVmYXVsdHMuaW5zdXJhbmNlUmF0ZTtcbiAgICB0aGlzLm1haW50ZW5hbmNlUmF0ZSA9IG9wdGlvbnMubWFpbnRlbmFuY2VSYXRlID8/IGRlZmF1bHRzLm1haW50ZW5hbmNlUmF0ZTtcbiAgICB0aGlzLnByb3BlcnR5TWFuYWdlbWVudFJhdGUgPSBcbiAgICAgICAgb3B0aW9ucy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlID8/IGRlZmF1bHRzLnByb3BlcnR5TWFuYWdlbWVudFJhdGU7XG4gICAgdGhpcy52YWNhbmN5UmF0ZSA9IG9wdGlvbnMudmFjYW5jeVJhdGUgPz8gZGVmYXVsdHMudmFjYW5jeVJhdGU7XG4gICAgXG4gICAgLy8gVmFsaWRhdGUgYWxsIHZhbHVlc1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBhbGwgYXNzdW1wdGlvbiB2YWx1ZXMgYW5kIHNldCB0byBkZWZhdWx0cyBpZiBpbnZhbGlkLlxuICAgKi9cbiAgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBJbnZlc3RtZW50QXNzdW1wdGlvbnMuZGVmYXVsdHM7XG4gICAgXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIG51bWVyaWMgdmFsdWVzXG4gICAgY29uc3QgdmFsaWRhdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSwgbWluID0gMCwgbWF4ID0gTnVtYmVyLk1BWF9WQUxVRSkgPT4ge1xuICAgICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gIWlzTmFOKG51bSkgJiYgbnVtID49IG1pbiAmJiBudW0gPD0gbWF4ID8gbnVtIDogZGVmYXVsdFZhbHVlO1xuICAgIH07XG4gICAgXG4gICAgLy8gVmFsaWRhdGUgYWxsIHByb3BlcnRpZXNcbiAgICB0aGlzLmludGVyZXN0UmF0ZSA9IHZhbGlkYXRlTnVtYmVyKHRoaXMuaW50ZXJlc3RSYXRlLCBkZWZhdWx0cy5pbnRlcmVzdFJhdGUsIDAsIDMwKTtcbiAgICB0aGlzLmxvYW5UZXJtID0gdmFsaWRhdGVOdW1iZXIodGhpcy5sb2FuVGVybSwgZGVmYXVsdHMubG9hblRlcm0sIDEsIDUwKTtcbiAgICB0aGlzLmRvd25QYXltZW50ID0gdmFsaWRhdGVOdW1iZXIodGhpcy5kb3duUGF5bWVudCwgZGVmYXVsdHMuZG93blBheW1lbnQsIDAsIDEwMCk7XG4gICAgdGhpcy5jbG9zaW5nQ29zdHMgPSB2YWxpZGF0ZU51bWJlcih0aGlzLmNsb3NpbmdDb3N0cywgZGVmYXVsdHMuY2xvc2luZ0Nvc3RzLCAwLCAyMCk7XG4gICAgXG4gICAgdGhpcy5wcm9wZXJ0eVRheFJhdGUgPSBcbiAgICAgICAgdmFsaWRhdGVOdW1iZXIodGhpcy5wcm9wZXJ0eVRheFJhdGUsIGRlZmF1bHRzLnByb3BlcnR5VGF4UmF0ZSwgMCwgMTApO1xuICAgIHRoaXMuaW5zdXJhbmNlUmF0ZSA9IFxuICAgICAgICB2YWxpZGF0ZU51bWJlcih0aGlzLmluc3VyYW5jZVJhdGUsIGRlZmF1bHRzLmluc3VyYW5jZVJhdGUsIDAsIDUpO1xuICAgIHRoaXMubWFpbnRlbmFuY2VSYXRlID0gXG4gICAgICAgIHZhbGlkYXRlTnVtYmVyKHRoaXMubWFpbnRlbmFuY2VSYXRlLCBkZWZhdWx0cy5tYWludGVuYW5jZVJhdGUsIDAsIDE1KTtcbiAgICB0aGlzLnByb3BlcnR5TWFuYWdlbWVudFJhdGUgPSBcbiAgICAgICAgdmFsaWRhdGVOdW1iZXIodGhpcy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlLCBkZWZhdWx0cy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlLCAwLCAyMCk7XG4gICAgdGhpcy52YWNhbmN5UmF0ZSA9IFxuICAgICAgICB2YWxpZGF0ZU51bWJlcih0aGlzLnZhY2FuY3lSYXRlLCBkZWZhdWx0cy52YWNhbmN5UmF0ZSwgMCwgNTApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhc3N1bXB0aW9ucyB3aXRoIG5ldyB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gTmV3IGFzc3VtcHRpb24gdmFsdWVzLlxuICAgKi9cbiAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5pbnRlcmVzdFJhdGUgIT09IHVuZGVmaW5lZCkgdGhpcy5pbnRlcmVzdFJhdGUgPSBvcHRpb25zLmludGVyZXN0UmF0ZTtcbiAgICBpZiAob3B0aW9ucy5sb2FuVGVybSAhPT0gdW5kZWZpbmVkKSB0aGlzLmxvYW5UZXJtID0gb3B0aW9ucy5sb2FuVGVybTtcbiAgICBpZiAob3B0aW9ucy5kb3duUGF5bWVudCAhPT0gdW5kZWZpbmVkKSB0aGlzLmRvd25QYXltZW50ID0gb3B0aW9ucy5kb3duUGF5bWVudDtcbiAgICBpZiAob3B0aW9ucy5jbG9zaW5nQ29zdHMgIT09IHVuZGVmaW5lZCkgdGhpcy5jbG9zaW5nQ29zdHMgPSBvcHRpb25zLmNsb3NpbmdDb3N0cztcbiAgICBcbiAgICBpZiAob3B0aW9ucy5wcm9wZXJ0eVRheFJhdGUgIT09IHVuZGVmaW5lZCkgdGhpcy5wcm9wZXJ0eVRheFJhdGUgPSBvcHRpb25zLnByb3BlcnR5VGF4UmF0ZTtcbiAgICBpZiAob3B0aW9ucy5pbnN1cmFuY2VSYXRlICE9PSB1bmRlZmluZWQpIHRoaXMuaW5zdXJhbmNlUmF0ZSA9IG9wdGlvbnMuaW5zdXJhbmNlUmF0ZTtcbiAgICBpZiAob3B0aW9ucy5tYWludGVuYW5jZVJhdGUgIT09IHVuZGVmaW5lZCkgdGhpcy5tYWludGVuYW5jZVJhdGUgPSBvcHRpb25zLm1haW50ZW5hbmNlUmF0ZTtcbiAgICBpZiAob3B0aW9ucy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZSA9IG9wdGlvbnMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudmFjYW5jeVJhdGUgIT09IHVuZGVmaW5lZCkgdGhpcy52YWNhbmN5UmF0ZSA9IG9wdGlvbnMudmFjYW5jeVJhdGU7XG4gICAgXG4gICAgLy8gVmFsaWRhdGUgYWZ0ZXIgdXBkYXRpbmdcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0byBKU09OIG9iamVjdC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBKU09OIHJlcHJlc2VudGF0aW9uLlxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlcmVzdFJhdGU6IHRoaXMuaW50ZXJlc3RSYXRlLFxuICAgICAgbG9hblRlcm06IHRoaXMubG9hblRlcm0sXG4gICAgICBkb3duUGF5bWVudDogdGhpcy5kb3duUGF5bWVudCxcbiAgICAgIGNsb3NpbmdDb3N0czogdGhpcy5jbG9zaW5nQ29zdHMsXG4gICAgICBcbiAgICAgIHByb3BlcnR5VGF4UmF0ZTogdGhpcy5wcm9wZXJ0eVRheFJhdGUsXG4gICAgICBpbnN1cmFuY2VSYXRlOiB0aGlzLmluc3VyYW5jZVJhdGUsXG4gICAgICBtYWludGVuYW5jZVJhdGU6IHRoaXMubWFpbnRlbmFuY2VSYXRlLFxuICAgICAgcHJvcGVydHlNYW5hZ2VtZW50UmF0ZTogdGhpcy5wcm9wZXJ0eU1hbmFnZW1lbnRSYXRlLFxuICAgICAgdmFjYW5jeVJhdGU6IHRoaXMudmFjYW5jeVJhdGVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBJbnZlc3RtZW50QXNzdW1wdGlvbnMgZnJvbSBKU09OLlxuICAgKiBAcGFyYW0ge09iamVjdH0ganNvbiAtIEpTT04gZGF0YS5cbiAgICogQHJldHVybiB7SW52ZXN0bWVudEFzc3VtcHRpb25zfSBOZXcgSW52ZXN0bWVudEFzc3VtcHRpb25zIGluc3RhbmNlLlxuICAgKi9cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICByZXR1cm4gbmV3IEludmVzdG1lbnRBc3N1bXB0aW9ucyhqc29uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZlc3RtZW50QXNzdW1wdGlvbnM7IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFByb3BlcnR5IG1vZGVsIHJlcHJlc2VudGluZyBhIHJlYWwgZXN0YXRlIHByb3BlcnR5IGxpc3RpbmcuXG4gKi9cblxuLyoqXG4gKiBQcm9wZXJ0eSBtb2RlbCByZXByZXNlbnRpbmcgYSByZWFsIGVzdGF0ZSBwcm9wZXJ0eSBsaXN0aW5nLlxuICovXG5jbGFzcyBQcm9wZXJ0eSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgUHJvcGVydHkgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gZGF0YSAtIFByb3BlcnR5IGRhdGEuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5wcmljZSAtIExpc3RpbmcgcHJpY2UuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5yZW50RXN0aW1hdGUgLSBNb250aGx5IHJlbnQgZXN0aW1hdGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5yZXBhaXJDb3N0IC0gRXN0aW1hdGVkIHJlcGFpciBjb3N0cy5cbiAgICogQHBhcmFtIHtudW1iZXI9fSBkYXRhLm1vbnRobHlJbmNvbWUgLSBNb250aGx5IHJlbnRhbCBpbmNvbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gZGF0YS5hZGRyZXNzIC0gUHJvcGVydHkgYWRkcmVzcy5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBkYXRhLnVybCAtIFByb3BlcnR5IGxpc3RpbmcgVVJMLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5wcmljZSA9IGRhdGEucHJpY2UgfHwgMDtcbiAgICB0aGlzLnJlbnRFc3RpbWF0ZSA9IGRhdGEucmVudEVzdGltYXRlIHx8IDA7XG4gICAgdGhpcy5yZXBhaXJDb3N0ID0gZGF0YS5yZXBhaXJDb3N0IHx8IDA7XG4gICAgdGhpcy5tb250aGx5SW5jb21lID0gZGF0YS5tb250aGx5SW5jb21lIHx8IHRoaXMucmVudEVzdGltYXRlIHx8IDA7XG4gICAgdGhpcy5hZGRyZXNzID0gZGF0YS5hZGRyZXNzIHx8ICcnO1xuICAgIHRoaXMudXJsID0gZGF0YS51cmwgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhZGp1c3RlZCBwdXJjaGFzZSBwcmljZSBpbmNsdWRpbmcgcmVwYWlyIGNvc3RzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEFkanVzdGVkIHByaWNlLlxuICAgKi9cbiAgZ2V0QWRqdXN0ZWRQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmljZSArIHRoaXMucmVwYWlyQ29zdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFubnVhbCByZW50YWwgaW5jb21lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEFubnVhbCBpbmNvbWUuXG4gICAqL1xuICBnZXRBbm51YWxJbmNvbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9udGhseUluY29tZSAqIDEyO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgcHJvcGVydHkgZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBVcGRhdGVkIHByb3BlcnR5IGRhdGEuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5wcmljZSAtIExpc3RpbmcgcHJpY2UuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5yZXBhaXJDb3N0IC0gRXN0aW1hdGVkIHJlcGFpciBjb3N0cy5cbiAgICogQHBhcmFtIHtudW1iZXI9fSBkYXRhLm1vbnRobHlJbmNvbWUgLSBNb250aGx5IHJlbnRhbCBpbmNvbWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gZGF0YS5yZW50RXN0aW1hdGUgLSBNb250aGx5IHJlbnQgZXN0aW1hdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gZGF0YS5hZGRyZXNzIC0gUHJvcGVydHkgYWRkcmVzcy5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBkYXRhLnVybCAtIFByb3BlcnR5IGxpc3RpbmcgVVJMLlxuICAgKi9cbiAgdXBkYXRlKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5wcmljZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnByaWNlID0gZGF0YS5wcmljZTtcbiAgICBpZiAoZGF0YS5yZXBhaXJDb3N0ICE9PSB1bmRlZmluZWQpIHRoaXMucmVwYWlyQ29zdCA9IGRhdGEucmVwYWlyQ29zdDtcbiAgICBpZiAoZGF0YS5tb250aGx5SW5jb21lICE9PSB1bmRlZmluZWQpIHRoaXMubW9udGhseUluY29tZSA9IGRhdGEubW9udGhseUluY29tZTtcbiAgICBpZiAoZGF0YS5yZW50RXN0aW1hdGUgIT09IHVuZGVmaW5lZCAmJiAhZGF0YS5tb250aGx5SW5jb21lKSB7XG4gICAgICB0aGlzLnJlbnRFc3RpbWF0ZSA9IGRhdGEucmVudEVzdGltYXRlO1xuICAgICAgLy8gT25seSB1cGRhdGUgbW9udGhseSBpbmNvbWUgd2l0aCByZW50IGVzdGltYXRlIGlmIG5vdCBleHBsaWNpdGx5IHNldFxuICAgICAgaWYgKHRoaXMubW9udGhseUluY29tZSA9PT0gMCkge1xuICAgICAgICB0aGlzLm1vbnRobHlJbmNvbWUgPSBkYXRhLnJlbnRFc3RpbWF0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEuYWRkcmVzcyAhPT0gdW5kZWZpbmVkKSB0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XG4gICAgaWYgKGRhdGEudXJsICE9PSB1bmRlZmluZWQpIHRoaXMudXJsID0gZGF0YS51cmw7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHByb3BlcnR5IHRvIEpTT04uXG4gICAqIEByZXR1cm4ge09iamVjdH0gSlNPTiByZXByZXNlbnRhdGlvbi5cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJpY2U6IHRoaXMucHJpY2UsXG4gICAgICByZW50RXN0aW1hdGU6IHRoaXMucmVudEVzdGltYXRlLFxuICAgICAgcmVwYWlyQ29zdDogdGhpcy5yZXBhaXJDb3N0LFxuICAgICAgbW9udGhseUluY29tZTogdGhpcy5tb250aGx5SW5jb21lLFxuICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUHJvcGVydHkgZnJvbSBKU09OIGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIC0gSlNPTiBkYXRhLlxuICAgKiBAcmV0dXJuIHtQcm9wZXJ0eX0gTmV3IFByb3BlcnR5IGluc3RhbmNlLlxuICAgKi9cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5KGpzb24pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5OyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTZXJ2aWNlIGZvciBjYWxjdWxhdGluZyByZWFsIGVzdGF0ZSBpbnZlc3RtZW50IG1ldHJpY3MuXG4gKi9cblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBjYWxjdWxhdGluZyByZWFsIGVzdGF0ZSBpbnZlc3RtZW50IG1ldHJpY3MuXG4gKi9cbmNsYXNzIEludmVzdG1lbnRDYWxjdWxhdG9yIHtcbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbGwgaW52ZXN0bWVudCBtZXRyaWNzIGZvciBhIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge1Byb3BlcnR5fSBwcm9wZXJ0eSAtIFRoZSBwcm9wZXJ0eSB0byBhbmFseXplLlxuICAgKiBAcGFyYW0ge0ludmVzdG1lbnRBc3N1bXB0aW9uc30gYXNzdW1wdGlvbnMgLSBJbnZlc3RtZW50IGFzc3VtcHRpb25zLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IENhbGN1bGF0ZWQgaW52ZXN0bWVudCBtZXRyaWNzLlxuICAgKi9cbiAgY2FsY3VsYXRlTWV0cmljcyhwcm9wZXJ0eSwgYXNzdW1wdGlvbnMpIHtcbiAgICAvLyBQcm9wZXJ0eSBkYXRhXG4gICAgY29uc3QgcHJpY2UgPSBwcm9wZXJ0eS5wcmljZTtcbiAgICBjb25zdCByZXBhaXJDb3N0ID0gcHJvcGVydHkucmVwYWlyQ29zdDtcbiAgICBjb25zdCBtb250aGx5SW5jb21lID0gcHJvcGVydHkubW9udGhseUluY29tZTtcbiAgICBjb25zdCBhZGp1c3RlZFByaWNlID0gcHJvcGVydHkuZ2V0QWRqdXN0ZWRQcmljZSgpO1xuICAgIGNvbnN0IGFubnVhbEluY29tZSA9IHByb3BlcnR5LmdldEFubnVhbEluY29tZSgpO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSBhbm51YWwgZXhwZW5zZXNcbiAgICBjb25zdCBleHBlbnNlcyA9IHRoaXMuY2FsY3VsYXRlRXhwZW5zZXMocHJvcGVydHksIGFzc3VtcHRpb25zKTtcbiAgICBjb25zdCB0b3RhbEFubnVhbEV4cGVuc2VzID0gZXhwZW5zZXMudG90YWw7XG4gICAgXG4gICAgLy8gQ2FsY3VsYXRlIE5PSSBhbmQgY2FwIHJhdGVcbiAgICBjb25zdCBuZXRPcGVyYXRpbmdJbmNvbWUgPSBhbm51YWxJbmNvbWUgLSB0b3RhbEFubnVhbEV4cGVuc2VzO1xuICAgIGNvbnN0IGNhcFJhdGUgPSBwcmljZSA+IDAgPyAobmV0T3BlcmF0aW5nSW5jb21lIC8gcHJpY2UpICogMTAwIDogMDtcbiAgICBcbiAgICAvLyBDYWxjdWxhdGUgY2FzaCBuZWVkZWRcbiAgICBjb25zdCBkb3duUGF5bWVudCA9IGFkanVzdGVkUHJpY2UgKiAoYXNzdW1wdGlvbnMuZG93blBheW1lbnQgLyAxMDApO1xuICAgIGNvbnN0IGNsb3NpbmdDb3N0cyA9IHByaWNlICogKGFzc3VtcHRpb25zLmNsb3NpbmdDb3N0cyAvIDEwMCk7XG4gICAgY29uc3QgdG90YWxDYXNoTmVlZGVkID0gZG93blBheW1lbnQgKyBjbG9zaW5nQ29zdHMgKyByZXBhaXJDb3N0O1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSBtb3J0Z2FnZSBwYXltZW50XG4gICAgY29uc3QgbG9hbkFtb3VudCA9IHByaWNlIC0gZG93blBheW1lbnQ7XG4gICAgY29uc3QgbW9ydGdhZ2VQYXltZW50ID0gdGhpcy5jYWxjdWxhdGVNb3J0Z2FnZVBheW1lbnQoXG4gICAgICAgIGxvYW5BbW91bnQsIFxuICAgICAgICBhc3N1bXB0aW9ucy5pbnRlcmVzdFJhdGUsIFxuICAgICAgICBhc3N1bXB0aW9ucy5sb2FuVGVybVxuICAgICk7XG4gICAgXG4gICAgLy8gQ2FsY3VsYXRlIGNhc2ggZmxvd1xuICAgIGNvbnN0IGFubnVhbE1vcnRnYWdlUGF5bWVudCA9IG1vcnRnYWdlUGF5bWVudCAqIDEyO1xuICAgIGNvbnN0IGFubnVhbENhc2hGbG93ID0gbmV0T3BlcmF0aW5nSW5jb21lIC0gYW5udWFsTW9ydGdhZ2VQYXltZW50O1xuICAgIGNvbnN0IG1vbnRobHlDYXNoRmxvdyA9IGFubnVhbENhc2hGbG93IC8gMTI7XG4gICAgXG4gICAgLy8gQ2FsY3VsYXRlIHJldHVybnNcbiAgICBjb25zdCBjYXNoT25DYXNoID0gdG90YWxDYXNoTmVlZGVkID4gMCA/IChhbm51YWxDYXNoRmxvdyAvIHRvdGFsQ2FzaE5lZWRlZCkgKiAxMDAgOiAwO1xuICAgIGNvbnN0IGdyb3NzUmVudE11bHRpcGxpZXIgPSBhbm51YWxJbmNvbWUgPiAwID8gcHJpY2UgLyBhbm51YWxJbmNvbWUgOiAwO1xuICAgIFxuICAgIC8vIFJldHVybiBhbGwgbWV0cmljc1xuICAgIHJldHVybiB7XG4gICAgICAvLyBGaW5hbmNpYWwgbWV0cmljc1xuICAgICAgbmV0T3BlcmF0aW5nSW5jb21lLFxuICAgICAgY2FwUmF0ZSxcbiAgICAgIGNhc2hPbkNhc2gsXG4gICAgICBncm9zc1JlbnRNdWx0aXBsaWVyLFxuICAgICAgXG4gICAgICAvLyBDYXNoIGZsb3cgbWV0cmljc1xuICAgICAgYW5udWFsQ2FzaEZsb3csXG4gICAgICBtb250aGx5Q2FzaEZsb3csXG4gICAgICBcbiAgICAgIC8vIEV4cGVuc2UgYnJlYWtkb3duXG4gICAgICBleHBlbnNlcyxcbiAgICAgIHRvdGFsQW5udWFsRXhwZW5zZXMsXG4gICAgICBcbiAgICAgIC8vIEludmVzdG1lbnQgYnJlYWtkb3duXG4gICAgICBkb3duUGF5bWVudCxcbiAgICAgIGNsb3NpbmdDb3N0cyxcbiAgICAgIHRvdGFsQ2FzaE5lZWRlZCxcbiAgICAgIFxuICAgICAgLy8gTG9hbiBtZXRyaWNzXG4gICAgICBsb2FuQW1vdW50LFxuICAgICAgbW9ydGdhZ2VQYXltZW50LFxuICAgICAgYW5udWFsTW9ydGdhZ2VQYXltZW50XG4gICAgfTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBwcm9wZXJ0eSBleHBlbnNlcy5cbiAgICogQHBhcmFtIHtQcm9wZXJ0eX0gcHJvcGVydHkgLSBUaGUgcHJvcGVydHkuXG4gICAqIEBwYXJhbSB7SW52ZXN0bWVudEFzc3VtcHRpb25zfSBhc3N1bXB0aW9ucyAtIEludmVzdG1lbnQgYXNzdW1wdGlvbnMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gRXhwZW5zZSBicmVha2Rvd24uXG4gICAqL1xuICBjYWxjdWxhdGVFeHBlbnNlcyhwcm9wZXJ0eSwgYXNzdW1wdGlvbnMpIHtcbiAgICBjb25zdCBwcmljZSA9IHByb3BlcnR5LnByaWNlO1xuICAgIGNvbnN0IGFubnVhbEluY29tZSA9IHByb3BlcnR5LmdldEFubnVhbEluY29tZSgpO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSBpbmRpdmlkdWFsIGV4cGVuc2VzXG4gICAgY29uc3QgcHJvcGVydHlUYXhlcyA9IHByaWNlICogKGFzc3VtcHRpb25zLnByb3BlcnR5VGF4UmF0ZSAvIDEwMCk7XG4gICAgY29uc3QgaW5zdXJhbmNlID0gcHJpY2UgKiAoYXNzdW1wdGlvbnMuaW5zdXJhbmNlUmF0ZSAvIDEwMCk7XG4gICAgY29uc3QgbWFpbnRlbmFuY2UgPSBhbm51YWxJbmNvbWUgKiAoYXNzdW1wdGlvbnMubWFpbnRlbmFuY2VSYXRlIC8gMTAwKTtcbiAgICBjb25zdCBwcm9wZXJ0eU1hbmFnZW1lbnQgPSBhbm51YWxJbmNvbWUgKiAoYXNzdW1wdGlvbnMucHJvcGVydHlNYW5hZ2VtZW50UmF0ZSAvIDEwMCk7XG4gICAgY29uc3QgdmFjYW5jeSA9IGFubnVhbEluY29tZSAqIChhc3N1bXB0aW9ucy52YWNhbmN5UmF0ZSAvIDEwMCk7XG4gICAgXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGV4cGVuc2VzXG4gICAgY29uc3QgdG90YWwgPSBwcm9wZXJ0eVRheGVzICsgaW5zdXJhbmNlICsgbWFpbnRlbmFuY2UgKyBwcm9wZXJ0eU1hbmFnZW1lbnQgKyB2YWNhbmN5O1xuICAgIFxuICAgIC8vIFJldHVybiBleHBlbnNlIGJyZWFrZG93blxuICAgIHJldHVybiB7XG4gICAgICBwcm9wZXJ0eVRheGVzLFxuICAgICAgaW5zdXJhbmNlLFxuICAgICAgbWFpbnRlbmFuY2UsXG4gICAgICBwcm9wZXJ0eU1hbmFnZW1lbnQsXG4gICAgICB2YWNhbmN5LFxuICAgICAgdG90YWxcbiAgICB9O1xuICB9XG4gIFxuICAvKipcbiAgICogQ2FsY3VsYXRlIG1vbnRobHkgbW9ydGdhZ2UgcGF5bWVudC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvYW5BbW91bnQgLSBQcmluY2lwYWwgbG9hbiBhbW91bnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcmVzdFJhdGUgLSBBbm51YWwgaW50ZXJlc3QgcmF0ZSAocGVyY2VudGFnZSkuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2FuVGVybSAtIExvYW4gdGVybSBpbiB5ZWFycy5cbiAgICogQHJldHVybiB7bnVtYmVyfSBNb250aGx5IG1vcnRnYWdlIHBheW1lbnQuXG4gICAqL1xuICBjYWxjdWxhdGVNb3J0Z2FnZVBheW1lbnQobG9hbkFtb3VudCwgaW50ZXJlc3RSYXRlLCBsb2FuVGVybSkge1xuICAgIC8vIFJldHVybiAwIGlmIGFueSBpbnB1dCBpcyBpbnZhbGlkXG4gICAgaWYgKCFsb2FuQW1vdW50IHx8ICFpbnRlcmVzdFJhdGUgfHwgIWxvYW5UZXJtKSByZXR1cm4gMDtcbiAgICBcbiAgICAvLyBDb252ZXJ0IGFubnVhbCBpbnRlcmVzdCByYXRlIHRvIG1vbnRobHkgZGVjaW1hbFxuICAgIGNvbnN0IG1vbnRobHlJbnRlcmVzdCA9IChpbnRlcmVzdFJhdGUgLyAxMDApIC8gMTI7XG4gICAgXG4gICAgLy8gQ2FsY3VsYXRlIG51bWJlciBvZiBwYXltZW50c1xuICAgIGNvbnN0IG51bVBheW1lbnRzID0gbG9hblRlcm0gKiAxMjtcbiAgICBcbiAgICAvLyBSZXR1cm4gMCBpZiBtb250aGx5IGludGVyZXN0IGlzIDAgdG8gYXZvaWQgZGl2aXNpb24gYnkgemVyb1xuICAgIGlmIChtb250aGx5SW50ZXJlc3QgPT09IDApIHJldHVybiBsb2FuQW1vdW50IC8gbnVtUGF5bWVudHM7XG4gICAgXG4gICAgLy8gQ2FsY3VsYXRlIG1vbnRobHkgcGF5bWVudCB1c2luZyBmb3JtdWxhOiBQID0gTFtjKDEgKyBjKV5uXS9bKDEgKyBjKV5uIC0gMV1cbiAgICAvLyB3aGVyZSBQID0gcGF5bWVudCwgTCA9IGxvYW4gYW1vdW50LCBjID0gbW9udGhseSBpbnRlcmVzdCByYXRlLCBuID0gbnVtYmVyIG9mIHBheW1lbnRzXG4gICAgY29uc3QgcGF5bWVudCA9IGxvYW5BbW91bnQgKiBcbiAgICAgICAgICAgICAgICAgICAobW9udGhseUludGVyZXN0ICogTWF0aC5wb3coMSArIG1vbnRobHlJbnRlcmVzdCwgbnVtUGF5bWVudHMpKSAvIFxuICAgICAgICAgICAgICAgICAgIChNYXRoLnBvdygxICsgbW9udGhseUludGVyZXN0LCBudW1QYXltZW50cykgLSAxKTtcbiAgICBcbiAgICByZXR1cm4gcGF5bWVudDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIEZvcm1hdCBtZXRyaWNzIHRvIGRpc3BsYXkgc3RyaW5ncy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG1ldHJpY3MgLSBDYWxjdWxhdGVkIG1ldHJpY3MuXG4gICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59IEFycmF5IG9mIGZvcm1hdHRlZCBhbmFseXNpcyBzdHJpbmdzLlxuICAgKi9cbiAgZm9ybWF0UmVzdWx0cyhtZXRyaWNzKSB7XG4gICAgLy8gQ3VycmVuY3kgZm9ybWF0dGVyXG4gICAgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMFxuICAgICAgfSkuZm9ybWF0KHZhbHVlKTtcbiAgICB9O1xuICAgIFxuICAgIC8vIFBlcmNlbnRhZ2UgZm9ybWF0dGVyXG4gICAgY29uc3QgZm9ybWF0UGVyY2VudCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMSkgKyAnJSc7XG4gICAgfTtcbiAgICBcbiAgICAvLyBSYXRpbyBmb3JtYXR0ZXJcbiAgICBjb25zdCBmb3JtYXRSYXRpbyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMSk7XG4gICAgfTtcbiAgICBcbiAgICAvLyBGb3JtYXQgYWxsIG1ldHJpY3MgZm9yIGRpc3BsYXlcbiAgICByZXR1cm4gW1xuICAgICAgYENhc2ggTmVlZGVkOiAke2Zvcm1hdEN1cnJlbmN5KG1ldHJpY3MudG90YWxDYXNoTmVlZGVkKX1gLFxuICAgICAgYE1vcnRnYWdlIFBheW1lbnQ6ICR7Zm9ybWF0Q3VycmVuY3kobWV0cmljcy5tb3J0Z2FnZVBheW1lbnQpfWAsXG4gICAgICBgTW9udGhseSBDYXNoIEZsb3c6ICR7Zm9ybWF0Q3VycmVuY3kobWV0cmljcy5tb250aGx5Q2FzaEZsb3cpfWAsXG4gICAgICBgTk9JOiAke2Zvcm1hdEN1cnJlbmN5KG1ldHJpY3MubmV0T3BlcmF0aW5nSW5jb21lKX1gLFxuICAgICAgYFRvdGFsIEV4cGVuc2VzOiAke2Zvcm1hdEN1cnJlbmN5KG1ldHJpY3MudG90YWxBbm51YWxFeHBlbnNlcyl9L3lyYCxcbiAgICAgIGBBbm51YWwgQ2FzaCBGbG93OiAke2Zvcm1hdEN1cnJlbmN5KG1ldHJpY3MuYW5udWFsQ2FzaEZsb3cpfWAsXG4gICAgICBgR1JNOiAke2Zvcm1hdFJhdGlvKG1ldHJpY3MuZ3Jvc3NSZW50TXVsdGlwbGllcil9YCxcbiAgICAgIGBDYXAgUmF0ZTogJHtmb3JtYXRQZXJjZW50KG1ldHJpY3MuY2FwUmF0ZSl9YCxcbiAgICAgIGBDYXNoIG9uIENhc2ggUmV0dXJuOiAke2Zvcm1hdFBlcmNlbnQobWV0cmljcy5jYXNoT25DYXNoKX1gXG4gICAgXTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhbmQgZm9ybWF0IGludmVzdG1lbnQgYW5hbHlzaXMgcmVzdWx0cy5cbiAgICogQHBhcmFtIHtQcm9wZXJ0eX0gcHJvcGVydHkgLSBUaGUgcHJvcGVydHkgdG8gYW5hbHl6ZS5cbiAgICogQHBhcmFtIHtJbnZlc3RtZW50QXNzdW1wdGlvbnN9IGFzc3VtcHRpb25zIC0gSW52ZXN0bWVudCBhc3N1bXB0aW9ucy5cbiAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gRm9ybWF0dGVkIGludmVzdG1lbnQgYW5hbHlzaXMgcmVzdWx0cy5cbiAgICovXG4gIGFuYWx5emUocHJvcGVydHksIGFzc3VtcHRpb25zKSB7XG4gICAgY29uc3QgbWV0cmljcyA9IHRoaXMuY2FsY3VsYXRlTWV0cmljcyhwcm9wZXJ0eSwgYXNzdW1wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLmZvcm1hdFJlc3VsdHMobWV0cmljcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52ZXN0bWVudENhbGN1bGF0b3I7IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFNlcnZpY2UgZm9yIGV4dHJhY3RpbmcgcHJvcGVydHkgZGF0YSBmcm9tIHJlYWwgZXN0YXRlIHdlYnNpdGVzLlxuICovXG5cbmltcG9ydCBQcm9wZXJ0eSBmcm9tICcuLi9tb2RlbHMvcHJvcGVydHkuanMnO1xuXG4vKipcbiAqIFNlcnZpY2UgZm9yIGV4dHJhY3RpbmcgcHJvcGVydHkgZGF0YSBmcm9tIHJlYWwgZXN0YXRlIHdlYnNpdGVzLlxuICovXG5jbGFzcyBQcm9wZXJ0eURhdGFFeHRyYWN0b3Ige1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFByb3BlcnR5RGF0YUV4dHJhY3Rvci5cbiAgICogQHBhcmFtIHtPYmplY3Q9fSBzZWxlY3RvcnMgLSBET00gc2VsZWN0b3JzIGZvciBleHRyYWN0aW5nIGRhdGEuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvcnMgPSB7fSkge1xuICAgIC8vIERlZmF1bHQgc2VsZWN0b3JzIGZvciBaaWxsb3dcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHtcbiAgICAgIHByaWNlOiAnc3BhbltkYXRhLXRlc3RpZD1cInByaWNlXCJdJyxcbiAgICAgIHJlbnRaZXN0aW1hdGU6ICdbZGF0YS10ZXN0aWQ9XCJyZW50YWwtY29udGFpbmVyXCJdJyxcbiAgICAgIHJlbnRaZXN0aW1hdGVWYWx1ZTogJ1tkYXRhLXRlc3RpZD1cInJlbnRhbC12YWx1ZVwiXScsXG4gICAgICByZW50WmVzdGltYXRlVGV4dDogJy5UZXh0LWMxMW4tOC0xMDYtMF9fc2MtYWlhaTI0LTAnLFxuICAgICAgYWRkcmVzczogJ1tkYXRhLXRlc3RpZD1cImhvbWUtZGV0YWlscy1jaGlwXCJdJyxcbiAgICAgIC4uLnNlbGVjdG9yc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCBwcm9wZXJ0eSBkYXRhIGZyb20gdGhlIGN1cnJlbnQgcGFnZS5cbiAgICogQHJldHVybiB7UHJvcGVydHl9IEV4dHJhY3RlZCBwcm9wZXJ0eSBkYXRhLlxuICAgKi9cbiAgZXh0cmFjdFByb3BlcnR5KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmljZSA9IHRoaXMuZXh0cmFjdFByaWNlKCk7XG4gICAgICBjb25zdCByZW50RXN0aW1hdGUgPSB0aGlzLmV4dHJhY3RSZW50RXN0aW1hdGUoKTtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLmV4dHJhY3RBZGRyZXNzKCk7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIFxuICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eSh7XG4gICAgICAgIHByaWNlLFxuICAgICAgICByZW50RXN0aW1hdGUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIHVybFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGV4dHJhY3RpbmcgcHJvcGVydHkgZGF0YTonLCBlcnJvcik7XG4gICAgICByZXR1cm4gbmV3IFByb3BlcnR5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgcHJvcGVydHkgcHJpY2UuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHByb3BlcnR5IHByaWNlLlxuICAgKi9cbiAgZXh0cmFjdFByaWNlKCkge1xuICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMucHJpY2UpO1xuICAgIGlmICghcHJpY2VFbGVtZW50KSByZXR1cm4gMDtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5wYXJzZU1vbmV5VmFsdWUocHJpY2VFbGVtZW50LnRleHRDb250ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IHJlbnQgZXN0aW1hdGUgdXNpbmcgbXVsdGlwbGUgc3RyYXRlZ2llcy5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbW9udGhseSByZW50IGVzdGltYXRlLlxuICAgKi9cbiAgZXh0cmFjdFJlbnRFc3RpbWF0ZSgpIHtcbiAgICBsZXQgcmVudEVzdGltYXRlID0gMDtcbiAgICBcbiAgICAvLyBTdHJhdGVneSAxOiBMb29rIGZvciByZW50YWwgY29udGFpbmVyIHdpdGggc3BlY2lmaWMgZGF0YSBhdHRyaWJ1dGVcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMucmVudFplc3RpbWF0ZSk7XG4gICAgICBpZiAocmVudENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCByZW50VmFsdWUgPSByZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMucmVudFplc3RpbWF0ZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlbnRWYWx1ZSkge1xuICAgICAgICAgIHJlbnRFc3RpbWF0ZSA9IHRoaXMucGFyc2VNb25leVZhbHVlKHJlbnRWYWx1ZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgaWYgKHJlbnRFc3RpbWF0ZSA+IDApIHJldHVybiByZW50RXN0aW1hdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGluIHJlbnQgZXN0aW1hdGUgZXh0cmFjdGlvbiBzdHJhdGVneSAxOicsIGUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBTdHJhdGVneSAyOiBMb29rIGZvciBcIlJlbnQgWmVzdGltYXRlXCIgdGV4dCBhbmQgYWRqYWNlbnQgdmFsdWVcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVudEVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3JzLnJlbnRaZXN0aW1hdGVUZXh0KSk7XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVudEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyZW50RWxlbWVudHNbaV0udGV4dENvbnRlbnQgPT09ICdSZW50IFplc3RpbWF0ZcKuJyAmJiBpICsgMSA8IHJlbnRFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBUaGUgbmV4dCBlbGVtZW50IHNob3VsZCBjb250YWluIHRoZSByZW50IHZhbHVlXG4gICAgICAgICAgY29uc3QgcmVudFRleHQgPSByZW50RWxlbWVudHNbaSArIDFdLnRleHRDb250ZW50O1xuICAgICAgICAgIGNvbnN0IHJlbnRWYWx1ZSA9IHRoaXMucGFyc2VNb25leVZhbHVlKHJlbnRUZXh0KTtcbiAgICAgICAgICBpZiAocmVudFZhbHVlID4gMCkgcmV0dXJuIHJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgaW4gcmVudCBlc3RpbWF0ZSBleHRyYWN0aW9uIHN0cmF0ZWd5IDI6JywgZSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFN0cmF0ZWd5IDM6IEdlbmVyYWwgcmVnZXggc2VhcmNoIGZvciByZW50IHBhdHRlcm4gaW4gdGhlIHBhZ2VcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVudFBhdHRlcm4gPSAvUmVudCg/OlxcXFxzKyk/KD86WmVzdGltYXRlfEVzdGltYXRlKSg/OsKuKT8oPzpcXFxccyspPyg/OmlzKT8oPzpcXFxccyspP1xcXFwkKFswLTksXSspL2k7XG4gICAgICBjb25zdCBwYWdlVGV4dCA9IGRvY3VtZW50LmJvZHkuaW5uZXJUZXh0O1xuICAgICAgY29uc3QgbWF0Y2ggPSBwYWdlVGV4dC5tYXRjaChyZW50UGF0dGVybik7XG4gICAgICBcbiAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgICByZW50RXN0aW1hdGUgPSB0aGlzLnBhcnNlTW9uZXlWYWx1ZSgnJCcgKyBtYXRjaFsxXSk7XG4gICAgICAgIGlmIChyZW50RXN0aW1hdGUgPiAwKSByZXR1cm4gcmVudEVzdGltYXRlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgaW4gcmVudCBlc3RpbWF0ZSBleHRyYWN0aW9uIHN0cmF0ZWd5IDM6JywgZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZW50RXN0aW1hdGU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBFeHRyYWN0IHByb3BlcnR5IGFkZHJlc3MuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHByb3BlcnR5IGFkZHJlc3MuXG4gICAqL1xuICBleHRyYWN0QWRkcmVzcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWRkcmVzc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmFkZHJlc3MpO1xuICAgICAgcmV0dXJuIGFkZHJlc3NFbGVtZW50ID8gYWRkcmVzc0VsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpIDogJyc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdFcnJvciBleHRyYWN0aW5nIGFkZHJlc3M6JywgZSk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgbW9uZXkgdmFsdWUgZnJvbSB0ZXh0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgY29udGFpbmluZyBhIG1vbmV5IHZhbHVlLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFBhcnNlZCBudW1lcmljIHZhbHVlLlxuICAgKi9cbiAgcGFyc2VNb25leVZhbHVlKHRleHQpIHtcbiAgICBpZiAoIXRleHQpIHJldHVybiAwO1xuICAgIFxuICAgIC8vIFRyeSB0byBleHRyYWN0IHVzaW5nIHJlZ2V4IGZvciBtb25leSBwYXR0ZXJuXG4gICAgY29uc3QgbW9uZXlQYXR0ZXJuID0gL1xcXFwkKFswLTksLl0rKS87XG4gICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKG1vbmV5UGF0dGVybik7XG4gICAgXG4gICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAvLyBSZW1vdmUgY29tbWFzIGFuZCBjb252ZXJ0IHRvIG51bWJlclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0ucmVwbGFjZSgvLC9nLCAnJykpIHx8IDA7XG4gICAgfVxuICAgIFxuICAgIC8vIEZhbGxiYWNrOiBqdXN0IHRyeSB0byByZW1vdmUgJCBhbmQgY29tbWFzIGZyb20gdGhlIHdob2xlIHN0cmluZ1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHRleHQucmVwbGFjZSgvWyQsXS9nLCAnJykpIHx8IDA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHlEYXRhRXh0cmFjdG9yOyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTZXJ2aWNlIGZvciBtYW5hZ2luZyBleHRlbnNpb24gc3RvcmFnZS5cbiAqL1xuXG5pbXBvcnQgSW52ZXN0bWVudEFzc3VtcHRpb25zIGZyb20gJy4uL21vZGVscy9pbnZlc3RtZW50LWFzc3VtcHRpb25zLmpzJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICcuLi9tb2RlbHMvcHJvcGVydHkuanMnO1xuXG4vKipcbiAqIFNlcnZpY2UgZm9yIG1hbmFnaW5nIGV4dGVuc2lvbiBzdG9yYWdlLlxuICovXG5jbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gICAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBTdG9yYWdlU2VydmljZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcmFnZUFwaSA9IGNocm9tZS5zdG9yYWdlLnN5bmM7XG4gICAgfVxuICAgIC8qKlxuICAgKiBTYXZlIGludmVzdG1lbnQgYXNzdW1wdGlvbnMgdG8gc3RvcmFnZS5cbiAgICogQHBhcmFtIHtJbnZlc3RtZW50QXNzdW1wdGlvbnN9IGFzc3VtcHRpb25zIC0gVGhlIGFzc3VtcHRpb25zIHRvIHNhdmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdoZW4gc2F2ZSBpcyBjb21wbGV0ZS5cbiAgICovXG4gIHNhdmVBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VBcGkuc2V0KGFzc3VtcHRpb25zLnRvSlNPTigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIExvYWQgaW52ZXN0bWVudCBhc3N1bXB0aW9ucyBmcm9tIHN0b3JhZ2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8SW52ZXN0bWVudEFzc3VtcHRpb25zPn0gUHJvbWlzZSByZXNvbHZpbmcgdG8gbG9hZGVkIGFzc3VtcHRpb25zLlxuICAgKi9cbiAgYXN5bmMgbG9hZEFzc3VtcHRpb25zKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IEludmVzdG1lbnRBc3N1bXB0aW9ucy5kZWZhdWx0cztcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnN0b3JhZ2VBcGkuZ2V0KGRlZmF1bHRzKTtcbiAgICAgIHJldHVybiBuZXcgSW52ZXN0bWVudEFzc3VtcHRpb25zKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBhc3N1bXB0aW9uczonLCBlcnJvcik7XG4gICAgICByZXR1cm4gbmV3IEludmVzdG1lbnRBc3N1bXB0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgKiBTYXZlIHByb3BlcnR5IGRhdGEgdG8gc3RvcmFnZS5cbiAgICogQHBhcmFtIHtQcm9wZXJ0eX0gcHJvcGVydHkgLSBUaGUgcHJvcGVydHkgdG8gc2F2ZS5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBrZXkgLSBTdG9yYWdlIGtleSBmb3IgdGhlIHByb3BlcnR5LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBQcm9taXNlIHJlc29sdmluZyB3aGVuIHNhdmUgaXMgY29tcGxldGUuXG4gICAqL1xuICBzYXZlUHJvcGVydHkocHJvcGVydHksIGtleSA9ICdjdXJyZW50UHJvcGVydHknKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZUFwaS5zZXQoe1xuICAgICAgICAgICAgW2tleVxuICAgICAgICAgICAgXTogcHJvcGVydHkudG9KU09OKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBMb2FkIHByb3BlcnR5IGRhdGEgZnJvbSBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IGtleSAtIFN0b3JhZ2Uga2V5IGZvciB0aGUgcHJvcGVydHkuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8P1Byb3BlcnR5Pn0gUHJvbWlzZSByZXNvbHZpbmcgdG8gbG9hZGVkIHByb3BlcnR5LlxuICAgKi9cbiAgYXN5bmMgbG9hZFByb3BlcnR5KGtleSA9ICdjdXJyZW50UHJvcGVydHknKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnN0b3JhZ2VBcGkuZ2V0KGtleSk7XG4gICAgICBpZiAoZGF0YVtrZXlcbiAgICAgICAgICAgIF0pIHtcbiAgICAgICAgcmV0dXJuIFByb3BlcnR5LmZyb21KU09OKGRhdGFba2V5XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGxvYWRpbmcgcHJvcGVydHkgd2l0aCBrZXkgJHtrZXlcbiAgICAgICAgICAgIH06YCwgZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAqIFNhdmUgZGF0YSB0byBzdG9yYWdlIHdpdGggY3VzdG9tIGtleS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFN0b3JhZ2Uga2V5LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gRGF0YSB0byBzdG9yZS5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSByZXNvbHZpbmcgd2hlbiBzYXZlIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgc2F2ZShrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZUFwaS5zZXQoe1xuICAgICAgICAgICAgW2tleVxuICAgICAgICAgICAgXTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBMb2FkIGRhdGEgZnJvbSBzdG9yYWdlIHdpdGggY3VzdG9tIGtleS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFN0b3JhZ2Uga2V5LlxuICAgKiBAcGFyYW0geyo9fSBkZWZhdWx0VmFsdWUgLSBEZWZhdWx0IHZhbHVlIGlmIGtleSBkb2Vzbid0IGV4aXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPCo+fSBQcm9taXNlIHJlc29sdmluZyB0byBsb2FkZWQgZGF0YS5cbiAgICovXG4gIGFzeW5jIGxvYWQoa2V5LCBkZWZhdWx0VmFsdWUgPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnN0b3JhZ2VBcGkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gZGF0YVtrZXlcbiAgICAgICAgICAgIF0gIT09IHVuZGVmaW5lZCA/IGRhdGFba2V5XG4gICAgICAgICAgICBdIDogZGVmYXVsdFZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbG9hZGluZyBrZXkgJHtrZXlcbiAgICAgICAgICAgIH06YCwgZXJyb3IpO1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICogUmVtb3ZlIGRhdGEgZnJvbSBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSBrZXlzIC0gS2V5KHMpIHRvIHJlbW92ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSByZXNvbHZpbmcgd2hlbiByZW1vdmFsIGlzIGNvbXBsZXRlLlxuICAgKi9cbiAgcmVtb3ZlKGtleXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlQXBpLnJlbW92ZShrZXlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENsZWFyIGFsbCBzdG9yYWdlIGRhdGEuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdoZW4gY2xlYXIgaXMgY29tcGxldGUuXG4gICAqL1xuICBjbGVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlQXBpLmNsZWFyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlU2VydmljZTsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgTWFuYWdlcyBVSSBlbGVtZW50cyBhbmQgaW50ZXJhY3Rpb25zLlxuICovXG5cbmltcG9ydCBGb3JtYXR0ZXJVdGlsIGZyb20gJy4uL3V0aWxzL2Zvcm1hdHRlci11dGlsLmpzJztcblxuLyoqXG4gKiBNYW5hZ2VzIFVJIGVsZW1lbnRzIGFuZCBpbnRlcmFjdGlvbnMuXG4gKi9cbmNsYXNzIFVJTWFuYWdlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgVUlNYW5hZ2VyLlxuICAgKiBAcGFyYW0ge0ludmVzdG1lbnRDYWxjdWxhdG9yfSBjYWxjdWxhdG9yIC0gQ2FsY3VsYXRvciBmb3IgaW52ZXN0bWVudCBtZXRyaWNzLlxuICAgKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZXZlbnRFbWl0dGVyIC0gRm9yIHB1Ymxpc2hpbmcgYW5kIHN1YnNjcmliaW5nIHRvIGV2ZW50cy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhbGN1bGF0b3IsIGV2ZW50RW1pdHRlcikge1xuICAgIHRoaXMuY2FsY3VsYXRvciA9IGNhbGN1bGF0b3I7XG4gICAgdGhpcy5ldmVudHMgPSBldmVudEVtaXR0ZXI7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSBuZXcgRm9ybWF0dGVyVXRpbCgpO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcbiAgICBcbiAgICAvLyBCaW5kIGV2ZW50IGhhbmRsZXJzIHRvIG1haW50YWluIGNvbnRleHRcbiAgICB0aGlzLmhhbmRsZVVwZGF0ZUNsaWNrID0gdGhpcy5oYW5kbGVVcGRhdGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgVUkgZWxlbWVudHMuXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIC8vIEZpbmQgb3IgY3JlYXRlIHRoZSBpbnB1dHMgY29udGFpbmVyXG4gICAgdGhpcy5jcmVhdGVJbnB1dHNDb250YWluZXIoKTtcbiAgICBcbiAgICAvLyBTZXQgdXAgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgXG4gICAgLy8gU3Vic2NyaWJlIHRvIHJlbGV2YW50IGV2ZW50c1xuICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGlucHV0IGZvcm0gY29udGFpbmVyLlxuICAgKi9cbiAgY3JlYXRlSW5wdXRzQ29udGFpbmVyKCkge1xuICAgIC8vIFJlbW92ZSBhbnkgZXhpc3RpbmcgaW5wdXRzIGNvbnRhaW5lclxuICAgIGNvbnN0IGV4aXN0aW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BmaW5kZXItcHJvLWlucHV0cycpO1xuICAgIGlmIChleGlzdGluZ0NvbnRhaW5lcikge1xuICAgICAgZXhpc3RpbmdDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIENyZWF0ZSBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQgPSAncHJvcGZpbmRlci1wcm8taW5wdXRzJztcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3Byb3BmaW5kZXItcHJvLWNvbnRhaW5lcic7XG4gICAgXG4gICAgLy8gQWRkIGNvbnRhaW5lciBzdHlsZXNcbiAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcxMnB4JztcbiAgICBjb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gJzEycHgnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y4ZjlmYSc7XG4gICAgY29udGFpbmVyLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBjb250YWluZXIuc3R5bGUuZm9udEZhbWlseSA9ICdBcmlhbCwgc2Fucy1zZXJpZic7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAncHJvcGZpbmRlci1wcm8taGVhZGVyJztcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGgzIHN0eWxlPVwibWFyZ2luOiAwIDAgMTBweDsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzAwNjZjYztcIj5cbiAgICAgICAgUHJvcEZpbmRlciBQcm8gQW5hbHlzaXNcbiAgICAgIDwvaDM+XG4gICAgYDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgaW5wdXRzIGZvcm1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAncHJvcGZpbmRlci1wcm8tZm9ybSc7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGZvcm0uc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgZm9ybS5zdHlsZS5nYXAgPSAnOHB4JztcbiAgICBcbiAgICAvLyBBZGQgZm9ybSB0byBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHVwZGF0ZSBidXR0b25cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaWQgPSAncHJvcGZpbmRlci1wcm8tdXBkYXRlJztcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVXBkYXRlIEFuYWx5c2lzJztcbiAgICBidXR0b24uc3R5bGUubWFyZ2luVG9wID0gJzEwcHgnO1xuICAgIGJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gJzhweCAxNnB4JztcbiAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDY2Y2MnO1xuICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgYnV0dG9uLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICBidXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XG4gICAgYnV0dG9uLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICBidXR0b24uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICBidXR0b24uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgXG4gICAgLy8gU3RvcmUgcmVmZXJlbmNlcyB0byBjcmVhdGVkIGVsZW1lbnRzXG4gICAgdGhpcy5lbGVtZW50cy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JtID0gZm9ybTtcbiAgICB0aGlzLmVsZW1lbnRzLnVwZGF0ZUJ1dHRvbiA9IGJ1dHRvbjtcbiAgICBcbiAgICAvLyBUcnkgdG8gZmluZCB0aGUgYmVzdCBsb2NhdGlvbiB0byBpbnNlcnQgdGhlIGNvbnRhaW5lclxuICAgIHRoaXMuaW5zZXJ0SW5wdXRzQ29udGFpbmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBzdWl0YWJsZSBsb2NhdGlvbiBhbmQgaW5zZXJ0IHRoZSBpbnB1dHMgY29udGFpbmVyLlxuICAgKi9cbiAgaW5zZXJ0SW5wdXRzQ29udGFpbmVyKCkge1xuICAgIC8vIFRyeSB0byBmaW5kIGEgZ29vZCBsb2NhdGlvbiBvbiBaaWxsb3cgcGFnZVxuICAgIGNvbnN0IGZhY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy1rSW1OQXQnKTtcbiAgICBcbiAgICBpZiAoZmFjdHNMaXN0KSB7XG4gICAgICAvLyBJbnNlcnQgYmVmb3JlIGZhY3RzIGxpc3RcbiAgICAgIGZhY3RzTGlzdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmVsZW1lbnRzLmNvbnRhaW5lciwgZmFjdHNMaXN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gU2Vjb25kYXJ5IGxvY2F0aW9uOiBBbnkgXCJmYWN0c1wiIGNvbnRhaW5lclxuICAgIGNvbnN0IGZhY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGlkPVwiZmFjdHMtY29udGFpbmVyXCJdJyk7XG4gICAgaWYgKGZhY3RzQ29udGFpbmVyKSB7XG4gICAgICAvLyBJbnNlcnQgYXQgdGhlIGJlZ2lubmluZyBvZiBmYWN0cyBjb250YWluZXJcbiAgICAgIGZhY3RzQ29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmVsZW1lbnRzLmNvbnRhaW5lciwgZmFjdHNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIEZhbGxiYWNrOiBUcnkgdG8gaW5zZXJ0IGFmdGVyIHRoZSBwcmljZSBzZWN0aW9uXG4gICAgY29uc3QgcHJpY2VTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGlkPVwicHJpY2VcIl0nKTtcbiAgICBpZiAocHJpY2VTZWN0aW9uKSB7XG4gICAgICAvLyBMb29rIGZvciBwYXJlbnQgZWxlbWVudHNcbiAgICAgIGxldCBwYXJlbnQgPSBwcmljZVNlY3Rpb24ucGFyZW50Tm9kZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIC8vIEluc2VydCBhZnRlciB0aGUgcHJpY2Ugc2VjdGlvbiBwYXJlbnRcbiAgICAgICAgaWYgKHBhcmVudC5uZXh0U2libGluZykge1xuICAgICAgICAgIHBhcmVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmVsZW1lbnRzLmNvbnRhaW5lciwgcGFyZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRzLmNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBMYXN0IHJlc29ydDogQXBwZW5kIHRvIGJvZHlcbiAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBmaW5kIG9wdGltYWwgbG9jYXRpb24gZm9yIFByb3BGaW5kZXIgUHJvIGNvbnRhaW5lciwgYWRkaW5nIHRvIGJvZHknKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudHMuY29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgaW5wdXQgZmllbGRzIGZvciBwcm9wZXJ0eSBkYXRhLlxuICAgKiBAcGFyYW0ge1Byb3BlcnR5fSBwcm9wZXJ0eSAtIEN1cnJlbnQgcHJvcGVydHkgZGF0YS5cbiAgICovXG4gIGNyZWF0ZUlucHV0RmllbGRzKHByb3BlcnR5KSB7XG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgZmllbGRzXG4gICAgdGhpcy5lbGVtZW50cy5mb3JtLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIC8vIENyZWF0ZSBpbnB1dCBmaWVsZHNcbiAgICBjb25zdCBmaWVsZHMgPSBbXG4gICAgICB7IGlkOiAncHJpY2UnLCBsYWJlbDogJ1ByaWNlJywgdmFsdWU6IHByb3BlcnR5LnByaWNlIH0sXG4gICAgICB7IGlkOiAncmVwYWlyQ29zdCcsIGxhYmVsOiAnUmVwYWlyIENvc3QnLCB2YWx1ZTogcHJvcGVydHkucmVwYWlyQ29zdCB9LFxuICAgICAgeyBpZDogJ21vbnRobHlJbmNvbWUnLCBsYWJlbDogJ01vbnRobHkgUmVudCcsIHZhbHVlOiBwcm9wZXJ0eS5tb250aGx5SW5jb21lIH1cbiAgICBdO1xuICAgIFxuICAgIC8vIEFkZCBlYWNoIGZpZWxkIHRvIHRoZSBmb3JtXG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUlucHV0RmllbGQoZmllbGQuaWQsIGZpZWxkLmxhYmVsLCBmaWVsZC52YWx1ZSk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmZvcm0uYXBwZW5kQ2hpbGQoZmllbGRDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbmdsZSBpbnB1dCBmaWVsZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gRmllbGQgSUQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIEZpZWxkIGxhYmVsLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBGaWVsZCB2YWx1ZS5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IElucHV0IGZpZWxkIGNvbnRhaW5lci5cbiAgICovXG4gIGNyZWF0ZUlucHV0RmllbGQoaWQsIGxhYmVsLCB2YWx1ZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAncHJvcGZpbmRlci1wcm8taW5wdXQtZmllbGQnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5mbGV4ID0gJzEnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICcxNTBweCc7XG4gICAgXG4gICAgLy8gRm9ybWF0IHZhbHVlIGFzIGN1cnJlbmN5XG4gICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdHRlci5mb3JtYXRDdXJyZW5jeSh2YWx1ZSk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGZpZWxkIEhUTUxcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgbWFyZ2luLWJvdHRvbTogNHB4OyBjb2xvcjogIzU1NTtcIj5cbiAgICAgICAgJHtsYWJlbH06XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwicHJvcGZpbmRlci1wcm8tJHtpZH1cIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPVwiJHtmb3JtYXR0ZWRWYWx1ZX1cIlxuICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBwYWRkaW5nOiA2cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IGJvcmRlci1yYWRpdXM6IDRweDsgZm9udC1zaXplOiAxNHB4OyB0ZXh0LWFsaWduOiByaWdodDsgYm94LXNpemluZzogYm9yZGVyLWJveDtcIlxuICAgICAgPlxuICAgIGA7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgZXZlbnQgbGlzdGVuZXJzLlxuICAgKi9cbiAgc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgICAvLyBBZGQgY2xpY2sgaGFuZGxlciBmb3IgdGhlIHVwZGF0ZSBidXR0b25cbiAgICBpZiAodGhpcy5lbGVtZW50cy51cGRhdGVCdXR0b24pIHtcbiAgICAgIHRoaXMuZWxlbWVudHMudXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVVcGRhdGVDbGljayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBldmVudHMgZnJvbSB0aGUgZXZlbnQgZW1pdHRlci5cbiAgICovXG4gIHN1YnNjcmliZVRvRXZlbnRzKCkge1xuICAgIC8vIFN1YnNjcmliZSB0byBwcm9wZXJ0eSB1cGRhdGUgZXZlbnRzXG4gICAgdGhpcy5ldmVudHMub24oJ3Byb3BlcnR5VXBkYXRlZCcsIHByb3BlcnR5ID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlSW5wdXRGaWVsZHMocHJvcGVydHkpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIFN1YnNjcmliZSB0byBhbmFseXNpcyByZXN1bHRzIGV2ZW50c1xuICAgIHRoaXMuZXZlbnRzLm9uKCdhbmFseXNpc1VwZGF0ZWQnLCBhbmFseXNpc0RldGFpbHMgPT4ge1xuICAgICAgdGhpcy51cGRhdGVBbmFseXNpc1Jlc3VsdHMoYW5hbHlzaXNEZXRhaWxzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2xpY2sgb24gdGhlIHVwZGF0ZSBidXR0b24uXG4gICAqL1xuICBoYW5kbGVVcGRhdGVDbGljaygpIHtcbiAgICAvLyBHZXQgdmFsdWVzIGZyb20gaW5wdXQgZmllbGRzXG4gICAgY29uc3QgcHJpY2UgPSB0aGlzLmZvcm1hdHRlci5wYXJzZU1vbmV5VmFsdWUoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9wZmluZGVyLXByby1wcmljZScpLnZhbHVlKTtcbiAgICBjb25zdCByZXBhaXJDb3N0ID0gdGhpcy5mb3JtYXR0ZXIucGFyc2VNb25leVZhbHVlKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvcGZpbmRlci1wcm8tcmVwYWlyQ29zdCcpLnZhbHVlKTtcbiAgICBjb25zdCBtb250aGx5SW5jb21lID0gdGhpcy5mb3JtYXR0ZXIucGFyc2VNb25leVZhbHVlKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvcGZpbmRlci1wcm8tbW9udGhseUluY29tZScpLnZhbHVlKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgcHJvcGVydHkgdXBkYXRlIGRhdGFcbiAgICBjb25zdCBwcm9wZXJ0eURhdGEgPSB7XG4gICAgICBwcmljZSxcbiAgICAgIHJlcGFpckNvc3QsXG4gICAgICBtb250aGx5SW5jb21lXG4gICAgfTtcbiAgICBcbiAgICAvLyBFbWl0IGV2ZW50IHdpdGggdGhlIHVwZGF0ZWQgcHJvcGVydHkgZGF0YVxuICAgIHRoaXMuZXZlbnRzLmVtaXQoJ3Byb3BlcnR5SW5wdXRVcGRhdGVkJywgcHJvcGVydHlEYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIGluamVjdCB0aGUgaW52ZXN0bWVudCBhbmFseXNpcyByZXN1bHRzLlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGFuYWx5c2lzRGV0YWlscyAtIEFuYWx5c2lzIHJlc3VsdHMgdG8gZGlzcGxheS5cbiAgICovXG4gIHVwZGF0ZUFuYWx5c2lzUmVzdWx0cyhhbmFseXNpc0RldGFpbHMpIHtcbiAgICAvLyBSZW1vdmUgZXhpc3RpbmcgYW5hbHlzaXMgaXRlbXNcbiAgICBjb25zdCBleGlzdGluZ0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3BmaW5kZXItcHJvLXJlc3VsdC1pdGVtJyk7XG4gICAgZXhpc3RpbmdJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSk7XG4gICAgXG4gICAgLy8gRmluZCB0aGUgZmFjdHMgbGlzdFxuICAgIGNvbnN0IGZhY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy1rSW1OQXQnKTtcbiAgICBpZiAoIWZhY3RzTGlzdCkge1xuICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgZmluZCBmYWN0cyBsaXN0IGZvciBhbmFseXNpcyByZXN1bHRzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCBlYWNoIGFuYWx5c2lzIGRldGFpbCBhcyBhIGZhY3QgaXRlbVxuICAgIGFuYWx5c2lzRGV0YWlscy5mb3JFYWNoKGRldGFpbCA9PiB7XG4gICAgICBjb25zdCBmYWN0SXRlbSA9IHRoaXMuY3JlYXRlRmFjdEl0ZW0oZGV0YWlsKTtcbiAgICAgIGZhY3RzTGlzdC5hcHBlbmRDaGlsZChmYWN0SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhcHByb3ByaWF0ZSBpY29uIFNWRyBmb3IgYSBzcGVjaWZpYyBtZXRyaWMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0RGV0YWlscyAtIFRleHQgY29udGVudCBvZiB0aGUgZmFjdCB0byBkZXRlcm1pbmUgaWNvbi5cbiAgICogQHJldHVybiB7c3RyaW5nfSBTVkcgbWFya3VwIGZvciB0aGUgYXBwcm9wcmlhdGUgaWNvbi5cbiAgICovXG4gIGdldEljb25Gb3JGYWN0KGZhY3REZXRhaWxzKSB7XG4gICAgLy8gRGVmYXVsdCBpY29uIGFzIGZhbGxiYWNrXG4gICAgbGV0IGljb25TdmcgPSBgXG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHJvbGU9XCJpbWdcIiBjbGFzcz1cIkljb24tYzExbi04LTEwNi0wX19zYy0xM2xsbW1sLTAgaUJKeWJRXCI+XG4gICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTI5IDE3aC0ydi0yYTEgMSAwIDAwLTEtMWgtNmExIDEgMCAwMC0xIDF2MmgtMnYtN2ExIDEgMCAwMC0xLTFIOWExIDEgMCAwMC0xIDF2N0g2VjNhMSAxIDAgMDAtMS0xSDNhMSAxIDAgMDAtMSAxdjI2YTEgMSAwIDAwMSAxaDI2YTEgMSAwIDAwMS0xVjE4YTEgMSAwIDAwLTEtMXpNMjEgMTZoLTR2LTFoNHptLTEyLTVoNXYxMkg5em0xOSAxN0g0VjRoMXYxM2ExIDEgMCAwMDEgMWgzYTEgMSAwIDAwMS0xdi0xaDZhMSAxIDAgMDAxLTF2LTJoMmExIDEgMCAwMDEtMXYtMWgzYTEgMSAwIDAwMS0xdi0xaDF6XCI+PC9wYXRoPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNiA3aDJ2Mkg2ek02IDExaDJ2Mkg2elwiPjwvcGF0aD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgYDtcblxuICAgIC8vIE1hdGNoIGZhY3QgY29udGVudCB0byBkZXRlcm1pbmUgd2hpY2ggaWNvbiB0byB1c2VcbiAgICBpZiAoZmFjdERldGFpbHMuaW5jbHVkZXMoJ0Nhc2ggTmVlZGVkJykpIHtcbiAgICAgIC8vIE1vbmV5IGJhZyBpY29uXG4gICAgICBpY29uU3ZnID0gYFxuICAgICAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMDBweFwiIGhlaWdodD1cIjEwMDBweFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIm0xMS43MjYgMTcuMTAyYy0wLjA5OS0wLjIxNzUtMC4zMDQtMC4zNzYyLTAuNTUyMS0wLjQwNDQtMC4yMTAxLTAuMDI0LTAuNDE1OC0wLjA2OS0wLjYxMTQtMC4xMzM5LTAuMDg3Ny0wLjAyOTUtMC4xNy0wLjA2MTctMC4yNDYyLTAuMDk2MmwwLjEyNjYtMC4zNDUxYzAuMDg5NCAwLjAzOTkgMC4xODE1IDAuMDc2NCAwLjI3NTggMC4xMDk0bDAuMDAzOSAwLjAwMTQgNGUtMyAwLjAwMTNjMC4zMDI2IDAuMSAwLjYwMDQgMC4xNTA3IDAuODg0OSAwLjE1MDcgMC4yODU3IDAgMC40OTI4LTAuMDM4MyAwLjY1MTktMC4xMjA0bDAuMDA5NS0wLjAwNDkgMC4wMDkzLTAuMDA1NGMwLjI0MS0wLjEzODMgMC4zNzkzLTAuMzc2IDAuMzc5My0wLjY1MjMgMC0wLjMwNjYtMC4xNjU0LTAuNTYxMS0wLjQ1MzktMC42OTg2LTAuMTQ1MS0wLjA3MDYtMC4zNTEyLTAuMTM4LTAuNjQ4MS0wLjIxMTgtMC4zMDQ1LTAuMDc3LTAuNTYwMy0wLjE1ODctMC43NTg3LTAuMjQyNC0wLjE0NS0wLjA2NTYtMC4yNzA4LTAuMTcwMy0wLjM4NDItMC4zMi0wLjA5NzYtMC4xMzM2LTAuMTQ3LTAuMzM0NS0wLjE0Ny0wLjU5NzQgMC0wLjMxNzIgMC4wODkzLTAuNTc5IDAuMjczMS0wLjgwMDQgMC4xNjM2LTAuMTk0IDAuMzk1OS0wLjMyNTggMC43MDc3LTAuMzk5NyAwLjIzMTMtMC4wNTQ4IDAuNDExNy0wLjIxOTkgMC40OTI4LTAuNDMzMSAwLjA5MTcgMC4yMTYxIDAuMjg2OCAwLjM3NjggMC41Mjk2IDAuNDE1NSAwLjIwMjggMC4wMzIzIDAuMzg5IDAuMDgzOCAwLjU1NjQgMC4xNTM1bC0wLjExNjUgMC4zMzgyYy0wLjMxNjEtMC4xMjY5LTAuNjI3Mi0wLjE5MS0wLjkyODEtMC4xOTEtMC45OTkzIDAtMS4wNDk5IDAuNjg5NC0xLjA0OTkgMC44Mjc2IDAgMC4yOTk2IDAuMTYxOCAwLjU1MDggMC40NDM5IDAuNjg5M2wwLjAwNzkgMC4wMDM5IDhlLTMgMC4wMDM2YzAuMTQyNSAwLjA2MzYgMC4zNDQ3IDAuMTI0OSAwLjYzNjUgMC4xOTI5IDAuMzAxNyAwLjA2ODIgMC41NTMzIDAuMTQ2MyAwLjc1MSAwLjIzMjlsMC4wMDQxIDAuMDAxOCAwLjAwNDEgMC4wMDE3YzAuMTQ2OCAwLjA2MTEgMC4yNzI3IDAuMTYzMSAwLjM4NDkgMC4zMTE5bDAuMDAxOCAwLjAwMjMgMC4wMDE4IDAuMDAyNGMwLjA5ODEgMC4xMjY4IDAuMTQ3OSAwLjMyMjkgMC4xNDc5IDAuNTgyOSAwIDAuMzAwMS0wLjA4NjkgMC41NTQxLTAuMjY1NyAwLjc3NjYtMC4xNTUxIDAuMTkzLTAuMzcxNiAwLjMyNjYtMC42NjIxIDAuNDA4NC0wLjIyNDMgMC4wNjMyLTAuMzk4MyAwLjIzNDctMC40NzI4IDAuNDQ4OHpcIiBmaWxsPVwiIzAwMFwiLz5cbiAgICAgICAgPHBhdGggZD1cIm0xMS45NzggMThoLTAuNDgxNWMtMC4xMDc3IDAtMC4xOTUtMC4wODk1LTAuMTk1LTAuMnYtMC40MDE1YzAtMC4xMDU2LTAuMDgwMS0wLjE5MjQtMC4xODI1LTAuMjA0MS0wLjI0MzgtMC4wMjc3LTAuNDc5Ni0wLjA3OTQtMC43MDc1LTAuMTU1LTAuMjIxNC0wLjA3NDYtMC40MTMyMS0wLjE2My0wLjU3NTQzLTAuMjY1NS0wLjA3NDU1LTAuMDQ3MS0wLjEwMTY3LTAuMTQyNy0wLjA3MDg1LTAuMjI2N2wwLjMzMDI4LTAuOTAwNmMwLjA0NDUtMC4xMjEyIDAuMTg4LTAuMTY3NiAwLjI5ODUtMC4xMDQ5IDAuMTQ5MiAwLjA4NDUgMC4zMDk2IDAuMTU2OCAwLjQ4MSAwLjIxNjggMC4yNTU1IDAuMDg0NCAwLjUwMDcgMC4xMjY2IDAuNzM1NSAwLjEyNjYgMC4yMDE5IDAgMC4zNDYyLTAuMDIyMyAwLjQzMjctMC4wNjcgMC4wODY1LTAuMDQ5NyAwLjEyOTgtMC4xMjE3IDAuMTI5OC0wLjIxNiAwLTAuMTA5Mi0wLjA1NzctMC4xOTExLTAuMTczMS0wLjI0NTctMC4xMTEyLTAuMDU0Ni0wLjI5NjctMC4xMTQyLTAuNTU2Mi0wLjE3ODctMC4zMzM4LTAuMDg0NC0wLjYxMTktMC4xNzM4LTAuODM0NC0wLjI2ODEtMC4yMjI1LTAuMDk5My0wLjQxNjItMC4yNTgyLTAuNTgxLTAuNDc2Ni0wLjE2NDg0LTAuMjIzNC0wLjI0NzI0LTAuNTIzOC0wLjI0NzI0LTAuOTAxMSAwLTAuNDM2OSAwLjEyOTgtMC44MTE3IDAuMzg5MzQtMS4xMjQ1IDAuMjM0LTAuMjc3NCAwLjU1Ny0wLjQ2NSAwLjk2OTItMC41NjI3IDAuMDkyOC0wLjAyMiAwLjE2MTktMC4xMDQ2IDAuMTYxOS0wLjIwMjJ2LTAuNDQyNWMwLTAuMTEwNSAwLjA4NzMtMC4yIDAuMTk1LTAuMmgwLjQ4MTVjMC4xMDc3IDAgMC4xOTUgMC4wODk1IDAuMTk1IDAuMnYwLjQxNzJjMCAwLjEwMjIgMC4wNzUyIDAuMTg3MyAwLjE3MzYgMC4yMDMgMC4zNjExIDAuMDU3NSAwLjY3ODQgMC4xNjY0IDAuOTUxOCAwLjMyNjcgMC4wNzc2IDAuMDQ1NSAwLjEwODQgMC4xNDIzIDAuMDc4NiAwLjIyODdsLTAuMzA5MSAwLjg5NjljLTAuMDQwOSAwLjExODktMC4xNzc0IDAuMTY5Mi0wLjI4NzIgMC4xMTI0LTAuMzQ4Mi0wLjE4LTAuNjgwNS0wLjI3LTAuOTk3MS0wLjI3LTAuMzc1IDAtMC41NjI1IDAuMTA5Mi0wLjU2MjUgMC4zMjc2IDAgMC4xMDQzIDAuMDU1NyAwLjE4MzcgMC4xNjY5IDAuMjM4NCAwLjExMTMgMC4wNDk2IDAuMjk0NiAwLjEwNDIgMC41NTAxIDAuMTYzOCAwLjMyOTYgMC4wNzQ1IDAuNjA3OCAwLjE2MTMgMC44MzQ0IDAuMjYwNiAwLjIyNjYgMC4wOTQzIDAuNDIyMyAwLjI1MDcgMC41ODcyIDAuNDY5MiAwLjE2ODkgMC4yMTg0IDAuMjUzNCAwLjUxNjMgMC4yNTM0IDAuODkzNiAwIDAuNDE3LTAuMTI1NyAwLjc4MTktMC4zNzcxIDEuMDk0Ny0wLjIxODkgMC4yNzI2LTAuNTIyIDAuNDYzNC0wLjkwOTEgMC41NzI1LTAuMDg5IDAuMDI1MS0wLjE1MzkgMC4xMDU5LTAuMTUzOSAwLjIwMDV2MC40NjQyYzAgMC4xMTA1LTAuMDg3MyAwLjItMC4xOTUgMC4yelwiIGZpbGw9XCIjMDAwXCIvPlxuICAgICAgICA8cGF0aCBkPVwibTkuNTkyNCA1aDQuMjIxOGMxLjA4MTMgMCAwLjQ4NzUgMS42NjQgMC4wNDk3IDIuNjc5bC0wLjQ5ODIgMS4xNjQtMC4wNjczIDAuMTU3YzAuNDcxOS0wLjAyMzQ5IDAuOTM4NiAwLjExMDU0IDEuMzI5OSAwLjM4MiAxLjQ2MzkgMS4zNzM4IDIuNjUyIDMuMDI3OCAzLjQ5NzQgNC44NjkgMC4zMjk0IDAuNjgwOCAwLjQ2MDEgMS40NDQ4IDAuMzc2MyAyLjItMC4xMDA2IDEuOTI0OS0xLjYwNjMgMy40NTg4LTMuNDgzNyAzLjU0OWgtNi42M2MtMS44Nzc5LTAuMDg3NS0zLjM4NTgtMS42MTk4LTMuNDg4Ni0zLjU0NS0wLjA4MzgxLTAuNzU1MiAwLjA0Njg4LTEuNTE5MiAwLjM3NjM1LTIuMiAwLjg0NjM5LTEuODQzIDIuMDM2MS0zLjQ5ODUgMy41MDIyLTQuODczIDAuMzkxMzctMC4yNzE0NiAwLjg1Nzk5LTAuNDA1NDkgMS4zMjk5LTAuMzgybC0wLjA3OC0wLjE4MS0wLjQ4NzQ3LTEuMTRjLTAuNDM1ODMtMS4wMTUtMS4wMzI1LTIuNjc5IDAuMDQ5NzItMi42Nzl6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxuICAgICAgICA8cGF0aCBkPVwibTEzLjI5OCA5Ljc1YzAuNDE0MiAwIDAuNzUtMC4zMzU3OSAwLjc1LTAuNzVzLTAuMzM1OC0wLjc1LTAuNzUtMC43NXYxLjV6bS0zLjE5MDItMS41Yy0wLjQxNDE5IDAtMC43NDk5OCAwLjMzNTc5LTAuNzQ5OTggMC43NXMwLjMzNTc5IDAuNzUgMC43NDk5OCAwLjc1di0xLjV6bTUuODY5NSAwLjM5OTg4YzAuMzU4OS0wLjIwNjc2IDAuNDgyMy0wLjY2NTMzIDAuMjc1NS0xLjAyNDJzLTAuNjY1My0wLjQ4MjI3LTEuMDI0Mi0wLjI3NTUxbDAuNzQ4NyAxLjI5OTh6bS0yLjYxMiAwLjE5MzEyIDAuMTQ0NyAwLjczNTkxIDAuMDAyMi00LjNlLTQgLTAuMTQ2OS0wLjczNTQ4em0tMy4zMzU1LTAuMDI0IDAuMTU1My0wLjczMzc5LTAuMDA2OC0wLjAwMTM4LTAuMTQ4NSAwLjczNTE3em0tMS44NjQxLTEuNDc1NGMtMC4zNjI1NC0wLjIwMDM1LTAuODE4ODUtMC4wNjg4OC0xLjAxOTIgMC4yOTM2NS0wLjIwMDM2IDAuMzYyNTQtMC4wNjg4OSAwLjgxODg1IDAuMjkzNjUgMS4wMTkybDAuNzI1NTUtMS4zMTI5em01LjEzMjMgMC45MDY0M2gtMy4xOTAydjEuNWgzLjE5MDJ2LTEuNXptMS45MzA2LTAuODk5ODhjLTAuNjI3IDAuMzYxMTYtMS4zMDU2IDAuNjE2NzEtMi4wMTAyIDAuNzU3NGwwLjI5MzggMS40NzFjMC44NjUzLTAuMTcyOCAxLjY5NzYtMC40ODY0NSAyLjQ2NTEtMC45Mjg2bC0wLjc0ODctMS4yOTk4em0tMi4wMDggMC43NTY5N2MtMS4wMDM0IDAuMTk3MzItMi4wMzQ4IDAuMTg5OS0zLjAzNTUtMC4wMjE4NGwtMC4zMTA1NCAxLjQ2NzVjMS4xOTgzIDAuMjUzNTYgMi40MzM3IDAuMjYyNDYgMy42MzU0IDAuMDI2MTZsLTAuMjg5NC0xLjQ3MTh6bS0zLjA0MjMtMC4wMjMyNmMtMC43MDI3My0wLjE0MTg3LTEuMzgxMi0wLjM5MTI4LTIuMDEyNi0wLjc0MDI2bC0wLjcyNTU1IDEuMzEyOWMwLjc2NDgxIDAuNDIyNjcgMS41ODc3IDAuNzI1NDEgMi40NDEyIDAuODk3NzRsMC4yOTY5MS0xLjQ3MDN6XCIgZmlsbD1cIiMwMDBcIi8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICBgO1xuICAgIH0gZWxzZSBpZiAoZmFjdERldGFpbHMuaW5jbHVkZXMoJ01vcnRnYWdlIFBheW1lbnQnKSkge1xuICAgICAgLy8gSG91c2Ugd2l0aCBkb2xsYXIgc2lnblxuICAgICAgaWNvblN2ZyA9IGBcbiAgICAgICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gICAgICAgIDxzdmcgd2lkdGg9XCI2MDBweFwiIGhlaWdodD1cIjYwMHB4XCIgZmlsbD1cIiMwMDAwMDBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMjIuMzkgMTIyLjM5XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0ICAgIDxwYXRoIGQ9XCJtODYuNTEgNzIuMDQxdjM5LjY3M2gtMTcuMTUzdi00MC4yNDVoLTI5LjY3MXY0MC4yNDRoLTE3LjgxOXYtNTYuNTg3bDI5LjY0OS0yMC4zODhjMC4xMjgtNS4yOTIgMS4zNzktMTAuMzEgMy41NC0xNC44MTdsLTAuNDM4LTAuMzA4LTMuMDY0IDIuMTA2LTI0LjA0MyAxNi40NnYtOC4zNzloLTEzLjQ4MXYxNy42MDZsLTE0LjAzIDkuNjA1IDYuMDUxIDguODM2IDUuMTA2LTMuNDk2djU5LjMxOGg4Ni4wNDJsMC4wMi01MC43OTNjLTIuOTYzIDAuNzgxLTYuMDcgMS4xOTktOS4yNzMgMS4xOTktMC40ODMgM2UtMyAtMC45Ni0wLjAxNS0xLjQzNi0wLjAzNHpcIi8+XG5cdFx0ICAgIDxwYXRoIGQ9XCJtODkuMjcxIDAuNzE2Yy0xOC4yODcgMC0zMy4xMTMgMTQuODI2LTMzLjExMyAzMy4xMTQgMCAxOC4yODkgMTQuODI2IDMzLjExNCAzMy4xMTMgMzMuMTE0IDE4LjI4OSAwIDMzLjExNC0xNC44MjYgMzMuMTE0LTMzLjExNSAxZS0zIC0xOC4yODctMTQuODI0LTMzLjExMy0zMy4xMTQtMzMuMTEzem00LjA3NSA1NS40MjJ2Ny4zNjhoLTguNDA4di02Ljc5Yy00LjA1NC0wLjMyNi04LjEwNy0xLjUzNC0xMC42MDQtMy4ybC0wLjgzNC0wLjU1NSAyLjYzMy05LjE2MiAxLjUyMSAwLjg5OGMzLjA3OCAxLjgxNCA2Ljc2MiAyLjg1NyAxMC4xMDQgMi44NTcgMy42MjYgMCA1Ljk3MS0xLjYxMSA1Ljk3MS00LjEwMyAwLTEuNzA1LTAuODA3LTMuNTc2LTYuNjQ2LTUuNzA3LTYuMzYyLTIuMzAzLTEyLjg3NC01LjczLTEyLjg3NC0xMy42NzUgMC02LjM5NyA0LjIzOS0xMS4yNDkgMTEuMTQ2LTEyLjg3OXYtNy4wMzVoOC40MDd2Ni41MDZjMy4yNjUgMC4yNDUgNi4wODggMS4wMDMgOC43OTYgMi4zNTlsMS4wMjMgMC41MTItMi42MzcgOC45NzktMS44MjgtMC44MzhjLTEuNjM5LTAuNzY2LTQuMzg5LTIuMDQ3LTguNDUyLTIuMDQ3LTMuMjU5IDAtNS4yMDUgMS4yOTgtNS4yMDUgMy40NzggMCAxLjg5NyAxLjgyNSAzLjIzOCA3LjUxNiA1LjUxNCA4LjQ1MSAzLjE3IDEyLjA3MyA3LjM4MyAxMi4wNzMgMTQuMDczLTJlLTMgNi42NzYtNC41NTYgMTEuODUyLTExLjcwMiAxMy40NDd6XCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIGA7XG4gICAgfSBlbHNlIGlmIChmYWN0RGV0YWlscy5pbmNsdWRlcygnTW9udGhseSBDYXNoIEZsb3cnKSkge1xuICAgICAgLy8gQ2FzaCBmbG93IGljb25cbiAgICAgIGljb25TdmcgPSBgXG4gICAgICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIGZpbGw9XCIjMDAwMDAwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTIyLjU1IDEyMi41NVwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIyNS40NTQgNTUuMDIzIDYuNDQ2IDU1LjAyMyA2LjQ0NiA4My41NTUgMjUuNDU0IDczLjEzOVwiLz5cbiAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiNi40NDYgMTA5LjMzIDI1LjQ1NCAxMDkuMzMgMjUuNDU0IDkyLjcxNSA2LjQ0NiAxMDMuMTNcIi8+XG4gICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjU2LjU3NSAzNS43NTYgMzcuNTY3IDM1Ljc1NiAzNy41NjcgNjYuNSA1Ni41NzUgNTYuMDg0XCIvPlxuICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIzNy41NjcgMTA5LjMzIDU2LjU3NSAxMDkuMzMgNTYuNTc1IDc1LjY2MSAzNy41NjcgODYuMDc5XCIvPlxuICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI2OS42MDIgMTA5LjMzIDg4LjYwOCAxMDkuMzMgODguNjA4IDU4LjEwNSA2OS42MDIgNjguNTIyXCIvPlxuICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI4OC42MDggMTMuMjE3IDY5LjYwMiAxMy4yMTcgNjkuNjAyIDQ4Ljk0NSA4OC42MDggMzguNTI4XCIvPlxuICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI5Ni4zMzggMjIuOTQxIDEwMi43MyAzNS4yMiAwIDkxLjk0NiAwIDEwMS43NSAxMDYuNyA0Mi44MzcgMTEzLjM3IDU0LjMyNiAxMjIuNTUgMjkuNTYyXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIGA7XG4gICAgfSBlbHNlIGlmIChmYWN0RGV0YWlscy5pbmNsdWRlcygnTk9JJykpIHtcbiAgICAgIC8vIE5ldCBpY29uXG4gICAgICBpY29uU3ZnID0gYFxuICAgICAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgICAgICAgPHN2ZyBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJtMTEuOTQ4IDEuMjVoMC4xMDRjMC44OTg1LTNlLTUgMS42NDc3LTVlLTUgMi4yNDI1IDAuMDc5OTEgMC42Mjc4IDAuMDg0NDEgMS4xOTQ2IDAuMjcwMDggMS42NSAwLjcyNTU1IDAuNDU1NSAwLjQ1NTQ3IDAuNjQxMiAxLjAyMjMgMC43MjU2IDEuNjUwMSAwLjA1OTEgMC40Mzk2IDAuMDc0NSAwLjk2MzU3IDAuMDc4NSAxLjU2OTggMC42NDg1IDAuMDIwODEgMS4yMjY2IDAuMDU4NzMgMS43NDA0IDAuMTI3ODEgMS4xNzI0IDAuMTU3NjIgMi4xMjE0IDAuNDg5NzQgMi44Njk4IDEuMjM4MSAwLjc0ODMgMC43NDgzNyAxLjA4MDQgMS42OTczIDEuMjM4MSAyLjg2OTcgMC4xNTMxIDEuMTM5MiAwLjE1MzEgMi41OTQ4IDAuMTUzMSA0LjQzMjZ2MC4xMTI4YzAgMS44Mzc4IDAgMy4yOTM0LTAuMTUzMSA0LjQzMjYtMC4xNTc3IDEuMTcyNC0wLjQ4OTggMi4xMjE0LTEuMjM4MSAyLjg2OTgtMC43NDg0IDAuNzQ4My0xLjY5NzQgMS4wODA0LTIuODY5OCAxLjIzODEtMS4xMzkyIDAuMTUzMS0yLjU5NDggMC4xNTMxLTQuNDMyNiAwLjE1MzFoLTQuMTEyOGMtMS44Mzc4IDAtMy4yOTM0IDAtNC40MzI2LTAuMTUzMS0xLjE3MjQtMC4xNTc3LTIuMTIxNC0wLjQ4OTgtMi44Njk3LTEuMjM4MS0wLjc0ODM2LTAuNzQ4NC0xLjA4MDUtMS42OTc0LTEuMjM4MS0yLjg2OTgtMC4xNTMxNy0xLjEzOTItMC4xNTMxNi0yLjU5NDgtMC4xNTMxNC00LjQzMjZ2LTAuMTEyOGMtMmUtNSAtMS44Mzc4LTNlLTUgLTMuMjkzNCAwLjE1MzE0LTQuNDMyNiAwLjE1NzYyLTEuMTcyNCAwLjQ4OTc0LTIuMTIxNCAxLjIzODEtMi44Njk3IDAuNzQ4MzctMC43NDgzNiAxLjY5NzMtMS4wODA1IDIuODY5Ny0xLjIzODEgMC41MTM3Ny0wLjA2OTA4IDEuMDkxOS0wLjEwNyAxLjc0MDQtMC4xMjc4MSA0ZS0zIC0wLjYwNjI0IDAuMDE5NDEtMS4xMzAyIDAuMDc4NTEtMS41Njk4IDAuMDg0NDEtMC42Mjc3OSAwLjI3MDA4LTEuMTk0NiAwLjcyNTU1LTEuNjUwMXMxLjAyMjMtMC42NDExNCAxLjY1MDEtMC43MjU1NWMwLjU5NDc4LTAuMDc5OTYgMS4zNDQtMC4wNzk5NCAyLjI0MjUtMC4wNzk5MXptLTMuMTk2MiA0LjAwMThjMC4zNzgxMy0wLjAwMTc5IDAuNzc1MTQtMC4wMDE3OCAxLjE5MTgtMC4wMDE3OGg0LjExMjhjMC40MTY3IDAgMC44MTM3LTFlLTUgMS4xOTE4IDAuMDAxNzgtMC4wMDQyLTAuNTcwMzItMC4wMTgyLTEuMDAwNS0wLjA2NDctMS4zNDY0LTAuMDYyMS0wLjQ2MTQ2LTAuMTY5My0wLjY1ODk1LTAuMjk5Ni0wLjc4OTI3cy0wLjMyNzgtMC4yMzc1NC0wLjc4OTMtMC4yOTk1OGMtMC40ODMtMC4wNjQ5NC0xLjEzMDYtMC4wNjY1NC0yLjA5NDYtMC4wNjY1NHMtMS42MTE2IDAuMDAxNi0yLjA5NDYgMC4wNjY1NGMtMC40NjE0NiAwLjA2MjA0LTAuNjU4OTYgMC4xNjkyNi0wLjc4OTI3IDAuMjk5NTgtMC4xMzAzMiAwLjEzMDMyLTAuMjM3NTQgMC4zMjc4MS0wLjI5OTU4IDAuNzg5MjctMC4wNDY1IDAuMzQ1ODYtMC4wNjA1MyAwLjc3NjA3LTAuMDY0NzQgMS4zNDY0em0tMy4wNDEgMS42MzhjLTEuMDA2MSAwLjEzNTI3LTEuNTg1NyAwLjM4ODk0LTIuMDA5IDAuODEyMTUtMC40MjMyMSAwLjQyMzItMC42NzY4OCAxLjAwMjgtMC44MTIxNCAyLjAwODktMC4xMzgxNyAxLjAyNzYtMC4xMzk3NiAyLjM4MjQtMC4xMzk3NiA0LjI4OTJzMC4wMDE1OSAzLjI2MTUgMC4xMzk3NiA0LjI4OTJjMC4xMzUyNiAxLjAwNiAwLjM4ODkzIDEuNTg1NyAwLjgxMjE0IDIuMDA4OXMxLjAwMjkgMC42NzY5IDIuMDA5IDAuODEyMWMxLjAyNzcgMC4xMzgyIDIuMzgyMyAwLjEzOTggNC4yODkyIDAuMTM5OGg0YzEuOTA2OCAwIDMuMjYxNS0wLjAwMTYgNC4yODkyLTAuMTM5OCAxLjAwNi0wLjEzNTIgMS41ODU3LTAuMzg4OSAyLjAwODktMC44MTIxczAuNjc2OS0xLjAwMjkgMC44MTIxLTIuMDA4OWMwLjEzODItMS4wMjc3IDAuMTM5OC0yLjM4MjQgMC4xMzk4LTQuMjg5MnMtMC4wMDE2LTMuMjYxNS0wLjEzOTgtNC4yODkyYy0wLjEzNTItMS4wMDYxLTAuMzg4OS0xLjU4NTctMC44MTIxLTIuMDA4OS0wLjQyMzItMC40MjMyMS0xLjAwMjktMC42NzY4OC0yLjAwODktMC44MTIxNS0xLjAyNzctMC4xMzgxNi0yLjM4MjQtMC4xMzk3Ni00LjI4OTItMC4xMzk3NmgtNGMtMS45MDY4IDAtMy4yNjE1IDAuMDAxNi00LjI4OTIgMC4xMzk3NnptNi4yODkyIDIuMzYwMmMwLjQxNDIgMCAwLjc1IDAuMzM1NzkgMC43NSAwLjc1djAuMDEwMmMxLjA4ODggMC4yNzQzIDIgMS4xMzI4IDIgMi4zMjMxIDAgMC40MTQyLTAuMzM1OCAwLjc1LTAuNzUgMC43NXMtMC43NS0wLjMzNTgtMC43NS0wLjc1YzAtMC4zODQtMC40MjU4LTAuOTE2Ni0xLjI1LTAuOTE2NnMtMS4yNSAwLjUzMjYtMS4yNSAwLjkxNjZjMCAwLjM4NDEgMC40MjU4IDAuOTE2NyAxLjI1IDAuOTE2NyAxLjM4NDkgMCAyLjc1IDAuOTU5OCAyLjc1IDIuNDE2NyAwIDEuMTkwMy0wLjkxMTIgMi4wNDg4LTIgMi4zMjMxdjAuMDEwMmMwIDAuNDE0Mi0wLjMzNTggMC43NS0wLjc1IDAuNzVzLTAuNzUtMC4zMzU4LTAuNzUtMC43NXYtMC4wMTAyYy0xLjA4ODgtMC4yNzQzLTItMS4xMzI4LTItMi4zMjMxIDAtMC40MTQyIDAuMzM1NzktMC43NSAwLjc1LTAuNzUgMC40MTQyIDAgMC43NSAwLjMzNTggMC43NSAwLjc1IDAgMC4zODQgMC40MjU4IDAuOTE2NiAxLjI1IDAuOTE2NnMxLjI1LTAuNTMyNiAxLjI1LTAuOTE2NmMwLTAuMzg0MS0wLjQyNTgtMC45MTY3LTEuMjUtMC45MTY3LTEuMzg0OSAwLTIuNzUtMC45NTk3LTIuNzUtMi40MTY3IDAtMS4xOTAzIDAuOTExMi0yLjA0ODggMi0yLjMyMzF2LTAuMDEwMmMwLTAuNDE0MjEgMC4zMzU4LTAuNzUgMC43NS0wLjc1elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgYDtcbiAgICB9IGVsc2UgaWYgKGZhY3REZXRhaWxzLmluY2x1ZGVzKCdUb3RhbCBFeHBlbnNlcycpKSB7XG4gICAgICAvLyBFeHBlbnNlIGljb25cbiAgICAgIGljb25TdmcgPSBgXG4gICAgICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbiBsaW5lLWNvbG9yXCIgZmlsbD1cIiMwMDAwMDBcIiBzdHJva2U9XCIjMDAwMDAwXCIgZGF0YS1uYW1lPVwiTGluZSBDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxnIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICA8cGF0aCBkPVwiTTUsMTNINy41QTEuNSwxLjUsMCwwLDAsOSwxMS41SDlBMS41LDEuNSwwLDAsMCw3LjUsMTBoLTFBMS41LDEuNSwwLDAsMSw1LDguNUg1QTEuNSwxLjUsMCwwLDEsNi41LDdIOVwiIHN0cm9rZT1cIiMwMDBcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNyw3VjZtMCw4VjEzbTUsMmgzbS0yLTRoMlwiIHN0cm9rZT1cIiMwMDBcIiBkYXRhLW5hbWU9XCJzZWNvbmRhcnlcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNSwxOHYzbDIuMzMtMSwyLjMzLDFMMTIsMjBsMi4zNCwxLDIuMzMtMUwxOSwyMVY0YTEsMSwwLDAsMC0xLTFIMTFcIiBzdHJva2U9XCIjMDAwMDAwMDAwXCIvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgYDtcbiAgICB9IGVsc2UgaWYgKGZhY3REZXRhaWxzLmluY2x1ZGVzKCdBbm51YWwgQ2FzaCBGbG93JykpIHtcbiAgICAgIC8vIENhbGVuZGFyIGljb25cbiAgICAgIGljb25TdmcgPSBgXG4gICAgICAgIDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjAwcHhcIiBoZWlnaHQ9XCIyMDBweFwiIGZpbGw9XCIjMDAwMDAwXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiAgIFxuICAgICAgICA8cGF0aCBkPVwiTTE1LjY3MywzOTkuMTUxVjkwLjkwNkgxMjIuMDRWMTguODA4SDczLjQ1NHY1Ni40MjVIMHYzMzkuNTkyaDMxNi4wODJ2LTE1LjY3M0gxNS42NzN6IE04OS4xMjgsMzQuNDgyaDE3LjI0djQwLjc1MSBoLTE3LjI0VjM0LjQ4MnpcIi8+ICAgICBcbiAgICAgICAgPHBhdGggZD1cIm0zNjAuMTcgNzUuMjMzdi01Ni40MjVoLTQ4LjU4N3Y1Ni40MjVoLTE2Ni4wNHYxNS42NzNoMjcyLjQxdjQ3LjAyaC0zNzguNzh2MTUuNjc0aDM5NC40NXYtNzguMzY3aC03My40NTl6bS0xNS42NzMgMGgtMTcuMjR2LTQwLjc1MWgxNy4yNHY0MC43NTF6XCIvPiAgICAgXG4gICAgICAgIDxwYXRoIGQ9XCJtNDMzLjYzIDMyMS4xNnYtMTQ0LjA1aC0xNS42NzN2MTQ0LjA0Yy00My44NzIgMy45NzUtNzguMzY3IDQwLjk0Mi03OC4zNjcgODUuODMyIDAgNDcuNTMzIDM4LjY3MiA4Ni4yMDQgODYuMjA0IDg2LjIwNHM4Ni4yMDMtMzguNjcgODYuMjAzLTg2LjIwM2MwLTQ0Ljg5LTM0LjQ5NS04MS44NTgtNzguMzY3LTg1LjgzMnptLTcuODM3IDE1Ni4zNmMtMzguODkxIDAtNzAuNTMxLTMxLjY0LTcwLjUzMS03MC41MzFzMzEuNjM5LTcwLjUzMSA3MC41MzEtNzAuNTMxIDcwLjUzMSAzMS42NCA3MC41MzEgNzAuNTMxYzAgMzguODkyLTMxLjY0IDcwLjUzMS03MC41MzEgNzAuNTMxelwiLz4gICAgIFxuICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI0MzMuNjMgMzk5LjE1IDQzMy42MyAzNTkuOTcgNDE3Ljk2IDM1OS45NyA0MTcuOTYgNDE0LjgyIDQ3Mi44MiA0MTQuODIgNDcyLjgyIDM5OS4xNVwiLz4gICAgIFxuICAgICAgICA8cGF0aCBkPVwibTE1Ni43MyAxNzkuNzJ2NDcuMDJoNDcuMDJ2LTQ3LjAyaC00Ny4wMnptMzEuMzQ3IDMxLjM0N2gtMTUuNjczdi0xNS42NzNoMTUuNjczdjE1LjY3M3pcIi8+ICAgICBcbiAgICAgICAgPHBhdGggZD1cIm0yMjkuODggMTc5LjcydjQ3LjAyaDQ3LjAydi00Ny4wMmgtNDcuMDJ6bTMxLjM0NyAzMS4zNDdoLTE1LjY3M3YtMTUuNjczaDE1LjY3M3YxNS42NzN6XCIvPiAgICAgXG4gICAgICAgIDxwYXRoIGQ9XCJtMzAzLjAyIDE3OS43MnY0Ny4wMmg0Ny4wMnYtNDcuMDJoLTQ3LjAyem0zMS4zNDcgMzEuMzQ3aC0xNS42NzN2LTE1LjY3M2gxNS42NzN2MTUuNjczelwiLz4gICAgIFxuICAgICAgICA8cGF0aCBkPVwibTgzLjU5IDI1Mi44NnY0Ny4wMmg0Ny4wMnYtNDcuMDJoLTQ3LjAyem0zMS4zNDcgMzEuMzQ3aC0xNS42NzR2LTE1LjY3M2gxNS42NzN2MTUuNjczelwiLz4gICAgIFxuICAgICAgICA8cGF0aCBkPVwibTE1Ni43MyAyNTIuODZ2NDcuMDJoNDcuMDJ2LTQ3LjAyaC00Ny4wMnptMzEuMzQ3IDMxLjM0N2gtMTUuNjczdi0xNS42NzNoMTUuNjczdjE1LjY3M3pcIi8+ICAgICBcbiAgICAgICAgPHBhdGggZD1cIm0yMjkuODggMjUyLjg2djQ3LjAyaDQ3LjAydi00Ny4wMmgtNDcuMDJ6bTMxLjM0NyAzMS4zNDdoLTE1LjY3M3YtMTUuNjczaDE1LjY3M3YxNS42NzN6XCIvPiAgICAgXG4gICAgICAgIDxwYXRoIGQ9XCJtMzAzLjAyIDI1Mi44NnY0Ny4wMmg0Ny4wMnYtNDcuMDJoLTQ3LjAyem0zMS4zNDcgMzEuMzQ3aC0xNS42NzN2LTE1LjY3M2gxNS42NzN2MTUuNjczelwiLz4gICAgIFxuICAgICAgICA8cGF0aCBkPVwibTgzLjU5IDMyNi4wMXY0Ny4wMmg0Ny4wMnYtNDcuMDJoLTQ3LjAyem0zMS4zNDcgMzEuMzQ3aC0xNS42NzR2LTE1LjY3M2gxNS42NzN2MTUuNjczelwiLz4gICAgIFxuICAgICAgICA8cGF0aCBkPVwibTE1Ni43MyAzMjYuMDF2NDcuMDJoNDcuMDJ2LTQ3LjAyaC00Ny4wMnptMzEuMzQ3IDMxLjM0N2gtMTUuNjczdi0xNS42NzNoMTUuNjczdjE1LjY3M3pcIi8+ICAgICBcbiAgICAgICAgPHBhdGggZD1cIm0yMjkuODggMzI2LjAxdjQ3LjAyaDQ3LjAydi00Ny4wMmgtNDcuMDJ6bTMxLjM0NyAzMS4zNDdoLTE1LjY3M3YtMTUuNjczaDE1LjY3M3YxNS42NzN6XCIvPiAgIDwvc3ZnPlxuICAgICAgYDtcbiAgICB9IGVsc2UgaWYgKGZhY3REZXRhaWxzLmluY2x1ZGVzKCdHUk0nKSkge1xuICAgICAgLy8gQ2FsY3VsYXRvciBpY29uXG4gICAgICBpY29uU3ZnID0gYFxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHJvbGU9XCJpbWdcIiBjbGFzcz1cIkljb24tYzExbi04LTEwNi0wX19zYy0xM2xsbW1sLTAgaUJKeWJRXCI+XG4gICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNCA0SDhhMiAyIDAgMDAtMiAydjIwYTIgMiAwIDAwMiAyaDE2YTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0yem0wIDIySDhWNmgxNnYyMHpcIj48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDloMTJ2M0gxMHpNMTAgMTRoM3YzaC0zek0xNC41IDE0aDN2M2gtM3pNMTkgMTRoM3YzaC0zek0xMCAxOGgzdjNoLTN6TTE0LjUgMThoM3YzaC0zek0xOSAxOGgzdjNoLTN6TTE5IDIyaDN2M2gtM3pcIj48L3BhdGg+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIGA7XG4gICAgfSBlbHNlIGlmIChmYWN0RGV0YWlscy5pbmNsdWRlcygnQ2FwIFJhdGUnKSkge1xuICAgICAgLy8gUGVyY2VudGFnZSBpY29uXG4gICAgICBpY29uU3ZnID0gYFxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHJvbGU9XCJpbWdcIiBjbGFzcz1cIkljb24tYzExbi04LTEwNi0wX19zYy0xM2xsbW1sLTAgaUJKeWJRXCI+XG4gICAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMyA4LjVhNC41IDQuNSAwIDExLTkgMCA0LjUgNC41IDAgMDE5IDB6TTExIDguNWEyLjUgMi41IDAgMTAtNSAwIDIuNSAyLjUgMCAwMDUgMHpNMjggMjMuNWE0LjUgNC41IDAgMTEtOSAwIDQuNSA0LjUgMCAwMTkgMHpNMjYgMjMuNWEyLjUgMi41IDAgMTAtNSAwIDIuNSAyLjUgMCAwMDUgMHpNOC43NiAyNS42N2wxNS42OC0xOC40LTEuNTItMS4zLTE1LjY4IDE4LjR6XCI+PC9wYXRoPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICBgO1xuICAgIH0gZWxzZSBpZiAoZmFjdERldGFpbHMuaW5jbHVkZXMoJ0Nhc2ggb24gQ2FzaCBSZXR1cm4nKSkge1xuICAgICAgLy8gUmV0dXJuIGFycm93IGljb25cbiAgICAgIGljb25TdmcgPSBgXG4gICAgICAgIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAyNCAyNFwiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNMjEuNyw3LjNjLTAuNC0wLjQtMS0wLjQtMS40LDBMMTQsMTMuNkw5LjcsOS4zQzkuNSw5LjEsOS4zLDksOSw5QzguNyw5LDguNSw5LjEsOC4zLDkuM2wtNiw2QzIuMSwxNS41LDIsMTUuNywyLDE2YzAsMC42LDAuNCwxLDEsMWMwLjMsMCwwLjUtMC4xLDAuNy0wLjNMOSwxMS40bDQuMyw0LjNjMC4xLDAuMSwwLjIsMC4yLDAuMywwLjJDMTMuNywxNiwxMy45LDE2LDE0LDE2YzAuMiwwLDAuNS0wLjEsMC42LTAuM2MwLDAsMCwwLDAuMSwwYzAsMCwwLDAsMCwwczAsMCwwLDBsNy03QzIyLjEsOC4zLDIyLjEsNy43LDIxLjcsNy4zelwiPjwvcGF0aD48L2c+PC9zdmc+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBpY29uU3ZnO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZhY3QgaXRlbSBmb3IgZGlzcGxheWluZyBpbiB0aGUgZmFjdHMgbGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZhY3REZXRhaWxzIC0gVGV4dCBjb250ZW50IG9mIHRoZSBmYWN0LlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIGZhY3QgaXRlbSBlbGVtZW50LlxuICAgKi9cbiAgY3JlYXRlRmFjdEl0ZW0oZmFjdERldGFpbHMpIHtcbiAgICAvLyBDcmVhdGUgY29udGFpbmVyXG4gICAgY29uc3QgZmFjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYWN0SXRlbS5jbGFzc05hbWUgPSAnc2Mtak5KTlFwIGNqVnJHbCBwcm9wZmluZGVyLXByby1yZXN1bHQtaXRlbSc7XG4gICAgXG4gICAgLy8gR2V0IHRoZSBhcHByb3ByaWF0ZSBpY29uIGJhc2VkIG9uIHRoZSBmYWN0IGNvbnRlbnRcbiAgICBjb25zdCBpY29uU3ZnID0gdGhpcy5nZXRJY29uRm9yRmFjdChmYWN0RGV0YWlscyk7XG4gICAgXG4gICAgLy8gVXNlIFppbGxvdydzIHN0eWxpbmcgZm9yIGNvbnNpc3RlbmN5XG4gICAgZmFjdEl0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInNjLWhsTEJSeSBqWGNyYkNcIj5cbiAgICAgICAgJHtpY29uU3ZnfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cIlRleHQtYzExbi04LTEwNi0wX19zYy1haWFpMjQtMCBzYy1iVFRFTE0gaXZxUUZ0IGpoUmVkWVwiPiR7ZmFjdERldGFpbHN9PC9zcGFuPlxuICAgIGA7XG4gICAgXG4gICAgcmV0dXJuIGZhY3RJdGVtO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJTWFuYWdlcjsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQmFzaWMgaW1wbGVtZW50YXRpb24gb2YgYW4gZXZlbnQgZW1pdHRlciBmb3IgcHViL3N1YiBwYXR0ZXJuLlxuICovXG5cbi8qKlxuICogQmFzaWMgaW1wbGVtZW50YXRpb24gb2YgYW4gZXZlbnQgZW1pdHRlciBmb3IgcHViL3N1YiBwYXR0ZXJuLlxuICovXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IEV2ZW50RW1pdHRlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEluaXRpYWxpemUgZXZlbnQgbGlzdGVuZXJzIG1hcFxuICAgIHRoaXMuZXZlbnRzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gRXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBFdmVudCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RnVuY3Rpb259IFVuc3Vic2NyaWJlIGZ1bmN0aW9uLlxuICAgKi9cbiAgb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgLy8gSWYgdGhpcyBldmVudCBkb2Vzbid0IGV4aXN0IHlldCwgY3JlYXRlIGl0IHdpdGggYW4gZW1wdHkgYXJyYXkgb2YgbGlzdGVuZXJzXG4gICAgaWYgKCF0aGlzLmV2ZW50cy5oYXMoZXZlbnQpKSB7XG4gICAgICB0aGlzLmV2ZW50cy5zZXQoZXZlbnQsIFtdKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWRkIHRoZSBsaXN0ZW5lciB0byB0aGUgZXZlbnQncyBhcnJheVxuICAgIHRoaXMuZXZlbnRzLmdldChldmVudCkucHVzaChsaXN0ZW5lcik7XG4gICAgXG4gICAgLy8gUmV0dXJuIGEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgbGlzdGVuZXJcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5vZmYoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYW4gZXZlbnQgb25jZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gRXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBFdmVudCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RnVuY3Rpb259IFVuc3Vic2NyaWJlIGZ1bmN0aW9uLlxuICAgKi9cbiAgb25jZShldmVudCwgbGlzdGVuZXIpIHtcbiAgICAvLyBDcmVhdGUgYSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyBpdHNlbGYgYWZ0ZXIgZmlyc3QgZXhlY3V0aW9uXG4gICAgY29uc3Qgb25jZVdyYXBwZXIgPSAoLi4uYXJncykgPT4ge1xuICAgICAgLy8gUmVtb3ZlIHRoaXMgd3JhcHBlclxuICAgICAgdGhpcy5vZmYoZXZlbnQsIG9uY2VXcmFwcGVyKTtcbiAgICAgIC8vIENhbGwgb3JpZ2luYWwgbGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgXG4gICAgLy8gU3RvcmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIGZvciByZW1vdmFsXG4gICAgb25jZVdyYXBwZXIub3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIFxuICAgIC8vIFJlZ2lzdGVyIHRoZSB3cmFwcGVkIGxpc3RlbmVyXG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnQsIG9uY2VXcmFwcGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIGFuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclRvUmVtb3ZlIC0gTGlzdGVuZXIgZnVuY3Rpb24gdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJuIHtFdmVudEVtaXR0ZXJ9IHRoaXMsIGZvciBjaGFpbmluZy5cbiAgICovXG4gIG9mZihldmVudCwgbGlzdGVuZXJUb1JlbW92ZSkge1xuICAgIC8vIElmIG5vIGV2ZW50IGV4aXN0cywgcmV0dXJuIGVhcmx5XG4gICAgaWYgKCF0aGlzLmV2ZW50cy5oYXMoZXZlbnQpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLy8gR2V0IGN1cnJlbnQgbGlzdGVuZXJzXG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5ldmVudHMuZ2V0KGV2ZW50KTtcbiAgICBcbiAgICAvLyBGaWx0ZXIgb3V0IHRoZSBsaXN0ZW5lciB0byByZW1vdmVcbiAgICBjb25zdCBmaWx0ZXJlZExpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4ge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyICE9PSBsaXN0ZW5lclRvUmVtb3ZlICYmIFxuICAgICAgICAgICAgIGxpc3RlbmVyLm9yaWdpbmFsTGlzdGVuZXIgIT09IGxpc3RlbmVyVG9SZW1vdmU7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gSWYgd2UgaGF2ZSByZW1haW5pbmcgbGlzdGVuZXJzLCB1cGRhdGUgdGhlIGFycmF5XG4gICAgaWYgKGZpbHRlcmVkTGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZXZlbnRzLnNldChldmVudCwgZmlsdGVyZWRMaXN0ZW5lcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UgZGVsZXRlIHRoZSBldmVudCBlbnRpcmVseVxuICAgICAgdGhpcy5ldmVudHMuZGVsZXRlKGV2ZW50KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gRXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHsuLi4qfSBhcmdzIC0gQXJndW1lbnRzIHRvIHBhc3MgdG8gbGlzdGVuZXJzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBlbWl0KGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgLy8gSWYgbm8gZXZlbnQgZXhpc3RzLCByZXR1cm4gZmFsc2VcbiAgICBpZiAoIXRoaXMuZXZlbnRzLmhhcyhldmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgLy8gR2V0IGFuZCBjYWxsIGFsbCBsaXN0ZW5lcnNcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgaW4gJHtldmVudH0gZXZlbnQgbGlzdGVuZXI6YCwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IGV2ZW50IC0gT3B0aW9uYWwgZXZlbnQgbmFtZSwgaWYgbm90IHByb3ZpZGVkIGFsbCBldmVudHMgYXJlIGNsZWFyZWQuXG4gICAqIEByZXR1cm4ge0V2ZW50RW1pdHRlcn0gdGhpcywgZm9yIGNoYWluaW5nLlxuICAgKi9cbiAgcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICAvLyBSZW1vdmUgc3BlY2lmaWMgZXZlbnRcbiAgICAgIHRoaXMuZXZlbnRzLmRlbGV0ZShldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnRzXG4gICAgICB0aGlzLmV2ZW50cy5jbGVhcigpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGxpc3RlbmVycyBmb3IgYW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIEV2ZW50IG5hbWUuXG4gICAqIEByZXR1cm4ge0FycmF5PEZ1bmN0aW9uPn0gQXJyYXkgb2YgbGlzdGVuZXJzLlxuICAgKi9cbiAgbGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRzLmhhcyhldmVudCkgPyBbLi4udGhpcy5ldmVudHMuZ2V0KGV2ZW50KV0gOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdGVuZXIgY291bnQgZm9yIGFuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCBuYW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IE51bWJlciBvZiBsaXN0ZW5lcnMuXG4gICAqL1xuICBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRzLmhhcyhldmVudCkgPyB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpLmxlbmd0aCA6IDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBldmVudCBuYW1lcy5cbiAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gQXJyYXkgb2YgZXZlbnQgbmFtZXMuXG4gICAqL1xuICBldmVudE5hbWVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZXZlbnRzLmtleXMoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyOyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBVdGlsaXR5IGZvciBmb3JtYXR0aW5nIGFuZCBwYXJzaW5nIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFV0aWxpdHkgZm9yIGZvcm1hdHRpbmcgYW5kIHBhcnNpbmcgdmFsdWVzLlxuICovXG5jbGFzcyBGb3JtYXR0ZXJVdGlsIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBGb3JtYXR0ZXJVdGlsLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gQ3JlYXRlIHJldXNhYmxlIGZvcm1hdHRlcnNcbiAgICB0aGlzLmN1cnJlbmN5Rm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgY3VycmVuY3k6ICdVU0QnLFxuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwXG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5wZXJjZW50Rm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgIHN0eWxlOiAncGVyY2VudCcsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDEsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDFcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLm51bWJlckZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDFcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgYSB2YWx1ZSBhcyBjdXJyZW5jeS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVmFsdWUgdG8gZm9ybWF0LlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEZvcm1hdHRlZCBjdXJyZW5jeSBzdHJpbmcuXG4gICAqL1xuICBmb3JtYXRDdXJyZW5jeSh2YWx1ZSkge1xuICAgIC8vIEhhbmRsZSBpbnZhbGlkIHZhbHVlc1xuICAgIGNvbnN0IG51bVZhbHVlID0gdGhpcy5lbnN1cmVOdW1iZXIodmFsdWUpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbmN5Rm9ybWF0dGVyLmZvcm1hdChudW1WYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgdmFsdWUgYXMgcGVyY2VudGFnZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVmFsdWUgdG8gZm9ybWF0ICgwLTEwMCkuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gRm9ybWF0dGVkIHBlcmNlbnRhZ2Ugc3RyaW5nLlxuICAgKi9cbiAgZm9ybWF0UGVyY2VudCh2YWx1ZSkge1xuICAgIC8vIEhhbmRsZSBpbnZhbGlkIHZhbHVlc1xuICAgIGNvbnN0IG51bVZhbHVlID0gdGhpcy5lbnN1cmVOdW1iZXIodmFsdWUpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgZnJvbSBwZXJjZW50YWdlICgwLTEwMCkgdG8gZGVjaW1hbCAoMC0xKVxuICAgIGNvbnN0IGRlY2ltYWxWYWx1ZSA9IG51bVZhbHVlIC8gMTAwO1xuICAgIFxuICAgIHJldHVybiB0aGlzLnBlcmNlbnRGb3JtYXR0ZXIuZm9ybWF0KGRlY2ltYWxWYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgdmFsdWUgYXMgYSBkZWNpbWFsIG51bWJlci5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVmFsdWUgdG8gZm9ybWF0LlxuICAgKiBAcGFyYW0ge251bWJlcj19IGRlY2ltYWxzIC0gTnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEZvcm1hdHRlZCBudW1iZXIgc3RyaW5nLlxuICAgKi9cbiAgZm9ybWF0TnVtYmVyKHZhbHVlLCBkZWNpbWFscyA9IDEpIHtcbiAgICAvLyBIYW5kbGUgaW52YWxpZCB2YWx1ZXNcbiAgICBjb25zdCBudW1WYWx1ZSA9IHRoaXMuZW5zdXJlTnVtYmVyKHZhbHVlKTtcbiAgICBcbiAgICBpZiAoZGVjaW1hbHMgIT09IHRoaXMubnVtYmVyRm9ybWF0dGVyLnJlc29sdmVkT3B0aW9ucygpLm1heGltdW1GcmFjdGlvbkRpZ2l0cykge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IGZvcm1hdHRlciB3aXRoIHRoZSBzcGVjaWZpZWQgZGVjaW1hbHNcbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCxcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFsc1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KG51bVZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMubnVtYmVyRm9ybWF0dGVyLmZvcm1hdChudW1WYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBtb25leSB2YWx1ZSBmcm9tIHRleHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBjb250YWluaW5nIGEgbW9uZXkgdmFsdWUuXG4gICAqIEByZXR1cm4ge251bWJlcn0gUGFyc2VkIG51bWVyaWMgdmFsdWUuXG4gICAqL1xuICBwYXJzZU1vbmV5VmFsdWUodGV4dCkge1xuICAgIGlmICghdGV4dCkgcmV0dXJuIDA7XG4gICAgXG4gICAgLy8gVHJ5IHRvIGV4dHJhY3QgdXNpbmcgcmVnZXggZm9yIG1vbmV5IHBhdHRlcm5cbiAgICBjb25zdCBtb25leVBhdHRlcm4gPSAvXFwkKFswLTksLl0rKS87XG4gICAgY29uc3QgbWF0Y2ggPSBTdHJpbmcodGV4dCkubWF0Y2gobW9uZXlQYXR0ZXJuKTtcbiAgICBcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIC8vIFJlbW92ZSBjb21tYXMgYW5kIGNvbnZlcnQgdG8gbnVtYmVyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaFsxXS5yZXBsYWNlKC8sL2csICcnKSkgfHwgMDtcbiAgICB9XG4gICAgXG4gICAgLy8gRmFsbGJhY2s6IGp1c3QgdHJ5IHRvIHJlbW92ZSAkIGFuZCBjb21tYXMgZnJvbSB0aGUgd2hvbGUgc3RyaW5nXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoU3RyaW5nKHRleHQpLnJlcGxhY2UoL1skLF0vZywgJycpKSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZSB2YWx1ZSBpcyBhIHZhbGlkIG51bWJlci5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFZhbGlkIG51bWJlciBvciAwLlxuICAgKi9cbiAgZW5zdXJlTnVtYmVyKHZhbHVlKSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgcmV0dXJuICFpc05hTihudW0pID8gbnVtIDogMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZXJVdGlsOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSBaaWxsb3cgcHJvcGVydHkgYW5hbHlzaXMgZXh0ZW5zaW9uLlxuICovXG5cbmltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvYXBwLWNvbnRyb2xsZXIuanMnO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkLlxuICovXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuICAvLyBDaGVjayBpZiB3ZSdyZSBvbiBhIFppbGxvdyBwcm9wZXJ0eSBwYWdlXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnemlsbG93LmNvbS9ob21lZGV0YWlscycpKSB7XG4gICAgY29uc29sZS5sb2coJ1Byb3BGaW5kZXIgUHJvOiBQcm9wZXJ0eSBwYWdlIGRldGVjdGVkJyk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGFuZCBpbml0aWFsaXplIHRoZSBhcHAgY29udHJvbGxlclxuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHBDb250cm9sbGVyKCk7XG4gICAgXG4gICAgLy8gR2l2ZSB0aGUgcGFnZSB0aW1lIHRvIGZ1bGx5IGxvYWRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFwcC5pbml0aWFsaXplKCk7XG4gICAgfSwgMTUwMCk7XG4gIH1cbn1cblxuLy8gUnVuIHRoZSBhcHAgd2hlbiB0aGUgcGFnZSBpcyBmdWxseSBsb2FkZWRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdGlhbGl6ZUFwcCk7Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJFdmVudEVtaXR0ZXIiLCJQcm9wZXJ0eSIsIkludmVzdG1lbnRBc3N1bXB0aW9ucyIsIlByb3BlcnR5RGF0YUV4dHJhY3RvciIsIkludmVzdG1lbnRDYWxjdWxhdG9yIiwiU3RvcmFnZVNlcnZpY2UiLCJVSU1hbmFnZXIiLCJBcHBDb250cm9sbGVyIiwiZXZlbnRzIiwicHJvcGVydHlFeHRyYWN0b3IiLCJjYWxjdWxhdG9yIiwic3RvcmFnZSIsInVpIiwiY3VycmVudFByb3BlcnR5IiwiYXNzdW1wdGlvbnMiLCJoYW5kbGVQcm9wZXJ0eUlucHV0IiwiYmluZCIsImhhbmRsZVNldHRpbmdzVXBkYXRlIiwiX2luaXRpYWxpemUiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImxvYWRBc3N1bXB0aW9ucyIsImV4dHJhY3RQcm9wZXJ0eSIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJpbml0aWFsaXplIiwiZW1pdCIsInVwZGF0ZUFuYWx5c2lzIiwiX3RoaXMiLCJvbiIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJhY3Rpb24iLCJvcHRpb25zIiwib2JzZXJ2ZVVybENoYW5nZXMiLCJwcm9wZXJ0eURhdGEiLCJ1cGRhdGUiLCJzYXZlUHJvcGVydHkiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwiYW5hbHlzaXNSZXN1bHRzIiwiYW5hbHl6ZSIsIl90aGlzMiIsImN1cnJlbnRVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZXRJbnRlcnZhbCIsImlzUHJvcGVydHlQYWdlIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cmwiLCJpbmNsdWRlcyIsIl9vcHRpb25zJGludGVyZXN0UmF0ZSIsIl9vcHRpb25zJGxvYW5UZXJtIiwiX29wdGlvbnMkZG93blBheW1lbnQiLCJfb3B0aW9ucyRjbG9zaW5nQ29zdHMiLCJfb3B0aW9ucyRwcm9wZXJ0eVRheFIiLCJfb3B0aW9ucyRpbnN1cmFuY2VSYXQiLCJfb3B0aW9ucyRtYWludGVuYW5jZVIiLCJfb3B0aW9ucyRwcm9wZXJ0eU1hbmEiLCJfb3B0aW9ucyR2YWNhbmN5UmF0ZSIsInVuZGVmaW5lZCIsImRlZmF1bHRzIiwiaW50ZXJlc3RSYXRlIiwibG9hblRlcm0iLCJkb3duUGF5bWVudCIsImNsb3NpbmdDb3N0cyIsInByb3BlcnR5VGF4UmF0ZSIsImluc3VyYW5jZVJhdGUiLCJtYWludGVuYW5jZVJhdGUiLCJwcm9wZXJ0eU1hbmFnZW1lbnRSYXRlIiwidmFjYW5jeVJhdGUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlTnVtYmVyIiwiZGVmYXVsdFZhbHVlIiwibWluIiwibWF4IiwiTUFYX1ZBTFVFIiwibnVtIiwicGFyc2VGbG9hdCIsInRvSlNPTiIsImdldCIsImZyb21KU09OIiwianNvbiIsImRhdGEiLCJwcmljZSIsInJlbnRFc3RpbWF0ZSIsInJlcGFpckNvc3QiLCJtb250aGx5SW5jb21lIiwiYWRkcmVzcyIsImdldEFkanVzdGVkUHJpY2UiLCJnZXRBbm51YWxJbmNvbWUiLCJjYWxjdWxhdGVNZXRyaWNzIiwicHJvcGVydHkiLCJhZGp1c3RlZFByaWNlIiwiYW5udWFsSW5jb21lIiwiZXhwZW5zZXMiLCJjYWxjdWxhdGVFeHBlbnNlcyIsInRvdGFsQW5udWFsRXhwZW5zZXMiLCJ0b3RhbCIsIm5ldE9wZXJhdGluZ0luY29tZSIsImNhcFJhdGUiLCJ0b3RhbENhc2hOZWVkZWQiLCJsb2FuQW1vdW50IiwibW9ydGdhZ2VQYXltZW50IiwiY2FsY3VsYXRlTW9ydGdhZ2VQYXltZW50IiwiYW5udWFsTW9ydGdhZ2VQYXltZW50IiwiYW5udWFsQ2FzaEZsb3ciLCJtb250aGx5Q2FzaEZsb3ciLCJjYXNoT25DYXNoIiwiZ3Jvc3NSZW50TXVsdGlwbGllciIsInByb3BlcnR5VGF4ZXMiLCJpbnN1cmFuY2UiLCJtYWludGVuYW5jZSIsInByb3BlcnR5TWFuYWdlbWVudCIsInZhY2FuY3kiLCJtb250aGx5SW50ZXJlc3QiLCJudW1QYXltZW50cyIsInBheW1lbnQiLCJNYXRoIiwicG93IiwiZm9ybWF0UmVzdWx0cyIsIm1ldHJpY3MiLCJmb3JtYXRDdXJyZW5jeSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0IiwiZm9ybWF0UGVyY2VudCIsInRvRml4ZWQiLCJmb3JtYXRSYXRpbyIsImNvbmNhdCIsInNlbGVjdG9ycyIsIl9vYmplY3RTcHJlYWQiLCJyZW50WmVzdGltYXRlIiwicmVudFplc3RpbWF0ZVZhbHVlIiwicmVudFplc3RpbWF0ZVRleHQiLCJleHRyYWN0UHJpY2UiLCJleHRyYWN0UmVudEVzdGltYXRlIiwiZXh0cmFjdEFkZHJlc3MiLCJwcmljZUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJzZU1vbmV5VmFsdWUiLCJ0ZXh0Q29udGVudCIsInJlbnRDb250YWluZXIiLCJyZW50VmFsdWUiLCJ3YXJuIiwicmVudEVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbnRUZXh0IiwicmVudFBhdHRlcm4iLCJwYWdlVGV4dCIsImJvZHkiLCJpbm5lclRleHQiLCJtYXRjaCIsImFkZHJlc3NFbGVtZW50IiwidHJpbSIsInRleHQiLCJtb25leVBhdHRlcm4iLCJyZXBsYWNlIiwic3RvcmFnZUFwaSIsInN5bmMiLCJzYXZlQXNzdW1wdGlvbnMiLCJzZXQiLCJfbG9hZEFzc3VtcHRpb25zIiwidDAiLCJfZGVmaW5lUHJvcGVydHkiLCJfbG9hZFByb3BlcnR5IiwiX2NhbGxlZTIiLCJfYXJnczIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJsb2FkUHJvcGVydHkiLCJzYXZlIiwiX2xvYWQiLCJfY2FsbGVlMyIsIl9hcmdzMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImxvYWQiLCJfeCIsInJlbW92ZSIsImNsZWFyIiwiRm9ybWF0dGVyVXRpbCIsImV2ZW50RW1pdHRlciIsImZvcm1hdHRlciIsImVsZW1lbnRzIiwiaGFuZGxlVXBkYXRlQ2xpY2siLCJjcmVhdGVJbnB1dHNDb250YWluZXIiLCJzdWJzY3JpYmVUb0V2ZW50cyIsImV4aXN0aW5nQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJjbGFzc05hbWUiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJmb250RmFtaWx5IiwiaGVhZGVyIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJmb3JtIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZ2FwIiwiYnV0dG9uIiwibWFyZ2luVG9wIiwiY29sb3IiLCJib3JkZXIiLCJjdXJzb3IiLCJmb250V2VpZ2h0IiwidXBkYXRlQnV0dG9uIiwiaW5zZXJ0SW5wdXRzQ29udGFpbmVyIiwiZmFjdHNMaXN0IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImZhY3RzQ29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInByaWNlU2VjdGlvbiIsInBhcmVudCIsIm5leHRTaWJsaW5nIiwiY3JlYXRlSW5wdXRGaWVsZHMiLCJmaWVsZHMiLCJsYWJlbCIsImZpZWxkIiwiZmllbGRDb250YWluZXIiLCJjcmVhdGVJbnB1dEZpZWxkIiwiZmxleCIsIm1pbldpZHRoIiwiZm9ybWF0dGVkVmFsdWUiLCJhbmFseXNpc0RldGFpbHMiLCJ1cGRhdGVBbmFseXNpc1Jlc3VsdHMiLCJfdGhpczMiLCJleGlzdGluZ0l0ZW1zIiwiaXRlbSIsImRldGFpbCIsImZhY3RJdGVtIiwiY3JlYXRlRmFjdEl0ZW0iLCJnZXRJY29uRm9yRmFjdCIsImZhY3REZXRhaWxzIiwiaWNvblN2ZyIsIk1hcCIsImV2ZW50IiwibGlzdGVuZXIiLCJoYXMiLCJvZmYiLCJvbmNlIiwib25jZVdyYXBwZXIiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJvcmlnaW5hbExpc3RlbmVyIiwibGlzdGVuZXJUb1JlbW92ZSIsImxpc3RlbmVycyIsImZpbHRlcmVkTGlzdGVuZXJzIiwiZmlsdGVyIiwiX2xlbjIiLCJfa2V5MiIsInJlbW92ZUFsbExpc3RlbmVycyIsIl90b0NvbnN1bWFibGVBcnJheSIsImxpc3RlbmVyQ291bnQiLCJldmVudE5hbWVzIiwiY3VycmVuY3lGb3JtYXR0ZXIiLCJwZXJjZW50Rm9ybWF0dGVyIiwibnVtYmVyRm9ybWF0dGVyIiwibnVtVmFsdWUiLCJlbnN1cmVOdW1iZXIiLCJkZWNpbWFsVmFsdWUiLCJmb3JtYXROdW1iZXIiLCJkZWNpbWFscyIsInJlc29sdmVkT3B0aW9ucyIsImluaXRpYWxpemVBcHAiLCJsb2ciLCJhcHAiXSwic291cmNlUm9vdCI6IiJ9