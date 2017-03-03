'use strict';

var url = require('url');


var MySwaggerTag = require('./MySwaggerTagService');


module.exports.getApiV2DashboardDatasetsCsv = function getApiV2DashboardDatasetsCsv (req, res, next) {
  MySwaggerTag.getApiV2DashboardDatasetsCsv(req.swagger.params, res, next);
};

module.exports.getApiV2DashboardDatasetsSummary = function getApiV2DashboardDatasetsSummary (req, res, next) {
  MySwaggerTag.getApiV2DashboardDatasetsSummary(req.swagger.params, res, next);
};
