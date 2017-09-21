'use strict';

var url = require('url');

var Events = require('./EventsService');

module.exports.getEvents = function getEvents (req, res, next) {
  Events.getEvents(req.swagger.params, res, next);
};

module.exports.getEventsBySTackId = function getEventsBySTackId (req, res, next) {
  Events.getEventsBySTackId(req.swagger.params, res, next);
};
