echo scripts/deploy_dev.sh

STAGE=dev

OPTION="-s $STAGE -r $AWS_REGION"

serverless project init -p $AWS_PROFILE $OPTION
serverless resources deploy $OPTION
serverless function deploy $OPTION
serverless endpoint deploy $OPTION
