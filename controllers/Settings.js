'use strict';

var url = require('url');

var Settings = require('./SettingsService');

module.exports.getAllSettings = function getAllSettings (req, res, next) {
  Settings.getAllSettings(req.swagger.params, res, next);
};

module.exports.getDatabaseConfigSettings = function getDatabaseConfigSettings (req, res, next) {
  Settings.getDatabaseConfigSettings(req.swagger.params, res, next);
};

module.exports.getRecipeSettings = function getRecipeSettings (req, res, next) {
  Settings.getRecipeSettings(req.swagger.params, res, next);
};
