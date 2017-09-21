'use strict';

var url = require('url');

var Flexsubscriptions = require('./FlexsubscriptionsService');

module.exports.deleteFlexSubscriptionById = function deleteFlexSubscriptionById (req, res, next) {
  Flexsubscriptions.deleteFlexSubscriptionById(req.swagger.params, res, next);
};

module.exports.deletePrivateFlexSubscriptionByName = function deletePrivateFlexSubscriptionByName (req, res, next) {
  Flexsubscriptions.deletePrivateFlexSubscriptionByName(req.swagger.params, res, next);
};

module.exports.deletePublicFlexSubscriptionByName = function deletePublicFlexSubscriptionByName (req, res, next) {
  Flexsubscriptions.deletePublicFlexSubscriptionByName(req.swagger.params, res, next);
};

module.exports.getFlexSubscriptionById = function getFlexSubscriptionById (req, res, next) {
  Flexsubscriptions.getFlexSubscriptionById(req.swagger.params, res, next);
};

module.exports.getPrivateFlexSubscriptionByName = function getPrivateFlexSubscriptionByName (req, res, next) {
  Flexsubscriptions.getPrivateFlexSubscriptionByName(req.swagger.params, res, next);
};

module.exports.getPrivateFlexSubscriptions = function getPrivateFlexSubscriptions (req, res, next) {
  Flexsubscriptions.getPrivateFlexSubscriptions(req.swagger.params, res, next);
};

module.exports.getPublicFlexSubscriptionByName = function getPublicFlexSubscriptionByName (req, res, next) {
  Flexsubscriptions.getPublicFlexSubscriptionByName(req.swagger.params, res, next);
};

module.exports.getPublicFlexSubscriptions = function getPublicFlexSubscriptions (req, res, next) {
  Flexsubscriptions.getPublicFlexSubscriptions(req.swagger.params, res, next);
};

module.exports.postPrivateFlexSubscription = function postPrivateFlexSubscription (req, res, next) {
  Flexsubscriptions.postPrivateFlexSubscription(req.swagger.params, res, next);
};

module.exports.postPublicFlexSubscription = function postPublicFlexSubscription (req, res, next) {
  Flexsubscriptions.postPublicFlexSubscription(req.swagger.params, res, next);
};

module.exports.putDefaultFlexSubscriptionById = function putDefaultFlexSubscriptionById (req, res, next) {
  Flexsubscriptions.putDefaultFlexSubscriptionById(req.swagger.params, res, next);
};

module.exports.putPublicDefaultFlexSubscriptionByName = function putPublicDefaultFlexSubscriptionByName (req, res, next) {
  Flexsubscriptions.putPublicDefaultFlexSubscriptionByName(req.swagger.params, res, next);
};

module.exports.putPublicUsedForControllerFlexSubscriptionByName = function putPublicUsedForControllerFlexSubscriptionByName (req, res, next) {
  Flexsubscriptions.putPublicUsedForControllerFlexSubscriptionByName(req.swagger.params, res, next);
};

module.exports.putUsedForControllerFlexSubscriptionById = function putUsedForControllerFlexSubscriptionById (req, res, next) {
  Flexsubscriptions.putUsedForControllerFlexSubscriptionById(req.swagger.params, res, next);
};
