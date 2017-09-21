'use strict';

var url = require('url');

var Ldap = require('./LdapService');

module.exports.deleteLdap = function deleteLdap (req, res, next) {
  Ldap.deleteLdap(req.swagger.params, res, next);
};

module.exports.deletePrivateLdap = function deletePrivateLdap (req, res, next) {
  Ldap.deletePrivateLdap(req.swagger.params, res, next);
};

module.exports.deletePublicLdap = function deletePublicLdap (req, res, next) {
  Ldap.deletePublicLdap(req.swagger.params, res, next);
};

module.exports.getLdap = function getLdap (req, res, next) {
  Ldap.getLdap(req.swagger.params, res, next);
};

module.exports.getPrivateLdap = function getPrivateLdap (req, res, next) {
  Ldap.getPrivateLdap(req.swagger.params, res, next);
};

module.exports.getPrivatesLdap = function getPrivatesLdap (req, res, next) {
  Ldap.getPrivatesLdap(req.swagger.params, res, next);
};

module.exports.getPublicLdap = function getPublicLdap (req, res, next) {
  Ldap.getPublicLdap(req.swagger.params, res, next);
};

module.exports.getPublicsLdap = function getPublicsLdap (req, res, next) {
  Ldap.getPublicsLdap(req.swagger.params, res, next);
};

module.exports.postPrivateLdap = function postPrivateLdap (req, res, next) {
  Ldap.postPrivateLdap(req.swagger.params, res, next);
};

module.exports.postPublicLdap = function postPublicLdap (req, res, next) {
  Ldap.postPublicLdap(req.swagger.params, res, next);
};
