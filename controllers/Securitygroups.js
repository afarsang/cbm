'use strict';

var url = require('url');

var Securitygroups = require('./SecuritygroupsService');

module.exports.deletePrivateSecurityGroup = function deletePrivateSecurityGroup (req, res, next) {
  Securitygroups.deletePrivateSecurityGroup(req.swagger.params, res, next);
};

module.exports.deletePublicSecurityGroup = function deletePublicSecurityGroup (req, res, next) {
  Securitygroups.deletePublicSecurityGroup(req.swagger.params, res, next);
};

module.exports.deleteSecurityGroup = function deleteSecurityGroup (req, res, next) {
  Securitygroups.deleteSecurityGroup(req.swagger.params, res, next);
};

module.exports.getPrivateSecurityGroup = function getPrivateSecurityGroup (req, res, next) {
  Securitygroups.getPrivateSecurityGroup(req.swagger.params, res, next);
};

module.exports.getPrivatesSecurityGroup = function getPrivatesSecurityGroup (req, res, next) {
  Securitygroups.getPrivatesSecurityGroup(req.swagger.params, res, next);
};

module.exports.getPublicSecurityGroup = function getPublicSecurityGroup (req, res, next) {
  Securitygroups.getPublicSecurityGroup(req.swagger.params, res, next);
};

module.exports.getPublicsSecurityGroup = function getPublicsSecurityGroup (req, res, next) {
  Securitygroups.getPublicsSecurityGroup(req.swagger.params, res, next);
};

module.exports.getSecurityGroup = function getSecurityGroup (req, res, next) {
  Securitygroups.getSecurityGroup(req.swagger.params, res, next);
};

module.exports.postPrivateSecurityGroup = function postPrivateSecurityGroup (req, res, next) {
  Securitygroups.postPrivateSecurityGroup(req.swagger.params, res, next);
};

module.exports.postPublicSecurityGroup = function postPublicSecurityGroup (req, res, next) {
  Securitygroups.postPublicSecurityGroup(req.swagger.params, res, next);
};
