'use strict';

var url = require('url');

var Accountpreferences = require('./AccountpreferencesService');

module.exports.getAccountPreferencesEndpoint = function getAccountPreferencesEndpoint (req, res, next) {
  Accountpreferences.getAccountPreferencesEndpoint(req.swagger.params, res, next);
};

module.exports.isPlatformSelectionDisabled = function isPlatformSelectionDisabled (req, res, next) {
  Accountpreferences.isPlatformSelectionDisabled(req.swagger.params, res, next);
};

module.exports.postAccountPreferencesEndpoint = function postAccountPreferencesEndpoint (req, res, next) {
  Accountpreferences.postAccountPreferencesEndpoint(req.swagger.params, res, next);
};

module.exports.putAccountPreferencesEndpoint = function putAccountPreferencesEndpoint (req, res, next) {
  Accountpreferences.putAccountPreferencesEndpoint(req.swagger.params, res, next);
};

module.exports.validateAccountPreferencesEndpoint = function validateAccountPreferencesEndpoint (req, res, next) {
  Accountpreferences.validateAccountPreferencesEndpoint(req.swagger.params, res, next);
};
