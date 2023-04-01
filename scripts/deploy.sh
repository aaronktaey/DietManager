#!/bin/bash
BUILD_JAR=$(ls /home/ubuntu/DietManager/build/libs/*.jar)
JAR_NAME=$(basename $BUILD_JAR)

DEPLOY_PATH=/home/ubuntu/DietManager/
cp $BUILD_JAR $DEPLOY_PATH

CURRENT_PID=$(pgrep -f $JAR_NAME)

if [ -z $CURRENT_PID ]
then
else
  echo "> kill -15 $CURRENT_PID"
  kill -15 $CURRENT_PID
  sleep 5
fi

DEPLOY_JAR=$DEPLOY_PATH$JAR_NAME
nohup java -jar $DEPLOY_JAR >> /home/ec2-user/deploy.log 2>/home/ec2-user/action/deploy_err.log &