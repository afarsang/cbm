'use strict';

exports.deleteInstanceStackV2 = function(args, res, next) {
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

exports.deletePrivateStackV2 = function(args, res, next) {
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

exports.deletePublicStackV2 = function(args, res, next) {
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

exports.deleteStackV2 = function(args, res, next) {
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

exports.getAllStackV2 = function(args, res, next) {
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

exports.getCertificateStackV2 = function(args, res, next) {
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

exports.getPrivateStackV2 = function(args, res, next) {
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
  "stackAuthentication" : {
    "loginUserName" : "aeiou",
    "publicKey" : "aeiou",
    "publicKeyId" : "aeiou"
  },
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
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

exports.getPrivatesStackV2 = function(args, res, next) {
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
  "stackAuthentication" : {
    "loginUserName" : "aeiou",
    "publicKey" : "aeiou",
    "publicKeyId" : "aeiou"
  },
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
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

exports.getPublicStackV2 = function(args, res, next) {
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
  "stackAuthentication" : {
    "loginUserName" : "aeiou",
    "publicKey" : "aeiou",
    "publicKeyId" : "aeiou"
  },
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
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

exports.getPublicsStackV2 = function(args, res, next) {
  /**
   * retrieve public and private (owned) stacks
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [{"name":"af-cl-1","availabilityZone":"nova","region":"RegionOne","platformVariant":"HEAT","credentialId":1,"onFailureAction":"DO_NOTHING","networkId":1,"ambariVersion":null,"hdpVersion":null,"parameters":{},"customDomain":null,"customHostname":null,"clusterNameAsSubdomain":false,"hostgroupNameAsHostname":false,"applicationTags":{},"userDefinedTags":{},"defaultTags":{},"id":1,"owner":"a0b0fac8-c28c-4215-b575-54a30f175441","account":"seq1234567","status":"CREATE_IN_PROGRESS","cluster":{"id":null,"name":null,"status":null,"hoursUp":0,"minutesUp":0,"cluster":null,"blueprintId":null,"blueprint":null,"description":null,"statusReason":null,"ambariServerIp":null,"ambariServerUrl":null,"userName":null,"secure":false,"hostGroups":[],"rdsConfigIds":[],"rdsConfigs":[],"serviceEndPoints":{},"configStrategy":null,"ldapConfigId":null,"ldapConfig":null,"attributes":{},"blueprintInputs":[],"blueprintCustomProperties":null,"executorType":null,"gateway":null,"customContainers":null,"ambariStackDetails":null,"ambariRepoDetailsJson":null,"ambariDatabaseDetails":null,"customQueue":null},"statusReason":"Image setup","credential":{"name":"openstack","cloudPlatform":"OPENSTACK","parameters":{"facing":"internal","endpoint":"http://openstack.eng.hortonworks.com:5000/v2.0","selector":"cb-keystone-v2","keystoneVersion":"cb-keystone-v2","userName":"cloudbreak","tenantName":"cloudbreak"},"description":"1","topologyId":null,"id":1,"public":false},"network":{"description":null,"subnetCIDR":null,"cloudPlatform":"OPENSTACK","parameters":{"networkId":"a5ad7a1d-d3a6-4180-8d61-07a23f6fb449","subnetId":"0404bf21-db5f-4987-8576-e65a4a99b14e"},"topologyId":null,"name":"neb1ee5ca-681d-4984-a310-decddd84031d","id":1,"publicInAccount":false},"instanceGroups":[{"templateId":3,"securityGroupId":3,"nodeCount":1,"group":"worker","type":"CORE","parameters":{},"template":{"cloudPlatform":"OPENSTACK","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"HDD","instanceType":"cloudbreak","topologyId":null,"name":"t388246f7-4271-46ad-a71a-65d70a8c88cc","id":3,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"OPENSTACK","name":"sg29826c66-5431-494f-bddf-87add83d1ecb","id":3,"owner":"a0b0fac8-c28c-4215-b575-54a30f175441","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":5}],"publicInAccount":false},"id":3,"metadata":[]},{"templateId":2,"securityGroupId":2,"nodeCount":0,"group":"compute","type":"CORE","parameters":{},"template":{"cloudPlatform":"OPENSTACK","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"HDD","instanceType":"cloudbreak","topologyId":null,"name":"t9fbb91cc-403a-40e2-b73f-5aa9fca3de5b","id":2,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"OPENSTACK","name":"sg36aef581-3797-49a1-84f9-de48c9d5da37","id":2,"owner":"a0b0fac8-c28c-4215-b575-54a30f175441","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":4}],"publicInAccount":false},"id":2,"metadata":[]},{"templateId":1,"securityGroupId":1,"nodeCount":1,"group":"master","type":"GATEWAY","parameters":{},"template":{"cloudPlatform":"OPENSTACK","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"HDD","instanceType":"cloudbreak","topologyId":null,"name":"tdd0076a0-eb56-4c0a-b7c9-30427527455b","id":1,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"OPENSTACK","name":"sg9c9be545-5922-4c68-ae1f-927283487ad7","id":1,"owner":"a0b0fac8-c28c-4215-b575-54a30f175441","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":1},{"subnet":"0.0.0.0/0","ports":"443","protocol":"tcp","modifiable":false,"id":2},{"subnet":"0.0.0.0/0","ports":"9443","protocol":"tcp","modifiable":false,"id":3}],"publicInAccount":false},"id":1,"metadata":[]}],"failurePolicy":null,"orchestrator":{"parameters":{},"apiEndpoint":null,"type":"SALT"},"created":1510244820369,"gatewayPort":9443,"image":{"imageName":"hdc-hdp--1710161226"},"cloudbreakDetails":{"version":"2.1.0-dev.410"},"flexSubscription":null,"stackAuthentication":{"publicKey":null,"publicKeyId":"seq-master","loginUserName":"cloudbreak"},"nodeCount":2,"hardwareInfos":[],"cloudbreakEvents":[],"cloudbreakUsages":[],"cloudPlatform":"OPENSTACK","public":false}];

/*[ {
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
  "stackAuthentication" : {
    "loginUserName" : "aeiou",
    "publicKey" : "aeiou",
    "publicKeyId" : "aeiou"
  },
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
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
} ];*/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getStackForAmbariV2 = function(args, res, next) {
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
  "stackAuthentication" : {
    "loginUserName" : "aeiou",
    "publicKey" : "aeiou",
    "publicKeyId" : "aeiou"
  },
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
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

exports.getStackV2 = function(args, res, next) {
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
  "stackAuthentication" : {
    "loginUserName" : "aeiou",
    "publicKey" : "aeiou",
    "publicKeyId" : "aeiou"
  },
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
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

exports.postPrivateStackV2 = function(args, res, next) {
  /**
   * create stack as private resource
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * body StackV2Request  (optional)
   * returns StackResponse
   **/
  var examples = {};
  examples['application/json'] = {"name":"af-cl-1","availabilityZone":"nova","region":"RegionOne","platformVariant":"HEAT","credentialId":1,"onFailureAction":"DO_NOTHING","networkId":1,"ambariVersion":"2.5.1.0","hdpVersion":"2.6.1.0","parameters":{},"customDomain":null,"customHostname":null,"clusterNameAsSubdomain":false,"hostgroupNameAsHostname":false,"applicationTags":{},"userDefinedTags":{},"defaultTags":{},"id":1,"owner":"a0b0fac8-c28c-4215-b575-54a30f175441","account":"seq1234567","status":"REQUESTED","cluster":{"id":1,"name":"af-cl-1","status":"REQUESTED","hoursUp":0,"minutesUp":0,"cluster":null,"blueprintId":3,"blueprint":{"ambariBlueprint":"eyJCbHVlcHJpbnRzIjp7ImJsdWVwcmludF9uYW1lIjoiaGRwMjYtZWR3LWFuYWx5dGljcyIsInN0YWNrX25hbWUiOiJIRFAiLCJzdGFja192ZXJzaW9uIjoiMi42In0sInNldHRpbmdzIjpbeyJyZWNvdmVyeV9zZXR0aW5ncyI6W119LHsic2VydmljZV9zZXR0aW5ncyI6W3sibmFtZSI6IkhJVkUiLCJjcmVkZW50aWFsX3N0b3JlX2VuYWJsZWQiOiJmYWxzZSJ9XX0seyJjb21wb25lbnRfc2V0dGluZ3MiOltdfV0sImNvbmZpZ3VyYXRpb25zIjpbeyJoaXZlLWludGVyYWN0aXZlLWVudiI6eyJlbmFibGVfaGl2ZV9pbnRlcmFjdGl2ZSI6InRydWUifX0seyJjb3JlLXNpdGUiOnsiZnMudHJhc2guaW50ZXJ2YWwiOiI0MzIwIn19LHsiaGRmcy1zaXRlIjp7ImRmcy5uYW1lbm9kZS5zYWZlbW9kZS50aHJlc2hvbGQtcGN0IjoiMC45OSJ9fSx7ImhpdmUtaW50ZXJhY3RpdmUtc2l0ZSI6eyJoaXZlLmV4ZWMub3JjLnNwbGl0LnN0cmF0ZWd5IjoiQkkiLCJoaXZlLnN0YXRzLmZldGNoLmJpdHZlY3RvciI6InRydWUiLCJoaXZlLm1ldGFzdG9yZS5yYXdzdG9yZS5pbXBsIjoib3JnLmFwYWNoZS5oYWRvb3AuaGl2ZS5tZXRhc3RvcmUuY2FjaGUuQ2FjaGVkU3RvcmUifX0seyJoaXZlLXNpdGUiOnsiaGl2ZS5leGVjLmNvbXByZXNzLm91dHB1dCI6InRydWUiLCJoaXZlLm1lcmdlLm1hcGZpbGVzIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50ZXouaW5pdGlhbGl6ZS5kZWZhdWx0LnNlc3Npb25zIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50cmFuc3BvcnQubW9kZSI6Imh0dHAifX0seyJtYXByZWQtc2l0ZSI6eyJtYXByZWR1Y2Uuam9iLnJlZHVjZS5zbG93c3RhcnQuY29tcGxldGVkbWFwcyI6IjAuNyIsIm1hcHJlZHVjZS5tYXAub3V0cHV0LmNvbXByZXNzIjoidHJ1ZSIsIm1hcHJlZHVjZS5vdXRwdXQuZmlsZW91dHB1dGZvcm1hdC5jb21wcmVzcyI6InRydWUifX0seyJ0ZXotc2l0ZSI6eyJ0ZXoucnVudGltZS5zaHVmZmxlLnBhcmFsbGVsLmNvcGllcyI6IjQiLCJ0ZXoucnVudGltZS5lbmFibGUuZmluYWwtbWVyZ2UuaW4ub3V0cHV0IjoiZmFsc2UiLCJ0ZXouYW0uYW0tcm0uaGVhcnRiZWF0LmludGVydmFsLW1zLm1heCI6IjIwMDAifX0seyJ5YXJuLXNpdGUiOnsieWFybi5hY2wuZW5hYmxlIjoidHJ1ZSJ9fV0sImhvc3RfZ3JvdXBzIjpbeyJuYW1lIjoibWFzdGVyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiQVBQX1RJTUVMSU5FX1NFUlZFUiJ9LHsibmFtZSI6IkhDQVQifSx7Im5hbWUiOiJIREZTX0NMSUVOVCJ9LHsibmFtZSI6IkhJU1RPUllTRVJWRVIifSx7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IkhJVkVfTUVUQVNUT1JFIn0seyJuYW1lIjoiSElWRV9TRVJWRVIifSx7Im5hbWUiOiJISVZFX1NFUlZFUl9JTlRFUkFDVElWRSJ9LHsibmFtZSI6IkpPVVJOQUxOT0RFIn0seyJuYW1lIjoiTElWWV9TRVJWRVIifSx7Im5hbWUiOiJNQVBSRURVQ0UyX0NMSUVOVCJ9LHsibmFtZSI6Ik1FVFJJQ1NfQ09MTEVDVE9SIn0seyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiTVlTUUxfU0VSVkVSIn0seyJuYW1lIjoiTkFNRU5PREUifSx7Im5hbWUiOiJQSUcifSx7Im5hbWUiOiJSRVNPVVJDRU1BTkFHRVIifSx7Im5hbWUiOiJTRUNPTkRBUllfTkFNRU5PREUifSx7Im5hbWUiOiJTTElERVIifSx7Im5hbWUiOiJTUEFSS19DTElFTlQifSx7Im5hbWUiOiJTUEFSS19KT0JISVNUT1JZU0VSVkVSIn0seyJuYW1lIjoiVEVaX0NMSUVOVCJ9LHsibmFtZSI6IldFQkhDQVRfU0VSVkVSIn0seyJuYW1lIjoiWUFSTl9DTElFTlQifSx7Im5hbWUiOiJaRVBQRUxJTl9NQVNURVIifSx7Im5hbWUiOiJaT09LRUVQRVJfQ0xJRU5UIn0seyJuYW1lIjoiWk9PS0VFUEVSX1NFUlZFUiJ9XSwiY2FyZGluYWxpdHkiOiIxIn0seyJuYW1lIjoid29ya2VyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiSElWRV9DTElFTlQifSx7Im5hbWUiOiJURVpfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUktfQ0xJRU5UIn0seyJuYW1lIjoiREFUQU5PREUifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9LHsibmFtZSI6ImNvbXB1dGUiLCJjb25maWd1cmF0aW9ucyI6W10sImNvbXBvbmVudHMiOlt7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IlRFWl9DTElFTlQifSx7Im5hbWUiOiJTUEFSS19DTElFTlQifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9XX0=","description":"EDW-Analytics: Apache Hive 2 LLAP, Apache Zeppelin 0.7.0","inputs":[],"name":"EDW-Analytics: Apache Hive 2 LLAP, Apache Zeppelin 0.7.0","id":3,"blueprintName":"hdp26-edw-analytics","hostGroupCount":3,"status":"DEFAULT","public":true},"description":"","statusReason":null,"ambariServerIp":null,"ambariServerUrl":null,"userName":"admin","secure":false,"hostGroups":[{"name":"compute","constraint":{"instanceGroupName":"compute","constraintTemplateName":null,"hostCount":0},"recipeIds":[],"recoveryMode":"AUTO","id":2,"recipes":[],"metadata":[]},{"name":"worker","constraint":{"instanceGroupName":"worker","constraintTemplateName":null,"hostCount":1},"recipeIds":[],"recoveryMode":"AUTO","id":3,"recipes":[],"metadata":[]},{"name":"master","constraint":{"instanceGroupName":"master","constraintTemplateName":null,"hostCount":1},"recipeIds":[],"recoveryMode":"AUTO","id":1,"recipes":[],"metadata":[]}],"rdsConfigIds":[],"rdsConfigs":[],"serviceEndPoints":{},"configStrategy":"ALWAYS_APPLY_DONT_OVERRIDE_CUSTOM_VALUES","ldapConfigId":null,"ldapConfig":null,"attributes":{},"blueprintInputs":[],"blueprintCustomProperties":null,"executorType":"DEFAULT","gateway":{"enableGateway":false,"path":"af-cl-1","topologyName":"services","exposedServices":[],"ssoProvider":null,"signCert":"-----BEGIN CERTIFICATE-----\nMIICnTCCAYWgAwIBAgIBATANBgkqhkiG9w0BAQsFADASMRAwDgYDVQQDDAdzaWdu\naW5nMB4XDTE3MTEwOTE2MjcwNloXDTI3MTEwOTE2MjcwNlowEjEQMA4GA1UEAxMH\nc2lnbmluZzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAIiLdUBqTKhF\nNtBKynUgSspTEYLE9Li4EVFgvJ07wP06C6UimfoyRFXJlhCtL+H3ACxk3aGMUg8V\nufpM+xo0RDoghLn/0K7H7ryf1Myg2yQaC3pvPAWrp15Uq1LhKnrxyP0VQpn+O0Y3\n6+3sxb6TG2wkozKIsbx0SLG9g95nG5h9YYqfIwkhH9Wn6vbHZojabDi4kUDPnKi4\nUBMyk0l/jy9jokSEK2HxuZ7kV7+AMOQUIXyMciDyBeExE40LatInJewzuehcFhc9\nrPcWENQNcXvZ8bG83dPFARTUtnE669VCm7PH4uKSoy5fpf5dCM4ppSYt3w/Olfs2\nPbAfqdVNInMCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAl64zzFSKRRHkgg5o2UZw\nTwxK+8iL/StESok1UqrIPtBNIVFOW93hZZAi4qGJiBJ/Dr8Fx6JaO+9Z84vVLnDC\ntn3NtOVB+S/d34N41Pmlv9y32DXPujoNCeW/724Nvrw4ut3VoBlJO4Xxm5e2LjhJ\ns7V6LYdMqmCMjeDn46Lxgik17Le9W2++zFDfz86/sZpCQZimDMgzA7NWf9cwF36P\nBSwgqWzKae2oMsuq9QEqAn3JHDr3qBEeWDdIgC78porxedOXXAYfDKebNu9DjwGq\nEHxBn4fgHnZMOAyGHq7FEfdAADeKKhwzCfyMwIpFq61S9cCB5ircWoFs+ZX2ttzR\naA==\n-----END CERTIFICATE-----\n","signPub":"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiIt1QGpMqEU20ErKdSBK\nylMRgsT0uLgRUWC8nTvA/ToLpSKZ+jJEVcmWEK0v4fcALGTdoYxSDxW5+kz7GjRE\nOiCEuf/QrsfuvJ/UzKDbJBoLem88BaunXlSrUuEqevHI/RVCmf47Rjfr7ezFvpMb\nbCSjMoixvHRIsb2D3mcbmH1hip8jCSEf1afq9sdmiNpsOLiRQM+cqLhQEzKTSX+P\nL2OiRIQrYfG5nuRXv4Aw5BQhfIxyIPIF4TETjQtq0icl7DO56FwWFz2s9xYQ1A1x\ne9nxsbzd08UBFNS2cTrr1UKbs8fi4pKjLl+l/l0IzimlJi3fD86V+zY9sB+p1U0i\ncwIDAQAB\n-----END PUBLIC KEY-----\n","gatewayType":"INDIVIDUAL","ssoType":"NONE"},"customContainers":{"definitions":{}},"ambariStackDetails":null,"ambariRepoDetailsJson":{"version":"2.5.1.0","baseUrl":"http://public-repo-1.hortonworks.com/ambari/centos6/2.x/updates/2.5.1.0","gpgKeyUrl":"http://public-repo-1.hortonworks.com/ambari/centos6/RPM-GPG-KEY/RPM-GPG-KEY-Jenkins"},"ambariDatabaseDetails":{"vendor":null,"name":"postgres","host":"localhost","port":5432,"userName":null,"password":null},"customQueue":"default"},"statusReason":"","credential":{"name":"openstack","cloudPlatform":"OPENSTACK","parameters":{"facing":"internal","endpoint":"http://openstack.eng.hortonworks.com:5000/v2.0","selector":"cb-keystone-v2","keystoneVersion":"cb-keystone-v2","userName":"cloudbreak","tenantName":"cloudbreak"},"description":"1","topologyId":null,"id":1,"public":false},"network":{"description":null,"subnetCIDR":null,"cloudPlatform":"OPENSTACK","parameters":{"networkId":"a5ad7a1d-d3a6-4180-8d61-07a23f6fb449","subnetId":"0404bf21-db5f-4987-8576-e65a4a99b14e"},"topologyId":null,"name":"neb1ee5ca-681d-4984-a310-decddd84031d","id":1,"publicInAccount":false},"instanceGroups":[{"templateId":1,"securityGroupId":1,"nodeCount":1,"group":"master","type":"GATEWAY","parameters":{},"template":{"cloudPlatform":"OPENSTACK","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"HDD","instanceType":"cloudbreak","topologyId":null,"name":"tdd0076a0-eb56-4c0a-b7c9-30427527455b","id":1,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"OPENSTACK","name":"sg9c9be545-5922-4c68-ae1f-927283487ad7","id":1,"owner":"a0b0fac8-c28c-4215-b575-54a30f175441","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":1},{"subnet":"0.0.0.0/0","ports":"443","protocol":"tcp","modifiable":false,"id":2},{"subnet":"0.0.0.0/0","ports":"9443","protocol":"tcp","modifiable":false,"id":3}],"publicInAccount":false},"id":1,"metadata":[]},{"templateId":2,"securityGroupId":2,"nodeCount":0,"group":"compute","type":"CORE","parameters":{},"template":{"cloudPlatform":"OPENSTACK","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"HDD","instanceType":"cloudbreak","topologyId":null,"name":"t9fbb91cc-403a-40e2-b73f-5aa9fca3de5b","id":2,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"OPENSTACK","name":"sg36aef581-3797-49a1-84f9-de48c9d5da37","id":2,"owner":"a0b0fac8-c28c-4215-b575-54a30f175441","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":4}],"publicInAccount":false},"id":2,"metadata":[]},{"templateId":3,"securityGroupId":3,"nodeCount":1,"group":"worker","type":"CORE","parameters":{},"template":{"cloudPlatform":"OPENSTACK","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"HDD","instanceType":"cloudbreak","topologyId":null,"name":"t388246f7-4271-46ad-a71a-65d70a8c88cc","id":3,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"OPENSTACK","name":"sg29826c66-5431-494f-bddf-87add83d1ecb","id":3,"owner":"a0b0fac8-c28c-4215-b575-54a30f175441","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":5}],"publicInAccount":false},"id":3,"metadata":[]}],"failurePolicy":null,"orchestrator":{"parameters":{},"apiEndpoint":null,"type":"SALT"},"created":1510244820369,"gatewayPort":9443,"image":{"imageName":"hdc-hdp--1710161226"},"cloudbreakDetails":{"version":"2.1.0-dev.410"},"flexSubscription":null,"stackAuthentication":{"publicKey":null,"publicKeyId":"seq-master","loginUserName":"cloudbreak"},"nodeCount":2,"hardwareInfos":[],"cloudbreakEvents":[],"cloudbreakUsages":[],"cloudPlatform":"OPENSTACK","public":false};

/*{
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
  "stackAuthentication" : {
    "loginUserName" : "aeiou",
    "publicKey" : "aeiou",
    "publicKeyId" : "aeiou"
  },
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
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
};*/
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postPublicStackV2 = function(args, res, next) {
  /**
   * create stack as public resource
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * body StackV2Request  (optional)
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
  "stackAuthentication" : {
    "loginUserName" : "aeiou",
    "publicKey" : "aeiou",
    "publicKeyId" : "aeiou"
  },
  "orchestrator" : {
    "apiEndpoint" : "aeiou",
    "type" : "aeiou",
    "parameters" : {
      "key" : "{}"
    }
  },
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

exports.putpasswordStackV2 = function(args, res, next) {
  /**
   * update stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * body UserNamePassword  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.putreinstallStackV2 = function(args, res, next) {
  /**
   * update stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * body ReinstallRequestV2  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.putrepairStackV2 = function(args, res, next) {
  /**
   * update stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.putscalingStackV2 = function(args, res, next) {
  /**
   * update stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * body StackScaleRequestV2  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.putstartStackV2 = function(args, res, next) {
  /**
   * update stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * no response value expected for this operation
   **/
  if (args.name.value === 'azstatus') {
      res.statusCode=400
      res.end(JSON.stringify({"message":"Cannot update the status of stack 'x' to STARTED, because something something dark side"}));
  } else {
      res.end();
  }
}

exports.putstopStackV2 = function(args, res, next) {
  /**
   * update stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * no response value expected for this operation
   **/
  if (args.name.value === 'azstatus') {
      res.statusCode=400
      res.end(JSON.stringify({"message":"Cannot update the status of stack 'x' to STOPPED, because something something dark side"}));
  } else {
      res.end();
  }
}

exports.putsyncStackV2 = function(args, res, next, params) {
  /**
   * update stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.statusStackV2 = function(args, res, next) {
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

exports.validateStackV2 = function(args, res, next) {
  /**
   * validate stack
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * body StackValidationRequest  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.variantsStackV2 = function(args, res, next) {
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

