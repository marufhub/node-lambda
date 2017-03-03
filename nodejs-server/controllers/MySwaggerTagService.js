'use strict';

exports.getApiV2DashboardDatasetsCsv = function(args, res, next) {
  /**
   * parameters expected in the args:
  * node_id (String)
  * dataType (String)
  * where (String)
  * filename (String)
  * group (String)
  * timezone (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "url" : "www.example.com"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getApiV2DashboardDatasetsSummary = function(args, res, next) {
  /**
   * parameters expected in the args:
  * node_id (String)
  * where (String)
  * timezone (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "a0000000029.a0000000030.a0000000031" : {
    "visitors_male_ratio" : [ {
      "sum" : 1.2
    }, {
      "svg" : 1.2
    }, {
      "max" : 1.2
    }, {
      "min" : 1.2
    } ]
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

