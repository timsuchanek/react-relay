/**
 * Relay v1.1.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fbjs/lib/invariant"), require("babel-runtime/helpers/classCallCheck"), require("fbjs/lib/warning"), require("fbjs/lib/forEachObject"), require("babel-runtime/helpers/extends"), require("babel-runtime/helpers/inherits"), require("babel-runtime/helpers/possibleConstructorReturn"), require("prop-types"), require("fbjs/lib/Map"), require("fbjs/lib/areEqual"), require("react"), require("babel-runtime/helpers/toConsumableArray"), require("babel-runtime/helpers/defineProperty"), require("fbjs/lib/mapObject"), require("fbjs/lib/nullthrows"), require("fbjs/lib/resolveImmediate"), require("fbjs/lib/sprintf"), require("fbjs/lib/base62"), require("fbjs/lib/ErrorUtils"), require("fbjs/lib/emptyFunction"), require("fbjs/lib/Deferred"), require("fbjs/lib/removeFromArray"), require("fbjs/lib/shallowEqual"), require("fbjs/lib/crc32"), require("fbjs/lib/filterObject"), require("fbjs/lib/isEmpty"), require("fbjs/lib/PromiseMap"), require("fbjs/lib/everyObject"), require("fbjs/lib/fetch"), require("fbjs/lib/fetchWithRetries"), require("fbjs/lib/flattenArray"), require("fbjs/lib/performanceNow"), require("fbjs/lib/someObject"), require("react-dom"), require("react-static-container"));
	else if(typeof define === 'function' && define.amd)
		define(["fbjs/lib/invariant", "babel-runtime/helpers/classCallCheck", "fbjs/lib/warning", "fbjs/lib/forEachObject", "babel-runtime/helpers/extends", "babel-runtime/helpers/inherits", "babel-runtime/helpers/possibleConstructorReturn", "prop-types", "fbjs/lib/Map", "fbjs/lib/areEqual", "react", "babel-runtime/helpers/toConsumableArray", "babel-runtime/helpers/defineProperty", "fbjs/lib/mapObject", "fbjs/lib/nullthrows", "fbjs/lib/resolveImmediate", "fbjs/lib/sprintf", "fbjs/lib/base62", "fbjs/lib/ErrorUtils", "fbjs/lib/emptyFunction", "fbjs/lib/Deferred", "fbjs/lib/removeFromArray", "fbjs/lib/shallowEqual", "fbjs/lib/crc32", "fbjs/lib/filterObject", "fbjs/lib/isEmpty", "fbjs/lib/PromiseMap", "fbjs/lib/everyObject", "fbjs/lib/fetch", "fbjs/lib/fetchWithRetries", "fbjs/lib/flattenArray", "fbjs/lib/performanceNow", "fbjs/lib/someObject", "react-dom", "react-static-container"], factory);
	else if(typeof exports === 'object')
		exports["ReactRelayClassic"] = factory(require("fbjs/lib/invariant"), require("babel-runtime/helpers/classCallCheck"), require("fbjs/lib/warning"), require("fbjs/lib/forEachObject"), require("babel-runtime/helpers/extends"), require("babel-runtime/helpers/inherits"), require("babel-runtime/helpers/possibleConstructorReturn"), require("prop-types"), require("fbjs/lib/Map"), require("fbjs/lib/areEqual"), require("react"), require("babel-runtime/helpers/toConsumableArray"), require("babel-runtime/helpers/defineProperty"), require("fbjs/lib/mapObject"), require("fbjs/lib/nullthrows"), require("fbjs/lib/resolveImmediate"), require("fbjs/lib/sprintf"), require("fbjs/lib/base62"), require("fbjs/lib/ErrorUtils"), require("fbjs/lib/emptyFunction"), require("fbjs/lib/Deferred"), require("fbjs/lib/removeFromArray"), require("fbjs/lib/shallowEqual"), require("fbjs/lib/crc32"), require("fbjs/lib/filterObject"), require("fbjs/lib/isEmpty"), require("fbjs/lib/PromiseMap"), require("fbjs/lib/everyObject"), require("fbjs/lib/fetch"), require("fbjs/lib/fetchWithRetries"), require("fbjs/lib/flattenArray"), require("fbjs/lib/performanceNow"), require("fbjs/lib/someObject"), require("react-dom"), require("react-static-container"));
	else
		root["ReactRelayClassic"] = factory(root["fbjs/lib/invariant"], root["babel-runtime/helpers/classCallCheck"], root["fbjs/lib/warning"], root["fbjs/lib/forEachObject"], root["babel-runtime/helpers/extends"], root["babel-runtime/helpers/inherits"], root["babel-runtime/helpers/possibleConstructorReturn"], root["prop-types"], root["fbjs/lib/Map"], root["fbjs/lib/areEqual"], root["react"], root["babel-runtime/helpers/toConsumableArray"], root["babel-runtime/helpers/defineProperty"], root["fbjs/lib/mapObject"], root["fbjs/lib/nullthrows"], root["fbjs/lib/resolveImmediate"], root["fbjs/lib/sprintf"], root["fbjs/lib/base62"], root["fbjs/lib/ErrorUtils"], root["fbjs/lib/emptyFunction"], root["fbjs/lib/Deferred"], root["fbjs/lib/removeFromArray"], root["fbjs/lib/shallowEqual"], root["fbjs/lib/crc32"], root["fbjs/lib/filterObject"], root["fbjs/lib/isEmpty"], root["fbjs/lib/PromiseMap"], root["fbjs/lib/everyObject"], root["fbjs/lib/fetch"], root["fbjs/lib/fetchWithRetries"], root["fbjs/lib/flattenArray"], root["fbjs/lib/performanceNow"], root["fbjs/lib/someObject"], root["react-dom"], root["react-static-container"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_101__, __WEBPACK_EXTERNAL_MODULE_102__, __WEBPACK_EXTERNAL_MODULE_103__, __WEBPACK_EXTERNAL_MODULE_147__, __WEBPACK_EXTERNAL_MODULE_148__, __WEBPACK_EXTERNAL_MODULE_149__, __WEBPACK_EXTERNAL_MODULE_150__, __WEBPACK_EXTERNAL_MODULE_151__, __WEBPACK_EXTERNAL_MODULE_152__, __WEBPACK_EXTERNAL_MODULE_153__, __WEBPACK_EXTERNAL_MODULE_154__, __WEBPACK_EXTERNAL_MODULE_155__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRelayClassicExports
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// As early as possible, check for the existence of the JavaScript globals which
	// React Relay relies upon, and produce a clear message if they do not exist.
	if (true) {
	  if (typeof Map !== 'function' || typeof Set !== 'function' || typeof Promise !== 'function' || typeof Object.assign !== 'function' || typeof Array.prototype.find !== 'function') {
	    throw new Error('react-relay requires Map, Set, Promise, Object.assign, and Array#find ' + 'to exist. Use a polyfill to provide these for older browsers.');
	  }
	}

	// By default, assume that GraphQL is served at `/graphql` on the same domain.
	// To override, use `Relay.injectNetworkLayer`.
	__webpack_require__(27).injectDefaultNetworkLayer(new (__webpack_require__(77))('/graphql'));

	module.exports = (0, _extends3['default'])({}, __webpack_require__(123), {
	  // Expose the default network layer to allow convenient re-configuration.
	  DefaultNetworkLayer: __webpack_require__(77)
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQuery
	 * 
	 * @format
	 */

	'use strict';

	/* eslint-disable consistent-this */

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(44),
	    getFragmentSpreadArguments = _require.getFragmentSpreadArguments;
	// TODO: replace once #6525923 is resolved


	// conditional field calls/values
	var IF = 'if';
	var UNLESS = 'unless';
	var TRUE = 'true';
	var FALSE = 'false';
	var SKIP = 'skip';
	var INCLUDE = 'include';

	var _nextQueryID = 0;

	var DEFAULT_FRAGMENT_METADATA = {
	  isDeferred: false,
	  isContainerFragment: false,
	  isTypeConditional: false
	};
	var EMPTY_DIRECTIVES = [];
	var EMPTY_CALLS = [];

	if (true) {
	  Object.freeze(EMPTY_CALLS);
	  Object.freeze(EMPTY_DIRECTIVES);
	}

	/**
	 * A type representing information about the root node:
	 * - routeName: The name of the route
	 * - variables: The variables in scope at the root.
	 *
	 * This allows route variables to passed down the tree and accessed by arbitrary
	 * fragments.
	 */

	/**
	 * @internal
	 *
	 * Queries in Relay are represented as trees. Possible nodes include the root,
	 * fields, and fragments. Fields can have children, or they can be leaf nodes.
	 * Root and fragment nodes must always have children.
	 *
	 * `RelayQueryNode` provides access to information such as the field name,
	 * generated alias, sub-fields, and call values.
	 *
	 * Nodes are immutable; query modification is supported via `clone`:
	 *
	 * ```
	 * var next = prev.clone(prev.getChildren().filter(f => ...));
	 * ```
	 *
	 * Note: Mediating access to actual query nodes is necessary so that we can
	 * replace the current mutable GraphQL nodes with an immutable query
	 * representation. This class *must not* mutate the underlying `concreteNode`.
	 * Instead, use an instance variable (see `clone()`).
	 */
	var RelayQueryNode = function () {
	  RelayQueryNode.create = function create(concreteNode, metaRoute, variables) {
	    var rootContext = createRootContext(metaRoute, variables);
	    var node = createNode(concreteNode, rootContext, variables);
	    __webpack_require__(1)(node instanceof RelayQueryNode, 'RelayQueryNode.create(): ' + 'Expected a GraphQL fragment, mutation, or query.');
	    return node;
	  };

	  /**
	   * @private
	   *
	   * Base class for all node types, must not be directly instantiated.
	   */


	  function RelayQueryNode(concreteNode, rootContext, variables) {
	    (0, _classCallCheck3['default'])(this, RelayQueryNode);

	    __webpack_require__(1)(this.constructor.name !== 'RelayQueryNode', 'RelayQueryNode: Abstract class cannot be instantiated.');
	    this.__concreteNode__ = concreteNode;
	    this.__root__ = rootContext;
	    this.__variables__ = variables;

	    // lazily computed properties
	    this.__calls__ = null;
	    this.__children__ = null;
	    this.__fieldMap__ = null;
	    this.__hasDeferredDescendant__ = null;
	    this.__hasValidatedConnectionCalls__ = null;
	    this.__serializationKey__ = null;
	    this.__storageKey__ = null;
	  }

	  RelayQueryNode.prototype.canHaveSubselections = function canHaveSubselections() {
	    return true;
	  };

	  RelayQueryNode.prototype.isGenerated = function isGenerated() {
	    return false;
	  };

	  RelayQueryNode.prototype.isRefQueryDependency = function isRefQueryDependency() {
	    return false;
	  };

	  RelayQueryNode.prototype.clone = function clone(children) {
	    if (!this.canHaveSubselections()) {
	      // Compact new children *after* this check, for consistency.
	      __webpack_require__(1)(children.length === 0, 'RelayQueryNode: Cannot add children to field `%s` because it does ' + 'not support sub-selections (sub-fields).', this instanceof RelayQueryField ? this.getSchemaName() : null);
	      return this;
	    }

	    var prevChildren = this.getChildren();
	    var nextChildren = cloneChildren(prevChildren, children);

	    if (!nextChildren.length) {
	      return null;
	    } else if (nextChildren === prevChildren) {
	      return this;
	    }

	    var clone = RelayQueryNode.create(this.__concreteNode__, __webpack_require__(12).get(this.__root__.routeName), this.__variables__);
	    clone.__children__ = nextChildren;
	    clone.__calls__ = this.__calls__;
	    clone.__serializationKey__ = this.__serializationKey__;
	    clone.__storageKey__ = this.__storageKey__;

	    return clone;
	  };

	  RelayQueryNode.prototype.getChildren = function getChildren() {
	    var _this = this;

	    var children = this.__children__;
	    if (!children) {
	      var nextChildren = [];
	      var concreteChildren = this.__concreteNode__.children;
	      if (concreteChildren) {
	        concreteChildren.forEach(function (concreteChild) {
	          if (concreteChild == null) {
	            return;
	          }
	          var nodeOrNodes = createNode(concreteChild, _this.__root__, _this.__variables__);
	          if (Array.isArray(nodeOrNodes)) {
	            nodeOrNodes.forEach(function (node) {
	              if (node && node.isIncluded()) {
	                nextChildren.push(node);
	              }
	            });
	          } else if (nodeOrNodes && nodeOrNodes.isIncluded()) {
	            nextChildren.push(nodeOrNodes);
	          }
	        });
	      }
	      this.__children__ = nextChildren;
	      children = nextChildren;
	    }
	    return children;
	  };

	  RelayQueryNode.prototype.isIncluded = function isIncluded() {
	    // Bail out early since most nodes won't have directives
	    if (!this.__concreteNode__.directives) {
	      return true;
	    }
	    return this.getDirectives().every(function (directive) {
	      if (directive.name === SKIP) {
	        return !directive.args.some(function (arg) {
	          return arg.name === IF && !!arg.value;
	        });
	      } else if (directive.name === INCLUDE) {
	        return !directive.args.some(function (arg) {
	          return arg.name === IF && !arg.value;
	        });
	      }
	      return true;
	    });
	  };

	  RelayQueryNode.prototype.getDirectives = function getDirectives() {
	    var _this2 = this;

	    var concreteDirectives = this.__concreteNode__.directives;
	    if (concreteDirectives) {
	      return this.__concreteNode__.directives.map(function (directive) {
	        return {
	          args: __webpack_require__(34)(directive.args, _this2.__variables__),
	          name: directive.name
	        };
	      });
	    }
	    return EMPTY_DIRECTIVES;
	  };

	  RelayQueryNode.prototype.getField = function getField(field) {
	    return this.getFieldByStorageKey(field.getStorageKey());
	  };

	  RelayQueryNode.prototype.getFieldByStorageKey = function getFieldByStorageKey(storageKey) {
	    var fieldMap = this.__fieldMap__;
	    if (!fieldMap) {
	      fieldMap = {};
	      var children = this.getChildren();
	      for (var ii = 0; ii < children.length; ii++) {
	        var child = children[ii];
	        if (child instanceof RelayQueryField) {
	          fieldMap[child.getStorageKey()] = child;
	        }
	      }
	      this.__fieldMap__ = fieldMap;
	    }
	    return fieldMap[storageKey];
	  };

	  RelayQueryNode.prototype.getType = function getType() {
	    return this.__concreteNode__.type;
	  };

	  RelayQueryNode.prototype.getRoute = function getRoute() {
	    return __webpack_require__(12).get(this.__root__.routeName);
	  };

	  RelayQueryNode.prototype.getVariables = function getVariables() {
	    return this.__variables__;
	  };

	  RelayQueryNode.prototype.hasDeferredDescendant = function hasDeferredDescendant() {
	    var hasDeferredDescendant = this.__hasDeferredDescendant__;
	    if (hasDeferredDescendant == null) {
	      hasDeferredDescendant = this.canHaveSubselections() && this.getChildren().some(function (child) {
	        return child.hasDeferredDescendant();
	      });
	      this.__hasDeferredDescendant__ = hasDeferredDescendant;
	    }
	    return hasDeferredDescendant;
	  };

	  RelayQueryNode.prototype.isAbstract = function isAbstract() {
	    throw new Error('RelayQueryNode: Abstract function cannot be called.');
	  };

	  RelayQueryNode.prototype.isRequisite = function isRequisite() {
	    return false;
	  };

	  /**
	   * Determine if `this` and `that` are deeply equal.
	   */


	  RelayQueryNode.prototype.equals = function equals(that) {
	    var thisChildren = this.getChildren();
	    var thatChildren = that.getChildren();

	    return thisChildren === thatChildren || thisChildren.length === thatChildren.length && thisChildren.every(function (c, ii) {
	      return c.equals(thatChildren[ii]);
	    });
	  };

	  /**
	   * Performs a fast comparison of whether `this` and `that` represent identical
	   * query nodes. Returns true only if the concrete nodes, routes, and variables
	   * are all the same.
	   *
	   * Note that it is possible that this method can return false in cases where
	   * `equals` would return true. This can happen when the concrete nodes are
	   * different but structurally identical, or when the route/variables are
	   * different but do not have an effect on the structure of the query.
	   */


	  RelayQueryNode.prototype.isEquivalent = function isEquivalent(that) {
	    return this.__concreteNode__ === that.__concreteNode__ && this.__root__.routeName === that.__root__.routeName && __webpack_require__(75)(this.__root__.variables, that.__root__.variables) && __webpack_require__(75)(this.__variables__, that.__variables__);
	  };

	  RelayQueryNode.prototype.createNode = function createNode(concreteNode) {
	    return RelayQueryNode.create(concreteNode, __webpack_require__(12).get(this.__root__.routeName), this.__variables__);
	  };

	  RelayQueryNode.prototype.getConcreteQueryNode = function getConcreteQueryNode() {
	    return this.__concreteNode__;
	  };

	  return RelayQueryNode;
	}();

	/**
	 * @internal
	 *
	 * Wraps access to query root nodes.
	 */


	var RelayQueryRoot = function (_RelayQueryNode) {
	  (0, _inherits3['default'])(RelayQueryRoot, _RelayQueryNode);

	  /**
	   * Helper to construct a new root query with the given attributes and 'empty'
	   * route/variables.
	   */
	  RelayQueryRoot.build = function build(name, fieldName, value, children, metadata, type, routeName) {
	    var nextChildren = children ? children.filter(function (child) {
	      return !!child;
	    }) : [];
	    var batchCallVariable = __webpack_require__(7).getBatchCallVariable(value);
	    var identifyingArgValue = void 0;
	    if (batchCallVariable) {
	      identifyingArgValue = batchCallVariable;
	    } else if (Array.isArray(value)) {
	      identifyingArgValue = value.map(__webpack_require__(7).createCallValue);
	    } else if (value) {
	      identifyingArgValue = __webpack_require__(7).createCallValue(value);
	    }
	    var concreteRoot = __webpack_require__(7).createQuery({
	      fieldName: fieldName,
	      identifyingArgValue: identifyingArgValue,
	      metadata: metadata,
	      name: name,
	      type: type
	    });
	    var variables = {};
	    var metaRoute = __webpack_require__(12).get(routeName || '$RelayQuery');
	    var rootContext = createRootContext(metaRoute, variables);
	    var root = new RelayQueryRoot(concreteRoot, rootContext, variables);
	    root.__children__ = nextChildren;
	    return root;
	  };

	  RelayQueryRoot.create = function create(concreteNode, metaRoute, variables) {
	    var query = __webpack_require__(7).getQuery(concreteNode);
	    __webpack_require__(1)(query, 'RelayQueryRoot.create(): Expected a GraphQL `query { ... }`, got: %s', concreteNode);
	    var rootContext = createRootContext(metaRoute, variables);
	    return new RelayQueryRoot(query, rootContext, variables);
	  };

	  function RelayQueryRoot(concreteNode, rootContext, variables) {
	    (0, _classCallCheck3['default'])(this, RelayQueryRoot);

	    var _this3 = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryNode.call(this, concreteNode, rootContext, variables));

	    _this3.__batchCall__ = undefined;
	    _this3.__id__ = undefined;
	    _this3.__identifyingArg__ = undefined;
	    _this3.__storageKey__ = undefined;

	    // Ensure IDs are generated in the order that queries are created
	    _this3.getID();
	    return _this3;
	  }

	  RelayQueryRoot.prototype.canHaveSubselections = function canHaveSubselections() {
	    return true;
	  };

	  RelayQueryRoot.prototype.getName = function getName() {
	    var name = this.__concreteNode__.name;
	    if (!name) {
	      name = this.getID();
	      this.__concreteNode__.name = name;
	    }
	    return name;
	  };

	  RelayQueryRoot.prototype.getID = function getID() {
	    var id = this.__id__;
	    if (id == null) {
	      id = 'q' + _nextQueryID++;
	      this.__id__ = id;
	    }
	    return id;
	  };

	  RelayQueryRoot.prototype.getBatchCall = function getBatchCall() {
	    var batchCall = this.__batchCall__;
	    if (batchCall === undefined) {
	      var concreteCalls = this.__concreteNode__.calls;
	      if (concreteCalls) {
	        var callArg = concreteCalls[0] && concreteCalls[0].value;
	        if (callArg != null && !Array.isArray(callArg) && callArg.kind === 'BatchCallVariable') {
	          batchCall = {
	            refParamName: 'ref_' + callArg.sourceQueryID,
	            sourceQueryID: callArg.sourceQueryID,
	            sourceQueryPath: callArg.jsonPath
	          };
	        }
	      }
	      batchCall = batchCall || null;
	      this.__batchCall__ = batchCall;
	    }
	    return batchCall;
	  };

	  RelayQueryRoot.prototype.getCallsWithValues = function getCallsWithValues() {
	    var calls = this.__calls__;
	    if (!calls) {
	      var concreteCalls = this.__concreteNode__.calls;
	      if (concreteCalls) {
	        calls = __webpack_require__(34)(concreteCalls, this.__variables__);
	      } else {
	        calls = EMPTY_CALLS;
	      }
	      this.__calls__ = calls;
	    }
	    return calls;
	  };

	  RelayQueryRoot.prototype.getFieldName = function getFieldName() {
	    return this.__concreteNode__.fieldName;
	  };

	  RelayQueryRoot.prototype.getIdentifyingArg = function getIdentifyingArg() {
	    var identifyingArg = this.__identifyingArg__;
	    if (!identifyingArg) {
	      var metadata = this.__concreteNode__.metadata;
	      var identifyingArgName = metadata.identifyingArgName;
	      if (identifyingArgName != null) {
	        identifyingArg = this.getCallsWithValues().find(function (c) {
	          return c.name === identifyingArgName;
	        });
	        if (identifyingArg && metadata.identifyingArgType != null) {
	          identifyingArg.type = metadata.identifyingArgType;
	        }
	        this.__identifyingArg__ = identifyingArg;
	      }
	    }
	    return identifyingArg;
	  };

	  RelayQueryRoot.prototype.getStorageKey = function getStorageKey() {
	    var storageKey = this.__storageKey__;
	    if (!storageKey) {
	      var args = this.getCallsWithValues();
	      var identifyingArg = this.getIdentifyingArg();
	      if (identifyingArg) {
	        args = args.filter(function (arg) {
	          return arg !== identifyingArg;
	        });
	      }
	      var field = RelayQueryField.build({
	        fieldName: this.getFieldName(),
	        calls: args,
	        type: this.getType()
	      });
	      storageKey = field.getStorageKey();
	      this.__storageKey__ = storageKey;
	    }
	    return storageKey;
	  };

	  RelayQueryRoot.prototype.hasDeferredDescendant = function hasDeferredDescendant() {
	    return this.isDeferred() || _RelayQueryNode.prototype.hasDeferredDescendant.call(this);
	  };

	  RelayQueryRoot.prototype.isAbstract = function isAbstract() {
	    return !!this.__concreteNode__.metadata.isAbstract;
	  };

	  RelayQueryRoot.prototype.isDeferred = function isDeferred() {
	    return !!this.__concreteNode__.isDeferred;
	  };

	  RelayQueryRoot.prototype.isPlural = function isPlural() {
	    return !!this.__concreteNode__.metadata.isPlural;
	  };

	  RelayQueryRoot.prototype.cloneWithRoute = function cloneWithRoute(children, metaRoute) {
	    if (this.__root__.routeName === metaRoute.name) {
	      return this.clone(children);
	    }
	    var clone = RelayQueryNode.create((0, _extends3['default'])({}, this.__concreteNode__, {
	      name: metaRoute.name
	    }), metaRoute, this.__variables__);
	    clone.__children__ = children;
	    return clone;
	  };

	  RelayQueryRoot.prototype.equals = function equals(that) {
	    if (this === that) {
	      return true;
	    }
	    if (!(that instanceof RelayQueryRoot)) {
	      return false;
	    }
	    if (!__webpack_require__(23)(this.getBatchCall(), that.getBatchCall())) {
	      return false;
	    }
	    if (this.getFieldName() !== that.getFieldName() || !areCallValuesEqual(this.getCallsWithValues(), that.getCallsWithValues())) {
	      return false;
	    }
	    return _RelayQueryNode.prototype.equals.call(this, that);
	  };

	  return RelayQueryRoot;
	}(RelayQueryNode);

	/**
	 * @internal
	 *
	 * Wraps access to OSS GraphQL query nodes created with
	 *
	 *    graphql`query ...`
	 *
	 * Unlike RelayQueryRoot (which represents the semantics of classic GraphQL
	 * queries), this class supports multiple, arbitrary root fields within a single
	 * query. Fields may have arbitrary numbers of arguments, return connections,
	 * have aliases, etc.
	 */


	var RelayOSSQuery = function (_RelayQueryNode2) {
	  (0, _inherits3['default'])(RelayOSSQuery, _RelayQueryNode2);

	  RelayOSSQuery.create = function create(concreteNode, metaRoute, variables) {
	    var operation = __webpack_require__(7).getOperationDefinition(concreteNode);
	    __webpack_require__(1)(operation, 'RelayQueryRoot.create(): Expected a value created with graphql`query { ... }` ' + '(using the `graphql` tag), got: %s', concreteNode);
	    var rootContext = createRootContext(metaRoute, variables);
	    return new RelayOSSQuery(operation, rootContext, variables);
	  };

	  function RelayOSSQuery(concreteNode, rootContext, variables) {
	    (0, _classCallCheck3['default'])(this, RelayOSSQuery);

	    __webpack_require__(1)(concreteNode && concreteNode.operation === 'query', 'RelayQueryRoot.create(): Expected a value created with graphql`query { ... }` ' + '(using the `graphql` tag), got: %s', concreteNode);

	    var _this4 = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryNode2.call(this, concreteNode.node, rootContext, variables));

	    _this4.__id__ = undefined;

	    // Ensure IDs are generated in the order that queries are created
	    _this4.getID();
	    return _this4;
	  }

	  RelayOSSQuery.prototype.canHaveSubselections = function canHaveSubselections() {
	    return true;
	  };

	  RelayOSSQuery.prototype.isDeferred = function isDeferred() {
	    return false;
	  };

	  RelayOSSQuery.prototype.getName = function getName() {
	    var name = this.__concreteNode__.name;
	    if (!name) {
	      name = this.getID();
	      this.__concreteNode__.name = name;
	    }
	    return name;
	  };

	  RelayOSSQuery.prototype.getID = function getID() {
	    var id = this.__id__;
	    if (id == null) {
	      id = 'q' + _nextQueryID++;
	      this.__id__ = id;
	    }
	    return id;
	  };

	  RelayOSSQuery.prototype.equals = function equals(that) {
	    if (this === that) {
	      return true;
	    }
	    if (!(that instanceof RelayOSSQuery)) {
	      return false;
	    }
	    return _RelayQueryNode2.prototype.equals.call(this, that);
	  };

	  return RelayOSSQuery;
	}(RelayQueryNode);

	/**
	 * @internal
	 *
	 * Abstract base class for mutations and subscriptions.
	 */


	var RelayQueryOperation = function (_RelayQueryNode3) {
	  (0, _inherits3['default'])(RelayQueryOperation, _RelayQueryNode3);

	  function RelayQueryOperation(concreteNode, rootContext, variables) {
	    (0, _classCallCheck3['default'])(this, RelayQueryOperation);

	    var _this5 = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryNode3.call(this, concreteNode, rootContext, variables));

	    __webpack_require__(1)(_this5.constructor.name !== 'RelayQueryOperation', 'RelayQueryOperation: Abstract class cannot be instantiated.');
	    return _this5;
	  }

	  RelayQueryOperation.prototype.canHaveSubselections = function canHaveSubselections() {
	    return true;
	  };

	  RelayQueryOperation.prototype.getName = function getName() {
	    return this.__concreteNode__.name;
	  };

	  RelayQueryOperation.prototype.getResponseType = function getResponseType() {
	    return this.__concreteNode__.responseType;
	  };

	  RelayQueryOperation.prototype.getType = function getType() {
	    return this.getResponseType();
	  };

	  RelayQueryOperation.prototype.getInputType = function getInputType() {
	    var inputType = this.__concreteNode__.metadata.inputType;
	    __webpack_require__(1)(inputType, 'RelayQuery: Expected operation `%s` to be annotated with the type of ' + 'its argument. Either the babel transform was configured incorrectly, ' + 'or the schema failed to define an argument for this mutation.', this.getCall().name);
	    return inputType;
	  };

	  RelayQueryOperation.prototype.getCall = function getCall() {
	    var calls = this.__calls__;
	    if (!calls) {
	      var concreteCalls = this.__concreteNode__.calls;
	      if (concreteCalls) {
	        calls = __webpack_require__(34)(concreteCalls, this.__variables__);
	      } else {
	        calls = EMPTY_CALLS;
	      }
	      this.__calls__ = calls;
	    }
	    return calls[0];
	  };

	  RelayQueryOperation.prototype.getCallVariableName = function getCallVariableName() {
	    if (!this.__callVariableName__) {
	      var concreteCalls = this.__concreteNode__.calls;
	      var callVariable = concreteCalls && __webpack_require__(7).getCallVariable(concreteCalls[0].value);
	      __webpack_require__(1)(callVariable, 'RelayQuery: Expected mutation to have a single argument.');
	      this.__callVariableName__ = callVariable.callVariableName;
	    }
	    return this.__callVariableName__;
	  };

	  /**
	   * Mutations and subscriptions must have a concrete type due to the need for
	   * requisite top-level fields.
	   */


	  RelayQueryOperation.prototype.isAbstract = function isAbstract() {
	    return false;
	  };

	  return RelayQueryOperation;
	}(RelayQueryNode);

	/**
	 * @internal
	 *
	 * Represents a GraphQL mutation.
	 */


	var RelayQueryMutation = function (_RelayQueryOperation) {
	  (0, _inherits3['default'])(RelayQueryMutation, _RelayQueryOperation);

	  function RelayQueryMutation() {
	    (0, _classCallCheck3['default'])(this, RelayQueryMutation);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQueryOperation.apply(this, arguments));
	  }

	  /**
	   * Helper to construct a new mutation with the given attributes and 'empty'
	   * route/variables.
	   */
	  RelayQueryMutation.build = function build(name, responseType, callName, callValue, children, metadata, routeName) {
	    var nextChildren = children ? children.filter(function (child) {
	      return !!child;
	    }) : [];
	    var concreteMutation = __webpack_require__(7).createMutation({
	      calls: [__webpack_require__(7).createCall(callName, __webpack_require__(7).createCallVariable('input'))],
	      metadata: metadata,
	      name: name,
	      responseType: responseType
	    });
	    var variables = { input: callValue || '' };
	    var metaRoute = __webpack_require__(12).get(routeName || '$RelayQuery');
	    var rootContext = createRootContext(metaRoute, variables);
	    var mutation = new RelayQueryMutation(concreteMutation, rootContext, variables);
	    mutation.__children__ = nextChildren;
	    return mutation;
	  };

	  RelayQueryMutation.prototype.equals = function equals(that) {
	    if (this === that) {
	      return true;
	    }
	    if (!(that instanceof RelayQueryMutation)) {
	      return false;
	    }
	    if (!__webpack_require__(23)(this.getResponseType(), that.getResponseType())) {
	      return false;
	    }
	    if (!__webpack_require__(23)(this.getCall(), that.getCall())) {
	      return false;
	    }
	    return _RelayQueryOperation.prototype.equals.call(this, that);
	  };

	  return RelayQueryMutation;
	}(RelayQueryOperation);

	/**
	 * @internal
	 *
	 * Represents a GraphQL subscription.
	 */


	var RelayQuerySubscription = function (_RelayQueryOperation2) {
	  (0, _inherits3['default'])(RelayQuerySubscription, _RelayQueryOperation2);

	  function RelayQuerySubscription() {
	    (0, _classCallCheck3['default'])(this, RelayQuerySubscription);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQueryOperation2.apply(this, arguments));
	  }

	  RelayQuerySubscription.create = function create(concreteNode, metaRoute, variables) {
	    var subscription = __webpack_require__(7).getSubscription(concreteNode);
	    __webpack_require__(1)(subscription, 'RelayQuerySubscription.create(): ' + 'Expected a GraphQL `subscription { ... }`, got: %s', concreteNode);
	    var rootContext = createRootContext(metaRoute, variables);
	    return new RelayQuerySubscription(concreteNode, rootContext, variables);
	  };

	  RelayQuerySubscription.prototype.getPublishedPayloadType = function getPublishedPayloadType() {
	    return this.getResponseType();
	  };

	  RelayQuerySubscription.prototype.equals = function equals(that) {
	    if (this === that) {
	      return true;
	    }
	    if (!(that instanceof RelayQuerySubscription)) {
	      return false;
	    }
	    if (!__webpack_require__(23)(this.getPublishedPayloadType(), that.getPublishedPayloadType())) {
	      return false;
	    }
	    if (!__webpack_require__(23)(this.getCall(), that.getCall())) {
	      return false;
	    }
	    return _RelayQueryOperation2.prototype.equals.call(this, that);
	  };

	  return RelayQuerySubscription;
	}(RelayQueryOperation);

	/**
	 * @internal
	 *
	 * Wraps access to query fragments.
	 */


	var RelayQueryFragment = function (_RelayQueryNode4) {
	  (0, _inherits3['default'])(RelayQueryFragment, _RelayQueryNode4);

	  /**
	   * Helper to construct a new fragment with the given attributes and 'empty'
	   * route/variables.
	   */
	  RelayQueryFragment.build = function build(name, type, children, metadata, routeName) {
	    var nextChildren = children ? children.filter(function (child) {
	      return !!child;
	    }) : [];
	    var concreteFragment = __webpack_require__(7).createFragment({
	      name: name,
	      type: type,
	      metadata: metadata
	    });
	    var variables = {};
	    var metaRoute = __webpack_require__(12).get(routeName || '$RelayQuery');
	    var rootContext = createRootContext(metaRoute, variables);
	    var fragment = new RelayQueryFragment(concreteFragment, rootContext, variables, {
	      isDeferred: !!(metadata && metadata.isDeferred),
	      isContainerFragment: !!(metadata && metadata.isContainerFragment),
	      isTypeConditional: !!(metadata && metadata.isTypeConditional)
	    });
	    fragment.__children__ = nextChildren;
	    return fragment;
	  };

	  RelayQueryFragment.create = function create(concreteNode, metaRoute, variables, metadata) {
	    var fragment = __webpack_require__(7).getFragment(concreteNode);
	    __webpack_require__(1)(fragment, 'RelayQueryFragment.create(): ' + 'Expected a GraphQL `fragment { ... }`, got: %s', concreteNode);
	    var rootContext = createRootContext(metaRoute, variables);
	    return createMemoizedFragment(fragment, rootContext, variables, metadata || DEFAULT_FRAGMENT_METADATA);
	  };

	  function RelayQueryFragment(concreteNode, rootContext, variables, metadata) {
	    (0, _classCallCheck3['default'])(this, RelayQueryFragment);

	    var _this8 = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryNode4.call(this, concreteNode, rootContext, variables));

	    _this8.__compositeHash__ = null;
	    _this8.__metadata__ = metadata || DEFAULT_FRAGMENT_METADATA;
	    _this8.__sourceCompositeHash__ = null;
	    return _this8;
	  }

	  RelayQueryFragment.prototype.canHaveSubselections = function canHaveSubselections() {
	    return true;
	  };

	  RelayQueryFragment.prototype.getDebugName = function getDebugName() {
	    return this.__concreteNode__.name;
	  };

	  /**
	   * The "concrete fragment id" uniquely identifies a Relay.QL`fragment ...`
	   * within the source code of an application and will remain the same across
	   * runs of a particular version of an application.
	   */


	  RelayQueryFragment.prototype.getConcreteFragmentID = function getConcreteFragmentID() {
	    return this.__concreteNode__.id;
	  };

	  /**
	   * The "composite hash" is similar to the concrete instance hash, but it also
	   * differentiates between varying variable values or route names.
	   *
	   * The composite hash is used to:
	   * - Avoid printing the same fragment twice, in order to reduce upload size.
	   * - Remember which deferred fragment/data pairs have been fetched.
	   */


	  RelayQueryFragment.prototype.getCompositeHash = function getCompositeHash() {
	    var compositeHash = this.__compositeHash__;
	    if (!compositeHash) {
	      compositeHash = __webpack_require__(91)(this.getConcreteFragmentID() + '.' + this.__root__.routeName + '.' + __webpack_require__(29)(this.__variables__));
	      this.__compositeHash__ = compositeHash;
	    }
	    return compositeHash;
	  };

	  RelayQueryFragment.prototype.getSourceCompositeHash = function getSourceCompositeHash() {
	    return this.__sourceCompositeHash__;
	  };

	  RelayQueryFragment.prototype.isAbstract = function isAbstract() {
	    return !!this.__concreteNode__.metadata.isAbstract;
	  };

	  RelayQueryFragment.prototype.isDeferred = function isDeferred() {
	    return this.__metadata__.isDeferred;
	  };

	  RelayQueryFragment.prototype.isPattern = function isPattern() {
	    return !!this.__concreteNode__.metadata.pattern;
	  };

	  RelayQueryFragment.prototype.isPlural = function isPlural() {
	    var metadata = this.__concreteNode__.metadata;
	    return Boolean(
	    /* FB Printer */metadata.isPlural ||
	    /* OSS Printer from `@relay` */metadata.plural);
	  };

	  RelayQueryFragment.prototype.isTrackingEnabled = function isTrackingEnabled() {
	    var metadata = this.__concreteNode__.metadata;
	    return !!metadata.isTrackingEnabled;
	  };

	  RelayQueryFragment.prototype.cloneAsPlainFragment = function cloneAsPlainFragment() {
	    return createMemoizedFragment(this.__concreteNode__, this.__root__, this.__variables__, DEFAULT_FRAGMENT_METADATA);
	  };

	  RelayQueryFragment.prototype.isContainerFragment = function isContainerFragment() {
	    return this.__metadata__.isContainerFragment;
	  };

	  RelayQueryFragment.prototype.isTypeConditional = function isTypeConditional() {
	    return this.__metadata__.isTypeConditional;
	  };

	  RelayQueryFragment.prototype.hasDeferredDescendant = function hasDeferredDescendant() {
	    return this.isDeferred() || _RelayQueryNode4.prototype.hasDeferredDescendant.call(this);
	  };

	  RelayQueryFragment.prototype.clone = function clone(children) {
	    var clone = _RelayQueryNode4.prototype.clone.call(this, children);
	    if (clone !== this && clone instanceof RelayQueryFragment) {
	      clone.__concreteNode__ = (0, _extends3['default'])({}, clone.__concreteNode__, {
	        id: __webpack_require__(68)()
	      });
	      clone.__metadata__ = (0, _extends3['default'])({}, this.__metadata__);

	      // The container checks on the status of a deferred fragment using its
	      // composite hash. We need to cache this hash in this cloned fragment
	      // so it can be updated in the store with the correct hash when fetched.
	      clone.__sourceCompositeHash__ = this.getCompositeHash();
	    }
	    return clone;
	  };

	  RelayQueryFragment.prototype.equals = function equals(that) {
	    if (this === that) {
	      return true;
	    }
	    if (!(that instanceof RelayQueryFragment)) {
	      return false;
	    }
	    if (this.getType() !== that.getType()) {
	      return false;
	    }
	    return _RelayQueryNode4.prototype.equals.call(this, that);
	  };

	  return RelayQueryFragment;
	}(RelayQueryNode);

	/**
	 * @internal
	 *
	 * Wraps access to query fields.
	 */


	var RelayQueryField = function (_RelayQueryNode5) {
	  (0, _inherits3['default'])(RelayQueryField, _RelayQueryNode5);

	  RelayQueryField.create = function create(concreteNode, metaRoute, variables) {
	    var field = __webpack_require__(7).getField(concreteNode);
	    __webpack_require__(1)(field, 'RelayQueryField.create(): Expected a GraphQL field, got: %s', concreteNode);
	    var rootContext = createRootContext(metaRoute, variables);
	    return new RelayQueryField(field, rootContext, variables);
	  };

	  /**
	   * Helper to construct a new field with the given attributes and 'empty'
	   * route/variables.
	   */


	  RelayQueryField.build = function build(_ref) {
	    var alias = _ref.alias,
	        directives = _ref.directives,
	        calls = _ref.calls,
	        children = _ref.children,
	        fieldName = _ref.fieldName,
	        metadata = _ref.metadata,
	        routeName = _ref.routeName,
	        type = _ref.type;

	    var nextChildren = children ? children.filter(function (child) {
	      return !!child;
	    }) : [];
	    var concreteField = __webpack_require__(7).createField({
	      alias: alias,
	      calls: calls ? __webpack_require__(90)(calls) : null,
	      directives: directives ? __webpack_require__(135)(directives) : null,
	      fieldName: fieldName,
	      metadata: metadata,
	      type: type
	    });
	    var variables = {};
	    var metaRoute = __webpack_require__(12).get(routeName || '$RelayQuery');
	    var rootContext = createRootContext(metaRoute, variables);
	    var field = new RelayQueryField(concreteField, rootContext, variables);
	    field.__children__ = nextChildren;
	    return field;
	  };

	  function RelayQueryField(concreteNode, rootContext, variables) {
	    (0, _classCallCheck3['default'])(this, RelayQueryField);

	    var _this9 = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryNode5.call(this, concreteNode, rootContext, variables));

	    _this9.__debugName__ = undefined;
	    _this9.__isRefQueryDependency__ = false;
	    _this9.__rangeBehaviorCalls__ = undefined;
	    _this9.__shallowHash__ = undefined;
	    return _this9;
	  }

	  RelayQueryField.prototype.canHaveSubselections = function canHaveSubselections() {
	    return !!this.__concreteNode__.metadata.canHaveSubselections;
	  };

	  RelayQueryField.prototype.isAbstract = function isAbstract() {
	    return !!this.__concreteNode__.metadata.isAbstract;
	  };

	  RelayQueryField.prototype.isFindable = function isFindable() {
	    return !!this.__concreteNode__.metadata.isFindable;
	  };

	  RelayQueryField.prototype.isGenerated = function isGenerated() {
	    return !!this.__concreteNode__.metadata.isGenerated;
	  };

	  RelayQueryField.prototype.isConnection = function isConnection() {
	    return !!this.__concreteNode__.metadata.isConnection;
	  };

	  RelayQueryField.prototype.isConnectionWithoutNodeID = function isConnectionWithoutNodeID() {
	    return !!this.__concreteNode__.metadata.isConnectionWithoutNodeID;
	  };

	  RelayQueryField.prototype.isPlural = function isPlural() {
	    return !!this.__concreteNode__.metadata.isPlural;
	  };

	  RelayQueryField.prototype.isRefQueryDependency = function isRefQueryDependency() {
	    return this.__isRefQueryDependency__;
	  };

	  RelayQueryField.prototype.isRequisite = function isRequisite() {
	    return !!this.__concreteNode__.metadata.isRequisite;
	  };

	  RelayQueryField.prototype.getDebugName = function getDebugName() {
	    var _this10 = this;

	    var debugName = this.__debugName__;
	    if (!debugName) {
	      debugName = this.getSchemaName();
	      var printedCoreArgs = void 0;
	      this.getCallsWithValues().forEach(function (arg) {
	        if (_this10._isCoreArg(arg)) {
	          printedCoreArgs = printedCoreArgs || [];
	          printedCoreArgs.push(__webpack_require__(36)(arg));
	        }
	      });
	      if (printedCoreArgs) {
	        debugName += printedCoreArgs.sort().join('');
	      }
	      this.__debugName__ = debugName;
	    }
	    return debugName;
	  };

	  /**
	   * The canonical name for the referenced field in the schema.
	   */


	  RelayQueryField.prototype.getSchemaName = function getSchemaName() {
	    return this.__concreteNode__.fieldName;
	  };

	  /**
	  * An Array of Calls to be used with rangeBehavior config functions.
	  *
	  * Non-core arguments (like connection and identifying arguments) are dropped.
	  *   `field(first: 10, foo: "bar", baz: "bat")` => `'baz(bat).foo(bar)'`
	  *   `username(name: "steve")`                  => `''`
	  */


	  RelayQueryField.prototype.getRangeBehaviorCalls = function getRangeBehaviorCalls() {
	    var _this11 = this;

	    __webpack_require__(1)(this.isConnection(), 'RelayQueryField: Range behavior keys are associated exclusively with ' + 'connection fields. `getRangeBehaviorCalls()` was called on the ' + 'non-connection field `%s`.', this.getSchemaName());

	    var rangeBehaviorCalls = this.__rangeBehaviorCalls__;
	    if (!rangeBehaviorCalls) {
	      rangeBehaviorCalls = this.getCallsWithValues().filter(function (arg) {
	        return _this11._isCoreArg(arg);
	      });
	      this.__rangeBehaviorCalls__ = rangeBehaviorCalls;
	    }
	    return rangeBehaviorCalls;
	  };

	  /**
	   * The name for the field when serializing the query or interpreting query
	   * responses from the server. The serialization key is derived from
	   * all calls/values and hashed for compactness.
	   *
	   * Given the GraphQL
	   *   `field(first: 10, foo: "bar", baz: "bat")`, or
	   *   `field(baz: "bat", foo: "bar", first: 10)`
	   *
	   * ...the following serialization key will be produced:
	   *   `generateRQLFieldAlias('field.bar(bat).first(10).foo(bar)')`
	   */


	  RelayQueryField.prototype.getSerializationKey = function getSerializationKey() {
	    var serializationKey = this.__serializationKey__;
	    if (!serializationKey) {
	      var _key = this.getSchemaName();
	      var calls = this.getCallsWithValues();
	      if (calls.length) {
	        var alias = this.__concreteNode__.alias;
	        if (alias != null) {
	          _key += '.' + alias;
	        }
	        _key += calls.map(__webpack_require__(36)).sort().join('');
	      }
	      serializationKey = __webpack_require__(91)(_key);
	      this.__serializationKey__ = serializationKey;
	    }
	    return serializationKey;
	  };

	  /**
	   * Returns a hash of the field name and all argument values.
	   */


	  RelayQueryField.prototype.getShallowHash = function getShallowHash() {
	    var shallowHash = this.__shallowHash__;
	    if (!shallowHash) {
	      this.__shallowHash__ = shallowHash = this.getSchemaName() + serializeCalls(this.getCallsWithValues());
	    }
	    return shallowHash;
	  };

	  /**
	   * The name which Relay internals can use to reference this field, without
	   * collisions.
	   *
	   * Given the GraphQL
	   *   `field(first: 10, foo: "bar", baz: "bat")`, or
	   *   `field(baz: "bat", foo: "bar", first: 10)`
	   *
	   * ...the following storage key will be produced:
	   *   `'field{bar:"bat",foo:"bar"}'`
	   */


	  RelayQueryField.prototype.getStorageKey = function getStorageKey() {
	    var _this12 = this;

	    var storageKey = this.__storageKey__;
	    if (!storageKey) {
	      this.__storageKey__ = storageKey = this.getSchemaName() + serializeCalls(this.getCallsWithValues().filter(function (call) {
	        return _this12._isCoreArg(call);
	      }));
	    }
	    return storageKey;
	  };

	  /**
	   * The name by which this field's results should be made available to the
	   * application.
	   */


	  RelayQueryField.prototype.getApplicationName = function getApplicationName() {
	    var concreteNode = this.__concreteNode__;
	    return concreteNode.alias || concreteNode.fieldName;
	  };

	  RelayQueryField.prototype.getInferredRootCallName = function getInferredRootCallName() {
	    return this.__concreteNode__.metadata.inferredRootCallName;
	  };

	  RelayQueryField.prototype.getInferredPrimaryKey = function getInferredPrimaryKey() {
	    return this.__concreteNode__.metadata.inferredPrimaryKey;
	  };

	  RelayQueryField.prototype.getCallsWithValues = function getCallsWithValues() {
	    var calls = this.__calls__;
	    if (!calls) {
	      var concreteCalls = this.__concreteNode__.calls;
	      if (concreteCalls) {
	        calls = __webpack_require__(34)(concreteCalls, this.__variables__);
	      } else {
	        calls = EMPTY_CALLS;
	      }
	      this.__calls__ = calls;
	    }
	    return calls;
	  };

	  RelayQueryField.prototype.getCallType = function getCallType(callName) {
	    var concreteCalls = this.__concreteNode__.calls;
	    var concreteCall = concreteCalls && concreteCalls.filter(function (call) {
	      return call.name === callName;
	    })[0];
	    if (concreteCall) {
	      return concreteCall.metadata.type;
	    }
	  };

	  RelayQueryField.prototype.equals = function equals(that) {
	    if (this === that) {
	      return true;
	    }
	    if (!(that instanceof RelayQueryField)) {
	      return false;
	    }
	    if (this.getSchemaName() !== that.getSchemaName() || this.getApplicationName() !== that.getApplicationName() || !areCallValuesEqual(this.getCallsWithValues(), that.getCallsWithValues())) {
	      return false;
	    }
	    return _RelayQueryNode5.prototype.equals.call(this, that);
	  };

	  RelayQueryField.prototype.cloneAsRefQueryDependency = function cloneAsRefQueryDependency() {
	    var field = new RelayQueryField(this.__concreteNode__, this.__root__, this.__variables__);
	    field.__children__ = [];
	    field.__isRefQueryDependency__ = true;
	    return field;
	  };

	  RelayQueryField.prototype.cloneFieldWithCalls = function cloneFieldWithCalls(children, calls) {
	    if (!this.canHaveSubselections()) {
	      // Compact new children *after* this check, for consistency.
	      __webpack_require__(1)(children.length === 0, 'RelayQueryNode: Cannot add children to field `%s` because it does ' + 'not support sub-selections (sub-fields).', this.getSchemaName());
	    }

	    // use `clone()` if call values do not change
	    if (__webpack_require__(23)(this.getCallsWithValues(), calls)) {
	      var clone = this.clone(children);
	      return clone;
	    }

	    var nextChildren = cloneChildren(this.getChildren(), children);
	    if (!nextChildren.length) {
	      return null;
	    }

	    var field = new RelayQueryField(this.__concreteNode__, this.__root__, this.__variables__);
	    field.__children__ = nextChildren;
	    field.__calls__ = calls;

	    return field;
	  };

	  /**
	   * The following types of arguments are non-core:
	   * - Range calls such as `first` or `find` on connections.
	   * - Conditionals when the field is present.
	   */


	  RelayQueryField.prototype._isCoreArg = function _isCoreArg(arg) {
	    return (
	      // `name(if:true)`, `name(unless:false)`, and `name` are equivalent.
	      !(arg.name === IF && String(arg.value) === TRUE) && !(arg.name === UNLESS && String(arg.value) === FALSE) &&
	      // Connection arguments can be stripped out.
	      !(this.isConnection() && __webpack_require__(6).isConnectionCall(arg))
	    );
	  };

	  return RelayQueryField;
	}(RelayQueryNode);

	function createNode(concreteNode, rootContext, variables) {
	  __webpack_require__(1)(typeof concreteNode === 'object' && concreteNode !== null, 'RelayQueryNode: Expected a GraphQL object created with `Relay.QL`, got' + '`%s`.', concreteNode);
	  var kind = concreteNode.kind;
	  var type = RelayQueryNode;
	  if (kind === 'Field') {
	    type = RelayQueryField;
	  } else if (kind === 'Fragment') {
	    type = RelayQueryFragment;
	  } else if (kind === 'FragmentSpread') {
	    var spread = __webpack_require__(39)(__webpack_require__(7).getFragmentSpread(concreteNode));
	    var rootVariables = rootContext.variables;
	    var argumentVariables = getFragmentSpreadArguments(spread.fragment.node.name, spread.args, variables, rootVariables);
	    var fragmentVariables = __webpack_require__(44).getFragmentVariables(spread.fragment, rootVariables, argumentVariables);
	    return createMemoizedFragment(spread.fragment.node, rootContext, fragmentVariables, {
	      isDeferred: false,
	      isContainerFragment: true,
	      isTypeConditional: false
	    });
	  } else if (kind === 'OperationDefinition') {
	    type = RelayOSSQuery;
	  } else if (kind === 'Query') {
	    type = RelayQueryRoot;
	  } else if (kind === 'Mutation') {
	    type = RelayQueryMutation;
	  } else if (kind === 'Subscription') {
	    type = RelayQuerySubscription;
	  } else if (concreteNode instanceof __webpack_require__(87)) {
	    var metaRoute = __webpack_require__(12).get(rootContext.routeName);
	    var fragment = concreteNode.getFragmentForRoute(metaRoute);
	    // May be null if no value was defined for this route.
	    if (Array.isArray(fragment)) {
	      // A route-conditional function may return a single fragment reference
	      // or an array of fragment references.
	      return fragment.map(function (frag) {
	        return createNode(frag, rootContext, variables);
	      });
	    } else if (fragment) {
	      return createNode(fragment, rootContext, variables);
	    }
	    return null;
	  } else if (concreteNode instanceof __webpack_require__(42)) {
	    var _fragment = concreteNode.getFragment(variables);
	    var _metaRoute = __webpack_require__(12).get(rootContext.routeName);
	    var _fragmentVariables = concreteNode.getVariables(_metaRoute, variables);
	    if (_fragment) {
	      // the fragment may be null when `if` or `unless` conditions are not met.
	      return createMemoizedFragment(_fragment, rootContext, _fragmentVariables, {
	        isDeferred: concreteNode.isDeferred(),
	        isContainerFragment: concreteNode.isContainerFragment(),
	        isTypeConditional: concreteNode.isTypeConditional()
	      });
	    }
	    return null;
	  } else {}
	  return new type(concreteNode, rootContext, variables);
	}

	/**
	 * Memoizes the `RelayQueryFragment` equivalent of a given GraphQL fragment
	 * for the given route, variables, and deferred status.
	 */
	function createMemoizedFragment(concreteFragment, rootContext, variables, metadata) {
	  var cacheKey = rootContext.routeName + ':' + __webpack_require__(29)(rootContext.variables) + ':' + __webpack_require__(29)(variables) + ':' + __webpack_require__(29)(metadata);
	  var fragment = concreteFragment.__cachedFragment__;
	  var fragmentCacheKey = concreteFragment.__cacheKey__;
	  if (!fragment || fragmentCacheKey !== cacheKey) {
	    fragment = new RelayQueryFragment(concreteFragment, rootContext, variables, metadata);
	    concreteFragment.__cachedFragment__ = fragment;
	    concreteFragment.__cacheKey__ = cacheKey;
	  }
	  return fragment;
	}

	/**
	 * Compacts new children and compares them to the previous children.
	 * - If all items are equal, returns previous array
	 * - If any items differ, returns new array
	 */
	function cloneChildren(prevChildren, nextChildren) {
	  var children = [];
	  var isSameChildren = true;

	  var prevIndex = 0;
	  for (var ii = 0; ii < nextChildren.length; ii++) {
	    var child = nextChildren[ii];
	    if (child) {
	      children.push(child);
	      isSameChildren = isSameChildren && child === prevChildren[prevIndex++];
	    }
	  }

	  if (isSameChildren && children.length === prevChildren.length) {
	    return prevChildren;
	  } else {
	    return children;
	  }
	}

	/**
	 * Creates an opaque serialization of calls.
	 */
	function serializeCalls(calls) {
	  if (calls.length) {
	    var callMap = {};
	    calls.forEach(function (call) {
	      callMap[call.name] = call.value;
	    });
	    return __webpack_require__(29)(callMap);
	  } else {
	    return '';
	  }
	}

	/**
	 * Checks if two sets of calls have equal names and values. This skips testing
	 * argument types because type metadata for scalar arguments may be omitted by
	 * the Babel plugin.
	 */
	function areCallValuesEqual(thisCalls, thatCalls) {
	  if (thisCalls.length !== thatCalls.length) {
	    return false;
	  }
	  return thisCalls.every(function (_ref2, ii) {
	    var thisName = _ref2.name,
	        thisValue = _ref2.value;
	    var _thatCalls$ii = thatCalls[ii],
	        thatName = _thatCalls$ii.name,
	        thatValue = _thatCalls$ii.value;

	    if (thisName !== thatName) {
	      return false;
	    }
	    if (thisValue instanceof __webpack_require__(131)) {
	      return thisValue.equals(thatValue);
	    }
	    return __webpack_require__(23)(thisValue, thatValue);
	  });
	}

	function createRootContext(metaRoute, variables) {
	  return {
	    routeName: metaRoute.name,
	    variables: variables
	  };
	}

	__webpack_require__(10).instrumentMethods(RelayQueryNode.prototype, {
	  clone: '@RelayQueryNode.prototype.clone',
	  equals: '@RelayQueryNode.prototype.equals',
	  getChildren: '@RelayQueryNode.prototype.getChildren',
	  getDirectives: '@RelayQueryNode.prototype.getDirectives',
	  hasDeferredDescendant: '@RelayQueryNode.prototype.hasDeferredDescendant',
	  getFieldByStorageKey: '@RelayQueryNode.prototype.getFieldByStorageKey'
	});

	__webpack_require__(10).instrumentMethods(RelayQueryField.prototype, {
	  getStorageKey: '@RelayQueryField.prototype.getStorageKey',
	  getSerializationKey: '@RelayQueryField.prototype.getSerializationKey'
	});

	module.exports = {
	  Field: RelayQueryField,
	  Fragment: RelayQueryFragment,
	  Mutation: RelayQueryMutation,
	  Node: RelayQueryNode,
	  Operation: RelayQueryOperation,
	  OSSQuery: RelayOSSQuery,
	  Root: RelayQueryRoot,
	  Subscription: RelayQuerySubscription
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRecord
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var MetadataKey = {
	  DATA_ID: '__dataID__',
	  FILTER_CALLS: '__filterCalls__',
	  FORCE_INDEX: '__forceIndex__',
	  MUTATION_IDS: '__mutationIDs__',
	  MUTATION_STATUS: '__mutationStatus__',
	  PATH: '__path__',
	  RANGE: '__range__',
	  RESOLVED_DEFERRED_FRAGMENTS: '__resolvedDeferredFragments__',
	  RESOLVED_FRAGMENT_MAP: '__resolvedFragmentMap__',
	  RESOLVED_FRAGMENT_MAP_GENERATION: '__resolvedFragmentMapGeneration__',
	  STATUS: '__status__'
	};

	var metadataKeyLookup = {};
	Object.keys(MetadataKey).forEach(function (name) {
	  metadataKeyLookup[MetadataKey[name]] = true;
	});

	/**
	 * Records are plain objects with special metadata properties.
	 */
	var RelayRecord = {
	  MetadataKey: MetadataKey,

	  create: function create(dataID) {
	    return { __dataID__: dataID };
	  },
	  createWithFields: function createWithFields(dataID, fields) {
	    return (0, _extends3['default'])({ __dataID__: dataID }, fields);
	  },
	  isRecord: function isRecord(maybeRecord) {
	    return typeof maybeRecord === 'object' && maybeRecord != null && !Array.isArray(maybeRecord) && typeof maybeRecord.__dataID__ === 'string';
	  },
	  getRecord: function getRecord(maybeRecord) {
	    if (RelayRecord.isRecord(maybeRecord)) {
	      return maybeRecord;
	    } else {
	      return null;
	    }
	  },
	  getDataID: function getDataID(record) {
	    return record.__dataID__;
	  },
	  getDataIDForObject: function getDataIDForObject(maybeRecord) {
	    return maybeRecord.__dataID__;
	  },


	  /**
	  * Checks whether the given ID was created on the client, as opposed to an ID
	  * that's understood by the server as well.
	  */
	  isClientID: function isClientID(dataID) {
	    return dataID.indexOf('client:') === 0;
	  },
	  isMetadataKey: function isMetadataKey(key) {
	    return metadataKeyLookup.hasOwnProperty(key);
	  }
	};

	module.exports = RelayRecord;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayConnectionInterface
	 * @format
	 */

	'use strict';

	module.exports = __webpack_require__(120);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule QueryBuilder
	 * 
	 * @format
	 */

	'use strict';

	var EMPTY_CALLS = [];
	var EMPTY_CHILDREN = [];
	var EMPTY_DIRECTIVES = [];
	var EMPTY_METADATA = {};

	if (true) {
	  Object.freeze(EMPTY_CALLS);
	  Object.freeze(EMPTY_CHILDREN);
	  Object.freeze(EMPTY_DIRECTIVES);
	  Object.freeze(EMPTY_METADATA);
	}

	/**
	 * @internal
	 *
	 * Helper methods for constructing concrete query objects.
	 */
	var QueryBuilder = {
	  createBatchCallVariable: function createBatchCallVariable(sourceQueryID, jsonPath) {
	    return {
	      kind: 'BatchCallVariable',
	      sourceQueryID: sourceQueryID,
	      jsonPath: jsonPath
	    };
	  },
	  createCall: function createCall(name, value, type) {
	    return {
	      kind: 'Call',
	      name: name,
	      metadata: {
	        type: type || null
	      },
	      value: value
	    };
	  },
	  createCallValue: function createCallValue(callValue) {
	    return {
	      kind: 'CallValue',
	      callValue: callValue
	    };
	  },
	  createCallVariable: function createCallVariable(callVariableName) {
	    return {
	      kind: 'CallVariable',
	      callVariableName: callVariableName
	    };
	  },
	  createDirective: function createDirective(name, args) {
	    return {
	      args: args,
	      kind: 'Directive',
	      name: name
	    };
	  },
	  createDirectiveArgument: function createDirectiveArgument(name, value) {
	    return {
	      name: name,
	      value: value
	    };
	  },
	  createField: function createField(partialField) {
	    var partialMetadata = partialField.metadata || EMPTY_METADATA;
	    return {
	      alias: partialField.alias,
	      calls: partialField.calls || EMPTY_CALLS,
	      children: partialField.children || EMPTY_CHILDREN,
	      directives: partialField.directives || EMPTY_DIRECTIVES,
	      fieldName: partialField.fieldName,
	      kind: 'Field',
	      metadata: {
	        canHaveSubselections: !!partialMetadata.canHaveSubselections,
	        inferredRootCallName: partialMetadata.inferredRootCallName,
	        inferredPrimaryKey: partialMetadata.inferredPrimaryKey,
	        isConnection: !!partialMetadata.isConnection,
	        isFindable: !!partialMetadata.isFindable,
	        isGenerated: !!partialMetadata.isGenerated,
	        isPlural: !!partialMetadata.isPlural,
	        isRequisite: !!partialMetadata.isRequisite,
	        isAbstract: !!partialMetadata.isAbstract
	      },
	      type: partialField.type
	    };
	  },
	  createFragment: function createFragment(partialFragment) {
	    var metadata = partialFragment.metadata || EMPTY_METADATA;
	    return {
	      children: partialFragment.children || EMPTY_CHILDREN,
	      directives: partialFragment.directives || EMPTY_DIRECTIVES,
	      id: __webpack_require__(68)(),
	      kind: 'Fragment',
	      metadata: {
	        isAbstract: !!metadata.isAbstract,
	        pattern: !!metadata.pattern,
	        plural: !!metadata.plural // match the `@relay` argument name
	      },
	      name: partialFragment.name,
	      type: partialFragment.type
	    };
	  },
	  createMutation: function createMutation(partialMutation) {
	    var metadata = partialMutation.metadata || EMPTY_METADATA;
	    return {
	      calls: partialMutation.calls || EMPTY_CALLS,
	      children: partialMutation.children || EMPTY_CHILDREN,
	      directives: partialMutation.directives || EMPTY_DIRECTIVES,
	      kind: 'Mutation',
	      metadata: {
	        inputType: metadata.inputType
	      },
	      name: partialMutation.name,
	      responseType: partialMutation.responseType
	    };
	  },
	  createQuery: function createQuery(partialQuery) {
	    var metadata = partialQuery.metadata || EMPTY_METADATA;
	    var calls = [];
	    var identifyingArgName = metadata.identifyingArgName;
	    if (identifyingArgName == null && __webpack_require__(8).isNodeRootCall(partialQuery.fieldName)) {
	      identifyingArgName = __webpack_require__(8).ID;
	    }
	    if (identifyingArgName != null) {
	      __webpack_require__(5)(partialQuery.identifyingArgValue != null, 'QueryBuilder.createQuery(): An argument value may be required for ' + 'query `%s(%s: ???)`.', partialQuery.fieldName, identifyingArgName);
	      calls = [QueryBuilder.createCall(identifyingArgName, partialQuery.identifyingArgValue, metadata.identifyingArgType)];
	    }
	    return {
	      calls: calls,
	      children: partialQuery.children || EMPTY_CHILDREN,
	      directives: partialQuery.directives || EMPTY_DIRECTIVES,
	      fieldName: partialQuery.fieldName,
	      isDeferred: !!(partialQuery.isDeferred || metadata.isDeferred),
	      kind: 'Query',
	      metadata: {
	        identifyingArgName: identifyingArgName,
	        identifyingArgType: metadata.identifyingArgType,
	        isAbstract: !!metadata.isAbstract,
	        isPlural: !!metadata.isPlural
	      },
	      name: partialQuery.name,
	      type: partialQuery.type
	    };
	  },
	  createSubscription: function createSubscription(partialSubscription) {
	    var metadata = partialSubscription.metadata || EMPTY_METADATA;
	    return {
	      calls: partialSubscription.calls || EMPTY_CALLS,
	      children: partialSubscription.children || EMPTY_CHILDREN,
	      directives: partialSubscription.directives || EMPTY_DIRECTIVES,
	      kind: 'Subscription',
	      metadata: {
	        inputType: metadata.inputType
	      },
	      name: partialSubscription.name,
	      responseType: partialSubscription.responseType
	    };
	  },
	  getBatchCallVariable: function getBatchCallVariable(node) {
	    if (isConcreteKind(node, 'BatchCallVariable')) {
	      return node;
	    }
	  },
	  getCallVariable: function getCallVariable(node) {
	    if (isConcreteKind(node, 'CallVariable')) {
	      return node;
	    }
	  },
	  getField: function getField(node) {
	    if (isConcreteKind(node, 'Field')) {
	      return node;
	    }
	  },
	  getFragment: function getFragment(node) {
	    if (isConcreteKind(node, 'Fragment')) {
	      return node;
	    }
	  },
	  getFragmentDefinition: function getFragmentDefinition(node) {
	    if (isConcreteKind(node, 'FragmentDefinition')) {
	      return node;
	    }
	  },
	  getFragmentSpread: function getFragmentSpread(node) {
	    if (isConcreteKind(node, 'FragmentSpread')) {
	      return node;
	    }
	  },
	  getOperationDefinition: function getOperationDefinition(node) {
	    if (isConcreteKind(node, 'OperationDefinition')) {
	      return node;
	    }
	  },
	  getMutation: function getMutation(node) {
	    if (isConcreteKind(node, 'Mutation')) {
	      return node;
	    }
	  },
	  getQuery: function getQuery(node) {
	    if (isConcreteKind(node, 'Query')) {
	      return node;
	    }
	  },
	  getSubscription: function getSubscription(node) {
	    if (isConcreteKind(node, 'Subscription')) {
	      return node;
	    }
	  }
	};

	function isConcreteKind(node, kind) {
	  return typeof node === 'object' && node !== null && node.kind === kind;
	}

	module.exports = QueryBuilder;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayNodeInterface
	 * 
	 * @format
	 */

	'use strict';

	var getResultsFromPayloadImpl = getResultsFromPayload;

	/**
	 * @internal
	 *
	 * Defines logic relevant to the informal "Node" GraphQL interface.
	 */
	var RelayNodeInterface = {
	  ANY_TYPE: '__any',
	  ID: 'id',
	  ID_TYPE: 'ID!',
	  NODE: 'node',
	  NODE_TYPE: 'Node',
	  NODES: 'nodes',
	  TYPENAME: '__typename',

	  isNodeRootCall: function isNodeRootCall(fieldName) {
	    return fieldName === RelayNodeInterface.NODE || fieldName === RelayNodeInterface.NODES;
	  },
	  getResultsFromPayload: function getResultsFromPayload(query, payload) {
	    return getResultsFromPayloadImpl(query, payload);
	  },


	  /**
	   * Allow for injecting custom behavior for getResultsFromPayload.
	   */
	  injectGetResultsFromPayloadImpl: function injectGetResultsFromPayloadImpl(impl) {
	    getResultsFromPayloadImpl = impl;
	  }
	};

	function getResultsFromPayload(query, payload) {
	  var results = [];

	  var rootBatchCall = query.getBatchCall();
	  if (rootBatchCall) {
	    getPayloadRecords(query, payload).forEach(function (result) {
	      if (typeof result !== 'object' || !result) {
	        return;
	      }
	      var dataID = result[RelayNodeInterface.ID];
	      __webpack_require__(1)(typeof dataID === 'string', 'RelayNodeInterface.getResultsFromPayload(): Unable to write ' + 'result with no `%s` field for query, `%s`.', RelayNodeInterface.ID, query.getName());
	      results.push({
	        result: result,
	        rootCallInfo: {
	          storageKey: RelayNodeInterface.NODE,
	          identifyingArgKey: dataID,
	          identifyingArgValue: dataID
	        }
	      });
	    });
	  } else {
	    var records = getPayloadRecords(query, payload);
	    var ii = 0;
	    var _storageKey = query.getStorageKey();
	    __webpack_require__(28)(query, function (_ref) {
	      var identifyingArgKey = _ref.identifyingArgKey,
	          identifyingArgValue = _ref.identifyingArgValue;

	      var result = records[ii++];
	      results.push({
	        result: result,
	        rootCallInfo: { storageKey: _storageKey, identifyingArgKey: identifyingArgKey, identifyingArgValue: identifyingArgValue }
	      });
	    });
	  }

	  return results;
	}

	function getPayloadRecords(query, payload) {
	  var fieldName = query.getFieldName();
	  var identifyingArg = query.getIdentifyingArg();
	  var identifyingArgValue = identifyingArg && identifyingArg.value || null;
	  var records = payload[fieldName];
	  if (!query.getBatchCall()) {
	    if (Array.isArray(identifyingArgValue)) {
	      __webpack_require__(1)(Array.isArray(records), 'RelayNodeInterface: Expected payload for root field `%s` to be ' + 'an array with %s results, instead received a single non-array result.', fieldName, identifyingArgValue.length);
	      __webpack_require__(1)(records.length === identifyingArgValue.length, 'RelayNodeInterface: Expected payload for root field `%s` to be ' + 'an array with %s results, instead received an array with %s results.', fieldName, identifyingArgValue.length, records.length);
	    } else if (Array.isArray(records)) {
	      __webpack_require__(1)(false, 'RelayNodeInterface: Expected payload for root field `%s` to be ' + 'a single non-array result, instead received an array with %s results.', fieldName, records.length);
	    }
	  }
	  return Array.isArray(records) ? records : [records || null];
	}

	module.exports = RelayNodeInterface;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQueryPath
	 * 
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(6),
	    EDGES = _require.EDGES;

	var ID = __webpack_require__(8).ID,
	    ID_TYPE = __webpack_require__(8).ID_TYPE,
	    NODE = __webpack_require__(8).NODE,
	    NODE_TYPE = __webpack_require__(8).NODE_TYPE,
	    TYPENAME = __webpack_require__(8).TYPENAME;

	var idField = __webpack_require__(2).Field.build({
	  fieldName: ID,
	  type: 'String'
	});
	var typeField = __webpack_require__(2).Field.build({
	  fieldName: TYPENAME,
	  type: 'String'
	});

	// Placeholder path used to write data to root record (ROOT_ID).
	var ROOT_RECORD_PATH = {
	  type: 'rootRecord'
	};

	/**
	 * @internal
	 *
	 * Represents the path (root plus fields) within a query that fetched a
	 * particular node. Each step of the path may represent a root query (for
	 * refetchable nodes) or the field path from the nearest refetchable node.
	 */
	var RelayQueryPath = {
	  getRootRecordPath: function getRootRecordPath() {
	    return ROOT_RECORD_PATH;
	  },
	  createForID: function createForID(dataID, name, routeName) {
	    __webpack_require__(1)(!__webpack_require__(3).isClientID(dataID), 'RelayQueryPath.createForID: Expected dataID to be a server id, got ' + '`%s`.', dataID);
	    return {
	      dataID: dataID,
	      name: name,
	      routeName: routeName || '$RelayQuery',
	      type: 'node'
	    };
	  },
	  create: function create(root) {
	    if (root.getFieldName() === NODE) {
	      var identifyingArg = root.getIdentifyingArg();
	      if (identifyingArg && typeof identifyingArg.value === 'string') {
	        return {
	          dataID: identifyingArg.value,
	          name: root.getName(),
	          routeName: root.getRoute().name,
	          type: 'node'
	        };
	      }
	    }
	    return {
	      root: root,
	      type: 'root'
	    };
	  },
	  getPath: function getPath(parent, node, dataID) {
	    if (dataID == null || __webpack_require__(3).isClientID(dataID)) {
	      return {
	        node: node,
	        parent: parent,
	        type: 'client'
	      };
	    } else if (parent.type === 'node' && parent.dataID === dataID) {
	      return parent;
	    } else {
	      return {
	        dataID: dataID,
	        name: RelayQueryPath.getName(parent),
	        routeName: RelayQueryPath.getRouteName(parent),
	        type: 'node'
	      };
	    }
	  },
	  isRootPath: function isRootPath(path) {
	    return path.type === 'node' || path.type === 'root';
	  },
	  getParent: function getParent(path) {
	    __webpack_require__(1)(path.type === 'client', 'RelayQueryPath: Cannot get the parent of a root path.');
	    return path.parent;
	  },
	  getName: function getName(path) {
	    while (path.type === 'client') {
	      path = path.parent;
	    }
	    if (path === ROOT_RECORD_PATH) {
	      return 'RootRecordPath';
	    } else if (path.type === 'root') {
	      return path.root.getName();
	    } else if (path.type === 'node') {
	      return path.name;
	    } else {
	      __webpack_require__(1)(false, 'RelayQueryPath.getName(): Invalid path `%s`.', path);
	    }
	  },
	  getRouteName: function getRouteName(path) {
	    while (path.type === 'client') {
	      path = path.parent;
	    }
	    if (path === ROOT_RECORD_PATH) {
	      return '$RelayQueryPath';
	    } else if (path.type === 'root') {
	      return path.root.getRoute().name;
	    } else if (path.type === 'node') {
	      return path.routeName;
	    } else {
	      __webpack_require__(1)(false, 'RelayQueryPath.getRouteName(): Invalid path `%s`.', path);
	    }
	  },
	  getQuery: function getQuery(store, path, appendNode) {
	    var child = appendNode;
	    var prevField = void 0;
	    while (path.type === 'client') {
	      var _node = path.node;
	      if (_node instanceof __webpack_require__(2).Field) {
	        var schemaName = _node.getSchemaName();
	        __webpack_require__(5)(!prevField || prevField !== EDGES || !_node.isConnection(), 'RelayQueryPath.getQuery(): Cannot generate accurate query for ' + 'path with connection `%s`. Consider adding an `id` field to each ' + '`node` to make them refetchable.', schemaName);
	        prevField = schemaName;
	      }
	      var idFieldName = _node instanceof __webpack_require__(2).Field ? _node.getInferredPrimaryKey() : ID;
	      if (idFieldName) {
	        child = _node.clone([child, _node.getFieldByStorageKey(idFieldName), _node.getFieldByStorageKey(TYPENAME)]);
	      } else {
	        child = _node.clone([child]);
	      }
	      path = path.parent;
	    }
	    __webpack_require__(1)(path.type !== 'rootRecord', 'RelayQueryPath: Attempted to construct a classic query, but the ' + 'record was initially fetched with new Relay APIs. Ensure that ' + 'deprecated components such as RelayContainer are not nested in ' + 'new APIs such as QueryRenderer or FragmentContainer.');
	    var root = path.type === 'root' ? path.root : createRootQueryFromNodePath(path);
	    var children = [child, root.getFieldByStorageKey(ID), root.getFieldByStorageKey(TYPENAME)];
	    var rootChildren = getRootFragmentForQuery(store, root, children);
	    var pathQuery = root.cloneWithRoute(rootChildren, appendNode.getRoute());
	    // for flow
	    __webpack_require__(1)(pathQuery instanceof __webpack_require__(2).Root, 'RelayQueryPath: Expected the root of path `%s` to be a query.', RelayQueryPath.getName(path));
	    return pathQuery;
	  }
	};

	function createRootQueryFromNodePath(nodePath) {
	  return __webpack_require__(2).Root.build(nodePath.name, NODE, nodePath.dataID, [idField, typeField], {
	    identifyingArgName: ID,
	    identifyingArgType: ID_TYPE,
	    isAbstract: true,
	    isDeferred: false,
	    isPlural: false
	  }, NODE_TYPE, nodePath.routeName);
	}

	function getRootFragmentForQuery(store, root, children) {
	  var nextChildren = [];
	  // $FlowIssue: Flow isn't recognizing that `filter(x => !!x)` returns a list
	  // of non-null values.
	  children.forEach(function (child) {
	    if (child) {
	      nextChildren.push(child);
	    }
	  });
	  if (!root.isAbstract()) {
	    // No need to wrap child nodes of a known concrete type.
	    return nextChildren;
	  }
	  var identifyingArgKeys = [];
	  __webpack_require__(28)(root, function (_ref) {
	    var identifyingArgKey = _ref.identifyingArgKey;

	    identifyingArgKeys.push(identifyingArgKey);
	  });
	  var identifyingArgKey = identifyingArgKeys[0];
	  var rootID = store.getDataID(root.getStorageKey(), identifyingArgKey);
	  var rootType = rootID && store.getType(rootID);

	  if (rootType != null) {
	    return [__webpack_require__(2).Fragment.build(root.getName(), rootType, nextChildren)];
	  } else {
	    var rootState = rootID != null ? store.getRecordState(rootID) : __webpack_require__(16).UNKNOWN;
	    __webpack_require__(5)(false, 'RelayQueryPath: No typename found for %s record `%s`. Generating a ' + 'possibly invalid query.', rootState.toLowerCase(), rootID);
	    return nextChildren;
	  }
	}

	module.exports = RelayQueryPath;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayProfiler
	 * 
	 * @format
	 */

	'use strict';

	var aggregateHandlersByName = {
	  '*': []
	};
	var profileHandlersByName = {
	  '*': []
	};

	var NOT_INVOKED = {};
	var defaultProfiler = { stop: __webpack_require__(56) };
	var shouldInstrument = function shouldInstrument(name) {
	  if (true) {
	    return true;
	  }
	  return name.charAt(0) !== '@';
	};

	/**
	 * @public
	 *
	 * Instruments methods to allow profiling various parts of Relay. Profiling code
	 * in Relay consists of three steps:
	 *
	 *  - Instrument the function to be profiled.
	 *  - Attach handlers to the instrumented function.
	 *  - Run the code which triggers the handlers.
	 *
	 * Handlers attached to instrumented methods are called with an instrumentation
	 * name and a callback that must be synchronously executed:
	 *
	 *   instrumentedMethod.attachHandler(function(name, callback) {
	 *     const start = performance.now();
	 *     callback();
	 *     console.log('Duration', performance.now() - start);
	 *   });
	 *
	 * Handlers for profiles are callbacks that return a stop method:
	 *
	 *   RelayProfiler.attachProfileHandler('profileName', (name, state) => {
	 *     const start = performance.now();
	 *     return function stop(name, state) {
	 *       console.log(`Duration (${name})`, performance.now() - start);
	 *     }
	 *   });
	 *
	 * In order to reduce the impact on performance in production, instrumented
	 * methods and profilers with names that begin with `@` will only be measured
	 * if `__DEV__` is true. This should be used for very hot functions.
	 */
	var RelayProfiler = {
	  /**
	   * Instruments methods on a class or object. This re-assigns the method in
	   * order to preserve function names in stack traces (which are detected by
	   * modern debuggers via heuristics). Example usage:
	   *
	   *   const RelayStore = { primeCache: function() {...} };
	   *   RelayProfiler.instrumentMethods(RelayStore, {
	   *     primeCache: 'RelayStore.primeCache'
	   *   });
	   *
	   *   RelayStore.primeCache.attachHandler(...);
	   *
	   * As a result, the methods will be replaced by wrappers that provide the
	   * `attachHandler` and `detachHandler` methods.
	   */
	  instrumentMethods: function instrumentMethods(object, names) {
	    __webpack_require__(11)(names, function (name, key) {
	      object[key] = RelayProfiler.instrument(name, object[key]);
	    });
	  },


	  /**
	   * Wraps the supplied function with one that provides the `attachHandler` and
	   * `detachHandler` methods. Example usage:
	   *
	   *   const printRelayQuery =
	   *     RelayProfiler.instrument('printRelayQuery', printRelayQuery);
	   *
	   *   printRelayQuery.attachHandler(...);
	   *
	   * NOTE: The instrumentation assumes that no handlers are attached or detached
	   * in the course of executing another handler.
	   */
	  instrument: function instrument(name, originalFunction) {
	    if (!shouldInstrument(name)) {
	      originalFunction.attachHandler = __webpack_require__(56);
	      originalFunction.detachHandler = __webpack_require__(56);
	      return originalFunction;
	    }
	    if (!aggregateHandlersByName.hasOwnProperty(name)) {
	      aggregateHandlersByName[name] = [];
	    }
	    var catchallHandlers = aggregateHandlersByName['*'];
	    var aggregateHandlers = aggregateHandlersByName[name];
	    var handlers = [];
	    var contexts = [];
	    var invokeHandlers = function invokeHandlers() {
	      var context = contexts[contexts.length - 1];
	      if (context[0]) {
	        context[0]--;
	        catchallHandlers[context[0]](name, invokeHandlers);
	      } else if (context[1]) {
	        context[1]--;
	        aggregateHandlers[context[1]](name, invokeHandlers);
	      } else if (context[2]) {
	        context[2]--;
	        handlers[context[2]](name, invokeHandlers);
	      } else {
	        context[5] = originalFunction.apply(context[3], context[4]);
	      }
	    };
	    var instrumentedCallback = function instrumentedCallback() {
	      var returnValue = void 0;
	      if (aggregateHandlers.length === 0 && handlers.length === 0 && catchallHandlers.length === 0) {
	        returnValue = originalFunction.apply(this, arguments);
	      } else {
	        contexts.push([catchallHandlers.length, aggregateHandlers.length, handlers.length, this, arguments, NOT_INVOKED]);
	        invokeHandlers();
	        var context = contexts.pop();
	        returnValue = context[5];
	        if (returnValue === NOT_INVOKED) {
	          throw new Error('RelayProfiler: Handler did not invoke original function.');
	        }
	      }
	      return returnValue;
	    };
	    instrumentedCallback.attachHandler = function (handler) {
	      handlers.push(handler);
	    };
	    instrumentedCallback.detachHandler = function (handler) {
	      __webpack_require__(74)(handlers, handler);
	    };
	    instrumentedCallback.displayName = '(instrumented ' + name + ')';
	    return instrumentedCallback;
	  },


	  /**
	   * Attaches a handler to all methods instrumented with the supplied name.
	   *
	   *   function createRenderer() {
	   *     return RelayProfiler.instrument('render', function() {...});
	   *   }
	   *   const renderA = createRenderer();
	   *   const renderB = createRenderer();
	   *
	   *   // Only profiles `renderA`.
	   *   renderA.attachHandler(...);
	   *
	   *   // Profiles both `renderA` and `renderB`.
	   *   RelayProfiler.attachAggregateHandler('render', ...);
	   *
	   */
	  attachAggregateHandler: function attachAggregateHandler(name, handler) {
	    if (shouldInstrument(name)) {
	      if (!aggregateHandlersByName.hasOwnProperty(name)) {
	        aggregateHandlersByName[name] = [];
	      }
	      aggregateHandlersByName[name].push(handler);
	    }
	  },


	  /**
	   * Detaches a handler attached via `attachAggregateHandler`.
	   */
	  detachAggregateHandler: function detachAggregateHandler(name, handler) {
	    if (shouldInstrument(name)) {
	      if (aggregateHandlersByName.hasOwnProperty(name)) {
	        __webpack_require__(74)(aggregateHandlersByName[name], handler);
	      }
	    }
	  },


	  /**
	   * Instruments profiling for arbitrarily asynchronous code by a name.
	   *
	   *   const timerProfiler = RelayProfiler.profile('timeout');
	   *   setTimeout(function() {
	   *     timerProfiler.stop();
	   *   }, 1000);
	   *
	   *   RelayProfiler.attachProfileHandler('timeout', ...);
	   *
	   * Arbitrary state can also be passed into `profile` as a second argument. The
	   * attached profile handlers will receive this as the second argument.
	   */
	  profile: function profile(name, state) {
	    var hasCatchAllHandlers = profileHandlersByName['*'].length > 0;
	    var hasNamedHandlers = profileHandlersByName.hasOwnProperty(name);
	    if (hasNamedHandlers || hasCatchAllHandlers) {
	      var profileHandlers = hasNamedHandlers && hasCatchAllHandlers ? profileHandlersByName[name].concat(profileHandlersByName['*']) : hasNamedHandlers ? profileHandlersByName[name] : profileHandlersByName['*'];
	      var stopHandlers = void 0;
	      for (var ii = profileHandlers.length - 1; ii >= 0; ii--) {
	        var profileHandler = profileHandlers[ii];
	        var stopHandler = profileHandler(name, state);
	        stopHandlers = stopHandlers || [];
	        stopHandlers.unshift(stopHandler);
	      }
	      return {
	        stop: function stop() {
	          if (stopHandlers) {
	            stopHandlers.forEach(function (stopHandler) {
	              return stopHandler();
	            });
	          }
	        }
	      };
	    }
	    return defaultProfiler;
	  },


	  /**
	   * Attaches a handler to profiles with the supplied name. You can also
	   * attach to the special name '*' which is a catch all.
	   */
	  attachProfileHandler: function attachProfileHandler(name, handler) {
	    if (shouldInstrument(name)) {
	      if (!profileHandlersByName.hasOwnProperty(name)) {
	        profileHandlersByName[name] = [];
	      }
	      profileHandlersByName[name].push(handler);
	    }
	  },


	  /**
	   * Detaches a handler attached via `attachProfileHandler`.
	   */
	  detachProfileHandler: function detachProfileHandler(name, handler) {
	    if (shouldInstrument(name)) {
	      if (profileHandlersByName.hasOwnProperty(name)) {
	        __webpack_require__(74)(profileHandlersByName[name], handler);
	      }
	    }
	  }
	};

	module.exports = RelayProfiler;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMetaRoute
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Meta route based on the real route; provides access to the route name in
	 * queries.
	 */

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var RelayMetaRoute = function () {
	  function RelayMetaRoute(name) {
	    (0, _classCallCheck3['default'])(this, RelayMetaRoute);

	    Object.defineProperty(this, 'name', {
	      enumerable: true,
	      value: name,
	      writable: false
	    });
	  }

	  RelayMetaRoute.get = function get(name) {
	    return cache[name] || (cache[name] = new RelayMetaRoute(name));
	  };

	  return RelayMetaRoute;
	}();

	var cache = {};

	module.exports = RelayMetaRoute;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayClassicRecordState
	 * 
	 * @format
	 */

	'use strict';

	var RelayClassicRecordState = {
	  /**
	   * Record exists (either fetched from the server or produced by a local,
	   * optimistic update).
	   */
	  EXISTENT: 'EXISTENT',

	  /**
	   * Record is known not to exist (either as the result of a mutation, or
	   * because the server returned `null` when queried for the record).
	   */
	  NONEXISTENT: 'NONEXISTENT',

	  /**
	   * Record State is unknown because it has not yet been fetched from the
	   * server.
	   */
	  UNKNOWN: 'UNKNOWN'
	};

	module.exports = RelayClassicRecordState;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule GraphQLMutatorConstants
	 * @format
	 */

	'use strict';

	var GraphQLMutatorConstants = {
	  APPEND: 'append',
	  IGNORE: 'ignore',
	  PREPEND: 'prepend',
	  REFETCH: 'refetch',
	  REMOVE: 'remove',

	  NODE_DELETE_HANDLER: 'node_delete',
	  RANGE_ADD_HANDLER: 'range_add',
	  RANGE_DELETE_HANDLER: 'range_delete',

	  HANDLER_TYPES: {},

	  OPTIMISTIC_UPDATE: 'optimistic',
	  SERVER_UPDATE: 'server',
	  POLLER_UPDATE: 'poller',

	  UPDATE_TYPES: {},

	  RANGE_OPERATIONS: {}
	};

	GraphQLMutatorConstants.HANDLER_TYPES[GraphQLMutatorConstants.NODE_DELETE_HANDLER] = true;
	GraphQLMutatorConstants.HANDLER_TYPES[GraphQLMutatorConstants.RANGE_ADD_HANDLER] = true;
	GraphQLMutatorConstants.HANDLER_TYPES[GraphQLMutatorConstants.RANGE_DELETE_HANDLER] = true;

	GraphQLMutatorConstants.UPDATE_TYPES[GraphQLMutatorConstants.OPTIMISTIC_UPDATE] = true;
	GraphQLMutatorConstants.UPDATE_TYPES[GraphQLMutatorConstants.SERVER_UPDATE] = true;
	GraphQLMutatorConstants.UPDATE_TYPES[GraphQLMutatorConstants.POLLER_UPDATE] = true;

	GraphQLMutatorConstants.RANGE_OPERATIONS[GraphQLMutatorConstants.APPEND] = true;
	GraphQLMutatorConstants.RANGE_OPERATIONS[GraphQLMutatorConstants.IGNORE] = true;
	GraphQLMutatorConstants.RANGE_OPERATIONS[GraphQLMutatorConstants.PREPEND] = true;
	GraphQLMutatorConstants.RANGE_OPERATIONS[GraphQLMutatorConstants.REFETCH] = true;
	GraphQLMutatorConstants.RANGE_OPERATIONS[GraphQLMutatorConstants.REMOVE] = true;

	module.exports = GraphQLMutatorConstants;

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMutationTransactionStatus
	 * 
	 * @format
	 */

	'use strict';

	var RelayMutationTransactionStatus = {
	  /**
	   * Transaction has been created but an optimistic update has not been applied.
	   * Transaction can be applied (optimistic) or committed (sent to server).
	   */
	  CREATED: 'CREATED',

	  /**
	   * Transaction hasn't yet been sent to the server. Client has an optimistic
	   * update applied if the mutation defined one. Transaction can be committed or
	   * rolled back.
	   */
	  UNCOMMITTED: 'UNCOMMITTED',

	  /**
	   * Transaction was committed but another transaction with the same collision
	   * key is pending, so the transaction has been queued to send to the server.
	   */
	  COMMIT_QUEUED: 'COMMIT_QUEUED',

	  /**
	   * Transaction was queued for commit but another transaction with the same
	   * collision queue failed to commit. All transactions in the collision
	   * queue, including this one, have been failed as well. Transaction can be
	   * recommitted or rolled back.
	   */
	  COLLISION_COMMIT_FAILED: 'COLLISION_COMMIT_FAILED',

	  /**
	   * Transaction was sent to the server for comitting and a response is awaited.
	   */
	  COMMITTING: 'COMMITTING',

	  /**
	   * Transaction was sent to the server for comitting but was failed.
	   */
	  COMMIT_FAILED: 'COMMIT_FAILED',

	  /**
	   * Transaction has been rolled back by the developer.
	   */
	  ROLLED_BACK: 'ROLLED_BACK'
	};

	module.exports = RelayMutationTransactionStatus;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayFragmentPointer
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Fragment pointers encapsulate the fetched data for a fragment reference. They
	 * are opaque tokens that are used by Relay containers to read data that is then
	 * passed to the underlying React component.
	 *
	 * @internal
	 */
	var RelayFragmentPointer = {
	  addFragment: function addFragment(record, fragment) {
	    var fragmentMap = record.__fragments__;
	    if (fragmentMap == null) {
	      fragmentMap = record.__fragments__ = {};
	    }
	    __webpack_require__(1)(typeof fragmentMap === 'object' && fragmentMap != null, 'RelayFragmentPointer: Expected record to contain a fragment map, got ' + '`%s` for record `%s`.', fragmentMap, record.__dataID__);
	    var fragmentID = fragment.getConcreteFragmentID();
	    var variableList = fragmentMap[fragmentID];
	    if (variableList == null) {
	      variableList = fragmentMap[fragmentID] = [];
	    }
	    __webpack_require__(1)(Array.isArray(variableList), 'RelayFragmentPointer: Expected record to contain a fragment/variable ' + 'map, got `%s` for record `%s`.', variableList, record.__dataID__);
	    variableList.push(fragment.getVariables());
	  },


	  /**
	   * Returns true if the concrete fragment is included in the fragment pointer
	   * results, regardless of the variables.
	   */
	  hasConcreteFragment: function hasConcreteFragment(record, fragment) {
	    var fragmentMap = record.__fragments__;
	    if (typeof fragmentMap === 'object' && fragmentMap != null) {
	      var _fragmentID = fragment.getConcreteFragmentID();
	      return fragmentMap.hasOwnProperty(_fragmentID);
	    }
	    return false;
	  },


	  /**
	   * Returns true if the combination of concrete fragment + variables is
	   * included in the fragment pointer results.
	   */
	  hasFragment: function hasFragment(record, fragment) {
	    var variableList = RelayFragmentPointer.getFragmentVariables(record, fragment);
	    if (variableList != null) {
	      return variableList.some(function (vars) {
	        return __webpack_require__(23)(vars, fragment.getVariables());
	      });
	    }
	    return false;
	  },
	  getVariablesForID: function getVariablesForID(record, fragmentID) {
	    var fragmentMap = record.__fragments__;
	    if (typeof fragmentMap === 'object' && fragmentMap != null) {
	      var variables = fragmentMap[fragmentID];
	      if (variables) {
	        __webpack_require__(1)(Array.isArray(variables) && variables.length === 1, 'RelayFragmentPointer: Expected an array with at most one set of ' + 'variables per concrete fragment, got %s.', variables);
	        return variables[0];
	      }
	    }
	    return null;
	  },


	  /**
	   * Returns the list of variables whose results are available for the given
	   * concrete fragment.
	   */
	  getFragmentVariables: function getFragmentVariables(record, fragment) {
	    var fragmentMap = record.__fragments__;
	    if (typeof fragmentMap === 'object' && fragmentMap != null) {
	      var _fragmentID2 = fragment.getConcreteFragmentID();
	      return fragmentMap[_fragmentID2];
	    }
	    return null;
	  },
	  create: function create(dataID, fragment) {
	    var record = __webpack_require__(3).create(dataID);
	    RelayFragmentPointer.addFragment(record, fragment);
	    /* $FlowFixMe - Flow error detected during the deployment of v0.38.0. To see
	     * the error, remove this comment and run flow */
	    return record;
	  },
	  createForRoot: function createForRoot(store, query) {
	    var fragment = getRootFragment(query);
	    if (!fragment) {
	      return null;
	    }
	    var storageKey = query.getStorageKey();
	    var pointers = [];
	    __webpack_require__(28)(query, function (_ref) {
	      var identifyingArgKey = _ref.identifyingArgKey;

	      var dataID = store.getDataID(storageKey, identifyingArgKey);
	      if (dataID == null) {
	        pointers.push(null);
	      } else {
	        pointers.push(RelayFragmentPointer.create(dataID, fragment));
	      }
	    });
	    // Distinguish between singular/plural queries.
	    var identifyingArg = query.getIdentifyingArg();
	    var identifyingArgValue = identifyingArg && identifyingArg.value || null;
	    if (Array.isArray(identifyingArgValue)) {
	      return pointers;
	    }
	    return pointers[0];
	  }
	};

	function getRootFragment(query) {
	  var batchCall = query.getBatchCall();
	  if (batchCall) {
	    __webpack_require__(1)(false, 'Queries supplied at the root cannot have batch call variables. Query ' + '`%s` has a batch call variable, `%s`.', query.getName(), batchCall.refParamName);
	  }
	  var fragment = void 0;
	  query.getChildren().forEach(function (child) {
	    if (child instanceof __webpack_require__(2).Fragment) {
	      __webpack_require__(1)(!fragment, 'Queries supplied at the root should contain exactly one fragment ' + "(e.g. `${Component.getFragment('...')}`). Query `%s` contains " + 'more than one fragment.', query.getName());
	      fragment = child;
	    } else if (child instanceof __webpack_require__(2).Field) {
	      __webpack_require__(1)(child.isGenerated(), 'Queries supplied at the root should contain exactly one fragment ' + 'and no fields. Query `%s` contains a field, `%s`. If you need to ' + 'fetch fields, declare them in a Relay container.', query.getName(), child.getSchemaName());
	    }
	  });
	  return fragment;
	}

	module.exports = RelayFragmentPointer;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMutationType
	 * 
	 * @format
	 */

	'use strict';

	var RelayMutationType = {
	  FIELDS_CHANGE: 'FIELDS_CHANGE',
	  NODE_DELETE: 'NODE_DELETE',
	  RANGE_ADD: 'RANGE_ADD',
	  RANGE_DELETE: 'RANGE_DELETE',
	  REQUIRED_CHILDREN: 'REQUIRED_CHILDREN'
	};

	module.exports = RelayMutationType;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayPropTypes
	 * 
	 * @format
	 */

	'use strict';

	var RelayPropTypes = {
	  Container: function Container(props, propName, componentName) {
	    var component = props[propName];
	    if (component == null) {
	      return new Error(__webpack_require__(41)('Required prop `%s` was not specified in `%s`.', propName, componentName));
	    } else if (!__webpack_require__(93)(component)) {
	      return new Error(__webpack_require__(41)('Invalid prop `%s` supplied to `%s`, expected a RelayContainer.', propName, componentName));
	    }
	    return null;
	  },
	  Environment: function Environment(props, propName, componentName) {
	    var context = props[propName];
	    if (!__webpack_require__(72)(context) || !__webpack_require__(95)(context)) {
	      return new Error(__webpack_require__(41)('Invalid prop/context `%s` supplied to `%s`, expected `%s` to be ' + 'an object conforming to the `RelayEnvironment` interface.', propName, componentName, context));
	    }
	    return null;
	  },


	  QueryConfig: __webpack_require__(17).shape({
	    name: __webpack_require__(17).string.isRequired,
	    params: __webpack_require__(17).object.isRequired,
	    queries: __webpack_require__(17).object.isRequired
	  }),

	  ClassicRelay: function ClassicRelay(props, propName, componentName) {
	    var relay = props[propName];
	    if (!__webpack_require__(94)(relay) || !__webpack_require__(72)(relay.environment)) {
	      return new Error(__webpack_require__(41)('Invalid prop/context `%s` supplied to `%s`, expected `%s` to be ' + 'an object with a classic `environment` implementation and `variables`.', propName, componentName, relay));
	    }
	    return null;
	  },
	  Relay: function Relay(props, propName, componentName) {
	    var relay = props[propName];
	    if (!__webpack_require__(94)(relay)) {
	      return new Error(__webpack_require__(41)('Invalid prop/context `%s` supplied to `%s`, expected `%s` to be ' + 'an object with an `environment` and `variables`.', propName, componentName, relay));
	    }
	    return null;
	  }
	};

	module.exports = RelayPropTypes;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQueryVisitor
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Base class for traversing a Relay Query.
	 *
	 * Subclasses can optionally implement methods to customize the traversal:
	 *
	 * - `visitField(field, state)`: Called for each field.
	 * - `visitFragment(fragment, state)`: Called for each fragment.
	 * - `visitQuery(fragment, state)`: Called for the top level query.
	 *
	 * A `state` variable is passed along to all callbacks and can be used to
	 * accumulate data while traversing (effectively passing data back up the tree),
	 * or modify the behavior of later callbacks (effectively passing data down the
	 * tree).
	 *
	 * There are two additional methods for controlling the traversal:
	 *
	 * - `traverse(parent, state)`: Visits all children of `parent`. Subclasses
	 *   may override in order to short-circuit traversal. Note that
	 *   `visit{Field,Fragment,Query}` are //not// called on `parent`, as it will
	 *   already have been visited by the time this method is called.
	 * - `visit(child, state)`: Processes the `child` node, calling the appropriate
	 *   `visit{Field,Fragment,Query}` method based on the node type.
	 *
	 * By convention, each of the callback methods returns the visited node. This is
	 * used by the `RelayQueryTransform` subclass to implement mapping and filtering
	 * behavior, but purely-visitor subclases do not need to follow this convention.
	 *
	 * @see RelayQueryTransform
	 */
	var RelayQueryVisitor = function () {
	  function RelayQueryVisitor() {
	    (0, _classCallCheck3['default'])(this, RelayQueryVisitor);
	  }

	  RelayQueryVisitor.prototype.visit = function visit(node, nextState) {
	    if (node instanceof __webpack_require__(2).Field) {
	      return this.visitField(node, nextState);
	    } else if (node instanceof __webpack_require__(2).Fragment) {
	      return this.visitFragment(node, nextState);
	    } else if (node instanceof __webpack_require__(2).Root) {
	      return this.visitRoot(node, nextState);
	    }
	  };

	  RelayQueryVisitor.prototype.traverse = function traverse(node, nextState) {
	    if (node.canHaveSubselections()) {
	      this.traverseChildren(node, nextState, function (child) {
	        this.visit(child, nextState);
	      }, this);
	    }
	    return node;
	  };

	  RelayQueryVisitor.prototype.traverseChildren = function traverseChildren(node, nextState, callback, context) {
	    var children = node.getChildren();
	    for (var _index = 0; _index < children.length; _index++) {
	      callback.call(context, children[_index], _index, children);
	    }
	  };

	  RelayQueryVisitor.prototype.visitField = function visitField(node, nextState) {
	    return this.traverse(node, nextState);
	  };

	  RelayQueryVisitor.prototype.visitFragment = function visitFragment(node, nextState) {
	    return this.traverse(node, nextState);
	  };

	  RelayQueryVisitor.prototype.visitRoot = function visitRoot(node, nextState) {
	    return this.traverse(node, nextState);
	  };

	  return RelayQueryVisitor;
	}();

	module.exports = RelayQueryVisitor;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayStore
	 * 
	 * @format
	 */

	'use strict';

	module.exports = new (__webpack_require__(78))();

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachRootCallArg
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @internal
	 *
	 * Iterates over the identifying arguments in the supplied root call.
	 * If the identifying value is null or undefined, the supplied callback will be
	 * invoked once.
	 */
	function forEachRootCallArg(query, callback) {
	  __webpack_require__(1)(!query.getBatchCall(), 'forEachRootCallArg(): Cannot iterate over batch call variables.');
	  function each(identifyingArgValue, fn) {
	    if (Array.isArray(identifyingArgValue)) {
	      identifyingArgValue.forEach(function (value) {
	        return each(value, fn);
	      });
	    } else {
	      fn({
	        identifyingArgValue: identifyingArgValue,
	        identifyingArgKey: identifyingArgValue == null ? null : typeof identifyingArgValue === 'string' ? identifyingArgValue : __webpack_require__(29)(identifyingArgValue)
	      });
	    }
	  }
	  var identifyingArg = query.getIdentifyingArg();
	  var identifyingArgValue = identifyingArg && identifyingArg.value || null;
	  each(identifyingArgValue, callback);
	}

	module.exports = forEachRootCallArg;

/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule stableStringify
	 * 
	 * @format
	 */

	'use strict';

	function isObject(value) {
	  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
	}

	/**
	 * Simple recursive stringifier that handles basic objects (does not handle
	 * corner cases such as circular references) and produces a JSON-like
	 * serialization suitable for use as a cache key or other similar internal
	 * book-keeping detail.
	 *
	 * Sample input:
	 *
	 *     var object = {
	 *       top2: {
	 *         middle: {
	 *           inner: [1, 'foo', ['bar', 2]],
	 *           other: false,
	 *         },
	 *       },
	 *       top1: [
	 *         {first: true},
	 *         {first: false},
	 *         'random',
	 *       ],
	 *       misc: true,
	 *       extra: null,
	 *     };
	 *
	 * Sample output (some whitespace added for clarity):
	 *
	 *    {
	 *      extra:null,
	 *      misc:true,
	 *      top1:[0:{first:true},1:{first:false},2:"random"],
	 *      top2:{middle:{inner:[0:1,1:"foo",2:[0:"bar",1:2]],other:false}}
	 *    }
	 */
	function stableStringify(input) {
	  var inputIsArray = Array.isArray(input);
	  var inputIsObject = isObject(input);
	  if (inputIsArray || inputIsObject) {
	    var keys = Object.keys(input);
	    if (keys.length) {
	      var result = [];
	      keys.sort();

	      for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var value = input[key];
	        if (isObject(value) || Array.isArray(value)) {
	          value = stableStringify(value);
	        } else {
	          value = JSON.stringify(value);
	        }
	        result.push(key + ':' + value);
	      }

	      if (inputIsArray) {
	        return '[' + result.join(',') + ']';
	      } else {
	        return '{' + result.join(',') + '}';
	      }
	    }
	  }
	  return JSON.stringify(input);
	}

	module.exports = stableStringify;

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule GraphQLSegment
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Represents one contiguous segment of edges within a `GraphQLRange`. Has
	 * methods for adding/removing edges (`appendEdge`, `prependEdge`, `removeEdge`)
	 * and working with cursors (`getFirstCursor`, `getLastCursor` etc)
	 *
	 * Edges are never actually deleted from segments; they are merely marked as
	 * being deleted. As such, `GraphQLSegment` offers both a `getCount` method
	 * (returning the number of non-deleted edges) and a `getLength` method (which
	 * returns the total number, including deleted edges).
	 *
	 * Used mostly as an implementation detail internal to `GraphQLRange`.
	 *
	 * @internal
	 */
	var GraphQLSegment = function () {
	  function GraphQLSegment() {
	    (0, _classCallCheck3['default'])(this, GraphQLSegment);

	    // We use a map rather than an array because indices can become negative
	    // when prepending.
	    this._indexToMetadataMap = {};

	    // We keep track of past indices to ensure we can delete them completely.
	    this._idToIndicesMap = {};
	    this._cursorToIndexMap = {};

	    this._count = 0;
	    this._minIndex = null;
	    this._maxIndex = null;
	  }

	  /**
	   * @param {string} cursor
	   * @return {?number}
	   */


	  GraphQLSegment.prototype._getIndexForCursor = function _getIndexForCursor(cursor) {
	    return this._cursorToIndexMap[cursor];
	  };

	  /**
	   * @param {string} id
	   * @return {?number}
	   */


	  GraphQLSegment.prototype._getIndexForID = function _getIndexForID(id) {
	    var indices = this._idToIndicesMap[id];
	    return indices && indices[0];
	  };

	  /**
	   * @return {?string} cursor for first non-deleted edge
	   */


	  GraphQLSegment.prototype.getFirstCursor = function getFirstCursor() {
	    if (this.getLength()) {
	      for (var ii = this._minIndex; ii <= this._maxIndex; ii++) {
	        var metadata = this._indexToMetadataMap[ii];
	        if (!metadata.deleted) {
	          return metadata.cursor;
	        }
	      }
	    }
	  };

	  /**
	   * @return {?string} cursor for last non-deleted edge
	   */


	  GraphQLSegment.prototype.getLastCursor = function getLastCursor() {
	    if (this.getLength()) {
	      for (var ii = this._maxIndex; ii >= this._minIndex; ii--) {
	        var metadata = this._indexToMetadataMap[ii];
	        if (!metadata.deleted) {
	          return metadata.cursor;
	        }
	      }
	    }
	  };

	  /**
	   * @return {boolean} returns whether cursor is before the first non-deleted
	   * cursor inclusively.
	   */


	  GraphQLSegment.prototype.isFirstCursor = function isFirstCursor(cursor) {
	    if (this.getLength()) {
	      for (var ii = this._minIndex; ii <= this._maxIndex; ii++) {
	        var metadata = this._indexToMetadataMap[ii];
	        if (!metadata.deleted) {
	          return metadata.cursor === cursor;
	        } else if (metadata.cursor === cursor) {
	          return true;
	        }
	      }
	      return false;
	    }
	  };

	  /**
	   * @return {boolean} returns whether cursor is after the last non-deleted
	   * cursor inclusively.
	   */


	  GraphQLSegment.prototype.isLastCursor = function isLastCursor(cursor) {
	    if (this.getLength()) {
	      for (var ii = this._maxIndex; ii >= this._minIndex; ii--) {
	        var metadata = this._indexToMetadataMap[ii];
	        if (!metadata.deleted) {
	          return metadata.cursor === cursor;
	        } else if (metadata.cursor === cursor) {
	          return true;
	        }
	      }
	      return false;
	    }
	  };

	  /**
	   * @return {?string} id for first non-deleted edge
	   */


	  GraphQLSegment.prototype.getFirstID = function getFirstID() {
	    if (this.getLength()) {
	      for (var ii = this._minIndex; ii <= this._maxIndex; ii++) {
	        var metadata = this._indexToMetadataMap[ii];
	        if (!metadata.deleted) {
	          return metadata.edgeID;
	        }
	      }
	    }
	  };

	  /**
	   * @return {?string} id for last non-deleted edge
	   */


	  GraphQLSegment.prototype.getLastID = function getLastID() {
	    if (this.getLength()) {
	      for (var ii = this._maxIndex; ii >= this._minIndex; ii--) {
	        var metadata = this._indexToMetadataMap[ii];
	        if (!metadata.deleted) {
	          return metadata.edgeID;
	        }
	      }
	    }
	  };

	  /**
	   * @param {number} index
	   * @return {?object} Returns the not-deleted edge at index
	   */


	  GraphQLSegment.prototype._getEdgeAtIndex = function _getEdgeAtIndex(index) {
	    var edge = this._indexToMetadataMap[index];
	    return edge && !edge.deleted ? edge : null;
	  };

	  /**
	   * Returns whether there is a non-deleted edge for id
	   * @param {string} id
	   * @return {boolean}
	   */


	  GraphQLSegment.prototype.containsEdgeWithID = function containsEdgeWithID(id) {
	    var index = this._getIndexForID(id);
	    if (index === undefined) {
	      return false;
	    }
	    return !!this._getEdgeAtIndex(index);
	  };

	  /**
	   * Returns whether there is a non-deleted edge for cursor
	   * @param {string} cursor
	   * @param {?boolean} includeDeleted
	   * @return {boolean}
	   */


	  GraphQLSegment.prototype.containsEdgeWithCursor = function containsEdgeWithCursor(cursor) {
	    var includeDeleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    var index = this._getIndexForCursor(cursor);
	    if (index === undefined) {
	      return false;
	    } else if (includeDeleted) {
	      return true;
	    }
	    return !!this._getEdgeAtIndex(index);
	  };

	  /**
	   * Returns up to count number of ids and cursors that is after input cursor
	   * @param {number} count
	   * @param {?string} cursor
	   * @return {object} object with arrays of ids and cursors
	   */


	  GraphQLSegment.prototype.getMetadataAfterCursor = function getMetadataAfterCursor(count, cursor) {
	    if (!this.getLength()) {
	      return {
	        edgeIDs: [],
	        cursors: []
	      };
	    }
	    var currentIndex = this._minIndex;
	    if (cursor) {
	      var index = this._getIndexForCursor(cursor);
	      if (index === undefined) {
	        console.warn('This segment does not have a cursor %s', cursor);
	        return {
	          edgeIDs: [],
	          cursors: []
	        };
	      }
	      currentIndex = index + 1;
	    }
	    var total = 0;
	    var edgeIDs = [];
	    var cursors = [];

	    while (currentIndex <= this._maxIndex && total < count) {
	      var metadata = this._indexToMetadataMap[currentIndex];
	      if (!metadata.deleted) {
	        edgeIDs.push(metadata.edgeID);
	        cursors.push(metadata.cursor);
	        total++;
	      }
	      currentIndex++;
	    }
	    return {
	      edgeIDs: edgeIDs,
	      cursors: cursors
	    };
	  };

	  /**
	   * Returns up to count number of ids and cursors that is before index
	   * @param {number} count
	   * @param {?string} cursor
	   * @return {object} object with arrays of ids and cursors
	   */


	  GraphQLSegment.prototype.getMetadataBeforeCursor = function getMetadataBeforeCursor(count, cursor) {
	    if (!this.getLength()) {
	      return {
	        edgeIDs: [],
	        cursors: []
	      };
	    }
	    var currentIndex = this._maxIndex;
	    if (cursor) {
	      var index = this._getIndexForCursor(cursor);
	      if (index === undefined) {
	        console.warn('This segment does not have a cursor %s', cursor);
	        return {
	          edgeIDs: [],
	          cursors: []
	        };
	      }
	      currentIndex = index - 1;
	    }
	    var total = 0;
	    var edgeIDs = [];
	    var cursors = [];
	    while (currentIndex >= this._minIndex && total < count) {
	      var metadata = this._indexToMetadataMap[currentIndex];
	      if (!metadata.deleted) {
	        edgeIDs.push(metadata.edgeID);
	        cursors.push(metadata.cursor);
	        total++;
	      }
	      currentIndex--;
	    }

	    // Reverse edges because larger index were added first
	    return {
	      edgeIDs: edgeIDs.reverse(),
	      cursors: cursors.reverse()
	    };
	  };

	  /**
	   * @param {object} edge
	   * @param {number} index
	   */


	  GraphQLSegment.prototype._addEdgeAtIndex = function _addEdgeAtIndex(edge, index) {
	    var edgeID = __webpack_require__(3).getDataIDForObject(edge);
	    var cursor = edge.cursor;

	    var idIndex = this._getIndexForID(edgeID);
	    // If the id is has an index and is not deleted
	    if (idIndex !== undefined && this._getEdgeAtIndex(idIndex)) {
	      console.warn('Attempted to add an ID already in GraphQLSegment: %s', edgeID);
	      return;
	    }

	    if (this.getLength() === 0) {
	      this._minIndex = index;
	      this._maxIndex = index;
	    } else if (this._minIndex === index + 1) {
	      this._minIndex = index;
	    } else if (this._maxIndex === index - 1) {
	      this._maxIndex = index;
	    } else {
	      console.warn('Attempted to add noncontiguous index to GraphQLSegment: ' + index + ' to ' + ('(' + this._minIndex + ', ' + this._maxIndex + ')'));

	      return;
	    }

	    this._indexToMetadataMap[index] = {
	      edgeID: edgeID,
	      cursor: cursor,
	      deleted: false
	    };
	    this._idToIndicesMap[edgeID] = this._idToIndicesMap[edgeID] || [];
	    this._idToIndicesMap[edgeID].unshift(index);
	    this._count++;

	    if (cursor) {
	      this._cursorToIndexMap[cursor] = index;
	    }
	  };

	  /**
	   * @param {object} edge should have cursor and a node with id
	   */


	  GraphQLSegment.prototype.prependEdge = function prependEdge(edge) {
	    this._addEdgeAtIndex(edge, this._minIndex !== null ? this._minIndex - 1 : 0);
	  };

	  /**
	   * @param {object} edge should have cursor and a node with id
	   */


	  GraphQLSegment.prototype.appendEdge = function appendEdge(edge) {
	    this._addEdgeAtIndex(edge, this._maxIndex !== null ? this._maxIndex + 1 : 0);
	  };

	  /**
	   * Mark the currently valid edge with given id to be deleted.
	   *
	   * @param {string} id the id of the edge to be removed
	   */


	  GraphQLSegment.prototype.removeEdge = function removeEdge(id) {
	    var index = this._getIndexForID(id);
	    if (index === undefined) {
	      console.warn('Attempted to remove edge with ID that was never in GraphQLSegment: ' + id);
	      return;
	    }
	    var data = this._indexToMetadataMap[index];
	    if (data.deleted) {
	      console.warn('Attempted to remove edge with ID that was already removed: ' + id);
	      return;
	    }
	    data.deleted = true;
	    this._count--;
	  };

	  /**
	   * Mark all edges with given id to be deleted. This is used by
	   * delete mutations to ensure both the current and past edges are no longer
	   * accessible.
	   *
	   * @param {string} id the id of the edge to be removed
	   */


	  GraphQLSegment.prototype.removeAllEdges = function removeAllEdges(id) {
	    var indices = this._idToIndicesMap[id];
	    if (!indices) {
	      return;
	    }
	    for (var ii = 0; ii < indices.length; ii++) {
	      var data = this._indexToMetadataMap[indices[ii]];
	      if (!data.deleted) {
	        data.deleted = true;
	        this._count--;
	      }
	    }
	  };

	  /**
	   * @param {array} edges
	   * @param {?string} cursor
	   */


	  GraphQLSegment.prototype.addEdgesAfterCursor = function addEdgesAfterCursor(edges, cursor) {
	    if (!edges.length) {
	      return;
	    }
	    // Default adding after with no cursor to -1
	    // So the first element in the segment is stored at index 0
	    var index = -1;
	    if (cursor) {
	      index = this._getIndexForCursor(cursor);
	      if (index === undefined) {
	        console.warn('This segment does not have a cursor %s', cursor);
	        return;
	      }
	    }

	    while (this._maxIndex !== null && index < this._maxIndex) {
	      var data = this._indexToMetadataMap[index + 1];
	      // Skip over elements that have been deleted
	      // so we can add new edges on the end.
	      if (data.deleted) {
	        index++;
	      } else {
	        console.warn('Attempted to do an overwrite to GraphQLSegment: ' + 'last index is ' + this._maxIndex + ' trying to add edges before ' + index);
	        return;
	      }
	    }

	    var startIndex = index + 1;
	    for (var ii = 0; ii < edges.length; ii++) {
	      var edge = edges[ii];
	      this._addEdgeAtIndex(edge, startIndex + ii);
	    }
	  };

	  /**
	   * @param {array} edges - should be in increasing order of index
	   * @param {?string} cursor
	   */


	  GraphQLSegment.prototype.addEdgesBeforeCursor = function addEdgesBeforeCursor(edges, cursor) {
	    if (!edges.length) {
	      return;
	    }
	    // Default adding before with no cursor to 1
	    // So the first element in the segment is stored at index 0
	    var index = 1;
	    if (cursor) {
	      index = this._getIndexForCursor(cursor);
	      if (index === undefined) {
	        console.warn('This segment does not have a cursor %s', cursor);
	        return;
	      }
	    }

	    while (this._minIndex !== null && index > this._minIndex) {
	      var data = this._indexToMetadataMap[index - 1];
	      // Skip over elements that have been deleted
	      // so we can add new edges in the front.
	      if (data.deleted) {
	        index--;
	      } else {
	        console.warn('Attempted to do an overwrite to GraphQLSegment: ' + 'first index is ' + this._minIndex + ' trying to add edges after ' + index);
	        return;
	      }
	    }

	    // Edges must be added in reverse order since the
	    // segment must be continuous at all times.
	    var startIndex = index - 1;
	    for (var ii = 0; ii < edges.length; ii++) {
	      // Iterates from edges.length - 1 to 0
	      var edge = edges[edges.length - ii - 1];
	      this._addEdgeAtIndex(edge, startIndex - ii);
	    }
	  };

	  /**
	   * This is the total length of the segment including the deleted edges.
	   * Non-zero length guarantees value max and min indices.
	   * DO NOT USE THIS TO DETERMINE THE TOTAL NUMBER OF EDGES; use `getCount`
	   * instead.
	   * @return {number}
	   */


	  GraphQLSegment.prototype.getLength = function getLength() {
	    if (this._minIndex === null && this._maxIndex === null) {
	      return 0;
	    }

	    return this._maxIndex - this._minIndex + 1;
	  };

	  /**
	   * Returns the total number of non-deleted edges in the segment.
	   *
	   * @return {number}
	   */


	  GraphQLSegment.prototype.getCount = function getCount() {
	    return this._count;
	  };

	  /**
	   * In the event of a failed `concatSegment` operation, rollback internal
	   * properties to their former values.
	   *
	   * @param {object} cursorRollbackMap
	   * @param {object} idRollbackMap
	   * @param {object} counters
	   */


	  GraphQLSegment.prototype._rollback = function _rollback(cursorRollbackMap, idRollbackMap, counters) {
	    Object.assign(this._cursorToIndexMap, cursorRollbackMap);
	    Object.assign(this._idToIndicesMap, idRollbackMap);

	    // no need to reset _indexToMetadataMap; resetting counters is enough
	    this._count = counters.count;
	    this._maxIndex = counters.maxIndex;
	    this._minIndex = counters.minIndex;
	  };

	  /**
	   * @return {object} Captured counter state.
	   */


	  GraphQLSegment.prototype._getCounterState = function _getCounterState() {
	    return {
	      count: this._count,
	      maxIndex: this._maxIndex,
	      minIndex: this._minIndex
	    };
	  };

	  /**
	   * Copies over content of the input segment and add to the current
	   * segment.
	   * @param {GraphQLSegment} segment - the segment to be copied over
	   * @return {boolean} whether or not we successfully concatenated the segments
	   */


	  GraphQLSegment.prototype.concatSegment = function concatSegment(segment) {
	    if (!segment.getLength()) {
	      return true;
	    }
	    var idRollbackMap = {};
	    var cursorRollbackMap = {};
	    var counterState = this._getCounterState();
	    var newEdges = segment._indexToMetadataMap;
	    for (var ii = segment._minIndex; ii <= segment._maxIndex; ii++) {
	      var index = void 0;
	      if (this.getLength()) {
	        index = this._maxIndex + 1;
	      } else {
	        index = 0;
	        this._minIndex = 0;
	      }
	      this._maxIndex = index;

	      var newEdge = newEdges[ii];
	      var idIndex = this._getIndexForID(newEdge.edgeID);
	      if (!idRollbackMap.hasOwnProperty(newEdge.edgeID)) {
	        if (this._idToIndicesMap[newEdge.edgeID]) {
	          idRollbackMap[newEdge.edgeID] = this._idToIndicesMap[newEdge.edgeID].slice();
	        } else {
	          idRollbackMap[newEdge.edgeID] = undefined;
	        }
	      }
	      // Check for id collision. Can't have same id twice
	      if (idIndex !== undefined) {
	        var idEdge = this._indexToMetadataMap[idIndex];
	        if (idEdge.deleted && !newEdge.deleted) {
	          // We want to map to most recent edge. Only write to the front of map
	          // if existing edge with id is deleted or have an older deletion
	          // time.
	          this._idToIndicesMap[newEdge.edgeID].unshift(index);
	        } else if (!newEdge.deleted) {
	          console.warn('Attempt to concat an ID already in GraphQLSegment: %s', newEdge.edgeID);
	          this._rollback(cursorRollbackMap, idRollbackMap, counterState);
	          return false;
	        } else {
	          // We want to keep track of past edges as well. Write these indices
	          // to the end of the array.
	          this._idToIndicesMap[newEdge.edgeID] = this._idToIndicesMap[newEdge.edgeID] || [];
	          this._idToIndicesMap[newEdge.edgeID].push(index);
	        }
	      } else {
	        this._idToIndicesMap[newEdge.edgeID] = this._idToIndicesMap[newEdge.edgeID] || [];
	        this._idToIndicesMap[newEdge.edgeID].unshift(index);
	      }
	      var cursorIndex = this._getIndexForCursor(newEdge.cursor);
	      // Check for cursor collision. Can't have same cursor twice
	      if (cursorIndex !== undefined) {
	        var cursorEdge = this._indexToMetadataMap[cursorIndex];
	        if (cursorEdge.deleted && !newEdge.deleted) {
	          // We want to map to most recent edge. Only write in the cursor map if
	          // existing edge with cursor is deleted or have and older deletion
	          // time.
	          cursorRollbackMap[newEdge.cursor] = this._cursorToIndexMap[newEdge.cursor];
	          this._cursorToIndexMap[newEdge.cursor] = index;
	        } else if (!newEdge.deleted) {
	          console.warn('Attempt to concat a cursor already in GraphQLSegment: %s', newEdge.cursor);
	          this._rollback(cursorRollbackMap, idRollbackMap, counterState);
	          return false;
	        }
	      } else if (newEdge.cursor) {
	        cursorRollbackMap[newEdge.cursor] = this._cursorToIndexMap[newEdge.cursor];
	        this._cursorToIndexMap[newEdge.cursor] = index;
	      }
	      if (!newEdge.deleted) {
	        this._count++;
	      }
	      this._indexToMetadataMap[index] = Object.assign({}, newEdge);
	    }

	    return true;
	  };

	  GraphQLSegment.prototype.toJSON = function toJSON() {
	    return [this._indexToMetadataMap, this._idToIndicesMap, this._cursorToIndexMap, this._minIndex, this._maxIndex, this._count];
	  };

	  GraphQLSegment.fromJSON = function fromJSON(descriptor) {
	    var indexToMetadataMap = descriptor[0],
	        idToIndicesMap = descriptor[1],
	        cursorToIndexMap = descriptor[2],
	        minIndex = descriptor[3],
	        maxIndex = descriptor[4],
	        count = descriptor[5];

	    var segment = new GraphQLSegment();
	    segment._indexToMetadataMap = indexToMetadataMap;
	    segment._idToIndicesMap = idToIndicesMap;
	    segment._cursorToIndexMap = cursorToIndexMap;
	    segment._minIndex = minIndex;
	    segment._maxIndex = maxIndex;
	    segment._count = count;
	    return segment;
	  };

	  GraphQLSegment.prototype.__debug = function __debug() {
	    return {
	      metadata: this._indexToMetadataMap,
	      idToIndices: this._idToIndicesMap,
	      cursorToIndex: this._cursorToIndexMap
	    };
	  };

	  /**
	   * Returns a list of all IDs that were registered for this segment.
	   */


	  GraphQLSegment.prototype.getEdgeIDs = function getEdgeIDs() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { includeDeleted: false },
	        includeDeleted = _ref.includeDeleted;

	    var edgeIds = [];
	    if (this.getLength() > 0) {
	      for (var ii = this._minIndex; ii <= this._maxIndex; ii++) {
	        var _indexToMetadataMap$i = this._indexToMetadataMap[ii],
	            deleted = _indexToMetadataMap$i.deleted,
	            edgeID = _indexToMetadataMap$i.edgeID;

	        if (includeDeleted || !deleted) {
	          edgeIds.push(edgeID);
	        }
	      }
	    }
	    return edgeIds;
	  };

	  return GraphQLSegment;
	}();

	module.exports = GraphQLSegment;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayChangeTracker
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Keeps track of records that have been created or updated; used primarily to
	 * record changes during the course of a `write` operation.
	 */
	var RelayChangeTracker = function () {
	  function RelayChangeTracker() {
	    (0, _classCallCheck3['default'])(this, RelayChangeTracker);

	    this._created = {};
	    this._updated = {};
	  }

	  /**
	   * Record the creation of a record.
	   */


	  RelayChangeTracker.prototype.createID = function createID(recordID) {
	    this._created[recordID] = true;
	  };

	  /**
	   * Record an update to a record.
	   */


	  RelayChangeTracker.prototype.updateID = function updateID(recordID) {
	    if (!this._created.hasOwnProperty(recordID)) {
	      this._updated[recordID] = true;
	    }
	  };

	  /**
	   * Determine if the record has any changes (was created or updated).
	   */


	  RelayChangeTracker.prototype.hasChange = function hasChange(recordID) {
	    return !!(this._updated[recordID] || this._created[recordID]);
	  };

	  /**
	   * Determine if the record was created.
	   */


	  RelayChangeTracker.prototype.isNewRecord = function isNewRecord(recordID) {
	    return !!this._created[recordID];
	  };

	  /**
	   * Get the ids of records that were created/updated.
	   */


	  RelayChangeTracker.prototype.getChangeSet = function getChangeSet() {
	    if (true) {
	      return {
	        created: Object.freeze(this._created),
	        updated: Object.freeze(this._updated)
	      };
	    }
	    return {
	      created: this._created,
	      updated: this._updated
	    };
	  };

	  return RelayChangeTracker;
	}();

	module.exports = RelayChangeTracker;

/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayFetchMode
	 * 
	 * @format
	 */

	'use strict';

	var RelayFetchMode = Object.freeze({
	  CLIENT: 'CLIENT',
	  PRELOAD: 'PRELOAD',
	  REFETCH: 'REFETCH'
	});

	module.exports = RelayFetchMode;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule callsFromGraphQL
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @internal
	 *
	 * Convert from GraphQL call nodes to plain object `{name,value}` calls.
	 */
	function callsFromGraphQL(concreteCalls, variables) {
	  // $FlowIssue: ConcreteCall should flow into CallOrDirective
	  var callsOrDirectives = concreteCalls;
	  var orderedCalls = [];
	  for (var ii = 0; ii < callsOrDirectives.length; ii++) {
	    var callOrDirective = callsOrDirectives[ii];
	    var _value = callOrDirective.value;

	    if (_value != null) {
	      if (Array.isArray(_value)) {
	        _value = _value.map(function (arg) {
	          return getCallValue(arg, variables);
	        });
	      } else if (_value.kind === 'BatchCallVariable') {
	        // Batch calls are handled separately
	        _value = null;
	      } else {
	        _value = getCallValue(_value, variables);
	      }
	    }
	    var _metadata = callOrDirective.metadata,
	        _name = callOrDirective.name;

	    var orderedCall = { name: _name, value: _value };
	    if (_metadata && _metadata.type) {
	      orderedCall.type = _metadata.type;
	    }
	    orderedCalls.push(orderedCall);
	  }
	  return orderedCalls;
	}

	function getCallValue(concreteValue, variables) {
	  var callValue = void 0;
	  if (concreteValue.kind === 'CallValue') {
	    callValue = concreteValue.callValue;
	  } else {
	    var variableName = concreteValue.callVariableName;
	    __webpack_require__(1)(variables.hasOwnProperty(variableName), 'callsFromGraphQL(): Expected a declared value for variable, `$%s`.', variableName);
	    callValue = variables[variableName];
	  }
	  // Perform a shallow check to ensure the value conforms to `CallValue` type:
	  // For performance reasons, skip recursively testing array/object values.
	  var valueType = typeof callValue;
	  __webpack_require__(1)(callValue == null || valueType === 'boolean' || valueType === 'number' || valueType === 'string' || valueType === 'object', 'callsFromGraphQL(): Expected argument value `%s` to either be null or a ' + 'boolean, number, string, or array/object.', JSON.stringify(callValue));
	  return callValue;
	}

	module.exports = callsFromGraphQL;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule generateClientID
	 * 
	 * @format
	 */

	'use strict';

	var _clientID = 1;
	var _prefix = 'client:' + __webpack_require__(101)('' + __webpack_require__(152)());

	/**
	 * Generate a unique clientID for GraphQL data objects that do not already have
	 * an ID or their ID = null
	 *
	 * @internal
	 */
	function generateClientID() {
	  return _prefix + _clientID++;
	}

	module.exports = generateClientID;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule serializeRelayQueryCall
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @internal
	 *
	 * Serializes a query "call" (a classic combination of field and argument value).
	 */
	function serializeRelayQueryCall(call) {
	  var value = call.value;

	  var valueString = void 0;
	  if (Array.isArray(value)) {
	    valueString = __webpack_require__(151)(value).map(function (value) {
	      return serializeCallValue(value);
	    }).join(',');
	  } else {
	    valueString = serializeCallValue(value);
	  }
	  return '.' + call.name + '(' + valueString + ')';
	}

	function serializeCallValue(value) {
	  if (value == null) {
	    return '';
	  } else if (typeof value !== 'string') {
	    return JSON.stringify(value);
	  } else {
	    return value;
	  }
	}

	module.exports = serializeRelayQueryCall;

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_40__;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayFragmentReference
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * RelayFragmentReference is the return type of fragment composition:
	 *
	 *   fragment on Foo {
	 *     ${Child.getFragment('bar', {baz: variables.qux})}
	 *   }
	 *
	 * Whereas a fragment defines a sub-query's structure, a fragment reference is
	 * a particular instantiation of the fragment as it is composed within a query
	 * or another fragment. It encodes the source fragment, initial variables, and
	 * a mapping from variables in the composing query's (or fragment's) scope to
	 * variables in the fragment's scope.
	 *
	 * The variable mapping is represented by `variableMapping`, a dictionary that
	 * maps from names of variables in the parent scope to variables that exist in
	 * the fragment. Example:
	 *
	 * ```
	 * // Fragment:
	 * var Container = Relay.createContainer(..., {
	 *   initialVariables: {
	 *     private: 'foo',
	 *     public: 'bar',
	 *     variable: null,
	 *   },
	 *   fragments: {
	 *     foo: ...
	 *   }
	 * });
	 *
	 * // Reference:
	 * ${Container.getQuery(
	 *   'foo',
	 *   // Variable Mapping:
	 *   {
	 *     public: 'BAR',
	 *     variable: variables.source,
	 *   }
	 * )}
	 * ```
	 *
	 * When evaluating the referenced fragment, `$public` will be overridden with
	 * `'Bar'`. The value of `$variable` will become the value of `$source` in the
	 * outer scope. This is analagous to:
	 *
	 * ```
	 * function inner(private = 'foo', public = 'bar', variable) {}
	 * function outer(source) {
	 *   inner(public = 'BAR', variable = source);
	 * }
	 * ```
	 *
	 * Where the value of the inner `variable` depends on how `outer` is called.
	 *
	 * The `prepareVariables` function allows for variables to be modified based on
	 * the runtime environment or route name.
	 */
	var RelayFragmentReference = function () {
	  RelayFragmentReference.createForContainer = function createForContainer(fragmentGetter, initialVariables, variableMapping, prepareVariables) {
	    var reference = new RelayFragmentReference(fragmentGetter, initialVariables, variableMapping, prepareVariables);
	    reference._isContainerFragment = true;
	    return reference;
	  };

	  function RelayFragmentReference(fragmentGetter, initialVariables, variableMapping, prepareVariables) {
	    (0, _classCallCheck3['default'])(this, RelayFragmentReference);

	    this._conditions = null;
	    this._initialVariables = initialVariables || {};
	    this._fragment = undefined;
	    this._fragmentGetter = fragmentGetter;
	    this._isContainerFragment = false;
	    this._isDeferred = false;
	    this._isTypeConditional = false;
	    this._variableMapping = variableMapping;
	    this._prepareVariables = prepareVariables;
	  }

	  RelayFragmentReference.prototype.conditionOnType = function conditionOnType() {
	    this._isTypeConditional = true;
	    return this;
	  };

	  RelayFragmentReference.prototype.getConditions = function getConditions() {
	    return this._conditions;
	  };

	  RelayFragmentReference.prototype.getFragmentUnconditional = function getFragmentUnconditional() {
	    var fragment = this._fragment;
	    if (fragment == null) {
	      fragment = this._fragmentGetter();
	      this._fragment = fragment;
	    }
	    return fragment;
	  };

	  RelayFragmentReference.prototype.getInitialVariables = function getInitialVariables() {
	    return this._initialVariables;
	  };

	  RelayFragmentReference.prototype.getVariableMapping = function getVariableMapping() {
	    return this._variableMapping;
	  };

	  /**
	   * Mark this usage of the fragment as deferred.
	   */


	  RelayFragmentReference.prototype.defer = function defer() {
	    this._isDeferred = true;
	    return this;
	  };

	  /**
	   * Mark this fragment for inclusion only if the given variable is truthy.
	   */


	  RelayFragmentReference.prototype['if'] = function _if(value) {
	    var callVariable = __webpack_require__(7).getCallVariable(value);
	    __webpack_require__(1)(callVariable, 'RelayFragmentReference: Invalid value `%s` supplied to `if()`. ' + 'Expected a variable.', callVariable);
	    this._addCondition({
	      passingValue: true,
	      variable: callVariable.callVariableName
	    });
	    return this;
	  };

	  /**
	   * Mark this fragment for inclusion only if the given variable is falsy.
	   */


	  RelayFragmentReference.prototype.unless = function unless(value) {
	    var callVariable = __webpack_require__(7).getCallVariable(value);
	    __webpack_require__(1)(callVariable, 'RelayFragmentReference: Invalid value `%s` supplied to `unless()`. ' + 'Expected a variable.', callVariable);
	    this._addCondition({
	      passingValue: false,
	      variable: callVariable.callVariableName
	    });
	    return this;
	  };

	  /**
	   * Get the referenced fragment if all conditions are met.
	   */


	  RelayFragmentReference.prototype.getFragment = function getFragment(variables) {
	    // determine if the variables match the supplied if/unless conditions
	    var conditions = this._conditions;
	    if (conditions && !conditions.every(function (_ref) {
	      var variable = _ref.variable,
	          passingValue = _ref.passingValue;

	      return !!variables[variable] === passingValue;
	    })) {
	      return null;
	    }
	    return this.getFragmentUnconditional();
	  };

	  /**
	   * Get the variables to pass to the referenced fragment, accounting for
	   * initial values, overrides, and route-specific variables.
	   */


	  RelayFragmentReference.prototype.getVariables = function getVariables(route, variables) {
	    var _this = this;

	    var innerVariables = (0, _extends3['default'])({}, this._initialVariables);

	    // map variables from outer -> inner scope
	    var variableMapping = this._variableMapping;
	    if (variableMapping) {
	      __webpack_require__(11)(variableMapping, function (value, name) {
	        var callVariable = __webpack_require__(7).getCallVariable(value);
	        if (callVariable) {
	          value = variables[callVariable.callVariableName];
	        }
	        if (value === undefined) {
	          __webpack_require__(5)(false, 'RelayFragmentReference: Variable `%s` is undefined in fragment ' + '`%s`.', name, _this.getFragmentUnconditional().name);
	        } else {
	          innerVariables[name] = value;
	        }
	      });
	    }

	    var prepareVariables = this._prepareVariables;
	    if (prepareVariables) {
	      innerVariables = prepareVariables(innerVariables, route);
	    }

	    return innerVariables;
	  };

	  RelayFragmentReference.prototype.isContainerFragment = function isContainerFragment() {
	    return this._isContainerFragment;
	  };

	  RelayFragmentReference.prototype.isDeferred = function isDeferred() {
	    return this._isDeferred;
	  };

	  RelayFragmentReference.prototype.isTypeConditional = function isTypeConditional() {
	    return this._isTypeConditional;
	  };

	  RelayFragmentReference.prototype._addCondition = function _addCondition(condition) {
	    var conditions = this._conditions;
	    if (!conditions) {
	      conditions = [];
	      this._conditions = conditions;
	    }
	    conditions.push(condition);
	  };

	  return RelayFragmentReference;
	}();

	module.exports = RelayFragmentReference;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMutationDebugPrinter
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @internal
	 *
	 * Helper functions to print mutation queries for debugging purposes.
	 */
	var RelayMutationDebugPrinter = {
	  printOptimisticMutation: function printOptimisticMutation(query, response) {
	    /* eslint-disable no-console */
	    if (!console.groupCollapsed || !console.groupEnd) {
	      return;
	    }
	    RelayMutationDebugPrinter.printMutation(query, 'Optimistic');

	    console.groupCollapsed('Optimistic Response');
	    console.log(response);
	    console.groupEnd();
	    /* eslint-enable no-console */
	  },
	  printMutation: function printMutation(query, name) {
	    /* eslint-disable no-console */
	    if (!console.groupCollapsed || !console.groupEnd) {
	      return;
	    }
	    var printedQuery = query ? __webpack_require__(52)(query) : null;
	    name = name || 'Mutation';

	    console.groupCollapsed(name + ' Variables');
	    console.log(printedQuery ? printedQuery.variables : {});
	    console.groupEnd();

	    console.groupCollapsed(name + ' Query');
	    console.log(printedQuery ? printedQuery.text : '');
	    console.groupEnd();
	    /* eslint-enable no-console */
	  }
	};

	module.exports = RelayMutationDebugPrinter;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayVariables
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Determines the variables that are in scope for a fragment given the variables
	 * in scope at the root query as well as any arguments applied at the fragment
	 * spread via `@arguments`.
	 *
	 * Note that this is analagous to determining function arguments given a function call.
	 */
	function getFragmentVariables(fragment, rootVariables, argumentVariables) {
	  var variables = void 0;
	  fragment.argumentDefinitions.forEach(function (definition) {
	    if (argumentVariables.hasOwnProperty(definition.name)) {
	      return;
	    }
	    variables = variables || (0, _extends3['default'])({}, argumentVariables);
	    switch (definition.kind) {
	      case 'LocalArgument':
	        variables[definition.name] = definition.defaultValue;
	        break;
	      case 'RootArgument':
	        // In the new core this would be an error. In the classic core a variable
	        // may be conditionally unused, in which case it's okay for it to be
	        // null.
	        var rootValue = rootVariables[definition.name];
	        variables[definition.name] = rootValue !== undefined ? rootValue : null;
	        break;
	      default:
	        __webpack_require__(1)(false, 'RelayVariables: Unexpected node kind `%s` in fragment `%s`.', definition.kind, fragment.node.name);
	    }
	  });
	  return variables || argumentVariables;
	}

	function getFragmentSpreadArguments(fragmentName, variableMapping, parentVariables, rootVariables) {
	  return __webpack_require__(38)(variableMapping, function (value, name) {
	    var callVariable = __webpack_require__(7).getCallVariable(value);
	    if (callVariable) {
	      value = parentVariables.hasOwnProperty(callVariable.callVariableName) ? parentVariables[callVariable.callVariableName] : rootVariables[callVariable.callVariableName];
	    }
	    if (value === undefined) {
	      __webpack_require__(5)(false, 'RelayVariables.getFragmentSpreadArguments(): Variable `%s` is ' + 'undefined in fragment `%s`.', name, fragmentName);
	      value = null;
	    }
	    return value;
	  });
	}

	/**
	 * Determines the variables that are in scope for a given operation given values
	 * for some/all of its arguments. Extraneous input variables are filtered from
	 * the output, and missing variables are set to default values (if given in the
	 * operation's definition).
	 */
	function getOperationVariables(operation, variables) {
	  var operationVariables = {};
	  operation.argumentDefinitions.forEach(function (def) {
	    var value = def.defaultValue;
	    if (variables[def.name] != null) {
	      value = variables[def.name];
	    }
	    operationVariables[def.name] = value;
	  });
	  return operationVariables;
	}

	module.exports = {
	  getFragmentSpreadArguments: getFragmentSpreadArguments,
	  getFragmentVariables: getFragmentVariables,
	  getOperationVariables: getOperationVariables
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isCompatibleRelayFragmentType
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @internal
	 *
	 * Determine if the given fragment's type is compatible with the given record
	 * type. The types are considered compatible if they exactly match or in the
	 * following cases:
	 * - Types are not recorded for optimistic records; if the record type is null
	 *   it is assumed to be compatible with the fragment.
	 * - Abstract fragments are assumed to be compatible with all types; being more
	 *   precise would require access to the full schema inheritance hierarchy.
	 */
	function isCompatibleRelayFragmentType(fragment, recordType) {
	  return recordType === fragment.getType() || !recordType || fragment.isAbstract();
	}

	module.exports = isCompatibleRelayFragmentType;

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule throwFailedPromise
	 * @format
	 */

	'use strict';

	/**
	 * This function is used in place of the non-standard promise.done() method.
	 * However, this is an anti-pattern as any function which operates on a Promise
	 * should instead consider returning that Promise for the caller to handle
	 * failure itself.
	 */

	function throwFailedPromise(promise) {
	  promise.then(undefined, function (error) {
	    return setTimeout(function () {
	      throw error;
	    }, 0);
	  });
	}

	module.exports = throwFailedPromise;

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMutationTracker
	 * 
	 * @format
	 */

	'use strict';

	// Maintains a map from the client id to the server id of
	// optimistically added nodes
	var clientIDToServerIDMap = {};

	// For node-create mutations, maintains an index of the mutation to the
	// client ID of an optimistically created node (if it exists).
	var mutationIDToClientNodeIDMap = {};

	// For mutations that have errors, maintains a two-directional index of the
	// mutation and node with an error.
	var clientMutationIDToErrorNodeID = {};
	var clientNodeIDToErrorMutationID = {};

	/**
	 * @internal
	 *
	 * Records the client ID and error status of mutations as well as maintaining
	 * a mapping of optimistic client IDs to server IDs.
	 */
	var RelayMutationTracker = {
	  /**
	  * Checks if the given id represents an object only known on the client side
	  * or not. In this case, it is both a client id and does not have a
	  * corresponding mapping in the client server id map.
	  */
	  isClientOnlyID: function isClientOnlyID(dataID) {
	    return __webpack_require__(3).isClientID(dataID) && !clientIDToServerIDMap[dataID];
	  },

	  /**
	   * Updates the map from the client id to the server id for optimistically
	   * added nodes.
	   */
	  updateClientServerIDMap: function updateClientServerIDMap(clientID, serverID) {
	    clientIDToServerIDMap[clientID] = serverID;
	  },

	  /**
	   * Gets the serverID (if one exists) for a given clientID
	   */
	  getServerIDForClientID: function getServerIDForClientID(clientID) {
	    return clientIDToServerIDMap[clientID] || null;
	  },

	  /**
	   * Record the root node ID associated with the mutation.
	   */
	  putClientIDForMutation: function putClientIDForMutation(clientID, clientMutationID) {
	    mutationIDToClientNodeIDMap[clientMutationID] = clientID;

	    // if an error exists for this mutation ID, remove the error on the previous
	    // client ID and 'move' the error on the new client ID
	    var errorNodeID = RelayMutationTracker.getErrorNodeForMutation(clientMutationID);
	    if (errorNodeID) {
	      RelayMutationTracker.deleteMutationForErrorNode(errorNodeID);
	      RelayMutationTracker.putErrorNodeForMutation(clientID, clientMutationID);
	    }
	  },

	  /**
	   * Get the root record ID associated with the muation.
	   */
	  getClientIDForMutation: function getClientIDForMutation(clientMutationID) {
	    return mutationIDToClientNodeIDMap[clientMutationID];
	  },

	  /**
	   * Delete the root record ID associated with the mutation.
	   */
	  deleteClientIDForMutation: function deleteClientIDForMutation(clientMutationID) {
	    delete mutationIDToClientNodeIDMap[clientMutationID];
	  },

	  /**
	   * Record that an error occurred while creating the given (client) record ID.
	   */
	  putErrorNodeForMutation: function putErrorNodeForMutation(clientID, clientMutationID) {
	    clientNodeIDToErrorMutationID[clientID] = clientMutationID;
	    clientMutationIDToErrorNodeID[clientMutationID] = clientID;
	  },

	  /**
	   * Find the failed mutation that created the given (client) record ID,
	   * if any.
	   */
	  getMutationForErrorNode: function getMutationForErrorNode(clientID) {
	    return clientNodeIDToErrorMutationID[clientID];
	  },

	  /**
	   * Find the (client) ID of the record associated with the given mutation,
	   * if any.
	   */
	  getErrorNodeForMutation: function getErrorNodeForMutation(clientMutationID) {
	    return clientMutationIDToErrorNodeID[clientMutationID];
	  },

	  deleteMutationForErrorNode: function deleteMutationForErrorNode(clientID) {
	    delete clientNodeIDToErrorMutationID[clientID];
	  },

	  deleteErrorNodeForMutation: function deleteErrorNodeForMutation(clientMutationID) {
	    delete clientMutationIDToErrorNodeID[clientMutationID];
	  }
	};

	module.exports = RelayMutationTracker;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQueryWriter
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var ANY_TYPE = __webpack_require__(8).ANY_TYPE,
	    ID = __webpack_require__(8).ID,
	    TYPENAME = __webpack_require__(8).TYPENAME;

	var EDGES = __webpack_require__(6).EDGES,
	    NODE = __webpack_require__(6).NODE,
	    PAGE_INFO = __webpack_require__(6).PAGE_INFO;

	var EXISTENT = __webpack_require__(16).EXISTENT;

	/**
	 * @internal
	 *
	 * Helper for writing the result of one or more queries/operations into the
	 * store, updating tracked queries, and recording changed record IDs.
	 */
	/* $FlowFixMe - Flow error detected during the deployment of v0.38.0. To see the
	 * error, remove this comment and run flow */


	var RelayQueryWriter = function (_RelayQueryVisitor) {
	  (0, _inherits3['default'])(RelayQueryWriter, _RelayQueryVisitor);

	  function RelayQueryWriter(store, writer, queryTracker, changeTracker, options) {
	    (0, _classCallCheck3['default'])(this, RelayQueryWriter);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryVisitor.call(this));

	    _this._changeTracker = changeTracker;
	    _this._forceIndex = options && options.forceIndex ? options.forceIndex : 0;
	    _this._isOptimisticUpdate = !!(options && options.isOptimisticUpdate);
	    _this._store = store;
	    _this._queryTracker = queryTracker;
	    _this._updateTrackedQueries = !!(options && options.updateTrackedQueries);
	    _this._writer = writer;
	    return _this;
	  }

	  RelayQueryWriter.prototype.getRecordStore = function getRecordStore() {
	    return this._store;
	  };

	  RelayQueryWriter.prototype.getRecordWriter = function getRecordWriter() {
	    return this._writer;
	  };

	  RelayQueryWriter.prototype.getRecordTypeName = function getRecordTypeName(node, recordID, payload) {
	    if (this._isOptimisticUpdate) {
	      // Optimistic queries are inferred. Reuse existing type if available.
	      return this._store.getType(recordID);
	    }
	    var typeName = payload[TYPENAME];
	    if (typeName == null) {
	      if (!node.isAbstract()) {
	        typeName = node.getType();
	      } else {
	        typeName = this._store.getType(recordID);
	      }
	    }
	    __webpack_require__(5)(typeName && typeName !== ANY_TYPE, 'RelayQueryWriter: Could not find a type name for record `%s`.', recordID);
	    return typeName || null;
	  };

	  /**
	   * Traverses a query and payload in parallel, writing the results into the
	   * store.
	   */


	  RelayQueryWriter.prototype.writePayload = function writePayload(node, recordID, responseData, path) {
	    var _this2 = this;

	    var state = {
	      nodeID: null,
	      path: path,
	      recordID: recordID,
	      responseData: responseData
	    };

	    if (node instanceof __webpack_require__(2).Field && node.canHaveSubselections()) {
	      // for non-scalar fields, the recordID is the parent
	      node.getChildren().forEach(function (child) {
	        _this2.visit(child, state);
	      });
	      return;
	    }

	    this.visit(node, state);
	  };

	  /**
	   * Records are "created" whenever an entry did not previously exist for the
	   * `recordID`, including cases when a `recordID` is created with a null value.
	   */


	  RelayQueryWriter.prototype.recordCreate = function recordCreate(recordID) {
	    this._changeTracker.createID(recordID);
	  };

	  /**
	   * Records are "updated" if any field changes (including being set to null).
	   * Updates are not recorded for newly created records.
	   */


	  RelayQueryWriter.prototype.recordUpdate = function recordUpdate(recordID) {
	    this._changeTracker.updateID(recordID);
	  };

	  /**
	   * Determine if the record was created by this write operation.
	   */


	  RelayQueryWriter.prototype.isNewRecord = function isNewRecord(recordID) {
	    return this._changeTracker.isNewRecord(recordID);
	  };

	  /**
	   * Helper to create a record and the corresponding notification.
	   */


	  RelayQueryWriter.prototype.createRecordIfMissing = function createRecordIfMissing(node, recordID, path, payload) {
	    var recordState = this._store.getRecordState(recordID);
	    var typeName = payload && this.getRecordTypeName(node, recordID, payload);
	    this._writer.putRecord(recordID, typeName, path);
	    if (recordState !== EXISTENT) {
	      this.recordCreate(recordID);
	    }
	    if (this._queryTracker && (this.isNewRecord(recordID) || this._updateTrackedQueries) && (!__webpack_require__(3).isClientID(recordID) || __webpack_require__(9).isRootPath(path))) {
	      this._queryTracker.trackNodeForID(node, recordID);
	    }
	  };

	  RelayQueryWriter.prototype.visitRoot = function visitRoot(root, state) {
	    var path = state.path,
	        recordID = state.recordID,
	        responseData = state.responseData;

	    var recordState = this._store.getRecordState(recordID);

	    // GraphQL should never return undefined for a field
	    if (responseData == null) {
	      __webpack_require__(1)(responseData !== undefined, 'RelayQueryWriter: Unexpectedly encountered `undefined` in payload. ' + 'Cannot set root record `%s` to undefined.', recordID);
	      this._writer.deleteRecord(recordID);
	      if (recordState === EXISTENT) {
	        this.recordUpdate(recordID);
	      }
	      return;
	    }
	    __webpack_require__(1)(typeof responseData === 'object' && responseData !== null, 'RelayQueryWriter: Cannot update record `%s`, expected response to be ' + 'an array or object.', recordID);
	    this.createRecordIfMissing(root, recordID, path, responseData);
	    this.traverse(root, state);
	  };

	  RelayQueryWriter.prototype.visitFragment = function visitFragment(fragment, state) {
	    var recordID = state.recordID;

	    if (fragment.isDeferred()) {
	      var hash = fragment.getSourceCompositeHash() || fragment.getCompositeHash();

	      this._writer.setHasDeferredFragmentData(recordID, hash);

	      this.recordUpdate(recordID);
	    }
	    // Skip fragments that do not match the record's concrete type. Fragments
	    // cannot be skipped for optimistic writes because optimistically created
	    // records *may* have a default `Node` type.
	    if (this._isOptimisticUpdate || __webpack_require__(45)(fragment, this._store.getType(recordID))) {
	      if (!this._isOptimisticUpdate && fragment.isTrackingEnabled()) {
	        this._writer.setHasFragmentData(recordID, fragment.getCompositeHash());
	      }
	      var _path = __webpack_require__(9).getPath(state.path, fragment, recordID);
	      this.traverse(fragment, (0, _extends3['default'])({}, state, {
	        path: _path
	      }));
	    }
	  };

	  RelayQueryWriter.prototype.visitField = function visitField(field, state) {
	    var recordID = state.recordID,
	        responseData = state.responseData;

	    __webpack_require__(1)(this._writer.getRecordState(recordID) === EXISTENT, 'RelayQueryWriter: Cannot update a non-existent record, `%s`.', recordID);
	    __webpack_require__(1)(typeof responseData === 'object' && responseData !== null, 'RelayQueryWriter: Cannot update record `%s`, expected response to be ' + 'an object.', recordID);
	    var serializationKey = field.getSerializationKey();

	    var fieldData = responseData[serializationKey];
	    // Queried fields that are `undefined` are stored as nulls.
	    if (fieldData == null) {
	      if (fieldData === undefined) {
	        if (responseData.hasOwnProperty(serializationKey)) {
	          __webpack_require__(5)(false, 'RelayQueryWriter: Encountered an explicit `undefined` field `%s` ' + 'on record `%s`, expected response to not contain `undefined`.', field.getDebugName(), recordID);
	          return;
	        } else if (this._isOptimisticUpdate) {
	          return;
	        }
	      }

	      var storageKey = field.getStorageKey();
	      var prevValue = this._store.getField(recordID, storageKey);
	      // Always write to ensure data is stored in the correct recordStore.
	      this._writer.deleteField(recordID, storageKey);
	      if (prevValue !== null) {
	        this.recordUpdate(recordID);
	      }
	      return;
	    }

	    if (!field.canHaveSubselections()) {
	      this._writeScalar(field, state, recordID, fieldData);
	    } else if (field.isConnection()) {
	      this._writeConnection(field, state, recordID, fieldData);
	    } else if (field.isPlural()) {
	      this._writePluralLink(field, state, recordID, fieldData);
	    } else {
	      this._writeLink(field, state, recordID, fieldData);
	    }
	  };

	  /**
	   * Writes the value for a 'scalar' field such as `id` or `name`. The response
	   * data is expected to be scalar values or arrays of scalar values.
	   */


	  RelayQueryWriter.prototype._writeScalar = function _writeScalar(field, state, recordID, nextValue) {
	    var storageKey = field.getStorageKey();
	    var prevValue = this._store.getField(recordID, storageKey);

	    // always update the store to ensure the value is present in the appropriate
	    // data sink (records/queuedRecords), but only record an update if the value
	    // changed.
	    this._writer.putField(recordID, storageKey, nextValue);

	    // TODO: Flow: `nextValue` is an array, array indexing should work
	    if (Array.isArray(prevValue) && Array.isArray(nextValue) && prevValue.length === nextValue.length && prevValue.every(function (prev, ii) {
	      return prev === nextValue[ii];
	    })) {
	      return;
	    } else if (prevValue === nextValue) {
	      return;
	    }
	    this.recordUpdate(recordID);
	  };

	  /**
	   * Writes data for connection fields such as `news_feed` or `friends`. The
	   * response data is expected to be array of edge objects.
	   */


	  RelayQueryWriter.prototype._writeConnection = function _writeConnection(field, state, recordID, connectionData) {
	    // Each unique combination of filter calls is stored in its own
	    // generated record (ex: `field.orderby(x)` results are separate from
	    // `field.orderby(y)` results).
	    var storageKey = field.getStorageKey();
	    var connectionID = this._store.getLinkedRecordID(recordID, storageKey) || __webpack_require__(35)();

	    var connectionRecordState = this._store.getRecordState(connectionID);
	    var hasEdges = !!(field.getFieldByStorageKey(EDGES) || connectionData != null && typeof connectionData === 'object' && connectionData[EDGES]);
	    var path = __webpack_require__(9).getPath(state.path, field, connectionID);
	    // always update the store to ensure the value is present in the appropriate
	    // data sink (records/queuedRecords), but only record an update if the value
	    // changed.
	    this._writer.putRecord(connectionID, null, path);
	    this._writer.putLinkedRecordID(recordID, storageKey, connectionID);
	    // record the create/update only if something changed
	    if (connectionRecordState !== EXISTENT) {
	      this.recordUpdate(recordID);
	      this.recordCreate(connectionID);
	    }

	    if (hasEdges) {
	      // Only create a range if `edges` field is present
	      // Overwrite an existing range only if the new force index is greater
	      if (!this._writer.hasRange(connectionID) || this._forceIndex && this._forceIndex > this._store.getRangeForceIndex(connectionID)) {
	        this._writer.putRange(connectionID, field.getCallsWithValues(), this._forceIndex);
	      }
	      // Update the connection record regardless of whether a range was written
	      // to also handle cases like an empty edge range or updated page_info.
	      this.recordUpdate(connectionID);
	    }

	    var connectionState = {
	      nodeID: null,
	      path: path,
	      recordID: connectionID,
	      responseData: connectionData
	    };
	    this._traverseConnection(field, field, connectionState);
	  };

	  /**
	   * Recurse through connection subfields and write their results. This is
	   * necessary because handling an `edges` field also requires information about
	   * the parent connection field (see `_writeEdges`).
	   */


	  RelayQueryWriter.prototype._traverseConnection = function _traverseConnection(connection, // the parent connection
	  node, // the parent connection or an intermediary fragment
	  state) {
	    var _this3 = this;

	    node.getChildren().forEach(function (child) {
	      if (child instanceof __webpack_require__(2).Field) {
	        if (child.getSchemaName() === EDGES) {
	          _this3._writeEdges(connection, child, state);
	        } else if (child.getSchemaName() !== PAGE_INFO) {
	          // Page info is handled by the range
	          // Otherwise, write metadata fields normally (ex: `count`)
	          _this3.visit(child, state);
	        }
	      } else {
	        // Fragment case, recurse keeping track of parent connection
	        _this3._traverseConnection(connection, child, state);
	      }
	    });
	  };

	  /**
	   * Update a connection with newly fetched edges.
	   */


	  RelayQueryWriter.prototype._writeEdges = function _writeEdges(connection, edges, state) {
	    var _this4 = this;

	    var connectionID = state.recordID,
	        connectionData = state.responseData;

	    __webpack_require__(1)(typeof connectionData === 'object' && connectionData !== null, 'RelayQueryWriter: Cannot write edges for malformed connection `%s` on ' + 'record `%s`, expected the response to be an object.', connection.getDebugName(), connectionID);
	    var edgesData = connectionData[EDGES];

	    // Validate response data.
	    if (edgesData == null) {
	      __webpack_require__(5)(false, 'RelayQueryWriter: Cannot write edges for connection `%s` on record ' + '`%s`, expected a response for field `edges`.', connection.getDebugName(), connectionID);
	      return;
	    }
	    __webpack_require__(1)(Array.isArray(edgesData), 'RelayQueryWriter: Cannot write edges for connection `%s` on record ' + '`%s`, expected `edges` to be an array.', connection.getDebugName(), connectionID);

	    var rangeCalls = connection.getCallsWithValues();
	    __webpack_require__(1)(__webpack_require__(6).hasRangeCalls(rangeCalls), 'RelayQueryWriter: Cannot write edges for connection on record ' + '`%s` without `first`, `last`, or `find` argument.', connectionID);
	    var rangeInfo = this._store.getRangeMetadata(connectionID, rangeCalls);
	    __webpack_require__(1)(rangeInfo, 'RelayQueryWriter: Expected a range to exist for connection field `%s` ' + 'on record `%s`.', connection.getDebugName(), connectionID);
	    var fetchedEdgeIDs = [];
	    var filteredEdges = rangeInfo.filteredEdges;
	    var isUpdate = false;
	    var nextIndex = 0;
	    // Traverse connection edges, reusing existing edges if they exist
	    edgesData.forEach(function (edgeData) {
	      // validate response data
	      if (edgeData == null) {
	        return;
	      }
	      __webpack_require__(1)(typeof edgeData === 'object' && edgeData, 'RelayQueryWriter: Cannot write edge for connection field `%s` on ' + 'record `%s`, expected an object.', connection.getDebugName(), connectionID);

	      var nodeData = edgeData[NODE];
	      if (nodeData == null) {
	        return;
	      }

	      __webpack_require__(1)(typeof nodeData === 'object', 'RelayQueryWriter: Expected node to be an object for field `%s` on ' + 'record `%s`.', connection.getDebugName(), connectionID);

	      // For consistency, edge IDs are calculated from the connection & node ID.
	      // A node ID is only generated if the node does not have an id and
	      // there is no existing edge.
	      var prevEdge = filteredEdges[nextIndex++];
	      var nodeID = nodeData && nodeData[ID] || prevEdge && _this4._store.getLinkedRecordID(prevEdge.edgeID, NODE) || __webpack_require__(35)();
	      // TODO: Flow: `nodeID` is `string`
	      // $FlowFixMe(>=0.33.0)
	      var edgeID = __webpack_require__(51)(connectionID, nodeID);
	      var path = __webpack_require__(9).getPath(state.path, edges, edgeID);
	      _this4.createRecordIfMissing(edges, edgeID, path, null);
	      fetchedEdgeIDs.push(edgeID);

	      // Write data for the edge, using `nodeID` as the id for direct descendant
	      // `node` fields. This is necessary for `node`s that do not have an `id`,
	      // which would cause the generated ID here to not match the ID generated
	      // in `_writeLink`.
	      _this4.traverse(edges, {
	        nodeID: nodeID,
	        path: path,
	        recordID: edgeID,
	        responseData: edgeData
	      });
	      isUpdate = isUpdate || !prevEdge || edgeID !== prevEdge.edgeID;
	    });

	    var pageInfo = connectionData[PAGE_INFO] || __webpack_require__(6).getDefaultPageInfo();
	    this._writer.putRangeEdges(connectionID, rangeCalls, pageInfo, fetchedEdgeIDs);

	    // Only broadcast an update to the range if an edge was added/changed.
	    // Node-level changes will broadcast at the node ID.
	    if (isUpdate) {
	      this.recordUpdate(connectionID);
	    }
	  };

	  /**
	   * Writes a plural linked field such as `actors`. The response data is
	   * expected to be an array of item objects. These fields are similar to
	   * connections, but do not support range calls such as `first` or `after`.
	   */


	  RelayQueryWriter.prototype._writePluralLink = function _writePluralLink(field, state, recordID, fieldData) {
	    var _this5 = this;

	    var storageKey = field.getStorageKey();
	    __webpack_require__(1)(Array.isArray(fieldData), 'RelayQueryWriter: Expected array data for field `%s` on record `%s`.', field.getDebugName(), recordID);

	    var prevLinkedIDs = this._store.getLinkedRecordIDs(recordID, storageKey);
	    var nextLinkedIDs = [];
	    var nextRecords = {};
	    var isUpdate = false;
	    var nextIndex = 0;
	    fieldData.forEach(function (nextRecord) {
	      // validate response data
	      if (nextRecord == null) {
	        return;
	      }
	      __webpack_require__(1)(typeof nextRecord === 'object' && nextRecord, 'RelayQueryWriter: Expected elements for plural field `%s` to be ' + 'objects.', storageKey);

	      // Reuse existing generated IDs if the node does not have its own `id`.
	      var prevLinkedID = prevLinkedIDs && prevLinkedIDs[nextIndex];
	      var nextLinkedID = nextRecord[ID] || prevLinkedID || __webpack_require__(35)();
	      // $FlowFixMe(>=0.33.0)
	      nextLinkedIDs.push(nextLinkedID);

	      // $FlowFixMe(>=0.33.0)
	      var path = __webpack_require__(9).getPath(state.path, field, nextLinkedID);
	      // $FlowFixMe(>=0.33.0)
	      _this5.createRecordIfMissing(field, nextLinkedID, path, nextRecord);
	      // $FlowFixMe(>=0.33.0)
	      nextRecords[nextLinkedID] = { record: nextRecord, path: path };
	      isUpdate = isUpdate || nextLinkedID !== prevLinkedID;
	      nextIndex++;
	    });
	    // Write the linked records before traverse to prevent generating extraneous
	    // client ids.
	    this._writer.putLinkedRecordIDs(recordID, storageKey, nextLinkedIDs);
	    nextLinkedIDs.forEach(function (nextLinkedID) {
	      // $FlowFixMe(>=0.33.0)
	      var itemData = nextRecords[nextLinkedID];
	      if (itemData) {
	        _this5.traverse(field, {
	          nodeID: null, // never propagate `nodeID` past the first linked field
	          path: itemData.path,
	          recordID: nextLinkedID,
	          responseData: itemData.record
	        });
	      }
	    });
	    // Only broadcast a list-level change if a record was changed/added/removed
	    if (isUpdate || !prevLinkedIDs || prevLinkedIDs.length !== nextLinkedIDs.length) {
	      this.recordUpdate(recordID);
	    }
	  };

	  /**
	   * Writes a link from one record to another, for example linking the `viewer`
	   * record to the `actor` record in the query `viewer { actor }`. The `field`
	   * variable is the field being linked (`actor` in the example).
	   */


	  RelayQueryWriter.prototype._writeLink = function _writeLink(field, state, recordID, fieldData) {
	    var nodeID = state.nodeID;

	    var storageKey = field.getStorageKey();
	    __webpack_require__(1)(typeof fieldData === 'object' && fieldData !== null, 'RelayQueryWriter: Expected data for non-scalar field `%s` on record ' + '`%s` to be an object.', field.getDebugName(), recordID);

	    // Prefer the actual `id` if present, otherwise generate one (if an id
	    // was already generated it is reused). `node`s within a connection are
	    // a special case as the ID used here must match the one generated prior to
	    // storing the parent `edge`.
	    var prevLinkedID = this._store.getLinkedRecordID(recordID, storageKey);
	    var nextLinkedID = field.getSchemaName() === NODE && nodeID || fieldData[ID] || prevLinkedID || __webpack_require__(35)();

	    // $FlowFixMe(>=0.33.0)
	    var path = __webpack_require__(9).getPath(state.path, field, nextLinkedID);
	    // $FlowFixMe(>=0.33.0)
	    this.createRecordIfMissing(field, nextLinkedID, path, fieldData);
	    // always update the store to ensure the value is present in the appropriate
	    // data sink (record/queuedRecords), but only record an update if the value
	    // changed.
	    // $FlowFixMe(>=0.33.0)
	    this._writer.putLinkedRecordID(recordID, storageKey, nextLinkedID);
	    if (prevLinkedID !== nextLinkedID) {
	      this.recordUpdate(recordID);
	    }

	    this.traverse(field, {
	      nodeID: null,
	      path: path,
	      recordID: nextLinkedID,
	      responseData: fieldData
	    });
	  };

	  return RelayQueryWriter;
	}(__webpack_require__(26));

	module.exports = RelayQueryWriter;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenRelayQuery
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * `flattenRelayQuery(query)` returns a clone of `query` with fields inside of
	 * fragments recursively flattened into the nearest ancestor field.
	 *
	 * The result can be null if `node` only contains empty fragments or fragments
	 * that only contain empty fragments.
	 */
	function flattenRelayQuery(node, options) {
	  var flattener = new RelayQueryFlattener(options && options.shouldRemoveFragments);
	  var state = {
	    node: node,
	    type: node.getType(),
	    flattenedFieldMap: new (__webpack_require__(20))(),
	    flattenedFragmentMap: new (__webpack_require__(20))()
	  };
	  flattener.traverse(node, state);
	  return toQuery(node, state, !!(options && options.preserveEmptyNodes));
	}

	function toQuery(node, _ref, preserveEmptyNodes) {
	  var flattenedFieldMap = _ref.flattenedFieldMap,
	      flattenedFragmentMap = _ref.flattenedFragmentMap;

	  var children = [];
	  var aliases = Array.from(flattenedFieldMap.keys());
	  aliases.forEach(function (alias) {
	    var field = flattenedFieldMap.get(alias);
	    if (field) {
	      children.push(toQuery(field.node, field, preserveEmptyNodes));
	    }
	  });
	  Array.from(flattenedFragmentMap.keys()).forEach(function (type) {
	    var fragment = flattenedFragmentMap.get(type);
	    if (fragment) {
	      children.push(toQuery(fragment.node, fragment, preserveEmptyNodes));
	    }
	  });
	  // Pattern nodes may contain non-scalar fields without children that
	  // should not be removed.
	  if (preserveEmptyNodes && node.canHaveSubselections() && !children.length) {
	    return node;
	  }
	  return node.clone(children);
	}

	var RelayQueryFlattener = function (_RelayQueryVisitor) {
	  (0, _inherits3['default'])(RelayQueryFlattener, _RelayQueryVisitor);

	  function RelayQueryFlattener(shouldRemoveFragments) {
	    (0, _classCallCheck3['default'])(this, RelayQueryFlattener);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryVisitor.call(this));

	    _this._shouldRemoveFragments = !!shouldRemoveFragments;
	    return _this;
	  }

	  RelayQueryFlattener.prototype.visitFragment = function visitFragment(node, state) {
	    var type = node.getType();
	    if (this._shouldRemoveFragments || type === state.type) {
	      this.traverse(node, state);
	      return;
	    }
	    var flattenedFragment = state.flattenedFragmentMap.get(type);
	    if (!flattenedFragment) {
	      flattenedFragment = {
	        node: node,
	        type: type,
	        flattenedFieldMap: new (__webpack_require__(20))(),
	        flattenedFragmentMap: new (__webpack_require__(20))()
	      };
	      state.flattenedFragmentMap.set(type, flattenedFragment);
	    }
	    this.traverse(node, flattenedFragment);
	  };

	  RelayQueryFlattener.prototype.visitField = function visitField(node, state) {
	    var hash = node.getShallowHash();
	    var flattenedField = state.flattenedFieldMap.get(hash);
	    if (!flattenedField) {
	      flattenedField = {
	        node: node,
	        type: node.getType(),
	        flattenedFieldMap: new (__webpack_require__(20))(),
	        flattenedFragmentMap: new (__webpack_require__(20))()
	      };
	      state.flattenedFieldMap.set(hash, flattenedField);
	    }
	    this.traverse(node, flattenedField);
	  };

	  return RelayQueryFlattener;
	}(__webpack_require__(26));

	module.exports = __webpack_require__(10).instrument('flattenRelayQuery', flattenRelayQuery);

/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule generateClientEdgeID
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Generate an edge client id for edges on connections based on the range it
	 * belongs to and the node it contains.
	 *
	 * @internal
	 */

	function generateClientEdgeID(rangeID, nodeID) {
	  return 'client:' + rangeID + ':' + nodeID;
	}

	module.exports = generateClientEdgeID;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule printRelayQuery
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * To support legacy behavior, allow the classic relay printer to be injectable.
	 * Requiring printRelayOSSQuery directly guarantees printing with modern GraphQL
	 * (circa 2015+) syntax, while using this module may use an injected
	 * implementation which can introduce printing legacy GraphQL syntax.
	 */
	var printRelayQueryImpl = __webpack_require__(97);

	module.exports = function printRelayQuery(node) {
	  return printRelayQueryImpl(node);
	};

	module.exports.injectImpl = function injectImpl(impl) {
	  printRelayQueryImpl = impl;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule rangeOperationToMetadataKey
	 * 
	 * @format
	 */

	'use strict';

	var RANGE_OPERATION_METADATA_PREFIX = '__rangeOperation';
	var RANGE_OPERATION_METADATA_SUFFIX = '__';

	/**
	 * @internal
	 *
	 * A map from developer-friendly operation names ("append", "prepend", "remove")
	 * to internal book-keeping keys used to store metadata on records
	 * ("__rangeOperationAppend__" etc).
	 */
	var rangeOperationToMetadataKey = __webpack_require__(38)(__webpack_require__(18).RANGE_OPERATIONS, function (value, key, object) {
	  var capitalizedKey = key[0].toUpperCase() + key.slice(1);
	  return RANGE_OPERATION_METADATA_PREFIX + capitalizedKey + RANGE_OPERATION_METADATA_SUFFIX;
	});

	module.exports = Object.freeze(rangeOperationToMetadataKey);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule readRelayQueryData
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var MUTATION_STATUS = __webpack_require__(3).MetadataKey.MUTATION_STATUS;

	var EDGES = __webpack_require__(6).EDGES,
	    PAGE_INFO = __webpack_require__(6).PAGE_INFO;

	var METADATA_KEYS = ['__status__', '__resolvedFragmentMapGeneration__'];

	/**
	 * @internal
	 *
	 * Retrieves data from the `RelayStore`.
	 */
	function readRelayQueryData(storeData, queryNode, dataID, options) {
	  var reader = new RelayStoreReader(storeData, options);
	  var data = reader.retrieveData(queryNode, dataID);

	  // We validate only after retrieving the data, to give our `invariant`
	  // checks below a chance to fail fast.
	  __webpack_require__(145)(queryNode, options);

	  return data;
	}

	var RelayStoreReader = function (_RelayQueryVisitor) {
	  (0, _inherits3['default'])(RelayStoreReader, _RelayQueryVisitor);

	  function RelayStoreReader(storeData, options) {
	    (0, _classCallCheck3['default'])(this, RelayStoreReader);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryVisitor.call(this));

	    _this._rangeData = storeData.getRangeData();
	    _this._recordStore = storeData.getQueuedStore();
	    _this._storeData = storeData;
	    _this._traverseFragmentReferences = options && options.traverseFragmentReferences || false;
	    _this._traverseGeneratedFields = options && options.traverseGeneratedFields || false;
	    return _this;
	  }

	  /**
	   * Runs `queryNode` against the data in `dataID` and returns the result.
	   */


	  RelayStoreReader.prototype.retrieveData = function retrieveData(queryNode, dataID) {
	    var result = {
	      data: undefined,
	      dataIDs: {}
	    };
	    var rangeData = this._rangeData.parseRangeClientID(dataID);
	    var status = this._recordStore.getRecordState(rangeData ? rangeData.dataID : dataID);
	    if (status === __webpack_require__(16).EXISTENT) {
	      var state = this._createState({
	        componentDataID: null,
	        data: undefined,
	        isPartial: false,
	        parent: null,
	        rangeInfo: null,
	        seenDataIDs: result.dataIDs,
	        storeDataID: dataID
	      });
	      this.visit(queryNode, state);
	      result.data = state.data;
	    } else if (status === __webpack_require__(16).NONEXISTENT) {
	      result.data = null;
	    }
	    return result;
	  };

	  RelayStoreReader.prototype.visit = function visit(node, state) {
	    var result = _RelayQueryVisitor.prototype.visit.call(this, node, state);
	    this._updateMetadataFields(state);
	    return result;
	  };

	  RelayStoreReader.prototype.visitField = function visitField(node, state) {
	    // Check for range client IDs (eg. `someID_first(25)`) and unpack if
	    // present, overriding `state`.
	    this._handleRangeInfo(node, state);

	    if (node.canHaveSubselections() || node.isGenerated()) {
	      // Make sure we return at least the __dataID__.
	      getDataObject(state);
	    }

	    if (node.isGenerated() && !this._traverseGeneratedFields) {
	      return;
	    }
	    var rangeInfo = state.rangeInfo;
	    if (rangeInfo && node.getSchemaName() === EDGES) {
	      this._readEdges(node, rangeInfo, state);
	    } else if (rangeInfo && node.getSchemaName() === PAGE_INFO) {
	      this._readPageInfo(node, rangeInfo, state);
	    } else if (!node.canHaveSubselections()) {
	      this._readScalar(node, state);
	    } else if (node.isPlural()) {
	      this._readPlural(node, state);
	    } else if (node.isConnection()) {
	      this._readConnection(node, state);
	    } else {
	      this._readLinkedField(node, state);
	    }
	    state.seenDataIDs[state.storeDataID] = true;
	  };

	  RelayStoreReader.prototype.visitFragment = function visitFragment(node, state) {
	    var dataID = getComponentDataID(state);
	    if (node.isContainerFragment() && !this._traverseFragmentReferences) {
	      state.seenDataIDs[dataID] = true;
	      var _data = getDataObject(state);
	      __webpack_require__(21).addFragment(_data, node);
	    } else if (__webpack_require__(45)(node, this._recordStore.getType(dataID))) {
	      this.traverse(node, state);
	    }
	  };

	  RelayStoreReader.prototype._createState = function _createState(state) {
	    // If we have a valid `dataID`, ensure that a record is created for it even
	    // if we do not actually end up populating it with fields.
	    var status = this._recordStore.getRecordState(state.storeDataID);
	    if (status === __webpack_require__(16).EXISTENT) {
	      getDataObject(state);
	    }
	    return state;
	  };

	  RelayStoreReader.prototype._readScalar = function _readScalar(node, state) {
	    var storageKey = node.getStorageKey();
	    var field = this._recordStore.getField(state.storeDataID, storageKey);
	    if (field === undefined) {
	      state.isPartial = true;
	    } else if (field === null && !state.data) {
	      state.data = null;
	    } else {
	      this._setDataValue(state, node.getApplicationName(), Array.isArray(field) ? field.slice() : field);
	    }
	  };

	  RelayStoreReader.prototype._readPlural = function _readPlural(node, state) {
	    var _this2 = this;

	    var storageKey = node.getStorageKey();
	    var dataIDs = this._recordStore.getLinkedRecordIDs(state.storeDataID, storageKey);
	    if (dataIDs) {
	      var applicationName = node.getApplicationName();
	      var previousData = getDataValue(state, applicationName);
	      var nextData = dataIDs.map(function (dataID, ii) {
	        var data = void 0;
	        if (previousData instanceof Object) {
	          data = previousData[ii];
	        }
	        var nextState = _this2._createState({
	          componentDataID: null,
	          data: data,
	          isPartial: false,
	          parent: node,
	          rangeInfo: null,
	          seenDataIDs: state.seenDataIDs,
	          storeDataID: dataID
	        });
	        node.getChildren().forEach(function (child) {
	          return _this2.visit(child, nextState);
	        });
	        if (nextState.isPartial) {
	          state.isPartial = true;
	        }
	        return nextState.data;
	      });
	      this._setDataValue(state, applicationName, nextData);
	    }
	  };

	  RelayStoreReader.prototype._readConnection = function _readConnection(node, state) {
	    var applicationName = node.getApplicationName();
	    var storageKey = node.getStorageKey();
	    var calls = node.getCallsWithValues();
	    var dataID = this._recordStore.getLinkedRecordID(state.storeDataID, storageKey);
	    if (!dataID) {
	      state.isPartial = true;
	      return;
	    }
	    enforceRangeCalls(node);
	    var metadata = this._recordStore.getRangeMetadata(dataID, calls);
	    var nextState = this._createState({
	      componentDataID: this._getConnectionClientID(node, dataID),
	      data: getDataValue(state, applicationName),
	      isPartial: false,
	      parent: node,
	      rangeInfo: metadata && calls.length ? metadata : null,
	      seenDataIDs: state.seenDataIDs,
	      storeDataID: dataID
	    });
	    this.traverse(node, nextState);
	    if (nextState.isPartial) {
	      state.isPartial = true;
	    }
	    this._setDataValue(state, applicationName, nextState.data);
	  };

	  RelayStoreReader.prototype._readEdges = function _readEdges(node, rangeInfo, state) {
	    var _this3 = this;

	    if (rangeInfo.diffCalls.length) {
	      state.isPartial = true;
	    }
	    var previousData = getDataValue(state, EDGES);
	    // Include null-filtered edges as "seen" so that they will be subscribed.
	    rangeInfo.requestedEdgeIDs.forEach(function (edgeID) {
	      state.seenDataIDs[edgeID] = true;
	    });
	    var edges = rangeInfo.filteredEdges.map(function (edgeData, ii) {
	      var data = void 0;
	      if (previousData instanceof Object) {
	        data = previousData[ii];
	      }
	      var nextState = _this3._createState({
	        componentDataID: null,
	        data: data,
	        isPartial: false,
	        parent: node,
	        rangeInfo: null,
	        seenDataIDs: state.seenDataIDs,
	        storeDataID: edgeData.edgeID
	      });
	      _this3.traverse(node, nextState);
	      if (nextState.isPartial) {
	        state.isPartial = true;
	      }
	      return nextState.data;
	    });
	    this._setDataValue(state, EDGES, edges);
	  };

	  RelayStoreReader.prototype._readPageInfo = function _readPageInfo(node, rangeInfo, state) {
	    var _this4 = this;

	    var pageInfo = rangeInfo.pageInfo;

	    __webpack_require__(1)(pageInfo, 'readRelayQueryData(): Missing field, `%s`.', PAGE_INFO);
	    if (rangeInfo.diffCalls.length) {
	      state.isPartial = true;
	    }
	    var info = pageInfo; // for Flow
	    var nextData = void 0;

	    // Page info comes from the range metadata, so we do a custom traversal here
	    // which is simpler than passing through page-info-related state as a hint
	    // for the normal traversal.
	    var read = function read(child) {
	      if (child instanceof __webpack_require__(2).Fragment) {
	        if (child.isContainerFragment() && !_this4._traverseFragmentReferences) {
	          nextData = nextData || {};
	          __webpack_require__(21).addFragment(nextData, child);
	        } else {
	          child.getChildren().forEach(read);
	        }
	      } else {
	        var field = child;
	        if (!field.isGenerated() || _this4._traverseGeneratedFields) {
	          nextData = nextData || {};
	          nextData[field.getApplicationName()] = info[field.getStorageKey()];
	        }
	      }
	    };
	    node.getChildren().forEach(read);

	    this._setDataValue(state, node.getApplicationName(), nextData);
	  };

	  RelayStoreReader.prototype._readLinkedField = function _readLinkedField(node, state) {
	    var storageKey = node.getStorageKey();
	    var applicationName = node.getApplicationName();
	    var dataID = this._recordStore.getLinkedRecordID(state.storeDataID, storageKey);
	    if (dataID == null) {
	      if (dataID === undefined) {
	        state.isPartial = true;
	      }
	      this._setDataValue(state, applicationName, dataID);
	      return;
	    }
	    var nextState = this._createState({
	      componentDataID: null,
	      data: getDataValue(state, applicationName),
	      isPartial: false,
	      parent: node,
	      rangeInfo: null,
	      seenDataIDs: state.seenDataIDs,
	      storeDataID: dataID
	    });
	    this.traverse(node, nextState);
	    if (nextState.isPartial) {
	      state.isPartial = true;
	    }
	    this._setDataValue(state, applicationName, nextState.data);
	  };

	  /**
	   * Assigns `value` to the property of `state.data` identified by `key`.
	   *
	   * Pre-populates `state` with a suitable `data` object if needed, and copies
	   * over any metadata fields, if present.
	   */


	  RelayStoreReader.prototype._setDataValue = function _setDataValue(state, key, value) {
	    var data = getDataObject(state); // ensure __dataID__
	    if (value === undefined) {
	      return;
	    }
	    data[key] = value;
	  };

	  RelayStoreReader.prototype._updateMetadataFields = function _updateMetadataFields(state) {
	    var _this5 = this;

	    var data = state.data;
	    if (!(data instanceof Object)) {
	      return;
	    }
	    var dataID = state.storeDataID;
	    // Copy metadata that is necessary to dirty records when recycling objects.
	    METADATA_KEYS.forEach(function (metadataKey) {
	      var metadataValue = _this5._recordStore.getField(dataID, metadataKey);
	      if (metadataValue != null) {
	        data[metadataKey] = metadataValue;
	      }
	    });
	    // Set the partial bit after metadata has been copied over.
	    if (state.isPartial) {
	      data.__status__ = __webpack_require__(63).setPartialStatus(data.__status__, true);
	    }
	    // Hash any pending mutation transactions.
	    var mutationIDs = this._storeData.getClientMutationIDs(dataID);
	    if (mutationIDs) {
	      var statuses = [];
	      var mutationQueue = this._storeData.getMutationQueue();
	      mutationIDs.forEach(function (mutationID) {
	        var transaction = mutationQueue.getTransaction(mutationID);
	        if (transaction) {
	          statuses.push(transaction.getHash());
	        }
	      });
	      data[MUTATION_STATUS] = statuses.join(',');
	    }
	  };

	  /**
	   * Obtains a client ID (eg. `someDataID_first(10)`) for the connection
	   * identified by `connectionID`. If there are no range calls on the supplied
	   * `node`, then a call-less connection ID (eg. `someDataID`) will be returned
	   * instead.
	   */


	  RelayStoreReader.prototype._getConnectionClientID = function _getConnectionClientID(node, connectionID) {
	    var calls = node.getCallsWithValues();
	    if (!__webpack_require__(6).hasRangeCalls(calls)) {
	      return connectionID;
	    }
	    return this._rangeData.getClientIDForRangeWithID(__webpack_require__(90)(calls), {}, connectionID);
	  };

	  /**
	   * Checks to see if we have a range client ID (eg. `someID_first(25)`), and if
	   * so, unpacks the range metadata, stashing it into (and overriding) `state`.
	   */


	  RelayStoreReader.prototype._handleRangeInfo = function _handleRangeInfo(node, state) {
	    var rangeData = this._rangeData.parseRangeClientID(state.storeDataID);
	    if (rangeData != null) {
	      state.componentDataID = state.storeDataID;
	      state.storeDataID = rangeData.dataID;
	      state.rangeInfo = this._recordStore.getRangeMetadata(state.storeDataID, __webpack_require__(34)(rangeData.calls, rangeData.callValues));
	    }
	  };

	  return RelayStoreReader;
	}(__webpack_require__(26));

	/**
	 * Checks that `parent` either has range calls on it or does not contain either
	 * `page_info` or `edges` fields. This enforcement intentionally transcends
	 * traverseFragmentReferences boundaries.
	 */


	function enforceRangeCalls(parent) {
	  if (!parent.__hasValidatedConnectionCalls__) {
	    var calls = parent.getCallsWithValues();
	    if (!__webpack_require__(6).hasRangeCalls(calls)) {
	      rangeCallEnforcer.traverse(parent, parent);
	    }
	    parent.__hasValidatedConnectionCalls__ = true;
	  }
	}

	var RelayRangeCallEnforcer = function (_RelayQueryVisitor2) {
	  (0, _inherits3['default'])(RelayRangeCallEnforcer, _RelayQueryVisitor2);

	  function RelayRangeCallEnforcer() {
	    (0, _classCallCheck3['default'])(this, RelayRangeCallEnforcer);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQueryVisitor2.apply(this, arguments));
	  }

	  RelayRangeCallEnforcer.prototype.visitField = function visitField(node, parent) {
	    var schemaName = node.getSchemaName();
	    __webpack_require__(1)(schemaName !== EDGES && schemaName !== PAGE_INFO, 'readRelayQueryData(): The field `%s` is a connection. Fields `%s` and ' + '`%s` cannot be fetched without a `first`, `last` or `find` argument.', parent.getApplicationName(), EDGES, PAGE_INFO);
	  };

	  return RelayRangeCallEnforcer;
	}(__webpack_require__(26));

	var rangeCallEnforcer = new RelayRangeCallEnforcer();

	/**
	 * Returns the component-specific DataID stored in `state`, falling back to the
	 * generic "store" DataID.
	 *
	 * For most nodes, the generic "store" DataID can be used for both reading out
	 * of the store and writing into the result object that will be passed back to
	 * the component. For connections with range calls on them the "store" and
	 * "component" ID will be different because the component needs a special
	 * client-ID that encodes the range calls.
	 */
	function getComponentDataID(state) {
	  if (state.componentDataID != null) {
	    return state.componentDataID;
	  } else {
	    return state.storeDataID;
	  }
	}

	/**
	 * Retrieves `state.data`, initializing it if necessary.
	 */
	function getDataObject(state) {
	  var data = state.data;
	  if (!data) {
	    data = state.data = __webpack_require__(3).create(getComponentDataID(state));
	  }
	  __webpack_require__(1)(data instanceof Object, 'readRelayQueryData(): Unable to read field on non-object.');
	  return data;
	}

	/**
	 * Looks up the value identified by `key` in `state.data`.
	 *
	 * Pre-populates `state` with a suitable `data` objects if needed.
	 */
	function getDataValue(state, key) {
	  var data = getDataObject(state);
	  return data[key];
	}

	module.exports = __webpack_require__(10).instrument('readRelayQueryData', readRelayQueryData);

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule GraphQLRange
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _defineProperty3 = _interopRequireDefault(__webpack_require__(37));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(30));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var END_CURSOR = __webpack_require__(6).END_CURSOR,
	    HAS_NEXT_PAGE = __webpack_require__(6).HAS_NEXT_PAGE,
	    HAS_PREV_PAGE = __webpack_require__(6).HAS_PREV_PAGE,
	    START_CURSOR = __webpack_require__(6).START_CURSOR;

	/**
	 * @param {array<object>} queryCalls
	 * @return {object}
	 */


	function callsArrayToObject(queryCalls) {
	  var calls = {};
	  for (var ii = 0; ii < queryCalls.length; ii++) {
	    if (__webpack_require__(6).isConnectionCall(queryCalls[ii])) {
	      var queryCall = queryCalls[ii];
	      var value = queryCall.value;
	      // assuming that range calls will only have a single argument

	      if (Array.isArray(value) && value.length) {
	        value = value[0];
	      }
	      // Ignore the whole call when the value is null
	      if (value === null) {
	        continue;
	      }
	      calls[queryCall.name] = value;
	    }
	  }
	  // update first and last call values to be numbers
	  if (calls.first) {
	    __webpack_require__(1)(!isNaN(calls.first), 'GraphQLRange: Expected `first` argument to be a number, got `%s`.', calls.first);
	    calls.first = +calls.first;
	  } else if (calls.last) {
	    __webpack_require__(1)(!isNaN(calls.last), 'GraphQLRange: Expected `last` argument to be a number, got `%s`.', calls.last);
	    calls.last = +calls.last;
	  }
	  return calls;
	}

	/**
	 * Returns whether this is currently a set of static calls that GraphQLRange
	 * supports. Static calls define ranges that do not change over a period
	 * of time, given the same set of arguments.
	 *
	 * @param {object} calls
	 * @return {?boolean}
	 */
	function isStaticCall(calls) {
	  return calls.hasOwnProperty('surrounds') || calls.hasOwnProperty('find');
	}

	/**
	 * Returns whether this is currently a set of calls that GraphQLRange
	 * supports
	 *
	 * @param {object} calls
	 * @return {boolean}
	 */
	function isValidRangeCall(calls) {
	  var hasFirst = calls.hasOwnProperty('first');
	  var hasLast = calls.hasOwnProperty('last');

	  // Currently only supports: first(), after().first(), last(), before().last()
	  // before().first(), after().last(), after().before().first(), and
	  // after().before().last()
	  // first() can never be called with last().
	  return (hasFirst || hasLast) && !(hasFirst && hasLast);
	}

	/**
	 * Returns whether the call values are supported by GraphQLRange
	 *
	 * @param {object} calls
	 * @return {boolean}
	 */
	function isValidRangeCallValues(calls) {
	  return calls.hasOwnProperty('first') && calls.first > 0 || calls.hasOwnProperty('last') && calls.last > 0;
	}

	/**
	 * Validates edge to ensure it has all the fields needed to be store properly.
	 *
	 * @param {object} edge
	 */
	function validateEdge(edge) {
	  __webpack_require__(1)(__webpack_require__(3).getDataIDForObject(edge) !== undefined, 'GraphQLStore: `edge` must have a data id');
	  __webpack_require__(1)(edge.node !== undefined, 'GraphQLStore: `edge` must have `node` field');
	}

	/**
	 * @param {array<object>} edges
	 */
	function validateEdges(edges) {
	  edges.forEach(validateEdge);
	}

	/**
	 * @internal
	 *
	 * A range represents an ordered set of edges. Methods are provided for adding
	 * edges (`appendEdge`, `prependEdge`, `addItems`) and removing them
	 * (`removeEdgeWithID`).
	 *
	 * Within a range, each contiguous group of edges is modeled using a
	 * `GraphQLSegment`, but this is an implementation detail that `GraphQLRange`
	 * hides from its callers.
	 *
	 * Ranges model GraphQL connections, which are the means of traversing from a
	 * node to a set of associated objects; for example, in the following query the
	 * "friends" connection produces a range containing edges that lead to the
	 * requested friend nodes:
	 *
	 *     node(4) {
	 *       friends.first(2) {
	 *         edges {
	 *           node {
	 *             id,
	 *             name,
	 *           },
	 *         },
	 *       },
	 *     }
	 *
	 * @see `GraphQLSegment`
	 * @see http://facebook.github.io/relay/docs/graphql-connections.html
	 */

	var GraphQLRange = function () {
	  function GraphQLRange() {
	    (0, _classCallCheck3['default'])(this, GraphQLRange);

	    this.reset();
	  }

	  GraphQLRange.prototype.reset = function reset() {
	    // List of segments where each segment is a continuous chunk.
	    // There are gaps in between the segments. The first segment in the list
	    // should be cursors beginning at the top of the range (i.e. first(N)).
	    // The last segment in the list should be cursors at the bottom of
	    // the range (i.e. last(N)).
	    this._orderedSegments = [new (__webpack_require__(31))(), new (__webpack_require__(31))()];

	    // GraphQLRange nodes can also support static queries like surrounds,
	    // find, whose contents won't ever change for a given set of arguments.
	    // Store these queries' results in this map, since you can't do first()
	    // or last() queries on these ranges.
	    this._staticQueriesMap = {};

	    this._hasFirst = false;
	    this._hasLast = false;
	  };

	  /**
	   * @param {number} index
	   */


	  GraphQLRange.prototype._resetSegment = function _resetSegment(index) {
	    __webpack_require__(1)(index >= 0 && index < this._orderedSegments.length, 'cannot reset non-existent segment');
	    this._orderedSegments[index] = new (__webpack_require__(31))();
	  };

	  /**
	   * @param {string} cursor
	   * @return {?number}
	   */


	  GraphQLRange.prototype._getSegmentIndexByCursor = function _getSegmentIndexByCursor(cursor) {
	    var deletedIndex = null;
	    // TODO: revisit if we end up having too many segments
	    for (var ii = 0; ii < this._orderedSegments.length; ii++) {
	      if (this._orderedSegments[ii].containsEdgeWithCursor(cursor)) {
	        return ii;
	      } else if (this._orderedSegments[ii].containsEdgeWithCursor(cursor, true)) {
	        deletedIndex = ii;
	      }
	    }
	    return deletedIndex;
	  };

	  /**
	   * @param {string} id
	   * @return {?number}
	   */


	  GraphQLRange.prototype._getSegmentIndexByID = function _getSegmentIndexByID(id) {
	    // TODO: revisit if we end up having too many segments
	    for (var ii = 0; ii < this._orderedSegments.length; ii++) {
	      if (this._orderedSegments[ii].containsEdgeWithID(id)) {
	        return ii;
	      }
	    }
	    return null;
	  };

	  /**
	   * Add edges' data into the static queries map for the query calls,
	   * overwriting any previously existing data for these calls.
	   * @param {array<object>} queryCalls
	   * @param {array} edges
	   */


	  GraphQLRange.prototype._addStaticEdges = function _addStaticEdges(queryCalls, edges) {
	    var calls = _callsToString(queryCalls);
	    var edgeIDsToStore = [];
	    var cursorsToStore = [];

	    for (var ii = 0; ii < edges.length; ii++) {
	      var edge = edges[ii];
	      edgeIDsToStore.push(__webpack_require__(3).getDataIDForObject(edge));
	      cursorsToStore.push(edge.cursor);
	    }

	    this._staticQueriesMap[calls] = {
	      edgeIDs: edgeIDsToStore,
	      cursors: cursorsToStore
	    };
	  };

	  /**
	   * Add edges into the range based on the query calls. New edges will replace
	   * previous edges in the range.
	   * @param {array<object>} queryCalls
	   * @param {array} edges
	   * @param {object} pageInfo
	   */


	  GraphQLRange.prototype.addItems = function addItems(queryCalls, edges, pageInfo) {
	    validateEdges(edges);
	    var calls = callsArrayToObject(queryCalls);
	    var segmentCount = void 0,
	        segmentIndex = void 0;

	    if (isStaticCall(calls)) {
	      this._addStaticEdges(queryCalls, edges);
	      return;
	    }

	    if (!isValidRangeCall(calls)) {
	      console.error('GraphQLRange currently only handles first(<count>), ' + 'after(<cursor>).first(<count>), last(<count>), ' + 'before(<cursor>).last(<count>), before(<cursor>).first(<count>), ' + 'and after(<cursor>).last(<count>)');
	      return;
	    }

	    // Skip the update if cursors are invalid
	    if (calls.before === null || calls.after === null) {
	      console.error('GraphQLRange received null as a cursor.');
	      return;
	    }

	    if (calls.first) {
	      // before().first() calls can produce gaps
	      if (calls.before && !calls.after) {
	        // make a new segment if there is a gap and there are new edges
	        if (pageInfo[HAS_NEXT_PAGE] === true && edges.length !== 0) {
	          if (this._getSegmentIndexByCursor(calls.before) === 0) {
	            this._orderedSegments.unshift(new (__webpack_require__(31))());
	          }
	          // When there is a gap from before().first() query, this is the same
	          // as just storing a first().
	          this._addAfterFirstItems(edges, pageInfo[HAS_NEXT_PAGE], undefined, calls.before);
	        } else {
	          // Since there is no gap, we can stitch into the beginning
	          // of existing segment
	          this._addBeforeLastItems(edges, pageInfo[HAS_PREV_PAGE], calls.before);
	        }
	      } else {
	        // These elements are added from paging to extend the the range.
	        if (!calls.after) {
	          segmentIndex = 0;
	          segmentCount = this.getFirstSegment().getCount();
	          if (segmentCount && (calls.first > segmentCount || edges.length > segmentCount) && !this.getFirstSegment().getFirstCursor()) {
	            // this is a range for which we don't have a cursor, and we've
	            // fetched more data by increasing the `first(N)` variable; we
	            // blow away and replace the first segment in order to side-step
	            // issues where the order of IDs in the range may change between
	            // queries
	            this._resetSegment(segmentIndex);
	          }
	        }
	        this._addAfterFirstItems(edges, pageInfo[HAS_NEXT_PAGE], calls.after, calls.before);
	      }
	    } else if (calls.last) {
	      // after().last() calls can produce gaps
	      if (calls.after && !calls.before) {
	        // make a new segment if there is a gap and there are new edges
	        if (pageInfo[HAS_PREV_PAGE] === true && edges.length !== 0) {
	          if (this._getSegmentIndexByCursor(calls.after) === this._orderedSegments.length - 1) {
	            this._orderedSegments.push(new (__webpack_require__(31))());
	          }
	          // When there is a gap from after().last() query, this is the same as
	          // just storing a last().
	          this._addBeforeLastItems(edges, pageInfo[HAS_PREV_PAGE], undefined, calls.after);
	        } else {
	          // Since there is no gap, we can stitch to the end
	          // of existing segment
	          this._addAfterFirstItems(edges, pageInfo[HAS_NEXT_PAGE], calls.after);
	        }
	      } else {
	        // These elements are added from paging to extend the the range.
	        if (!calls.before) {
	          segmentIndex = this._orderedSegments.length - 1;
	          segmentCount = this.getLastSegment().getCount();
	          if (segmentCount && (calls.last > segmentCount || edges.length > segmentCount) && !this.getLastSegment().getLastCursor()) {
	            // this is a range for which we don't have a cursor, and we've
	            // fetched more data by increasing the `last(N)` variable; we
	            // blow away and replace the last segment in order to side-step
	            // issues where the order of IDs in the range may change between
	            // queries
	            this._resetSegment(segmentIndex);
	          }
	        }
	        this._addBeforeLastItems(edges, pageInfo[HAS_PREV_PAGE], calls.before, calls.after);
	      }
	    }
	  };

	  /**
	   * @return {GraphQLSegment}
	   */


	  GraphQLRange.prototype.getFirstSegment = function getFirstSegment() {
	    return this._orderedSegments[0];
	  };

	  /**
	   * @return {GraphQLSegment}
	   */


	  GraphQLRange.prototype.getLastSegment = function getLastSegment() {
	    return this._orderedSegments[this._orderedSegments.length - 1];
	  };

	  /**
	   * Tries to concat segments at segmentIndex and segmentIndex + 1.
	   * This is an all or nothing operation.
	   * If concat is successful, we'll remove the segment at segmentIndex + 1
	   * from the orderedSegments after all elements has been added to the segment
	   * at segmentIndex.
	   * If concat is unsuccessful, nothing will be changed.
	   * @param {number} segmentIndex
	   */


	  GraphQLRange.prototype._concatSegments = function _concatSegments(segmentIndex) {
	    __webpack_require__(1)(segmentIndex + 1 < this._orderedSegments.length && segmentIndex >= 0, 'GraphQLRange cannot concat segments outside the range ' + 'of orderedSegments');
	    var firstSegment = this._orderedSegments[segmentIndex];
	    var secondSegment = this._orderedSegments[segmentIndex + 1];
	    if (firstSegment.concatSegment(secondSegment)) {
	      this._orderedSegments.splice(segmentIndex + 1, 1);
	    } else {
	      console.warn('GraphQLRange was unable to concat segment %d and segment %d', segmentIndex, segmentIndex + 1);
	    }
	  };

	  /**
	   * Adds the edge to the front of the range. New edge will replace previous
	   * edge that have the same id.
	   * @param {object} edge
	   */


	  GraphQLRange.prototype.prependEdge = function prependEdge(edge) {
	    validateEdge(edge);
	    this._hasFirst = true;
	    this._removeEdgeIfApplicable(edge);
	    var segment = this.getFirstSegment();
	    segment.prependEdge(edge);
	  };

	  /**
	   * Adds the edge to the end of the range. New edge will replace previous
	   * edge that have the same id.
	   * @param {object} edge
	   */


	  GraphQLRange.prototype.appendEdge = function appendEdge(edge) {
	    validateEdge(edge);
	    this._hasLast = true;
	    this._removeEdgeIfApplicable(edge);
	    var segment = this.getLastSegment();
	    segment.appendEdge(edge);
	  };

	  /**
	   * Removes edge in range if it matches id in input edge.
	   * @param {object} edge
	   */


	  GraphQLRange.prototype._removeEdgeIfApplicable = function _removeEdgeIfApplicable(edge) {
	    var id = __webpack_require__(3).getDataIDForObject(edge);
	    var index = this._getSegmentIndexByID(id);
	    if (index != null) {
	      this._orderedSegments[index].removeEdge(id);
	    }
	  };

	  /**
	   * Filter out edges that are already in the range to keep a stable ordering.
	   *
	   * @param {array} edges
	   * @return {array} filtered edges
	   */


	  GraphQLRange.prototype._dedupEdgesAgainstRange = function _dedupEdgesAgainstRange(edges) {
	    var _this = this;

	    return edges.filter(function (edge) {
	      var id = __webpack_require__(3).getDataIDForObject(edge);
	      return _this._getSegmentIndexByID(id) == null;
	    });
	  };

	  /**
	   * Add items into the correct segment with the cursor. If no cursor
	   * is present, items are added to the very first segment.
	   *
	   * @param {array} edges
	   * @param {boolean} hasNextPage
	   * @param {?string} afterCursor
	   * @param {?string} beforeCursor
	   */


	  GraphQLRange.prototype._addAfterFirstItems = function _addAfterFirstItems(edges, hasNextPage, afterCursor, beforeCursor) {
	    var segment = void 0;
	    var segmentIndex = void 0;
	    var lastCursor = void 0;
	    if (afterCursor !== undefined) {
	      segmentIndex = this._getSegmentIndexByCursor(afterCursor);
	      if (segmentIndex == null) {
	        __webpack_require__(5)(false, 'GraphQLRange cannot find a segment that has the cursor: %s', afterCursor);
	        return;
	      }
	      segment = this._orderedSegments[segmentIndex];
	      lastCursor = segment.getLastCursor();
	      if (lastCursor !== afterCursor) {
	        edges = this._reconcileAfterFirstEdges(segment, edges, afterCursor);
	        afterCursor = lastCursor;
	        if (!edges) {
	          return;
	        }
	      }
	    } else {
	      segmentIndex = 0;
	      segment = this._orderedSegments[segmentIndex];
	      lastCursor = segment.getLastCursor();
	      if (lastCursor !== undefined) {
	        edges = this._reconcileAfterFirstEdges(segment, edges);
	        afterCursor = lastCursor;
	        if (!edges) {
	          return;
	        }
	      }
	    }
	    var nextSegment = this._orderedSegments[segmentIndex + 1];
	    if (beforeCursor !== undefined) {
	      if (segmentIndex === this._orderedSegments.length - 1) {
	        console.warn('GraphQLRange cannot add because there is no next segment');
	        return;
	      } else if (!nextSegment.isFirstCursor(beforeCursor)) {
	        __webpack_require__(5)(false, 'GraphQLRange cannot add because beforeCursor does not match first ' + 'cursor of the next segment');
	        return;
	      }
	    }

	    if (afterCursor === undefined) {
	      this._hasFirst = true;
	    }

	    var filteredEdges = this._dedupEdgesAgainstRange(edges);
	    segment.addEdgesAfterCursor(filteredEdges, afterCursor);
	    if (!hasNextPage) {
	      if (beforeCursor !== undefined) {
	        // If we have a beforeCursor and there is no next page,
	        // then there is no gap between the current segment and the next.
	        // We can concat the two segments when there is no gap.
	        this._concatSegments(segmentIndex);
	      } else {
	        this._hasLast = true;
	        // If this segment already has the last element, we don't
	        // need any segments after this.
	        this._orderedSegments.splice(segmentIndex + 1, this._orderedSegments.length - 1 - segmentIndex);
	      }
	    }
	  };

	  /**
	   * In the case the cursor does not correspond last cursor,
	   * walk through the edges to see if we can trim edges to
	   * only those after the last cursor. Returns undefined when
	   * the input cannot be reconciled.
	   *
	   * @param {GraphQLSegment} segment
	   * @param {array} edges
	   * @param {?string} cursor
	   * @return {?array} trimmed edges
	   */


	  GraphQLRange.prototype._reconcileAfterFirstEdges = function _reconcileAfterFirstEdges(segment, edges, cursor) {
	    var metadata = segment.getMetadataAfterCursor(edges.length + 1, cursor);
	    var edgeIDs = metadata.edgeIDs;
	    if (edgeIDs.length > edges.length) {
	      // Already have more edges than the input.
	      return undefined;
	    }

	    for (var ii = 0; ii < edgeIDs.length; ii++) {
	      if (edgeIDs[ii] !== __webpack_require__(3).getDataIDForObject(edges[ii])) {
	        __webpack_require__(5)(false, 'Relay was unable to reconcile edges on a connection. This most ' + 'likely occurred while trying to handle a server response that ' + 'includes connection edges with nodes that lack an `id` field.');
	        return undefined;
	      }
	    }
	    return edges.slice(edgeIDs.length);
	  };

	  /**
	   * Add items into the correct segment with the cursor. If no cursor
	   * is present, items are added to the very last segment.
	   * @param {array} edges
	   * @param {boolean} hasPrevPage
	   * @param {?string} beforeCursor
	   * @param {?string} afterCursor
	   */


	  GraphQLRange.prototype._addBeforeLastItems = function _addBeforeLastItems(edges, hasPrevPage, beforeCursor, afterCursor) {
	    var segment = void 0;
	    var segmentIndex = void 0;
	    var firstCursor = void 0;
	    if (beforeCursor !== undefined) {
	      segmentIndex = this._getSegmentIndexByCursor(beforeCursor);
	      if (segmentIndex == null) {
	        __webpack_require__(5)(false, 'GraphQLRange cannot find a segment that has the cursor: %s', beforeCursor);
	        return;
	      }
	      segment = this._orderedSegments[segmentIndex];
	      firstCursor = segment.getFirstCursor();
	      if (firstCursor !== beforeCursor) {
	        edges = this._reconcileBeforeLastEdges(segment, edges, beforeCursor);
	        beforeCursor = firstCursor;
	        if (!edges) {
	          return;
	        }
	      }
	    } else {
	      segmentIndex = this._orderedSegments.length - 1;
	      segment = this._orderedSegments[segmentIndex];
	      firstCursor = segment.getFirstCursor();
	      if (firstCursor !== undefined) {
	        edges = this._reconcileBeforeLastEdges(segment, edges, beforeCursor);
	        beforeCursor = firstCursor;
	        if (!edges) {
	          return;
	        }
	      }
	    }
	    var prevSegment = this._orderedSegments[segmentIndex - 1];
	    if (afterCursor !== undefined) {
	      if (segmentIndex === 0) {
	        console.warn('GraphQLRange cannot add because there is no previous segment');
	        return;
	      } else if (!prevSegment.isLastCursor(afterCursor)) {
	        __webpack_require__(5)(false, 'GraphQLRange cannot add because afterCursor does not match last ' + 'cursor of the previous segment');
	        return;
	      }
	    }

	    if (beforeCursor === undefined) {
	      this._hasLast = true;
	    }

	    var filteredEdges = this._dedupEdgesAgainstRange(edges);
	    segment.addEdgesBeforeCursor(filteredEdges, beforeCursor);
	    if (!hasPrevPage) {
	      if (afterCursor !== undefined) {
	        // If we have an afterCursor and there is no previous page,
	        // then there is no gap between the current segment and the previous.
	        // We can concat the two segments when there is no gap.
	        this._concatSegments(segmentIndex - 1);
	      } else {
	        this._hasFirst = true;
	        // If this segment already has the first element, we don't
	        // need any segments before this.
	        this._orderedSegments.splice(0, segmentIndex);
	      }
	    }
	  };

	  /**
	   * In the case the cursor does not correspond first cursor,
	   * walk through the edges to see if we can trim edges to
	   * only those before the first cursor. Returns undefined when
	   * the input cannot be reconciled.
	   *
	   * @param {GraphQLSegment} segment
	   * @param {array} edges
	   * @param {?string} cursor
	   * @return {?array} trimmed edges
	   */


	  GraphQLRange.prototype._reconcileBeforeLastEdges = function _reconcileBeforeLastEdges(segment, edges, cursor) {
	    var metadata = segment.getMetadataBeforeCursor(edges.length + 1, cursor);
	    var edgeIDs = metadata.edgeIDs;
	    if (edgeIDs.length > edges.length) {
	      // Already have more edges than the input.
	      return undefined;
	    }

	    for (var ii = 1; ii <= edgeIDs.length; ii++) {
	      if (edgeIDs[edgeIDs.length - ii] !== __webpack_require__(3).getDataIDForObject(edges[edges.length - ii])) {
	        __webpack_require__(5)(false, 'Relay was unable to reconcile edges on a connection. This most ' + 'likely occurred while trying to handle a server response that ' + 'includes connection edges with nodes that lack an `id` field.');
	        return undefined;
	      }
	    }
	    return edges.slice(0, edges.length - edgeIDs.length);
	  };

	  /**
	   * Removes an edge from this range such that the edge will never be reachable
	   * regardless of the client session. This is used by delete mutations.
	   *
	   * @param {string} id
	   */


	  GraphQLRange.prototype.removeEdgeWithID = function removeEdgeWithID(id) {
	    for (var ii = 0; ii < this._orderedSegments.length; ii++) {
	      this._orderedSegments[ii].removeAllEdges(id);
	    }
	  };

	  /**
	   * @param {array<object>} queryCalls
	   * @param {?object} queuedRecord
	   * @return {object} includes fields: requestedEdgeIDs, diffCalls
	   */


	  GraphQLRange.prototype.retrieveRangeInfoForQuery = function retrieveRangeInfoForQuery(queryCalls, queuedRecord) {
	    var calls = callsArrayToObject(queryCalls);

	    if (isStaticCall(calls)) {
	      return this._retrieveRangeInfoForStaticCalls(queryCalls);
	    }

	    // Convert to name => true, so we can test for whether the key exists
	    // without comparing to undefined
	    if (!isValidRangeCall(calls)) {
	      console.error('GraphQLRange currently only handles first(<count>), ' + 'after(<cursor>).first(<count>), last(<count>), ' + 'before(<cursor>).last(<count>), before(<cursor>).first(<count>), ' + 'and after(<cursor>).last(<count>)');
	      return {
	        requestedEdgeIDs: [],
	        diffCalls: [],
	        pageInfo: __webpack_require__(6).getDefaultPageInfo()
	      };
	    }
	    if (calls.first && calls.before || calls.last && calls.after) {
	      // TODO #7556678: add support for first/before and last/after
	      return {
	        requestedEdgeIDs: [],
	        diffCalls: [],
	        pageInfo: __webpack_require__(6).getDefaultPageInfo()
	      };
	    }
	    if (!isValidRangeCallValues(calls)) {
	      console.error('GraphQLRange only supports first(<count>) or last(<count>) ' + 'where count is greater than 0');
	      return {
	        requestedEdgeIDs: [],
	        diffCalls: [],
	        pageInfo: __webpack_require__(6).getDefaultPageInfo()
	      };
	    }
	    if (calls.first) {
	      return this._retrieveRangeInfoForFirstQuery(queryCalls, queuedRecord);
	    } else if (calls.last) {
	      return this._retrieveRangeInfoForLastQuery(queryCalls, queuedRecord);
	    }
	  };

	  /**
	   * @param {array<object>} queryCalls
	   * @return {object} includes fields: requestedEdgeIDs, diffCalls
	   */


	  GraphQLRange.prototype._retrieveRangeInfoForStaticCalls = function _retrieveRangeInfoForStaticCalls(queryCalls) {
	    var calls = _callsToString(queryCalls);
	    var storedInfo = this._staticQueriesMap[calls];

	    if (storedInfo) {
	      var _pageInfo;

	      return {
	        requestedEdgeIDs: storedInfo.edgeIDs,
	        diffCalls: [],
	        pageInfo: (_pageInfo = {}, (0, _defineProperty3['default'])(_pageInfo, START_CURSOR, storedInfo.cursors[0]), (0, _defineProperty3['default'])(_pageInfo, END_CURSOR, storedInfo.cursors[storedInfo.cursors.length - 1]), (0, _defineProperty3['default'])(_pageInfo, HAS_NEXT_PAGE, true), (0, _defineProperty3['default'])(_pageInfo, HAS_PREV_PAGE, true), _pageInfo)
	      };
	    }

	    // if we don't have the data for this static call already,
	    // return empty arrays with the corresponding diffCalls
	    return {
	      requestedEdgeIDs: [],
	      diffCalls: queryCalls,
	      pageInfo: __webpack_require__(6).getDefaultPageInfo()
	    };
	  };

	  /**
	   * @param {object} queuedRecord
	   * @return {?array<string>}
	   */


	  GraphQLRange.prototype._getAppendedIDsForQueuedRecord = function _getAppendedIDsForQueuedRecord(queuedRecord) {
	    return queuedRecord[__webpack_require__(53)[__webpack_require__(18).APPEND]];
	  };

	  /**
	   * @param {object} queuedRecord
	   * @return {?array<string>}
	   */


	  GraphQLRange.prototype._getRemovedIDsForQueuedRecord = function _getRemovedIDsForQueuedRecord(queuedRecord) {
	    return queuedRecord[__webpack_require__(53)[__webpack_require__(18).REMOVE]];
	  };

	  /**
	   * @param {object} queuedRecord
	   * @return {?array<string>}
	   */


	  GraphQLRange.prototype._getPrependedIDsForQueuedRecord = function _getPrependedIDsForQueuedRecord(queuedRecord) {
	    return queuedRecord[__webpack_require__(53)[__webpack_require__(18).PREPEND]];
	  };

	  /**
	   * @param {array<object>} queryCalls
	   * @param {?object} queuedRecord
	   * @return {object} includes fields: requestedEdgeIDs, diffCalls
	   */


	  GraphQLRange.prototype._retrieveRangeInfoForFirstQuery = function _retrieveRangeInfoForFirstQuery(queryCalls, queuedRecord) {
	    var appendEdgeIDs = void 0;
	    var prependEdgeIDs = void 0;
	    var removeIDs = void 0;
	    if (queuedRecord) {
	      appendEdgeIDs = this._getAppendedIDsForQueuedRecord(queuedRecord);
	      prependEdgeIDs = this._getPrependedIDsForQueuedRecord(queuedRecord);
	      removeIDs = this._getRemovedIDsForQueuedRecord(queuedRecord);
	    }
	    var calls = callsArrayToObject(queryCalls);
	    var countNeeded = calls.first + (removeIDs ? removeIDs.length : 0);
	    var segment = void 0;
	    var segmentIndex = void 0;
	    var pageInfo = (0, _extends3['default'])({}, __webpack_require__(6).getDefaultPageInfo());

	    var afterCursor = calls.after;
	    if (afterCursor !== undefined) {
	      segmentIndex = this._getSegmentIndexByCursor(afterCursor);
	      if (segmentIndex == null) {
	        console.warn('GraphQLRange cannot find a segment that has the cursor: ' + afterCursor);
	        return {
	          requestedEdgeIDs: [],
	          diffCalls: [],
	          pageInfo: pageInfo
	        };
	      }
	      segment = this._orderedSegments[segmentIndex];
	    } else {
	      var prependEdgesCount = prependEdgeIDs ? prependEdgeIDs.length : 0;
	      countNeeded -= prependEdgesCount;

	      segmentIndex = 0;
	      segment = this._orderedSegments[segmentIndex];
	    }

	    var requestedMetadata = segment.getMetadataAfterCursor(countNeeded, afterCursor);
	    var requestedEdgeIDs = requestedMetadata.edgeIDs;
	    var requestedCursors = requestedMetadata.cursors;
	    var diffCalls = [];
	    if (requestedCursors.length) {
	      pageInfo[START_CURSOR] = requestedCursors[0];
	      pageInfo[END_CURSOR] = requestedCursors[requestedCursors.length - 1];
	    }
	    var lastID = requestedEdgeIDs[requestedEdgeIDs.length - 1];
	    // Only requested segment that does not include very last item from
	    // the range can have next page and diff calls
	    if (!this._hasLast || segmentIndex !== this._orderedSegments.length - 1 || lastID && lastID !== segment.getLastID()) {
	      pageInfo[HAS_NEXT_PAGE] = true;
	      if (requestedEdgeIDs.length < countNeeded) {
	        countNeeded -= requestedEdgeIDs.length;
	        var lastCursor = segment.getLastCursor();
	        // If segment has null cursors, retrieve whole range.
	        if (lastCursor === null) {
	          diffCalls.push({ name: 'first', value: calls.first });
	        } else {
	          if (lastCursor !== undefined) {
	            diffCalls.push({ name: 'after', value: lastCursor });
	          }
	          // If this is not the last segment, we should not request edges
	          // that would overlap the first element of the next segment.
	          if (segmentIndex !== this._orderedSegments.length - 1) {
	            var nextSegment = this._orderedSegments[segmentIndex + 1];
	            var firstCursor = nextSegment.getFirstCursor();
	            if (firstCursor !== undefined) {
	              diffCalls.push({ name: 'before', value: firstCursor });
	            }
	          }
	          diffCalls.push({ name: 'first', value: countNeeded });
	        }
	      }
	    }

	    if (queuedRecord) {
	      if (prependEdgeIDs && prependEdgeIDs.length && !calls.after) {
	        requestedEdgeIDs = prependEdgeIDs.concat(requestedEdgeIDs);
	      }
	      if (appendEdgeIDs && appendEdgeIDs.length && !pageInfo[HAS_NEXT_PAGE]) {
	        requestedEdgeIDs = requestedEdgeIDs.concat(appendEdgeIDs);
	      }
	      if (removeIDs && removeIDs.length) {
	        requestedEdgeIDs = requestedEdgeIDs.filter(function (edgeID) {
	          return removeIDs.indexOf(edgeID) === -1;
	        });
	      }
	      if (requestedEdgeIDs.length > calls.first) {
	        requestedEdgeIDs = requestedEdgeIDs.slice(0, calls.first);
	      }
	    }

	    return {
	      requestedEdgeIDs: requestedEdgeIDs,
	      diffCalls: diffCalls,
	      pageInfo: pageInfo
	    };
	  };

	  /**
	   * @param {array<object>} queryCalls
	   * @param {?object} queuedRecord
	   * @return {object} includes fields: requestedEdgeIDs, diffCalls
	   */


	  GraphQLRange.prototype._retrieveRangeInfoForLastQuery = function _retrieveRangeInfoForLastQuery(queryCalls, queuedRecord) {
	    var appendEdgeIDs = void 0;
	    var prependEdgeIDs = void 0;
	    var removeIDs = void 0;
	    if (queuedRecord) {
	      appendEdgeIDs = this._getAppendedIDsForQueuedRecord(queuedRecord);
	      prependEdgeIDs = this._getPrependedIDsForQueuedRecord(queuedRecord);
	      removeIDs = this._getRemovedIDsForQueuedRecord(queuedRecord);
	    }
	    var calls = callsArrayToObject(queryCalls);
	    var countNeeded = calls.last + (removeIDs ? removeIDs.length : 0);
	    var segment = void 0;
	    var segmentIndex = void 0;
	    var pageInfo = (0, _extends3['default'])({}, __webpack_require__(6).getDefaultPageInfo());

	    var beforeCursor = calls.before;
	    if (beforeCursor !== undefined) {
	      segmentIndex = this._getSegmentIndexByCursor(beforeCursor);
	      if (segmentIndex == null) {
	        console.warn('GraphQLRange cannot find a segment that has the cursor: ' + beforeCursor);
	        return {
	          requestedEdgeIDs: [],
	          diffCalls: [],
	          pageInfo: pageInfo
	        };
	      }
	      segment = this._orderedSegments[segmentIndex];
	    } else {
	      var appendEdgesCount = appendEdgeIDs ? appendEdgeIDs.length : 0;
	      countNeeded -= appendEdgesCount;

	      segmentIndex = this._orderedSegments.length - 1;
	      segment = this._orderedSegments[segmentIndex];
	    }

	    var requestedMetadata = segment.getMetadataBeforeCursor(countNeeded, beforeCursor);
	    var requestedEdgeIDs = requestedMetadata.edgeIDs;
	    var requestedCursors = requestedMetadata.cursors;
	    var diffCalls = [];
	    if (requestedCursors.length) {
	      pageInfo[START_CURSOR] = requestedCursors[0];
	      pageInfo[END_CURSOR] = requestedCursors[requestedCursors.length - 1];
	    }
	    var firstID = requestedEdgeIDs[0];
	    // Only requested segment that does not include very first item from
	    // the range can have next page and diff calls
	    if (!this._hasFirst || segmentIndex !== 0 || firstID && firstID !== segment.getFirstID()) {
	      pageInfo[HAS_PREV_PAGE] = true;
	      if (requestedEdgeIDs.length < countNeeded) {
	        countNeeded -= requestedEdgeIDs.length;
	        var firstCursor = segment.getFirstCursor();
	        // If segment has null cursors, retrieve whole range.
	        if (firstCursor === null) {
	          diffCalls.push({ name: 'last', value: calls.last });
	        } else {
	          if (firstCursor !== undefined) {
	            diffCalls.push({ name: 'before', value: firstCursor });
	          }
	          // If this is not the first segment, we should not request edges
	          // that would overlap the last element of the previous segment.
	          if (segmentIndex !== 0) {
	            var prevSegment = this._orderedSegments[segmentIndex - 1];
	            var lastCursor = prevSegment.getLastCursor();
	            if (lastCursor !== undefined) {
	              diffCalls.push({ name: 'after', value: lastCursor });
	            }
	          }
	          diffCalls.push({ name: 'last', value: countNeeded });
	        }
	      }
	    }

	    if (queuedRecord) {
	      if (appendEdgeIDs && appendEdgeIDs.length && !calls.before) {
	        requestedEdgeIDs = requestedEdgeIDs.concat(appendEdgeIDs);
	      }
	      if (prependEdgeIDs && prependEdgeIDs.length && !pageInfo[HAS_PREV_PAGE]) {
	        requestedEdgeIDs = prependEdgeIDs.concat(requestedEdgeIDs);
	      }
	      if (removeIDs && removeIDs.length) {
	        requestedEdgeIDs = requestedEdgeIDs.filter(function (edgeID) {
	          return removeIDs.indexOf(edgeID) === -1;
	        });
	      }
	      if (requestedEdgeIDs.length > calls.last) {
	        var length = requestedEdgeIDs.length;
	        requestedEdgeIDs = requestedEdgeIDs.slice(length - calls.last, length);
	      }
	    }

	    return {
	      requestedEdgeIDs: requestedEdgeIDs,
	      diffCalls: diffCalls,
	      pageInfo: pageInfo
	    };
	  };

	  GraphQLRange.fromJSON = function fromJSON(descriptor) {
	    var hasFirst = descriptor[0],
	        hasLast = descriptor[1],
	        staticQueriesMap = descriptor[2],
	        orderedSegments = descriptor[3];

	    var range = new GraphQLRange();
	    range._hasFirst = hasFirst;
	    range._hasLast = hasLast;
	    range._staticQueriesMap = staticQueriesMap;
	    range._orderedSegments = orderedSegments.map(function (segmentDescriptor) {
	      return __webpack_require__(31).fromJSON(segmentDescriptor);
	    });
	    return range;
	  };

	  GraphQLRange.prototype.toJSON = function toJSON() {
	    return [this._hasFirst, this._hasLast, this._staticQueriesMap, this._orderedSegments];
	  };

	  GraphQLRange.prototype.__debug = function __debug() {
	    return {
	      orderedSegments: this._orderedSegments
	    };
	  };

	  GraphQLRange.prototype.getEdgeIDs = function getEdgeIDs() {
	    var edgeIDs = [];
	    this._orderedSegments.forEach(function (segment) {
	      edgeIDs.push.apply(edgeIDs, (0, _toConsumableArray3['default'])(segment.getEdgeIDs()));
	    });
	    __webpack_require__(11)(this._staticQueriesMap, function (query) {
	      edgeIDs.push.apply(edgeIDs, (0, _toConsumableArray3['default'])(query.edgeIDs));
	    });
	    return edgeIDs;
	  };

	  GraphQLRange.prototype.getSegmentedEdgeIDs = function getSegmentedEdgeIDs() {
	    return this._orderedSegments.map(function (segment) {
	      return segment.getEdgeIDs();
	    });
	  };

	  return GraphQLRange;
	}();

	/**
	 * @param {array<object>} calls
	 * @return {string}
	 */


	function _callsToString(calls) {
	  return calls.map(function (call) {
	    return __webpack_require__(36)(call).substring(1);
	  }).join(',');
	}

	module.exports = GraphQLRange;

/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayContainerComparators
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Compares `objectA` and `objectB` using the provided `isEqual` function.
	 *
	 * If a `filter` object is provided, only its keys will be checked during
	 * comparison.
	 */

	function compareObjects(isEqual, objectA, objectB, filter) {
	  var key = void 0;

	  // Test for A's keys different from B.
	  for (key in objectA) {
	    if (filter && !filter.hasOwnProperty(key)) {
	      continue;
	    }

	    if (objectA.hasOwnProperty(key) && (!objectB.hasOwnProperty(key) || !isEqual(objectA[key], objectB[key], key))) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objectB) {
	    if (filter && !filter.hasOwnProperty(key)) {
	      continue;
	    }

	    if (objectB.hasOwnProperty(key) && !objectA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}

	function isScalarAndEqual(valueA, valueB) {
	  return valueA === valueB && (valueA === null || typeof valueA !== 'object');
	}

	function isQueryDataEqual(fragmentPointers, currProp, nextProp, propName) {
	  return (
	    // resolved data did not change
	    fragmentPointers[propName] && currProp === nextProp ||
	    // otherwise compare fake data
	    isScalarAndEqual(currProp, nextProp)
	  );
	}

	function isNonQueryPropEqual(fragments, currProp, nextProp, propName) {
	  return (
	    // ignore props with fragments (instead resolved values are compared)
	    fragments.hasOwnProperty(propName) ||
	    // otherwise props must be scalar and === in order to skip
	    isScalarAndEqual(currProp, nextProp)
	  );
	}

	/**
	 * Relay-aware comparators for props and state provide a reasonable default
	 * implementation of `shouldComponentUpdate`.
	 */
	var RelayContainerComparators = {
	  areQueryResultsEqual: function areQueryResultsEqual(fragmentPointers, prevQueryData, nextQueryData) {
	    return compareObjects(isQueryDataEqual.bind(null, fragmentPointers), prevQueryData, nextQueryData);
	  },
	  areNonQueryPropsEqual: function areNonQueryPropsEqual(fragments, props, nextProps) {
	    return compareObjects(isNonQueryPropEqual.bind(null, fragments), props, nextProps);
	  },
	  areQueryVariablesEqual: function areQueryVariablesEqual(variables, nextVariables) {
	    return compareObjects(isScalarAndEqual, variables, nextVariables);
	  }
	};

	module.exports = RelayContainerComparators;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayGraphQLMutation
	 * 
	 * @format
	 */

	'use strict';

	var _defineProperty3 = _interopRequireDefault(__webpack_require__(37));

	var _extends5 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(6),
	    CLIENT_MUTATION_ID = _require.CLIENT_MUTATION_ID;

	var COUNTER_PREFIX = 'RelayGraphQLMutation';
	var collisionIDCounter = 0;

	/**
	 * @public
	 *
	 * Low-level API for modeling a GraphQL mutation.
	 *
	 * This is the lowest level of abstraction at which product code may deal with
	 * mutations in Relay, and it corresponds to the mutation operation ("a write
	 * followed by a fetch") described in the GraphQL Specification. You specify
	 * the mutation, the inputs, and the query.
	 *
	 * (There is an even lower-level representation, `RelayMutationRequest`,
	 * underlying this which is an entirely internal implementation detail that
	 * product code need not be aware of.)
	 *
	 * @see http://facebook.github.io/graphql/.
	 *
	 */

	var RelayGraphQLMutation = function () {

	  /**
	   * Simplest method for creating a RelayGraphQLMutation instance from a static
	   * `mutation`, some `variables` and an `environment`.
	   */
	  RelayGraphQLMutation.create = function create(mutation, variables, environment) {
	    return new RelayGraphQLMutation(mutation, variables, null, environment);
	  };

	  /**
	   * Specialized method for creating RelayGraphQLMutation instances that takes a
	   * `files` object in addition to the base `mutation`, `variables` and
	   * `environment` parameters.
	   */


	  RelayGraphQLMutation.createWithFiles = function createWithFiles(mutation, variables, files, environment) {
	    return new RelayGraphQLMutation(mutation, variables, files, environment);
	  };

	  /**
	   * General constructor for creating RelayGraphQLMutation instances with
	   * optional `files`, `callbacks` and `collisionKey` arguments.
	   *
	   * Callers must provide an appropriate `mutation`:
	   *
	   *    Relay.QL`
	   *      mutation StoryLikeQuery {
	   *        likeStory(input: $input) {
	   *          clientMutationId
	   *          story {
	   *            likeCount
	   *            likers {
	   *              actor {
	   *                name
	   *              }
	   *            }
	   *          }
	   *        }
	   *      }
	   *    `;
	   *
	   * And set of `variables`:
	   *
	   *    {
	   *      input: {
	   *        feedbackId: 'aFeedbackId',
	   *      },
	   *    }
	   *
	   * As per the GraphQL Relay Specification:
	   *
	   * - The mutation should take a single argument named "input".
	   * - That input argument should contain a (string) "clientMutationId" property
	   *   for the purposes of reconciling requests and responses (automatically
	   *   added by the RelayGraphQLMutation API).
	   * - The query should request "clientMutationId" as a subselection.
	   *
	   * @see http://facebook.github.io/relay/docs/graphql-mutations.html
	   * @see http://facebook.github.io/relay/graphql/mutations.htm
	   *
	   * If not supplied, a unique collision key is derived (meaning that the
	   * created mutation will be independent and not collide with any other).
	   */


	  function RelayGraphQLMutation(query, variables, files, environment, callbacks, collisionKey) {
	    (0, _classCallCheck3['default'])(this, RelayGraphQLMutation);

	    this._query = query;
	    this._variables = variables;
	    this._files = files || null;
	    this._environment = environment;
	    this._callbacks = callbacks || null;
	    this._collisionKey = collisionKey || COUNTER_PREFIX + ':collisionKey:' + getNextCollisionID();
	    this._transaction = null;
	  }

	  /**
	   * Call this to optimistically apply an update to the store.
	   *
	   * The optional `config` parameter can be used to configure a `RANGE_ADD` type
	   * mutation, similar to `RelayMutation` API.
	   *
	   * Optionally, follow up with a call to `commit()` to send the mutation
	   * to the server.
	   *
	   * Note: An optimistic update may only be applied once.
	   */


	  RelayGraphQLMutation.prototype.applyOptimistic = function applyOptimistic(optimisticQuery, optimisticResponse, configs) {
	    __webpack_require__(1)(!this._transaction, 'RelayGraphQLMutation: `applyOptimistic()` was called on an instance ' + 'that already has a transaction in progress.');
	    this._transaction = this._createTransaction(optimisticQuery, optimisticResponse);
	    return this._transaction.applyOptimistic(configs);
	  };

	  /**
	   * Call this to send the mutation to the server.
	   *
	   * The optional `config` parameter can be used to configure a `RANGE_ADD` type
	   * mutation, similar to the `RelayMutation` API.
	   *
	   * Optionally, precede with a call to `applyOptimistic()` to apply an update
	   * optimistically to the store.
	   *
	   * Note: This method may only be called once per instance.
	   */


	  RelayGraphQLMutation.prototype.commit = function commit(configs) {
	    if (!this._transaction) {
	      this._transaction = this._createTransaction();
	    }
	    return this._transaction.commit(configs);
	  };

	  RelayGraphQLMutation.prototype.rollback = function rollback() {
	    if (this._transaction) {
	      return this._transaction.rollback();
	    }
	  };

	  RelayGraphQLMutation.prototype._createTransaction = function _createTransaction(optimisticQuery, optimisticResponse) {
	    return new PendingGraphQLTransaction(this._environment, this._query, this._variables, this._files, optimisticQuery, optimisticResponse, this._collisionKey, this._callbacks);
	  };

	  return RelayGraphQLMutation;
	}();

	function getNextCollisionID() {
	  return collisionIDCounter++;
	}

	/**
	 * @internal
	 *
	 * Data structure conforming to the `PendingTransaction` interface specified by
	 * `RelayMutationQueue`.
	 */

	var PendingGraphQLTransaction = function () {

	  // Other properties:

	  // These properties required to conform to the PendingTransaction interface:
	  function PendingGraphQLTransaction(environment, query, variables, files, optimisticQuery, optimisticResponse, collisionKey, callbacks) {
	    (0, _classCallCheck3['default'])(this, PendingGraphQLTransaction);

	    this._configs = [];
	    this._query = query;
	    this._variables = variables;
	    this._files = files;
	    this._optimisticQuery = optimisticQuery || null;
	    this._optimisticResponse = optimisticResponse || null;
	    this._collisionKey = collisionKey;
	    this.onFailure = callbacks && callbacks.onFailure;
	    this.onSuccess = callbacks && callbacks.onSuccess;
	    this.status = __webpack_require__(19).CREATED;
	    this.error = null;
	    this._mutation = null;
	    this._optimisticConfigs = null;
	    this._optimisticMutation = null;

	    this.mutationTransaction = environment.getStoreData().getMutationQueue().createTransactionWithPendingTransaction(this);

	    this.id = this.mutationTransaction.getID();
	  }

	  // Methods from the PendingTransaction interface.

	  PendingGraphQLTransaction.prototype.getCallName = function getCallName() {
	    __webpack_require__(1)(this._mutation, 'RelayGraphQLMutation: `getCallName()` called but no mutation exists ' + '(`getQuery()` must be called first to construct the mutation).');
	    return this._mutation.getCall().name;
	  };

	  PendingGraphQLTransaction.prototype.getCollisionKey = function getCollisionKey() {
	    return this._collisionKey;
	  };

	  PendingGraphQLTransaction.prototype.getConfigs = function getConfigs() {
	    return this._configs;
	  };

	  PendingGraphQLTransaction.prototype.getFiles = function getFiles() {
	    return this._files;
	  };

	  PendingGraphQLTransaction.prototype.getOptimisticConfigs = function getOptimisticConfigs() {
	    return this._optimisticConfigs;
	  };

	  PendingGraphQLTransaction.prototype.getOptimisticQuery = function getOptimisticQuery(storeData) {
	    if (!this._optimisticMutation && this._optimisticQuery) {
	      var concreteMutation = __webpack_require__(7).getMutation(this._optimisticQuery);
	      var mutation = __webpack_require__(2).Mutation.create(concreteMutation, __webpack_require__(12).get('$RelayGraphQLMutation'), this._getVariables());
	      this._optimisticMutation = mutation; // Cast RelayQuery.{Node -> Mutation}.
	    }
	    return this._optimisticMutation;
	  };

	  PendingGraphQLTransaction.prototype.getOptimisticResponse = function getOptimisticResponse() {
	    return (0, _extends5['default'])({}, this._optimisticResponse, (0, _defineProperty3['default'])({}, CLIENT_MUTATION_ID, this.id));
	  };

	  PendingGraphQLTransaction.prototype.getQuery = function getQuery(storeData) {
	    if (!this._mutation) {
	      var concreteMutation = __webpack_require__(7).getMutation(this._query);
	      var mutation = __webpack_require__(2).Mutation.create(concreteMutation, __webpack_require__(12).get('$RelayGraphQLMutation'), this._getVariables());
	      this._mutation = mutation; // Cast RelayQuery.{Node -> Mutation}.
	    }
	    return this._mutation;
	  };

	  // Additional methods outside the PendingTransaction interface.

	  PendingGraphQLTransaction.prototype.commit = function commit(configs) {
	    if (configs) {
	      this._configs = configs;
	    }
	    return this.mutationTransaction.commit();
	  };

	  PendingGraphQLTransaction.prototype.applyOptimistic = function applyOptimistic(configs) {
	    if (configs) {
	      this._optimisticConfigs = configs;
	    }
	    return this.mutationTransaction.applyOptimistic();
	  };

	  PendingGraphQLTransaction.prototype.rollback = function rollback() {
	    this.mutationTransaction.rollback();
	  };

	  PendingGraphQLTransaction.prototype._getVariables = function _getVariables() {
	    var input = this._variables.input;
	    if (!input) {
	      __webpack_require__(1)(false, 'RelayGraphQLMutation: Required `input` variable is missing ' + '(supplied variables were: [%s]).', Object.keys(this._variables).join(', '));
	    }
	    return (0, _extends5['default'])({}, this._variables, {
	      input: (0, _extends5['default'])({}, input, (0, _defineProperty3['default'])({}, CLIENT_MUTATION_ID, this.id))
	    });
	  };

	  return PendingGraphQLTransaction;
	}();

	module.exports = RelayGraphQLMutation;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMutationQuery
	 * 
	 * @format
	 */

	'use strict';

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(30));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(18),
	    REFETCH = _require.REFETCH;
	// This should probably use disjoint unions.


	var CLIENT_MUTATION_ID = __webpack_require__(6).CLIENT_MUTATION_ID;

	var ANY_TYPE = __webpack_require__(8).ANY_TYPE,
	    ID = __webpack_require__(8).ID,
	    TYPENAME = __webpack_require__(8).TYPENAME;

	/**
	 * @internal
	 *
	 * Constructs query fragments that are sent with mutations, which should ensure
	 * that any records changed as a result of mutations are brought up-to-date.
	 *
	 * The fragments are a minimal subset created by intersecting the "fat query"
	 * (fields that a mutation declares may have changed) with the "tracked query"
	 * (fields representing data previously queried and written into the store).
	 */


	var RelayMutationQuery = {
	  /**
	   * Accepts a mapping from field names to data IDs. The field names must exist
	   * as top-level fields in the fat query. These top-level fields are used to
	   * re-fetch any data that has changed for records identified by the data IDs.
	   *
	   * The supplied mapping may contain multiple field names. In addition, each
	   * field name may map to an array of data IDs if the field is plural.
	   */
	  buildFragmentForFields: function buildFragmentForFields(_ref) {
	    var fatQuery = _ref.fatQuery,
	        fieldIDs = _ref.fieldIDs,
	        tracker = _ref.tracker;

	    var mutatedFields = [];
	    __webpack_require__(11)(fieldIDs, function (dataIDOrIDs, fieldName) {
	      var fatField = getFieldFromFatQuery(fatQuery, fieldName);
	      var dataIDs = [].concat(dataIDOrIDs);
	      var trackedChildren = [];
	      dataIDs.forEach(function (dataID) {
	        trackedChildren.push.apply(trackedChildren, (0, _toConsumableArray3['default'])(tracker.getTrackedChildrenForID(dataID)));
	      });
	      var trackedField = fatField.clone(trackedChildren);
	      var mutationField = null;
	      if (trackedField) {
	        mutationField = __webpack_require__(71)(trackedField, fatField);
	        if (mutationField) {
	          mutatedFields.push(mutationField);
	        }
	      }
	      /* eslint-disable no-console */
	      if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	        console.groupCollapsed('Building fragment for `' + fieldName + '`');
	        console.log(__webpack_require__(8).ID + ': ', dataIDOrIDs);

	        var RelayMutationDebugPrinter = __webpack_require__(43);
	        RelayMutationDebugPrinter.printMutation(trackedField && buildMutationFragment(fatQuery, [trackedField]), 'Tracked Fragment');
	        RelayMutationDebugPrinter.printMutation(buildMutationFragment(fatQuery, [fatField]), 'Fat Fragment');
	        RelayMutationDebugPrinter.printMutation(mutationField && buildMutationFragment(fatQuery, [mutationField]), 'Intersected Fragment');
	        console.groupEnd();
	      }
	      /* eslint-enable no-console */
	    });
	    return buildMutationFragment(fatQuery, mutatedFields);
	  },


	  /**
	   * Creates a fragment used to update any data as a result of a mutation that
	   * deletes an edge from a connection. The primary difference between this and
	   * `createForFields` is whether or not the connection edges are re-fetched.
	   *
	   * `connectionName`
	   *   Name of the connection field from which the edge is being deleted.
	   *
	   * `parentID`
	   *   ID of the parent record containing the connection which may have metadata
	   *   that needs to be re-fetched.
	   *
	   * `parentName`
	   *   Name of the top-level field in the fat query that corresponds to the
	   *   parent record.
	   */
	  buildFragmentForEdgeDeletion: function buildFragmentForEdgeDeletion(_ref2) {
	    var fatQuery = _ref2.fatQuery,
	        connectionName = _ref2.connectionName,
	        parentID = _ref2.parentID,
	        parentName = _ref2.parentName,
	        tracker = _ref2.tracker;

	    var fatParent = getFieldFromFatQuery(fatQuery, parentName);

	    // The connection may not be explicit in the fat query, but if it is, we
	    // try to validate it.
	    getConnectionAndValidate(fatParent, parentName, connectionName);

	    var mutatedFields = [];
	    var trackedParent = fatParent.clone(tracker.getTrackedChildrenForID(parentID));
	    if (trackedParent) {
	      var filterUnterminatedRange = function filterUnterminatedRange(node) {
	        return node.getSchemaName() === connectionName;
	      };
	      var mutatedField = __webpack_require__(71)(trackedParent, fatParent, filterUnterminatedRange);
	      if (mutatedField) {
	        // If we skipped validation above, we get a second chance here.
	        getConnectionAndValidate(mutatedField, parentName, connectionName);

	        mutatedFields.push(mutatedField);
	      }
	    }
	    return buildMutationFragment(fatQuery, mutatedFields);
	  },


	  /**
	   * Creates a fragment used to fetch data necessary to insert a new edge into
	   * an existing connection.
	   *
	   * `connectionName`
	   *   Name of the connection field into which the edge is being inserted.
	   *
	   * `parentID`
	   *   ID of the parent record containing the connection which may have metadata
	   *   that needs to be re-fetched.
	   *
	   * `edgeName`
	   *   Name of the top-level field in the fat query that corresponds to the
	   *   newly inserted edge.
	   *
	   * `parentName`
	   *   Name of the top-level field in the fat query that corresponds to the
	   *   parent record. If not supplied, metadata on the parent record and any
	   *   connections without entries in `rangeBehaviors` will not be updated.
	   */
	  buildFragmentForEdgeInsertion: function buildFragmentForEdgeInsertion(_ref3) {
	    var fatQuery = _ref3.fatQuery,
	        connectionName = _ref3.connectionName,
	        parentID = _ref3.parentID,
	        edgeName = _ref3.edgeName,
	        parentName = _ref3.parentName,
	        rangeBehaviors = _ref3.rangeBehaviors,
	        tracker = _ref3.tracker;

	    var mutatedFields = [];
	    var keysWithoutRangeBehavior = {};
	    var trackedChildren = tracker.getTrackedChildrenForID(parentID);
	    var trackedConnections = [];
	    trackedChildren.forEach(function (trackedChild) {
	      trackedConnections.push.apply(trackedConnections, (0, _toConsumableArray3['default'])(findDescendantFields(trackedChild, connectionName)));
	    });

	    if (trackedConnections.length) {
	      // If the first instance of the connection passes validation, all will.
	      validateConnection(parentName, connectionName, trackedConnections[0]);

	      var mutatedEdgeFields = [];
	      trackedConnections.forEach(function (trackedConnection) {
	        var trackedEdges = findDescendantFields(trackedConnection, 'edges');
	        if (!trackedEdges.length) {
	          return;
	        }

	        var callsWithValues = trackedConnection.getRangeBehaviorCalls();
	        var rangeBehavior = __webpack_require__(92)(rangeBehaviors, callsWithValues);
	        /* eslint-disable no-console */
	        if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	          var serializeRelayQueryCall = __webpack_require__(36);
	          var serializedCalls = callsWithValues.map(serializeRelayQueryCall).sort().join('');
	          console.log(serializedCalls + ': ' + (rangeBehavior || ''));
	        }
	        /* eslint-enable no-console */
	        if (rangeBehavior && rangeBehavior !== REFETCH) {
	          // Include edges from all connections that exist in `rangeBehaviors`.
	          // This may add duplicates, but they will eventually be flattened.
	          trackedEdges.forEach(function (trackedEdge) {
	            mutatedEdgeFields.push.apply(mutatedEdgeFields, (0, _toConsumableArray3['default'])(trackedEdge.getChildren()));
	          });
	        } else {
	          // If the connection is not in `rangeBehaviors` or we have explicitly
	          // set the behavior to `refetch`, re-fetch it.
	          __webpack_require__(5)(rangeBehavior === REFETCH, 'RelayMutation: The connection `%s` on the mutation field `%s` ' + 'that corresponds to the ID `%s` did not match any of the ' + '`rangeBehaviors` specified in your RANGE_ADD config. This means ' + 'that the entire connection will be refetched. Configure a range ' + 'behavior for this mutation in order to fetch only the new edge ' + 'and to enable optimistic mutations or use `refetch` to squelch ' + 'this warning.', trackedConnection.getStorageKey(), parentName, parentID);
	          keysWithoutRangeBehavior[trackedConnection.getShallowHash()] = true;
	        }
	      });
	      if (mutatedEdgeFields.length) {
	        mutatedFields.push(buildEdgeField(parentID, edgeName, mutatedEdgeFields));
	      }
	    }

	    if (parentName != null) {
	      var fatParent = getFieldFromFatQuery(fatQuery, parentName);

	      // The connection may not be explicit in the fat query, but if it is, we
	      // try to validate it.
	      getConnectionAndValidate(fatParent, parentName, connectionName);

	      var trackedParent = fatParent.clone(trackedChildren);
	      if (trackedParent) {
	        var filterUnterminatedRange = function filterUnterminatedRange(node) {
	          return node.getSchemaName() === connectionName && !keysWithoutRangeBehavior.hasOwnProperty(node.getShallowHash());
	        };
	        var mutatedParent = __webpack_require__(71)(trackedParent, fatParent, filterUnterminatedRange);
	        if (mutatedParent) {
	          mutatedFields.push(mutatedParent);
	        }
	      }
	    }

	    return buildMutationFragment(fatQuery, mutatedFields);
	  },


	  /**
	   * Creates a fragment used to fetch the given optimistic response.
	   */
	  buildFragmentForOptimisticUpdate: function buildFragmentForOptimisticUpdate(_ref4) {
	    var response = _ref4.response,
	        fatQuery = _ref4.fatQuery;

	    // Silences RelayQueryNode being incompatible with sub-class RelayQueryField
	    // A detailed error description is available in #7635477
	    var mutatedFields = __webpack_require__(80).inferRelayFieldsFromData(response);
	    return buildMutationFragment(fatQuery, mutatedFields);
	  },


	  /**
	   * Creates a RelayQuery.Mutation used to fetch the given optimistic response.
	   */
	  buildQueryForOptimisticUpdate: function buildQueryForOptimisticUpdate(_ref5) {
	    var fatQuery = _ref5.fatQuery,
	        mutation = _ref5.mutation,
	        response = _ref5.response;

	    var children = [__webpack_require__(39)(RelayMutationQuery.buildFragmentForOptimisticUpdate({
	      response: response,
	      fatQuery: fatQuery
	    }))];
	    return __webpack_require__(2).Mutation.build('OptimisticQuery', fatQuery.getType(), mutation.calls[0].name, null, children, mutation.metadata);
	  },


	  /**
	   * Creates a RelayQuery.Mutation for the given config. See type
	   * `MutationConfig` and the `buildFragmentForEdgeInsertion`,
	   * `buildFragmentForEdgeDeletion` and `buildFragmentForFields` methods above
	   * for possible configs.
	   */
	  buildQuery: function buildQuery(_ref6) {
	    var configs = _ref6.configs,
	        fatQuery = _ref6.fatQuery,
	        input = _ref6.input,
	        mutationName = _ref6.mutationName,
	        mutation = _ref6.mutation,
	        tracker = _ref6.tracker;

	    var children = [__webpack_require__(2).Field.build({
	      fieldName: CLIENT_MUTATION_ID,
	      type: 'String',
	      metadata: { isRequisite: true }
	    })];
	    /* eslint-disable no-console */
	    if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	      console.groupCollapsed('Mutation Configs');
	    }
	    /* eslint-enable no-console */
	    configs.forEach(function (config) {
	      switch (config.type) {
	        case __webpack_require__(22).REQUIRED_CHILDREN:
	          var newChildren = config.children.map(function (child) {
	            return __webpack_require__(2).Fragment.create(child, __webpack_require__(12).get('$buildQuery'), {});
	          });
	          children = children.concat(newChildren);
	          /* eslint-disable no-console */
	          if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	            var RelayMutationDebugPrinter = __webpack_require__(43);
	            console.groupCollapsed('REQUIRED_CHILDREN');
	            newChildren.forEach(function (child, index) {
	              console.groupCollapsed(index);
	              RelayMutationDebugPrinter.printMutation(child);
	              console.groupEnd();
	            });
	            console.groupEnd();
	          }
	          /* eslint-enable no-console */
	          break;

	        case __webpack_require__(22).RANGE_ADD:
	          /* eslint-disable no-console */
	          if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	            console.groupCollapsed('RANGE_ADD');
	          }
	          /* eslint-enable no-console */
	          children.push(RelayMutationQuery.buildFragmentForEdgeInsertion({
	            connectionName: config.connectionName,
	            edgeName: config.edgeName,
	            fatQuery: fatQuery,
	            parentID: config.parentID,
	            parentName: config.parentName,
	            rangeBehaviors: sanitizeRangeBehaviors(config.rangeBehaviors),
	            tracker: tracker
	          }));
	          /* eslint-disable no-console */
	          if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	            console.groupEnd();
	          }
	          /* eslint-enable no-console */
	          break;

	        case __webpack_require__(22).RANGE_DELETE:
	        case __webpack_require__(22).NODE_DELETE:
	          var edgeDeletion = RelayMutationQuery.buildFragmentForEdgeDeletion({
	            connectionName: config.connectionName,
	            fatQuery: fatQuery,
	            parentID: config.parentID,
	            parentName: config.parentName,
	            tracker: tracker
	          });
	          children.push(edgeDeletion);
	          var deletedIDFieldName = Array.isArray(config.deletedIDFieldName) ? config.deletedIDFieldName.concat(ID) : [config.deletedIDFieldName];
	          var nodeDeletion = buildFragmentForDeletedConnectionNodeID(deletedIDFieldName, fatQuery);
	          children.push(nodeDeletion);
	          /* eslint-disable no-console */
	          if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	            var configType = config === __webpack_require__(22).RANGE_DELETE ? 'RANGE_DELETE' : 'NODE_DELETE';
	            console.groupCollapsed(configType);

	            var _RelayMutationDebugPrinter = __webpack_require__(43);
	            _RelayMutationDebugPrinter.printMutation(edgeDeletion, 'Edge Fragment');
	            _RelayMutationDebugPrinter.printMutation(nodeDeletion, 'Node Fragment');

	            console.groupEnd();
	          }
	          /* eslint-enable no-console */
	          break;

	        case __webpack_require__(22).FIELDS_CHANGE:
	          /* eslint-disable no-console */
	          if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	            console.groupCollapsed('FIELDS_CHANGE');
	          }
	          /* eslint-enable no-console */
	          children.push(RelayMutationQuery.buildFragmentForFields({
	            fatQuery: fatQuery,
	            fieldIDs: config.fieldIDs,
	            tracker: tracker
	          }));
	          /* eslint-disable no-console */
	          if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	            console.groupEnd();
	          }
	          /* eslint-enable no-console */
	          break;

	        default:
	          __webpack_require__(1)(false, 'RelayMutationQuery: Unrecognized config key `%s` for `%s`.', config.type, mutationName);
	      }
	    });
	    /* eslint-disable no-console */
	    if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	      console.groupEnd();
	    }
	    /* eslint-enable no-console */
	    return __webpack_require__(2).Mutation.build(mutationName, fatQuery.getType(), mutation.calls[0].name, input, children.filter(function (child) {
	      return child != null;
	    }), mutation.metadata);
	  }
	};

	function getFieldFromFatQuery(fatQuery, fieldName) {
	  var field = fatQuery.getFieldByStorageKey(fieldName);
	  __webpack_require__(1)(field, 'RelayMutationQuery: Invalid field name on fat query, `%s`.', fieldName);
	  return field;
	}

	function buildMutationFragment(fatQuery, fields) {
	  var fragment = __webpack_require__(2).Fragment.build('MutationQuery', fatQuery.getType(), fields);

	  __webpack_require__(1)(fragment instanceof __webpack_require__(2).Fragment, 'RelayMutationQuery: Expected a fragment.');
	  return fragment;
	}

	function buildFragmentForDeletedConnectionNodeID(fieldNames, fatQuery) {
	  __webpack_require__(1)(fieldNames.length > 0, 'RelayMutationQuery: Invalid deleted node id name.');
	  var field = __webpack_require__(2).Field.build({
	    fieldName: fieldNames[fieldNames.length - 1],
	    type: 'String'
	  });
	  for (var ii = fieldNames.length - 2; ii >= 0; ii--) {
	    field = __webpack_require__(2).Field.build({
	      fieldName: fieldNames[ii],
	      type: ANY_TYPE,
	      children: [field],
	      metadata: {
	        canHaveSubselections: true
	      }
	    });
	  }
	  return buildMutationFragment(fatQuery, [field]);
	}

	function buildEdgeField(parentID, edgeName, edgeFields) {
	  var fields = [__webpack_require__(2).Field.build({
	    fieldName: 'cursor',
	    type: 'String'
	  }), __webpack_require__(2).Field.build({
	    fieldName: TYPENAME,
	    type: 'String'
	  })];
	  if (__webpack_require__(6).EDGES_HAVE_SOURCE_FIELD && !__webpack_require__(3).isClientID(parentID)) {
	    fields.push(__webpack_require__(2).Field.build({
	      children: [__webpack_require__(2).Field.build({
	        fieldName: ID,
	        type: 'String'
	      }), __webpack_require__(2).Field.build({
	        fieldName: TYPENAME,
	        type: 'String'
	      })],
	      fieldName: 'source',
	      metadata: { canHaveSubselections: true },
	      type: ANY_TYPE
	    }));
	  }
	  fields.push.apply(fields, (0, _toConsumableArray3['default'])(edgeFields));
	  var edgeField = __webpack_require__(50)(__webpack_require__(2).Field.build({
	    children: fields,
	    fieldName: edgeName,
	    metadata: { canHaveSubselections: true },
	    type: ANY_TYPE
	  }));
	  __webpack_require__(1)(edgeField instanceof __webpack_require__(2).Field, 'RelayMutationQuery: Expected a field.');
	  return edgeField;
	}

	function sanitizeRangeBehaviors(rangeBehaviors) {
	  // Prior to 0.4.1 you would have to specify the args in your range behaviors
	  // in the same order they appeared in your query. From 0.4.1 onward, args in a
	  // range behavior key must be in alphabetical order.

	  // No need to sanitize if defined as a function
	  if (typeof rangeBehaviors === 'function') {
	    return rangeBehaviors;
	  }

	  var unsortedKeys = void 0;
	  __webpack_require__(11)(rangeBehaviors, function (value, key) {
	    if (key !== '') {
	      var keyParts = key
	      // Remove the last parenthesis
	      .slice(0, -1
	      // Slice on unescaped parentheses followed immediately by a `.`
	      ).split(/\)\./);
	      var sortedKey = keyParts.sort().join(').') + (keyParts.length ? ')' : '');
	      if (sortedKey !== key) {
	        unsortedKeys = unsortedKeys || [];
	        unsortedKeys.push(key);
	      }
	    }
	  });
	  if (unsortedKeys) {
	    __webpack_require__(1)(false, 'RelayMutation: To define a range behavior key without sorting ' + 'the arguments alphabetically is disallowed as of Relay 0.5.1. Please ' + 'sort the argument names of the range behavior key%s `%s`%s.', unsortedKeys.length === 1 ? '' : 's', unsortedKeys.length === 1 ? unsortedKeys[0] : unsortedKeys.length === 2 ? unsortedKeys[0] + '` and `' + unsortedKeys[1] : unsortedKeys.slice(0, -1).join('`, `'), unsortedKeys.length > 2 ? ', and `' + unsortedKeys.slice(-1) + '`' : '');
	  }
	  return rangeBehaviors;
	}

	/**
	 * Confirms that the `connection` field extracted from the fat query at
	 * `parentName` -> `connectionName` is actually a connection.
	 */
	function validateConnection(parentName, connectionName, connection) {
	  __webpack_require__(1)(connection.isConnection(), 'RelayMutationQuery: Expected field `%s`%s to be a connection.', connectionName, parentName ? ' on `' + parentName + '`' : '');
	}

	/**
	 * Convenience wrapper around validateConnection that gracefully attempts to
	 * extract the connection identified by `connectionName` from the `parentField`.
	 * If the connection isn't present (because it wasn't in the fat query or
	 * because it didn't survive query intersection), validation is skipped.
	 */
	function getConnectionAndValidate(parentField, parentName, connectionName) {
	  var connections = findDescendantFields(parentField, connectionName);
	  if (connections.length) {
	    // If the first instance of the connection passes validation, all will.
	    validateConnection(parentName, connectionName, connections[0]);
	  }
	}

	/**
	 * Finds all direct and indirect child fields of `node` with the given
	 * field name.
	 */
	function findDescendantFields(rootNode, fieldName) {
	  var fields = [];
	  function traverse(node) {
	    if (node instanceof __webpack_require__(2).Field) {
	      if (node.getSchemaName() === fieldName) {
	        fields.push(node);
	        return;
	      }
	    }
	    if (node === rootNode || node instanceof __webpack_require__(2).Fragment) {
	      // Search fragments and the root node for matching fields, but skip
	      // descendant non-matching fields.
	      node.getChildren().forEach(function (child) {
	        return traverse(child);
	      });
	    }
	  }
	  traverse(rootNode);
	  return fields;
	}

	module.exports = RelayMutationQuery;

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQueryCaching
	 * 
	 * @format
	 */

	'use strict';

	var queryCachingEnabled = true;

	/**
	 * Methods for configuring caching of Relay queries.
	 */
	var RelayQueryCaching = {
	  /**
	   * `disable` turns off caching of queries for `getRelayQueries` and
	   * `buildRQL`.
	   */
	  disable: function disable() {
	    queryCachingEnabled = false;
	  },


	  /**
	   * @internal
	   */
	  getEnabled: function getEnabled() {
	    return queryCachingEnabled;
	  }
	};

	module.exports = RelayQueryCaching;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQueryTransform
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * `RelayQueryTransform` is a `RelayQueryVisitor` subclass that simplifies the
	 * process of traversing, filtering, or transforming a Relay Query.
	 *
	 * The traversal is a map operation from `RelayQuery` nodes to nodes. The
	 * default implementation traverses all nodes and maps each one to its
	 * original value (ie. a no-op).
	 *
	 * Just like `RelayQueryVisitor`, subclasses of `RelayQueryTransform` can
	 * optionally implement methods to customize the traversal and mapping of
	 * different RelayQuery node types:
	 *
	 * - `visitField(field, state)`: Returns the new value for the visited field, or
	 *   `null` to remove it from the output.
	 * - `visitFragment(fragment, state)`: Returns the new value for the visited
	 *   fragment, or `null` to remove it from the output.
	 * - `visitQuery(fragment, state)`: Returns the new value for the top-level
	 *   query, or `null` to transform the entire query out of existence.
	 *
	 * There are two additional methods for controlling the traversal:
	 *
	 * - `traverse(parent, state)`: Returns a cloned copy of the parent node after
	 *   processing all of its children. Does not clone if nothing changed.
	 * - `visit(child, state)`: Processes the child node, calling the appropriate
	 *   `visit{Field,Fragment,Root` method based on the node type.
	 *
	 * All of these methods may return the original node in order to leave it
	 * intact.
	 *
	 * @see RelayQueryVisitor
	 */
	var RelayQueryTransform = function (_RelayQueryVisitor) {
	  (0, _inherits3['default'])(RelayQueryTransform, _RelayQueryVisitor);

	  function RelayQueryTransform() {
	    (0, _classCallCheck3['default'])(this, RelayQueryTransform);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQueryVisitor.apply(this, arguments));
	  }

	  RelayQueryTransform.prototype.traverse = function traverse(node, nextState) {
	    if (!node.canHaveSubselections()) {
	      return node;
	    }
	    var nextChildren = void 0;
	    this.traverseChildren(node, nextState, function (child, index, children) {
	      var prevChild = children[index];
	      var nextChild = this.visit(prevChild, nextState);
	      if (nextChild !== prevChild) {
	        nextChildren = nextChildren || children.slice(0, index);
	      }
	      if (nextChildren && nextChild) {
	        nextChildren.push(nextChild);
	      }
	    }, this);
	    if (nextChildren) {
	      if (!nextChildren.length) {
	        return null;
	      }
	      return node.clone(nextChildren);
	    }
	    return node;
	  };

	  return RelayQueryTransform;
	}(__webpack_require__(26));

	module.exports = RelayQueryTransform;

/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRecordStatusMap
	 * 
	 * @format
	 */

	'use strict';
	/**
	 * Record might contain data from optimistic update.
	 */

	var OPTIMISTIC_MASK = 0x01;
	/**
	 * The subtree of data from this record contains partial data.
	 */
	var PARTIAL_MASK = 0x04;

	function set(status, value, mask) {
	  status = status || 0;
	  if (value) {
	    return status | mask; // eslint-disable-line no-bitwise
	  } else {
	    return status & ~mask; // eslint-disable-line no-bitwise
	  }
	}

	function check(status, mask) {
	  return ((status || 0) & mask) !== 0; // eslint-disable-line no-bitwise
	}
	/**
	 * A set of functions for modifying `__status__` on records inside of
	 * RelayStore.
	 */
	var RelayRecordStatusMap = {
	  setOptimisticStatus: function setOptimisticStatus(status, value) {
	    return set(status, value, OPTIMISTIC_MASK);
	  },

	  isOptimisticStatus: function isOptimisticStatus(status) {
	    return check(status, OPTIMISTIC_MASK);
	  },

	  // Should only be used on records read out from RelayRecordStore
	  // by `readRelayQueryData`.
	  setPartialStatus: function setPartialStatus(status, value) {
	    return set(status, value, PARTIAL_MASK);
	  },

	  isPartialStatus: function isPartialStatus(status) {
	    return check(status, PARTIAL_MASK);
	  }
	};

	module.exports = RelayRecordStatusMap;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRecordStore
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var EMPTY = '';

	var NODE = __webpack_require__(6).NODE;

	var _RelayRecord$Metadata = __webpack_require__(3).MetadataKey,
	    FILTER_CALLS = _RelayRecord$Metadata.FILTER_CALLS,
	    FORCE_INDEX = _RelayRecord$Metadata.FORCE_INDEX,
	    MUTATION_IDS = _RelayRecord$Metadata.MUTATION_IDS,
	    PATH = _RelayRecord$Metadata.PATH,
	    RANGE = _RelayRecord$Metadata.RANGE,
	    RESOLVED_FRAGMENT_MAP = _RelayRecord$Metadata.RESOLVED_FRAGMENT_MAP;

	/**
	 * @internal
	 *
	 * `RelayRecordStore` is the central repository for all data fetched by the
	 * client. Data is stored as a map from IDs to Records. Records are shapes of
	 * data with globally unique "data IDs".
	 */


	var RelayRecordStore = function () {
	  function RelayRecordStore(records, rootCallMaps, nodeConnectionMap) {
	    (0, _classCallCheck3['default'])(this, RelayRecordStore);

	    this._cachedRecords = records.cachedRecords;
	    this._cachedRootCallMap = rootCallMaps && rootCallMaps.cachedRootCallMap || {};
	    this._queuedRecords = records.queuedRecords;
	    this._nodeConnectionMap = nodeConnectionMap || {};
	    this._records = records.records;
	    this._rootCallMap = rootCallMaps && rootCallMaps.rootCallMap || {};
	    this._storage = [];
	    if (this._queuedRecords) {
	      this._storage.push(this._queuedRecords);
	    }
	    if (this._records) {
	      this._storage.push(this._records);
	    }
	    if (this._cachedRecords) {
	      this._storage.push(this._cachedRecords);
	    }
	  }

	  /**
	   * Get the data ID associated with a storage key (and optionally an
	   * identifying argument value) for a root query.
	   */


	  RelayRecordStore.prototype.getDataID = function getDataID(storageKey, identifyingArgValue) {
	    if (__webpack_require__(8).isNodeRootCall(storageKey)) {
	      __webpack_require__(1)(identifyingArgValue != null, 'RelayRecordStore.getDataID(): Argument to `%s()` ' + 'cannot be null or undefined.', storageKey);
	      return identifyingArgValue;
	    }
	    if (identifyingArgValue == null) {
	      identifyingArgValue = EMPTY;
	    }
	    if (this._rootCallMap.hasOwnProperty(storageKey) && this._rootCallMap[storageKey].hasOwnProperty(identifyingArgValue)) {
	      return this._rootCallMap[storageKey][identifyingArgValue];
	    } else if (this._cachedRootCallMap.hasOwnProperty(storageKey)) {
	      return this._cachedRootCallMap[storageKey][identifyingArgValue];
	    }
	  };

	  /**
	   * Returns the status of the record stored at `dataID`.
	   */


	  RelayRecordStore.prototype.getRecordState = function getRecordState(dataID) {
	    var record = this._getRecord(dataID);
	    if (record === null) {
	      return __webpack_require__(16).NONEXISTENT;
	    } else if (record === undefined) {
	      return __webpack_require__(16).UNKNOWN;
	    }
	    return __webpack_require__(16).EXISTENT;
	  };

	  /**
	   * Returns the path to a non-refetchable record.
	   */


	  RelayRecordStore.prototype.getPathToRecord = function getPathToRecord(dataID) {
	    var path = this._getField(dataID, PATH);
	    return path;
	  };

	  /**
	   * Returns whether a given record is affected by an optimistic update.
	   */


	  RelayRecordStore.prototype.hasOptimisticUpdate = function hasOptimisticUpdate(dataID) {
	    var queuedRecords = this._queuedRecords;
	    return queuedRecords ? queuedRecords.hasOwnProperty(dataID) : false;
	  };

	  /**
	   * Returns a list of client mutation IDs for queued mutations whose optimistic
	   * updates are affecting the record corresponding the given dataID. Returns
	   * null if the record isn't affected by any optimistic updates.
	   */


	  RelayRecordStore.prototype.getClientMutationIDs = function getClientMutationIDs(dataID) {
	    var queuedRecords = this._queuedRecords;
	    if (queuedRecords) {
	      var record = queuedRecords[dataID];
	      if (record) {
	        return record[MUTATION_IDS];
	      }
	    }
	    return null;
	  };

	  /**
	   * Check whether a given record has received data for a deferred fragment.
	   */


	  RelayRecordStore.prototype.hasFragmentData = function hasFragmentData(dataID, fragmentID) {
	    var resolvedFragmentMap = this._getField(dataID, RESOLVED_FRAGMENT_MAP);
	    __webpack_require__(1)(typeof resolvedFragmentMap === 'object' || resolvedFragmentMap == null, 'RelayRecordStore.hasFragmentData(): Expected the map of ' + 'resolved deferred fragments associated with record `%s` to be null or ' + 'an object. Found a(n) `%s`.', dataID, typeof resolvedFragmentMap);
	    return !!(resolvedFragmentMap && resolvedFragmentMap[fragmentID]);
	  };

	  RelayRecordStore.prototype.getType = function getType(dataID) {
	    // `__typename` property is typed as `string`
	    return this._getField(dataID, '__typename');
	  };

	  /**
	   * Returns the value of the field for the given dataID.
	   */


	  RelayRecordStore.prototype.getField = function getField(dataID, storageKey) {
	    return this._getField(dataID, storageKey);
	  };

	  /**
	   * Returns the Data ID of a linked record (eg the ID of the `address` record
	   * in `actor{address}`).
	   */


	  RelayRecordStore.prototype.getLinkedRecordID = function getLinkedRecordID(dataID, storageKey) {
	    var field = this._getField(dataID, storageKey);
	    if (field == null) {
	      return field;
	    }
	    var record = __webpack_require__(3).getRecord(field);
	    __webpack_require__(1)(record, 'RelayRecordStore.getLinkedRecordID(): Expected field `%s` for record ' + '`%s` to have a linked record.', storageKey, dataID);
	    return __webpack_require__(3).getDataID(record);
	  };

	  /**
	   * Returns an array of Data ID for a plural linked field (eg the actor IDs of
	   * the `likers` in `story{likers}`).
	   */


	  RelayRecordStore.prototype.getLinkedRecordIDs = function getLinkedRecordIDs(dataID, storageKey) {
	    var field = this._getField(dataID, storageKey);
	    if (field == null) {
	      return field;
	    }
	    __webpack_require__(1)(Array.isArray(field), 'RelayRecordStore.getLinkedRecordIDs(): Expected field `%s` for ' + 'record `%s` to have an array of linked records.', storageKey, dataID);
	    return field.map(function (element, ii) {
	      var record = __webpack_require__(3).getRecord(element);
	      __webpack_require__(1)(record, 'RelayRecordStore.getLinkedRecordIDs(): Expected element at index %s ' + 'in field `%s` for record `%s` to be a linked record.', ii, storageKey, dataID);
	      return __webpack_require__(3).getDataID(record);
	    });
	  };

	  /**
	   * Gets the connectionIDs for all the connections that contain the given
	   * record as a `node`, or null if the record does not appear as a `node` in
	   * any connection.
	   */


	  RelayRecordStore.prototype.getConnectionIDsForRecord = function getConnectionIDsForRecord(dataID) {
	    var connectionIDs = this._nodeConnectionMap[dataID];
	    if (connectionIDs) {
	      return Object.keys(connectionIDs);
	    }
	    return null;
	  };

	  /**
	   * Gets the connectionIDs for all variations of calls for the given base
	   * schema name (Ex: `posts.orderby(recent)` and `posts.orderby(likes)`).
	   */


	  RelayRecordStore.prototype.getConnectionIDsForField = function getConnectionIDsForField(dataID, schemaName) {
	    // ignore queued records because not all range fields may be present there
	    var record = this._records[dataID];
	    if (record == null) {
	      return record;
	    }
	    var connectionIDs = void 0;
	    __webpack_require__(11)(record, function (datum, key) {
	      if (datum && getFieldNameFromKey(key) === schemaName) {
	        var connectionID = __webpack_require__(3).getDataIDForObject(datum);
	        if (connectionID) {
	          connectionIDs = connectionIDs || [];
	          connectionIDs.push(connectionID);
	        }
	      }
	    });
	    return connectionIDs;
	  };

	  /**
	   * Get the force index associated with the range at `connectionID`.
	   */


	  RelayRecordStore.prototype.getRangeForceIndex = function getRangeForceIndex(connectionID) {
	    var forceIndex = this._getField(connectionID, FORCE_INDEX);
	    if (forceIndex === null) {
	      return -1;
	    }
	    return forceIndex || 0;
	  };

	  /**
	   * Get the condition calls that were used to fetch the given connection.
	   * Ex: for a field `photos.orderby(recent)`, this would be
	   * [{name: 'orderby', value: 'recent'}]
	   */


	  RelayRecordStore.prototype.getRangeFilterCalls = function getRangeFilterCalls(connectionID) {
	    return this._getField(connectionID, FILTER_CALLS);
	  };

	  /**
	   * Returns range information for the given connection field:
	   * - `filteredEdges`: any edges already fetched for the given `calls`.
	   * - `diffCalls`: an array of calls describing the difference
	   *   between the given `calls` and already fetched data. Includes conditional
	   *   calls (`orderby`) and range/offset calls (`first`, `after`).
	   * - `filterCalls`: the subset of `calls` that are condition calls
	   *   (`orderby`).
	   */


	  RelayRecordStore.prototype.getRangeMetadata = function getRangeMetadata(connectionID, calls) {
	    var _this = this;

	    if (connectionID == null) {
	      return connectionID;
	    }
	    var range = this._getField(connectionID, RANGE);
	    if (range == null) {
	      if (range === null) {
	        __webpack_require__(5)(false, 'RelayRecordStore.getRangeMetadata(): Expected range to exist if ' + '`edges` has been fetched.');
	      }
	      return undefined;
	    }
	    var filterCalls = getFilterCalls(calls);
	    // Edges can only be fetched if a range call (first/last/find) is given.
	    // Otherwise return diffCalls/filterCalls with empty edges.
	    if (calls.length === filterCalls.length) {
	      return {
	        diffCalls: calls,
	        filterCalls: filterCalls,
	        pageInfo: undefined,
	        requestedEdgeIDs: [],
	        filteredEdges: []
	      };
	    }
	    var queuedRecord = this._queuedRecords ? this._queuedRecords[connectionID] : null;
	    var rangeInfo = range.retrieveRangeInfoForQuery(calls, queuedRecord);
	    var diffCalls = rangeInfo.diffCalls;
	    var pageInfo = rangeInfo.pageInfo,
	        requestedEdgeIDs = rangeInfo.requestedEdgeIDs;

	    if (diffCalls && diffCalls.length) {
	      diffCalls = filterCalls.concat(diffCalls);
	    } else {
	      diffCalls = [];
	    }
	    var filteredEdges = void 0;
	    if (requestedEdgeIDs) {
	      filteredEdges = requestedEdgeIDs.map(function (edgeID) {
	        return {
	          edgeID: edgeID,
	          nodeID: _this.getLinkedRecordID(edgeID, NODE)
	        };
	      }).filter(function (edge) {
	        return _this._getRecord(edge.nodeID);
	      });
	    } else {
	      filteredEdges = [];
	    }
	    return {
	      diffCalls: diffCalls,
	      filterCalls: filterCalls,
	      pageInfo: pageInfo,
	      requestedEdgeIDs: requestedEdgeIDs,
	      filteredEdges: filteredEdges
	    };
	  };

	  /**
	   * Returns whether there is a range at `connectionID`.
	   */


	  RelayRecordStore.prototype.hasRange = function hasRange(connectionID) {
	    return !!this._getField(connectionID, RANGE);
	  };

	  /**
	   * Completely removes the record identified by `dataID` from the store.
	   * This is only used by garbage collection.
	   */


	  RelayRecordStore.prototype.removeRecord = function removeRecord(dataID) {
	    delete this._records[dataID];
	    if (this._queuedRecords) {
	      delete this._queuedRecords[dataID];
	    }
	    if (this._cachedRecords) {
	      delete this._cachedRecords[dataID];
	    }
	    delete this._nodeConnectionMap[dataID];
	  };

	  /**
	   * Gets the first version of the record from the available caches.
	   */


	  RelayRecordStore.prototype._getRecord = function _getRecord(dataID) {
	    if (this._queuedRecords && this._queuedRecords.hasOwnProperty(dataID)) {
	      return this._queuedRecords[dataID];
	    } else if (this._records.hasOwnProperty(dataID)) {
	      return this._records[dataID];
	    } else if (this._cachedRecords) {
	      return this._cachedRecords[dataID];
	    }
	  };

	  /**
	   * Get the value of the field from the first version of the record for which
	   * the field is defined, returning `null` if the record has been deleted or
	   * `undefined` if the record has not been fetched.
	   */


	  RelayRecordStore.prototype._getField = function _getField(dataID, storageKey) {
	    var storage = this._storage;
	    for (var ii = 0; ii < storage.length; ii++) {
	      var record = storage[ii][dataID];
	      if (record === null) {
	        return null;
	      } else if (record && record.hasOwnProperty(storageKey)) {
	        return record[storageKey];
	      }
	    }
	    return undefined;
	  };

	  return RelayRecordStore;
	}();

	/**
	 * Filter calls to only those that specify conditions on the returned results
	 * (ex: `orderby(TOP_STORIES)`), removing generic calls (ex: `first`, `find`).
	 */


	function getFilterCalls(calls) {
	  return calls.filter(function (call) {
	    return !__webpack_require__(6).isConnectionCall(call);
	  });
	}

	/**
	 * Returns the field name based on the object key used to store the data in
	 * nodeData. It returns the field name without any calls. For example, the
	 * field name for 'profile_picture{size:"50"}' will be 'profile_picture'
	 */
	function getFieldNameFromKey(key) {
	  // This is based on the GraphQL spec for what constitutes a valid field name.
	  return key.split(/(?![_A-Za-z][_0-9A-Za-z]*)/, 1)[0];
	}

	module.exports = RelayRecordStore;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRecordWriter
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var EMPTY = '';

	var APPEND = __webpack_require__(18).APPEND,
	    PREPEND = __webpack_require__(18).PREPEND,
	    REMOVE = __webpack_require__(18).REMOVE;

	var CURSOR = __webpack_require__(6).CURSOR,
	    NODE = __webpack_require__(6).NODE;

	var _RelayRecord$Metadata = __webpack_require__(3).MetadataKey,
	    FILTER_CALLS = _RelayRecord$Metadata.FILTER_CALLS,
	    FORCE_INDEX = _RelayRecord$Metadata.FORCE_INDEX,
	    MUTATION_IDS = _RelayRecord$Metadata.MUTATION_IDS,
	    PATH = _RelayRecord$Metadata.PATH,
	    RANGE = _RelayRecord$Metadata.RANGE,
	    RESOLVED_FRAGMENT_MAP = _RelayRecord$Metadata.RESOLVED_FRAGMENT_MAP,
	    RESOLVED_FRAGMENT_MAP_GENERATION = _RelayRecord$Metadata.RESOLVED_FRAGMENT_MAP_GENERATION,
	    STATUS = _RelayRecord$Metadata.STATUS;

	/**
	 * @internal
	 *
	 * `RelayRecordWriter` is the helper module to write data into RelayRecordStore.
	 */
	var RelayRecordWriter = function () {
	  function RelayRecordWriter(records, rootCallMap, isOptimistic, nodeConnectionMap, cacheWriter, clientMutationID) {
	    (0, _classCallCheck3['default'])(this, RelayRecordWriter);

	    this._cacheWriter = cacheWriter;
	    this._clientMutationID = clientMutationID;
	    this._isOptimisticWrite = isOptimistic;
	    this._nodeConnectionMap = nodeConnectionMap || {};
	    this._records = records;
	    this._rootCallMap = rootCallMap;
	  }

	  /**
	   * Get the data ID associated with a storage key (and optionally an
	   * identifying argument value) for a root query.
	   */


	  RelayRecordWriter.prototype.getDataID = function getDataID(storageKey, identifyingArgValue) {
	    if (__webpack_require__(8).isNodeRootCall(storageKey)) {
	      __webpack_require__(1)(identifyingArgValue != null, 'RelayRecordWriter.getDataID(): Argument to `%s()` ' + 'cannot be null or undefined.', storageKey);
	      return identifyingArgValue;
	    }
	    if (identifyingArgValue == null) {
	      identifyingArgValue = EMPTY;
	    }
	    if (this._rootCallMap.hasOwnProperty(storageKey) && this._rootCallMap[storageKey].hasOwnProperty(identifyingArgValue)) {
	      return this._rootCallMap[storageKey][identifyingArgValue];
	    }
	  };

	  /**
	   * Associate a data ID with a storage key (and optionally an identifying
	   * argument value) for a root query.
	   */


	  RelayRecordWriter.prototype.putDataID = function putDataID(storageKey, identifyingArgValue, dataID) {
	    if (__webpack_require__(8).isNodeRootCall(storageKey)) {
	      __webpack_require__(1)(identifyingArgValue != null, 'RelayRecordWriter.putDataID(): Argument to `%s()` ' + 'cannot be null or undefined.', storageKey);
	      return;
	    }
	    if (identifyingArgValue == null) {
	      identifyingArgValue = EMPTY;
	    }
	    this._rootCallMap[storageKey] = this._rootCallMap[storageKey] || {};
	    this._rootCallMap[storageKey][identifyingArgValue] = dataID;
	    if (this._cacheWriter) {
	      this._cacheWriter.writeRootCall(storageKey, identifyingArgValue, dataID);
	    }
	  };

	  /**
	   * Returns the status of the record stored at `dataID`.
	   */


	  RelayRecordWriter.prototype.getRecordState = function getRecordState(dataID) {
	    var record = this._records[dataID];
	    if (record === null) {
	      return 'NONEXISTENT';
	    } else if (record === undefined) {
	      return 'UNKNOWN';
	    }
	    return 'EXISTENT';
	  };

	  /**
	   * Create an empty record at `dataID` if a record does not already exist.
	   */


	  RelayRecordWriter.prototype.putRecord = function putRecord(dataID, typeName, path) {
	    var prevRecord = this._getRecordForWrite(dataID);
	    if (prevRecord) {
	      return;
	    }
	    var nextRecord = __webpack_require__(3).createWithFields(dataID, {
	      __typename: typeName
	    });
	    if (this._isOptimisticWrite) {
	      this._setClientMutationID(nextRecord);
	    }
	    if (__webpack_require__(3).isClientID(dataID) && path) {
	      nextRecord[PATH] = path;
	    }
	    this._records[dataID] = nextRecord;
	    var cacheWriter = this._cacheWriter;
	    if (!this._isOptimisticWrite && cacheWriter) {
	      cacheWriter.writeField(dataID, '__dataID__', dataID, typeName);
	    }
	  };

	  /**
	   * Returns the path to a non-refetchable record.
	   */


	  RelayRecordWriter.prototype.getPathToRecord = function getPathToRecord(dataID) {
	    return this._getField(dataID, PATH);
	  };

	  /**
	   * Check whether a given record has received data for a deferred fragment.
	   */


	  RelayRecordWriter.prototype.hasFragmentData = function hasFragmentData(dataID, fragmentID) {
	    var resolvedFragmentMap = this._getField(dataID, RESOLVED_FRAGMENT_MAP);
	    __webpack_require__(1)(typeof resolvedFragmentMap === 'object' || resolvedFragmentMap == null, 'RelayRecordWriter.hasFragmentData(): Expected the map of ' + 'resolved deferred fragments associated with record `%s` to be null or ' + 'an object. Found a(n) `%s`.', dataID, typeof resolvedFragmentMap);
	    return !!(resolvedFragmentMap && resolvedFragmentMap[fragmentID]);
	  };

	  /**
	   * Mark a given record as having received data for a deferred fragment.
	   */


	  RelayRecordWriter.prototype.setHasDeferredFragmentData = function setHasDeferredFragmentData(dataID, fragmentID) {
	    this._setHasFragmentData(dataID, fragmentID, true);
	  };

	  /**
	   * Mark a given record as having received data for a fragment.
	   */


	  RelayRecordWriter.prototype.setHasFragmentData = function setHasFragmentData(dataID, fragmentID) {
	    this._setHasFragmentData(dataID, fragmentID, false);
	  };

	  RelayRecordWriter.prototype._setHasFragmentData = function _setHasFragmentData(dataID, fragmentID, updateFragmentGeneration) {
	    var record = this._getRecordForWrite(dataID);
	    __webpack_require__(1)(record, 'RelayRecordWriter.setHasFragmentData(): Expected record `%s` ' + 'to exist before marking it as having received data for the deferred ' + 'fragment with id `%s`.', dataID, fragmentID);
	    var resolvedFragmentMap = record[RESOLVED_FRAGMENT_MAP];
	    if (typeof resolvedFragmentMap !== 'object' || !resolvedFragmentMap) {
	      resolvedFragmentMap = {};
	    }
	    resolvedFragmentMap[fragmentID] = true;
	    record[RESOLVED_FRAGMENT_MAP] = resolvedFragmentMap;
	    if (updateFragmentGeneration) {
	      if (typeof record[RESOLVED_FRAGMENT_MAP_GENERATION] === 'number') {
	        record[RESOLVED_FRAGMENT_MAP_GENERATION]++;
	      } else {
	        record[RESOLVED_FRAGMENT_MAP_GENERATION] = 0;
	      }
	    }
	  };

	  /**
	   * Delete the record at `dataID`, setting its value to `null`.
	   */


	  RelayRecordWriter.prototype.deleteRecord = function deleteRecord(dataID) {
	    this._records[dataID] = null;

	    // Remove any links for this record
	    if (!this._isOptimisticWrite) {
	      delete this._nodeConnectionMap[dataID];
	      if (this._cacheWriter) {
	        this._cacheWriter.writeNode(dataID, null);
	      }
	    }
	  };

	  RelayRecordWriter.prototype.getType = function getType(dataID) {
	    // `__typename` property is typed as `string`
	    return this._getField(dataID, '__typename');
	  };

	  /**
	   * Returns the value of the field for the given dataID.
	   */


	  RelayRecordWriter.prototype.getField = function getField(dataID, storageKey) {
	    return this._getField(dataID, storageKey);
	  };

	  /**
	   * Sets the value of a scalar field.
	   */


	  RelayRecordWriter.prototype.putField = function putField(dataID, storageKey, value) {
	    var record = this._getRecordForWrite(dataID);
	    __webpack_require__(1)(record, 'RelayRecordWriter.putField(): Expected record `%s` to exist before ' + 'writing field `%s`.', dataID, storageKey);
	    record[storageKey] = value;
	    if (!this._isOptimisticWrite && this._cacheWriter) {
	      var typeName = record.__typename;
	      this._cacheWriter.writeField(dataID, storageKey, value, typeName);
	    }
	  };

	  /**
	   * Clears the value of a field by setting it to null/undefined.
	   */


	  RelayRecordWriter.prototype.deleteField = function deleteField(dataID, storageKey) {
	    var record = this._getRecordForWrite(dataID);
	    __webpack_require__(1)(record, 'RelayRecordWriter.deleteField(): Expected record `%s` to exist before ' + 'deleting field `%s`.', dataID, storageKey);
	    record[storageKey] = null;
	    if (!this._isOptimisticWrite && this._cacheWriter) {
	      this._cacheWriter.writeField(dataID, storageKey, null);
	    }
	  };

	  /**
	   * Returns the Data ID of a linked record (eg the ID of the `address` record
	   * in `actor{address}`).
	   */


	  RelayRecordWriter.prototype.getLinkedRecordID = function getLinkedRecordID(dataID, storageKey) {
	    var field = this._getField(dataID, storageKey);
	    if (field == null) {
	      return field;
	    }
	    var record = __webpack_require__(3).getRecord(field);
	    __webpack_require__(1)(record, 'RelayRecordWriter.getLinkedRecordID(): Expected field `%s` for record ' + '`%s` to have a linked record.', storageKey, dataID);
	    return __webpack_require__(3).getDataID(record);
	  };

	  /**
	   * Creates/updates a link between two records via the given field.
	   */


	  RelayRecordWriter.prototype.putLinkedRecordID = function putLinkedRecordID(parentID, storageKey, recordID) {
	    var parent = this._getRecordForWrite(parentID);
	    __webpack_require__(1)(parent, 'RelayRecordWriter.putLinkedRecordID(): Expected record `%s` to exist ' + 'before linking to record `%s`.', parentID, recordID);
	    var fieldValue = __webpack_require__(3).create(recordID);
	    parent[storageKey] = fieldValue;
	    if (!this._isOptimisticWrite && this._cacheWriter) {
	      this._cacheWriter.writeField(parentID, storageKey, fieldValue);
	    }
	  };

	  /**
	   * Returns an array of Data ID for a plural linked field (eg the actor IDs of
	   * the `likers` in `story{likers}`).
	   */


	  RelayRecordWriter.prototype.getLinkedRecordIDs = function getLinkedRecordIDs(dataID, storageKey) {
	    var field = this._getField(dataID, storageKey);
	    if (field == null) {
	      return field;
	    }
	    __webpack_require__(1)(Array.isArray(field), 'RelayRecordWriter.getLinkedRecordIDs(): Expected field `%s` for ' + 'record `%s` to have an array of linked records.', storageKey, dataID);
	    return field.map(function (element, ii) {
	      var record = __webpack_require__(3).getRecord(element);
	      __webpack_require__(1)(record, 'RelayRecordWriter.getLinkedRecordIDs(): Expected element at index ' + '%s in field `%s` for record `%s` to be a linked record.', ii, storageKey, dataID);
	      return __webpack_require__(3).getDataID(record);
	    });
	  };

	  /**
	   * Creates/updates a one-to-many link between records via the given field.
	   */


	  RelayRecordWriter.prototype.putLinkedRecordIDs = function putLinkedRecordIDs(parentID, storageKey, recordIDs) {
	    var parent = this._getRecordForWrite(parentID);
	    __webpack_require__(1)(parent, 'RelayRecordWriter.putLinkedRecordIDs(): Expected record `%s` to exist ' + 'before linking records.', parentID);
	    var records = recordIDs.map(function (recordID) {
	      return __webpack_require__(3).create(recordID);
	    });
	    parent[storageKey] = records;
	    if (!this._isOptimisticWrite && this._cacheWriter) {
	      this._cacheWriter.writeField(parentID, storageKey, records);
	    }
	  };

	  /**
	   * Get the force index associated with the range at `connectionID`.
	   */


	  RelayRecordWriter.prototype.getRangeForceIndex = function getRangeForceIndex(connectionID) {
	    var forceIndex = this._getField(connectionID, FORCE_INDEX);
	    if (forceIndex === null) {
	      return -1;
	    }
	    return forceIndex || 0;
	  };

	  /**
	   * Get the condition calls that were used to fetch the given connection.
	   * Ex: for a field `photos.orderby(recent)`, this would be
	   * [{name: 'orderby', value: 'recent'}]
	   */


	  RelayRecordWriter.prototype.getRangeFilterCalls = function getRangeFilterCalls(connectionID) {
	    return this._getField(connectionID, FILTER_CALLS);
	  };

	  /**
	   * Creates a range at `dataID` with an optional `forceIndex`.
	   */


	  RelayRecordWriter.prototype.putRange = function putRange(connectionID, calls, forceIndex) {
	    __webpack_require__(1)(!this._isOptimisticWrite, 'RelayRecordWriter.putRange(): Cannot create a queued range.');
	    var record = this._getRecordForWrite(connectionID);
	    __webpack_require__(1)(record, 'RelayRecordWriter.putRange(): Expected record `%s` to exist before ' + 'adding a range.', connectionID);
	    var range = new (__webpack_require__(57))();
	    var filterCalls = getFilterCalls(calls);
	    forceIndex = forceIndex || 0;
	    record[FILTER_CALLS] = filterCalls;
	    record[FORCE_INDEX] = forceIndex;
	    record[RANGE] = range;

	    var cacheWriter = this._cacheWriter;
	    if (!this._isOptimisticWrite && cacheWriter) {
	      cacheWriter.writeField(connectionID, FILTER_CALLS, filterCalls);
	      cacheWriter.writeField(connectionID, FORCE_INDEX, forceIndex);
	      cacheWriter.writeField(connectionID, RANGE, range);
	    }
	  };

	  /**
	   * Returns whether there is a range at `connectionID`.
	   */


	  RelayRecordWriter.prototype.hasRange = function hasRange(connectionID) {
	    return !!this._getField(connectionID, RANGE);
	  };

	  /**
	   * Adds newly fetched edges to a range.
	   */


	  RelayRecordWriter.prototype.putRangeEdges = function putRangeEdges(connectionID, calls, pageInfo, edges) {
	    var _this = this;

	    var range = this._getField(connectionID, RANGE);
	    __webpack_require__(1)(range, 'RelayRecordWriter.putRangeEdges(): Expected record `%s` to exist and ' + 'have a range.', connectionID);
	    var edgeRecords = [];
	    edges.forEach(function (edgeID) {
	      var edgeRecord = _this._getRangeEdgeRecord(edgeID);
	      edgeRecords.push(edgeRecord);
	      var nodeID = __webpack_require__(3).getDataID(edgeRecord.node);
	      _this._addConnectionForNode(connectionID, nodeID);
	    });
	    range.addItems(calls, edgeRecords, pageInfo);
	    if (!this._isOptimisticWrite && this._cacheWriter) {
	      this._cacheWriter.writeField(connectionID, RANGE, range);
	    }
	  };

	  /**
	   * Prepend, append, or delete edges to/from a range.
	   */


	  RelayRecordWriter.prototype.applyRangeUpdate = function applyRangeUpdate(connectionID, edgeID, operation) {
	    if (this._isOptimisticWrite) {
	      this._applyOptimisticRangeUpdate(connectionID, edgeID, operation);
	    } else {
	      this._applyServerRangeUpdate(connectionID, edgeID, operation);
	    }
	  };

	  /**
	   * Get edge data in a format compatibile with `GraphQLRange`.
	   * TODO: change `GraphQLRange` to accept `(edgeID, cursor, nodeID)` tuple
	   */


	  RelayRecordWriter.prototype._getRangeEdgeRecord = function _getRangeEdgeRecord(edgeID) {
	    var nodeID = this.getLinkedRecordID(edgeID, NODE);
	    __webpack_require__(1)(nodeID, 'RelayRecordWriter: Expected edge `%s` to have a `node` record.', edgeID);
	    return __webpack_require__(3).createWithFields(edgeID, {
	      cursor: this.getField(edgeID, CURSOR),
	      node: __webpack_require__(3).create(nodeID)
	    });
	  };

	  RelayRecordWriter.prototype._applyOptimisticRangeUpdate = function _applyOptimisticRangeUpdate(connectionID, edgeID, operation) {
	    var record = this._getRecordForWrite(connectionID);
	    if (!record) {
	      record = __webpack_require__(3).create(connectionID);
	      this._records[connectionID] = record;
	    }
	    this._setClientMutationID(record);
	    var key = __webpack_require__(53)[operation];
	    var queue = record[key];
	    if (!queue) {
	      queue = [];
	      record[key] = queue;
	    }
	    if (operation === PREPEND) {
	      queue.unshift(edgeID);
	    } else {
	      queue.push(edgeID);
	    }
	  };

	  RelayRecordWriter.prototype._applyServerRangeUpdate = function _applyServerRangeUpdate(connectionID, edgeID, operation) {
	    var range = this._getField(connectionID, RANGE);
	    __webpack_require__(1)(range, 'RelayRecordWriter: Cannot apply `%s` update to non-existent record ' + '`%s`.', operation, connectionID);
	    if (operation === REMOVE) {
	      range.removeEdgeWithID(edgeID);
	      var nodeID = this.getLinkedRecordID(edgeID, 'node');
	      if (nodeID) {
	        this._removeConnectionForNode(connectionID, nodeID);
	      }
	    } else {
	      var edgeRecord = this._getRangeEdgeRecord(edgeID);
	      var _nodeID = __webpack_require__(3).getDataID(edgeRecord.node);
	      this._addConnectionForNode(connectionID, _nodeID);
	      if (operation === APPEND) {
	        range.appendEdge(this._getRangeEdgeRecord(edgeID));
	      } else {
	        range.prependEdge(this._getRangeEdgeRecord(edgeID));
	      }
	    }
	    if (this._cacheWriter) {
	      this._cacheWriter.writeField(connectionID, RANGE, range);
	    }
	  };

	  /**
	   * Record that the node is contained in the connection.
	   */


	  RelayRecordWriter.prototype._addConnectionForNode = function _addConnectionForNode(connectionID, nodeID) {
	    var connectionMap = this._nodeConnectionMap[nodeID];
	    if (!connectionMap) {
	      connectionMap = {};
	      this._nodeConnectionMap[nodeID] = connectionMap;
	    }
	    connectionMap[connectionID] = true;
	  };

	  /**
	   * Record that the given node is no longer part of the connection.
	   */


	  RelayRecordWriter.prototype._removeConnectionForNode = function _removeConnectionForNode(connectionID, nodeID) {
	    var connectionMap = this._nodeConnectionMap[nodeID];
	    if (connectionMap) {
	      delete connectionMap[connectionID];
	      if (Object.keys(connectionMap).length === 0) {
	        delete this._nodeConnectionMap[nodeID];
	      }
	    }
	  };

	  /**
	   * If the record is in the store, gets a version of the record
	   * in the store being used for writes.
	   */


	  RelayRecordWriter.prototype._getRecordForWrite = function _getRecordForWrite(dataID) {
	    var record = this._records[dataID];
	    if (!record) {
	      return record;
	    }
	    if (this._isOptimisticWrite) {
	      this._setClientMutationID(record);
	    }
	    return record;
	  };

	  /**
	   * Get the value of the field from the first version of the record for which
	   * the field is defined, returning `null` if the record has been deleted or
	   * `undefined` if the record has not been fetched.
	   */


	  RelayRecordWriter.prototype._getField = function _getField(dataID, storageKey) {
	    var record = this._records[dataID];
	    if (record === null) {
	      return null;
	    } else if (record && record.hasOwnProperty(storageKey)) {
	      return record[storageKey];
	    } else {
	      return undefined;
	    }
	  };

	  /**
	   * Injects the client mutation id associated with the record store instance
	   * into the given record.
	   */


	  RelayRecordWriter.prototype._setClientMutationID = function _setClientMutationID(record) {
	    var clientMutationID = this._clientMutationID;
	    __webpack_require__(1)(clientMutationID, 'RelayRecordWriter: _clientMutationID cannot be null/undefined.');
	    var mutationIDs = record[MUTATION_IDS] || [];
	    if (mutationIDs.indexOf(clientMutationID) === -1) {
	      mutationIDs.push(clientMutationID);
	      record[MUTATION_IDS] = mutationIDs;
	    }
	    record[STATUS] = __webpack_require__(63).setOptimisticStatus(0, true);
	  };

	  return RelayRecordWriter;
	}();

	/**
	 * Filter calls to only those that specify conditions on the returned results
	 * (ex: `orderby(TOP_STORIES)`), removing generic calls (ex: `first`, `find`).
	 */


	function getFilterCalls(calls) {
	  return calls.filter(function (call) {
	    return !__webpack_require__(6).isConnectionCall(call);
	  });
	}

	module.exports = RelayRecordWriter;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule buildRQL
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(30));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// Cache results of executing fragment query builders.
	var fragmentCache = new (__webpack_require__(20))();

	// Cache results of executing component-specific route query builders.
	var queryCache = new (__webpack_require__(20))();

	function isDeprecatedCallWithArgCountGreaterThan(nodeBuilder, count) {
	  var argLength = nodeBuilder.length;
	  if (true) {
	    var mockImpl = nodeBuilder;
	    while (mockImpl && mockImpl._getMockImplementation) {
	      mockImpl = mockImpl._getMockImplementation();
	    }
	    if (mockImpl) {
	      argLength = mockImpl.length;
	    }
	  }
	  return argLength > count;
	}

	/**
	 * @internal
	 *
	 * Builds a static node representation using a supplied query or fragment
	 * builder. This is used for routes, containers, and mutations.
	 *
	 * If the supplied fragment builder produces an invalid node (e.g. the wrong
	 * node type), these will return `undefined`. This is not to be confused with
	 * a return value of `null`, which may result from the lack of a node.
	 */
	var buildRQL = {
	  Fragment: function Fragment(fragmentBuilder, values) {
	    var node = fragmentCache.get(fragmentBuilder);
	    if (node) {
	      return __webpack_require__(7).getFragment(node);
	    }
	    var variables = toVariables(values);
	    __webpack_require__(1)(!isDeprecatedCallWithArgCountGreaterThan(fragmentBuilder, 1), 'Relay.QL: Deprecated usage detected. If you are trying to define a ' + 'fragment, use `variables => Relay.QL`.');
	    node = fragmentBuilder(variables);
	    var fragment = node != null ? __webpack_require__(7).getFragment(node) : null;
	    if (!fragment) {
	      return fragment;
	    }
	    fragmentCache.set(fragmentBuilder, fragment);
	    return fragment;
	  },
	  Query: function Query(queryBuilder, Component, queryName, values) {
	    var queryCacheEnabled = __webpack_require__(61).getEnabled();
	    var node = void 0;
	    if (!queryCacheEnabled) {
	      node = buildNode(queryBuilder, Component, queryName, values);
	    } else {
	      var componentCache = queryCache.get(queryBuilder);
	      if (!componentCache) {
	        componentCache = new (__webpack_require__(20))();
	        queryCache.set(queryBuilder, componentCache);
	      } else {
	        node = componentCache.get(Component);
	      }
	      if (!node) {
	        node = buildNode(queryBuilder, Component, queryName, values);
	      }
	      componentCache.set(Component, node);
	    }
	    if (node) {
	      return __webpack_require__(7).getQuery(node) || undefined;
	    }
	    return null;
	  }
	};

	/**
	 * @internal
	 */
	function buildNode(queryBuilder, Component, queryName, values) {
	  var variables = toVariables(values);
	  __webpack_require__(1)(!isDeprecatedCallWithArgCountGreaterThan(queryBuilder, 2), 'Relay.QL: Deprecated usage detected. If you are trying to define a ' + 'query, use `(Component, variables) => Relay.QL`.');
	  var node = void 0;
	  if (isDeprecatedCallWithArgCountGreaterThan(queryBuilder, 0)) {
	    node = queryBuilder(Component, variables);
	  } else {
	    node = queryBuilder(Component, variables);
	    var query = __webpack_require__(7).getQuery(node);
	    if (query) {
	      var hasFragment = false;
	      var hasScalarFieldsOnly = true;
	      if (query.children) {
	        query.children.forEach(function (child) {
	          if (child) {
	            hasFragment = hasFragment || child.kind === 'Fragment';
	            hasScalarFieldsOnly = hasScalarFieldsOnly && child.kind === 'Field' && (!child.children || child.children.length === 0);
	          }
	        });
	      }
	      if (!hasFragment) {
	        var children = query.children ? [].concat((0, _toConsumableArray3['default'])(query.children)) : [];
	        __webpack_require__(1)(hasScalarFieldsOnly, 'Relay.QL: Expected query `%s` to be empty. For example, use ' + '`node(id: $id)`, not `node(id: $id) { ... }`.', query.fieldName);
	        var fragmentVariables = __webpack_require__(102)(variables, function (_, name) {
	          return Component.hasVariable(name);
	        });
	        children.push(Component.getFragment(queryName, fragmentVariables));
	        node = (0, _extends3['default'])({}, query, {
	          children: children
	        });
	      }
	    }
	  }
	  return node;
	}

	function toVariables(variables) {
	  return __webpack_require__(38)(variables, function (_, name) {
	    return __webpack_require__(7).createCallVariable(name);
	  });
	}

	__webpack_require__(10).instrumentMethods(buildRQL, {
	  Fragment: 'buildRQL.Fragment',
	  Query: 'buildRQL.Query'
	});

	module.exports = buildRQL;

/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule deepFreeze
	 * @format
	 */

	'use strict';

	/**
	 * Recursively "deep" freezes the supplied object.
	 *
	 * For convenience, and for consistency with the behavior of `Object.freeze`,
	 * returns the now-frozen original object.
	 */

	function deepFreeze(object) {
	  Object.freeze(object);
	  Object.getOwnPropertyNames(object).forEach(function (name) {
	    var property = object[name];
	    if (property && typeof property === 'object' && !Object.isFrozen(property)) {
	      deepFreeze(property);
	    }
	  });
	  return object;
	}

	module.exports = deepFreeze;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule generateConcreteFragmentID
	 * 
	 * @format
	 */

	'use strict';

	// Static ids always end with `:<HASH>` where HASH is an alphanumeric transform
	// of an auto-incrementing index. A double-colon is used to distinguish between
	// client ids and static ids that happen to hash to `:client`.
	var SUFFIX = '::client';

	var _nextFragmentID = 0;

	/**
	 * The "concrete fragment id" uniquely identifies a Relay.QL`fragment ...`
	 * within the source code of an application and will remain the same across
	 * runs of a particular version of an application.
	 *
	 * This function can be used to generate a unique id for fragments constructed
	 * at runtime and is guaranteed not to conflict with statically created ids.
	 */
	function generateConcreteFragmentID() {
	  return __webpack_require__(47)(_nextFragmentID++) + SUFFIX;
	}

	module.exports = generateConcreteFragmentID;

/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule generateForceIndex
	 * 
	 * @format
	 */

	'use strict';

	var _index = 1;

	/**
	 * Generate a new force index used to write GraphQL data in the store. A new
	 * force index can be used to overwrite previous ranges.
	 *
	 * @internal
	 */
	function generateForceIndex() {
	  return _index++;
	}

	module.exports = generateForceIndex;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getRelayQueries
	 * 
	 * @format
	 */

	'use strict';

	var queryCache = new (__webpack_require__(20))();

	/**
	 * @internal
	 *
	 * `getRelayQueries` retrieves all queries for a component given a route.
	 */
	function getRelayQueries(Component, route) {
	  var queryCachingEnabled = __webpack_require__(61).getEnabled();
	  if (!queryCachingEnabled) {
	    return buildQuerySet(Component, route);
	  }
	  var cache = queryCache.get(Component);
	  if (!cache) {
	    cache = {};
	    queryCache.set(Component, cache);
	  }
	  var cacheKey = route.name + ':' + __webpack_require__(29)(route.params);
	  if (cache.hasOwnProperty(cacheKey)) {
	    return cache[cacheKey];
	  }
	  var querySet = buildQuerySet(Component, route);
	  cache[cacheKey] = querySet;
	  return querySet;
	}

	/**
	 * @internal
	 */
	function buildQuerySet(Component, route) {
	  var querySet = {};
	  Component.getFragmentNames().forEach(function (fragmentName) {
	    querySet[fragmentName] = null;
	  });
	  Object.keys(route.queries).forEach(function (queryName) {
	    if (!Component.hasFragment(queryName)) {
	      __webpack_require__(5)(false, 'Relay.QL: query `%s.queries.%s` is invalid, expected fragment ' + '`%s.fragments.%s` to be defined.', route.name, queryName, Component.displayName, queryName);
	      return;
	    }
	    var queryBuilder = route.queries[queryName];
	    if (queryBuilder) {
	      var concreteQuery = __webpack_require__(66).Query(queryBuilder, Component, queryName, route.params);
	      __webpack_require__(1)(concreteQuery !== undefined, 'Relay.QL: query `%s.queries.%s` is invalid, a typical query is ' + 'defined using: () => Relay.QL`query { ... }`.', route.name, queryName);
	      if (concreteQuery) {
	        var rootQuery = __webpack_require__(2).Root.create(concreteQuery, __webpack_require__(12).get(route.name), route.params);
	        var identifyingArg = rootQuery.getIdentifyingArg();
	        if (!identifyingArg || identifyingArg.value !== undefined) {
	          querySet[queryName] = rootQuery;
	          return;
	        }
	      }
	    }
	    querySet[queryName] = null;
	  });
	  return querySet;
	}

	module.exports = __webpack_require__(10).instrument('Relay.getQueries', getRelayQueries);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule intersectRelayQuery
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * `intersectRelayQuery(subjectNode, patternNode)` returns a node with fields in
	 * `subjectNode` that also exist in `patternNode`. `patternNode` is expected to
	 * be flattened (and not contain fragments).
	 *
	 * If any field in `patternNode` is unterminated (i.e. has no sub-fields), we
	 * treat the field as though it contains every descendant sub-field.
	 *
	 * If `filterUnterminatedRange` is supplied, it will be invoked with any fields
	 * from `subjectNode` that are connections and unterminated in `patternNode`. If
	 * it returns true, the `edges` and `page_info` fields will be filtered out.
	 */
	function intersectRelayQuery(subjectNode, patternNode, filterUnterminatedRange) {
	  filterUnterminatedRange = filterUnterminatedRange || returnsFalse;
	  var visitor = new RelayQueryIntersector(filterUnterminatedRange);
	  return visitor.traverse(subjectNode, patternNode);
	}

	var RelayQueryIntersector = function (_RelayQueryTransform) {
	  (0, _inherits3['default'])(RelayQueryIntersector, _RelayQueryTransform);

	  function RelayQueryIntersector(filterUnterminatedRange) {
	    (0, _classCallCheck3['default'])(this, RelayQueryIntersector);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryTransform.call(this));

	    _this._filterUnterminatedRange = filterUnterminatedRange;
	    return _this;
	  }

	  RelayQueryIntersector.prototype.traverse = function traverse(subjectNode, patternNode) {
	    var _this2 = this;

	    if (!subjectNode.canHaveSubselections()) {
	      // Since `patternNode` exists, `subjectNode` must be in the intersection.
	      return subjectNode;
	    }
	    if (!hasChildren(patternNode)) {
	      if (subjectNode instanceof __webpack_require__(2).Field && subjectNode.isConnection() && this._filterUnterminatedRange(subjectNode)) {
	        return filterRangeFields(subjectNode);
	      }
	      // Unterminated `patternNode` is the same as containing every descendant
	      // sub-field, so `subjectNode` must be in the intersection.
	      return subjectNode;
	    }
	    return subjectNode.clone(subjectNode.getChildren().map(function (subjectChild) {
	      if (subjectChild instanceof __webpack_require__(2).Fragment) {
	        return _this2.visit(subjectChild, patternNode);
	      }
	      if (subjectChild instanceof __webpack_require__(2).Field) {
	        var schemaName = subjectChild.getSchemaName();
	        var patternChild = void 0;
	        var patternChildren = patternNode.getChildren();
	        for (var ii = 0; ii < patternChildren.length; ii++) {
	          var child = patternChildren[ii];
	          __webpack_require__(1)(child instanceof __webpack_require__(2).Field, 'intersectRelayQuery(): Nodes in `patternNode` must be fields.');
	          if (child.getSchemaName() === schemaName) {
	            patternChild = child;
	            break;
	          }
	        }
	        if (patternChild) {
	          return _this2.visit(subjectChild, patternChild);
	        }
	      }
	      return null;
	    }));
	  };

	  return RelayQueryIntersector;
	}(__webpack_require__(62));

	/**
	 * @private
	 */


	var RelayQueryRangeFilter = function (_RelayQueryTransform2) {
	  (0, _inherits3['default'])(RelayQueryRangeFilter, _RelayQueryTransform2);

	  function RelayQueryRangeFilter() {
	    (0, _classCallCheck3['default'])(this, RelayQueryRangeFilter);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQueryTransform2.apply(this, arguments));
	  }

	  RelayQueryRangeFilter.prototype.visitField = function visitField(node) {
	    var schemaName = node.getSchemaName();
	    if (schemaName === __webpack_require__(6).EDGES || schemaName === __webpack_require__(6).PAGE_INFO) {
	      return null;
	    } else {
	      return node;
	    }
	  };

	  return RelayQueryRangeFilter;
	}(__webpack_require__(62));

	var rangeFilter = new RelayQueryRangeFilter();
	function filterRangeFields(node) {
	  return rangeFilter.traverse(node, undefined);
	}

	function returnsFalse() {
	  return false;
	}

	function hasChildren(node) {
	  return !node.getChildren().every(isGenerated);
	}

	function isGenerated(node) {
	  return node.isGenerated();
	}

	module.exports = intersectRelayQuery;

/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isClassicRelayEnvironment
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Determine if a given value is an object that implements the `RelayEnvironment`
	 * interface.
	 */

	function isClassicRelayEnvironment(environment) {
	  return typeof environment === 'object' && environment !== null && typeof environment.applyMutation === 'function' && typeof environment.sendMutation === 'function' && typeof environment.forceFetch === 'function' && typeof environment.getFragmentResolver === 'function' && typeof environment.getStoreData === 'function' && typeof environment.primeCache === 'function';
	}

	module.exports = isClassicRelayEnvironment;

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule GraphQLStoreQueryResolver
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Resolves data from fragment pointers.
	 *
	 * The supplied `callback` will be invoked whenever data returned by the last
	 * invocation to `resolve` has changed.
	 */
	var GraphQLStoreQueryResolver = function () {
	  function GraphQLStoreQueryResolver(storeData, fragment, callback) {
	    (0, _classCallCheck3['default'])(this, GraphQLStoreQueryResolver);

	    this.dispose();
	    this._callback = callback;
	    this._fragment = fragment;
	    this._resolver = null;
	    this._storeData = storeData;
	  }

	  /**
	   * disposes the resolver's internal state such that future `resolve()` results
	   * will not be `===` to previous results, and unsubscribes any subscriptions.
	   */


	  GraphQLStoreQueryResolver.prototype.dispose = function dispose() {
	    if (this._resolver) {
	      this._resolver.dispose();
	    }
	  };

	  GraphQLStoreQueryResolver.prototype.resolve = function resolve(fragment, dataIDs) {
	    // Warn but don't crash if resolved with the wrong fragment.
	    if (this._fragment.getConcreteFragmentID() !== fragment.getConcreteFragmentID()) {
	      __webpack_require__(5)(false, 'GraphQLStoreQueryResolver: Expected `resolve` to be called with the ' + 'same concrete fragment as the constructor. The resolver was created ' + 'with fragment `%s` but resolved with fragment `%s`.', this._fragment.getDebugName(), fragment.getDebugName());
	    }
	    // Rather than crash on mismatched plurality of fragment/ids just warn
	    // and resolve as if the fragment's pluarity matched the format of the ids.
	    // Note that the inverse - attempt to resolve based on fragment plurarity -
	    // doesn't work because there's no way convert plural ids to singular w/o
	    // losing data.
	    if (Array.isArray(dataIDs)) {
	      // Fragment should be plural if data is pluaral.
	      __webpack_require__(5)(fragment.isPlural(), 'GraphQLStoreQueryResolver: Expected id/fragment plurality to be ' + 'consistent: got plural ids for singular fragment `%s`.', fragment.getDebugName());
	      var resolver = this._resolver;
	      if (resolver instanceof GraphQLStoreSingleQueryResolver) {
	        resolver.dispose();
	        resolver = null;
	      }
	      if (!resolver) {
	        resolver = new GraphQLStorePluralQueryResolver(this._storeData, this._callback);
	      }
	      this._resolver = resolver;
	      return resolver.resolve(fragment, dataIDs);
	    } else {
	      // Fragment should be singular if data is singular.
	      __webpack_require__(5)(!fragment.isPlural(), 'GraphQLStoreQueryResolver: Expected id/fragment plurality to be ' + 'consistent: got a singular id for plural fragment `%s`.', fragment.getDebugName());
	      var _resolver = this._resolver;
	      if (_resolver instanceof GraphQLStorePluralQueryResolver) {
	        _resolver.dispose();
	        _resolver = null;
	      }
	      if (!_resolver) {
	        _resolver = new GraphQLStoreSingleQueryResolver(this._storeData, this._callback);
	      }
	      this._resolver = _resolver;
	      return _resolver.resolve(fragment, dataIDs);
	    }
	  };

	  return GraphQLStoreQueryResolver;
	}();

	/**
	 * Resolves plural fragments.
	 */


	var GraphQLStorePluralQueryResolver = function () {
	  function GraphQLStorePluralQueryResolver(storeData, callback) {
	    (0, _classCallCheck3['default'])(this, GraphQLStorePluralQueryResolver);

	    this.dispose();
	    this._callback = callback;
	    this._storeData = storeData;
	  }

	  GraphQLStorePluralQueryResolver.prototype.dispose = function dispose() {
	    if (this._resolvers) {
	      this._resolvers.forEach(function (resolver) {
	        return resolver.dispose();
	      });
	    }
	    this._resolvers = [];
	    this._results = [];
	  };

	  /**
	   * Resolves a plural fragment pointer into an array of records.
	   *
	   * If the data, order, and number of resolved records has not changed since
	   * the last call to `resolve`, the same array will be returned. Otherwise, a
	   * new array will be returned.
	   */


	  GraphQLStorePluralQueryResolver.prototype.resolve = function resolve(fragment, nextIDs) {
	    var prevResults = this._results;
	    var nextResults = void 0;

	    var prevLength = prevResults.length;
	    var nextLength = nextIDs.length;
	    var resolvers = this._resolvers;

	    // Ensure that we have exactly `nextLength` resolvers.
	    while (resolvers.length < nextLength) {
	      resolvers.push(new GraphQLStoreSingleQueryResolver(this._storeData, this._callback));
	    }
	    while (resolvers.length > nextLength) {
	      resolvers.pop().dispose();
	    }

	    // Allocate `nextResults` if and only if results have changed.
	    if (prevLength !== nextLength) {
	      nextResults = [];
	    }
	    for (var ii = 0; ii < nextLength; ii++) {
	      var nextResult = resolvers[ii].resolve(fragment, nextIDs[ii]);
	      if (nextResults || ii >= prevLength || nextResult !== prevResults[ii]) {
	        nextResults = nextResults || prevResults.slice(0, ii);
	        nextResults.push(nextResult);
	      }
	    }

	    if (nextResults) {
	      this._results = nextResults;
	    }
	    return this._results;
	  };

	  return GraphQLStorePluralQueryResolver;
	}();

	/**
	 * Resolves non-plural fragments.
	 */


	var GraphQLStoreSingleQueryResolver = function () {
	  function GraphQLStoreSingleQueryResolver(storeData, callback) {
	    (0, _classCallCheck3['default'])(this, GraphQLStoreSingleQueryResolver);

	    this.dispose();
	    this._callback = callback;
	    this._garbageCollector = storeData.getGarbageCollector();
	    this._storeData = storeData;
	    this._subscribedIDs = {};
	  }

	  GraphQLStoreSingleQueryResolver.prototype.dispose = function dispose() {
	    if (this._subscription) {
	      this._subscription.remove();
	    }
	    this._hasDataChanged = false;
	    this._fragment = null;
	    this._result = null;
	    this._resultID = null;
	    this._subscription = null;
	    this._updateGarbageCollectorSubscriptionCount({});
	    this._subscribedIDs = {};
	  };

	  /**
	   * Resolves data for a single fragment pointer.
	   */


	  GraphQLStoreSingleQueryResolver.prototype.resolve = function resolve(nextFragment, nextID) {
	    var prevFragment = this._fragment;
	    var prevID = this._resultID;
	    var nextResult = void 0;
	    var prevResult = this._result;
	    var subscribedIDs = void 0;

	    if (prevFragment != null && prevID != null && this._getCanonicalID(prevID) === this._getCanonicalID(nextID)) {
	      if (prevID !== nextID || this._hasDataChanged || !nextFragment.isEquivalent(prevFragment)) {
	        var _resolveFragment2 = this._resolveFragment(nextFragment, nextID);
	        // same canonical ID,
	        // but the data, call(s), route, and/or variables have changed


	        nextResult = _resolveFragment2[0];
	        subscribedIDs = _resolveFragment2[1];

	        nextResult = __webpack_require__(98)(prevResult, nextResult);
	      } else {
	        // same id, route, variables, and data
	        nextResult = prevResult;
	      }
	    } else {
	      var _resolveFragment3 = this._resolveFragment(nextFragment, nextID);
	      // Pointer has a different ID or is/was fake data.


	      nextResult = _resolveFragment3[0];
	      subscribedIDs = _resolveFragment3[1];
	    }

	    // update subscriptions whenever results change
	    if (prevResult !== nextResult) {
	      if (this._subscription) {
	        this._subscription.remove();
	        this._subscription = null;
	      }
	      if (subscribedIDs) {
	        // always subscribe to the root ID
	        subscribedIDs[nextID] = true;
	        var changeEmitter = this._storeData.getChangeEmitter();
	        this._subscription = changeEmitter.addListenerForIDs(Object.keys(subscribedIDs), this._handleChange.bind(this));
	        this._updateGarbageCollectorSubscriptionCount(subscribedIDs);
	        this._subscribedIDs = subscribedIDs;
	      }
	      this._resultID = nextID;
	      this._result = nextResult;
	    }

	    this._hasDataChanged = false;
	    this._fragment = nextFragment;

	    return this._result;
	  };

	  /**
	   * Ranges publish events for the entire range, not the specific view of that
	   * range. For example, if "client:1" is a range, the event is on "client:1",
	   * not "client:1_first(5)".
	   */


	  GraphQLStoreSingleQueryResolver.prototype._getCanonicalID = function _getCanonicalID(id) {
	    return this._storeData.getRangeData().getCanonicalClientID(id);
	  };

	  GraphQLStoreSingleQueryResolver.prototype._handleChange = function _handleChange() {
	    if (!this._hasDataChanged) {
	      this._hasDataChanged = true;
	      this._callback();
	    }
	  };

	  GraphQLStoreSingleQueryResolver.prototype._resolveFragment = function _resolveFragment(fragment, dataID) {
	    var _readRelayQueryData = __webpack_require__(54)(this._storeData, fragment, dataID),
	        data = _readRelayQueryData.data,
	        dataIDs = _readRelayQueryData.dataIDs;

	    return [data, dataIDs];
	  };

	  /**
	   * Updates bookkeeping about the number of subscribers on each record.
	   */


	  GraphQLStoreSingleQueryResolver.prototype._updateGarbageCollectorSubscriptionCount = function _updateGarbageCollectorSubscriptionCount(nextDataIDs) {
	    if (this._garbageCollector) {
	      var garbageCollector = this._garbageCollector;
	      var rangeData = this._storeData.getRangeData();
	      var prevDataIDs = this._subscribedIDs;

	      // Note: the same canonical ID may appear in both removed and added: in
	      // that case, it would have been:
	      // - previous step: canonical ID ref count was incremented
	      // - current step: canonical ID is incremented *and* decremented
	      // Note that the net ref count change is +1.
	      Object.keys(nextDataIDs).forEach(function (id) {
	        id = rangeData.getCanonicalClientID(id);
	        garbageCollector.incrementReferenceCount(id);
	      });
	      Object.keys(prevDataIDs).forEach(function (id) {
	        id = rangeData.getCanonicalClientID(id);
	        garbageCollector.decrementReferenceCount(id);
	      });
	    }
	  };

	  return GraphQLStoreSingleQueryResolver;
	}();

	__webpack_require__(10).instrumentMethods(GraphQLStoreQueryResolver.prototype, {
	  resolve: 'GraphQLStoreQueryResolver.resolve'
	});

	module.exports = GraphQLStoreQueryResolver;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayDefaultNetworkLayer
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var RelayDefaultNetworkLayer = function () {
	  // InitWithRetries

	  function RelayDefaultNetworkLayer(uri, init) {
	    (0, _classCallCheck3['default'])(this, RelayDefaultNetworkLayer);

	    this._uri = uri;
	    this._init = (0, _extends3['default'])({}, init);

	    // Facilitate reuse when creating custom network layers.
	    this.sendMutation = this.sendMutation.bind(this);
	    this.sendQueries = this.sendQueries.bind(this);
	    this.supports = this.supports.bind(this);
	  }

	  RelayDefaultNetworkLayer.prototype.sendMutation = function sendMutation(request) {
	    return this._sendMutation(request).then(function (result) {
	      return result.json();
	    }).then(function (payload) {
	      if (payload.hasOwnProperty('errors')) {
	        var error = createRequestError(request, '200', payload);
	        request.reject(error);
	      } else {
	        request.resolve({ response: payload.data });
	      }
	    })['catch'](function (error) {
	      return request.reject(error);
	    });
	  };

	  RelayDefaultNetworkLayer.prototype.sendQueries = function sendQueries(requests) {
	    var _this = this;

	    return Promise.all(requests.map(function (request) {
	      return _this._sendQuery(request).then(function (result) {
	        return result.json();
	      }).then(function (payload) {
	        if (payload.hasOwnProperty('errors')) {
	          var error = createRequestError(request, '200', payload);
	          request.reject(error);
	        } else if (!payload.hasOwnProperty('data')) {
	          request.reject(new Error('Server response was missing for query ' + ('`' + request.getDebugName() + '`.')));
	        } else {
	          request.resolve({ response: payload.data });
	        }
	      })['catch'](function (error) {
	        return request.reject(error);
	      });
	    }));
	  };

	  RelayDefaultNetworkLayer.prototype.supports = function supports() {
	    // Does not support the only defined option, "defer".
	    return false;
	  };

	  /**
	   * Sends a POST request with optional files.
	   */


	  RelayDefaultNetworkLayer.prototype._sendMutation = function _sendMutation(request) {
	    var init = void 0;
	    var files = request.getFiles();
	    if (files) {
	      if (!global.FormData) {
	        throw new Error('Uploading files without `FormData` not supported.');
	      }
	      var formData = new FormData();
	      formData.append('query', request.getQueryString());
	      formData.append('variables', JSON.stringify(request.getVariables()));
	      for (var filename in files) {
	        if (files.hasOwnProperty(filename)) {
	          formData.append(filename, files[filename]);
	        }
	      }
	      init = (0, _extends3['default'])({}, this._init, {
	        body: formData,
	        method: 'POST'
	      });
	    } else {
	      init = (0, _extends3['default'])({}, this._init, {
	        body: JSON.stringify({
	          query: request.getQueryString(),
	          variables: request.getVariables()
	        }),
	        headers: (0, _extends3['default'])({}, this._init.headers, {
	          Accept: '*/*',
	          'Content-Type': 'application/json'
	        }),
	        method: 'POST'
	      });
	    }
	    return __webpack_require__(149)(this._uri, init).then(function (response) {
	      return throwOnServerError(request, response);
	    });
	  };

	  /**
	   * Sends a POST request and retries if the request fails or times out.
	   */


	  RelayDefaultNetworkLayer.prototype._sendQuery = function _sendQuery(request) {
	    return __webpack_require__(150)(this._uri, (0, _extends3['default'])({}, this._init, {
	      body: JSON.stringify({
	        query: request.getQueryString(),
	        variables: request.getVariables()
	      }),
	      headers: (0, _extends3['default'])({}, this._init.headers, {
	        Accept: '*/*',
	        'Content-Type': 'application/json'
	      }),
	      method: 'POST'
	    }));
	  };

	  return RelayDefaultNetworkLayer;
	}();

	/**
	 * Rejects HTTP responses with a status code that is not >= 200 and < 300.
	 * This is done to follow the internal behavior of `fetchWithRetries`.
	 */


	function throwOnServerError(request, response) {
	  if (response.status >= 200 && response.status < 300) {
	    return response;
	  } else {
	    return response.text().then(function (payload) {
	      throw createRequestError(request, response.status, payload);
	    });
	  }
	}

	/**
	 * Formats an error response from GraphQL server request.
	 */
	function formatRequestErrors(request, errors) {
	  var CONTEXT_BEFORE = 20;
	  var CONTEXT_LENGTH = 60;

	  var queryLines = request.getQueryString().split('\n');
	  return errors.map(function (_ref, ii) {
	    var locations = _ref.locations,
	        message = _ref.message;

	    var prefix = ii + 1 + '. ';
	    var indent = ' '.repeat(prefix.length);

	    //custom errors thrown in graphql-server may not have locations
	    var locationMessage = locations ? '\n' + locations.map(function (_ref2) {
	      var column = _ref2.column,
	          line = _ref2.line;

	      var queryLine = queryLines[line - 1];
	      var offset = Math.min(column - 1, CONTEXT_BEFORE);
	      return [queryLine.substr(column - 1 - offset, CONTEXT_LENGTH), ' '.repeat(Math.max(0, offset)) + '^^^'].map(function (messageLine) {
	        return indent + messageLine;
	      }).join('\n');
	    }).join('\n') : '';

	    return prefix + message + locationMessage;
	  }).join('\n');
	}

	function createRequestError(request, responseStatus, payload) {
	  var requestType = request instanceof __webpack_require__(79) ? 'mutation' : 'query';
	  var errorReason = typeof payload === 'object' ? formatRequestErrors(request, payload.errors) : 'Server response had an error status: ' + responseStatus;
	  var error = new Error('Server request for ' + requestType + ' `' + request.getDebugName() + '` ' + ('failed for the following reasons:\n\n' + errorReason));
	  error.source = payload;
	  error.status = responseStatus;
	  return error;
	}

	module.exports = RelayDefaultNetworkLayer;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayEnvironment
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @public
	 *
	 * `RelayEnvironment` is the public API for Relay core. Each instance provides
	 * an isolated environment with:
	 * - Methods for fetching and updating data.
	 * - An in-memory cache of fetched data.
	 * - A configurable network layer for resolving queries/mutations.
	 * - A configurable task scheduler to control when internal tasks are executed.
	 *
	 * No data or configuration is shared between instances. We recommend creating
	 * one `RelayEnvironment` instance per user: client apps may share a single
	 * instance, server apps may create one instance per HTTP request.
	 */


	/**
	 * A version of the `RelayContext` interface where the `environment` property
	 * satisfies both new `Environment` API and the classic environment API. Values
	 * of this type allow both the classic and new APIs to be used together within a
	 * single React view hierarchy.
	 */
	var RelayEnvironment = function () {
	  RelayEnvironment.prototype.applyMutation = function applyMutation(_ref) {
	    var configs = _ref.configs,
	        operation = _ref.operation,
	        optimisticResponse = _ref.optimisticResponse,
	        variables = _ref.variables;

	    var mutationTransaction = new (__webpack_require__(59))(operation.node, __webpack_require__(44).getOperationVariables(operation, variables), null, this);
	    mutationTransaction.applyOptimistic(operation.node, optimisticResponse, configs);
	    var disposed = false;
	    return {
	      dispose: function dispose() {
	        if (!disposed) {
	          disposed = true;
	          mutationTransaction.rollback();
	        }
	      }
	    };
	  };

	  RelayEnvironment.prototype.commitPayload = function commitPayload(operationSelector, payload) {
	    var selector = operationSelector.root;
	    var fragment = __webpack_require__(2).Fragment.create(selector.node, __webpack_require__(12).get('$RelayEnvironment'), selector.variables);
	    var path = __webpack_require__(9).getRootRecordPath();
	    this._storeData.handleFragmentPayload(selector.dataID, fragment, path, payload, null);
	  };

	  /**
	   * An internal implementation of the "lookup" API that is shared by `lookup()`
	   * and `subscribe()`. Note that `subscribe()` cannot use `lookup()` directly,
	   * since the former may modify the result data before freezing it.
	   */


	  RelayEnvironment.prototype._lookup = function _lookup(selector) {
	    var fragment = __webpack_require__(2).Fragment.create(selector.node, __webpack_require__(12).get('$RelayEnvironment'), selector.variables);

	    var _readRelayQueryData = __webpack_require__(54)(this._storeData, fragment, selector.dataID),
	        data = _readRelayQueryData.data,
	        dataIDs = _readRelayQueryData.dataIDs;
	    // Ensure that the root ID is considered "seen" and will be watched for
	    // changes if the returned selector is passed to `subscribe()`.


	    dataIDs[selector.dataID] = true;
	    return (0, _extends3['default'])({}, selector, {
	      data: data,
	      seenRecords: dataIDs
	    });
	  };

	  RelayEnvironment.prototype.lookup = function lookup(selector) {
	    var snapshot = this._lookup(selector);
	    if (true) {
	      deepFreezeSnapshot(snapshot);
	    }
	    return snapshot;
	  };

	  RelayEnvironment.prototype.sendMutation = function sendMutation(_ref2) {
	    var configs = _ref2.configs,
	        onCompleted = _ref2.onCompleted,
	        onError = _ref2.onError,
	        operation = _ref2.operation,
	        optimisticOperation = _ref2.optimisticOperation,
	        optimisticResponse = _ref2.optimisticResponse,
	        variables = _ref2.variables,
	        uploadables = _ref2.uploadables;

	    var disposed = false;
	    var mutationTransaction = new (__webpack_require__(59))(operation.node, __webpack_require__(44).getOperationVariables(operation, variables), uploadables, this, {
	      onSuccess: function onSuccess(response) {
	        if (disposed) {
	          return;
	        }
	        onCompleted && onCompleted(response);
	      },
	      onFailure: function onFailure(transaction) {
	        if (disposed) {
	          return;
	        }
	        if (onError) {
	          var _error = transaction.getError();
	          if (!_error) {
	            _error = new Error('RelayEnvironment: Unknown error executing mutation ' + operation.node.name);
	          }
	          onError(_error);
	        }
	      }
	    });

	    if (optimisticResponse) {
	      mutationTransaction.applyOptimistic(optimisticOperation ? optimisticOperation.node : operation.node, optimisticResponse, configs);
	    }

	    mutationTransaction.commit(configs);
	    return {
	      dispose: function dispose() {
	        if (!disposed) {
	          disposed = true;
	        }
	      }
	    };
	  };

	  RelayEnvironment.prototype.subscribe = function subscribe(snapshot, callback) {
	    var _this = this;

	    var subscription = void 0;
	    var changeEmitter = this._storeData.getChangeEmitter();
	    var update = function update() {
	      // Re-read data and see if anything changed
	      var nextSnapshot = _this._lookup(snapshot);
	      // Note that `recycleNodesInto` may modify the "next" value
	      nextSnapshot.data = __webpack_require__(98)(snapshot.data, nextSnapshot.data);
	      if (nextSnapshot.data === snapshot.data) {
	        // The record changes don't affect the results of the selector
	        return;
	      }
	      if (true) {
	        deepFreezeSnapshot(nextSnapshot);
	      }
	      if (subscription) {
	        subscription.remove();
	      }
	      subscription = changeEmitter.addListenerForIDs(Object.keys(nextSnapshot.seenRecords), update);
	      snapshot = nextSnapshot;
	      callback(snapshot);
	    };
	    subscription = changeEmitter.addListenerForIDs(Object.keys(snapshot.seenRecords), update);
	    return {
	      dispose: function dispose() {
	        if (subscription) {
	          subscription.remove();
	          subscription = null;
	        }
	      }
	    };
	  };

	  RelayEnvironment.prototype.retain = function retain(selector) {
	    return {
	      dispose: function dispose() {}
	    };
	  };

	  RelayEnvironment.prototype.sendQuery = function sendQuery(_ref3) {
	    var _this2 = this;

	    var cacheConfig = _ref3.cacheConfig,
	        onCompleted = _ref3.onCompleted,
	        onError = _ref3.onError,
	        onNext = _ref3.onNext,
	        operation = _ref3.operation;

	    var isDisposed = false;
	    var dispose = function dispose() {
	      isDisposed = true;
	    };
	    var query = __webpack_require__(2).OSSQuery.create(operation.node, __webpack_require__(12).get('$RelayEnvironment'), operation.variables);
	    var request = new (__webpack_require__(83))(query);
	    request.then(function (payload) {
	      if (isDisposed) {
	        return;
	      }
	      var forceIndex = cacheConfig && cacheConfig.force ? __webpack_require__(69)() : null;
	      _this2._storeData.handleOSSQueryPayload(query, payload.response, forceIndex);

	      onNext && onNext(operation.root);
	      onCompleted && onCompleted();
	    }, function (error) {
	      if (isDisposed) {
	        return;
	      }
	      onError && onError(error);
	    });
	    this._storeData.getTaskQueue().enqueue(function () {
	      _this2._storeData.getNetworkLayer().sendQueries([request]);
	    });
	    return { dispose: dispose };
	  };

	  RelayEnvironment.prototype.streamQuery = function streamQuery(config) {
	    return this.sendQuery(config);
	  };

	  function RelayEnvironment(storeData) {
	    (0, _classCallCheck3['default'])(this, RelayEnvironment);

	    this._storeData = storeData ? storeData : new (__webpack_require__(129))();
	    this._storeData.getChangeEmitter().injectBatchingStrategy(__webpack_require__(99));
	    this.applyUpdate = this.applyUpdate.bind(this);
	    this.commitUpdate = this.commitUpdate.bind(this);
	    this.unstable_internal = __webpack_require__(108);
	  }

	  /**
	   * @internal
	   */


	  RelayEnvironment.prototype.getStoreData = function getStoreData() {
	    return this._storeData;
	  };

	  /**
	   * @internal
	   */


	  RelayEnvironment.prototype.injectDefaultNetworkLayer = function injectDefaultNetworkLayer(networkLayer) {
	    this._storeData.getNetworkLayer().injectDefaultImplementation(networkLayer);
	  };

	  RelayEnvironment.prototype.injectNetworkLayer = function injectNetworkLayer(networkLayer) {
	    this._storeData.getNetworkLayer().injectImplementation(networkLayer);
	  };

	  /**
	   * @internal
	   */


	  RelayEnvironment.prototype.injectQueryTracker = function injectQueryTracker(queryTracker) {
	    this._storeData.injectQueryTracker(queryTracker);
	  };

	  RelayEnvironment.prototype.addNetworkSubscriber = function addNetworkSubscriber(queryCallback, mutationCallback) {
	    return this._storeData.getNetworkLayer().addNetworkSubscriber(queryCallback, mutationCallback);
	  };

	  RelayEnvironment.prototype.injectTaskScheduler = function injectTaskScheduler(scheduler) {
	    this._storeData.injectTaskScheduler(scheduler);
	  };

	  RelayEnvironment.prototype.injectCacheManager = function injectCacheManager(cacheManager) {
	    this._storeData.injectCacheManager(cacheManager);
	  };

	  /**
	   * Primes the store by sending requests for any missing data that would be
	   * required to satisfy the supplied set of queries.
	   */


	  RelayEnvironment.prototype.primeCache = function primeCache(querySet, callback) {
	    return this._storeData.getQueryRunner().run(querySet, callback);
	  };

	  /**
	   * Forces the supplied set of queries to be fetched and written to the store.
	   * Any data that previously satisfied the queries will be overwritten.
	   */


	  RelayEnvironment.prototype.forceFetch = function forceFetch(querySet, callback) {
	    return this._storeData.getQueryRunner().forceFetch(querySet, callback);
	  };

	  /**
	   * Reads query data anchored at the supplied data ID.
	   */


	  RelayEnvironment.prototype.read = function read(node, dataID, options) {
	    return __webpack_require__(54)(this._storeData, node, dataID, options).data;
	  };

	  /**
	   * Reads query data anchored at the supplied data IDs.
	   */


	  RelayEnvironment.prototype.readAll = function readAll(node, dataIDs, options) {
	    var _this3 = this;

	    return dataIDs.map(function (dataID) {
	      return __webpack_require__(54)(_this3._storeData, node, dataID, options).data;
	    });
	  };

	  /**
	   * Reads query data, where each element in the result array corresponds to a
	   * root call argument. If the root call has no arguments, the result array
	   * will contain exactly one element.
	   */


	  RelayEnvironment.prototype.readQuery = function readQuery(root, options) {
	    var _this4 = this;

	    var queuedStore = this._storeData.getQueuedStore();
	    var storageKey = root.getStorageKey();
	    var results = [];
	    __webpack_require__(28)(root, function (_ref4) {
	      var identifyingArgKey = _ref4.identifyingArgKey;

	      var data = void 0;
	      var dataID = queuedStore.getDataID(storageKey, identifyingArgKey);
	      if (dataID != null) {
	        data = _this4.read(root, dataID, options);
	      }
	      results.push(data);
	    });
	    return results;
	  };

	  /**
	   * Reads and subscribes to query data anchored at the supplied data ID. The
	   * returned observable emits updates as the data changes over time.
	   */


	  RelayEnvironment.prototype.observe = function observe(fragment, dataID) {
	    return new (__webpack_require__(124))(this._storeData, fragment, dataID);
	  };

	  /**
	   * @internal
	   *
	   * Returns a fragment "resolver" - a subscription to the results of a fragment
	   * and a means to access the latest results. This is a transitional API and
	   * not recommended for general use.
	   */


	  RelayEnvironment.prototype.getFragmentResolver = function getFragmentResolver(fragment, onNext) {
	    return new (__webpack_require__(76))(this._storeData, fragment, onNext);
	  };

	  /**
	   * Adds an update to the store without committing it. The returned
	   * RelayMutationTransaction can be committed or rolled back at a later time.
	   */


	  RelayEnvironment.prototype.applyUpdate = function applyUpdate(mutation, callbacks) {
	    mutation.bindEnvironment(this);
	    return this._storeData.getMutationQueue().createTransaction(mutation, callbacks).applyOptimistic();
	  };

	  /**
	   * Adds an update to the store and commits it immediately. Returns
	   * the RelayMutationTransaction.
	   */


	  RelayEnvironment.prototype.commitUpdate = function commitUpdate(mutation, callbacks) {
	    var transaction = this.applyUpdate(mutation, callbacks);
	    // The idea here is to defer the call to `commit()` to give the optimistic
	    // mutation time to flush out to the UI before starting the commit work.
	    var preCommitStatus = transaction.getStatus();
	    setTimeout(function () {
	      if (transaction.getStatus() !== preCommitStatus) {
	        return;
	      }
	      transaction.commit();
	    });
	    return transaction;
	  };

	  /**
	   * @deprecated
	   *
	   * Method renamed to commitUpdate
	   */


	  RelayEnvironment.prototype.update = function update(mutation, callbacks) {
	    __webpack_require__(5)(false, '`Relay.Store.update` is deprecated. Please use' + ' `Relay.Store.commitUpdate` or `Relay.Store.applyUpdate` instead.');
	    this.commitUpdate(mutation, callbacks);
	  };

	  return RelayEnvironment;
	}();

	/**
	 * RelayQuery mutates the `__cachedFragment__` property of concrete nodes for
	 * memoization purposes, so a snapshot cannot be completely frozen. Instead this
	 * function shallow-freezes the snapshot itself and deeply freezes all
	 * properties except the `node`.
	 */


	function deepFreezeSnapshot(snapshot) {
	  Object.freeze(snapshot);
	  if (snapshot.data != null) {
	    __webpack_require__(67)(snapshot.data);
	  }
	  __webpack_require__(67)(snapshot.seenRecords);
	  __webpack_require__(67)(snapshot.variables);
	  return snapshot;
	}

	module.exports = RelayEnvironment;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMutationRequest
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Instances of these are made available via `RelayNetworkLayer.sendMutation`.
	 */
	var RelayMutationRequest = function (_Deferred) {
	  (0, _inherits3['default'])(RelayMutationRequest, _Deferred);

	  function RelayMutationRequest(mutation, files) {
	    (0, _classCallCheck3['default'])(this, RelayMutationRequest);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _Deferred.call(this));

	    _this._mutation = mutation;
	    _this._printedQuery = null;
	    _this._files = files;
	    return _this;
	  }

	  /**
	   * @public
	   *
	   * Gets a string name used to refer to this request for printing debug output.
	   */


	  RelayMutationRequest.prototype.getDebugName = function getDebugName() {
	    return this._mutation.getName();
	  };

	  /**
	   * @public
	   *
	   * Gets an optional map from name to File objects.
	   */


	  RelayMutationRequest.prototype.getFiles = function getFiles() {
	    return this._files;
	  };

	  /**
	   * @public
	   *
	   * Gets the variables used by the mutation. These variables should be
	   * serialized and sent in the GraphQL request.
	   */


	  RelayMutationRequest.prototype.getVariables = function getVariables() {
	    return this._getPrintedQuery().variables;
	  };

	  /**
	   * @public
	   *
	   * Gets a string representation of the GraphQL mutation.
	   */


	  RelayMutationRequest.prototype.getQueryString = function getQueryString() {
	    return this._getPrintedQuery().text;
	  };

	  /**
	   * @public
	   * @unstable
	   */


	  RelayMutationRequest.prototype.getMutation = function getMutation() {
	    return this._mutation;
	  };

	  /**
	   * @private
	   *
	   * Returns the memoized printed query.
	   */


	  RelayMutationRequest.prototype._getPrintedQuery = function _getPrintedQuery() {
	    if (!this._printedQuery) {
	      this._printedQuery = __webpack_require__(52)(this._mutation);
	    }
	    return this._printedQuery;
	  };

	  return RelayMutationRequest;
	}(__webpack_require__(73));

	module.exports = RelayMutationRequest;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayOptimisticMutationUtils
	 * 
	 * @format
	 */

	'use strict';

	var _defineProperty3 = _interopRequireDefault(__webpack_require__(37));

	var _extends5 = _interopRequireDefault(__webpack_require__(13));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var ARGUMENTS = /^(\w+)(?:\((.+?)\))?$/;
	var ARGUMENT_NAME = /(\w+)(?=\s*:)/;
	var DEPRECATED_CALLS = /^\w+(?:\.\w+\(.*?\))+$/;
	var DEPRECATED_CALL = /^(\w+)\((.*?)\)$/;

	var NODE = __webpack_require__(6).NODE,
	    EDGES = __webpack_require__(6).EDGES;

	var ANY_TYPE = __webpack_require__(8).ANY_TYPE,
	    ID = __webpack_require__(8).ID;

	var idField = __webpack_require__(2).Field.build({
	  fieldName: ID,
	  type: 'String'
	});
	var cursorField = __webpack_require__(2).Field.build({
	  fieldName: 'cursor',
	  type: 'String'
	});

	/**
	 * @internal
	 */
	var RelayOptimisticMutationUtils = {
	  /**
	   * Given a record-like object, infers fields that could be used to fetch them.
	   * Properties that are fetched via fields with arguments can be encoded by
	   * serializing the arguments in property keys.
	   */
	  inferRelayFieldsFromData: function inferRelayFieldsFromData(data) {
	    var fields = [];
	    __webpack_require__(11)(data, function (value, key) {
	      if (!__webpack_require__(3).isMetadataKey(key)) {
	        fields.push(inferField(value, key));
	      }
	    });
	    return fields;
	  },
	  /**
	   * Given a record-like object, infer the proper payload to be used to store
	   * them. Properties that are fetched via fields with arguments will be
	   * encoded by serializing the arguments in property keys.
	   */
	  inferRelayPayloadFromData: function inferRelayPayloadFromData(data) {
	    var payload = data;
	    __webpack_require__(11)(data, function (value, key) {
	      if (!__webpack_require__(3).isMetadataKey(key)) {
	        var _inferPayload = inferPayload(value, key),
	            newValue = _inferPayload.newValue,
	            _newKey = _inferPayload.newKey;

	        if (_newKey !== key) {
	          payload = (0, _extends5['default'])({}, payload, (0, _defineProperty3['default'])({}, _newKey, newValue));
	          delete payload[key];
	        } else if (newValue !== value) {
	          payload = (0, _extends5['default'])({}, payload, (0, _defineProperty3['default'])({}, key, newValue));
	        }
	      }
	    });
	    return payload;
	  }
	};

	function inferField(value, key) {
	  var metadata = {
	    canHaveSubselections: true,
	    isPlural: false
	  };
	  var children = void 0;
	  if (Array.isArray(value)) {
	    var element = value[0];
	    if (element && typeof element === 'object') {
	      children = RelayOptimisticMutationUtils.inferRelayFieldsFromData(element);
	    } else {
	      metadata.canHaveSubselections = false;
	      children = [];
	    }
	    metadata.isPlural = true;
	  } else if (typeof value === 'object' && value !== null) {
	    children = RelayOptimisticMutationUtils.inferRelayFieldsFromData(value);
	  } else {
	    metadata.canHaveSubselections = false;
	    children = [];
	  }
	  if (key === NODE) {
	    children.push(idField);
	  } else if (key === EDGES) {
	    children.push(cursorField);
	  }
	  return buildField(key, children, metadata);
	}

	function inferPayload(value, key) {
	  var metadata = {
	    canHaveSubselections: true,
	    isPlural: false
	  };
	  var newValue = value;
	  if (Array.isArray(value) && Array.isArray(newValue)) {
	    for (var ii = 0; ii < value.length; ii++) {
	      var element = value[ii];
	      if (element && typeof element === 'object') {
	        var newElement = RelayOptimisticMutationUtils.inferRelayPayloadFromData(element);
	        if (newElement !== element) {
	          newValue = newValue.slice();
	          newValue[ii] = newElement;
	        }
	      } else {
	        metadata.canHaveSubselections = false;
	      }
	    }
	    metadata.isPlural = true;
	  } else if (typeof value === 'object' && value !== null) {
	    newValue = RelayOptimisticMutationUtils.inferRelayPayloadFromData(value);
	  } else {
	    metadata.canHaveSubselections = false;
	  }

	  var field = buildField(key, [], metadata);
	  return { newValue: newValue, newKey: field.getSerializationKey() };
	}

	function buildField(key, children, metadata) {
	  var fieldName = key;
	  var calls = null;
	  if (DEPRECATED_CALLS.test(key)) {
	    __webpack_require__(5)(false, 'RelayOptimisticMutationUtils: Encountered an optimistic payload with ' + 'a deprecated field call string, `%s`. Use valid GraphQL OSS syntax.', key);
	    var parts = key.split('.');
	    if (parts.length > 1) {
	      fieldName = parts.shift();
	      calls = parts.map(function (callString) {
	        var captures = callString.match(DEPRECATED_CALL);
	        __webpack_require__(1)(captures, 'RelayOptimisticMutationUtils: Malformed data key, `%s`.', key);
	        var value = captures[2].split(',');
	        return {
	          name: captures[1],
	          value: value.length === 1 ? value[0] : value
	        };
	      });
	    }
	  } else {
	    var captures = key.match(ARGUMENTS);
	    __webpack_require__(1)(captures, 'RelayOptimisticMutationUtils: Malformed data key, `%s`.', key);
	    fieldName = captures[1];
	    if (captures[2]) {
	      try {
	        // Relay does not currently have a GraphQL argument parser, so...
	        var args = JSON.parse('{' + captures[2].replace(ARGUMENT_NAME, '"$1"') + '}');
	        calls = Object.keys(args).map(function (name) {
	          return { name: name, value: args[name] };
	        });
	      } catch (error) {
	        __webpack_require__(1)(false, 'RelayOptimisticMutationUtils: Malformed or unsupported data key, ' + '`%s`. Only booleans, strings, and numbers are currently supported, ' + 'and commas are required. Parse failure reason was `%s`.', key, error.message);
	      }
	    }
	  }
	  /* $FlowFixMe - Flow error detected during the deployment of v0.38.0. To see
	   * the error, remove this comment and run flow */
	  return __webpack_require__(2).Field.build({
	    calls: calls,
	    children: children,
	    fieldName: fieldName,
	    metadata: metadata,
	    type: ANY_TYPE
	  });
	}

	module.exports = RelayOptimisticMutationUtils;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQL
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @public
	 *
	 * This is a tag function used with template strings to provide the facade of a
	 * runtime GraphQL parser. Example usage:
	 *
	 *   Relay.QL`fragment on User { name }`
	 *
	 * In actuality, a Babel transform parses these tag templates and replaces it
	 * with an internal representation of the query structure.
	 */
	function RelayQL(strings) {
	  __webpack_require__(1)(false, 'RelayQL: Unexpected invocation at runtime. Either the Babel transform ' + 'was not set up, or it failed to identify this call site. Make sure it ' + 'is being used verbatim as `Relay.QL`.');
	}

	function assertValidFragment(substitution) {
	  __webpack_require__(1)(substitution instanceof __webpack_require__(42) || __webpack_require__(7).getFragment(substitution) || __webpack_require__(7).getFragmentSpread(substitution), 'RelayQL: Invalid fragment composition, use ' + "`${Child.getFragment('name')}`.");
	}

	/**
	 * Private helper methods used by the transformed code.
	 */
	Object.assign(RelayQL, {
	  __frag: function __frag(substitution) {
	    if (typeof substitution === 'function') {
	      // Route conditional fragment, e.g. `${route => matchRoute(route, ...)}`.
	      return new (__webpack_require__(87))(substitution);
	    }
	    if (substitution != null) {
	      if (Array.isArray(substitution)) {
	        substitution.forEach(assertValidFragment);
	      } else {
	        assertValidFragment(substitution);
	      }
	    }
	    return substitution;
	  },
	  __var: function __var(expression) {
	    var variable = __webpack_require__(7).getCallVariable(expression);
	    if (variable) {
	      __webpack_require__(1)(false, 'RelayQL: Invalid argument `%s` supplied via template substitution. ' + 'Instead, use an inline variable (e.g. `comments(count: $count)`).', variable.callVariableName);
	    }
	    return __webpack_require__(7).createCallValue(expression);
	  },
	  __id: function __id() {
	    return __webpack_require__(68)();
	  },
	  __createFragment: function __createFragment(fragment, variableMapping) {
	    return new (__webpack_require__(42))(function () {
	      return fragment;
	    }, null, variableMapping);
	  }
	});

	module.exports = RelayQL;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQueryConfig
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Configures the root queries and initial variables that define the context in
	 * which the top-level component's fragments are requested. This is meant to be
	 * subclassed, of which instances are supplied to `RelayRootContainer`.
	 */
	var RelayQueryConfig = function () {

	  // TODO: Deprecate `routeName`, #8478719.
	  function RelayQueryConfig(initialVariables) {
	    (0, _classCallCheck3['default'])(this, RelayQueryConfig);

	    __webpack_require__(1)(this.constructor !== RelayQueryConfig, 'RelayQueryConfig: Abstract class cannot be instantiated.');

	    Object.defineProperty(this, 'name', {
	      enumerable: true,
	      value: this.constructor.routeName
	    });
	    Object.defineProperty(this, 'params', {
	      enumerable: true,
	      value: this.prepareVariables((0, _extends3['default'])({}, initialVariables)) || {}
	    });
	    Object.defineProperty(this, 'queries', {
	      enumerable: true,
	      value: (0, _extends3['default'])({}, this.constructor.queries)
	    });

	    if (true) {
	      Object.freeze(this.params);
	      Object.freeze(this.queries);
	    }
	  }

	  /**
	   * Provides an opportunity to perform additional logic on the variables.
	   * Child class should override this function to perform custom logic.
	   */


	  RelayQueryConfig.prototype.prepareVariables = function prepareVariables(prevVariables) {
	    return prevVariables;
	  };

	  return RelayQueryConfig;
	}();

	module.exports = RelayQueryConfig;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQueryRequest
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Instances of these are made available via `RelayNetworkLayer.sendQueries`.
	 */
	var RelayQueryRequest = function (_Deferred) {
	  (0, _inherits3['default'])(RelayQueryRequest, _Deferred);

	  function RelayQueryRequest(query) {
	    (0, _classCallCheck3['default'])(this, RelayQueryRequest);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _Deferred.call(this));

	    _this._printedQuery = null;
	    _this._query = query;
	    return _this;
	  }

	  /**
	   * @public
	   *
	   * Gets a string name used to refer to this request for printing debug output.
	   */


	  RelayQueryRequest.prototype.getDebugName = function getDebugName() {
	    var name = this._query.getName();
	    return this._query.isDeferred() ? name + ' (DEFERRED)' : name;
	  };

	  /**
	   * @public
	   *
	   * Gets a unique identifier for this query. These identifiers are useful for
	   * assigning response payloads to their corresponding queries when sent in a
	   * single GraphQL request.
	   */


	  RelayQueryRequest.prototype.getID = function getID() {
	    return this._query.getID();
	  };

	  RelayQueryRequest.prototype._getPrintedQuery = function _getPrintedQuery() {
	    var printedQuery = this._printedQuery;
	    if (printedQuery == null) {
	      printedQuery = this._query instanceof __webpack_require__(2).OSSQuery ? __webpack_require__(97)(this._query) : __webpack_require__(52)(this._query);
	      this._printedQuery = printedQuery;
	    }
	    return printedQuery;
	  };

	  /**
	   * @public
	   *
	   * Gets the variables used by the query. These variables should be serialized
	   * and sent in the GraphQL request.
	   */


	  RelayQueryRequest.prototype.getVariables = function getVariables() {
	    return this._getPrintedQuery().variables;
	  };

	  /**
	   * @public
	   *
	   * Gets a string representation of the GraphQL query.
	   */


	  RelayQueryRequest.prototype.getQueryString = function getQueryString() {
	    return this._getPrintedQuery().text;
	  };

	  /**
	   * @public
	   * @unstable
	   */


	  RelayQueryRequest.prototype.getQuery = function getQuery() {
	    return this._query;
	  };

	  return RelayQueryRequest;
	}(__webpack_require__(73));

	module.exports = RelayQueryRequest;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayReadyStateRenderer
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @public
	 *
	 * RelayReadyStateRenderer synchronously renders a container and query config
	 * given `readyState`. The `readyState` must be an accurate representation of
	 * the data that currently resides in the supplied `environment`. If you need
	 * data to be fetched in addition to rendering, please use `RelayRenderer`.
	 *
	 * If `readyState` is not supplied, the previously rendered `readyState` will
	 * continue to be rendered (or null if there is no previous `readyState`).
	 */
	var RelayReadyStateRenderer = function (_React$Component) {
	  (0, _inherits3['default'])(RelayReadyStateRenderer, _React$Component);

	  function RelayReadyStateRenderer(props, context) {
	    (0, _classCallCheck3['default'])(this, RelayReadyStateRenderer);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

	    _this._relay = {
	      environment: props.environment,
	      variables: props.queryConfig.params
	    };
	    _this.state = {
	      getContainerProps: createContainerPropsFactory()
	    };
	    return _this;
	  }

	  RelayReadyStateRenderer.prototype.getChildContext = function getChildContext() {
	    return {
	      relay: this._relay,
	      route: this.props.queryConfig
	    };
	  };

	  RelayReadyStateRenderer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.environment !== nextProps.environment || this.props.queryConfig !== nextProps.queryConfig) {
	      this._relay = {
	        environment: nextProps.environment,
	        variables: nextProps.queryConfig.params
	      };
	    }
	  };

	  /**
	   * Avoid updating when we have fetched data but are still not ready.
	   */


	  RelayReadyStateRenderer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    var prevProps = this.props;
	    if (prevProps.Container !== nextProps.Container || prevProps.environment !== nextProps.environment || prevProps.queryConfig !== nextProps.queryConfig || prevProps.render !== nextProps.render || prevProps.retry !== nextProps.retry) {
	      return true;
	    }
	    var prevReadyState = prevProps.readyState;
	    var nextReadyState = nextProps.readyState;
	    if (prevReadyState == null || nextReadyState == null) {
	      return true;
	    }
	    if (prevReadyState.aborted !== nextReadyState.aborted || prevReadyState.done !== nextReadyState.done || prevReadyState.error !== nextReadyState.error || prevReadyState.ready !== nextReadyState.ready || prevReadyState.stale !== nextReadyState.stale) {
	      return true;
	    }
	    return nextReadyState.ready;
	  };

	  RelayReadyStateRenderer.prototype.render = function render() {
	    var children = void 0;
	    var shouldUpdate = false;

	    var _props = this.props,
	        readyState = _props.readyState,
	        render = _props.render;

	    if (readyState) {
	      if (render) {
	        children = render({
	          done: readyState.done,
	          error: readyState.error,
	          events: readyState.events,
	          props: readyState.ready ? this.state.getContainerProps(this.props) : null,
	          retry: this.props.retry,
	          stale: readyState.stale
	        });
	      } else if (readyState.ready) {
	        var _Container = this.props.Container;

	        children = __webpack_require__(25).createElement(_Container, this.state.getContainerProps(this.props));
	      }
	      shouldUpdate = true;
	    }
	    if (children === undefined) {
	      children = null;
	      shouldUpdate = false;
	    }
	    return __webpack_require__(25).createElement(
	      __webpack_require__(155),
	      { shouldUpdate: shouldUpdate },
	      children
	    );
	  };

	  return RelayReadyStateRenderer;
	}(__webpack_require__(25).Component);

	RelayReadyStateRenderer.childContextTypes = {
	  relay: __webpack_require__(24).ClassicRelay,
	  route: __webpack_require__(24).QueryConfig.isRequired
	};


	function createContainerPropsFactory() {
	  var prevProps = void 0;
	  var querySet = void 0;

	  return function (nextProps) {
	    if (!querySet || !prevProps || prevProps.Container !== nextProps.Container || prevProps.queryConfig !== nextProps.queryConfig) {
	      querySet = __webpack_require__(70)(nextProps.Container, nextProps.queryConfig);
	    }
	    var containerProps = (0, _extends3['default'])({}, nextProps.queryConfig.params, __webpack_require__(38)(querySet, function (query) {
	      return createFragmentPointerForRoot(nextProps.environment, query);
	    }));
	    prevProps = nextProps;
	    return containerProps;
	  };
	}

	function createFragmentPointerForRoot(environment, query) {
	  return query ? __webpack_require__(21).createForRoot(environment.getStoreData().getQueuedStore(), query) : null;
	}

	module.exports = RelayReadyStateRenderer;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRefQueryDescriptor
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Represents a node that will eventually become a "ref query".
	 *
	 * Includes the `nodePath` (ancestor nodes) that can be used to construct an
	 * appropriate the JSONPath for the query.
	 *
	 * @see splitDeferredRelayQueries
	 */
	var RelayRefQueryDescriptor = function RelayRefQueryDescriptor(node, nodePath) {
	  (0, _classCallCheck3['default'])(this, RelayRefQueryDescriptor);

	  this.node = node;
	  this.nodePath = nodePath;
	};

	module.exports = RelayRefQueryDescriptor;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRenderer
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var INACTIVE_READY_STATE = {
	  aborted: false,
	  done: false,
	  error: null,
	  events: [],
	  ready: false,
	  stale: false
	};

	/**
	 * @public
	 *
	 * RelayRenderer renders a container and query config after fulfilling its data
	 * dependencies. Precise rendering behavior is configured via the `render` prop
	 * which takes a callback.
	 *
	 * The container created using `Relay.createContainer` must be supplied via the
	 * `Container` prop, and the query configuration that conforms to the shape of a
	 * `RelayQueryConfig` must be supplied via the `queryConfig` prop.
	 *
	 * === Render Callback ===
	 *
	 * The `render` callback is called with an object with the following properties:
	 *
	 *   props: ?{[propName: string]: mixed}
	 *     If present, sufficient data is ready to render the container. This object
	 *     must be spread into the container using the spread attribute operator. If
	 *     absent, there is insufficient data to render the container.
	 *
	 *   done: boolean
	 *     Whether all data dependencies have been fulfilled. If `props` is present
	 *     but `done` is false, then sufficient data is ready to render, but some
	 *     data dependencies have not yet been fulfilled.
	 *
	 *   error: ?Error
	 *     If present, an error occurred while fulfilling data dependencies. If
	 *     `props` and `error` are both present, then sufficient data is ready to
	 *     render, but an error occurred while fulfilling deferred dependencies.
	 *
	 *   retry: ?Function
	 *     A function that can be called to re-attempt to fulfill data dependencies.
	 *     This property is only present if an `error` has occurred.
	 *
	 *   stale: boolean
	 *     When `forceFetch` is enabled, a request is always made to fetch updated
	 *     data. However, if all data dependencies can be immediately fulfilled, the
	 *     `props` property will be present. In this case, `stale` will be true.
	 *
	 * The `render` callback can return `undefined` to continue rendering the last
	 * view rendered (e.g. when transitioning from one `queryConfig` to another).
	 *
	 * If a `render` callback is not supplied, the default behavior is to render the
	 * container if data is available, the existing view if one exists, or nothing.
	 *
	 * === Refs ===
	 *
	 * References to elements rendered by the `render` callback can be obtained by
	 * using the React `ref` prop. For example:
	 *
	 *   <FooComponent {...props} ref={handleFooRef} />
	 *
	 *   function handleFooRef(component) {
	 *     // Invoked when `<FooComponent>` is mounted or unmounted. When mounted,
	 *     // `component` will be the component. When unmounted, `component` will
	 *     // be null.
	 *   }
	 *
	 */

	var RelayRenderer = function (_React$Component) {
	  (0, _inherits3['default'])(RelayRenderer, _React$Component);

	  function RelayRenderer(props, context) {
	    (0, _classCallCheck3['default'])(this, RelayRenderer);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

	    var garbageCollector = _this.props.environment.getStoreData().getGarbageCollector();
	    _this.gcHold = garbageCollector && garbageCollector.acquireHold();
	    _this.mounted = true;
	    _this.pendingRequest = null;
	    _this.state = {
	      active: false,
	      readyState: null,
	      retry: _this._retry.bind(_this)
	    };
	    return _this;
	  }

	  RelayRenderer.prototype.componentDidMount = function componentDidMount() {
	    this._validateProps(this.props);
	    this._runQueries(this.props);
	  };

	  /**
	   * @private
	   */


	  RelayRenderer.prototype._validateProps = function _validateProps(props) {
	    var error = RelayRenderer.propTypes.Container(props, 'Container', 'RelayRenderer');
	    if (error) {
	      throw error;
	    }
	  };

	  /**
	   * @private
	   */


	  RelayRenderer.prototype._runQueries = function _runQueries(_ref) {
	    var _this2 = this;

	    var Container = _ref.Container,
	        forceFetch = _ref.forceFetch,
	        onForceFetch = _ref.onForceFetch,
	        onPrimeCache = _ref.onPrimeCache,
	        queryConfig = _ref.queryConfig,
	        environment = _ref.environment,
	        shouldFetch = _ref.shouldFetch;

	    if (!shouldFetch) {
	      return;
	    }

	    var onReadyStateChange = function onReadyStateChange(readyState) {
	      if (!_this2.mounted) {
	        _this2._handleReadyStateChange((0, _extends3['default'])({}, readyState, { mounted: false }));
	        return;
	      }
	      if (request !== _this2.lastRequest) {
	        // Ignore (abort) ready state if we have a new pending request.
	        return;
	      }
	      if (readyState.aborted || readyState.done || readyState.error) {
	        _this2.pendingRequest = null;
	      }
	      _this2.setState({
	        active: true,
	        readyState: (0, _extends3['default'])({}, readyState, {
	          mounted: true
	        })
	      });
	    };

	    if (this.pendingRequest) {
	      this.pendingRequest.abort();
	    }

	    var querySet = __webpack_require__(70)(Container, queryConfig);
	    var request = this.pendingRequest = forceFetch ? onForceFetch ? onForceFetch(querySet, onReadyStateChange) : environment.forceFetch(querySet, onReadyStateChange) : onPrimeCache ? onPrimeCache(querySet, onReadyStateChange) : environment.primeCache(querySet, onReadyStateChange);
	    this.lastRequest = request;
	  };

	  /**
	   * @private
	   */


	  RelayRenderer.prototype._retry = function _retry() {
	    var readyState = this.state.readyState;

	    if (readyState && readyState.error) {
	      this._runQueries(this.props);
	      this.setState({ readyState: null });
	    }
	  };

	  RelayRenderer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.Container !== this.props.Container || nextProps.environment !== this.props.environment || nextProps.queryConfig !== this.props.queryConfig || nextProps.shouldFetch !== this.props.shouldFetch || nextProps.forceFetch && !this.props.forceFetch) {
	      if (nextProps.environment !== this.props.environment) {
	        if (this.gcHold) {
	          this.gcHold.release();
	        }
	        var garbageCollector = nextProps.environment.getStoreData().getGarbageCollector();
	        this.gcHold = garbageCollector && garbageCollector.acquireHold();
	      }
	      this._validateProps(nextProps);
	      this._runQueries(nextProps);
	      this.setState({ readyState: null });
	    }
	  };

	  RelayRenderer.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    // `prevState` should exist; the truthy check is for Flow soundness.
	    var readyState = this.state.readyState;

	    if (readyState) {
	      if (!prevState || readyState !== prevState.readyState) {
	        this._handleReadyStateChange(readyState);
	      }
	    }
	  };

	  /**
	   * @private
	   */


	  RelayRenderer.prototype._handleReadyStateChange = function _handleReadyStateChange(readyState) {
	    var onReadyStateChange = this.props.onReadyStateChange;

	    if (onReadyStateChange) {
	      onReadyStateChange(readyState);
	    }
	  };

	  RelayRenderer.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.pendingRequest) {
	      this.pendingRequest.abort();
	    }
	    if (this.gcHold) {
	      this.gcHold.release();
	    }
	    this.gcHold = null;
	    this.mounted = false;
	  };

	  RelayRenderer.prototype.render = function render() {
	    var readyState = this.state.active ? this.state.readyState : INACTIVE_READY_STATE;

	    return __webpack_require__(25).createElement(__webpack_require__(84), {
	      Container: this.props.Container,
	      environment: this.props.environment,
	      queryConfig: this.props.queryConfig,
	      readyState: readyState,
	      render: this.props.render,
	      retry: this.state.retry
	    });
	  };

	  return RelayRenderer;
	}(__webpack_require__(25).Component);

	RelayRenderer.propTypes = {
	  Container: __webpack_require__(24).Container,
	  forceFetch: __webpack_require__(17).bool,
	  onReadyStateChange: __webpack_require__(17).func,
	  queryConfig: __webpack_require__(24).QueryConfig.isRequired,
	  environment: __webpack_require__(24).Environment,
	  render: __webpack_require__(17).func,
	  shouldFetch: __webpack_require__(17).bool
	};
	RelayRenderer.defaultProps = {
	  shouldFetch: true
	};


	module.exports = RelayRenderer;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRouteFragment
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Represents a query fragment that is conditional upon the active route as a
	 * function that returns either a literal fragment or a fragment reference.
	 *
	 * Example GraphQL:
	 *
	 * ```
	 * Node {
	 *   ${(route) => matchRoute(route, ...)}
	 * }
	 * ```
	 */
	var RelayRouteFragment = function () {
	  function RelayRouteFragment(builder) {
	    (0, _classCallCheck3['default'])(this, RelayRouteFragment);

	    this._builder = builder;
	  }

	  /**
	   * Returns the query fragment that matches the given route, if any.
	   */


	  RelayRouteFragment.prototype.getFragmentForRoute = function getFragmentForRoute(route) {
	    return this._builder(route);
	  };

	  return RelayRouteFragment;
	}();

	module.exports = RelayRouteFragment;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelaySelector
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @public
	 */
	function getSelector(operationVariables, fragment, item) {
	  __webpack_require__(1)(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelaySelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.node.name, JSON.stringify(item));
	  var dataID = __webpack_require__(3).getDataIDForObject(item);
	  var fragmentVariables = __webpack_require__(21).getVariablesForID(item, fragment.node.id);
	  if (dataID != null && fragmentVariables != null) {
	    return {
	      dataID: dataID,
	      node: fragment.node,
	      variables: (0, _extends3['default'])({}, operationVariables, fragmentVariables)
	    };
	  }
	  __webpack_require__(5)(false, 'RelaySelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s`.', fragment.node.name, JSON.stringify(item), fragment.node.name);
	  return null;
	}

	/**
	 * @public
	 */
	function getSelectorList(operationVariables, fragment, items) {
	  var selectors = null;
	  items.forEach(function (item) {
	    var selector = item != null ? getSelector(operationVariables, fragment, item) : null;
	    if (selector != null) {
	      selectors = selectors || [];
	      selectors.push(selector);
	    }
	  });
	  return selectors;
	}

	/**
	 * @public
	 */
	function getSelectorsFromObject(operationVariables, fragments, object) {
	  var selectors = {};
	  __webpack_require__(11)(fragments, function (fragment, key) {
	    var item = object[key];
	    if (item == null) {
	      selectors[key] = item;
	    } else if (fragment.node.metadata && fragment.node.metadata.plural === true) {
	      __webpack_require__(1)(Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', key, JSON.stringify(item), fragment.node.name);
	      selectors[key] = getSelectorList(operationVariables, fragment, item);
	    } else {
	      __webpack_require__(1)(!Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', key, JSON.stringify(item), fragment.node.name);
	      selectors[key] = getSelector(operationVariables, fragment, item);
	    }
	  });
	  return selectors;
	}

	/**
	 * @public
	 *
	 * Given a mapping of keys -> results and a mapping of keys -> fragments,
	 * extracts a mapping of keys -> id(s) of the results.
	 *
	 * Similar to `getSelectorsFromObject()`, this function can be useful in
	 * determining the "identity" of the props passed to a component.
	 */
	function getDataIDsFromObject(fragments, object) {
	  var ids = {};
	  __webpack_require__(11)(fragments, function (fragment, key) {
	    var item = object[key];
	    if (item == null) {
	      ids[key] = item;
	    } else if (fragment.node.metadata && fragment.node.metadata.plural === true) {
	      __webpack_require__(1)(Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', key, JSON.stringify(item), fragment.node.name);
	      ids[key] = getDataIDs(fragment, item);
	    } else {
	      __webpack_require__(1)(!Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', key, JSON.stringify(item), fragment.node.name);
	      ids[key] = getDataID(fragment, item);
	    }
	  });
	  return ids;
	}

	/**
	 * @internal
	 */
	function getDataIDs(fragment, items) {
	  var ids = void 0;
	  items.forEach(function (item) {
	    var id = item != null ? getDataID(fragment, item) : null;
	    if (id != null) {
	      ids = ids || [];
	      ids.push(id);
	    }
	  });
	  return ids || null;
	}

	/**
	 * @internal
	 */
	function getDataID(fragment, item) {
	  __webpack_require__(1)(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelaySelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.node.name, JSON.stringify(item));
	  var dataID = __webpack_require__(3).getDataIDForObject(item);
	  if (dataID != null) {
	    return dataID;
	  }
	  __webpack_require__(5)(false, 'RelaySelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s`.', fragment.node.name, JSON.stringify(item), fragment.node.name);
	  return null;
	}

	/**
	 * @public
	 */
	function getVariablesFromObject(operationVariables, fragments, object) {
	  var variables = {};
	  __webpack_require__(11)(fragments, function (fragment, key) {
	    var item = object[key];
	    if (item == null) {
	      return;
	    } else if (fragment.node.metadata && fragment.node.metadata.plural === true) {
	      __webpack_require__(1)(Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', key, JSON.stringify(item), fragment.node.name);
	      item.forEach(function (value) {
	        if (value != null) {
	          var itemVariables = getVariables(operationVariables, fragment, value);
	          if (itemVariables) {
	            Object.assign(variables, itemVariables);
	          }
	        }
	      });
	    } else {
	      __webpack_require__(1)(!Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', key, JSON.stringify(item), fragment.node.name);
	      var itemVariables = getVariables(operationVariables, fragment, item);
	      if (itemVariables) {
	        Object.assign(variables, itemVariables);
	      }
	    }
	  });
	  return variables;
	}

	/**
	 * @internal
	 */
	function getVariables(operationVariables, fragment, item) {
	  var selector = getSelector(operationVariables, fragment, item);
	  return selector ? selector.variables : null;
	}

	/**
	 * @public
	 */
	function areEqualSelectors(thisSelector, thatSelector) {
	  return thisSelector.dataID === thatSelector.dataID && thisSelector.node === thatSelector.node && __webpack_require__(23)(thisSelector.variables, thatSelector.variables);
	}

	module.exports = {
	  areEqualSelectors: areEqualSelectors,
	  getDataIDsFromObject: getDataIDsFromObject,
	  getSelector: getSelector,
	  getSelectorList: getSelectorList,
	  getSelectorsFromObject: getSelectorsFromObject,
	  getVariablesFromObject: getVariablesFromObject
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayStoreConstants
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * An id used for the root of the graph, corresponding to the "Query" type.
	 * Conceptually, root fields in queries can be viewed as normal fields on a
	 * synthesized root record.
	 */

	var ROOT_ID = 'client:root';

	/**
	 * The type of the root record.
	 */
	var ROOT_TYPE = 'Query';

	module.exports = {
	  ROOT_ID: ROOT_ID,
	  ROOT_TYPE: ROOT_TYPE
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule callsToGraphQL
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @internal
	 *
	 * Convert from plain object `{name, value}` calls to GraphQL call nodes.
	 */
	function callsToGraphQL(calls) {
	  return calls.map(function (_ref) {
	    var name = _ref.name,
	        type = _ref.type,
	        value = _ref.value;

	    var concreteValue = null;
	    if (Array.isArray(value)) {
	      concreteValue = value.map(__webpack_require__(7).createCallValue);
	    } else if (value != null) {
	      concreteValue = __webpack_require__(7).createCallValue(value);
	    }
	    return __webpack_require__(7).createCall(name, concreteValue, type);
	  });
	}

	module.exports = callsToGraphQL;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule generateRQLFieldAlias
	 * 
	 * @format
	 */

	'use strict';

	/* eslint-disable no-bitwise */

	var PREFIX = '_';

	/**
	 * @internal
	 *
	 * Sanitizes a stringified GraphQL field (including any calls and their values)
	 * to produce a valid alias.
	 *
	 * This is used to auto-alias fields in generated queries, so that developers
	 * composing multiple components together don't have to worry about collisions
	 * between components requesting the same fields. (Explicit aliases are only
	 * needed within a single component when it uses the same field multiple times,
	 * in order to differentiate these fields in the props).
	 */
	function generateRQLFieldAlias(input) {
	  // Field names with no calls can be used as aliases without encoding
	  var index = input.indexOf('.');
	  if (index === -1) {
	    return input;
	  }
	  // Unsign crc32 hash so we do not base62 encode a negative number.
	  return PREFIX + input.substr(0, index) + __webpack_require__(47)(__webpack_require__(101)(input) >>> 0);
	}

	module.exports = generateRQLFieldAlias;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getRangeBehavior
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Return the action (prepend/append) to use when adding an item to
	 * the range with the specified calls.
	 *
	 * Ex:
	 * rangeBehaviors: `{'orderby(recent)': 'append'}`
	 * calls: `[{name: 'orderby', value: 'recent'}]`
	 *
	 * Returns `'append'`
	 */
	function getRangeBehavior(rangeBehaviors, calls) {
	  if (typeof rangeBehaviors === 'function') {
	    var rangeFilterCalls = getObjectFromCalls(calls);
	    return rangeBehaviors(rangeFilterCalls);
	  } else {
	    var rangeBehaviorKey = calls.map(__webpack_require__(36)).sort().join('').slice(1);
	    var behavior = rangeBehaviors[rangeBehaviorKey];
	    if (behavior == null) {
	      return null;
	    }
	    __webpack_require__(1)(typeof behavior === 'string', 'getRangeBehavior(): Expected range behavior for key `%s` to be a ' + 'string, got `%s`.', rangeBehaviorKey, behavior);
	    return behavior;
	  }
	}

	/**
	 * Returns an object representation of the rangeFilterCalls that
	 * will be passed to config.rangeBehaviors
	 *
	 * Example:
	 * calls: `[{name: 'orderby', value: 'recent'}]`
	 *
	 * Returns:
	 * `{orderby: 'recent'}`
	*/
	function getObjectFromCalls(calls) {
	  var behaviors = {};
	  calls.forEach(function (call) {
	    behaviors[call.name] = call.value;
	  });
	  return behaviors;
	}

	module.exports = getRangeBehavior;

/***/ },
/* 93 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isRelayContainer
	 * 
	 * @format
	 */

	'use strict';

	function isRelayContainer(component) {
	  return !!(component && component.getFragmentNames && component.getFragment && component.hasFragment && component.hasVariable);
	}

	module.exports = isRelayContainer;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isRelayContext
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Determine if the input is a plain object that matches the `RelayContext`
	 * type defined in `RelayEnvironmentTypes`.
	 */
	function isRelayContext(context) {
	  return typeof context === 'object' && context !== null && !Array.isArray(context) && __webpack_require__(95)(context.environment) && __webpack_require__(96)(context.variables);
	}

	module.exports = isRelayContext;

/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isRelayEnvironment
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Determine if a given value is an object that implements the `Environment`
	 * interface defined in `RelayEnvironmentTypes`.
	 */

	function isRelayEnvironment(environment) {
	  return typeof environment === 'object' && environment !== null &&
	  // TODO: add applyMutation/sendMutation once ready in both cores
	  typeof environment.lookup === 'function' && typeof environment.retain === 'function' && typeof environment.sendQuery === 'function' && typeof environment.streamQuery === 'function' && typeof environment.subscribe === 'function';
	}

	module.exports = isRelayEnvironment;

/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isRelayVariables
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Determine if the object is a plain object that matches the `Variables` type.
	 */

	function isRelayVariables(variables) {
	  return typeof variables === 'object' && variables !== null && !Array.isArray(variables);
	}

	module.exports = isRelayVariables;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule printRelayOSSQuery
	 * 
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(8),
	    TYPENAME = _require.TYPENAME;

	var oneIndent = '';
	var newLine = '';

	if (true) {
	  oneIndent = '  ';
	  newLine = '\n';
	}

	var EMPTY_CHILDREN = ' {' + newLine + oneIndent + TYPENAME + newLine + '}';

	/**
	 * @internal
	 *
	 * `printRelayOSSQuery(query)` returns a string representation of the query. The
	 * supplied `node` must be flattened (and not contain fragments).
	 */
	function printRelayOSSQuery(node) {
	  var fragmentTexts = [];
	  var variableMap = new (__webpack_require__(20))();
	  var printerState = {
	    fragmentCount: 0,
	    fragmentNameByHash: {},
	    fragmentNameByText: {},
	    fragmentTexts: fragmentTexts,
	    variableCount: 0,
	    variableMap: variableMap
	  };
	  var queryText = null;
	  if (node instanceof __webpack_require__(2).Root) {
	    queryText = printRoot(node, printerState);
	  } else if (node instanceof __webpack_require__(2).Operation) {
	    queryText = printOperation(node, printerState);
	  } else if (node instanceof __webpack_require__(2).Fragment) {
	    queryText = printFragment(node, printerState);
	  } else if (node instanceof __webpack_require__(2).OSSQuery) {
	    queryText = printOSSQuery(node, printerState);
	  }
	  __webpack_require__(1)(queryText, 'printRelayOSSQuery(): Unsupported node type, got `%s`.', node);
	  var variables = {};
	  variableMap.forEach(function (variablesForType) {
	    variablesForType.forEach(function (_ref) {
	      var value = _ref.value,
	          variableID = _ref.variableID;

	      variables[variableID] = value;
	    });
	  });

	  return {
	    text: [queryText].concat(fragmentTexts).join(newLine.length ? newLine : ' '),
	    variables: variables
	  };
	}

	/**
	 * Prints a query with (potentially) multiple root fields.
	 */
	function printOSSQuery(query, printerState) {
	  var children = printChildren(query, printerState, oneIndent) || EMPTY_CHILDREN;
	  var directives = printDirectives(query);
	  // Note: variable definitions must be processed *after* traversing children
	  var variableDefinitions = printVariableDefinitions(printerState);
	  return 'query ' + query.getName() + variableDefinitions + directives + children;
	}

	/**
	 * Prints the output of a classic Relay.QL query.
	 */
	function printRoot(node, printerState) {
	  __webpack_require__(1)(!node.getBatchCall(), 'printRelayOSSQuery(): Deferred queries are not supported.');
	  var identifyingArg = node.getIdentifyingArg();
	  var identifyingArgName = identifyingArg && identifyingArg.name || null;
	  var identifyingArgType = identifyingArg && identifyingArg.type || null;
	  var identifyingArgValue = identifyingArg && identifyingArg.value || null;
	  var fieldName = node.getFieldName();
	  if (identifyingArgValue != null) {
	    __webpack_require__(1)(identifyingArgName, 'printRelayOSSQuery(): Expected an argument name for root field `%s`.', fieldName);
	    var rootArgString = printArgument(identifyingArgName, identifyingArgValue, identifyingArgType, printerState);
	    if (rootArgString) {
	      fieldName += '(' + rootArgString + ')';
	    }
	  }
	  // Note: children must be traversed before printing variable definitions
	  var children = printChildren(node, printerState, oneIndent);
	  var queryString = node.getName() + printVariableDefinitions(printerState);
	  fieldName += printDirectives(node);

	  if (children == null) {
	    return 'query ' + queryString + EMPTY_CHILDREN;
	  }

	  return 'query ' + queryString + ' {' + newLine + oneIndent + fieldName + children + newLine + '}';
	}

	function printOperation(node, printerState) {
	  var operationKind = node instanceof __webpack_require__(2).Mutation ? 'mutation' : 'subscription';
	  var call = node.getCall();
	  var inputString = printArgument(node.getCallVariableName(), call.value, node.getInputType(), printerState);
	  __webpack_require__(1)(inputString, 'printRelayOSSQuery(): Expected %s `%s` to have a value for `%s`.', operationKind, node.getName(), node.getCallVariableName());
	  // Note: children must be traversed before printing variable definitions
	  var children = printChildren(node, printerState, oneIndent) || EMPTY_CHILDREN;
	  var operationString = node.getName() + printVariableDefinitions(printerState);
	  var fieldName = call.name + '(' + inputString + ')';

	  return operationKind + ' ' + operationString + ' {' + newLine + oneIndent + fieldName + children + newLine + '}';
	}

	function printVariableDefinitions(_ref2) {
	  var variableMap = _ref2.variableMap;

	  var argStrings = null;
	  variableMap.forEach(function (variablesForType, type) {
	    variablesForType.forEach(function (_ref3) {
	      var variableID = _ref3.variableID;

	      argStrings = argStrings || [];
	      argStrings.push('$' + variableID + ':' + type);
	    });
	  });
	  if (argStrings) {
	    return '(' + argStrings.join(',') + ')';
	  }
	  return '';
	}

	function printNonNullType(type) {
	  if (type[type.length - 1] === '!') {
	    return type;
	  }
	  return type + '!';
	}

	function printFragment(node, printerState) {
	  var directives = printDirectives(node);
	  return 'fragment ' + node.getDebugName() + ' on ' + node.getType() + directives + __webpack_require__(39)(printChildren(node, printerState, ''));
	}

	function printChildren(node, printerState, indent) {
	  var childrenText = [];
	  var children = node.getChildren();
	  var fragments = void 0;
	  for (var ii = 0; ii < children.length; ii++) {
	    var child = children[ii];
	    if (child instanceof __webpack_require__(2).Field) {
	      var fieldText = child.getSchemaName();
	      var fieldCalls = child.getCallsWithValues();
	      if (fieldCalls.length) {
	        fieldText = child.getSerializationKey() + ':' + fieldText;
	        var argTexts = [];
	        for (var jj = 0; jj < fieldCalls.length; jj++) {
	          var _fieldCalls$jj = fieldCalls[jj],
	              name = _fieldCalls$jj.name,
	              _value = _fieldCalls$jj.value;

	          var argText = printArgument(name, _value, child.getCallType(name), printerState);
	          if (argText) {
	            argTexts.push(argText);
	          }
	        }
	        if (argTexts.length) {
	          fieldText += '(' + argTexts.join(',') + ')';
	        }
	      }
	      fieldText += printDirectives(child);
	      if (child.canHaveSubselections()) {
	        var childText = printChildren(child, printerState, indent + oneIndent);
	        if (childText != null) {
	          fieldText += childText;
	          childrenText.push(fieldText);
	        }
	      } else {
	        childrenText.push(fieldText);
	      }
	    } else if (child instanceof __webpack_require__(2).Fragment) {
	      if (child.getChildren().length) {
	        var _fragmentNameByHash = printerState.fragmentNameByHash,
	            _fragmentNameByText = printerState.fragmentNameByText,
	            _fragmentTexts = printerState.fragmentTexts;

	        // Avoid walking fragments if we have printed the same one before.

	        var _fragmentHash = child.getCompositeHash();

	        var fragmentName = void 0;
	        if (_fragmentNameByHash.hasOwnProperty(_fragmentHash)) {
	          fragmentName = _fragmentNameByHash[_fragmentHash];
	        } else {
	          // Avoid reprinting a fragment that is identical to another fragment.
	          var fragmentChildren = __webpack_require__(39)(printChildren(child, printerState, ''));
	          var _fragmentText = child.getType() + printDirectives(child) + fragmentChildren;
	          if (_fragmentNameByText.hasOwnProperty(_fragmentText)) {
	            fragmentName = _fragmentNameByText[_fragmentText];
	          } else {
	            fragmentName = 'F' + __webpack_require__(47)(printerState.fragmentCount++);
	            _fragmentNameByHash[_fragmentHash] = fragmentName;
	            _fragmentNameByText[_fragmentText] = fragmentName;
	            _fragmentTexts.push('fragment ' + fragmentName + ' on ' + _fragmentText);
	          }
	        }
	        if (!fragments || !fragments.hasOwnProperty(fragmentName)) {
	          fragments = fragments || {};
	          fragments[fragmentName] = true;
	          childrenText.push('...' + fragmentName);
	        }
	      }
	    } else {
	      __webpack_require__(1)(false, 'printRelayOSSQuery(): Expected a field or fragment, got `%s`.', child.constructor.name);
	    }
	  }
	  if (!childrenText.length) {
	    return null;
	  }
	  return ' {' + newLine + indent + oneIndent + childrenText.join(',' + newLine + indent + oneIndent) + newLine + indent + '}';
	}

	function printDirectives(node) {
	  var directiveStrings = void 0;
	  node.getDirectives().forEach(function (directive) {
	    var dirString = '@' + directive.name;
	    if (directive.args.length) {
	      dirString += '(' + directive.args.map(printDirective).join(',') + ')';
	    }
	    directiveStrings = directiveStrings || [];
	    directiveStrings.push(dirString);
	  });
	  if (!directiveStrings) {
	    return '';
	  }
	  return ' ' + directiveStrings.join(' ');
	}

	function printDirective(_ref4) {
	  var name = _ref4.name,
	      value = _ref4.value;

	  __webpack_require__(1)(typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string', 'printRelayOSSQuery(): Relay only supports directives with scalar values ' + '(boolean, number, or string), got `%s: %s`.', name, value);
	  return name + ':' + JSON.stringify(value);
	}

	function printArgument(name, value, type, printerState) {
	  if (value == null) {
	    return value;
	  }
	  var stringValue = void 0;
	  if (type != null) {
	    var _variableID = createVariable(name, value, type, printerState);
	    stringValue = '$' + _variableID;
	  } else {
	    stringValue = JSON.stringify(value);
	  }
	  return name + ':' + stringValue;
	}

	function createVariable(name, value, type, printerState) {
	  __webpack_require__(1)(value != null, 'printRelayOSSQuery: Expected a non-null value for variable `%s`.', name);
	  var valueKey = JSON.stringify(value);
	  var nonNullType = printNonNullType(type);
	  var variablesForType = printerState.variableMap.get(nonNullType);
	  if (!variablesForType) {
	    variablesForType = new (__webpack_require__(20))();
	    printerState.variableMap.set(nonNullType, variablesForType);
	  }
	  var existingVariable = variablesForType.get(valueKey);
	  if (existingVariable) {
	    return existingVariable.variableID;
	  } else {
	    var _variableID2 = name + '_' + __webpack_require__(47)(printerState.variableCount++);
	    variablesForType.set(valueKey, {
	      value: value,
	      variableID: _variableID2
	    });
	    return _variableID2;
	  }
	}

	module.exports = __webpack_require__(10).instrument('printRelayQuery', printRelayOSSQuery);

/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule recycleNodesInto
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Recycles subtrees from `prevData` by replacing equal subtrees in `nextData`.
	 */

	function recycleNodesInto(prevData, nextData) {
	  if (prevData === nextData || typeof prevData !== 'object' || !prevData || typeof nextData !== 'object' || !nextData) {
	    return nextData;
	  }
	  var canRecycle = false;

	  // Assign local variables to preserve Flow type refinement.
	  var prevArray = Array.isArray(prevData) ? prevData : null;
	  var nextArray = Array.isArray(nextData) ? nextData : null;
	  if (prevArray && nextArray) {
	    canRecycle = nextArray.reduce(function (wasEqual, nextItem, ii) {
	      var prevValue = prevArray[ii];
	      var nextValue = recycleNodesInto(prevValue, nextItem);
	      if (nextValue !== nextArray[ii]) {
	        nextArray[ii] = nextValue;
	      }
	      return wasEqual && nextArray[ii] === prevArray[ii];
	    }, true) && prevArray.length === nextArray.length;
	  } else if (!prevArray && !nextArray) {
	    // Assign local variables to preserve Flow type refinement.
	    var prevObject = prevData;
	    var nextObject = nextData;
	    var prevKeys = Object.keys(prevObject);
	    var nextKeys = Object.keys(nextObject);
	    canRecycle = nextKeys.reduce(function (wasEqual, key) {
	      var prevValue = prevObject[key];
	      var nextValue = recycleNodesInto(prevValue, nextObject[key]);
	      if (nextValue !== nextObject[key]) {
	        nextObject[key] = nextValue;
	      }
	      return wasEqual && nextObject[key] === prevObject[key];
	    }, true) && prevKeys.length === nextKeys.length;
	  }
	  return canRecycle ? prevData : nextData;
	}

	module.exports = recycleNodesInto;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule relayUnstableBatchedUpdates
	 * 
	 * @format
	 */

	'use strict';

	module.exports = __webpack_require__(154).unstable_batchedUpdates;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule writeRelayQueryPayload
	 * 
	 * @format
	 */

	'use strict';

	var ID = __webpack_require__(8).ID;

	/**
	 * @internal
	 *
	 * Traverses a query and payload in parallel, writing the results into the
	 * store.
	 */


	function writeRelayQueryPayload(writer, query, payload) {
	  var store = writer.getRecordStore();
	  var recordWriter = writer.getRecordWriter();
	  var path = __webpack_require__(9).create(query);

	  __webpack_require__(8).getResultsFromPayload(query, payload).forEach(function (_ref) {
	    var result = _ref.result,
	        rootCallInfo = _ref.rootCallInfo;
	    var storageKey = rootCallInfo.storageKey,
	        identifyingArgKey = rootCallInfo.identifyingArgKey;


	    var dataID = void 0;
	    if (typeof result === 'object' && result && typeof result[ID] === 'string') {
	      dataID = result[ID];
	    }

	    if (dataID == null) {
	      dataID = store.getDataID(storageKey, identifyingArgKey) || __webpack_require__(35)();
	    }

	    recordWriter.putDataID(storageKey, identifyingArgKey, dataID);
	    writer.writePayload(query, dataID, result, path);
	  });
	}

	module.exports = __webpack_require__(10).instrument('writeRelayQueryPayload', writeRelayQueryPayload);

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_101__;

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_102__;

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_103__;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule GraphQLQueryRunner
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(30));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * This is the high-level entry point for sending queries to the GraphQL
	 * endpoint. It provides methods for scheduling queries (`run`), force-fetching
	 * queries (ie. ignoring the cache; `forceFetch`).
	 *
	 * In order to send minimal queries and avoid re-retrieving data,
	 * `GraphQLQueryRunner` maintains a registry of pending (in-flight) queries, and
	 * "subtracts" those from any new queries that callers enqueue.
	 *
	 * @internal
	 */
	var GraphQLQueryRunner = function () {
	  function GraphQLQueryRunner(storeData) {
	    (0, _classCallCheck3['default'])(this, GraphQLQueryRunner);

	    this._storeData = storeData;
	  }

	  /**
	   * Fetches data required to resolve a set of queries. See the `RelayStore`
	   * module for documentation on the callback.
	   */


	  GraphQLQueryRunner.prototype.run = function run(querySet, callback) {
	    var fetchMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __webpack_require__(33).CLIENT;

	    return runQueries(this._storeData, querySet, callback, fetchMode);
	  };

	  /**
	   * Ignores the cache and fetches data required to resolve a set of queries.
	   * Uses the data we get back from the server to overwrite data in the cache.
	   *
	   * Even though we're ignoring the cache, we will still invoke the callback
	   * immediately with `ready: true` if `querySet` can be resolved by the cache.
	   */


	  GraphQLQueryRunner.prototype.forceFetch = function forceFetch(querySet, callback) {
	    var fetchMode = __webpack_require__(33).REFETCH;
	    return runQueries(this._storeData, querySet, callback, fetchMode);
	  };

	  return GraphQLQueryRunner;
	}();

	function hasItems(map) {
	  return !!Object.keys(map).length;
	}

	function splitAndFlattenQueries(storeData, queries) {
	  if (!storeData.getNetworkLayer().supports('defer')) {
	    if (true) {
	      queries.forEach(function (query) {
	        __webpack_require__(5)(!query.hasDeferredDescendant(), 'Relay: Query `%s` contains a deferred fragment (e.g. ' + "`getFragment('foo').defer()`) which is not supported by the " + 'default network layer. This query will be sent without deferral.', query.getName());
	      });
	    }
	    return queries;
	  }

	  var flattenedQueries = [];
	  queries.forEach(function (query) {
	    return flattenedQueries.push.apply(flattenedQueries, (0, _toConsumableArray3['default'])(__webpack_require__(137)(__webpack_require__(142)(query))));
	  });
	  return flattenedQueries;
	}

	function runQueries(storeData, querySet, callback, fetchMode) {
	  var profiler = fetchMode === __webpack_require__(33).REFETCH ? __webpack_require__(10).profile('GraphQLQueryRunner.forceFetch') : __webpack_require__(10).profile('GraphQLQueryRunner.primeCache');

	  var readyState = new (__webpack_require__(126))(callback);

	  var remainingFetchMap = {};
	  var remainingRequiredFetchMap = {};

	  function onResolved(pendingFetch) {
	    var pendingQuery = pendingFetch.getQuery();
	    var pendingQueryID = pendingQuery.getID();
	    delete remainingFetchMap[pendingQueryID];
	    if (!pendingQuery.isDeferred()) {
	      delete remainingRequiredFetchMap[pendingQueryID];
	    }

	    if (hasItems(remainingRequiredFetchMap)) {
	      return;
	    }

	    if (__webpack_require__(153)(remainingFetchMap, function (query) {
	      return query.isResolvable();
	    })) {
	      // The other resolvable query will resolve imminently and call
	      // `readyState.update` instead.
	      return;
	    }

	    if (hasItems(remainingFetchMap)) {
	      readyState.update({
	        done: false,
	        ready: true,
	        stale: false
	      }, [{ type: 'NETWORK_QUERY_RECEIVED_REQUIRED' }]);
	    } else {
	      readyState.update({
	        done: true,
	        ready: true,
	        stale: false
	      }, [{ type: 'NETWORK_QUERY_RECEIVED_ALL' }]);
	    }
	  }

	  function onRejected(pendingFetch, error) {
	    readyState.update({ error: error }, [{ type: 'NETWORK_QUERY_ERROR', error: error }]);
	  }

	  function canResolve(fetch) {
	    return __webpack_require__(132)(storeData.getQueuedStore(), fetch.getQuery());
	  }

	  __webpack_require__(46)(storeData.getTaskQueue().enqueue(function () {
	    var forceIndex = fetchMode === __webpack_require__(33).REFETCH ? __webpack_require__(69)() : null;

	    var queries = [];
	    if (fetchMode === __webpack_require__(33).CLIENT) {
	      __webpack_require__(11)(querySet, function (query) {
	        if (query) {
	          queries.push.apply(queries, (0, _toConsumableArray3['default'])(__webpack_require__(134)(query, storeData.getRecordStore(), storeData.getQueryTracker())));
	        }
	      });
	    } else {
	      __webpack_require__(11)(querySet, function (query) {
	        if (query) {
	          queries.push(query);
	        }
	      });
	    }

	    var flattenedQueries = splitAndFlattenQueries(storeData, queries);

	    var networkEvent = [];
	    if (flattenedQueries.length) {
	      networkEvent.push({ type: 'NETWORK_QUERY_START' });
	    }

	    flattenedQueries.forEach(function (query) {
	      var pendingFetch = storeData.getPendingQueryTracker().add({ query: query, fetchMode: fetchMode, forceIndex: forceIndex, storeData: storeData });
	      var queryID = query.getID();
	      remainingFetchMap[queryID] = pendingFetch;
	      if (!query.isDeferred()) {
	        remainingRequiredFetchMap[queryID] = pendingFetch;
	      }
	      pendingFetch.getResolvedPromise().then(onResolved.bind(null, pendingFetch), onRejected.bind(null, pendingFetch));
	    });

	    if (!hasItems(remainingFetchMap)) {
	      readyState.update({
	        done: true,
	        ready: true
	      }, [].concat(networkEvent, [{ type: 'STORE_FOUND_ALL' }]));
	    } else {
	      if (!hasItems(remainingRequiredFetchMap)) {
	        readyState.update({ ready: true }, [].concat(networkEvent, [{ type: 'STORE_FOUND_REQUIRED' }]));
	      } else {
	        readyState.update({ ready: false }, [].concat(networkEvent, [{ type: 'CACHE_RESTORE_START' }]));

	        __webpack_require__(40)(function () {
	          if (storeData.hasCacheManager()) {
	            var requiredQueryMap = __webpack_require__(38)(remainingRequiredFetchMap, function (value) {
	              return value.getQuery();
	            });
	            storeData.restoreQueriesFromCache(requiredQueryMap, {
	              onSuccess: function onSuccess() {
	                readyState.update({
	                  ready: true,
	                  stale: true
	                }, [{ type: 'CACHE_RESTORED_REQUIRED' }]);
	              },
	              onFailure: function onFailure(error) {
	                readyState.update({
	                  error: error
	                }, [{ type: 'CACHE_RESTORE_FAILED', error: error }]);
	              }
	            });
	          } else {
	            if (__webpack_require__(148)(remainingRequiredFetchMap, canResolve) && hasItems(remainingRequiredFetchMap)) {
	              readyState.update({
	                ready: true,
	                stale: true
	              }, [{ type: 'CACHE_RESTORED_REQUIRED' }]);
	            } else {
	              readyState.update({}, [{ type: 'CACHE_RESTORE_FAILED' }]);
	            }
	          }
	        });
	      }
	    }
	    // Stop profiling when queries have been sent to the network layer.
	    profiler.stop();
	  }));

	  return {
	    abort: function abort() {
	      readyState.update({ aborted: true }, [{ type: 'ABORT' }]);
	    }
	  };
	}

	module.exports = GraphQLQueryRunner;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule GraphQLStoreChangeEmitter
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Asynchronous change emitter for nodes stored in the Relay cache.
	 *
	 * Changes are produced by `RelayStoreData` after writing query and mutation
	 * payloads into the store and consumed by `GraphQLStoreQueryResolver`, which
	 * subscribes to all records that are part of an active query result set.
	 *
	 * @internal
	 */
	var GraphQLStoreChangeEmitter = function () {
	  function GraphQLStoreChangeEmitter(rangeData) {
	    (0, _classCallCheck3['default'])(this, GraphQLStoreChangeEmitter);

	    this._batchUpdate = function (callback) {
	      return callback();
	    };
	    this._executingIDs = {};
	    this._rangeData = rangeData;
	    this._scheduledIDs = null;
	    this._subscribers = [];
	  }

	  GraphQLStoreChangeEmitter.prototype.addListenerForIDs = function addListenerForIDs(ids, callback) {
	    var _this = this;

	    var subscribedIDs = ids.map(function (id) {
	      return _this._getBroadcastID(id);
	    });
	    var index = this._subscribers.length;
	    this._subscribers.push({ subscribedIDs: subscribedIDs, callback: callback });
	    return {
	      remove: function remove() {
	        delete _this._subscribers[index];
	      }
	    };
	  };

	  GraphQLStoreChangeEmitter.prototype.broadcastChangeForID = function broadcastChangeForID(id) {
	    var _this2 = this;

	    var scheduledIDs = this._scheduledIDs;
	    if (scheduledIDs == null) {
	      __webpack_require__(40)(function () {
	        return _this2._processBroadcasts();
	      });
	      scheduledIDs = this._scheduledIDs = {};
	    }
	    // Record index of the last subscriber so we do not later unintentionally
	    // invoke callbacks that were subscribed after this broadcast.
	    scheduledIDs[this._getBroadcastID(id)] = this._subscribers.length - 1;
	  };

	  GraphQLStoreChangeEmitter.prototype.injectBatchingStrategy = function injectBatchingStrategy(batchStrategy) {
	    this._batchUpdate = batchStrategy;
	  };

	  GraphQLStoreChangeEmitter.prototype._processBroadcasts = function _processBroadcasts() {
	    var _this3 = this;

	    if (this._scheduledIDs) {
	      this._executingIDs = this._scheduledIDs;
	      this._scheduledIDs = null;
	      this._batchUpdate(function () {
	        return _this3._processSubscribers();
	      });
	    }
	  };

	  /**
	   * Exposed for profiling reasons.
	   * @private
	   */


	  GraphQLStoreChangeEmitter.prototype._processSubscribers = function _processSubscribers() {
	    var _this4 = this;

	    this._subscribers.forEach(function (subscriber, subscriberIndex) {
	      return _this4._processSubscriber(subscriber, subscriberIndex);
	    });
	  };

	  GraphQLStoreChangeEmitter.prototype._processSubscriber = function _processSubscriber(_ref, subscriberIndex) {
	    var subscribedIDs = _ref.subscribedIDs,
	        callback = _ref.callback;

	    for (var broadcastID in this._executingIDs) {
	      if (this._executingIDs.hasOwnProperty(broadcastID)) {
	        var broadcastIndex = this._executingIDs[broadcastID];
	        if (broadcastIndex < subscriberIndex) {
	          // Callback was subscribed after this particular broadcast.
	          break;
	        }
	        if (subscribedIDs.indexOf(broadcastID) >= 0) {
	          __webpack_require__(55).applyWithGuard(callback, null, null, null, 'GraphQLStoreChangeEmitter');
	          break;
	        }
	      }
	    }
	  };

	  /**
	   * Ranges publish events for the entire range, not the specific view of that
	   * range. For example, if "client:1" is a range, the event is on "client:1",
	   * not "client:1_first(5)".
	   */


	  GraphQLStoreChangeEmitter.prototype._getBroadcastID = function _getBroadcastID(id) {
	    return this._rangeData.getCanonicalClientID(id);
	  };

	  return GraphQLStoreChangeEmitter;
	}();

	module.exports = GraphQLStoreChangeEmitter;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule GraphQLStoreRangeUtils
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Utilities used by GraphQLStore for storing ranges
	 *
	 * GraphQLStore stores all of the parts of a range in a single GraphQLRange
	 * object. For example, `node(4808495){friends.first(5){id,name}}` might be
	 * stored similar to this (pseudo-code):
	 *
	 *   "4808495": {
	 *     "friends": { __dataID__: "client:1" }
	 *   },
	 *   "client:1": {
	 *     "nodes": new GraphQLRange(...) // all friends, not just the first 5
	 *   }
	 *
	 * and when that query is run, the store would return a result pointing at
	 * a specific part of the range, encoded into the data ID:
	 *
	 * {
	 *   "4808495": {
	 *     "friends": { __dataID__: "client:1_first(5)" }
	 *   }
	 * }
	 *
	 * That "client:1_first(5)" ID can then be used to query for the first 5
	 * friends.
	 *
	 * @internal
	 */
	var GraphQLStoreRangeUtils = function () {
	  function GraphQLStoreRangeUtils() {
	    (0, _classCallCheck3['default'])(this, GraphQLStoreRangeUtils);

	    this._rangeData = {};
	    this._rangeDataKeyMap = {};
	  }

	  /**
	   * Returns a token that can be parsed using parseRangeClientID to recover
	   * the attributes needed to retrieve the corresponding items from a
	   * GraphQLRange.
	   *
	   * @param {array<*>} calls
	   * @param {object} callValues
	   * @param {string} dataID
	   * @return {string}
	   */


	  GraphQLStoreRangeUtils.prototype.getClientIDForRangeWithID = function getClientIDForRangeWithID(calls, callValues, dataID) {
	    var callsAsString = __webpack_require__(34)(calls, callValues).map(function (call) {
	      return __webpack_require__(36)(call).substring(1);
	    }).join(',');
	    var key = dataID + '_' + callsAsString;
	    var edge = this._rangeData[key];
	    if (!edge) {
	      this._rangeData[key] = {
	        dataID: dataID,
	        calls: calls,
	        callValues: callValues
	      };
	      var rangeDataKeys = this._rangeDataKeyMap[dataID];
	      if (!rangeDataKeys) {
	        this._rangeDataKeyMap[dataID] = rangeDataKeys = [];
	      }
	      rangeDataKeys.push(key);
	    }
	    return key;
	  };

	  /**
	   * Parses an ID back into its data ID and calls
	   *
	   * @param {string} rangeSpecificClientID
	   * @return {?object}
	   */


	  GraphQLStoreRangeUtils.prototype.parseRangeClientID = function parseRangeClientID(rangeSpecificClientID) {
	    return this._rangeData[rangeSpecificClientID] || null;
	  };

	  /**
	   * If given the client id for a range view, returns the canonical client id
	   * for the entire range. e.g. converts "client:1_first(5)" to "client:1".
	   * Otherwise returns the input.
	   *
	   * @param {string} dataID
	   * @return {string}
	   */


	  GraphQLStoreRangeUtils.prototype.getCanonicalClientID = function getCanonicalClientID(dataID) {
	    return this._rangeData[dataID] ? this._rangeData[dataID].dataID : dataID;
	  };

	  GraphQLStoreRangeUtils.prototype.removeRecord = function removeRecord(dataID) {
	    var _this = this;

	    var rangeDataKeys = this._rangeDataKeyMap[dataID];
	    if (rangeDataKeys) {
	      rangeDataKeys.forEach(function (key) {
	        delete _this._rangeData[key];
	      });
	      delete this._rangeDataKeyMap[dataID];
	    }
	  };

	  return GraphQLStoreRangeUtils;
	}();

	module.exports = GraphQLStoreRangeUtils;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayCacheProcessor
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * An asynchronous traversal that knows how to read roots and nodes from a
	 * `CacheManager`. Root reads yield the `dataID` of the root, if found.
	 * Node reads yield the `Record` associated with a supplied `dataID`, if found.
	 *
	 * Visitors: Ensure that only one read is ever in flight for a given root/node.
	 *           Maintain a list of states to process after each read completes.
	 * Queuers:  Perform the work of kicking off a root/node read.
	 * Handlers: Subclasses of `RelayCacheProcessor` can implement this method to
	 *           actually perform work after a root/node read completes.
	 */
	var RelayCacheProcessor = function (_RelayQueryVisitor) {
	  (0, _inherits3['default'])(RelayCacheProcessor, _RelayQueryVisitor);

	  function RelayCacheProcessor(cacheManager, callbacks) {
	    (0, _classCallCheck3['default'])(this, RelayCacheProcessor);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryVisitor.call(this));

	    _this._cacheManager = cacheManager;
	    _this._callbacks = callbacks;
	    _this._pendingNextStates = {};
	    _this._pendingRoots = {};
	    _this._state = 'PENDING';
	    return _this;
	  }

	  RelayCacheProcessor.prototype.abort = function abort() {
	    __webpack_require__(5)(this._state === 'LOADING', 'RelayCacheProcessor: Can only abort an in-progress read operation.');
	    this._state = 'COMPLETED';
	  };

	  RelayCacheProcessor.prototype.handleFailure = function handleFailure(error) {
	    __webpack_require__(1)(this._state !== 'COMPLETED', 'RelayStoreReader: Query set already failed/completed.');
	    this._state = 'COMPLETED';
	    this._callbacks.onFailure && this._callbacks.onFailure(error);
	  };

	  RelayCacheProcessor.prototype.handleNodeVisited = function handleNodeVisited(node, dataID, record, nextState) {
	    return;
	  };

	  RelayCacheProcessor.prototype.handleIdentifiedRootVisited = function handleIdentifiedRootVisited(query, dataID, identifyingArgKey, nextState) {
	    return;
	  };

	  RelayCacheProcessor.prototype.process = function process(processorFn) {
	    __webpack_require__(1)(this._state === 'PENDING', 'RelayCacheProcessor: A `read` is in progress.');
	    this._state = 'LOADING';
	    processorFn();
	    if (this._isDone()) {
	      this._handleSuccess();
	    }
	  };

	  RelayCacheProcessor.prototype.queueIdentifiedRoot = function queueIdentifiedRoot(query, identifyingArgKey, nextState) {
	    var _this2 = this;

	    var storageKey = query.getStorageKey();
	    this._cacheManager.readRootCall(storageKey, identifyingArgKey || '', function (error, dataID) {
	      if (_this2._state === 'COMPLETED') {
	        return;
	      }
	      if (error) {
	        _this2.handleFailure(error);
	        return;
	      }
	      _this2.handleIdentifiedRootVisited(query, dataID, identifyingArgKey, nextState);
	      var rootKey = _this2._getRootKey(storageKey, identifyingArgKey);
	      var pendingRoots = _this2._pendingRoots[rootKey];
	      delete _this2._pendingRoots[rootKey];
	      for (var ii = 0; ii < pendingRoots.length; ii++) {
	        if (_this2._state === 'COMPLETED') {
	          return;
	        }
	        _this2.traverse(pendingRoots[ii], nextState);
	      }
	      if (_this2._isDone()) {
	        _this2._handleSuccess();
	      }
	    });
	  };

	  RelayCacheProcessor.prototype.queueNode = function queueNode(node, dataID, nextState) {
	    var _this3 = this;

	    this._cacheManager.readNode(dataID, function (error, record) {
	      if (_this3._state === 'COMPLETED') {
	        return;
	      }
	      if (error) {
	        _this3.handleFailure(error);
	        return;
	      }
	      _this3.handleNodeVisited(node, dataID, record, nextState);
	      var pendingNextStates = _this3._pendingNextStates[dataID];
	      delete _this3._pendingNextStates[dataID];
	      for (var ii = 0; ii < pendingNextStates.length; ii++) {
	        if (_this3._state === 'COMPLETED') {
	          return;
	        }
	        _this3.traverse(node, pendingNextStates[ii]);
	      }
	      if (_this3._isDone()) {
	        _this3._handleSuccess();
	      }
	    });
	  };

	  RelayCacheProcessor.prototype.visitIdentifiedRoot = function visitIdentifiedRoot(query, identifyingArgKey, nextState) {
	    var storageKey = query.getStorageKey();
	    var rootKey = this._getRootKey(storageKey, identifyingArgKey);
	    if (this._pendingRoots.hasOwnProperty(rootKey)) {
	      this._pendingRoots[rootKey].push(query);
	    } else {
	      this._pendingRoots[rootKey] = [query];
	      this.queueIdentifiedRoot(query, identifyingArgKey, nextState);
	    }
	  };

	  RelayCacheProcessor.prototype.visitNode = function visitNode(node, dataID, nextState) {
	    if (this._pendingNextStates.hasOwnProperty(dataID)) {
	      this._pendingNextStates[dataID].push(nextState);
	    } else {
	      this._pendingNextStates[dataID] = [nextState];
	      this.queueNode(node, dataID, nextState);
	    }
	  };

	  RelayCacheProcessor.prototype.visitRoot = function visitRoot(query, nextState) {
	    var _this4 = this;

	    __webpack_require__(28)(query, function (_ref) {
	      var identifyingArgKey = _ref.identifyingArgKey;

	      if (_this4._state === 'COMPLETED') {
	        return;
	      }
	      _this4.visitIdentifiedRoot(query, identifyingArgKey, nextState);
	    });
	  };

	  RelayCacheProcessor.prototype._getRootKey = function _getRootKey(storageKey, identifyingArgKey) {
	    return storageKey + '*' + (identifyingArgKey || '');
	  };

	  RelayCacheProcessor.prototype._handleSuccess = function _handleSuccess() {
	    __webpack_require__(1)(this._state !== 'COMPLETED', 'RelayStoreReader: Query set already failed/completed.');
	    this._state = 'COMPLETED';
	    this._callbacks.onSuccess && this._callbacks.onSuccess();
	  };

	  RelayCacheProcessor.prototype._isDone = function _isDone() {
	    return __webpack_require__(103)(this._pendingRoots) && __webpack_require__(103)(this._pendingNextStates) && this._state === 'LOADING';
	  };

	  return RelayCacheProcessor;
	}(__webpack_require__(26));

	module.exports = RelayCacheProcessor;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayClassicCore
	 * 
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(114),
	    getClassicFragment = _require.getClassicFragment,
	    getClassicOperation = _require.getClassicOperation;

	var _require2 = __webpack_require__(121),
	    createOperationSelector = _require2.createOperationSelector;

	var _require3 = __webpack_require__(88),
	    areEqualSelectors = _require3.areEqualSelectors,
	    getDataIDsFromObject = _require3.getDataIDsFromObject,
	    getSelector = _require3.getSelector,
	    getSelectorList = _require3.getSelectorList,
	    getSelectorsFromObject = _require3.getSelectorsFromObject,
	    getVariablesFromObject = _require3.getVariablesFromObject;

	function createFragmentSpecResolver(context, containerName, fragments, props, callback) {
	  return new (__webpack_require__(112))(context, fragments, props, callback);
	}

	/**
	 * The classic implementation of the `RelayCore` interface defined in
	 * `RelayEnvironmentTypes`.
	 */
	module.exports = {
	  areEqualSelectors: areEqualSelectors,
	  createFragmentSpecResolver: createFragmentSpecResolver,
	  createOperationSelector: createOperationSelector,
	  getDataIDsFromObject: getDataIDsFromObject,
	  getFragment: getClassicFragment,
	  getOperation: getClassicOperation,
	  getSelector: getSelector,
	  getSelectorList: getSelectorList,
	  getSelectorsFromObject: getSelectorsFromObject,
	  getVariablesFromObject: getVariablesFromObject
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayContainer
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(111),
	    getComponentName = _require.getComponentName,
	    getReactComponent = _require.getReactComponent;

	var containerContextTypes = {
	  relay: __webpack_require__(24).ClassicRelay,
	  route: __webpack_require__(24).QueryConfig.isRequired,
	  useFakeData: __webpack_require__(17).bool
	};

	/**
	 * @public
	 *
	 * RelayContainer is a higher order component that provides the ability to:
	 *
	 *  - Encode data dependencies using query fragments that are parameterized by
	 *    routes and variables.
	 *  - Manipulate variables via methods on `this.props.relay`.
	 *  - Automatically subscribe to data changes.
	 *  - Avoid unnecessary updates if data is unchanged.
	 *  - Propagate the `route` via context (available on `this.props.relay`).
	 *
	 */
	function createContainerComponent(Component, spec) {
	  var ComponentClass = getReactComponent(Component);
	  var componentName = getComponentName(Component);
	  var containerName = getContainerName(Component);
	  var fragments = spec.fragments;
	  var fragmentNames = Object.keys(fragments);
	  var initialVariables = spec.initialVariables || {};
	  var prepareVariables = spec.prepareVariables;
	  var specShouldComponentUpdate = spec.shouldComponentUpdate;

	  var RelayContainer = function (_React$Component) {
	    (0, _inherits3['default'])(RelayContainer, _React$Component);

	    function RelayContainer(props, context) {
	      (0, _classCallCheck3['default'])(this, RelayContainer);

	      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

	      var relay = context.relay,
	          route = context.route;

	      __webpack_require__(1)(__webpack_require__(139)(relay), 'RelayContainer: `%s` was rendered with invalid Relay context `%s`. ' + 'Make sure the `relay` property on the React context conforms to the ' + '`RelayEnvironment` interface.', containerName, relay);
	      __webpack_require__(1)(route && typeof route.name === 'string', 'RelayContainer: `%s` was rendered without a valid route. Make sure ' + 'the route is valid, and make sure that it is correctly set on the ' + "parent component's context (e.g. using <RelayRootContainer>).", containerName);

	      _this._didShowFakeDataWarning = false;
	      _this._fragmentPointers = {};
	      _this._hasStaleQueryData = false;
	      _this._fragmentResolvers = {};

	      _this.mounted = true;
	      _this.pending = null;
	      _this.state = {
	        queryData: {},
	        rawVariables: {},
	        relayProp: {
	          applyUpdate: _this.context.relay.environment.applyUpdate,
	          commitUpdate: _this.context.relay.environment.commitUpdate,
	          environment: _this.context.relay.environment,
	          forceFetch: _this.forceFetch.bind(_this),
	          getPendingTransactions: _this.getPendingTransactions.bind(_this),
	          hasFragmentData: _this.hasFragmentData.bind(_this),
	          hasOptimisticUpdate: _this.hasOptimisticUpdate.bind(_this),
	          hasPartialData: _this.hasPartialData.bind(_this),
	          pendingVariables: null,
	          route: route,
	          setVariables: _this.setVariables.bind(_this),
	          variables: {}
	        }
	      };
	      return _this;
	    }

	    /**
	     * Requests an update to variables. This primes the cache for the new
	     * variables and notifies the caller of changes via the callback. As data
	     * becomes ready, the component will be updated.
	     */


	    RelayContainer.prototype.setVariables = function setVariables(partialVariables, callback) {
	      this._runVariables(partialVariables, callback, false);
	    };

	    /**
	     * Requests an update to variables. Unlike `setVariables`, this forces data
	     * to be fetched and written for the supplied variables. Any data that
	     * previously satisfied the queries will be overwritten.
	     */


	    RelayContainer.prototype.forceFetch = function forceFetch(partialVariables, callback) {
	      this._runVariables(partialVariables, callback, true);
	    };

	    /**
	     * Creates a query for each of the component's fragments using the given
	     * variables, and fragment pointers that can be used to resolve the results
	     * of those queries. The fragment pointers are of the same shape as the
	     * `_fragmentPointers` property.
	     */


	    RelayContainer.prototype._createQuerySetAndFragmentPointers = function _createQuerySetAndFragmentPointers(variables) {
	      var _this2 = this;

	      var fragmentPointers = {};
	      var querySet = {};
	      var storeData = this.context.relay.environment.getStoreData();
	      fragmentNames.forEach(function (fragmentName) {
	        var fragment = getFragment(fragmentName, _this2.context.route, variables);
	        var queryData = _this2.state.queryData[fragmentName];
	        if (!fragment || queryData == null) {
	          return;
	        }

	        var fragmentPointer = void 0;
	        if (fragment.isPlural()) {
	          __webpack_require__(1)(Array.isArray(queryData), 'RelayContainer: Invalid queryData for `%s`, expected an array ' + 'of records because the corresponding fragment is plural.', fragmentName);
	          var _dataIDs = [];
	          queryData.forEach(function (data, ii) {
	            /* $FlowFixMe(>=0.36.0) Flow error detected
	             * during the deploy of Flow v0.36.0. To see the error, remove this
	             * comment and run Flow */
	            var dataID = __webpack_require__(3).getDataIDForObject(data);
	            if (dataID) {
	              querySet[fragmentName + ii] = storeData.buildFragmentQueryForDataID(fragment, dataID);
	              _dataIDs.push(dataID);
	            }
	          });
	          if (_dataIDs.length) {
	            fragmentPointer = { fragment: fragment, dataIDs: _dataIDs };
	          }
	        } else {
	          /* $FlowFixMe(>=0.19.0) - queryData is mixed but getID expects Object
	           */
	          var dataID = __webpack_require__(3).getDataIDForObject(queryData);
	          if (dataID) {
	            fragmentPointer = {
	              fragment: fragment,
	              dataIDs: dataID
	            };
	            querySet[fragmentName] = storeData.buildFragmentQueryForDataID(fragment, dataID);
	          }
	        }

	        fragmentPointers[fragmentName] = fragmentPointer;
	      });
	      return { fragmentPointers: fragmentPointers, querySet: querySet };
	    };

	    RelayContainer.prototype._runVariables = function _runVariables(partialVariables, callback, forceFetch) {
	      var _this3 = this;

	      validateVariables(initialVariables, partialVariables);
	      var lastVariables = this.state.rawVariables;
	      var prevVariables = this.pending ? this.pending.rawVariables : lastVariables;
	      var rawVariables = mergeVariables(prevVariables, partialVariables);
	      var nextVariables = rawVariables;
	      if (prepareVariables) {
	        var metaRoute = __webpack_require__(12).get(this.context.route.name);
	        nextVariables = prepareVariables(rawVariables, metaRoute);
	        validateVariables(initialVariables, nextVariables);
	      }

	      this.pending && this.pending.request.abort();

	      var completeProfiler = __webpack_require__(10).profile('RelayContainer.setVariables', {
	        containerName: containerName,
	        nextVariables: nextVariables
	      });

	      // Because the pending fetch is always canceled, we need to build a new
	      // set of queries that includes the updated variables and initiate a new
	      // fetch.

	      var _createQuerySetAndFra = this._createQuerySetAndFragmentPointers(nextVariables),
	          querySet = _createQuerySetAndFra.querySet,
	          fragmentPointers = _createQuerySetAndFra.fragmentPointers;

	      var onReadyStateChange = __webpack_require__(55).guard(function (readyState) {
	        var aborted = readyState.aborted,
	            done = readyState.done,
	            error = readyState.error,
	            ready = readyState.ready;

	        var isComplete = aborted || done || error;
	        if (isComplete && _this3.pending === current) {
	          _this3.pending = null;
	        }
	        var partialState = void 0;
	        if (ready) {
	          // Only update query data if variables changed. Otherwise, `querySet`
	          // and `fragmentPointers` will be empty, and `nextVariables` will be
	          // equal to `lastVariables`.
	          _this3._fragmentPointers = fragmentPointers;
	          _this3._updateFragmentResolvers(_this3.context.relay.environment);
	          var _queryData = _this3._getQueryData(_this3.props);
	          partialState = {
	            queryData: _queryData,
	            rawVariables: rawVariables,
	            relayProp: (0, _extends3['default'])({}, _this3.state.relayProp, {
	              pendingVariables: null,
	              variables: nextVariables
	            })
	          };
	        } else {
	          partialState = {
	            relayProp: (0, _extends3['default'])({}, _this3.state.relayProp, {
	              pendingVariables: isComplete ? null : nextVariables
	            })
	          };
	        }
	        var mounted = _this3.mounted;
	        if (mounted) {
	          var updateProfiler = __webpack_require__(10).profile('RelayContainer.update');
	          __webpack_require__(99)(function () {
	            _this3.setState(partialState, function () {
	              updateProfiler.stop();
	              if (isComplete) {
	                completeProfiler.stop();
	              }
	            });
	            if (callback) {
	              callback.call(
	              // eslint-disable-next-line react/no-string-refs
	              _this3.refs.component || null, (0, _extends3['default'])({}, readyState, { mounted: mounted }));
	            }
	          });
	        } else {
	          if (callback) {
	            callback((0, _extends3['default'])({}, readyState, { mounted: mounted }));
	          }
	          if (isComplete) {
	            completeProfiler.stop();
	          }
	        }
	      }, 'RelayContainer.onReadyStateChange');

	      var current = {
	        rawVariables: rawVariables,
	        request: forceFetch ? this.context.relay.environment.forceFetch(querySet, onReadyStateChange) : this.context.relay.environment.primeCache(querySet, onReadyStateChange)
	      };
	      this.pending = current;
	    };

	    /**
	     * Determine if the supplied record reflects an optimistic update.
	     */


	    RelayContainer.prototype.hasOptimisticUpdate = function hasOptimisticUpdate(record) {
	      var dataID = __webpack_require__(3).getDataIDForObject(record);
	      __webpack_require__(1)(dataID != null, 'RelayContainer.hasOptimisticUpdate(): Expected a record in `%s`.', componentName);
	      return this.context.relay.environment.getStoreData().hasOptimisticUpdate(dataID);
	    };

	    /**
	     * Returns the pending mutation transactions affecting the given record.
	     */


	    RelayContainer.prototype.getPendingTransactions = function getPendingTransactions(record) {
	      var dataID = __webpack_require__(3).getDataIDForObject(record);
	      __webpack_require__(1)(dataID != null, 'RelayContainer.getPendingTransactions(): Expected a record in `%s`.', componentName);
	      var storeData = this.context.relay.environment.getStoreData();
	      var mutationIDs = storeData.getClientMutationIDs(dataID);
	      if (!mutationIDs) {
	        return null;
	      }
	      var mutationQueue = storeData.getMutationQueue();
	      return mutationIDs.map(function (id) {
	        return mutationQueue.getTransaction(id);
	      });
	    };

	    /**
	     * Checks if data for a deferred fragment is ready. This method should
	     * *always* be called before rendering a child component whose fragment was
	     * deferred (unless that child can handle null or missing data).
	     */


	    RelayContainer.prototype.hasFragmentData = function hasFragmentData(fragmentReference, record) {
	      // convert builder -> fragment in order to get the fragment's name
	      var dataID = __webpack_require__(3).getDataIDForObject(record);
	      __webpack_require__(1)(dataID != null, 'RelayContainer.hasFragmentData(): Second argument is not a valid ' + 'record. For `<%s X={this.props.X} />`, use ' + "`this.props.hasFragmentData(%s.getFragment('X'), this.props.X)`.", componentName, componentName);
	      var fragment = getDeferredFragment(fragmentReference, this.context, this.state.relayProp.variables);
	      __webpack_require__(1)(fragment instanceof __webpack_require__(2).Fragment, 'RelayContainer.hasFragmentData(): First argument is not a valid ' + 'fragment. Ensure that there are no failing `if` or `unless` ' + 'conditions.');
	      var storeData = this.context.relay.environment.getStoreData();
	      return storeData.getCachedStore().hasFragmentData(dataID, fragment.getCompositeHash());
	    };

	    /**
	     * Determine if the supplied record might be missing data.
	     */


	    RelayContainer.prototype.hasPartialData = function hasPartialData(record) {
	      return __webpack_require__(63).isPartialStatus(record[__webpack_require__(3).MetadataKey.STATUS]);
	    };

	    RelayContainer.prototype.componentWillMount = function componentWillMount() {
	      if (this.context.route.useMockData) {
	        return;
	      }
	      this.setState(this._initialize(this.props, this.context, initialVariables, null));
	    };

	    RelayContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, maybeNextContext) {
	      var _this4 = this;

	      var nextContext = maybeNextContext;
	      __webpack_require__(1)(nextContext, 'RelayContainer: Expected a context to be set.');
	      if (nextContext.route.useMockData) {
	        return;
	      }
	      this.setState(function (state) {
	        if (_this4.context.relay !== nextContext.relay) {
	          _this4._cleanup();
	        }
	        return _this4._initialize(nextProps, nextContext, resetPropOverridesForVariables(spec, nextProps, state.rawVariables), state.rawVariables);
	      });
	    };

	    RelayContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	      this._cleanup();
	      this.mounted = false;
	    };

	    RelayContainer.prototype._initialize = function _initialize(props, context, propVariables, prevVariables) {
	      var rawVariables = getVariablesWithPropOverrides(spec, props, propVariables);
	      var nextVariables = rawVariables;
	      if (prepareVariables) {
	        // TODO: Allow routes without names, #7856965.
	        var metaRoute = __webpack_require__(12).get(context.route.name);
	        nextVariables = prepareVariables(rawVariables, metaRoute);
	        validateVariables(initialVariables, nextVariables);
	      }
	      this._updateFragmentPointers(props, context, nextVariables, prevVariables);
	      this._updateFragmentResolvers(context.relay.environment);
	      return {
	        queryData: this._getQueryData(props),
	        rawVariables: rawVariables,
	        relayProp: this.state.relayProp.route === context.route && __webpack_require__(75)(this.state.relayProp.variables, nextVariables) ? this.state.relayProp : (0, _extends3['default'])({}, this.state.relayProp, {
	          route: context.route,
	          variables: nextVariables
	        })
	      };
	    };

	    RelayContainer.prototype._cleanup = function _cleanup() {
	      // A guarded error in mounting might prevent initialization of resolvers.
	      if (this._fragmentResolvers) {
	        __webpack_require__(11)(this._fragmentResolvers, function (fragmentResolver) {
	          return fragmentResolver && fragmentResolver.dispose();
	        });
	      }

	      this._fragmentPointers = {};
	      this._fragmentResolvers = {};

	      var pending = this.pending;
	      if (pending) {
	        pending.request.abort();
	        this.pending = null;
	      }
	    };

	    RelayContainer.prototype._updateFragmentResolvers = function _updateFragmentResolvers(environment) {
	      var _this5 = this;

	      var fragmentPointers = this._fragmentPointers;
	      var fragmentResolvers = this._fragmentResolvers;
	      fragmentNames.forEach(function (fragmentName) {
	        var fragmentPointer = fragmentPointers[fragmentName];
	        var fragmentResolver = fragmentResolvers[fragmentName];
	        if (!fragmentPointer) {
	          if (fragmentResolver) {
	            fragmentResolver.dispose();
	            fragmentResolvers[fragmentName] = null;
	          }
	        } else if (!fragmentResolver) {
	          fragmentResolver = environment.getFragmentResolver(fragmentPointer.fragment, _this5._handleFragmentDataUpdate.bind(_this5));
	          fragmentResolvers[fragmentName] = fragmentResolver;
	        }
	      });
	    };

	    RelayContainer.prototype._handleFragmentDataUpdate = function _handleFragmentDataUpdate() {
	      if (!this.mounted) {
	        return;
	      }
	      var queryData = this._getQueryData(this.props);
	      var updateProfiler = __webpack_require__(10).profile('RelayContainer.handleFragmentDataUpdate');
	      this.setState({ queryData: queryData }, updateProfiler.stop);
	    };

	    RelayContainer.prototype._updateFragmentPointers = function _updateFragmentPointers(props, context, variables, prevVariables) {
	      var _this6 = this;

	      var fragmentPointers = this._fragmentPointers;
	      fragmentNames.forEach(function (fragmentName) {
	        var propValue = props[fragmentName];
	        __webpack_require__(5)(propValue !== undefined, 'RelayContainer: Expected prop `%s` to be supplied to `%s`, but ' + 'got `undefined`. Pass an explicit `null` if this is intentional.', fragmentName, componentName);
	        if (propValue == null) {
	          fragmentPointers[fragmentName] = null;
	          return;
	        }
	        // handle invalid prop values using a warning at first.
	        if (typeof propValue !== 'object') {
	          __webpack_require__(5)(false, 'RelayContainer: Expected prop `%s` supplied to `%s` to be an ' + 'object, got `%s`.', fragmentName, componentName, propValue);
	          fragmentPointers[fragmentName] = null;
	          return;
	        }
	        var fragment = getFragment(fragmentName, context.route, variables);
	        var dataIDOrIDs = void 0;

	        if (fragment.isPlural()) {
	          // Plural fragments require the prop value to be an array of fragment
	          // pointers, which are merged into a single fragment pointer to pass
	          // to the query resolver `resolve`.
	          __webpack_require__(1)(Array.isArray(propValue), 'RelayContainer: Invalid prop `%s` supplied to `%s`, expected an ' + 'array of records because the corresponding fragment has ' + '`@relay(plural: true)`.', fragmentName, componentName);
	          if (!propValue.length) {
	            // Nothing to observe: pass the empty array through
	            fragmentPointers[fragmentName] = null;
	            return;
	          }
	          var _dataIDs2 = null;
	          propValue.forEach(function (item, ii) {
	            if (typeof item === 'object' && item != null) {
	              if (__webpack_require__(21).hasConcreteFragment(item, fragment)) {
	                var dataID = __webpack_require__(3).getDataIDForObject(item);
	                if (dataID) {
	                  _dataIDs2 = _dataIDs2 || [];
	                  _dataIDs2.push(dataID);
	                }
	              }
	              if (true) {
	                if (!context.route.useMockData && !context.useFakeData && !_this6._didShowFakeDataWarning) {
	                  var isValid = validateFragmentProp(componentName, fragmentName, fragment, item, prevVariables);
	                  _this6._didShowFakeDataWarning = !isValid;
	                }
	              }
	            }
	          });
	          if (_dataIDs2) {
	            __webpack_require__(1)(_dataIDs2.length === propValue.length, 'RelayContainer: Invalid prop `%s` supplied to `%s`. Some ' + 'array items contain data fetched by Relay and some items ' + 'contain null/mock data.', fragmentName, componentName);
	          }
	          dataIDOrIDs = _dataIDs2;
	        } else {
	          __webpack_require__(1)(!Array.isArray(propValue), 'RelayContainer: Invalid prop `%s` supplied to `%s`, expected a ' + 'single record because the corresponding fragment is not plural ' + '(i.e. does not have `@relay(plural: true)`).', fragmentName, componentName);
	          if (__webpack_require__(21).hasConcreteFragment(propValue, fragment)) {
	            dataIDOrIDs = __webpack_require__(3).getDataIDForObject(propValue);
	          }
	          if (true) {
	            if (!context.route.useMockData && !context.useFakeData && !_this6._didShowFakeDataWarning) {
	              var isValid = validateFragmentProp(componentName, fragmentName, fragment, propValue, prevVariables);
	              _this6._didShowFakeDataWarning = !isValid;
	            }
	          }
	        }
	        fragmentPointers[fragmentName] = dataIDOrIDs ? { fragment: fragment, dataIDs: dataIDOrIDs } : null;
	      });
	      if (true) {
	        // If a fragment pointer is null, warn if it was found on another prop.
	        fragmentNames.forEach(function (fragmentName) {
	          if (fragmentPointers[fragmentName]) {
	            return;
	          }
	          var fragment = getFragment(fragmentName, context.route, variables);
	          Object.keys(props).forEach(function (propName) {
	            __webpack_require__(5)(fragmentPointers[propName] || !__webpack_require__(3).isRecord(props[propName]) || typeof props[propName] !== 'object' || props[propName] == null || !__webpack_require__(21).hasFragment(props[propName], fragment), 'RelayContainer: Expected record data for prop `%s` on `%s`, ' + 'but it was instead on prop `%s`. Did you misspell a prop or ' + 'pass record data into the wrong prop?', fragmentName, componentName, propName);
	          });
	        });
	      }
	    };

	    RelayContainer.prototype._getQueryData = function _getQueryData(props) {
	      var _this7 = this;

	      var queryData = {};
	      var fragmentPointers = this._fragmentPointers;
	      __webpack_require__(11)(this._fragmentResolvers, function (fragmentResolver, propName) {
	        var propValue = props[propName];
	        var fragmentPointer = fragmentPointers[propName];

	        if (!propValue || !fragmentPointer) {
	          // Clear any subscriptions since there is no data.
	          fragmentResolver && fragmentResolver.dispose();
	          // Allow mock data to pass through without modification.
	          queryData[propName] = propValue;
	        } else {
	          queryData[propName] = fragmentResolver.resolve(fragmentPointer.fragment, fragmentPointer.dataIDs);
	        }
	        if (_this7.state.queryData.hasOwnProperty(propName) && queryData[propName] !== _this7.state.queryData[propName]) {
	          _this7._hasStaleQueryData = true;
	        }
	      });
	      return queryData;
	    };

	    RelayContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      if (specShouldComponentUpdate) {
	        return specShouldComponentUpdate();
	      }

	      // Flag indicating that query data changed since previous render.
	      if (this._hasStaleQueryData) {
	        this._hasStaleQueryData = false;
	        return true;
	      }

	      if (this.context.relay !== nextContext.relay || this.context.route !== nextContext.route) {
	        return true;
	      }

	      if (this.context.route.useMockData) {
	        return true;
	      }

	      var fragmentPointers = this._fragmentPointers;
	      return !__webpack_require__(58).areNonQueryPropsEqual(fragments, this.props, nextProps) || fragmentPointers && !__webpack_require__(58).areQueryResultsEqual(fragmentPointers, this.state.queryData, nextState.queryData) || !__webpack_require__(58).areQueryVariablesEqual(this.state.relayProp.variables, nextState.relayProp.variables);
	    };

	    RelayContainer.prototype.render = function render() {
	      if (ComponentClass) {
	        return __webpack_require__(25).createElement(ComponentClass, (0, _extends3['default'])({}, this.props, this.state.queryData, {
	          ref: 'component' // eslint-disable-line react/no-string-refs
	          , relay: this.state.relayProp
	        }));
	      } else {
	        // Stateless functional.
	        var Fn = Component;
	        return __webpack_require__(25).createElement(Fn, (0, _extends3['default'])({}, this.props, this.state.queryData, {
	          relay: this.state.relayProp
	        }));
	      }
	    };

	    return RelayContainer;
	  }(__webpack_require__(25).Component);

	  function getFragment(fragmentName, route, variables) {
	    var fragmentBuilder = fragments[fragmentName];
	    __webpack_require__(1)(fragmentBuilder, 'RelayContainer: Expected `%s` to have a query fragment named `%s`.', containerName, fragmentName);
	    var fragment = buildContainerFragment(containerName, fragmentName, fragmentBuilder, initialVariables);
	    // TODO: Allow routes without names, #7856965.
	    var metaRoute = __webpack_require__(12).get(route.name);
	    return __webpack_require__(2).Fragment.create(fragment, metaRoute, variables);
	  }

	  initializeProfiler(RelayContainer);
	  RelayContainer.contextTypes = containerContextTypes;
	  RelayContainer.displayName = containerName;
	  __webpack_require__(110).proxyMethods(RelayContainer, Component);

	  return RelayContainer;
	}

	/**
	 * TODO: Stop allowing props to override variables, #7856288.
	 */
	function getVariablesWithPropOverrides(spec, props, variables) {
	  var initialVariables = spec.initialVariables;
	  if (initialVariables) {
	    var mergedVariables = void 0;
	    for (var _key in initialVariables) {
	      if (_key in props) {
	        mergedVariables = mergedVariables || (0, _extends3['default'])({}, variables);
	        mergedVariables[_key] = props[_key];
	      }
	    }
	    variables = mergedVariables || variables;
	  }
	  return variables;
	}

	/**
	 * Compare props and variables and reset the internal query variables if outside
	 * query variables change the component.
	 *
	 * TODO: Stop allowing props to override variables, #7856288.
	 */
	function resetPropOverridesForVariables(spec, props, variables) {
	  var initialVariables = spec.initialVariables;
	  for (var _key2 in initialVariables) {
	    if (_key2 in props && !__webpack_require__(23)(props[_key2], variables[_key2])) {
	      return initialVariables;
	    }
	  }
	  return variables;
	}

	function initializeProfiler(RelayContainer) {
	  __webpack_require__(10).instrumentMethods(RelayContainer.prototype, {
	    componentWillMount: 'RelayContainer.prototype.componentWillMount',
	    componentWillReceiveProps: 'RelayContainer.prototype.componentWillReceiveProps',
	    shouldComponentUpdate: 'RelayContainer.prototype.shouldComponentUpdate'
	  });
	}

	/**
	 * Merges a partial update into a set of variables. If no variables changed, the
	 * same object is returned. Otherwise, a new object is returned.
	 */
	function mergeVariables(currentVariables, partialVariables) {
	  if (partialVariables) {
	    for (var _key3 in partialVariables) {
	      if (currentVariables[_key3] !== partialVariables[_key3]) {
	        return (0, _extends3['default'])({}, currentVariables, partialVariables);
	      }
	    }
	  }
	  return currentVariables;
	}

	/**
	 * Wrapper around `buildRQL.Fragment` with contextual error messages.
	 */
	function buildContainerFragment(containerName, fragmentName, fragmentBuilder, variables) {
	  var fragment = __webpack_require__(66).Fragment(fragmentBuilder, variables);
	  __webpack_require__(1)(fragment, 'Relay.QL defined on container `%s` named `%s` is not a valid fragment. ' + 'A typical fragment is defined using: Relay.QL`fragment on Type {...}`', containerName, fragmentName);
	  return fragment;
	}

	function getDeferredFragment(fragmentReference, context, variables) {
	  var route = __webpack_require__(12).get(context.route.name);
	  var concreteFragment = fragmentReference.getFragment(variables);
	  var concreteVariables = fragmentReference.getVariables(route, variables);
	  return __webpack_require__(2).Fragment.create(concreteFragment, route, concreteVariables, {
	    isDeferred: true,
	    isContainerFragment: fragmentReference.isContainerFragment(),
	    isTypeConditional: false
	  });
	}

	function validateVariables(initialVariables, partialVariables) {
	  if (partialVariables) {
	    for (var _key4 in partialVariables) {
	      __webpack_require__(5)(initialVariables.hasOwnProperty(_key4), 'RelayContainer: Expected query variable `%s` to be initialized in ' + '`initialVariables`.', _key4);
	    }
	  }
	}

	function validateSpec(componentName, spec) {
	  var fragments = spec.fragments;
	  __webpack_require__(1)(typeof fragments === 'object' && fragments, 'Relay.createContainer(%s, ...): Missing `fragments`, which is expected ' + 'to be an object mapping from `propName` to: () => Relay.QL`...`', componentName);

	  if (!spec.initialVariables) {
	    return;
	  }
	  var initialVariables = spec.initialVariables || {};
	  __webpack_require__(1)(typeof initialVariables === 'object' && initialVariables, 'Relay.createContainer(%s, ...): Expected `initialVariables` to be an ' + 'object.', componentName);

	  __webpack_require__(11)(fragments, function (_, name) {
	    __webpack_require__(5)(!initialVariables.hasOwnProperty(name), 'Relay.createContainer(%s, ...): `%s` is used both as a fragment name ' + 'and variable name. Please give them unique names.', componentName, name);
	  });
	}

	function getContainerName(Component) {
	  return 'Relay(' + getComponentName(Component) + ')';
	}

	/**
	 * Creates a lazy Relay container. The actual container is created the first
	 * time a container is being constructed by React's rendering engine.
	 */
	function create(Component, spec) {
	  var componentName = getComponentName(Component);
	  var containerName = getContainerName(Component);

	  validateSpec(componentName, spec);

	  var fragments = spec.fragments;
	  var fragmentNames = Object.keys(fragments);
	  var initialVariables = spec.initialVariables || {};
	  var prepareVariables = spec.prepareVariables;

	  var Container = void 0;
	  function ContainerConstructor(props, context) {
	    if (!Container) {
	      Container = createContainerComponent(Component, spec);
	    }
	    return new Container(props, context);
	  }

	  ContainerConstructor.getFragmentNames = function () {
	    return fragmentNames;
	  };
	  ContainerConstructor.hasFragment = function (fragmentName) {
	    return !!fragments[fragmentName];
	  };
	  ContainerConstructor.hasVariable = function (variableName) {
	    return Object.prototype.hasOwnProperty.call(initialVariables, variableName);
	  };

	  /**
	   * Retrieves a reference to the fragment by name. An optional second argument
	   * can be supplied to override the component's default variables.
	   */
	  ContainerConstructor.getFragment = function (fragmentName, variableMapping) {
	    var fragmentBuilder = fragments[fragmentName];
	    if (!fragmentBuilder) {
	      __webpack_require__(1)(false, '%s.getFragment(): `%s` is not a valid fragment name. Available ' + 'fragments names: %s', containerName, fragmentName, fragmentNames.map(function (name) {
	        return '`' + name + '`';
	      }).join(', '));
	    }
	    __webpack_require__(1)(typeof fragmentBuilder === 'function', 'RelayContainer: Expected `%s.fragments.%s` to be a function returning ' + 'a fragment. Example: `%s: () => Relay.QL`fragment on ...`', containerName, fragmentName, fragmentName);
	    if (variableMapping) {
	      variableMapping = __webpack_require__(102)(variableMapping, function (_, name) {
	        return Object.prototype.hasOwnProperty.call(initialVariables, name);
	      });
	    }
	    return __webpack_require__(42).createForContainer(function () {
	      return buildContainerFragment(containerName, fragmentName, fragmentBuilder, initialVariables);
	    }, initialVariables, variableMapping, prepareVariables);
	  };

	  ContainerConstructor.contextTypes = containerContextTypes;
	  ContainerConstructor.displayName = containerName;
	  ContainerConstructor.moduleName = null;

	  return ContainerConstructor;
	}

	/**
	 * Returns whether the fragment `prop` contains a fragment pointer for the given
	 * fragment's data, warning if it does not.
	 */
	function validateFragmentProp(componentName, fragmentName, fragment, prop, prevVariables) {
	  var hasFragmentData = __webpack_require__(21).hasFragment(prop, fragment) || !!prevVariables && __webpack_require__(23)(prevVariables, fragment.getVariables());
	  if (!hasFragmentData) {
	    var variables = fragment.getVariables();
	    var fetchedVariables = __webpack_require__(21).getFragmentVariables(prop, fragment);
	    __webpack_require__(5)(false, 'RelayContainer: component `%s` was rendered with variables ' + 'that differ from the variables used to fetch fragment ' + '`%s`. The fragment was fetched with variables `%s`, but rendered ' + 'with variables `%s`. This can indicate one of two possibilities: \n' + ' - The parent set the correct variables in the query - ' + "`%s.getFragment('%s', {...})` - but did not pass the same " + 'variables when rendering the component. Be sure to tell the ' + 'component what variables to use by passing them as props: ' + '`<%s ... %s />`.\n' + ' - You are intentionally passing fake data to this ' + 'component, in which case ignore this warning.', componentName, fragmentName, fetchedVariables ? fetchedVariables.map(function (vars) {
	      return JSON.stringify(vars);
	    }).join(', ') : '(not fetched)', JSON.stringify(variables), componentName, fragmentName, componentName, Object.keys(variables).map(function (key) {
	      return key + '={...}';
	    }).join(' '));
	  }
	  return hasFragmentData;
	}

	module.exports = { create: create };

/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayContainerProxy
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * This feature is deprecated and unavailable in open source.
	 */
	var RelayContainerProxy = {
	  proxyMethods: function proxyMethods(Container, Component) {},
	  injectProxyMethods: function injectProxyMethods(proxyMethods) {
	    this.proxyMethods = proxyMethods;
	  }
	};

	module.exports = RelayContainerProxy;

/***/ },
/* 111 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayContainerUtils
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @internal
	 *
	 * Helper for checking if this is a React Component
	 * created with React.Component or React.createClass().
	 */

	function isReactComponent(component) {
	  return !!(component && typeof component.prototype === 'object' && component.prototype && component.prototype.isReactComponent);
	}

	function getReactComponent(Component) {
	  if (isReactComponent(Component)) {
	    return Component;
	  } else {
	    return null;
	  }
	}

	function getComponentName(Component) {
	  var name = void 0;
	  var ComponentClass = getReactComponent(Component);
	  if (ComponentClass) {
	    name = ComponentClass.displayName || ComponentClass.name;
	  } else if (typeof Component === 'function') {
	    // This is a stateless functional component.
	    name = Component.displayName || Component.name || 'StatelessComponent';
	  } else {
	    name = 'ReactElement';
	  }
	  return name;
	}

	function getContainerName(Component) {
	  return 'Relay(' + getComponentName(Component) + ')';
	}

	module.exports = {
	  getComponentName: getComponentName,
	  getContainerName: getContainerName,
	  getReactComponent: getReactComponent
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayFragmentSpecResolver
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(88),
	    areEqualSelectors = _require.areEqualSelectors,
	    getSelectorsFromObject = _require.getSelectorsFromObject;

	/**
	 * An implementation of the `FragmentSpecResolver` interface defined in
	 * `RelayEnvironmentTypes`.
	 *
	 * This utility is implemented as an imperative, stateful API for performance
	 * reasons: reusing previous resolvers, callback functions, and subscriptions
	 * all helps to reduce object allocation and thereby decrease GC time.
	 *
	 * The `resolve()` function is also lazy and memoized: changes in the store mark
	 * the resolver as stale and notify the caller, and the actual results are
	 * recomputed the first time `resolve()` is called.
	 */
	var RelayFragmentSpecResolver = function () {
	  function RelayFragmentSpecResolver(context, fragments, props, callback) {
	    var _this = this;

	    (0, _classCallCheck3['default'])(this, RelayFragmentSpecResolver);

	    this._onChange = function () {
	      _this._stale = true;
	      _this._callback();
	    };

	    this._callback = callback;
	    this._context = context;
	    this._data = {};
	    this._fragments = fragments;
	    this._props = props;
	    this._resolvers = {};
	    this._stale = false;

	    this.setProps(props);
	  }

	  RelayFragmentSpecResolver.prototype.dispose = function dispose() {
	    __webpack_require__(11)(this._resolvers, disposeCallback);
	  };

	  RelayFragmentSpecResolver.prototype.resolve = function resolve() {
	    var _this2 = this;

	    if (this._stale) {
	      // Avoid mapping the object multiple times, which could occur if data for
	      // multiple keys changes in the same event loop.
	      var prevData = this._data;
	      var nextData = void 0;
	      __webpack_require__(11)(this._resolvers, function (resolver, key) {
	        var prevItem = prevData[key];
	        if (resolver) {
	          var nextItem = resolver.resolve();
	          if (nextData || nextItem !== prevItem) {
	            nextData = nextData || (0, _extends3['default'])({}, prevData);
	            nextData[key] = nextItem;
	          }
	        } else {
	          var prop = _this2._props[key];
	          var _nextItem = prop !== undefined ? prop : null;
	          if (nextData || !__webpack_require__(140)(_nextItem, prevItem)) {
	            nextData = nextData || (0, _extends3['default'])({}, prevData);
	            nextData[key] = _nextItem;
	          }
	        }
	      });
	      this._data = nextData || prevData;
	      this._stale = false;
	    }
	    return this._data;
	  };

	  RelayFragmentSpecResolver.prototype.setProps = function setProps(props) {
	    var _this3 = this;

	    var selectors = getSelectorsFromObject(this._context.variables, this._fragments, props);
	    __webpack_require__(11)(selectors, function (selector, key) {
	      var resolver = _this3._resolvers[key];
	      if (selector == null) {
	        if (resolver != null) {
	          resolver.dispose();
	        }
	        resolver = null;
	      } else if (Array.isArray(selector)) {
	        if (resolver == null) {
	          resolver = new SelectorListResolver(_this3._context.environment, selector, _this3._onChange);
	        } else {
	          __webpack_require__(1)(resolver instanceof SelectorListResolver, 'RelayFragmentSpecResolver: Expected prop `%s` to always be an array.', key);
	          resolver.setSelectors(selector);
	        }
	      } else {
	        if (resolver == null) {
	          resolver = new SelectorResolver(_this3._context.environment, selector, _this3._onChange);
	        } else {
	          __webpack_require__(1)(resolver instanceof SelectorResolver, 'RelayFragmentSpecResolver: Expected prop `%s` to always be an object.', key);
	          resolver.setSelector(selector);
	        }
	      }
	      _this3._resolvers[key] = resolver;
	    });
	    this._props = props;
	    this._stale = true;
	  };

	  RelayFragmentSpecResolver.prototype.setVariables = function setVariables(variables) {
	    __webpack_require__(11)(this._resolvers, function (resolver) {
	      if (resolver) {
	        resolver.setVariables(variables);
	      }
	    });
	    this._stale = true;
	  };

	  return RelayFragmentSpecResolver;
	}();

	/**
	 * A resolver for a single Selector.
	 */


	var SelectorResolver = function () {
	  function SelectorResolver(environment, selector, callback) {
	    (0, _classCallCheck3['default'])(this, SelectorResolver);

	    _initialiseProps.call(this);

	    var snapshot = environment.lookup(selector);
	    this._callback = callback;
	    this._data = snapshot.data;
	    this._environment = environment;
	    this._selector = selector;
	    this._subscription = environment.subscribe(snapshot, this._onChange);
	  }

	  SelectorResolver.prototype.dispose = function dispose() {
	    if (this._subscription) {
	      this._subscription.dispose();
	      this._subscription = null;
	    }
	  };

	  SelectorResolver.prototype.resolve = function resolve() {
	    return this._data;
	  };

	  SelectorResolver.prototype.setSelector = function setSelector(selector) {
	    if (this._subscription != null && areEqualSelectors(selector, this._selector)) {
	      return;
	    }
	    this.dispose();
	    var snapshot = this._environment.lookup(selector);
	    this._data = snapshot.data;
	    this._selector = selector;
	    this._subscription = this._environment.subscribe(snapshot, this._onChange);
	  };

	  SelectorResolver.prototype.setVariables = function setVariables(variables) {
	    // Note: in the classic implementation variables have to be merged because
	    // they also contain root variables.
	    var selector = (0, _extends3['default'])({}, this._selector, {
	      variables: (0, _extends3['default'])({}, this._selector.variables, variables)
	    });
	    this.setSelector(selector);
	  };

	  return SelectorResolver;
	}();

	/**
	 * A resolver for an array of Selectors.
	 */


	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;

	  this._onChange = function (snapshot) {
	    _this5._data = snapshot.data;
	    _this5._callback();
	  };
	};

	var SelectorListResolver = function () {
	  function SelectorListResolver(environment, selectors, callback) {
	    var _this4 = this;

	    (0, _classCallCheck3['default'])(this, SelectorListResolver);

	    this._onChange = function (data) {
	      _this4._stale = true;
	      _this4._callback();
	    };

	    this._callback = callback;
	    this._data = [];
	    this._environment = environment;
	    this._resolvers = [];
	    this._stale = true;

	    this.setSelectors(selectors);
	  }

	  SelectorListResolver.prototype.dispose = function dispose() {
	    this._resolvers.forEach(disposeCallback);
	  };

	  SelectorListResolver.prototype.resolve = function resolve() {
	    if (this._stale) {
	      // Avoid mapping the array multiple times, which could occur if data for
	      // multiple indices changes in the same event loop.
	      var prevData = this._data;
	      var nextData = void 0;
	      for (var ii = 0; ii < this._resolvers.length; ii++) {
	        var prevItem = prevData[ii];
	        var nextItem = this._resolvers[ii].resolve();
	        if (nextData || nextItem !== prevItem) {
	          nextData = nextData || prevData.slice(0, ii);
	          nextData.push(nextItem);
	        }
	      }
	      this._data = nextData || prevData;
	      this._stale = false;
	    }
	    return this._data;
	  };

	  SelectorListResolver.prototype.setSelectors = function setSelectors(selectors) {
	    while (this._resolvers.length > selectors.length) {
	      var resolver = this._resolvers.pop();
	      resolver.dispose();
	    }
	    for (var ii = 0; ii < selectors.length; ii++) {
	      if (ii < this._resolvers.length) {
	        this._resolvers[ii].setSelector(selectors[ii]);
	      } else {
	        this._resolvers[ii] = new SelectorResolver(this._environment, selectors[ii], this._onChange);
	      }
	    }
	    this._stale = true;
	  };

	  SelectorListResolver.prototype.setVariables = function setVariables(variables) {
	    this._resolvers.forEach(function (resolver) {
	      return resolver.setVariables(variables);
	    });
	    this._stale = true;
	  };

	  return SelectorListResolver;
	}();

	function disposeCallback(disposable) {
	  disposable && disposable.dispose();
	}

	module.exports = RelayFragmentSpecResolver;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayGarbageCollector
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Provides methods to track the number of references to registered records and
	 * remove un-referenced records from Relay's cache.
	 */
	var RelayGarbageCollector = function () {
	  function RelayGarbageCollector(storeData, scheduler) {
	    (0, _classCallCheck3['default'])(this, RelayGarbageCollector);

	    this._activeHoldCount = 0;
	    this._collectionQueue = [];
	    this._isCollecting = false;
	    this._isScheduled = false;
	    this._refCounts = {};
	    this._scheduler = scheduler;
	    this._storeData = storeData;
	  }

	  RelayGarbageCollector.prototype.register = function register(dataID) {
	    if (!this._refCounts.hasOwnProperty(dataID)) {
	      this._refCounts[dataID] = 0;
	    }
	  };

	  RelayGarbageCollector.prototype.incrementReferenceCount = function incrementReferenceCount(dataID) {
	    // Inlined `register` since this is a reasonably hot code path.
	    if (!this._refCounts.hasOwnProperty(dataID)) {
	      this._refCounts[dataID] = 0;
	    }
	    this._refCounts[dataID]++;
	  };

	  RelayGarbageCollector.prototype.decrementReferenceCount = function decrementReferenceCount(dataID) {
	    if (!this._refCounts.hasOwnProperty(dataID) || this._refCounts[dataID] <= 0) {
	      __webpack_require__(5)(false, 'RelayGarbageCollector: Expected id `%s` be referenced before being ' + 'unreferenced.', dataID);
	      this._refCounts[dataID] = 0;
	      return;
	    }
	    this._refCounts[dataID]--;
	  };

	  /**
	   * Notify the collector that GC should be put on hold/paused. The hold can be
	   * released by calling the returned callback.
	   *
	   * Example use cases:
	   * - In-flight queries may have been diffed against cached records that are
	   *   unreferenced and eligible for GC. If these records were collected there
	   *   would be insufficient data in the cache to render.
	   * - There may be a gap between a query response being processed and rendering
	   *   the component that initiated the fetch. If records were collected there
	   *   would be insufficient data in the cache to render.
	   */


	  RelayGarbageCollector.prototype.acquireHold = function acquireHold() {
	    var _this = this;

	    var isReleased = false;
	    this._activeHoldCount++;
	    return {
	      release: function release() {
	        __webpack_require__(1)(!isReleased, 'RelayGarbageCollector: hold can only be released once.');
	        __webpack_require__(1)(_this._activeHoldCount > 0, 'RelayGarbageCollector: cannot decrease hold count below zero.');
	        isReleased = true;
	        _this._activeHoldCount--;
	        if (_this._activeHoldCount === 0) {
	          _this._scheduleCollection();
	        }
	      }
	    };
	  };

	  /**
	   * Schedules a collection starting at the given record.
	   */


	  RelayGarbageCollector.prototype.collectFromNode = function collectFromNode(dataID) {
	    if (this._refCounts[dataID] === 0) {
	      this._collectionQueue.push(dataID);
	      this._scheduleCollection();
	    }
	  };

	  /**
	   * Schedules a collection for any currently unreferenced records.
	   */


	  RelayGarbageCollector.prototype.collect = function collect() {
	    var _this2 = this;

	    __webpack_require__(11)(this._refCounts, function (refCount, dataID) {
	      if (refCount === 0) {
	        _this2._collectionQueue.push(dataID);
	      }
	    });
	    this._scheduleCollection();
	  };

	  RelayGarbageCollector.prototype._scheduleCollection = function _scheduleCollection() {
	    var _this3 = this;

	    if (this._isScheduled) {
	      return;
	    }
	    this._isScheduled = true;
	    __webpack_require__(40)(function () {
	      _this3._isScheduled = false;
	      _this3._processQueue();
	    });
	  };

	  RelayGarbageCollector.prototype._processQueue = function _processQueue() {
	    var _this4 = this;

	    if (this._isCollecting || this._activeHoldCount || !this._collectionQueue.length) {
	      // already scheduled, active hold, or nothing to do
	      return;
	    }
	    this._isCollecting = true;

	    var cachedRecords = this._storeData.getCachedData();
	    var freshRecords = this._storeData.getNodeData();
	    this._scheduler(function () {
	      // exit if a hold was acquired since the last execution
	      if (_this4._activeHoldCount) {
	        _this4._isCollecting = false;
	        return false;
	      }

	      var dataID = _this4._getNextUnreferencedID();
	      if (dataID) {
	        var cachedRecord = cachedRecords[dataID];
	        if (cachedRecord) {
	          _this4._traverseRecord(cachedRecord);
	        }
	        var freshRecord = freshRecords[dataID];
	        if (freshRecord) {
	          _this4._traverseRecord(freshRecord);
	        }
	        _this4._collectRecord(dataID);
	      }

	      // only allow new collections to be scheduled once the current one
	      // is complete
	      _this4._isCollecting = !!_this4._collectionQueue.length;
	      return _this4._isCollecting;
	    });
	  };

	  RelayGarbageCollector.prototype._getNextUnreferencedID = function _getNextUnreferencedID() {
	    while (this._collectionQueue.length) {
	      var dataID = this._collectionQueue.shift();
	      if (this._refCounts.hasOwnProperty(dataID) && this._refCounts[dataID] === 0) {
	        return dataID;
	      }
	    }
	    return null;
	  };

	  // $FlowFixMe(>=0.34.0)


	  RelayGarbageCollector.prototype._traverseRecord = function _traverseRecord(record) {
	    var _this5 = this;

	    __webpack_require__(11)(record, function (value, storageKey) {
	      if (storageKey === __webpack_require__(3).MetadataKey.PATH) {
	        return;
	      } else if (value instanceof __webpack_require__(57)) {
	        value.getEdgeIDs({ includeDeleted: true }).forEach(function (id) {
	          if (id != null) {
	            _this5._collectionQueue.push(id);
	          }
	        });
	      } else if (Array.isArray(value)) {
	        value.forEach(function (item) {
	          if (typeof item === 'object' && item !== null) {
	            var linkedID = __webpack_require__(3).getDataIDForObject(item);
	            if (linkedID != null) {
	              _this5._collectionQueue.push(linkedID);
	            }
	          }
	        });
	      } else if (typeof value === 'object' && value !== null) {
	        var linkedID = __webpack_require__(3).getDataIDForObject(value);
	        if (linkedID != null) {
	          _this5._collectionQueue.push(linkedID);
	        }
	      }
	    });
	  };

	  RelayGarbageCollector.prototype._collectRecord = function _collectRecord(dataID) {
	    var queryTracker = this._storeData.getQueryTracker();
	    if (queryTracker) {
	      queryTracker.untrackNodesForID(dataID);
	    }
	    this._storeData.getQueuedStore().removeRecord(dataID);
	    this._storeData.getRangeData().removeRecord(dataID);
	    delete this._refCounts[dataID];
	  };

	  return RelayGarbageCollector;
	}();

	module.exports = RelayGarbageCollector;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayGraphQLTag
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Runtime function to correspond to the `graphql` tagged template function.
	 * All calls to this function should be transformed by the plugin.
	 */
	function graphql() {
	  __webpack_require__(1)(false, 'graphql: Unexpected invocation at runtime. Either the Babel transform ' + 'was not set up, or it failed to identify this call site. Make sure it ' + 'is being used verbatim as `graphql`.');
	}

	/**
	 * Variant of the `graphql` tag that enables experimental features.
	 */
	graphql.experimental = function () {
	  __webpack_require__(1)(false, 'graphql.experimental: Unexpected invocation at runtime. Either the ' + 'Babel transform was not set up, or it failed to identify this call ' + 'site. Make sure it is being used verbatim as `graphql.experimental`.');
	};

	var CLASSIC_NODE = '__classic_node__';

	/**
	 * Memoizes the results of executing the `.classic()` functions on
	 * graphql`...` tagged expressions. Memoization allows the framework to use
	 * object equality checks to compare fragments (useful, for example, when
	 * comparing two `Selector`s to see if they select the same data).
	 */
	function getClassicNode(taggedNode) {
	  var concreteNode = taggedNode[CLASSIC_NODE];
	  if (concreteNode == null) {
	    var fn = taggedNode.classic;
	    __webpack_require__(1)(typeof fn === 'function', 'RelayGraphQLTag: Expected a graphql literal, got `%s`.\n' + 'The "relay" Babel plugin must enable "compat" mode to be used with ' + '"react-relay/compat" or "react-relay/classic".\n' + 'See: https://facebook.github.io/relay/docs/babel-plugin-relay.html', JSON.stringify(taggedNode));
	    concreteNode = fn(__webpack_require__(81));
	    taggedNode[CLASSIC_NODE] = concreteNode;
	  }
	  return concreteNode;
	}

	function getClassicFragment(taggedNode) {
	  var concreteNode = getClassicNode(taggedNode);
	  var fragment = __webpack_require__(7).getFragmentDefinition(concreteNode);
	  __webpack_require__(1)(fragment, 'RelayGraphQLTag: Expected a fragment, got `%s`.\n' + 'The "relay" Babel plugin must enable "compat" mode to be used with ' + '"react-relay/compat" or "react-relay/classic".\n' + 'See: https://facebook.github.io/relay/docs/babel-plugin-relay.html', concreteNode);
	  return fragment;
	}

	function getClassicOperation(taggedNode) {
	  var concreteNode = getClassicNode(taggedNode);
	  var operation = __webpack_require__(7).getOperationDefinition(concreteNode);
	  __webpack_require__(1)(operation, 'RelayGraphQLTag: Expected an operation, got `%s`.\n' + 'The "relay" Babel plugin must enable "compat" mode to be used with ' + '"react-relay/compat" or "react-relay/classic".\n' + 'See: https://facebook.github.io/relay/docs/babel-plugin-relay.html', concreteNode);
	  return operation;
	}

	module.exports = {
	  getClassicFragment: getClassicFragment,
	  getClassicOperation: getClassicOperation,
	  graphql: graphql
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayInternals
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * This module contains internal Relay modules that we expose for development
	 * tools. They should be considered private APIs.
	 *
	 * @internal
	 */
	var RelayInternals = {
	  NetworkLayer: __webpack_require__(27).getStoreData().getNetworkLayer(),
	  DefaultStoreData: __webpack_require__(27).getStoreData(),
	  flattenRelayQuery: __webpack_require__(50),
	  printRelayQuery: __webpack_require__(52)
	};

	module.exports = RelayInternals;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMutation
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @public
	 *
	 * RelayMutation is the base class for modeling mutations of data.
	 */
	var RelayMutation = function () {
	  function RelayMutation(props) {
	    (0, _classCallCheck3['default'])(this, RelayMutation);

	    this._didShowFakeDataWarning = false;
	    this._didValidateConfig = false;
	    this._unresolvedProps = props;
	  }

	  /**
	   * @internal
	   */


	  RelayMutation.prototype.bindEnvironment = function bindEnvironment(environment) {
	    if (!this._environment) {
	      this._environment = environment;
	      this._resolveProps();
	    } else {
	      __webpack_require__(1)(environment === this._environment, '%s: Mutation instance cannot be used in different Relay environments.', this.constructor.name);
	    }
	  };

	  /**
	   * Each mutation corresponds to a field on the server which is used by clients
	   * to communicate the type of mutation to be executed.
	   */


	  RelayMutation.prototype.getMutation = function getMutation() {
	    __webpack_require__(1)(false, '%s: Expected abstract method `getMutation` to be implemented.', this.constructor.name);
	  };

	  /**
	   * "Fat queries" represent a predetermined set of fields that may change as a
	   * result of a mutation, and which should therefore be queried in order to get
	   * a consistent view of the data after performing a mutation. In practice, we
	   * query for a subset of those fields because we intersect the fat query with
	   * the tracked query we have for a given node (ie. the pieces of data we've
	   * previously queried for and have therefore written to the store).
	   *
	   * Fat queries can be written like normal GraphQL queries with one main
	   * exception: fat queries use childless non-scalar fields to indicate that
	   * anything under that field may change. For example, the fat query for
	   * feedback_like contains the field `like_sentence` with no child fields.
	   * This means that any field below `like_sentence` may change as a result of
	   * feedback_like.
	   *
	   * When adding a fat query, consider *all* of the data that might change as a
	   * result of the mutation - not just data that we currently use in Relay. We
	   * don't need to worry about overfetching here (this query is never executed
	   * on its own; the infrastructure always intersects it with what is actually
	   * needed), and if we omit fields here we might get odd consistency behavior
	   * in the future when we add new views or modify existing ones.
	   */


	  RelayMutation.prototype.getFatQuery = function getFatQuery() {
	    __webpack_require__(1)(false, '%s: Expected abstract method `getFatQuery` to be implemented.', this.constructor.name);
	  };

	  /**
	   * These configurations are used to generate the query for the mutation to be
	   * sent to the server and to correctly write the server's response into the
	   * client store.
	   *
	   * Possible configuration types:
	   *
	   * -  FIELDS_CHANGE provides configuration for mutation fields.
	   *    {
	   *      type: RelayMutationType.FIELDS_CHANGE;
	   *      fieldIDs: {[fieldName: string]: DataID | Array<DataID>};
	   *    }
	   *    where fieldIDs map `fieldName`s from the fatQuery to a DataID or
	   *    array of DataIDs to be updated in the store.
	   *
	   * -  RANGE_ADD provides configuration for adding a new edge to a range.
	   *    {
	   *      type: RelayMutationType.RANGE_ADD;
	   *      parentName: string;
	   *      parentID: string;
	   *      connectionName: string;
	   *      edgeName: string;
	   *      rangeBehaviors:
	   *        {[call: string]: GraphQLMutatorConstants.RANGE_OPERATIONS};
	   *    }
	   *    where `parentName` is the field in the fatQuery that contains the range,
	   *    `parentID` is the DataID of `parentName` in the store, `connectionName`
	   *    is the name of the range, `edgeName` is the name of the key in server
	   *    response that contains the newly created edge, `rangeBehaviors` maps
	   *    stringified representation of calls on the connection to
	   *    GraphQLMutatorConstants.RANGE_OPERATIONS.
	   *
	   * -  NODE_DELETE provides configuration for deleting a node and the
	   *    corresponding edge from a range.
	   *    {
	   *      type: RelayMutationType.NODE_DELETE;
	   *      parentName: string;
	   *      parentID: string;
	   *      connectionName: string;
	   *      deletedIDFieldName: string;
	   *    }
	   *    where `parentName`, `parentID` and `connectionName` refer to the same
	   *    things as in RANGE_ADD, `deletedIDFieldName` is the name of the key in
	   *    the server response that contains the DataID of the deleted node.
	   *
	   * -  RANGE_DELETE provides configuration for deleting an edge from a range
	   *    but doesn't delete the node.
	   *    {
	   *      type: RelayMutationType.RANGE_DELETE;
	   *      parentName: string;
	   *      parentID: string;
	   *      connectionName: string;
	   *      deletedIDFieldName: string | Array<string>;
	   *      pathToConnection: Array<string>;
	   *    }
	   *    where `parentName`, `parentID`, `connectionName` and
	   *    `deletedIDFieldName` refer to the same things as in NODE_DELETE.
	   *    `deletedIDFieldName` can also be a path from the response root to the
	   *    deleted node. `pathToConnection` is a path from `parentName` to
	   *    `connectionName`.
	   *
	   * -  REQUIRED_CHILDREN is used to append additional children (fragments or
	   *    fields) to the mutation query. Any data fetched for these children is
	   *    not written to the client store, but you can add code to process it
	   *    in the `onSuccess` callback passed to the `RelayEnvironment` `applyUpdate`
	   *    method. You may need to use this, for example, to fetch fields on a new
	   *    object created by the mutation (and which Relay would normally not
	   *    attempt to fetch because it has not previously fetched anything for that
	   *    object).
	   *    {
	   *      type: RelayMutationType.REQUIRED_CHILDREN;
	   *      children: Array<RelayQuery.Node>;
	   *    }
	   */


	  RelayMutation.prototype.getConfigs = function getConfigs() {
	    __webpack_require__(1)(false, '%s: Expected abstract method `getConfigs` to be implemented.', this.constructor.name);
	  };

	  /**
	   * These variables form the "input" to the mutation query sent to the server.
	   */


	  RelayMutation.prototype.getVariables = function getVariables() {
	    __webpack_require__(1)(false, '%s: Expected abstract method `getVariables` to be implemented.', this.constructor.name);
	  };

	  /**
	   * These will be sent along with the mutation query to the server.
	   */


	  RelayMutation.prototype.getFiles = function getFiles() {
	    return null;
	  };

	  /**
	   * When a request is sent to the server, mutations can optionally construct an
	   * optimistic response that has the same shape as the server response payload.
	   * This optimistic response is used to pre-emptively update the client cache
	   * to simulate an instantaneous response.
	   *
	   * The optimistic response may be a subset or superset of the actual response
	   * payload. It can be a subset if certain fields are impossible to create on
	   * the client (and if views are expected to handle the data inconsistency). It
	   * can be a superset of the actual response payload if certain fields that are
	   * affected have not been queried by the client, yet.
	   */


	  RelayMutation.prototype.getOptimisticResponse = function getOptimisticResponse() {
	    return null;
	  };

	  /**
	   * Optional. Similar to `getConfig`, this is used to create the query
	   * corresponding to the `optimisticResponse`. If not provided, the query
	   * will be inferred from the optimistic response. Most subclasses shouldn't
	   * need to extend this method.
	   */


	  RelayMutation.prototype.getOptimisticConfigs = function getOptimisticConfigs() {
	    return null;
	  };

	  /**
	   * An optional collision key allows a mutation to identify itself with other
	   * mutations that affect the same fields. Mutations with the same collision
	   * are sent to the server serially and in-order to avoid unpredictable and
	   * potentially incorrect behavior.
	   */


	  RelayMutation.prototype.getCollisionKey = function getCollisionKey() {
	    return null;
	  };

	  RelayMutation.prototype._resolveProps = function _resolveProps() {
	    var _this = this;

	    var fragments = this.constructor.fragments;
	    var initialVariables = this.constructor.initialVariables || {};

	    var props = this._unresolvedProps;
	    var resolvedProps = (0, _extends3['default'])({}, props);
	    __webpack_require__(11)(fragments, function (fragmentBuilder, fragmentName) {
	      var propValue = props[fragmentName];
	      __webpack_require__(5)(propValue !== undefined, 'RelayMutation: Expected data for fragment `%s` to be supplied to ' + '`%s` as a prop. Pass an explicit `null` if this is intentional.', fragmentName, _this.constructor.name);

	      if (propValue == null) {
	        return;
	      }
	      if (typeof propValue !== 'object') {
	        __webpack_require__(5)(false, 'RelayMutation: Expected data for fragment `%s` supplied to `%s` ' + 'to be an object.', fragmentName, _this.constructor.name);
	        return;
	      }

	      var fragment = __webpack_require__(2).Fragment.create(buildMutationFragment(_this.constructor.name, fragmentName, fragmentBuilder, initialVariables), __webpack_require__(12).get('$RelayMutation_' + _this.constructor.name), initialVariables);

	      if (fragment.isPlural()) {
	        __webpack_require__(1)(Array.isArray(propValue), 'RelayMutation: Invalid prop `%s` supplied to `%s`, expected an ' + 'array of records because the corresponding fragment is plural.', fragmentName, _this.constructor.name);
	        var dataIDs = propValue.map(function (item, ii) {
	          __webpack_require__(1)(typeof item === 'object' && item != null, 'RelayMutation: Invalid prop `%s` supplied to `%s`, ' + 'expected element at index %s to have query data.', fragmentName, _this.constructor.name, ii);
	          if (true) {
	            var hasFragmentData = __webpack_require__(21).hasFragment(item, fragment);
	            if (!hasFragmentData && !_this._didShowFakeDataWarning) {
	              _this._didShowFakeDataWarning = true;
	              __webpack_require__(5)(false, 'RelayMutation: Expected prop `%s` element at index %s ' + 'supplied to `%s` to be data fetched by Relay. This is ' + 'likely an error unless you are purposely passing in mock ' + "data that conforms to the shape of this mutation's fragment.", fragmentName, ii, _this.constructor.name);
	            }
	          }
	          var dataID = __webpack_require__(3).getDataIDForObject(item);
	          __webpack_require__(1)(dataID, 'RelayMutation: Invalid prop `%s` supplied to `%s`, ' + 'expected element at index %s to have query data.', fragmentName, _this.constructor.name, ii);
	          return dataID;
	        });

	        resolvedProps[fragmentName] = dataIDs.map(function (dataID) {
	          return _this._environment.read(fragment, dataID);
	        });
	      } else {
	        __webpack_require__(1)(!Array.isArray(propValue), 'RelayMutation: Invalid prop `%s` supplied to `%s`, expected a ' + 'single record because the corresponding fragment is not plural.', fragmentName, _this.constructor.name);
	        if (true) {
	          var hasFragmentData = __webpack_require__(21).hasFragment(propValue, fragment);
	          if (!hasFragmentData && !_this._didShowFakeDataWarning) {
	            _this._didShowFakeDataWarning = true;
	            __webpack_require__(5)(false, 'RelayMutation: Expected prop `%s` supplied to `%s` to ' + 'be data fetched by Relay. This is likely an error unless ' + 'you are purposely passing in mock data that conforms to ' + "the shape of this mutation's fragment.", fragmentName, _this.constructor.name);
	          }
	        }
	        var dataID = __webpack_require__(3).getDataIDForObject(propValue);
	        if (dataID) {
	          resolvedProps[fragmentName] = _this._environment.read(fragment, dataID);
	        }
	      }
	    });
	    this.props = resolvedProps;

	    if (!this._didValidateConfig) {
	      this.getConfigs().forEach(function (config) {
	        return __webpack_require__(144)(config, _this.constructor.name);
	      });
	      this._didValidateConfig = true;
	    }
	  };

	  RelayMutation.getFragment = function getFragment(fragmentName, variableMapping) {
	    var _this2 = this;

	    var fragments = this.fragments;
	    var fragmentBuilder = fragments[fragmentName];
	    if (!fragmentBuilder) {
	      __webpack_require__(1)(false, '%s.getFragment(): `%s` is not a valid fragment name. Available ' + 'fragments names: %s', this.name, fragmentName, Object.keys(fragments).map(function (name) {
	        return '`' + name + '`';
	      }).join(', '));
	    }

	    var initialVariables = this.initialVariables || {};
	    var prepareVariables = this.prepareVariables;

	    return __webpack_require__(42).createForContainer(function () {
	      return buildMutationFragment(_this2.name, fragmentName, fragmentBuilder, initialVariables);
	    }, initialVariables, variableMapping, prepareVariables);
	  };

	  return RelayMutation;
	}();

	/**
	 * Wrapper around `buildRQL.Fragment` with contextual error messages.
	 */


	function buildMutationFragment(mutationName, fragmentName, fragmentBuilder, variables) {
	  var fragment = __webpack_require__(66).Fragment(fragmentBuilder, variables);
	  __webpack_require__(1)(fragment, 'Relay.QL defined on mutation `%s` named `%s` is not a valid fragment. ' + 'A typical fragment is defined using: Relay.QL`fragment on Type {...}`', mutationName, fragmentName);
	  return fragment;
	}

	module.exports = RelayMutation;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMutationQueue
	 * 
	 * @format
	 */

	'use strict';

	var _defineProperty3 = _interopRequireDefault(__webpack_require__(37));

	var _extends4 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var CLIENT_MUTATION_ID = __webpack_require__(6).CLIENT_MUTATION_ID;

	var transactionIDCounter = 0;

	/**
	 * @internal
	 *
	 * Coordinates execution of concurrent mutations, including application and
	 * rollback of optimistic payloads and enqueueing mutations with the same
	 * collision key.
	 */

	var RelayMutationQueue = function () {
	  function RelayMutationQueue(storeData) {
	    (0, _classCallCheck3['default'])(this, RelayMutationQueue);

	    this._collisionQueueMap = {};
	    this._pendingTransactionMap = {};
	    this._queue = [];
	    this._storeData = storeData;
	    this._willBatchRefreshQueuedData = false;
	  }

	  /**
	   * High-level API for creating a RelayMutationTransaction from a
	   * RelayMutation.
	   */


	  RelayMutationQueue.prototype.createTransaction = function createTransaction(mutation, callbacks) {
	    return this.createTransactionWithPendingTransaction(null, function (id, mutationTransaction) {
	      return new RelayPendingTransaction({
	        id: id,
	        mutation: mutation,
	        mutationTransaction: mutationTransaction,
	        onFailure: callbacks && callbacks.onFailure,
	        onSuccess: callbacks && callbacks.onSuccess
	      });
	    });
	  };

	  /**
	   * @internal
	   *
	   * This is a lower-level API used to create transactions based on:
	   *
	   * - An object that conforms to the PendingTransaction type; or
	   * - A function that can build such an object.
	   *
	   * Used by the high-level `createTransaction` API, but also enables us to
	   * run classic and low-level mutations.
	   */


	  RelayMutationQueue.prototype.createTransactionWithPendingTransaction = function createTransactionWithPendingTransaction(pendingTransaction, transactionBuilder) {
	    __webpack_require__(1)(pendingTransaction || transactionBuilder, 'RelayMutationQueue: `createTransactionWithPendingTransaction()` ' + 'expects a PendingTransaction or TransactionBuilder.');
	    var id = getNextID();
	    var mutationTransaction = new (__webpack_require__(118))(this, id);
	    var transaction = pendingTransaction || transactionBuilder(id, mutationTransaction);
	    this._pendingTransactionMap[id] = transaction;
	    this._queue.push(transaction);
	    return mutationTransaction;
	  };

	  RelayMutationQueue.prototype.getTransaction = function getTransaction(id) {
	    var transaction = this._pendingTransactionMap[id];
	    if (transaction) {
	      return transaction.mutationTransaction;
	    }
	    return null;
	  };

	  RelayMutationQueue.prototype.getError = function getError(id) {
	    return this._get(id).error;
	  };

	  RelayMutationQueue.prototype.getStatus = function getStatus(id) {
	    return this._get(id).status;
	  };

	  RelayMutationQueue.prototype.applyOptimistic = function applyOptimistic(id) {
	    var transaction = this._get(id);
	    transaction.status = __webpack_require__(19).UNCOMMITTED;
	    transaction.error = null;
	    this._handleOptimisticUpdate(transaction);
	  };

	  RelayMutationQueue.prototype.commit = function commit(id) {
	    var transaction = this._get(id);
	    var collisionKey = transaction.getCollisionKey();
	    var collisionQueue = collisionKey && this._collisionQueueMap[collisionKey];
	    if (collisionQueue) {
	      collisionQueue.push(transaction);
	      transaction.status = __webpack_require__(19).COMMIT_QUEUED;
	      transaction.error = null;
	      return;
	    }
	    if (collisionKey) {
	      this._collisionQueueMap[collisionKey] = [transaction];
	    }
	    this._handleCommit(transaction);
	  };

	  RelayMutationQueue.prototype.rollback = function rollback(id) {
	    var transaction = this._get(id);
	    var collisionKey = transaction.getCollisionKey();
	    if (collisionKey) {
	      var collisionQueue = this._collisionQueueMap[collisionKey];
	      if (collisionQueue) {
	        var index = collisionQueue.indexOf(transaction);
	        if (index !== -1) {
	          collisionQueue.splice(index, 1);
	        }
	        if (collisionQueue.length === 0) {
	          delete this._collisionQueueMap[collisionKey];
	        }
	      }
	    }
	    this._handleRollback(transaction);
	  };

	  RelayMutationQueue.prototype._get = function _get(id) {
	    var transaction = this._pendingTransactionMap[id];
	    __webpack_require__(1)(transaction, 'RelayMutationQueue: `%s` is not a valid pending transaction ID.', id);
	    return transaction;
	  };

	  RelayMutationQueue.prototype._handleOptimisticUpdate = function _handleOptimisticUpdate(transaction) {
	    var optimisticResponse = transaction.getOptimisticResponse();
	    var optimisticQuery = transaction.getOptimisticQuery(this._storeData);
	    if (optimisticResponse && optimisticQuery) {
	      var configs = transaction.getOptimisticConfigs() || transaction.getConfigs();
	      this._storeData.handleUpdatePayload(optimisticQuery, optimisticResponse, {
	        configs: configs,
	        isOptimisticUpdate: true
	      });
	    }
	  };

	  RelayMutationQueue.prototype._handleCommitFailure = function _handleCommitFailure(transaction, error) {
	    var status = error ? __webpack_require__(19).COMMIT_FAILED : __webpack_require__(19).COLLISION_COMMIT_FAILED;
	    transaction.status = status;
	    transaction.error = error;

	    var shouldRollback = true;
	    var onFailure = transaction.onFailure;
	    if (onFailure) {
	      var preventAutoRollback = function preventAutoRollback() {
	        shouldRollback = false;
	      };
	      __webpack_require__(55).applyWithGuard(onFailure, null, [transaction.mutationTransaction, preventAutoRollback], null, 'RelayMutationTransaction:onCommitFailure');
	    }

	    if (error) {
	      this._failCollisionQueue(transaction);
	    }

	    // Might have already been rolled back via `onFailure`.
	    if (shouldRollback && this._pendingTransactionMap.hasOwnProperty(transaction.id)) {
	      this._handleRollback(transaction);
	    }
	    this._batchRefreshQueuedData();
	  };

	  RelayMutationQueue.prototype._handleCommitSuccess = function _handleCommitSuccess(transaction, response) {
	    this._advanceCollisionQueue(transaction);
	    this._clearPendingTransaction(transaction);

	    this._refreshQueuedData();
	    this._storeData.handleUpdatePayload(transaction.getQuery(this._storeData), response[transaction.getCallName()], {
	      configs: transaction.getConfigs(),
	      isOptimisticUpdate: false
	    });

	    var onSuccess = transaction.onSuccess;
	    if (onSuccess) {
	      __webpack_require__(55).applyWithGuard(onSuccess, null, [response], null, 'RelayMutationTransaction:onCommitSuccess');
	    }
	  };

	  RelayMutationQueue.prototype._handleCommit = function _handleCommit(transaction) {
	    var _this = this;

	    transaction.status = __webpack_require__(19).COMMITTING;
	    transaction.error = null;

	    var request = new (__webpack_require__(79))(transaction.getQuery(this._storeData), transaction.getFiles());
	    this._storeData.getNetworkLayer().sendMutation(request);

	    request.done(function (result) {
	      return _this._handleCommitSuccess(transaction, result.response);
	    }, function (error) {
	      return _this._handleCommitFailure(transaction, error);
	    });
	  };

	  RelayMutationQueue.prototype._handleRollback = function _handleRollback(transaction) {
	    this._clearPendingTransaction(transaction);
	    this._batchRefreshQueuedData();
	  };

	  RelayMutationQueue.prototype._clearPendingTransaction = function _clearPendingTransaction(transaction) {
	    delete this._pendingTransactionMap[transaction.id];
	    this._queue = this._queue.filter(function (tx) {
	      return tx !== transaction;
	    });
	  };

	  RelayMutationQueue.prototype._advanceCollisionQueue = function _advanceCollisionQueue(transaction) {
	    var collisionKey = transaction.getCollisionKey();
	    if (collisionKey) {
	      var collisionQueue = this._collisionQueueMap[collisionKey];
	      if (collisionQueue) {
	        // Remove the transaction that called this function.
	        collisionQueue.shift();

	        if (collisionQueue.length) {
	          this._handleCommit(collisionQueue[0]);
	        } else {
	          delete this._collisionQueueMap[collisionKey];
	        }
	      }
	    }
	  };

	  RelayMutationQueue.prototype._failCollisionQueue = function _failCollisionQueue(failedTransaction) {
	    var _this2 = this;

	    var collisionKey = failedTransaction.getCollisionKey();
	    if (collisionKey) {
	      var collisionQueue = this._collisionQueueMap[collisionKey];
	      if (collisionQueue) {
	        // Remove the transaction that called this function.
	        collisionQueue.forEach(function (queuedTransaction) {
	          if (queuedTransaction !== failedTransaction) {
	            _this2._handleCommitFailure(queuedTransaction, null);
	          }
	        });
	        delete this._collisionQueueMap[collisionKey];
	      }
	    }
	  };

	  RelayMutationQueue.prototype._batchRefreshQueuedData = function _batchRefreshQueuedData() {
	    var _this3 = this;

	    if (!this._willBatchRefreshQueuedData) {
	      this._willBatchRefreshQueuedData = true;
	      __webpack_require__(40)(function () {
	        _this3._willBatchRefreshQueuedData = false;
	        _this3._refreshQueuedData();
	      });
	    }
	  };

	  RelayMutationQueue.prototype._refreshQueuedData = function _refreshQueuedData() {
	    var _this4 = this;

	    this._storeData.clearQueuedData();
	    this._queue.forEach(function (transaction) {
	      return _this4._handleOptimisticUpdate(transaction);
	    });
	  };

	  return RelayMutationQueue;
	}();

	/**
	 * @private
	 */


	var RelayPendingTransaction = function () {
	  function RelayPendingTransaction(transactionData) {
	    (0, _classCallCheck3['default'])(this, RelayPendingTransaction);

	    this.error = null;
	    this.id = transactionData.id;
	    this.mutation = transactionData.mutation;
	    this.mutationTransaction = transactionData.mutationTransaction;
	    this.onFailure = transactionData.onFailure;
	    this.onSuccess = transactionData.onSuccess;
	    this.status = __webpack_require__(19).CREATED;
	  }
	  // $FlowFixMe(>=0.34.0)

	  // $FlowFixMe(>=0.34.0)


	  // Lazily computed and memoized private properties


	  RelayPendingTransaction.prototype.getCallName = function getCallName() {
	    if (!this._callName) {
	      this._callName = this.getMutationNode().calls[0].name;
	    }
	    return this._callName;
	  };

	  RelayPendingTransaction.prototype.getCollisionKey = function getCollisionKey() {
	    if (this._collisionKey === undefined) {
	      this._collisionKey = this.mutation.getCollisionKey() || null;
	    }
	    return this._collisionKey;
	  };

	  RelayPendingTransaction.prototype.getConfigs = function getConfigs() {
	    if (!this._configs) {
	      this._configs = this.mutation.getConfigs();
	    }
	    return this._configs;
	  };

	  RelayPendingTransaction.prototype.getFatQuery = function getFatQuery() {
	    if (!this._fatQuery) {
	      var fragment = __webpack_require__(138).Fragment(this.mutation.getFatQuery());
	      __webpack_require__(1)(fragment instanceof __webpack_require__(2).Fragment, 'RelayMutationQueue: Expected `getFatQuery` to return a GraphQL ' + 'Fragment');
	      this._fatQuery = __webpack_require__(39)(__webpack_require__(50)(fragment, {
	        // TODO #10341736
	        // This used to be `preserveEmptyNodes: fragment.isPattern()`. We
	        // discovered that products were not marking their fat queries as
	        // patterns (by adding `@relay(pattern: true)`) which was causing
	        // `preserveEmptyNodes` to be false. This meant that empty fields,
	        // would be stripped instead of being used to produce an intersection
	        // with the tracked query. Products were able to do this because the
	        // Babel Relay plugin doesn't produce validation errors for empty
	        // fields. It should, and we will make it do so, but for now we're
	        // going to set this to `true` always, and make the plugin warn when
	        // it encounters an empty field that supports subselections in a
	        // non-pattern fragment. Revert this when done.
	        preserveEmptyNodes: true,
	        shouldRemoveFragments: true
	      }));
	    }
	    return this._fatQuery;
	  };

	  RelayPendingTransaction.prototype.getFiles = function getFiles() {
	    if (this._files === undefined) {
	      this._files = this.mutation.getFiles() || null;
	    }
	    return this._files;
	  };

	  RelayPendingTransaction.prototype.getInputVariable = function getInputVariable() {
	    if (!this._inputVariable) {
	      var inputVariable = (0, _extends4['default'])({}, this.mutation.getVariables(), (0, _defineProperty3['default'])({}, CLIENT_MUTATION_ID, this.id));
	      this._inputVariable = inputVariable;
	    }
	    return this._inputVariable;
	  };

	  RelayPendingTransaction.prototype.getMutationNode = function getMutationNode() {
	    if (!this._mutationNode) {
	      var mutationNode = __webpack_require__(7).getMutation(this.mutation.getMutation());
	      __webpack_require__(1)(mutationNode, 'RelayMutation: Expected `getMutation` to return a mutation created ' + 'with Relay.QL`mutation { ... }`.');
	      this._mutationNode = mutationNode;
	    }
	    return this._mutationNode;
	  };

	  RelayPendingTransaction.prototype.getOptimisticConfigs = function getOptimisticConfigs() {
	    if (this._optimisticConfigs === undefined) {
	      this._optimisticConfigs = this.mutation.getOptimisticConfigs() || null;
	    }
	    return this._optimisticConfigs;
	  };

	  RelayPendingTransaction.prototype.getOptimisticQuery = function getOptimisticQuery(storeData) {
	    if (this._optimisticQuery === undefined) {
	      /* eslint-disable no-console */
	      if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	        console.groupCollapsed('Optimistic query for `' + this.getCallName() + '`');
	      }
	      /* eslint-enable no-console */
	      var optimisticResponse = this._getRawOptimisticResponse();
	      if (optimisticResponse) {
	        var optimisticConfigs = this.getOptimisticConfigs();
	        var tracker = getTracker(storeData);
	        if (optimisticConfigs) {
	          this._optimisticQuery = __webpack_require__(60).buildQuery({
	            configs: optimisticConfigs,
	            fatQuery: this.getFatQuery(),
	            input: this.getInputVariable(),
	            mutationName: this.mutation.constructor.name,
	            mutation: this.getMutationNode(),
	            tracker: tracker
	          });
	        } else {
	          this._optimisticQuery = __webpack_require__(60).buildQueryForOptimisticUpdate({
	            response: optimisticResponse,
	            fatQuery: this.getFatQuery(),
	            mutation: this.getMutationNode()
	          });
	        }
	      } else {
	        this._optimisticQuery = null;
	      }
	      /* eslint-disable no-console */
	      if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	        __webpack_require__(43).printOptimisticMutation(this._optimisticQuery, optimisticResponse);

	        console.groupEnd();
	      }
	      /* eslint-enable no-console */
	    }
	    return this._optimisticQuery;
	  };

	  RelayPendingTransaction.prototype._getRawOptimisticResponse = function _getRawOptimisticResponse() {
	    if (this._rawOptimisticResponse === undefined) {
	      var optimisticResponse = this.mutation.getOptimisticResponse() || null;
	      if (optimisticResponse) {
	        optimisticResponse[CLIENT_MUTATION_ID] = this.id;
	      }
	      this._rawOptimisticResponse = optimisticResponse;
	    }
	    return this._rawOptimisticResponse;
	  };

	  RelayPendingTransaction.prototype.getOptimisticResponse = function getOptimisticResponse() {
	    if (this._optimisticResponse === undefined) {
	      var optimisticResponse = this._getRawOptimisticResponse();
	      if (optimisticResponse) {
	        this._optimisticResponse = __webpack_require__(80).inferRelayPayloadFromData(optimisticResponse);
	      } else {
	        this._optimisticResponse = optimisticResponse;
	      }
	    }
	    return this._optimisticResponse;
	  };

	  RelayPendingTransaction.prototype.getQuery = function getQuery(storeData) {
	    if (!this._query) {
	      /* eslint-disable no-console */
	      if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	        console.groupCollapsed('Mutation query for `' + this.getCallName() + '`');
	      }
	      /* eslint-enable no-console */
	      var tracker = getTracker(storeData);
	      this._query = __webpack_require__(60).buildQuery({
	        configs: this.getConfigs(),
	        fatQuery: this.getFatQuery(),
	        input: this.getInputVariable(),
	        mutationName: this.getMutationNode().name,
	        mutation: this.getMutationNode(),
	        tracker: tracker
	      });
	      /* eslint-disable no-console */
	      if (("development") !== 'production' && console.groupCollapsed && console.groupEnd) {
	        __webpack_require__(43).printMutation(this._query);
	        console.groupEnd();
	      }
	      /* eslint-enable no-console */
	    }
	    return this._query;
	  };

	  return RelayPendingTransaction;
	}();

	function getTracker(storeData) {
	  var tracker = storeData.getQueryTracker();
	  __webpack_require__(1)(tracker, 'RelayMutationQueue: a RelayQueryTracker was not configured but an ' + 'attempt to process a RelayMutation instance was made. Either use ' + 'RelayGraphQLMutation (which does not require a tracker), or use ' + '`RelayStoreData.injectQueryTracker()` to configure a tracker. Be ' + 'aware that trackers are provided by default, so if you are seeing ' + 'this error it means that somebody has explicitly intended to opt ' + 'out of query tracking.');
	  return tracker;
	}

	function getNextID() {
	  return __webpack_require__(47)(transactionIDCounter++);
	}

	module.exports = RelayMutationQueue;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMutationTransaction
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var COLLISION_COMMIT_FAILED = __webpack_require__(19).COLLISION_COMMIT_FAILED,
	    COMMIT_FAILED = __webpack_require__(19).COMMIT_FAILED,
	    COMMIT_QUEUED = __webpack_require__(19).COMMIT_QUEUED,
	    CREATED = __webpack_require__(19).CREATED,
	    UNCOMMITTED = __webpack_require__(19).UNCOMMITTED;

	/**
	 * @internal
	 */


	var RelayMutationTransaction = function () {
	  function RelayMutationTransaction(mutationQueue, id) {
	    (0, _classCallCheck3['default'])(this, RelayMutationTransaction);
	    this._rolledBack = false;

	    this._id = id;
	    this._mutationQueue = mutationQueue;
	  }

	  /**
	   * Applies the transaction to the local store (ie. as an optimistic update).
	   *
	   * Returns itself so as to provide a "fluent interface".
	   */


	  RelayMutationTransaction.prototype.applyOptimistic = function applyOptimistic() {
	    var status = this.getStatus();
	    __webpack_require__(1)(status === CREATED, 'RelayMutationTransaction: Only transactions with status `CREATED` ' + 'can be applied.');

	    this._mutationQueue.applyOptimistic(this._id);
	    return this;
	  };

	  /**
	   * Commits the transaction (ie. performs a server update).
	   *
	   * Returns itself so as to provide a "fluent interface".
	   */


	  RelayMutationTransaction.prototype.commit = function commit() {
	    var status = this.getStatus();
	    __webpack_require__(1)(status === CREATED || status === UNCOMMITTED, 'RelayMutationTransaction: Only transactions with status `CREATED` or ' + '`UNCOMMITTED` can be committed.');

	    this._mutationQueue.commit(this._id);
	    return this;
	  };

	  RelayMutationTransaction.prototype.recommit = function recommit() {
	    var status = this.getStatus();
	    __webpack_require__(1)(status === COLLISION_COMMIT_FAILED || status === COMMIT_FAILED || status === CREATED, 'RelayMutationTransaction: Only transaction with status ' + '`CREATED`, `COMMIT_FAILED`, or `COLLISION_COMMIT_FAILED` can be ' + 'recomitted.');

	    this._mutationQueue.commit(this._id);
	  };

	  RelayMutationTransaction.prototype.rollback = function rollback() {
	    var status = this.getStatus();
	    __webpack_require__(1)(status === COLLISION_COMMIT_FAILED || status === COMMIT_FAILED || status === COMMIT_QUEUED || status === CREATED || status === UNCOMMITTED, 'RelayMutationTransaction: Only transactions with status `CREATED`, ' + '`UNCOMMITTED`, `COMMIT_FAILED`, `COLLISION_COMMIT_FAILED`, or ' + '`COMMIT_QUEUED` can be rolled back.');

	    this._rolledBack = true;
	    this._mutationQueue.rollback(this._id);
	  };

	  RelayMutationTransaction.prototype.getError = function getError() {
	    return this._mutationQueue.getError(this._id);
	  };

	  RelayMutationTransaction.prototype.getStatus = function getStatus() {
	    return this._rolledBack ? __webpack_require__(19).ROLLED_BACK : this._mutationQueue.getStatus(this._id);
	  };

	  RelayMutationTransaction.prototype.getHash = function getHash() {
	    return this._id + ':' + this.getStatus();
	  };

	  RelayMutationTransaction.prototype.getID = function getID() {
	    return this._id;
	  };

	  return RelayMutationTransaction;
	}();

	module.exports = RelayMutationTransaction;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayNetworkLayer
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * `RelayNetworkLayer` provides a method to inject custom network behavior.
	 */
	var RelayNetworkLayer = function () {
	  function RelayNetworkLayer() {
	    (0, _classCallCheck3['default'])(this, RelayNetworkLayer);

	    this._implementation = null;
	    this._queue = null;
	    this._subscribers = [];
	  }

	  /**
	   * @internal
	   */


	  RelayNetworkLayer.prototype.injectDefaultImplementation = function injectDefaultImplementation(implementation) {
	    if (this._defaultImplementation) {
	      __webpack_require__(5)(false, 'RelayNetworkLayer: Call received to injectDefaultImplementation(), ' + 'but a default layer was already injected.');
	    }
	    this._defaultImplementation = implementation;
	  };

	  RelayNetworkLayer.prototype.injectImplementation = function injectImplementation(implementation) {
	    if (this._implementation) {
	      __webpack_require__(5)(false, 'RelayNetworkLayer: Call received to injectImplementation(), but ' + 'a layer was already injected.');
	    }
	    this._implementation = implementation;
	  };

	  RelayNetworkLayer.prototype.addNetworkSubscriber = function addNetworkSubscriber(queryCallback, mutationCallback) {
	    var _this = this;

	    var index = this._subscribers.length;
	    this._subscribers.push({ queryCallback: queryCallback, mutationCallback: mutationCallback });
	    return {
	      remove: function remove() {
	        delete _this._subscribers[index];
	      }
	    };
	  };

	  RelayNetworkLayer.prototype.sendMutation = function sendMutation(mutationRequest) {
	    var implementation = this._getImplementation();
	    this._subscribers.forEach(function (_ref) {
	      var mutationCallback = _ref.mutationCallback;

	      if (mutationCallback) {
	        mutationCallback(mutationRequest);
	      }
	    });
	    var maybePromise = implementation.sendMutation(mutationRequest);
	    if (maybePromise) {
	      __webpack_require__(46)(Promise.resolve(maybePromise));
	    }
	  };

	  RelayNetworkLayer.prototype.sendQueries = function sendQueries(queryRequests) {
	    profileQueue(queryRequests);
	    var implementation = this._getImplementation();
	    this._subscribers.forEach(function (_ref2) {
	      var queryCallback = _ref2.queryCallback;

	      if (queryCallback) {
	        queryRequests.forEach(function (request) {
	          // $FlowIssue #10907496 queryCallback was checked above
	          queryCallback(request);
	        });
	      }
	    });
	    var maybePromise = implementation.sendQueries(queryRequests);
	    if (maybePromise) {
	      __webpack_require__(46)(Promise.resolve(maybePromise));
	    }
	  };

	  RelayNetworkLayer.prototype.supports = function supports() {
	    var implementation = this._getImplementation();

	    for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
	      options[_key] = arguments[_key];
	    }

	    return implementation.supports.apply(implementation, options);
	  };

	  RelayNetworkLayer.prototype._getImplementation = function _getImplementation() {
	    var implementation = this._implementation || this._defaultImplementation;
	    __webpack_require__(1)(implementation, 'RelayNetworkLayer: Use `RelayEnvironment.injectNetworkLayer` to ' + 'configure a network layer.');
	    return implementation;
	  };

	  /**
	   * Schedules the supplied `query` to be sent to the server.
	   *
	   * This is a low-level transport API; application code should use higher-level
	   * interfaces exposed by RelayContainer for retrieving data transparently via
	   * queries defined on components.
	   */


	  RelayNetworkLayer.prototype.fetchRelayQuery = function fetchRelayQuery(query) {
	    var _this2 = this;

	    var currentQueue = this._queue || [];
	    if (!this._queue) {
	      this._queue = currentQueue;
	      __webpack_require__(40)(function () {
	        _this2._queue = null;
	        _this2.sendQueries(currentQueue);
	      });
	    }
	    var request = new (__webpack_require__(83))(query);
	    currentQueue.push(request);
	    return request.getPromise();
	  };

	  return RelayNetworkLayer;
	}();

	/**
	 * Profiles time from request to receiving the first server response.
	 */


	function profileQueue(currentQueue) {
	  // TODO #8783781: remove aggregate `fetchRelayQuery` profiler
	  var firstResultProfiler = __webpack_require__(10).profile('fetchRelayQuery');
	  currentQueue.forEach(function (query) {
	    var profiler = __webpack_require__(10).profile('fetchRelayQuery.query', query.getQuery().getName());
	    var onSettle = function onSettle() {
	      profiler.stop();
	      if (firstResultProfiler) {
	        firstResultProfiler.stop();
	        firstResultProfiler = null;
	      }
	    };
	    /* $FlowFixMe(site=react_native_fb,oss) - Flow now prevents you from calling a
	     * function with more arguments than it expects. This comment suppresses an
	     * error that was noticed when we made this change. Delete this comment to
	     * see the error. */
	    query.done(onSettle, onSettle);
	  });
	}

	__webpack_require__(10).instrumentMethods(RelayNetworkLayer.prototype, {
	  sendMutation: 'RelayNetworkLayer.sendMutation',
	  sendQueries: 'RelayNetworkLayer.sendQueries'
	});

	module.exports = RelayNetworkLayer;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayOSSConnectionInterface
	 * 
	 * @format
	 */

	'use strict';

	var _defineProperty3 = _interopRequireDefault(__webpack_require__(37));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var CLIENT_MUTATION_ID = 'clientMutationId';
	var CONNECTION_CALLS = {
	  after: true,
	  before: true,
	  find: true,
	  first: true,
	  last: true,
	  surrounds: true
	};
	var CURSOR = 'cursor';
	var EDGES = 'edges';
	var END_CURSOR = 'endCursor';
	var HAS_NEXT_PAGE = 'hasNextPage';
	var HAS_PREV_PAGE = 'hasPreviousPage';
	var NODE = 'node';
	var PAGE_INFO = 'pageInfo';
	var PAGE_INFO_TYPE = 'PageInfo';
	var REQUIRED_RANGE_CALLS = {
	  find: true,
	  first: true,
	  last: true
	};
	var START_CURSOR = 'startCursor';

	/**
	 * @internal
	 *
	 * Defines logic relevant to the informal "Connection" GraphQL interface.
	 */
	var RelayOSSConnectionInterface = {
	  CLIENT_MUTATION_ID: CLIENT_MUTATION_ID,
	  CURSOR: CURSOR,
	  EDGES: EDGES,
	  END_CURSOR: END_CURSOR,
	  HAS_NEXT_PAGE: HAS_NEXT_PAGE,
	  HAS_PREV_PAGE: HAS_PREV_PAGE,
	  NODE: NODE,
	  PAGE_INFO: PAGE_INFO,
	  PAGE_INFO_TYPE: PAGE_INFO_TYPE,
	  START_CURSOR: START_CURSOR,

	  /**
	   * Whether `edges` fields are expected to have `source` fields.
	   */
	  EDGES_HAVE_SOURCE_FIELD: false,

	  /**
	   * Checks whether a call exists strictly to encode which parts of a connection
	   * to fetch. Fields that only differ by connection call values should have the
	   * same identity.
	   */
	  isConnectionCall: function isConnectionCall(call) {
	    return CONNECTION_CALLS.hasOwnProperty(call.name);
	  },


	  /**
	   * Checks whether a set of calls on a connection supply enough information to
	   * fetch the range fields (i.e. `edges` and `page_info`).
	   */
	  hasRangeCalls: function hasRangeCalls(calls) {
	    return calls.some(function (call) {
	      return REQUIRED_RANGE_CALLS.hasOwnProperty(call.name);
	    });
	  },


	  /**
	   * Gets a default record representing a connection's `PAGE_INFO`.
	   */
	  getDefaultPageInfo: function getDefaultPageInfo() {
	    var _ref;

	    return _ref = {}, (0, _defineProperty3['default'])(_ref, END_CURSOR, undefined), (0, _defineProperty3['default'])(_ref, HAS_NEXT_PAGE, false), (0, _defineProperty3['default'])(_ref, HAS_PREV_PAGE, false), (0, _defineProperty3['default'])(_ref, START_CURSOR, undefined), _ref;
	  }
	};

	module.exports = RelayOSSConnectionInterface;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayOperationSelector
	 * 
	 * @format
	 */

	'use strict';

	var _require = __webpack_require__(89),
	    ROOT_ID = _require.ROOT_ID;

	var _require2 = __webpack_require__(44),
	    getOperationVariables = _require2.getOperationVariables;

	/**
	 * @public
	 *
	 * Implementation of `RelayCore#createOperationSelector()` defined in
	 * `RelayEnvironmentTypes` for the classic core.
	 */
	function createOperationSelector(operation, variables) {
	  var concreteFragment = __webpack_require__(7).getFragment(operation.node);
	  __webpack_require__(1)(concreteFragment, 'RelayOperationSelector: Expected a query, got %s `%s`.', operation.node.kind, operation.name);

	  var operationVariables = getOperationVariables(operation, variables);
	  var fragment = {
	    dataID: ROOT_ID,
	    node: concreteFragment,
	    variables: operationVariables
	  };

	  return {
	    fragment: fragment,
	    node: operation,
	    root: fragment,
	    variables: operationVariables
	  };
	}

	module.exports = {
	  createOperationSelector: createOperationSelector
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayPendingQueryTracker
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Tracks pending (in-flight) queries.
	 */
	var RelayPendingQueryTracker = function () {
	  // Asynchronous mapping from preload query IDs to results.
	  function RelayPendingQueryTracker(storeData) {
	    (0, _classCallCheck3['default'])(this, RelayPendingQueryTracker);

	    this._pendingFetchMap = {};
	    this._preloadQueryMap = new (__webpack_require__(147))();
	    this._storeData = storeData;
	  }

	  /**
	   * Used by `GraphQLQueryRunner` to enqueue new queries.
	   */


	  RelayPendingQueryTracker.prototype.add = function add(params) {
	    return new PendingFetch(params, {
	      pendingFetchMap: this._pendingFetchMap,
	      preloadQueryMap: this._preloadQueryMap,
	      storeData: this._storeData
	    });
	  };

	  RelayPendingQueryTracker.prototype.hasPendingQueries = function hasPendingQueries() {
	    return hasItems(this._pendingFetchMap);
	  };

	  /**
	   * Clears all pending query tracking. Does not cancel the queries themselves.
	   */


	  RelayPendingQueryTracker.prototype.resetPending = function resetPending() {
	    this._pendingFetchMap = {};
	  };

	  RelayPendingQueryTracker.prototype.resolvePreloadQuery = function resolvePreloadQuery(queryID, result) {
	    this._preloadQueryMap.resolveKey(queryID, result);
	  };

	  RelayPendingQueryTracker.prototype.rejectPreloadQuery = function rejectPreloadQuery(queryID, error) {
	    this._preloadQueryMap.rejectKey(queryID, error);
	  };

	  return RelayPendingQueryTracker;
	}();

	/**
	 * @private
	 */


	var PendingFetch = function () {
	  function PendingFetch(_ref, _ref2) {
	    var fetchMode = _ref.fetchMode,
	        forceIndex = _ref.forceIndex,
	        query = _ref.query;
	    var pendingFetchMap = _ref2.pendingFetchMap,
	        preloadQueryMap = _ref2.preloadQueryMap,
	        storeData = _ref2.storeData;
	    (0, _classCallCheck3['default'])(this, PendingFetch);

	    var queryID = query.getID();
	    this._forceIndex = forceIndex;
	    this._pendingFetchMap = pendingFetchMap;
	    this._preloadQueryMap = preloadQueryMap;
	    this._query = query;
	    this._resolvedDeferred = new (__webpack_require__(73))();
	    this._resolvedQuery = false;
	    this._storeData = storeData;

	    this._fetchQueryPromise = fetchMode === __webpack_require__(33).PRELOAD ? this._preloadQueryMap.get(queryID) : storeData.getNetworkLayer().fetchRelayQuery(query);

	    this._fetchedQuery = false;
	    this._error = null;

	    this._pendingFetchMap[queryID] = {
	      fetch: this,
	      query: query
	    };
	    __webpack_require__(46)(this._fetchQueryPromise.then(this._handleQuerySuccess.bind(this), this._handleQueryFailure.bind(this)));
	  }

	  PendingFetch.prototype.isResolvable = function isResolvable() {
	    return this._resolvedQuery;
	  };

	  PendingFetch.prototype.getQuery = function getQuery() {
	    return this._query;
	  };

	  PendingFetch.prototype.getResolvedPromise = function getResolvedPromise() {
	    return this._resolvedDeferred.getPromise();
	  };

	  PendingFetch.prototype._handleQuerySuccess = function _handleQuerySuccess(result) {
	    var _this = this;

	    this._fetchedQuery = true;

	    __webpack_require__(46)(this._storeData.getTaskQueue().enqueue(function () {
	      var response = result.response;
	      __webpack_require__(1)(response && typeof response === 'object', 'RelayPendingQueryTracker: Expected response to be an object, got ' + '`%s`.', response ? typeof response : response);
	      _this._storeData.handleQueryPayload(_this._query, response, _this._forceIndex);
	    }).then(this._markQueryAsResolved.bind(this), this._markAsRejected.bind(this)));
	  };

	  PendingFetch.prototype._handleQueryFailure = function _handleQueryFailure(error) {
	    this._markAsRejected(error);
	  };

	  PendingFetch.prototype._markQueryAsResolved = function _markQueryAsResolved() {
	    var queryID = this.getQuery().getID();
	    delete this._pendingFetchMap[queryID];

	    this._resolvedQuery = true;
	    this._updateResolvedDeferred();
	  };

	  PendingFetch.prototype._markAsRejected = function _markAsRejected(error) {
	    var queryID = this.getQuery().getID();
	    delete this._pendingFetchMap[queryID];

	    console.warn(error.message);

	    this._error = error;
	    this._updateResolvedDeferred();
	  };

	  PendingFetch.prototype._updateResolvedDeferred = function _updateResolvedDeferred() {
	    if (this._isSettled() && !this._resolvedDeferred.isSettled()) {
	      if (this._error) {
	        this._resolvedDeferred.reject(this._error);
	      } else {
	        this._resolvedDeferred.resolve(undefined);
	      }
	    }
	  };

	  PendingFetch.prototype._isSettled = function _isSettled() {
	    return !!this._error || this._resolvedQuery;
	  };

	  return PendingFetch;
	}();

	function hasItems(map) {
	  return !!Object.keys(map).length;
	}

	module.exports = RelayPendingQueryTracker;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayPublic
	 * 
	 * @format
	 */

	'use strict';

	if (typeof global.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined') {
	  global.__REACT_DEVTOOLS_GLOBAL_HOOK__._relayInternals = __webpack_require__(115);
	}

	/**
	 * Relay contains the set of public methods used to initialize and orchestrate
	 * a React application that uses GraphQL to declare data dependencies.
	 */
	var RelayPublic = {
	  Environment: __webpack_require__(78),
	  GraphQLMutation: __webpack_require__(59),
	  Mutation: __webpack_require__(116),
	  PropTypes: __webpack_require__(24),
	  QL: __webpack_require__(81),
	  QueryConfig: __webpack_require__(82),
	  ReadyStateRenderer: __webpack_require__(84),
	  Renderer: __webpack_require__(86),
	  RootContainer: __webpack_require__(127),
	  Route: __webpack_require__(128),
	  Store: __webpack_require__(27),

	  createContainer: __webpack_require__(109).create,
	  createQuery: __webpack_require__(133),
	  getQueries: __webpack_require__(70),
	  disableQueryCaching: __webpack_require__(61).disable,
	  injectNetworkLayer: __webpack_require__(27).injectNetworkLayer.bind(__webpack_require__(27)),
	  injectTaskScheduler: __webpack_require__(27).injectTaskScheduler.bind(__webpack_require__(27)),
	  isContainer: __webpack_require__(93)
	};

	module.exports = RelayPublic;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQueryResultObservable
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * An Rx Observable representing the results of a fragment in the local cache.
	 * Subscribers are notified as follows:
	 *
	 * `onNext`: Called with the latest results of a fragment. Results may be `null`
	 * if the data was marked as deleted or `undefined` if the fragment was either
	 * not fetched or evicted from the cache. Note that required fields may be
	 * missing if the fragment was not fetched with `Relay.Store.primeCache` or
	 * `Relay.Store.forceFetch` before creating a subscription.
	 * - Called synchronously on `subscribe()`.
	 * - Called whenever the results of the fragment change.
	 *
	 * `onError`: Currently not called. In the future this may be used to indicate
	 * that required data for the fragment has not been fetched or was evicted
	 * from the cache.
	 *
	 * `onCompleted`: Not called.
	 *
	 * @see http://reactivex.io/documentation/observable.html
	 */
	var RelayQueryResultObservable = function () {
	  function RelayQueryResultObservable(storeData, fragment, dataID) {
	    (0, _classCallCheck3['default'])(this, RelayQueryResultObservable);

	    this._data = undefined;
	    this._dataID = dataID;
	    this._fragment = fragment;
	    this._fragmentResolver = null;
	    this._storeData = storeData;
	    this._subscriptionCallbacks = [];
	    this._subscriptionCount = 0;
	  }

	  RelayQueryResultObservable.prototype.subscribe = function subscribe(callbacks) {
	    var _this = this;

	    this._subscriptionCount++;
	    var subscriptionIndex = this._subscriptionCallbacks.length;
	    var subscription = {
	      dispose: function dispose() {
	        __webpack_require__(1)(_this._subscriptionCallbacks[subscriptionIndex], 'RelayQueryResultObservable: Subscriptions may only be disposed once.');
	        delete _this._subscriptionCallbacks[subscriptionIndex];
	        _this._subscriptionCount--;
	        if (_this._subscriptionCount === 0) {
	          _this._unobserve();
	        }
	      }
	    };
	    this._subscriptionCallbacks.push(callbacks);

	    if (this._subscriptionCount === 1) {
	      this._resolveData(this._observe());
	    }
	    this._fire(callbacks);

	    return subscription;
	  };

	  RelayQueryResultObservable.prototype._observe = function _observe() {
	    var _this2 = this;

	    __webpack_require__(1)(!this._fragmentResolver, 'RelayQueryResultObservable: Initialized twice.');
	    var fragmentResolver = new (__webpack_require__(76))(this._storeData, this._fragment, function () {
	      return _this2._onUpdate(fragmentResolver);
	    });
	    this._fragmentResolver = fragmentResolver;
	    return fragmentResolver;
	  };

	  RelayQueryResultObservable.prototype._unobserve = function _unobserve() {
	    if (this._fragmentResolver) {
	      this._data = undefined;
	      this._fragmentResolver.dispose();
	      this._fragmentResolver = null;
	    }
	  };

	  RelayQueryResultObservable.prototype._onUpdate = function _onUpdate(fragmentResolver) {
	    var _this3 = this;

	    this._resolveData(fragmentResolver);
	    this._subscriptionCallbacks.forEach(function (callbacks) {
	      return _this3._fire(callbacks);
	    });
	  };

	  RelayQueryResultObservable.prototype._fire = function _fire(callbacks) {
	    callbacks.onNext && callbacks.onNext(this._data);
	  };

	  RelayQueryResultObservable.prototype._resolveData = function _resolveData(fragmentResolver) {
	    var data = fragmentResolver.resolve(this._fragment, this._dataID);
	    __webpack_require__(1)(!Array.isArray(data), 'RelayQueryResultObservable: Plural fragments are not supported.');
	    this._data = data;
	  };

	  return RelayQueryResultObservable;
	}();

	module.exports = RelayQueryResultObservable;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayQueryTracker
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(30));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var TYPE = '__type__';

	var RelayQueryTracker = function () {
	  function RelayQueryTracker() {
	    (0, _classCallCheck3['default'])(this, RelayQueryTracker);

	    this._trackedNodesByID = {};
	  }

	  RelayQueryTracker.prototype.trackNodeForID = function trackNodeForID(node, dataID) {
	    // Don't track legacy `__type__` fields
	    if (node instanceof __webpack_require__(2).Field && node.getSchemaName() === TYPE) {
	      return;
	    }

	    this._trackedNodesByID[dataID] = this._trackedNodesByID[dataID] || {
	      trackedNodes: [],
	      isMerged: false
	    };
	    this._trackedNodesByID[dataID].trackedNodes.push(node);
	    this._trackedNodesByID[dataID].isMerged = false;
	  };

	  /**
	   * Get the children that are tracked for the given `dataID`, if any.
	   */


	  RelayQueryTracker.prototype.getTrackedChildrenForID = function getTrackedChildrenForID(dataID) {
	    var trackedNodesByID = this._trackedNodesByID[dataID];
	    if (!trackedNodesByID) {
	      return [];
	    }
	    var isMerged = trackedNodesByID.isMerged,
	        trackedNodes = trackedNodesByID.trackedNodes;

	    if (!isMerged) {
	      var trackedChildren = [];
	      trackedNodes.forEach(function (trackedQuery) {
	        trackedChildren.push.apply(trackedChildren, (0, _toConsumableArray3['default'])(trackedQuery.getChildren()));
	      });
	      trackedNodes.length = 0;
	      trackedNodesByID.isMerged = true;
	      var containerNode = __webpack_require__(2).Fragment.build('RelayQueryTracker', __webpack_require__(8).NODE_TYPE, trackedChildren);
	      containerNode = __webpack_require__(50)(containerNode);
	      if (containerNode) {
	        trackedNodes.push(containerNode);
	      }
	    }
	    var trackedNode = trackedNodes[0];
	    if (trackedNode) {
	      return trackedNode.getChildren();
	    }
	    return [];
	  };

	  /**
	   * Removes all nodes that are tracking the given DataID from the
	   * query-tracker.
	   */


	  RelayQueryTracker.prototype.untrackNodesForID = function untrackNodesForID(dataID) {
	    delete this._trackedNodesByID[dataID];
	  };

	  return RelayQueryTracker;
	}();

	module.exports = RelayQueryTracker;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayReadyState
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(30));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 */
	var RelayReadyState = function () {
	  function RelayReadyState(onReadyStateChange) {
	    (0, _classCallCheck3['default'])(this, RelayReadyState);

	    this._onReadyStateChange = onReadyStateChange;
	    this._readyState = {
	      aborted: false,
	      done: false,
	      error: null,
	      events: [],
	      ready: false,
	      stale: false
	    };
	    this._scheduled = false;
	  }

	  RelayReadyState.prototype.update = function update(nextReadyState, newEvents) {
	    var prevReadyState = this._readyState;
	    if (prevReadyState.aborted) {
	      return;
	    }
	    if (prevReadyState.done || prevReadyState.error) {
	      if (nextReadyState.stale) {
	        if (prevReadyState.error) {
	          this._mergeState(nextReadyState, newEvents);
	        }
	        // Do nothing if stale data comes after server data.
	      } else if (!nextReadyState.aborted) {
	        __webpack_require__(5)(false, 'RelayReadyState: Invalid state change from `%s` to `%s`.', JSON.stringify(prevReadyState), JSON.stringify(nextReadyState));
	      }
	      return;
	    }
	    this._mergeState(nextReadyState, newEvents);
	  };

	  RelayReadyState.prototype._mergeState = function _mergeState(nextReadyState, newEvents) {
	    var _this = this;

	    this._readyState = (0, _extends3['default'])({}, this._readyState, nextReadyState, {
	      events: newEvents && newEvents.length ? [].concat((0, _toConsumableArray3['default'])(this._readyState.events), (0, _toConsumableArray3['default'])(newEvents)) : this._readyState.events
	    });
	    if (this._scheduled) {
	      return;
	    }
	    this._scheduled = true;
	    __webpack_require__(40)(function () {
	      _this._scheduled = false;
	      _this._onReadyStateChange(_this._readyState);
	    });
	  };

	  return RelayReadyState;
	}();

	module.exports = RelayReadyState;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRootContainer
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @public
	 *
	 * RelayRootContainer sends requests for data required to render the supplied
	 * `Component` and `route`. The `Component` must be a container created using
	 * `Relay.createContainer`.
	 *
	 * === Render Callbacks ===
	 *
	 * Whenever the RelayRootContainer renders, one of three render callback props
	 * are invoked depending on whether data is being loaded, can be resolved, or if
	 * an error is incurred.
	 *
	 *  ReactDOM.render(
	 *    <RelayRootContainer
	 *      Component={FooComponent}
	 *      route={fooRoute}
	 *      renderLoading={function() {
	 *        return <View>Loading...</View>;
	 *      }}
	 *      renderFetched={function(data) {
	 *        // Must spread `data` into <FooComponent>.
	 *        return <FooComponent {...data} />;
	 *      }}
	 *      renderFailure={function(error) {
	 *        return <View>Error: {error.message}</View>;
	 *      }}
	 *    />,
	 *    ...
	 *  );
	 *
	 * If a callback is not supplied, it has a default behavior:
	 *
	 *  - Without `renderFetched`, `Component` will be rendered with fetched data.
	 *  - Without `renderFailure`, an error will render to null.
	 *  - Without `renderLoading`, the existing view will continue to render. If
	 *    this is the initial mount (with no existing view), renders to null.
	 *
	 * In addition, supplying a `renderLoading` that returns undefined has the same
	 * effect as not supplying the callback. (Usually, an undefined return value is
	 * an error in React).
	 *
	 * === Refs ===
	 *
	 * References to elements rendered by any of these callbacks can be obtained by
	 * using the React `ref` prop. For example:
	 *
	 *   <FooComponent {...data} ref={handleFooRef} />
	 *
	 *   function handleFooRef(component) {
	 *     // Invoked when `<FooComponent>` is mounted or unmounted. When mounted,
	 *     // `component` will be the component. When unmounted, `component` will
	 *     // be null.
	 *   }
	 *
	 */
	function RelayRootContainer(_ref) {
	  var Component = _ref.Component,
	      forceFetch = _ref.forceFetch,
	      onReadyStateChange = _ref.onReadyStateChange,
	      renderFailure = _ref.renderFailure,
	      renderFetched = _ref.renderFetched,
	      renderLoading = _ref.renderLoading,
	      route = _ref.route,
	      shouldFetch = _ref.shouldFetch;

	  return __webpack_require__(25).createElement(__webpack_require__(86), {
	    Container: Component,
	    forceFetch: forceFetch,
	    onReadyStateChange: onReadyStateChange,
	    queryConfig: route,
	    environment: __webpack_require__(27),
	    shouldFetch: shouldFetch,
	    render: function render(_ref2) {
	      var done = _ref2.done,
	          error = _ref2.error,
	          props = _ref2.props,
	          retry = _ref2.retry,
	          stale = _ref2.stale;

	      if (error) {
	        if (renderFailure) {
	          return renderFailure(error, retry);
	        }
	      } else if (props) {
	        if (renderFetched) {
	          return renderFetched(props, { done: done, stale: stale });
	        } else {
	          return __webpack_require__(25).createElement(Component, props);
	        }
	      } else {
	        if (renderLoading) {
	          return renderLoading();
	        }
	      }
	      return undefined;
	    }
	  });
	}

	RelayRootContainer.propTypes = {
	  Component: __webpack_require__(24).Container,
	  forceFetch: __webpack_require__(17).bool,
	  onReadyStateChange: __webpack_require__(17).func,
	  renderFailure: __webpack_require__(17).func,
	  renderFetched: __webpack_require__(17).func,
	  renderLoading: __webpack_require__(17).func,
	  route: __webpack_require__(24).QueryConfig.isRequired,
	  shouldFetch: __webpack_require__(17).bool
	};

	module.exports = RelayRootContainer;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRoute
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var createURI = function createURI() {
	  return null;
	};

	/**
	 * Describes the root queries, param definitions and other metadata for a given
	 * path (URI).
	 */

	var RelayRoute = function (_RelayQueryConfig) {
	  (0, _inherits3['default'])(RelayRoute, _RelayQueryConfig);

	  function RelayRoute(initialVariables, uri) {
	    (0, _classCallCheck3['default'])(this, RelayRoute);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryConfig.call(this, initialVariables));

	    var constructor = _this.constructor;
	    var routeName = constructor.routeName,
	        path = constructor.path;


	    __webpack_require__(1)(constructor !== RelayRoute, 'RelayRoute: Abstract class cannot be instantiated.');
	    __webpack_require__(1)(routeName, '%s: Subclasses of RelayRoute must define a `routeName`.', constructor.name || '<<anonymous>>');

	    // $FlowIssue #9905535 - Object.defineProperty doesn't understand getters
	    Object.defineProperty(_this, 'uri', {
	      enumerable: true,
	      get: function get() {
	        if (!uri && path) {
	          uri = createURI(constructor, this.params);
	        }
	        return uri;
	      }
	    });
	    return _this;
	  }

	  RelayRoute.prototype.prepareVariables = function prepareVariables(prevVariables) {
	    var _constructor = this.constructor,
	        paramDefinitions = _constructor.paramDefinitions,
	        prepareParams = _constructor.prepareParams,
	        routeName = _constructor.routeName;

	    var params = prevVariables;
	    if (prepareParams) {
	      /* $FlowFixMe(>=0.17.0) - params is ?Tv but prepareParams expects Tv */
	      params = prepareParams(params);
	    }
	    __webpack_require__(11)(paramDefinitions, function (paramDefinition, paramName) {
	      if (params) {
	        if (params.hasOwnProperty(paramName)) {
	          return;
	        } else {
	          // Backfill param so that a call variable is created for it.
	          params[paramName] = undefined;
	        }
	      }
	      __webpack_require__(1)(!paramDefinition.required, 'RelayRoute: Missing required parameter `%s` in `%s`. Check the ' + 'supplied params or URI.', paramName, routeName);
	    });
	    return params;
	  };

	  RelayRoute.injectURICreator = function injectURICreator(creator) {
	    createURI = creator;
	  };

	  return RelayRoute;
	}(__webpack_require__(82));

	module.exports = RelayRoute;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayStoreData
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(141),
	    restoreFragmentDataFromCache = _require.restoreFragmentDataFromCache,
	    restoreQueriesDataFromCache = _require.restoreQueriesDataFromCache;

	var CLIENT_MUTATION_ID = __webpack_require__(6).CLIENT_MUTATION_ID;

	var ID = __webpack_require__(8).ID,
	    ID_TYPE = __webpack_require__(8).ID_TYPE,
	    NODE = __webpack_require__(8).NODE,
	    NODE_TYPE = __webpack_require__(8).NODE_TYPE,
	    TYPENAME = __webpack_require__(8).TYPENAME;

	var _require2 = __webpack_require__(89),
	    ROOT_ID = _require2.ROOT_ID,
	    ROOT_TYPE = _require2.ROOT_TYPE;

	var EXISTENT = __webpack_require__(16).EXISTENT;

	var idField = __webpack_require__(2).Field.build({
	  fieldName: ID,
	  type: 'String'
	});
	var typeField = __webpack_require__(2).Field.build({
	  fieldName: TYPENAME,
	  type: 'String'
	});

	/**
	 * @internal
	 *
	 * Wraps the data caches and associated metadata tracking objects used by
	 * GraphQLStore/RelayStore.
	 */

	var RelayStoreData = function () {
	  function RelayStoreData() {
	    var cachedRecords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var cachedRootCallMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var queuedRecords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var records = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var rootCallMap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	    var nodeRangeMap = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	    var rangeData = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new (__webpack_require__(106))();
	    (0, _classCallCheck3['default'])(this, RelayStoreData);

	    this._cacheManager = null;
	    this._cachedRecords = cachedRecords;
	    this._cachedRootCallMap = cachedRootCallMap;
	    this._cachedStore = new (__webpack_require__(64))({ cachedRecords: cachedRecords, records: records }, { cachedRootCallMap: cachedRootCallMap, rootCallMap: rootCallMap }, nodeRangeMap);
	    this._changeEmitter = new (__webpack_require__(105))(rangeData);
	    this._mutationQueue = new (__webpack_require__(117))(this);
	    this._networkLayer = new (__webpack_require__(119))();
	    this._nodeRangeMap = nodeRangeMap;
	    this._pendingQueryTracker = new (__webpack_require__(122))(this);
	    this._queryRunner = new (__webpack_require__(104))(this);
	    this._queryTracker = new (__webpack_require__(125))();
	    this._queuedRecords = queuedRecords;
	    this._queuedStore = new (__webpack_require__(64))({ cachedRecords: cachedRecords, queuedRecords: queuedRecords, records: records }, { cachedRootCallMap: cachedRootCallMap, rootCallMap: rootCallMap }, nodeRangeMap);
	    this._records = records;
	    this._recordStore = new (__webpack_require__(64))({ records: records }, { rootCallMap: rootCallMap }, nodeRangeMap);
	    this._rangeData = rangeData;
	    this._rootCallMap = rootCallMap;
	    this._taskQueue = new (__webpack_require__(130))();
	  }

	  /**
	   * Creates a garbage collector for this instance. After initialization all
	   * newly added DataIDs will be registered in the created garbage collector.
	   * This will show a warning if data has already been added to the instance.
	   */


	  RelayStoreData.prototype.initializeGarbageCollector = function initializeGarbageCollector(scheduler) {
	    __webpack_require__(1)(!this._garbageCollector, 'RelayStoreData: Garbage collector is already initialized.');
	    var shouldInitialize = this._isStoreDataEmpty();
	    __webpack_require__(5)(shouldInitialize, 'RelayStoreData: Garbage collection can only be initialized when no ' + 'data is present.');
	    if (shouldInitialize) {
	      this._garbageCollector = new (__webpack_require__(113))(this, scheduler);
	    }
	  };

	  /**
	   * @internal
	   *
	   * Sets/clears the query tracker.
	   *
	   * @warning Do not use this unless your application uses only
	   * `RelayGraphQLMutation` for mutations.
	   */


	  RelayStoreData.prototype.injectQueryTracker = function injectQueryTracker(queryTracker) {
	    this._queryTracker = queryTracker;
	  };

	  /**
	   * Sets/clears the scheduling function used by the internal task queue to
	   * schedule units of work for execution.
	   */


	  RelayStoreData.prototype.injectTaskScheduler = function injectTaskScheduler(scheduler) {
	    this._taskQueue.injectScheduler(scheduler);
	  };

	  /**
	   * Sets/clears the cache manager that is used to cache changes written to
	   * the store.
	   */


	  RelayStoreData.prototype.injectCacheManager = function injectCacheManager(cacheManager) {
	    this._cacheManager = cacheManager;
	  };

	  RelayStoreData.prototype.clearCacheManager = function clearCacheManager() {
	    this._cacheManager = null;
	  };

	  RelayStoreData.prototype.hasCacheManager = function hasCacheManager() {
	    return !!this._cacheManager;
	  };

	  RelayStoreData.prototype.getCacheManager = function getCacheManager() {
	    return this._cacheManager;
	  };

	  /**
	   * Returns whether a given record is affected by an optimistic update.
	   */


	  RelayStoreData.prototype.hasOptimisticUpdate = function hasOptimisticUpdate(dataID) {
	    dataID = this.getRangeData().getCanonicalClientID(dataID);
	    return this.getQueuedStore().hasOptimisticUpdate(dataID);
	  };

	  /**
	   * Returns a list of client mutation IDs for queued mutations whose optimistic
	   * updates are affecting the record corresponding the given dataID. Returns
	   * null if the record isn't affected by any optimistic updates.
	   */


	  RelayStoreData.prototype.getClientMutationIDs = function getClientMutationIDs(dataID) {
	    dataID = this.getRangeData().getCanonicalClientID(dataID);
	    return this.getQueuedStore().getClientMutationIDs(dataID);
	  };

	  /**
	   * Restores data for queries incrementally from cache.
	   * It calls onSuccess when all the data has been loaded into memory.
	   * It calls onFailure when some data is unabled to be satisfied from cache.
	   */


	  RelayStoreData.prototype.restoreQueriesFromCache = function restoreQueriesFromCache(queries, callbacks) {
	    var _this = this;

	    var cacheManager = this._cacheManager;
	    __webpack_require__(1)(cacheManager, 'RelayStoreData: `restoreQueriesFromCache` should only be called ' + 'when cache manager is available.');
	    var changeTracker = new (__webpack_require__(32))();
	    var profile = __webpack_require__(10).profile('RelayStoreData.readFromDiskCache');
	    return restoreQueriesDataFromCache(queries, this._queuedStore, this._cachedRecords, this._cachedRootCallMap, this._garbageCollector, cacheManager, changeTracker, {
	      onSuccess: function onSuccess() {
	        _this._handleChangedAndNewDataIDs(changeTracker.getChangeSet());
	        profile.stop();
	        callbacks.onSuccess && callbacks.onSuccess();
	      },
	      onFailure: function onFailure() {
	        _this._handleChangedAndNewDataIDs(changeTracker.getChangeSet());
	        profile.stop();
	        callbacks.onFailure && callbacks.onFailure();
	      }
	    });
	  };

	  /**
	   * Restores data for a fragment incrementally from cache.
	   * It calls onSuccess when all the data has been loaded into memory.
	   * It calls onFailure when some data is unabled to be satisfied from cache.
	   */


	  RelayStoreData.prototype.restoreFragmentFromCache = function restoreFragmentFromCache(dataID, fragment, path, callbacks) {
	    var _this2 = this;

	    var cacheManager = this._cacheManager;
	    __webpack_require__(1)(cacheManager, 'RelayStoreData: `restoreFragmentFromCache` should only be called when ' + 'cache manager is available.');
	    var changeTracker = new (__webpack_require__(32))();
	    var profile = __webpack_require__(10).profile('RelayStoreData.readFragmentFromDiskCache');
	    return restoreFragmentDataFromCache(dataID, fragment, path, this._queuedStore, this._cachedRecords, this._cachedRootCallMap, this._garbageCollector, cacheManager, changeTracker, {
	      onSuccess: function onSuccess() {
	        _this2._handleChangedAndNewDataIDs(changeTracker.getChangeSet());
	        profile.stop();
	        callbacks.onSuccess && callbacks.onSuccess();
	      },
	      onFailure: function onFailure() {
	        _this2._handleChangedAndNewDataIDs(changeTracker.getChangeSet());
	        profile.stop();
	        callbacks.onFailure && callbacks.onFailure();
	      }
	    });
	  };

	  /**
	   * Write the results of an OSS query, which can have multiple root fields,
	   * updating both the root call map (for consistency with classic queries)
	   * and the root record (for consistency with modern queries/fragments).
	   */


	  RelayStoreData.prototype.handleOSSQueryPayload = function handleOSSQueryPayload(query, payload, forceIndex) {
	    var _this3 = this;

	    var profiler = __webpack_require__(10).profile('RelayStoreData.handleQueryPayload');
	    var changeTracker = new (__webpack_require__(32))();
	    var recordWriter = this.getRecordWriter();
	    var writer = new (__webpack_require__(49))(this._queuedStore, recordWriter, this._queryTracker, changeTracker, {
	      forceIndex: forceIndex,
	      updateTrackedQueries: true
	    });
	    getRootsWithPayloads(query, payload).forEach(function (_ref) {
	      var field = _ref.field,
	          root = _ref.root,
	          rootPayload = _ref.rootPayload;

	      // Write the results of the field-specific query
	      __webpack_require__(100)(writer, root, rootPayload);

	      // Ensure the root record exists
	      var path = __webpack_require__(9).getRootRecordPath();
	      recordWriter.putRecord(ROOT_ID, ROOT_TYPE, path);
	      if (_this3._queuedStore.getRecordState(ROOT_ID) !== EXISTENT) {
	        changeTracker.createID(ROOT_ID);
	      } else {
	        changeTracker.updateID(ROOT_ID);
	      }

	      // Collect linked record ids for this root field
	      var dataIDs = [];
	      __webpack_require__(8).getResultsFromPayload(root, rootPayload).forEach(function (_ref2) {
	        var result = _ref2.result,
	            rootCallInfo = _ref2.rootCallInfo;
	        var storageKey = rootCallInfo.storageKey,
	            identifyingArgKey = rootCallInfo.identifyingArgKey;

	        var dataID = recordWriter.getDataID(storageKey, identifyingArgKey);
	        if (dataID != null) {
	          dataIDs.push(dataID);
	        }
	      });

	      // Write the field to the root record
	      var storageKey = field.getStorageKey();
	      if (field.isPlural()) {
	        recordWriter.putLinkedRecordIDs(ROOT_ID, storageKey, dataIDs);
	      } else {
	        var dataID = dataIDs[0];
	        if (dataID != null) {
	          recordWriter.putLinkedRecordID(ROOT_ID, storageKey, dataID);
	        } else {
	          recordWriter.putField(ROOT_ID, storageKey, null);
	        }
	      }
	    });
	    this._handleChangedAndNewDataIDs(changeTracker.getChangeSet());
	    profiler.stop();
	  };

	  /**
	   * Write the results of a query into the base record store.
	   */


	  RelayStoreData.prototype.handleQueryPayload = function handleQueryPayload(query, payload, forceIndex) {
	    var profiler = __webpack_require__(10).profile('RelayStoreData.handleQueryPayload');
	    var changeTracker = new (__webpack_require__(32))();
	    var writer = new (__webpack_require__(49))(this._queuedStore, this.getRecordWriter(), this._queryTracker, changeTracker, {
	      forceIndex: forceIndex,
	      updateTrackedQueries: true
	    });
	    __webpack_require__(100)(writer, query, payload);
	    this._handleChangedAndNewDataIDs(changeTracker.getChangeSet());
	    profiler.stop();
	  };

	  /**
	   * Write the result of a fragment into the base record store.
	   */


	  RelayStoreData.prototype.handleFragmentPayload = function handleFragmentPayload(dataID, fragment, path, payload, forceIndex) {
	    var profiler = __webpack_require__(10).profile('RelayStoreData.handleFragmentPayload');
	    var changeTracker = new (__webpack_require__(32))();
	    var writer = new (__webpack_require__(49))(this._queuedStore, this.getRecordWriter(), this._queryTracker, changeTracker, {
	      forceIndex: forceIndex,
	      updateTrackedQueries: true
	    });
	    writer.createRecordIfMissing(fragment, dataID, path, payload);
	    writer.writePayload(fragment, dataID, payload, path);
	    this._handleChangedAndNewDataIDs(changeTracker.getChangeSet());
	    profiler.stop();
	  };

	  /**
	   * Write the results of an update into the base record store.
	   */


	  RelayStoreData.prototype.handleUpdatePayload = function handleUpdatePayload(operation, payload, _ref3) {
	    var configs = _ref3.configs,
	        isOptimisticUpdate = _ref3.isOptimisticUpdate;

	    var profiler = __webpack_require__(10).profile('RelayStoreData.handleUpdatePayload');
	    var changeTracker = new (__webpack_require__(32))();
	    var recordWriter = void 0;
	    if (isOptimisticUpdate) {
	      var clientMutationID = payload[CLIENT_MUTATION_ID];
	      __webpack_require__(1)(typeof clientMutationID === 'string', 'RelayStoreData.handleUpdatePayload(): Expected optimistic payload ' + 'to have a valid `%s`.', CLIENT_MUTATION_ID);
	      recordWriter = this.getRecordWriterForOptimisticMutation(clientMutationID);
	    } else {
	      recordWriter = this._getRecordWriterForMutation();
	    }
	    var writer = new (__webpack_require__(49))(this._queuedStore, recordWriter, this._queryTracker, changeTracker, {
	      forceIndex: __webpack_require__(69)(),
	      isOptimisticUpdate: isOptimisticUpdate,
	      updateTrackedQueries: false
	    });
	    __webpack_require__(146)(writer, operation, payload, {
	      configs: configs,
	      isOptimisticUpdate: isOptimisticUpdate
	    });
	    this._handleChangedAndNewDataIDs(changeTracker.getChangeSet());
	    profiler.stop();
	  };

	  /**
	   * Given a query fragment and a data ID, returns a root query that applies
	   * the fragment to the object specified by the data ID.
	   */


	  RelayStoreData.prototype.buildFragmentQueryForDataID = function buildFragmentQueryForDataID(fragment, dataID) {
	    if (__webpack_require__(3).isClientID(dataID)) {
	      var path = this._queuedStore.getPathToRecord(this._rangeData.getCanonicalClientID(dataID));
	      __webpack_require__(1)(path, 'RelayStoreData.buildFragmentQueryForDataID(): Cannot refetch ' + 'record `%s` without a path.', dataID);
	      return __webpack_require__(9).getQuery(this._cachedStore, path, fragment);
	    }
	    // Fragment fields cannot be spread directly into the root because they
	    // may not exist on the `Node` type.
	    return __webpack_require__(2).Root.build(fragment.getDebugName() || 'UnknownQuery', NODE, dataID, [idField, typeField, fragment], {
	      identifyingArgName: ID,
	      identifyingArgType: ID_TYPE,
	      isAbstract: true,
	      isDeferred: false,
	      isPlural: false
	    }, NODE_TYPE);
	  };

	  RelayStoreData.prototype.getNodeData = function getNodeData() {
	    return this._records;
	  };

	  RelayStoreData.prototype.getQueuedData = function getQueuedData() {
	    return this._queuedRecords;
	  };

	  RelayStoreData.prototype.clearQueuedData = function clearQueuedData() {
	    var _this4 = this;

	    __webpack_require__(11)(this._queuedRecords, function (_, key) {
	      delete _this4._queuedRecords[key];
	      _this4._changeEmitter.broadcastChangeForID(key);
	    });
	  };

	  RelayStoreData.prototype.getCachedData = function getCachedData() {
	    return this._cachedRecords;
	  };

	  RelayStoreData.prototype.getGarbageCollector = function getGarbageCollector() {
	    return this._garbageCollector;
	  };

	  RelayStoreData.prototype.getMutationQueue = function getMutationQueue() {
	    return this._mutationQueue;
	  };

	  RelayStoreData.prototype.getNetworkLayer = function getNetworkLayer() {
	    return this._networkLayer;
	  };

	  /**
	   * Get the record store with only the cached and base data (no queued data).
	   */


	  RelayStoreData.prototype.getCachedStore = function getCachedStore() {
	    return this._cachedStore;
	  };

	  /**
	   * Get the record store with full data (cached, base, queued).
	   */


	  RelayStoreData.prototype.getQueuedStore = function getQueuedStore() {
	    return this._queuedStore;
	  };

	  /**
	   * Get the record store with only the base data (no queued/cached data).
	   */


	  RelayStoreData.prototype.getRecordStore = function getRecordStore() {
	    return this._recordStore;
	  };

	  /**
	   * Get the record writer for the base data.
	   */


	  RelayStoreData.prototype.getRecordWriter = function getRecordWriter() {
	    return new (__webpack_require__(65))(this._records, this._rootCallMap, false, // isOptimistic
	    this._nodeRangeMap, this._cacheManager ? this._cacheManager.getQueryWriter() : null);
	  };

	  RelayStoreData.prototype.getQueryTracker = function getQueryTracker() {
	    return this._queryTracker;
	  };

	  RelayStoreData.prototype.getQueryRunner = function getQueryRunner() {
	    return this._queryRunner;
	  };

	  RelayStoreData.prototype.getChangeEmitter = function getChangeEmitter() {
	    return this._changeEmitter;
	  };

	  RelayStoreData.prototype.getRangeData = function getRangeData() {
	    return this._rangeData;
	  };

	  RelayStoreData.prototype.getPendingQueryTracker = function getPendingQueryTracker() {
	    return this._pendingQueryTracker;
	  };

	  RelayStoreData.prototype.getTaskQueue = function getTaskQueue() {
	    return this._taskQueue;
	  };

	  /**
	   * @deprecated
	   *
	   * Used temporarily by GraphQLStore, but all updates to this object are now
	   * handled through a `RelayRecordStore` instance.
	   */


	  RelayStoreData.prototype.getRootCallData = function getRootCallData() {
	    return this._rootCallMap;
	  };

	  RelayStoreData.prototype._isStoreDataEmpty = function _isStoreDataEmpty() {
	    return Object.keys(this._records).length === 0 && Object.keys(this._queuedRecords).length === 0 && Object.keys(this._cachedRecords).length === 0;
	  };

	  /**
	   * Given a ChangeSet, broadcasts changes for updated DataIDs
	   * and registers new DataIDs with the garbage collector.
	   */


	  RelayStoreData.prototype._handleChangedAndNewDataIDs = function _handleChangedAndNewDataIDs(changeSet) {
	    var _this5 = this;

	    var updatedDataIDs = Object.keys(changeSet.updated);
	    var createdDataIDs = Object.keys(changeSet.created);
	    var gc = this._garbageCollector;
	    updatedDataIDs.forEach(function (id) {
	      return _this5._changeEmitter.broadcastChangeForID(id);
	    });
	    // Containers may be subscribed to "new" records in the case where they
	    // were previously garbage collected or where the link was incrementally
	    // loaded from cache prior to the linked record.
	    createdDataIDs.forEach(function (id) {
	      gc && gc.register(id);
	      _this5._changeEmitter.broadcastChangeForID(id);
	    });
	  };

	  RelayStoreData.prototype._getRecordWriterForMutation = function _getRecordWriterForMutation() {
	    return new (__webpack_require__(65))(this._records, this._rootCallMap, false, // isOptimistic
	    this._nodeRangeMap, this._cacheManager ? this._cacheManager.getMutationWriter() : null);
	  };

	  RelayStoreData.prototype.getRecordWriterForOptimisticMutation = function getRecordWriterForOptimisticMutation(clientMutationID) {
	    return new (__webpack_require__(65))(this._queuedRecords, this._rootCallMap, true, // isOptimistic
	    this._nodeRangeMap, null, // don't cache optimistic data
	    clientMutationID);
	  };

	  RelayStoreData.prototype.toJSON = function toJSON() {
	    /**
	     * A util function which remove the querypath from the record. Used to stringify the RecordMap.
	     */
	    var getRecordsWithoutPaths = function getRecordsWithoutPaths(recordMap) {
	      return __webpack_require__(38)(recordMap, function (record) {
	        var nextRecord = (0, _extends3['default'])({}, record);
	        delete nextRecord[__webpack_require__(3).MetadataKey.PATH];
	        return nextRecord;
	      });
	    };

	    return {
	      cachedRecords: getRecordsWithoutPaths(this._cachedRecords),
	      cachedRootCallMap: this._cachedRootCallMap,
	      queuedRecords: getRecordsWithoutPaths(this._queuedRecords),
	      records: getRecordsWithoutPaths(this._records),
	      rootCallMap: this._rootCallMap,
	      nodeRangeMap: this._nodeRangeMap
	    };
	  };

	  RelayStoreData.fromJSON = function fromJSON(obj) {
	    __webpack_require__(1)(obj, 'RelayStoreData: JSON object is empty');
	    var cachedRecords = obj.cachedRecords,
	        cachedRootCallMap = obj.cachedRootCallMap,
	        queuedRecords = obj.queuedRecords,
	        records = obj.records,
	        rootCallMap = obj.rootCallMap,
	        nodeRangeMap = obj.nodeRangeMap;


	    deserializeRecordRanges(cachedRecords);
	    deserializeRecordRanges(queuedRecords);
	    deserializeRecordRanges(records);

	    return new RelayStoreData(cachedRecords, cachedRootCallMap, queuedRecords, records, rootCallMap, nodeRangeMap);
	  };

	  return RelayStoreData;
	}();

	/**
	 * A helper function which checks for serialized GraphQLRange
	 * instances and deserializes them in toJSON()
	 */


	function deserializeRecordRanges(records) {
	  for (var _key in records) {
	    var record = records[_key];
	    var range = record.__range__;
	    if (range) {
	      record.__range__ = __webpack_require__(57).fromJSON(range);
	    }
	  }
	}

	/**
	 * Given an OSS query and response, returns an array of information
	 * corresponding to each root field with items as follows:
	 * - `field`: the root field from the input query
	 * - `root`: the synthesized RelayQueryRoot corresponding to that field
	 * - `rootPayload`: the payload for that `root`
	 */
	function getRootsWithPayloads(query, response) {
	  var results = [];
	  query.getChildren().forEach(function (child) {
	    var field = child;
	    if (!(field instanceof __webpack_require__(2).Field) || !field.canHaveSubselections()) {
	      // Only care about linked fields
	      return;
	    }
	    // Get the concrete field from the RelayQueryField
	    var concreteField = __webpack_require__(39)(__webpack_require__(7).getField(field.getConcreteQueryNode()));
	    // Build the identifying argument for the query
	    var identifyingArgName = void 0;
	    var identifyingArgType = void 0;
	    var identifyingArg = concreteField.calls && concreteField.calls[0];
	    if (identifyingArg) {
	      identifyingArgName = identifyingArg.name;
	      identifyingArgType = identifyingArg.metadata && identifyingArg.metadata.type;
	    }
	    // Build the concrete query
	    var concreteQuery = {
	      calls: concreteField.calls,
	      children: concreteField.children,
	      directives: [], // @include/@skip directives are processed within getChildren()
	      fieldName: concreteField.fieldName,
	      isDeferred: false,
	      kind: 'Query',
	      metadata: {
	        identifyingArgName: identifyingArgName,
	        identifyingArgType: identifyingArgType,
	        isAbstract: concreteField.metadata && concreteField.metadata.isAbstract,
	        isPlural: concreteField.metadata && concreteField.metadata.isPlural
	      },
	      name: query.getName(),
	      // Note that classic queries are typed as the type of the root field, not
	      // the `Query` type
	      type: field.getType()
	    };
	    // Construct a root query
	    var root = __webpack_require__(2).Root.create(concreteQuery, __webpack_require__(12).get('$RelayEnvironment'), query.getVariables());
	    // Construct the payload that would have been returned had `root` been
	    // used to fetch data.
	    var serializationKey = field.getSerializationKey();
	    var rootPayload = {};
	    if (!response.hasOwnProperty(serializationKey)) {
	      // Data is missing for this field. This can occur when the field is empty
	      // due to a failing conditional (@include/@skip) in its subtree.
	      return;
	    }
	    rootPayload[root.getFieldName()] = response[serializationKey];
	    results.push({
	      field: field,
	      root: root,
	      rootPayload: rootPayload
	    });
	  });
	  return results;
	}

	__webpack_require__(10).instrumentMethods(RelayStoreData.prototype, {
	  handleQueryPayload: 'RelayStoreData.prototype.handleQueryPayload',
	  handleUpdatePayload: 'RelayStoreData.prototype.handleUpdatePayload'
	});

	module.exports = RelayStoreData;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayTaskQueue
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * A task queue that can be configured with an optional scheduler function. The
	 * scheduling function is invoked with a callback that will execute the next
	 * unit of work. The callback will return a promise that resolves with a new
	 * callback when the next unit of work is available. For example, a scheduler
	 * can defer each task to the next animation frame:
	 *
	 *   new RelayTaskQueue(executeTask => {
	 *     // This function will be invoked whenever a task is enqueued. It will not
	 *     // be invoked again until `executeTask` has been invoked. Also, invoking
	 *     // `executeTask` more than once is an error.
	 *     requestAnimationFrame(executeTask);
	 *   });
	 *
	 * By default, the next task is executed synchronously after the previous one is
	 * finished. An injected scheduler using `setImmediate` can alter this behavior.
	 */
	var RelayTaskQueue = function () {
	  function RelayTaskQueue(injectedScheduler) {
	    (0, _classCallCheck3['default'])(this, RelayTaskQueue);

	    this._queue = [];
	    this._running = false;
	    this._schedule = injectedScheduler;
	  }

	  /**
	   * @internal
	   *
	   * Enqueues one or more callbacks that each represent a synchronous unit of
	   * work that can be scheduled to be executed at a later time.
	   *
	   * The return value of each callback will be passed in as an argument to the
	   * next callback. If one of the callbacks throw an error, the execution will
	   * be aborted and the returned promise be rejected with the thrown error.
	   * Otherwise, the returned promise will be resolved with the return value of
	   * the last callback. For example:
	   *
	   *   const taskQueue = new RelayTaskQueue();
	   *   taskQueue.enqueue(
	   *     function() {
	   *       return 'foo';
	   *     },
	   *     function(foo) {
	   *       return 'bar';
	   *     }
	   *   ).done(
	   *     function(bar) {
	   *       // ...
	   *     }
	   *   );
	   *
	   *   RelayTaskQueue.enqueue(
	   *     function() {
	   *       return 'foo';
	   *     },
	   *     function(foo) {
	   *       throw new Error();
	   *     },
	   *     function() {
	   *       // Never executed.
	   *     }
	   *   ).catch(
	   *     function(error) {}
	   *   );
	   */


	  RelayTaskQueue.prototype.enqueue = function enqueue() {
	    var _this = this;

	    for (var _len = arguments.length, callbacks = Array(_len), _key = 0; _key < _len; _key++) {
	      callbacks[_key] = arguments[_key];
	    }

	    var promise = new Promise(function (resolve, reject) {
	      var nextIndex = 0;
	      var error = null;
	      var enqueueNext = function enqueueNext(value) {
	        if (error) {
	          reject(error);
	          return;
	        }
	        if (nextIndex >= callbacks.length) {
	          resolve(value);
	        } else {
	          _this._queue.push(function () {
	            enqueueNext(function () {
	              var nextCallback = callbacks[nextIndex++];
	              try {
	                value = nextCallback(value);
	              } catch (e) {
	                error = e;
	                value = undefined;
	              }
	              return value;
	            }());
	          });
	        }
	      };
	      enqueueNext(undefined);
	    });
	    this._scheduleIfNecessary();
	    return promise;
	  };

	  /**
	   * @public
	   *
	   * Injects a scheduling function that is invoked with a callback that will
	   * execute the next unit of work. The callback will return a promise that
	   * resolves with a new callback when the next unit of work is available.
	   */


	  RelayTaskQueue.prototype.injectScheduler = function injectScheduler(injectedScheduler) {
	    this._schedule = injectedScheduler;
	  };

	  RelayTaskQueue.prototype._createTaskExecutor = function _createTaskExecutor(callback) {
	    var _this2 = this;

	    var invoked = false;
	    return function () {
	      __webpack_require__(1)(!invoked, 'RelayTaskQueue: Tasks can only be executed once.');
	      invoked = true;
	      _this2._invokeWithinScopedQueue(callback);
	      _this2._running = false;
	      _this2._scheduleIfNecessary();
	    };
	  };

	  RelayTaskQueue.prototype._invokeWithinScopedQueue = function _invokeWithinScopedQueue(callback) {
	    var originalQueue = this._queue;
	    this._queue = [];
	    try {
	      callback();
	    } finally {
	      Array.prototype.unshift.apply(originalQueue, this._queue);
	      this._queue = originalQueue;
	    }
	  };

	  RelayTaskQueue.prototype._scheduleIfNecessary = function _scheduleIfNecessary() {
	    if (this._running) {
	      return;
	    }
	    if (this._queue.length) {
	      this._running = true;
	      var _executeTask = this._createTaskExecutor(this._queue.shift());
	      if (this._schedule) {
	        this._schedule(_executeTask);
	      } else {
	        _executeTask();
	      }
	    } else {
	      this._running = false;
	    }
	  };

	  return RelayTaskQueue;
	}();

	module.exports = RelayTaskQueue;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayVariable
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var RelayVariable = function () {
	  function RelayVariable(name) {
	    (0, _classCallCheck3['default'])(this, RelayVariable);

	    this.name = name;
	  }

	  RelayVariable.prototype.equals = function equals(other) {
	    return other instanceof RelayVariable && other.getName() === this.name;
	  };

	  RelayVariable.prototype.getName = function getName() {
	    return this.name;
	  };

	  return RelayVariable;
	}();

	module.exports = RelayVariable;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule checkRelayQueryData
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var EDGES = __webpack_require__(6).EDGES,
	    PAGE_INFO = __webpack_require__(6).PAGE_INFO;

	/**
	 * @internal
	 *
	 * Traverses a query and data in the record store to determine whether we have
	 * enough data to satisfy the query.
	 */


	function checkRelayQueryData(store, query) {
	  var checker = new RelayQueryChecker(store);

	  var state = {
	    dataID: undefined,
	    rangeInfo: undefined,
	    result: true
	  };

	  checker.visit(query, state);
	  return state.result;
	}

	var RelayQueryChecker = function (_RelayQueryVisitor) {
	  (0, _inherits3['default'])(RelayQueryChecker, _RelayQueryVisitor);

	  function RelayQueryChecker(store) {
	    (0, _classCallCheck3['default'])(this, RelayQueryChecker);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryVisitor.call(this));

	    _this._store = store;
	    return _this;
	  }

	  /**
	   * Skip visiting children if result is already false.
	   */


	  RelayQueryChecker.prototype.traverse = function traverse(node, state) {
	    var children = node.getChildren();
	    for (var ii = 0; ii < children.length; ii++) {
	      if (!state.result) {
	        return;
	      }
	      this.visit(children[ii], state);
	    }
	  };

	  RelayQueryChecker.prototype.visitRoot = function visitRoot(root, state) {
	    var _this2 = this;

	    var storageKey = root.getStorageKey();
	    __webpack_require__(28)(root, function (_ref) {
	      var identifyingArgKey = _ref.identifyingArgKey;

	      var dataID = _this2._store.getDataID(storageKey, identifyingArgKey);
	      if (dataID == null) {
	        state.result = false;
	      } else {
	        var nextState = {
	          dataID: dataID,
	          rangeInfo: undefined,
	          result: true
	        };
	        _this2.traverse(root, nextState);
	        state.result = state.result && nextState.result;
	      }
	    });
	  };

	  RelayQueryChecker.prototype.visitFragment = function visitFragment(fragment, state) {
	    var dataID = state.dataID;
	    // The dataID check is for Flow; it must be non-null to have gotten here.
	    if (dataID && __webpack_require__(45)(fragment, this._store.getType(dataID))) {
	      this.traverse(fragment, state);
	    }
	  };

	  RelayQueryChecker.prototype.visitField = function visitField(field, state) {
	    var dataID = state.dataID;
	    var recordState = dataID && this._store.getRecordState(dataID);
	    if (recordState === __webpack_require__(16).UNKNOWN) {
	      state.result = false;
	      return;
	    } else if (recordState === __webpack_require__(16).NONEXISTENT) {
	      return;
	    }
	    var rangeInfo = state.rangeInfo;
	    if (rangeInfo && field.getSchemaName() === EDGES) {
	      this._checkEdges(field, state);
	    } else if (rangeInfo && field.getSchemaName() === PAGE_INFO) {
	      this._checkPageInfo(field, state);
	    } else if (!field.canHaveSubselections()) {
	      this._checkScalar(field, state);
	    } else if (field.isPlural()) {
	      this._checkPlural(field, state);
	    } else if (field.isConnection()) {
	      this._checkConnection(field, state);
	    } else {
	      this._checkLinkedField(field, state);
	    }
	  };

	  RelayQueryChecker.prototype._checkScalar = function _checkScalar(field, state) {
	    var fieldData = state.dataID && this._store.getField(state.dataID, field.getStorageKey());
	    if (fieldData === undefined) {
	      state.result = false;
	    }
	  };

	  RelayQueryChecker.prototype._checkPlural = function _checkPlural(field, state) {
	    var dataIDs = state.dataID && this._store.getLinkedRecordIDs(state.dataID, field.getStorageKey());
	    if (dataIDs === undefined) {
	      state.result = false;
	      return;
	    }
	    if (dataIDs) {
	      for (var ii = 0; ii < dataIDs.length; ii++) {
	        if (!state.result) {
	          break;
	        }
	        var nextState = {
	          dataID: dataIDs[ii],
	          rangeInfo: undefined,
	          result: true
	        };
	        this.traverse(field, nextState);
	        state.result = nextState.result;
	      }
	    }
	  };

	  RelayQueryChecker.prototype._checkConnection = function _checkConnection(field, state) {
	    var calls = field.getCallsWithValues();
	    var dataID = state.dataID && this._store.getLinkedRecordID(state.dataID, field.getStorageKey());
	    if (dataID === undefined) {
	      state.result = false;
	      return;
	    }
	    var nextState = {
	      dataID: dataID,
	      rangeInfo: null, // Flow rejects `undefined` here
	      result: true
	    };
	    var metadata = this._store.getRangeMetadata(dataID, calls);
	    if (metadata) {
	      nextState.rangeInfo = metadata;
	    }
	    this.traverse(field, nextState);
	    state.result = state.result && nextState.result;
	  };

	  RelayQueryChecker.prototype._checkEdges = function _checkEdges(field, state) {
	    var rangeInfo = state.rangeInfo;
	    if (!rangeInfo) {
	      state.result = false;
	      return;
	    }
	    if (rangeInfo.diffCalls.length) {
	      state.result = false;
	      return;
	    }
	    var edges = rangeInfo.filteredEdges;
	    for (var ii = 0; ii < edges.length; ii++) {
	      if (!state.result) {
	        break;
	      }
	      var nextState = {
	        dataID: edges[ii].edgeID,
	        rangeInfo: undefined,
	        result: true
	      };
	      this.traverse(field, nextState);
	      state.result = nextState.result;
	    }
	  };

	  RelayQueryChecker.prototype._checkPageInfo = function _checkPageInfo(field, state) {
	    var rangeInfo = state.rangeInfo;
	    if (!rangeInfo || !rangeInfo.pageInfo) {
	      state.result = false;
	      return;
	    }
	  };

	  RelayQueryChecker.prototype._checkLinkedField = function _checkLinkedField(field, state) {
	    var dataID = state.dataID && this._store.getLinkedRecordID(state.dataID, field.getStorageKey());
	    if (dataID === undefined) {
	      state.result = false;
	      return;
	    }
	    if (dataID) {
	      var nextState = {
	        dataID: dataID,
	        rangeInfo: undefined,
	        result: true
	      };
	      this.traverse(field, nextState);
	      state.result = state.result && nextState.result;
	    }
	  };

	  return RelayQueryChecker;
	}(__webpack_require__(26));

	module.exports = __webpack_require__(10).instrument('checkRelayQueryData', checkRelayQueryData);

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createRelayQuery
	 * 
	 * @format
	 */

	'use strict';

	function createRelayQuery(node, variables) {
	  __webpack_require__(1)(typeof variables === 'object' && variables != null && !Array.isArray(variables), 'Relay.Query: Expected `variables` to be an object.');
	  return __webpack_require__(2).Root.create(node, __webpack_require__(12).get('$createRelayQuery'), variables);
	}

	module.exports = createRelayQuery;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule diffRelayQuery
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var ID = __webpack_require__(8).ID,
	    ID_TYPE = __webpack_require__(8).ID_TYPE,
	    NODE_TYPE = __webpack_require__(8).NODE_TYPE,
	    TYPENAME = __webpack_require__(8).TYPENAME;

	var EDGES = __webpack_require__(6).EDGES,
	    NODE = __webpack_require__(6).NODE,
	    PAGE_INFO = __webpack_require__(6).PAGE_INFO;

	var idField = __webpack_require__(2).Field.build({
	  fieldName: ID,
	  metadata: {
	    isRequisite: true
	  },
	  type: 'String'
	});
	var typeField = __webpack_require__(2).Field.build({
	  fieldName: TYPENAME,
	  metadata: {
	    isRequisite: true
	  },
	  type: 'String'
	});
	var nodeWithID = __webpack_require__(2).Field.build({
	  fieldName: __webpack_require__(8).NODE,
	  children: [idField, typeField],
	  metadata: {
	    canHaveSubselections: true
	  },
	  type: NODE_TYPE
	});

	/**
	 * @internal
	 *
	 * Computes the difference between the data requested in `root` and the data
	 * available in `store`. It returns a minimal set of queries that will fulfill
	 * the difference, or an empty array if the query can be resolved locally.
	 */
	function diffRelayQuery(root, store, queryTracker) {
	  var path = __webpack_require__(9).create(root);
	  var queries = [];

	  var visitor = new RelayDiffQueryBuilder(store, queryTracker);
	  var rootIdentifyingArg = root.getIdentifyingArg();
	  var rootIdentifyingArgValue = rootIdentifyingArg && rootIdentifyingArg.value || null;
	  var isPluralCall = Array.isArray(rootIdentifyingArgValue) && rootIdentifyingArgValue.length > 1;
	  var metadata = void 0;
	  if (rootIdentifyingArg != null) {
	    metadata = {
	      identifyingArgName: rootIdentifyingArg.name,
	      identifyingArgType: rootIdentifyingArg.type != null ? rootIdentifyingArg.type : ID_TYPE,
	      isAbstract: root.isAbstract(),
	      isDeferred: false,
	      isPlural: false
	    };
	  }
	  var fieldName = root.getFieldName();
	  var storageKey = root.getStorageKey();
	  __webpack_require__(28)(root, function (_ref) {
	    var identifyingArgValue = _ref.identifyingArgValue,
	        identifyingArgKey = _ref.identifyingArgKey;

	    var nodeRoot = void 0;
	    if (isPluralCall) {
	      __webpack_require__(1)(identifyingArgValue != null, 'diffRelayQuery(): Unexpected null or undefined value in root call ' + 'argument array for query, `%s(...).', fieldName);
	      nodeRoot = __webpack_require__(2).Root.build(root.getName(), fieldName, [identifyingArgValue], root.getChildren(), metadata, root.getType());
	    } else {
	      // Reuse `root` if it only maps to one result.
	      nodeRoot = root;
	    }

	    // The whole query must be fetched if the root dataID is unknown.
	    var dataID = store.getDataID(storageKey, identifyingArgKey);
	    if (dataID == null) {
	      queries.push(nodeRoot);
	      return;
	    }

	    // Diff the current dataID
	    var scope = makeScope(dataID);
	    var diffOutput = visitor.visit(nodeRoot, path, scope);
	    var diffNode = diffOutput ? diffOutput.diffNode : null;
	    if (diffNode) {
	      __webpack_require__(1)(diffNode instanceof __webpack_require__(2).Root, 'diffRelayQuery(): Expected result to be a root query.');
	      queries.push(diffNode);
	    }
	  });
	  return queries.concat(visitor.getSplitQueries());
	}

	/**
	 * @internal
	 *
	 * A transform for (node + store) -> (diff + tracked queries). It is analagous
	 * to `RelayQueryTransform` with the main differences as follows:
	 * - there is no `state` (which allowed for passing data up and down the tree).
	 * - data is passed down via `scope`, which flows from a parent field down
	 *   through intermediary fragments to the nearest child field.
	 * - data is passed up via the return type `{diffNode, trackedNode}`, where:
	 *   - `diffNode`: subset of the input that could not diffed out
	 *   - `trackedNode`: subset of the input that must be tracked
	 *
	 * The provided `queryTracker`, if any, is updated whenever the traversal of a
	 * node results in a `trackedNode` being created. New top-level queries are not
	 * returned up the tree, and instead are available via `getSplitQueries()`.
	 *
	 * @note If no `queryTracker` is provided, all tracking-related functionality is
	 * skipped.
	 */

	var RelayDiffQueryBuilder = function () {
	  function RelayDiffQueryBuilder(store, queryTracker) {
	    (0, _classCallCheck3['default'])(this, RelayDiffQueryBuilder);

	    this._store = store;
	    this._splitQueries = [];
	    this._queryTracker = queryTracker;
	  }

	  RelayDiffQueryBuilder.prototype.splitQuery = function splitQuery(root) {
	    this._splitQueries.push(root);
	  };

	  RelayDiffQueryBuilder.prototype.getSplitQueries = function getSplitQueries() {
	    return this._splitQueries;
	  };

	  RelayDiffQueryBuilder.prototype.visit = function visit(node, path, scope) {
	    if (node instanceof __webpack_require__(2).Field) {
	      return this.visitField(node, path, scope);
	    } else if (node instanceof __webpack_require__(2).Fragment) {
	      return this.visitFragment(node, path, scope);
	    } else if (node instanceof __webpack_require__(2).Root) {
	      return this.visitRoot(node, path, scope);
	    }
	  };

	  RelayDiffQueryBuilder.prototype.visitRoot = function visitRoot(node, path, scope) {
	    return this.traverse(node, path, scope);
	  };

	  RelayDiffQueryBuilder.prototype.visitFragment = function visitFragment(node, path, scope) {
	    return this.traverse(node, path, scope);
	  };

	  /**
	   * Diffs the field conditionally based on the `scope` from the nearest
	   * ancestor field.
	   */


	  RelayDiffQueryBuilder.prototype.visitField = function visitField(node, path, _ref2) {
	    var connectionField = _ref2.connectionField,
	        dataID = _ref2.dataID,
	        edgeID = _ref2.edgeID,
	        rangeInfo = _ref2.rangeInfo;

	    // special case when inside a connection traversal
	    if (connectionField && rangeInfo) {
	      if (edgeID) {
	        // When traversing a specific connection edge only look at `edges`
	        if (node.getSchemaName() === EDGES) {
	          return this.diffConnectionEdge(connectionField, node, // edge field
	          __webpack_require__(9).getPath(path, node, edgeID), edgeID, rangeInfo);
	        } else {
	          return null;
	        }
	      } else {
	        // When traversing connection metadata fields, edges/page_info are
	        // only kept if there are range extension calls. Other fields fall
	        // through to regular diffing.
	        if (node.getSchemaName() === EDGES || node.getSchemaName() === PAGE_INFO) {
	          return rangeInfo.diffCalls.length > 0 ? {
	            diffNode: node,
	            trackedNode: null
	          } : null;
	        }
	      }
	    }

	    // default field diffing algorithm
	    if (!node.canHaveSubselections()) {
	      return this.diffScalar(node, dataID);
	    } else if (node.isGenerated()) {
	      return {
	        diffNode: node,
	        trackedNode: null
	      };
	    } else if (node.isConnection()) {
	      return this.diffConnection(node, path, dataID);
	    } else if (node.isPlural()) {
	      return this.diffPluralLink(node, path, dataID);
	    } else {
	      return this.diffLink(node, path, dataID);
	    }
	  };

	  /**
	   * Visit all the children of the given `node` and merge their results.
	   */


	  RelayDiffQueryBuilder.prototype.traverse = function traverse(node, path, scope) {
	    var _this = this;

	    var diffNode = void 0;
	    var diffChildren = void 0;
	    var trackedNode = void 0;
	    var trackedChildren = void 0;
	    var hasDiffField = false;
	    var hasTrackedField = false;

	    node.getChildren().forEach(function (child) {
	      if (child instanceof __webpack_require__(2).Field) {
	        var diffOutput = _this.visitField(child, path, scope);
	        var diffChild = diffOutput ? diffOutput.diffNode : null;
	        var trackedChild = diffOutput && _this._queryTracker ? diffOutput.trackedNode : null;

	        // Diff uses child nodes and keeps requisite fields
	        if (diffChild) {
	          diffChildren = diffChildren || [];
	          diffChildren.push(diffChild);
	          hasDiffField = hasDiffField || !diffChild.isGenerated();
	        } else if (child.isRequisite() && !scope.rangeInfo) {
	          // The presence of `rangeInfo` indicates that we are traversing
	          // connection metadata fields, in which case `visitField` will ensure
	          // that `edges` and `page_info` are kept when necessary. The requisite
	          // check alone could cause these fields to be added back when not
	          // needed.
	          //
	          // Example: `friends.first(3) {count, edges {...}, page_info {...} }
	          // If all `edges` were fetched but `count` is unfetched, the diff
	          // should be `friends.first(3) {count}` and not include `page_info`.
	          diffChildren = diffChildren || [];
	          diffChildren.push(child);
	        }
	        if (_this._queryTracker) {
	          // Tracker uses tracked children and keeps requisite fields
	          if (trackedChild) {
	            trackedChildren = trackedChildren || [];
	            trackedChildren.push(trackedChild);
	            hasTrackedField = hasTrackedField || !trackedChild.isGenerated();
	          } else if (child.isRequisite()) {
	            trackedChildren = trackedChildren || [];
	            trackedChildren.push(child);
	          }
	        }
	      } else if (child instanceof __webpack_require__(2).Fragment) {
	        var isCompatibleType = __webpack_require__(45)(child, _this._store.getType(scope.dataID));
	        if (isCompatibleType) {
	          if (child.isTrackingEnabled()) {
	            var hash = child.getCompositeHash();
	            if (_this._store.hasFragmentData(scope.dataID, hash)) {
	              return {
	                diffNode: null,
	                trackedNode: null
	              };
	            }
	          }

	          var _diffOutput = _this.traverse(child, path, scope);
	          var _diffChild = _diffOutput ? _diffOutput.diffNode : null;
	          var _trackedChild = _diffOutput ? _diffOutput.trackedNode : null;

	          if (_diffChild) {
	            diffChildren = diffChildren || [];
	            diffChildren.push(_diffChild);
	            hasDiffField = true;
	          }
	          if (_trackedChild) {
	            trackedChildren = trackedChildren || [];
	            trackedChildren.push(_trackedChild);
	            hasTrackedField = true;
	          }
	        } else {
	          // Non-matching fragment types are similar to requisite fields:
	          // they don't need to be diffed against and should only be included
	          // if something *else* is missing from the node.
	          diffChildren = diffChildren || [];
	          diffChildren.push(child);
	        }
	      }
	    });

	    // Only return diff/tracked node if there are non-generated fields
	    if (diffChildren && hasDiffField) {
	      diffNode = node.clone(diffChildren);
	    }
	    if (trackedChildren && hasTrackedField) {
	      trackedNode = node.clone(trackedChildren);
	    }
	    // Record tracked nodes. Fragments can be skipped because these will
	    // always be composed into, and therefore tracked by, their nearest
	    // non-fragment parent.
	    if (this._queryTracker && trackedNode && !(trackedNode instanceof __webpack_require__(2).Fragment)) {
	      this._queryTracker.trackNodeForID(trackedNode, scope.dataID);
	    }

	    return {
	      diffNode: diffNode,
	      trackedNode: trackedNode
	    };
	  };

	  /**
	   * Diff a scalar field such as `name` or `id`.
	   */


	  RelayDiffQueryBuilder.prototype.diffScalar = function diffScalar(field, dataID) {
	    if (this._store.getField(dataID, field.getStorageKey()) === undefined) {
	      return {
	        diffNode: field,
	        trackedNode: null
	      };
	    }
	    return null;
	  };

	  /**
	   * Diff a field-of-fields such as `profile_picture {...}`. Returns early if
	   * the field has not been fetched, otherwise the result of traversal.
	   */


	  RelayDiffQueryBuilder.prototype.diffLink = function diffLink(field, path, dataID) {
	    var nextDataID = this._store.getLinkedRecordID(dataID, field.getStorageKey());
	    if (nextDataID === undefined) {
	      return {
	        diffNode: field,
	        trackedNode: null
	      };
	    }
	    if (nextDataID === null) {
	      return {
	        diffNode: null,
	        trackedNode: this._queryTracker ? field : null
	      };
	    }

	    return this.traverse(field, __webpack_require__(9).getPath(path, field, nextDataID), makeScope(nextDataID));
	  };

	  /**
	   * Diffs a non-connection plural field against each of the fetched items.
	   * Note that scalar plural fields are handled by `_diffScalar`.
	   */


	  RelayDiffQueryBuilder.prototype.diffPluralLink = function diffPluralLink(field, path, dataID) {
	    var _this2 = this;

	    var linkedIDs = this._store.getLinkedRecordIDs(dataID, field.getStorageKey());
	    if (linkedIDs === undefined) {
	      // not fetched
	      return {
	        diffNode: field,
	        trackedNode: null
	      };
	    } else if (linkedIDs === null || linkedIDs.length === 0) {
	      // Don't fetch if array is null or empty, but still track the fragment
	      return {
	        diffNode: null,
	        trackedNode: this._queryTracker ? field : null
	      };
	    } else if (field.getInferredRootCallName() === NODE) {
	      // The items in this array are fetchable and may have been filled in
	      // from other sources, so check them all. For example, `Story{actors}`
	      // is an array (but not a range), and the Actors in that array likely
	      // had data fetched for them elsewhere (like `viewer(){actor}`).
	      var hasSplitQueries = false;
	      linkedIDs.forEach(function (itemID) {
	        var itemState = _this2.traverse(field, __webpack_require__(9).getPath(path, field, itemID), makeScope(itemID));
	        if (itemState) {
	          // If any child was tracked then `field` will also be tracked
	          hasSplitQueries = hasSplitQueries || !!itemState.trackedNode || !!itemState.diffNode;
	          // split diff nodes into root queries
	          if (itemState.diffNode) {
	            _this2.splitQuery(buildRoot(itemID, itemState.diffNode.getChildren(), __webpack_require__(9).getName(path), field.getType(), field.isAbstract()));
	          }
	        }
	      });
	      // if sub-queries are split then this *entire* field will be tracked,
	      // therefore we don't need to merge the `trackedNode` from each item
	      if (hasSplitQueries) {
	        return {
	          diffNode: null,
	          trackedNode: this._queryTracker ? field : null
	        };
	      }
	    } else {
	      // The items in this array are not fetchable by ID, so nothing else could
	      // have fetched additional data for individual items. If any item in this
	      // list is missing data, refetch the whole field.

	      var atLeastOneItemHasMissingData = false;
	      var atLeastOneItemHasTrackedData = false;

	      linkedIDs.some(function (itemID) {
	        var itemState = _this2.traverse(field, __webpack_require__(9).getPath(path, field, itemID), makeScope(itemID));
	        if (itemState && itemState.diffNode) {
	          atLeastOneItemHasMissingData = true;
	        }
	        if (itemState && itemState.trackedNode) {
	          atLeastOneItemHasTrackedData = true;
	        }
	        // Exit early if possible
	        return atLeastOneItemHasMissingData && atLeastOneItemHasTrackedData;
	      });

	      if (atLeastOneItemHasMissingData || atLeastOneItemHasTrackedData) {
	        return {
	          diffNode: atLeastOneItemHasMissingData ? field : null,
	          trackedNode: atLeastOneItemHasTrackedData ? field : null
	        };
	      }
	    }
	    return null;
	  };

	  /**
	   * Diff a connection field such as `news_feed.first(3)`. Returns early if
	   * the range has not been fetched or the entire range has already been
	   * fetched. Otherwise the diff output is a clone of `field` with updated
	   * after/first and before/last calls.
	   */


	  RelayDiffQueryBuilder.prototype.diffConnection = function diffConnection(field, path, dataID) {
	    var _this3 = this;

	    var store = this._store;
	    var connectionID = store.getLinkedRecordID(dataID, field.getStorageKey());
	    var rangeInfo = store.getRangeMetadata(connectionID, field.getCallsWithValues());
	    // Keep the field if the connection is unfetched
	    if (connectionID === undefined) {
	      return {
	        diffNode: field,
	        trackedNode: null
	      };
	    }
	    // Don't fetch if connection is null, but continue to track the fragment if
	    // appropriate.
	    if (connectionID === null) {
	      return this._queryTracker ? {
	        diffNode: null,
	        trackedNode: field
	      } : null;
	    }
	    // If metadata fields but not edges are fetched, diff as a normal field.
	    // In practice, `rangeInfo` is `undefined` if unfetched, `null` if the
	    // connection was deleted (in which case `connectionID` is null too).
	    if (rangeInfo == null) {
	      return this.traverse(field, __webpack_require__(9).getPath(path, field, connectionID), makeScope(connectionID));
	    }
	    var diffCalls = rangeInfo.diffCalls,
	        filteredEdges = rangeInfo.filteredEdges;

	    // check existing edges for missing fields

	    var hasSplitQueries = false;
	    filteredEdges.forEach(function (edge) {
	      var scope = {
	        connectionField: field,
	        dataID: connectionID,
	        edgeID: edge.edgeID,
	        rangeInfo: rangeInfo
	      };
	      var diffOutput = _this3.traverse(field, __webpack_require__(9).getPath(path, field, edge.edgeID), scope);
	      // If any edges were missing data (resulting in a split query),
	      // then the entire original connection field must be tracked.
	      if (diffOutput) {
	        hasSplitQueries = hasSplitQueries || !!diffOutput.trackedNode;
	      }
	    });

	    // Scope has null `edgeID` to skip looking at `edges` fields.
	    var scope = {
	      connectionField: field,
	      dataID: connectionID,
	      edgeID: null,
	      rangeInfo: rangeInfo
	    };
	    // diff non-`edges` fields such as `count`
	    var diffOutput = this.traverse(field, __webpack_require__(9).getPath(path, field, connectionID), scope);
	    var diffNode = diffOutput ? diffOutput.diffNode : null;
	    var trackedNode = diffOutput ? diffOutput.trackedNode : null;
	    if (diffCalls.length && diffNode instanceof __webpack_require__(2).Field) {
	      diffNode = diffNode.cloneFieldWithCalls(diffNode.getChildren(), diffCalls);
	    }
	    // if a sub-query was split, then we must track the entire field, which will
	    // be a superset of the `trackedNode` from traversing any metadata fields.
	    // Example:
	    // dataID: `4`
	    // node: `friends.first(3)`
	    // diffNode: null
	    // splitQueries: `node(friend1) {...}`, `node(friend2) {...}`
	    //
	    // In this case the two fetched `node` queries do not reflect the fact that
	    // `friends.first(3)` were fetched for item `4`, so `friends.first(3)` has
	    // to be tracked as-is.
	    if (hasSplitQueries) {
	      trackedNode = field;
	    }

	    return {
	      diffNode: diffNode,
	      trackedNode: this._queryTracker ? trackedNode : null
	    };
	  };

	  /**
	   * Diff an `edges` field for the edge rooted at `edgeID`, splitting a new
	   * root query to fetch any missing data (via a `node(id)` root if the
	   * field is refetchable or a `...{connection.find(id){}}` query if the
	   * field is not refetchable).
	   */


	  RelayDiffQueryBuilder.prototype.diffConnectionEdge = function diffConnectionEdge(connectionField, edgeField, path, edgeID, rangeInfo) {
	    var hasSplitQueries = false;
	    var diffOutput = this.traverse(edgeField, __webpack_require__(9).getPath(path, edgeField, edgeID), makeScope(edgeID));
	    var diffNode = diffOutput ? diffOutput.diffNode : null;
	    var trackedNode = diffOutput ? diffOutput.trackedNode : null;
	    var nodeID = this._store.getLinkedRecordID(edgeID, NODE);

	    if (diffNode) {
	      if (!nodeID || __webpack_require__(3).isClientID(nodeID)) {
	        __webpack_require__(5)(connectionField.isConnectionWithoutNodeID(), 'RelayDiffQueryBuilder: Field `node` on connection `%s` cannot be ' + 'retrieved if it does not have an `id` field. If you expect fields ' + 'to be retrieved on this field, add an `id` field in the schema. ' + 'If you choose to ignore this warning, you can silence it by ' + 'adding `@relay(isConnectionWithoutNodeID: true)` to the ' + 'connection field.', connectionField.getStorageKey());
	      } else {
	        var _splitNodeAndEdgesFie = splitNodeAndEdgesFields(diffNode),
	            diffEdgesField = _splitNodeAndEdgesFie.edges,
	            diffNodeField = _splitNodeAndEdgesFie.node;

	        // split missing `node` fields into a `node(id)` root query


	        if (diffNodeField) {
	          hasSplitQueries = true;
	          var nodeField = edgeField.getFieldByStorageKey('node');
	          __webpack_require__(1)(nodeField, 'RelayDiffQueryBuilder: Expected connection `%s` to have a ' + '`node` field.', connectionField.getSchemaName());
	          this.splitQuery(buildRoot(nodeID, diffNodeField.getChildren(), __webpack_require__(9).getName(path), nodeField.getType(), nodeField.isAbstract()));
	        }

	        // split missing `edges` fields into a `connection.find(id)` query
	        // if `find` is supported, otherwise warn
	        if (diffEdgesField) {
	          if (connectionField.isFindable()) {
	            diffEdgesField = diffEdgesField.clone(diffEdgesField.getChildren().concat(nodeWithID));
	            var connectionFind = connectionField.cloneFieldWithCalls([diffEdgesField], rangeInfo.filterCalls.concat({ name: 'find', value: nodeID }));
	            if (connectionFind) {
	              hasSplitQueries = true;
	              // current path has `parent`, `connection`, `edges`; pop to parent
	              var connectionParent = __webpack_require__(9).getParent(__webpack_require__(9).getParent(path));
	              var connectionQuery = __webpack_require__(9).getQuery(this._store, connectionParent, connectionFind);
	              this.splitQuery(connectionQuery);
	            }
	          } else {
	            __webpack_require__(5)(false, 'RelayDiffQueryBuilder: connection `edges{*}` fields can only ' + 'be refetched if the connection supports the `find` call. ' + 'Cannot refetch data for field `%s`.', connectionField.getStorageKey());
	          }
	        }
	      }
	    }

	    // Connection edges will never return diff nodes; instead missing fields
	    // are fetched by new root queries. Tracked nodes are returned if either
	    // a child field was tracked or missing fields were split into a new query.
	    // The returned `trackedNode` is never tracked directly: instead it serves
	    // as an indicator to `diffConnection` that the entire connection field must
	    // be tracked.
	    return this._queryTracker ? {
	      diffNode: null,
	      trackedNode: hasSplitQueries ? edgeField : trackedNode
	    } : null;
	  };

	  return RelayDiffQueryBuilder;
	}();

	/**
	 * Helper to construct a plain scope for the given `dataID`.
	 */


	function makeScope(dataID) {
	  return {
	    connectionField: null,
	    dataID: dataID,
	    edgeID: null,
	    rangeInfo: null
	  };
	}

	/**
	 * Returns a clone of the input with `edges` and `node` sub-fields split into
	 * separate `edges` and `node` roots. Example:
	 *
	 * Input:
	 * edges {
	 *   edge_field,
	 *   node {
	 *     a,
	 *     b
	 *   },
	 *   ${
	 *     Fragment {
	 *       edge_field_2,
	 *       node {
	 *         c
	 *       }
	 *     }
	 *   }
	 * }
	 *
	 * Output:
	 * node:
	 *   edges {
	 *     a,      // flattened
	 *     b,      // flattend
	 *     ${
	 *       Fragment {
	 *         c  // flattened
	 *       }
	 *     }
	 *   }
	 * edges:
	 *   edges {
	 *     edge_field,
	 *     ${
	 *       Fragment {
	 *         edge_field_2
	 *       }
	 *     }
	 *   }
	 */
	function splitNodeAndEdgesFields(edgeOrFragment) {
	  var children = edgeOrFragment.getChildren();
	  var edgeChildren = [];
	  var nodeChild = null;
	  var nodeChildren = [];
	  var hasEdgeChild = false;
	  for (var ii = 0; ii < children.length; ii++) {
	    var child = children[ii];
	    if (child instanceof __webpack_require__(2).Field) {
	      if (child.getSchemaName() === NODE) {
	        var subFields = child.getChildren();
	        nodeChildren = nodeChildren.concat(subFields);
	        // can skip if `node` only has an `id` field
	        if (!nodeChild) {
	          if (subFields.length === 1) {
	            var subField = subFields[0];
	            if (!(subField instanceof __webpack_require__(2).Field) || subField.getSchemaName() !== ID) {
	              nodeChild = child;
	            }
	          } else {
	            nodeChild = child;
	          }
	        }
	      } else {
	        edgeChildren.push(child);
	        hasEdgeChild = hasEdgeChild || !child.isRequisite();
	      }
	    } else if (child instanceof __webpack_require__(2).Fragment) {
	      var _splitNodeAndEdgesFie2 = splitNodeAndEdgesFields(child),
	          _edges = _splitNodeAndEdgesFie2.edges,
	          _node = _splitNodeAndEdgesFie2.node;

	      if (_edges) {
	        edgeChildren.push(_edges);
	        hasEdgeChild = true;
	      }
	      if (_node) {
	        nodeChildren.push(_node);
	        nodeChild = _node;
	      }
	    }
	  }

	  return {
	    edges: hasEdgeChild ? edgeOrFragment.clone(edgeChildren) : null,
	    node: nodeChild && __webpack_require__(2).Fragment.build('diffRelayQuery', nodeChild.getType(), nodeChildren, {
	      isAbstract: nodeChild.isAbstract()
	    })
	  };
	}

	function buildRoot(rootID, nodes, name, type, isAbstract) {
	  var children = [idField, typeField];
	  var fields = [];
	  nodes.forEach(function (node) {
	    if (node instanceof __webpack_require__(2).Field) {
	      fields.push(node);
	    } else {
	      children.push(node);
	    }
	  });
	  children.push(__webpack_require__(2).Fragment.build('diffRelayQuery', type, fields, { isAbstract: isAbstract }));

	  return __webpack_require__(2).Root.build(name, NODE, rootID, children, {
	    identifyingArgName: ID,
	    identifyingArgType: ID_TYPE,
	    isAbstract: true,
	    isDeferred: false,
	    isPlural: false
	  }, NODE_TYPE);
	}

	module.exports = __webpack_require__(10).instrument('diffRelayQuery', diffRelayQuery);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule directivesToGraphQL
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @internal
	 *
	 * Convert plain object `{name, arguments}` directives to GraphQL directive
	 * nodes.
	 */
	function directivesToGraphQL(directives) {
	  return directives.map(function (_ref) {
	    var directiveName = _ref.name,
	        args = _ref.args;

	    var concreteArguments = args.map(function (_ref2) {
	      var argName = _ref2.name,
	          value = _ref2.value;

	      var concreteArgument = null;
	      if (Array.isArray(value)) {
	        concreteArgument = value.map(__webpack_require__(7).createCallValue);
	      } else if (value != null) {
	        concreteArgument = __webpack_require__(7).createCallValue(value);
	      }
	      return __webpack_require__(7).createDirectiveArgument(argName, concreteArgument);
	    });
	    return __webpack_require__(7).createDirective(directiveName, concreteArguments);
	  });
	}

	module.exports = directivesToGraphQL;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findRelayQueryLeaves
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var EDGES = __webpack_require__(6).EDGES,
	    PAGE_INFO = __webpack_require__(6).PAGE_INFO;

	/**
	 * @internal
	 *
	 * Traverses a query and data in the record store to determine if there are
	 * additional nodes that needs to be read from disk cache. If it  ncounters
	 * a node that is not in `cachedRecords`, it will queued that node by adding it
	 * into the `pendingNodeStates` list. If it encounters a node that was already read
	 * but still missing data, then it will short circuit the evaluation since
	 * there is no way for us to satisfy this query even with additional data from
	 * disk cache and resturn
	 */


	function findRelayQueryLeaves(store, cachedRecords, queryNode, dataID, path, rangeCalls) {
	  var finder = new RelayQueryLeavesFinder(store, cachedRecords);

	  var state = {
	    dataID: dataID,
	    missingData: false,
	    path: path,
	    rangeCalls: rangeCalls,
	    rangeInfo: undefined
	  };
	  finder.visit(queryNode, state);
	  return {
	    missingData: state.missingData,
	    pendingNodeStates: finder.getPendingNodeStates()
	  };
	}

	var RelayQueryLeavesFinder = function (_RelayQueryVisitor) {
	  (0, _inherits3['default'])(RelayQueryLeavesFinder, _RelayQueryVisitor);

	  function RelayQueryLeavesFinder(store) {
	    var cachedRecords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    (0, _classCallCheck3['default'])(this, RelayQueryLeavesFinder);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryVisitor.call(this));

	    _this._store = store;
	    _this._cachedRecords = cachedRecords;
	    _this._pendingNodeStates = [];
	    return _this;
	  }

	  RelayQueryLeavesFinder.prototype.getPendingNodeStates = function getPendingNodeStates() {
	    return this._pendingNodeStates;
	  };

	  /**
	   * Skip visiting children if missingData is already false.
	   */


	  RelayQueryLeavesFinder.prototype.traverse = function traverse(node, state) {
	    var children = node.getChildren();
	    for (var ii = 0; ii < children.length; ii++) {
	      if (state.missingData) {
	        return;
	      }
	      this.visit(children[ii], state);
	    }
	  };

	  RelayQueryLeavesFinder.prototype.visitFragment = function visitFragment(fragment, state) {
	    var dataID = state.dataID;
	    var recordState = this._store.getRecordState(dataID);
	    if (recordState === __webpack_require__(16).UNKNOWN) {
	      this._handleMissingData(fragment, state);
	      return;
	    } else if (recordState === __webpack_require__(16).NONEXISTENT) {
	      return;
	    }

	    if (__webpack_require__(45)(fragment, this._store.getType(dataID))) {
	      this.traverse(fragment, state);
	    }
	  };

	  RelayQueryLeavesFinder.prototype.visitField = function visitField(field, state) {
	    var dataID = state.dataID;
	    var recordState = this._store.getRecordState(dataID);
	    if (recordState === __webpack_require__(16).UNKNOWN) {
	      this._handleMissingData(field, state);
	      return;
	    } else if (recordState === __webpack_require__(16).NONEXISTENT) {
	      return;
	    }

	    if (state.rangeCalls && !state.rangeInfo) {
	      var metadata = this._store.getRangeMetadata(dataID, state.rangeCalls);
	      if (metadata) {
	        state.rangeInfo = metadata;
	      }
	    }
	    var rangeInfo = state.rangeInfo;
	    if (rangeInfo && field.getSchemaName() === EDGES) {
	      this._visitEdges(field, state);
	    } else if (rangeInfo && field.getSchemaName() === PAGE_INFO) {
	      this._visitPageInfo(field, state);
	    } else if (!field.canHaveSubselections()) {
	      this._visitScalar(field, state);
	    } else if (field.isPlural()) {
	      this._visitPlural(field, state);
	    } else if (field.isConnection()) {
	      this._visitConnection(field, state);
	    } else {
	      this._visitLinkedField(field, state);
	    }
	  };

	  RelayQueryLeavesFinder.prototype._visitScalar = function _visitScalar(field, state) {
	    var fieldData = this._store.getField(state.dataID, field.getStorageKey());
	    if (fieldData === undefined) {
	      this._handleMissingData(field, state);
	    }
	  };

	  RelayQueryLeavesFinder.prototype._visitPlural = function _visitPlural(field, state) {
	    var dataIDs = this._store.getLinkedRecordIDs(state.dataID, field.getStorageKey());
	    if (dataIDs === undefined) {
	      this._handleMissingData(field, state);
	      return;
	    }
	    if (dataIDs) {
	      for (var ii = 0; ii < dataIDs.length; ii++) {
	        if (state.missingData) {
	          break;
	        }
	        var nextState = {
	          dataID: dataIDs[ii],
	          missingData: false,
	          path: __webpack_require__(9).getPath(state.path, field, dataIDs[ii]),
	          rangeCalls: undefined,
	          rangeInfo: undefined
	        };
	        this.traverse(field, nextState);
	        state.missingData = nextState.missingData;
	      }
	    }
	  };

	  RelayQueryLeavesFinder.prototype._visitConnection = function _visitConnection(field, state) {
	    var calls = field.getCallsWithValues();
	    var dataID = this._store.getLinkedRecordID(state.dataID, field.getStorageKey());
	    if (dataID === undefined) {
	      this._handleMissingData(field, state);
	      return;
	    }
	    if (dataID) {
	      var nextState = {
	        dataID: dataID,
	        missingData: false,
	        path: __webpack_require__(9).getPath(state.path, field, dataID),
	        rangeCalls: calls,
	        rangeInfo: null
	      };
	      var metadata = this._store.getRangeMetadata(dataID, calls);
	      if (metadata) {
	        nextState.rangeInfo = metadata;
	      }
	      this.traverse(field, nextState);
	      state.missingData = state.missingData || nextState.missingData;
	    }
	  };

	  RelayQueryLeavesFinder.prototype._visitEdges = function _visitEdges(field, state) {
	    var rangeInfo = state.rangeInfo;
	    // Doesn't have  `__range__` loaded
	    if (!rangeInfo) {
	      this._handleMissingData(field, state);
	      return;
	    }
	    if (rangeInfo.diffCalls.length) {
	      state.missingData = true;
	      return;
	    }
	    var edgeIDs = rangeInfo.requestedEdgeIDs;
	    for (var ii = 0; ii < edgeIDs.length; ii++) {
	      if (state.missingData) {
	        break;
	      }
	      var nextState = {
	        dataID: edgeIDs[ii],
	        missingData: false,
	        path: __webpack_require__(9).getPath(state.path, field, edgeIDs[ii]),
	        rangeCalls: undefined,
	        rangeInfo: undefined
	      };
	      this.traverse(field, nextState);
	      state.missingData = state.missingData || nextState.missingData;
	    }
	  };

	  RelayQueryLeavesFinder.prototype._visitPageInfo = function _visitPageInfo(field, state) {
	    var rangeInfo = state.rangeInfo;

	    if (!rangeInfo || !rangeInfo.pageInfo) {
	      this._handleMissingData(field, state);
	      return;
	    }
	  };

	  RelayQueryLeavesFinder.prototype._visitLinkedField = function _visitLinkedField(field, state) {
	    var dataID = this._store.getLinkedRecordID(state.dataID, field.getStorageKey());
	    if (dataID === undefined) {
	      this._handleMissingData(field, state);
	      return;
	    }
	    if (dataID) {
	      var nextState = {
	        dataID: dataID,
	        missingData: false,
	        path: __webpack_require__(9).getPath(state.path, field, dataID),
	        rangeCalls: undefined,
	        rangeInfo: undefined
	      };
	      this.traverse(field, nextState);
	      state.missingData = state.missingData || nextState.missingData;
	    }
	  };

	  RelayQueryLeavesFinder.prototype._handleMissingData = function _handleMissingData(node, state) {
	    var dataID = state.dataID;
	    if (this._cachedRecords.hasOwnProperty(dataID)) {
	      // We have read data for this `dataID` from disk, but
	      // we still don't have data for the relevant field.
	      state.missingData = true;
	    } else {
	      // Store node in `pendingNodeStates` because we have not read data for
	      // this `dataID` from disk.
	      this._pendingNodeStates.push({
	        dataID: dataID,
	        node: node,
	        path: state.path,
	        rangeCalls: state.rangeCalls
	      });
	    }
	  };

	  return RelayQueryLeavesFinder;
	}(__webpack_require__(26));

	module.exports = __webpack_require__(10).instrument('findRelayQueryLeaves', findRelayQueryLeaves);

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenSplitRelayQueries
	 * 
	 * @format
	 */

	'use strict';

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(30));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Flattens the nested structure returned by `splitDeferredRelayQueries`.
	 *
	 * Right now our internals discard the information about the relationship
	 * between the queries that is encoded in the nested structure.
	 *
	 * @internal
	 */
	function flattenSplitRelayQueries(splitQueries) {
	  var flattenedQueries = [];
	  var queue = [splitQueries];
	  while (queue.length) {
	    splitQueries = queue.shift();
	    var _splitQueries = splitQueries,
	        required = _splitQueries.required,
	        deferred = _splitQueries.deferred;

	    if (required) {
	      flattenedQueries.push(required);
	    }
	    if (deferred.length) {
	      queue.push.apply(queue, (0, _toConsumableArray3['default'])(deferred));
	    }
	  }
	  return flattenedQueries;
	}

	module.exports = flattenSplitRelayQueries;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule fromGraphQL
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * @internal
	 *
	 * Converts GraphQL nodes to RelayQuery nodes.
	 */
	var fromGraphQL = {
	  Field: function Field(query) {
	    var node = createNode(query, __webpack_require__(2).Field);
	    __webpack_require__(1)(node instanceof __webpack_require__(2).Field, 'fromGraphQL.Field(): Expected a GraphQL field node.');
	    return node;
	  },
	  Fragment: function Fragment(query) {
	    var node = createNode(query, __webpack_require__(2).Fragment);
	    __webpack_require__(1)(node instanceof __webpack_require__(2).Fragment, 'fromGraphQL.Fragment(): Expected a GraphQL fragment node.');
	    return node;
	  },
	  Query: function Query(query) {
	    var node = createNode(query, __webpack_require__(2).Root);
	    __webpack_require__(1)(node instanceof __webpack_require__(2).Root, 'fromGraphQL.Query(): Expected a root node.');
	    return node;
	  },
	  Operation: function Operation(query) {
	    var node = createNode(query, __webpack_require__(2).Operation);
	    __webpack_require__(1)(node instanceof __webpack_require__(2).Operation, 'fromGraphQL.Operation(): Expected a mutation/subscription node.');
	    return node;
	  }
	};

	function createNode(query, desiredType) {
	  var variables = {};
	  var route = __webpack_require__(12).get('$fromGraphQL');
	  return desiredType.create(query, route, variables);
	}

	module.exports = fromGraphQL;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isClassicRelayContext
	 * 
	 * @format
	 */

	'use strict';

	/**
	 * Determine if a given value is an object that implements the `RelayContext`
	 * interface.
	 */
	function isClassicRelayContext(relay) {
	  return typeof relay === 'object' && relay !== null && !Array.isArray(relay) && __webpack_require__(72)(relay.environment) && __webpack_require__(96)(relay.variables);
	}

	module.exports = isClassicRelayContext;

/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule isScalarAndEqual
	 * @format
	 */

	'use strict';

	/**
	 * A fast test to determine if two values are equal scalars:
	 * - compares scalars such as booleans, strings, numbers by value
	 * - compares functions by identity
	 * - returns false for complex values, since these cannot be cheaply tested for
	 *   equality (use `areEquals` instead)
	 */

	function isScalarAndEqual(valueA, valueB) {
	  return valueA === valueB && (valueA === null || typeof valueA !== 'object');
	}

	module.exports = isScalarAndEqual;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule restoreRelayCacheData
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Retrieves data for queries or fragments from disk into `cachedRecords`.
	 */
	function restoreFragmentDataFromCache(dataID, fragment, path, store, cachedRecords, cachedRootCallMap, garbageCollector, cacheManager, changeTracker, callbacks) {
	  var restorator = new RelayCachedDataRestorator(cacheManager, store, cachedRecords, cachedRootCallMap, changeTracker, callbacks, garbageCollector);
	  restorator.restoreFragmentData(dataID, fragment, path);

	  return {
	    abort: function abort() {
	      restorator.abort();
	    }
	  };
	}

	function restoreQueriesDataFromCache(queries, store, cachedRecords, cachedRootCallMap, garbageCollector, cacheManager, changeTracker, callbacks) {
	  var restorator = new RelayCachedDataRestorator(cacheManager, store, cachedRecords, cachedRootCallMap, changeTracker, callbacks, garbageCollector);
	  restorator.restoreQueriesData(queries);

	  return {
	    abort: function abort() {
	      restorator.abort();
	    }
	  };
	}

	var RelayCachedDataRestorator = function (_RelayCacheProcessor) {
	  (0, _inherits3['default'])(RelayCachedDataRestorator, _RelayCacheProcessor);

	  function RelayCachedDataRestorator(cacheManager, store, cachedRecords, cachedRootCallMap, changeTracker, callbacks, garbageCollector) {
	    (0, _classCallCheck3['default'])(this, RelayCachedDataRestorator);

	    var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayCacheProcessor.call(this, cacheManager, callbacks));

	    _this._cachedRecords = cachedRecords;
	    _this._cachedRootCallMap = cachedRootCallMap;
	    _this._changeTracker = changeTracker;
	    _this._garbageCollector = garbageCollector;
	    _this._store = store;
	    return _this;
	  }

	  RelayCachedDataRestorator.prototype.handleNodeVisited = function handleNodeVisited(node, dataID, record, nextState) {
	    var recordState = this._store.getRecordState(dataID);
	    this._cachedRecords[dataID] = record;
	    // Mark records as created/updated as necessary. Note that if the
	    // record is known to be deleted in the store then it will have been
	    // been marked as created already. Further, it does not need to be
	    // updated since no additional data can be read about a deleted node.
	    if (recordState === 'UNKNOWN' && record !== undefined) {
	      // Register immediately in case anything tries to read and subscribe
	      // to this record (which means incrementing reference counts).
	      if (this._garbageCollector) {
	        this._garbageCollector.register(dataID);
	      }
	      // Mark as created if the store did not have a record but disk cache
	      // did (either a known record or known deletion).
	      this._changeTracker.createID(dataID);
	    } else if (recordState === 'EXISTENT' && record != null) {
	      // Mark as updated only if a record exists in both the store and
	      // disk cache.
	      this._changeTracker.updateID(dataID);
	    }
	    if (!record) {
	      // We are out of luck if disk doesn't have the node either.
	      this.handleFailure();
	      return;
	    }
	    if (__webpack_require__(3).isClientID(dataID)) {
	      record.__path__ = nextState.path;
	    }
	  };

	  RelayCachedDataRestorator.prototype.handleIdentifiedRootVisited = function handleIdentifiedRootVisited(query, dataID, identifyingArgKey, nextState) {
	    if (dataID == null) {
	      // Read from cache and we still don't have a valid `dataID`.
	      this.handleFailure();
	      return;
	    }
	    var storageKey = query.getStorageKey();
	    this._cachedRootCallMap[storageKey] = this._cachedRootCallMap[storageKey] || {};
	    this._cachedRootCallMap[storageKey][identifyingArgKey || ''] = dataID;
	    nextState.dataID = dataID;
	  };

	  RelayCachedDataRestorator.prototype.restoreFragmentData = function restoreFragmentData(dataID, fragment, path) {
	    var _this2 = this;

	    this.process(function () {
	      _this2.visitFragment(fragment, {
	        dataID: dataID,
	        node: fragment,
	        path: path,
	        rangeCalls: undefined
	      });
	    });
	  };

	  RelayCachedDataRestorator.prototype.restoreQueriesData = function restoreQueriesData(queries) {
	    var _this3 = this;

	    this.process(function () {
	      __webpack_require__(11)(queries, function (query) {
	        if (_this3._state === 'COMPLETED') {
	          return;
	        }
	        if (query) {
	          _this3.visitRoot(query, {
	            dataID: undefined,
	            node: query,
	            path: __webpack_require__(9).create(query),
	            rangeCalls: undefined
	          });
	        }
	      });
	    });
	  };

	  RelayCachedDataRestorator.prototype.traverse = function traverse(node, nextState) {
	    __webpack_require__(1)(nextState.dataID != null, 'RelayCachedDataRestorator: Attempted to traverse without a ' + '`dataID`.');

	    var _findRelayQueryLeaves = __webpack_require__(136)(this._store, this._cachedRecords, nextState.node, nextState.dataID, nextState.path, nextState.rangeCalls),
	        missingData = _findRelayQueryLeaves.missingData,
	        pendingNodeStates = _findRelayQueryLeaves.pendingNodeStates;

	    if (missingData) {
	      this.handleFailure();
	      return;
	    }
	    for (var ii = 0; ii < pendingNodeStates.length; ii++) {
	      if (this._state === 'COMPLETED') {
	        return;
	      }
	      __webpack_require__(1)(pendingNodeStates[ii].dataID != null, 'RelayCachedDataRestorator: Attempted to visit a node without ' + 'a `dataID`.');
	      this.visitNode(pendingNodeStates[ii].node, pendingNodeStates[ii].dataID, pendingNodeStates[ii]);
	    }
	  };

	  RelayCachedDataRestorator.prototype.visitIdentifiedRoot = function visitIdentifiedRoot(query, identifyingArgKey, nextState) {
	    var dataID = this._store.getDataID(query.getStorageKey(), identifyingArgKey);
	    if (dataID == null) {
	      _RelayCacheProcessor.prototype.visitIdentifiedRoot.call(this, query, identifyingArgKey, nextState);
	    } else {
	      this.traverse(query, {
	        dataID: dataID,
	        node: query,
	        path: __webpack_require__(9).create(query),
	        rangeCalls: undefined
	      });
	    }
	  };

	  return RelayCachedDataRestorator;
	}(__webpack_require__(107));

	__webpack_require__(10).instrumentMethods(RelayCachedDataRestorator.prototype, {
	  handleIdentifiedRootVisited: 'RelayCachedDataRestorator.handleIdentifiedRootVisited',
	  handleNodeVisited: 'RelayCachedDataRestorator.handleNodeVisited',
	  queueIdentifiedRoot: 'RelayCachedDataRestorator.queueRoot',
	  queueNode: 'RelayCachedDataRestorator.queueNode',
	  restoreFragmentData: 'RelayCachedDataRestorator.readFragment',
	  restoreQueriesData: 'RelayCachedDataRestorator.read',
	  traverse: 'RelayCachedDataRestorator.traverse',
	  visitNode: 'RelayCachedDataRestorator.visitNode',
	  visitRoot: 'RelayCachedDataRestorator.visitRoot'
	});

	module.exports = {
	  restoreFragmentDataFromCache: restoreFragmentDataFromCache,
	  restoreQueriesDataFromCache: restoreQueriesDataFromCache
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule splitDeferredRelayQueries
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Traverse `node` splitting off deferred query fragments into separate queries.
	 *
	 * @internal
	 */
	function splitDeferredRelayQueries(node) {
	  var splitter = new GraphQLSplitDeferredQueries();
	  var splitQueries = {
	    __nodePath__: [],
	    __parent__: null,
	    __refQuery__: null,
	    deferred: [],
	    required: null
	  };
	  splitter.visit(node, splitQueries);

	  return buildQueries(splitQueries);
	}

	/**
	 * Returns the requisite siblings of `node`, but filters any non-requisite
	 * children of those siblings.
	 */
	function getRequisiteSiblings(node, parent) {
	  // Get the requisite siblings.
	  var siblings = parent.getChildren().filter(function (child) {
	    return child !== node && child instanceof __webpack_require__(2).Field && child.isRequisite();
	  });

	  // Filter the non-requisite children from those siblings.
	  return siblings.map(function (sibling) {
	    var children = sibling.getChildren().filter(function (child) {
	      return child instanceof __webpack_require__(2).Field && child.isRequisite();
	    });
	    var clone = sibling.clone(children);
	    __webpack_require__(1)(clone, 'splitDeferredRelayQueries(): Unexpected non-scalar, requisite field.');
	    return clone;
	  });
	}

	/**
	 * Traverse the parent chain of `node` wrapping it at each level until it is
	 * either:
	 *
	 * - wrapped in a RelayQuery.Root node
	 * - wrapped in a non-root node that can be split off in a "ref query" (ie. a
	 *   root call with a ref param that references another query)
	 *
	 * Additionally ensures that any requisite sibling fields are embedded in each
	 * layer of the wrapper.
	 */
	function wrapNode(node, nodePath) {
	  for (var ii = nodePath.length - 1; ii >= 0; ii--) {
	    var parent = nodePath[ii];
	    if (parent instanceof __webpack_require__(2).Field && parent.getInferredRootCallName()) {
	      // We can make a "ref query" at this point, so stop wrapping.
	      return new (__webpack_require__(85))(node, nodePath.slice(0, ii + 1));
	    }

	    var siblings = getRequisiteSiblings(node, parent);
	    var children = [node].concat(siblings);

	    // Cast here because we know that `clone` will never return `null` (because
	    // we always give it at least one child).
	    node = parent.clone(children);
	  }
	  __webpack_require__(1)(node instanceof __webpack_require__(2).Root, 'splitDeferredRelayQueries(): Cannot build query without a root node.');
	  var identifyingArg = node.getIdentifyingArg();
	  var identifyingArgName = identifyingArg && identifyingArg.name || null;
	  var identifyingArgValue = identifyingArg && identifyingArg.value || null;
	  var metadata = {
	    identifyingArgName: identifyingArgName,
	    identifyingArgType: __webpack_require__(8).ID_TYPE,
	    isAbstract: true,
	    isDeferred: true,
	    isPlural: false
	  };
	  return __webpack_require__(2).Root.build(node.getName(), node.getFieldName(), identifyingArgValue, node.getChildren(), metadata, node.getType());
	}

	/**
	 * Returns `true` if `node` is considered "empty", which means that it contains
	 * no non-generated fields, and no ref query dependencies.
	 */
	function isEmpty(node) {
	  if (!node.canHaveSubselections()) {
	    return node.isGenerated() && !node.isRefQueryDependency();
	  } else {
	    return node.getChildren().every(isEmpty);
	  }
	}

	/**
	 * Mutates and returns a nested `SplitQueries` structure, updating any deferred
	 * "ref queries" to actually reference their contexts.
	 */
	function buildQueries(splitQueries) {
	  if (splitQueries.required && isEmpty(splitQueries.required)) {
	    splitQueries.required = null;
	  }
	  splitQueries.deferred = splitQueries.deferred.map(function (nestedSplitQueries) {
	    var descriptor = nestedSplitQueries.__refQuery__;
	    if (descriptor) {
	      // Wrap the ref query node with a reference to the required query that is
	      // its context.
	      var context = splitQueries.required;
	      if (!context) {
	        // Traverse upwards looking for context.
	        var parentSplitQueries = splitQueries;
	        while (parentSplitQueries.__parent__) {
	          context = parentSplitQueries.__parent__.required;
	          if (context) {
	            break;
	          }
	          parentSplitQueries = parentSplitQueries.__parent__;
	        }
	      }
	      __webpack_require__(1)(context, 'splitDeferredRelayQueries(): Expected a context root query.');
	      nestedSplitQueries.required = createRefQuery(descriptor, context);
	    }

	    return buildQueries(nestedSplitQueries);
	  });
	  return splitQueries;
	}

	/**
	 * Wraps `descriptor` in a new top-level ref query.
	 */
	function createRefQuery(descriptor, context) {
	  var node = descriptor.node;
	  __webpack_require__(1)(node instanceof __webpack_require__(2).Field || node instanceof __webpack_require__(2).Fragment, 'splitDeferredRelayQueries(): Ref query requires a field or fragment.');

	  // Build up JSONPath.
	  var jsonPath = ['$', '*'];
	  var parent = void 0;
	  for (var ii = 0; ii < descriptor.nodePath.length; ii++) {
	    parent = descriptor.nodePath[ii];
	    if (parent instanceof __webpack_require__(2).Field) {
	      jsonPath.push(parent.getSerializationKey());
	      if (parent.isPlural()) {
	        jsonPath.push('*');
	      }
	    }
	  }
	  __webpack_require__(1)(jsonPath.length > 2, 'splitDeferredRelayQueries(): Ref query requires a complete path.');
	  var field = parent; // Flow
	  var primaryKey = field.getInferredPrimaryKey();
	  __webpack_require__(1)(primaryKey, 'splitDeferredRelayQueries(): Ref query requires a primary key.');
	  jsonPath.push(primaryKey);

	  // Create the wrapper root query.
	  var root = __webpack_require__(2).Root.build(context.getName(), __webpack_require__(8).NODES, __webpack_require__(7).createBatchCallVariable(context.getID(), jsonPath.join('.')), [node], {
	    identifyingArgName: __webpack_require__(8).ID,
	    identifyingArgType: __webpack_require__(8).ID_TYPE,
	    isAbstract: true,
	    isDeferred: true,
	    isPlural: false
	  }, __webpack_require__(8).NODE_TYPE);

	  var result = root; // Flow
	  return result;
	}

	/**
	 * Traverses an input query, updating the passed in `SplitQueries` state object
	 * to contain a nested structure representing the required and deferred portions
	 * of the input query.
	 */

	var GraphQLSplitDeferredQueries = function (_RelayQueryTransform) {
	  (0, _inherits3['default'])(GraphQLSplitDeferredQueries, _RelayQueryTransform);

	  function GraphQLSplitDeferredQueries() {
	    (0, _classCallCheck3['default'])(this, GraphQLSplitDeferredQueries);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQueryTransform.apply(this, arguments));
	  }

	  GraphQLSplitDeferredQueries.prototype.visitField = function visitField(node, splitQueries) {
	    if (!node.hasDeferredDescendant()) {
	      return node;
	    }

	    splitQueries.__nodePath__.push(node);
	    var result = this.traverse(node, splitQueries);
	    splitQueries.__nodePath__.pop();

	    if (result && node.getInferredRootCallName()) {
	      // The node is a ref query dependency; mark it as one.
	      var key = node.getInferredPrimaryKey();
	      var children = result.getChildren().map(function (child) {
	        if (child instanceof __webpack_require__(2).Field && child.getSchemaName() === key) {
	          return child.cloneAsRefQueryDependency();
	        } else {
	          return child;
	        }
	      });
	      result = result.clone(children);
	    }

	    return result;
	  };

	  GraphQLSplitDeferredQueries.prototype.visitFragment = function visitFragment(node, splitQueries) {
	    if (!node.getChildren().length) {
	      return null;
	    }

	    if (node.isDeferred()) {
	      var nodePath = splitQueries.__nodePath__;
	      var _deferred = {
	        __nodePath__: nodePath,
	        __parent__: splitQueries,
	        __refQuery__: null,
	        deferred: [],
	        required: null
	      };
	      var result = this.traverse(node, _deferred);
	      if (result) {
	        var wrapped = wrapNode(result, nodePath);
	        if (wrapped instanceof __webpack_require__(2).Root) {
	          _deferred.required = wrapped;
	        } else if (wrapped instanceof __webpack_require__(85)) {
	          // for Flow
	          _deferred.__refQuery__ = wrapped;
	        }
	      }
	      if (result || _deferred.deferred.length) {
	        splitQueries.deferred.push(_deferred);
	      }
	      return null;
	    } else if (node.hasDeferredDescendant()) {
	      return this.traverse(node, splitQueries);
	    } else {
	      return node;
	    }
	  };

	  GraphQLSplitDeferredQueries.prototype.visitRoot = function visitRoot(node, splitQueries) {
	    if (!node.hasDeferredDescendant()) {
	      splitQueries.required = node;
	      return node;
	    } else {
	      splitQueries.__nodePath__.push(node);
	      var result = this.traverse(node, splitQueries);
	      splitQueries.__nodePath__.pop();
	      splitQueries.required = result;
	      return result;
	    }
	  };

	  return GraphQLSplitDeferredQueries;
	}(__webpack_require__(62));

	module.exports = __webpack_require__(10).instrument('splitDeferredRelayQueries', splitDeferredRelayQueries);

/***/ },
/* 143 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule testEditDistance
	 * 
	 * @format
	 *
	 */
	'use strict';

	/* eslint-disable no-shadow */

	/**
	 * @internal
	 *
	 * Determines whether the edit distance between two strings is at or below the
	 * specified threshold distance, using the approach described by Ukkonen (1985)
	 * in "Algorithms for Approximate String Matching"[0] and then improved upon by
	 * Berghel and Roach (1996) in "An Extension of Ukkonen's Enhanced Dynamic
	 * Programming ASM Algorithm"[1].
	 *
	 * Given two strings of length `m` and `n` respectively, and threshold `t`,
	 * uses `O(t*min(m,n))` time and `O(min(t,m,n))` space.
	 *
	 * @see [0]: http://www.cs.helsinki.fi/u/ukkonen/InfCont85.PDF
	 * @see [1]: http://berghel.net/publications/asm/asm.pdf
	 */

	function testEditDistance(a, b, threshold) {
	  // Ensure `b` is at least as long as `a`, swapping if necessary.
	  var m = a.length;
	  var n = b.length;
	  if (n < m) {
	    var _ref = [m, n];
	    n = _ref[0];
	    m = _ref[1];
	    var _ref2 = [a, b];
	    b = _ref2[0];
	    a = _ref2[1];
	  }
	  if (!m) {
	    return n <= threshold;
	  }

	  var zeroK = n;
	  var maxK = zeroK * 2 + 1;
	  var fkp = Array.from(Array(maxK), function () {
	    return [];
	  });

	  for (var k = -zeroK; k < 0; k++) {
	    var _p = -k - 1;
	    fkp[k + zeroK][_p + 1] = -k - 1;
	    fkp[k + zeroK][_p] = -Infinity;
	  }
	  fkp[zeroK][0] = -1;
	  for (var _k = 1; _k <= zeroK; _k++) {
	    var _p2 = _k - 1;
	    fkp[_k + zeroK][_p2 + 1] = -1;
	    fkp[_k + zeroK][_p2] = -Infinity;
	  }

	  // This loop is the alternative form suggested in the afterword of Berghel &
	  // Roach.
	  var p = n - m - 1;
	  do {
	    if (p > threshold) {
	      return false;
	    }
	    p++;
	    for (var i = Math.floor((p - (n - m)) / 2); i >= 1; i--) {
	      f(n - m + i, p - i);
	    }
	    for (var _i = Math.floor((n - m + p) / 2); _i >= 1; _i--) {
	      f(n - m - _i, p - _i);
	    }
	    f(n - m, p);
	  } while (fkp[n - m + zeroK][p] !== m);

	  return true;

	  function f(k, p) {
	    var t = fkp[k + zeroK][p] + 1;
	    var t2 = t;

	    // Check for transposed characters.
	    if (a[t - 1] === b[k + t] && a[t] === b[k + t - 1]) {
	      t2 = t + 1;
	    }

	    t = Math.max(t, fkp[k - 1 + zeroK][p], fkp[k + 1 + zeroK][p] + 1, t2);

	    while (a[t] === b[t + k] && t < Math.min(m, n - k)) {
	      t++;
	    }
	    fkp[k + zeroK][p + 1] = t;
	  }
	}

	module.exports = testEditDistance;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule validateMutationConfig
	 * 
	 * @format
	 */

	'use strict';

	var FUZZY_THRESHOLD = 3;

	/* eslint-disable no-unused-vars */
	var DEPRECATED = Object.freeze({
	  assert: __webpack_require__(5),
	  message: 'has deprecated property',
	  type: 'DEPRECATED'
	});
	/* eslint-enable no-unused-vars */

	var OPTIONAL = Object.freeze({
	  // These first two properties are not needed, but including them is easier
	  // than getting Flow to accept a disjoint union.
	  assert: function assert() {},
	  message: '',
	  type: 'OPTIONAL'
	});

	var REQUIRED = {
	  assert: __webpack_require__(1),
	  message: 'must have property',
	  type: 'REQUIRED'
	};

	function validateMutationConfig(config, name) {
	  function assertValid(properties) {
	    // Check for unexpected properties.
	    Object.keys(config).forEach(function (property) {
	      if (property === 'type') {
	        return;
	      }

	      if (!properties.hasOwnProperty(property)) {
	        var _message = __webpack_require__(41)('validateMutationConfig: Unexpected key `%s` in `%s` config ' + 'for `%s`', property, config.type, name);
	        var suggestion = Object.keys(properties).find(function (candidate) {
	          return __webpack_require__(143)(candidate, property, FUZZY_THRESHOLD);
	        });
	        if (suggestion) {
	          __webpack_require__(1)(false, '%s; did you mean `%s`?', _message, suggestion);
	        } else {
	          /* eslint-disable fb-www/sprintf-like-args-uniqueness */
	          __webpack_require__(1)(false, '%s.', _message);
	          /* eslint-enable fb-www/sprintf-like-args-uniqueness */
	        }
	      }
	    });

	    // Check for deprecated and missing properties.
	    Object.keys(properties).forEach(function (property) {
	      var validator = properties[property];
	      var isRequired = validator.type === 'REQUIRED';
	      var isDeprecated = validator.type === 'DEPRECATED';
	      var present = config.hasOwnProperty(property);
	      if (isRequired && !present || isDeprecated && present) {
	        validator.assert(false, 'validateMutationConfig: `%s` config on `%s` %s `%s`.', config.type, name, validator.message, property);
	      }
	    });
	  }

	  switch (config.type) {
	    case 'FIELDS_CHANGE':
	      assertValid({
	        fieldIDs: REQUIRED
	      });
	      break;

	    case 'RANGE_ADD':
	      assertValid({
	        connectionName: REQUIRED,
	        edgeName: REQUIRED,
	        parentID: OPTIONAL,
	        parentName: OPTIONAL,
	        rangeBehaviors: REQUIRED
	      });
	      break;

	    case 'NODE_DELETE':
	      assertValid({
	        connectionName: REQUIRED,
	        deletedIDFieldName: REQUIRED,
	        parentID: OPTIONAL,
	        parentName: REQUIRED
	      });
	      break;

	    case 'RANGE_DELETE':
	      assertValid({
	        connectionName: REQUIRED,
	        deletedIDFieldName: REQUIRED,
	        parentID: OPTIONAL,
	        parentName: REQUIRED,
	        pathToConnection: REQUIRED
	      });
	      break;

	    case 'REQUIRED_CHILDREN':
	      assertValid({
	        children: REQUIRED
	      });
	      break;

	    default:
	      __webpack_require__(1)(false, 'validateMutationConfig: unknown config type `%s` on `%s`', config.type, name);
	  }
	}

	module.exports = validateMutationConfig;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule validateRelayReadQuery
	 * 
	 * @format
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(4));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(15));

	var _inherits3 = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var validateRelayReadQuery = __webpack_require__(56);

	if (true) {
	  // Wrap in an IIFE to avoid unwanted function hoisting.
	  (function () {
	    /**
	     * @internal
	     *
	     * `validateRelayReadQuery` is a `__DEV__`-only validator that checks that a
	     * query used to read data from `RelayStore` is well-formed. Validation
	     * problems are reported via `console.error`.
	     *
	     * At the moment, "well-formed" means that the query does not contain
	     * duplicate aliases.
	     */
	    validateRelayReadQuery = function _validateRelayReadQuery(queryNode, options) {
	      var validator = new RelayStoreReadValidator(options);
	      validator.visit(queryNode, {
	        children: {},
	        hash: null
	      });
	    };

	    /**
	     * Returns the nested AliasMap for `node`, initializing if it necessary.
	     */
	    function getAliasMap(node, parentAliasMap) {
	      var applicationName = node.getApplicationName();
	      var hash = node.getShallowHash();
	      var children = parentAliasMap.children;

	      if (!children.hasOwnProperty(applicationName)) {
	        children[applicationName] = {
	          children: {},
	          hash: hash
	        };
	      } else if (children[applicationName].hash !== hash) {
	        console.error('`%s` is used as an alias more than once. Please use unique aliases.', applicationName);
	      }
	      return children[applicationName];
	    }

	    var RelayStoreReadValidator = function (_RelayQueryVisitor) {
	      (0, _inherits3['default'])(RelayStoreReadValidator, _RelayQueryVisitor);

	      function RelayStoreReadValidator(options) {
	        (0, _classCallCheck3['default'])(this, RelayStoreReadValidator);

	        var _this = (0, _possibleConstructorReturn3['default'])(this, _RelayQueryVisitor.call(this));

	        _this._traverseFragmentReferences = options && options.traverseFragmentReferences || false;
	        return _this;
	      }

	      RelayStoreReadValidator.prototype.visitField = function visitField(node, parentAliasMap) {
	        var aliasMap = getAliasMap(node, parentAliasMap);

	        if (node.isGenerated()) {
	          return;
	        } else if (!node.canHaveSubselections()) {
	          return;
	        } else if (node.isPlural()) {
	          this._readPlural(node, aliasMap);
	        } else {
	          // No special handling needed for connections, edges, page_info etc.
	          this._readLinkedField(node, aliasMap);
	        }
	      };

	      RelayStoreReadValidator.prototype.visitFragment = function visitFragment(node, aliasMap) {
	        if (this._traverseFragmentReferences || !node.isContainerFragment()) {
	          this.traverse(node, aliasMap);
	        }
	      };

	      RelayStoreReadValidator.prototype._readPlural = function _readPlural(node, aliasMap) {
	        var _this2 = this;

	        node.getChildren().forEach(function (child) {
	          return _this2.visit(child, aliasMap);
	        });
	      };

	      RelayStoreReadValidator.prototype._readLinkedField = function _readLinkedField(node, aliasMap) {
	        aliasMap = getAliasMap(node, aliasMap);
	        this.traverse(node, aliasMap);
	      };

	      return RelayStoreReadValidator;
	    }(__webpack_require__(26));
	  })();
	}

	module.exports = validateRelayReadQuery;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule writeRelayUpdatePayload
	 * 
	 * @format
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _defineProperty3 = _interopRequireDefault(__webpack_require__(37));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// TODO: Replace with enumeration for possible config types.
	/* OperationConfig was originally typed such that each property had the type
	 * mixed.  Mixed is safer than any, but that safety comes from Flow forcing you
	 * to inspect a mixed value at runtime before using it.  However these mixeds
	 * are ending up everywhere and are not being inspected */
	var CLIENT_MUTATION_ID = __webpack_require__(6).CLIENT_MUTATION_ID,
	    EDGES = __webpack_require__(6).EDGES;

	var ANY_TYPE = __webpack_require__(8).ANY_TYPE,
	    ID = __webpack_require__(8).ID,
	    NODE = __webpack_require__(8).NODE;

	var APPEND = __webpack_require__(18).APPEND,
	    IGNORE = __webpack_require__(18).IGNORE,
	    PREPEND = __webpack_require__(18).PREPEND,
	    REFETCH = __webpack_require__(18).REFETCH,
	    REMOVE = __webpack_require__(18).REMOVE;

	var EDGES_FIELD = __webpack_require__(2).Field.build({
	  fieldName: EDGES,
	  type: ANY_TYPE,
	  metadata: {
	    canHaveSubselections: true,
	    isPlural: true
	  }
	});
	var IGNORED_KEYS = (0, _defineProperty3['default'])({
	  error: true
	}, CLIENT_MUTATION_ID, true);
	var STUB_CURSOR_ID = 'client:cursor';

	/**
	 * @internal
	 *
	 * Applies the results of an update operation (mutation/subscription) to the
	 * store.
	 */
	function writeRelayUpdatePayload(writer, operation, payload, _ref) {
	  var configs = _ref.configs,
	      isOptimisticUpdate = _ref.isOptimisticUpdate;

	  configs.forEach(function (config) {
	    switch (config.type) {
	      case __webpack_require__(22).NODE_DELETE:
	        handleNodeDelete(writer, payload, config);
	        break;
	      case __webpack_require__(22).RANGE_ADD:
	        handleRangeAdd(writer, payload, operation, config, isOptimisticUpdate);
	        break;
	      case __webpack_require__(22).RANGE_DELETE:
	        handleRangeDelete(writer, payload, config);
	        break;
	      case __webpack_require__(22).FIELDS_CHANGE:
	      case __webpack_require__(22).REQUIRED_CHILDREN:
	        break;
	      default:
	        console.error('Expected a valid mutation handler type, got `%s`.', config.type);
	    }
	  });

	  handleMerge(writer, payload, operation);
	}

	/**
	 * Handles the payload for a node deletion mutation, reading the ID of the node
	 * to delete from the payload based on the config and then deleting references
	 * to the node.
	 */
	function handleNodeDelete(writer, payload, config) {
	  var recordIDs = payload[config.deletedIDFieldName];
	  if (!recordIDs) {
	    // for some mutations, deletions don't always occur so if there's no field
	    // in the payload, carry on
	    return;
	  }

	  if (Array.isArray(recordIDs)) {
	    recordIDs.forEach(function (id) {
	      /* $FlowFixMe(>=0.36.0) Flow error detected during
	       * the deploy of Flow v0.36.0. To see the error, remove this comment and
	       * run Flow */
	      deleteRecord(writer, id);
	    });
	  } else {
	    // $FlowFixMe(>=0.33.0)
	    deleteRecord(writer, recordIDs);
	  }
	}

	/**
	 * Deletes the record from the store, also removing any references to the node
	 * from any ranges that contain it (along with the containing edges).
	 */
	function deleteRecord(writer, recordID) {
	  var store = writer.getRecordStore();
	  var recordWriter = writer.getRecordWriter();
	  // skip if already deleted
	  var status = store.getRecordState(recordID);
	  if (status === __webpack_require__(16).NONEXISTENT) {
	    return;
	  }

	  // Delete the node from any ranges it may be a part of
	  var connectionIDs = store.getConnectionIDsForRecord(recordID);
	  if (connectionIDs) {
	    connectionIDs.forEach(function (connectionID) {
	      var edgeID = __webpack_require__(51)(connectionID, recordID);
	      recordWriter.applyRangeUpdate(connectionID, edgeID, REMOVE);
	      writer.recordUpdate(edgeID);
	      writer.recordUpdate(connectionID);
	      // edges are never nodes, so this will not infinitely recurse
	      deleteRecord(writer, edgeID);
	    });
	  }

	  // delete the node
	  recordWriter.deleteRecord(recordID);
	  writer.recordUpdate(recordID);
	}

	/**
	 * Handles merging the results of the mutation/subscription into the store,
	 * updating each top-level field in the data according the fetched
	 * fields/fragments.
	 */
	function handleMerge(writer, payload, operation) {
	  var store = writer.getRecordStore();

	  // because optimistic payloads may not contain all fields, we loop over
	  // the data that is present and then have to recurse the query to find
	  // the matching fields.
	  //
	  // TODO #7167718: more efficient mutation/subscription writes
	  for (var fieldName in payload) {
	    if (!Object.prototype.hasOwnProperty.call(payload, fieldName)) {
	      continue;
	    }
	    var payloadData = payload[fieldName]; // #9357395
	    if (typeof payloadData !== 'object' || payloadData == null) {
	      continue;
	    }

	    // check for valid data (has an ID or is an array) and write the field
	    if (ID in payloadData ||
	    // if the field is an argument-less root call, determine the corresponding
	    // root record ID
	    store.getDataID(fieldName) || Array.isArray(payloadData)) {
	      mergeField(writer, fieldName, payloadData, operation);
	    }
	  }
	}

	/**
	 * Merges the results of a single top-level field into the store.
	 */
	function mergeField(writer, fieldName, payload, operation) {
	  // don't write mutation/subscription metadata fields
	  if (fieldName in IGNORED_KEYS) {
	    return;
	  }
	  if (Array.isArray(payload)) {
	    payload.forEach(function (item) {
	      if (typeof item === 'object' && item != null && !Array.isArray(item)) {
	        if (getString(item, ID)) {
	          mergeField(writer, fieldName, item, operation);
	        }
	      }
	    });
	    return;
	  }
	  // reassign to preserve type information in below closure
	  var payloadData = payload;

	  var store = writer.getRecordStore();
	  var recordID = getString(payloadData, ID);
	  var path = void 0;

	  if (recordID != null) {
	    path = __webpack_require__(9).createForID(recordID, 'writeRelayUpdatePayload');
	  } else {
	    recordID = store.getDataID(fieldName);
	    if (!recordID) {
	      __webpack_require__(1)(false, 'writeRelayUpdatePayload(): Expected a record ID in the response ' + 'payload supplied to update the store for field `%s`, ' + 'payload keys [%s], operation name `%s`.', fieldName, Object.keys(payload).join(', '), operation.getName());
	    }

	    // Root fields that do not accept arguments
	    path = __webpack_require__(9).create(__webpack_require__(2).Root.build('writeRelayUpdatePayload', fieldName, null, null, {
	      identifyingArgName: null,
	      identifyingArgType: null,
	      isAbstract: true,
	      isDeferred: false,
	      isPlural: false
	    }, ANY_TYPE));
	  }
	  // write the results for only the current field, for every instance of that
	  // field in any subfield/fragment in the query.
	  var handleNode = function handleNode(node) {
	    node.getChildren().forEach(function (child) {
	      if (child instanceof __webpack_require__(2).Fragment) {
	        handleNode(child);
	      } else if (child instanceof __webpack_require__(2).Field && child.getSerializationKey() === fieldName) {
	        // for flow: types are lost in closures
	        if (path && recordID) {
	          // ensure the record exists and then update it
	          writer.createRecordIfMissing(child, recordID, path, payloadData);
	          writer.writePayload(child, recordID, payloadData, path);
	        }
	      }
	    });
	  };
	  handleNode(operation);
	}

	/**
	 * Handles the payload for a range addition. The configuration specifies:
	 * - which field in the payload contains data for the new edge
	 * - the list of fetched ranges to which the edge should be added
	 * - whether to append/prepend to each of those ranges
	 */
	function handleRangeAdd(writer, payload, operation, config, isOptimisticUpdate) {
	  var clientMutationID = getString(payload, CLIENT_MUTATION_ID);
	  __webpack_require__(1)(clientMutationID, 'writeRelayUpdatePayload(): Expected operation `%s` to have a `%s`.', operation.getName(), CLIENT_MUTATION_ID);
	  var store = writer.getRecordStore();

	  // Extracts the new edge from the payload
	  var edge = getObject(payload, config.edgeName);
	  var edgeNode = edge && getObject(edge, NODE);
	  if (!edge || !edgeNode) {
	    return;
	  }

	  // Extract the id of the node with the connection that we are adding to.
	  var connectionParentID = config.parentID;
	  if (!connectionParentID) {
	    var edgeSource = getObject(edge, 'source');
	    if (edgeSource) {
	      connectionParentID = getString(edgeSource, ID);
	    }
	  }
	  __webpack_require__(1)(connectionParentID, 'writeRelayUpdatePayload(): Cannot insert edge without a configured ' + '`parentID` or a `%s.source.id` field.', config.edgeName);

	  var nodeID = getString(edgeNode, ID) || __webpack_require__(35)();
	  var cursor = edge.cursor || STUB_CURSOR_ID;
	  var edgeData = (0, _extends3['default'])({}, edge, {
	    cursor: cursor,
	    node: (0, _extends3['default'])({}, edgeNode, {
	      id: nodeID
	    })
	  });

	  // add the node to every connection for this field
	  var connectionIDs = store.getConnectionIDsForField(connectionParentID, config.connectionName);
	  if (connectionIDs) {
	    connectionIDs.forEach(function (connectionID) {
	      return addRangeNode(writer, operation, config, connectionID, nodeID, edgeData);
	    });
	  }

	  if (isOptimisticUpdate) {
	    // optimistic updates need to record the generated client ID for
	    // a to-be-created node
	    __webpack_require__(48).putClientIDForMutation(nodeID, clientMutationID);
	  } else {
	    // non-optimistic updates check for the existence of a generated client
	    // ID (from the above `if` clause) and link the client ID to the actual
	    // server ID.
	    var clientNodeID = __webpack_require__(48).getClientIDForMutation(clientMutationID);
	    if (clientNodeID) {
	      __webpack_require__(48).updateClientServerIDMap(clientNodeID, nodeID);
	      __webpack_require__(48).deleteClientIDForMutation(clientMutationID);
	    }
	  }
	}

	/**
	 * Writes the node data for the given field to the store and prepends/appends
	 * the node to the given connection.
	 */
	function addRangeNode(writer, operation, config, connectionID, nodeID, edgeData) {
	  var store = writer.getRecordStore();
	  var recordWriter = writer.getRecordWriter();
	  var filterCalls = store.getRangeFilterCalls(connectionID);
	  var rangeBehavior = filterCalls ? __webpack_require__(92)(config.rangeBehaviors, filterCalls) : null;

	  // no range behavior specified for this combination of filter calls
	  if (!rangeBehavior) {
	    __webpack_require__(5)(rangeBehavior, 'Using `null` as a rangeBehavior value is deprecated. Use `ignore` to avoid ' + 'refetching a range.');
	    return;
	  }

	  if (rangeBehavior === IGNORE) {
	    return;
	  }

	  var edgeID = __webpack_require__(51)(connectionID, nodeID);
	  var path = store.getPathToRecord(connectionID);
	  __webpack_require__(1)(path, 'writeRelayUpdatePayload(): Expected a path for connection record, `%s`.', connectionID);
	  path = __webpack_require__(9).getPath(path, EDGES_FIELD, edgeID);

	  // create the edge record
	  writer.createRecordIfMissing(EDGES_FIELD, edgeID, path, edgeData);

	  // write data for all `edges` fields
	  // TODO #7167718: more efficient mutation/subscription writes
	  var hasEdgeField = false;
	  var handleNode = function handleNode(node) {
	    node.getChildren().forEach(function (child) {
	      if (child instanceof __webpack_require__(2).Fragment) {
	        handleNode(child);
	      } else if (child instanceof __webpack_require__(2).Field && child.getSchemaName() === config.edgeName) {
	        hasEdgeField = true;
	        if (path) {
	          writer.writePayload(child, edgeID, edgeData, path);
	        }
	      }
	    });
	  };
	  handleNode(operation);

	  __webpack_require__(1)(hasEdgeField, 'writeRelayUpdatePayload(): Expected mutation query to include the ' + 'relevant edge field, `%s`.', config.edgeName);

	  // append/prepend the item to the range.
	  if (rangeBehavior in __webpack_require__(18).RANGE_OPERATIONS) {
	    recordWriter.applyRangeUpdate(connectionID, edgeID, rangeBehavior);
	    writer.recordUpdate(connectionID);
	  } else {
	    console.error('writeRelayUpdatePayload(): invalid range operation `%s`, valid ' + 'options are `%s`, `%s`, `%s`, or `%s`.', rangeBehavior, APPEND, PREPEND, IGNORE, REFETCH);
	  }
	}

	/**
	 * Handles the payload for a range edge deletion, which removes the edge from
	 * a specified range but does not delete the node for that edge. The config
	 * specifies the path within the payload that contains the connection ID.
	 */
	function handleRangeDelete(writer, payload, config) {
	  var store = writer.getRecordStore();

	  var recordIDs = null;

	  if (Array.isArray(config.deletedIDFieldName)) {
	    recordIDs = getIDsFromPath(store, config.deletedIDFieldName, payload);
	  } else {
	    recordIDs = payload[config.deletedIDFieldName];

	    // Coerce numbers to strings for backwards compatibility.
	    if (typeof recordIDs === 'number') {
	      __webpack_require__(5)(false, 'writeRelayUpdatePayload(): Expected `%s` to be a string, got the ' + 'number `%s`.', config.deletedIDFieldName, recordIDs);
	      recordIDs = '' + recordIDs;
	    }

	    __webpack_require__(1)(recordIDs == null || !Array.isArray(recordIDs) || typeof recordIDs !== 'string', 'writeRelayUpdatePayload(): Expected `%s` to be an array/string, got `%s`.', config.deletedIDFieldName, JSON.stringify(recordIDs));

	    if (!Array.isArray(recordIDs)) {
	      recordIDs = [recordIDs];
	    }
	  }

	  __webpack_require__(1)(recordIDs != null, 'writeRelayUpdatePayload(): Missing ID(s) for deleted record at field `%s`.', config.deletedIDFieldName);

	  // Extract the id of the node with the connection that we are deleting from.
	  var connectionName = config.pathToConnection.pop();
	  var connectionParentIDs = getIDsFromPath(store, config.pathToConnection, payload);
	  // Restore pathToConnection to its original state
	  config.pathToConnection.push(connectionName);
	  if (!connectionParentIDs) {
	    return;
	  }
	  var connectionParentID = connectionParentIDs[0];

	  var connectionIDs = store.getConnectionIDsForField(connectionParentID, connectionName);
	  if (connectionIDs) {
	    connectionIDs.forEach(function (connectionID) {
	      if (recordIDs) {
	        recordIDs.forEach(function (recordID) {
	          deleteRangeEdge(writer, connectionID, recordID);
	        });
	      }
	    });
	  }
	}

	/**
	 * Removes an edge from a connection without modifying the node data.
	 */
	function deleteRangeEdge(writer, connectionID, nodeID) {
	  var recordWriter = writer.getRecordWriter();
	  var edgeID = __webpack_require__(51)(connectionID, nodeID);
	  recordWriter.applyRangeUpdate(connectionID, edgeID, REMOVE);

	  deleteRecord(writer, edgeID);
	  writer.recordUpdate(connectionID);
	}

	/**
	 * Given a payload of data and a path of fields, extracts the `id` of the node(s)
	 * specified by the path.
	 *
	 * Examples:
	 * path: ['root', 'field']
	 * data: {root: {field: {id: 'xyz'}}}
	 *
	 * path: ['root', 'field']
	 * data: {root: {field: [{id: 'abc'}, {id: 'def'}]}}
	 *
	 * Returns:
	 * ['xyz']
	 *
	 * ['abc', 'def']
	 */
	function getIDsFromPath(store, path, payload) {
	  // We have a special case for the path for root nodes without ids like
	  // ['viewer']. We try to match it up with something in the root call mapping
	  // first.
	  if (path.length === 1) {
	    var rootCallID = store.getDataID(path[0]);
	    if (rootCallID) {
	      return [rootCallID];
	    }
	  }

	  var payloadItems = payload;
	  path.forEach(function (step, idx) {
	    if (!payloadItems || Array.isArray(payloadItems)) {
	      return;
	    }
	    if (idx === path.length - 1) {
	      payloadItems = getObjectOrArray(payloadItems, step);
	    } else {
	      payloadItems = getObject(payloadItems, step);
	    }
	  });

	  if (payloadItems) {
	    if (!Array.isArray(payloadItems)) {
	      payloadItems = [payloadItems];
	    }
	    return payloadItems.map(function (item) {
	      var id = getString(item, ID);
	      __webpack_require__(1)(id != null, 'writeRelayUpdatePayload(): Expected `%s.id` to be a string.', path.join('.'));
	      return id;
	    });
	  }
	  return null;
	}

	function getString(payload, field) {
	  var value = payload[field];
	  // Coerce numbers to strings for backwards compatibility.
	  if (typeof value === 'number') {
	    __webpack_require__(5)(false, 'writeRelayUpdatePayload(): Expected `%s` to be a string, got the ' + 'number `%s`.', field, value);
	    value = '' + value;
	  }
	  __webpack_require__(1)(value == null || typeof value === 'string', 'writeRelayUpdatePayload(): Expected `%s` to be a string, got `%s`.', field, JSON.stringify(value));
	  return value;
	}

	function getObject(payload, field) {
	  var value = payload[field];
	  __webpack_require__(1)(value == null || typeof value === 'object' && !Array.isArray(value), 'writeRelayUpdatePayload(): Expected `%s` to be an object, got `%s`.', field, JSON.stringify(value));
	  return value;
	}

	function getObjectOrArray(payload, field) {
	  var value = payload[field];
	  __webpack_require__(1)(value == null || typeof value === 'object', 'writeRelayUpdatePayload(): Expected `%s` to be an object/array, got `%s`.', field, JSON.stringify(value));
	  return value;
	}

	module.exports = __webpack_require__(10).instrument('writeRelayUpdatePayload', writeRelayUpdatePayload);

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_147__;

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_148__;

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_149__;

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_150__;

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_151__;

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_152__;

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_153__;

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_154__;

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_155__;

/***/ }
/******/ ])
});
;