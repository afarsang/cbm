'use strict';

var url = require('url');

var Stacks = require('./StacksService');

module.exports.deleteInstanceStack = function deleteInstanceStack (req, res, next) {
  Stacks.deleteInstanceStack(req.swagger.params, res, next);
};

module.exports.deletePrivateStack = function deletePrivateStack (req, res, next) {
  Stacks.deletePrivateStack(req.swagger.params, res, next);
};

module.exports.deletePublicStack = function deletePublicStack (req, res, next) {
  Stacks.deletePublicStack(req.swagger.params, res, next);
};

module.exports.deleteStack = function deleteStack (req, res, next) {
  Stacks.deleteStack(req.swagger.params, res, next);
};

module.exports.getAllStack = function getAllStack (req, res, next) {
  Stacks.getAllStack(req.swagger.params, res, next);
};

module.exports.getCertificateStack = function getCertificateStack (req, res, next) {
  Stacks.getCertificateStack(req.swagger.params, res, next);
};

module.exports.getPrivateStack = function getPrivateStack (req, res, next) {
  Stacks.getPrivateStack(req.swagger.params, res, next);
};

module.exports.getPrivatesStack = function getPrivatesStack (req, res, next) {
  Stacks.getPrivatesStack(req.swagger.params, res, next);
};

module.exports.getPublicStack = function getPublicStack (req, res, next) {
  Stacks.getPublicStack(req.swagger.params, res, next);
};

module.exports.getPublicsStack = function getPublicsStack (req, res, next) {
  Stacks.getPublicsStack(req.swagger.params, res, next);
};

module.exports.getStack = function getStack (req, res, next) {
  Stacks.getStack(req.swagger.params, res, next);
};

module.exports.getStackForAmbari = function getStackForAmbari (req, res, next) {
  Stacks.getStackForAmbari(req.swagger.params, res, next);
};

module.exports.postPrivateStack = function postPrivateStack (req, res, next) {
  Stacks.postPrivateStack(req.swagger.params, res, next);
};

module.exports.postPublicStack = function postPublicStack (req, res, next) {
  Stacks.postPublicStack(req.swagger.params, res, next);
};

module.exports.putStack = function putStack (req, res, next) {
  Stacks.putStack(req.swagger.params, res, next);
};

module.exports.statusStack = function statusStack (req, res, next) {
  Stacks.statusStack(req.swagger.params, res, next);
};

module.exports.validateStack = function validateStack (req, res, next) {
  Stacks.validateStack(req.swagger.params, res, next);
};

module.exports.variantsStack = function variantsStack (req, res, next) {
  Stacks.variantsStack(req.swagger.params, res, next);
};
