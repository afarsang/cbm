'use strict';

exports.getEvents = function(args, res, next) {
  /**
   * retrieve events by timestamp (long)
   * Events are used to track stack creation initiated by cloudbreak users. Events are generated by the backend when resources requested by the user become available or unavailable
   *
   * since Long  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "eventMessage" : "aeiou",
  "owner" : "aeiou",
  "blueprintName" : "aeiou",
  "stackId" : 123456789,
  "stackName" : "aeiou",
  "stackStatus" : "aeiou",
  "eventType" : "aeiou",
  "clusterId" : 123456789,
  "instanceGroup" : "aeiou",
  "availabilityZone" : "aeiou",
  "blueprintId" : 123456789,
  "cloud" : "aeiou",
  "clusterName" : "aeiou",
  "nodeCount" : 123,
  "region" : "aeiou",
  "account" : "aeiou",
  "clusterStatus" : "aeiou",
  "eventTimestamp" : 123456789
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getEventsBySTackId = function(args, res, next) {
  /**
   * retrieve events by stackid (long)
   * Events are used to track stack creation initiated by cloudbreak users. Events are generated by the backend when resources requested by the user become available or unavailable
   *
   * stackId Long 
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "eventMessage" : "aeiou",
  "owner" : "aeiou",
  "blueprintName" : "aeiou",
  "stackId" : 123456789,
  "stackName" : "aeiou",
  "stackStatus" : "aeiou",
  "eventType" : "aeiou",
  "clusterId" : 123456789,
  "instanceGroup" : "aeiou",
  "availabilityZone" : "aeiou",
  "blueprintId" : 123456789,
  "cloud" : "aeiou",
  "clusterName" : "aeiou",
  "nodeCount" : 123,
  "region" : "aeiou",
  "account" : "aeiou",
  "clusterStatus" : "aeiou",
  "eventTimestamp" : 123456789
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

