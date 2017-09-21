'use strict';

var url = require('url');

var Smartsensesubscriptions = require('./SmartsensesubscriptionsService');

module.exports.deletePrivateSmartSenseSubscriptionBySubscriptionId = function deletePrivateSmartSenseSubscriptionBySubscriptionId (req, res, next) {
  Smartsensesubscriptions.deletePrivateSmartSenseSubscriptionBySubscriptionId(req.swagger.params, res, next);
};

module.exports.deletePublicSmartSenseSubscriptionBySubscriptionId = function deletePublicSmartSenseSubscriptionBySubscriptionId (req, res, next) {
  Smartsensesubscriptions.deletePublicSmartSenseSubscriptionBySubscriptionId(req.swagger.params, res, next);
};

module.exports.deleteSmartSenseSubscriptionById = function deleteSmartSenseSubscriptionById (req, res, next) {
  Smartsensesubscriptions.deleteSmartSenseSubscriptionById(req.swagger.params, res, next);
};

module.exports.getPrivateSmartSenseSubscriptions = function getPrivateSmartSenseSubscriptions (req, res, next) {
  Smartsensesubscriptions.getPrivateSmartSenseSubscriptions(req.swagger.params, res, next);
};

module.exports.getPublicSmartSenseSubscriptions = function getPublicSmartSenseSubscriptions (req, res, next) {
  Smartsensesubscriptions.getPublicSmartSenseSubscriptions(req.swagger.params, res, next);
};

module.exports.getSmartSenseSubscription = function getSmartSenseSubscription (req, res, next) {
  Smartsensesubscriptions.getSmartSenseSubscription(req.swagger.params, res, next);
};

module.exports.getSmartSenseSubscriptionById = function getSmartSenseSubscriptionById (req, res, next) {
  Smartsensesubscriptions.getSmartSenseSubscriptionById(req.swagger.params, res, next);
};

module.exports.postPrivateSmartSenseSubscription = function postPrivateSmartSenseSubscription (req, res, next) {
  Smartsensesubscriptions.postPrivateSmartSenseSubscription(req.swagger.params, res, next);
};

module.exports.postPublicSmartSenseSubscription = function postPublicSmartSenseSubscription (req, res, next) {
  Smartsensesubscriptions.postPublicSmartSenseSubscription(req.swagger.params, res, next);
};
