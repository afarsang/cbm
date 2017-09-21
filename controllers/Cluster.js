'use strict';

var url = require('url');

var Cluster = require('./ClusterService');

module.exports.deleteCluster = function deleteCluster (req, res, next) {
  Cluster.deleteCluster(req.swagger.params, res, next);
};

module.exports.failureReportCluster = function failureReportCluster (req, res, next) {
  Cluster.failureReportCluster(req.swagger.params, res, next);
};

module.exports.getCluster = function getCluster (req, res, next) {
  Cluster.getCluster(req.swagger.params, res, next);
};

module.exports.getConfigsCluster = function getConfigsCluster (req, res, next) {
  Cluster.getConfigsCluster(req.swagger.params, res, next);
};

module.exports.getFullCluster = function getFullCluster (req, res, next) {
  Cluster.getFullCluster(req.swagger.params, res, next);
};

module.exports.getPrivateCluster = function getPrivateCluster (req, res, next) {
  Cluster.getPrivateCluster(req.swagger.params, res, next);
};

module.exports.getPublicCluster = function getPublicCluster (req, res, next) {
  Cluster.getPublicCluster(req.swagger.params, res, next);
};

module.exports.postCluster = function postCluster (req, res, next) {
  Cluster.postCluster(req.swagger.params, res, next);
};

module.exports.putCluster = function putCluster (req, res, next) {
  Cluster.putCluster(req.swagger.params, res, next);
};

module.exports.repairCluster = function repairCluster (req, res, next) {
  Cluster.repairCluster(req.swagger.params, res, next);
};

module.exports.upgradeCluster = function upgradeCluster (req, res, next) {
  Cluster.upgradeCluster(req.swagger.params, res, next);
};
