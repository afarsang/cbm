'use strict';

var url = require('url');

var Users = require('./UsersService');

module.exports.evictCurrentUserDetails = function evictCurrentUserDetails (req, res, next) {
  Users.evictCurrentUserDetails(req.swagger.params, res, next);
};

module.exports.evictUserDetails = function evictUserDetails (req, res, next) {
  Users.evictUserDetails(req.swagger.params, res, next);
};

module.exports.getUserProfile = function getUserProfile (req, res, next) {
  Users.getUserProfile(req.swagger.params, res, next);
};

module.exports.hasResourcesUser = function hasResourcesUser (req, res, next) {
  Users.hasResourcesUser(req.swagger.params, res, next);
};

module.exports.modifyProfile = function modifyProfile (req, res, next) {
  Users.modifyProfile(req.swagger.params, res, next);
};
