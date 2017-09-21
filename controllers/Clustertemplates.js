'use strict';

var url = require('url');

var Clustertemplates = require('./ClustertemplatesService');

module.exports.deleteClusterTemplate = function deleteClusterTemplate (req, res, next) {
  Clustertemplates.deleteClusterTemplate(req.swagger.params, res, next);
};

module.exports.deletePrivateClusterTemplate = function deletePrivateClusterTemplate (req, res, next) {
  Clustertemplates.deletePrivateClusterTemplate(req.swagger.params, res, next);
};

module.exports.deletePublicClusterTemplate = function deletePublicClusterTemplate (req, res, next) {
  Clustertemplates.deletePublicClusterTemplate(req.swagger.params, res, next);
};

module.exports.getClusterTemplate = function getClusterTemplate (req, res, next) {
  Clustertemplates.getClusterTemplate(req.swagger.params, res, next);
};

module.exports.getPrivateClusterTemplate = function getPrivateClusterTemplate (req, res, next) {
  Clustertemplates.getPrivateClusterTemplate(req.swagger.params, res, next);
};

module.exports.getPrivatesClusterTemplate = function getPrivatesClusterTemplate (req, res, next) {
  Clustertemplates.getPrivatesClusterTemplate(req.swagger.params, res, next);
};

module.exports.getPublicClusterTemplate = function getPublicClusterTemplate (req, res, next) {
  Clustertemplates.getPublicClusterTemplate(req.swagger.params, res, next);
};

module.exports.getPublicsClusterTemplate = function getPublicsClusterTemplate (req, res, next) {
  Clustertemplates.getPublicsClusterTemplate(req.swagger.params, res, next);
};

module.exports.postPrivateClusterTemplate = function postPrivateClusterTemplate (req, res, next) {
  Clustertemplates.postPrivateClusterTemplate(req.swagger.params, res, next);
};

module.exports.postPublicClusterTemplate = function postPublicClusterTemplate (req, res, next) {
  Clustertemplates.postPublicClusterTemplate(req.swagger.params, res, next);
};
