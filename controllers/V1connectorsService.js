'use strict';

exports.createRecommendation = function(args, res, next) {
  /**
   * creates a recommendation that advises cloud resources for the given blueprint
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * body RecommendationRequestJson  (optional)
   * returns RecommendationResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "virtualMachines" : [ "" ],
  "recommendations" : {
    "key" : {
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
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getGatewaysCredentialId = function(args, res, next) {
  /**
   * retrive gateways with properties
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * body PlatformResourceRequestJson  (optional)
   * returns PlatformGatewaysResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "gateways" : {
    "key" : [ {
      "name" : "aeiou",
      "id" : "aeiou",
      "properties" : {
        "key" : "{}"
      }
    } ]
  }
};
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

exports.getIpPoolsCredentialId = function(args, res, next) {
  /**
   * retrive ip pools with properties
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * body PlatformResourceRequestJson  (optional)
   * returns PlatformIpPoolsResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "ippools" : {
    "key" : [ {
      "name" : "aeiou",
      "id" : "aeiou",
      "properties" : {
        "key" : "{}"
      }
    } ]
  }
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
  "key" : [ {
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
  "key" : "{}"
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
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getRegionsByCredentialId = function(args, res, next) {
  /**
   * retrive regions by type
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * body PlatformResourceRequestJson  (optional)
   * returns RegionResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "regions" : [ "aeiou" ],
  "displayNames" : {
    "key" : "aeiou"
  },
  "defaultRegion" : "aeiou",
  "availabilityZones" : {
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

exports.getVmTypesByType = function(args, res, next) {
  /**
   * retrive available vm types
   * Each cloud provider has it's own specific resources like instance types and disk types. These endpoints are collecting them.
   *
   * type String 
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

