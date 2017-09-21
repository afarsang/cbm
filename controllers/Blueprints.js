'use strict';

var url = require('url');

var Blueprints = require('./BlueprintsService');

module.exports.deleteBlueprint = function deleteBlueprint (req, res, next) {
  Blueprints.deleteBlueprint(req.swagger.params, res, next);
};

module.exports.deletePrivateBlueprint = function deletePrivateBlueprint (req, res, next) {
  Blueprints.deletePrivateBlueprint(req.swagger.params, res, next);
};

module.exports.deletePublicBlueprint = function deletePublicBlueprint (req, res, next) {
  Blueprints.deletePublicBlueprint(req.swagger.params, res, next);
};

module.exports.getBlueprint = function getBlueprint (req, res, next) {
  Blueprints.getBlueprint(req.swagger.params, res, next);
};

module.exports.getPrivateBlueprint = function getPrivateBlueprint (req, res, next) {
  Blueprints.getPrivateBlueprint(req.swagger.params, res, next);
};

module.exports.getPrivatesBlueprint = function getPrivatesBlueprint (req, res, next) {
  Blueprints.getPrivatesBlueprint(req.swagger.params, res, next);
};

module.exports.getPublicBlueprint = function getPublicBlueprint (req, res, next) {
  Blueprints.getPublicBlueprint(req.swagger.params, res, next);
};

module.exports.getPublicsBlueprint = function getPublicsBlueprint (req, res, next) {
  Blueprints.getPublicsBlueprint(req.swagger.params, res, next);
};

module.exports.postPrivateBlueprint = function postPrivateBlueprint (req, res, next) {
  Blueprints.postPrivateBlueprint(req.swagger.params, res, next);
};

module.exports.postPublicBlueprint = function postPublicBlueprint (req, res, next) {
  Blueprints.postPublicBlueprint(req.swagger.params, res, next);
};
