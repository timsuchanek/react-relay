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