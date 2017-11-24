'use strict';
const debug = require('debug')('nemszpesz')

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

exports.getPublicStack = function(args, res, next, params) {
  /**
   * retrieve a public or private (owned) stack by name
   * Stacks are template instances - a running cloud infrastructure created based on a template. Stacks are always launched on behalf of a cloud user account. Stacks support a wide range of resources, allowing you to build a highly available, reliable, and scalable infrastructure for your application needs.
   *
   * name String 
   * entry List  (optional)
   * returns StackResponse
   **/
  var examples = {};
  examples['application/json'] ={"name":params.name.value,"availabilityZone":"eu-west-1a","region":"eu-west-1","platformVariant":"AWS","credentialId":1,"onFailureAction":"DO_NOTHING","networkId":9,"ambariVersion":"2.5.1.0","hdpVersion":"2.6","parameters":{"AWS_SUBNET":"subnet-e73952bc","AWS_VPC":"vpc-1b0f347c"},"customDomain":null,"customHostname":null,"clusterNameAsSubdomain":false,"hostgroupNameAsHostname":false,"applicationTags":{},"userDefinedTags":{},"defaultTags":{},"id":10,"owner":"b56da66a-92f2-4e30-9da3-127fff51dec5","account":"seq1234567","status":"AVAILABLE","cluster":{"id":10,"name":"aaaaa","status":"AVAILABLE","hoursUp":19,"minutesUp":57,"cluster":null,"blueprintId":10,"blueprint":{"ambariBlueprint":"eyJCbHVlcHJpbnRzIjp7ImJsdWVwcmludF9uYW1lIjoiaGRwMjYtZWR3LWFuYWx5dGljcyIsInN0YWNrX25hbWUiOiJIRFAiLCJzdGFja192ZXJzaW9uIjoiMi42In0sInNldHRpbmdzIjpbeyJyZWNvdmVyeV9zZXR0aW5ncyI6W119LHsic2VydmljZV9zZXR0aW5ncyI6W3sibmFtZSI6IkhJVkUiLCJjcmVkZW50aWFsX3N0b3JlX2VuYWJsZWQiOiJmYWxzZSJ9XX0seyJjb21wb25lbnRfc2V0dGluZ3MiOltdfV0sImNvbmZpZ3VyYXRpb25zIjpbeyJoaXZlLWludGVyYWN0aXZlLWVudiI6eyJlbmFibGVfaGl2ZV9pbnRlcmFjdGl2ZSI6InRydWUifX0seyJjb3JlLXNpdGUiOnsiZnMudHJhc2guaW50ZXJ2YWwiOiI0MzIwIn19LHsiaGRmcy1zaXRlIjp7ImRmcy5uYW1lbm9kZS5zYWZlbW9kZS50aHJlc2hvbGQtcGN0IjoiMC45OSJ9fSx7ImhpdmUtaW50ZXJhY3RpdmUtc2l0ZSI6eyJoaXZlLmV4ZWMub3JjLnNwbGl0LnN0cmF0ZWd5IjoiQkkiLCJoaXZlLnN0YXRzLmZldGNoLmJpdHZlY3RvciI6InRydWUiLCJoaXZlLm1ldGFzdG9yZS5yYXdzdG9yZS5pbXBsIjoib3JnLmFwYWNoZS5oYWRvb3AuaGl2ZS5tZXRhc3RvcmUuY2FjaGUuQ2FjaGVkU3RvcmUifX0seyJoaXZlLXNpdGUiOnsiaGl2ZS5leGVjLmNvbXByZXNzLm91dHB1dCI6InRydWUiLCJoaXZlLm1lcmdlLm1hcGZpbGVzIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50ZXouaW5pdGlhbGl6ZS5kZWZhdWx0LnNlc3Npb25zIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50cmFuc3BvcnQubW9kZSI6Imh0dHAifX0seyJtYXByZWQtc2l0ZSI6eyJtYXByZWR1Y2Uuam9iLnJlZHVjZS5zbG93c3RhcnQuY29tcGxldGVkbWFwcyI6IjAuNyIsIm1hcHJlZHVjZS5tYXAub3V0cHV0LmNvbXByZXNzIjoidHJ1ZSIsIm1hcHJlZHVjZS5vdXRwdXQuZmlsZW91dHB1dGZvcm1hdC5jb21wcmVzcyI6InRydWUifX0seyJ0ZXotc2l0ZSI6eyJ0ZXoucnVudGltZS5zaHVmZmxlLnBhcmFsbGVsLmNvcGllcyI6IjQiLCJ0ZXoucnVudGltZS5lbmFibGUuZmluYWwtbWVyZ2UuaW4ub3V0cHV0IjoiZmFsc2UiLCJ0ZXouYW0uYW0tcm0uaGVhcnRiZWF0LmludGVydmFsLW1zLm1heCI6IjIwMDAifX0seyJ5YXJuLXNpdGUiOnsieWFybi5hY2wuZW5hYmxlIjoidHJ1ZSJ9fV0sImhvc3RfZ3JvdXBzIjpbeyJuYW1lIjoibWFzdGVyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiQVBQX1RJTUVMSU5FX1NFUlZFUiJ9LHsibmFtZSI6IkhDQVQifSx7Im5hbWUiOiJIREZTX0NMSUVOVCJ9LHsibmFtZSI6IkhJU1RPUllTRVJWRVIifSx7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IkhJVkVfTUVUQVNUT1JFIn0seyJuYW1lIjoiSElWRV9TRVJWRVIifSx7Im5hbWUiOiJISVZFX1NFUlZFUl9JTlRFUkFDVElWRSJ9LHsibmFtZSI6IkpPVVJOQUxOT0RFIn0seyJuYW1lIjoiTElWWV9TRVJWRVIifSx7Im5hbWUiOiJNQVBSRURVQ0UyX0NMSUVOVCJ9LHsibmFtZSI6Ik1FVFJJQ1NfQ09MTEVDVE9SIn0seyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiTVlTUUxfU0VSVkVSIn0seyJuYW1lIjoiTkFNRU5PREUifSx7Im5hbWUiOiJQSUcifSx7Im5hbWUiOiJSRVNPVVJDRU1BTkFHRVIifSx7Im5hbWUiOiJTRUNPTkRBUllfTkFNRU5PREUifSx7Im5hbWUiOiJTTElERVIifSx7Im5hbWUiOiJTUEFSS19DTElFTlQifSx7Im5hbWUiOiJTUEFSS19KT0JISVNUT1JZU0VSVkVSIn0seyJuYW1lIjoiVEVaX0NMSUVOVCJ9LHsibmFtZSI6IldFQkhDQVRfU0VSVkVSIn0seyJuYW1lIjoiWUFSTl9DTElFTlQifSx7Im5hbWUiOiJaRVBQRUxJTl9NQVNURVIifSx7Im5hbWUiOiJaT09LRUVQRVJfQ0xJRU5UIn0seyJuYW1lIjoiWk9PS0VFUEVSX1NFUlZFUiJ9XSwiY2FyZGluYWxpdHkiOiIxIn0seyJuYW1lIjoid29ya2VyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiSElWRV9DTElFTlQifSx7Im5hbWUiOiJURVpfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUktfQ0xJRU5UIn0seyJuYW1lIjoiREFUQU5PREUifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9LHsibmFtZSI6ImNvbXB1dGUiLCJjb25maWd1cmF0aW9ucyI6W10sImNvbXBvbmVudHMiOlt7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IlRFWl9DTElFTlQifSx7Im5hbWUiOiJTUEFSS19DTElFTlQifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9XX0=","description":"EDW-Analytics: Apache Hive 2 LLAP, Apache Zeppelin 0.7.0","inputs":[],"name":"EDW-Analytics: Apache Hive 2 LLAP, Apache Zeppelin 0.7.0","id":10,"blueprintName":"hdp26-edw-analytics","hostGroupCount":3,"status":"DEFAULT","public":true},"description":"","statusReason":"","ambariServerIp":"34.252.68.7","ambariServerUrl":"https://34.252.68.7/ambari/","userName":"admin","secure":false,"hostGroups":[{"name":"master","constraint":{"instanceGroupName":"master","constraintTemplateName":null,"hostCount":1},"recipeIds":[],"recoveryMode":"AUTO","id":43,"recipes":[],"metadata":[{"name":"ip-10-0-87-230.eu-west-1.compute.internal","groupName":"master","id":37,"state":"HEALTHY"}]},{"name":"compute","constraint":{"instanceGroupName":"compute","constraintTemplateName":null,"hostCount":0},"recipeIds":[],"recoveryMode":"AUTO","id":42,"recipes":[],"metadata":[]},{"name":"worker","constraint":{"instanceGroupName":"worker","constraintTemplateName":null,"hostCount":1},"recipeIds":[],"recoveryMode":"AUTO","id":41,"recipes":[],"metadata":[{"name":"ip-10-0-138-212.eu-west-1.compute.internal","groupName":"worker","id":36,"state":"HEALTHY"}]}],"rdsConfigIds":[],"rdsConfigs":[],"serviceEndPoints":{"Hive Server":"http://34.252.68.7:10000","Zeppelin UI":"http://34.252.68.7:9995","Job History Server":"http://34.252.68.7:19888","Name Node":"http://34.252.68.7:50070","Zeppelin Web Socket":"http://34.252.68.7:9996","Resource Manager":"http://34.252.68.7:8088","Spark History Server":"http://34.252.68.7:18080"},"configStrategy":"ALWAYS_APPLY_DONT_OVERRIDE_CUSTOM_VALUES","ldapConfigId":null,"ldapConfig":null,"attributes":{"VIEW_DEFINITIONS":["ADMIN_VIEW/2.5.1.0/INSTANCE","CAPACITY-SCHEDULER/1.0.0/AUTO_CS_INSTANCE","FILES/1.0.0/AUTO_FILES_INSTANCE","HIVE/1.5.0/AUTO_HIVE_INSTANCE","HIVE/2.0.0/AUTO_HIVE20_INSTANCE","TEZ/0.7.0.2.6.1.0-118/TEZ_CLUSTER_INSTANCE"]},"blueprintInputs":[],"blueprintCustomProperties":null,"executorType":"DEFAULT","gateway":{"enableGateway":false,"path":"aaaaa","topologyName":"services","exposedServices":[],"ssoProvider":null,"signCert":"-----BEGIN CERTIFICATE-----\nMIICnTCCAYWgAwIBAgIBATANBgkqhkiG9w0BAQsFADASMRAwDgYDVQQDDAdzaWdu\naW5nMB4XDTE3MTEyMzEyNDgyMFoXDTI3MTEyMzEyNDgyMFowEjEQMA4GA1UEAxMH\nc2lnbmluZzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMAxZf/WrPjs\n8yCYrnsGAdjOFOLRm1ObKhMX1u/+mco9Zq2rGQCJLeB9azauI8j3tA9zUOQG1eDF\nfY//wpd+tAv9jU2pA1YSpsfhrhyJyMUDqHAbCZav6WLDuHOvjm7krz4q5z5Zx60r\nWtGFtQ4ArAEOy0sHC6jIoMIws/EhHcr8lF9LYTN5zA69v5dV4ySxayqkvfDBMoAe\nN1e1wVimokDA5sJvWYZC4j3rdjvYqyvQZIc3+qZtyLVK0oFkI+97Veg+kOI2ohhK\nTQSOVi8UEh0kxGcefxCouTXDjBV9yAM31AMGf/jqlHJ5jpiB+Lnd8nebG5H4iaZx\nZQLDKYXLlBcCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEACdjlvQU6/2fRzCPPhSfU\npDYlNOYKX72dGsCLpxUiTM2eRXN8aLhKUu3XR3cRNclpQkq90+oXDULBGda5fHeA\n0ahrRc8meWBCgx7ufuNKojbAnmGeNH1iwV2uvbgslI/AuA5SRvYW0KSb/7nvzUqx\nKY+KFaqDPbugWqbm65pYMYG/+ziEzyNJEdhRMcPt5WtjWf5ckqCfR1VpSNOskTmT\nDiX4R121A8JvgrugalRM4PfoNhy6sJ7HYA+yMtgigKBho2d0uBq1h8Jwz0VzQXze\n4z83BOKwciLhFhgOyynIEsyDuNsE40gyODjMwAB8CT9ObvNdKOEftTjbGQ24YBel\nBQ==\n-----END CERTIFICATE-----\n","signPub":"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwDFl/9as+OzzIJiuewYB\n2M4U4tGbU5sqExfW7/6Zyj1mrasZAIkt4H1rNq4jyPe0D3NQ5AbV4MV9j//Cl360\nC/2NTakDVhKmx+GuHInIxQOocBsJlq/pYsO4c6+ObuSvPirnPlnHrSta0YW1DgCs\nAQ7LSwcLqMigwjCz8SEdyvyUX0thM3nMDr2/l1XjJLFrKqS98MEygB43V7XBWKai\nQMDmwm9ZhkLiPet2O9irK9Bkhzf6pm3ItUrSgWQj73tV6D6Q4jaiGEpNBI5WLxQS\nHSTEZx5/EKi5NcOMFX3IAzfUAwZ/+OqUcnmOmIH4ud3yd5sbkfiJpnFlAsMphcuU\nFwIDAQAB\n-----END PUBLIC KEY-----\n","gatewayType":"INDIVIDUAL","ssoType":"NONE"},"customContainers":{"definitions":{}},"ambariStackDetails":null,"ambariRepoDetailsJson":{"version":"2.5.1.0","baseUrl":"http://public-repo-1.hortonworks.com/ambari/centos6/2.x/updates/2.5.1.0","gpgKeyUrl":"http://public-repo-1.hortonworks.com/ambari/centos6/RPM-GPG-KEY/RPM-GPG-KEY-Jenkins"},"ambariDatabaseDetails":{"vendor":null,"name":"postgres","host":"localhost","port":5432,"userName":null,"password":null},"customQueue":"default"},"statusReason":"Cluster creation finished.","credential":{"name":"aws-aws","cloudPlatform":"AWS","parameters":{"smartSenseId":"null","selector":"key-based"},"description":"","topologyId":null,"id":1,"public":false},"network":{"description":null,"subnetCIDR":"10.0.0.0/16","cloudPlatform":"AWS","parameters":{"publicNetId":null,"routerId":null,"internetGatewayId":null,"networkId":null,"vpcId":null},"topologyId":null,"name":"nb51cc27e-c2d8-4719-9130-a537e766e792","id":9,"publicInAccount":false},"instanceGroups":[{"templateId":21,"securityGroupId":20,"nodeCount":1,"group":"worker","type":"CORE","parameters":{},"template":{"cloudPlatform":"AWS","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"standard","instanceType":"m4.xlarge","topologyId":null,"name":"t70a37da5-9f31-4a7c-a354-e80f27e51f5d","id":21,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"AWS","name":"sga8a26f5e-50cc-4a08-9492-de93a477d9d4","id":20,"owner":"b56da66a-92f2-4e30-9da3-127fff51dec5","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":30}],"publicInAccount":false},"id":42,"metadata":[{"privateIp":"10.0.138.212","publicIp":"34.241.93.182","sshPort":22,"instanceId":"i-01b4806a8712409af","ambariServer":false,"discoveryFQDN":"ip-10-0-138-212.eu-west-1.compute.internal","instanceGroup":"worker","instanceStatus":"REGISTERED","instanceType":"CORE"}]},{"templateId":20,"securityGroupId":19,"nodeCount":1,"group":"master","type":"GATEWAY","parameters":{},"template":{"cloudPlatform":"AWS","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"standard","instanceType":"m4.4xlarge","topologyId":null,"name":"t29fbbd75-1a7e-4cab-bda5-de09b0eba95b","id":20,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"AWS","name":"sgb2b54ef9-5b1f-4530-8742-ede5b0f450a1","id":19,"owner":"b56da66a-92f2-4e30-9da3-127fff51dec5","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"443","protocol":"tcp","modifiable":false,"id":28},{"subnet":"0.0.0.0/0","ports":"9443","protocol":"tcp","modifiable":false,"id":29},{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":27}],"publicInAccount":false},"id":41,"metadata":[{"privateIp":"10.0.87.230","publicIp":"34.252.68.7","sshPort":22,"instanceId":"i-0d1ce2b072a185370","ambariServer":true,"discoveryFQDN":"ip-10-0-87-230.eu-west-1.compute.internal","instanceGroup":"master","instanceStatus":"REGISTERED","instanceType":"GATEWAY_PRIMARY"}]},{"templateId":22,"securityGroupId":21,"nodeCount":0,"group":"compute","type":"CORE","parameters":{},"template":{"cloudPlatform":"AWS","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"standard","instanceType":"m4.xlarge","topologyId":null,"name":"t7a3e86d0-5bf5-4d0a-a7da-ad429a2e495f","id":22,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"AWS","name":"sg3422a4f2-3d80-471b-8172-021efb390184","id":21,"owner":"b56da66a-92f2-4e30-9da3-127fff51dec5","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":31}],"publicInAccount":false},"id":43,"metadata":[]}],"failurePolicy":null,"orchestrator":{"parameters":{},"apiEndpoint":"34.252.68.7:9443","type":"SALT"},"created":1511441296551,"gatewayPort":9443,"image":{"imageName":"ami-46429e3f"},"cloudbreakDetails":{"version":"2.1.0-rc.8"},"flexSubscription":null,"stackAuthentication":{"publicKey":null,"publicKeyId":"seq-master","loginUserName":"cloudbreak"},"nodeCount":2,"hardwareInfos":[],"cloudbreakEvents":[],"cloudbreakUsages":[],"cloudPlatform":"AWS","public":false}; 
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    switch(params.name.value){
      case 'az404':
        res.statusCode=404;
        res.end(JSON.stringify({"message":"Stack 'az404' not found"}));
        break;
      default:
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    }
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
  debug('horihorihoo %s', args);
  examples['application/json'] = [{"name":"aaaaa","availabilityZone":"eu-west-1a","region":"eu-west-1","platformVariant":"AWS","credentialId":1,"onFailureAction":"DO_NOTHING","networkId":9,"ambariVersion":"2.5.1.0","hdpVersion":"2.6","parameters":{},"customDomain":null,"customHostname":null,"clusterNameAsSubdomain":false,"hostgroupNameAsHostname":false,"applicationTags":{},"userDefinedTags":{},"defaultTags":{},"id":10,"owner":"b56da66a-92f2-4e30-9da3-127fff51dec5","account":"seq1234567","status":"CREATE_IN_PROGRESS","cluster":{"id":10,"name":"aaaaa","status":"REQUESTED","hoursUp":0,"minutesUp":0,"cluster":null,"blueprintId":10,"blueprint":{"ambariBlueprint":"eyJCbHVlcHJpbnRzIjp7ImJsdWVwcmludF9uYW1lIjoiaGRwMjYtZWR3LWFuYWx5dGljcyIsInN0YWNrX25hbWUiOiJIRFAiLCJzdGFja192ZXJzaW9uIjoiMi42In0sInNldHRpbmdzIjpbeyJyZWNvdmVyeV9zZXR0aW5ncyI6W119LHsic2VydmljZV9zZXR0aW5ncyI6W3sibmFtZSI6IkhJVkUiLCJjcmVkZW50aWFsX3N0b3JlX2VuYWJsZWQiOiJmYWxzZSJ9XX0seyJjb21wb25lbnRfc2V0dGluZ3MiOltdfV0sImNvbmZpZ3VyYXRpb25zIjpbeyJoaXZlLWludGVyYWN0aXZlLWVudiI6eyJlbmFibGVfaGl2ZV9pbnRlcmFjdGl2ZSI6InRydWUifX0seyJjb3JlLXNpdGUiOnsiZnMudHJhc2guaW50ZXJ2YWwiOiI0MzIwIn19LHsiaGRmcy1zaXRlIjp7ImRmcy5uYW1lbm9kZS5zYWZlbW9kZS50aHJlc2hvbGQtcGN0IjoiMC45OSJ9fSx7ImhpdmUtaW50ZXJhY3RpdmUtc2l0ZSI6eyJoaXZlLmV4ZWMub3JjLnNwbGl0LnN0cmF0ZWd5IjoiQkkiLCJoaXZlLnN0YXRzLmZldGNoLmJpdHZlY3RvciI6InRydWUiLCJoaXZlLm1ldGFzdG9yZS5yYXdzdG9yZS5pbXBsIjoib3JnLmFwYWNoZS5oYWRvb3AuaGl2ZS5tZXRhc3RvcmUuY2FjaGUuQ2FjaGVkU3RvcmUifX0seyJoaXZlLXNpdGUiOnsiaGl2ZS5leGVjLmNvbXByZXNzLm91dHB1dCI6InRydWUiLCJoaXZlLm1lcmdlLm1hcGZpbGVzIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50ZXouaW5pdGlhbGl6ZS5kZWZhdWx0LnNlc3Npb25zIjoidHJ1ZSIsImhpdmUuc2VydmVyMi50cmFuc3BvcnQubW9kZSI6Imh0dHAifX0seyJtYXByZWQtc2l0ZSI6eyJtYXByZWR1Y2Uuam9iLnJlZHVjZS5zbG93c3RhcnQuY29tcGxldGVkbWFwcyI6IjAuNyIsIm1hcHJlZHVjZS5tYXAub3V0cHV0LmNvbXByZXNzIjoidHJ1ZSIsIm1hcHJlZHVjZS5vdXRwdXQuZmlsZW91dHB1dGZvcm1hdC5jb21wcmVzcyI6InRydWUifX0seyJ0ZXotc2l0ZSI6eyJ0ZXoucnVudGltZS5zaHVmZmxlLnBhcmFsbGVsLmNvcGllcyI6IjQiLCJ0ZXoucnVudGltZS5lbmFibGUuZmluYWwtbWVyZ2UuaW4ub3V0cHV0IjoiZmFsc2UiLCJ0ZXouYW0uYW0tcm0uaGVhcnRiZWF0LmludGVydmFsLW1zLm1heCI6IjIwMDAifX0seyJ5YXJuLXNpdGUiOnsieWFybi5hY2wuZW5hYmxlIjoidHJ1ZSJ9fV0sImhvc3RfZ3JvdXBzIjpbeyJuYW1lIjoibWFzdGVyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiQVBQX1RJTUVMSU5FX1NFUlZFUiJ9LHsibmFtZSI6IkhDQVQifSx7Im5hbWUiOiJIREZTX0NMSUVOVCJ9LHsibmFtZSI6IkhJU1RPUllTRVJWRVIifSx7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IkhJVkVfTUVUQVNUT1JFIn0seyJuYW1lIjoiSElWRV9TRVJWRVIifSx7Im5hbWUiOiJISVZFX1NFUlZFUl9JTlRFUkFDVElWRSJ9LHsibmFtZSI6IkpPVVJOQUxOT0RFIn0seyJuYW1lIjoiTElWWV9TRVJWRVIifSx7Im5hbWUiOiJNQVBSRURVQ0UyX0NMSUVOVCJ9LHsibmFtZSI6Ik1FVFJJQ1NfQ09MTEVDVE9SIn0seyJuYW1lIjoiTUVUUklDU19NT05JVE9SIn0seyJuYW1lIjoiTVlTUUxfU0VSVkVSIn0seyJuYW1lIjoiTkFNRU5PREUifSx7Im5hbWUiOiJQSUcifSx7Im5hbWUiOiJSRVNPVVJDRU1BTkFHRVIifSx7Im5hbWUiOiJTRUNPTkRBUllfTkFNRU5PREUifSx7Im5hbWUiOiJTTElERVIifSx7Im5hbWUiOiJTUEFSS19DTElFTlQifSx7Im5hbWUiOiJTUEFSS19KT0JISVNUT1JZU0VSVkVSIn0seyJuYW1lIjoiVEVaX0NMSUVOVCJ9LHsibmFtZSI6IldFQkhDQVRfU0VSVkVSIn0seyJuYW1lIjoiWUFSTl9DTElFTlQifSx7Im5hbWUiOiJaRVBQRUxJTl9NQVNURVIifSx7Im5hbWUiOiJaT09LRUVQRVJfQ0xJRU5UIn0seyJuYW1lIjoiWk9PS0VFUEVSX1NFUlZFUiJ9XSwiY2FyZGluYWxpdHkiOiIxIn0seyJuYW1lIjoid29ya2VyIiwiY29uZmlndXJhdGlvbnMiOltdLCJjb21wb25lbnRzIjpbeyJuYW1lIjoiSElWRV9DTElFTlQifSx7Im5hbWUiOiJURVpfQ0xJRU5UIn0seyJuYW1lIjoiU1BBUktfQ0xJRU5UIn0seyJuYW1lIjoiREFUQU5PREUifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9LHsibmFtZSI6ImNvbXB1dGUiLCJjb25maWd1cmF0aW9ucyI6W10sImNvbXBvbmVudHMiOlt7Im5hbWUiOiJISVZFX0NMSUVOVCJ9LHsibmFtZSI6IlRFWl9DTElFTlQifSx7Im5hbWUiOiJTUEFSS19DTElFTlQifSx7Im5hbWUiOiJNRVRSSUNTX01PTklUT1IifSx7Im5hbWUiOiJOT0RFTUFOQUdFUiJ9XSwiY2FyZGluYWxpdHkiOiIxKyJ9XX0=","description":"EDW-Analytics: Apache Hive 2 LLAP, Apache Zeppelin 0.7.0","inputs":[],"name":"EDW-Analytics: Apache Hive 2 LLAP, Apache Zeppelin 0.7.0","id":10,"blueprintName":"hdp26-edw-analytics","hostGroupCount":3,"status":"DEFAULT","public":true},"description":"","statusReason":null,"ambariServerIp":null,"ambariServerUrl":null,"userName":"admin","secure":false,"hostGroups":[{"name":"compute","constraint":{"instanceGroupName":"compute","constraintTemplateName":null,"hostCount":0},"recipeIds":[],"recoveryMode":"AUTO","id":42,"recipes":[],"metadata":[]},{"name":"worker","constraint":{"instanceGroupName":"worker","constraintTemplateName":null,"hostCount":1},"recipeIds":[],"recoveryMode":"AUTO","id":41,"recipes":[],"metadata":[]},{"name":"master","constraint":{"instanceGroupName":"master","constraintTemplateName":null,"hostCount":1},"recipeIds":[],"recoveryMode":"AUTO","id":43,"recipes":[],"metadata":[]}],"rdsConfigIds":[],"rdsConfigs":[],"serviceEndPoints":{},"configStrategy":"ALWAYS_APPLY_DONT_OVERRIDE_CUSTOM_VALUES","ldapConfigId":null,"ldapConfig":null,"attributes":{},"blueprintInputs":[],"blueprintCustomProperties":null,"executorType":"DEFAULT","gateway":{"enableGateway":false,"path":"aaaaa","topologyName":"services","exposedServices":[],"ssoProvider":null,"signCert":"-----BEGIN CERTIFICATE-----\nMIICnTCCAYWgAwIBAgIBATANBgkqhkiG9w0BAQsFADASMRAwDgYDVQQDDAdzaWdu\naW5nMB4XDTE3MTEyMzEyNDgyMFoXDTI3MTEyMzEyNDgyMFowEjEQMA4GA1UEAxMH\nc2lnbmluZzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMAxZf/WrPjs\n8yCYrnsGAdjOFOLRm1ObKhMX1u/+mco9Zq2rGQCJLeB9azauI8j3tA9zUOQG1eDF\nfY//wpd+tAv9jU2pA1YSpsfhrhyJyMUDqHAbCZav6WLDuHOvjm7krz4q5z5Zx60r\nWtGFtQ4ArAEOy0sHC6jIoMIws/EhHcr8lF9LYTN5zA69v5dV4ySxayqkvfDBMoAe\nN1e1wVimokDA5sJvWYZC4j3rdjvYqyvQZIc3+qZtyLVK0oFkI+97Veg+kOI2ohhK\nTQSOVi8UEh0kxGcefxCouTXDjBV9yAM31AMGf/jqlHJ5jpiB+Lnd8nebG5H4iaZx\nZQLDKYXLlBcCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEACdjlvQU6/2fRzCPPhSfU\npDYlNOYKX72dGsCLpxUiTM2eRXN8aLhKUu3XR3cRNclpQkq90+oXDULBGda5fHeA\n0ahrRc8meWBCgx7ufuNKojbAnmGeNH1iwV2uvbgslI/AuA5SRvYW0KSb/7nvzUqx\nKY+KFaqDPbugWqbm65pYMYG/+ziEzyNJEdhRMcPt5WtjWf5ckqCfR1VpSNOskTmT\nDiX4R121A8JvgrugalRM4PfoNhy6sJ7HYA+yMtgigKBho2d0uBq1h8Jwz0VzQXze\n4z83BOKwciLhFhgOyynIEsyDuNsE40gyODjMwAB8CT9ObvNdKOEftTjbGQ24YBel\nBQ==\n-----END CERTIFICATE-----\n","signPub":"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwDFl/9as+OzzIJiuewYB\n2M4U4tGbU5sqExfW7/6Zyj1mrasZAIkt4H1rNq4jyPe0D3NQ5AbV4MV9j//Cl360\nC/2NTakDVhKmx+GuHInIxQOocBsJlq/pYsO4c6+ObuSvPirnPlnHrSta0YW1DgCs\nAQ7LSwcLqMigwjCz8SEdyvyUX0thM3nMDr2/l1XjJLFrKqS98MEygB43V7XBWKai\nQMDmwm9ZhkLiPet2O9irK9Bkhzf6pm3ItUrSgWQj73tV6D6Q4jaiGEpNBI5WLxQS\nHSTEZx5/EKi5NcOMFX3IAzfUAwZ/+OqUcnmOmIH4ud3yd5sbkfiJpnFlAsMphcuU\nFwIDAQAB\n-----END PUBLIC KEY-----\n","gatewayType":"INDIVIDUAL","ssoType":"NONE"},"customContainers":{"definitions":{}},"ambariStackDetails":null,"ambariRepoDetailsJson":{"version":"2.5.1.0","baseUrl":"http://public-repo-1.hortonworks.com/ambari/centos6/2.x/updates/2.5.1.0","gpgKeyUrl":"http://public-repo-1.hortonworks.com/ambari/centos6/RPM-GPG-KEY/RPM-GPG-KEY-Jenkins"},"ambariDatabaseDetails":{"vendor":null,"name":"postgres","host":"localhost","port":5432,"userName":null,"password":null},"customQueue":"default"},"statusReason":"Creating infrastructure","credential":{"name":"aws-aws","cloudPlatform":"AWS","parameters":{"smartSenseId":"null","selector":"key-based"},"description":"","topologyId":null,"id":1,"public":false},"network":{"description":null,"subnetCIDR":"10.0.0.0/16","cloudPlatform":"AWS","parameters":{"publicNetId":null,"routerId":null,"internetGatewayId":null,"networkId":null,"vpcId":null},"topologyId":null,"name":"nb51cc27e-c2d8-4719-9130-a537e766e792","id":9,"publicInAccount":false},"instanceGroups":[{"templateId":21,"securityGroupId":20,"nodeCount":1,"group":"worker","type":"CORE","parameters":{},"template":{"cloudPlatform":"AWS","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"standard","instanceType":"m4.xlarge","topologyId":null,"name":"t70a37da5-9f31-4a7c-a354-e80f27e51f5d","id":21,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"AWS","name":"sga8a26f5e-50cc-4a08-9492-de93a477d9d4","id":20,"owner":"b56da66a-92f2-4e30-9da3-127fff51dec5","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":30}],"publicInAccount":false},"id":42,"metadata":[{"privateIp":null,"publicIp":null,"sshPort":null,"instanceId":null,"ambariServer":null,"discoveryFQDN":null,"instanceGroup":"worker","instanceStatus":"REQUESTED","instanceType":null}]},{"templateId":22,"securityGroupId":21,"nodeCount":0,"group":"compute","type":"CORE","parameters":{},"template":{"cloudPlatform":"AWS","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"standard","instanceType":"m4.xlarge","topologyId":null,"name":"t7a3e86d0-5bf5-4d0a-a7da-ad429a2e495f","id":22,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"AWS","name":"sg3422a4f2-3d80-471b-8172-021efb390184","id":21,"owner":"b56da66a-92f2-4e30-9da3-127fff51dec5","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":31}],"publicInAccount":false},"id":43,"metadata":[]},{"templateId":20,"securityGroupId":19,"nodeCount":1,"group":"master","type":"GATEWAY","parameters":{},"template":{"cloudPlatform":"AWS","parameters":{"sshLocation":"0.0.0.0/0","encrypted":false},"description":"","volumeType":"standard","instanceType":"m4.4xlarge","topologyId":null,"name":"t29fbbd75-1a7e-4cab-bda5-de09b0eba95b","id":20,"volumeCount":1,"volumeSize":100,"public":false},"securityGroup":{"description":null,"securityGroupId":null,"cloudPlatform":"AWS","name":"sgb2b54ef9-5b1f-4530-8742-ede5b0f450a1","id":19,"owner":"b56da66a-92f2-4e30-9da3-127fff51dec5","account":"seq1234567","securityRules":[{"subnet":"0.0.0.0/0","ports":"443","protocol":"tcp","modifiable":false,"id":28},{"subnet":"0.0.0.0/0","ports":"22","protocol":"tcp","modifiable":false,"id":27},{"subnet":"0.0.0.0/0","ports":"9443","protocol":"tcp","modifiable":false,"id":29}],"publicInAccount":false},"id":41,"metadata":[{"privateIp":null,"publicIp":null,"sshPort":null,"instanceId":null,"ambariServer":null,"discoveryFQDN":null,"instanceGroup":"master","instanceStatus":"REQUESTED","instanceType":null}]}],"failurePolicy":null,"orchestrator":{"parameters":{},"apiEndpoint":null,"type":"SALT"},"created":1511441296551,"gatewayPort":9443,"image":{"imageName":"ami-46429e3f"},"cloudbreakDetails":{"version":"2.1.0-rc.8"},"flexSubscription":null,"stackAuthentication":{"publicKey":null,"publicKeyId":"seq-master","loginUserName":"cloudbreak"},"nodeCount":2,"hardwareInfos":[],"cloudbreakEvents":[],"cloudbreakUsages":[],"cloudPlatform":"AWS","public":false}];
  /*  [ {
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
} ]; */
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

