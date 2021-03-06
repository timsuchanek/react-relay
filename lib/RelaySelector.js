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

var _extends3 = _interopRequireDefault(require('babel-runtime/helpers/extends'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @public
 */
function getSelector(operationVariables, fragment, item) {
  require('fbjs/lib/invariant')(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelaySelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.node.name, JSON.stringify(item));
  var dataID = require('./RelayRecord').getDataIDForObject(item);
  var fragmentVariables = require('./RelayFragmentPointer').getVariablesForID(item, fragment.node.id);
  if (dataID != null && fragmentVariables != null) {
    return {
      dataID: dataID,
      node: fragment.node,
      variables: (0, _extends3['default'])({}, operationVariables, fragmentVariables)
    };
  }
  require('fbjs/lib/warning')(false, 'RelaySelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s`.', fragment.node.name, JSON.stringify(item), fragment.node.name);
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
  require('fbjs/lib/forEachObject')(fragments, function (fragment, key) {
    var item = object[key];
    if (item == null) {
      selectors[key] = item;
    } else if (fragment.node.metadata && fragment.node.metadata.plural === true) {
      require('fbjs/lib/invariant')(Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', key, JSON.stringify(item), fragment.node.name);
      selectors[key] = getSelectorList(operationVariables, fragment, item);
    } else {
      require('fbjs/lib/invariant')(!Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', key, JSON.stringify(item), fragment.node.name);
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
  require('fbjs/lib/forEachObject')(fragments, function (fragment, key) {
    var item = object[key];
    if (item == null) {
      ids[key] = item;
    } else if (fragment.node.metadata && fragment.node.metadata.plural === true) {
      require('fbjs/lib/invariant')(Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', key, JSON.stringify(item), fragment.node.name);
      ids[key] = getDataIDs(fragment, item);
    } else {
      require('fbjs/lib/invariant')(!Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', key, JSON.stringify(item), fragment.node.name);
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
  require('fbjs/lib/invariant')(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelaySelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.node.name, JSON.stringify(item));
  var dataID = require('./RelayRecord').getDataIDForObject(item);
  if (dataID != null) {
    return dataID;
  }
  require('fbjs/lib/warning')(false, 'RelaySelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s`.', fragment.node.name, JSON.stringify(item), fragment.node.name);
  return null;
}

/**
 * @public
 */
function getVariablesFromObject(operationVariables, fragments, object) {
  var variables = {};
  require('fbjs/lib/forEachObject')(fragments, function (fragment, key) {
    var item = object[key];
    if (item == null) {
      return;
    } else if (fragment.node.metadata && fragment.node.metadata.plural === true) {
      require('fbjs/lib/invariant')(Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', key, JSON.stringify(item), fragment.node.name);
      item.forEach(function (value) {
        if (value != null) {
          var itemVariables = getVariables(operationVariables, fragment, value);
          if (itemVariables) {
            Object.assign(variables, itemVariables);
          }
        }
      });
    } else {
      require('fbjs/lib/invariant')(!Array.isArray(item), 'RelaySelector: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', key, JSON.stringify(item), fragment.node.name);
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
  return thisSelector.dataID === thatSelector.dataID && thisSelector.node === thatSelector.node && require('fbjs/lib/areEqual')(thisSelector.variables, thatSelector.variables);
}

module.exports = {
  areEqualSelectors: areEqualSelectors,
  getDataIDsFromObject: getDataIDsFromObject,
  getSelector: getSelector,
  getSelectorList: getSelectorList,
  getSelectorsFromObject: getSelectorsFromObject,
  getVariablesFromObject: getVariablesFromObject
};