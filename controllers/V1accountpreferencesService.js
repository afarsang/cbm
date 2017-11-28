'use strict';

exports.getAccountPreferencesEndpoint = function(args, res, next) {
  /**
   * retrieve account preferences for admin user
   * Account related preferences that could be managed by the account admins and different restrictions could be added to Cloudbreak resources.
   *
   * returns AccountPreference
   **/
  var examples = {};
  examples['application/json'] = {
  "maxNumberOfNodesPerCluster" : 123456789,
  "userTimeToLive" : 123456789,
  "maxNumberOfClustersPerUser" : 123456789,
  "clusterTimeToLive" : 123456789,
  "allowedInstanceTypes" : [ "aeiou" ],
  "maxNumberOfClusters" : 123456789,
  "defaultTags" : {
    "key" : "aeiou"
  },
  "platforms" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.isPlatformSelectionDisabled = function(args, res, next) {
  /**
   * is platform selection disabled
   * Account related preferences that could be managed by the account admins and different restrictions could be added to Cloudbreak resources.
   *
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {"AZURE":true,"OPENSTACK":true,"BYOS":true,"GCP":true,"AWS":true,"MOCK":true};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.platformEnablement = function(args, res, next) {
  /**
   * is platform selection enabled
   * Account related preferences that could be managed by the account admins and different restrictions could be added to Cloudbreak resources.
   *
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {"AZURE":true,"OPENSTACK":true,"BYOS":true,"GCP":true,"AWS":true,"MOCK":true};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postAccountPreferencesEndpoint = function(args, res, next) {
  /**
   * post account preferences of admin user
   * Account related preferences that could be managed by the account admins and different restrictions could be added to Cloudbreak resources.
   *
   * body AccountPreference  (optional)
   * returns AccountPreference
   **/
  var examples = {};
  examples['application/json'] = {
  "maxNumberOfNodesPerCluster" : 123456789,
  "userTimeToLive" : 123456789,
  "maxNumberOfClustersPerUser" : 123456789,
  "clusterTimeToLive" : 123456789,
  "allowedInstanceTypes" : [ "aeiou" ],
  "maxNumberOfClusters" : 123456789,
  "defaultTags" : {
    "key" : "aeiou"
  },
  "platforms" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.putAccountPreferencesEndpoint = function(args, res, next) {
  /**
   * update account preferences of admin user
   * Account related preferences that could be managed by the account admins and different restrictions could be added to Cloudbreak resources.
   *
   * body AccountPreference  (optional)
   * returns AccountPreference
   **/
  var examples = {};
  examples['application/json'] = {
  "maxNumberOfNodesPerCluster" : 123456789,
  "userTimeToLive" : 123456789,
  "maxNumberOfClustersPerUser" : 123456789,
  "clusterTimeToLive" : 123456789,
  "allowedInstanceTypes" : [ "aeiou" ],
  "maxNumberOfClusters" : 123456789,
  "defaultTags" : {
    "key" : "aeiou"
  },
  "platforms" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.validateAccountPreferencesEndpoint = function(args, res, next) {
  /**
   * validate account preferences of all stacks
   * Account related preferences that could be managed by the account admins and different restrictions could be added to Cloudbreak resources.
   *
   * no response value expected for this operation
   **/
  res.end();
}

