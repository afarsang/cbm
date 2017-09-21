'use strict';

var url = require('url');

var Subscriptions = require('./SubscriptionsService');

module.exports.subscribeSubscription = function subscribeSubscription (req, res, next) {
  Subscriptions.subscribeSubscription(req.swagger.params, res, next);
};
