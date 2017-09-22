'use strict';

exports.deleteBlueprint = function(args, res, next) {
  /**
   * delete blueprint by id
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * id Long 
   * no response value expected for this operation
   **/
  res.end();
}

exports.deletePrivateBlueprint = function(args, res, next) {
  /**
   * delete private blueprint by name
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * name String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.deletePublicBlueprint = function(args, res, next) {
  /**
   * delete public (owned) or private blueprint by name
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * name String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.getBlueprint = function(args, res, next) {
  /**
   * retrieve blueprint by id
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * id Long 
   * returns BlueprintResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "public" : true,
  "blueprintName" : "aeiou",
  "ambariBlueprint" : "aeiou",
  "inputs" : [ {
    "referenceConfiguration" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "hostGroupCount" : 123,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPrivateBlueprint = function(args, res, next) {
  /**
   * retrieve a private blueprint by name
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * name String 
   * returns BlueprintResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "public" : true,
  "blueprintName" : "aeiou",
  "ambariBlueprint" : "aeiou",
  "inputs" : [ {
    "referenceConfiguration" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "hostGroupCount" : 123,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPrivatesBlueprint = function(args, res, next) {
  /**
   * retrieve private blueprints
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "public" : true,
  "blueprintName" : "aeiou",
  "ambariBlueprint" : "aeiou",
  "inputs" : [ {
    "referenceConfiguration" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "hostGroupCount" : 123,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "status" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPublicBlueprint = function(args, res, next) {
  /**
   * retrieve a public or private (owned) blueprint by name
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * name String 
   * returns BlueprintResponse
   **/
  var examples = {};
  /*
  examples['application/json'] = {
  "public" : true,
  "blueprintName" : "aeiou",
  "ambariBlueprint" : "aeiou",
  "inputs" : [ {
    "referenceConfiguration" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "hostGroupCount" : 123,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "status" : "aeiou"
}; */
  examples['application/json'] = {"ambariBlueprint":{"Blueprints":{"blueprint_name":"hdp26-etl-edw","stack_name":"HDP","stack_version":"2.6"},"settings":[{"recovery_settings":[]},{"service_settings":[{"name":"HIVE","credential_store_enabled":"false"}]},{"component_settings":[]}],"configurations":[{"core-site":{"fs.trash.interval":"4320"}},{"hdfs-site":{"dfs.namenode.safemode.threshold-pct":"0.99"}},{"hive-site":{"hive.exec.compress.output":"true","hive.merge.mapfiles":"true","hive.server2.tez.initialize.default.sessions":"true","hive.server2.transport.mode":"http"}},{"mapred-site":{"mapreduce.job.reduce.slowstart.completedmaps":"0.7","mapreduce.map.output.compress":"true","mapreduce.output.fileoutputformat.compress":"true"}},{"yarn-site":{"yarn.acl.enable":"true"}},{"druid-common":{"properties_attributes":{},"properties":{"druid.metadata.storage.type":"derby","druid.metadata.storage.connector.connectURI":"jdbc:derby://localhost:1527/druid;create=true","druid.extensions.loadList":"[\"postgresql-metadata-storage\", \"druid-s3-extensions\"]","druid.selectors.indexing.serviceName":"druid/overlord"}}},{"druid-superset":{"properties_attributes":{},"properties":{"SECRET_KEY":"123admin123","SUPERSET_DATABASE_TYPE":"sqlite"}}},{"druid-overlord":{"properties_attributes":{},"properties":{"druid.indexer.storage.type":"metadata","druid.indexer.runner.type":"remote","druid.service":"druid/overlord","druid.port":"8090"}}},{"druid-middlemanager":{"properties_attributes":{},"properties":{"druid.indexer.task.hadoopWorkingPath":"/tmp/druid-indexing","druid.server.http.numThreads":"50","druid.indexer.runner.startPort":"8100","druid.worker.capacity":"3","druid.processing.numThreads":"2","druid.indexer.runner.javaOpts":"-server -Xmx2g -Duser.timezone=UTC -Dfile.encoding=UTF-8 -Djava.util.logging.manager=org.apache.logging.log4j.jul.LogManager -Dhdp.version={{stack_version}} -Dhadoop.mapreduce.job.classloader=true","druid.indexer.task.baseTaskDir":"/tmp/persistent/tasks","druid.processing.buffer.sizeBytes":"256000000","druid.service":"druid/middlemanager","druid.port":"8091"}}}],"host_groups":[{"name":"master","configurations":[],"components":[{"name":"APP_TIMELINE_SERVER"},{"name":"HCAT"},{"name":"HDFS_CLIENT"},{"name":"HISTORYSERVER"},{"name":"HIVE_CLIENT"},{"name":"HIVE_METASTORE"},{"name":"HIVE_SERVER"},{"name":"JOURNALNODE"},{"name":"LIVY_SERVER"},{"name":"MAPREDUCE2_CLIENT"},{"name":"METRICS_COLLECTOR"},{"name":"METRICS_MONITOR"},{"name":"MYSQL_SERVER"},{"name":"NAMENODE"},{"name":"PIG"},{"name":"RESOURCEMANAGER"},{"name":"SECONDARY_NAMENODE"},{"name":"SPARK_CLIENT"},{"name":"SPARK_JOBHISTORYSERVER"},{"name":"SQOOP"},{"name":"TEZ_CLIENT"},{"name":"WEBHCAT_SERVER"},{"name":"YARN_CLIENT"},{"name":"ZOOKEEPER_CLIENT"},{"name":"ZOOKEEPER_SERVER"},{"name":"DRUID_OVERLORD","provision_action":"INSTALL_ONLY"},{"name":"DRUID_COORDINATOR","provision_action":"INSTALL_ONLY"},{"name":"DRUID_ROUTER","provision_action":"INSTALL_ONLY"},{"name":"DRUID_BROKER","provision_action":"INSTALL_ONLY"},{"name":"DRUID_SUPERSET","provision_action":"INSTALL_ONLY"}],"cardinality":"1"},{"name":"worker","configurations":[],"components":[{"name":"HIVE_CLIENT"},{"name":"TEZ_CLIENT"},{"name":"SPARK_CLIENT"},{"name":"DATANODE"},{"name":"METRICS_MONITOR"},{"name":"NODEMANAGER"},{"name":"DRUID_MIDDLEMANAGER","provision_action":"INSTALL_ONLY"},{"name":"DRUID_HISTORICAL","provision_action":"INSTALL_ONLY"}],"cardinality":"1+"},{"name":"compute","configurations":[],"components":[{"name":"HIVE_CLIENT"},{"name":"TEZ_CLIENT"},{"name":"SPARK_CLIENT"},{"name":"METRICS_MONITOR"},{"name":"NODEMANAGER"}],"cardinality":"1+"}]},"description":"26EDW-ETL: Apache Hive 1.2.1, Apache Spark 1.6","inputs":[],"name":"26EDW-ETL: Apache Hive 1.2.1, Apache Spark 1.6","id":10,"blueprintName":"hdp26-etl-edw","hostGroupCount":3,"status":"DEFAULT","public":true};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPublicsBlueprint = function(args, res, next) {
  /**
   * retrieve public and private (owned) blueprints
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "public" : true,
  "blueprintName" : "aeiou",
  "ambariBlueprint" : "aeiou",
  "inputs" : [ {
    "referenceConfiguration" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "hostGroupCount" : 123,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "status" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postPrivateBlueprint = function(args, res, next) {
  /**
   * create blueprint as private resource
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * body BlueprintRequest  (optional)
   * returns BlueprintResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "public" : true,
  "blueprintName" : "aeiou",
  "ambariBlueprint" : "aeiou",
  "inputs" : [ {
    "referenceConfiguration" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "hostGroupCount" : 123,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postPublicBlueprint = function(args, res, next) {
  /**
   * create blueprint as public resource
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * body BlueprintRequest  (optional)
   * returns BlueprintResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "public" : true,
  "blueprintName" : "aeiou",
  "ambariBlueprint" : "aeiou",
  "inputs" : [ {
    "referenceConfiguration" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou"
  } ],
  "hostGroupCount" : 123,
  "name" : "aeiou",
  "description" : "aeiou",
  "id" : 123456789,
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

