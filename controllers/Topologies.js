'use strict';

var url = require('url');

var Topologies = require('./TopologiesService');

module.exports.deleteTopology = function deleteTopology (req, res, next) {
  Topologies.deleteTopology(req.swagger.params, res, next);
};

module.exports.getPublicsTopology = function getPublicsTopology (req, res, next) {
  Topologies.getPublicsTopology(req.swagger.params, res, next);
};

module.exports.getTopology = function getTopology (req, res, next) {
  Topologies.getTopology(req.swagger.params, res, next);
};

module.exports.postPublicTopology = function postPublicTopology (req, res, next) {
  Topologies.postPublicTopology(req.swagger.params, res, next);
};
