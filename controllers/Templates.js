'use strict';

var url = require('url');

var Templates = require('./TemplatesService');

module.exports.deletePrivateTemplate = function deletePrivateTemplate (req, res, next) {
  Templates.deletePrivateTemplate(req.swagger.params, res, next);
};

module.exports.deletePublicTemplate = function deletePublicTemplate (req, res, next) {
  Templates.deletePublicTemplate(req.swagger.params, res, next);
};

module.exports.deleteTemplate = function deleteTemplate (req, res, next) {
  Templates.deleteTemplate(req.swagger.params, res, next);
};

module.exports.getPrivateTemplate = function getPrivateTemplate (req, res, next) {
  Templates.getPrivateTemplate(req.swagger.params, res, next);
};

module.exports.getPrivatesTemplate = function getPrivatesTemplate (req, res, next) {
  Templates.getPrivatesTemplate(req.swagger.params, res, next);
};

module.exports.getPublicTemplate = function getPublicTemplate (req, res, next) {
  Templates.getPublicTemplate(req.swagger.params, res, next);
};

module.exports.getPublicsTemplate = function getPublicsTemplate (req, res, next) {
  Templates.getPublicsTemplate(req.swagger.params, res, next);
};

module.exports.getTemplate = function getTemplate (req, res, next) {
  Templates.getTemplate(req.swagger.params, res, next);
};

module.exports.postPrivateTemplate = function postPrivateTemplate (req, res, next) {
  Templates.postPrivateTemplate(req.swagger.params, res, next);
};

module.exports.postPublicTemplate = function postPublicTemplate (req, res, next) {
  Templates.postPublicTemplate(req.swagger.params, res, next);
};
