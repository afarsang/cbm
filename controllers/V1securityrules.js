'use strict';

var url = require('url');

var V1securityrules = require('./V1securityrulesService');

module.exports.getPublicIps = function getPublicIps (req, res, next) {
  V1securityrules.getPublicIps(req.swagger.params, res, next);
};
