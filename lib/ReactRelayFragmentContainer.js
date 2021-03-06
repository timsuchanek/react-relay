/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRelayFragmentContainer
 * 
 * @format
 */

'use strict';

var _extends3 = _interopRequireDefault(require('babel-runtime/helpers/extends'));

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

var _possibleConstructorReturn3 = _interopRequireDefault(require('babel-runtime/helpers/possibleConstructorReturn'));

var _inherits3 = _interopRequireDefault(require('babel-runtime/helpers/inherits'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('./ReactRelayContainerProfiler'),
    profileContainer = _require.profileContainer;

var _require2 = require('./RelayContainerUtils'),
    getComponentName = _require2.getComponentName,
    getReactComponent = _require2.getReactComponent;

var containerContextTypes = {
  relay: require('./RelayPropTypes').Relay
};

/**
 * Composes a React component class, returning a new class that intercepts
 * props, resolving them with the provided fragments and subscribing for
 * updates.
 */
function createContainerWithFragments(Component, fragments) {
  var ComponentClass = getReactComponent(Component);
  var componentName = getComponentName(Component);
  var containerName = 'Relay(' + componentName + ')';

  var Container = function (_React$Component) {
    (0, _inherits3['default'])(Container, _React$Component);

    function Container(props, context) {
      (0, _classCallCheck3['default'])(this, Container);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

      _this._handleFragmentDataUpdate = function () {
        var data = _this._resolver.resolve();
        var profiler = require('./RelayProfiler').profile('ReactRelayFragmentContainer.handleFragmentDataUpdate');
        _this.setState({ data: data }, profiler.stop);
      };

      var relay = assertRelayContext(context.relay);
      var createFragmentSpecResolver = relay.environment.unstable_internal.createFragmentSpecResolver;

      _this._resolver = createFragmentSpecResolver(relay, containerName, fragments, props, _this._handleFragmentDataUpdate);
      _this.state = {
        data: _this._resolver.resolve(),
        relayProp: {
          environment: relay.environment
        }
      };
      return _this;
    }

    /**
     * When new props are received, read data for the new props and subscribe
     * for updates. Props may be the same in which case previous data and
     * subscriptions can be reused.
     */


    Container.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
      var context = require('fbjs/lib/nullthrows')(nextContext);
      var relay = assertRelayContext(context.relay);
      var _relay$environment$un = relay.environment.unstable_internal,
          createFragmentSpecResolver = _relay$environment$un.createFragmentSpecResolver,
          getDataIDsFromObject = _relay$environment$un.getDataIDsFromObject;

      var prevIDs = getDataIDsFromObject(fragments, this.props);
      var nextIDs = getDataIDsFromObject(fragments, nextProps);
      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (this.context.relay.environment !== relay.environment || this.context.relay.variables !== relay.variables || !require('fbjs/lib/areEqual')(prevIDs, nextIDs)) {
        this._resolver.dispose();
        this._resolver = createFragmentSpecResolver(relay, containerName, fragments, nextProps, this._handleFragmentDataUpdate);
        var _relayProp = {
          environment: relay.environment
        };
        this.setState({ relayProp: _relayProp });
      } else {
        this._resolver.setProps(nextProps);
      }
      var data = this._resolver.resolve();
      if (data !== this.state.data) {
        this.setState({ data: data });
      }
    };

    Container.prototype.componentWillUnmount = function componentWillUnmount() {
      this._resolver.dispose();
    };

    Container.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      // Short-circuit if any Relay-related data has changed
      if (nextContext.relay !== this.context.relay || nextState.data !== this.state.data) {
        return true;
      }
      // Otherwise, for convenience short-circuit if all non-Relay props
      // are scalar and equal
      var keys = Object.keys(nextProps);
      for (var ii = 0; ii < keys.length; ii++) {
        var _key = keys[ii];
        if (!fragments.hasOwnProperty(_key) && !require('./isScalarAndEqual')(nextProps[_key], this.props[_key])) {
          return true;
        }
      }
      return false;
    };

    /**
     * Render new data for the existing props/context.
     */


    Container.prototype.render = function render() {
      if (ComponentClass) {
        return require('react').createElement(ComponentClass, (0, _extends3['default'])({}, this.props, this.state.data, {
          // TODO: Remove the string ref fallback.
          // eslint-disable-next-line react/no-string-refs
          ref: this.props.componentRef || 'component',
          relay: this.state.relayProp
        }));
      } else {
        // Stateless functional, doesn't support `ref`
        return require('react').createElement(Component, (0, _extends3['default'])({}, this.props, this.state.data, {
          relay: this.state.relayProp
        }));
      }
    };

    return Container;
  }(require('react').Component);

  profileContainer(Container, 'ReactRelayFragmentContainer');
  Container.contextTypes = containerContextTypes;
  Container.displayName = containerName;

  return Container;
}

function assertRelayContext(relay) {
  // require('fbjs/lib/invariant')(require('./isRelayContext')(relay), 'ReactRelayFragmentContainer: Expected `context.relay` to be an object ' + 'conforming to the `RelayContext` interface, got `%s`.', relay);
  return relay;
}

/**
 * Wrap the basic `createContainer()` function with logic to adapt to the
 * `context.relay.environment` in which it is rendered. Specifically, the
 * extraction of the environment-specific version of fragments in the
 * `fragmentSpec` is memoized once per environment, rather than once per
 * instance of the container constructed/rendered.
 */
function createContainer(Component, fragmentSpec) {
  return require('./buildReactRelayContainer')(Component, fragmentSpec, createContainerWithFragments);
}

module.exports = { createContainer: createContainer, createContainerWithFragments: createContainerWithFragments };