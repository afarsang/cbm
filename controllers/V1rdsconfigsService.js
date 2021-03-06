'use strict';

exports.deletePrivateRds = function(args, res, next) {
  /**
   * delete private RDS configuration by name
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * name String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.deletePublicRds = function(args, res, next) {
  /**
   * delete public (owned) or private RDS configuration by name
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * name String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.deleteRds = function(args, res, next) {
  /**
   * delete RDS configuration by id
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * id Long 
   * no response value expected for this operation
   **/
  res.end();
}

exports.getPrivateRds = function(args, res, next) {
  /**
   * retrieve a private RDS configuration by name
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * name String 
   * returns RDSConfigResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "databaseType" : "aeiou",
  "clusterNames" : [ "aeiou" ],
  "validated" : true,
  "publicInAccount" : true,
  "hdpVersion" : "aeiou",
  "name" : "aeiou",
  "connectionURL" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "creationDate" : 123456789,
  "properties" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPrivatesRds = function(args, res, next) {
  /**
   * retrieve private RDS configurations
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "databaseType" : "aeiou",
  "clusterNames" : [ "aeiou" ],
  "validated" : true,
  "publicInAccount" : true,
  "hdpVersion" : "aeiou",
  "name" : "aeiou",
  "connectionURL" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "creationDate" : 123456789,
  "properties" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ]
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPublicRds = function(args, res, next) {
  /**
   * retrieve a public or private (owned) RDS configuration by name
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * name String 
   * returns RDSConfigResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "databaseType" : "aeiou",
  "clusterNames" : [ "aeiou" ],
  "validated" : true,
  "publicInAccount" : true,
  "hdpVersion" : "aeiou",
  "name" : "aeiou",
  "connectionURL" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "creationDate" : 123456789,
  "properties" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPublicsRds = function(args, res, next) {
  /**
   * retrieve public and private (owned) RDS configurations
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "databaseType" : "aeiou",
  "clusterNames" : [ "aeiou" ],
  "validated" : true,
  "publicInAccount" : true,
  "hdpVersion" : "aeiou",
  "name" : "aeiou",
  "connectionURL" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "creationDate" : 123456789,
  "properties" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ]
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getRds = function(args, res, next) {
  /**
   * retrieve RDS configuration by id
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * id Long 
   * returns RDSConfigResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "databaseType" : "aeiou",
  "clusterNames" : [ "aeiou" ],
  "validated" : true,
  "publicInAccount" : true,
  "hdpVersion" : "aeiou",
  "name" : "aeiou",
  "connectionURL" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "creationDate" : 123456789,
  "properties" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postPrivateRds = function(args, res, next) {
  /**
   * create RDS configuration as private resource
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * body RDSConfig  (optional)
   * returns RDSConfigResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "databaseType" : "aeiou",
  "clusterNames" : [ "aeiou" ],
  "validated" : true,
  "publicInAccount" : true,
  "hdpVersion" : "aeiou",
  "name" : "aeiou",
  "connectionURL" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "creationDate" : 123456789,
  "properties" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postPublicRds = function(args, res, next) {
  /**
   * create RDS configuration as public resource
   * An RDS Configuration describe a connection to an external Relational Database Service that can be used as the Hive Metastore.
   *
   * body RDSConfig  (optional)
   * returns RDSConfigResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "databaseType" : "aeiou",
  "clusterNames" : [ "aeiou" ],
  "validated" : true,
  "publicInAccount" : true,
  "hdpVersion" : "aeiou",
  "name" : "aeiou",
  "connectionURL" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "creationDate" : 123456789,
  "properties" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

