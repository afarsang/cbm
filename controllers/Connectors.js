'use strict';

var url = require('url');

var Connectors = require('./ConnectorsService');

module.exports.getDisktypeByType = function getDisktypeByType (req, res, next) {
  Connectors.getDisktypeByType(req.swagger.params, res, next);
};

module.exports.getDisktypes = function getDisktypes (req, res, next) {
  Connectors.getDisktypes(req.swagger.params, res, next);
};

module.exports.getImages = function getImages (req, res, next) {
  Connectors.getImages(req.swagger.params, res, next);
};

module.exports.getImagesByType = function getImagesByType (req, res, next) {
  Connectors.getImagesByType(req.swagger.params, res, next);
};

module.exports.getOchestratorsByType = function getOchestratorsByType (req, res, next) {
  Connectors.getOchestratorsByType(req.swagger.params, res, next);
};

module.exports.getOrchestratortypes = function getOrchestratortypes (req, res, next) {
  Connectors.getOrchestratortypes(req.swagger.params, res, next);
};

module.exports.getPlatformNetworks = function getPlatformNetworks (req, res, next) {
  Connectors.getPlatformNetworks(req.swagger.params, res, next);
};

module.exports.getPlatformSShKeys = function getPlatformSShKeys (req, res, next) {
  Connectors.getPlatformSShKeys(req.swagger.params, res, next);
};

module.exports.getPlatformSecurityGroups = function getPlatformSecurityGroups (req, res, next) {
  Connectors.getPlatformSecurityGroups(req.swagger.params, res, next);
};

module.exports.getPlatformVariantByType = function getPlatformVariantByType (req, res, next) {
  Connectors.getPlatformVariantByType(req.swagger.params, res, next);
};

module.exports.getPlatformVariants = function getPlatformVariants (req, res, next) {
  Connectors.getPlatformVariants(req.swagger.params, res, next);
};

module.exports.getPlatforms = function getPlatforms (req, res, next) {
  Connectors.getPlatforms(req.swagger.params, res, next);
};

module.exports.getRegionAvByType = function getRegionAvByType (req, res, next) {
  Connectors.getRegionAvByType(req.swagger.params, res, next);
};

module.exports.getRegionRByType = function getRegionRByType (req, res, next) {
  Connectors.getRegionRByType(req.swagger.params, res, next);
};

module.exports.getRegions = function getRegions (req, res, next) {
  Connectors.getRegions(req.swagger.params, res, next);
};

module.exports.getSpecialProperties = function getSpecialProperties (req, res, next) {
  Connectors.getSpecialProperties(req.swagger.params, res, next);
};

module.exports.getTagSpecifications = function getTagSpecifications (req, res, next) {
  Connectors.getTagSpecifications(req.swagger.params, res, next);
};

module.exports.getVmTypeByType = function getVmTypeByType (req, res, next) {
  Connectors.getVmTypeByType(req.swagger.params, res, next);
};

module.exports.getVmTypes = function getVmTypes (req, res, next) {
  Connectors.getVmTypes(req.swagger.params, res, next);
};
