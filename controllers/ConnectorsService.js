'use strict';

exports.getDisktypeByType = function(args, res, next) {
  /**
   * retrive disks by type
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * type String 
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getDisktypes = function(args, res, next) {
  /**
   * retrive available disk types
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * returns PlatformDisksJson
   **/
  var examples = {};
  /*
  examples['application/json'] = {
  "displayNames" : {
    "key" : {
      "key" : "aeiou"
    }
  },
  "defaultDisks" : {
    "key" : "aeiou"
  },
  "diskMappings" : {
    "key" : {
      "key" : "aeiou"
    }
  },
  "diskTypes" : {
    "key" : [ "aeiou" ]
  }
};
*/
  examples['application/json'] = {"diskTypes":{"AZURE":["Standard_LRS","Standard_GRS","Premium_LRS"],"OPENSTACK":[],"BYOS":[],"GCP":["pd-ssd","pd-standard"],"AWS":["standard","ephemeral","gp2","st1"],"MOCK":["magnetic","ssd","ephemeral"]},"defaultDisks":{"AZURE":"Standard_LRS","OPENSTACK":"HDD","BYOS":"","GCP":"pd-standard","AWS":"standard","MOCK":"magnetic"},"diskMappings":{"AZURE":{"Standard_LRS":"MAGNETIC","Premium_LRS":"MAGNETIC","Standard_GRS":"MAGNETIC"},"OPENSTACK":{"HDD":"MAGNETIC"},"BYOS":{},"GCP":{"pd-standard":"MAGNETIC","pd-ssd":"SSD"},"AWS":{"standard":"MAGNETIC","st1":"ST1","gp2":"SSD","ephemeral":"EPHEMERAL"},"MOCK":{"ssd":"SSD","magnetic":"MAGNETIC","ephemeral":"EPHEMERAL"}},"displayNames":{"AZURE":{"Standard_LRS":"Locally-redundant storage","Premium_LRS":"Premium locally-redundant storage","Standard_GRS":"Geo-redundant storage"},"OPENSTACK":{},"BYOS":{},"GCP":{"pd-standard":"Standard persistent disks (HDD)","pd-ssd":"Solid-state persistent disks (SSD)"},"AWS":{"standard":"Magnetic","st1":"Throughput Optimized HDD","gp2":"General Purpose (SSD)","ephemeral":"Ephemeral"},"MOCK":{}}};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getImages = function(args, res, next) {
  /**
   * retrive available images
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * returns PlatformImagesJson
   **/
  var examples = {};
  examples['application/json'] = {
  "imagesRegex" : {
    "key" : "aeiou"
  },
  "images" : {
    "key" : {
      "key" : "aeiou"
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

exports.getImagesByType = function(args, res, next) {
  /**
   * retrive images by type
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * type String 
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {
  "key" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getOchestratorsByType = function(args, res, next) {
  /**
   * retrive orchestrators by type
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * type String 
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getOrchestratortypes = function(args, res, next) {
  /**
   * retrive available orchestrator types
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * returns PlatformOrchestratorsJson
   **/
  var examples = {};
  examples['application/json'] = {
  "defaults" : {
    "key" : "aeiou"
  },
  "orchestrators" : {
    "key" : [ "aeiou" ]
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPlatformNetworks = function(args, res, next) {
  /**
   * retrive network properties
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * body PlatformResourceRequestJson  (optional)
   * returns Map
   **/
  var examples = {};
  /*
  examples['application/json'] = {
  "key" : [ {
    "name" : "aeiou",
    "subnets" : {
      "key" : "aeiou"
    },
    "id" : "aeiou",
    "properties" : {
      "key" : "{}"
    }
  } ]
};
*/
  examples['application/json'] = {"RegionOne":[{"name":"PROVIDER_NET_172.22.64.0/18","id":"a5ad7a1d-d3a6-4180-8d61-07a23f6fb449","subnets":{"0404bf21-db5f-4987-8576-e65a4a99b14e":"PROVIDER_SUBNET_172.22.64.0/18"},"properties":{"providerPhyNet":null,"providerSegID":null,"tenantId":"e68fc02fc33c497385a96b3d8b9e8b16","networkType":null}}]};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPlatformSShKeys = function(args, res, next) {
  /**
   * retrive sshkeys properties
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * body PlatformResourceRequestJson  (optional)
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {
  "key" : [ {
    "name" : "aeiou",
    "properties" : {
      "key" : "{}"
    }
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPlatformSecurityGroups = function(args, res, next) {
  /**
   * retrive securitygroups properties
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * body PlatformResourceRequestJson  (optional)
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {
  "RegionOne" : [ {
    "groupName" : "aeiou",
    "groupId" : "aeiou",
    "properties" : {
      "key" : "{}"
    }
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPlatformVariantByType = function(args, res, next) {
  /**
   * retrive a platform variant by type
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * type String 
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPlatformVariants = function(args, res, next) {
  /**
   * retrive available platform variants
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * returns PlatformVariantsJson
   **/
  var examples = {};
  examples['application/json'] = {
  "platformToVariants" : {
    "key" : [ "aeiou" ]
  },
  "defaultVariants" : {
    "key" : "aeiou"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPlatforms = function(args, res, next) {
  /**
   * retrive available platforms
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * extended Boolean  (optional)
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {
  "key" : { }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getRegionAvByType = function(args, res, next) {
  /**
   * retrive availability zones by type
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * type String 
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {
  "key" : [ "aeiou" ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getRegionRByType = function(args, res, next) {
  /**
   * retrive regions by type
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * type String 
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getRegions = function(args, res, next) {
  /**
   * retrive available regions
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * returns PlatformRegionsJson
   **/
  var examples = {};
  /*
  examples['application/json'] = {
  "regions" : {
    "key" : [ "aeiou" ]
  },
  "displayNames" : {
    "key" : {
      "key" : "aeiou"
    }
  },
  "availabilityZones" : {
    "key" : {
      "key" : [ "aeiou" ]
    }
  },
  "defaultRegions" : {
    "key" : "aeiou"
  }
};
*/
  examples['application/json'] = {"regions":{"AZURE":["West US 2","West US","West India","West Europe","West Central US","UK West","UK South","Southeast Asia","South India","South Central US","North Europe","North Central US","Korea South","Korea Central","Japan West","Japan East","East US 2","East US","East Asia","Central US","Central India","Canada East","Canada Central","Brazil South","Australia South East","Australia East"],"OPENSTACK":["RegionOne"],"BYOS":["Local"],"GCP":["us-east1","us-central1","europe-west1","asia-east1"],"AWS":["us-west-2","us-west-1","us-east-1","sa-east-1","eu-west-1","eu-central-1","ap-southeast-2","ap-southeast-1","ap-northeast-2","ap-northeast-1"],"MOCK":["USA","Europe"]},"displayNames":{"AZURE":{"UK West":"UK West","Japan West":"Japan West","West US 2":"West US 2","West India":"West India","Australia East":"Australia East","East Asia":"East Asia","South India":"South India","Canada East":"Canada East","Korea Central":"Korea Central","Southeast Asia":"Southeast Asia","Korea South":"Korea South","Central US":"Central US","South Central US":"South Central US","Japan East":"Japan East","West Europe":"West Europe","West Central US":"West Central US","East US":"East US","East US 2":"East US 2","Central India":"Central India","Australia South East":"Australia South East","Brazil South":"Brazil South","West US":"West US","North Central US":"North Central US","Canada Central":"Canada Central","UK South":"UK South","North Europe":"North Europe"},"OPENSTACK":{},"BYOS":{},"GCP":{"asia-east1":"East Asia","us-east1":"Eastern US","us-central1":"Central US","europe-west1":"Western Europe"},"AWS":{"eu-west-1":"EU (Ireland)","ap-southeast-1":"Asia Pacific (Singapore)","ap-southeast-2":"Asia Pacific (Sydney)","eu-central-1":"EU (Frankfurt)","ap-northeast-2":"Asia Pacific (Seoul)","ap-northeast-1":"Asia Pacific (Tokyo)","us-east-1":"US East(N. Virginia)","us-west-1":"US West (N. California)","sa-east-1":"South America (São Paulo)","us-west-2":"US West (Oregon)"},"MOCK":{}},"availabilityZones":{"AZURE":{"UK West":["UK West"],"Japan West":["Japan West"],"West US 2":["West US 2"],"West India":["West India"],"Australia East":["Australia East"],"East Asia":["East Asia"],"South India":["South India"],"Canada East":["Canada East"],"Korea Central":["Korea Central"],"Southeast Asia":["Southeast Asia"],"Korea South":["Korea South"],"Central US":["Central US"],"South Central US":["South Central US"],"Japan East":["Japan East"],"West Europe":["West Europe"],"West Central US":["West Central US"],"East US":["East US"],"East US 2":["East US 2"],"Central India":["Central India"],"Australia South East":["Australia South East"],"Brazil South":["Brazil South"],"West US":["West US"],"North Central US":["North Central US"],"Canada Central":["Canada Central"],"UK South":["UK South"],"North Europe":["North Europe"]},"OPENSTACK":{"RegionOne":["nova"]},"BYOS":{"Local":["local"]},"GCP":{"asia-east1":["asia-east1-a","asia-east1-b","asia-east1-c"],"us-east1":["us-east1-b","us-east1-c","us-east1-d"],"us-central1":["us-central1-a","us-central1-b","us-central1-c","us-central1-f"],"europe-west1":["europe-west1-b","europe-west1-c","europe-west1-d"]},"AWS":{"eu-west-1":["eu-west-1a","eu-west-1b","eu-west-1c"],"ap-southeast-1":["ap-southeast-1a","ap-southeast-1b"],"ap-southeast-2":["ap-southeast-2a","ap-southeast-2b"],"eu-central-1":["eu-central-1a","eu-central-1b"],"ap-northeast-2":["ap-northeast-2a","ap-northeast-2c"],"ap-northeast-1":["ap-northeast-1a","ap-northeast-1c"],"us-east-1":["us-east-1a","us-east-1b","us-east-1d","us-east-1e"],"us-west-1":["us-west-1a","us-west-1b"],"sa-east-1":["sa-east-1a","sa-east-1b","sa-east-1c"],"us-west-2":["us-west-2a","us-west-2b","us-west-2c"]},"MOCK":{"USA":["usa-a","usa-b","usa-c"],"Europe":["europe-a","europe-b"]}},"defaultRegions":{"AZURE":"North Europe","OPENSTACK":"RegionOne","BYOS":"Local","GCP":"europe-west1","AWS":"eu-central-1","MOCK":"USA"}};
  
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getSpecialProperties = function(args, res, next) {
  /**
   * retrive special properties
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {
  "key" : true
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getTagSpecifications = function(args, res, next) {
  /**
   * retrive tag specifications
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * returns TagSpecificationsJson
   **/
  var examples = {};
  examples['application/json'] = {
  "specifications" : {
    "key" : {
      "key" : "{}"
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

exports.getVmTypeByType = function(args, res, next) {
  /**
   * retrive vm types by type
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * type String 
   * extended Boolean  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
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
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getVmTypes = function(args, res, next) {
  /**
   * retrive available vm types
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * extended Boolean  (optional)
   * returns PlatformVirtualMachinesJson
   **/
  var examples = {};
  examples['application/json'] = {
  "defaultVmTypePerZones" : {
    "key" : {
      "key" : "aeiou"
    }
  },
  "defaultVirtualMachines" : {
    "key" : "aeiou"
  },
  "virtualMachines" : {
    "key" : [ {
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
  },
  "vmTypesPerZones" : {
    "key" : {
      "key" : [ "" ]
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

