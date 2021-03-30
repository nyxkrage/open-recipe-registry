# Open Recipe Registry
This is a collaborative and contribution based recipe site. It uses a similar model to [Wikipedia](https://en.wikipedia.org/) where users can contribute changes to the recipes.  
It will feature a focus on contributers proficency, much like [Quora](https://www.quora.com/). 

# Frontend
The frontend cosists of Svelte with TypeScript and SCSS.

The Svelte frontend was created with the [Official Svelte Template](https://github.com/sveltejs/template) converted to typescript with the included script.
## Building
Building is a easy as making sure `node` and `npm` is installed and running
```
npm run build
```

# Backend
The backend is done in Rust, using the Rocket framework and will be deployed to [Amazon AWS](https://aws.amazon.com/).

The Rocket backend is done using [Rocket](https://rocket.rs/) for handling the webrequests and [Rocket Lamb](https://github.com/nyxiative/rocket-lamb) for converting Lambda requests to Rocket requests.

## Deploying to AWS Lambda
Deployment can be done using AWS CloudFormation using the Serverless Application Model. The required CloudFormation template is already set up in template.yaml.

Requirements:

 * Docker
 * AWS CLI
 * An existing S3 bucket
   
```bash 
# Builds the lambda binary in a Docker container and outputs the packaged zip file
docker-compose run --rm build

S3_BUCKET=my-s3-bucket-name
# Choose any name you like for the CloudFormation stack
STACK_NAME=my-rocket-api

# Uploads the CloudFormation template and zipped binary to S3
aws cloudformation package --template-file template.yaml --output-template-file packaged.yaml --s3-bucket $S3_BUCKET

# Deploys the CloudFormation stack
aws cloudformation deploy --template-file packaged.yaml --capabilities CAPABILITY_IAM --stack-name $STACK_NAME

# Outputs the API Gateway URL that you can use to call your API
aws cloudformation describe-stacks --query "Stacks[0].Outputs" --stack-name $STACK_NAME
```
## Testing Locally
The easiest way of running the application locally is just with cargo run, which will run main.rs. This configures and launches a bog-standard Rocket server, without using Rocket Lamb.

Another way is to use the AWS SAM CLI, which can be used to spin up a fake lambda environment in Docker with a mock API Gateway. While more of a hassle to run, this will also test both the CloudFormation configuration in template.yaml, and the application's integration with Lambda and API Gateway. To run the app using the SAM CLI:
```
docker-compose run --rm build
sam local start-api
```