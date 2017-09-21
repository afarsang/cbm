'use strict';

var url = require('url');

var Usages = require('./UsagesService');

module.exports.getAccountUsage = function getAccountUsage (req, res, next) {
  Usages.getAccountUsage(req.swagger.params, res, next);
};

module.exports.getDailyFlexUsage = function getDailyFlexUsage (req, res, next) {
  Usages.getDailyFlexUsage(req.swagger.params, res, next);
};

module.exports.getDeployerUsage = function getDeployerUsage (req, res, next) {
  Usages.getDeployerUsage(req.swagger.params, res, next);
};

module.exports.getLatestFlexUsage = function getLatestFlexUsage (req, res, next) {
  Usages.getLatestFlexUsage(req.swagger.params, res, next);
};

module.exports.getUserUsage = function getUserUsage (req, res, next) {
  Usages.getUserUsage(req.swagger.params, res, next);
};
