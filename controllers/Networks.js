'use strict';

var url = require('url');

var Networks = require('./NetworksService');

module.exports.deleteNetwork = function deleteNetwork (req, res, next) {
  Networks.deleteNetwork(req.swagger.params, res, next);
};

module.exports.deletePrivateNetwork = function deletePrivateNetwork (req, res, next) {
  Networks.deletePrivateNetwork(req.swagger.params, res, next);
};

module.exports.deletePublicNetwork = function deletePublicNetwork (req, res, next) {
  Networks.deletePublicNetwork(req.swagger.params, res, next);
};

module.exports.getNetwork = function getNetwork (req, res, next) {
  Networks.getNetwork(req.swagger.params, res, next);
};

module.exports.getPrivateNetwork = function getPrivateNetwork (req, res, next) {
  Networks.getPrivateNetwork(req.swagger.params, res, next);
};

module.exports.getPrivatesNetwork = function getPrivatesNetwork (req, res, next) {
  Networks.getPrivatesNetwork(req.swagger.params, res, next);
};

module.exports.getPublicNetwork = function getPublicNetwork (req, res, next) {
  Networks.getPublicNetwork(req.swagger.params, res, next);
};

module.exports.getPublicsNetwork = function getPublicsNetwork (req, res, next) {
  Networks.getPublicsNetwork(req.swagger.params, res, next);
};

module.exports.postPrivateNetwork = function postPrivateNetwork (req, res, next) {
  Networks.postPrivateNetwork(req.swagger.params, res, next);
};

module.exports.postPublicNetwork = function postPublicNetwork (req, res, next) {
  Networks.postPublicNetwork(req.swagger.params, res, next);
};
