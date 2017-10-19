'use strict';

exports.deleteConstraint = function(args, res, next) {
  /**
   * delete constraint template by id
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * id Long 
   * no response value expected for this operation
   **/
  res.end();
}

exports.deletePrivateConstraint = function(args, res, next) {
  /**
   * delete private constraint template by name
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * name String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.deletePublicConstraint = function(args, res, next) {
  /**
   * delete public (owned) or private constraint template by name
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * name String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.getConstraint = function(args, res, next) {
  /**
   * retrieve constraint template by id
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * id Long 
   * returns ConstraintTemplateResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "orchestratorType" : "aeiou",
  "disk" : 1.3579000000000001069366817318950779736042022705078125,
  "memory" : 1.3579000000000001069366817318950779736042022705078125,
  "publicInAccount" : true,
  "name" : "aeiou",
  "description" : "aeiou",
  "cpu" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPrivateConstraint = function(args, res, next) {
  /**
   * retrieve a private constraint template by name
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * name String 
   * returns ConstraintTemplateResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "orchestratorType" : "aeiou",
  "disk" : 1.3579000000000001069366817318950779736042022705078125,
  "memory" : 1.3579000000000001069366817318950779736042022705078125,
  "publicInAccount" : true,
  "name" : "aeiou",
  "description" : "aeiou",
  "cpu" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPrivatesConstraint = function(args, res, next) {
  /**
   * retrieve private constraint templates
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "orchestratorType" : "aeiou",
  "disk" : 1.3579000000000001069366817318950779736042022705078125,
  "memory" : 1.3579000000000001069366817318950779736042022705078125,
  "publicInAccount" : true,
  "name" : "aeiou",
  "description" : "aeiou",
  "cpu" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPublicConstraint = function(args, res, next) {
  /**
   * retrieve a public or private (owned) constraint template by name
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * name String 
   * returns ConstraintTemplateResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "orchestratorType" : "aeiou",
  "disk" : 1.3579000000000001069366817318950779736042022705078125,
  "memory" : 1.3579000000000001069366817318950779736042022705078125,
  "publicInAccount" : true,
  "name" : "aeiou",
  "description" : "aeiou",
  "cpu" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPublicsConstraint = function(args, res, next) {
  /**
   * retrieve public and private (owned) constraint templates
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "orchestratorType" : "aeiou",
  "disk" : 1.3579000000000001069366817318950779736042022705078125,
  "memory" : 1.3579000000000001069366817318950779736042022705078125,
  "publicInAccount" : true,
  "name" : "aeiou",
  "description" : "aeiou",
  "cpu" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postPrivateConstraint = function(args, res, next) {
  /**
   * create constraint template as private resource
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * body ConstraintTemplateRequest  (optional)
   * returns ConstraintTemplateResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "orchestratorType" : "aeiou",
  "disk" : 1.3579000000000001069366817318950779736042022705078125,
  "memory" : 1.3579000000000001069366817318950779736042022705078125,
  "publicInAccount" : true,
  "name" : "aeiou",
  "description" : "aeiou",
  "cpu" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.postPublicConstraint = function(args, res, next) {
  /**
   * create constraint template as public resource
   * A constraint template tells Cloudbreak the resource constraints (cpu, memory, disk) of the Ambari containers that will be deployed to the cluster. A constraint template must be created onenvironments where there is no one-to-one mapping between containers and nodes, like Mesos.
   *
   * body ConstraintTemplateRequest  (optional)
   * returns ConstraintTemplateResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "orchestratorType" : "aeiou",
  "disk" : 1.3579000000000001069366817318950779736042022705078125,
  "memory" : 1.3579000000000001069366817318950779736042022705078125,
  "publicInAccount" : true,
  "name" : "aeiou",
  "description" : "aeiou",
  "cpu" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

