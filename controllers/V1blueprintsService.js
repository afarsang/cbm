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

exports.getPublicsBlueprint = function(args, res, next) {
  /**
   * retrieve public and private (owned) blueprints
   * Ambari Blueprints are a declarative definition of a Hadoop cluster. With a Blueprint, you specify a stack, the component layout and the configurations to materialize a Hadoop cluster instance. Hostgroups defined in blueprints can be associated to different templates, thus you can spin up a highly available cluster running on different instance types. This will give you the option to group your Hadoop services based on resource needs (e.g. high I/O, CPU or memory) and create an infrastructure which fits your workload best.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [{"ambariBlueprint":"eyJCbHVlcHJpbnRzIjp7ImJsdWVwcmludF9uYW1lIjoiaGRwMjYtZHJ1aWQtYmkiLCJzdGFja19uYW1lIjoiSERQIiwic3RhY2tfdmVyc2lvbiI6IjIuNiJ9LCJzZXR0aW5ncyI6W3sicmVjb3Zlcnlfc2V0dGluZ3MiOltdfSx7InNlcnZpY2Vfc2V0dGluZ3MiOlt7Im5hbWUiOiJISVZFIiwiY3JlZGVudGlhbF9zdG9yZV9lbmFibGVkIjoiZmFsc2UifV19LHsiY29tcG9uZW50X3NldHRpbmdzIjpbXX1dLCJjb25maWd1cmF0aW9ucyI6W3siY29yZS1zaXRlIjp7ImZzLnRyYXNoLmludGVydmFsIjoiNDMyMCJ9fSx7ImhkZnMtc2l0ZSI6eyJkZnMubmFtZW5vZGUuc2FmZW1vZGUudGhyZXNob2xkLXBjdCI6IjAuOTkifX0seyJtYXByZWQtc2l0ZSI6eyJtYXByZWR1Y2Uuam9iLnJlZHVjZS5zbG93c3RhcnQuY29tcGxldGVkbWFwcyI6IjAuNyIsIm1hcHJlZHVjZS5tYXAub3V0cHV0LmNvbXByZXNzIjoidHJ1ZSIsIm1hcHJlZHVjZS5vdXRwdXQuZmlsZW91dHB1dGZvcm1hdC5jb21wcmVzcyI6InRydWUifX0seyJ5YXJuLXNpdGUiOnsieWFybi5hY2wuZW5hYmxlIjoidHJ1ZSJ9fSx7ImRydWlkLWNvbW1vbiI6eyJwcm9wZXJ0aWVzX2F0dHJpYnV0ZXMiOnt9LCJwcm9wZXJ0aWVzIjp7ImRydWlkLm1ldGFkYXRhLnN0b3JhZ2UudHlwZSI6ImRlcmJ5IiwiZHJ1aWQubWV0YWRhdGEuc3RvcmFnZS5jb25uZWN0b3IuY29ubmVjdFVSSSI6ImpkYmM6ZGVyYnk6Ly9sb2NhbGhvc3Q6MTUyNy9kcnVpZDtjcmVhdGU9dHJ1ZSIsImRydWlkLmV4dGVuc2lvbnMubG9hZExpc3QiOiJbXCJwb3N0Z3Jlc3FsLW1ldGFkYXRhLXN0b3JhZ2VcIiwgXCJkcnVpZC1zMy1leHRlbnNpb25zXCJdIiwiZHJ1aWQuc2VsZWN0b3JzLmluZGV4aW5nLnNlcnZpY2VOYW1lIjoiZHJ1aWQvb3ZlcmxvcmQiLCJkcnVpZC5zdG9yYWdlLnR5cGUiOiJzMyJ9fX0seyJkcnVpZC1vdmVybG9yZCI6eyJwcm9wZXJ0aWVzX2F0dHJpYnV0ZXMiOnt9LCJwcm9wZXJ0aWVzIjp7ImRydWlkLmluZGV4ZXIuc3RvcmFnZS50eXBlIjoibWV0YWRhdGEiLCJkcnVpZC5pbmRleGVyLnJ1bm5lci50eXBlIjoicmVtb3RlIiwiZHJ1aWQuc2VydmljZSI6ImRydWlkL292ZXJsb3JkIiwiZHJ1aWQucG9ydCI6IjgwOTAifX19LHsiZHJ1aWQtbWlkZGxlbWFuYWdlciI6eyJwcm9wZXJ0aWVzX2F0dHJpYnV0ZXMiOnt9LCJwcm9wZXJ0aWVzIjp7ImRydWlkLnNlcnZlci5odHRwLm51bVRocmVhZHMiOiI1MCIsImRydWlkLndvcmtlci5jYXBhY2l0eSI6IjMiLCJkcnVpZC5wcm9jZXNzaW5nLm51bVRocmVhZHMiOiIyIiwiZHJ1aWQuaW5kZXhlci5ydW5uZXIuamF2YU9wdHMiOiItc2VydmVyIC1YbXgyZyAtRHVzZXIudGltZXpvbmU9VVRDIC1EZmlsZS5lbmNvZGluZz1VVEYtOCAtRGphdmEudXRpbC5sb2dnaW5nLm1hbmFnZXI9b3JnLmFwYWNoZS5sb2dnaW5nLmxvZzRqLmp1bC5Mb2dNYW5hZ2VyIC1EaGRwLnZlcnNpb249e3tzdGFja192ZXJzaW9ufX0gLURoYWRvb3AubWFwcmVkdWNlLmpvYi5jbGFzc2xvYWRlcj10cnVlIiwiZHJ1aWQuc2VydmljZSI6ImRydWlkL21pZGRsZW1hbmFnZXIiLCJkcnVpZC5wb3J0IjoiODA5MSJ9fX0seyJkcnVpZC1jb29yZGluYXRvciI6eyJwcm9wZXJ0aWVzX2F0dHJpYnV0ZXMiOnt9LCJwcm9wZXJ0aWVzIjp7ImRydWlkLmNvb3JkaW5hdG9yLm1lcmdlLm9uIjoiZmFsc2UiLCJkcnVpZC5wb3J0IjoiODA4MSJ9fX0seyJkcnVpZC1oaXN0b3JpY2FsIjp7InByb3BlcnRpZXNfYXR0cmlidXRlcyI6e30sInByb3BlcnRpZXMiOnsiZHJ1aWQuc2VydmVyLmh0dHAubnVtVGhyZWFkcyI6IjUwIiwiZHJ1aWQucHJvY2Vzc2luZy5udW1UaHJlYWRzIjoiMTAiLCJkcnVpZC5zZXJ2aWNlIjoiZHJ1aWQvaGlzdG9yaWNhbCIsImRydWlkLnBvcnQiOiI4MDgzIiwiZHJ1aWQuc2VydmVyLm1heFNpemUiOiIzMDAwMDAwMDAwMDAifX19LHsiZHJ1aWQtYnJva2VyIjp7InByb3BlcnRpZXNfYXR0cmlidXRlcyI6e30sInByb3BlcnRpZXMiOnsiZHJ1aWQuY2FjaGUudHlwZSI6ImxvY2FsIiwiZHJ1aWQuc2VydmVyLmh0dHAubnVtVGhyZWFkcyI6IjUwIiwiZHJ1aWQuYnJva2VyLmh0dHAubnVtQ29ubmVjdGlvbnMiOiI1IiwiZHJ1aWQucHJvY2Vzc2luZy5udW1UaHJlYWRzIjoiMiIsImRydWlkLnNlcnZpY2UiOiJkcnVpZC9icm9rZXIiLCJkcnVpZC5wb3J0IjoiODA4MiJ9fX0seyJkcnVpZC1yb3V0ZXIiOnsicHJvcGVydGllc19hdHRyaWJ1dGVzIjp7fSwicHJvcGVydGllcyI6e319fSx7ImRydWlkLXN1cGVyc2V0Ijp7InByb3BlcnRpZXNfYXR0cmlidXRlcyI6e30sInByb3BlcnRpZXMiOnsiU0VDUkVUX0tFWSI6IjEyM2FkbWluMTIzIiwiU1VQRVJTRVRfREFUQUJBU0VfVFlQRSI6InNxbGl0ZSJ9fX1dLCJob3N0X2dyb3VwcyI6W3sibmFtZSI6Im1hc3RlciIsImNvbmZpZ3VyYXRpb25zIjpbXSwiY29tcG9uZW50cyI6W3sibmFtZSI6IkFQUF9USU1FTElORV9TRVJWRVIifSx7Im5hbWUiOiJNQVBSRURVQ0UyX0NMSUVOVCJ9LHsibmFtZSI6Ik1FVFJJQ1NfQ09MTEVDVE9SIn0seyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiSElTVE9SWVNFUlZFUiJ9LHsibmFtZSI6Ik5BTUVOT0RFIn0seyJuYW1lIjoiUkVTT1VSQ0VNQU5BR0VSIn0seyJuYW1lIjoiU0VDT05EQVJZX05BTUVOT0RFIn0seyJuYW1lIjoiVEVaX0NMSUVOVCJ9LHsibmFtZSI6IllBUk5fQ0xJRU5UIn0seyJuYW1lIjoiWk9PS0VFUEVSX0NMSUVOVCJ9LHsibmFtZSI6IlpPT0tFRVBFUl9TRVJWRVIifSx7Im5hbWUiOiJEUlVJRF9PVkVSTE9SRCJ9LHsibmFtZSI6IkRSVUlEX0NPT1JESU5BVE9SIn0seyJuYW1lIjoiRFJVSURfUk9VVEVSIn0seyJuYW1lIjoiRFJVSURfQlJPS0VSIn0seyJuYW1lIjoiRFJVSURfU1VQRVJTRVQifSx7Im5hbWUiOiJIREZTX0NMSUVOVCJ9XSwiY2FyZGluYWxpdHkiOiIxIn0seyJuYW1lIjoid29ya2VyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiREFUQU5PREUifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9LHsibmFtZSI6IkRSVUlEX0hJU1RPUklDQUwifV0sImNhcmRpbmFsaXR5IjoiMSsifSx7Im5hbWUiOiJjb21wdXRlIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiTk9ERU1BTkFHRVIifSx7Im5hbWUiOiJEUlVJRF9NSURETEVNQU5BR0VSIn1dLCJjYXJkaW5hbGl0eSI6IjErIn1dfQ==","description":"BI: Druid 0.9.2 (Technical Preview)","inputs":[],"name":"BI: Druid 0.9.2 (Technical Preview)","id":5,"blueprintName":"hdp26-druid-bi","hostGroupCount":3,"status":"DEFAULT","public":true},{"ambariBlueprint":"eyJCbHVlcHJpbnRzIjp7ImJsdWVwcmludF9uYW1lIjoiaGRwMjYtZGF0YS1zY2llbmNlIiwic3RhY2tfbmFtZSI6IkhEUCIsInN0YWNrX3ZlcnNpb24iOiIyLjYifSwic2V0dGluZ3MiOlt7InJlY292ZXJ5X3NldHRpbmdzIjpbXX0seyJzZXJ2aWNlX3NldHRpbmdzIjpbeyJuYW1lIjoiSElWRSIsImNyZWRlbnRpYWxfc3RvcmVfZW5hYmxlZCI6ImZhbHNlIn1dfSx7ImNvbXBvbmVudF9zZXR0aW5ncyI6W119XSwiY29uZmlndXJhdGlvbnMiOlt7ImNvcmUtc2l0ZSI6eyJmcy50cmFzaC5pbnRlcnZhbCI6IjQzMjAifX0seyJoZGZzLXNpdGUiOnsiZGZzLm5hbWVub2RlLnNhZmVtb2RlLnRocmVzaG9sZC1wY3QiOiIwLjk5In19LHsiaGl2ZS1zaXRlIjp7ImhpdmUuZXhlYy5jb21wcmVzcy5vdXRwdXQiOiJ0cnVlIiwiaGl2ZS5tZXJnZS5tYXBmaWxlcyI6InRydWUiLCJoaXZlLnNlcnZlcjIudGV6LmluaXRpYWxpemUuZGVmYXVsdC5zZXNzaW9ucyI6InRydWUiLCJoaXZlLnNlcnZlcjIudHJhbnNwb3J0Lm1vZGUiOiJodHRwIn19LHsibWFwcmVkLXNpdGUiOnsibWFwcmVkdWNlLmpvYi5yZWR1Y2Uuc2xvd3N0YXJ0LmNvbXBsZXRlZG1hcHMiOiIwLjciLCJtYXByZWR1Y2UubWFwLm91dHB1dC5jb21wcmVzcyI6InRydWUiLCJtYXByZWR1Y2Uub3V0cHV0LmZpbGVvdXRwdXRmb3JtYXQuY29tcHJlc3MiOiJ0cnVlIn19LHsieWFybi1zaXRlIjp7Inlhcm4uYWNsLmVuYWJsZSI6InRydWUifX1dLCJob3N0X2dyb3VwcyI6W3sibmFtZSI6Im1hc3RlciIsImNvbmZpZ3VyYXRpb25zIjpbXSwiY29tcG9uZW50cyI6W3sibmFtZSI6IkFQUF9USU1FTElORV9TRVJWRVIifSx7Im5hbWUiOiJIQ0FUIn0seyJuYW1lIjoiSERGU19DTElFTlQifSx7Im5hbWUiOiJISVNUT1JZU0VSVkVSIn0seyJuYW1lIjoiSElWRV9DTElFTlQifSx7Im5hbWUiOiJISVZFX01FVEFTVE9SRSJ9LHsibmFtZSI6IkhJVkVfU0VSVkVSIn0seyJuYW1lIjoiSk9VUk5BTE5PREUifSx7Im5hbWUiOiJMSVZZX1NFUlZFUiJ9LHsibmFtZSI6Ik1BUFJFRFVDRTJfQ0xJRU5UIn0seyJuYW1lIjoiTUVUUklDU19DT0xMRUNUT1IifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJNWVNRTF9TRVJWRVIifSx7Im5hbWUiOiJOQU1FTk9ERSJ9LHsibmFtZSI6IlBJRyJ9LHsibmFtZSI6IlJFU09VUkNFTUFOQUdFUiJ9LHsibmFtZSI6IlNFQ09OREFSWV9OQU1FTk9ERSJ9LHsibmFtZSI6IlNQQVJLX0NMSUVOVCJ9LHsibmFtZSI6IlNQQVJLX0pPQkhJU1RPUllTRVJWRVIifSx7Im5hbWUiOiJTUU9PUCJ9LHsibmFtZSI6IlRFWl9DTElFTlQifSx7Im5hbWUiOiJXRUJIQ0FUX1NFUlZFUiJ9LHsibmFtZSI6IllBUk5fQ0xJRU5UIn0seyJuYW1lIjoiWkVQUEVMSU5fTUFTVEVSIn0seyJuYW1lIjoiWk9PS0VFUEVSX0NMSUVOVCJ9LHsibmFtZSI6IlpPT0tFRVBFUl9TRVJWRVIifV0sImNhcmRpbmFsaXR5IjoiMSJ9LHsibmFtZSI6IndvcmtlciIsImNvbmZpZ3VyYXRpb25zIjpbXSwiY29tcG9uZW50cyI6W3sibmFtZSI6IkhJVkVfQ0xJRU5UIn0seyJuYW1lIjoiVEVaX0NMSUVOVCJ9LHsibmFtZSI6IlNQQVJLX0NMSUVOVCJ9LHsibmFtZSI6IkRBVEFOT0RFIn0seyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiTk9ERU1BTkFHRVIifV0sImNhcmRpbmFsaXR5IjoiMSsifSx7Im5hbWUiOiJjb21wdXRlIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiSElWRV9DTElFTlQifSx7Im5hbWUiOiJURVpfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUktfQ0xJRU5UIn0seyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiTk9ERU1BTkFHRVIifV0sImNhcmRpbmFsaXR5IjoiMSsifV19","description":"Data Science: Apache Spark 1.6, Apache Zeppelin 0.7.0","inputs":[],"name":"Data Science: Apache Spark 1.6, Apache Zeppelin 0.7.0","id":6,"blueprintName":"hdp26-data-science","hostGroupCount":3,"status":"DEFAULT","public":true},{"ambariBlueprint":"eyJCbHVlcHJpbnRzIjp7ImJsdWVwcmludF9uYW1lIjoiaGRwMjYtZGF0YS1zY2llbmNlLXNwYXJrMiIsInN0YWNrX25hbWUiOiJIRFAiLCJzdGFja192ZXJzaW9uIjoiMi42In0sInNldHRpbmdzIjpbeyJyZWNvdmVyeV9zZXR0aW5ncyI6W119LHsic2VydmljZV9zZXR0aW5ncyI6W3sibmFtZSI6IkhJVkUiLCJjcmVkZW50aWFsX3N0b3JlX2VuYWJsZWQiOiJmYWxzZSJ9XX0seyJjb21wb25lbnRfc2V0dGluZ3MiOltdfV0sImNvbmZpZ3VyYXRpb25zIjpbeyJjb3JlLXNpdGUiOnsiZnMudHJhc2guaW50ZXJ2YWwiOiI0MzIwIn19LHsiaGRmcy1zaXRlIjp7ImRmcy5uYW1lbm9kZS5zYWZlbW9kZS50aHJlc2hvbGQtcGN0IjoiMC45OSJ9fSx7ImhpdmUtc2l0ZSI6eyJoaXZlLmV4ZWMuY29tcHJlc3Mub3V0cHV0IjoidHJ1ZSIsImhpdmUubWVyZ2UubWFwZmlsZXMiOiJ0cnVlIiwiaGl2ZS5zZXJ2ZXIyLnRlei5pbml0aWFsaXplLmRlZmF1bHQuc2Vzc2lvbnMiOiJ0cnVlIiwiaGl2ZS5zZXJ2ZXIyLnRyYW5zcG9ydC5tb2RlIjoiaHR0cCJ9fSx7Im1hcHJlZC1zaXRlIjp7Im1hcHJlZHVjZS5qb2IucmVkdWNlLnNsb3dzdGFydC5jb21wbGV0ZWRtYXBzIjoiMC43IiwibWFwcmVkdWNlLm1hcC5vdXRwdXQuY29tcHJlc3MiOiJ0cnVlIiwibWFwcmVkdWNlLm91dHB1dC5maWxlb3V0cHV0Zm9ybWF0LmNvbXByZXNzIjoidHJ1ZSJ9fSx7Inlhcm4tc2l0ZSI6eyJ5YXJuLmFjbC5lbmFibGUiOiJ0cnVlIn19XSwiaG9zdF9ncm91cHMiOlt7Im5hbWUiOiJtYXN0ZXIiLCJjb25maWd1cmF0aW9ucyI6W10sImNvbXBvbmVudHMiOlt7Im5hbWUiOiJBUFBfVElNRUxJTkVfU0VSVkVSIn0seyJuYW1lIjoiSENBVCJ9LHsibmFtZSI6IkhERlNfQ0xJRU5UIn0seyJuYW1lIjoiSElTVE9SWVNFUlZFUiJ9LHsibmFtZSI6IkhJVkVfQ0xJRU5UIn0seyJuYW1lIjoiSElWRV9NRVRBU1RPUkUifSx7Im5hbWUiOiJISVZFX1NFUlZFUiJ9LHsibmFtZSI6IkpPVVJOQUxOT0RFIn0seyJuYW1lIjoiTUFQUkVEVUNFMl9DTElFTlQifSx7Im5hbWUiOiJNRVRSSUNTX0NPTExFQ1RPUiJ9LHsibmFtZSI6Ik1FVFJJQ1NfTU9OSVRPUiJ9LHsibmFtZSI6Ik1ZU1FMX1NFUlZFUiJ9LHsibmFtZSI6Ik5BTUVOT0RFIn0seyJuYW1lIjoiUElHIn0seyJuYW1lIjoiUkVTT1VSQ0VNQU5BR0VSIn0seyJuYW1lIjoiU0VDT05EQVJZX05BTUVOT0RFIn0seyJuYW1lIjoiTElWWV9TRVJWRVIifSx7Im5hbWUiOiJTUEFSSzJfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUksyX0pPQkhJU1RPUllTRVJWRVIifSx7Im5hbWUiOiJTUEFSS19DTElFTlQifSx7Im5hbWUiOiJTUEFSS19KT0JISVNUT1JZU0VSVkVSIn0seyJuYW1lIjoiU1FPT1AifSx7Im5hbWUiOiJURVpfQ0xJRU5UIn0seyJuYW1lIjoiV0VCSENBVF9TRVJWRVIifSx7Im5hbWUiOiJZQVJOX0NMSUVOVCJ9LHsibmFtZSI6IlpFUFBFTElOX01BU1RFUiJ9LHsibmFtZSI6IlpPT0tFRVBFUl9DTElFTlQifSx7Im5hbWUiOiJaT09LRUVQRVJfU0VSVkVSIn1dLCJjYXJkaW5hbGl0eSI6IjEifSx7Im5hbWUiOiJ3b3JrZXIiLCJjb25maWd1cmF0aW9ucyI6W10sImNvbXBvbmVudHMiOlt7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IlRFWl9DTElFTlQifSx7Im5hbWUiOiJTUEFSSzJfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUktfQ0xJRU5UIn0seyJuYW1lIjoiREFUQU5PREUifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9LHsibmFtZSI6ImNvbXB1dGUiLCJjb25maWd1cmF0aW9ucyI6W10sImNvbXBvbmVudHMiOlt7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IlRFWl9DTElFTlQifSx7Im5hbWUiOiJTUEFSSzJfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUktfQ0xJRU5UIn0seyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiTk9ERU1BTkFHRVIifV0sImNhcmRpbmFsaXR5IjoiMSsifV19","description":"Data Science: Apache Spark 2.1, Apache Zeppelin 0.7.0","inputs":[],"name":"Data Science: Apache Spark 2.1, Apache Zeppelin 0.7.0","id":4,"blueprintName":"hdp26-data-science-spark2","hostGroupCount":3,"status":"DEFAULT","public":true},{"ambariBlueprint":"eyJCbHVlcHJpbnRzIjp7ImJsdWVwcmludF9uYW1lIjoiaGRwMjYtZWR3LWFuYWx5dGljcyIsInN0YWNrX25hbWUiOiJIRFAiLCJzdGFja192ZXJzaW9uIjoiMi42In0sInNldHRpbmdzIjpbeyJyZWNvdmVyeV9zZXR0aW5ncyI6W119LHsic2VydmljZV9zZXR0aW5ncyI6W3sibmFtZSI6IkhJVkUiLCJjcmVkZW50aWFsX3N0b3JlX2VuYWJsZWQiOiJmYWxzZSJ9XX0seyJjb21wb25lbnRfc2V0dGluZ3MiOltdfV0sImNvbmZpZ3VyYXRpb25zIjpbeyJoaXZlLWludGVyYWN0aXZlLWVudiI6eyJlbmFibGVfaGl2ZV9pbnRlcmFjdGl2ZSI6InRydWUifX0seyJjb3JlLXNpdGUiOnsiZnMudHJhc2guaW50ZXJ2YWwiOiI0MzIwIn19LHsiaGRmcy1zaXRlIjp7ImRmcy5uYW1lbm9kZS5zYWZlbW9kZS50aHJlc2hvbGQtcGN0IjoiMC45OSJ9fSx7ImhpdmUtaW50ZXJhY3RpdmUtc2l0ZSI6eyJoaXZlLmV4ZWMub3JjLnNwbGl0LnN0cmF0ZWd5IjoiQkkiLCJoaXZlLnN0YXRzLmZldGNoLmJpdHZlY3RvciI6InRydWUiLCJoaXZlLm1ldGFzdG9yZS5yYXdzdG9yZS5pbXBsIjoib3JnLmFwYWNoZS5oYWRvb3AuaGl2ZS5tZXRhc3RvcmUuY2FjaGUuQ2FjaGVkU3RvcmUifX0seyJoaXZlLXNpdGUiOnsiaGl2ZS5leGVjLmNvbXByZXNzLm91dHB1dCI6InRydWUiLCJoaXZlLm1lcmdlLm1hcGZpbGVzIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50ZXouaW5pdGlhbGl6ZS5kZWZhdWx0LnNlc3Npb25zIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50cmFuc3BvcnQubW9kZSI6Imh0dHAifX0seyJtYXByZWQtc2l0ZSI6eyJtYXByZWR1Y2Uuam9iLnJlZHVjZS5zbG93c3RhcnQuY29tcGxldGVkbWFwcyI6IjAuNyIsIm1hcHJlZHVjZS5tYXAub3V0cHV0LmNvbXByZXNzIjoidHJ1ZSIsIm1hcHJlZHVjZS5vdXRwdXQuZmlsZW91dHB1dGZvcm1hdC5jb21wcmVzcyI6InRydWUifX0seyJ0ZXotc2l0ZSI6eyJ0ZXoucnVudGltZS5zaHVmZmxlLnBhcmFsbGVsLmNvcGllcyI6IjQiLCJ0ZXoucnVudGltZS5lbmFibGUuZmluYWwtbWVyZ2UuaW4ub3V0cHV0IjoiZmFsc2UiLCJ0ZXouYW0uYW0tcm0uaGVhcnRiZWF0LmludGVydmFsLW1zLm1heCI6IjIwMDAifX0seyJ5YXJuLXNpdGUiOnsieWFybi5hY2wuZW5hYmxlIjoidHJ1ZSJ9fV0sImhvc3RfZ3JvdXBzIjpbeyJuYW1lIjoibWFzdGVyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiQVBQX1RJTUVMSU5FX1NFUlZFUiJ9LHsibmFtZSI6IkhDQVQifSx7Im5hbWUiOiJIREZTX0NMSUVOVCJ9LHsibmFtZSI6IkhJU1RPUllTRVJWRVIifSx7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IkhJVkVfTUVUQVNUT1JFIn0seyJuYW1lIjoiSElWRV9TRVJWRVIifSx7Im5hbWUiOiJISVZFX1NFUlZFUl9JTlRFUkFDVElWRSJ9LHsibmFtZSI6IkpPVVJOQUxOT0RFIn0seyJuYW1lIjoiTElWWV9TRVJWRVIifSx7Im5hbWUiOiJNQVBSRURVQ0UyX0NMSUVOVCJ9LHsibmFtZSI6Ik1FVFJJQ1NfQ09MTEVDVE9SIn0seyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiTVlTUUxfU0VSVkVSIn0seyJuYW1lIjoiTkFNRU5PREUifSx7Im5hbWUiOiJQSUcifSx7Im5hbWUiOiJSRVNPVVJDRU1BTkFHRVIifSx7Im5hbWUiOiJTRUNPTkRBUllfTkFNRU5PREUifSx7Im5hbWUiOiJTTElERVIifSx7Im5hbWUiOiJTUEFSS19DTElFTlQifSx7Im5hbWUiOiJTUEFSS19KT0JISVNUT1JZU0VSVkVSIn0seyJuYW1lIjoiVEVaX0NMSUVOVCJ9LHsibmFtZSI6IldFQkhDQVRfU0VSVkVSIn0seyJuYW1lIjoiWUFSTl9DTElFTlQifSx7Im5hbWUiOiJaRVBQRUxJTl9NQVNURVIifSx7Im5hbWUiOiJaT09LRUVQRVJfQ0xJRU5UIn0seyJuYW1lIjoiWk9PS0VFUEVSX1NFUlZFUiJ9XSwiY2FyZGluYWxpdHkiOiIxIn0seyJuYW1lIjoid29ya2VyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiSElWRV9DTElFTlQifSx7Im5hbWUiOiJURVpfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUktfQ0xJRU5UIn0seyJuYW1lIjoiREFUQU5PREUifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9LHsibmFtZSI6ImNvbXB1dGUiLCJjb25maWd1cmF0aW9ucyI6W10sImNvbXBvbmVudHMiOlt7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IlRFWl9DTElFTlQifSx7Im5hbWUiOiJTUEFSS19DTElFTlQifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9XX0=","description":"EDW-Analytics: Apache Hive 2 LLAP, Apache Zeppelin 0.7.0","inputs":[],"name":"EDW-Analytics: Apache Hive 2 LLAP, Apache Zeppelin 0.7.0","id":3,"blueprintName":"hdp26-edw-analytics","hostGroupCount":3,"status":"DEFAULT","public":true},{"ambariBlueprint":"eyJCbHVlcHJpbnRzIjp7ImJsdWVwcmludF9uYW1lIjoiaGRwMjYtZXRsLWVkdyIsInN0YWNrX25hbWUiOiJIRFAiLCJzdGFja192ZXJzaW9uIjoiMi42In0sInNldHRpbmdzIjpbeyJyZWNvdmVyeV9zZXR0aW5ncyI6W119LHsic2VydmljZV9zZXR0aW5ncyI6W3sibmFtZSI6IkhJVkUiLCJjcmVkZW50aWFsX3N0b3JlX2VuYWJsZWQiOiJmYWxzZSJ9XX0seyJjb21wb25lbnRfc2V0dGluZ3MiOltdfV0sImNvbmZpZ3VyYXRpb25zIjpbeyJjb3JlLXNpdGUiOnsiZnMudHJhc2guaW50ZXJ2YWwiOiI0MzIwIn19LHsiaGRmcy1zaXRlIjp7ImRmcy5uYW1lbm9kZS5zYWZlbW9kZS50aHJlc2hvbGQtcGN0IjoiMC45OSJ9fSx7ImhpdmUtc2l0ZSI6eyJoaXZlLmV4ZWMuY29tcHJlc3Mub3V0cHV0IjoidHJ1ZSIsImhpdmUubWVyZ2UubWFwZmlsZXMiOiJ0cnVlIiwiaGl2ZS5zZXJ2ZXIyLnRlei5pbml0aWFsaXplLmRlZmF1bHQuc2Vzc2lvbnMiOiJ0cnVlIiwiaGl2ZS5zZXJ2ZXIyLnRyYW5zcG9ydC5tb2RlIjoiaHR0cCJ9fSx7Im1hcHJlZC1zaXRlIjp7Im1hcHJlZHVjZS5qb2IucmVkdWNlLnNsb3dzdGFydC5jb21wbGV0ZWRtYXBzIjoiMC43IiwibWFwcmVkdWNlLm1hcC5vdXRwdXQuY29tcHJlc3MiOiJ0cnVlIiwibWFwcmVkdWNlLm91dHB1dC5maWxlb3V0cHV0Zm9ybWF0LmNvbXByZXNzIjoidHJ1ZSJ9fSx7Inlhcm4tc2l0ZSI6eyJ5YXJuLmFjbC5lbmFibGUiOiJ0cnVlIn19LHsiZHJ1aWQtY29tbW9uIjp7InByb3BlcnRpZXNfYXR0cmlidXRlcyI6e30sInByb3BlcnRpZXMiOnsiZHJ1aWQubWV0YWRhdGEuc3RvcmFnZS50eXBlIjoiZGVyYnkiLCJkcnVpZC5tZXRhZGF0YS5zdG9yYWdlLmNvbm5lY3Rvci5jb25uZWN0VVJJIjoiamRiYzpkZXJieTovL2xvY2FsaG9zdDoxNTI3L2RydWlkO2NyZWF0ZT10cnVlIiwiZHJ1aWQuZXh0ZW5zaW9ucy5sb2FkTGlzdCI6IltcInBvc3RncmVzcWwtbWV0YWRhdGEtc3RvcmFnZVwiLCBcImRydWlkLXMzLWV4dGVuc2lvbnNcIl0iLCJkcnVpZC5zZWxlY3RvcnMuaW5kZXhpbmcuc2VydmljZU5hbWUiOiJkcnVpZC9vdmVybG9yZCJ9fX0seyJkcnVpZC1zdXBlcnNldCI6eyJwcm9wZXJ0aWVzX2F0dHJpYnV0ZXMiOnt9LCJwcm9wZXJ0aWVzIjp7IlNFQ1JFVF9LRVkiOiIxMjNhZG1pbjEyMyIsIlNVUEVSU0VUX0RBVEFCQVNFX1RZUEUiOiJzcWxpdGUifX19LHsiZHJ1aWQtb3ZlcmxvcmQiOnsicHJvcGVydGllc19hdHRyaWJ1dGVzIjp7fSwicHJvcGVydGllcyI6eyJkcnVpZC5pbmRleGVyLnN0b3JhZ2UudHlwZSI6Im1ldGFkYXRhIiwiZHJ1aWQuaW5kZXhlci5ydW5uZXIudHlwZSI6InJlbW90ZSIsImRydWlkLnNlcnZpY2UiOiJkcnVpZC9vdmVybG9yZCIsImRydWlkLnBvcnQiOiI4MDkwIn19fSx7ImRydWlkLW1pZGRsZW1hbmFnZXIiOnsicHJvcGVydGllc19hdHRyaWJ1dGVzIjp7fSwicHJvcGVydGllcyI6eyJkcnVpZC5pbmRleGVyLnRhc2suaGFkb29wV29ya2luZ1BhdGgiOiIvdG1wL2RydWlkLWluZGV4aW5nIiwiZHJ1aWQuc2VydmVyLmh0dHAubnVtVGhyZWFkcyI6IjUwIiwiZHJ1aWQuaW5kZXhlci5ydW5uZXIuc3RhcnRQb3J0IjoiODEwMCIsImRydWlkLndvcmtlci5jYXBhY2l0eSI6IjMiLCJkcnVpZC5wcm9jZXNzaW5nLm51bVRocmVhZHMiOiIyIiwiZHJ1aWQuaW5kZXhlci5ydW5uZXIuamF2YU9wdHMiOiItc2VydmVyIC1YbXgyZyAtRHVzZXIudGltZXpvbmU9VVRDIC1EZmlsZS5lbmNvZGluZz1VVEYtOCAtRGphdmEudXRpbC5sb2dnaW5nLm1hbmFnZXI9b3JnLmFwYWNoZS5sb2dnaW5nLmxvZzRqLmp1bC5Mb2dNYW5hZ2VyIC1EaGRwLnZlcnNpb249e3tzdGFja192ZXJzaW9ufX0gLURoYWRvb3AubWFwcmVkdWNlLmpvYi5jbGFzc2xvYWRlcj10cnVlIiwiZHJ1aWQuaW5kZXhlci50YXNrLmJhc2VUYXNrRGlyIjoiL3RtcC9wZXJzaXN0ZW50L3Rhc2tzIiwiZHJ1aWQucHJvY2Vzc2luZy5idWZmZXIuc2l6ZUJ5dGVzIjoiMjU2MDAwMDAwIiwiZHJ1aWQuc2VydmljZSI6ImRydWlkL21pZGRsZW1hbmFnZXIiLCJkcnVpZC5wb3J0IjoiODA5MSJ9fX1dLCJob3N0X2dyb3VwcyI6W3sibmFtZSI6Im1hc3RlciIsImNvbmZpZ3VyYXRpb25zIjpbXSwiY29tcG9uZW50cyI6W3sibmFtZSI6IkFQUF9USU1FTElORV9TRVJWRVIifSx7Im5hbWUiOiJIQ0FUIn0seyJuYW1lIjoiSERGU19DTElFTlQifSx7Im5hbWUiOiJISVNUT1JZU0VSVkVSIn0seyJuYW1lIjoiSElWRV9DTElFTlQifSx7Im5hbWUiOiJISVZFX01FVEFTVE9SRSJ9LHsibmFtZSI6IkhJVkVfU0VSVkVSIn0seyJuYW1lIjoiSk9VUk5BTE5PREUifSx7Im5hbWUiOiJMSVZZX1NFUlZFUiJ9LHsibmFtZSI6Ik1BUFJFRFVDRTJfQ0xJRU5UIn0seyJuYW1lIjoiTUVUUklDU19DT0xMRUNUT1IifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJNWVNRTF9TRVJWRVIifSx7Im5hbWUiOiJOQU1FTk9ERSJ9LHsibmFtZSI6IlBJRyJ9LHsibmFtZSI6IlJFU09VUkNFTUFOQUdFUiJ9LHsibmFtZSI6IlNFQ09OREFSWV9OQU1FTk9ERSJ9LHsibmFtZSI6IlNQQVJLX0NMSUVOVCJ9LHsibmFtZSI6IlNQQVJLX0pPQkhJU1RPUllTRVJWRVIifSx7Im5hbWUiOiJTUU9PUCJ9LHsibmFtZSI6IlRFWl9DTElFTlQifSx7Im5hbWUiOiJXRUJIQ0FUX1NFUlZFUiJ9LHsibmFtZSI6IllBUk5fQ0xJRU5UIn0seyJuYW1lIjoiWk9PS0VFUEVSX0NMSUVOVCJ9LHsibmFtZSI6IlpPT0tFRVBFUl9TRVJWRVIifSx7Im5hbWUiOiJEUlVJRF9PVkVSTE9SRCIsInByb3Zpc2lvbl9hY3Rpb24iOiJJTlNUQUxMX09OTFkifSx7Im5hbWUiOiJEUlVJRF9DT09SRElOQVRPUiIsInByb3Zpc2lvbl9hY3Rpb24iOiJJTlNUQUxMX09OTFkifSx7Im5hbWUiOiJEUlVJRF9ST1VURVIiLCJwcm92aXNpb25fYWN0aW9uIjoiSU5TVEFMTF9PTkxZIn0seyJuYW1lIjoiRFJVSURfQlJPS0VSIiwicHJvdmlzaW9uX2FjdGlvbiI6IklOU1RBTExfT05MWSJ9LHsibmFtZSI6IkRSVUlEX1NVUEVSU0VUIiwicHJvdmlzaW9uX2FjdGlvbiI6IklOU1RBTExfT05MWSJ9XSwiY2FyZGluYWxpdHkiOiIxIn0seyJuYW1lIjoid29ya2VyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiSElWRV9DTElFTlQifSx7Im5hbWUiOiJURVpfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUktfQ0xJRU5UIn0seyJuYW1lIjoiREFUQU5PREUifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9LHsibmFtZSI6IkRSVUlEX01JRERMRU1BTkFHRVIiLCJwcm92aXNpb25fYWN0aW9uIjoiSU5TVEFMTF9PTkxZIn0seyJuYW1lIjoiRFJVSURfSElTVE9SSUNBTCIsInByb3Zpc2lvbl9hY3Rpb24iOiJJTlNUQUxMX09OTFkifV0sImNhcmRpbmFsaXR5IjoiMSsifSx7Im5hbWUiOiJjb21wdXRlIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiSElWRV9DTElFTlQifSx7Im5hbWUiOiJURVpfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUktfQ0xJRU5UIn0seyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiTk9ERU1BTkFHRVIifV0sImNhcmRpbmFsaXR5IjoiMSsifV19","description":"EDW-ETL: Apache Hive 1.2.1, Apache Spark 1.6","inputs":[],"name":"EDW-ETL: Apache Hive 1.2.1, Apache Spark 1.6","id":2,"blueprintName":"hdp26-etl-edw","hostGroupCount":3,"status":"DEFAULT","public":true},{"ambariBlueprint":"eyJCbHVlcHJpbnRzIjp7ImJsdWVwcmludF9uYW1lIjoiaGRwMjYtZXRsLWVkdy1zcGFyazIiLCJzdGFja19uYW1lIjoiSERQIiwic3RhY2tfdmVyc2lvbiI6IjIuNiJ9LCJzZXR0aW5ncyI6W3sicmVjb3Zlcnlfc2V0dGluZ3MiOltdfSx7InNlcnZpY2Vfc2V0dGluZ3MiOlt7Im5hbWUiOiJISVZFIiwiY3JlZGVudGlhbF9zdG9yZV9lbmFibGVkIjoiZmFsc2UifV19LHsiY29tcG9uZW50X3NldHRpbmdzIjpbXX1dLCJjb25maWd1cmF0aW9ucyI6W3siY29yZS1zaXRlIjp7ImZzLnRyYXNoLmludGVydmFsIjoiNDMyMCJ9fSx7ImhkZnMtc2l0ZSI6eyJkZnMubmFtZW5vZGUuc2FmZW1vZGUudGhyZXNob2xkLXBjdCI6IjAuOTkifX0seyJoaXZlLXNpdGUiOnsiaGl2ZS5leGVjLmNvbXByZXNzLm91dHB1dCI6InRydWUiLCJoaXZlLm1lcmdlLm1hcGZpbGVzIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50ZXouaW5pdGlhbGl6ZS5kZWZhdWx0LnNlc3Npb25zIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50cmFuc3BvcnQubW9kZSI6Imh0dHAifX0seyJtYXByZWQtc2l0ZSI6eyJtYXByZWR1Y2Uuam9iLnJlZHVjZS5zbG93c3RhcnQuY29tcGxldGVkbWFwcyI6IjAuNyIsIm1hcHJlZHVjZS5tYXAub3V0cHV0LmNvbXByZXNzIjoidHJ1ZSIsIm1hcHJlZHVjZS5vdXRwdXQuZmlsZW91dHB1dGZvcm1hdC5jb21wcmVzcyI6InRydWUifX0seyJ5YXJuLXNpdGUiOnsieWFybi5hY2wuZW5hYmxlIjoidHJ1ZSJ9fV0sImhvc3RfZ3JvdXBzIjpbeyJuYW1lIjoibWFzdGVyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiQVBQX1RJTUVMSU5FX1NFUlZFUiJ9LHsibmFtZSI6IkhDQVQifSx7Im5hbWUiOiJIREZTX0NMSUVOVCJ9LHsibmFtZSI6IkhJU1RPUllTRVJWRVIifSx7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IkhJVkVfTUVUQVNUT1JFIn0seyJuYW1lIjoiSElWRV9TRVJWRVIifSx7Im5hbWUiOiJKT1VSTkFMTk9ERSJ9LHsibmFtZSI6Ik1BUFJFRFVDRTJfQ0xJRU5UIn0seyJuYW1lIjoiTUVUUklDU19DT0xMRUNUT1IifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJNWVNRTF9TRVJWRVIifSx7Im5hbWUiOiJOQU1FTk9ERSJ9LHsibmFtZSI6IlBJRyJ9LHsibmFtZSI6IlJFU09VUkNFTUFOQUdFUiJ9LHsibmFtZSI6IlNFQ09OREFSWV9OQU1FTk9ERSJ9LHsibmFtZSI6IlNQQVJLMl9DTElFTlQifSx7Im5hbWUiOiJTUEFSSzJfSk9CSElTVE9SWVNFUlZFUiJ9LHsibmFtZSI6IlRFWl9DTElFTlQifSx7Im5hbWUiOiJXRUJIQ0FUX1NFUlZFUiJ9LHsibmFtZSI6IllBUk5fQ0xJRU5UIn0seyJuYW1lIjoiWk9PS0VFUEVSX0NMSUVOVCJ9LHsibmFtZSI6IlpPT0tFRVBFUl9TRVJWRVIifV0sImNhcmRpbmFsaXR5IjoiMSJ9LHsibmFtZSI6IndvcmtlciIsImNvbmZpZ3VyYXRpb25zIjpbXSwiY29tcG9uZW50cyI6W3sibmFtZSI6IkhJVkVfQ0xJRU5UIn0seyJuYW1lIjoiVEVaX0NMSUVOVCJ9LHsibmFtZSI6IlNQQVJLMl9DTElFTlQifSx7Im5hbWUiOiJEQVRBTk9ERSJ9LHsibmFtZSI6Ik1FVFJJQ1NfTU9OSVRPUiJ9LHsibmFtZSI6Ik5PREVNQU5BR0VSIn1dLCJjYXJkaW5hbGl0eSI6IjErIn0seyJuYW1lIjoiY29tcHV0ZSIsImNvbmZpZ3VyYXRpb25zIjpbXSwiY29tcG9uZW50cyI6W3sibmFtZSI6IkhJVkVfQ0xJRU5UIn0seyJuYW1lIjoiVEVaX0NMSUVOVCJ9LHsibmFtZSI6IlNQQVJLMl9DTElFTlQifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9XX0=","description":"EDW-ETL: Apache Hive 1.2.1, Apache Spark 2.1","inputs":[],"name":"EDW-ETL: Apache Hive 1.2.1, Apache Spark 2.1","id":1,"blueprintName":"hdp26-etl-edw-spark2","hostGroupCount":3,"status":"DEFAULT","public":true}];

/*[ {
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
} ];*/
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

