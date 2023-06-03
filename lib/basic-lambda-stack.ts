import * as cdk from 'aws-cdk-lib'
import { aws_lambda as lambda } from 'aws-cdk-lib'
import { Construct } from 'constructs'

export class BasicLambdaStgitack extends cdk.Stack {

    constructor(scope: Construct, id: string, props?: cdk.StageProps){
        super(scope, id, props)

        const functionName = 'basicTestLambda'
        const lambdapath = 'src/lambda/basic-lambda-handler'

        const handler = new lambda.Function(this, functionName, {
            functionName: functionName,
            runtime: lambda.Runtime.NODEJS_16_X,
            code: lambda.Code.fromAsset(lambdapath),
            handler: 'basic-lambda-test.hanlder'
        })
    }
}