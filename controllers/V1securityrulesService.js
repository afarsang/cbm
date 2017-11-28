'use strict';

exports.getPublicIps = function(args, res, next) {
  /**
   * get default public IPs
   * Security Rules operations
   *
   * returns SecurityRulesResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "core" : [ {
    "subnet" : "aeiou",
    "protocol" : "aeiou",
    "id" : 123456789,
    "ports" : "aeiou",
    "modifiable" : true
  } ],
  "gateway" : [ "" ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

