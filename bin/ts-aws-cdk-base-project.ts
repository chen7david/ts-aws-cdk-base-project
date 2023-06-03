#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { S3BucketStack } from '../lib/s3-bucket-stack';
// import { TsAwsCdkBaseProjectStack } from '../lib/ts-aws-cdk-base-project-stack';

const app = new cdk.App();
// new TsAwsCdkBaseProjectStack(app, 'TsAwsCdkBaseProjectStack', {});
const s3_bucket_stackk = new S3BucketStack(app, 'S3BucketStack')