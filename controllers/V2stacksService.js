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

exports.putStackV2 = function(args, res, next) {
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

