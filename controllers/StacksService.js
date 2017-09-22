'use strict';

exports.deleteInstanceStack = function(args, res, next) {
  /**
   * delete instance resource from stack
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * stackId Long 
   * instanceId String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.deletePrivateStack = function(args, res, next) {
  /**
   * delete private stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * forced Boolean  (optional)
   * deleteDependencies Boolean  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.deletePublicStack = function(args, res, next) {
  /**
   * delete public (owned) or private stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * forced Boolean  (optional)
   * deleteDependencies Boolean  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.deleteStack = function(args, res, next) {
  /**
   * delete stack by id
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * id Long 
   * forced Boolean  (optional)
   * deleteDependencies Boolean  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.getAllStack = function(args, res, next) {
  /**
   * retrieve all stacks
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "owner" : "aeiou",
  "password" : "aeiou",
  "ambariServerIp" : "aeiou",
  "created" : 123456789,
  "stackId" : 123456789,
  "name" : "aeiou",
  "userName" : "aeiou",
  "account" : "aeiou",
  "gatewayPort" : 123,
  "clusterStatus" : "aeiou",
  "status" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getCertificateStack = function(args, res, next) {
  /**
   * retrieves the TLS certificate used by the gateway
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * id Long 
   * returns CertificateResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "clientCert" : [ "" ],
  "serverCert" : [ "" ],
  "clientKey" : [ "" ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPrivateStack = function(args, res, next) {
  /**
   * retrieve a private stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * entry List  (optional)
   * returns StackResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "cluster" : {
    "cluster" : "aeiou",
    "ambariRepoDetailsJson" : {
      "baseUrl" : "aeiou",
      "version" : "aeiou",
      "gpgKeyUrl" : "aeiou"
    },
    "hostGroups" : [ {
      "recipes" : [ {
        "recipeType" : "aeiou",
        "public" : true,
        "name" : "aeiou",
        "description" : "aeiou",
        "id" : 123456789,
        "uri" : "aeiou",
        "content" : "aeiou"
      } ],
      "metadata" : [ {
        "groupName" : "aeiou",
        "name" : "aeiou",
        "id" : 123456789,
        "state" : "aeiou"
      } ],
      "recipeIds" : [ 123456789 ],
      "recoveryMode" : "aeiou",
      "name" : "aeiou",
      "constraint" : {
        "hostCount" : 123,
        "constraintTemplateName" : "aeiou",
        "instanceGroupName" : "aeiou"
      },
      "id" : 123456789
    } ],
    "ambariServerIp" : "aeiou",
    "ambariServerUrl" : "aeiou",
    "description" : "aeiou",
    "secure" : true,
    "configStrategy" : "aeiou",
    "hoursUp" : 123,
    "serviceEndPoints" : {
      "key" : "aeiou"
    },
    "statusReason" : "aeiou",
    "ambariStackDetails" : {
      "utilsBaseURL" : "aeiou",
      "stack" : "aeiou",
      "os" : "aeiou",
      "stackRepoId" : "aeiou",
      "utilsRepoId" : "aeiou",
      "verify" : true,
      "version" : "aeiou",
      "stackBaseURL" : "aeiou"
    },
    "ldapConfigId" : 123456789,
    "blueprintInputs" : [ {
      "name" : "aeiou",
      "propertyValue" : "aeiou"
    } ],
    "ambariDatabaseDetails" : {
      "password" : "aeiou",
      "port" : 123,
      "vendor" : "aeiou",
      "name" : "aeiou",
      "host" : "aeiou",
      "userName" : "aeiou"
    },
    "id" : 123456789,
    "blueprintCustomProperties" : "aeiou",
    "executorType" : "aeiou",
    "customQueue" : "aeiou",
    "userName" : "aeiou",
    "blueprintId" : 123456789,
    "ldapConfig" : {
      "groupNameAttribute" : "aeiou",
      "groupMemberAttribute" : "aeiou",
      "description" : "aeiou",
      "userNameAttribute" : "aeiou",
      "serverPort" : 123,
      "serverHost" : "aeiou",
      "directoryType" : "aeiou",
      "bindDn" : "aeiou",
      "protocol" : "aeiou",
      "groupSearchBase" : "aeiou",
      "userSearchBase" : "aeiou",
      "public" : true,
      "domain" : "aeiou",
      "name" : "aeiou",
      "id" : 123456789,
      "userObjectClass" : "aeiou",
      "groupObjectClass" : "aeiou"
    },
    "blueprint" : {
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
    },
    "rdsConfigs" : [ {
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
    } ],
    "customContainers" : {
      "definitions" : {
        "key" : "aeiou"
      }
    },
    "name" : "aeiou",
    "attributes" : {
      "key" : "{}"
    },
    "rdsConfigIds" : [ 123456789 ],
    "gateway" : {
      "path" : "aeiou",
      "topologyName" : "aeiou",
      "gatewayType" : "aeiou",
      "ssoProvider" : "aeiou",
      "enableGateway" : true,
      "signCert" : "aeiou",
      "ssoType" : "aeiou",
      "signPub" : "aeiou",
      "exposedServices" : [ "aeiou" ]
    },
    "status" : "aeiou",
    "minutesUp" : 123
  },
  "hdpVersion" : "aeiou",
  "cloudbreakEvents" : [ {
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
  } ],
  "platformVariant" : "aeiou",
  "customHostname" : "aeiou",
  "userDefinedTags" : {
    "key" : "aeiou"
  },
  "flexSubscription" : {
    "owner" : "aeiou",
    "default" : true,
    "publicInAccount" : true,
    "smartSenseSubscriptionId" : 123456789,
    "usedForController" : true,
    "name" : "aeiou",
    "smartSenseSubscription" : {
      "owner" : "aeiou",
      "publicInAccount" : true,
      "id" : 123456789,
      "autoGenerated" : true,
      "subscriptionId" : "aeiou",
      "account" : "aeiou"
    },
    "id" : 123456789,
    "subscriptionId" : "aeiou",
    "account" : "aeiou"
  },
  "publicKey" : "aeiou",
  "availabilityZone" : "aeiou",
  "defaultTags" : {
    "key" : "aeiou"
  },
  "network" : {
    "subnetCIDR" : "aeiou",
    "cloudPlatform" : "aeiou",
    "publicInAccount" : true,
    "topologyId" : 123456789,
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "hostgroupNameAsHostname" : true,
  "onFailureAction" : "aeiou",
  "statusReason" : "aeiou",
  "credential" : {
    "cloudPlatform" : "aeiou",
    "public" : true,
    "name" : "aeiou",
    "topologyId" : 123456789,
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "public" : true,
  "networkId" : 123456789,
  "nodeCount" : 123,
  "clusterNameAsSubdomain" : true,
  "id" : 123456789,
  "failurePolicy" : {
    "adjustmentType" : "aeiou",
    "threshold" : 123456789,
    "id" : 123456789
  },
  "owner" : "aeiou",
  "applicationTags" : {
    "key" : "aeiou"
  },
  "image" : {
    "imageName" : "aeiou"
  },
  "cloudbreakDetails" : {
    "version" : "aeiou"
  },
  "cloudPlatform" : "aeiou",
  "created" : 123456789,
  "customDomain" : "aeiou",
  "gatewayPort" : 123,
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
  "loginUserName" : "aeiou",
  "instanceGroups" : [ {
    "securityGroupId" : 123456789,
    "template" : {
      "volumeType" : "aeiou",
      "cloudPlatform" : "aeiou",
      "public" : true,
      "instanceType" : "aeiou",
      "topologyId" : 123456789,
      "name" : "aeiou",
      "description" : "aeiou",
      "volumeCount" : 123,
      "id" : 123456789,
      "parameters" : {
        "key" : "{}"
      },
      "volumeSize" : 123
    },
    "metadata" : [ {
      "sshPort" : 123,
      "instanceId" : "aeiou",
      "ambariServer" : true,
      "privateIp" : "aeiou",
      "instanceType" : "aeiou",
      "discoveryFQDN" : "aeiou",
      "publicIp" : "aeiou",
      "instanceGroup" : "aeiou",
      "instanceStatus" : "aeiou"
    } ],
    "nodeCount" : 123,
    "securityGroup" : {
      "securityGroupId" : "aeiou",
      "owner" : "aeiou",
      "cloudPlatform" : "aeiou",
      "publicInAccount" : true,
      "securityRules" : [ {
        "subnet" : "aeiou",
        "protocol" : "aeiou",
        "id" : 123456789,
        "ports" : "aeiou",
        "modifiable" : true
      } ],
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : 123456789,
      "account" : "aeiou"
    },
    "id" : 123456789,
    "templateId" : 123456789,
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    },
    "group" : "aeiou"
  } ],
  "hardwareInfos" : [ {
    "instanceMetaData" : "",
    "hostMetadata" : ""
  } ],
  "name" : "aeiou",
  "credentialId" : 123456789,
  "cloudbreakUsages" : [ {
    "owner" : "aeiou",
    "costs" : 1.3579000000000001069366817318950779736042022705078125,
    "instanceNum" : 123,
    "blueprintName" : "aeiou",
    "stackId" : 123456789,
    "instanceType" : "aeiou",
    "instanceHours" : 123456789,
    "stackName" : "aeiou",
    "peak" : 123,
    "instanceGroup" : "aeiou",
    "availabilityZone" : "aeiou",
    "blueprintId" : 123456789,
    "duration" : "aeiou",
    "provider" : "aeiou",
    "flexId" : "aeiou",
    "region" : "aeiou",
    "day" : "aeiou",
    "stackUuid" : "aeiou",
    "account" : "aeiou",
    "username" : "aeiou"
  } ],
  "region" : "aeiou",
  "ambariVersion" : "aeiou",
  "parameters" : {
    "key" : "aeiou"
  },
  "account" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPrivatesStack = function(args, res, next) {
  /**
   * retrieve private stack
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "cluster" : {
    "cluster" : "aeiou",
    "ambariRepoDetailsJson" : {
      "baseUrl" : "aeiou",
      "version" : "aeiou",
      "gpgKeyUrl" : "aeiou"
    },
    "hostGroups" : [ {
      "recipes" : [ {
        "recipeType" : "aeiou",
        "public" : true,
        "name" : "aeiou",
        "description" : "aeiou",
        "id" : 123456789,
        "uri" : "aeiou",
        "content" : "aeiou"
      } ],
      "metadata" : [ {
        "groupName" : "aeiou",
        "name" : "aeiou",
        "id" : 123456789,
        "state" : "aeiou"
      } ],
      "recipeIds" : [ 123456789 ],
      "recoveryMode" : "aeiou",
      "name" : "aeiou",
      "constraint" : {
        "hostCount" : 123,
        "constraintTemplateName" : "aeiou",
        "instanceGroupName" : "aeiou"
      },
      "id" : 123456789
    } ],
    "ambariServerIp" : "aeiou",
    "ambariServerUrl" : "aeiou",
    "description" : "aeiou",
    "secure" : true,
    "configStrategy" : "aeiou",
    "hoursUp" : 123,
    "serviceEndPoints" : {
      "key" : "aeiou"
    },
    "statusReason" : "aeiou",
    "ambariStackDetails" : {
      "utilsBaseURL" : "aeiou",
      "stack" : "aeiou",
      "os" : "aeiou",
      "stackRepoId" : "aeiou",
      "utilsRepoId" : "aeiou",
      "verify" : true,
      "version" : "aeiou",
      "stackBaseURL" : "aeiou"
    },
    "ldapConfigId" : 123456789,
    "blueprintInputs" : [ {
      "name" : "aeiou",
      "propertyValue" : "aeiou"
    } ],
    "ambariDatabaseDetails" : {
      "password" : "aeiou",
      "port" : 123,
      "vendor" : "aeiou",
      "name" : "aeiou",
      "host" : "aeiou",
      "userName" : "aeiou"
    },
    "id" : 123456789,
    "blueprintCustomProperties" : "aeiou",
    "executorType" : "aeiou",
    "customQueue" : "aeiou",
    "userName" : "aeiou",
    "blueprintId" : 123456789,
    "ldapConfig" : {
      "groupNameAttribute" : "aeiou",
      "groupMemberAttribute" : "aeiou",
      "description" : "aeiou",
      "userNameAttribute" : "aeiou",
      "serverPort" : 123,
      "serverHost" : "aeiou",
      "directoryType" : "aeiou",
      "bindDn" : "aeiou",
      "protocol" : "aeiou",
      "groupSearchBase" : "aeiou",
      "userSearchBase" : "aeiou",
      "public" : true,
      "domain" : "aeiou",
      "name" : "aeiou",
      "id" : 123456789,
      "userObjectClass" : "aeiou",
      "groupObjectClass" : "aeiou"
    },
    "blueprint" : {
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
    },
    "rdsConfigs" : [ {
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
    } ],
    "customContainers" : {
      "definitions" : {
        "key" : "aeiou"
      }
    },
    "name" : "aeiou",
    "attributes" : {
      "key" : "{}"
    },
    "rdsConfigIds" : [ 123456789 ],
    "gateway" : {
      "path" : "aeiou",
      "topologyName" : "aeiou",
      "gatewayType" : "aeiou",
      "ssoProvider" : "aeiou",
      "enableGateway" : true,
      "signCert" : "aeiou",
      "ssoType" : "aeiou",
      "signPub" : "aeiou",
      "exposedServices" : [ "aeiou" ]
    },
    "status" : "aeiou",
    "minutesUp" : 123
  },
  "hdpVersion" : "aeiou",
  "cloudbreakEvents" : [ {
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
  } ],
  "platformVariant" : "aeiou",
  "customHostname" : "aeiou",
  "userDefinedTags" : {
    "key" : "aeiou"
  },
  "flexSubscription" : {
    "owner" : "aeiou",
    "default" : true,
    "publicInAccount" : true,
    "smartSenseSubscriptionId" : 123456789,
    "usedForController" : true,
    "name" : "aeiou",
    "smartSenseSubscription" : {
      "owner" : "aeiou",
      "publicInAccount" : true,
      "id" : 123456789,
      "autoGenerated" : true,
      "subscriptionId" : "aeiou",
      "account" : "aeiou"
    },
    "id" : 123456789,
    "subscriptionId" : "aeiou",
    "account" : "aeiou"
  },
  "publicKey" : "aeiou",
  "availabilityZone" : "aeiou",
  "defaultTags" : {
    "key" : "aeiou"
  },
  "network" : {
    "subnetCIDR" : "aeiou",
    "cloudPlatform" : "aeiou",
    "publicInAccount" : true,
    "topologyId" : 123456789,
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "hostgroupNameAsHostname" : true,
  "onFailureAction" : "aeiou",
  "statusReason" : "aeiou",
  "credential" : {
    "cloudPlatform" : "aeiou",
    "public" : true,
    "name" : "aeiou",
    "topologyId" : 123456789,
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "public" : true,
  "networkId" : 123456789,
  "nodeCount" : 123,
  "clusterNameAsSubdomain" : true,
  "id" : 123456789,
  "failurePolicy" : {
    "adjustmentType" : "aeiou",
    "threshold" : 123456789,
    "id" : 123456789
  },
  "owner" : "aeiou",
  "applicationTags" : {
    "key" : "aeiou"
  },
  "image" : {
    "imageName" : "aeiou"
  },
  "cloudbreakDetails" : {
    "version" : "aeiou"
  },
  "cloudPlatform" : "aeiou",
  "created" : 123456789,
  "customDomain" : "aeiou",
  "gatewayPort" : 123,
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
  "loginUserName" : "aeiou",
  "instanceGroups" : [ {
    "securityGroupId" : 123456789,
    "template" : {
      "volumeType" : "aeiou",
      "cloudPlatform" : "aeiou",
      "public" : true,
      "instanceType" : "aeiou",
      "topologyId" : 123456789,
      "name" : "aeiou",
      "description" : "aeiou",
      "volumeCount" : 123,
      "id" : 123456789,
      "parameters" : {
        "key" : "{}"
      },
      "volumeSize" : 123
    },
    "metadata" : [ {
      "sshPort" : 123,
      "instanceId" : "aeiou",
      "ambariServer" : true,
      "privateIp" : "aeiou",
      "instanceType" : "aeiou",
      "discoveryFQDN" : "aeiou",
      "publicIp" : "aeiou",
      "instanceGroup" : "aeiou",
      "instanceStatus" : "aeiou"
    } ],
    "nodeCount" : 123,
    "securityGroup" : {
      "securityGroupId" : "aeiou",
      "owner" : "aeiou",
      "cloudPlatform" : "aeiou",
      "publicInAccount" : true,
      "securityRules" : [ {
        "subnet" : "aeiou",
        "protocol" : "aeiou",
        "id" : 123456789,
        "ports" : "aeiou",
        "modifiable" : true
      } ],
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : 123456789,
      "account" : "aeiou"
    },
    "id" : 123456789,
    "templateId" : 123456789,
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    },
    "group" : "aeiou"
  } ],
  "hardwareInfos" : [ {
    "instanceMetaData" : "",
    "hostMetadata" : ""
  } ],
  "name" : "aeiou",
  "credentialId" : 123456789,
  "cloudbreakUsages" : [ {
    "owner" : "aeiou",
    "costs" : 1.3579000000000001069366817318950779736042022705078125,
    "instanceNum" : 123,
    "blueprintName" : "aeiou",
    "stackId" : 123456789,
    "instanceType" : "aeiou",
    "instanceHours" : 123456789,
    "stackName" : "aeiou",
    "peak" : 123,
    "instanceGroup" : "aeiou",
    "availabilityZone" : "aeiou",
    "blueprintId" : 123456789,
    "duration" : "aeiou",
    "provider" : "aeiou",
    "flexId" : "aeiou",
    "region" : "aeiou",
    "day" : "aeiou",
    "stackUuid" : "aeiou",
    "account" : "aeiou",
    "username" : "aeiou"
  } ],
  "region" : "aeiou",
  "ambariVersion" : "aeiou",
  "parameters" : {
    "key" : "aeiou"
  },
  "account" : "aeiou",
  "status" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPublicStack = function(args, res, next) {
  /**
   * retrieve a public or private (owned) stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * entry List  (optional)
   * returns StackResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "cluster" : {
    "cluster" : "aeiou",
    "ambariRepoDetailsJson" : {
      "baseUrl" : "aeiou",
      "version" : "aeiou",
      "gpgKeyUrl" : "aeiou"
    },
    "hostGroups" : [ {
      "recipes" : [ {
        "recipeType" : "aeiou",
        "public" : true,
        "name" : "aeiou",
        "description" : "aeiou",
        "id" : 123456789,
        "uri" : "aeiou",
        "content" : "aeiou"
      } ],
      "metadata" : [ {
        "groupName" : "aeiou",
        "name" : "aeiou",
        "id" : 123456789,
        "state" : "aeiou"
      } ],
      "recipeIds" : [ 123456789 ],
      "recoveryMode" : "aeiou",
      "name" : "aeiou",
      "constraint" : {
        "hostCount" : 123,
        "constraintTemplateName" : "aeiou",
        "instanceGroupName" : "aeiou"
      },
      "id" : 123456789
    } ],
    "ambariServerIp" : "aeiou",
    "ambariServerUrl" : "aeiou",
    "description" : "aeiou",
    "secure" : true,
    "configStrategy" : "aeiou",
    "hoursUp" : 123,
    "serviceEndPoints" : {
      "key" : "aeiou"
    },
    "statusReason" : "aeiou",
    "ambariStackDetails" : {
      "utilsBaseURL" : "aeiou",
      "stack" : "aeiou",
      "os" : "aeiou",
      "stackRepoId" : "aeiou",
      "utilsRepoId" : "aeiou",
      "verify" : true,
      "version" : "aeiou",
      "stackBaseURL" : "aeiou"
    },
    "ldapConfigId" : 123456789,
    "blueprintInputs" : [ {
      "name" : "aeiou",
      "propertyValue" : "aeiou"
    } ],
    "ambariDatabaseDetails" : {
      "password" : "aeiou",
      "port" : 123,
      "vendor" : "aeiou",
      "name" : "aeiou",
      "host" : "aeiou",
      "userName" : "aeiou"
    },
    "id" : 123456789,
    "blueprintCustomProperties" : "aeiou",
    "executorType" : "aeiou",
    "customQueue" : "aeiou",
    "userName" : "aeiou",
    "blueprintId" : 123456789,
    "ldapConfig" : {
      "groupNameAttribute" : "aeiou",
      "groupMemberAttribute" : "aeiou",
      "description" : "aeiou",
      "userNameAttribute" : "aeiou",
      "serverPort" : 123,
      "serverHost" : "aeiou",
      "directoryType" : "aeiou",
      "bindDn" : "aeiou",
      "protocol" : "aeiou",
      "groupSearchBase" : "aeiou",
      "userSearchBase" : "aeiou",
      "public" : true,
      "domain" : "aeiou",
      "name" : "aeiou",
      "id" : 123456789,
      "userObjectClass" : "aeiou",
      "groupObjectClass" : "aeiou"
    },
    "blueprint" : {
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
    },
    "rdsConfigs" : [ {
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
    } ],
    "customContainers" : {
      "definitions" : {
        "key" : "aeiou"
      }
    },
    "name" : "aeiou",
    "attributes" : {
      "key" : "{}"
    },
    "rdsConfigIds" : [ 123456789 ],
    "gateway" : {
      "path" : "aeiou",
      "topologyName" : "aeiou",
      "gatewayType" : "aeiou",
      "ssoProvider" : "aeiou",
      "enableGateway" : true,
      "signCert" : "aeiou",
      "ssoType" : "aeiou",
      "signPub" : "aeiou",
      "exposedServices" : [ "aeiou" ]
    },
    "status" : "aeiou",
    "minutesUp" : 123
  },
  "hdpVersion" : "aeiou",
  "cloudbreakEvents" : [ {
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
  } ],
  "platformVariant" : "aeiou",
  "customHostname" : "aeiou",
  "userDefinedTags" : {
    "key" : "aeiou"
  },
  "flexSubscription" : {
    "owner" : "aeiou",
    "default" : true,
    "publicInAccount" : true,
    "smartSenseSubscriptionId" : 123456789,
    "usedForController" : true,
    "name" : "aeiou",
    "smartSenseSubscription" : {
      "owner" : "aeiou",
      "publicInAccount" : true,
      "id" : 123456789,
      "autoGenerated" : true,
      "subscriptionId" : "aeiou",
      "account" : "aeiou"
    },
    "id" : 123456789,
    "subscriptionId" : "aeiou",
    "account" : "aeiou"
  },
  "publicKey" : "aeiou",
  "availabilityZone" : "aeiou",
  "defaultTags" : {
    "key" : "aeiou"
  },
  "network" : {
    "subnetCIDR" : "aeiou",
    "cloudPlatform" : "aeiou",
    "publicInAccount" : true,
    "topologyId" : 123456789,
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "hostgroupNameAsHostname" : true,
  "onFailureAction" : "aeiou",
  "statusReason" : "aeiou",
  "credential" : {
    "cloudPlatform" : "aeiou",
    "public" : true,
    "name" : "aeiou",
    "topologyId" : 123456789,
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "public" : true,
  "networkId" : 123456789,
  "nodeCount" : 123,
  "clusterNameAsSubdomain" : true,
  "id" : 123456789,
  "failurePolicy" : {
    "adjustmentType" : "aeiou",
    "threshold" : 123456789,
    "id" : 123456789
  },
  "owner" : "aeiou",
  "applicationTags" : {
    "key" : "aeiou"
  },
  "image" : {
    "imageName" : "aeiou"
  },
  "cloudbreakDetails" : {
    "version" : "aeiou"
  },
  "cloudPlatform" : "aeiou",
  "created" : 123456789,
  "customDomain" : "aeiou",
  "gatewayPort" : 123,
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
  "loginUserName" : "aeiou",
  "instanceGroups" : [ {
    "securityGroupId" : 123456789,
    "template" : {
      "volumeType" : "aeiou",
      "cloudPlatform" : "aeiou",
      "public" : true,
      "instanceType" : "aeiou",
      "topologyId" : 123456789,
      "name" : "aeiou",
      "description" : "aeiou",
      "volumeCount" : 123,
      "id" : 123456789,
      "parameters" : {
        "key" : "{}"
      },
      "volumeSize" : 123
    },
    "metadata" : [ {
      "sshPort" : 123,
      "instanceId" : "aeiou",
      "ambariServer" : true,
      "privateIp" : "aeiou",
      "instanceType" : "aeiou",
      "discoveryFQDN" : "aeiou",
      "publicIp" : "aeiou",
      "instanceGroup" : "aeiou",
      "instanceStatus" : "aeiou"
    } ],
    "nodeCount" : 123,
    "securityGroup" : {
      "securityGroupId" : "aeiou",
      "owner" : "aeiou",
      "cloudPlatform" : "aeiou",
      "publicInAccount" : true,
      "securityRules" : [ {
        "subnet" : "aeiou",
        "protocol" : "aeiou",
        "id" : 123456789,
        "ports" : "aeiou",
        "modifiable" : true
      } ],
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : 123456789,
      "account" : "aeiou"
    },
    "id" : 123456789,
    "templateId" : 123456789,
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    },
    "group" : "aeiou"
  } ],
  "hardwareInfos" : [ {
    "instanceMetaData" : "",
    "hostMetadata" : ""
  } ],
  "name" : "aeiou",
  "credentialId" : 123456789,
  "cloudbreakUsages" : [ {
    "owner" : "aeiou",
    "costs" : 1.3579000000000001069366817318950779736042022705078125,
    "instanceNum" : 123,
    "blueprintName" : "aeiou",
    "stackId" : 123456789,
    "instanceType" : "aeiou",
    "instanceHours" : 123456789,
    "stackName" : "aeiou",
    "peak" : 123,
    "instanceGroup" : "aeiou",
    "availabilityZone" : "aeiou",
    "blueprintId" : 123456789,
    "duration" : "aeiou",
    "provider" : "aeiou",
    "flexId" : "aeiou",
    "region" : "aeiou",
    "day" : "aeiou",
    "stackUuid" : "aeiou",
    "account" : "aeiou",
    "username" : "aeiou"
  } ],
  "region" : "aeiou",
  "ambariVersion" : "aeiou",
  "parameters" : {
    "key" : "aeiou"
  },
  "account" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPublicsStack = function(args, res, next) {
  /**
   * retrieve public and private (owned) stacks
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "cluster" : {
    "cluster" : "aeiou",
    "ambariRepoDetailsJson" : {
      "baseUrl" : "aeiou",
      "version" : "aeiou",
      "gpgKeyUrl" : "aeiou"
    },
    "hostGroups" : [ {
      "recipes" : [ {
        "recipeType" : "aeiou",
        "public" : true,
        "name" : "aeiou",
        "description" : "aeiou",
        "id" : 123456789,
        "uri" : "aeiou",
        "content" : "aeiou"
      } ],
      "metadata" : [ {
        "groupName" : "aeiou",
        "name" : "aeiou",
        "id" : 123456789,
        "state" : "aeiou"
      } ],
      "recipeIds" : [ 123456789 ],
      "recoveryMode" : "aeiou",
      "name" : "aeiou",
      "constraint" : {
        "hostCount" : 123,
        "constraintTemplateName" : "aeiou",
        "instanceGroupName" : "aeiou"
      },
      "id" : 123456789
    } ],
    "ambariServerIp" : "aeiou",
    "ambariServerUrl" : "aeiou",
    "description" : "aeiou",
    "secure" : true,
    "configStrategy" : "aeiou",
    "hoursUp" : 123,
    "serviceEndPoints" : {
      "key" : "aeiou"
    },
    "statusReason" : "aeiou",
    "ambariStackDetails" : {
      "utilsBaseURL" : "aeiou",
      "stack" : "aeiou",
      "os" : "aeiou",
      "stackRepoId" : "aeiou",
      "utilsRepoId" : "aeiou",
      "verify" : true,
      "version" : "aeiou",
      "stackBaseURL" : "aeiou"
    },
    "ldapConfigId" : 123456789,
    "blueprintInputs" : [ {
      "name" : "aeiou",
      "propertyValue" : "aeiou"
    } ],
    "ambariDatabaseDetails" : {
      "password" : "aeiou",
      "port" : 123,
      "vendor" : "aeiou",
      "name" : "aeiou",
      "host" : "aeiou",
      "userName" : "aeiou"
    },
    "id" : 123456789,
    "blueprintCustomProperties" : "aeiou",
    "executorType" : "aeiou",
    "customQueue" : "aeiou",
    "userName" : "aeiou",
    "blueprintId" : 123456789,
    "ldapConfig" : {
      "groupNameAttribute" : "aeiou",
      "groupMemberAttribute" : "aeiou",
      "description" : "aeiou",
      "userNameAttribute" : "aeiou",
      "serverPort" : 123,
      "serverHost" : "aeiou",
      "directoryType" : "aeiou",
      "bindDn" : "aeiou",
      "protocol" : "aeiou",
      "groupSearchBase" : "aeiou",
      "userSearchBase" : "aeiou",
      "public" : true,
      "domain" : "aeiou",
      "name" : "aeiou",
      "id" : 123456789,
      "userObjectClass" : "aeiou",
      "groupObjectClass" : "aeiou"
    },
    "blueprint" : {
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
    },
    "rdsConfigs" : [ {
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
    } ],
    "customContainers" : {
      "definitions" : {
        "key" : "aeiou"
      }
    },
    "name" : "aeiou",
    "attributes" : {
      "key" : "{}"
    },
    "rdsConfigIds" : [ 123456789 ],
    "gateway" : {
      "path" : "aeiou",
      "topologyName" : "aeiou",
      "gatewayType" : "aeiou",
      "ssoProvider" : "aeiou",
      "enableGateway" : true,
      "signCert" : "aeiou",
      "ssoType" : "aeiou",
      "signPub" : "aeiou",
      "exposedServices" : [ "aeiou" ]
    },
    "status" : "aeiou",
    "minutesUp" : 123
  },
  "hdpVersion" : "aeiou",
  "cloudbreakEvents" : [ {
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
  } ],
  "platformVariant" : "aeiou",
  "customHostname" : "aeiou",
  "userDefinedTags" : {
    "key" : "aeiou"
  },
  "flexSubscription" : {
    "owner" : "aeiou",
    "default" : true,
    "publicInAccount" : true,
    "smartSenseSubscriptionId" : 123456789,
    "usedForController" : true,
    "name" : "aeiou",
    "smartSenseSubscription" : {
      "owner" : "aeiou",
      "publicInAccount" : true,
      "id" : 123456789,
      "autoGenerated" : true,
      "subscriptionId" : "aeiou",
      "account" : "aeiou"
    },
    "id" : 123456789,
    "subscriptionId" : "aeiou",
    "account" : "aeiou"
  },
  "publicKey" : "aeiou",
  "availabilityZone" : "aeiou",
  "defaultTags" : {
    "key" : "aeiou"
  },
  "network" : {
    "subnetCIDR" : "aeiou",
    "cloudPlatform" : "aeiou",
    "publicInAccount" : true,
    "topologyId" : 123456789,
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "hostgroupNameAsHostname" : true,
  "onFailureAction" : "aeiou",
  "statusReason" : "aeiou",
  "credential" : {
    "cloudPlatform" : "aeiou",
    "public" : true,
    "name" : "aeiou",
    "topologyId" : 123456789,
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "public" : true,
  "networkId" : 123456789,
  "nodeCount" : 123,
  "clusterNameAsSubdomain" : true,
  "id" : 123456789,
  "failurePolicy" : {
    "adjustmentType" : "aeiou",
    "threshold" : 123456789,
    "id" : 123456789
  },
  "owner" : "aeiou",
  "applicationTags" : {
    "key" : "aeiou"
  },
  "image" : {
    "imageName" : "aeiou"
  },
  "cloudbreakDetails" : {
    "version" : "aeiou"
  },
  "cloudPlatform" : "aeiou",
  "created" : 123456789,
  "customDomain" : "aeiou",
  "gatewayPort" : 123,
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
  "loginUserName" : "aeiou",
  "instanceGroups" : [ {
    "securityGroupId" : 123456789,
    "template" : {
      "volumeType" : "aeiou",
      "cloudPlatform" : "aeiou",
      "public" : true,
      "instanceType" : "aeiou",
      "topologyId" : 123456789,
      "name" : "aeiou",
      "description" : "aeiou",
      "volumeCount" : 123,
      "id" : 123456789,
      "parameters" : {
        "key" : "{}"
      },
      "volumeSize" : 123
    },
    "metadata" : [ {
      "sshPort" : 123,
      "instanceId" : "aeiou",
      "ambariServer" : true,
      "privateIp" : "aeiou",
      "instanceType" : "aeiou",
      "discoveryFQDN" : "aeiou",
      "publicIp" : "aeiou",
      "instanceGroup" : "aeiou",
      "instanceStatus" : "aeiou"
    } ],
    "nodeCount" : 123,
    "securityGroup" : {
      "securityGroupId" : "aeiou",
      "owner" : "aeiou",
      "cloudPlatform" : "aeiou",
      "publicInAccount" : true,
      "securityRules" : [ {
        "subnet" : "aeiou",
        "protocol" : "aeiou",
        "id" : 123456789,
        "ports" : "aeiou",
        "modifiable" : true
      } ],
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : 123456789,
      "account" : "aeiou"
    },
    "id" : 123456789,
    "templateId" : 123456789,
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    },
    "group" : "aeiou"
  } ],
  "hardwareInfos" : [ {
    "instanceMetaData" : "",
    "hostMetadata" : ""
  } ],
  "name" : "aeiou",
  "credentialId" : 123456789,
  "cloudbreakUsages" : [ {
    "owner" : "aeiou",
    "costs" : 1.3579000000000001069366817318950779736042022705078125,
    "instanceNum" : 123,
    "blueprintName" : "aeiou",
    "stackId" : 123456789,
    "instanceType" : "aeiou",
    "instanceHours" : 123456789,
    "stackName" : "aeiou",
    "peak" : 123,
    "instanceGroup" : "aeiou",
    "availabilityZone" : "aeiou",
    "blueprintId" : 123456789,
    "duration" : "aeiou",
    "provider" : "aeiou",
    "flexId" : "aeiou",
    "region" : "aeiou",
    "day" : "aeiou",
    "stackUuid" : "aeiou",
    "account" : "aeiou",
    "username" : "aeiou"
  } ],
  "region" : "aeiou",
  "ambariVersion" : "aeiou",
  "parameters" : {
    "key" : "aeiou"
  },
  "account" : "aeiou",
  "status" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getStack = function(args, res, next) {
  /**
   * retrieve stack by id
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * id Long 
   * entry List  (optional)
   * returns StackResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "cluster" : {
    "cluster" : "aeiou",
    "ambariRepoDetailsJson" : {
      "baseUrl" : "aeiou",
      "version" : "aeiou",
      "gpgKeyUrl" : "aeiou"
    },
    "hostGroups" : [ {
      "recipes" : [ {
        "recipeType" : "aeiou",
        "public" : true,
        "name" : "aeiou",
        "description" : "aeiou",
        "id" : 123456789,
        "uri" : "aeiou",
        "content" : "aeiou"
      } ],
      "metadata" : [ {
        "groupName" : "aeiou",
        "name" : "aeiou",
        "id" : 123456789,
        "state" : "aeiou"
      } ],
      "recipeIds" : [ 123456789 ],
      "recoveryMode" : "aeiou",
      "name" : "aeiou",
      "constraint" : {
        "hostCount" : 123,
        "constraintTemplateName" : "aeiou",
        "instanceGroupName" : "aeiou"
      },
      "id" : 123456789
    } ],
    "ambariServerIp" : "aeiou",
    "ambariServerUrl" : "aeiou",
    "description" : "aeiou",
    "secure" : true,
    "configStrategy" : "aeiou",
    "hoursUp" : 123,
    "serviceEndPoints" : {
      "key" : "aeiou"
    },
    "statusReason" : "aeiou",
    "ambariStackDetails" : {
      "utilsBaseURL" : "aeiou",
      "stack" : "aeiou",
      "os" : "aeiou",
      "stackRepoId" : "aeiou",
      "utilsRepoId" : "aeiou",
      "verify" : true,
      "version" : "aeiou",
      "stackBaseURL" : "aeiou"
    },
    "ldapConfigId" : 123456789,
    "blueprintInputs" : [ {
      "name" : "aeiou",
      "propertyValue" : "aeiou"
    } ],
    "ambariDatabaseDetails" : {
      "password" : "aeiou",
      "port" : 123,
      "vendor" : "aeiou",
      "name" : "aeiou",
      "host" : "aeiou",
      "userName" : "aeiou"
    },
    "id" : 123456789,
    "blueprintCustomProperties" : "aeiou",
    "executorType" : "aeiou",
    "customQueue" : "aeiou",
    "userName" : "aeiou",
    "blueprintId" : 123456789,
    "ldapConfig" : {
      "groupNameAttribute" : "aeiou",
      "groupMemberAttribute" : "aeiou",
      "description" : "aeiou",
      "userNameAttribute" : "aeiou",
      "serverPort" : 123,
      "serverHost" : "aeiou",
      "directoryType" : "aeiou",
      "bindDn" : "aeiou",
      "protocol" : "aeiou",
      "groupSearchBase" : "aeiou",
      "userSearchBase" : "aeiou",
      "public" : true,
      "domain" : "aeiou",
      "name" : "aeiou",
      "id" : 123456789,
      "userObjectClass" : "aeiou",
      "groupObjectClass" : "aeiou"
    },
    "blueprint" : {
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
    },
    "rdsConfigs" : [ {
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
    } ],
    "customContainers" : {
      "definitions" : {
        "key" : "aeiou"
      }
    },
    "name" : "aeiou",
    "attributes" : {
      "key" : "{}"
    },
    "rdsConfigIds" : [ 123456789 ],
    "gateway" : {
      "path" : "aeiou",
      "topologyName" : "aeiou",
      "gatewayType" : "aeiou",
      "ssoProvider" : "aeiou",
      "enableGateway" : true,
      "signCert" : "aeiou",
      "ssoType" : "aeiou",
      "signPub" : "aeiou",
      "exposedServices" : [ "aeiou" ]
    },
    "status" : "aeiou",
    "minutesUp" : 123
  },
  "hdpVersion" : "aeiou",
  "cloudbreakEvents" : [ {
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
  } ],
  "platformVariant" : "aeiou",
  "customHostname" : "aeiou",
  "userDefinedTags" : {
    "key" : "aeiou"
  },
  "flexSubscription" : {
    "owner" : "aeiou",
    "default" : true,
    "publicInAccount" : true,
    "smartSenseSubscriptionId" : 123456789,
    "usedForController" : true,
    "name" : "aeiou",
    "smartSenseSubscription" : {
      "owner" : "aeiou",
      "publicInAccount" : true,
      "id" : 123456789,
      "autoGenerated" : true,
      "subscriptionId" : "aeiou",
      "account" : "aeiou"
    },
    "id" : 123456789,
    "subscriptionId" : "aeiou",
    "account" : "aeiou"
  },
  "publicKey" : "aeiou",
  "availabilityZone" : "aeiou",
  "defaultTags" : {
    "key" : "aeiou"
  },
  "network" : {
    "subnetCIDR" : "aeiou",
    "cloudPlatform" : "aeiou",
    "publicInAccount" : true,
    "topologyId" : 123456789,
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "hostgroupNameAsHostname" : true,
  "onFailureAction" : "aeiou",
  "statusReason" : "aeiou",
  "credential" : {
    "cloudPlatform" : "aeiou",
    "public" : true,
    "name" : "aeiou",
    "topologyId" : 123456789,
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "public" : true,
  "networkId" : 123456789,
  "nodeCount" : 123,
  "clusterNameAsSubdomain" : true,
  "id" : 123456789,
  "failurePolicy" : {
    "adjustmentType" : "aeiou",
    "threshold" : 123456789,
    "id" : 123456789
  },
  "owner" : "aeiou",
  "applicationTags" : {
    "key" : "aeiou"
  },
  "image" : {
    "imageName" : "aeiou"
  },
  "cloudbreakDetails" : {
    "version" : "aeiou"
  },
  "cloudPlatform" : "aeiou",
  "created" : 123456789,
  "customDomain" : "aeiou",
  "gatewayPort" : 123,
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
  "loginUserName" : "aeiou",
  "instanceGroups" : [ {
    "securityGroupId" : 123456789,
    "template" : {
      "volumeType" : "aeiou",
      "cloudPlatform" : "aeiou",
      "public" : true,
      "instanceType" : "aeiou",
      "topologyId" : 123456789,
      "name" : "aeiou",
      "description" : "aeiou",
      "volumeCount" : 123,
      "id" : 123456789,
      "parameters" : {
        "key" : "{}"
      },
      "volumeSize" : 123
    },
    "metadata" : [ {
      "sshPort" : 123,
      "instanceId" : "aeiou",
      "ambariServer" : true,
      "privateIp" : "aeiou",
      "instanceType" : "aeiou",
      "discoveryFQDN" : "aeiou",
      "publicIp" : "aeiou",
      "instanceGroup" : "aeiou",
      "instanceStatus" : "aeiou"
    } ],
    "nodeCount" : 123,
    "securityGroup" : {
      "securityGroupId" : "aeiou",
      "owner" : "aeiou",
      "cloudPlatform" : "aeiou",
      "publicInAccount" : true,
      "securityRules" : [ {
        "subnet" : "aeiou",
        "protocol" : "aeiou",
        "id" : 123456789,
        "ports" : "aeiou",
        "modifiable" : true
      } ],
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : 123456789,
      "account" : "aeiou"
    },
    "id" : 123456789,
    "templateId" : 123456789,
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    },
    "group" : "aeiou"
  } ],
  "hardwareInfos" : [ {
    "instanceMetaData" : "",
    "hostMetadata" : ""
  } ],
  "name" : "aeiou",
  "credentialId" : 123456789,
  "cloudbreakUsages" : [ {
    "owner" : "aeiou",
    "costs" : 1.3579000000000001069366817318950779736042022705078125,
    "instanceNum" : 123,
    "blueprintName" : "aeiou",
    "stackId" : 123456789,
    "instanceType" : "aeiou",
    "instanceHours" : 123456789,
    "stackName" : "aeiou",
    "peak" : 123,
    "instanceGroup" : "aeiou",
    "availabilityZone" : "aeiou",
    "blueprintId" : 123456789,
    "duration" : "aeiou",
    "provider" : "aeiou",
    "flexId" : "aeiou",
    "region" : "aeiou",
    "day" : "aeiou",
    "stackUuid" : "aeiou",
    "account" : "aeiou",
    "username" : "aeiou"
  } ],
  "region" : "aeiou",
  "ambariVersion" : "aeiou",
  "parameters" : {
    "key" : "aeiou"
  },
  "account" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getStackForAmbari = function(args, res, next) {
  /**
   * retrieve stack by ambari address
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * body AmbariAddress  (optional)
   * returns StackResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "cluster" : {
    "cluster" : "aeiou",
    "ambariRepoDetailsJson" : {
      "baseUrl" : "aeiou",
      "version" : "aeiou",
      "gpgKeyUrl" : "aeiou"
    },
    "hostGroups" : [ {
      "recipes" : [ {
        "recipeType" : "aeiou",
        "public" : true,
        "name" : "aeiou",
        "description" : "aeiou",
        "id" : 123456789,
        "uri" : "aeiou",
        "content" : "aeiou"
      } ],
      "metadata" : [ {
        "groupName" : "aeiou",
        "name" : "aeiou",
        "id" : 123456789,
        "state" : "aeiou"
      } ],
      "recipeIds" : [ 123456789 ],
      "recoveryMode" : "aeiou",
      "name" : "aeiou",
      "constraint" : {
        "hostCount" : 123,
        "constraintTemplateName" : "aeiou",
        "instanceGroupName" : "aeiou"
      },
      "id" : 123456789
    } ],
    "ambariServerIp" : "aeiou",
    "ambariServerUrl" : "aeiou",
    "description" : "aeiou",
    "secure" : true,
    "configStrategy" : "aeiou",
    "hoursUp" : 123,
    "serviceEndPoints" : {
      "key" : "aeiou"
    },
    "statusReason" : "aeiou",
    "ambariStackDetails" : {
      "utilsBaseURL" : "aeiou",
      "stack" : "aeiou",
      "os" : "aeiou",
      "stackRepoId" : "aeiou",
      "utilsRepoId" : "aeiou",
      "verify" : true,
      "version" : "aeiou",
      "stackBaseURL" : "aeiou"
    },
    "ldapConfigId" : 123456789,
    "blueprintInputs" : [ {
      "name" : "aeiou",
      "propertyValue" : "aeiou"
    } ],
    "ambariDatabaseDetails" : {
      "password" : "aeiou",
      "port" : 123,
      "vendor" : "aeiou",
      "name" : "aeiou",
      "host" : "aeiou",
      "userName" : "aeiou"
    },
    "id" : 123456789,
    "blueprintCustomProperties" : "aeiou",
    "executorType" : "aeiou",
    "customQueue" : "aeiou",
    "userName" : "aeiou",
    "blueprintId" : 123456789,
    "ldapConfig" : {
      "groupNameAttribute" : "aeiou",
      "groupMemberAttribute" : "aeiou",
      "description" : "aeiou",
      "userNameAttribute" : "aeiou",
      "serverPort" : 123,
      "serverHost" : "aeiou",
      "directoryType" : "aeiou",
      "bindDn" : "aeiou",
      "protocol" : "aeiou",
      "groupSearchBase" : "aeiou",
      "userSearchBase" : "aeiou",
      "public" : true,
      "domain" : "aeiou",
      "name" : "aeiou",
      "id" : 123456789,
      "userObjectClass" : "aeiou",
      "groupObjectClass" : "aeiou"
    },
    "blueprint" : {
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
    },
    "rdsConfigs" : [ {
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
    } ],
    "customContainers" : {
      "definitions" : {
        "key" : "aeiou"
      }
    },
    "name" : "aeiou",
    "attributes" : {
      "key" : "{}"
    },
    "rdsConfigIds" : [ 123456789 ],
    "gateway" : {
      "path" : "aeiou",
      "topologyName" : "aeiou",
      "gatewayType" : "aeiou",
      "ssoProvider" : "aeiou",
      "enableGateway" : true,
      "signCert" : "aeiou",
      "ssoType" : "aeiou",
      "signPub" : "aeiou",
      "exposedServices" : [ "aeiou" ]
    },
    "status" : "aeiou",
    "minutesUp" : 123
  },
  "hdpVersion" : "aeiou",
  "cloudbreakEvents" : [ {
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
  } ],
  "platformVariant" : "aeiou",
  "customHostname" : "aeiou",
  "userDefinedTags" : {
    "key" : "aeiou"
  },
  "flexSubscription" : {
    "owner" : "aeiou",
    "default" : true,
    "publicInAccount" : true,
    "smartSenseSubscriptionId" : 123456789,
    "usedForController" : true,
    "name" : "aeiou",
    "smartSenseSubscription" : {
      "owner" : "aeiou",
      "publicInAccount" : true,
      "id" : 123456789,
      "autoGenerated" : true,
      "subscriptionId" : "aeiou",
      "account" : "aeiou"
    },
    "id" : 123456789,
    "subscriptionId" : "aeiou",
    "account" : "aeiou"
  },
  "publicKey" : "aeiou",
  "availabilityZone" : "aeiou",
  "defaultTags" : {
    "key" : "aeiou"
  },
  "network" : {
    "subnetCIDR" : "aeiou",
    "cloudPlatform" : "aeiou",
    "publicInAccount" : true,
    "topologyId" : 123456789,
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "hostgroupNameAsHostname" : true,
  "onFailureAction" : "aeiou",
  "statusReason" : "aeiou",
  "credential" : {
    "cloudPlatform" : "aeiou",
    "public" : true,
    "name" : "aeiou",
    "topologyId" : 123456789,
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "public" : true,
  "networkId" : 123456789,
  "nodeCount" : 123,
  "clusterNameAsSubdomain" : true,
  "id" : 123456789,
  "failurePolicy" : {
    "adjustmentType" : "aeiou",
    "threshold" : 123456789,
    "id" : 123456789
  },
  "owner" : "aeiou",
  "applicationTags" : {
    "key" : "aeiou"
  },
  "image" : {
    "imageName" : "aeiou"
  },
  "cloudbreakDetails" : {
    "version" : "aeiou"
  },
  "cloudPlatform" : "aeiou",
  "created" : 123456789,
  "customDomain" : "aeiou",
  "gatewayPort" : 123,
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
  "loginUserName" : "aeiou",
  "instanceGroups" : [ {
    "securityGroupId" : 123456789,
    "template" : {
      "volumeType" : "aeiou",
      "cloudPlatform" : "aeiou",
      "public" : true,
      "instanceType" : "aeiou",
      "topologyId" : 123456789,
      "name" : "aeiou",
      "description" : "aeiou",
      "volumeCount" : 123,
      "id" : 123456789,
      "parameters" : {
        "key" : "{}"
      },
      "volumeSize" : 123
    },
    "metadata" : [ {
      "sshPort" : 123,
      "instanceId" : "aeiou",
      "ambariServer" : true,
      "privateIp" : "aeiou",
      "instanceType" : "aeiou",
      "discoveryFQDN" : "aeiou",
      "publicIp" : "aeiou",
      "instanceGroup" : "aeiou",
      "instanceStatus" : "aeiou"
    } ],
    "nodeCount" : 123,
    "securityGroup" : {
      "securityGroupId" : "aeiou",
      "owner" : "aeiou",
      "cloudPlatform" : "aeiou",
      "publicInAccount" : true,
      "securityRules" : [ {
        "subnet" : "aeiou",
        "protocol" : "aeiou",
        "id" : 123456789,
        "ports" : "aeiou",
        "modifiable" : true
      } ],
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : 123456789,
      "account" : "aeiou"
    },
    "id" : 123456789,
    "templateId" : 123456789,
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    },
    "group" : "aeiou"
  } ],
  "hardwareInfos" : [ {
    "instanceMetaData" : "",
    "hostMetadata" : ""
  } ],
  "name" : "aeiou",
  "credentialId" : 123456789,
  "cloudbreakUsages" : [ {
    "owner" : "aeiou",
    "costs" : 1.3579000000000001069366817318950779736042022705078125,
    "instanceNum" : 123,
    "blueprintName" : "aeiou",
    "stackId" : 123456789,
    "instanceType" : "aeiou",
    "instanceHours" : 123456789,
    "stackName" : "aeiou",
    "peak" : 123,
    "instanceGroup" : "aeiou",
    "availabilityZone" : "aeiou",
    "blueprintId" : 123456789,
    "duration" : "aeiou",
    "provider" : "aeiou",
    "flexId" : "aeiou",
    "region" : "aeiou",
    "day" : "aeiou",
    "stackUuid" : "aeiou",
    "account" : "aeiou",
    "username" : "aeiou"
  } ],
  "region" : "aeiou",
  "ambariVersion" : "aeiou",
  "parameters" : {
    "key" : "aeiou"
  },
  "account" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postPrivateStack = function(args, res, next) {
  /**
   * create stack as private resource
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * body StackRequest  (optional)
   * returns StackResponse
   **/
  var examples = {};
  
  examples['application/json'] = {
  "cluster" : {
    "cluster" : "aeiou",
    "ambariRepoDetailsJson" : {
      "baseUrl" : "aeiou",
      "version" : "aeiou",
      "gpgKeyUrl" : "aeiou"
    },
    "hostGroups" : [ {
      "recipes" : [ {
        "recipeType" : "aeiou",
        "public" : true,
        "name" : "aeiou",
        "description" : "aeiou",
        "id" : 123456789,
        "uri" : "aeiou",
        "content" : "aeiou"
      } ],
      "metadata" : [ {
        "groupName" : "aeiou",
        "name" : "aeiou",
        "id" : 123456789,
        "state" : "aeiou"
      } ],
      "recipeIds" : [ 123456789 ],
      "recoveryMode" : "aeiou",
      "name" : "aeiou",
      "constraint" : {
        "hostCount" : 123,
        "constraintTemplateName" : "aeiou",
        "instanceGroupName" : "aeiou"
      },
      "id" : 123456789
    } ],
    "ambariServerIp" : "aeiou",
    "ambariServerUrl" : "aeiou",
    "description" : "aeiou",
    "secure" : true,
    "configStrategy" : "aeiou",
    "hoursUp" : 123,
    "serviceEndPoints" : {
      "key" : "aeiou"
    },
    "statusReason" : "aeiou",
    "ambariStackDetails" : {
      "utilsBaseURL" : "aeiou",
      "stack" : "aeiou",
      "os" : "aeiou",
      "stackRepoId" : "aeiou",
      "utilsRepoId" : "aeiou",
      "verify" : true,
      "version" : "aeiou",
      "stackBaseURL" : "aeiou"
    },
    "ldapConfigId" : 123456789,
    "blueprintInputs" : [ {
      "name" : "aeiou",
      "propertyValue" : "aeiou"
    } ],
    "ambariDatabaseDetails" : {
      "password" : "aeiou",
      "port" : 123,
      "vendor" : "aeiou",
      "name" : "aeiou",
      "host" : "aeiou",
      "userName" : "aeiou"
    },
    "id" : 123456789,
    "blueprintCustomProperties" : "aeiou",
    "executorType" : "aeiou",
    "customQueue" : "aeiou",
    "userName" : "aeiou",
    "blueprintId" : 123456789,
    "ldapConfig" : {
      "groupNameAttribute" : "aeiou",
      "groupMemberAttribute" : "aeiou",
      "description" : "aeiou",
      "userNameAttribute" : "aeiou",
      "serverPort" : 123,
      "serverHost" : "aeiou",
      "directoryType" : "aeiou",
      "bindDn" : "aeiou",
      "protocol" : "aeiou",
      "groupSearchBase" : "aeiou",
      "userSearchBase" : "aeiou",
      "public" : true,
      "domain" : "aeiou",
      "name" : "aeiou",
      "id" : 123456789,
      "userObjectClass" : "aeiou",
      "groupObjectClass" : "aeiou"
    },
    "blueprint" : {
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
    },
    "rdsConfigs" : [ {
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
    } ],
    "customContainers" : {
      "definitions" : {
        "key" : "aeiou"
      }
    },
    "name" : "aeiou",
    "attributes" : {
      "key" : "{}"
    },
    "rdsConfigIds" : [ 123456789 ],
    "gateway" : {
      "path" : "aeiou",
      "topologyName" : "aeiou",
      "gatewayType" : "aeiou",
      "ssoProvider" : "aeiou",
      "enableGateway" : true,
      "signCert" : "aeiou",
      "ssoType" : "aeiou",
      "signPub" : "aeiou",
      "exposedServices" : [ "aeiou" ]
    },
    "status" : "aeiou",
    "minutesUp" : 123
  },
  "hdpVersion" : "aeiou",
  "cloudbreakEvents" : [ {
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
  } ],
  "platformVariant" : "aeiou",
  "customHostname" : "aeiou",
  "userDefinedTags" : {
    "key" : "aeiou"
  },
  "flexSubscription" : {
    "owner" : "aeiou",
    "default" : true,
    "publicInAccount" : true,
    "smartSenseSubscriptionId" : 123456789,
    "usedForController" : true,
    "name" : "aeiou",
    "smartSenseSubscription" : {
      "owner" : "aeiou",
      "publicInAccount" : true,
      "id" : 123456789,
      "autoGenerated" : true,
      "subscriptionId" : "aeiou",
      "account" : "aeiou"
    },
    "id" : 123456789,
    "subscriptionId" : "aeiou",
    "account" : "aeiou"
  },
  "publicKey" : "aeiou",
  "availabilityZone" : "aeiou",
  "defaultTags" : {
    "key" : "aeiou"
  },
  "network" : {
    "subnetCIDR" : "aeiou",
    "cloudPlatform" : "aeiou",
    "publicInAccount" : true,
    "topologyId" : 123456789,
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "hostgroupNameAsHostname" : true,
  "onFailureAction" : "aeiou",
  "statusReason" : "aeiou",
  "credential" : {
    "cloudPlatform" : "aeiou",
    "public" : true,
    "name" : "aeiou",
    "topologyId" : 123456789,
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "public" : true,
  "networkId" : 123456789,
  "nodeCount" : 123,
  "clusterNameAsSubdomain" : true,
  "id" : 123456789,
  "failurePolicy" : {
    "adjustmentType" : "aeiou",
    "threshold" : 123456789,
    "id" : 123456789
  },
  "owner" : "aeiou",
  "applicationTags" : {
    "key" : "aeiou"
  },
  "image" : {
    "imageName" : "aeiou"
  },
  "cloudbreakDetails" : {
    "version" : "aeiou"
  },
  "cloudPlatform" : "aeiou",
  "created" : 123456789,
  "customDomain" : "aeiou",
  "gatewayPort" : 123,
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
  "loginUserName" : "aeiou",
  "instanceGroups" : [ {
    "securityGroupId" : 123456789,
    "template" : {
      "volumeType" : "aeiou",
      "cloudPlatform" : "aeiou",
      "public" : true,
      "instanceType" : "aeiou",
      "topologyId" : 123456789,
      "name" : "aeiou",
      "description" : "aeiou",
      "volumeCount" : 123,
      "id" : 123456789,
      "parameters" : {
        "key" : "{}"
      },
      "volumeSize" : 123
    },
    "metadata" : [ {
      "sshPort" : 123,
      "instanceId" : "aeiou",
      "ambariServer" : true,
      "privateIp" : "aeiou",
      "instanceType" : "aeiou",
      "discoveryFQDN" : "aeiou",
      "publicIp" : "aeiou",
      "instanceGroup" : "aeiou",
      "instanceStatus" : "aeiou"
    } ],
    "nodeCount" : 123,
    "securityGroup" : {
      "securityGroupId" : "aeiou",
      "owner" : "aeiou",
      "cloudPlatform" : "aeiou",
      "publicInAccount" : true,
      "securityRules" : [ {
        "subnet" : "aeiou",
        "protocol" : "aeiou",
        "id" : 123456789,
        "ports" : "aeiou",
        "modifiable" : true
      } ],
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : 123456789,
      "account" : "aeiou"
    },
    "id" : 123456789,
    "templateId" : 123456789,
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    },
    "group" : "aeiou"
  } ],
  "hardwareInfos" : [ {
    "instanceMetaData" : "",
    "hostMetadata" : ""
  } ],
  "name" : "aeiou",
  "credentialId" : 123456789,
  "cloudbreakUsages" : [ {
    "owner" : "aeiou",
    "costs" : 1.3579000000000001069366817318950779736042022705078125,
    "instanceNum" : 123,
    "blueprintName" : "aeiou",
    "stackId" : 123456789,
    "instanceType" : "aeiou",
    "instanceHours" : 123456789,
    "stackName" : "aeiou",
    "peak" : 123,
    "instanceGroup" : "aeiou",
    "availabilityZone" : "aeiou",
    "blueprintId" : 123456789,
    "duration" : "aeiou",
    "provider" : "aeiou",
    "flexId" : "aeiou",
    "region" : "aeiou",
    "day" : "aeiou",
    "stackUuid" : "aeiou",
    "account" : "aeiou",
    "username" : "aeiou"
  } ],
  "region" : "aeiou",
  "ambariVersion" : "aeiou",
  "parameters" : {
    "key" : "aeiou"
  },
  "account" : "aeiou",
  "status" : "aeiou"
};

  //examples['application/json']={"name":"almaa","availabilityZone":"nova","region":"RegionOne","platformVariant":"HEAT","credentialId":1,"onFailureAction":"DO_NOTHING","networkId":2,"ambariVersion":"2.5.1.0","hdpVersion":"2.6.1.0","parameters":{},"customDomain":null,"customHostname":null,"clusterNameAsSubdomain":false,"hostgroupNameAsHostname":false,"applicationTags":{},"userDefinedTags":{},"defaultTags":{},"loginUserName":"centos","publicKey":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC+J9TPpNNyiah6ZOD2WAdZTGmMwIzHMJFz2IT087rSY/pNIqgnsnMRvpymzhHN+FEQU5P7+EbPJEoEeo3y23dPH2p+/plkWBTrCmys0QpKiQXi/h1mInBiJNJCuKM0Hm+FbBpyN2yV1gN77VCHfm8iRuUypep4bW2vEAfl18ev4NkitVhAGWPdOydOratBoNefvOIwRYQKxGAvl0FtwpXLMoWXEsVr6A25sKkGZyRZxRorG8gu7ORTXzElda6dkDVgIp5NhI9e7EwBfQyzwwj2Z8IB5qfcRM2GofOxJuqiu3JOeOA8KTHJQAy89D0u/15o1xgF/exS9mRfEDVrTA0D","id":2,"owner":"706c3c78-324e-442b-afc7-d3488ad39795","account":"seq1234567","status":"REQUESTED","cluster":{"id":2,"name":"almaa","status":"REQUESTED","hoursUp":0,"minutesUp":0,"cluster":null,"blueprintId":10,"blueprint":{"ambariBlueprint":{"Blueprints":{"blueprint_name":"hdp26-etl-edw","stack_name":"HDP","stack_version":"2.6"},"settings":[{"recovery_settings":[]},{"service_settings":[{"name":"HIVE","credential_store_enabled":"false"}]},{"component_settings":[]}],"configurations":[{"core-site":{"fs.trash.interval":"4320"}},{"hdfs-site":{"dfs.namenode.safemode.threshold-pct":"0.99"}},{"hive-site":{"hive.exec.compress.output":"true","hive.merge.mapfiles":"true","hive.server2.tez.initialize.default.sessions":"true","hive.server2.transport.mode":"http"}},{"mapred-site":{"mapreduce.job.reduce.slowstart.completedmaps":"0.7","mapreduce.map.output.compress":"true","mapreduce.output.fileoutputformat.compress":"true"}},{"yarn-site":{"yarn.acl.enable":"true"}},{"druid-common":{"properties_attributes":{},"properties":{"druid.metadata.storage.type":"derby","druid.metadata.storage.connector.connectURI":"jdbc:derby://localhost:1527/druid;create=true","druid.extensions.loadList":"[\"postgresql-metadata-storage\", \"druid-s3-extensions\"]","druid.selectors.indexing.serviceName":"druid/overlord"}}},{"druid-superset":{"properties_attributes":{},"properties":{"SECRET_KEY":"123admin123","SUPERSET_DATABASE_TYPE":"sqlite"}}},{"druid-overlord":{"properties_attributes":{},"properties":{"druid.indexer.storage.type":"metadata","druid.indexer.runner.type":"remote","druid.service":"druid/overlord","druid.port":"8090"}}},{"druid-middlemanager":{"properties_attributes":{},"properties":{"druid.indexer.task.hadoopWorkingPath":"/tmp/druid-indexing","druid.server.http.numThreads":"50","druid.indexer.runner.startPort":"8100","druid.worker.capacity":"3","druid.processing.numThreads":"2","druid.indexer.runner.javaOpts":"-server -Xmx2g -Duser.timezone=UTC -Dfile.encoding=UTF-8 -Djava.util.logging.manager=org.apache.logging.log4j.jul.LogManager -Dhdp.version={{stack_version}} -Dhadoop.mapreduce.job.classloader=true","druid.indexer.task.baseTaskDir":"/tmp/persistent/tasks","druid.processing.buffer.sizeBytes":"256000000","druid.service":"druid/middlemanager","druid.port":"8091"}}}],"host_groups":[{"name":"master","configurations":[],"components":[{"name":"APP_TIMELINE_SERVER"},{"name":"HCAT"},{"name":"HDFS_CLIENT"},{"name":"HISTORYSERVER"},{"name":"HIVE_CLIENT"},{"name":"HIVE_METASTORE"},{"name":"HIVE_SERVER"},{"name":"JOURNALNODE"},{"name":"LIVY_SERVER"},{"name":"MAPREDUCE2_CLIENT"},{"name":"METRICS_COLLECTOR"},{"name":"METRICS_MONITOR"},{"name":"MYSQL_SERVER"},{"name":"NAMENODE"},{"name":"PIG"},{"name":"RESOURCEMANAGER"},{"name":"SECONDARY_NAMENODE"},{"name":"SPARK_CLIENT"},{"name":"SPARK_JOBHISTORYSERVER"},{"name":"SQOOP"},{"name":"TEZ_CLIENT"},{"name":"WEBHCAT_SERVER"},{"name":"YARN_CLIENT"},{"name":"ZOOKEEPER_CLIENT"},{"name":"ZOOKEEPER_SERVER"},{"name":"DRUID_OVERLORD","provision_action":"INSTALL_ONLY"},{"name":"DRUID_COORDINATOR","provision_action":"INSTALL_ONLY"},{"name":"DRUID_ROUTER","provision_action":"INSTALL_ONLY"},{"name":"DRUID_BROKER","provision_action":"INSTALL_ONLY"},{"name":"DRUID_SUPERSET","provision_action":"INSTALL_ONLY"}],"cardinality":"1"},{"name":"worker","configurations":[],"components":[{"name":"HIVE_CLIENT"},{"name":"TEZ_CLIENT"},{"name":"SPARK_CLIENT"},{"name":"DATANODE"},{"name":"METRICS_MONITOR"},{"name":"NODEMANAGER"},{"name":"DRUID_MIDDLEMANAGER","provision_action":"INSTALL_ONLY"},{"name":"DRUID_HISTORICAL","provision_action":"INSTALL_ONLY"}],"cardinality":"1+"},{"name":"compute","configurations":[],"components":[{"name":"HIVE_CLIENT"},{"name":"TEZ_CLIENT"},{"name":"SPARK_CLIENT"},{"name":"METRICS_MONITOR"},{"name":"NODEMANAGER"}],"cardinality":"1+"}]},"description":"26EDW-ETL: Apache Hive 1.2.1, Apache Spark 1.6","inputs":[],"name":"26EDW-ETL: Apache Hive 1.2.1, Apache Spark 1.6","id":10,"blueprintName":"hdp26-etl-edw","hostGroupCount":3,"status":"DEFAULT","public":true},"description":"","statusReason":null,"ambariServerIp":null,"ambariServerUrl":null,"userName":"admin","secure":false,"hostGroups":[{"name":"compute","constraint":{"instanceGroupName":"compute","constraintTemplateName":null,"hostCount":1},"recipeIds":[],"recoveryMode":"AUTO","id":4,"recipes":[],"metadata":[]},{"name":"master","constraint":{"instanceGroupName":"master","constraintTemplateName":null,"hostCount":1},"recipeIds":[],"recoveryMode":"AUTO","id":6,"recipes":[],"metadata":[]},{"name":"worker","constraint":{"instanceGroupName":"worker","constraintTemplateName":null,"hostCount":1},"recipeIds":[],"recoveryMode":"AUTO","id":5,"recipes":[],"metadata":[]}],"rdsConfigIds":[],"rdsConfigs":[],"serviceEndPoints":{},"configStrategy":"ALWAYS_APPLY_DONT_OVERRIDE_CUSTOM_VALUES","ldapConfigId":null,"ldapConfig":null,"attributes":{},"blueprintInputs":[],"blueprintCustomProperties":null,"executorType":"DEFAULT","gateway":{"enableGateway":false,"path":"almaa","topologyName":"services","exposedServices":[],"ssoProvider":null,"signCert":"-----BEGIN CERTIFICATE-----\nMIICnTCCAYWgAwIBAgIBATANBgkqhkiG9w0BAQsFADASMRAwDgYDVQQDDAdzaWdu\naW5nMB4XDTE3MDkyMjE1MDkzOVoXDTI3MDkyMjE1MDkzOVowEjEQMA4GA1UEAxMH\nc2lnbmluZzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALYo9XxMS5Rj\niZJP4f8jDaTW7Vy2RkoV7iss0fjUHNZJO/xrfK+/Q5XePODKdlNsHxxr+sliEhzK\niBAVxx+foPZfBrT5CgP8PK1vSq08ng2LnAiY+QMqM9QaTtPIRFvtd0tyZ6zBPEzD\n08rLPbFjVRmBQTcLsvq3jOkc5An4ILMstzNOxbbZZXNLpXSikf0goIitMFzIElRK\nHo8i6/KKiGRlMciwgWbsD2DqgEDFWJ4PBOmqMbqOLdzN9bnrsgZ4Owhrb1KqvRbO\nKAhs/SUENGfPKbsZfo7HgAeWM6C5afno4EfZzRUspHrefjvQTZMgvVvrSrHu7Kz3\nI9R0KAthP88CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAaH9t+vRWg4JuaSrjMMmi\nPI/5N+YSNiOkI1D5VQ11JDhAMIklIrCAGbT4NoY36M1m6Ep1WXwZdATzk6FcG7kM\nxWJd/8X91cqYYeTrE7BhBONLhiAHlxYfCTR98zU/+MqmoCMKf1rQfPjantXKQfXX\n+IdIkRc2cH6xYH8Oy0tDujSldcYetzansGlsKE0NCMQIQthrm8awJ6764bCXsX8d\nja1u8eD0pJ2qVobq8Y9QZbdimCdcen/nhb5aoNmjkhWIfy1JwigNzPaa3MSCkgZn\nXtGRx7zEpiObVqx+D898Yc+K2J/nEpabvxpjSqnfyMFD+/CtX5tu9KNMycigHRWX\nkw==\n-----END CERTIFICATE-----\n","signPub":"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtij1fExLlGOJkk/h/yMN\npNbtXLZGShXuKyzR+NQc1kk7/Gt8r79Dld484Mp2U2wfHGv6yWISHMqIEBXHH5+g\n9l8GtPkKA/w8rW9KrTyeDYucCJj5Ayoz1BpO08hEW+13S3JnrME8TMPTyss9sWNV\nGYFBNwuy+reM6RzkCfggsyy3M07Fttllc0uldKKR/SCgiK0wXMgSVEoejyLr8oqI\nZGUxyLCBZuwPYOqAQMVYng8E6aoxuo4t3M31ueuyBng7CGtvUqq9Fs4oCGz9JQQ0\nZ88puxl+jseAB5YzoLlp+ejgR9nNFSyket5+O9BNkyC9W+tKse7srPcj1HQoC2E/\nzwIDAQAB\n-----END PUBLIC KEY-----\n","gatewayType":"INDIVIDUAL","ssoType":"NONE"},"customContainers":{"definitions":{}},"ambariStackDetails":null,"ambariRepoDetailsJson":{"version":"2.5.1.0","baseUrl":"http://public-repo-1.hortonworks.com/ambari/centos6/2.x/updates/2.5.1.0","gpgKeyUrl":"http://public-repo-1.hortonworks.com/ambari/centos6/RPM-GPG-KEY/RPM-GPG-KEY-Jenkins"},"ambariDatabaseDetails":{"vendor":null,"name":"postgres","host":"localhost","port":5432,"userName":null,"password":null},"customQueue":"default"},"statusReason":"","credential":{"name":"almaa","cloudPlatform":"OPENSTACK","parameters":{"facing":"internal","endpoint":"http://openstack.eng.hortonworks.com:5000/v2.0","selector":"cb-keystone-v2","keystoneVersion":"cb-keystone-v2","userName":"cloudbreak","tenantName":"cloudbreak"},"description":"","topologyId":null,"id":1,"public":false},"network":{"description":null,"subnetCIDR":"10.0.0.0/16","cloudPlatform":"OPENSTACK","parameters":{},"topologyId":null,"name":"n854917ae-1f81-433e-a420-cfde49322ab9","id":2,"publicInAccount":false},"instanceGroups":[{"templateId":4,"securityGroupId":4,"nodeCount":1,"group":"compute","type":"CORE","parameters":{},"template":{"cloudPlatform":"OPENSTACK","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"HDD","instanceType":"m1.xlarge","topologyId":null,"name":"t98b6fa6b-04d9-4b25-b5e9-1989928b7e92","id":4,"volumeCount":1,"volumeSize":10,"public":false},"securityGroup":{"description":null,"securityGroupId":"758c6d61-baf5-4a5a-8c26-7ce1e4204e45","cloudPlatform":"OPENSTACK","name":"sge4d18baf-87b8-43fe-87de-35b862240d30","id":4,"owner":"706c3c78-324e-442b-afc7-d3488ad39795","account":"seq1234567","securityRules":[],"publicInAccount":false},"id":4,"metadata":[]},{"templateId":5,"securityGroupId":5,"nodeCount":1,"group":"worker","type":"CORE","parameters":{},"template":{"cloudPlatform":"OPENSTACK","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"HDD","instanceType":"m1.xlarge","topologyId":null,"name":"t1d21fd7c-6546-4e2f-bbf9-1b47facaf63f","id":5,"volumeCount":1,"volumeSize":10,"public":false},"securityGroup":{"description":null,"securityGroupId":"758c6d61-baf5-4a5a-8c26-7ce1e4204e45","cloudPlatform":"OPENSTACK","name":"sged5c55a4-5f04-499a-8b62-35e79507fd79","id":5,"owner":"706c3c78-324e-442b-afc7-d3488ad39795","account":"seq1234567","securityRules":[],"publicInAccount":false},"id":5,"metadata":[]},{"templateId":6,"securityGroupId":6,"nodeCount":1,"group":"master","type":"GATEWAY","parameters":{},"template":{"cloudPlatform":"OPENSTACK","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"HDD","instanceType":"m1.xlarge","topologyId":null,"name":"t1c1d8f04-da57-4603-acc6-46d0bd7a11f6","id":6,"volumeCount":1,"volumeSize":10,"public":false},"securityGroup":{"description":null,"securityGroupId":"758c6d61-baf5-4a5a-8c26-7ce1e4204e45","cloudPlatform":"OPENSTACK","name":"sgd6901df2-bbb7-434f-ad7d-4db8e20e84ec","id":6,"owner":"706c3c78-324e-442b-afc7-d3488ad39795","account":"seq1234567","securityRules":[],"publicInAccount":false},"id":6,"metadata":[]}],"failurePolicy":null,"orchestrator":{"parameters":{},"apiEndpoint":null,"type":"SALT"},"created":1506092974176,"gatewayPort":9443,"image":{"imageName":"hdc-hdp--1708011150"},"cloudbreakDetails":{"version":"2.1.0-dev.236"},"flexSubscription":null,"nodeCount":3,"hardwareInfos":[],"cloudbreakEvents":[],"cloudbreakUsages":[],"cloudPlatform":"OPENSTACK","public":false};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postPublicStack = function(args, res, next) {
  /**
   * create stack as public resource
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * body StackRequest  (optional)
   * returns StackResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "cluster" : {
    "cluster" : "aeiou",
    "ambariRepoDetailsJson" : {
      "baseUrl" : "aeiou",
      "version" : "aeiou",
      "gpgKeyUrl" : "aeiou"
    },
    "hostGroups" : [ {
      "recipes" : [ {
        "recipeType" : "aeiou",
        "public" : true,
        "name" : "aeiou",
        "description" : "aeiou",
        "id" : 123456789,
        "uri" : "aeiou",
        "content" : "aeiou"
      } ],
      "metadata" : [ {
        "groupName" : "aeiou",
        "name" : "aeiou",
        "id" : 123456789,
        "state" : "aeiou"
      } ],
      "recipeIds" : [ 123456789 ],
      "recoveryMode" : "aeiou",
      "name" : "aeiou",
      "constraint" : {
        "hostCount" : 123,
        "constraintTemplateName" : "aeiou",
        "instanceGroupName" : "aeiou"
      },
      "id" : 123456789
    } ],
    "ambariServerIp" : "aeiou",
    "ambariServerUrl" : "aeiou",
    "description" : "aeiou",
    "secure" : true,
    "configStrategy" : "aeiou",
    "hoursUp" : 123,
    "serviceEndPoints" : {
      "key" : "aeiou"
    },
    "statusReason" : "aeiou",
    "ambariStackDetails" : {
      "utilsBaseURL" : "aeiou",
      "stack" : "aeiou",
      "os" : "aeiou",
      "stackRepoId" : "aeiou",
      "utilsRepoId" : "aeiou",
      "verify" : true,
      "version" : "aeiou",
      "stackBaseURL" : "aeiou"
    },
    "ldapConfigId" : 123456789,
    "blueprintInputs" : [ {
      "name" : "aeiou",
      "propertyValue" : "aeiou"
    } ],
    "ambariDatabaseDetails" : {
      "password" : "aeiou",
      "port" : 123,
      "vendor" : "aeiou",
      "name" : "aeiou",
      "host" : "aeiou",
      "userName" : "aeiou"
    },
    "id" : 123456789,
    "blueprintCustomProperties" : "aeiou",
    "executorType" : "aeiou",
    "customQueue" : "aeiou",
    "userName" : "aeiou",
    "blueprintId" : 123456789,
    "ldapConfig" : {
      "groupNameAttribute" : "aeiou",
      "groupMemberAttribute" : "aeiou",
      "description" : "aeiou",
      "userNameAttribute" : "aeiou",
      "serverPort" : 123,
      "serverHost" : "aeiou",
      "directoryType" : "aeiou",
      "bindDn" : "aeiou",
      "protocol" : "aeiou",
      "groupSearchBase" : "aeiou",
      "userSearchBase" : "aeiou",
      "public" : true,
      "domain" : "aeiou",
      "name" : "aeiou",
      "id" : 123456789,
      "userObjectClass" : "aeiou",
      "groupObjectClass" : "aeiou"
    },
    "blueprint" : {
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
    },
    "rdsConfigs" : [ {
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
    } ],
    "customContainers" : {
      "definitions" : {
        "key" : "aeiou"
      }
    },
    "name" : "aeiou",
    "attributes" : {
      "key" : "{}"
    },
    "rdsConfigIds" : [ 123456789 ],
    "gateway" : {
      "path" : "aeiou",
      "topologyName" : "aeiou",
      "gatewayType" : "aeiou",
      "ssoProvider" : "aeiou",
      "enableGateway" : true,
      "signCert" : "aeiou",
      "ssoType" : "aeiou",
      "signPub" : "aeiou",
      "exposedServices" : [ "aeiou" ]
    },
    "status" : "aeiou",
    "minutesUp" : 123
  },
  "hdpVersion" : "aeiou",
  "cloudbreakEvents" : [ {
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
  } ],
  "platformVariant" : "aeiou",
  "customHostname" : "aeiou",
  "userDefinedTags" : {
    "key" : "aeiou"
  },
  "flexSubscription" : {
    "owner" : "aeiou",
    "default" : true,
    "publicInAccount" : true,
    "smartSenseSubscriptionId" : 123456789,
    "usedForController" : true,
    "name" : "aeiou",
    "smartSenseSubscription" : {
      "owner" : "aeiou",
      "publicInAccount" : true,
      "id" : 123456789,
      "autoGenerated" : true,
      "subscriptionId" : "aeiou",
      "account" : "aeiou"
    },
    "id" : 123456789,
    "subscriptionId" : "aeiou",
    "account" : "aeiou"
  },
  "publicKey" : "aeiou",
  "availabilityZone" : "aeiou",
  "defaultTags" : {
    "key" : "aeiou"
  },
  "network" : {
    "subnetCIDR" : "aeiou",
    "cloudPlatform" : "aeiou",
    "publicInAccount" : true,
    "topologyId" : 123456789,
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "hostgroupNameAsHostname" : true,
  "onFailureAction" : "aeiou",
  "statusReason" : "aeiou",
  "credential" : {
    "cloudPlatform" : "aeiou",
    "public" : true,
    "name" : "aeiou",
    "topologyId" : 123456789,
    "description" : "aeiou",
    "id" : 123456789,
    "parameters" : {
      "key" : "{}"
    }
  },
  "public" : true,
  "networkId" : 123456789,
  "nodeCount" : 123,
  "clusterNameAsSubdomain" : true,
  "id" : 123456789,
  "failurePolicy" : {
    "adjustmentType" : "aeiou",
    "threshold" : 123456789,
    "id" : 123456789
  },
  "owner" : "aeiou",
  "applicationTags" : {
    "key" : "aeiou"
  },
  "image" : {
    "imageName" : "aeiou"
  },
  "cloudbreakDetails" : {
    "version" : "aeiou"
  },
  "cloudPlatform" : "aeiou",
  "created" : 123456789,
  "customDomain" : "aeiou",
  "gatewayPort" : 123,
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
  "loginUserName" : "aeiou",
  "instanceGroups" : [ {
    "securityGroupId" : 123456789,
    "template" : {
      "volumeType" : "aeiou",
      "cloudPlatform" : "aeiou",
      "public" : true,
      "instanceType" : "aeiou",
      "topologyId" : 123456789,
      "name" : "aeiou",
      "description" : "aeiou",
      "volumeCount" : 123,
      "id" : 123456789,
      "parameters" : {
        "key" : "{}"
      },
      "volumeSize" : 123
    },
    "metadata" : [ {
      "sshPort" : 123,
      "instanceId" : "aeiou",
      "ambariServer" : true,
      "privateIp" : "aeiou",
      "instanceType" : "aeiou",
      "discoveryFQDN" : "aeiou",
      "publicIp" : "aeiou",
      "instanceGroup" : "aeiou",
      "instanceStatus" : "aeiou"
    } ],
    "nodeCount" : 123,
    "securityGroup" : {
      "securityGroupId" : "aeiou",
      "owner" : "aeiou",
      "cloudPlatform" : "aeiou",
      "publicInAccount" : true,
      "securityRules" : [ {
        "subnet" : "aeiou",
        "protocol" : "aeiou",
        "id" : 123456789,
        "ports" : "aeiou",
        "modifiable" : true
      } ],
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : 123456789,
      "account" : "aeiou"
    },
    "id" : 123456789,
    "templateId" : 123456789,
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    },
    "group" : "aeiou"
  } ],
  "hardwareInfos" : [ {
    "instanceMetaData" : "",
    "hostMetadata" : ""
  } ],
  "name" : "aeiou",
  "credentialId" : 123456789,
  "cloudbreakUsages" : [ {
    "owner" : "aeiou",
    "costs" : 1.3579000000000001069366817318950779736042022705078125,
    "instanceNum" : 123,
    "blueprintName" : "aeiou",
    "stackId" : 123456789,
    "instanceType" : "aeiou",
    "instanceHours" : 123456789,
    "stackName" : "aeiou",
    "peak" : 123,
    "instanceGroup" : "aeiou",
    "availabilityZone" : "aeiou",
    "blueprintId" : 123456789,
    "duration" : "aeiou",
    "provider" : "aeiou",
    "flexId" : "aeiou",
    "region" : "aeiou",
    "day" : "aeiou",
    "stackUuid" : "aeiou",
    "account" : "aeiou",
    "username" : "aeiou"
  } ],
  "region" : "aeiou",
  "ambariVersion" : "aeiou",
  "parameters" : {
    "key" : "aeiou"
  },
  "account" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.putStack = function(args, res, next) {
  /**
   * update stack by id
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * id Long 
   * body UpdateStack  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.statusStack = function(args, res, next) {
  /**
   * retrieve stack status by stack id
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * id Long 
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

exports.validateStack = function(args, res, next) {
  /**
   * validate stack
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * body StackValidationRequest  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.variantsStack = function(args, res, next) {
  /**
   * retrieve available platform variants
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
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

