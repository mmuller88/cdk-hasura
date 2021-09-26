const { AwsCdkTypeScriptApp } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.124.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-hasura',

  cdkDependencies: [
    '@aws-cdk/aws-rds',
    '@aws-cdk/aws-ec2',

  ],
  // description: undefined,      /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                 /* Build dependencies for this module. */
  // packageName: undefined,      /* The "name" in package.json. */
  // release: undefined,          /* Add release management to this project. */
});
project.synth();