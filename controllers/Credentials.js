'use strict';

var url = require('url');

var Credentials = require('./CredentialsService');

module.exports.deleteCredential = function deleteCredential (req, res, next) {
  Credentials.deleteCredential(req.swagger.params, res, next);
};

module.exports.deletePrivateCredential = function deletePrivateCredential (req, res, next) {
  Credentials.deletePrivateCredential(req.swagger.params, res, next);
};

module.exports.deletePublicCredential = function deletePublicCredential (req, res, next) {
  Credentials.deletePublicCredential(req.swagger.params, res, next);
};

module.exports.getCredential = function getCredential (req, res, next) {
  Credentials.getCredential(req.swagger.params, res, next);
};

module.exports.getPrivateCredential = function getPrivateCredential (req, res, next) {
  Credentials.getPrivateCredential(req.swagger.params, res, next);
};

module.exports.getPrivatesCredential = function getPrivatesCredential (req, res, next) {
  Credentials.getPrivatesCredential(req.swagger.params, res, next);
};

module.exports.getPublicCredential = function getPublicCredential (req, res, next) {
  Credentials.getPublicCredential(req.swagger.params, res, next);
};

module.exports.getPublicsCredential = function getPublicsCredential (req, res, next) {
  Credentials.getPublicsCredential(req.swagger.params, res, next);
};

module.exports.postPrivateCredential = function postPrivateCredential (req, res, next) {
  Credentials.postPrivateCredential(req.swagger.params, res, next);
};

module.exports.postPublicCredential = function postPublicCredential (req, res, next) {
  Credentials.postPublicCredential(req.swagger.params, res, next);
};

module.exports.privateInteractiveLoginCredential = function privateInteractiveLoginCredential (req, res, next) {
  Credentials.privateInteractiveLoginCredential(req.swagger.params, res, next);
};

module.exports.publicInteractiveLoginCredential = function publicInteractiveLoginCredential (req, res, next) {
  Credentials.publicInteractiveLoginCredential(req.swagger.params, res, next);
};
