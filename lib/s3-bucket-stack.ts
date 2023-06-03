import * as cdk from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs';


export class S3BucketStack extends cdk.Stack {
    public readonly bucket: s3.Bucket

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        this.bucket = new s3.Bucket(this, 'data-processing-example', {
            versioned: false,
            bucketName: 'data-processing-example',
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            removalPolicy: cdk.RemovalPolicy.DESTROY
        })
    }
}