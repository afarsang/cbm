'use strict';

var url = require('url');

var Util = require('./UtilService');

module.exports.createRDSDatabaseUtil = function createRDSDatabaseUtil (req, res, next) {
  Util.createRDSDatabaseUtil(req.swagger.params, res, next);
};

module.exports.testAmbariDatabaseUtil = function testAmbariDatabaseUtil (req, res, next) {
  Util.testAmbariDatabaseUtil(req.swagger.params, res, next);
};

module.exports.testLdapConnectionByIdUtil = function testLdapConnectionByIdUtil (req, res, next) {
  Util.testLdapConnectionByIdUtil(req.swagger.params, res, next);
};

module.exports.testLdapConnectionUtil = function testLdapConnectionUtil (req, res, next) {
  Util.testLdapConnectionUtil(req.swagger.params, res, next);
};

module.exports.testRdsConnectionByIdUtil = function testRdsConnectionByIdUtil (req, res, next) {
  Util.testRdsConnectionByIdUtil(req.swagger.params, res, next);
};

module.exports.testRdsConnectionUtil = function testRdsConnectionUtil (req, res, next) {
  Util.testRdsConnectionUtil(req.swagger.params, res, next);
};
