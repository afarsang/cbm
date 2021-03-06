'use strict';

exports.getRegionsByCredentialId = function(args, res, next) {
  /**
   * retrive regions by type
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * body PlatformResourceRequestJson  (optional)
   * returns RegionResponse
   **/
  var examples = {};
  examples['application/json'] = {"regions":["RegionOne"],"displayNames":{"RegionOne":"RegionOne"},"availabilityZones":{"RegionOne":["nova","hw-re","LRI"]},"defaultRegion":"RegionOne"}
  /*
  {
  "regions" : [ "aeiou" ],
  "displayNames" : {
    "key" : "aeiou"
  },
  "defaultRegion" : "aeiou",
  "availabilityZones" : {
    "key" : [ "aeiou" ]
  }
};
*/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getVmTypesByCredentialId = function(args, res, next) {
  /**
   * retrive vmtype properties by credential
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * body PlatformResourceRequestJson  (optional)
   * returns PlatformVmtypesResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "vmTypes" : {
    "key" : {
      "defaultVirtualMachine" : "",
      "virtualMachines" : [ {
        "vmTypeMetaJson" : {
          "configs" : [ {
            "volumeParameterType" : "aeiou",
            "minimumSize" : 123,
            "maximumNumber" : 123,
            "maximumSize" : 123,
            "minimumNumber" : 123
          } ],
          "properties" : {
            "key" : "aeiou"
          }
        },
        "value" : "aeiou"
      } ]
    }
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

