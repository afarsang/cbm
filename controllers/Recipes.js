'use strict';

var url = require('url');

var Recipes = require('./RecipesService');

module.exports.deletePrivateRecipe = function deletePrivateRecipe (req, res, next) {
  Recipes.deletePrivateRecipe(req.swagger.params, res, next);
};

module.exports.deletePublicRecipe = function deletePublicRecipe (req, res, next) {
  Recipes.deletePublicRecipe(req.swagger.params, res, next);
};

module.exports.deleteRecipe = function deleteRecipe (req, res, next) {
  Recipes.deleteRecipe(req.swagger.params, res, next);
};

module.exports.getPrivateRecipe = function getPrivateRecipe (req, res, next) {
  Recipes.getPrivateRecipe(req.swagger.params, res, next);
};

module.exports.getPrivatesRecipe = function getPrivatesRecipe (req, res, next) {
  Recipes.getPrivatesRecipe(req.swagger.params, res, next);
};

module.exports.getPublicRecipe = function getPublicRecipe (req, res, next) {
  Recipes.getPublicRecipe(req.swagger.params, res, next);
};

module.exports.getPublicsRecipe = function getPublicsRecipe (req, res, next) {
  Recipes.getPublicsRecipe(req.swagger.params, res, next);
};

module.exports.getRecipe = function getRecipe (req, res, next) {
  Recipes.getRecipe(req.swagger.params, res, next);
};

module.exports.postPrivateRecipe = function postPrivateRecipe (req, res, next) {
  Recipes.postPrivateRecipe(req.swagger.params, res, next);
};

module.exports.postPublicRecipe = function postPublicRecipe (req, res, next) {
  Recipes.postPublicRecipe(req.swagger.params, res, next);
};
