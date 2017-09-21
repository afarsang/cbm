'use strict';

var url = require('url');

var Rdsconfigs = require('./RdsconfigsService');

module.exports.deletePrivateRds = function deletePrivateRds (req, res, next) {
  Rdsconfigs.deletePrivateRds(req.swagger.params, res, next);
};

module.exports.deletePublicRds = function deletePublicRds (req, res, next) {
  Rdsconfigs.deletePublicRds(req.swagger.params, res, next);
};

module.exports.deleteRds = function deleteRds (req, res, next) {
  Rdsconfigs.deleteRds(req.swagger.params, res, next);
};

module.exports.getPrivateRds = function getPrivateRds (req, res, next) {
  Rdsconfigs.getPrivateRds(req.swagger.params, res, next);
};

module.exports.getPrivatesRds = function getPrivatesRds (req, res, next) {
  Rdsconfigs.getPrivatesRds(req.swagger.params, res, next);
};

module.exports.getPublicRds = function getPublicRds (req, res, next) {
  Rdsconfigs.getPublicRds(req.swagger.params, res, next);
};

module.exports.getPublicsRds = function getPublicsRds (req, res, next) {
  Rdsconfigs.getPublicsRds(req.swagger.params, res, next);
};

module.exports.getRds = function getRds (req, res, next) {
  Rdsconfigs.getRds(req.swagger.params, res, next);
};

module.exports.postPrivateRds = function postPrivateRds (req, res, next) {
  Rdsconfigs.postPrivateRds(req.swagger.params, res, next);
};

module.exports.postPublicRds = function postPublicRds (req, res, next) {
  Rdsconfigs.postPublicRds(req.swagger.params, res, next);
};
