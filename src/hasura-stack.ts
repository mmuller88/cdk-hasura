import * as rds from '@aws-cdk/aws-rds';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';

export interface HasuraStackProps extends cdk.StackProps {
}

export class HasuraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: HasuraStackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'vpc');

    const hasuraDatabase = new rds.DatabaseInstance(this, 'HasuraDatabase', {
      // instanceIdentifier: props.appName,
      databaseName: 'hasura',
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_13_3,
      }),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.MICRO),
      credentials: rds.Credentials.fromGeneratedSecret('syscdk'),
      storageEncrypted: true,
      allocatedStorage: 20,
      maxAllocatedStorage: 100,
      vpc,
      deletionProtection: false,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}