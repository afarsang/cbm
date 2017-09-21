'use strict';

var url = require('url');

var Constraints = require('./ConstraintsService');

module.exports.deleteConstraint = function deleteConstraint (req, res, next) {
  Constraints.deleteConstraint(req.swagger.params, res, next);
};

module.exports.deletePrivateConstraint = function deletePrivateConstraint (req, res, next) {
  Constraints.deletePrivateConstraint(req.swagger.params, res, next);
};

module.exports.deletePublicConstraint = function deletePublicConstraint (req, res, next) {
  Constraints.deletePublicConstraint(req.swagger.params, res, next);
};

module.exports.getConstraint = function getConstraint (req, res, next) {
  Constraints.getConstraint(req.swagger.params, res, next);
};

module.exports.getPrivateConstraint = function getPrivateConstraint (req, res, next) {
  Constraints.getPrivateConstraint(req.swagger.params, res, next);
};

module.exports.getPrivatesConstraint = function getPrivatesConstraint (req, res, next) {
  Constraints.getPrivatesConstraint(req.swagger.params, res, next);
};

module.exports.getPublicConstraint = function getPublicConstraint (req, res, next) {
  Constraints.getPublicConstraint(req.swagger.params, res, next);
};

module.exports.getPublicsConstraint = function getPublicsConstraint (req, res, next) {
  Constraints.getPublicsConstraint(req.swagger.params, res, next);
};

module.exports.postPrivateConstraint = function postPrivateConstraint (req, res, next) {
  Constraints.postPrivateConstraint(req.swagger.params, res, next);
};

module.exports.postPublicConstraint = function postPublicConstraint (req, res, next) {
  Constraints.postPublicConstraint(req.swagger.params, res, next);
};
